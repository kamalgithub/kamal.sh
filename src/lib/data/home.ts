import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Portfolio';

export const name = 'Kamal';

export const lastName = 'Kumar';

export const description =
	"Cloud & DevOps SME — Engineering the future of cloud";

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/kamal18'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/@devcrypted'
	},
	{ platform: Platform.GitHub, link: 'https://github.com/devcrypted' },
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
	'kubernetes',
	'network',
	'powershell',
	'python',
	'security',
	'terraform'
);
