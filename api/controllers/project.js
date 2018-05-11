// const fs = require('fs-extra');
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
    console.log(`Getting Project for user ${req.user.attributes.username}...`);
    new Project()
        .where('github_owner_id', req.user.attributes.id)
        .fetchAll()
        .then(c => c ? res.json(c) : res.status(404).send(`No Projects found.`));
};

exports.getGitHubRepos = (req, res) => {
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
    console.info('Importing from GitHub...');
    const repo = req.body;
    const cloneUrl = repo.clone_url;
    const upstreamPath = path.join(process.env.REPOS_PATH, repo.owner.login, repo.name);
    const repoPath = path.join(process.env.REPOS_PATH, repo.owner.login);
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
    console.info('Project to be stored:');
    console.log(project);

    new Project(project)
        .save(null, { method: 'insert' })
        .then(model => {
            console.info('Model Retrieved: ' + !!model);
            console.info('CodeRev project succesfully created');
            git(repoPath).clone(cloneUrl, () => {
                console.info('GitHub repo successfully cloned');
            });
            res.json({ id: model.id, repoPath: upstreamPath });
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
            git(c.coderev_upstream).diff(diff => {
                res.json({ diff: diff });
            });
        });
};


function getProjectRepoPath(projectID) {
    console.log('ID recieved: ' + projectID);
    return new Promise((resolve, reject) => {
        new Project({ id: projectID })
            .fetch()
            .then(c => resolve(c.attributes.coderev_upstream))
            .catch(reject);
    });
}
