<script>
	import Home from './pages/Home.svelte';

	let currentComponent = Home;

	async function changeComponent (componentCode) {
		let module;

		if (componentCode === 'Home') {
			module = Home;
		}

		if (componentCode === 'About') {
			module = (await import('./pages/About.svelte')).default;
		}

		if (componentCode === 'Foo') {
			module = (await import('./pages/Foo.svelte')).default;
		}

		currentComponent = module;
	}
</script>

<div class="menu">
	<div on:click={() => changeComponent('Home')}>Home</div>
	<div on:click={() => changeComponent('About')}>About</div>
	<div on:click={() => changeComponent('Foo')}>Foo</div>
</div>

{#if currentComponent}
	<svelte:component this={currentComponent}/>
{/if}

<style>
	:global(body) {
		font-family: sans-serif;
	}

	.menu {
		display: flex;
		margin-bottom: 4rem;
	}

	.menu > div {
		margin-right: 1rem;
	}
</style>