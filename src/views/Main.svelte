<script>
  import Navbar from '../components/Panels/Navbar.svelte';
	import Sidebar from '../components/Panels/Sidebar.svelte';
	import Router from './Router.svelte';
	
  export let title;

  // ページ遷移
	let page = 'Home';
	const changePage = e => {
		page = e.detail.page;
	}
</script>

<Navbar title={title} />

<div class="bg-gray-100 min-w-screen min-h-screen">
	<div class="flex flex-row flex-wrap">
		<Sidebar on:pageClick={changePage} />
		<div class="flex-1">
      <div class="p-6 md:mt-16 md:ml-64 relative">
        <Router page={page} />
      </div>
    </div>
	</div>
</div>
