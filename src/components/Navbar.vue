<template>
  <nav>
    <ul class="container">
      <div class="link">
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
      </div>
      <div class="logo_container">
        <li>
          <router-link to="/"
            ><img class="logo" src="../assets/logo.jpg" alt="logo alaxia"
          /></router-link>
        </li>
        <div class="link_img" :scroll="handleScroll">
          <router-link to="/alx-009"
            ><img src="../assets/navbar/pastille-alx.png" alt="pastille alx"
          /></router-link>
          <router-link to="/clinical-trial"
            ><img
              src="../assets/navbar/pastille-clinical.png"
              alt="Clinical Trial"
          /></router-link>
          <router-link to="/patient"
            ><img src="../assets/navbar/pastille-patient.png" alt=""
          /></router-link>
        </div>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      const link_img = document.querySelector(".link_img");
      link_img.classList.toggle("link_img_disabled", window.scrollY > 50);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  background: #fff;
  z-index: 300;
  position: sticky;
  top: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid #025293;
  .link {
    width: 78%;
    display: flex;
    justify-content: space-between;
  }
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
        font-size: 13px;
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
  height: 40px;
  margin-right: 32px;
}
.logo_container {
  position: relative;
}
.link_img {
  display: flex;
  top: 62px;
  right: -75px;
  position: absolute;
}
.link_img_disabled {
  display: none;
}
</style>
