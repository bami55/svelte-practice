<script>
  import { bestOf } from '../../stores/store';
  export let value;
  const bestOfArray = [1, 3, 5, 7]
  $bestOf = value === null || value === undefined || value === 0 ? bestOfArray[0] : value;

  const boNumClass = "w-20 h-10 mr-4 bg-rose-200 cursor-pointer transition delay-75 duration-200 ease-in-out hover:bg-rose-400 rounded";
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
    {#each bestOfArray as boNum}
      <div class="{boNumClass}" class:bg-rose-800={$bestOf === boNum} on:click={() => ($bestOf = boNum)}>
        Bo{boNum}
      </div>
    {/each}
  </div>
</div>
