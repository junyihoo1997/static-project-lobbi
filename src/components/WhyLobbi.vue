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
          <div>
            <h1>RELIABLE MESSAGING</h1>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel</p>
          </div>
          <div>
            <h1>MOMENTS</h1>
            <p>This is short description to explain the features of sharing moments through Lobbi app voluptate velit esse</p>
          </div>
          <div>
            <h1>SECURE E-WALLET</h1>
            <p>This is short description to explain the features of e-wallet eg easy, secure or instant voluptate velit esse</p>
          </div>
        </div>
        <div class="whyLobbi-section-middle">
          <img :src="require('@/assets/images/WhyLobbiMobile.png')" />
        </div>
        <div class="whyLobbi-section-right">
          <div>
            <h1>COMMUNICATIONS</h1>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel</p>
          </div>
          <div>
            <h1>BUSINESS ACCOUNT</h1>
            <p>Quis authem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel</p>
          </div>
          <div>
            <h1>CONVENIENT</h1>
            <p>Quis authem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <FeaturesMessage :contents="contents" /> -->
  </div>
</template>

<script>
// import FeaturesMessage from "./FeaturesMessage";
export default {
  name: "WhyLobbi",
  data() {
    return {
      contents: [
        {
          title: "RELIABLE MESSAGING",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel",
          position: "left"
        },
        {
          title: "MOMENTS",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel",
          position: "left"
        },
        {
          title: "SECURE E-WALLET",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel",
          position: "left"
        }
      ]
    };
  },
  props: {
    msg: String
  },
  components: {
    // FeaturesMessage
  },
  mounted(){
    console.log("dsadsa")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.whyLobbi-layout {
  width: 100%;
  height: 80vh;
}
.whyLobbi-header {
  display: flex;
  justify-content: center;
  text-align: center;
}
.whyLobbi-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>