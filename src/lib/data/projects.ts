import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'vuln-mgmt-dashboard',
		color: 'green',
		description:
			'Developed a Flask-based dashboard to track and mitigate vulnerabilities across Azure services.',
		shortDescription:
			'Developed a Flask-based dashboard to track and mitigate vulnerabilities across Azure services.',
		links: [],
		logo: Assets.Python,
		name: 'Vulnerabilities Dashboard in Flask (Python)',
		period: { from: new Date(2018, 4), to: new Date(2018, 8) },
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Python'
	},
	{
		slug: 'tf-modules',
		color: 'red',
		description:
			'Created reusable Terraform modules to streamline infrastructure deployment for platform and application teams.',
		shortDescription:
			'Created reusable Terraform modules to streamline infrastructure deployment for platform and application teams.',
		links: [],
		logo: Assets.Terraform,
		name: 'Terraform Modules Development',
		period: { from: new Date(2018, 4), to: new Date(2019, 6) },
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Terraform'
	},
	{
		slug: 'azure-caf',
		color: 'blue',
		description:
			'Developed a framework to accelerate cloud adoption by automating key infrastructure and security configurations.',
		shortDescription:
			'Developed a framework to accelerate cloud adoption by automating key infrastructure and security configurations.',
		links: [],
		logo: Assets.Automation,
		name: 'Cloud Acceleration Framework Development',
		period: { from: new Date(2022, 6), to: new Date(2023, 8) },
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Automation'
	},
	{
		slug: 'hub-and-spoke',
		color: 'orange',
		description:
			'Implemented hub-and-spoke network topology to manage Azure Landing Zones for efficient and secure multi-team collaboration.',
		shortDescription:
			'Implemented hub-and-spoke network topology to manage Azure Landing Zones for efficient and secure multi-team collaboration.',
		links: [],
		logo: Assets.LandingZone,
		name: 'Azure Landing Zone Development (hub-and-spoke)',
		period: { from: new Date(2022, 6), to: new Date(2024, 8) },
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Azure'
	},
	{
		slug: 'cloud-migrate',
		color: 'blue',
		description:
			'Led the migration of critical workloads from on-premises infrastructure to Azure, ensuring seamless transition and minimal downtime.',
		shortDescription:
			'Led the migration of critical workloads from on-premises infrastructure to Azure, ensuring seamless transition and minimal downtime.',
		links: [],
		logo: Assets.Migration,
		name: 'On-premises to Cloud Migration',
		period: { from: new Date(2018, 10), to: new Date(2019, 10) },
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Migration'
	},
	{
		slug: 'new-azure-subscription-automation',
		color: 'green',
		description:
			'Automated the entire process of provisioning new Azure subscriptions with predefined policies and governance controls.',
		shortDescription:
			'Automated the entire process of provisioning new Azure subscriptions with predefined policies and governance controls.',
		links: [],
		logo: Assets.Automation,
		name: 'New Subscription vending end-to-end automation',
		period: { from: new Date(2022, 6), to: new Date(2023, 8) },
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Automation'
	},
	{
		slug: 'policies-and-controls',
		color: 'yellow',
		description:
			'Deployed 100+ Azure policies to enforce user restrictions and ensure compliance with corporate security standards.',
		shortDescription:
			'Deployed 100+ Azure policies to enforce user restrictions and ensure compliance with corporate security standards.',
		links: [],
		logo: Assets.Policy,
		name: 'Policies and Controls development in Azure',
		period: { from: new Date(2020, 11), to: new Date(2023, 11) },
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Governance'
	},
	{
		slug: 'datadog-integration',
		color: 'pink',
		description:
			'Automated the integration of DataDog with Azure services for enhanced logging and real-time monitoring capabilities.',
		shortDescription:
			'Automated the integration of DataDog with Azure services for enhanced logging and real-time monitoring capabilities.',
		links: [],
		logo: Assets.Datadog,
		name: 'DataDog Logging and Monitoring integrations automation',
		period: { from: new Date(2022, 11), to: new Date(2023, 2) },
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Monitoring'
	},
	{
		slug: 'azure-access-mgmt',
		color: 'orange',
		description:
			'Automated Azure access management processes, enhancing security through streamlined role-based access controls.',
		shortDescription:
			'Automated Azure access management processes, enhancing security through streamlined role-based access controls.',
		links: [],
		logo: Assets.Security,
		name: 'Azure access management automation',
		period: { from: new Date(2024, 4), to: new Date(2024, 6) },
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Security'
	},
	{
		slug: 'golden-images-development',
		color: 'cyan',
		description:
			'Developed hardened Windows and Linux golden images to ensure secure and consistent system deployments.',
		shortDescription:
			'Developed hardened Windows and Linux golden images to ensure secure and consistent system deployments.',
		links: [],
		logo: Assets.GoldenImage,
		name: 'Windows & Linux Golden Images development',
		period: { from: new Date(2024, 4), to: new Date(2024, 7) },
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'OS'
	},
	{
		slug: 'pim-mgmt-automation',
		color: 'red',
		description:
			'Automated Privileged Identity Management (PIM) to manage and secure elevated access within the Azure environment.',
		shortDescription:
			'Automated Privileged Identity Management (PIM) to manage and secure elevated access within the Azure environment.',
		links: [],
		logo: Assets.Security,
		name: 'Privileged Identity Management automation',
		period: { from: new Date(2023, 8), to: new Date(2023, 11) },
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Security'
	},
	{
		slug: 'cloud-to-cloud-migrate',
		color: 'blue',
		description:
			'Facilitated cross-cloud migrations, ensuring efficient data transfer and service continuity across multiple cloud platforms.',
		shortDescription:
			'Facilitated cross-cloud migrations, ensuring efficient data transfer and service continuity across multiple cloud platforms.',
		links: [],
		logo: Assets.Migration,
		name: 'Cloud to Cloud Migrations',
		period: { from: new Date(2024, 4) },
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Migration'
	}
];

export const title = 'Projects';
