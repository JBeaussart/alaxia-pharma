<template>
  <div class="alx_banner">
    <div class="alx_banner_content container">
      <h2 class="alx_banner_content_title">ALX009</h2>
      <br />

      <p class="alx_banner_content_description">
        ALX-009 is a first-in class orphan drug candidate for Cystic Fibrosis
        (CF) patients. <br /><br />
        It consists in the combination of two endogenous substances,
        hypothiocyanite (OSCN-) and lactoferrin, exhibiting antimicrobial
        properties compensating the defective innate immune system in CF
        patients. ALX-009 is presented as a solution for inhalation for the
        symptomatic treatment of lung infections.
      </p>
    </div>
    <div class="btn container">
      <p>
        <a href="#overview"
          ><i class="fas fa-binoculars btn_icon"></i>Overview</a
        >
      </p>
      <p>
        <a href="#efficacy"><i class="fas fa-bolt btn_icon"></i>Efficacy</a>
      </p>
      <p>
        <a href="#further_reading"
          ><i class="fas fa-book-open btn_icon"></i>Further reading</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  text-align: justify;
}
.alx_banner {
  position: relative;
  height: 250px;
  margin-top: -40px;
  background-color: #205785;
  padding-top: 36px;
  padding-bottom: 36px;
  h2,
  p {
    color: white;
  }
}
.alx_banner_content_title {
  font-size: 42px;
}
.alx_banner_content_description {
  text-align: justify;
  font-size: 14px;
}
.btn {
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 8px;
}
a {
  text-decoration: none;
  cursor: pointer;
  opacity: 0.8;
  background: white;
  color: #025293;
  margin-right: 12px;
  border: 1px solid white;
  border-radius: 4px;
  padding: 8px;
  transition: 0.3s all ease-in-out;
  &:hover {
    opacity: 0.6;
  }
}
.btn_icon {
  transform: translateY(2px);
  font-size: 16px;
  margin-right: 4px;
}
</style>
