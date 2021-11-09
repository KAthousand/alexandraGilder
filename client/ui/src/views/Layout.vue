<template>
  <div
    class="layout-container"
    id="layout"
    @wheel.prevent
    @scroll.prevent
    @touchmove.prevent
  >
    <Nav
      style="position: absolute"
      :anchors="anchors"
      :activeSection="activeSection"
      @route-click="handleRouteClick"
      @nav-click="handleNavClick"
      @cancel-touch="handleCancelTouch"
    />
    <Drawer
      :open="open"
      :anchors="anchors"
      :activeSection="activeSection"
      @route-click="handleRouteClick"
      @nav-click="handleNavClick"
      @cancel-touch="handleCancelTouch"
      @restart-touch="handleRestartTouch"
    />
    <div class="layout-content">
      <section class="fullpage" id="home" ref="home">
        <Title />
      </section>
      <section class="fullpage" id="services" ref="services">
        <Services
          :activeSection="activeSection"
          @cancel-touch="handleCancelTouch"
          @restart-touch="handleRestartTouch"
        />
      </section>
      <section class="fullpage" id="about" ref="about">
        <About :activeSection="activeSection" />
      </section>
      <section class="fullpage" id="information" ref="information">
        <Information :activeSection="activeSection" />
      </section>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue"
import About from "./About.vue"
import Information from "./Information.vue"
import Services from "./Services.vue"
import Title from "./Title.vue"
import Vue from "vue"
import Drawer from "../components/Drawer.vue"

export default Vue.extend({
  components: { Nav, Title, About, Services, Information, Drawer },
  data: () => ({
    open: false,
    inMove: false,
    activeSection: 0,
    offsets: [],
    touchStartY: 0,
    anchors: ["home", "services", "about", "information"],
  }),
  created() {
    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM) // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }) // chrome + other browsers
    window.addEventListener("touchstart", this.touchStart, { passive: false }) // mobile devices
    window.addEventListener("touchmove", this.touchMove, { passive: false }) // mobile devices
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }) // chrome + other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM) // Mozilla Firefox

    window.removeEventListener("touchstart", this.touchStart) // mobile devices
    window.removeEventListener("touchmove", this.touchMove) // mobile devices
  },
  methods: {
    handleNavClick() {
      console.log("clicked")
      this.open = !this.open
    },

    handleRouteClick(value) {
      this.scrollToSection(value, true)
    },

    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveNext()
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.movePrevious()
      } else {
        e.preventDefault()
        return false
      }
    },

    handleMouseWheelDOM: function (e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveNext()
      } else if (e.detail < 0 && !this.inMove) {
        this.movePrevious()
      }
    },

    touchStart(e) {
      e.preventDefault()
      this.touchStartY = e.touches[0].clientY
      console.log("touch")
    },

    touchMove(e) {
      if (this.inMove) return false
      e.preventDefault()

      const currentY = e.touches[0].clientY
      console.log("Touch Start", this.touchStartY)
      console.log(currentY)

      if (this.touchStartY < currentY) {
        this.movePrevious()
        console.log("MOVE PREVIOUS")
      } else {
        this.moveNext()
        console.log("MOVE NEXT")
      }

      this.touchStartY = 0
      return false
    },

    moveNext() {
      this.inMove = true
      this.activeSection += 1
      if (this.activeSection > this.anchors.length - 1) {
        this.activeSection = 0
      }
      this.scrollToSection(this.activeSection, true)
    },

    movePrevious() {
      this.inMove = true
      this.activeSection -= 1

      if (this.activeSection < 0) {
        this.activeSection = this.anchors.length - 1
      }
      this.scrollToSection(this.activeSection, true)
    },

    scrollToSection(id, force = false) {
      if (this.inMove && !force) {
        return false
      }
      this.activeSection = id
      this.inMove = true
      const layout = document.querySelector("#layout")
      const activeRef = this.anchors[id]
      const el = this.$refs[activeRef]
      const count = el.offsetTop - layout.scrollTop
      layout.scrollBy({ top: count, left: 0, behavior: "smooth" })

      setTimeout(() => {
        this.inMove = false
      }, 500)
    },

    handleCancelTouch() {
      console.log("cancel")
      window.removeEventListener("touchstart", this.touchStart)
      window.removeEventListener("touchmove", this.touchMove)
      document.body.classList.add("fixed")
    },
    handleRestartTouch() {
      console.log("restart")
      window.addEventListener("touchstart", this.touchStart)
      window.addEventListener("touchmove", this.touchMove)
      document.body.classList.remove("fixed")
    },
  },
})
</script>

<style lang="scss" scoped>
.layout-container {
  background: url("../assets/rainbow-background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.layout-container::-webkit-scrollbar {
  display: none;
}

.fullpage {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {
  .layout-container {
    border: 1px solid blue;
    // overflow-y: hidden;
  }
  .layout-content {
    border: 1px solid red;
    // overflow-y: scroll;
    // height: 100%;
    // width: 100%;
  }
}
</style>
