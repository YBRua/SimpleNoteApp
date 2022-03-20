<template>
  <input
    :class="['input', state]"
    :type="type"
    :id="id"
    :placeholder="placeholder"
    :value="content"
    @input="$emit('update:content', $event.target.value)"
  />
</template>

<script>
export default {
  data() {
    return {
      state: "",
    };
  },
  props: {
    id: String,
    type: String,
    placeholder: String,
    content: String,
    valid: {
      default: null,
      type: Boolean,
    },
  },
  emits: ["update:content"],
  computed: {
    hasContent() {
      return this.content.length > 0;
    },
  },
  watch: {
    content() {
      if (this.hasContent) {
        if (this.valid !== null) {
          this.state = this.valid ? "valid" : "error";
        } else {
          this.state = "has-content";
        }
      } else {
        this.state = "";
      }
    },
  },
};
</script>

<style lang='scss'>
.input {
  width: 15rem;

  padding: 0.75rem 0.25rem 0.75rem 0.25rem;

  border: 0;

  background-color: #f5f5f5;

  &.has-content {
    color: #2563eb;
    background-color: #dbeafe;
  }

  &.has-content:focus {
    color: inherit;
  }

  &.valid {
    color: #16a34a;
    background-color: #dcfce7;
  }

  &.valid:focus {
    color: inherit;
  }

  &.error {
    color: #ef4444;
    background-color: #fee2e2;
  }

  &.error:focus {
    color: inherit;
  }

  &:focus {
    outline-width: 0;
    background-color: #dbeafe;
  }

  &:focus::placeholder {
    color: #2563eb;
  }

  &::placeholder {
    color: #737373;
    font-variant: small-caps;
  }
}
</style>
