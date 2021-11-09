<template>
  <div
    class="nav-container d-flex justify-end align-center"
    :style="'background-color: ' + this.changeBackgroundColor"
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
      <v-btn class="nav-menu" text><h3>BOOK APPOINTMENT</h3></v-btn>
    </div>
    <v-btn icon @click.stop="handleNavClick($event)" class="dash-nav-btn"
      ><v-icon class="open-icon" color="secondary">menu</v-icon></v-btn
    >
  </div>
</template>

<script>
import Drawer from "./Drawer.vue"
export default {
  components: { Drawer },
  props: {
    anchors: {
      type: Array,
      default: () => [],
    },
    activeSection: {
      type: Number,
      default: null,
    },
  },
  data: () => ({}),
  computed: {
    changeBackgroundColor() {
      if (this.activeSection === 1) {
        return "var(--background)"
      } else if (this.activeSection === 2) {
        return "var(--rainbow-grey-blue)"
      } else if (this.activeSection === 3) {
        return "var(--rainbow-yellow)"
      } else {
        return "transparent"
      }
    },
  },
  methods: {
    handleClick(value) {
      this.$emit("route-click", value)
    },
    handleNavClick(value) {
      this.$emit("nav-click")
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-container {
  height: 7vh;
  width: 100%;
  transition: 0.5s;
  z-index: 6;
  padding-right: 5%;

  .tabs-container {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
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
  font-size: 1.2rem !important;
  letter-spacing: 2px;
  color: var(--darker) !important;
  margin: 0 1rem;
  transition: 0.25s ease-in-out;
  position: relative;

  &:hover {
    color: var(--light);
  }
}

.dash-nav-btn {
  display: none;
}

.nav-menu h3:before {
  content: "";
  position: absolute;
  height: 5px;
  width: 0px;
  z-index: 5;
  bottom: -10px;
  transition: 0.5s ease-in-out;
}

@media (max-width: 600px) {
  .nav-container {
    height: 6vh;
  }

  .tabs-container {
    display: none !important;
  }
  .dash-nav-btn {
    display: block;
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    z-index: 99;
    border: 2px solid var(--light);
    .open-icon {
      color: var(--light) !important;
    }
  }
}

@media (orientation: landscape) {
  .nav-container {
    height: 15vh;
  }

  .tabs-container {
    display: none !important;
  }
  .dash-nav-btn {
    display: block;
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    z-index: 99;
    border: 2px solid var(--light);
    .open-icon {
      color: var(--light) !important;
    }
  }
}
</style>
