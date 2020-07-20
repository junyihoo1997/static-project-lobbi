<template>
  <div :v-for="content in contents">
    <div :v-for="data in content">
      <h1>{{data.title}}</h1>
    </div>
  </div>

  <!-- <div></div> -->
</template>

<script>
export default {
  name: "FeaturesComponent",
  props: {
    contents: Array
  },
  mounted() {
    console.log(typeof this.contents);
  }
};
</script>

<style scoped>
</style>

