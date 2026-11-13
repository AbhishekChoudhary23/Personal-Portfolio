import React from "react";
import styled from "styled-components";
import { certifications } from "../../data";
import CertificationCard from "../cards/CertificationCard";
import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
} from "../common/SectionLayout";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Certifications = () => {
  return (
    <SectionContainer id="Certifications">
      <SectionWrapper>
        <SectionTitle>Certifications</SectionTitle>
        <CardContainer>
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </CardContainer>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Certifications;
