angular.module('MusicCtrl', []).controller('MusicController', ['$scope', '$firebaseArray', function($scope, $firebaseObject, $firebaseArray, $firebaseAuth, Song) {

    $scope.allSongs = [];

    // Called once with the initial data and again every time the data changes
    var ref = firebase.database().ref();
    // download the data into a local object
    $scope.songsFromFirebase = $firebaseObject(ref);
    // Remember that this (^) is an asynchronous call, so putting console.log() won't show any data!

    ref.once("value", function(data) {
        $scope.allSongs = data.val().songs;
        // We've loaded our songs, now time to process them for the UI!
        getSongs();
    });

    function getSongs() {
        $scope.allGenres = [];
        $scope.allDifficulties = [];

        // Populate filter values (genres, difficulty scale, etc)
        for (var i = 0; i < $scope.allSongs.length; i++) {
            if ($scope.allGenres.indexOf($scope.allSongs[i].genre) < 0) {
                $scope.allGenres.push(
                    {   'genre': $scope.allSongs[i].genre,
                        'ticked': true
                    }
                );
            }

            if ($scope.allDifficulties.indexOf($scope.allSongs[i].songLevel) < 0) {
                $scope.allDifficulties.push(
                    {   'songDifficulty': $scope.allSongs[i].songLevel,
                        'ticked': true
                    }
                );
            }

        }
    }


    $scope.filter = {};

    // GetOptionsFor: Genre
    $scope.getOptionsFor = function (propName) {
        return ($scope.allSongs || []).map(function (song) {
            // Only return genre properties
            if (propName === 'genre')
                return song[propName];
        }).filter(function (song, idx, arr) {
            if (typeof(song) != 'undefined')
                return arr.indexOf(song) === idx;
        });
    };

    // getSkillsFor: Skill Level
    $scope.getSkillsFor = function (propName) {
        return ($scope.allSongs || []).map(function (song) {
            // Only return difficulty properties
            if (propName === 'songLevel' )
                return song[propName];
        }).filter(function (song, idx, arr) {
            if (typeof(song) != 'undefined')
                return arr.indexOf(song) === idx;
        });
    };

    // Final Filter?
    $scope.filterByProperties = function (song) {
        // Use this snippet for matching with AND
        var matchesAND = true;
        for (var prop in $scope.filter) {
            if (noSubFilter($scope.filter[prop])) continue;
            if (!$scope.filter[prop][song[prop]]) {
                matchesAND = false;
                break;
            }
        }
        return matchesAND;
    };

    $scope.orderByProperties = 'name';

    function noSubFilter(subFilterObj) {
        for (var key in subFilterObj) {
            if (subFilterObj[key]) return false;
        }
        return true;
    }
}]);