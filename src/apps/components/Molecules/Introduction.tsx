import { Box, Heading } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../State/IntroductionSlice";
import { ImageIcon } from "@radix-ui/react-icons";
import LexicalTextWrapper from "../Atoms/LexicalTextWrapper";

export default function Introduction() {
  const introductionSlice = useSelector((store) => store.introduction);
  const lexicalEditableSlice = useSelector((store) => store.lexicalEditor);

  const dispatch = useDispatch();

  const headingOneStyle = {
    fontSize: "76px",
  };

  const headingOneSmStyle = {
    fontSize: "36px",
  };
  const subheadingStyle = {
    fontSize: "18px",
  };
  const nameStyle = {
    fontSize: "16px",
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
    <div className="md:flex sm:block md:pt-14 max-md:pt-8">
      <Box className="md:mr-48 max-sm:mr-0">
        {introductionSlice.image ? (
          <div className="w-[295px] h-[295px] rounded-3xl mb-2">
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
              disabled={!lexicalEditableSlice.isEditable}
              className="invisible"
              onChange={handleFileUpload}
            />
          </div>
        ) : (
          <div className="border bg-bgGray border-dashed border-[#AEAEAE] w-[295px] h-[295px] rounded-3xl mb-2">
            <label
              htmlFor="file"
              className="cursor-pointer justify-center mt-[115px]"
            >
              <ImageIcon className="w-10 h-10 justify-center align-middle m-auto mt-[115px]" />
            </label>
            <input
              id="file"
              type="file"
              disabled={!lexicalEditableSlice.isEditable}
              className="invisible"
              onChange={handleFileUpload}
            />
          </div>
        )}
        <Heading
          as="h6"
          className="text-base text-left font-bold max-w-[295px] h-fit max-md:max-w-full"
        >
          <LexicalTextWrapper
            styles={nameStyle}
            placeholder={"Your name here"}
          />
        </Heading>
        <Heading
          as="h6"
          className="text-sm text-left max-w-[295px] h-fit max-md:max-w-full"
        >
          <LexicalTextWrapper styles={emailStyle} placeholder={"Enter email"} />
        </Heading>
      </Box>
      <Box className="mt-7 w-full max-md:max-w-full">
        <h1 className="text-left">
          <LexicalTextWrapper
            styles={
              window.matchMedia("(min-width: 768px)").matches
                ? headingOneStyle
                : headingOneSmStyle
            }
            placeholder={"Click to add title"}
          />
        </h1>
        <h6 className="text-lg text-left max-w-[341px] mt-5  max-md:max-w-full">
          <LexicalTextWrapper
            styles={subheadingStyle}
            placeholder={"Click to add subtitle"}
          />
        </h6>
      </Box>
    </div>
  );
}
