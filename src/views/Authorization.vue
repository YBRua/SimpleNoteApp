<template>
  <div class="auth-view">
    <auth-complex></auth-complex>
  </div>
</template>

<script>
import AuthComplex from "@/components/auth/AuthComplex.vue";
export default {
  components: {
    AuthComplex,
  },
};
</script>

<style>
.auth-view {
  padding-top: 10vh;
}
</style>
