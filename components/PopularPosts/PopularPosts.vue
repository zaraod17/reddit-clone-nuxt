<template>
  <v-sheet class="popular-posts-wrapper">
    <v-sheet class="popular-posts">
      <h6>Popular posts</h6>
      <v-card>
        <v-chip prepend-icon="mdi-fire"><h4>Hot</h4></v-chip>
        <v-chip>
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
      </v-card>
    </v-sheet>
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
.popular-posts-wrapper {
  background-color: transparent;
  justify-content: center;
  display: flex;
  .popular-posts {
    background-color: transparent;

    .v-card {
      :deep(.v-chip) {
        .v-icon,
        h4 {
          color: #0079d3;
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
}
</style>
