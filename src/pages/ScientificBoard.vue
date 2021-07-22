<template>
  <div class="container">
    <h1>SCIENTIFIC BOARD</h1>

    <div class="card">
      <div class="card_id">
        <div class="card_id_text">
          <h2 class="card_id_text_name">Isabelle Durieu</h2>
          <p class="card_id_text_position">MD, PhD</p>
          <p class="card_id_text_work">
            Professor of Internal Medicine, Lyon, France Director Lyon Adult
            Cystic Fibrosis Centre
          </p>
        </div>
        <div class="card_id_avatar">
          <img
            class="card_id_avatar_img"
            src="../assets/scientific_board/Isabelle-Durieu.png"
            alt=""
          />
        </div>
      </div>
      <p class="card_description">
        As the Director of the Lyon Adult Cystic Fibrosis Clinic at Centre
        Hospitalier Lyon Sud, Dr Durieu is responsible for the care of more than
        300 adults with CF. Dr. Durieu is a Professor of Internal Medicine at
        the University of Lyon and Head, department of internal medicine, South
        Hospital of Lyon. Dr Durieu is the President of the French Cystic
        Fibrosis society and member of the European Cystic Fibrosis scientific
        committee.
        <br />
        <br />
        Dr Durieu, reviewer for International Journal, has published over 100
        articles and book chapters and has lectured nationally and
        internationally on issues related to CF. She has had 20 years of
        experience with CF clinical care.
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
  margin-bottom: 40px;
}
// CARD DESIGN
.card_id {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card_id_text_work {
  width: 300px;
  font-size: 10px;
}
.card_id_text_name {
  font-size: 16px;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.card_id_text_position {
  font-size: 10px;
  font-style: italic;
  margin-bottom: 4px;
}
.card_id_avatar_img {
  width: 120px;
}
</style>
