<script>
	import TailwindCss from './TailwindCss.svelte';
	import { roundTime } from './stores/store';
	import Round from './components/Rounds/Index.svelte';
	import Schedule from './components/Schedule/Index.svelte';
	import Movie from './components/Movies/Index.svelte';
	export let initBo, initRounds, initTimes;
</script>
<TailwindCss />

<main>
	<div class="w-full flex flex-row">
		<div class="w-1/4 mr-4">
			<div class="border border-gray-400 rounded mb-4">
				<div class="m-4">
					<Round initBo={initBo} initRounds={initRounds} initTimes={initTimes} />
					<p class="mt-2 text-gray-600">合計 {$roundTime}</p>
				</div>
			</div>
		</div>
		<div class="w-1/4">
			<div class="border border-gray-400 rounded">
				<div class="m-4">
					<Schedule />
				</div>
			</div>
		</div>
	</div>
	
	<!-- <Movie /> -->
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>