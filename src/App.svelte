<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
</script>

<main>
	<slot />
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>