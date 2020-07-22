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
        <div class="contact-section-right">
          <p>Drop us a message for business opportunity.</p>
          <div>
            <input class="contact-form-input" id="name" type="text" name="name" placeholder="Name" />
            <input class="contact-form-input" id="name" type="text" name="name" placeholder="Name" />
            <input class="contact-form-input" id="name" type="text" name="name" placeholder="Name" />
            <textarea class="contact-form-input" name="message" placeholder="Your message..."></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss" scoped>
.contact-layout {
  width: 100%;
  height: 1000px;
  background-color: #f2f2f2;
}

.contact-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  text-align: center;
  h1 {
    font-weight: 700;
  }
  p {
    letter-spacing: 0.125rem;
    word-spacing: 0.5rem;
    color: #929292;
  }
}
.contact-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    justify-content: center;
  }
}
.contact-section-left {
  text-align: left;
  width: 40%;
}
.contact-section-right {
  width: 400px;
}

.contact-form-input {
  background-color: white;
  border-style: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
}
</style>