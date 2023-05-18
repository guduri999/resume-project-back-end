import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./reslovers";
import mongoose from "mongoose";
import { Profile } from "./database/models";

const connectionString = "mongodb://127.0.0.1:27017/testing"

const port = 8000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port },
  context: async ({ req }) => {
    await mongoose.connect(connectionString)
    console.log("api called")
    return {
      models: {
        Profile
      }
    }
  }
}).then(data => console.log(data.url))
