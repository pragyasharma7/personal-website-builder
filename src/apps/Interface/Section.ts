export interface SectionsDropdown {
  section: string;
  displayName: string;
}

export interface Sections {
    About: About,
    SkillSet: SkillSet[],
    Project: Project[],
    Experience: Experience[],
}


export interface About {
    description: string
}

export interface SkillSet{
    title: string,
    description: string
}

export interface Project{
    logo: string,
    title: string,
    link: string,
    description: string
}

export interface Experience{
    logo: string,
    comapnyTitle: string,
    location: string,
    timeline: string,
    designation: string,
    description: string
}