<template>
  <div class="container d-flex justify-center" ref="titleSvg">
    <v-card class="services-content">
      <v-card-title
        v-if="activeSection === 1"
        class="services-title transition-in"
      >
        offerings
      </v-card-title>
      <v-card-title v-else class="services-title">offerings</v-card-title>
      <div style="height: 100%">
        <div
          class="
            service-btn-container
            d-flex
            flex-wrap
            justify-center
            align-center
          "
        >
          <div
            v-for="(massage, index) in massageInfo"
            :key="massage.title"
            class="btn-box d-flex justify-center align-center"
            style="position: static"
          >
            <v-btn
              text
              :key="massage.title"
              class="service-btn"
              :class="massage.class"
              :style="
                activeSection === 1
                  ? `opacity: 1; transition-delay: ${index * 0.15}s`
                  : ' opacity: 0'
              "
              @click="handleClick(massage)"
              >{{ massage.title }}</v-btn
            >
          </div>
        </div>
      </div>
    </v-card>
    <div v-if="this.currentMassage">
      <CommonDialog
        :open="open"
        :dialogMaxWidth="500"
        :currentMassage="currentMassage"
        :dialogTitle="currentMassage.title"
        @dialog-closed="closeModal()"
      >
        <template #title>
          <span class="dialog-title"> {{ currentMassage.title }}</span>
        </template>
        <template #content>
          <div class="dialog-content">
            <v-img height="50%" class="dialog-img" :src="currentMassage.img">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    :color="'var(--rainbow-pink)'"
                  >
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-text class="dialog-text-container">
              <v-divider></v-divider>
              <div class="dialog-text" style="height: 73%">
                <p>{{ currentMassage.description }}</p>
              </div>
              <v-divider></v-divider>
              <div class="dialog-text" style="height: 50%">
                <h6>{{ currentMassage.price }}</h6>
                <h6>{{ currentMassage.price2 }}</h6>
                <h6>{{ currentMassage.addon }}</h6>
              </div>
            </v-card-text>
            <v-card-actions class="btn-container">
              <v-btn
                class="book-btn"
                dark
                depressed
                href="https://squareup.com/appointments/book/u7lab3kdl18r47/L6X4E0YVBM4WG/services"
                target="_blank"
                >Book now</v-btn
              >
            </v-card-actions>
          </div>
        </template>
      </CommonDialog>
    </div>
  </div>
</template>

<script>
import CommonDialog from "../components/CommonDialog.vue"
import aleahiaHand from "../assets/img/aleahia-hand.png"
import cbd from "../assets/img/cbd.png"
import cryo from "../assets/img/cryo.png"
import cupping from "../assets/img/cupping.png"
import guasha from "../assets/img/guasha.png"
import moxa from "../assets/img/moxa.png"
import prenatal from "../assets/img/prenatal.png"
import swedish from "../assets/img/swedish.png"

export default {
  components: { CommonDialog },
  props: {
    activeSection: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    open: false,
    show: false,
    observer: null,
    currentMassage: "",
    massageInfo: [
      
      {
        title: "massage",
        description:
          "60 or 90 minute session catered to your physical and emotional needs with aroma therapy and hot towel treatment.",
        img: swedish,
        price: "$100 per 60 min session",
        price2: "$130 per 90min session",
        addon: "",
        class: "swedish",
      },
      
      {
        title: "reset",
        description: "A 90 minute full body massage using eucalyptus, oregano, and peppermint oils, cupping, infrared therapy, and hot towel treatment.",
        img: cryo,
        price: "$150 per session",
        price2: "",
        addon: "",
        class: "hot-stone",
      },
      {
        title: "deep rest",
        description:
          "A 90 minute full deep tissue massage with lavender CBD salve, hot towel treatment, and aromatherapy with focus on scalp, hands, and feet.",
        img: moxa,
        price: "$150 per 90 min massage",
        price2: "",
        addon: "",
        class: "raindrop",
      },
      {
        title: "prenatal massage",
        description:
          "Full body customized massage session to support the growing body's natural transitions through childbirth. This massage is typically sidelying using pillows for comfort. if discomfort occurs, we will use a yoga ball seated position for session",
        img: prenatal,
        price: "$100 per 60 min session",
        price2: "$130 per 90 min session",
        addon: "",
        class: "gua-sha",
      },
      {
        title: "release & grounding",
        description:
          "A 90 minute full body massage with lemongrass, cedar, and rosemary essential oils, hot towel treatment, cupping, and moxa with attention to abdomen and hips.",
        img: cupping,
        price: "$160 per 90 min session",
        price2: "",
        addon: "",
        class: "cupping",
      },
      {
        title: "cleanse",
        description:
          "Full body dry brushing and 60 minute full body massage with aromatherapy and hot towel treatment. Total session is 90 minutes.",
        img: aleahiaHand,
        price: "$150 per 90 min session",
        price2: "",
        addon: "",
        class: "moxa",
      },
      // {
      //   title: "tmj session",
      //   description:
      //     "60 minute massage session including buccal massage (inside of mouth), facial massage, gua sha, cupping of the neck and face, deep tissue neck and scalp massage",
      //   img: guasha,
      //   price: "$150 per 60 min session",
      //   price2: "",
      //   addon: "* This session is not full body.",
      //   class: "gua-sha",
      // },
      {
        title: "polish & tone",
        description:
          "Full body dry brushing, hot towel treatment, full body gua sha, and 60 minute massage. Total session is 90 minutes.",
        img: prenatal,
        price: "$160 per 90 min session",
        price2: "",
        addon: "",
        class: "infrared",
      },
      {
        title: "which offer is right for me?",
        description:
          "If it’s your first time, or been a long time, my suggestion is a standard 60 or 90 minute session. Standard meaning no add ons like cupping or gua sha. This invites me to assess your current physical state and make suggestions for your care moving forward.",
        img: cryo,
        price: "",
        price2: "",
        addon: "",
        class: "faq-container",
      },
      // {
      //   title: "steam",
      //   description:
      //     "Full body hot stone massage with rose water facial steam",
      //   img: cbd,
      //   price: "$150 per 90 min session",
      //   price2: "",
      //   addon: "",
      //   class: "cbd",
      // },
    ],
  }),
  methods: {
    handleClick(value) {
      this.open = true
      this.currentMassage = value
    },
    closeModal() {
      this.open = false
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  padding: 5%;
}

.transition-in {
  animation: name-animation 0.75s forwards;
  animation-delay: 1s;
  opacity: 0;
}

::v-deep {
  .v-btn__content {
    // border: 1px solid blue;
    max-width: 150px;
    display: flex;
    flex-wrap: wrap;
    white-space: pre;
  }
}
.services-title {
  background-image: url("../assets/svgs/title.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  height: 18rem;
  width: 22rem;
  position: absolute;
  top: 32%;
  left: 40%;
  font-size: 3.2rem;
  font-weight: bold;
  letter-spacing: 2px;
  opacity: 0;
  color: var(--dark);
  // border: 1px solid blue;
}

.services-content {
  background-color: var(--background);
  background-image: url("../assets/svgs/services.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1.5rem !important;
  box-shadow: 0px 20px 38px -21px rgba(0, 0, 0, 0.46) !important;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  position: relative;
}

.service-btn-container {
  height: 100%;
  width: 100%;
  position: relative;

  .service-btn {
    font-size: 1.6rem;
    // border-radius: 50%;
    text-transform: none;
    transition: 0.5s;
  }

  .swedish {
    height: 15rem !important;
    width: 20rem !important;
    background-image: url("../assets/svgs/deeptissue.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: rotate(-32deg);
    position: absolute;
    left: 16%;
    top: 22%;
    z-index: 2;
  }

  .hot-stone {
    height: 15rem !important;
    width: 20rem !important;
    background-image: url("../assets/svgs/hotstone.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    transform: rotate(-10deg);
    left: 40%;
    top: 5%;
    z-index: 2;
  }

  .raindrop {
    height: 15rem !important;
    width: 20rem !important;
    background-image: url("../assets/svgs/raindrop.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    transform: rotate(14deg);
    right: 20%;
    top: 20%;
    z-index: 2;
  }

  .prenatal {
    height: 15rem !important;
    width: 20rem !important;
    background-image: url("../assets/svgs/prenatal.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    transform: rotate(32deg);
    right: 5%;
    top: 22%;
    z-index: 2;
  }

  .cupping {
    height: 15rem !important;
    width: 20rem !important;
    background-image: url("../assets/svgs/raindrop.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: rotate(30deg);
    position: absolute;
    left: 18%;
    bottom: 20%;
    z-index: 2;
  }

  .moxa {
    height: 15rem !important;
    width: 20rem !important;
    background-image: url("../assets/svgs/prenatal.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: rotate(6deg);
    position: absolute;
    // left: 20%;
    left: 40%;
    bottom: 10%;
    z-index: 2;
  }

  .gua-sha {
    height: 15rem !important;
    width: 20rem !important;
    background-image: url("../assets/svgs/hotstone.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: rotate(-18deg);
    position: absolute;
    // left: 55%;
    // left: 0%;
    right: 20%;
    bottom: 18%;
    z-index: 2;
  }

  .infrared {
    display: none;
    height: 15rem !important;
    width: 20rem !important;
    background-image: url("../assets/svgs/prenatal.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: rotate(-10deg);
    position: absolute;
    left: 60%;
    bottom: 5%;
    z-index: 2;
  }

  .cbd {
    height: 15rem !important;
    width: 20rem !important;
    background-image: url("../assets/svgs/deeptissue.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: rotate(-24deg);
    position: absolute;
    right: 2%;
    bottom: 20%;
    z-index: 2;
  }

  .cryo {
    height: 15rem !important;
    width: 20rem !important;
    // background-image: url("../assets/svgs/cupping.svg");
    // background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    // transform: rotate(-40deg);
    // position: absolute;
    // right: 5%;
    // bottom: 15%;
    z-index: 2;
  }

    .faq-container {
    position: absolute;
    top: 52%;
    left: 41%;
    width: 20rem !important;
    // margin-top: 80px;
    font-weight: bold;
    // margin-left: 60px;
    color: var(--dark);
    font-size: 1.1rem;
    letter-spacing: .8px;
  }
}



.dialog-title {
  font-weight: bold;
  color: var(--dark);
  font-size: 2.4rem;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
}

.dialog-content {
  height: 100%;
  width: 100%;
  padding: 1rem;

  .dialog-img {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      border: 2px solid white;
      height: calc(100% - 2rem);
      width: calc(100% - 2rem);
      top: 1rem;
      left: 1rem;
    }
  }

  .dialog-text-container {
    height: 40%;
    margin-top: 1rem;
    position: relative;

    .dialog-text {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      padding: 2rem 1rem;
      height: 100%;
      color: var(--dark);
      p {
        margin-bottom: 0;
        font-size: 1.4rem;
        letter-spacing: 0.8;
        line-height: 2.2rem;
      }

      h6 {
        font-size: 1.2rem;
        font-weight: 500;
        padding: 2px;
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    .book-btn {
      background-color: var(--dark);
      font-size: 1.4rem;
      letter-spacing: 1.8px;
      font-weight: thin;
      width: 50%;
      padding: 2rem;
    }
  }
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

@media (max-width: 1400px) {
  .container {
    padding: 6vh 0 6vh 0 !important;
    max-width: 100vw !important;
    width: 100vw !important;
    padding: 0 !important;
    margin-top: 10rem;
    margin-bottom: 10rem !important;
  }
  .services-content {
    border-radius: 0 !important;
    max-width: 100vw !important;
    width: 100% !important;
    display: flex;
    flex-direction: column;
    background-image: url("../assets/svgs/services2.svg");
  }
}

@media (max-width: 1000px) {
  .services-title {
    position: relative;
    top: 0;
    left: 0;
    margin: 1.5rem 0;
    height: 10rem;
    width: 100%;
  }
  .service-btn-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    .service-btn {
      font-size: 1.4rem;
      border-radius: 50%;
      text-transform: none;
      transition: 0.5s;
    }

    .swedish,
    .hot-stone,
    .raindrop,
    .prenatal,
    .cupping,
    .moxa,
    .gua-sha,
    .infrared,
    .cbd,
    .cryo {
      height: 10rem !important;
      width: 20rem !important;
      position: relative;
      transform: rotate(-10deg);
      top: 0;
      left: 0;
    }
    

    .prenatal,
    .moxa,
    .cbd {
      margin-bottom: 5rem;
      transform: rotate(10deg);
    }

    .hot-stone {
      margin-top: 3rem;
      transform: rotate(5deg);
    }

    .raindrop {
      margin-left: 2rem;
    }
    .moxa {
      margin-right: 2rem;
    }

    .faq-container {
      border-radius: 0 !important;
      position: absolute;
      top: 0;
      left: 40%;
      margin: 1.5rem auto;
      height: 10rem;
      width: 100%;
      font-weight: bold;
      font-size: 1.3rem;
      letter-spacing: .8px;
    }
  }
}

@media (max-width: 821px) {
  .services-title {
    opacity: 1;
    margin-top: 4vh;
    transition: none !important;
  }

  .service-btn-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10rem;

  .service-btn {
    opacity: 1 !important;
  }

  .swedish,
  .hot-stone,
  .raindrop,
  .prenatal,
  .cupping,
  .moxa,
  .gua-sha,
  .infrared,
  .cbd,
  .cryo {
    margin-top: 0;
    height: 14rem !important;
    width: 26rem !important;
    position: relative;
    transform: rotate(-2deg);
    top: -6rem;
    left: 0;
  }
    

  .faq-container {
    margin: -8rem auto;
  }
}



  .dialog-text-container {
    .dialog-text {
      justify-content: center !important;
      p {
        margin-bottom: 0;
        font-size: 1.45rem !important;
        letter-spacing: 0.8;
        line-height: 1.8rem !important;
      }

      h6 {
        font-size: 1.4rem !important;
        font-weight: 600 !important;
        padding: 4px !important;
      }
    }
  }

    .faq-container {
      position: absolute;
      top: -5% !important;
      left: calc(50% - 10rem) !important;
      height: 8rem;
      border-radius: 0;
      font-size: 1.3rem;
      letter-spacing: .8px;
  }

}

@media screen and (max-height: 400px) and (max-width: 850px) {
  .services-title {
    opacity: 1;
    margin-top: 4vh;
    transition: none !important;
  }
  .service-btn {
    opacity: 1 !important;
  }

  .container {
    padding: 2vh 0 0 0;
  }
  .services-content {
    border-radius: 0 !important;
    display: flex;
    flex-direction: column;
  }
  .services-title {
    position: relative;
    top: 0;
    left: 0;
    margin: 4rem 0 0 0;
    height: 5rem;
    width: 100%;
    transition: none !important;
  }
  .service-btn-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    .service-btn {
      font-size: 1.4rem;
      border-radius: 50%;
      text-transform: none;
      transition: 0.5s;
    }

    .swedish,
    .hot-stone,
    .raindrop,
    .prenatal,
    .cupping,
    .moxa,
    .gua-sha,
    .infrared,
    .cbd,
    .cryo {
      height: 8rem !important;
      width: 15rem !important;
      position: relative;
      transform: rotate(-10deg);
      top: 0;
      left: 0;
    }

    .prenatal,
    .moxa,
    .cbd {
      transform: rotate(10deg);
    }

    .hot-stone {
      transform: rotate(5deg);
    }

    .moxa {
      margin-right: 2rem;
    }
  }
}
</style>
