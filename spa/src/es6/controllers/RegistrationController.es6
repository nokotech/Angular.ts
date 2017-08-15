import BaseController from "./BaseController.es6";
import setting from "../constants/setting.es6";

export default class RegistrationController extends BaseController {

    constructor($scope) {
        super($scope, "registrationController");
        this.scope = $scope;
        $scope.name = "Home Page!!!"
        $scope.resistData = {
            name: "",
            startDate: "",
            startTime: "",
            endDate: "",
            endTime: "",
            summary: ""
        };
        $scope.regist = ($event) => this.regist($event, $scope);
    }

    ready($scope) {
        $('.datepicker').pickadate(setting.pickadate);
        $('.timepicker').pickatime(setting.pickatime);
    }

    regist($event, $scope) {
        console.log($scope.resistData);
    }
}
