<template>
  <div class="landing-layout">
    <div class="landing-image-container">
      <img :src="require('@/assets/images/LandingImage.png')" class="landing-image" />
    </div>
    <div class="container landing-items">
      <div class="landing-section-left">
        <h1>An App For Anything And Everything</h1>
        <p>The most useful app you'll ever use</p>
        <br />
        <div class="landing-button-container">
          <div class="landing-button">
            <img :src="require('@/assets/images/LandingButton.png')" class="landing-image" />
          </div>
        </div>
      </div>
      <div class="landing-section-right">
        <div class="landing-mobile-container">
          <div class="landing-mobile-big">
            <img :src="require('@/assets/images/LandingMobile_bg.png')" />
          </div>
          <div class="landing-mobile-small">
            <img :src="require('@/assets/images/LandingMobile_sm.png')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.landing-layout {
  position: relative;
  width: 100%;
  height: 600px;
  background-color: #f7f7f7;
  overflow: hidden;
}

.landing-image-container {
  position: absolute;
  max-width: 100%;
  width: 50%;
  height: auto;
  bottom: 0;
  right: 0;
  z-index: 1;
}

.landing-image {
  width: 100%;
  height: auto;
}

.landing-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
}

.landing-section-left {
  order: 1;
  width: 400px;
  z-index: 1;
}

.landing-section-left h1 {
  font-size: 2.1rem;
  font-weight: 700;
}
.landing-section-left p {
  color: #929292;
  font-size: 1rem;
}

.landing-section-right {
  order: 2;
  width: 400px;
}

.landing-button-container {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  @media (max-width: 991px) {
    justify-content: center;
  }
}

.landing-button {
  width: 280px;
  :hover {
    cursor: pointer;
  }
}

.landing-mobile-big {
  position: absolute;
  top: 40px;
  z-index: 2;
}

.landing-mobile-small {
  position: relative;
  left: 200px;
  z-index: 1;
}

.landing-mobile-container {
  width: 250px;
  height: auto;
  @media (max-width: 991px) {
    display: none;
  }
}

.landing-mobile-image {
  width: 100%;
  height: auto;
}

@media (max-width: 991px) {
  .landing-items {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .landing-section-right {
    display: none;
    order: 1;
  }
  .landing-section-left {
    order: 2;
  }
}
</style>
