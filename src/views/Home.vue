<template>
  <div class="container">
    <rounded-button msg="Simple Note"></rounded-button>
    <div class="footer">A NIMODev Tutorial Project</div>
  </div>
</template>

<script>
import RoundedButton from "../components/RoundedButton.vue";

export default {
  components: {
    RoundedButton,
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