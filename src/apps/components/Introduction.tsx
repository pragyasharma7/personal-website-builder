import { Box, Flex } from "@radix-ui/themes";
import ImageUpload from "./Common/ImageUpload";
import { useSelector } from "react-redux";
import { addImage } from "../State/IntroductionSlice";
import LexicalTextarea from "./Common/LexicalTextarea";

export default function Introduction() {
  const data: any = useSelector((store) => store.introduction);
  // const image = useSelector((store) => (imageData = store.image.image));

  // console.log(data, 'introduction')
  const key = 100;

  // const props = {
  //   image: data.image,
  //   addImage: addImage,

  // };
  const style = {
    width: "295px",
    height: "295px",
    borderRadius: "10%",
  };
  const headingOneStyle = {
    fontSize: "76px",
  };
  const subheadingStyle = {
    fontSize: "16px",
  };
  const nameStyle = {
    fontSize: "14px",
    fontWeight: 600,
  };
  const emailStyle = {
    fontSize: "14px",
  };

  return (
    <Box>
      <Flex gap="1">
        <Box className="mr-48">
          <ImageUpload style={style} source={"introduction"} />
          <h6 className="text-base text-left font-bold mb-2">
            <LexicalTextarea styles={nameStyle} />
          </h6>
          <p className="text-sm text-left">
            <LexicalTextarea styles={emailStyle} />
          </p>
        </Box>
        <Box className="mt-7 w-full">
          <h1 className="text-7xl text-left ">
            <LexicalTextarea styles={headingOneStyle} />
          </h1>
          <h6 className="text-lg text-left w-[341px] mt-5">
            <LexicalTextarea styles={subheadingStyle} />
          </h6>
        </Box>
      </Flex>
    </Box>
  );
}
