<template>
  <div>
    <v-menu>
      <template #activator>
        <v-btn
          class="activator-btn"
          prepend-icon="mdi-arrow-top-right-thin-circle-outline"
          append-icon="mdi-chevron-down"
          >Popular</v-btn
        >
      </template>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { useSidebarStore } from "@/store/SidebarStore";

const selectedItem = ref<{
  title: string;
  icon: string;
}>({
  title: "",
  icon: "",
});

const store = useSidebarStore();
const { listItems: items } = store;
</script>

<style lang="scss" scoped>
i {
  transform: rotate(-45deg);
}
.v-menu {
  .activator-btn {
    :deep(i) {
      transform: rotate(-45deg);
    }
  }
}
</style>
