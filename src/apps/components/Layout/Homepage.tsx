import { Box, Container, Section } from "@radix-ui/themes";
import AddSections from "../Molecules/AddSections";
import Skillsets from "../Molecules/Skillsets";

import AboutUs from "../Molecules/AboutUs";
import Introduction from "../Molecules/Introduction";
import Navbar from "../Molecules/Navbar";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import Project from "../Molecules/Project";
import Experience from "../Molecules/Experience";
import Header from "../Molecules/Header";

export default function Homepage() {
  const sectionSlice = useSelector((store) => store.sections);
  const lexicalEditableSlice = useSelector((store) => store.lexicalEditor);
  const divRef = useRef(null);

  useEffect(() => {}, [sectionSlice.about]);
  return (
    <>
      <Header scrollToRef={divRef} />
      <Box className="md:px-32 max-sm:p-5 bg-bgHomepage h-max min-h-screen">
        <Navbar />

        <Introduction />

        {sectionSlice?.about.data?.description?.length >= 0 ? (
          <Section ref={divRef}>
            <AboutUs />
          </Section>
        ) : null}

        {sectionSlice?.skillset?.data?.length > 0 ? (
          <Section ref={divRef}>
            <Skillsets />
          </Section>
        ) : null}

        {sectionSlice?.project?.data?.length > 0 ? (
          <Section ref={divRef}>
            <Project />
          </Section>
        ) : null}

        {sectionSlice?.experience?.data?.length > 0 ? (
          <Section ref={divRef}>
            <Experience />
          </Section>
        ) : null}
        {lexicalEditableSlice.isEditable ? (
          <Section>
            <AddSections />
          </Section>
        ) : null}
      </Box>
    </>
  );
}
