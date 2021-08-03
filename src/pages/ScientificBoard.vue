<template>
  <div class="container">
    <h1>SCIENTIFIC BOARD</h1>
    <Card />
    <!-- Isabelle Durieu -->

    <!-- Pavel Drevinek -->
    <div class="card">
      <div class="card_id">
        <div class="card_id_text">
          <h2 class="card_id_text_name">Pavel Drevinek</h2>
          <p class="card_id_text_post">MD, PhD</p>
          <p class="card_id_text_work">
            Associate Professor of Medical Microbiology, Prague, CZ <br />
            Head of microbiology department
          </p>
        </div>
        <div class="card_id_avatar">
          <img
            class="card_id_avatar_img"
            src="../assets/scientific_board/Pavel-Drevinek.png"
            alt="avatar"
          />
        </div>
      </div>
      <p class="card_description">
        As the Lead Microbiologist of the Prague Cystic Fibrosis Centre, Dr
        Drevinek dedicated his research career to studying the epidemiology,
        improving the diagnostics and understanding the pathophysiology of the
        Bcc infections in CF. Dr Drevinek is an active member of International
        B.cepacia working group and member of the board of the European Cystic
        Fibrosis Society.
        <br />
        <br />
        Dr Drevinek, leading physician at the Prague CF center in regards to
        clinical trials, has published over 50 articles and book chapters and
        has lectured nationally and internationally on issues related to CF.Dr
        Drevinek is the coordinator of ECFS Standards of care Project.
      </p>
      <br />
      <hr />

      <!-- Michael Tunney -->
      <div class="card">
        <div class="card_id">
          <div class="card_id_text">
            <h2 class="card_id_text_name">Michael Tunney</h2>
            <p class="card_id_text_post">PhD</p>
            <p class="card_id_text_work">
              Professor of Clinical Pharmacy, <br />
              Queen’s University Belfast, UK
            </p>
          </div>
          <div class="card_id_avatar">
            <img
              class="card_id_avatar_img"
              src="../assets/scientific_board/michael-tunney.png"
              alt="avatar"
            />
          </div>
        </div>
        <p class="card_description">
          Professor Michael Tunney is a Chair in Clinical Pharmacy at the School
          of Pharmacy, Queen’s University Belfast. He has an international track
          record in lung microbiome research with his translational research
          programme focusing primarily on the improved detection and treatment
          of lung infection in patients with respiratory diseases such as cystic
          fibrosis (CF), non-CF bronchiectasis and COPD. He has published over
          100 research papers in peer-reviewed journals and serves on a number
          of scientific advisory boards as well as editorial boards.
        </p>
        <br />
        <hr />
      </div>
    </div>

    <!-- Annie-Claude Benichou -->
    <div class="card">
      <div class="card_id">
        <div class="card_id_text">
          <h2 class="card_id_text_name">Annie-Claude Benichou</h2>
          <p class="card_id_text_post">MD</p>
          <p class="card_id_text_work">
            Chief Medical Officer, <br />
            Alaxia, Stragen Healthcare Group
          </p>
        </div>
        <div class="card_id_avatar">
          <img
            class="card_id_avatar_img"
            src="../assets/scientific_board/annie-claude-benichou.png"
            alt="avatar"
          />
        </div>
      </div>
      <p class="card_description">
        Dr. Benichou has more than 23 years of experience in the management of
        clinical development of drugs and high-tech medical devices in Europe
        and in the USA. After she earned a medical degree from the University of
        Toulouse in France, she obtained inter-university degrees in methodology
        for clinical development, in pharmacovigilance, and in
        pharmaco-epidemiology. In 2004, she joined the Stragen Group for the
        clinical development of an orphan drug in onco-hematology (FDA approved
        in 2012) as well as for project coordination with the European Medicines
        Agency, and endorsed the Global Qualified Person for Pharmacovigilance
        role and responsibilities since 2007. She is now managing a sister
        company within the Stragen Group, dedicated to services in clinical
        development strategy and pharmacovigilance. She has the CMO position
        within Alaxia’s development team since January 2011.
      </p>
      <br />
      <hr />
    </div>

    <!-- Victor Juarez-Perez -->
    <div class="card">
      <div class="card_id">
        <div class="card_id_text">
          <h2 class="card_id_text_name">Victor Juarez-Perez</h2>
          <p class="card_id_text_post">PhD, MBA</p>
          <p class="card_id_text_work">
            Scientific Adviser, <br />
            Stragen Healthcare Group
          </p>
        </div>
        <div class="card_id_avatar">
          <img
            class="card_id_avatar_img"
            src="../assets/scientific_board/victor-juarez-perez.png"
            alt="avatar"
          />
        </div>
      </div>
      <p class="card_description">
        Doctor Victor Juarez-Perez is the Scientific Advisor of the Stragen
        Healthcare Group and responsible of the preclinical development of drug
        candidates. He has an experience on translational research acquired on
        international and multidisciplinary innovative driven programs in
        diverse areas as gene therapy, immunology and microbiology. He has
        published about 15 papers in peer-reviewed journals and serves as
        reviewer for technological transfer offices in France and Latin-America.
      </p>
      <br />
      <hr />
    </div>
  </div>
</template>

<script>
import Card from "../components/ScientificBoard/Card.vue";
export default {
  components: {
    Card,
  },
};
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
  font-size: 10px;
}
.card_id_text_name {
  font-size: 16px;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.card_id_text_post {
  font-size: 10px;
  font-style: italic;
  margin-bottom: 4px;
}
.card_id_avatar_img {
  width: 120px;
}
hr {
  margin-top: 30px;
  margin-bottom: 20px;
  border-top: 1px solid #025293;
}
</style>
