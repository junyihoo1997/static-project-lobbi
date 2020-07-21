<template>
  <div class="relationship-layout">
    <div class="relationship-items container">
      <div class="relationship-section-left">
        <div class="relationship-image-container">
          <img
            :src="require('@/assets/images/RelationshipImage.png')"
            alt="Bridging Relationships"
            class="relationship-image"
          />
        </div>
      </div>
      <div class="relationship-section-right">
        <h1>Bridging Relationships</h1>
        <div class="relationship-description">Texting, voice &amp; video call in your fingertips</div>
        <div class="relationship-button-group">
          <button class="relationship-button">Learn More</button>
          <button class="relationship-button-filled">Learn More</button>
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

<style lang="scss" scoped>
.relationship-layout {
  width: 100%;
  height: 600px;
}
.relationship-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
}
.relationship-items h1 {
  color: #fe5129;
  font-size: 1.75rem;
  font-weight: 700;
}

.relationship-description {
  color: #929292;
  font-size: 1.2rem;
}

.relationship-section-right {
  order: 2;
  width: 450px;
}

.relationship-section-left {
  display: flex;
  justify-content: center;
  width: 400px;
  order: 1;
}

.relationship-image-container {
  width: 100%;
  height: 100%;
}

@media (max-width: 991px) {
  .relationship-image-container {
    width: 50%;
  }
  .relationship-layout {
    width: 100%;
    height: 500px;
  }
  .relationship-section-left {
    order: 1;
  }
  .relationship-section-right {
    order: 2;
  }

  .relationship-items {
    justify-content: center;
  }
}

.relationship-image {
  width: 100%;
  height: auto;
}

.relationship-button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

.relationship-button {
  border-style: solid;
  border-color: #fe5129;
  border-radius: 40px;
  background-color: transparent;
  padding: 5px 55px 5px 55px;
  color: #fe5129;
  margin-bottom: 10px;
  outline: none;
}
.relationship-button-filled {
  font-size: 1rem;
  border-style: solid;
  border-color: #fe5129;
  border-radius: 40px;
  background-color: #fe5129;
  padding: 5px 55px 5px 55px;
  color: #ffffff;
  margin-bottom: 10px;
  outline: none;
}
</style>