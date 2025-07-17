import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'epam-migration-lead',
		company: 'EPAM Systems',
		description: '<ul><li><strong>Enterprise Migration:</strong> Led zero-downtime migration of 30-component Java/C++ monolith to AKS, serving 100K+ daily users, employing CI/CD pipelines.</li><li><strong>Risk Reduction:</strong> Delivered 30+ POCs and technical assessments, reducing migration risk by 80%, ensuring functional requirements met.</li><li><strong>Deployment Optimization:</strong> Engineered GitLab CI/CD pipelines with ArgoCD, reducing deployment time by 94% (4 hours → 15 minutes) via operational optimization.</li><li><strong>Team Leadership:</strong> Mentored 8 DevOps engineers, increasing team velocity by 40% and knowledge retention by 90%, fostering collaboration.</li><li><strong>Cost Engineering:</strong> Implemented FinOps practices and right-sizing strategies, saving $1.4M annually (25% reduction) through data analysis.</li></ul>',
		contract: ContractType.FullTime,
		type: 'Cloud Migration & DevOps Lead',
		location: 'Gurugram, Haryana',
		period: { from: new Date(2024, 8) },
		skills: getSkills(
			'azure',
			'aad',
			'aks',
			'devops',
			'docker',
			'git',
			'gitlab',
			'kubernetes',
			'network',
			'powershell',
			'security',
			'terraform'
		),
		name: 'Cloud Migration & DevOps Lead',
		color: 'blue',
		links: [],
		logo: Assets.Epam,
		shortDescription: 'Leading enterprise cloud migration and DevOps transformation for 100K+ users'
	},
	{
		slug: 'epam-platform-lead',
		company: 'EPAM Systems',
		description: '<ul><li><strong>Platform Scaling:</strong> Onboarded 200+ apps across 15 business units with Azure Landing Zones and hub-spoke architecture leveraging Terraform IaC.</li><li><strong>Automation Excellence:</strong> Built Terraform + Azure DevOps pipelines, cutting provisioning from 8h to 1.4h (70% gain) ensuring technology integration.</li><li><strong>Security Hardening:</strong> Boosted security posture by 85% with Azure Policy and Zero Trust, implementing governance frameworks.</li><li><strong>Template Standardization:</strong> Created 50+ IaC templates for AKS, Container Apps, and Functions, ensuring compliance.</li><li><strong>Process Optimization:</strong> Established CI/CD standards, reducing onboarding from 3 weeks to 3 days (85% improvement) via strategy formulation.</li></ul>',
		contract: ContractType.FullTime,
		type: 'Lead Cloud Platform Engineer',
		location: 'Gurugram, Haryana',
		period: { from: new Date(2022, 5), to: new Date(2024, 8) },
		skills: getSkills(
			'azure',
			'aad',
			'aks',
			'devops',
			'docker',
			'git',
			'gitlab',
			'kubernetes',
			'network',
			'powershell',
			'security',
			'terraform'
		),
		name: 'Lead Cloud Platform Engineer',
		color: 'red',
		links: [],
		logo: Assets.Epam,
		shortDescription: 'Scaled Azure platform engineering for 200+ applications across 15 business units'
	},
	{
		slug: 'itc-devops',
		company: 'ITC Infotech',
		description: '<ul><li><strong>Infrastructure Modules:</strong> Architected 50+ Terraform modules across 15+ environments using high level design and design patterns.</li><li><strong>Process Automation:</strong> Automated 50+ workflows (Python/PowerShell), boosting productivity by 60%, including CI/CD implementation.</li><li><strong>CI/CD Implementation:</strong> Built 40+ Azure DevOps pipelines for Java app releases (45% faster) with GitHub Actions technology integration.</li><li><strong>Security Enhancement:</strong> Added container scanning & vulnerability management, cutting incidents by 40%, ensuring non-functional requirements are met.</li><li><strong>Compliance Management:</strong> Set up Azure Policy for 100+ regulatory requirements, addressing client requirements.</li></ul>',
		contract: ContractType.FullTime,
		type: 'DevOps Engineer',
		location: 'Gurugram, Haryana',
		period: { from: new Date(2018, 9), to: new Date(2022, 5) },
		skills: getSkills(
			'azure',
			'aad',
			'aks',
			'ansible',
			'docker',
			'powershell',
			'python',
			'terraform'
		),
		name: 'DevOps Engineer',
		color: 'green',
		links: [],
		logo: Assets.ITC,
		shortDescription: 'Automated 50+ workflows and built 40+ CI/CD pipelines for Java applications'
	},
	{
		slug: 'collabera',
		company: 'Collabera Technologies',
		description: '<ul><li><strong>Infrastructure Management:</strong> Maintained 99.9% uptime across 200+ branch locations, ensuring high availability.</li><li><strong>Server Deployment:</strong> Provisioned 100+ hardened Windows/Linux servers, implementing security best practices.</li><li><strong>Business Continuity:</strong> Led infrastructure setup for 50+ new branches with successful project implementation.</li></ul>',
		contract: ContractType.FullTime,
		type: 'Systems Engineer',
		location: 'New Delhi, India',
		period: { from: new Date(2017, 3), to: new Date(2018, 9) },
		skills: getSkills('powershell', 'win-server', 'python', 'github', 'ansible'),
		name: 'Systems Engineer',
		color: 'orange',
		links: [],
		logo: Assets.Collabera,
		shortDescription: 'Maintained 99.9% uptime across 200+ branch locations with 100+ server deployments'
	}
];

export const title = 'Experience';
