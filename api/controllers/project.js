const Project = require('../models/Project');


exports.getProjectsByUser = (req, res) => {
    console.log('Getting Project...');
    console.log(req.params.owner);
    new Project()
        .where('github_repo_owner', req.params.owner)
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
