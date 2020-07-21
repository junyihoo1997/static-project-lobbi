<template>
  <div class="subscription-layout">
    <div class="subscription-items container">
      <div class="subscription-section-left">
        <h1>Download This App Now</h1>
        <img :src="require('@/assets/images/LandingButton.png')" />
      </div>
      <div class="subscription-section-right">
        <h1>Stay With Us</h1>
        <input type="text" id="email" name="email" placeholder="Your Email Address"/><input type="submit" value="Subscribe">
        <br/>
        <small>I hereby confirm thath I understand &amp; accept your Privacy Policy and Terms &amp; Conditions of use of website.</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscription"
};
</script>

<style scoped>
.subscription-layout {
  width: 100%;
  height: 500px;
  background-color: #F2F2F2;
}
.subscription-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  height: 100%;
}
</style>