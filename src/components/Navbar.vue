<template>
  <nav>
    <ul class="container">
      <li><router-link to="/">ABOUT</router-link></li>
      <li><router-link to="/alx-009">ALX-009</router-link></li>
      <li>
        <router-link to="/cystic-fibrosis">CYSTIC FIBROSIS</router-link>
      </li>
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
          ><img class="logo" src="../assets/logo.jpg" alt="logo alaxia"
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
  background: linear-gradient(to right, #5698ce, #fff 70%);
  z-index: 300;
  position: sticky;
  top: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 2px solid #025293;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    li {
      cursor: pointer;
      a {
        text-decoration: none;
        color: #025293;
        font-size: 10px;
      }
      a:active {
        text-decoration: underline;
        font-weight: bolder;
      }
      a:focus {
        text-decoration: underline;
        font-weight: bolder;
      }
    }
    li:hover {
      color: #3bb8e3;
    }
  }
}
.logo {
  height: 30px;
  padding-top: px;
}
</style>
