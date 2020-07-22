<template>
  <div class="news-layout">
    <div class="container">
      <div class="news-header">
        <div>
          <h1>Follow Our News</h1>
          <p>lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div class="news-card-container">
        <div class="news-card" v-for="data in news" :key="data.id">
          <div class="news-card-image-container"></div>

          <div class="news-card-content-container">
            <div>
              <b>{{data.title}}</b>
            </div>

            <div>{{data.description}}</div>
            <hr />

            <div class="news-card-footer">
              <div>Feb 21, 2020</div>
              <div>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="news-button-container">
        <button v-bind:class="[isClicked ? viewAllButtonClose :viewAllButtonOpen]" @click="viewAllNews()">View All News</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data: () => {
    return {
      isClicked:false,
      viewAllButtonOpen: "news-button-open",
      viewAllButtonClose: "news-button-close",
      news: [
        {
          id: 0,
          title: "Lobbi First Launch 2020",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra..."
        },
        {
          id: 1,
          title: "Design The App Of The Future",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra..."
        },
        {
          id: 2,
          title: "We Help You Managing Your...",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra..."
        }
      ]
    };
  },
  methods: {
    viewAllNews() {
      this.isClicked = true;
      var currentNews = this.news;
      var addNews = [
        {
          id: 3,
          title: "Lobbi First Launch 2020",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra..."
        },
        {
          id: 4,
          title: "Design The App Of The Future",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra..."
        },
        {
          id: 5,
          title: "We Help You Managing Your...",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc mattis ligula pellentesque nisi tristique porta. Vestibulum eget nisi est. Vivamus pharetra..."
        }
      ];
      if (currentNews.length < 6) {
        for (var i = 0; i < addNews.length; i++) {
          this.news.push(addNews[i]);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.news-layout {
  width: 100%;
  height: 100%;
}
.news-header {
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

.news-card-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.news-card {
  width: 300px;
  height: 400px;
  margin-bottom: 30px;
  background-color: rgb(248, 247, 247);
}
.news-card-image-container {
  height: 180px;
  width: 100%;
  background-color: rgb(197, 194, 194);
}

.news-card-content-container {
  position: relative;
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  color: #3d3d3d;
  // border: solid;

  hr {
    width: 100%;
  }
  .news-card-footer {
    color: #bbb7b7;
    font-size: 0.75rem;
    display: flex;
    justify-content: space-between;
    a {
      color: #bbb7b7;
      text-decoration: none;
    }
  }
}

.news-button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  .news-button-open {
    border-style: solid;
    border-width: 1px;
    border-color: #fe5129;
    border-radius: 40px;
    background-color: transparent;
    padding: 5px 55px 5px 55px;
    color: #fe5129;
    margin-bottom: 10px;
    outline: none;
  }
  .news-button-close {
    display: none;
  }
}
</style>