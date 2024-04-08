import { Flex, Box, Avatar } from "@radix-ui/themes";
import ImageUpload from "./Common/ImageUpload";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../State/SiteInfo/SiteInfoSlice";

export default function Navbar() {
  const data: any = useSelector((store) => store.siteInfo);
  // const image = useSelector((store) => (imageData = store.image.image));

  console.log(data);

  // const props = {
  //   image: data.image,
  //   addImage: addImage,

  // }
  const style = {
    width: "40px",
    height: "40px",
    borderRadius: "10%",
  };

  return (
    <Box className="pt-10">
      <Flex gap="1">
        {/* <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
          className="cursor-pointer"
        /> */}
        <ImageUpload style={style} source={"navBar"} />
        <p className="text-sm p-2.5 font-bold h-10">Site Builder</p>
      </Flex>
    </Box>
  );
}
