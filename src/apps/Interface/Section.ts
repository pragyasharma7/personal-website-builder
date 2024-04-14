export interface SectionsDropdown {
  section: string;
  displayName: string;
  disabled: boolean
}

export interface Sections {
  About: About;
  SkillSet: SkillSet[];
  Project: Project[];
  Experience: Experience[];
}

export interface About {
  description: string;
  disabled: boolean
}

export interface SkillSet {
  id: Number;
  title: string;
  description: string;
    disabled: boolean
}

export interface Project {
  id: Number;
  image: string;
  title: string;
    disabled: boolean

}

export interface Experience {
  id: Number;
  image: string;
  comapnyTitle: string;
  location: string;
  timeline: string;
  designation: string;
  description: string;
    disabled: boolean

}

export interface Navbar {
  image: string;
  title: string;
}

export interface LexicalEditorProps {
  styles: {};
  placeholder: string;
  isCompEditable: boolean;
  isToolbarVisible: boolean;
}

export interface ShowEditDeleteProps {
  handleSave: Function;
  removeSection: Function;
}

export interface SaveChangesProps {
  handleSave: Function;
  handleCancel: Function;
  handleIsToolbarVisible: Function;
}
