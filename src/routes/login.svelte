<script>
  import authStore from "../stores/auth-store.js";
  let isAuthenticated;
  let error;
  let username;
  let password;

  const unsubscribeAuth = authStore.subscribe(isAuth => {
    isAuthenticated = isAuth;
  });

  function authenticateUser(username, password) {
    if (username === "jdaake" && password === "password") {
      authStore.update(() => {
        return { isAuthenticated: true };
      });
      unsubscribeAuth();
    } else {
      error = "Username or Password is incorrect. Please try again.";
      console.log(error);
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");
  section {
    margin-top: 12rem;
    font-family: "Ubuntu", sans-serif;
  }

  input {
    display: block;
    width: 90%;
    height: 3rem;
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    background: white;
    transition: border-color 0.1s ease-out;
    margin: 0, 0, 0.8rem, 0;
    padding-left: 0.5rem;
  }

  input:focus {
    border-color: #ff2247;
    outline: none;
  }
  /* label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
  } */
  button {
    background-color: #ff2247;
    border-radius: 10px;
    border: 1px solid #ff2247;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 17px;
    padding: 16px 31px;
    text-decoration: none;
    margin: 0.5rem;
  }
  button:hover {
    background-color: #ceff00;
    color: black;
    border: 1px solid #ceff00;
  }

  #password {
    margin-bottom: 1rem;
  }
  .login-card-container {
    display: flex;
    margin: auto;
    width: 30rem;
    height: auto;
    background-color: rgb(0, 173, 223);
    border: 3px solid #737d84;
    border-radius: 25px;
    color: white;
    padding: 1rem;
  }
  .login-card {
    width: 90%;
    margin: auto;
  }

  .login-header {
    text-align: center;
  }
  .login-username,
  .login-password {
    margin-left: 2rem;
  }

  .button-container {
    display: flex;
    margin: auto;
    justify-content: center;
  }
</style>

<svelte:head>
  <title>Kick Stash | Login</title>
</svelte:head>

<section>
  <div class="login-card-container">
    <div class="login-card">
      <div class="login-header">

        <h2>Please enter your creds.</h2>
      </div>
      <div class="login-username">
        <!-- <label for="username">Username:</label> -->
        <input
          id="username"
          type="text"
          bind:value={username}
          placeholder="Username" />
      </div>
      <div class="login-password">
        <!-- <label for="password">Password:</label> -->
        <input
          id="password"
          type="password"
          bind:value={password}
          placeholder="Password" />
      </div>
      <div class="button-container">
        <button type="submit" on:click={authenticateUser(username, password)}>
          Submit
        </button>
        <button type="button" on:click={() => (location.href = 'signup')}>
          Sign Up!
        </button>
      </div>
    </div>
  </div>
</section>
