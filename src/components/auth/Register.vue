<template>
  <div class="titled-form-container">
    <h1>Register</h1>
    <div class="form-hrule"></div>
    <form id="register-form" class="simple-form" @submit="postRegister">
      <text-input
        type="text"
        name="username"
        placeholder="User Name"
        v-model:content="userName"
      />
      <text-input
        :class="{ error: isEmailInvalid }"
        type="text"
        name="email"
        placeholder="Email"
        v-model:content="email"
        :valid="!isEmailInvalid && email.length > 0"
      />
      <text-input
        :class="{ error: isPasswordInconsistent }"
        type="password"
        name="password"
        placeholder="Password"
        v-model:content="password"
        :valid="!isPasswordInconsistent && password.length > 0"
      />
      <text-input
        :class="{ error: isPasswordInconsistent }"
        type="password"
        name="confirm-password"
        placeholder="Confirm Password"
        v-model:content="confirmPassword"
        :valid="!isPasswordInconsistent && confirmPassword.length > 0"
      />
      <div class="prompting-area">
        <div class="error-prompt" v-if="isPasswordInconsistent">
          Inconsistent Password
        </div>
        <div class="error-prompt" v-if="isEmailInvalid">Invalid Email</div>
        <div class="error-prompt" v-if="isRegisterFailed">
          Registration Failed. Please Try Again.
        </div>
        <div class="ok-prompt" v-if="isRegisterSuccessful">
          Registered Successfully
        </div>
      </div>
      <input
        type="submit"
        value="Register"
        :disabled="!isSubmissionReady || isPending"
        :class="[
          'form-btn',
          { disabled: !isSubmissionReady, pending: isPending },
        ]"
      />
    </form>
  </div>
</template>

<script>
import FormButton from "./FormButton.vue";
import TextInput from "./TextInput.vue";
import { postForm } from "./auth.js";
import { URL_BASE } from "@/config.js";

export default {
  components: {
    FormButton,
    TextInput,
  },

  data() {
    return {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",

      isRegisterSuccessful: false,
      isRegisterFailed: false,

      isPending: false,

      inputClass: "input",
    };
  },

  computed: {
    isPasswordInconsistent() {
      return (
        this.password !== this.confirmPassword &&
        this.password !== "" &&
        this.confirmPassword !== ""
      );
    },

    isEmailInvalid() {
      return (
        !this.email.toLowerCase().match(/^[^\s@]+@([^\s@\.]+\.)+[^\s@\.]+$/) &&
        this.email.length
      );
    },

    isSubmissionReady() {
      return (
        this.userName.length > 0 &&
        this.email.length > 0 &&
        this.password.length > 0 &&
        !this.isEmailInvalid > 0 &&
        !this.isPasswordInconsistent
      );
    },
  },
  methods: {
    handleResponse(res) {
      if (res.status !== 201) {
        this.responseFail(res);
      } else {
        this.responseOk(res);
      }
    },

    responseOk(res) {
      this.isRegisterSuccessful = true;
      this.isRegisterFailed = false;
      this.isPending = false;
    },

    responseFail(res) {
      this.isRegisterSuccessful = false;
      this.isRegisterFailed = true;
      this.isPending = false;
    },

    postRegister(evt) {
      this.isPending = true;
      try {
        evt.preventDefault();

        const formContent = document.getElementById("register-form");
        const request = postForm(`${URL_BASE}/auth/register`, formContent);
        request
          .then((res) => {
            this.handleResponse(res);
          })
          .catch((err) => {
            this.responseFail();
          });
      } catch (err) {
        console.error(err);
        this.responseFail();
        return false;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
@import "./auth.scss";
</style>
