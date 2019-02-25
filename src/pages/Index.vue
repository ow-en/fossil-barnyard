<template>
  <Layout>
    <div>
      <div class="container is-fullheight hero-body">
        <h3 class="title has-text-dark is-4">Find a Post</h3>
        <b-field grouped>
          <b-input
            placeholder="Test Placeholder"
            v-model="search"
            type="text"
            expanded
          ></b-input>
          <p class="control">
            <button class="button is-primary" @click="searchPosts">
              Search
            </button>
          </p>
        </b-field>
        <div class="columns is-centered">
          <div class="column is-12">
            <div class="box">
              <section>
                <div class="columns is-multiline">
                  <div class="column is-4" v-for="post in posts" :key="post.id">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img
                            :src="
                              post.postImage ? post.postImage.thumbnail : ''
                            "
                            :alt="post.title"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">
                          <div class="media-content">
                            <p class="title is-6 has-text-danger">
                              {{ post.title }}
                            </p>
                            <strong> {{ post.subtitle }}</strong>
                          </div>
                        </div>

                        <div class="content">
                          <time :datetime="post.createdOn">{{
                            post.createdOn
                          }}</time>
                        </div>
                      </div>
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
  query Posts {
    posts: allPost {
      edges {
        node {
          id
          title
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
