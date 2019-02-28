<template>
  <div class="navbar-end is-hidden-mobile is-hidden-tablet-only">
    <a
      v-for="social in accounts"
      href="social.href"
      :key="social.name"
      class="navbar-item"
      :aria-label="social.name"
    >
      <i
        aria-hidden="true"
        :class="'fab fa-' + social.name"
        :style="{'color': social.color}"
      ></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          name: "twitter",
          href: "http://twitter.com/caulfieldowen",
          color: "#1da1f2"
        },
        { name: "github", href: "https://github.com/ow-en/", color: "#0e1111" },
        {
          name: "reddit",
          href: "https://www.reddit.com/u/broadsafe",
          color: "#ff4500"
        },
        {
          name: "linkedin",
          href: "https://www.linkedin.com/in/owen-caulfield-832677166/",
          color: "#0077b5"
        },
        {
          name: "medium-m",
          href: "https://www.medium.com/caulfieldOwen",
          color: "#00ab6c"
        },
        {
          name: "dev",
          href: "#",
          color: "#0e1111"
        }
      ]
    };
  },
  computed: {
    shuffle() {
      return this.accounts.sort(() => 0.5 - Math.random());
    }
  }
};
</script>
