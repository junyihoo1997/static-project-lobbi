<template>
  <div class="subscription-layout">
    <div class="container">
      <div class="row">
        <div class="col-md-6 subscription-section-left">
          <div>
            <h1>Download This App Now</h1>
            <div class="subscription-image-button">
              <img :src="require('@/assets/images/LandingButton.png')" />
            </div>
          </div>
        </div>
        <div class="col-md-6 subscription-section-right">
          <div>
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
              <!-- <div>I hereby confirm that I understand &amp; accept your Privacy Policy and Terms &amp; Conditions of use of website.</div> -->
              <div>
                <small>I hereby confirm that I understand &amp; accept your Privacy Policy and Terms &amp; Conditions of use of website.</small>
              </div>
            </div>
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

.subscription-section-left {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  text-align: center;
  h1 {
    font-weight: 700;
  }
}
.subscription-image-button {
  padding: 15px;
  /* margin: auto; */
}

.subscription-section-right {
    display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  h1 {
    font-weight: 700;
    text-align: center;
  }
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

.subscription-container {
}
</style>