import { ImageIcon } from "@radix-ui/react-icons";
import { Box } from "@radix-ui/themes";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../../State/IntroductionSlice";
import { addNavbarImage } from "../../State/SiteInfo/SiteInfoSlice";

export default function ImageUpload({ style, source }) {
  const dispatch = useDispatch();

  console.log(style, source, "props");

  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    if (source === "navBar") {
      dispatch(addNavbarImage(event.target.files[0]));
    } else if (source === "introduction") {
      dispatch(addImage(event.target.files[0]));
    }

    setFile(event.target.files[0]);
    // dispatch(props.image.addImage(event.target.files[0]));
  };

  // const width = props.image.style;
  // console.log(props)
  // if (style) {
  //   return (
  //     <Box>
  //       <div style={{ ...style }}>
  //         <label
  //           htmlFor="file"
  //           className="cursor-pointer justify-center w-[100px]"
  //         >
  //           {file && (
  //             <img
  //               className="border"
  //               style={{ ...style }}
  //               src={URL.createObjectURL(file)}
  //               alt="Uploaded image"
  //             />
  //           )}
  //         </label>
  //         <input
  //           id="file"
  //           type="file"
  //           className="invisible"
  //           onChange={handleFileUpload}
  //         />
  //       </div>
  //     </Box>
  //   );
  // } else {
  return (
    <Box className="">
      <div
        className="border bg-bgGray border-dashed border-[#AEAEAE]"
        style={{ ...style }}
      >
        <label htmlFor="file" className="cursor-pointer justify-center">
          <ImageIcon className="w-10 h-10 justify-center align-middle m-auto mt-0" />
        </label>
        <input
          id="file"
          type="file"
          className="invisible"
          onChange={handleFileUpload}
        />
      </div>
    </Box>
  );
  // }
}
