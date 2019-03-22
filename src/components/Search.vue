<template>
  <footer>
    <input
      type="text"
      placeholder="search kitties..."
      @input="$emit('params-change', $event.target.value)"
    >
  </footer>
</template>

<script>
export default {
  name: `Search`
};
</script>

<style scoped>
input {
  height: 1rem;
  width: 50vw;
  padding: 1rem;
  font-size: 1.2rem;
  font-family: "Indie Flower", cursive;
  background: none;
  border: none;
  border-left: 1px solid #fafafa;
  border-bottom: 1px solid #fafafa;
<<<<<<< HEAD
  border-radius: 0;
=======
  border-radius: none;
>>>>>>> 637042a219137bc1a6ecfb85ed866cb8a652c24c
  color: #fafafa;
}
</style>
