const graphql = require('graphql');

class User extends graphql.GraphQLObjectType {

    constructor() {
        super({
            name: 'User',
            fields: {
              id: { type: graphql.GraphQLString },
              name: { type: graphql.GraphQLString },
            }
        });
    }

}
module.exports = new User();