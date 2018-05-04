const simpleGit = require('simple-git');
const path = '../';

exports.getStatus = (req, res) => {
    simpleGit(path)
        // .listRemote(['--get-url'], (err, data) => {
        //     if (!err) {
        //         console.log('Remote url for repository at ' + __dirname + ':');
        //         console.log(data);
        //     }
        // });
        .status((err, data) => res.json(data));
};

exports.getCommits = (req, res) => {
    simpleGit(path)
        .log((err, data) => res.json(data));
};
