import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { SkillSet } from "../../Interface/Section";
import {
  addSkillsetSection,
  deleteSkillSetSection,
} from "../../State/SectionSlice";
import { useRef, useState } from "react";
import SaveChanges from "../Atoms/SaveChanges";
import ShowEditDelete from "../Atoms/ShowEditDelete";
import LexicalTextarea from "../Common/LexicalEditor/LexicalTextarea";

export default function Skillsets() {
  const dispatch = useDispatch();
  const skillsetSlice = useSelector((store) => store.sections.skillset);
  const lexicalEditableSlice = useSelector((store) => store.lexicalEditor);

  const [isHovering, setIsHovering] = useState(false);
  const [showSave, setshowSave] = useState(true);
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);
  const divRef = useRef(null);

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
      id: skillsetSlice.data.length + 1,
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
    dispatch(deleteSkillSetSection([]));
  };

  const TitleStyle = {
    fontSize: "20px",
    background: "white",
  };
  return (
    <Box className="w-full" ref={divRef}>
      <Flex gap="5" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Box className="w-5/12"></Box>
        <>
          <Box className="w-full h-full">
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
                  removeSection={removeSkillset}
                  showDelete={true}
                />
              ) : null}
            </div>
            <Grid
              as="div"
              justify={"between"}
              columns="2"
              gapY="5"
              gapX="2"
              className={`p-[50px] ${
                showSave && lexicalEditableSlice.isEditable
                  ? "border-[#828282] border shadow rounded-3xl "
                  : "border-none"
              }`}
            >
              {skillsetSlice.data.length > 0
                ? skillsetSlice.data.map((set: SkillSet) => {
                    return (
                      <Box key={set.id}>
                        <Box
                          className={`border rounded-3xl shadow-lg  bg-white mr-5 p-8 ${
                            showSave ? "h-[535px]" : "h-fit"
                          }`}
                        >
                          <LexicalTextarea
                            styles={TitleStyle}
                            placeholder={"Enter title here"}
                            isCompEditable={showSave}
                            isToolbarVisible={isToolbarVisible}
                          />
                        </Box>
                      </Box>
                    );
                  })
                : null}
              {showSave && lexicalEditableSlice.isEditable ? (
                <Box
                  className="border bg-addCardBkg rounded-3xl shadow  min-h-[535px] pt-[225px] m-0 cursor-pointer hover:shadow-lg"
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
