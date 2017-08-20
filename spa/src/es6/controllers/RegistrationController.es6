import BaseController from "./BaseController.es6";
import setting from "../constants/setting.es6";
import {Api} from "../utils/index.es6";

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
        const data =  {
            name: $scope.resistData.name,
            startTime: $scope.resistData.startDate + " " + $scope.resistData.startTime,
            endTime: $scope.resistData.endDate + " " + $scope.resistData.endTime,
            summary: $scope.resistData.summary
        };
        console.log(data);
        Api.utilPost("http://localhost:3000/RegistScheduleQuery", data);
    }
}
