const resolvers = {
  Query: {
    test(_, args, context) {
      return "Hello World! Via GraphQL";
    }
  }
};
module.exports = resolvers;
