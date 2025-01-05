import Assets from './assets';
import type { Certification, CertificationCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineCertCategory = <S extends string>(data: CertificationCategory<S>): CertificationCategory<S> => data;

const categories = [
	defineCertCategory({ name: 'Frameworks', slug: 'framework' }),
	defineCertCategory({ name: 'Libraries', slug: 'library' }),
	defineCertCategory({ name: 'Programming Languages', slug: 'lang' }),
	defineCertCategory({ name: 'Databases', slug: 'db' }),
	defineCertCategory({ name: 'Cloud', slug: 'cloud' }),
	defineCertCategory({ name: 'DevOps', slug: 'devops' }),
	defineCertCategory({ name: 'Dev Tools', slug: 'dev-tools' }),
	defineCertCategory({ name: 'DevOps Tools', slug: 'devops-tools' }),
	defineCertCategory({ name: 'Configuration Management', slug: 'config-mgmt' }),
	defineCertCategory({ name: 'Containerization', slug: 'containerization' }),
	defineCertCategory({ name: 'Operating Systems', slug: 'os' }),
	defineCertCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineCert = <S extends string>(
	certification: Omit<Certification<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
		completeDate?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Certification<S> => {
	const out: Certification<S> = omit(certification, 'category');

	if (certification.category) {
		out.category = categories.find((it) => it.slug === certification.category);
	}

	return out;
};

export const items = [
	defineCert({
		slug: '#az-700',
		color: 'green',
		description:
			'Microsoft Certified',
		logo: Assets.Az700,
		name: 'Network Engineer Associate (AZ-700)',
		category: 'cloud',
		// completeDate: 'June 2022'
	}),
	defineCert({
		slug: '#az-400',
		color: 'orange',
		description:
			'Microsoft Certified',
		logo: Assets.Az400,
		name: 'Azure DevOps Expert (AZ-400)',
		category: 'cloud',
	}),
	defineCert({
		slug: '#ai-900',
		color: 'red',
		description:
			'Microsoft Certified',
		logo: Assets.Ai900,
		name: 'AI Fundamentals (AI-900)',
		category: 'cloud'
	}),
	defineCert({
		slug: '#az-204',
		color: 'red',
		description: 'Microsoft Certified',
		logo: Assets.Az204,
		name: 'Azure Developer Associate (AZ-204)',
		category: 'cloud'
	}),
	defineCert({
		slug: '#az-500',
		color: 'orange',
		description: 'Microsoft Certified',
		logo: Assets.Az500,
		name: 'Azure Security Engineer Associate (AZ-500)',
		category: 'cloud'
	}),
	defineCert({
		slug: '#az-300',
		color: 'blue',
		description:
			'Microsoft Certified',
		logo: Assets.Az300,
		name: 'Azure Solutions Architect Technologies (AZ-300)',
		category: 'cloud'
	}),
	defineCert({
		slug: '#cka',
		color: 'orange',
		description:
			'LinuxFoundation Certified',
		logo: Assets.Kubernetes,
		name: 'Kubernetes Administrator (CKA)',
		category: 'containerization'
	}),
	defineCert({
		slug: '#tf-associate',
		color: 'green',
		description:
			'Hashicorp Certified',
		logo: Assets.Terraform,
		name: 'Terraform Associate',
		category: 'config-mgmt'
	}),
	defineCert({
		slug: '#gitlab-associate',
		color: 'yellow',
		description:
			'GitLab Certified',
		logo: Assets.Gitlab,
		name: 'CI/CD Associate',
		category: 'devops-tools'
	}),
	defineCert({
		slug: '#mcsa',
		color: 'pink',
		description:
			'Microsoft Certified',
		logo: Assets.WinServer,
		name: 'Solutions Associate (MCSA)',
		category: 'os'
	}),
	// defineCert({
	// 	slug: 'aws-solutions-architect-associate',
	// 	color: 'orange',
	// 	description:
	// 		'Amazon Web Services',
	// 	logo: Assets.Git,
	// 	name: 'Solutions Architect Associate',
	// 	category: 'devops-tools'
	// }),
	// defineCert({
	// 	slug: 'aws-solutions-architect-professional',
	// 	color: 'cyan',
	// 	description:
	// 		'Amazon Web Services',
	// 	logo: Assets.Github,
	// 	name: 'Solutions Architect Professional',
	// 	category: 'devops-tools'
	// }),
	// defineCert({
	// 	slug: 'gcp-associate-cloud-engineer',
	// 	color: 'red',
	// 	description:
	// 		'Google Cloud',
	// 	logo: Assets.Gitlab,
	// 	name: 'Associate Cloud Engineer',
	// 	category: 'devops-tools'
	// }),
	// defineCert({
	// 	slug: 'cka',
	// 	color: 'blue',
	// 	description:
	// 		'Linux Foundation',
	// 	logo: Assets.Go,
	// 	name: 'Certified Kubernetes Administrator',
	// 	category: 'containerization'
	// }),
	// defineCert({
	// 	slug: 'ckad',
	// 	color: 'green',
	// 	description:
	// 		'Linux Foundation',
	// 	logo: Assets.Kubernets,
	// 	name: 'Certified Kubernets Administrator',
	// 	category: 'containerization'
	// }),
	// defineCert({
	// 	slug: 'cks',
	// 	color: 'yellow',
	// 	description:
	// 		'Linux Foundation',
	// 	logo: Assets.Ubuntu,
	// 	name: 'Certified Kubernetes Security Specialist',
	// 	category: 'containerization'
	// }),
] as const ;

export const title = 'Certifications';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Certification> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: CertificationCategory; items: Array<Certification> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Certification> = [];

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
