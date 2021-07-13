<template>
  <nav>
    <ul class="container">
      <li><router-link to="/">ABOUT</router-link></li>
      <li><router-link to="/alx-009">ALX-009</router-link></li>
      <li><router-link to="/cystic-fibrosis">CYSTIC FIBROSIS</router-link></li>
      <li><router-link to="/partners">PARTNERS</router-link></li>
      <li>
        <router-link to="/scientific-board">SCIENTIFIC BOARD</router-link>
      </li>
      <li><router-link to="/news">NEWS</router-link></li>
      <li><router-link to="/events">EVENTS</router-link></li>
      <li>
        <router-link to="/poster-and-talk">POSTERS AND TALKS</router-link>
      </li>
      <li><router-link to="/contact">CONTACT</router-link></li>
      <li>
        <router-link to="/"
          ><img class="logo" src="../assets/logo.jpeg" alt="logo alaxia"
        /></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  height: 70px;
  line-height: 60px;
  margin-bottom: 40px;
  border-bottom: 2px solid #025293;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    li {
      font-size: 10px;
      color: #025293;
      cursor: pointer;
    }
    li:hover {
      color: #3bb8e3;
    }
  }
}
.logo {
  height: 50px;
  padding-top: 20px;
}
</style>
