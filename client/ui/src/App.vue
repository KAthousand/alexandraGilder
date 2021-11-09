<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  name: "App",
  data: () => ({}),
})
</script>

<style lang="scss">
@import url("./styles/_fonts.scss");
@import url("./styles/_global.scss");
@import url("./styles/_color-palette.scss");

* {
  box-sizing: border-box;
}

.fixed {
  position: fixed;
}

@keyframes name-animation {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
    opacity: 100;
  }
}

.v-application--wrap {
  -webkit-perspective: 1000;
}
</style>
