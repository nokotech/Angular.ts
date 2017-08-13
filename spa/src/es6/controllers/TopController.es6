import BaseController from "./BaseController.es6";
import { Calender } from "../utils/index.es6";

export default class TopController extends BaseController {
    
    constructor($scope) {
        super($scope, "topController");
        $scope.name = "Top Page!!!";
        $scope.data = [
            new Calender().data,
            new Calender().data,
            new Calender().data
        ];
        console.log($scope.data);
    }
}
