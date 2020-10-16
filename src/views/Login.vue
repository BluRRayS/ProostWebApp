<template>
  <div class="login">
    <div class="login-panel">
      <h1>Login</h1>
      <form class="login-form">
        <label for="email">Email</label>
        <input class="login-input" id="email" type="email" />
        <label for="password">Wachtwoord</label>
        <input class="login-input" id="password" type="text" />
        <a href="#" class="login-form-forgot">Wachtwoord vergeten?</a>
        <button class="login-button">Login</button>
        <button class="login-panel-no-account-button">
          Gebruik Proost! zonder account
        </button>
      </form>

      <p>Of login via</p>
      <div class="login-panel-other-methods-wrapper">
        <img
          src="@/assets/google.png"
          alt="google"
          class="login-panel-other-method-img"
        />
      </div>
      <a href="#">Nieuw account aanmaken</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@900&family=Open+Sans:wght@300&display=swap");

.login {
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: block;
  }

  .login-panel {
    background: white;
    padding: 0em 2.5em 0 2.5em;
    height: 100vh;
    text-align: center;
    width: auto;
    @media only screen and (min-width: 425px) {
      margin-left: 2em;
      margin-right: 2em;
    }
    @media only screen and (min-width: 600px) {
      width: 400px;
    }
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

    a {
      text-decoration: none;
      color: #676767;
      &:hover {
        text-decoration-line: underline;
        text-decoration-thickness: 1px;
        text-decoration-color: #676767;
      }
    }

    h1 {
      @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@900&display=swap");
      font-family: "Heebo", sans-serif;
      margin-top: 2em;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }

    .login-form {
      display: flex;
      flex-direction: column;
      text-align: left;
      font-family: "Open Sans", sans-serif;
      margin-bottom: 0.8em;

      .login-input {
        margin-bottom: 2em;
        border: none;
        border-bottom: 1px solid gray;
        outline: none;
      }

      .login-form-forgot {
        text-align: right;
      }

      .login-button {
        border-radius: 5em;
        background: rgb(0, 245, 255);
        background: linear-gradient(
          45deg,
          rgba(0, 245, 255, 1) 0%,
          rgba(151, 86, 235, 1) 53%,
          rgba(228, 58, 247, 1) 100%
        );
        border: none;
        color: white;
        cursor: pointer;
        font-weight: bold;
        margin-top: 2.5em;
        font-family: "Heebo", sans-serif;
        font-size: 15px;
        height: 40px;
        transition: all 0.5s;
        background-size: 200% 100%;
        margin-bottom: 0.75em;

        &:hover {
          background-position: 100%;
        }
      }
    }
    .login-panel-no-account-button {
      border: 1px solid rgba(103, 103, 103, 1);
      border-radius: 5em;
      outline: none;
      background: none;
      height: 40px;
      color: #676767;
      cursor: pointer;
      font-weight: bold;
      font-family: "Heebo", sans-serif;
      margin-bottom: 2.5em;
    }

    .login-panel-other-methods-wrapper {
      display: flex;
      flex-direction: row;
      margin-bottom: 2em;
      justify-content: center;
      .login-panel-other-method-img {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
