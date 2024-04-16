import { Flex, Avatar } from "@radix-ui/themes";
import { TextAlignJustifyIcon, TriangleDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import * as Menubar from "@radix-ui/react-menubar";
import { headerSectionsList, sectionsLists } from "../../utils/Constants";
import * as Accordion from "@radix-ui/react-accordion";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";
import { useDispatch, useSelector } from "react-redux";
import { isEditable } from "../../State/LexicalEditorSlice";

export default function Header({ scrollToRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lexicalEditableSlice = useSelector((store) => store.lexicalEditor);
  const sectionsSlice = useSelector((store) => store.sections);

  const dispatch = useDispatch();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlePublish = () => {
    dispatch(isEditable(!lexicalEditableSlice.isEditable));
    window.matchMedia("(min-width: 768px)").matches ? null : toggleMenu();
  };
  const pingAddNewSection = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth", scale: 110 });
  };
  const checkIfSectionsExist = () => {
    if (
      sectionsSlice.about.description ||
      sectionsSlice.experience.length > 0 ||
      sectionsSlice.project.length > 0 ||
      sectionsSlice.skillset.length > 0
    ) {
      return true;
    }
    return false;
  };
  return (
    <>
      <div className="w-full pl-9 bg-bgNavBar navbar shadow text-white py-3 drop-shadow-lg pr-9 flex mb-0 max-sm:px-3">
        <div className="flex flex-1 leading-loose">
          <Avatar
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
            className="cursor-pointer mt-1"
          />
          <p className="hide-sm text-sm text-white p-2.5 font-bold h-10 max-sm:hidden sm:shrink-0 mt-1">
            Site Builder
          </p>

          <Menubar.Root className="ml-8 max-sm:hidden mt-[5px]">
            <Menubar.Menu>
              <Menubar.Trigger
                className="MenubarTrigger"
                onClick={checkIfSectionsExist}
              >
                <p className="flex text-sm text-white p-2.5 font-bold h-10">
                  Sections <TriangleDownIcon className="w-5 h-5" />
                </p>
              </Menubar.Trigger>
              <Menubar.Portal>
                <Menubar.Content
                  className="MenubarContent bg-white rounded-3xl p-7 outline-none"
                  align="start"
                  sideOffset={5}
                  alignOffset={-3}
                >
                  {checkIfSectionsExist() ? (
                    headerSectionsList.map((section) => {
                      return (
                        <Menubar.Item
                          key={section.section}
                          onClick={handleClick}
                          className="h-12 w-52 hover:bg-bgGray p-3 text-sm rounded-xl pl-6 cursor-pointer outline-none"
                        >
                          {section.displayName}
                        </Menubar.Item>
                      );
                    })
                  ) : (
                    <Menubar.Item
                      key={1}
                      className="h-fit w-52 p-1 text-sm rounded-xl outline-none"
                    >
                      <div className="">
                        <p className="h-9 w-9 m-auto text-center text-4xl text-[#D2D2D2] mb-6">
                          !
                        </p>
                        <p className="text-xs font-semibold mb-3 text-center">
                          You have not added any sections,
                          <br /> click to add new section
                        </p>
                        <button
                          onClick={pingAddNewSection}
                          className="ml-[37px] w-24 rounded-2xl border border-solid text-xs cursor-pointer py-2 px-3"
                          aria-labelledby="add new section"
                        >
                          Add new section
                        </button>
                      </div>
                    </Menubar.Item>
                  )}
                </Menubar.Content>
              </Menubar.Portal>
            </Menubar.Menu>

            <Menubar.Menu>
              <Menubar.Trigger className="MenubarTrigger">
                <p className="flex text-sm text-white p-2.5 font-bold h-10">
                  Preferences <TriangleDownIcon className="w-5 h-5" />
                </p>
              </Menubar.Trigger>
              <Menubar.Portal>
                <Menubar.Content
                  className="MenubarContent bg-white rounded-3xl p-7 outline-none"
                  align="start"
                  sideOffset={5}
                  alignOffset={-3}
                >
                  No content available
                </Menubar.Content>
              </Menubar.Portal>
            </Menubar.Menu>
          </Menubar.Root>

          <Flex gap="6"></Flex>
          <div className="max-sm:flex w-full justify-end hidden">
            <TextAlignJustifyIcon className="w-8 h-8" onClick={toggleMenu} />
          </div>
          {lexicalEditableSlice?.isEditable ? (
            <div className="flex flex-auto justify-end max-sm:hidden">
              <button
                className="text-sm text-white p-2.5 font-bold h-7 mr-5 cursor-pointer"
                aria-labelledby="preview"
                onClick={handlePublish}
              >
                Preview
              </button>
              <button
                className="mt-[10px] bg-bgBtn rounded-3xl px-4 h-7 font-semibold text-sm cursor-pointer"
                aria-labelledby="publish"
                onClick={handlePublish}
              >
                Publish
              </button>
            </div>
          ) : (
            <div className="flex flex-auto justify-end max-sm:hidden">
              <button
                className="mt-[10px] bg-bgBtn rounded-3xl px-4 h-7 font-semibold text-sm cursor-pointer"
                aria-labelledby="unpublish"
                onClick={handlePublish}
              >
                Unpublish
              </button>
            </div>
          )}
        </div>
      </div>

      {isMenuOpen ? (
        <div className=" pb-6 w-full justify-center pl-9 bg-bgNavBar navbar shadow text-white py-3 drop-shadow-lg pr-9 flex mb-0">
          <Accordion.Root
            className="AccordionRoot"
            type="single"
            defaultValue="item-1"
            collapsible
          >
            <Accordion.Item className="AccordionItem" value="item-1">
              <AccordionTrigger className="flex w-full justify-center font-semibold">
                Sections <TriangleDownIcon className="pt-1 w-5 h-5" />
              </AccordionTrigger>
              <AccordionContent>
                <ul className="mt-2">
                  {sectionsLists.map((section) => {
                    return (
                      <li
                        key={section.section}
                        className="h-12 w-52 pl-0 hover:bg-bgGray p-3 text-sm rounded-xl cursor-pointer outline-none"
                      >
                        {section.displayName}
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem mt-5" value="item-1">
              <AccordionTrigger className="flex w-full justify-center font-semibold">
                Preferences <TriangleDownIcon className="pt-1 w-5 h-5" />
              </AccordionTrigger>
              <AccordionContent className="mt-5">
                No content available
              </AccordionContent>
            </Accordion.Item>
            <div className="flex flex-auto justify-end max-sm:block mt-8">
              {lexicalEditableSlice?.isEditable ? (
                <>
                  <p
                    onClick={handlePublish}
                    className="text-sm text-white p-2.5 font-bold h-10 cursor-pointer"
                  >
                    Preview
                  </p>
                  <button
                    onClick={handlePublish}
                    className="mt-[6px] bg-bgBtn rounded-3xl px-4 h-7 font-semibold text-sm cursor-pointer"
                    aria-labelledby="publish"
                  >
                    Publish
                  </button>
                </>
              ) : (
                <button
                  className="mt-[10px] bg-bgBtn rounded-3xl px-4 h-7 font-semibold text-sm cursor-pointer"
                  aria-labelledby="unpublish"
                  onClick={handlePublish}
                >
                  Unpublish
                </button>
              )}
            </div>
          </Accordion.Root>
        </div>
      ) : null}
    </>
  );
}
