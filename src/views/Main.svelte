<script>
  import Router from './Router.svelte';
  export let page;
</script>

<div class="flex-1">
  <div class="p-6 md:mt-16 md:ml-64">
    <Router page={page} />
  </div>
</div>