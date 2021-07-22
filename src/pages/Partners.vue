<template>
  <div class="container">
    <h1>Partners</h1>

    <hr />
    <div class="partners">
      <img class="logo_partners" src="../assets/partners/stragen.png" alt="" />
      <p>
        Stragen is a privately-owned, international healthcare company based in
        Geneva (Switzerland). Founded in 1990, Stragen Healthcare Group
        initially focused on the development, registration and worldwide
        distribution of generic and generic+ drug products with franchise in
        hospital supplies and women's health and more recently on
        biopharmaceuticals. Leveraging on a strong pharmaceutical expertise,
        Stragen increased the scope of activities and developed several related
        business units: New Molecules, Consumer Health and Services. Stragen
        employs about 100 collaborators and exports in more than 60 countries
        through an extensive network of local partners and affiliates.
      </p>
    </div>

    <hr />
    <div class="partners">
      <img
        class="logo_partners"
        src="../assets/partners/lyonbiopole.png"
        alt=""
      />
      <p>
        Lyonbiopole is the one-stop shop for healthcare innovation in
        Rhône-Alpes, France. It aims at supporting the emergence and development
        of innovative technologies, products and services for a more
        personalized medicine to the patient's benefit
      </p>
    </div>

    <hr />
    <div class="partners">
      <img
        class="logo_partners"
        src="../assets/partners/bpifrance.png"
        alt=""
      />
      <p>
        Bpifrance finances businesses from the seed phase to transfer to stock
        exchange listing, through loans, guarantees and equity. Bpifrance has
        three goals: • to accompany businesses in their growth • to prepare
        tomorrow’s competitivity • to develop an ecosystem that favours
        entrepreneurship
      </p>
    </div>

    <hr />
    <div class="partners">
      <img
        class="logo_partners"
        src="../assets/partners/cystic_fibrosis_foundation.png"
        alt=""
      />
      <p>
        The mission of the Cystic Fibrosis Foundation is to cure cystic fibrosis
        and to provide all people with the disease the opportunity to lead full,
        productive lives by funding research and drug development, promoting
        individualized treatment, and ensuring access to high-quality,
        specialized care.
      </p>
    </div>

    <hr />
    <div class="partners">
      <img class="logo_partners" src="../assets/partners/iABC.png" alt="" />
      <p>
        Respiratory infections, frequently caused by drug-resistant bacteria,
        are the main cause of disease and death in people with cystic fibrosis
        (CF) and bronchiectasis (BE). Thanks to inhaled antibiotics, patients
        now live longer than ever before and enjoy a better quality of life.
        However, infections are increasingly becoming resistant to the few drugs
        available, putting patients’ lives at risk. The iABC project is
        advancing the development of two inhaled antibiotics for patients with
        CF and BE. It is also working to identify ways of improving clinical
        trials of treatments for these serious diseases.
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
h1 {
  font-size: 32px;
  margin-bottom: 24px;
}
.logo_partners {
  width: 150px;
}
.partners {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
img {
  margin-right: 32px;
}
</style>
