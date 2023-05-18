import { Profile } from "../database/models";

// const hello: any = "asfasf"
export const resolvers = {
  Query: {
    hello: () => {
      return "asdfasfd";
    },
    profile: () => {
      return {
        name: "string",
        Email: "string",
        PhoneNumber: "asdfasf",
        City: "asfasfas"
      }
    },
    education: () => {
      return [{
        instituteName: "string",
        fromDate: "String",
        toDate: "String",
        Degree: "String",
        FieldofStudy: "String",
        Grade: "String",
        Activities: "String",
        Description: "String"
      }]
    }
  },
  Mutation: {

    ProfileCreation: async (one: string, two: string) => {

      const result = await Profile.create(two)

      return result;

    }
  }
};