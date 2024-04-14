import { Flex, Avatar } from "@radix-ui/themes";
import { TextAlignJustifyIcon, TriangleDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import * as Menubar from "@radix-ui/react-menubar";
import { sectionsLists } from "../../utils/Constants";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";
import { useDispatch, useSelector } from "react-redux";
import { isEditable } from "../../State/LexicalEditorSlice";

export default function Header({ scrollToRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lexicalEditableSlice = useSelector((store) => store.lexicalEditor);

  const dispatch = useDispatch();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = () => {
    // Scroll to the div
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handlePublish = () => {
    dispatch(isEditable(!lexicalEditableSlice.isEditable));
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
              <Menubar.Trigger className="MenubarTrigger">
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
                  {sectionsLists.map((section) => {
                    return (
                      <Menubar.Item
                        key={section.section}
                        onClick={handleClick}
                        className="h-12 w-52 hover:bg-bgGray p-3 text-sm rounded-xl pl-6 cursor-pointer outline-none"
                      >
                        {section.displayName}
                      </Menubar.Item>
                    );
                  })}
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
                  className="MenubarContent"
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
              <button className="text-sm text-white p-2.5 font-bold h-7 mr-5 cursor-pointer">
                Preview
              </button>
              <button
                className="mt-[10px] bg-bgBtn rounded-3xl px-4 h-7 font-semibold text-sm cursor-pointer"
                onClick={handlePublish}
              >
                Publish
              </button>
            </div>
          ) : (
            <div className="flex flex-auto justify-end max-sm:hidden">
              <button
                className="mt-[10px] bg-bgBtn rounded-3xl px-4 h-7 font-semibold text-sm cursor-pointer"
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
                Preferences <ChevronDownIcon className="pt-1 w-5 h-5" />
              </AccordionTrigger>
              <AccordionContent className="mt-5">
                No content available
              </AccordionContent>
            </Accordion.Item>
            <div className="flex flex-auto justify-end max-sm:block mt-8">
              <p className="text-sm text-white p-2.5 font-bold h-10 cursor-pointer">
                Preview
              </p>
              <button className="mt-[6px] bg-bgBtn rounded-3xl px-4 h-7 font-semibold text-sm cursor-pointer">
                Publish
              </button>
            </div>
          </Accordion.Root>
        </div>
      ) : null}
    </>
  );
}
