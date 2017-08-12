// import angular from 'angular';
import TopController from "./controllers/TopController.es6";
import HomeController from "./controllers/HomeController.es6";
import BodyController from "./controllers/BodyController.es6";

const main = angular.module('app', ['ui.router']);
const _state = (name) => { return { url: '/'+name, templateUrl: 'pages/'+name+'.html', controller: name+'Controller' }};
     
// Router setting
main.config(['$stateProvider', '$urlRouterProvider', (stateProvider, urlRouterProvider) => {
    urlRouterProvider.otherwise('/top');
    stateProvider
        .state('top', _state("top"))
        .state('home', _state("home"));
}]);
    
// Controller
main.controller('topController', TopController);
main.controller('homeController', HomeController);
main.controller('bodyController', BodyController);
