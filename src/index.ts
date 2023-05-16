import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `type Query{
    hello:String
}`;

const resolvers = {
  Query: {
    hello: () => {
      return "testing";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, { listen: { port: 7000 } }).then((data) =>
  console.log(data.url)
);
