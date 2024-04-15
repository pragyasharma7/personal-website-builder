import { Box, Flex, Heading } from "@radix-ui/themes";
import SaveChanges from "./SaveChanges";
import ShowEditDelete from "./ShowEditDelete";
import LexicalTextarea from "../Common/LexicalEditor/LexicalTextarea";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function LexicalTextWrapper({ styles, placeholder }) {
  const lexicalEditableSlice = useSelector((store) => store.lexicalEditor);

  const [showSave, setshowSave] = useState(true);
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);
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

  const handleSave = () => {
    setshowSave((prev) => !prev);
    console.log(showSave);
  };

  const handleCancel = () => {
    setshowSave((prev) => !prev);
  };
  const removeSection = () => {
    console.log("here");
  };

  return (
    <Box
      className="w-full mb-2"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Box className="w-full h-fit">
        {lexicalEditableSlice.isEditable ? (
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
                removeSection={removeSection}
                showDelete={false}
              />
            ) : null}
          </div>
        ) : null}

        <Box
          className={` p-1 ${
            showSave && lexicalEditableSlice.isEditable
              ? "border-[#828282] border shadow rounded-xl"
              : "border-none"
          }`}
        >
          <LexicalTextarea
            styles={styles}
            placeholder={placeholder}
            isCompEditable={showSave}
            isToolbarVisible={
              isToolbarVisible && lexicalEditableSlice.isEditable
            }
          />
        </Box>
      </Box>
    </Box>
  );
}
