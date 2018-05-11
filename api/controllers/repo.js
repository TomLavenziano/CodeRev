const git = require('simple-git');
const path = '../';

exports.getStatus = (req, res) => {
    git(path)
        // .listRemote(['--get-url'], (err, data) => {
        //     if (!err) {
        //         console.log('Remote url for repository at ' + __dirname + ':');
        //         console.log(data);
        //     }
        // });
        .status((err, data) => res.json(data));
};

exports.getCommits = (req, res) => {
    git(path)
        .log((err, data) => res.json(data));
};
