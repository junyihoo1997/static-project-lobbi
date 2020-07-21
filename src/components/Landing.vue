<template>
  <div class="landing-layout">
    <div class="landing-image">
      <img :src="require('@/assets/images/LandingImage.png')" />
    </div>
    <div class="container landing-items">
      <div class="landing-section-left">
        <h1>An App For Anything And Everything</h1>
        <p>The most useful app you'll ever use</p>
        <br />
        <div class="landing-button">
          <img :src="require('@/assets/images/LandingButton.png')" />
        </div>
      </div>
      <div class="landing-section-right">
        <div class="landing-mobile-big">
          <img :src="require('@/assets/images/LandingMobile_bg.png')" />
        </div>
        <div class="landing-mobile-small">
          <img :src="require('@/assets/images/LandingMobile_sm.png')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landing-layout {
  position: relative;
  width: 100%;
  height: 800px;
  background-color: #F7F7F7;
}

.landing-image {
  position: absolute;
  max-width: 100%;
  width: auto;
  height: auto;
  bottom: 0;
  right: 0;
}

.landing-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
}

.landing-button:hover {
  cursor: pointer;
}

.landing-mobile-big {
  position: absolute;
  /* left: 10px; */
}

.landing-mobile-small {
  /* position: absolute; */
}
</style>
