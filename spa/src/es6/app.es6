import angular from 'angular';
import uiRouter from 'angular-ui-router';
import material from 'angular-material';

import TopController from "./controllers/TopController.es6";
import RegistrationController from "./controllers/RegistrationController.es6";
import BodyController from "./controllers/BodyController.es6";

//const main = angular.module('app', ['ui.router']);
const main = angular.module('app', [uiRouter, material]);
const _state = (name) => { return { url: '/'+name, templateUrl: 'pages/'+name+'.html', controller: name+'Controller' }};
     
// Router setting
main.config(['$stateProvider', '$urlRouterProvider', (stateProvider, urlRouterProvider) => {
    urlRouterProvider.otherwise('/top');
    stateProvider
        .state('top', _state("top"))
        .state('registration', _state("registration"));
}]);
    
// Controller
main.controller('topController', TopController);
main.controller('registrationController', RegistrationController);
main.controller('bodyController', BodyController);
