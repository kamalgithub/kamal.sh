import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Masters of Computer Applications',
		description: '',
		location: 'Delhi, India',
		logo: Assets.Jain,
		name: '',
		organization: 'Jain University',
		period: { from: new Date(2021, 8, 1), to: new Date(2023, 8, 1) },
		shortDescription: '',
		slug: 'edu-mca',
		subjects: [
			'Database Management Systems',
			'Cloud Engineering',
			'Computer Architecture',
			'Algorithms and Data structures',
			'Machine Learning',
			'Web Development',
			'DevOps'
		]
	},
	{
		degree: 'Bachelor of Computer Applications',
		description: '',
		location: 'Delhi, India',
		logo: Assets.Smu,
		name: '',
		organization: 'Sikkim Manipal University',
		period: { from: new Date(2013, 6, 1), to: new Date(2016, 5, 30) },
		shortDescription: '',
		slug: 'edu-bca',
		subjects: [
			'Algorithm',
			'Algebra',
			'Python',
			'C++',
			'Java',
			'Computer Networks',
			'Computer Architecture',
			'DSA',
			'Cybersecurity'
		]
	},
	{
		degree: 'O Level (Computer Programming)',
		description: '',
		location: 'Delhi, India',
		logo: Assets.Doeacc,
		name: '',
		organization: 'DOEACC',
		period: { from: new Date(2016, 6, 1), to: new Date(2017, 6, 1) },
		shortDescription: '',
		slug: 'edu-olevel',
		subjects: ['C', 'Web Technologies', 'C++', 'Multimedia Design', 'Computer Organization']
	}
];

export const title = 'Education';
