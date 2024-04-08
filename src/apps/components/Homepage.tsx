import { Box, Section } from "@radix-ui/themes";
import ImageUpload from "./Common/ImageUpload";
import AddSections from "./AddSections";
import Skillsets from "./Skillsets";

import AboutUs from "./AboutUs";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Homepage() {
  const sectionSlice = useSelector((store) => store.sections);

  useEffect(() => {}, [sectionSlice.about]);

  return (
    <Box className="px-32 bg-bgHomepage">
      <Navbar />
      <Section>
        <Introduction />
      </Section>

      {sectionSlice?.about.description?.length >= 0 ? (
        <Section>
          <AboutUs />
        </Section>
      ) : null}

      {sectionSlice?.skillset?.length > 0 ? (
        <Section>
          <Skillsets />
        </Section>
      ) : null}

      <Section>
        <AddSections />
      </Section>
    </Box>
  );
}
