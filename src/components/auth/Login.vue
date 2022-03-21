<template>
  <div class="titled-form-container">
    <h1>Login</h1>
    <div class="form-hrule"></div>
    <form id="login-form" class="simple-form" @submit="postLogin">
      <text-input
        type="text"
        name="username"
        placeholder="User Name"
        v-model:content="userName"
      />
      <text-input
        type="password"
        name="password"
        placeholder="Password"
        v-model:content="password"
      />
      <div class="prompting-area">
        <div class="error-prompt" v-if="isLoginFailed">Failed to Login</div>
        <div class="ok-prompt" v-if="isLoginSuccessful">
          Successfully Logged In
        </div>
      </div>
      <input
        type="submit"
        value="Login"
        :disabled="!isSubmissionReady || isPending"
        :class="[
          'form-btn',
          { disabled: !isSubmissionReady, pending: isPending },
        ]"
      />
    </form>
    <div class="forgot-password" @click="forgotPassword">Forgot Password?</div>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import FormButton from "./FormButton.vue";
import { postForm } from "./auth.js";
import { URL_BASE } from "@/config.js";

export default {
  data() {
    return {
      userName: "",
      password: "",

      isLoginSuccessful: false,
      isLoginFailed: false,

      isPending: false,
    };
  },
  components: {
    TextInput,
    FormButton,
  },
  computed: {
    isSubmissionReady() {
      return this.userName.length > 0 && this.password.length > 0;
    },
  },
  methods: {
    handleResponse(res) {
      if (res.status !== 200) {
        this.responseFail(res);
      } else {
        this.responseOk(res);
      }
    },

    responseOk(res) {
      this.isLoginSuccessful = true;
      this.isLoginFailed = false;
      this.isPending = false;
    },

    responseFail(res) {
      this.isLoginSuccessful = false;
      this.isLoginFailed = true;
      this.isPending = false;
    },

    postLogin(evt) {
      try {
        this.isPending = true;

        evt.preventDefault();

        const formContent = document.getElementById("login-form");
        postForm(`${URL_BASE}/auth/login`, formContent)
          .then((res) => {
            this.handleResponse(res);
          })
          .catch((err) => this.responseFail());
      } catch (err) {
        console.error(err);
        this.responseFail();
        return false;
      }

      return false;
    },

    forgotPassword() {
      alert("那咋办嘛");
    },
  },
};
</script>

<style lang="scss">
@import "auth.scss";
.forgot-password {
  font-size: 0.5rem;
  color: #a3a3a3;

  &:hover {
    color: #101010;
    cursor: pointer;
  }
}
</style>
