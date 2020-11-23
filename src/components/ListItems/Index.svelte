<script>
  import Item from './Item.svelte';
  export let title, items;
</script>

<div class="flex flex-col m-4 border border-coolGray-200 rounded-lg overflow-hidden">
  {#if title != null}
    <h2 class="w-full p-3 h-14 bg-coolGray-800 text-rose-400 text-xl">{title}</h2>
  {/if}
  <ul>
    {#each items as item}
      <Item name={item.name} value={item.value} />
    {/each}
  </ul>
</div>
