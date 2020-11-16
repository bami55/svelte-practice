<script>
  import { bo, rounds, times } from '../../stores/store';
  import Input from './Input.svelte';
  export let initBo, initRounds, initTimes;
  $bo = initBo;
  $rounds = initRounds;
  $times = initTimes;
</script>

<div class="w-full flex flex-col">
  <Input title="Best of" value={bo} />
  <Input title="Rounds" value={rounds} />
  <Input title="Times" value={times} />
</div>