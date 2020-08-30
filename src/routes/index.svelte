<script>
  import { onMount, onDestroy } from "svelte";
  let isAuthorized = false;

  onMount(() => {
    if (!isAuthorized) {
      location.href = "login";
    }
    return;
  });
</script>

<svelte:head>
  <title>SNKR KPR | Home</title>
</svelte:head>

<section />
