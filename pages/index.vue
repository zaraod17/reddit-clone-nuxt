<template>
  <v-app id="inspire">
    <app-bar />
    <v-navigation-drawer class="d-lg-flex">
      <side-bar />
    </v-navigation-drawer>
    <v-main>
      <trending-today />
      <v-sheet class="content-wrapper">
        <v-sheet class="content">
          <v-sheet class="post-wrapper">
            <popular-posts />
            <post-card />
          </v-sheet>

          <v-sheet class="tags-wrapper d-none d-md-block">
            <popular-tags />
            <side-footer />
          </v-sheet>
        </v-sheet>
      </v-sheet>
      <v-btn
        v-if="showButton"
        class="scroll-top-btn"
        rounded="pill"
        color="info"
        @click="scrollToTop"
        >Back to Top</v-btn
      >
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import SideFooter from "../components/AppComponents/SideFooter.vue";
// const drawer = ref<boolean | null>(null);
useHead({
  title: "Reddit",
});

const showButton = ref<boolean>(false);

const handleScroll = () => {
  if (process.client) {
    showButton.value = window.pageYOffset > 100;
  }
};

const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>

<style scoped lang="scss">
.v-main {
  background-color: #dae0e6;

  .scroll-top-btn {
    position: fixed;
    bottom: 20px;
    right: 70px;
    box-shadow: none;
    text-transform: none;
    font-weight: bold;
  }

  .content-wrapper {
    padding: 0;
    margin-top: 20px;
    display: flex;
    background-color: transparent;
    justify-content: center;

    .content {
      display: inherit;
      background-color: inherit;
      width: 1000px;
      justify-content: space-around;
    }

    .tags-wrapper {
      margin-top: 1.75rem;
      background-color: transparent;
    }

    .post-wrapper {
      background-color: transparent;
      display: flex;
      flex-direction: column;
    }
  }
}

@media only screen and (max-width: 960px) {

  :deep(.content) {
    width: 100% !important;
  }
  .post-wrapper {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

}
</style>
