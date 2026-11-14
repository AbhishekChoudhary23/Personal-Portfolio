import React from "react";
import styled from "styled-components";
import Reveal from "../common/Reveal";
import ModelStage, {
  Cluster,
  Pipeline,
  ServerRack,
} from "../canvas/OpsModels";

const Root = styled.section`
  position: relative;
  padding: 24px 24px 0;

  @media (max-width: 768px) {
    padding: 16px 16px 0;
  }
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(24px, 3.2vw, 32px);
  line-height: 1.15;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text};
`;

const Lead = styled.p`
  max-width: 560px;
  margin-top: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.textMuted};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

/* No cards here: the models sit straight on the page, split by hairlines. */
const Item = styled.figure`
  padding: 8px 24px 20px;
  border-left: 1px solid ${({ theme }) => theme.border};

  &:first-child {
    border-left: none;
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  @media (max-width: 820px) {
    padding: 8px 0 24px;
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.border};

    &:first-child {
      border-top: none;
    }
  }
`;

const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const Detail = styled.figcaption`
  margin-top: 6px;
  font-size: 14.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.textMuted};
`;

const items = [
  {
    name: "Infrastructure",
    label: "3D model of a server rack with blinking status lights",
    detail:
      "AWS across 10+ accounts, provisioned with Terraform and CloudFormation. Remote state and drift detection cut provisioning time by 50%.",
    model: <ServerRack />,
    spin: 0.3,
    tilt: 0.12,
    swing: 0.55,
  },
  {
    name: "Kubernetes and GitOps",
    label: "3D model of a cluster: pods orbiting a control plane",
    detail:
      "EKS workloads synced from Git by ArgoCD, App-of-Apps. No manual kubectl, no configuration drift.",
    model: <Cluster />,
    spin: 0.12,
    tilt: 0.1,
  },
  {
    name: "CI/CD pipelines",
    label: "3D model of a delivery loop with builds moving around it",
    detail:
      "Release workflows moved to AWS CodePipeline and GitHub Actions. Deployments run 30% faster.",
    model: <Pipeline />,
    spin: 0.18,
    tilt: 0.05,
  },
];

const Operations = () => (
  <Root aria-labelledby="operations-title">
    <Container>
      <Reveal>
        <Title id="operations-title">What I keep running</Title>
        <Lead>
          Three parts of the job, modelled. Move your pointer over one to turn
          it.
        </Lead>
      </Reveal>
      <Grid>
        {items.map(({ name, label, detail, model, spin, tilt, swing }) => (
          <Item key={name}>
            <ModelStage label={label} spin={spin} tilt={tilt} swing={swing}>
              {model}
            </ModelStage>
            <Name>{name}</Name>
            <Detail>{detail}</Detail>
          </Item>
        ))}
      </Grid>
    </Container>
  </Root>
);

export default Operations;
