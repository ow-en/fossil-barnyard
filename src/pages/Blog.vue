<template>
  <Layout>
    <div class="content blog-content">
      <h1 class="title is-2">Recent Articles</h1>
      <small>Lorem ipsum dolor.</small>
      <div class="articles">
        <div
          v-for="post in $page.posts.edges"
          :key="post.node.id"
          class="article content"
        >
          <h2 class="title is-4">
            <g-link :to="post.node.path">
              {{ post.node.title }}
            </g-link>
          </h2>
          <small>
            {{ new Date(post.node.date).toLocaleDateString() }}
            • ☕️ {{ post.node.timeToRead }} min read
          </small>
          <p v-if="post.node.excerpt">
            {{ post.node.excerpt }}
          </p>
        </div>
      </div>
    </div>
    <BulmaPagination
      baseUrl="/blog"
      :info="$page.posts.pageInfo"
      v-if="$page.posts.pageInfo.totalPages > 1"
    />
  </Layout>
</template>

<page-query>
    query Blog ($page: Int) {
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
import BulmaPagination from "@/components/BulmaPagination";

export default {
  components: {
    BulmaPagination
  }
};
</script>

<style>
.articles {
  margin: 20px 0;
}
.article h2 {
  margin-bottom: 0px !important;
}
.article h2 a:link,
.article h2 a:visited {
  color: #6c5b7b;
}

.blog-content {
  margin-top: 40px;
}
</style>