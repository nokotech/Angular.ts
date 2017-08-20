import _ from "lodash";

class Tool {

    randomStr(len) {
        let str = "";
        const c = "abcdefghijklmnopqrstuvwxyz0123456789";
        const cl = c.length;
        for(let i = 0; i < len; i++) str += c[Math.floor(Math.random() * cl)];
        return str;
    }
}

export default new Tool();