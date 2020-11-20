<script>
  import ListItem from '../../components/ListItems/Index.svelte';

  const streamStatus = [
    { name: 'streaming', value: true },
    { name: 'recording', value: false },
    { name: 'replay-buffer-active', value: false },
    { name: 'total-stream-time', value: 8492 },
    { name: 'num-total-frames', value: 201741 },
    { name: 'num-dropped-frames', value: 3 },
    { name: 'fps', value: 52.64 },
    { name: 'average-frame-time', value: 62.451 },
    { name: 'cpu-usage', value: 76 },
    { name: 'memory-usage', value: 89 },
    { name: 'free-disk-space', value: 10523 },
  ];

  const outputs = [
    { name: 'name', value: 'Output name' },
    { name: 'type', value: 'Output type/kind' },
    { name: 'width', value: 1920 },
    { name: 'height', value: 1080 },
    { name: 'flags rawValue', value: 1 },
    { name: 'flags audio', value: true },
    { name: 'flags video', value: true },
    { name: 'flags encoded', value: false },
  ];
</script>
<h1>HOME</h1>

<div class="flex flex-col">
  <ListItem title={"Stream Status"} items={streamStatus} />
  <ListItem title={"Output"} items={outputs} />
</div>