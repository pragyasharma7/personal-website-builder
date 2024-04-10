import { Flex, Box, Avatar } from "@radix-ui/themes";

import { useDispatch, useSelector } from "react-redux";
import { addNavBarImage } from "../State/SiteInfoSlice";
import ImageUpload from "./Common/ImageUpload";
import { useState } from "react";
import { ImageIcon } from "@radix-ui/react-icons";
import { Navbar } from "../Interface/Section";
addNavBarImage;

export default function Navbar() {
  const SiteInfoSlice: Navbar = useSelector((store) => store.siteInfo);

  const dispatch = useDispatch();

  const handleFileUpload = (event) => {
    dispatch(addNavBarImage(event.target.files[0]));
  };

  return (
    <Box className="pt-10">
      <Flex gap="1">
        {SiteInfoSlice.image ? (
          <div className="w-10 h-10 rounded-xl">
            <label
              htmlFor="file-nav"
              className="cursor-pointer justify-center w-[100px]"
            >
              {SiteInfoSlice.image && (
                <img
                  className="border w-10 h-10 rounded-xl"
                  src={URL.createObjectURL(SiteInfoSlice.image)}
                  alt="Uploaded image"
                />
              )}
            </label>
            <input
              id="file-nav"
              type="file"
              className="invisible"
              onChange={handleFileUpload}
            />
          </div>
        ) : (
          <div className="border bg-bgGray border-dashed border-[#AEAEAE] w-10 h-10 rounded-xl">
            <label htmlFor="file-nav" className="cursor-pointer justify-center">
              <ImageIcon className="w-4 h-4 justify-center align-middle m-auto mt-[10px]" />
            </label>
            <input
              id="file-nav"
              type="file"
              className="invisible"
              onChange={handleFileUpload}
            />
          </div>
        )}

        <p className="text-sm p-2.5 font-bold h-10">Site Builder</p>
      </Flex>
    </Box>
  );
}
