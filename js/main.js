var motherOfCrystal = angular.module('motherOfCrystal', ["ngRoute", "ngAnimate", 'ngTouch', 'ngMessages']);

motherOfCrystal.config(function ($routeProvider, $locationProvider) {
    
   $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix("!");
    
    $routeProvider
        .when("/", {
            redirectTo: "/home",
            controller: "home"
        })
        .when("/home", {
            templateUrl: "fragments/home.html",
            controller: "home"
        })
        .when("/shop", {
            templateUrl: "fragments/shop.html",
            controller: "shop"
        })

        .when("/products/:id", {
            templateUrl: "fragments/products.html",
            controller: "products"
        })
    
          .when("/singleproduct/:id", {
            templateUrl: "fragments/singleproduct.html",
            controller: "singleproduct"
        })

        .when("/lookbook", {
            templateUrl: "fragments/lookbook.html",
            controller: "lookbook"
        })

        .when("/about", {
            templateUrl: "fragments/about.html",
            controller: "about"
        })
     .when("/delivery", {
            templateUrl: "fragments/delivery.html",
            controller: "delivery"
        });

});
