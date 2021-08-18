<template>
  <!-- BANNER OF THE ALX PAGE -->
  <AlxBanner />
  <br />
  <br />
  <!-- OVERVIEW PART -->
  <Overview />
  <br />
  <br />
  <div class="container">
    <hr />
  </div>
  <br />
  <br />

  <!-- EFFICACY PART -->
  <Efficacy />
  <br />
  <br />
  <div class="container">
    <hr />
  </div>
  <br />
  <br />

  <!-- FURTHER READING PART -->
  <FurtherReading />
  <br />
  <br />
  <br />
  <br />
</template>

<script>
import Overview from "../components/alx_components/Overview.vue";
import Efficacy from "../components/alx_components/Efficacy.vue";
import FurtherReading from "../components/alx_components/Further_reading.vue";
import AlxBanner from "../components/alx_components/AlxBanner.vue";
export default {
  components: {
    Overview,
    Efficacy,
    FurtherReading,
    AlxBanner,
  },
};
</script>

<style lang="scss" scoped>
hr {
  border-top: 2px solid #025293;
}
</style>
