motherOfCrystal.controller("singleproduct", function ($scope, $http, $routeParams, $filter, $location, $anchorScroll, $timeout, $window, $rootScope) {

    $("header nav li a").removeClass("current");
    $("#headerNavShop").addClass("current");

    $scope.products = window.products;

    $scope.singleproduct = $filter('filter')($scope.products, {
        id: Number($routeParams.id)
    }, true)[0];

    $scope.prodCollection = $filter('filter')(window.collections, {
        id: $scope.singleproduct.collectionId
    }, true)[0];


    $scope.largePic = $scope.singleproduct.detailPics[0];

    $scope.changePic = function (picture) {
        $scope.largePic = picture;
    };

    $scope.myModal = false;

    $scope.openModal = function () {
        $scope.custName_validFlag = true;
        $scope.custPhone_validFlag = true;
        $scope.myModal = true;

    };

    $scope.closeModal = function () {
        $scope.myModal = false;
    };

    $scope.isRelated = function () {
        return function (item) {

            if (item.id == $scope.singleproduct.id) {
                return false;
            }

            for (var i = 0; i < $scope.singleproduct.tags.length; i++) {
                var singleproductTag = $scope.singleproduct.tags[i];

                for (var j = 0; j < item.tags.length; j++) {
                    var itemTag = item.tags[j];

                    if (singleproductTag == itemTag) {
                        return true;
                    }
                }
            }
            return false;
        };
    };



    //    $scope.gotoTop = function () {
    //        // set the location.hash to the id of
    //        // the element you wish to scroll to.
    //        $location.hash('main-content');
    //
    //        // call $anchorScroll()
    //        $anchorScroll();
    //    };

    $scope.gotoTop = function () {

        $anchorScroll('main-content');
    };

    $scope.gotoTop();


    $scope.hasCharacteristic = (typeof ($scope.singleproduct.characteristic) == "object");

    if ($scope.hasCharacteristic) {
        $scope.characteristicName = $scope.singleproduct.characteristic.name;
        $scope.selectedCharacteristic = $scope.singleproduct.characteristic.values[0];
    } else {
        $scope.characteristicName = '';
        $scope.selectedCharacteristic = '';
    }

    $scope.submitForm = function ($this) {
        var formValid = true;

        if ($this.custForm.custName.$error.required) {
            $scope.custName_validFlag = false;
            formValid = false;
        } else {
            $scope.custName_validFlag = true;
        }
        if ($this.custForm.custPhone.$error.required) {
            $scope.custPhone_validFlag = false;
            formValid = false;
        } else {
            $scope.custPhone_validFlag = true;
        }

        if (!formValid) {
            return false;
        } else {

            $http({
                method: 'POST',
                url: 'https://n069898qic.execute-api.eu-west-1.amazonaws.com/live/motherofcrystal/order',
                data: {
                    custName: $scope.custName,
                    custPhone: $scope.custPhone,
                    productId: $scope.singleproduct.id,
                    productName: $scope.singleproduct.name,
                    charName: $scope.characteristicName,
                    charValue: $scope.selectedCharacteristic
                }
            }).then(function successCallback(response) {
                alert("Дякуємо! Ми зв'яжемося з Вами протягом 1-го робочого дня.")
            }, function errorCallback(response) {
                alert("Помилка. Будь ласка, напишіть нам у Direct на Instagram.");
            });
        }
        $scope.closeModal();
    };
    
//    $rootScope.$on('$stateChangeSuccess', function (event) {
//        $window.ga('send', 'pageview', $location.path());
//    });
    

        $scope.$on('$viewContentLoaded', function (event) {
            $window.ga('send', 'pageview', {
                page: $location.url()
            });
    //        console.log($location.url());
        });

});
