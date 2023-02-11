<template>
  <v-app-bar elevation="1">
    <template #prepend>
      <v-app-bar-nav-icon color="red" variant="plain"
        ><v-icon icon="mdi-reddit" size="x-large"></v-icon
      ></v-app-bar-nav-icon>
      <div class="text-h6">reddit</div>
    </template>
    <v-sheet width="40%">
      <v-text-field
        variant="solo"
        placeholder="Search"
        density="comfortable"
        prepend-inner-icon="mdi-magnify"
        hide-details
      ></v-text-field>
    </v-sheet>
    <template #append>
      <v-btn
        class="btn-pill"
        rounded="pill"
        prepend-icon="mdi-qrcode-scan"
        color="blue-darken-2"
        variant="outlined"
        >Get App</v-btn
      >
      <v-btn
        class="btn-pill"
        variant="elevated"
        color="blue-darken-2"
        rounded="pill"
        >Log In</v-btn
      >
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            <v-icon size="x-large">mdi-account-outline</v-icon>
            <v-icon size="x-large">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
const items = [{ title: "Tu" }, { title: "jest" }, { title: "dropdown" }];
</script>

<style lang="scss" scoped>
.v-app-bar {
    &-nav-icon {
      opacity: 1;
    }

    .v-toolbar__append {
      .btn-pill {
        margin-inline: 10px;
        width: 125px;
        font-family: Noto Sans, Arial, sans-serif;
        font-size: 14px;
        font-weight: 700;
      }
    }
    .v-sheet {
      :deep(.v-field--prepended) {
        border-radius: 500px;
        box-shadow: none;
        background-color: whitesmoke;

        &:hover,
        &:focus,
        &:focus-within {
          background-color: white;
          border: 0.1px solid blue;
        }
      }
    }
    :deep(.v-toolbar__prepend) {
      margin-inline-end: 20%;
    }
  }</style>
