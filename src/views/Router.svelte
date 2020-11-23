<script>
  import Home from './pages/Home.svelte';
  import Sources from './pages/Sources.svelte';
  import Match from './pages/Match.svelte';

  const pages = {
    Home: Home,
    Sources: Sources,
    Match: Match,
  };

  export let page;
  let component;
  $: component = pages[page] ? pages[page] : Home;
</script>

<svelte:component this={component} />
