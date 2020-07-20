<template>
  <div class="relationship-layout">
    <div class="relationship-items container">
      <div class="relationship-section-left">
        <img :src="require('@/assets/images/RelationshipImage.png')" alt="Bridging Relationships" />
      </div>
      <div class="relationship-section-right">
        <h1>Bridging Relationships</h1>
        <p>Texting, voice &amp; video call in your fingertips</p>
        <br />
        <div class="relationship-button-group">
          <button>Learn More</button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Relationships",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.relationship-layout {
  width: 100%;
  height: 70vh;
}
.relationship-items{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
}
</style>