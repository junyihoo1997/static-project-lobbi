<template>
  <div class="faq-layout">
    <div class="container">
      <div class="faq-header">
        <div>
          <h1>FAQS</h1>
          <p>Have a question? Look here.</p>
        </div>
      </div>
      <div class="faq-items">
        <div class="faq-section-left">
          <div class="faq-accordion-box" v-for="data in faq" :key="data.id">
            <div
              v-bind:class="[data.open ? accordionOpen :accordionClose]"
              class="faq-accordian-title"
              @click="accordionToggle(data)"
            >
              {{data.title}}
              <div class="faq-icon-container">
                <img
                  v-if="data.open==true"
                  :src="require('@/assets/images/minus.png')"
                  class="faq-image"
                />

                <img
                  v-if="data.open==false"
                  :src="require('@/assets/images/plus.png')"
                  class="faq-image"
                />
              </div>
            </div>
            <div class="faq-accordion-content" v-show="data.open">
              <p v-text="data.description" />
            </div>
          </div>

          <div class="faq-view-more">
            <a href="#">view more &gt;</a>
          </div>
        </div>

        <div class="faq-section-right">
          <div class="faq-image-container">
            <img :src="require('@/assets/images/Vector.png')" class="faq-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq",
  data: () => {
    return {
      accordionOpen: "faq-accordian-title-open",
      accordionClose: "faq-accordian-title",
      faq: [
        {
          id: 0,
          open: true,
          title: "What is Lobbi?",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo."
        },
        {
          id: 1,
          open: false,
          title: "How do I sign up for Lobbi?",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo."
        },
        {
          id: 2,
          open: false,
          title: "What make Lobbi different from other app?",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo."
        },
        {
          id: 3,
          open: false,
          title: "What I can do with Lobbi e-wallet?",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo."
        },
        {
          id: 4,
          open: false,
          title: "How do I sign up for Lobbi?",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo."
        },
        {
          id: 5,
          open: false,
          title: "How do I sign up for Lobbi?",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo."
        }
      ]
    };
  },
  methods: {
    accordionToggle(accordionData) {
      var inputFaqId = accordionData.id;
      var allFaq = this.faq;
      for (var i = 0; i < allFaq.length; i++) {
        var currentFaqId = allFaq[i].id;
        if (currentFaqId == inputFaqId) {
          allFaq[currentFaqId].open = !allFaq[currentFaqId].open;
        } else {
          allFaq[currentFaqId].open = false;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.faq-layout {
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
}
.faq-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  text-align: center;
  h1 {
    font-weight: 700;
  }
  p {
    letter-spacing: 0.15rem;
    word-spacing: 0.6rem;
    color: #929292;
  }
}
.faq-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  @media (max-width: 1200px) {
    justify-content: center;
  }
}
.faq-image-container {
  width: 500px;
  @media (max-width: 500px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
}
.faq-image {
  width: 100%;
  height: auto;
}

.faq-section-left {
  width: 500px;
  @media (max-width: 1200px) {
    padding-bottom: 50px;
  }
}

.faq-accordion-box {
  width: 100%;
  margin-bottom: 20px;

  :not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  .faq-accordian-title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-weight: 700;
    border-style: solid;
    border-color: rgb(216, 216, 215);
    border-width: 0.1px;
    padding: 15px;
    background-color: #ffffff;
  }

  .faq-accordian-title-open {
    background-color: #ebebeb;
  }

  .faq-accordian-title {
    cursor: pointer;
  }

  .faq-accordion-content {
    background-color: #f7f7f7;
    padding: 15px;
    p {
      margin: 0;
    }
  }

  .faq-icon-container {
    width: 25px;
  }
}

.faq-section-right {
  height: 100%;
  display: flex;
  align-items: flex-end;
  @media (max-width: 1200px) {
    align-items: flex-start;
  }
}

.faq-view-more {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  a {
    color: #fe5129;
    text-decoration: none;
  }
}
</style>