<template>
  <div class="rounded-btn-container">
    <div @click="onClick()" @mouseover="onMouseOver()" @mouseleave="onMouseLeave()" class="rounded-button">
      <div>{{ _msg }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    routerLink: String
  },

  data() {
     return {
       _msg: this.msg,
       hovered: false
     }
  },

  methods: {
    onMouseOver() {
      this._msg = "Get Started";
    },
    
    onMouseLeave() {
      this._msg = this.msg;
    },

    onClick() {
      this.$router.push('auth')
    }
  },
};
</script>

<style lang="scss">
.rounded-btn-container {
  display: flex;
  place-items: center;
  justify-content: center;
}

.rounded-button {
  width: 40rem;

  @media (max-width: 640px) {
    width: 20rem;
  }

  border: 0.25rem #101010 solid;
  border-radius: 25px;

  cursor: pointer;

  div {
    width: 100%;
  
    font-size: 5rem;
    text-align: center;
    
    margin: 0;
    padding-top: 2rem;
    padding-bottom: 2rem;
    
  }

  &:hover {
    box-shadow: 0px 0px 5px #101010;
  }
}
</style>
