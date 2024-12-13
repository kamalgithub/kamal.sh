import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
// import aks from '../md/aks.md?raw'; // Importing the Markdown for showing skillet

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Programming Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'Cloud', slug: 'cloud' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'dev-tools' }),
	defineSkillCategory({ name: 'DevOps Tools', slug: 'devops-tools' }),
	defineSkillCategory({ name: 'Configuration Management', slug: 'config-mgmt' }),
	defineSkillCategory({ name: 'Containerization', slug: 'containerization' }),
	defineSkillCategory({ name: 'Operating Systems', slug: 'os' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'azure',
		color: 'green',
		description:
			'My experience with Microsoft Azure encompasses deploying and managing a wide range of resources, including virtual machines, databases, and serverless functions. I’ve designed scalable architectures that leverage Azure’s extensive service offerings and implemented Azure DevOps for continuous integration and deployment, enhancing development workflows and application reliability.',
		logo: Assets.Azure,
		name: 'Microsoft Azure',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'azure-ai',
		color: 'orange',
		description:
			'',
		logo: Assets.Robot,
		name: 'Azure OpenAI Service',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'aad',
		color: 'red',
		description:
			'I have advanced expertise in Azure Active Directory (AAD) for managing user identities and access controls. I’ve implemented secure authentication and role-based access management for various applications, utilizing protocols like OAuth and SAML. My experience includes designing seamless integrations with enterprise applications, ensuring robust security and compliance throughout the user lifecycle.',
		logo: Assets.Aad,
		name: 'Azure Active Directory',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'aks',
		color: 'red',
		// description: aks, // Provide description from Markdown
		description: 'Azure Kubernetes Service',
		logo: Assets.Aks,
		name: 'Azure Kubernetes Service (AKS)',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'compute',
		color: 'orange',
		description: '',
		logo: Assets.Compute,
		name: 'Azure Virtual Machines',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'ansible',
		color: 'blue',
		description:
			'With extensive proficiency in Ansible, I specialize in configuration management and automation across diverse environments. I’ve developed complex playbooks and roles for multi-tier application deployments, emphasizing idempotency to ensure consistent environments. My expertise also includes integrating Ansible with CI/CD pipelines to streamline deployments and improve operational efficiency.',
		logo: Assets.Ansible,
		name: 'Ansible',
		category: 'config-mgmt'
	}),
	defineSkill({
		slug: 'bicep',
		color: 'green',
		description:
			'With extensive proficiency in Bicep, I specialize in configuration management and automation across diverse environments. I’ve developed complex playbooks and roles for multi-tier application deployments, emphasizing idempotency to ensure consistent environments. My expertise also includes integrating Bicep with CI/CD pipelines to streamline deployments and improve operational efficiency.',
		logo: Assets.Bicep,
		name: 'Azure Bicep',
		category: 'config-mgmt'
	}),
	defineSkill({
		slug: 'devops',
		color: 'yellow',
		description:
			'I possess a strong understanding of DevOps principles and practices, focusing on fostering collaboration between development and operations teams. I’ve implemented CI/CD pipelines that automate testing and deployment processes, significantly reducing time to market for software releases. My approach emphasizes continuous improvement and agile methodologies to enhance delivery speed and quality.',
		logo: Assets.Devops,
		name: 'Azure DevOps',
		category: 'devops-tools'
	}),
	defineSkill({
		slug: 'docker',
		color: 'pink',
		description:
			'I have substantial expertise in Docker for containerizing applications, developing optimized Dockerfiles, and creating custom images. My experience includes managing multi-container applications using Docker Compose, ensuring consistent environments across development and production. I am adept at leveraging Docker in conjunction with orchestration tools to improve scalability and resource management.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'containerization'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description:
			'My advanced skills in Git enable effective version control and collaboration in software development. I am proficient in branching strategies, such as Git Flow, to manage code changes efficiently. I regularly resolve merge conflicts and conduct thorough code reviews, fostering a collaborative development environment that prioritizes code quality.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devops-tools'
	}),
	defineSkill({
		slug: 'github',
		color: 'cyan',
		description:
			'I utilize GitHub extensively for source code management and collaboration on various projects. My experience includes managing repositories, pull requests, and issue tracking effectively. Additionally, I’ve contributed to open-source projects and employed GitHub Actions to automate workflows, enhancing project delivery and team productivity.',
		logo: Assets.Github,
		name: 'Github',
		category: 'devops-tools'
	}),
	defineSkill({
		slug: 'gitlab',
		color: 'red',
		description:
			'I am proficient in using GitLab as a complete DevOps platform, managing repositories and integrating CI/CD pipelines for automated testing and deployment. My experience includes configuring GitLab CI pipelines to ensure code quality and facilitating agile project management through effective issue tracking and project boards.',
		logo: Assets.Gitlab,
		name: 'Gitlab',
		category: 'devops-tools'
	}),
	defineSkill({
		slug: 'go',
		color: 'blue',
		description:
			'My expertise in Go enables me to develop efficient and scalable applications, particularly in microservices architectures. I’ve created high-concurrency applications and APIs, leveraging Go’s standard library and various frameworks to optimize performance. My understanding of Go’s concurrency model enhances my ability to build robust, responsive applications.',
		logo: Assets.Go,
		name: 'Go Lang',
		category: 'lang'
	}),
	defineSkill({
		slug: 'kubernets',
		color: 'green',
		description:
			'I have advanced skills in Kubernetes for orchestrating containerized applications. I’ve deployed and managed complex applications using Helm charts and custom resources, ensuring high availability and resilience. Additionally, I’ve implemented comprehensive monitoring and logging solutions to maintain visibility and performance across Kubernetes clusters.',
		logo: Assets.Kubernets,
		name: 'Kubernets',
		category: 'containerization'
	}),
	defineSkill({
		slug: 'ubuntu',
		color: 'yellow',
		description:
			'I am proficient in Linux for system administration and automation tasks. My experience includes managing servers, configuring services, and scripting with shell commands to enhance operational efficiency. I also focus on performance tuning and security hardening to maintain stable and secure Linux environments.',
		logo: Assets.Ubuntu,
		name: 'Ubuntu Server',
		category: 'os'
	}),
	defineSkill({
		slug: 'rhel',
		color: 'yellow',
		description:
			'I am proficient in Linux for system administration and automation tasks. My experience includes managing servers, configuring services, and scripting with shell commands to enhance operational efficiency. I also focus on performance tuning and security hardening to maintain stable and secure Linux environments.',
		logo: Assets.Redhat,
		name: 'RedHat Enterprise Linux (RHEL)',
		category: 'os'
	}),
	defineSkill({
		slug: 'win-server',
		color: 'green',
		description:
			'I am proficient in Linux for system administration and automation tasks. My experience includes managing servers, configuring services, and scripting with shell commands to enhance operational efficiency. I also focus on performance tuning and security hardening to maintain stable and secure Linux environments.',
		logo: Assets.WinServer,
		name: 'Windows Server',
		category: 'os'
	}),
	defineSkill({
		slug: 'network',
		color: 'pink',
		description:
			'I possess a strong understanding of networking concepts, including protocols such as TCP/IP, DNS, and HTTP. I have configured various network services and firewalls to ensure secure communication and conducted troubleshooting to optimize network performance. My background in networking supports effective system integration and communication strategies.',
		logo: Assets.Network,
		name: 'Azure Networking',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'powershell',
		color: 'orange',
		description:
			'With advanced skills in PowerShell, I automate administrative tasks and configuration management on Windows environments. I’ve developed scripts that enhance system management and streamline workflows, integrating PowerShell with APIs and other tools for more efficient processes. My expertise enables robust automation solutions tailored to organizational needs.',
		logo: Assets.Powershell,
		name: 'Powershell',
		category: 'lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'cyan',
		description:
			'I have extensive experience in Python for automation, data analysis, and web development. I’ve built applications using frameworks like Flask and Django, and developed data processing scripts for analysis and machine learning tasks. My strong command of Python’s ecosystem supports a wide range of technical solutions and projects.',
		logo: Assets.Python,
		name: 'Python',
		category: 'lang'
	}),
	defineSkill({
		slug: 'security',
		color: 'red',
		description:
			'My expertise in cybersecurity encompasses implementing best practices to protect systems and data from threats. I conduct risk assessments and manage vulnerabilities, employing security measures such as encryption and access controls. I am committed to maintaining secure environments while ensuring compliance with industry standards.',
		logo: Assets.Security,
		name: 'Azure Security',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'terraform',
		color: 'blue',
		description:
			'I have expert knowledge in HashiCorp Terraform for infrastructure as code, having deployed various landing zones and application resources in Azure. My in-depth understanding includes Terraform module development, maintenance, and layering approaches, as well as effective state management and securely handling secrets and configuration settings.',
		logo: Assets.Terraform,
		name: 'Terraform',
		category: 'config-mgmt'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
