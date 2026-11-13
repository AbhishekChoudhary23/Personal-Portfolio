import React from "react";
import styled from "styled-components";
import { certifications } from "../../data";
import CertificationCard from "../cards/CertificationCard";
import Section from "../common/SectionLayout";
import Reveal from "../common/Reveal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr));
  gap: 18px;
`;

const Certifications = () => (
  <Section
    id="Certifications"
    index="01"
    title="Certifications"
    description="Industry credentials, each verifiable on Credly."
  >
    <Grid>
      {certifications.map((cert, index) => (
        <Reveal key={cert.id} delay={index * 0.08}>
          <CertificationCard certification={cert} />
        </Reveal>
      ))}
    </Grid>
  </Section>
);

export default Certifications;
