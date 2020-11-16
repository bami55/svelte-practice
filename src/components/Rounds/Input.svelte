<script>
  export let title, inputType, value;
  const labelCssClass = 'block w-1/4 mt-2 text-gray-700 text-sm font-bold';
  const inputCssClass = 'block w-3/4 textshadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
  const onFocus = e => e.target.select();
</script>

<div class="flex flex-row py-2">
  <label class={labelCssClass} for="text">{title}</label>
  {#if inputType === 'number'}
    <input class={inputCssClass} id="text" type="number" bind:value={$value} on:focus={onFocus} placeholder={title}>
  {:else if inputType === 'time'}
    <input class={inputCssClass} id="text" type="number" bind:value={$value} on:focus={onFocus} placeholder={title}>
  {/if}
</div>