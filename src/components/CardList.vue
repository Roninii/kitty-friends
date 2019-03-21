<template>
  <div>
    <div class="card-list" v-if="cats.length">
      <div v-for="cat in cats" :key="cat.id" class="card">
        <Card :cat="cat"/>
      </div>
    </div>
    <div v-else class="error">
      <p>Oops.. were you expecting someone?</p>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: `Card-List`,
  components: {
    Card
  },
  props: {
    params: {
      type: String,
      default: ``
    }
  },
  data() {
    return {
      catsList: []
    };
  },
  computed: {
    cats() {
      if (this.catsList.length) {
        return this.catsList.filter(
          cat =>
            cat.name.toLowerCase().includes(this.params.toLowerCase()) === true
        );
      }
      return ``;
    }
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => {
        this.catsList = data;
      });
  }
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  text-align: center;
  background-color: #9eebcf;
  border-radius: 1rem;
  padding: 1rem;
  margin: 0.5rem;
  display: inline-block;
  border-width: 0.25rem;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  min-width: 200px;
  transition: transform 0.25s ease-out;
}
.card:hover {
  transform: scale(1.03);
}
.error {
  font-size: 1.3rem;
  color: #fafafa;
}
</style>