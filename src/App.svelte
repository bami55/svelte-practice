<script>
	import TailwindCss from './TailwindCss.svelte';
	import Navbar from './views/Navbar.svelte';
	import Sidebar from './views/Sidebar.svelte';
	import Main from './views/Main.svelte';

	export let title;

	// ページ遷移
	let page = 'Home';
	const changePage = e => {
		page = e.detail.page;
	}
</script>
<TailwindCss />

<Navbar title={title} />

<div class="bg-gray-100 fixed w-screen h-screen">
	<div class="flex flex-row flex-wrap">
		<Sidebar on:pageClick={changePage} />
		<Main page={page} />
	</div>
</div>
<style>
	
</style>