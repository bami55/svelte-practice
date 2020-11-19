<script>
  import Home from './pages/Home.svelte';
  import Sources from './pages/Sources.svelte';

  const pages = {
    Home: Home,
    Sources: Sources,
  };
  
  export let page;
  let component;
  $ : component = pages[page] ? pages[page] : Home;
</script>

<svelte:component this={component} />