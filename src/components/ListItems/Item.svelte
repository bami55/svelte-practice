<script>
  export let name, value;

  let isHover = false;
</script>

<li>
  <div class="flex flex-row" on:mouseenter="{() => { isHover = true; }}" on:mouseleave="{() => { isHover = false; }}">
    <div class="p-3 bg-rose-400 w-96" class:bg-rose-500={isHover}>{name}</div>
    <div class="p-3 bg-coolGray-200 w-full" class:bg-rose-400={isHover}>{value}</div>
  </div>
</li>
