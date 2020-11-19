<script>
	import TailwindCss from './TailwindCss.svelte';
	import Main from './views/Main.svelte';
	export let title;
</script>
<TailwindCss />

<Main title={title} />
