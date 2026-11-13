import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${({ $marginTop }) => $marginTop || "50px"};
  padding: 0 16px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

export const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

export const SectionTitle = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const SectionDesc = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "40px"};
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
