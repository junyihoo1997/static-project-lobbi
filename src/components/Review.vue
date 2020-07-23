<template>
  <div class="review-layout">
    <div class="review-items container">
      <div class="review-header">
        <h1>Review</h1>
        <p>kind words from app users</p>
      </div>
      <div class="review-image-container">
        <img :src="require('@/assets/images/ReviewImage.png')" class="review-image" />
      </div>
      <div class="review-content-container">
        <div class="review-quotation-mark-container">
          <img :src="require('@/assets/images/quotation-mark-open.png')" class="review-image" />
        </div>
        <div
          class="review-content"
        >Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel.Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel.</div>
        <div class="review-quotation-mark-container">
          <img :src="require('@/assets/images/quotation-mark-close.png')" class="review-image" />
        </div>
      </div>
      <hr style="display: block;border-width: 2px;width:5%;" />
      <div class="review-user">
        <div>Stepahnie Elise</div>
        <b>App user</b>
      </div>

      <div class="review-slider-mark">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
};
</script>

<style lang="scss" scoped>
.review-layout {
  width: 100%;
  height: 800px;
  @media (max-width: 500px) {
    // height: 1000px;
  }
}
.review-items {
  height: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}

.review-header {
  text-align: center;
  height: 150px;
  h1 {
    font-weight: 700;
  }
  p {
    letter-spacing: 0.15rem;
    word-spacing: 0.6rem;
    color: #929292;
  }
}
.review-content-container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.review-image-container {
  margin: 30px;
  margin-top: 0;
}

.review-quotation-mark-container {
  min-width: 45px;
  width: 45px;
}
.review-image {
  width: 100%;
  height: auto;
}

.review-content {
  color: #929292;
  width: 500px;
  margin: 0 30px 0 30px;
}

.review-slider-mark {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10px;
  width: 50px;

  :nth-child(1) {
    background-color: rgb(107, 107, 107);
  }

  div {
    width: 10px;
    height: 10px;
    border-radius: 15px;
    background-color: rgb(230, 230, 230);
  }
}

.review-user {
  text-align: center;
  div {
    color: #929292;
  }
}
</style>