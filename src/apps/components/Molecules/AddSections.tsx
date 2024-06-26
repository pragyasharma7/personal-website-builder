import { PlusIcon } from "@radix-ui/react-icons";
import { Popover } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import {
  addAboutSection,
  addExperienceSection,
  addProjectSection,
  addSkillsetSection,
} from "../../State/SectionSlice";
import {
  About,
  Experience,
  Project,
  SectionsDropdown,
  SkillSet,
} from "../../Interface/Section";
import { sectionsLists } from "../../utils/Constants";
import { useRef } from "react";

export default function AddSections() {
  const sectionsList: SectionsDropdown[] = sectionsLists;
  const divRef = useRef(null);

  const sectionSlice = useSelector((store) => store.sections);
  const dispatch = useDispatch();

  function AddSection(section) {
    if (section.section === "about") {
      const about: About = {
        description: "",
      };
      dispatch(addAboutSection(about));
    } else if (section.section === "skillset") {
      const skillset: SkillSet = {
        id: 1,
        title: "",
        description: "",
      };
      dispatch(addSkillsetSection(skillset));
    } else if (section.section === "project") {
      const project: Project = {
        id: 1,
        image: "",
        title: "",
      };
      dispatch(addProjectSection(project));
    } else if (section.section === "experience") {
      const experience: Experience = {
        id: 1,
        image: "",
        comapnyTitle: "",
        location: "",
        timeline: "",
        designation: "",
        description: "",
      };
      dispatch(addExperienceSection(experience));
    }
    // else if (section.section === "cta") {
    //  const experience: Experience = {
    //    title: "",
    //    description: "",
    //  };
    //  dispatch(addCTASection([]));
    // }
    else return;
  }
  return (
    <Popover.Root>
      <Popover.Trigger>
        <div
          ref={divRef}
          className="bg-bgGray border-dashed cursor-pointer text-black w-full rounded-2xl border-black pt-7 border h-20 py-2.5"
        >
          <div className="text-sm font-semibold">+ Click to Add sections</div>
        </div>
      </Popover.Trigger>
      <Popover.Content
        width="369px"
        minWidth="369px"
        className="left-[148%] max-md:left-[0px]"
      >
        <div className="p-4">
          {sectionsList
            .filter((item) => !item.disabled)
            .map((section, i) => {
              return (
                <Popover.Close key={i}>
                  <div
                    className={`p-2.5 w-full text-sm font-semibold flex hover:bg-bgGray cursor-pointer rounded-xl ${
                      section.disabled ? "bg-bgGray cursor-not-allowed" : null
                    }`}
                    onClick={() => AddSection(section)}
                  >
                    <div className="w-[21px] h-[21px] bg-bgGray rounded-3xl flex hover:bg-white">
                      <PlusIcon className="size-4 m-auto" />
                    </div>
                    &nbsp; &nbsp;&nbsp;{section.displayName}
                  </div>
                </Popover.Close>
              );
            })}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
