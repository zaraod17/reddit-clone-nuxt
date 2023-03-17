<template>
  <v-btn
    class="btn-pill"
    rounded="pill"
    prepend-icon="mdi-qrcode-scan"
    color="blue-darken-2"
    variant="outlined"
    >Get App</v-btn
  >
  <login-dialog />
</template>

<script setup lang="ts">
import LoginDialog from '../AppComponents/LoginDialog.vue';
</script>

<style lang="scss" scoped>
.btn-pill {
  margin-inline: 10px;
  width: 125px;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: capitalize;
}
</style>
