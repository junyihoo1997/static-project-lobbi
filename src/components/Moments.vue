<template>
  <div class="moment-layout">
    <div class="moment-items container">
      <div class="moment-section-left">
        <div class="moment-content">
          <h1>Capturing Moments</h1>
          <div class="moment-description">Keep &amp; share your precious experiences with others</div>
        </div>
        <div class="moment-button-group">
          <button class="moment-button">Learn More</button>
        </div>
      </div>
      <div class="moment-section-middle">
        <hr class="moment-hr" />
      </div>
      <div class="moment-section-right">
        <div class="moment-image-container">
          <img
            :src="require('@/assets/images/MomentImage.png')"
            alt="Bridging Relationships"
            class="moment-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Moments",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.moment-layout {
  width: 100%;
  height: 600px;
}
.moment-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
}

.moment-section-left h1 {
  color: #fe5129;
  font-size: 1.75rem;
  font-weight: 700 !important;
  order: 1;
}
.moment-section-right {
  display: flex;
  justify-content: center;
  width: 400px;
  order: 3;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}

.moment-image-container {
  width: 100%;
  height: 100%;
}

.moment-image {
  width: 100%;
  height: auto;
}

@media (max-width: 991px) {
  .moment-image-container {
    width: 50%;
  }
  .moment-layout {
    width: 100%;
    height: 500px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .moment-section-right {
    order: 1;
  }
  .moment-section-left {
    text-align: center;
    order: 2;
  }
  .moment-items {
    justify-content: center;
  }
}

.moment-content {
  margin-bottom: 15px;
}

.moment-description {
  color: #929292;
  font-size: 1.2rem;
}

.moment-button {
  font-size: 1rem;
  border-style: solid;
  border-color: #fe5129;
  border-radius: 40px;
  background-color: #fe5129;
  margin-top: 10px;
  padding: 5px 55px 5px 55px;
  outline: none;
  color: #ffffff;
}

.moment-section-middle {
  order: 2;
  width: 150px;
  margin-bottom: 100px;
  margin-left: -300px;
  .moment-hr {
    display: block;
    border-width: 3px;
    width: 100%;
  }
  @media (max-width: 1200px) {
    display: none;
  }
}
</style>