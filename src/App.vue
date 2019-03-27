<template>
  <div id="app">
    <header>
      <h1>Kitty Friends</h1>
      <Search/>
    </header>
    <Card-List/>
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
  }
};
</script>

<style>
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
header {
  text-align: center;
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
