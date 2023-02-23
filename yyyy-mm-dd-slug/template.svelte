<script>
  let width = null;
  import { onMount } from "svelte";
  export let onAiMounted = () => {};
  onMount(() => {
    onAiMounted();
  });
</script>

{{ ai2htmlPartial }}
