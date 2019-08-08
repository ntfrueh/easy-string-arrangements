angular.module('MyCartCtrl', []).controller('MyCartController', function($scope, ngCart) {

    initializeCheckoutButton();

    // Get cart contents
    function initializeCheckoutButton() {
        $scope.currentCart = ngCart.getCart();
        $scope.itemNames = [];
        for (var i = 0; i < $scope.currentCart.items.length; i++) {
            $scope.itemNames.push($scope.currentCart.items[i]._name);
        }
        $scope.itemNamesString = $scope.itemNames.join(', ');


        $scope.paypalSettings = { paypal: {business: "NateTheGreat_555-facilitator@yahoo.com", item_name: $scope.itemNamesString, item_number: 10101 , currency_code: "USD"}};
    }


});