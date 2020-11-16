<script>
  import { matches } from '../../stores/store';
  import Item from './Item.svelte';
</script>

<div class="w-full flex flex-col">
  <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">試合</div>
  {#each $matches as match}
    <Item match={match} />
  {/each}
</div>