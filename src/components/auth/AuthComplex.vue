<template>
  <div class="auth-complex">
    <nav class="auth-nav">
      <div
        :class="['auth-nav-selector', { active: state === 'login' }]"
        @click="loginState"
      >
        Login
      </div>
      <div
        :class="['auth-nav-selector', { active: state === 'register' }]"
        @click="registerState"
      >
        Register
      </div>
      <div class="auth-nav-selector" @click="goHome">Home</div>
    </nav>
    <div class="auth-container">
      <login v-if="state === 'login'"></login>
      <register v-if="state === 'register'"></register>
    </div>
  </div>
</template>

<script>
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";

export default {
  data() {
    return {
      state: "login",
    };
  },
  components: {
    Login,
    Register,
  },
  methods: {
    loginState() {
      this.state = "login";
    },
    registerState() {
      this.state = "register";
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang='scss'>
.auth-complex {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  .auth-nav {
    display: flex;
    flex-direction: row;

    gap: 2rem;

    .auth-nav-selector {
      color: #a3a3a3;

      &:hover {
        color: #101010;
        cursor: pointer;
      }

      &.active {
        color: #101010;
        text-decoration: underline;
      }
    }
  }
}
</style>