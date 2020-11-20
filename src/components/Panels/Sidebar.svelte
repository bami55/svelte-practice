<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const homes = ['Home', 'Sources'];

  const pageClick = e => {
    dispatch('pageClick', {
			page: e.target.dataset.page
		});
  }
</script>

<div class="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-0 md:mt-16 md:fixed md:h-screen md:shadow-xl animated faster">
  <p class="uppercase text-xs text-gray-600 mb-4 tracking-wider">homes</p>
  {#each homes as page}
    <span class="cursor-pointer font-extralight hover:text-rose-700 hover:font-medium" on:click="{pageClick}" data-page={page}>{page}</span>
  {/each}
</div>
