import api from "superagent"

class ApiManager {

    constructor() {

    }

    utilGet(url, param = {}) {
        return new Promise((resolve, reject) => {
            api.get(url).query(param).end((err, res) => !err ? resolve(res.body) : reject(err));
        });
    }

    utilPost(url, param = {}) {
        return new Promise((resolve, reject) => {
            api.post(url).send(param).end((err, res) => !err ? resolve(res.body) : reject(err));
        });
    }

}

export default new ApiManager();