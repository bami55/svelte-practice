<script>
  import { obs } from '../../stores/obs';
  import ListItem from '../../components/ListItems/Index.svelte';

  let streamStatus = [];
  $obs.on('StreamStatus', (res) => {
    streamStatus = Object.entries(res).map(([key, value]) => ({ name: key, value: value }));
  });
  $obs.on('StreamStopped', () => {
    streamStatus = [];
  });
</script>

<h1>HOME</h1>

<div class="flex flex-col">
  <ListItem title={'Stream Status'} items={streamStatus} />
</div>
