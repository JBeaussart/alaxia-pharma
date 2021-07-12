<template>
  <nav class="container">
    <ul>
      <li>ABOUT</li>
      <li>ALX-009</li>
      <li>CYSTIC FIBROSIS</li>
      <li>PARTNERS</li>
      <li>SCIENTIFIC BOARD</li>
      <li>NEWS</li>
      <li>EVENTS</li>
      <li>POSTERS AND TALKS</li>
      <li>CONTACT</li>
      <li><img class="logo" src="../assets/logo.jpeg" alt="logo alaxia" /></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  height: 40px;
  line-height: 40px;
  margin-bottom: 40px;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    border-bottom: 2px solid #025293;
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
  height: 40px;
  padding-top: 10px;
}
</style>
