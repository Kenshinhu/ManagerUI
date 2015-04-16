var myapp = angular.module('app',['ui.router']);

myapp.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index',{
        url:"/",
        views:{
            "":{
                templateUrl:"assets/tpl/login.html"
            }
        }})
        .state('home',{
            url:"/home",
            views:{
                "":{
                    templateUrl:"assets/tpl/home.html"
                },
                "header@home":{
                    templateUrl:"assets/tpl/home_header.html"
                },
                "slider@home":{
                    templateUrl:"assets/tpl/home_slider.html"
                },
                "index@home":{
                    templateUrl:"assets/tpl/home_index.html"
                }
            }
        })
        .state('home.table',{
            url:"/table",
            views:{
                "index@home":{
                    templateUrl:"assets/tpl/table.html"
                }
            }
        });

});