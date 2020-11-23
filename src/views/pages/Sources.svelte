<script>
  import { obs } from '../../stores/obs';
  import ListItem from '../../components/ListItems/Index.svelte';

  let sceneName = '',
    sceneItems = [];
  const getCurrentScene = async () => {
    const res = await $obs.send('GetCurrentScene');
    sceneName = res.name;
    sceneItems = res.sources.map((s) => ({ name: s.name, value: s.type }));
  };
  getCurrentScene();
</script>

<h1>SOURCES</h1>

<ListItem title={sceneName} items={sceneItems} />
