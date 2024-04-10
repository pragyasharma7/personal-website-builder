import { Box, Container, Section } from "@radix-ui/themes";
import ImageUpload from "./Common/ImageUpload";
import AddSections from "./AddSections";
import Skillsets from "./Skillsets";

import AboutUs from "./AboutUs";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Project from "./Project";
import Experience from "./Experience";

export default function Homepage() {
  const sectionSlice = useSelector((store) => store.sections);

  useEffect(() => {}, [sectionSlice.about]);
  return (
    <Container
      className="px-32 bg-bgHomepage"
      size={{ initial: "3", md: "2", xl: "1" }}
    >
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

      {sectionSlice?.project?.length > 0 ? (
        <Section>
          <Project />
        </Section>
      ) : null}

      {sectionSlice?.experience?.length > 0 ? (
        <Section>
          <Experience />
        </Section>
      ) : null}

      <Section>
        <AddSections />
      </Section>
    </Container>
  );
}
