const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const compression = require('compression');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
const passport = require('passport');

// Load environment variables from .env file
dotenv.config();

// Controllers
const HomeController = require('./controllers/home');
const UserController = require('./controllers/user');
const ContactController = require('./controllers/contact');
const ProjectController = require('./controllers/project');
const RepoController = require('./controllers/repo');

// Passport OAuth strategies
require('./config/passport');

const app = express();

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(methodOverride('_method'));
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    res.locals.user = req.user ? req.user.toJSON() : null;
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', HomeController.index);

app.get('/contact', ContactController.contactGet);
app.post('/contact', ContactController.contactPost);

app.get('/project/owner/:owner', ProjectController.getProjectsByUser);
app.get('/project/:id', ProjectController.getProjectByID);

app.get('/account', UserController.ensureAuthenticated, UserController.accountGet);
app.put('/account', UserController.ensureAuthenticated, UserController.accountPut);
app.delete('/account', UserController.ensureAuthenticated, UserController.accountDelete);

app.get('/signup', UserController.signupGet);
app.post('/signup', UserController.signupPost);

app.get('/login', UserController.loginGet);
app.post('/login', UserController.loginPost);

app.get('/forgot', UserController.forgotGet);
app.post('/forgot', UserController.forgotPost);

app.get('/reset/:token', UserController.resetGet);
app.post('/reset/:token', UserController.resetPost);

app.get('/logout', UserController.logout);
app.get('/unlink/:provider', UserController.ensureAuthenticated, UserController.unlink);

app.get('/auth/github', passport.authenticate('github'));
// app.get('/auth/github/callback', passport.authenticate('github', { successRedirect: `https://localhost:8080?g_id=${req.user.attributes.github_username}`, failureRedirect: '/login' }));
app.get('/auth/github/callback', passport.authenticate('github'), (req, res) => {
    console.log(req.user.attributes.github_username);
    res.redirect(`https://localhost:8080?g_id=${req.user.attributes.github_username}`);
});

app.get('/repo/status', RepoController.getStatus);
app.get('/repo/commits', RepoController.getCommits);

app.get('/github/repos', UserController.getGitHubRepos);


(() => {
    const envStatus = app.get('env').charAt(0).toUpperCase() + app.get('env').slice(1);
    const HTTPS_OPTIONS = {
        key: fs.readFileSync('ssl/key.pem'),
        cert: fs.readFileSync('ssl/cert.pem')
    };

    // Production error handler
    if (app.get('env') === 'production') {
        app.use((err, req, res, next) => {
            console.error(err.stack);
            res.sendStatus(err.status || 500);
        });
    }


    process.stdout.write('\x1bc'); // Clear console
    console.log('\x1b[48;5;4m\x1b[30m%s\x1b[0m\x1b[38;5;4m%s\x1b[0m\x1b[38;5;4m\x1b[5m%s\x1b[0m',
        ' DONE ',
        ' CodeRev API | ',
        envStatus); // Uses ANSI color codes
    console.log('  API running at:');
    http.createServer(app).listen(process.env.PORT, () => {
        console.log('  - Standard:\thttp://localhost:\x1b[38;5;4m%s\x1b[0m', process.env.PORT);
    });

    https.createServer(HTTPS_OPTIONS, app).listen(process.env.HTTPS_PORT, () => {
        console.log('  - Secure:\thttps://lvh.me:\x1b[38;5;4m%s\x1b[0m', process.env.HTTPS_PORT);
    });
    console.log('\n');
})();

module.exports = app;
