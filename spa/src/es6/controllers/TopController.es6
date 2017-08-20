import BaseController from "./BaseController.es6";
import { Api, Calender } from "../utils/index.es6";

export default class TopController extends BaseController {
    
    constructor($scope) {
        super($scope, "topController");
        $scope.name = "Top Page!!!";
    }

    ready($scope) {

        // Setup Calendar
        $('#calendar').fullCalendar();
        Api.utilGet("http://localhost:3000/GetScheduleQuery").then(response => {
        
            // Update calendar
            const data = (response.data && response.data.GetScheduleQuery) || []
            let events = [];
            for(event of data) events.push({ title: event.name, start: event.startTime, end: event.endTime, summary: event.summary});
            this.renderCalender(events);

            // Update collapsible
            $scope.events = events;
            this.render($scope);
        });
        
        // Setup collapsible
        $('.collapsible').collapsible();
    }

    renderCalender(events = []) {
        $('#calendar').fullCalendar('removeEvents');
        $('#calendar').fullCalendar('addEventSource', events);
    }

    renderCollapsible($scope, events = []) {
        $('.collapsible').collapsible();
    }
}
