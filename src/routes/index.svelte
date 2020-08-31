<script>
  import { onMount, onDestroy } from "svelte";
  let isAuthorized = false;

  onMount(() => {
    if (!isAuthorized) {
      return this.redirect(302, "login");
    }
    return;
  });
</script>

<svelte:head>
  <title>SNKR KPR | Home</title>
</svelte:head>

<section />
