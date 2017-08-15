const graphql = require('graphql');
const Type = require('../type/index.js');

class GetScheduleType extends graphql.GraphQLObjectType {
    constructor() {
        super({
            name: 'Query',
            fields: {
            user: {
                type: Type.Schedule,
                args: {
                id: { type: graphql.GraphQLString }
                },
                resolve: (_, args) => data[args.id]
            }
            }
        });
    }
}
class GetScheduleQuery extends graphql.GraphQLSchema{
    constructor() {
        super({query: new GetScheduleType()})
    }
}
module.exports = new GetScheduleQuery();