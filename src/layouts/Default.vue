<template>
  <div class="layout">
    <!--<g-link to="/">{{ $static.metaData.siteName }}</g-link>-->
    <!--<g-link class="nav__link" to="/">Home</g-link>-->
    <!--<g-link class="nav__link" to="/about">About</g-link>-->

    <nav
      class="navbar is-dark"
      role="navigation"
      aria-label="dropdown navigation"
    >
      <div class="navbar-brand">
        <a
          href="/#/"
          class="navbar-item not-affect"
        >
          <!-- <img :src="logo" alt="logo" width="112" height="28"> -->
          <span>
            <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
          </span>
        </a>
        <div
          class="navbar-burger burger"
          @click="showNav = !showNav"
          :class="{ 'is-active' : showNav }"
          data-target="navbarTop"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        class="navbar-menu"
        :class="{ 'is-active' : showNav }"
      >
        <div class="navbar-start">
          <a class="navbar-item">
            <span>
              <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
              Twitter
            </span>
          </a>
          <a class="navbar-item">
            <span>
              <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
              Github
            </span>
          </a>
          <a class="navbar-item">
            <span>
              <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
              Twitter
            </span>
          </a>
          <div
            class="navbar-item has-dropdown is-hoverable"
            @click="showSubMenu"
          >
            <a class="navbar-link">
              <span>
                <font-awesome-icon :icon="['fas', 'spinner']"></font-awesome-icon>
                Test
              </span>
            </a>
            <div class="navbar-dropdown is-hidden-touch">
              <a
                href=""
                class="navbar-item"
              >
                <span>
                  <font-awesome-icon :icon="['fas', 'align-left']"></font-awesome-icon>
                  Favorites
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <a
            v-if="navLogin"
            class="navbar-item"
            @click="openLogin"
          >
            Login
          </a>
          <g-link
            to="/register"
            class="navbar-item"
            v-if="navLogin"
          >Sign Up!</g-link>
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <g-link
                  to="/add-post"
                  class="button is-outlined"
                >
                  <span>Add Post</span>
                </g-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import LoginModal from "@/components/Modals/LoginModal.vue";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  name: "Navbar",
  props: ["hideNavLogins"],
  data() {
    return {
      showNav: false,
      logo: "./static/logo.png",
      navLogin: true
    };
  },
  components: {
    LoginModal
  },
  mounted() {
    this.navLogin = this.hideNavLogins;
    if (this.hideNavLogins == undefined) {
      this.navLogin = true;
    }
  },
  methods: {
    showSubMenu() {
      let m;
      let e;
      try {
        e = event.target;
        m = event.target.nextSibling.nextSibling.classList;
      } catch (error) {
        e = event.target.parentNode;
        m = event.target.parentNode.nextSibling.nextSibling.classList;
      }

      let class1 = e.childNodes[1].classList.contains("arrow-down")
        ? "arrow-up"
        : "arrow-down";
      let class2 = class1 == "arrow-down" ? "arrow-up" : "arrow-down";

      e.childNodes[1].classList.replace(class1, class2);

      m.toggle("is-hidden-touch");
    },
    openLogin() {
      this.$modal.open({
        parent: this,
        component: LoginModal,
        hasModalCard: true,
        props: {}
      });
    },
    myMethod() {
      console.log("...");
    }
  }
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
