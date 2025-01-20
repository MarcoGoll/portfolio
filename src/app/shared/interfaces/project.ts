export interface Project {
    projectImg: string,
    name: string,
    description: string,
    implementationDetails: string,
    duration: string,
    techniques: { techniqueImg: string, technique: string }[];
}
