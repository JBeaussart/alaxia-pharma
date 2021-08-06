<template>
  <Navbar />
  <div class="main">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
/* IMPORT FONT FAMILY LATO FROM GOOGLE FONT */
@import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

/* IMPORT FONT AWESOME */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

/* GENERAL SETTINGS */
* {
  color: #025293;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 20px;
}
#app {
  font-family: 'STIX Two Text', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  width: 65%;
  margin: 0 auto;
}
.main {
  background-color: #f9fcff;
  padding-top: 40px;
  padding-bottom: 20px;
}
</style>
