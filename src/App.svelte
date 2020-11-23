<script>
  import TailwindCss from './TailwindCss.svelte';
  import Main from './views/Main.svelte';
  import { obs } from './stores/obs';
  import OBSWebSocket from 'obs-websocket-js';

  export let title;

  $obs = new OBSWebSocket();
  (async () => {
    await $obs.connect({ address: 'localhost:4444' });
    console.log('connected!');
  })();
</script>

<TailwindCss />

<Main {title} />
