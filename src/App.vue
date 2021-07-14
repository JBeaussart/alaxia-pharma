<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  width: 65%;
  margin: 0 auto;
}
</style>
