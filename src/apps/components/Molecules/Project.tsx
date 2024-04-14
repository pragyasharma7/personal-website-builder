// import { Box, Flex, Heading, Text } from "@radix-ui/themes";
// import { useDispatch, useSelector } from "react-redux";
// import { Project } from "../Interface/Section";
// import { addProjectSection } from "../State/SectionSlice";

// export default function Project() {
//   const dispatch = useDispatch();
//   const projectSlice = useSelector((store) => store.sections.project);

//   const addNewProject = () => {
//     const project = {
//       title: "",
//       description: "",
//     };
//     dispatch(addProjectSection(project));
//   };
//   return (
//     <Box className="w-full">
//       <Flex gap="5">
//         <Box className="w-3/6"></Box>
//         <Box className="w-full">
//           <>
//             <Heading as="h4" align="left" className="mb-8 font-semibold">
//               Project
//             </Heading>
//             <Text as="p" align="left" className="mb-2">
//               tfughkj
//             </Text>

//             {projectSlice.length > 0
//               ? projectSlice.map((set: Project) => {
//                   return (
//                     <Box className="border rounded-3xl shadow w-full h-fit p-8">
//                       {/* <Heading className="text-left mb-8">{set.title}</Heading> */}
//                       {/* <p>{set.description}</p> */}
//                       <input
//                         type="text"
//                         defaultValue={set.title}
//                         placeholder="Untitled"
//                       />
//                       <input
//                         type="text"
//                         defaultValue={set.description}
//                         placeholder="Enter description here.."
//                       />
//                     </Box>
//                   );
//                 })
//               : null}
//             <Box
//               className="border rounded-3xl shadow w-full h-fit p-8 cursor-pointer"
//               onClick={addNewProject}
//             >
//               <p>+</p>
//               <p>Add new card</p>
//             </Box>
//           </>
//         </Box>
//       </Flex>
//     </Box>
//   );
// }
import { Box, Flex, Grid } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { Project, Project, SkillSet } from "../../Interface/Section";

import { useState } from "react";
import SaveChanges from "../Atoms/SaveChanges";
import ShowEditDelete from "../Atoms/ShowEditDelete";
import LexicalTextarea from "../Common/LexicalEditor/LexicalTextarea";
import { addProjectSection, updateProject } from "../../State/SectionSlice";
import { ImageIcon } from "@radix-ui/react-icons";

export default function Project() {
  const dispatch = useDispatch();
  const projectSlice = useSelector((store) => store.sections.project);

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

  const addNewProject = (event) => {
    const project = {
      id: projectSlice.length + 1,
      title: "",
      image: event.target.files[0],
    };
    dispatch(addProjectSection(project));
  };

  const updateProjects = (project: Project, event) => {
    projectSlice.map((e) => {
      if (e.id === project.id) e.image = event.target.files[0];
    });
    let projects = projectSlice;
    // projects[project.id].image = event.target.files[0];
    // projects.image = event.target.files[0];
    dispatch(updateProject(projects));
    console.log(projects);
  };

  const handleSave = () => {
    setshowSave((prev) => !prev);
  };

  const handleCancel = () => {
    setshowSave((prev) => !prev);
  };

  const removeProject = () => {
    dispatch(addProjectSection([]));
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
                removeSection={removeProject}
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
                  ? "border-[#828282] border shadow rounded-3xl h-fit"
                  : "border-none h-fit"
              }`}
            >
              {projectSlice.length > 0
                ? projectSlice.map((project: Project) => {
                    return (
                      <Box
                        key={project.id}
                        className="border rounded-3xl shadow h-[535px] bg-white mr-5 p-8"
                      >
                        {project.image ? (
                          <div className="w-10 h-10 rounded-xl">
                            <label
                              htmlFor={`project${project.id}`}
                              className="cursor-pointer justify-center w-[100px]"
                            >
                              {project.image && (
                                <img
                                  className="border w-10 h-10 rounded-xl"
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
                                updateProjects(project, event);
                              }}
                            />
                          </div>
                        ) : (
                          <div className="border bg-bgGray border-dashed border-[#AEAEAE] w-10 h-10 rounded-xl">
                            <label
                              htmlFor={`project${project.id}`}
                              className="cursor-pointer justify-center"
                            >
                              <ImageIcon className="w-4 h-4 justify-center align-middle m-auto mt-[10px]" />
                            </label>
                            <input
                              id={`project${project.id}`}
                              type="file"
                              className="invisible"
                              onChange={() => {
                                updateProjects(project, event);
                              }}
                            />
                          </div>
                        )}
                        <LexicalTextarea
                          styles={TitleStyle}
                          placeholder={"Enter title here"}
                          isCompEditable={showSave}
                          isToolbarVisible={isToolbarVisible}
                        />
                      </Box>
                    );
                  })
                : null}
              {showSave ? (
                <Box
                  className="border bg-addCardBkg rounded-3xl shadow  min-h-[535px] pt-[225px] m-0 cursor-pointer"
                  onClick={addNewProject}
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
