import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'devsecops-implementation',
		color: 'red',
		description:
			'Orchestrated end-to-end security integration across CI/CD pipelines with SAST, DAST, container scanning, and infrastructure compliance automation. Delivered 40% reduction in security vulnerabilities and sustained SOC 2 compliance.',
		shortDescription:
			'End-to-end DevSecOps implementation with comprehensive security automation and compliance.',
		links: [],
		logo: Assets.Security,
		name: 'DevSecOps Implementation',
		period: { from: new Date(2024, 0), to: new Date(2025, 0) },
		skills: getSkills('azure', 'security', 'devops', 'kubernetes', 'docker'),
		type: 'Security'
	},
	{
		slug: 'enterprise-aks-migration',
		color: 'blue',
		description:
			'Architected enterprise-grade cloud-native transformation from legacy monolith to microservices on AKS. Deployed GitOps workflows, infrastructure as code, and comprehensive monitoring. Secured 99.99% availability SLA while serving 100K+ concurrent users.',
		shortDescription:
			'Enterprise AKS migration platform serving 100K+ users with 99.99% availability.',
		links: [],
		logo: Assets.Aks,
		name: 'Enterprise AKS Migration Platform',
		period: { from: new Date(2024, 0), to: new Date(2025, 0) },
		skills: getSkills('azure', 'aks', 'kubernetes', 'terraform', 'devops'),
		type: 'Migration'
	},
	{
		slug: 'azure-landing-zones',
		color: 'green',
		description:
			'Designed enterprise-scale Terraform framework enabling rapid cloud adoption for 200+ teams. Automated networking, security policies, governance, and monitoring infrastructure. Reduced organizational cloud onboarding time by 85% through standardized templates.',
		shortDescription:
			'Enterprise Azure Landing Zones automation reducing onboarding time by 85%.',
		links: [],
		logo: Assets.LandingZone,
		name: 'Azure Landing Zone Automation',
		period: { from: new Date(2022, 5), to: new Date(2024, 7) },
		skills: getSkills('azure', 'terraform', 'network', 'security', 'devops'),
		type: 'Infrastructure'
	},
	{
		slug: 'terraform-modules-framework',
		color: 'purple',
		description:
			'Architected 50+ reusable Terraform modules across 15+ environments using design patterns and high-level design principles. Created standardized infrastructure templates for AKS, Container Apps, and Functions ensuring compliance and consistency.',
		shortDescription:
			'Comprehensive Terraform modules framework for enterprise infrastructure automation.',
		links: [],
		logo: Assets.Terraform,
		name: 'Terraform Modules Development Framework',
		period: { from: new Date(2020, 0), to: new Date(2023, 7) },
		skills: getSkills('terraform', 'azure', 'devops', 'automation'),
		type: 'Infrastructure as Code'
	},
	{
		slug: 'cloud-cost-optimization',
		color: 'yellow',
		description:
			'Implemented comprehensive FinOps practices and right-sizing strategies achieving $1.4M+ annual savings (25% cost reduction). Automated cost governance, resource optimization, and implemented chargeback mechanisms across multiple business units.',
		shortDescription:
			'FinOps implementation achieving $1.4M+ annual cost savings through optimization.',
		links: [],
		logo: Assets.Azure,
		name: 'Cloud Cost Optimization & FinOps',
		period: { from: new Date(2023, 0), to: new Date(2024, 11) },
		skills: getSkills('azure', 'automation', 'powershell', 'python'),
		type: 'Cost Management'
	},
	{
		slug: 'cicd-pipeline-automation',
		color: 'orange',
		description:
			'Engineered GitLab CI/CD pipelines with ArgoCD reducing deployment time by 94% (4 hours to 15 minutes). Built 40+ Azure DevOps pipelines for Java applications with GitHub Actions integration, improving release velocity by 45%.',
		shortDescription:
			'Advanced CI/CD pipeline automation reducing deployment time by 94%.',
		links: [],
		logo: Assets.Devops,
		name: 'CI/CD Pipeline Automation',
		period: { from: new Date(2020, 0), to: new Date(2024, 11) },
		skills: getSkills('gitlab', 'devops', 'github', 'kubernetes', 'docker'),
		type: 'DevOps'
	},
	{
		slug: 'azure-governance-policies',
		color: 'red',
		description:
			'Deployed 100+ Azure policies to enforce user restrictions and ensure compliance with corporate security standards. Implemented comprehensive governance frameworks improving security posture by 85% across enterprise environments.',
		shortDescription:
			'Enterprise Azure governance with 100+ policies improving security by 85%.',
		links: [],
		logo: Assets.Policy,
		name: 'Azure Governance & Policy Framework',
		period: { from: new Date(2020, 10), to: new Date(2024, 10) },
		skills: getSkills('azure', 'security', 'policy', 'governance'),
		type: 'Governance'
	},
	{
		slug: 'zero-trust-security',
		color: 'red',
		description:
			'Architected and implemented Zero Trust security models with identity-based access controls and network segmentation. Enhanced organizational security posture by 85% through comprehensive security automation and monitoring.',
		shortDescription:
			'Zero Trust security implementation enhancing security posture by 85%.',
		links: [],
		logo: Assets.Security,
		name: 'Zero Trust Security Architecture',
		period: { from: new Date(2023, 0), to: new Date(2024, 11) },
		skills: getSkills('security', 'azure', 'aad', 'network'),
		type: 'Security'
	},
	{
		slug: 'container-security-scanning',
		color: 'cyan',
		description:
			'Implemented comprehensive container scanning and vulnerability management solutions cutting security incidents by 40%. Automated SAST, DAST, and container security across CI/CD pipelines ensuring secure deployments.',
		shortDescription:
			'Container security automation reducing security incidents by 40%.',
		links: [],
		logo: Assets.Docker,
		name: 'Container Security & Vulnerability Management',
		period: { from: new Date(2022, 0), to: new Date(2024, 11) },
		skills: getSkills('docker', 'security', 'kubernetes', 'devops'),
		type: 'Security'
	},
	{
		slug: 'infrastructure-monitoring',
		color: 'green',
		description:
			'Designed and implemented comprehensive monitoring solutions using Prometheus, Grafana, and Azure Monitor for enhanced observability across cloud infrastructure and applications serving 100K+ users.',
		shortDescription:
			'Enterprise monitoring infrastructure with comprehensive observability solutions.',
		links: [],
		logo: Assets.Datadog,
		name: 'Infrastructure Monitoring & Observability',
		period: { from: new Date(2022, 0), to: new Date(2024, 11) },
		skills: getSkills('azure', 'monitoring', 'kubernetes', 'devops'),
		type: 'Monitoring'
	}
];

export const title = 'Projects';
