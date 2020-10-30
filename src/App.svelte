<script>
	import TailwindCss from './TailwindCss.svelte';
	import { roundTime } from './stores/store';
	import Round from './components/Rounds/Index.svelte';
	import Movie from './components/Movies/Index.svelte';
	export let name;
</script>
<TailwindCss />

<main>
	<h1 class="bg-green-500">Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Round />
	<p>time is {$roundTime}.</p>
	<hr>
	<Movie />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>