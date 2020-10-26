<script>
  import { bo, rounds, times } from '../../stores/store';
  import Input from './Input.svelte';
  
</script>

<div class="w-full flex flex-wrap">
  <Input title="Best of" value={bo} />
  <Input title="Rounds" value={rounds} />
  <Input title="Times" value={times} />
</div>