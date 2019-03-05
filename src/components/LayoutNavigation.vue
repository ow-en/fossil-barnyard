<template>
  <nav
    class="navbar is-fixed-top is-dark main-nav"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        href="/"
        class="navbar-item"
      >
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
    <div
      id="navbarBasicExample"
      class="navbar-menu"
    >
      <div class="navbar-start">
        <g-link
          class="navbar-item"
          :to="{ name: 'home' }"
        >HOME</g-link>
        <g-link
          class="navbar-item"
          :to="{ name: 'blog' }"
        >BLOG</g-link>
        <g-link
          class="navbar-item"
          :to="{ name: 'contact' }"
        >CONTACT</g-link>
        <g-link
          class="navbar-item"
          :to="{ name: 'about' }"
        >ABOUT</g-link>
        <g-link
          class="navbar-item"
          :to="{ name: 'work' }"
        >WORK</g-link>
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
@font-face {
  font-family: "brandon-grotesque";
  src: url("https://use.typekit.net/lep8qlf.css");
}

.brand {
  margin-left: 5px;
  font-family: brandon-grotesque, sans-serif;
  font-weight: 700;
}

.navbar-item {
  font-family: brandon-grotesque, sans-serif !important;
  font-weight: 600;
  font-style: normal;
  font-size: 14px;
}

.main-nav {
  height: 30px;
}
</style>
