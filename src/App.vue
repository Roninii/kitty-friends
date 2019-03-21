<template>
  <div id="app">
    <h1>Kitty Friends</h1>
    <Search @params-change="setParams($event)"/>
    <Card-List :params="searchParams"/>
    <Footer/>
  </div>
</template>

<script>
import CardList from "./components/CardList.vue";
import Search from "./components/Search.vue";
import Footer from "./components/Footer.vue";

export default {
  name: `app`,
  components: {
    CardList,
    Search,
    Footer
  },
  data() {
    return {
      searchParams: ``
    };
  },
  methods: {
    setParams(params) {
      this.searchParams = params.trim();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@font-face {
  font-family: "SEGA LOGO FONT";
  font-style: normal;
  font-weight: normal;
  src: url("./assets/SEGA.woff") format("woff");
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(
    to left,
    rgba(7, 27, 82, 1) 0%,
    rgba(0, 128, 128, 1) 100%
  );
}
h1 {
  font-family: "SEGA LOGO FONT";
  font-weight: 200;
  color: #0ccac4;
  font-size: 3rem;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
}
</style>
