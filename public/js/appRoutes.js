angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController',
            data: {
                private: false
            }
		})

        .when('/home', {
			templateUrl: 'views/home.html',
			controller: 'MainController',
            data: {
                private: false
            }
		})

		.when('/music', {
			templateUrl: 'views/music.html',
			controller: 'MusicController',
            data: {
                private: false
            }
		})

		.when('/composition/:id', {
			templateUrl: 'views/song.html',
			controller: 'SongController',
            data: {
                private: false
            }
		})

        .when('/cart', {
            templateUrl: 'views/mycart.html',
            controller: 'MyCartController',
            data: {
                private: true
            }
        })

        .when('/checkout', {
            templateUrl: 'views/checkout.html',
            controller: 'CheckoutController',
            data: {
                private: true
            }
        })

        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'MusicController',
            data: {
                private: false
            }
        })

        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'MusicController',
            data: {
                private: false
            }
        })

        .when('/success/:transactionID', {
            templateUrl: 'views/success.html',
            controller: 'MusicController',
            data: {
                private: true
            }
        });

	$locationProvider.html5Mode(true);

}]);