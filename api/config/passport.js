const fs = require('fs-extra');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GithubStrategy = require('passport-github2').Strategy;

const User = require('../models/User');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    new User({ id: id }).fetch().then(function(user) {
        done(null, user);
    });
});

// Sign in with Email and Password
passport.use(new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
    new User({ email: email })
        .fetch()
        .then(function(user) {
            if (!user) {
                return done(null, false, { msg: `The email address ${email} is not associated with any account. Double-check your email address and try again.` });
            }
            user.comparePassword(password, (err, isMatch) => {
                if (err) {
                    return Promise.reject(err);
                }
                return isMatch ? done(null, user) : done(null, false, { msg: 'Invalid email or password' });
            });
        });
}));

// Sign in with GitHub
passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
}, function(req, accessToken, refreshToken, profile, done) {
    console.info('GitHub Profile:');
    console.log(profile);
    if (req.user) {
        console.log('NOTE: req.user exists');
        new User({ id: profile.id })
            .fetch()
            .then(function(user) {
                if (user) {
                    req.flash('error', { msg: 'There is already an existing account linked with GitHub that belongs to you.' });
                    return done(null);
                }
                new User({ id: req.user.id })
                    .fetch()
                    .then(function(user) {
                        user.set('id', profile.id);
                        user.set('name', user.get('name') || profile.displayName);
                        user.set('picture', user.get('picture') || profile.avatar_url);
                        user.save(user.changed, { patch: true }).then(function() {
                            req.flash('success', { msg: 'Your GitHub account is now linked.' });
                            done(null, user);
                        });
                    });
            });
    } else {
        console.log('NOTE: req.user does not exist');
        new User({ id: profile.id })
            .fetch()
            .then(user => {
                fs.ensureDir(path.join(process.env.REPOS_PATH, profile.username));
                user.set('name', profile.displayName);
                user.set('email', profile.emails[0].value);
                user.set('location', profile._json.location);
                user.set('picture', profile._json.avatar_url);
                user.set('repos_url', profile._json.repos_url);
                user.set('github_username', profile._json.login);
                user.set('github_json', profile);
                user.save()
                    .then(user => done(null, user));
            });
    }
}));
