import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Master of Computer Applications (MCA)',
		description: 'Advanced computer science and applications with focus on cloud computing, software engineering, and modern development practices.',
		location: 'Bangalore, India',
		logo: Assets.Jain,
		name: '',
		organization: 'Jain University',
		period: { from: new Date(2021, 5, 1), to: new Date(2023, 6, 1) },
		shortDescription: 'Grade: 8.7/10',
		slug: 'edu-mca',
		color: 'blue',
		subjects: [
			'Database Management Systems',
			'Cloud Computing & Engineering',
			'Software Engineering',
			'Computer Architecture',
			'Algorithms and Data Structures',
			'Machine Learning',
			'Web Development',
			'DevOps Practices',
			'Cybersecurity'
		]
	},
	{
		degree: 'Bachelor of Computer Applications (BCA)',
		description: 'Fundamental computer science concepts with programming languages and system administration.',
		location: 'Delhi, India',
		logo: Assets.Smu,
		name: '',
		organization: 'Sikkim Manipal University',
		period: { from: new Date(2013, 5, 1), to: new Date(2016, 6, 1) },
		shortDescription: 'Grade: 6.3/10',
		slug: 'edu-bca',
		color: 'green',
		subjects: [
			'Programming Fundamentals',
			'Algorithms & Data Structures',
			'Python Programming',
			'C++ Programming',
			'Java Programming',
			'Computer Networks',
			'Computer Architecture',
			'Database Systems',
			'Cybersecurity Fundamentals'
		]
	}
];

export const title = 'Education';
