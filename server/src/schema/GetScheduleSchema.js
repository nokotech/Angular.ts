const graphql = require('graphql');
const Type = require('../type/index.js');

class GetScheduleQuery extends graphql.GraphQLObjectType {

    constructor() {
        // 探査変数
        const args = {
            name: { type: graphql.GraphQLString }
        };
        // DBに接続
        const resolve = ({db}, ...param) => {
            return new Promise ((resolve, reject) => {
                db.all(`SELECT * FROM schedule`, {}, (err, res) => resolve(res));
            });
        };
        // 初期化
        super({
            name: 'Query',
            fields: () => ({
                "GetScheduleQuery": { type: new graphql.GraphQLList(Type.Schedule), args: args, resolve }
            })
        });
    }   
}
class GetScheduleSchema extends graphql.GraphQLSchema{
    constructor() {
        super({query: new GetScheduleQuery()})
    }
}
module.exports = new GetScheduleSchema();