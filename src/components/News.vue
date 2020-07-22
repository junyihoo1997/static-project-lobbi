<template>
  <div class="news-layout">
    <div class="container">
      <div class="news-header">
        <div>
          <h1>Follow Our News</h1>
          <p>lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News"
};
</script>

<style lang="scss" scoped>
.news-layout {
  width: 100%;
  height: 1000px;
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
    letter-spacing: 0.1rem;
    word-spacing: 0.5rem;
    color: #929292;
  }
}
</style>