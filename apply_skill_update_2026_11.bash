#!/usr/bin/env bash
# Automated branch & update script for AbhishekChoudhary23/Personal-Portfolio
# Creates branch skill-update/2026-11 and applies all resume updates, bug fixes, and refactorings.
set -euo pipefail

echo "Creating and switching to branch skill-update/2026-11..."
git checkout -B skill-update/2026-11
mkdir -p src/components/common src/components/cards src/components/sections src/components/canvas src/data

cat <<'EOF_FILE' > package.json
{
  "name": "abhishek-portfolio-website",
  "version": "0.2.0",
  "private": true,
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mui/icons-material": "^5.16.14",
    "@mui/material": "^5.16.14",
    "@react-three/drei": "^9.121.4",
    "@react-three/fiber": "^8.17.12",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@testing-library/user-event": "^14.5.2",
    "framer-motion": "^11.18.2",
    "maath": "^0.10.8",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.0",
    "react-scripts": "5.0.1",
    "react-tilt": "^1.0.2",
    "react-vertical-timeline-component": "^3.6.0",
    "styled-components": "^6.1.15",
    "three": "^0.170.0",
    "typewriter-effect": "^2.21.0",
    "web-vitals": "^4.2.4"
  },
  "overrides": {
    "nth-check": "^2.1.1",
    "postcss": "^8.4.49",
    "webpack-dev-server": "^4.15.2",
    "semver": "^7.6.3",
    "micromatch": "^4.0.8",
    "braces": "^3.0.3",
    "ws": "^8.18.0",
    "serialize-javascript": "^6.0.2",
    "@babel/traverse": "^7.25.9",
    "rollup": "^2.79.2",
    "cross-spawn": "^7.0.6",
    "path-to-regexp": "^0.1.12"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
EOF_FILE

cat <<'EOF_FILE' > src/data/constants.js
import schoolLogo from "../images/St. Pauls.jpg";

export const navLinks = [
  { label: "About", href: "#About" },
  { label: "Certifications", href: "#Certifications" },
  { label: "Skills", href: "#Skills" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Education", href: "#Education" },
  { label: "Contact", href: "#Contact" },
];

export const projectCategories = [
  { label: "ALL", value: "all" },
  { label: "DevOps", value: "DevOps" },
  { label: "REACT JS APPS", value: "ReactJS app" },
  { label: "3D WEBSITES", value: "3D Websites" },
];

export const Bio = {
  name: "Abhishek Choudhary",
  location: "Kota, Rajasthan, India",
  phone: "(+91) 8079045615",
  email: "abhishek.sde.official@gmail.com",
  roles: [
    "AWS Certified Solutions Architect - Professional",
    "DevOps Engineer",
    "Site Reliability Engineer (SRE)",
    "Cloud Infrastructure Engineer",
    "Kubernetes & GitOps Specialist",
    "Fingerstyle Guitarist",
    "Basketball Player",
  ],
  description:
    "AWS Certified DevOps Engineer with 2 years of experience specializing in cloud infrastructure automation, GitOps-driven CI/CD pipelines, and Kubernetes orchestration. Proven track record of reducing deployment times by 30%, cutting Recovery Time Objective (RTO) by 80% via Disaster Recovery strategies, and automating multi-account AWS environments using Terraform. Strong foundation in Site Reliability Engineering (SRE), Linux administration, and Python/Bash scripting to optimize system reliability and reduce manual toil.",
  github: "https://github.com/AbhishekChoudhary23",
  resume: "/Abhishek_Choudhary_DevOps_Engineer.pdf",
  resumeDrive:
    "https://drive.google.com/file/d/1-e3Zb32Rw3R6qiedK4ve_K7CmfmtKIqV/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/abhishek-j-choudhary-2232a8202/",
  geeks: "https://www.geeksforgeeks.org/user/abhishek_lbj_23/",
  gfg: "https://www.geeksforgeeks.org/user/abhishek_lbj_23/",
  leetcode: "https://leetcode.com/u/abhishek_lbj/",
  insta: "https://www.instagram.com/abhishek_lbj_23/",
  facebook: "https://www.facebook.com/abhishekLBJ23/",
};

export const certifications = [
  {
    id: 0,
    name: "AWS Certified Solutions Architect - Professional (SAP-C02)",
    date: "May 30, 2026 - May 30, 2029",
    image:
      "https://images.credly.com/size/680x680/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
    link: "https://www.credly.com/badges/cbe924f3-ae6b-4af8-ad99-f0886dc97b12/public_url",
    tags: ["AWS", "SAP-C02", "Solutions Architect"],
  },
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    date: "October 23, 2025 - May 30, 2029",
    image:
      "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    link: "https://www.credly.com/badges/28270ea0-92ab-4ad3-95fb-fc9c8a39e74c/public_url",
    tags: ["AWS", "CLF-C02", "Cloud Practitioner"],
  },
];

const AWS_ICON =
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";

export const skills = [
  {
    title: "Cloud Platforms (AWS)",
    skills: [
      { name: "Amazon EKS & ECS", image: AWS_ICON },
      { name: "AWS EC2 & Lambda", image: AWS_ICON },
      { name: "Amazon RDS & S3", image: AWS_ICON },
      { name: "VPC, ALB & CloudFront", image: AWS_ICON },
      { name: "IAM & CloudWatch", image: AWS_ICON },
      { name: "Amazon ECR & Route 53", image: AWS_ICON },
    ],
  },
  {
    title: "Infrastructure as Code (IaC)",
    skills: [
      {
        name: "Terraform",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg",
      },
      {
        name: "AWS CloudFormation",
        image: AWS_ICON,
      },
      {
        name: "Ansible",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original.svg",
      },
    ],
  },
  {
    title: "Containerization & Orchestration",
    skills: [
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes (K8s)",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-original.svg",
      },
      {
        name: "Amazon EKS",
        image: AWS_ICON,
      },
      {
        name: "Helm",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/helm/helm-original.svg",
      },
    ],
  },
  {
    title: "CI/CD & GitOps",
    skills: [
      {
        name: "GitHub Actions",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg",
      },
      {
        name: "Jenkins",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
      },
      {
        name: "ArgoCD",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/argocd/argocd-original.svg",
      },
      {
        name: "AWS CodePipeline",
        image: AWS_ICON,
      },
    ],
  },
  {
    title: "Scripting & Programming",
    skills: [
      {
        name: "Python (Boto3)",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Bash / Shell Scripting",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg",
      },
      {
        name: "Node.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "SQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/azuresqldatabase/azuresqldatabase-original.svg",
      },
      {
        name: "C++",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    title: "Observability & Monitoring",
    skills: [
      {
        name: "Prometheus",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg",
      },
      {
        name: "Grafana",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg",
      },
      {
        name: "ELK / EFK Stack",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg",
      },
      {
        name: "Datadog",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/datadog/datadog-original.svg",
      },
      {
        name: "AWS CloudWatch",
        image: AWS_ICON,
      },
      {
        name: "SLO / SLI Tracking",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Redis",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      },
      {
        name: "Amazon RDS",
        image: AWS_ICON,
      },
    ],
  },
  {
    title: "Security & Compliance",
    skills: [
      { name: "IAM Policy Design", image: AWS_ICON },
      {
        name: "Okta Integration",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/okta/okta-original.svg",
      },
      { name: "Amazon Cognito", image: AWS_ICON },
      {
        name: "CVE Patching & SOC2",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      },
    ],
  },
  {
    title: "Core Competencies & Version Control",
    skills: [
      {
        name: "Linux Administration",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      },
      {
        name: "Microservices & Network Routing",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-original.svg",
      },
      {
        name: "Disaster Recovery (DR)",
        image: AWS_ICON,
      },
      {
        name: "Git & GitHub",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "Bitbucket",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/v2/D560BAQHPVqwXeFrO0w/company-logo_200_200/company-logo_200_200/0/1693224093103/ncompass_techstudio_logo?e=1784160000&v=beta&t=ekBhkNDuXh3S1Q5YRT2XyVgETQhuCKBk15FvY8cN9ss",
    role: "DevOps Engineer",
    company: "Ncompass Techstudios Pvt. Ltd. • Chennai, India",
    date: "Oct 2024 - Present",
    desc: "Engineered multi-account AWS infrastructure, GitOps-driven CI/CD pipelines, zero-downtime database upgrades, and centralized SRE observability across production environments.",
    highlights: [
      "Infrastructure Automation: Engineered AWS infrastructure across 6+ accounts using Terraform and CloudFormation, implementing remote state management and drift detection to reduce provisioning time by 50%.",
      "CI/CD Pipeline Optimization: Modernized legacy CI/CD release processes to AWS CodePipeline and GitHub Actions, cutting deployment times by 30% and eliminating manual configuration errors for API Gateway microservices.",
      "Database Administration: Executed zero-downtime RDS MySQL major version upgrades across 25+ databases in 10+ AWS accounts, ensuring 100% data integrity through automated Boto3 backup validation scripts.",
      "Disaster Recovery (DR): Architected and tested a Pilot Light DR strategy with automated failover mechanisms, reducing Recovery Time Objective (RTO) by 80% and aligning with business continuity goals.",
      "Process Automation: Automated multi-tenant onboarding using AWS Step Functions and custom Bash/Python scripts, compressing a 7-hour manual workflow into a 25-minute automated pipeline.",
      "Observability & SRE: Implemented centralized monitoring using Prometheus, Grafana, and CloudWatch; defined SLIs/SLOs for production services and reduced Mean Time to Detect (MTTD) incidents by 40%.",
    ],
    skills: [
      "AWS (EKS, ECS, EC2, RDS, Lambda, Step Functions)",
      "Terraform",
      "CloudFormation",
      "GitHub Actions",
      "AWS CodePipeline",
      "ArgoCD",
      "Docker",
      "Kubernetes (K8s)",
      "Prometheus",
      "Grafana",
      "CloudWatch",
      "Python (Boto3)",
      "Bash",
      "IAM & Okta",
    ],
  },
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/v2/D560BAQHPVqwXeFrO0w/company-logo_200_200/company-logo_200_200/0/1693224093103/ncompass_techstudio_logo?e=1784160000&v=beta&t=ekBhkNDuXh3S1Q5YRT2XyVgETQhuCKBk15FvY8cN9ss",
    role: "Software Developer Intern",
    company: "Ncompass Techstudios Pvt. Ltd. • Chennai, India",
    date: "Jul 2024 - Oct 2024",
    desc: "Delivered 10+ RESTful APIs incorporating secure authentication and authorization with JWT tokens to enhance user data protection and access control. Architected a full-stack Event Scheduler application utilizing ReactJS for the frontend and Node.js with Express.js for the backend, implementing clean and modularized code practices.",
    skills: [
      "ReactJS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "RESTful APIs",
      "JavaScript",
    ],
  },
  {
    id: 2,
    img: "https://th.bing.com/th/id/OIP.I4STDtEsch1JHTVLWOwRsAAAAA?rs=1&pid=ImgDetMain",
    role: "Frontend Engineer Intern",
    company: "CodeClause Pvt. Ltd.",
    date: "Jul 2023 - Aug 2023",
    desc: "Developed a job portal website for the college placement cell using ReactJS, Material UI, and Firebase Firestore to streamline job recruitment and real-time student applications, including custom search and filtering.",
    skills: [
      "ReactJS",
      "Firebase",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    doc: "https://drive.google.com/file/d/1MGwVHhwLyPKqOHJrjxx1zSBY75gd1u0h/view?usp=sharing",
  },
  {
    id: 3,
    img: "https://tse3.mm.bing.net/th/id/OIP.6p4d0QVF0DpU2zb6esHSXgHaHa?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    role: "Web Developer Intern",
    company: "PHN Technology Pvt. Ltd.",
    date: "Apr 2023 - Jun 2023",
    desc: "Created a responsive e-commerce platform using ReactJS, Context API, and Firebase authentication with dedicated product categories and dynamic cart state management.",
    skills: ["ReactJS", "Firebase", "Context API", "CSS", "JavaScript"],
    doc: "https://drive.google.com/file/d/1UyEuBJ2e5nxXnRuCMIzrpzC4fBKOXPN2/view?usp=sharing",
  },
];

export const education = [
  {
    id: 0,
    img: "https://th.bing.com/th/id/OIP.3FPm2ROYJ4f5_O6eZ_J4iQHaHV?rs=1&pid=ImgDetMain",
    school: "MBM University, Jodhpur",
    date: "Jul 2020 - May 2024",
    grade: "8.0/10 CGPA",
    desc: "Completed my Bachelor of Engineering (B.E.) in Computer and Electronics Engineering at MBM University, Jodhpur with a CGPA of 8.0/10. Coursework included Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. Active member of the Sargam ICSC Club at MBMU and Rhythm Guitarist in Nazm: The Band, Jodhpur.",
    degree: "B.E. in Computer and Electronics Engineering",
  },
  {
    id: 1,
    img: schoolLogo,
    school: "St. Paul's Senior Secondary School, Mala Road, Kota, Rajasthan",
    date: "Jul 2019 - Mar 2020",
    grade: "83%",
    desc: "Completed Class 12 senior secondary education in Science (Physics, Chemistry, Mathematics) with Physical Education, and represented the school at the Under-19 Basketball State Tournament in 2019.",
    degree: "CBSE (XII), Physics, Chemistry, Mathematics",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "St. Paul's Senior Secondary School, Mala Road, Kota, Rajasthan",
    date: "Jul 2017 - Mar 2018",
    grade: "83%",
    desc: "Completed Class 10 secondary school education with Science and Computer Science.",
    degree: "CBSE (X), Science with Computer Science",
  },
];

export const projects = [
  {
    id: 4,
    title: "Production-grade GitOps Platform on AWS",
    date: "2026",
    description:
      "Provisioned AWS VPC, IAM, and ECR via Terraform and EKS clusters via CloudFormation with 100% dev-to-prod parity. Implemented zero-touch GitOps with ArgoCD (App-of-Apps) auto-syncing multi-service manifests from aws-prod, automated GitHub Actions monorepo pipelines to build Docker images and update K8s manifest tags, configured AWS Load Balancer Controller (ALB), ACM (TLS/HTTPS), and Route 53 for path-based microservice routing, and deployed Prometheus and Grafana with auto-discovery to monitor pod health, request rates, and ALB latency against SLOs.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain-wordmark.svg",
    tags: [
      "AWS EKS",
      "Kubernetes (K8s)",
      "Terraform",
      "CloudFormation",
      "ArgoCD",
      "Prometheus & Grafana",
      "GitHub Actions",
      "ALB & Route 53",
    ],
    category: "DevOps",
    github:
      "https://github.com/AbhishekChoudhary23/aws-kubernetes-project/tree/aws-prod",
  },
  {
    id: 3,
    title: "GitHub Actions Hands-on",
    date: "June 2026",
    description:
      "A demonstration of a Node.js application featuring Docker containerization and an automated CI/CD pipeline via GitHub Actions publishing container images to GitHub Container Registry (GHCR).",
    image:
      "https://miro.medium.com/v2/resize:fit:711/1*PySU6ZmvjB_SAl4-vMp3Sw.png",
    tags: [
      "HTML",
      "Node JS",
      "Docker",
      "GHCR",
      "GitHub Actions",
      "CI/CD Pipeline",
    ],
    category: "DevOps",
    github: "https://github.com/AbhishekChoudhary23/Demo-github-actions.git",
    webapp: "https://webrtc-videochat.netlify.app/",
  },
  {
    id: 2,
    title: "Job Portal",
    date: "Jul 2023 - Aug 2023",
    description:
      "Developed a college job portal website using ReactJS, Material UI, and Firebase Firestore to streamline placement recruitment and real-time applications, featuring custom job search, filtering, and role-based authentication.",
    image:
      "https://github.com/AbhishekChoudhary23/Job-Portal/assets/76167003/185bf5e7-077a-483e-83ae-ce0acfe83a0c",
    tags: [
      "React Js",
      "Firebase",
      "Firestore",
      "Context API",
      "Material UI",
    ],
    category: "ReactJS app",
    github: "https://github.com/AbhishekChoudhary23/Job-Portal.git",
    webapp: "https://job-portal-mbm.netlify.app/",
  },
  {
    id: 1,
    title: "Admin Dashboard",
    date: "Oct 2023",
    description:
      "Designed an intuitive e-commerce admin dashboard using ReactJS, Material UI, and ApexCharts to analyze sales, revenue, expenses, recent orders, and customer reviews through interactive visualizations.",
    image:
      "https://github.com/AbhishekChoudhary23/Dashboard/assets/76167003/ab3388fa-48dd-4553-b626-6a6f7da98916",
    tags: ["React Js", "React ApexCharts", "Material UI", "CSS"],
    category: "ReactJS app",
    github: "https://github.com/AbhishekChoudhary23/Dashboard.git",
    webapp: "https://my-admin-dashboard-website.netlify.app/",
  },
  {
    id: 0,
    title: "3D iPhone Product Website",
    date: "Aug 2023 - Sep 2023",
    description:
      "Built an interactive 3D iPhone 14 product landing page featuring a Blender 3D model rendered with Three.js/WebGi and smooth scroll-triggered animations powered by GSAP.",
    image:
      "https://github.com/AbhishekChoudhary23/3D-iPhone-product-website/assets/76167003/30773a43-9276-4170-880e-18ec239af719",
    tags: ["React JS", "GSAP", "Three JS", "CSS", "Blender 3D Model"],
    category: "3D Websites",
    github:
      "https://github.com/AbhishekChoudhary23/3D-iPhone-product-website.git",
    webapp: "https://iphone14-website.netlify.app/",
  },
];
EOF_FILE

cat <<'EOF_FILE' > src/components/common/SectionLayout.js
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
EOF_FILE

cat <<'EOF_FILE' > src/components/Navbar.jsx
import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio, navLinks } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import Logo from "../images/Abhishek Logo_copy.jpeg";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  list-style: none;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ $isOpen }) => ($isOpen ? "100%" : "0")};
  z-index: ${({ $isOpen }) => ($isOpen ? "1000" : "-1000")};
`;

const Img = styled.img`
  width: 200px;
  height: 60px;
  border-radius: 30px;
  object-fit: cover;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const closeMenu = () => setIsOpen(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <Img src={Logo} alt={`${Bio.name} Logo`} />
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen((prev) => !prev)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          {navLinks.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </NavItems>

        <ButtonContainer>
          <GithubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </GithubButton>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu $isOpen={isOpen}>
            {navLinks.map((item) => (
              <li key={item.href}>
                <NavLink onClick={closeMenu} href={item.href}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <GithubButton
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: theme.primary,
                color: theme.bg,
              }}
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
EOF_FILE

cat <<'EOF_FILE' > src/components/canvas/Stars.jsx
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

// 5001 is divisible by stride=3 (1667 points * 3 coordinates), preventing NaN bounding sphere errors
const STAR_POSITIONS_LENGTH = 5001;

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(STAR_POSITIONS_LENGTH), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
EOF_FILE

cat <<'EOF_FILE' > src/components/cards/CertificationCard.jsx
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  min-height: 390px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: contain;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const DateText = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  margin-top: auto;
`;

const CertificationCard = ({ certifications }) => {
  if (!certifications) return null;
  return (
    <Card>
      <Image
        src={certifications.image}
        alt={certifications.name}
        loading="lazy"
      />
      {certifications.tags?.length > 0 && (
        <Tags>
          {certifications.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      )}
      <Details>
        <Title>{certifications.name}</Title>
        <DateText>{certifications.date}</DateText>
      </Details>
      <Button
        href={certifications.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Verify
      </Button>
    </Card>
  );
};

export default CertificationCard;
EOF_FILE

cat <<'EOF_FILE' > src/components/cards/CertifictationCard.jsx
export { default } from "./CertificationCard";
EOF_FILE

cat <<'EOF_FILE' > src/components/cards/EducationCard.jsx
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const School = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const DateText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={education?.date}
    >
      <Top>
        <Image src={education?.img} alt={education?.school} loading="lazy" />
        <Body>
          <School>{education?.school}</School>
          <Degree>{education?.degree}</Degree>
          <DateText>{education?.date}</DateText>
        </Body>
      </Top>
      <Grade>
        <b>Grade: </b>
        {education?.grade}
      </Grade>
      <Description>
        {education?.desc && <Span>{education?.desc}</Span>}
      </Description>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
EOF_FILE

cat <<'EOF_FILE' > src/components/cards/ExperienceCard.jsx
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const DateText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const HighlightsList = styled.ul`
  margin: 8px 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const HighlightItem = styled.li`
  line-height: 1.45;
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  align-self: flex-start;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={experience?.date}
    >
      <Top>
        <Image src={experience?.img} alt={experience?.company} loading="lazy" />
        <Body>
          <Role>{experience?.role}</Role>
          <Company>{experience?.company}</Company>
          <DateText>{experience?.date}</DateText>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience.desc}</Span>}
        {experience?.highlights?.length > 0 && (
          <HighlightsList>
            {experience.highlights.map((point, idx) => (
              <HighlightItem key={idx}>{point}</HighlightItem>
            ))}
          </HighlightsList>
        )}
        {experience?.skills?.length > 0 && (
          <Skills>
            <b>Skills:</b>
            <ItemWrapper>
              {experience.skills.map((skill, index) => (
                <Skill key={`${skill}-${index}`}>• {skill}</Skill>
              ))}
            </ItemWrapper>
          </Skills>
        )}
      </Description>
      {experience?.doc && (
        <Button
          href={experience.doc}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Document
        </Button>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
EOF_FILE

cat <<'EOF_FILE' > src/components/cards/ProjectCard.jsx
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  min-height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const DateText = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ActionLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: auto;
`;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ project }) => {
  if (!project) return null;
  const liveUrl = project.webapp || project.web;

  return (
    <Card>
      <Image src={project.image} alt={project.title} loading="lazy" />
      {project.tags?.length > 0 && (
        <Tags>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      )}
      <Details>
        <Title>{project.title}</Title>
        <DateText>{project.date}</DateText>
        <Description title={project.description}>
          {project.description}
        </Description>
      </Details>
      {project.member?.length > 0 && (
        <Members>
          {project.member.map((member, id) => (
            <Avatar key={id} src={member.img} alt={member.name || "Member"} />
          ))}
        </Members>
      )}
      <ActionLinks>
        {project.github && (
          <Button
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </Button>
        )}
        {liveUrl && (
          <Button href={liveUrl} target="_blank" rel="noopener noreferrer">
            Live App
          </Button>
        )}
      </ActionLinks>
    </Card>
  );
};

export default ProjectCard;
EOF_FILE

cat <<'EOF_FILE' > src/components/sections/Certifications.jsx
import React from "react";
import styled from "styled-components";
import { certifications } from "../../data/constants";
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
            <CertificationCard key={cert.id} certifications={cert} />
          ))}
        </CardContainer>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Certifications;
EOF_FILE

cat <<'EOF_FILE' > src/components/sections/Skills.jsx
import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";
import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
  SectionDesc,
} from "../common/SectionLayout";

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 450px;
  min-width: 300px;
  min-height: 280px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(54, 230, 23, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 24px;
  }
`;

const SkillTitle = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const Skills = () => {
  return (
    <SectionContainer id="Skills" $marginTop="0px">
      <SectionWrapper>
        <SectionTitle>Skills</SectionTitle>
        <SectionDesc>
          Core Cloud, DevOps, SRE, Infrastructure as Code, and Software
          Engineering skills developed across production environments.
        </SectionDesc>

        <SkillsContainer>
          {skills.map((skill) => (
            <Tilt key={skill.title}>
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem key={item.name}>
                      {item.image && (
                        <SkillImage
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      )}
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Skills;
EOF_FILE

cat <<'EOF_FILE' > src/components/sections/Experience.jsx
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";
import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
  SectionDesc,
} from "../common/SectionLayout";

const Experience = () => {
  return (
    <SectionContainer id="Experience">
      <SectionWrapper>
        <SectionTitle>Experience</SectionTitle>
        <SectionDesc>
          My work experience as a DevOps &amp; Software Engineer automating
          cloud infrastructure and CI/CD pipelines.
        </SectionDesc>

        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard
              key={`experience-${experience.id}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Experience;
EOF_FILE

cat <<'EOF_FILE' > src/components/sections/Projects.jsx
import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { projects, projectCategories } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
  SectionDesc,
} from "../common/SectionLayout";

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ $active, theme }) =>
    $active &&
    `
    background: ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  const filteredProjects = useMemo(() => {
    if (toggle === "all") return projects;
    return projects.filter((item) => item.category === toggle);
  }, [toggle]);

  return (
    <SectionContainer id="Projects">
      <SectionWrapper>
        <SectionTitle>Projects</SectionTitle>
        <SectionDesc>
          Production-grade DevOps, GitOps, Cloud Infrastructure, and Full-Stack
          web engineering projects.
        </SectionDesc>

        <ToggleButtonGroup>
          {projectCategories.map((cat, idx) => (
            <React.Fragment key={cat.value}>
              {idx > 0 && <Divider />}
              <ToggleButton
                $active={toggle === cat.value}
                onClick={() => setToggle(cat.value)}
              >
                {cat.label}
              </ToggleButton>
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainer>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Projects;
EOF_FILE

cat <<'EOF_FILE' > src/components/sections/Education.jsx
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
  SectionDesc,
} from "../common/SectionLayout";

const Education = () => {
  return (
    <SectionContainer id="Education" $marginTop="0px">
      <SectionWrapper>
        <SectionTitle>Education</SectionTitle>
        <SectionDesc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </SectionDesc>

        <VerticalTimeline>
          {education.map((item) => (
            <EducationCard key={`education-${item.id}`} education={item} />
          ))}
        </VerticalTimeline>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Education;
EOF_FILE

cat <<'EOF_FILE' > src/components/sections/Hero.jsx
import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  max-width: 1366px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  display: inline-block;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  color: white;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Image src={HeroImg} alt={Bio.name} />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
EOF_FILE

cat <<'EOF_FILE' > src/components/sections/Contact.jsx
import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Bio } from "../../data/constants";
import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
  SectionDesc,
} from "../common/SectionLayout";

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: rgb(1, 124, 22);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      const formData = new FormData(form.current);
      const subject = encodeURIComponent(formData.get("subject") || "Portfolio Inquiry");
      const body = encodeURIComponent(
        `From: ${formData.get("from_name")} (${formData.get("from_email")})\n\n${formData.get("message")}`
      );
      window.location.href = `mailto:${Bio.email}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setIsSending(true);
      emailjs.init(publicKey);
      await emailjs.sendForm(serviceId, templateId, form.current);
      alert("Message Sent!");
      form.current.reset();
    } catch (error) {
      alert(
        "Failed to send message: " +
          (error?.text || error?.message || "Please try again later.")
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <SectionContainer id="Contact" $marginTop="0px">
      <SectionWrapper>
        <SectionTitle>Contact</SectionTitle>
        <SectionDesc $marginBottom="0px">
          Feel free to reach out to me for any questions or opportunities!
        </SectionDesc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            type="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <ContactInput
            type="text"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <ContactInput
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={4}
            required
          />
          <ContactButton type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </ContactButton>
        </ContactForm>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Contact;
EOF_FILE

cat <<'EOF_FILE' > src/components/sections/Footer.jsx
import React from "react";
import styled from "styled-components";
import { Bio, navLinks } from "../../data/constants";
import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";

import gfg from "../../images/gfg.svg";
import lc from "../../images/leetcode.svg";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  list-style: none;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const Img = styled.img`
  width: 2rem;
  height: 31px;
  display: inline-block;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Footer = () => {
  const gfgUrl = Bio.geeks || Bio.gfg;

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>{Bio.name}</Logo>
        <Nav>
          {navLinks.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookRounded />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
          >
            <Img src={lc} alt="LeetCode" />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={gfgUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GeeksforGeeks"
          >
            <Img src={gfg} alt="GeeksforGeeks" />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; {new Date().getFullYear()} {Bio.name}. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
EOF_FILE

echo "All source files updated on branch skill-update/2026-11."
echo "Next steps:"
echo "  1. Copy Abhishek_Choudhary_DevOps_Engineer.pdf into public/Abhishek_Choudhary_DevOps_Engineer.pdf"
echo "  2. Run: npm install && npm run build"
# echo "  3. Run: git add . && git commit -m \"feat: update portfolio with Nov 2026 resume, fix bugs, and refactor\" && git push -u origin skill-update/2026-11"