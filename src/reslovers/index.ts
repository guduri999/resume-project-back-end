
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

    createStudent: async (input: string) => {

      await console.log(input, "testing")

      return input
    }
  }
};