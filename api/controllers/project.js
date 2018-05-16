const fs = require('fs-extra');
const path = require('path');
const http = require('request-promise-native');
const git = require('simple-git');
const Project = require('../models/Project');


exports.getProjectsByUser = (req, res) => {
    console.log('Getting Project...');
    console.log(req.params.owner);
    new Project()
        .where('github_owner', req.params.owner)
        .fetchAll()
        .then(c => c ? res.json(c) : res.status(404).send(`No Projects found.`));
};

exports.getProjectsByUserID = (req, res) => {
    console.log('Getting Project...');
    console.log(req.params.owner);
    new Project()
        .where('github_owner_id', req.params.owner)
        .fetchAll()
        .then(c => c ? res.json(c) : res.status(404).send(`No Projects found.`));
};

exports.getProjectByID = (req, res) => {
    console.log('Getting Project...');
    console.log(req.params.id);
    new Project()
        .where('id', req.params.id)
        .fetch()
        .then(c => c ? res.json(c) : res.status(404).send(`No Projects found.`));
};

exports.getCodeRevProjects = (req, res) => {
    if (!req.user) {
        return res.status(401).json({ status: 401, message: 'User not authenticated' });
    }
    console.log(`Getting Project for user ${req.user.attributes.username}...`);
    new Project()
        .where('github_owner_id', req.user.attributes.id)
        .fetchAll()
        .then(c => c ? res.json(c) : res.status(404).send(`No Projects found.`));
};

exports.getGitHubRepos = (req, res) => {
    if (!req.user) {
        return res.status(401).json({ status: 401, message: 'User not authenticated' });
    }
    console.log('Getting repos...');
    const repoUrl = req.user.attributes.repos_url;
    const options = {
        uri: repoUrl,
        json: true,
        headers: {
            'User-Agent': 'Request-Promise'
        }
    };
    http(options).then(repos => res.json(repos));
};

exports.importProjectFromGitHub = (req, res) => {
    console.info('Importing project from GitHub...');
    const repo = req.body;
    const cloneUrl = repo.clone_url;
    const upstreamPath = path.join(process.env.REPOS_PATH, repo.owner.login, repo.name);
    const userPath = path.join(process.env.REPOS_PATH, repo.owner.login);
    const project = {
        id: repo.id,
        name: repo.name,
        github_fullname: repo.full_name,
        github_id: repo.id,
        github_owner: repo.owner.login,
        github_owner_id: repo.owner.id,
        github_upstream: repo.clone_url,
        github_json: JSON.stringify(repo),
        coderev_upstream: upstreamPath
    };
    // console.info('Project to be stored:');
    // console.log(project);


    new Project({ id: repo.id })
        .upsert(project)
        .then(model => {
            console.info(`Project ${repo.name} added to the database successfully`);
            initGitRepo(userPath, upstreamPath, cloneUrl)
                .then(status => {
                    console.log(status);
                    res.json({ id: model.id, upstreamPath, status });
                })
                .catch(console.error);
        });
};

exports.getCommits = (req, res) => {
    console.info('Getting commits...');
    getProjectRepoPath(req.params.id).then(path => {
        console.info(path);
        git(path).log((err, data) => res.json(data));
    });
};

exports.getCurrentDiff = (req, res) => {
    console.log('Getting diff...');
    const pID = req.params.id;
    new Project({ id: pID })
        .fetch()
        .then(c => {
            git(c.coderev_upstream).diff((err, diff) => {
                console.info('Diff');
                console.log(diff);
                res.json({ diff: diff });
            });
        });
};

exports.getDiffByHash = (req, res) => {
    const id = req.params.id;
    const hash = req.params.hash;

    getProjectRepoPath(id).then(path => {
        git(path).diff();
    });
};

exports.getHeadCommitFiles = (req, res) => {
    const id = req.params.id;
    // const hash = req.params.hash;

    getProjectRepoPath(id).then(path => {
        console.info('PATHHEAD: ' + path);
        // git(path).show((err, data) => {
        //     res.json(data);
        // });
        git(path).raw([
            'show',
            // 'HEAD^',
            'HEAD'
        ], (err, data) => {
            console.info('Data returned');
            console.info(data);
            res.json(data);
        });
    });
};

// TODO: GET/POST Reviews

function getProjectRepoPath(projectID) {
    console.log('ID recieved: ' + projectID);
    return new Promise((resolve, reject) => {
        new Project({ id: projectID })
            .fetch()
            .then(c => resolve(c.attributes.coderev_upstream))
            .catch(reject);
    });
}

const isGitRepo = repo => fs.pathExists(path.join(repo, '.git'));

function initGitRepo(userPath, repoPath, cloneUrl) {
    return new Promise((resolve, reject) => {
        fs.ensureDir(userPath)
            .then(() => {
                console.info(`User directory ${userPath} created `);
                isGitRepo(repoPath)
                    .then(isRepo => {
                        if (isRepo) {
                            console.info('Pulling from upstream repo...');
                            git(repoPath).pull((err, data) => {
                                console.log(data || err);
                                resolve({ status: 'pulled', data });
                            });
                        } else {
                            console.log('Cloning GitHub repo...');
                            git(userPath).clone(cloneUrl);
                            resolve({ status: 'cloned', data: { cloneUrl }});
                        }
                    });
            })
            .catch(reject);
    });
}
