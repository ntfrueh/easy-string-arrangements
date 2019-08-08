// grab the nerd model we just created
var Song = require('./models/Song');
var mongoose = require('mongoose');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // Get all songs route
    app.get('/api/songs', function(req, res) {
        // use mongoose to get all songs in the database
        Song.find(function(err, songs) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err) {
                res.send(err);
                return;
            }
            res.json(songs); // return all nerds in JSON format
        });
    });

    // Get single song route
    app.get('/api/songs/:id', function(req, res) {
        // use mongoose to get a single song from the database
        Song.findById(req.params.id, function(err, song) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err) {
                res.send(err);
                return;
            }
            res.json(song); // return all nerds in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};