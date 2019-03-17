<template>
  <Layout>
    <section class="hero is-fluid">
      <div class="hero-body">
        <div class="container is-fluid text-hero">
          caulfield°
          <div class="hero-lower-text">
            .dev
          </div>
          <div class="hero-lower-text">
            a blog
          </div>
          <div class="hero-lower-text">
            about
          </div>
          <div class="hero-lower-text">
            programming
          </div>
        </div>
      </div>
    </section>
    <div>
      <div class="">
        <div class="columns is-centered">
          <div class="column is-12">
            <div class="box post-box"></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<page-query>
query Posts ($page: Int) {
  posts: allPost(perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    totalCount
    edges {
      node {
        id
        title
        slug
        excerpt
        cover
        timeToRead
        path
        date
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  components: {},
  name: "Index",
  data() {
    return {
      desc: "",
      posts: []
    };
  },
  methods: {},
  computed: {}
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.post-box {
  background: #fafafa;
}

.bg-gradient {
  background: linear-gradient(45deg, #cc1d5e, #162838);
}

.text-hero {
  font-size: 9rem;
  line-height: 2rem;
  width: 100% !important;
  font-family: scto-grotesk-a-medium, sans-serif;
  letter-spacing: -0.5vw;
  font-weight: 500 !important;
  text-transform: uppercase;
  color: #6c5b7b;
  margin-bottom: 40px;
  margin-top: 40px;
}

.hero-lower-text {
  margin-top: 120px;
  margin-left: 0px;
}

.hero {
  align-items: center !important;
}
</style>
