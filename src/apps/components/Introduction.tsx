import { Box, Flex, Heading } from "@radix-ui/themes";

import { useDispatch, useSelector } from "react-redux";

import LexicalTextarea from "./Common/LexicalTextarea";
import { addImage } from "../State/IntroductionSlice";
import { ImageIcon } from "@radix-ui/react-icons";

export default function Introduction() {
  const introductionSlice = useSelector((store) => store.introduction);
  // const image = useSelector((store) => (imageData = store.image.image));
  const dispatch = useDispatch();

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
    minHeight: "40px",
  };
  const emailStyle = {
    fontSize: "14px",
    minHeight: "40px",
  };
  const handleFileUpload = (event) => {
    dispatch(addImage(event.target.files[0]));
  };

  return (
    <Box>
      <Flex gap="1">
        <Box className="mr-48">
          {introductionSlice.image ? (
            <div className="w-[295px] h-[295px] rounded-3xl">
              <label
                htmlFor="file"
                className="cursor-pointer justify-center w-[100px]"
              >
                {introductionSlice.image && (
                  <img
                    className="border w-[295px] h-[295px]  rounded-3xl"
                    src={URL.createObjectURL(introductionSlice.image)}
                    alt="Uploaded image"
                  />
                )}
              </label>
              <input
                id="file"
                type="file"
                className="invisible"
                onChange={handleFileUpload}
              />
            </div>
          ) : (
            <div className="border bg-bgGray border-dashed border-[#AEAEAE] w-[295px] h-[295px] rounded-3xl">
              <label
                htmlFor="file"
                className="cursor-pointer justify-center mt-[115px]"
              >
                <ImageIcon className="w-10 h-10 justify-center align-middle m-auto mt-[115px]" />
              </label>
              <input
                id="file"
                type="file"
                className="invisible"
                onChange={handleFileUpload}
              />
            </div>
          )}
          <Heading as="h6" className="text-base text-left font-bold mt-2">
            <LexicalTextarea
              styles={nameStyle}
              placeholder={"Your name here"}
            />
          </Heading>
          <Heading as="h6" className="text-sm text-left">
            <LexicalTextarea styles={emailStyle} placeholder={"Enter email"} />
          </Heading>
        </Box>
        <Box className="mt-7 w-full">
          <h1 className="text-7xl text-left ">
            <LexicalTextarea
              styles={headingOneStyle}
              placeholder={"Click to add title"}
            />
          </h1>
          <h6 className="text-lg text-left w-[341px] mt-5">
            <LexicalTextarea
              styles={subheadingStyle}
              placeholder={"Click to add subtitle"}
            />
          </h6>
        </Box>
      </Flex>
    </Box>
  );
}
