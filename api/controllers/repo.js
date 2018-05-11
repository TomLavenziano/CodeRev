const git = require('simple-git');
const path = '../';

exports.getStatus = (req, res) => {
    git(path)
        .status((err, data) => res.json(data));
};

exports.getCommits = (req, res) => {
    git(path)
        .log((err, data) => res.json(data));
};
