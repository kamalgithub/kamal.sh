import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'lseg',
		company: 'London Stock Exchange Group (LSEG)',
		description: '# Lead a Azure Public Cloud Platform Engineering team',
		contract: ContractType.FullTime,
		type: 'Cloud Platform Engineering Lead',
		location: 'Delhi, India',
		period: { from: new Date(2022, 5) },
		skills: getSkills(
			'azure',
			'aad',
			'aks',
			'compute',
			'devops',
			'docker',
			'git',
			'gitlab',
			'kubernetes',
			'ubuntu',
			'rhel',
			'network',
			'powershell',
			'security',
			'terraform'
		),
		name: 'Cloud Platform Engineering Lead',
		color: 'red',
		links: [],
		logo: Assets.Lseg,
		shortDescription: 'Lead Azure Cloud Platform Engineering team'
	},
	{
		slug: 'blackrock',
		company: 'BlackRock India',
		description: 'Automation and DevOps Engineering',
		contract: ContractType.FullTime,
		type: 'Cloud Platform Engineering',
		location: 'Gurugram, India',
		period: { from: new Date(2018, 9), to: new Date(2022, 5) },
		skills: getSkills(
			'azure',
			'aad',
			'aks',
			'compute',
			'ansible',
			'docker',
			'powershell',
			'python',
			'terraform'
		),
		name: 'Automation & DevOps Engineer',
		color: 'blue',
		links: [],
		logo: Assets.Blackrock,
		shortDescription: 'Worked on various automation and DevOps projects in Azure cloud.'
	},
	{
		slug: 'collabera',
		company: 'Collabera',
		description:
			'Worked as Systems Engineer and also provided L3 support for various in-house applications',
		contract: ContractType.FullTime,
		type: 'Systems Engineer',
		location: 'Delhi, India',
		period: { from: new Date(2017, 3), to: new Date(2018, 9) },
		skills: getSkills('powershell', 'win-server', 'python', 'github', 'ansible'),
		name: 'Systems Engineer',
		color: 'green',
		links: [],
		logo: Assets.Collabera,
		shortDescription:
			'Worked as Systems Engineer and also provided L3 support for various in-house applications'
	}
];

export const title = 'Experience';
