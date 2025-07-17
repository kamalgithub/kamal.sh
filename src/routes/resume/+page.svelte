<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { onMount } from 'svelte';

	let contactSection;

	// Mouse hover effect for contact form
	const onHover = (ev) => {
		if (!contactSection) return;
		
		const target = ev.currentTarget;
		const rect = target.getBoundingClientRect();
		
		const x = ev.clientX - rect.left;
		const y = ev.clientY - rect.top;
		
		contactSection.style.setProperty('--drop-x', `${x}px`);
		contactSection.style.setProperty('--drop-y', `${y}px`);

		// Add tilt effect
		const width = contactSection.offsetWidth;
		const height = contactSection.offsetHeight;
		
		const cX = rect.x + width / 2;
		const cY = rect.y + height / 2;
		
		const mX = ev.clientX - cX;
		const mY = ev.clientY - cY;
		
		const tiltDegree = 3; // Reduced tilt for contact form
		const rY = ((tiltDegree * mX) / (width / 2)).toFixed(2);
		const rX = ((-1 * (tiltDegree * mY)) / (height / 2)).toFixed(2);
		
		contactSection.style.setProperty('--rot-x', `${rX}deg`);
		contactSection.style.setProperty('--rot-y', `${rY}deg`);
	};

	const onMouseLeave = () => {
		if (!contactSection) return;
		
		contactSection.style.setProperty('--rot-x', '0deg');
		contactSection.style.setProperty('--rot-y', '0deg');
	};

	onMount(() => {
		if (contactSection) {
			contactSection.style.setProperty('--drop-x', '0px');
			contactSection.style.setProperty('--drop-y', '0px');
			contactSection.style.setProperty('--rot-x', '0deg');
			contactSection.style.setProperty('--rot-y', '0deg');
		}
	});
</script>

<CommonPage {title}>
	<div class="resume-section">
		<div class="resume-actions">
			{#if data}
				<a href={data} download class="action-link">
					<Chip size={'1.25em'} classes="py-4 px-6">
						<UIcon icon="i-carbon-document-download" classes="mr-2" />
						Download Resume
					</Chip>
				</a>
				<a href="mailto:kamal.devops@outlook.com" target="_blank" class="action-link">
					<Chip size={'1.25em'} classes="py-4 px-6">
						<UIcon icon="i-carbon-email" classes="mr-2" />
						Email Me
					</Chip>
				</a>
				<a href="https://linkedin.com/in/kamal18" target="_blank" class="action-link">
					<Chip size={'1.25em'} classes="py-4 px-6">
						<UIcon icon="i-carbon-logo-linkedin" classes="mr-2" />
						LinkedIn
					</Chip>
				</a>
				<a href="https://devcrypted.com" target="_blank" class="action-link">
					<Chip size={'1.25em'} classes="py-4 px-6">
						<UIcon icon="i-carbon-blog" classes="mr-2" />
						Blog
					</Chip>
				</a>
			{:else}
				<Chip classes="py-3 px-6">
					<UIcon icon="i-carbon-warning" classes="mr-2" />
					No resume available at the moment.
				</Chip>
			{/if}
		</div>
	</div>

	<div class="contact-section" bind:this={contactSection} on:mousemove={onHover} on:mouseleave={onMouseLeave}>
		<div class="contact-content">
			<h2 class="section-title">Get In Touch</h2>
			<p class="section-description">
				Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
			</p>
			
			<form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
				<input type="hidden" name="access_key" value="ac955a17-0326-4665-9032-f2ada3fbd818">
				
				<div class="form-row">
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" id="name" name="name" placeholder="Your full name" required />
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" placeholder="your.email@example.com" required />
					</div>
				</div>
				
				<div class="form-group">
					<label for="subject">Subject</label>
					<input type="text" id="subject" name="subject" placeholder="What's this about?" required />
				</div>
				
				<div class="form-group">
					<label for="message">Message</label>
					<textarea id="message" name="message" placeholder="Tell me about your project, ideas, or how we can collaborate..." rows="6" required></textarea>
				</div>
				
				<button type="submit" class="submit-btn">
					<UIcon icon="i-carbon-send" classes="mr-2" />
					Send Message
				</button>
			</form>
		</div>
	</div>
</CommonPage>

<style lang="scss">
	.resume-section {
		margin-bottom: 3rem;
	}

	.resume-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 2rem;

		@media (max-width: 640px) {
			flex-direction: column;
			align-items: center;
		}
	}

	.action-link {
		color: inherit;
		text-decoration: none;
		transition: transform 200ms ease;

		&:hover {
			transform: translateY(-2px);
		}
	}

	.contact-section {
		--drop-x: 0px;
		--drop-y: 0px;
		--rot-x: 0deg;
		--rot-y: 0deg;
		
		max-width: 600px;
		margin: 0 auto;
		border-radius: 1rem;
		border: 1px solid var(--border);
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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
			opacity: 0.1;
			pointer-events: none;
			transition: opacity 200ms ease;
		}

		&:hover {
			border-color: var(--border-hover);
			box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.15);
			transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.01);
		}

		&:hover::before {
			opacity: 0.05;
		}

		&:hover .contact-content {
			background-color: rgba(59, 130, 246, 0.02);
			background-image: radial-gradient(
				circle at var(--drop-x) var(--drop-y),
				rgba(59, 130, 246, 0.1),
				rgba(168, 85, 247, 0.05) 40%,
				transparent 70%
			);
		}
	}

	.contact-content {
		padding: 2rem;
		position: relative;
		z-index: 1;
		border-radius: 1rem;
		transition: background-color 200ms ease, background-image 200ms ease;
	}

	.section-title {
		font-size: 2rem;
		font-weight: 700;
		color: var(--main-text);
		margin: 0 0 1rem 0;
		text-align: center;
		position: relative;
		z-index: 1;
	}

	.section-description {
		color: var(--tertiary-text);
		text-align: center;
		margin-bottom: 2rem;
		line-height: 1.6;
		position: relative;
		z-index: 1;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		position: relative;
		z-index: 1;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
		}
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-weight: 600;
		color: var(--secondary-text);
		font-size: 0.9rem;
	}

	input,
	textarea {
		padding: 0.875rem;
		background: linear-gradient(135deg, var(--main) 0%, var(--main-hover) 100%);
		border: 1px solid var(--border);
		border-radius: 0.5rem;
		color: var(--main-text);
		font-size: 1rem;
		transition: border-color 200ms ease, box-shadow 200ms ease, background 200ms ease;

		&:focus {
			outline: none;
			border-color: var(--accent);
			box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
			background: linear-gradient(135deg, var(--main-hover) 0%, var(--secondary) 100%);
		}

		&::placeholder {
			color: var(--tertiary-text);
		}
	}

	textarea {
		resize: vertical;
		min-height: 120px;
		font-family: inherit;
		line-height: 1.5;
	}

	.submit-btn {
		padding: 1rem 2rem;
		background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
		color: var(--main-text);
		border: none;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: background 200ms ease, transform 200ms ease, box-shadow 200ms ease;
		box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);

		&:hover {
			background: linear-gradient(135deg, var(--accent-hover) 0%, var(--accent) 100%);
			transform: translateY(-1px);
			box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.15);
		}

		&:active {
			transform: translateY(0);
		}
	}
</style>
