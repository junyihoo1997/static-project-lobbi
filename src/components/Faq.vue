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
          <img :src="require('@/assets/images/Vector.png')" />
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

<style scoped>
.faq-layout {
  width: 100%;
  height: 80vh;
}
.faq-header {
  display: flex;
  justify-content: center;
  text-align: center;
}
.faq-items{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70vh;
}
</style>