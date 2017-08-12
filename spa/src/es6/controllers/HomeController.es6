import BaseController from "./BaseController.es6";

export default class HomeController extends BaseController {

    constructor($scope) {
        super($scope, "homeController");
        $scope.name = "Home Page!!!"
    }
}
