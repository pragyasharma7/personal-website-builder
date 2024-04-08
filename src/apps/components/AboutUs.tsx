import { Avatar, Box, Card, Flex, Heading } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LexicalTextarea from "./Common/LexicalTextarea";
import SaveChanges from "./Common/SaveChanges";
import ShowEditDelete from "./Common/ShowEditDelete";

export default function AboutUs() {
  const aboutSlice = useSelector((store) => store.sections.about);
  const dispatch = useDispatch();
  useEffect(() => {}, [aboutSlice]);
  console.log(aboutSlice, aboutSlice);


/////
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };



  ///////
  const style = {
    fontSize: "16px",
  };

  {
    return aboutSlice.description === "" ? (
      <Box className="w-full" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Flex gap="5" >
          <Box className="w-3/6"></Box>
          <Box className="w-full h-fit">
            <SaveChanges />
            <ShowEditDelete/>
            <Box className="border rounded-3xl shadow p-8">
              <Heading className="text-left mb-8">About Me</Heading>
              <LexicalTextarea styles={style} />
            </Box>
          </Box>
        </Flex>
      </Box>
    ) : (
      <Box className="w-full" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Flex gap="5">
          <Box className="w-3/6"></Box>
          <Box className="w-full h-fit">
            <SaveChanges />
                        <ShowEditDelete/>

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
