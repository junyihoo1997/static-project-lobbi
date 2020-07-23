<template>
  <div class="navigation-bg">
    <nav class="navbar navbar-expand-lg navbar-light container">
      <a class="navbar-brand" href="#">
        <img :src="require('@/assets/images/LobbiLogo.png')" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse navigation-items" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav form-inline my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">What is Lobbi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Lobbi Web</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Faq</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
              <img
                :src="require('@/assets/images/SearchIcon.png')"
                class="navigation-search-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.navigation-bg {
  background-color: #f2f2f2;
}

.navigation-search-icon {
  width: 15px;
  margin-left: 3px;
  margin-bottom: 5px;
}

.navigation-items {
  .nav-link {
    color: #1d1d1d !important;
  }
  li {
    font-weight: 700;
    padding: 0 5px 0 5px;
  }
}
</style>
