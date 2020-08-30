<script>
  import { fade } from "svelte/transition";
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
  @import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");

  section {
    margin-top: 12rem;
    font-family: "Orbitron", sans-serif;
  }
  input {
    display: block;
    width: 90%;
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 3px 3px 0 0;
    background: white;
    padding: 0.15rem 0.25rem;
    transition: border-color 0.1s ease-out;
    margin-bottom: 0.8rem;
  }

  input:focus {
    border-color: #ff2247;
    outline: none;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
    font-family: "Orbitron", sans-serif;
  }
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
    align-content: center;
    justify-content: center;
    align-items: center;

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
    align-items: center;
  }
</style>

<svelte:head>
  <title>Kick Stash | Login</title>
</svelte:head>

<section fade={{ duration: 400, delay: 100 }}>
  <div class="login-card-container">
    <div class="login-card">
      <div class="login-header">
        <h2>Login</h2>
        <h4>Please enter your username and password</h4>
      </div>
      <div class="login-username">
        <label for="username">Username:</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          bind:value={username} />
      </div>
      <div class="login-password">
        <label for="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          bind:value={password} />
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
