const graphql = require('graphql');
const Type = require('../type/index.js');

class GetUserType extends graphql.GraphQLObjectType {
    constructor() {
        super({
            name: 'Query',
            fields: {
            user: {
                type: Type.User,
                args: {
                id: { type: graphql.GraphQLString }
                },
                resolve: (_, args) => data[args.id]
            }
            }
        });
    }
}
class GetUserQuery extends graphql.GraphQLSchema{
    constructor() {
        super({query: new GetUserType()})
    }
}
module.exports = new GetUserQuery();