<template>
  <div class="layout-container" id="layout" @wheel.prevent @scroll.prevent>
    <Nav
      style="position: absolute"
      :anchors="anchors"
      :activeSection="activeSection"
      @route-click="handleRouteClick"
      @nav-click="handleNavClick"
    />
    <Drawer
      :open="open"
      :anchors="anchors"
      :activeSection="activeSection"
      @route-click="handleRouteClick"
      @nav-click="handleNavClick"
      @route-touch="handleRouteTouch"
    />
    <div class="layout-content" id="layout-cont" ref="layoutContent">
      <section class="fullpage" id="home" ref="home" style="margin-top: 0">
        <Title :active-section="activeSection" />
      </section>
      <section class="fullpage" id="services" ref="services">
        <Services :activeSection="activeSection" />
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
    window.addEventListener("touchmove", this.handleMobileScroll)
    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM) // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }) // chrome + other browsers
    // window.addEventListener("touchstart", this.touchStart, { passive: false }) // mobile devices
    // window.addEventListener("touchmove", this.touchMove, { passive: false }) // mobile devices
  },
  destroyed() {
    window.removeEventListener("touchmove", this.handleMobileScroll)
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }) // chrome + other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM) // Mozilla Firefox

    // window.removeEventListener("touchstart", this.touchStart) // mobile devices
    // window.removeEventListener("touchmove", this.touchMove) // mobile devices
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

    // touchStart(e) {
    //   // e.preventDefault()
    //   this.touchStartY = e.touches[0].clientY
    //   console.log("touch")
    // },

    // touchMove(e) {
    //   if (this.inMove) return false
    //   e.preventDefault()

    //   const currentY = e.touches[0].clientY
    //   console.log("Touch Start", this.touchStartY)
    //   console.log(currentY)

    //   if (this.touchStartY < currentY) {
    //     this.movePrevious()
    //     console.log("MOVE PREVIOUS")
    //   } else {
    //     this.moveNext()
    //     console.log("MOVE NEXT")
    //   }

    //   this.touchStartY = 0
    //   return false
    // },

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

    handleMobileScroll(value) {
      const title = this.$refs.home
      const titleBtm = title.getBoundingClientRect().bottom
      const services = this.$refs.services
      const servicesBtm = services.getBoundingClientRect().bottom
      if (titleBtm > 350) {
        this.activeSection = 0
      } else if (titleBtm < 350 && servicesBtm > 400) {
        this.activeSection = 1
      } else if (servicesBtm < 400) {
        console.log("2")
        this.activeSection = 2
      }
    },

    handleRouteTouch(value) {
      this.activeSection = value
      const layout = document.querySelector("#layout-cont")
      const activeRef = this.anchors[value]
      const el = this.$refs[activeRef]
      const elTopPos = el.getBoundingClientRect().top
      console.log(elTopPos)
      layout.scrollBy({ top: elTopPos, behavior: "smooth" })
      // const count = el.offsetTop - layout.scrollTop
      // const ref = document.getElementsByTagName("section")[value]
      // ref.scrollIntoView({ behavior: "smooth" })
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
  -webkit-overflow-scrolling: touch;
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
  .fullpage {
    height: 88vh;
    // display: block;
    margin: 10vh 0;
  }
  #information {
    height: 100vh;
  }

  .layout-container {
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  .layout-content {
    overflow-y: auto;
    height: 100%;
    width: 100%;
  }
}
</style>
