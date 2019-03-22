<template>
  <div>
    <ul class="footer-nav">
      <li class="push">Made with ❤ by Ronnie Villarini</li>
      <li>
        <a href="#">GitHub</a>
      </li>
      <li>
        <a href="#">Twitter</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: `Footer`
};
</script>

<style scoped>
.footer-nav {
  display: flex;
  list-style: none;
  justify-content: flex-end;
  color: #fafafa;
  transition: all 0.5s;
  padding: 0;
}
a {
  color: #fafafa;
  text-decoration: none;
  transition: font-size 0.5s;
  margin: 1rem;
}
.push {
  margin-right: auto;
}

@media screen and (max-width: 900px) {
  .footer-nav {
    font-size: 0.75rem;
  }
}
</style>