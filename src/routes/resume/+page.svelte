<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<a href={data} download>
				<Chip size={'1.25em'}>Download</Chip>
			</a>
			<a href="mailto:kamal242@outlook.com" target="_blank">
				<Chip size={'1.25em'}>Email Me</Chip>
			</a>
			<a href="https://devcrypted.com" target="_blank">
				<Chip size={'1.25em'}>Blogs</Chip>
			</a>
			<a href="https://decrypted.in/subscribe" target="_blank">
				<Chip size={'1.25em'}>Subscribe</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
	<div class="form-control">

		<h1 style="margin: 0.5em auto; font-weight: 800;">Contact Me</h1>
		<form style="display: grid; max-width: 500px" action="https://api.web3forms.com/submit" method="POST">
			<input type="hidden" name="access_key" value="4f54ef1a-f6a7-4e04-b313-0d169095cc54">
			<input type="text" name="name" placeholder="Your Name" style="margin: 6px 0; padding: 15px; background-color: transparent; border: 1px solid #a9a9a9; border-radius: 10px; outline: none" required />
			<input type="email" name="email" placeholder="Email Address" style="margin: 6px 0; padding: 15px; background-color: transparent; border: 1px solid #a9a9a9; border-radius: 10px; outline: none" required />
			<input type="text" name="subject" placeholder="Subject" style="margin: 6px 0; padding: 15px; background-color: transparent; border: 1px solid #a9a9a9; border-radius: 10px; outline: none" required />
			<textarea name="message" placeholder="Your Message" rows="7" style="margin: 6px 0; padding: 8px; background-color: transparent; border: 1px solid #a9a9a9; border-radius: 10px; outline: none" required></textarea>
			<input type="submit" value="Send Message 🚀" style="margin: 8px 0; padding: 10px; background-color: #1e1e1e; border-color: #a9a9a9; border-radius: 10px; outline: none; color: white"/>
		</form>
	</div>
</CommonPage>


<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
	.form-control {
		margin: 1em auto;
		text-align: center;
		min-width: 400px;

	}
</style>
