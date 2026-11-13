const devicon = (path) =>
  `https://raw.githubusercontent.com/devicons/devicon/master/icons/${path}.svg`;

const AWS_ICON = devicon(
  "amazonwebservices/amazonwebservices-original-wordmark"
);

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
      { name: "AWS WAF & Cognito", image: AWS_ICON },
      { name: "AWS Step Functions", image: AWS_ICON },
    ],
  },
  {
    title: "Infrastructure as Code (IaC)",
    skills: [
      {
        name: "Terraform",
        image:
          devicon("terraform/terraform-original"),
      },
      {
        name: "AWS CloudFormation",
        image: AWS_ICON,
      },
      {
        name: "Ansible",
        image:
          devicon("ansible/ansible-original"),
      },
    ],
  },
  {
    title: "Containerization & Orchestration",
    skills: [
      {
        name: "Docker",
        image:
          devicon("docker/docker-original"),
      },
      {
        name: "Kubernetes (K8s)",
        image:
          devicon("kubernetes/kubernetes-original"),
      },
      {
        name: "Amazon EKS",
        image: AWS_ICON,
      },
      {
        name: "Helm",
        image:
          devicon("helm/helm-original"),
      },
    ],
  },
  {
    title: "CI/CD & GitOps",
    skills: [
      {
        name: "GitHub Actions",
        image:
          devicon("githubactions/githubactions-original"),
      },
      {
        name: "Jenkins",
        image:
          devicon("jenkins/jenkins-original"),
      },
      {
        name: "ArgoCD",
        image:
          devicon("argocd/argocd-original"),
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
          devicon("python/python-original"),
      },
      {
        name: "Bash / Shell Scripting",
        image:
          devicon("bash/bash-original"),
      },
      {
        name: "Node.js",
        image:
          devicon("nodejs/nodejs-original"),
      },
      {
        name: "SQL",
        image:
          devicon("azuresqldatabase/azuresqldatabase-original"),
      },
      {
        name: "C++",
        image:
          devicon("cplusplus/cplusplus-original"),
      },
      {
        name: "JavaScript",
        image:
          devicon("javascript/javascript-original"),
      },
    ],
  },
  {
    title: "Observability & Monitoring",
    skills: [
      {
        name: "Prometheus",
        image:
          devicon("prometheus/prometheus-original"),
      },
      {
        name: "Grafana",
        image:
          devicon("grafana/grafana-original"),
      },
      {
        name: "ELK / EFK Stack",
        image:
          devicon("elasticsearch/elasticsearch-original"),
      },
      {
        name: "Datadog",
        image:
          devicon("datadog/datadog-original"),
      },
      {
        name: "AWS CloudWatch",
        image: AWS_ICON,
      },
      {
        name: "SLO / SLI Tracking",
        image:
          devicon("prometheus/prometheus-original"),
      },
      { name: "Incident Response & Reports" },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        image:
          devicon("mysql/mysql-original"),
      },
      {
        name: "PostgreSQL",
        image:
          devicon("postgresql/postgresql-original"),
      },
      {
        name: "Redis",
        image:
          devicon("redis/redis-original"),
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
          devicon("okta/okta-original"),
      },
      { name: "Amazon Cognito (OIDC)", image: AWS_ICON },
      {
        name: "CVE Patching & SOC2",
        image:
          devicon("linux/linux-original"),
      },
    ],
  },
  {
    title: "Core Competencies & Version Control",
    skills: [
      {
        name: "Linux Administration",
        image:
          devicon("linux/linux-original"),
      },
      {
        name: "Microservices & Network Routing",
        image:
          devicon("kubernetes/kubernetes-original"),
      },
      {
        name: "Disaster Recovery (DR)",
        image: AWS_ICON,
      },
      {
        name: "Git & GitHub",
        image:
          devicon("git/git-original"),
      },
      {
        name: "Bitbucket",
        image:
          devicon("bitbucket/bitbucket-original"),
      },
    ],
  },
];
