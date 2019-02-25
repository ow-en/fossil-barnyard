<template>
  <nav class="navbar" aria-label="main navigation">
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
        <g-link class="navbar-item is-uppercase" :to="{ name: 'home' }"
          >Home</g-link
        >
        <g-link class="navbar-item is-uppercase" :to="{ name: 'blog' }"
          >Blog</g-link
        >
        <g-link class="navbar-item is-uppercase" :to="{ name: 'contact' }"
          >Contact</g-link
        >
        <g-link class="navbar-item is-uppercase" :to="{ name: 'about' }"
          >About</g-link
        >
        <g-link class="navbar-item is-uppercase" :to="{ name: 'work' }"
          >Work</g-link
        >
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
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
}

.navbar-item {
  font-family: "Oswald", sans-serif;
}
</style>
