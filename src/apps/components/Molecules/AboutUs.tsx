import { Box, Flex, Heading } from "@radix-ui/themes";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LexicalTextarea from "../Common/LexicalEditor/LexicalTextarea";
import SaveChanges from "../Atoms/SaveChanges";
import ShowEditDelete from "../Atoms/ShowEditDelete";
import { addAboutSection } from "../../State/SectionSlice";

export default function AboutUs() {
  const dispatch = useDispatch();
  const aboutSlice = useSelector((store) => store.sections.about);
  const [showSave, setshowSave] = useState(true);
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);
  const divRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleIsToolbarVisible = () => {
    setIsToolbarVisible((val) => !val);
    console.log(isToolbarVisible);
  };

  const style = {
    fontSize: "16px",
  };

  const handleSave = () => {
    setshowSave((prev) => !prev);
  };

  const handleCancel = () => {
    setshowSave((prev) => !prev);
    dispatch(addAboutSection({ description: aboutSlice.description }));
  };

  const removeAboutSection = () => {
    dispatch(addAboutSection({}));
  };

  {
    return (
      <Box
        ref={divRef}
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
                handleIsToolbarVisible={handleIsToolbarVisible}
              />
            ) : null}

            {isHovering && !showSave ? (
              <ShowEditDelete
                handleSave={handleSave}
                removeSection={removeAboutSection}
              />
            ) : (
              <Box className="mb-4 mr-4 h-[32px]"></Box>
            )}
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
                isCompEditable={showSave}
                isToolbarVisible={isToolbarVisible}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  }
}
