<script>
  import Nav from "../components/Nav.svelte";
  let isAuthorized = false;
</script>

<style>
  .volt-shape-divider-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .volt-shape-divider-top svg {
    position: relative;
    display: block;
    width: calc(111% + 1.3px);
    height: 100px;
    transform: rotateY(180deg);
    z-index: -10;
  }

  .volt-shape-divider-top .shape-fill {
    fill: #ceff00;
  }

  .infrared-shape-divider-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .infrared-shape-divider-bottom svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 172px;
    transform: rotateY(180deg);
  }

  .infrared-shape-divider-bottom .shape-fill {
    fill: #ff2247;
  }
</style>

<Nav />
<div class="volt-shape-divider-top">
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none">
    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" />
  </svg>
</div>

<main>
  <slot />
</main>

{#if !isAuthorized}
  <div class="infrared-shape-divider-bottom">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill" />
    </svg>
  </div>
{/if}
