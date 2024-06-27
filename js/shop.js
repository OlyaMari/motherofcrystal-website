motherOfCrystal.controller("shop", function ($scope, $http) {

    $("header nav li a").removeClass("current");
    $("#headerNavShop").addClass("current");



    $scope.collections = window.collections;

});
