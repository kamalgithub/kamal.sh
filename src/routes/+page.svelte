<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills } from '@data/home';
	import { Icons } from '$lib/utils';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';
	import { onMount } from 'svelte';

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};

	let skillBlocks = [];

	// Mouse hover effect for skill blocks
	const onHover = (ev, index) => {
		const target = ev.currentTarget;
		const rect = target.getBoundingClientRect();
		
		const x = ev.clientX - rect.left;
		const y = ev.clientY - rect.top;
		
		target.style.setProperty('--drop-x', `${x}px`);
		target.style.setProperty('--drop-y', `${y}px`);

		// Add tilt effect
		const width = target.offsetWidth;
		const height = target.offsetHeight;
		
		const cX = rect.x + width / 2;
		const cY = rect.y + height / 2;
		
		const mX = ev.clientX - cX;
		const mY = ev.clientY - cY;
		
		const tiltDegree = 3;
		const rY = ((tiltDegree * mX) / (width / 2)).toFixed(2);
		const rX = ((-1 * (tiltDegree * mY)) / (height / 2)).toFixed(2);
		
		target.style.setProperty('--rot-x', `${rX}deg`);
		target.style.setProperty('--rot-y', `${rY}deg`);
	};

	const onMouseLeave = (ev) => {
		const target = ev.currentTarget;
		target.style.setProperty('--rot-x', '0deg');
		target.style.setProperty('--rot-y', '0deg');
	};

	onMount(() => {
		skillBlocks.forEach((block) => {
			if (block) {
				block.style.setProperty('--drop-x', '0px');
				block.style.setProperty('--drop-y', '0px');
				block.style.setProperty('--rot-x', '0deg');
				block.style.setProperty('--rot-y', '0deg');
			}
		});
	});
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>
<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName},</MainTitle>

		<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight flex items-center justify-center md:justify-start gap-2">
			{description}
				<Icon icon={Icons.Cloud} color="var(--accent-text)" size="1.5em" classes="translate-y-[-1px]" />
		</p>
		
		<!-- What I Do Section -->
		<div class="col gap-3 p-y-20px">
			<h3 class="text-[var(--secondary-text)] text-center md:text-left font-medium text-[1.1em]">What I Do</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="skill-block" 
					 bind:this={skillBlocks[0]}
					 on:mousemove={(ev) => onHover(ev, 0)}
					 on:mouseleave={onMouseLeave}>
					<div class="skill-content">
						<h4 class="text-[var(--accent-text)] font-medium mb-2">Cloud Architecture</h4>
						<p class="text-[var(--tertiary-text)] text-sm">Design and implement enterprise-grade Azure & Google Cloud solutions with 99.99% reliability</p>
					</div>
				</div>
				<div class="skill-block" 
					 bind:this={skillBlocks[1]}
					 on:mousemove={(ev) => onHover(ev, 1)}
					 on:mouseleave={onMouseLeave}>
					<div class="skill-content">
						<h4 class="text-[var(--accent-text)] font-medium mb-2">DevOps Engineering</h4>
						<p class="text-[var(--tertiary-text)] text-sm">Build CI/CD pipelines, automate deployments, and optimize infrastructure for scale</p>
					</div>
				</div>
				<div class="skill-block" 
					 bind:this={skillBlocks[2]}
					 on:mousemove={(ev) => onHover(ev, 2)}
					 on:mouseleave={onMouseLeave}>
					<div class="skill-content">
						<h4 class="text-[var(--accent-text)] font-medium mb-2">Kubernetes & Containerization</h4>
						<p class="text-[var(--tertiary-text)] text-sm">Orchestrate containerized applications and manage Kubernetes clusters at enterprise scale</p>
					</div>
				</div>
				<div class="skill-block" 
					 bind:this={skillBlocks[3]}
					 on:mousemove={(ev) => onHover(ev, 3)}
					 on:mouseleave={onMouseLeave}>
					<div class="skill-content">
						<h4 class="text-[var(--accent-text)] font-medium mb-2">Security & Compliance</h4>
						<p class="text-[var(--tertiary-text)] text-sm">Implement zero-trust security models and ensure compliance across cloud environments</p>
					</div>
				</div>
			</div>
		</div>

		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-4">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'28px'} />
				</a>
			{/each}
		</div>
	</div>
	<Carrousel items={skills ?? skillsItems} />
</div>

<style lang="scss">
	.skill-block {
		--drop-x: 0px;
		--drop-y: 0px;
		--rot-x: 0deg;
		--rot-y: 0deg;
		
		border-radius: 0.75rem;
		border: 1px solid var(--border);
		box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		position: relative;
		overflow: hidden;
		transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;
		background: linear-gradient(135deg, var(--main) 0%, var(--main) 40%, var(--main-60) 100%),
			linear-gradient(45deg, var(--secondary) 0%, var(--tertiary) 100%);
		background-blend-mode: multiply;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: radial-gradient(circle at 20% 20%, var(--accent) 0%, transparent 50%),
				radial-gradient(circle at 80% 80%, var(--tertiary) 0%, transparent 50%);
			opacity: 0.05;
			pointer-events: none;
			transition: opacity 200ms ease;
		}

		&:hover {
			border-color: var(--border-hover);
			box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.1);
			transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.02);
		}

		&:hover::before {
			opacity: 0.02;
		}

		&:hover .skill-content {
			background-color: rgba(59, 130, 246, 0.015);
			background-image: radial-gradient(
				circle at var(--drop-x) var(--drop-y),
				rgba(59, 130, 246, 0.08),
				rgba(168, 85, 247, 0.04) 40%,
				transparent 70%
			);
		}
	}

	.skill-content {
		padding: 1rem;
		position: relative;
		z-index: 1;
		border-radius: 0.75rem;
		transition: background-color 200ms ease, background-image 200ms ease;
	}
</style>
