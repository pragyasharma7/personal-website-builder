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
  const lexicalEditableSlice = useSelector((store) => store.lexicalEditor);

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
          <div className="w-5/12 max-md:hidden"></div>
          <Box className="w-full h-fit">
            <div className="h-[32px] max-h-[32px] mb-2">
              {showSave && lexicalEditableSlice.isEditable ? (
                <SaveChanges
                  handleSave={handleSave}
                  handleCancel={handleCancel}
                  handleIsToolbarVisible={handleIsToolbarVisible}
                />
              ) : null}

              {isHovering && !showSave && lexicalEditableSlice.isEditable ? (
                <ShowEditDelete
                  handleSave={handleSave}
                  removeSection={removeAboutSection}
                  showDelete={true}
                />
              ) : (
                <Box className="mb-4 mr-4 h-[32px]"></Box>
              )}
            </div>
            <Box
              className={` p-8 ${
                showSave && lexicalEditableSlice.isEditable
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
