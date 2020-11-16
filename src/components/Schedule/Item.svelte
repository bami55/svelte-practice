<script>
  export let match;
  $: started_at = `${match.started_at}`;
  $: title = `Round${match.round}`;
  $: bo = `Best of ${match.bo}`;
</script>

<div class="my-1 border rounded text-gray-700 text-sm font-bold hover:bg-teal-400 hover:text-gray-100">
  <div class="flex flex-row">
    <div class="w-1/2 py-2 border-r">{started_at}</div>
    <div class="w-1/2 py-2 border-r">{title}</div>
    <div class="w-1/2 py-2">{bo}</div>
  </div>
</div>