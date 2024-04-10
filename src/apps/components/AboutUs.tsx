import { Avatar, Box, Card, Flex, Heading } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LexicalTextarea from "./Common/LexicalTextarea";
import SaveChanges from "./Common/SaveChanges";
import ShowEditDelete from "./Common/ShowEditDelete";
import { addAboutSection } from "../State/SectionSlice";

export default function AboutUs() {
  const dispatch = useDispatch();
  const aboutSlice = useSelector((store) => store.sections.about);
  const saveChangesSlice = useSelector((store) => store.saveChanges);

  const [currText, setCurrText] = useState("");
  const [showSave, setshowSave] = useState(true);

  console.log(aboutSlice, saveChangesSlice.save);
  // const onfig = lexicalEditorConfig;
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const style = {
    fontSize: "16px",
  };

  const handleSave = () => {
    setshowSave((prev) => !prev);
    dispatch(addAboutSection({ description: currText }));
    console.log(aboutSlice);
  };

  const handleContent = (content: string) => {
    console.log(content);
    setCurrText(content);
  };

  const handleCancel = () => {
    setshowSave((prev) => !prev);
    dispatch(addAboutSection({ description: aboutSlice.description }));
    console.log(aboutSlice);
  };

  const removeAboutSection = () => {
    dispatch(addAboutSection({}));
  };

  {
    return (
      <Box
        className="w-full"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Flex gap="5">
          <Box className="w-5/12"></Box>
          <Box className="w-full h-fit">
            {showSave ? (
              <SaveChanges
                handleSave={handleSave}
                handleCancel={handleCancel}
              />
            ) : null}

            {isHovering && !showSave ? (
              <ShowEditDelete
                handleSave={handleSave}
                removeAboutSection={removeAboutSection}
              />
            ) : (
              <Box className="mb-4 mr-4 h-[32px]"></Box>
            )}

            {/* <Box className="border rounded-3xl shadow p-8">
              <Heading className="text-left mb-8">About Me</Heading>
              <pre>{aboutSlice.description}</pre>
            </Box> */}
            <Box
              className={` p-8 ${
                showSave
                  ? "border-[#828282] border shadow rounded-3xl "
                  : "border-none"
              }`}
            >
              <Heading className="text-left mb-8">About Me</Heading>
              <LexicalTextarea
                styles={style}
                placeholder={"Start writing..."}
                handleContent={handleContent}
                prevContent={aboutSlice.description}
                isCompEditable={showSave}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  }
}
