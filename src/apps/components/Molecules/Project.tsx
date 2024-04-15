import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { Project, SkillSet } from "../../Interface/Section";

import { useState } from "react";
import SaveChanges from "../Atoms/SaveChanges";
import ShowEditDelete from "../Atoms/ShowEditDelete";
import LexicalTextarea from "../Common/LexicalEditor/LexicalTextarea";
import {
  addProjectSection,
  deleteProjectSection,
  addProjectImage,
} from "../../State/SectionSlice";
import { ImageIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Project() {
  const dispatch = useDispatch();
  const projectSlice = useSelector((store) => store.sections.project);
  const lexicalEditableSlice = useSelector((store) => store.lexicalEditor);

  const [isHovering, setIsHovering] = useState(false);
  const [showSave, setshowSave] = useState(true);
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleIsToolbarVisible = () => {
    setIsToolbarVisible((val) => !val);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const addNewProject = () => {
    const project = {
      id: projectSlice.data.length + 1,
      title: "",
      image: "",
    };
    dispatch(addProjectSection(project));
  };

  const handleAddImage = (project: Project, event) => {
    const image = event.target.files[0];
    const id = project.id;
    dispatch(addProjectImage({ id, image }));
  };

  const handleSave = () => {
    setshowSave((prev) => !prev);
  };

  const handleCancel = () => {
    setshowSave((prev) => !prev);
  };

  const removeProject = () => {
    dispatch(deleteProjectSection([]));
  };

  const TitleStyle = {
    fontSize: "16px",
    background: "white",
  };

  const SubtextStyle = {
    fontSize: "16px",
  };
  return (
    <Box className="w-full">
      <Flex gap="5" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Box className="w-5/12"></Box>
        <>
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
                  removeSection={removeProject}
                  showDelete={true}
                />
              ) : null}
            </div>
            <Box
              className={`p-[50px] ml-3 mb-7 ${
                showSave && lexicalEditableSlice.isEditable
                  ? "border-[#828282] border shadow rounded-3xl h-fit"
                  : "border-none h-fit"
              }`}
            >
              <Heading as="h4" className="text-left">
                Projects
              </Heading>
              <LexicalTextarea
                styles={SubtextStyle}
                placeholder={"Enter subtext here.."}
                isCompEditable={showSave}
                isToolbarVisible={isToolbarVisible}
              />
              <Grid as="div" justify={"between"} columns="2" gapY="5" gapX="2">
                {projectSlice.data.length > 0
                  ? projectSlice.data.map((project: Project) => {
                      return (
                        <Box
                          key={project.id}
                          className={`border rounded-3xl shadow  bg-white mr-5 p-8 ${
                            lexicalEditableSlice.isEditable
                              ? "hover: shadow-lg"
                              : null
                          } ${showSave ? "h-[257px]" : "h-fit"}`}
                        >
                          {project.image ? (
                            <div className="w-12 h-12 rounded-xl mb-4">
                              <label
                                htmlFor={`project${project.id}`}
                                className="cursor-pointer justify-center w-[100px]"
                              >
                                {project.image && (
                                  <img
                                    className="border w-12 h-12 rounded-xl ml-3"
                                    src={URL.createObjectURL(project.image)}
                                    alt="Uploaded image"
                                  />
                                )}
                              </label>
                              <input
                                id={`project${project.id}`}
                                type="file"
                                className="invisible"
                                onChange={() => {
                                  handleAddImage(project, event);
                                }}
                              />
                            </div>
                          ) : (
                            <div className="border bg-bgGray border-dashed border-[#AEAEAE] w-12 h-12 rounded-xl ml-3 mb-4">
                              <label
                                htmlFor={`project${project.id}`}
                                className="cursor-pointer justify-center"
                              >
                                <ImageIcon className="w-4 h-4 justify-center align-middle m-auto mt-[13px]" />
                              </label>
                              <input
                                id={`project${project.id}`}
                                type="file"
                                className="invisible"
                                onChange={() => {
                                  handleAddImage(project, event);
                                }}
                              />
                            </div>
                          )}
                          <LexicalTextarea
                            styles={TitleStyle}
                            placeholder={"Enter description here"}
                            isCompEditable={showSave}
                            isToolbarVisible={isToolbarVisible}
                          />
                        </Box>
                      );
                    })
                  : null}
                {showSave && lexicalEditableSlice.isEditable ? (
                  <Box
                    className="border bg-addCardBkg rounded-3xl shadow  min-h-[257px] pt-[100px] m-0 cursor-pointer hover:shadow-lg"
                    onClick={addNewProject}
                  >
                    <PlusIcon className="h-6 w-6 m-auto" />
                    <p className="font-semibold">Add new card</p>
                  </Box>
                ) : null}
              </Grid>
            </Box>
          </Box>
        </>
      </Flex>
    </Box>
  );
}
