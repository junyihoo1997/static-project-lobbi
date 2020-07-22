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
        <div class="faq-section-left"></div>
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
  name: "Faq"
};
</script>

<style lang="scss" scoped>
.faq-layout {
  width: 100%;
  height: 1000px;
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
    letter-spacing: 0.1rem;
    word-spacing: 0.5rem;
    color: #929292;
  }
}
.faq-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.faq-image-container {
  width: 400px;
  @media (max-width: 991px) {
    width: 200px;
  }
}
.faq-image {
  width: 100%;
  height: auto;
}
</style>