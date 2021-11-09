<template>
  <div class="about-container">
    <v-card class="about-content ma-auto">
      <div style="height: 100%" class="content">
        <div class="about-img-container d-flex justify-center align-center">
          <v-img
            v-if="activeSection === 2"
            class="about-img transition-in"
            height="80%"
            :src="photo"
          ></v-img>
          <v-img v-else class="about-img" height="80%" :src="photo"></v-img>
        </div>

        <v-card-text class="about-text">
          <v-card-title v-if="activeSection === 2" class="about-title">
            <h2
              v-for="(letter, index) in firstname"
              class="transition-in"
              :key="index"
              :style="'animation-delay: ' + (index + 4) * 125 + 'ms'"
            >
              {{ letter }}
            </h2>
          </v-card-title>
          <v-card-title v-else class="about-title">
            <h2>ALEXANDRA</h2></v-card-title
          >
          <div
            class="about-text-content"
            :style="activeSection === 2 ? 'opacity: 1' : 'opacity: 0'"
          >
            <p>
              Alexandra is an intuitive practitioner with an aim to help clients
              experience alleviation of pain symptoms, discomfort and stress.
            </p>
            <br />
            <p>
              She believes in the body's natural processes, its ability to heal
              itself and help assist others in whatever form of therapies best
              suited for their needs
            </p>
            <br />
            <p>
              Nurturing, therapeutic and attentive with a focus on specific
              needs to build a customized session for everyone
            </p>
            <br />
            <p>
              Prices reflect the idea that clients can build a maintenance
              routine to manage stress and tension contact by phone to schedule.
            </p>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import allyPhoto from "../assets/img/allyphoto.png"
export default {
  props: {
    activeSection: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    photo: allyPhoto,
    firstname: "ALEXANDRA",
  }),
  created() {
    this.firstname = this.firstname.split("")
  },
}
</script>

<style lang="scss" scoped>
.about-container {
  height: 100%;
  width: 100%;
  padding: 5%;
}
.letters {
  opacity: 1;
}

.transition-in {
  animation: name-animation 0.75s forwards;
  animation-delay: 0.5s;
  opacity: 0;
}

.content {
  display: flex;
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

.about-content {
  background-image: url("../assets/svgs/about.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1.5rem !important;
  box-shadow: 0px 20px 38px -21px rgba(0, 0, 0, 0.46) !important;
  height: 100%;
  width: 100%;
  max-width: 1000px;
  background-color: var(--rainbow-grey-blue) !important;

  .about-img-container {
    width: 50%;
    position: relative;

    .about-img {
      border-radius: 0.8rem;
      position: absolute;
      filter: blur(0.05rem);
      top: 10%;
      left: 20%;
      z-index: 4;
      width: 90%;
    }
  }

  .about-text {
    // border: 2px solid green;
    height: 100%;
    width: 50%;

    .about-title {
      position: absolute;
      top: 5%;
      right: 30%;
      color: var(--light);
      animation: name-animation 0.75s forwards;
      // animation-delay: 0.5s;
      // opacity: 0;
      z-index: 4;

      h2 {
        font-size: 11.5rem;
        font-family: var(--font-display);
        font-weight: 600;
        letter-spacing: 1rem;
        line-height: 8rem;
      }
    }

    .about-text-content {
      position: absolute;
      z-index: 5;
      top: 28%;
      left: 48%;
      width: 35%;
      padding: 5%;
      border: 2px solid var(--light);
      color: var(--light);
      transition: 0.25s;
      transition-delay: 0.5s;

      p {
        font-size: 1.4rem;
        line-height: 1.6rem;
        letter-spacing: 1px;
        font-weight: 600;
        margin-bottom: 0;
        z-index: 5;
      }
    }
  }
}

@media (max-width: 900px) {
  .about-container {
    padding: 0;
  }
  .about-title {
    top: 8vh !important;
  }
  .about-text-content {
    top: 40% !important;
    left: auto !important;
    right: 8% !important;
    width: 40% !important;
  }
  .about-img-container {
    height: 80%;
    .about-img {
      top: 20% !important;
    }
  }
}

@media (max-width: 600px) {
  .about-container {
    padding: 0;
  }
  .about-content {
    border-radius: 0 !important;
    background-image: url("../assets/svgs/about2.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .content {
    flex-direction: column;
  }

  .about-img-container {
    height: 70%;
    width: 100% !important;

    .about-img {
      border-radius: 0.8rem;
      position: absolute;
      filter: blur(0.05rem);
      top: 35% !important;
      left: auto !important;
      right: 15%;
      z-index: 4;
      width: 70% !important;
    }
  }

  .about-text {
    width: 100% !important;
  }
  .about-title {
    width: 100%;
    top: 7vh !important;
    left: -1rem;
    h2 {
      font-size: 7.5rem !important;
      font-family: var(--font-display);
      font-weight: 600;
      letter-spacing: 0.4rem !important;
      line-height: 3rem;
    }
  }
  .about-text-content {
    top: 50% !important;
    left: auto !important;
    right: 15% !important;
    width: 70% !important;
  }
}

@media screen and (max-height: 400px) and (max-width: 850px) {
  .about-container {
    padding: 0;
  }
  .about-content {
    border-radius: 0 !important;
  }

  .about-img-container {
    height: 80%;
    width: 80% !important;

    .about-img {
      border-radius: 0.8rem;
      position: absolute;
      filter: blur(0.05rem);
      top: 35% !important;
      left: auto !important;
      right: 25%;
      z-index: 4;
      width: 70% !important;
    }
  }

  .about-text {
    width: 100% !important;
  }
  .about-title {
    width: 100%;
    top: 8vh !important;
    left: 2rem;
    h2 {
      font-size: 6.5rem !important;
      font-family: var(--font-display);
      font-weight: 600;
      letter-spacing: 0.8rem !important;
      line-height: 3rem;
    }
  }
  .about-text-content {
    top: 35% !important;
    left: auto !important;
    right: 2%;
    padding: 3% !important;
    width: 70% !important;
    p {
      font-size: 1.2rem !important;
    }
  }
}
</style>
