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
@font-face {
  font-family: "scto-grotesk-a-regular";
  src: url("../assets/fonts/Scto Grotesk A Regular.eot");
  src: url("../assets/fonts/Scto Grotesk A Regular.woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "scto-grotesk-a-medium";
  src: url("../assets/fonts/Scto Grotesk A Medium.eot");
  src: url("../assets/fonts/Scto Grotesk A Medium.woff");
  font-weight: 500;
  font-style: normal;
}

html {
}

body {
  font-family: scto-grotesk-a-regular, sans-serif !important;
  font-weight: 400 !important;
  font-style: normal;
  font-size: 18px !important;
  line-height: 25px !important;
  color: darkslategray !important;
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
  color: #35477d;
  background: #f5cece;
}
h1 {
  margin-top: 20px !important;
  /* font-size: 1.95rem !important; */
}
h1,
h2,
h3,
h5,
h6 {
  font-family: scto-grotesk-a-medium, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  color: #c06c84 !important;
}

h1 {
  font-size: 42px !important;
  line-height: 36px !important;
}

h4 {
  font-size: 30px !important;
  font-family: scto-grotesk-a-medium, sans-serif;
  font-weight: 600;
  font-style: italic;
  line-height: 34px !important;
  text-transform: none !important;
  color: #c06c84 !important;
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #6c5b7b;
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

// tags
$tag-background-color: $turquoise;
$tag-color: $white;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>


