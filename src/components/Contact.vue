<template>
  <div class="contact-layout">
    <div class="container">
      <!-- header -->
      <div class="contact-header">
        <div>
          <h1>Get In Touch</h1>
          <p>It all start with a conversation. Let's talk.</p>
        </div>
      </div>

      <div class="contact-items">
        <!-- section left -->
        <div class="contact-section-left">
          <div class="contact-section-left-header">
            <h1>lobbi</h1>
            <hr style="display: block;border-width: 2px;width:100%;" />
          </div>

          <div class="contact-section-left-info" v-for="data in contactInfo" :key="data.id">
            <div class="contact-icon-container">
              <img :src="require('@/assets/images/'+ data.imageUrl)" class="contact-icon" />
            </div>
            <div class="contact-info-title">
              <b>{{data.title}}</b>
            </div>
            <div class="contact-info-separator">|</div>
            <div class="contact-info-description">{{data.description}}</div>
          </div>

          <div class="contact-section-left-social">
            <hr style="display: block;border-width: 2px;width:100%;" />
            <div>
              <b>Connect with us. Spread the word.</b>
            </div>
            <div class="contact-section-left-social-image-group">
              <div class="contact-icon-container">
                <img :src="require('@/assets/images/FacebookIcon.png')" class="contact-icon" />
              </div>

              <div class="contact-icon-container">
                <img :src="require('@/assets/images/Instagram.png')" class="contact-icon" />
              </div>
            </div>
          </div>
        </div>

        <!-- section right -->
        <div class="contact-section-right">
          <b>Drop us a message for business opportunity.</b>
          <div>
            <input class="contact-form-input" type="text" name="name" placeholder="Name" />
            <input class="contact-form-input" type="text" name="mobile" placeholder="Mobile" />
            <input class="contact-form-input" type="text" name="email" placeholder="Email" />
            <textarea class="contact-form-textarea" name="message" placeholder="Message"></textarea>
          </div>
          <div class="contact-submit">
            <input type="Submit" value="Submit &gt;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => {
    return {
      contactInfo: [
        {
          id: 0,
          imageUrl: "AddressIcon.png",
          title: "Address",
          description:
            "29, Level 10, The Boulevard Office, Linkaran Syed Putra, Mid Valley City, 59200 Kuala Lumpur"
        },
        {
          id: 1,
          imageUrl: "WorkIcon.png",
          title: "Working Hours",
          description: "9am - 6pm"
        },
        {
          id: 2,
          imageUrl: "PhoneIcon.png",
          title: "Tel",
          description: "014 - 963 9067"
        },
        {
          id: 3,
          imageUrl: "EmailIcon.png",
          title: "Email",
          description: "hello@lobbi.com.my"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.contact-layout {
  width: 100%;
  height: 750px;
  background-color: #f2f2f2;
  @media (max-width: 991px) {
    height: 1200px;
  }
   @media (max-width: 500px) {
    height: 1300px;
  }
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
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 450px;
  @media (max-width: 991px) {
    padding-bottom: 100px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
}
.contact-section-right {
  width: 450px;
  @media (max-width: 500px) {
    width: 300px;
  }
}

.contact-form-input {
  background-color: white;
  border-style: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  padding-left: 20px;
  width: 100%;
  outline: none;
}

.contact-form-textarea {
  background-color: white;
  border-style: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  padding-left: 20px;
  padding-bottom: 70px;
  outline: none;
  width: 100%;
  resize: none;
}

::placeholder {
  color: #929292;
}

.contact-submit {
  display: flex;
  justify-content: flex-end;
  input {
    outline: none;
    border-style: none;
    background-color: transparent;
    color: orange;
  }
}

.contact-icon {
  width: 100%;
  height: auto;
}

.contact-icon-container {
  width: 20px;
  max-width: 20px;
  min-width: 20px;
  margin-right: 10px;
}

.contact-section-left-info {
  display: flex;
  justify-content: flex-start;
  margin: 10px 0 10px 0;

  .contact-info-title {
    width: 130px;
  }

  .contact-info-separator {
    text-align: center;
    font-weight: 600;
    width: 30px;
  }

  .contact-info-description {
    width: 300px;
  }
}

.contact-section-left-header {
  h1 {
    font-weight: 700;
    color: #FE5129;
  }
}

.contact-section-left-social-image-group {
  margin-top: 10px;
  display: flex;
}
</style>