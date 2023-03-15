<template>
  <v-sheet class="footer">
    <div class="groups">
      <div class="g-1">
        <span>User Agreement</span>
        <span>Privacy Policy</span>
      </div>
      <div class="g-2">
        <span>Content Policy</span>
        <span>Moderator Code Of</span>
        <span>Conduct</span>
      </div>
    </div>
    <v-divider color="white"></v-divider>
    <span style="margin-left: 2rem"
      >Reddit Inc © 2023. All rights reserved</span
    >
  </v-sheet>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
  background-color: transparent;
  width: 310px;
  margin-top: 1rem;

  .v-divider {
    margin-inline: 1rem;
    opacity: 1;
  }

  span {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-decoration: none;
    color: gray;
  }

  .groups {
    display: flex;
    justify-content: space-around;
    margin-block: 0.5rem;

    .g {
      &-1,
      &-2 {
        display: flex;
        flex-direction: column;
      }
    }

    span {
      font-family: Noto Sans, Arial, sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      text-decoration: none;
      text-transform: capitalize;
      color: gray;
    }
  }
}
</style>
