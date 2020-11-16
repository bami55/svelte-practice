<script>
  import { each } from 'svelte/internal';
import Card from './Card.svelte';
  const cards = [
    {
      title: 'Holidate',
      description: 'TOP Movies on Netflix in the World Today - No.1',
      image: 'https://filmtoro.cz/img3/film/lAaJc9842RDVrjvR3OLPMTeHkiA.jpg'
    },
    {
      title: 'Over the Moon',
      description: 'TOP Movies on Netflix in the World Today - No.2',
      image: 'https://filmtoro.cz/img3/film/lQfdytwN7eh0tXWjIiMceFdBBvD.jpg'
    },
    {
      title: 'Rebecca',
      description: 'TOP Movies on Netflix in the World Today - No.3',
      image: 'https://filmtoro.cz/img3/film/y8HpKxRwKsn6UfD21sW6Pep4uJz.jpg'
    },
    {
      title: 'Secrets of the Saqqara Tomb',
      description: 'TOP Movies on Netflix in the World Today - No.4',
      image: 'https://filmtoro.cz/img3/film/aaaET8EGa6mkBmCfA6yZ2xEmR2A.jpg'
    },
    {
      title: 'The Purge: Anarchy',
      description: 'TOP Movies on Netflix in the World Today - No.5',
      image: 'https://filmtoro.cz/img3/film/l1DRl40x2OWUoPP42v8fjKdS1Z3.jpg'
    },
    {
      title: 'Lucy',
      description: 'TOP Movies on Netflix in the World Today - No.6',
      image: 'https://filmtoro.cz/img3/film/rwn876MeqienhOVSSjtUPnwxn0Z.jpg'
    },
    {
      title: 'Doomsday',
      description: 'TOP Movies on Netflix in the World Today - No.7',
      image: 'https://filmtoro.cz/img3/film/d5rTA0dNsK9iLnRW7SDBwGuClI8.jpg'
    },
    {
      title: 'Neighbors',
      description: 'TOP Movies on Netflix in the World Today - No.8',
      image: 'https://filmtoro.cz/img3/film/bpj8myebvnTw5HDmzTSI8N6WFYr.jpg'
    },
    {
      title: 'Wanted',
      description: 'TOP Movies on Netflix in the World Today - No.9',
      image: 'https://filmtoro.cz/img3/film/mUrkppyahzk6koYFekxeu0tmcPd.jpg'
    },
    {
      title: 'The Kingdom',
      description: 'TOP Movies on Netflix in the World Today - No.10',
      image: 'https://filmtoro.cz/img3/film/83eJJlHscLsi9DHsqsyk1hIXL83.jpg'
    },
  ]
</script>

<div class="w-full flex flex-wrap place-content-center">
  {#each cards as card}
    <Card title={card.title} description={card.description} image={card.image} />
  {/each}
</div>
