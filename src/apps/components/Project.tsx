import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { Project } from "../Interface/Section";
import { addProjectSection } from "../State/SectionSlice";

export default function Project() {
  const dispatch = useDispatch();
  const projectSlice = useSelector((store) => store.sections.project);

  const addNewProject = () => {
    const project = {
      title: "",
      description: "",
    };
    dispatch(addProjectSection(project));
  };
  return (
    <Box className="w-full">
      <Flex gap="5">
        <Box className="w-3/6"></Box>
        <Box className="w-full">
          <>
            <Heading as="h4" align="left" className="mb-8 font-semibold">
              Project
            </Heading>
            <Text as="p" align="left" className="mb-2">
              tfughkj
            </Text>

            {projectSlice.length > 0
              ? projectSlice.map((set: Project) => {
                  return (
                    <Box className="border rounded-3xl shadow w-full h-fit p-8">
                      {/* <Heading className="text-left mb-8">{set.title}</Heading> */}
                      {/* <p>{set.description}</p> */}
                      <input
                        type="text"
                        defaultValue={set.title}
                        placeholder="Untitled"
                      />
                      <input
                        type="text"
                        defaultValue={set.description}
                        placeholder="Enter description here.."
                      />
                    </Box>
                  );
                })
              : null}
            <Box
              className="border rounded-3xl shadow w-full h-fit p-8 cursor-pointer"
              onClick={addNewProject}
            >
              <p>+</p>
              <p>Add new card</p>
            </Box>
          </>
        </Box>
      </Flex>
    </Box>
  );
}
