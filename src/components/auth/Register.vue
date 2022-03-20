<template>
  <div class="titled-form-container">
    <h1>Register</h1>
    <div class="form-hrule"></div>
    <form class="simple-form" action="">
      <text-input
        type="text"
        id="user-name"
        placeholder="User Name"
        v-model:content="userName"
      />
      <text-input
        :class="{ error: isEmailInvalid }"
        type="text"
        id="email"
        placeholder="Email"
        v-model:content="email"
        :valid="!isEmailInvalid && email.length > 0"
      />
      <text-input
        :class="{ error: isPasswordInconsistent }"
        type="password"
        id="password"
        placeholder="Password"
        v-model:content="password"
        :valid="!isPasswordInconsistent && password.length > 0"
      />
      <text-input
        :class="{ error: isPasswordInconsistent }"
        type="password"
        id="confirm-password"
        placeholder="Confirm Password"
        v-model:content="confirmPassword"
        :valid="!isPasswordInconsistent && confirmPassword.length > 0"
      />
      <div class="prompting-area">
        <div class="error-prompt" v-if="isPasswordInconsistent">
          Inconsistent Password
        </div>
        <div class="error-prompt" v-if="isEmailInvalid">Invalid Email</div>
      </div>
      <input
        type="submit"
        value="Register"
        :disabled="!isSubmissionReady"
        :class="['form-btn', { disabled: !isSubmissionReady }]"
      />
    </form>
  </div>
</template>

<script>
import FormButton from "./FormButton.vue";
import TextInput from "./TextInput.vue";

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
};
</script>

<style lang="scss">
@import "./auth.scss";
</style>
