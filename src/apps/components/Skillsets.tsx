import { Box, Flex, Heading } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { SkillSet } from "../Interface/Section";
import { addSkillsetSection } from "../State/SectionSlice";

export default function Skillsets() {
  const dispatch = useDispatch();
  const skillsetSlice = useSelector((store) => store.sections.skillset);

  const addNewSet = () => {
    const skillset = {
      title: "",
      description: "",
    };
    dispatch(addSkillsetSection(skillset));
  };
  return (
    <Box className="w-full">
      <Flex gap="5">
        <Box className="w-3/6"></Box>
        <>
          {skillsetSlice.length > 0
            ? skillsetSlice.map((set: SkillSet) => {
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
            onClick={addNewSet}
          >
            <p>+</p>
            <p>Add new card</p>
          </Box>
        </>
      </Flex>
    </Box>
  );
}
