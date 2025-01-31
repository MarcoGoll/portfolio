export interface Project {
    id: string,
    index: number;
    projectImg: string,
    name: string,
    description: string,
    implementationDetails: string,
    duration: string,
    techniques: { techniqueImg: string, technique: string }[],
    linkGitHub: string,
    linkLive: string
}
