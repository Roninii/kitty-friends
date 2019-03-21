<template>
  <div>
    <img :src="url" alt="kitty" class="card-image">
    <div>
      <h2>{{ cat.name }}</h2>
      <p>{{ cat.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: `Card`,
  props: {
    cat: {
      type: Object
    }
  },
  computed: {
    url() {
      return `https://robohash.org/${this.cat.id}?set=set4`;
    }
  }
};
</script>

<style scoped>
.card-image {
  width: 100%;
  border-style: none;
}
</style>