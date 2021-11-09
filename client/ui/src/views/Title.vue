<template>
  <div class="title-container d-flex justify-center align-center">
    <div class="title-content">
      <div class="name">
        <div class="first-name d-flex">
          <h1
            v-for="(letter, index) in firstname"
            :key="index"
            :style="'animation-delay: ' + (index + 4) * 125 + 'ms'"
          >
            {{ letter }}
          </h1>
        </div>
        <div class="last-name d-flex">
          <h1
            v-for="(letter, index) in lastname"
            :key="index"
            :style="'animation-delay: ' + (index + 14) * 125 + 'ms'"
          >
            {{ letter }}
          </h1>
        </div>
      </div>
      <div class="subtitle">
        <h2>MASSAGE &amp; BODYWORK</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  data: () => ({
    firstname: "ALEXANDRA",
    lastname: "GILDER",
    delay: 500,
    key: 0,
  }),
  created() {
    this.firstname = this.firstname.split("")
    this.lastname = this.lastname.split("")
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.title-container {
  height: 100%;
  width: 100%;

  .title-content {
    width: 80%;

    .name {
      width: 100%;
      display: flex;
      justify-content: center;
      font-family: var(--font-display);
      color: var(--light);
      font-weight: bold;
      letter-spacing: 0.8rem;
      font-size: 12rem;

      .first-name {
        margin-right: 5rem;
      }
    }
  }
}

.first-name h1,
.last-name h1 {
  animation: name-animation 0.75s forwards;
  // animation-delay: 0.75s;
  opacity: 0;
}

.subtitle {
  color: var(--light);
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: 2px;
  opacity: 0;
  animation: name-animation 0.75s forwards;
  animation-delay: 3s;
  display: flex;
  justify-content: center;
  margin-top: -1rem;
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
// /* media qs ----------------------- */
@media (max-width: 1330px) {
  .name {
    h1 {
      font-size: 12rem !important;
    }
  }
}

@media (max-width: 900px) {
  .name {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    h1 {
      line-height: 10rem;
    }
  }
  .first-name {
    margin: 0 !important;
  }
  .last-name {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
}

@media (max-width: 600px) {
  .name {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 8rem !important;
      line-height: 7rem;
    }
  }
  .first-name {
    margin: 0 !important;
  }
  .last-name {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
}

@media screen and (max-height: 400px) and (max-width: 850px) {
  .name {
    flex-direction: column;
    font-size: 3rem !important;
    line-height: 7rem;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .first-name {
    margin: 0 !important;
  }
  .last-name {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
}
</style>
