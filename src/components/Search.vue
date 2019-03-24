<template>
  <footer>
    <input
      type="text"
      placeholder="search kitties..."
      v-model="params"
      @input="updateParams(params)"
    >
  </footer>
</template>

<script>
export default {
  name: `Search`,
  data() {
    return {
      params: ``
    };
  },
  methods: {
    updateParams(params) {
      this.$store.commit(`UPDATE_SEARCH_FIELD`, params);
    }
  }
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
  border-radius: 0;
  color: #fafafa;
}
</style>
