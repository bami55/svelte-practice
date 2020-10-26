<script>
  export let title, value;
  const labelCssClass = 'block text-gray-700 text-sm font-bold mb-2';
  const inputCssClass = 'block w-full textshadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
  const onFocus = e => e.target.select();
</script>

<div class="w-1/3 pr-6">
  <label class={labelCssClass} for="text">{title}</label>
  <input class={inputCssClass} id="text" type="number" bind:value={$value} on:focus={onFocus} placeholder={title}>
</div>