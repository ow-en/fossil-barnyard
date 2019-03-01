<template>
  <Layout>
    <section class="hero is-bold is-fluid is-4">
      <div class="hero-body">
        <div class="container is-fluid">
          <img
            id="logoHero"
            src="../assets/img/devlogo2.svg"
            alt="logo"
          >
        </div>
      </div>
    </section>
    <div>
      <div class="">
        <h3 class="title has-text-dark is-4">Find a Post</h3>
        <b-field grouped>
          <b-input
            placeholder="Test Placeholder"
            v-model="search"
            type="text"
            expanded
          ></b-input>
          <p class="control">
            <button
              class="button is-primary"
              @click="searchPosts"
            >
              Search
            </button>
          </p>
        </b-field>
        <div class="columns is-centered">
          <div class="column is-12">
            <div class="box">
              <section>
                <div class="column is-12">
                  <div class="card">
                    <div
                      v-for="post in $page.posts.edges"
                      :key="post.node.id"
                    >
                      <div class="card-content">
                        <p class="title">
                          <g-link :to="post.node.path">{{post.node.title}}</g-link>
                        </p>
                        <p class="subtitle">
                          {{ new Date(post.node.date).toLocaleDateString() }} • ☕️ {{post.node.timeToRead}} min read
                        </p>
                        <p v-if="post.node.excerpt">{{post.node.excerpt}}</p>
                      </div>
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span>
                            View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                          </span>
                        </p>
                        <p class="card-footer-item">
                          <span>
                            Share on <a href="#">Facebook</a>
                          </span>
                        </p>
                      </footer>
                    </div>
                  </div>
                </div>
              </section>
            </div>
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
        tags
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  name: "Index",
  data() {
    return {
      search: "",
      desc: "",
      posts: []
    };
  },
  methods: {
    searchPosts() {
      console.log("Searching");
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
