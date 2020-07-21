<template>
  <div class="contact-layout">
    <div class="container">
      <div class="contact-header">
        <div>
          <h1>Get In Touch</h1>
          <p>It all start with a conversation. Let's talk.</p>
        </div>
      </div>
      <div class="contact-items">
        <div class="contact-section-left">
          <h1>lobbi</h1>
          <hr style="display: block;border-width: 2px;width:100%;" />
        </div>

        <div class="contact-section-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
.contact-layout {
  width: 100%;
  height: 1000px;
}
.contact-header {
  display: flex;
  justify-content: center;
  text-align: center;
}
.contact-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contact-section-left{
    text-align: left;
    border-style:solid ;
}
</style>