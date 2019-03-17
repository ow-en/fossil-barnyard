

<template>
  <ais-instant-search :search-client="searchClient" index-name="posts">
    <div class="search-panel">
      <div class="search-panel__results">
        <div class="field">
          <label class="label is-large">
            Find a Post:
            <div class="control is-expanded has-icons-left">
              <input
                type="text"
                class="input is-large search-input"
                v-model="aisSearch"
                placeholder="Search"
              />
              <span class="icon is-small is-left search-icon">
                <i class="fas fa-search fa-xs"></i>
              </span>
              <ais-search-box
                placeholder="Search here…"
                class="searchbox"
                v-model="aisSearch"
                v-show="showInput"
              />
            </div>
            <div class="field is-grouped is-grouped-right search-buttons">
              <p class="control">
                <a class="button is-primary">
                  Show All
                </a>
              </p>
              <p class="control">
                <a class="button is-light">
                  Clear
                </a>
              </p>
            </div>
          </label>
        </div>
        <ais-hits
          v-if="!aisSearch.length < 1"
          :class-names="{
            'ais-Hits': 'hitsClass',
            'ais-Hits-list': 'hitsListClass',
            'ais-Hits-item': 'hitsItemClass'
          }"
        >
          <template slot="item" slot-scope="{ item }">
            <h1></h1>
            <div class="card">
              <div class="card-content">
                <img
                  src="assets/static/blog/gridsome.png"
                  class="image is-4by1"
                />
                <p class="title">
                  <ais-highlight :hit="item" attribute="title" />
                </p>
                <p class="subtitle">
                  <ais-highlight :hit="item" attribute="excerpt" />
                </p>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <span> View on <a href="#">Twitter</a> </span>
                  </p>
                  <p class="card-footer-item">
                    <span> Share on <a href="#">Facebook</a> </span>
                  </p>
                </footer>
              </div>
            </div>
            <div class="field is-grouped is-grouped-multiline">
              <div class="control">
                <div class="tags has-addons">
                  <a
                    class="tag is-link"
                    v-for="tag in item.tags"
                    :key="tag.objectID"
                    :style="tag.color"
                    >{{ tag }}</a
                  >
                </div>
              </div>
            </div>
          </template>
        </ais-hits>
        <div class="pagination" v-if="aisSearch.length > 5">
          <ais-pagination />
        </div>
        <ais-hits-per-page
          v-if="aisSearch.length > 10"
          :items="[
            { label: '8 hits per page', value: 8, default: true },
            { label: '16 hits per page', value: 16 }
          ]"
        >
          <ul slot-scope="{ items, refine }">
            <li v-for="item in items" :key="item.value">
              <a
                :href="item.path"
                :style="{ fontWeight: item.isRefined ? 'bold' : '' }"
                @click.prevent="refine(item.value)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </ais-hits-per-page>
      </div>
    </div>
  </ais-instant-search>
</template>

<script>
import BulmaTag from "@/components/BulmaTag.vue";
import algoliasearch from "algoliasearch";
import "instantsearch.css/themes/algolia-min.css";

export default {
  components: {
    BulmaTag
  },
  data() {
    return {
      searchClient: algoliasearch(
        "GY5HDWBC7W",
        "8f01c1c458c40ca5fc5bee0bc818ab67"
      ),
      aisSearch: "",
      showInput: false
    };
  }
};
</script>

<style>
.search-panel {
  font-family: scto-grotesk-a-regular, sans-serif;
  font-weight: 400;
  font-style: normal;
}

.header a {
  color: #fff;
  text-decoration: none;
}

.header-title {
  font-size: 1.2rem;
  font-weight: normal;
}

.header-title::after {
  content: " ▸ ";
  padding: 0 0.5rem;
}

.header-subtitle {
  font-size: 1.2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.search-panel {
  display: flex;
}

.search-panel__filters {
  flex: 1;
  margin-right: 1em;
}

.search-panel__results {
  flex: 3;
}

.searchbox {
  margin-bottom: 1rem;
}

.pagination {
  margin: 2rem auto;
  text-align: center;
}

.hitsClass {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.hitsListClass {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hitsItemClass {
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
}

.search-buttons {
  margin-top: 10px;
}

.search-input {
  margin-top: 10px;
}

.search-icon {
  margin-top: 10px;
}

.ais-Highlight mark {
  color: #35477d;
  background: #f5cece;
}
</style>

