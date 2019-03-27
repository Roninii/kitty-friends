<template>
  <input type="text" placeholder="search kitties..." v-model="params" @input="updateParams(params)">
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
::placeholder {
  color: #fafafa;
  opacity: 1;
}
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
input:focus {
  outline: none;
}
</style>
