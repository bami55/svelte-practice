<script>
  import { bestOf } from '../../stores/store';
  import { obs } from '../../stores/obs';
  import Items from '../../components/Inputs/Index.svelte';
  import SelectBestOf from '../../components/Inputs/SelectBestOf.svelte';
</script>

<h1>MATCH</h1>

<div class="w-1/2 m-4 bg-coolGray-200 border border-coolGray-50 rounded-lg">
  <div class="p-4">
    <SelectBestOf value={$bestOf} />
  </div>
</div>
