import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const port: any = process.env.PORT || 8000;
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

startStandaloneServer(server, { listen: { port } }).then((data) =>
  console.log(data.url)
);
