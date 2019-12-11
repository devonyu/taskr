const resolvers = {
  Query: {
    test(_, args, context) {
      return "Testing Via GraphQL";
    },
    hello: (_, { name }) => `Hello ${name || "World"}`
  }
};
module.exports = resolvers;
