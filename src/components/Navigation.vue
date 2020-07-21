<template>
  <div class="navigation-layout">
    <div class="navigation-items">
      <div class="navigation-section-left">
        <a href="#">
          <img :src="require('@/assets/images/LobbiLogo.png')" />
        </a>
      </div>
      <div class="navigation-section-right">
        <ul>
          <li>
            <a href="#whatislobbi">What is Lobbi</a>
          </li>
          <li>
            <a href="#lobbiweb">Lobbi Web</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#faq">Faq</a>
          </li>
          <li>
            <a href="#contact">
              Contact
              <img
                :src="require('@/assets/images/SearchIcon.png')"
                class="navigation-search-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.navigation-layout {
  background-color: #f2f2f2;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
}

.navigation-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 80%;
}

.navigation-section-left {
}

.navigation-section-right {
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
}

li a {
  color: #1d1d1d;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: 700;
}
.navigation-search-icon {
  width: 15px;
  margin-left: 3px;
  margin-bottom: 5px;
}
</style>
