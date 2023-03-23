<template>
  <v-sheet class="popular-posts">
    <h6>Popular posts</h6>
    <v-card>
      <v-sheet
        class="ml-3 items"
        style="
          flex: 3;
          display: flex;
          align-items: center;
          justify-content: space-around;
        "
      >
        <v-chip class="info-chip" prepend-icon="mdi-fire"><h4>Hot</h4></v-chip>
        <v-chip class="info-chip">
          <div>
            <v-select
              :items="countries.items"
              v-model="countries.selected"
              item-title="state"
              return-object
              hide-details
              color="info"
              variant="plain"
            >
            </v-select>
          </div>
        </v-chip>
        <v-chip
          class="text-chip d-none d-md-flex"
          prepend-icon="mdi-decagram-outline"
          variant="text"
          ><h4>New</h4>
        </v-chip>
        <v-chip
          class="text-chip d-none d-md-flex"
          prepend-icon="mdi-chart-line-variant"
          variant="text"
          ><h4>Top</h4>
        </v-chip>
        <v-btn
          id="menu-activator"
          icon="mdi-dots-horizontal"
          variant="text"
          color="grey-darken-1"
          class="d-none d-md-flex"
        >
        </v-btn>
        <v-menu activator="#menu-activator">
          <v-list>
            <v-list-item
              prepend-icon="mdi-arrow-up-thin"
              title="Rising"
              value="dndkjsnkj"
            >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-sheet>
      <v-sheet
        class="items-2"
        style="flex: 1; justify-content: end; display: flex"
      >
        <v-btn id="menu-activator-2" variant="text" color="grey-darken-1"
          ><v-icon size="x-large">mdi-view-agenda-outline</v-icon>
          <v-icon size="x-large">mdi-chevron-down</v-icon></v-btn
        >
        <v-menu activator="#menu-activator-2">
          <v-list>
            <v-list-item prepend-icon="mdi-view-agenda">Card</v-list-item>
            <v-divider></v-divider>
            <v-list-item prepend-icon="mdi-view-sequential-outline"
              >Classic</v-list-item
            >
            <v-divider></v-divider>
            <v-list-item prepend-icon="mdi-view-headline">Compact</v-list-item>
          </v-list>
        </v-menu>
      </v-sheet>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
const countries = ref({
  selected: { state: "Everywhere" },
  items: [
    { state: "Poland" },
    { state: "Argentina" },
    { state: "Australia" },
    { state: "Canada" },
    { state: "Chile" },
    { state: "Colombia" },
    { state: "United States" },
    { state: "France" },
    { state: "Germany" },
    { state: "China" },
    { state: "Italy" },
    { state: "UK" },
  ],
});
</script>

<style lang="scss" scoped>
:deep(.mdi-arrow-up-thin) {
  margin-right: 10px;
}

.popular-posts {
  background-color: transparent;

  h6 {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    font-weight: 700;
  }

  .v-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0;
    width: 640px;
    height: 61px;
    :deep(.info-chip) {
      .v-icon,
      h4 {
        color: #0079d3;
      }
      &:hover {
        background-color: #e6e6e6;
      }
    }
    :deep(.text-chip) {
      .v-icon,
      h4 {
        color: grey;
      }
      &:hover {
        background-color: #e6e6e6;
      }
    }
    :deep(.v-input__control) {
      height: 32px;
      background-color: transparent !important;

      .v-field {
        &__input {
          padding-top: 5px;
          padding-left: 10px;
          height: 32px !important;

          .v-select__selection {
            height: 32px;
          }
          .v-select__selection-text {
            color: #0079d3;
            font-weight: 600;
          }
        }

        &__overlay {
          background-color: transparent;
        }
        &__append-inner {
          padding-top: 5px;
        }

        &__field {
          height: 32px;
        }
      }
    }
  }
}

@media only screen and (max-width: 960px) {
  .popular-posts {
    width: 100%;
    justify-content: center;

    .v-card {
      width: 100%;
      height: 61px;

      .items {
        justify-content: space-around !important;
        flex: 6 !important;
      }
      .items-2 {
        flex: 4 !important;
      }
    }
  }
}
</style>
