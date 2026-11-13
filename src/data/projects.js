export const projects = [
  {
    id: 4,
    title: "Production-grade GitOps Platform on AWS EKS",
    date: "2026",
    description:
      "Provisioned VPC, IAM and ECR with Terraform and EKS clusters with CloudFormation, keeping dev and prod environments in parity. Deployed multi-service workloads with ArgoCD (App-of-Apps), syncing manifests from Git with no manual kubectl and no configuration drift. Built CI that builds Docker images, pushes them to ECR and updates manifest tags automatically (GitHub Actions for dev, Jenkins for gated production builds). Routed traffic through AWS Load Balancer Controller, ACM (TLS) and Route 53, and tracked pod health, request rates and ALB latency against SLOs in Prometheus and Grafana.",
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
      "Jenkins",
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
