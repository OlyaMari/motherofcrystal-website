motherOfCrystal.controller("products", function ($scope, $http, $routeParams, $location, $anchorScroll, $window) {

    $("header nav li a").removeClass("current");


    $scope.collections = window.collections;

    for (var i = 0; i < $scope.collections.length; i++) {
        if ($scope.collections[i].id == $routeParams.id) {
            $scope.selectedCollection = $scope.collections[i];
            break;
        }
    }

    switch ($routeParams.id) {
        case "101":
            $("#headerNavNew").addClass("current");
            break;
        case "102":
            $("#headerNavSales").addClass("current");
            break;
        default:
            $("#headerNavShop").addClass("current");
    }





    $scope.products = window.products;


    $scope.filterProducts = function (item) {
        if (item.collectionId == $routeParams.id) {
            return true;
        } else if ($routeParams.id == 101 && item.new) {
            return true;
        } else if ($routeParams.id == 102 && item.sale) {
            return true;
        } else {
            return false;
        }

    };

    //    $scope.gotoTop = function () {
    //        // set the location.hash to the id of
    //        // the element you wish to scroll to.
    //        $location.hash('collections-page');
    //
    //        // call $anchorScroll()
    //        $anchorScroll();
    //    };
    //
    //
    //    $scope.gotoTop();

    $scope.gotoTop = function () {

        $anchorScroll('main-content');
    };

    $scope.gotoTop();

    $scope.$on('$viewContentLoaded', function (event) {
        $window.ga('send', {
            hitType: 'pageview',
            page: $location.url()
        });
        //        console.log($location.url());
    });




});
