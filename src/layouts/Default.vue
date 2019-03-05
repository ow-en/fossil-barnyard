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
  font-family: halyard-display !important;
  font-weight: 400 !important;
  font-style: normal;
  font-size: 17px !important;
  color: #2c3e50;
}
/* , sans-serif, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif !important; */
@media screen and (max-width: 768px) {
  body {
    margin: 0 20px !important;
  }
}
::selection {
  color: white;
  background: rgb(255, 95, 97);
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
  font-family: brandon-grotesque, sans-serif !important;
  font-size: 18px;
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
$navbar-height: 2.1rem;
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>


