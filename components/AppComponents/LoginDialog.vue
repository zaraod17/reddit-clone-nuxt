<template>
  <v-dialog v-model="dialog" width="auto">
    <template #activator="{ props }">
      <slot name="activator" :props="props"></slot>
    
    </template>

    <v-sheet>
      <v-btn
        class="close-btn"
        @click="dialog = false"
        icon="mdi-window-close"
      ></v-btn>
      <div class="step">
        <h1>Log In</h1>
        <p>
          By continuing, you agree are setting up a Reddit account and agree to
          our <NuxtLink to="/">User Agreement</NuxtLink> and
          <NuxtLink to="/">Privacy Policy.</NuxtLink>
        </p>
        <div class="login-actions">
          <v-btn variant="outlined" rounded="pill" prepend-icon="mdi-google"
            >Kontynuj przy użyciu konta Google</v-btn
          >
          <v-btn variant="outlined" rounded="pill" prepend-icon="mdi-apple"
            >Continue with Apple</v-btn
          >
        </div>
        <div class="divider">
          <v-divider></v-divider>
          <span>OR</span>
          <v-divider></v-divider>
        </div>
        <div class="credentials">
          <v-text-field
            variant="solo"
            density="compact"
            label="Username"
            hide-details
            required
          ></v-text-field>
          <v-text-field
            variant="solo"
            label="Password"
            density="compact"
            hide-details
            required
          ></v-text-field>
        </div>
        <div class="step-tip">
          Forget your <NuxtLink to="/">username</NuxtLink> or
          <NuxtLink to="/">password</NuxtLink> ?
        </div>
        <v-btn
          class="login-btn"
          variant="flat"
          color="orange-darken-4"
          rounded="pill"
          density="default"
          >Log In</v-btn
        >
        <div class="step-tip">
          New to Reddit? <NuxtLink to="/">Sign Up</NuxtLink>
        </div>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
const dialog = ref<boolean>(false);
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

.v-dialog {
  .v-sheet {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    height: 640px;
    position: relative;

    .step {
      width: 280px;
      height: 544px;

      h1 {
        font-family: IBMPlexSans, sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        max-width: 280px;
        text-transform: none;
      }

      p {
        margin-top: 10px;
        color: #1a1a1b;
        font-family: Noto Sans, sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
      }

      .login-actions {
        margin-top: 20px;
        .v-btn {
          width: 100%;
          text-transform: none;
          text-overflow: ellipsis;
          font-size: 14px;
          letter-spacing: 0.25px;
          margin-block: 5px;
        }
      }

      .divider {
        margin-top: 20px;
        display: flex;
        align-items: center;

        span {
          margin-inline: 5px;
          color: gray;
          font-weight: 600;
        }
      }
      .credentials {
        :deep(.v-field) {
          margin-block: 5px;
          border-radius: 500px;
          box-shadow: none;
          background-color: rgb(247, 247, 247);
        }
      }

      .step-tip {
        font-family: Noto Sans, sans-serif;
        font-size: 12px;
        letter-spacing: unset;
        line-height: 16px;
        margin-bottom: 0;
        margin-top: 16px;
      }
      .login-btn {
        width: 100%;
        margin-top: 2rem;
        text-transform: none;
        letter-spacing: 0.25px;
        font-weight: 700;
      }
    }

    .close-btn {
      position: absolute;
      top: 0;
      right: 0;
      color: gray;
    }
  }
}
</style>
