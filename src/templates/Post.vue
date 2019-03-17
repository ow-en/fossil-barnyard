<template>
  <Layout>
    <div class="article content">
      <h1 class="title is-2 article-title"></h1>
      <small class="about">
        📅 {{ formatCreatedOn }} • ☕️ {{ $page.post.timeToRead }} min read
      </small>
      <bulma-tag class="bulma-tags" :tags="$page.post.tags" />
      <g-image v-if="$page.post.cover" :src="$page.post.cover" class="cover" />
      <article v-html="$page.post.content" class="article"></article>
    </div>
  </Layout>
</template>

<page-query>
    query Post ($path: String!) {
        post: post (path: $path) {
            title
            content
            timeToRead
            cover
            slug
            date
            excerpt
            tags {
              id
              title
              path
            }
        }
    }
</page-query>

<script>
import moment from "moment";
import BulmaTag from "@/components/BulmaTag";

export default {
  components: {
    BulmaTag
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: "description", content: this.$page.post.excerpt },
        // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.post.excerpt },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:site", content: "@caulfieldOwen" },
        { name: "twitter:image", content: this.getCoverImage },
        { name: "twitter:creator", content: "@caulfieldOwen" },
        // open-graph
        { property: "og:updated_time", content: this.$page.post.date },
        { property: "og:image", content: this.getCoverImage },
        { property: "og:image:secure_url", content: this.getCoverImage }
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  },
  computed: {
    formatCreatedOn() {
      const formattedDate = moment(this.$page.post.date).format(
        "MMMM DD, YYYY"
      );
      return formattedDate;
    },
    getCoverImage() {
      let coverImage = "";
      const cover = this.$page.post.cover;
      if (cover != null) {
        coverImage = `${this.getBaseUrl}${this.$page.post.cover.src}`;
      }
      return coverImage;
    },
    getBaseUrl() {
      return process.env.GRIDSOME_BASE_URL;
    }
  },
  created() {
    console.log(this.$page.post.tags);
  }
};
</script>

<style>
.bulma-tags {
  float: right;
}
.cover {
  margin-top: 10px;
}
.article {
  margin-top: 20px;
}
.article h2 {
  margin: 20px 0 10px 0 !important;
}
.article-title {
  margin-bottom: 0px !important;
}
.icon.icon-link {
  display: none;
}
a > span.fas.fa-hashtag {
  color: rgb(100, 100, 100) !important;
}
.shiki-inline {
  background: #eeeeee !important;
  padding: 2px;
  color: #ff4e46 !important;
}
.twitter-tweet {
  margin: 30px auto !important;
}
.g-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.shiki {
  margin: 20px 0px !important;
}
</style>
