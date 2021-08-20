<template>
  <GoogleMap
    :api-key="api"
    style="width: 100%; height: 400px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 45.73395341922623, lng: 4.876272021661882 };

    return { center };
  },
  data() {
    return {
      api: import.meta.env.VITE_GOOGLE_MAPS_API,
    };
  },
});
</script>

<style lang="scss" scoped></style>
