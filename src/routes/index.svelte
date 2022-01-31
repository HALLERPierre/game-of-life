<script lang="ts">
	import '@fontsource/roboto';
	import Grid from '$lib/Grid.svelte';
</script>

<svelte:head>
	<title>Game of Life</title>
</svelte:head>

<Grid />

<style>
	:global(body, html, #svelte) {
		font-family: 'Roboto';
		width: 100vw;
		height: 100vh;
		background-color: #888888;
		margin: 0;
	}
	h1 {
		width: 100%;
		text-align: center;
	}
</style>
