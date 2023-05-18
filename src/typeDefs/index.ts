
export const typeDefs = `
type Query{
    hello:String
    profile:resumeProfile
    education:[education]
}
type Mutation{
    createStudent(input:String!):String
}
type resumeProfile{
    name:String
    Email:String
    PhoneNumber:String
    City:String
}
type education{
    instituteName:String
    fromDate:String
    toDate:String
    Degree:String
    FieldofStudy:String
    Grade:String
    Activities:String
    Description:String
}
`;