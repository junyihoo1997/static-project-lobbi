<template>
  <div class="whyLobbi-layout">
    <div class="container">
      <div class="whyLobbi-header">
        <div>
          <h1>Why Lobbi</h1>
          <p>A lot of amazing &amp; cool features</p>
        </div>
      </div>
      <div class="whyLobbi-items">
        <div class="whyLobbi-section-left">
          <div class="whyLobbi-content-left">
            <div class="whyLobbi-content-container-left">
              <div class="whyLobbi-description-title">
                <b>RELIABLE MESSAGING</b>
              </div>
              <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel</p>
            </div>
            <div class="whyLobbi-description-image-container-left">
              <img
                :src="require('@/assets/images/Messaging.png')"
                class="whyLobbi-description-image"
              />
            </div>
          </div>
          <div class="whyLobbi-content-left">
            <div class="whyLobbi-content-container-left">
              <div class="whyLobbi-description-title">
                <b>MOMENTS</b>
              </div>
              <p>This is short description to explain the features of sharing moments through Lobbi app voluptate velit esse</p>
            </div>
            <div class="whyLobbi-description-image-container-left">
              <img :src="require('@/assets/images/Camera.png')" class="whyLobbi-description-image" />
            </div>
          </div>
          <div class="whyLobbi-content-left">
            <div class="whyLobbi-content-container-left">
              <div class="whyLobbi-description-title">
                <b>SECURE E-WALLET</b>
              </div>
              <p>This is short description to explain the features of e-wallet eg easy, secure or instant voluptate velit esse</p>
            </div>
            <div class="whyLobbi-description-image-container-left">
              <img :src="require('@/assets/images/Wallet.png')" class="whyLobbi-description-image" />
            </div>
          </div>
        </div>
        <div class="whyLobbi-section-middle">
          <img :src="require('@/assets/images/WhyLobbiMobile.png')" class="whyLobbi-mobile-image" />
        </div>
        <div class="whyLobbi-section-right">
          <div class="whyLobbi-content-right">
            <div class="whyLobbi-description-image-container-right">
              <img
                :src="require('@/assets/images/CommunicationImage.png')"
                class="whyLobbi-description-image"
              />
            </div>
            <div class="whyLobbi-content-container-right">
              <div class="whyLobbi-description-title">
                <b>COMMUNICATIONS</b>
              </div>
              <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel</p>
            </div>
          </div>
          <div class="whyLobbi-content-right">
            <div class="whyLobbi-description-image-container-right">
              <img
                :src="require('@/assets/images/BussinessAccountImage.png')"
                class="whyLobbi-description-image"
              />
            </div>
            <div class="whyLobbi-content-container-right">
              <div class="whyLobbi-description-title">
                <b>BUSINESS ACCOUNT</b>
              </div>
              <p>Quis authem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel</p>
            </div>
          </div>
          <div class="whyLobbi-content-right">
            <div class="whyLobbi-description-image-container-right">
              <img
                :src="require('@/assets/images/ConvenientImage.png')"
                class="whyLobbi-description-image"
              />
            </div>
            <div class="whyLobbi-content-container-right">
              <div class="whyLobbi-description-title">
                <b>CONVENIENT</b>
              </div>
              <p>Quis authem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyLobbi"
};
</script>

<style lang="scss" scoped>
.whyLobbi-layout {
  width: 100%;
  height: 900px;
}
.whyLobbi-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  text-align: center;
  h1 {
    font-weight: 700;
  }
  p {
    letter-spacing: 0.1rem;
    word-spacing: 0.5rem;
    color: #929292;
  }
}

.whyLobbi-items {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.whyLobbi-mobile-image {
  position: relative;
  width: 100%;
  height: auto;
}

.whyLobbi-description-image {
  width: 100%;
  height: auto;
}

.whyLobbi-section-left {
  order: 1;
  text-align: right;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.whyLobbi-section-middle {
  order: 2;
  width: 270px;
  margin-left: 30px;
  margin-right: 30px;
}

.whyLobbi-section-right {
  order: 3;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.whyLobbi-description-title {
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.whyLobbi-content-left {
  display: flex;
  justify-content: space-between;
}

.whyLobbi-content-container-left {
  order: 1;
  width: 290px;

  p {
    color: #929292;
  }
}
.whyLobbi-content-container-right {
  order: 2;
  width: 290px;
  p {
    color: #929292;
  }
}

.whyLobbi-description-image-container-left {
  width: 60px;
  order: 2;
}
.whyLobbi-description-image-container-right {
  width: 60px;
  order: 1;
}

.whyLobbi-content-right {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1200px) {
  .whyLobbi-items {
    flex-direction: column;
  }
  .whyLobbi-layout {
    height: 1400px;
  }

  .whyLobbi-section-middle {
    width: 150px;
    height: 350px;
    order: 1;
  }

  .whyLobbi-section-left {
    height: auto;
    order: 2;
  }

  .whyLobbi-section-right {
    order: 3;
  }

  .whyLobbi-description-image-container-left {
    width: 50px;
    order: 1;
  }

  .whyLobbi-description-image-container-right {
    width: 50px;
    order: 1;
  }

  .whyLobbi-content-container-left {
    order: 2;
  }
  .whyLobbi-section-left {
    text-align: left;
  }
}
@media (max-width: 500px) {
  .whyLobbi-section-left {
    padding: 10px;
    width: 350px;
  }
  .whyLobbi-section-right {
    padding: 10px;
    width: 350px;
  }
  .whyLobbi-content-container-right {
    width: 250px;
  }
  .whyLobbi-content-container-left {
    width: 250px;
  }
}

@media (max-width: 400px) {
  .whyLobbi-section-left {
    width: 300px;
  }
  .whyLobbi-section-right {
    width: 300px;
  }
  .whyLobbi-content-container-right {
    width: 200px;
  }
  .whyLobbi-content-container-left {
    width: 200px;
  }
}
</style>