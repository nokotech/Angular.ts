import {Tool} from "./index.es6";

export default class Calender {

    get data() { return this.weekArr }

    constructor() {
        let key = Tool.randomStr(16);
        this.weekArr = { key: key, week1: "Mon", week2: "Tue", week3: "Wed", week4: "Thu", week5: "Fri", week6: "Sat", week7: "Sun"};
    }
}