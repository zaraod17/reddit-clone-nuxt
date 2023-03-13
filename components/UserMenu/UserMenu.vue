<template>
  <v-sheet class="user-card-wrapper">
    <div class="top-banner"></div>
    <div class="user-avatar"></div>
    <div class="nickname">
      <h1>user123</h1>
      <span>username · time</span>
    </div>
    <v-btn class="create-avatar" rounded="pill" append-icon="mdi-chevron-right"
      >Create your own avatar</v-btn
    >

    <v-sheet class="subtitle">
      <v-sheet class="members">
        <h3>10m</h3>
        <span>Post Karma</span>
      </v-sheet>
      <v-sheet class="online" style="margin-left: 10px">
        <h3>4k</h3>
        <span>Comments Karma</span>
      </v-sheet>
    </v-sheet>
    <div class="user-motto">
      <span>blablabls dfmlkdsmfkm femlkf lewm lkw</span>
    </div>
    <v-btn
      style="
        width: 90%;
        text-transform: capitalize;
        font-weight: 700;
        margin-bottom: 0.5rem;
      "
      rounded="pill"
      color="blue-darken-2"
      >Follow</v-btn
    >
  </v-sheet>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.user-card-wrapper {
  max-width: 400px;
  min-width: 200px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .top-banner {
    height: 70px;
    width: 100%;
    background-color: rgb(52, 146, 223);
    position: relative;
  }
  .user-avatar {
    height: 100px;
    width: 30%;
    background-color: red;
    position: absolute;
    top: 10%;
  }

  .nickname {
    text-align: center;
    margin-top: 25%;

    span {
      font-family: Noto Sans, Arial, sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      text-decoration: none;
      color: gray;
    }
  }

  .create-avatar {
    width: 90%;
    background: linear-gradient(90deg, #ec0623, #ff7717);
    color: white;
    font-weight: 700;
    text-transform: capitalize;
  }

  .subtitle {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-inline-start: 1rem;
    padding-inline-end: 2rem;

    span {
      font-family: Noto Sans, Arial, sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      text-decoration: none;
      color: gray;
    }
  }

  .user-motto {
    font-family: "Times New Roman", Times, serif;
    font-size: 11px;
  }
}
</style>
