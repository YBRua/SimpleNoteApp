<template>
  <input :disabled="forbidden" class="form-btn" type="submit" :value="value" />
</template>

<script>
export default {
  props: {
    value: String,
    forbidden: Boolean
  },
};
</script>

<style lang="scss">

</style>