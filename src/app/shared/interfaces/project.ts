export interface Project {
    id: string,
    projectImg: string,
    name: string,
    description: string,
    implementationDetails: string,
    duration: string,
    techniques: { techniqueImg: string, technique: string }[];
}
