<template>
  <div class="subscription-layout">
    <div class="subscription-items container">
      <div class="subscription-section-left">
        <h1>Download This App Now</h1>
        <div class="subscription-image-button">
          <img :src="require('@/assets/images/LandingButton.png')" />
        </div>
      </div>
      <div class="subscription-section-right">
        <h1>Stay With Us</h1>
        <div class="subscription-input-group">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your Email Address"
            class="subscription-input-text"
          />
          <input type="submit" value="Subscribe" class="subscription-input-submit" />
        </div>
        <div class="subscription-condition-container">
          <div>
            <small>I hereby confirm that I understand &amp; accept your Privacy Policy and Terms &amp; Conditions of use of website.</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscription"
};
</script>

<style lang="scss" scoped>
.subscription-layout {
  width: 100%;
  height: 500px;
  background-color: #f2f2f2;
}
.subscription-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  @media (max-width: 1200px) {
    justify-content: center;
  }
}
.subscription-section-left {
  text-align: center;
  h1 {
    font-weight: 700;
  }
}

.subscription-image-button {
  padding: 15px;
}

.subscription-section-right h1 {
  font-weight: 700;
  text-align: center;
}

.subscription-input-group {
  padding: 10px;
}
.subscription-input-text {
  background-color: transparent;
  position: relative;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: rgb(87, 86, 86);
  width: 100%;
  color: rgb(87, 86, 86);
  outline: none;
}
.subscription-input-submit {
  position: absolute;
  background-color: transparent;
  border: none;
  outline: none;
  margin-left: -90px;
}
.subscription-condition-container {
  width: 95%;
  margin: auto;
}

.subscription-condition-container div {
  margin-left: 10px;
}
</style>