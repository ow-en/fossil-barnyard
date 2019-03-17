<template>
  <nav class="navbar is-fixed-top main-nav" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="/" class="navbar-item">
        <g-image
          src="../assets/img/avatar.png"
          alt="avatar"
          width="23"
          height="28"
        />
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <g-link class="navbar-item" :to="{ name: 'home' }">HOME</g-link>
        <g-link class="navbar-item" :to="{ name: 'blog' }">BLOG</g-link>
        <g-link class="navbar-item" :to="{ name: 'contact' }">CONTACT</g-link>
        <g-link class="navbar-item" :to="{ name: 'about' }">ABOUT</g-link>
      </div>
    </div>
    <social-links />
  </nav>
</template>

<script>
import SocialLinks from "@/components/SocialLinks";

export default {
  name: "LayoutNavigation",
  components: {
    SocialLinks
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const navbarBurgers = document.querySelectorAll(".navbar-burger");
    navbarBurgers.forEach(menu => {
      menu.addEventListener("click", () => {
        const target = document.getElementById(menu.dataset.target);
        menu.classList.toggle("is-active");
        target.classList.toggle("is-active");
      });
    });
  }
};
</script>

<style>
.brand {
  margin-left: 5px;
  font-family: scto-grotesk-a-medium, sans-serif;
  font-weight: 400;
  font-style: normal;
}

.navbar-item {
  font-family: scto-grotesk-a-medium, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.25rem !important;
  line-height: 2rem !important;
  color: #35477d !important;
}

@media screen and (max-width: 900px) {
  .navbar-item {
    font-weight: 500;
    font-style: normal;
    font-size: 5rem !important;
    line-height: 84px !important;
  }
}

.main-nav {
}
</style>
