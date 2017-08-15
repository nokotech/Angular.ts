const graphql = require('graphql');

class Schedule extends graphql.GraphQLObjectType {

    constructor() {
        super({
            name: 'Schedule',
            fields: {
                name: { type: graphql.GraphQLString },
                startTime: { type: graphql.GraphQLString },
                endTime: { type: graphql.GraphQLString },
                summary: { type: graphql.GraphQLString }
            }
        });
    }

}
module.exports = new Schedule();