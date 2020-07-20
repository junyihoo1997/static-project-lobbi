<template>
  <div class="moment-layout">
    <div class="moment-items container">
      <div class="moment-section-left">
        <h1>Capturing Moments</h1>
        <p>Keep &amp; share your precious experiences with others</p>
        <br />
        <div class="moment-button-group">
          <button>Learn More</button>
        </div>
      </div>
      <div class="moment-section-right">
        <img :src="require('@/assets/images/MomentImage.png')" alt="Bridging Relationships" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Moments",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.moment-layout {
  width: 100%;
  height: 70vh;
}
.moment-items{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
}
</style>