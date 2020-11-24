<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const homes = ['Home', 'Sources', 'Match'];

  const pageClick = (target) => {
    dispatch('pageClick', {
      page: target.dataset.page,
    });
  };
</script>

<div
  class="relative flex flex-col flex-wrap bg-white border-r border-gray-300 py-6 flex-none w-64 md:-ml-0 md:mt-16 md:fixed md:h-screen md:shadow-xl animated faster">
  <p class="uppercase text-xs text-gray-600 my-4 ml-6 tracking-wider">homes</p>
  {#each homes as page}
    <div 
      class="py-2 cursor-pointer font-extralight hover:text-rose-700 hover:font-medium hover:bg-rose-500"
      on:click={e => pageClick(e.target)}
      data-page={page}
      >
      <p
        class="ml-6"
        on:click={e => pageClick(e.target.parent)}
      >
        {page}
      </p>
    </div>
  {/each}
</div>
