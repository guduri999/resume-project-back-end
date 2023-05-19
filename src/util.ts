
interface personalInformation {
    name?: string,
    email?: string,
    phoneNumber?: string,
    city?: string
}

interface education {
    institute?: string
    fromDate?: string
    toDate?: string
    degree?: string
    fieldOfStudy?: string
    grade?: string
    activities?: string
    description?: string
}

interface experience {
    companyName?: string,
    fromDate?: string,
    toDate?: string,
    title?: string,
    employementTag?: string,
    description?: string
}

interface projects {
    title?: string,
    fromDate?: string,
    toDate?: string,
    associatedWith?: string,
    projectLink?: string,
    description?: string
}

interface achievments {
    title?: string,
    associatedWith?: string,
    date?: string,
    description?: string
}

export interface totalResumeDetails {
    personalInformation?: personalInformation,
    education?: education,
    experience?: experience,
    projects?: projects,
    achievments?: achievments,
    skills?: string[],
    summary?: string
}

// {
//     "personalInformation": {},
//     "education": {},
//     "experience": {},
//     "projects": {},
//     "achievments": {},
//     "skills": {},
//     "summary": {}
//   }
