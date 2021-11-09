<template>
  <div class="dash-nav-container" :class="open ? 'tall-dash-nav' : ''">
    <v-navigation-drawer
      absolute
      temporary
      right
      v-model="open"
      class="nav-drawer"
    >
      <div class="tabs-container">
        <v-btn
          text
          v-for="(anchor, index) in anchors"
          :key="index"
          class="nav-menu"
          :class="{ active: activeSection == index }"
          @click="handleClick(index)"
        >
          <h3>{{ anchor }}</h3>
        </v-btn>
        <v-btn
          class="nav-menu"
          text
          href="https://squareup.com/appointments/book/u7lab3kdl18r47/L6X4E0YVBM4WG/services"
          target="_blank"
          ><h3>BOOK APPOINTMENT</h3></v-btn
        >
      </div>
      <v-btn
        icon
        @click.stop="handleNavClick($event)"
        @touchstart="handleNavTouch($event)"
        class="dash-nav-btn"
        ><v-icon class="close-icon" color="secondary"
          >highlight_off</v-icon
        ></v-btn
      >
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    anchors: {
      type: Array,
      default: () => [],
    },
    activeSection: {
      type: Number,
      default: null,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  methods: {
    handleClick(value) {
      this.$emit("route-click", value)
      this.$emit("nav-click")
    },
    handleNavClick(value) {
      this.$emit("nav-click")
    },
    handleNavTouch(value) {
      this.$emit("restart-touch")
    },
  },
}
</script>

<style lang="scss" scoped>
.dash-nav-container {
  display: none;
  height: 100%;
  width: 100%;
  .nav-drawer {
    background-color: var(--rainbow-yellow);
    height: 40% !important;
    width: 100% !important;
    border-bottom-left-radius: 100%;
    display: flex;
    justify-content: center;
  }
}

.tabs-container {
  height: 80%;
  width: 70%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.active {
  transition: 0.25s ease-in-out;
  position: relative;
  h3 {
    color: var(--light) !important;
  }
}

.active h3:before {
  content: "";
  background-color: var(--light);
  position: absolute;
  height: 5px;
  width: 100% !important;
  z-index: 5;
  bottom: -10px;
}

.nav-menu {
  font-size: 1rem !important;
  letter-spacing: 2px;
  color: var(--darker) !important;
  margin: 0 0rem;
  transition: 0.25s ease-in-out;
  position: relative;

  &:hover {
    color: var(--light);
  }
}

@media (max-width: 600px) {
  .dash-nav-container {
    position: absolute;
    height: 7vh;
    width: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    transition: 0.25s;
  }

  .tall-dash-nav {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .dash-nav-btn {
    display: block;
    position: absolute;
    top: 1rem;
    right: 2rem;
    z-index: 99;
  }
}

@media screen and (max-height: 400px) and (max-width: 850px) {
  .dash-nav-container {
    .nav-drawer {
      height: 90% !important;
      width: 50% !important;
    }
  }

  .dash-nav-container {
    position: absolute;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
  .dash-nav-btn {
    display: block;
    position: absolute;
    top: 1rem;
    right: 2rem;
    z-index: 99;
  }
}
</style>
