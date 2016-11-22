// ANGULAR JS
var app = angular.module('MainApp', ['ngRoute'] );

app.config(function($routeProvider) {
  $routeProvider
    .when('Home', {
        
    })
    .when('/Contact', {
        
    })
    .when('/Knowledge', {
        
    })
    .otherwise({
        redirectTo : "/Home"
     })
});

app.controller('RouteCtrl', function($scope, $route, $location) {
    $scope.$on('$routeChangeSuccess', function() {
        var path = $location.path();
        
        $scope.homeVisible = false;
        $scope.contactVisible = false;
        $scope.knowledgeVisible = false;
        
        if(path === '/Home') {
            $scope.homeVisible = true;
        } else if(path === '/Contact') {
            $scope.contactVisible = true;
        }
        else if(path === '/Knowledge') {
            $scope.knowledgeVisible = true;
        }
    });

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };


});

//JQUERY/Javascript

$(document).ready(function(){//Måste alltid vara med...

    $(window).scroll(function() {
        if ($(this).scrollTop() > $('.background').height()){  
            $('.nav ul').addClass("sticky");
        }
        else{
            $('.nav ul').removeClass("sticky");
        }
    });
 
    var divPosition = $('#menu').offset();
    
    $('a').click(function() {
        $('html, body').animate({scrollTop: divPosition.top}, 600);
    });

});





/*          
ngRoute och ng view funkar bara web service vilket inte finns lokalt.
*************************************************************************************************************

var App = angular.module("MainApp", ["ngRoute"])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider          


            .when("/home", {
                templateUrl: "./Pages/Home.html",
                controller: "homeController"
            })
            .when('/about', {
                templateUrl: "./Pages/About.html",
                controller : "aboutController"
            })
            .when('/contact', {
                templateUrl: "./Pages/Contact.html",
                controller : "contactController"
            })
            .otherwise({
                redirectTo : "/home"
            })
            
           $locationProvider.html5Mode(true);
        }) 


        .controller("homeController", function ($scope) {
            $scope.message = "HOME PAGE";

        })

        .controller("aboutController", function ($scope) {
        $scope.courses = "ABOUT PAGE";

        })

        .controller("contactController", function ($scope) {
            $scope.students = "CONTACT PAGE";

        })

*/


/*

SEND EMAIL SERVICE 
*********************************************************************************************************

app.controller('MailController', function ($scope, MailService) {

    $scope.sendMail = function () {

        var mail = {
            Name: $scope.Name,
            Email: $scope.Email,
            Content: $scope.Content,
            
        }

        var promisePost = MailService.sendMail(mail);

        promisePost.then(function () {
                alert("Meddelandet har skickats");
            },
            function (err) {
                console.log("Fel uppstod - meddelandet skickades ej." + err);
            });
    }
  

});


app.service('MailService', function ($http) {


    this.sendMail = function (mail) {
        var request = $http.post('fungerande API/PHP länk', mail).success(function () {
        
    },

    return request;
    }
});

*/