<template>
  <div class="map-layout">
    <GmapMap :center="{lat:3.118169, lng:101.676395}" :zoom="7" style="width: 100%; height: 100%"></GmapMap>
  </div>
</template>

<script>
export default {
  name: "Map",
};
</script>

<style scoped>
.map-layout {
  width: 100%;
  height: 400px;
}
</style>