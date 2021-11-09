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

@media screen and (max-width: 1200px) {
  h1 {
    font-size: 2.5em;
  }
}
// v-bind: class === the tag gets the class active if the current loop pass is equal to the current section
// v-on:click === clicking on the link call the scrollToSection() function. The parameter is the loop through and therefore our sectionId.
// v-for === the link is repeated according to the number of elements in the offsets array.
// v-bind:key === to keep each loop pass unqiue, we set out section ID as the key for the directive
</style>
