<template>
  <div class="map-layout">
    <GmapMap
      :center="{lat:3.118169, lng:101.676395}"
      :zoom="7"
      style="width: 100%; height: 100%"
    >
      <!-- <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      /> -->
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "Map"
};
</script>

<style scoped>
.map-layout {
  width: 100%;
  height: 400px;
}
</style>