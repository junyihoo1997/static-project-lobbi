<template>
  <div class="footer-layout">
    <div class="footer-items">
      <div
        class="footer-section-left"
      >Copyright © 2020 Newsoft IT Solution Sdn Bhd. All Rights Reserved.</div>
      <div class="footer-section-right">
        <div class="footer-content">
          <ul>
            <li>
              <a href="#feedback">Help &amp; Feedback</a>
            </li>
            <li>|</li>
            <li>
              <a href="#term-of-use">Terms of Use</a>
            </li>
            <li>|</li>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer-layout {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: #3b3b3b;
  @media (max-width: 1024px) {
    height: 80px;
  }
  @media (max-width: 600px) {
    height: 250px;
  }
}
.footer-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 90%;
  color: #929292;

  @media (max-width: 1024px) {
    text-align: center;
    flex-direction: column;
    justify-content: space-evenly;
  }
}
.footer-content {
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline;
    @media (max-width: 600px) {
      display: flex;
      justify-content: center;
    }
  }
  li:nth-child(2) {
    @media (max-width: 600px) {
      display: none;
    }
  }

  li:nth-child(4) {
    @media (max-width: 600px) {
      display: none;
    }
  }

  li a {
    color: #929292;
    padding: 14px 16px;
    text-decoration: none;
  }
  li a:hover {
    color: #ffffff;
  }
}

@media (max-width: 991px) {
}
</style>