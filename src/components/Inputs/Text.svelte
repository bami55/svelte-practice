<script>
  export let value;
  value = (value === null || value === undefined) ? "" : value;
</script>

<input type="text" value={value} />