<script>
  import Input from './Input.svelte';
  export let title, value;
</script>

<Input title={title} inputType="number" value={value} />