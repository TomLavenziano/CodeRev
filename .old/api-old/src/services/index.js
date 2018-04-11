const users = require('./users/users.service.js');
const projects = require('./projects/projects.service.js');
const reviews = require('./reviews/reviews.service.js');
const notes = require('./notes/notes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = app => {
    app.configure(users);
    app.configure(projects);
    app.configure(reviews);
    app.configure(notes);
};
