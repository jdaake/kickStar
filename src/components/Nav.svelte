<script>
  let isAuthorized = false;
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");

  ul {
    display: flex;
    margin-left: -2rem;
  }
  li {
    list-style: none;
    margin-right: 1rem;
  }

  .link-container {
    display: flex;
    flex-wrap: row wrap;
    max-width: 650px;
    align-self: flex-start;
  }

  .nav-link {
    font-family: "Orbitron", sans-serif;
    font-size: 1.3rem;
    color: black;
    text-decoration: none;
    width: 200px;
  }

  .nav-link:hover {
    color: red;
  }
</style>

<nav>
  {#if isAuthorized}
    <div class="link-container">
      <ul>
        <li>
          <a class="nav-link" href="/">Your Collection</a>
        </li>
        <li>
          <a class="nav-link" href="about">Update Sneakers</a>
        </li>
        <li>
          <a class="nav-link" href="about">About</a>
        </li>
        <li>
          <a class="nav-link" href="about">Logout</a>
        </li>
      </ul>
    </div>
  {/if}
</nav>
