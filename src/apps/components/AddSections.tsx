import { PlusIcon } from "@radix-ui/react-icons";
import { Popover } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { addAboutSection, addCTASection, addExperienceSection, addProjectSection, addSkillsetSection } from "../State/SectionSlice";

interface Sections {
  section: String;
  displayName: String;
}

export default function AddSections() {
  const sectionSlice = useSelector((store) => store.sections);
  const dispatch = useDispatch();

  console.log(sectionSlice);
  const sections: Sections[] = [
    {
      section: "about",
      displayName: "📌 Add About you",
    },
    {
      section: "skillset",
      displayName: "💡 Add Skillsets",
    },
    {
      section: "project",
      displayName: "🛠️ Add Projects",
    },
    {
      section: "experience",
      displayName: "🌐 Add Experience",
    },
    {
      section: "cta",
      displayName: "🔗 Add CTA",
    },
  ];

  function AddSection(section: String) {
    const about = {
      title: 'About Me',
      description: '',
      placeholder: 'Start writing...',
    }
    if (section === "about") dispatch(addAboutSection(about));
    else if (section === "skillset") dispatch(addSkillsetSection([]));
    else if (section === "project") dispatch(addProjectSection([]));
    else if (section === "experience") dispatch(addExperienceSection([]));
    else if (section === "cta") dispatch(addCTASection([]));
    else return;

    // add section in slice
    //scroll user down to sections div
    //close popover
    console.log(sectionSlice);
    return;
  }
  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className="bg-bgGray border-dashed cursor-pointer text-black w-full rounded-2xl border-black pt-7 border h-20 py-2.5">
          <div className="text-sm font-semibold">+ Click to Add sections</div>
        </div>
      </Popover.Trigger>
      <Popover.Content
        width="369px"
        minWidth="369px"
        height="277px"
        className="left-[148%]"
      >
        <div className="p-4">
          {sections.map((section, i) => {
            return (
              <Popover.Close key={i}>
                <div
                  className="p-2.5 w-full text-sm font-semibold flex hover:bg-bgGray cursor-pointer rounded-xl"

                  onClick={() => AddSection(section.section)}
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