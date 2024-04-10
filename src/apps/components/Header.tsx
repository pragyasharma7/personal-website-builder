import {
  Flex,
  Avatar,
  HoverCard,
  Heading,
  Box,
  Link,
  Button,
} from "@radix-ui/themes";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  TriangleDownIcon,
} from "@radix-ui/react-icons";
import "./HeaderStyles.css";
import * as Menubar from "@radix-ui/react-menubar";
import { sectionsLists } from "../utils/Constants";
export default function Header() {
  return (
    <div className="w-full bg-bgNavBar navbar shadow text-white py-3 drop-shadow-lg pr-9">
      <Flex gap="3">
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
          className="cursor-pointer"
        />
        <p className="hide-sm text-sm text-white p-2.5 font-bold h-10">
          Site Builder
        </p>

        <Menubar.Root>
          <Menubar.Menu>
            <Menubar.Trigger className="MenubarTrigger">
              <p className="flex text-sm text-white p-2.5 font-bold h-10">
                Sections <ChevronDownIcon />
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
                      className="h-12 w-52 hover:bg-bgGray p-3 rounded-xl pl-6 cursor-pointer outline-none"
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
                Preferences <ChevronDownIcon />
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

        <Flex gap="1">
          <p className="text-sm text-white p-2.5 font-bold h-10">Preview</p>
          <Button color="blue">Publish</Button>
        </Flex>
      </Flex>
    </div>
  );
}
