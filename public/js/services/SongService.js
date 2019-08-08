angular.module('SongService', []).factory( 'Song', ['$http', function($http) {

    return {
        // call to get all songs
        get : function() {
            return $http.get('/api/songs');
        },
        getOne : function(id) {
            return $http.get('/api/songs/' + id);
        }

    }

}]);