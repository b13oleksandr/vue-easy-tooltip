<template>
  <RouterLink
      class="custom-button"
      :to="link"
      v-if="link"
  >
    <slot />
  </RouterLink>
  <button v-else class="custom-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "CustomButton",

  props: {
    link: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="css" scoped>
.custom-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: .8rem 1.6rem;
  border-radius: 4px;
  transition: background-color .1s ease;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-bottom: 1px solid #389d70;
  cursor: pointer;
}

.custom-button:hover {
  background-color: #4abf8a;
}
</style>
