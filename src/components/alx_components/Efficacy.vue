<template>
  <div id="efficacy" class="container efficacy">
    <h2 class="alx_part_title">
      <i class="fas fa-bolt banner_icon"></i>
      EFFICACY
    </h2>
    <br />
    <section>
      <h3>
        ALX-009 (OSCN-/bLF) – a therapeutic option to fight broader bacterial
        infections
      </h3>
      <br />
      <div>
        <p class="alx_page_schema_description">
          Tests performed by Alaxia or in collaboration with Queen’s University
          Belfast or Colorado State University
        </p>
        <img
          class="alx_page_schema"
          src="../../assets/alx_page/alx_page__efficacy_first_schemajpg.png"
          alt=""
        />
      </div>
    </section>

    <br />
    <br />

    <section>
      <h3>
        Time killing profile of ALX-009 against emergent Cystic Fibrosis
        pathogens or Selected agent
      </h3>
      <br />
      <p class="alx_page_schema_description">
        Achromobacter spp, Pseudomonas aeruginosa, Burkholderia cepacia complex,
        Stenotrophomonas maltophilia, Burkholderia pseudomallei
      </p>
      <div class="img_efficacy">
        <img
          class="alx_page_schema_small"
          src="../../assets/alx_page/alx_page__efficacy_second_schemajpg.jpg"
          alt=""
        />
        <img
          class="alx_page_schema_small"
          src="../../assets/alx_page/alx_page__efficacy_third_schemajpg.jpg"
          alt=""
        />
      </div>
    </section>
    <br />
    <br />
    <br />
    <section>
      <h3>ALX-009 (OSCN-/bLF) – bactericidal effect in biological matrices</h3>
      <br />
      <p class="alx_page_schema_description">
        In contrast with antibiotics, ALX-009 activity is not altered by complex
        structures such as biofilm and/or sputum that are present in lung
        infections
      </p>
      <div class="img_efficacy">
        <img
          class="alx_page_schema_small"
          src="../../assets/alx_page/alx_page__efficacy_fourth_schemajpg.jpg"
          alt=""
        />
        <img
          class="alx_page_schema_small"
          src="../../assets/alx_page/alx_page__efficacy_six_schemajpg.jpg"
          alt=""
        />
      </div>
      <p>
        ALX-009 kills bacteria embedded in P. aeruginosa biofilms at
        concentrations similar to planktonic cultures. Presence of bLF allows
        decreasing OSCN- dose
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.img_efficacy {
  display: flex;
  justify-content: space-around;
}
.container {
  text-align: justify;
}
.alx_part_title {
  font-size: 24px;
}
.alx_page_schema {
  width: 40vw;
}
.alx_page_schema_small {
  width: 30vw;
}
.alx_page_schema_description {
  font-style: italic;
}
.banner_icon {
  font-size: 24px;
}
</style>
