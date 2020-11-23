<script>
  import InputText from './Text.svelte';
  export let title, value, inputType;
</script>

<div class="flex flex-col flex-wrap">
  {#if inputType == 'text'}
    <InputText {title} {value} />
  {:else if inputType == 'number'}
    <InputText {title} {value} />
  {:else}
    <InputText {title} {value} />
  {/if}
</div>
