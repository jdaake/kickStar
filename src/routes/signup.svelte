<script>
  import authStore from "../stores/auth-store.js";
  let isAuthenticated;
  let error;
  let firstName;
  let lastName;
  let email;
  let username;
  let password;
  let confirmPassword;

  function createUser(
    firstName,
    lastName,
    email,
    username,
    password,
    confirmPassword
  ) {
    if (password !== confirmPassword) {
      return (error = "Passwords do not match. Please try again");
    }

    if (firstName && lastName && email && username && password) {
      let user = {
        fName: firstName,
        lName: lastName,
        email: email,
        username: username,
        password: password
      };
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");
  section {
    margin-top: 7.5rem;
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

  #confirmPassword {
    margin-bottom: 1rem;
  }
  .user-card-container {
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
  .user-card {
    width: 90%;
    margin: auto;
  }

  .user-header {
    text-align: center;
  }
  .user {
    margin-left: 2rem;
  }

  .button-container {
    display: flex;
    margin: auto;
    justify-content: center;
  }
</style>

<section>
  <div class="user-card-container">
    <div class="user-card">
      <div class="user-header">
        <h2>Fill in some blanks for us.</h2>
      </div>
      <div class="user">
        <input
          id="firstName"
          type="text"
          bind:value={firstName}
          placeholder="First Name" />
      </div>
      <div class="user">
        <input
          id="lastName"
          type="text"
          bind:value={lastName}
          placeholder="Last Name" />
      </div>
      <div class="user">
        <input id="email" type="text" bind:value={email} placeholder="Email" />
      </div>
      <div class="user">
        <input
          id="username"
          type="text"
          bind:value={username}
          placeholder="Username" />
      </div>
      <div class="user">
        <input
          id="password"
          type="password"
          bind:value={password}
          placeholder="Password" />
      </div>
      <div class="user">
        <input
          id="confirmPassword"
          type="password"
          bind:value={confirmPassword}
          placeholder="Confirm Password" />
      </div>
      <div class="button-container">
        <button type="submit" on:click={createUser(firstName)}>
          Create User
        </button>
        <button type="button" on:click={() => (location.href = 'login')}>
          Login
        </button>
      </div>
    </div>
  </div>
</section>
