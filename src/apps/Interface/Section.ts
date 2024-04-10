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
    id: Number,
    title: string,
    description: string
}

export interface Project{
        id: Number,
    logo: string,
    title: string,
    link: string,
    description: string
}

export interface Experience{
        id: Number,
    logo: string,
    comapnyTitle: string,
    location: string,
    timeline: string,
    designation: string,
    description: string
}

export interface Navbar{
    image: string,
    title: string
}

export interface LexicalEditorProps  {
  styles: {},
  placeholder: string,
  handleContent: Function,
  prevContent: string,
  isCompEditable: boolean
}