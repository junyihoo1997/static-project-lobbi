<template>
  <div class="review-layout">
    <div class="review-items container">
      <h1>Review</h1>
      <p>kind words from app users</p>
      <div>
        <img :src="require('@/assets/images/ReviewImage.png')" alt />
      </div>
      <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel.Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel.</p>
      <hr style="display: block;border-width: 2px;width:5%;" />
      <p>Stepahnie Elise</p>
      <p>
        <b>App user</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review"
};
</script>

<style scoped>
.review-layout {
  width: 100%;
  height: 800px;
}
.review-items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
}

</style>