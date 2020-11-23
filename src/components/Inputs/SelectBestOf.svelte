<script>
  import { bestOf } from '../../stores/store';
  export let value;
  $bestOf = value === null || value === undefined || value === 0 ? 3 : value;
</script>

<style>
  .selected {
    background-color: #ff3e00;
    color: white;
  }
</style>

<div class="flex flex-col">
  <p class="font-bold text-sm">Best of</p>
  <div class="flex flex-row">
    <button class:selected={$bestOf === 1} on:click={() => ($bestOf = 1)}>Bo1</button>
    <button class:selected={$bestOf === 3} on:click={() => ($bestOf = 3)}>Bo3</button>
    <button class:selected={$bestOf === 5} on:click={() => ($bestOf = 5)}>Bo5</button>
  </div>
</div>
