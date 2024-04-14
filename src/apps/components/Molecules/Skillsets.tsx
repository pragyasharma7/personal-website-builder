import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { SkillSet } from "../../Interface/Section";
import { addSkillsetSection } from "../../State/SectionSlice";
import { useState } from "react";
import SaveChanges from "../Atoms/SaveChanges";
import ShowEditDelete from "../Atoms/ShowEditDelete";
import LexicalTextarea from "../Common/LexicalEditor/LexicalTextarea";
import { isEditable } from "../../State/LexicalEditorSlice";

export default function Skillsets() {
  const dispatch = useDispatch();
  const skillsetSlice = useSelector((store) => store.sections.skillset);

  const [isHovering, setIsHovering] = useState(false);
  const [showSave, setshowSave] = useState(true);
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleIsToolbarVisible = () => {
    setIsToolbarVisible((val) => !val);
    console.log(isToolbarVisible);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const addNewSet = () => {
    const skillset = {
      id: skillsetSlice.length + 1,
      title: "",
      description: "",
    };
    dispatch(addSkillsetSection(skillset));
  };

  const handleSave = () => {
    setshowSave((prev) => !prev);
  };

  const handleCancel = () => {
    setshowSave((prev) => !prev);
    // dispatch(addSkillsetSection({ description: aboutSlice.description }));
  };

  const removeSkillset = () => {
    dispatch(addSkillsetSection([]));
  };

  const DescriptionStyle = {
    fontSize: "16px",
    background: "white",
  };
  const TitleStyle = {
    fontSize: "20px",
    background: "white",
  };
  return (
    <Box className="w-full">
      <Flex gap="5" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Box className="w-5/12"></Box>
        <>
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
                removeSection={removeSkillset}
              />
            ) : null}
            <Grid
              as="div"
              justify={"between"}
              columns="2"
              gapY="5"
              gapX="2"
              className={`p-[50px] ${
                showSave
                  ? "border-[#828282] border shadow rounded-3xl "
                  : "border-none"
              }`}
            >
              {skillsetSlice.length > 0
                ? skillsetSlice.map((set: SkillSet) => {
                    return (
                      <Box key={set.id}>
                        <Box className="border rounded-3xl shadow h-[535px] bg-white mr-5 p-8">
                          <LexicalTextarea
                            styles={TitleStyle}
                            placeholder={"Enter title here"}
                            isCompEditable={showSave}
                            isToolbarVisible={isToolbarVisible}
                          />
                          {/* <LexicalTextarea
                            styles={DescriptionStyle}
                            placeholder={"Enter description here"}
                            isCompEditable={showSave}
                            isToolbarVisible={isToolbarVisible}
                          /> */}
                        </Box>
                      </Box>
                    );
                  })
                : null}
              {showSave ? (
                <Box
                  className="border bg-addCardBkg rounded-3xl shadow  min-h-[535px] pt-[225px] m-0 cursor-pointer"
                  onClick={addNewSet}
                >
                  <p>+</p>
                  <p className="font-semibold">Add new card</p>
                </Box>
              ) : null}
            </Grid>
          </Box>
        </>
      </Flex>
    </Box>
  );
}
