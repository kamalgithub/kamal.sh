import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Portfolio';

export const name = 'Kamal';

export const lastName = 'Kumar';

export const description =
	"Hi, I’m Kamal Kumar 👋 — Tech enthusiast 🧑‍💻, YouTube creator 📽️, and Lead Platform Engineer. I’m passionate about code optimization, security, and automation. I’d happily spend 2 hours automating a 10-minute reoccurring task 😅!";

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/kamal18'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/@devcrypted'
	},
	{ platform: Platform.GitHub, link: 'https://github.com/aworkaround' },
	{
		platform: Platform.Email,
		link: 'kamal.devops@outlook.com'
	},
	{
		platform: Platform.Blog,
		link: 'https://devcrypted.com'
	}
	// ,{
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills(
	'aad',
	'ansible',
	'azure',
	'devops',
	'docker',
	'git',
	'github',
	'gitlab',
	'go',
	'kubernets',
	'network',
	'powershell',
	'python',
	'security',
	'terraform'
);
