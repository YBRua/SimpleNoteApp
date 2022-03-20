<template>
  <div class="container">
    <!-- <rounded-button msg="Simple Note"></rounded-button>
    <div class="footer">A NIMODev Tutorial Project</div> -->
    <!-- <login></login> -->
    <register></register>
  </div>
</template>

<script>
import RoundedButton from "../components/RoundedButton.vue";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";

export default {
  components: {
    RoundedButton,
    Register,
    Login,
  },
};
</script>

<style lang="scss">
.container {
  height: 90vh;
  display: flex;

  flex-direction: column;
  place-items: center;
  justify-content: center;
}

.footer {
  margin-top: 2rem;
  font-size: 0.5rem;
  color: gray;
}
</style>