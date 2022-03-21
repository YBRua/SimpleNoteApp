<template>
  <div class="home-container">
    <rounded-button msg="Simple Note" msgOnHover="Get Started"></rounded-button>
    <div class="home-footer">A NIMODev Tutorial Project</div>
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
.home-container {
  height: 90vh;
  display: flex;

  flex-direction: column;
  place-items: center;
  justify-content: center;
}

.home-footer {
  margin-top: 2rem;
  font-size: 0.5rem;
  color: #a3a3a3;
}
</style>
