<template>
  <div class="titled-form-container">
    <h1>Login</h1>
    <div class="form-hrule"></div>
    <form class="simple-form" action="">
      <text-input
        type="text"
        id="user-name"
        placeholder="User Name"
        v-model:content="userName"
        :valid="userName.length > 0"
      />
      <text-input
        type="password"
        id="password"
        placeholder="Password"
        v-model:content="password"
        :valid="password.length > 0"
      />
      <input
        type="submit"
        value="Login"
        :disabled="!isSubmissionReady"
        :class="['form-btn', { disabled: !isSubmissionReady }]"
      />
    </form>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import FormButton from "./FormButton.vue";

export default {
  data() {
    return {
      userName: "",
      password: "",
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
};
</script>

<style lang="scss">
@import "auth.scss";
</style>
