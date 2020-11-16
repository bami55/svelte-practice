<script>
  import { bo, rounds, times } from '../../stores/store';
  import Number from './Number.svelte';
  export let initBo, initRounds, initTimes;
  $bo = initBo;
  $rounds = initRounds;
  $times = initTimes;
</script>

<div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">時間計算</div>
<div class="w-full flex flex-col">
  <Number title="Best of" value={bo} />
  <Number title="Times" value={times} />
  <Number title="Rounds" value={rounds} />
</div>