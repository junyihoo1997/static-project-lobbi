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
        <img :src="require('@/assets/images/LandingMobile_bg.png')" />
        <img :src="require('@/assets/images/LandingMobile_sm.png')"/>
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
  width: 100%;
  height: 100vh;
}

.landing-image {
  position: absolute;
  bottom: 0;
  right: 0;
}

.landing-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

.landing-button:hover {
  cursor: pointer;
}
</style>
