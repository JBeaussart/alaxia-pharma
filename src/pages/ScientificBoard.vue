<template>
  <div class="container">
    <h1>SCIENTIFIC BOARD</h1>
    <Card />
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
  font-size: 42px;
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
