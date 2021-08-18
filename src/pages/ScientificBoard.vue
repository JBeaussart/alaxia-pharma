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
  margin-top: 80px;
}
h1 {
  font-size: 42px;
  margin-bottom: 40px;
}
</style>
