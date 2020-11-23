<script>
  export let title, value;
  title = title === null || title === undefined ? '' : title;
  value = value === null || value === undefined ? '' : value;
</script>

<div class="flex flex-col w-1/2">
  <p class="font-bold text-sm">{title}</p>
  <input type="text" {value} />
</div>
