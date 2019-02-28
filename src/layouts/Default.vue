<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <layout-navigation></layout-navigation>
      <slot />
      <layout-footer />
    </div>
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
import LayoutNavigation from "@/components/LayoutNavigation";
import LayoutFooter from "@/components/LayoutFooter";

export default {
  components: {
    LayoutNavigation,
    LayoutFooter
  }
};
</script>

<style lang="scss">
body {
  @font-face {
    font-family: "brandon-grotesque";
    src: url("https://use.typekit.net/lep8qlf.css");
  }
  font-family: brandon-grotesque, sans-serif, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif !important;
  font-weight: 100;
  font-style: normal;
  font-size: 17px !important;
  color: #2c3e50;
}
@media screen and (max-width: 768px) {
  body {
    margin: 0 20px !important;
  }
}
::selection {
  color: white;
  background: #ff4e46;
}
h1 {
  margin-top: 20px !important;
  /* font-size: 1.95rem !important; */
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: brandon-grotesque, sans-serif;
  font-size: 18px;
  text-transform: uppercase;
}
</style>
