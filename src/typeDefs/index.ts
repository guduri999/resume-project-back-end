
export const typeDefs = `
type Query{
    hello:String
    profile:resumeProfile
    education:[education]
}
type Mutation{
    ProfileCreation(name:String,email:String):profile
}
type profile{
    name:String
    email:String
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