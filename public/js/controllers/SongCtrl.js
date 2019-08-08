angular.module('SongCtrl', []).controller('SongController', function($scope, $routeParams, $firebaseObject, $firebaseArray, $firebaseAuth, Song, ngCart, $sce) {

    $scope.currentSong = [];
    currentID = $routeParams.id;

    // Called once with the initial data and again every time the data changes
    var ref = firebase.database().ref();
    // download the data into a local object
    $scope.songsFromFirebase = $firebaseObject(ref);
    // Remember that this (^) is an asynchronous call, so putting console.log() won't show any data!

    ref.once("value", function(data) {
        // $scope.allSongs = data.val().songs;
        // We've loaded our songs, now time to process them for the UI!
        $scope.allSongs = data.val().songs;
        // $scope.singleSong = $scope.songsFromFirebase
        $scope.currentSong = $scope.allSongs.find(x => x._id === currentID);

        getSingleSong();

    });

    function getSingleSong(currentID) {

        // Song.getOne(currentID).then(function(foundSong) {
            $scope.currentSong.sampleAudio = $sce.trustAsResourceUrl($scope.currentSong.sampleAudio);
            $scope.currentSong.violinPreviewPDF = $sce.trustAsResourceUrl($scope.currentSong.violinPreviewPDF);
            $scope.currentSong.scorePreviewPDF = $sce.trustAsResourceUrl($scope.currentSong.scorePreviewPDF);

            var songsPaypalButton = $scope.currentSong.songsPaypalButton;

            // Configure PayPal express checkout settings
            itemOrderName = 'Arrangement Order: ' + $scope.currentSong.name;
            // $scope.paypalSettings = { paypal: {business: "ntfrueh@gmail.com", item_name: itemOrderName, item_number: currentID , buttonID: songsPaypalButton, currency_code: "USD"}};
        // });
    }
    // getSingleSong(currentID);

    // Function to cancel purchase (empty cart)
    // $scope.removeThisItem = function removeThisItem() {
    //     ngCart.empty();
    // };


    // $scope.$on('$viewContentLoaded', function(){
    //     //Here your view content is fully loaded !!
    //     document.getElementsByClassName("accordion")[0].addEventListener("click", function(){
    //         // (This function is run every time the accordion is clicked)
    //         this.classList.toggle("active");
    //         var panel = this.nextElementSibling;

    //         // If it's expanded, close it; if it's closed, open it
    //         if (panel.style.maxHeight) {
    //             panel.style.maxHeight = null;
    //         } else {
    //             panel.style.maxHeight = panel.scrollHeight + "px";
    //         }}
    //     )}
    // );

})
.filter("trustUrl", ['$sce', function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
    };
}]);