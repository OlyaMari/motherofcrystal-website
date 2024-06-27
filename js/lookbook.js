motherOfCrystal.controller("lookbook", function ($scope, $http, $interval) {

        $("header nav li a").removeClass("current");
        $("#headerNavLookbook").addClass("current");

        $scope.slides = [
            {
                horizontal: 'images/home-slider/whitedunes.jpg',
                vertical: 'images/home-slider/whitedunes-sm.jpg'
    },
            {
                horizontal: 'images/home-slider/larimar.jpg',
                vertical: 'images/home-slider/larimar-sm.jpg'
    },
            {
                horizontal: 'images/home-slider/jadeit.jpg',
                vertical: 'images/home-slider/jadeit-sm.jpg'
    },
            {
                horizontal: 'images/home-slider/ring-labrador.jpg',
                vertical: 'images/home-slider/ring-labrador-sm.jpg'
            },
            {
                horizontal: 'images/home-slider/3.jpg',
                vertical: 'images/home-slider/3-sm.jpg'
    },
            {
                horizontal: 'images/home-slider/larimar&apatite.jpg',
                vertical: 'images/home-slider/larimar&apatite-sm.jpg'
    },

            {
                horizontal: 'images/home-slider/tanzanite&pearl.jpg',
                vertical: 'images/home-slider/tanzanite&pearl-sm.jpg'
            },
            {
                horizontal: 'images/home-slider/ring-moon.jpg',
                vertical: 'images/home-slider/ring-moon-sm.jpg'
    },
            {
                horizontal: 'images/home-slider/1.jpg',
                vertical: 'images/home-slider/1-sm.jpg'
    },
            {
                horizontal: 'images/home-slider/kyanite.jpg',
                vertical: 'images/home-slider/kyanite-sm.jpg'
    },
            {
                horizontal: 'images/home-slider/2.jpg',
                vertical: 'images/home-slider/2-sm.jpg'
    },
            {
                horizontal: 'images/home-slider/pack.jpg',
                vertical: 'images/home-slider/pack-sm.jpg'
    }

        ];


        $scope.detectOrientation = function () {
            if (window.innerWidth > window.innerHeight) {
                $scope.orientation = "horizontal";
            } else {
                $scope.orientation = "vertical";
            }
        }

        $scope.detectOrientation();
        window.onresize = function () {
            $scope.detectOrientation();
            $scope.$apply();
        };

        $scope.getSlideImage = function (i) {
            return $scope.slides[i][$scope.orientation];
        };




        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };

        //$interval(function () {
        //    $scope.prevSlide();
        //}, 2000);
    })
    .animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if (scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {
                        left: finishPoint,
                        onComplete: done
                    });
                } else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if (scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, {
                        left: startPoint
                    }, {
                        left: 0,
                        onComplete: done
                    });
                } else {
                    done();
                }
            }
        };
    });
