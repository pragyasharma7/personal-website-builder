import { ImageIcon } from "@radix-ui/react-icons";
import { Box } from "@radix-ui/themes";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function ImageUpload(props) {
  const dispatch = useDispatch()
  console.log(props, 'props')
  const [file, setFile] = useState(null);
  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
    dispatch(props.image.addImage(event.target.files[0]));
  };
  const width = props.image.style;
  console.log(props)
  if (props.image.image) {
    return (
      <Box>
        <div style={{ ...props.image.style }}>
          <label
            htmlFor="file"
            className="cursor-pointer justify-center w-[100px]"
          >
            {file && (
              <img
                className="border"
                style={{ ...props.image.style }}
                src={URL.createObjectURL(file)}
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
      </Box>
    );
  } else {
    return (
      <Box className="">
        <div
          className="border bg-bgGray border-dashed border-[#AEAEAE]"
          style={{ ...props.image.style }}
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
  }
}
