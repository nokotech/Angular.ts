import BaseController from "./BaseController.es6";
import { Calender } from "../utils/index.es6";

export default class TopController extends BaseController {
    
    constructor($scope) {
        super($scope, "topController");
        $scope.name = "Top Page!!!";
    }

    ready($scope) {
        $('.collapsible').collapsible()
        $('#calendar').fullCalendar();
    }
}
