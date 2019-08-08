angular.module('MainCtrl', []).controller('MainController', function($scope, $firebaseObject, Song) {

    $scope.allSongs = [];

    // Called once with the initial data and again every time the data changes
    var ref = firebase.database().ref();
    // download the data into a local object
    $scope.songsFromFirebase = $firebaseObject(ref);
    // Remember that this (^) is an asynchronous call, so putting console.log() won't show any data!

    ref.once("value", function(data) {
        $scope.allSongs = data.val().songs;
    });


});