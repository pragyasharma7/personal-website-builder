import { Avatar, Box, Card, Flex, Heading } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LexicalTextarea from "./Common/LexicalTextarea";
import SaveChanges from "./Common/SaveChanges";
import ShowEditDelete from "./Common/ShowEditDelete";
import { changesSaved } from "../State/SaveChangesSlice";
import { addAboutSection } from "../State/SectionSlice";

export default function AboutUs() {
  const dispatch = useDispatch();
  const aboutSlice = useSelector((store) => store.sections.about);
  const saveChangesSlice = useSelector((store) => store.saveChanges);

  const [text, setText] = useState("");

  useEffect(() => {
    // saveChangesSlice.save
    //   ? dispatch(addAboutSection({ description: text }))
    //   : setText(aboutSlice.description);

    console.log("calling dispatch");
  }, [saveChangesSlice]);

  console.log(aboutSlice, saveChangesSlice.save);
  const setAbout = (data) => {
    setText(data);
  };
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

  {
    return saveChangesSlice.save ? (
      <Box className="w-full">
        <Flex gap="5">
          <Box className="w-3/6"></Box>
          <Box className="w-full h-fit">
            {saveChangesSlice.save ? <SaveChanges /> : null}
            {/* {isHovering && !saveChangesSlice.save ? <ShowEditDelete /> : null} */}
            <Box className="border rounded-3xl shadow p-8">
              <button onClick={setAbout}></button>
              <Heading className="text-left mb-8">About Me</Heading>
              {/* <LexicalTextarea styles={style} /> */}
              <input
                type="text"
                onChange={(event) => setAbout(event.target.value)}
                value={text}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    ) : (
      <Box
        className="w-full"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Flex gap="5">
          <Box className="w-3/6"></Box>
          <Box className="w-full h-fit">
            {saveChangesSlice.save ? <SaveChanges /> : null}

            {isHovering && !saveChangesSlice.save ? <ShowEditDelete /> : null}

            <Box className="border rounded-3xl shadow p-8">
              <Heading className="text-left mb-8">About Me</Heading>
              <p>{aboutSlice.description}</p>
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  }
}
