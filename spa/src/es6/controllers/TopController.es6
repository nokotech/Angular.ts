import BaseController from "./BaseController.es6";

export default class TopController extends BaseController {
    
    constructor($scope) {
        super($scope, "topController");
        $scope.name = "Top Page!!!"
    }
}
