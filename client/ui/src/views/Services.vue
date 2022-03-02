<template>
  <div class="container d-flex justify-center" ref="titleSvg">
    <v-card class="services-content">
      <v-card-title
        v-if="activeSection === 1"
        class="services-title transition-in"
      >
        services
      </v-card-title>
      <v-card-title v-else class="services-title">services</v-card-title>
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
              <div class="dialog-text" style="height: 70%">
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
        title: "swedish massage",
        description:
          "Full body treatment sessions catered specifically to client needs with aromatherapy.",
        img: swedish,
        price: "$70 per 60 min session",
        price2: "$100 per 90min session",
        addon: "~add deep tissue for $20~",
        class: "swedish",
      },
      {
        title: "hot stone massage",
        description: "Massage with basalt stones, hands and aromatherapy",
        img: cryo,
        price: "$90 per 60 min session",
        price2: "$120 per 90 min session",
        addon: "",
        class: "hot-stone",
      },
      {
        title: "raindrop technique",
        description:
          "Applying a blend of 7 different essential oils to the spine and bottoms of the feet helps to relieve respiratory discomfort, enhance positive emotions and relieve stress, ease muscle tensions and provide a powerful immunity boost",
        img: aleahiaHand,
        price: "$120 per 90 min massage + oils",
        price2: "",
        addon: "",
        class: "raindrop",
      },
      {
        title: "prenatal massage",
        description:
          "Customized massage therapy to support the growing body's natural transitions through childbirth",
        img: prenatal,
        price: "$60 per 60 min session",
        price2: "$90 per 90 min session",
        addon: "",
        class: "prenatal",
      },
      {
        title: "cupping",
        description:
          "Massage + cupping helps to relieve tension by creating suction in areas of need. This deep tissue effect helps promote circulation, decrease inflammation, and relieve pain",
        img: cupping,
        price: "Add $20 to Any Massage",
        price2: "",
        addon: "",
        class: "cupping",
      },
      {
        title: "moxa",
        description:
          "Moxa is a form of heat therapy in which dried plant matter is burned near the surface of your skin with intention to promote circulation and dispel certain pathogenic influences",
        img: moxa,
        price: "Add $10 to Any Massage",
        price2: "",
        addon: "",
        class: "moxa",
      },
      {
        title: "gua sha",
        description:
          "Used as a deep tension release method in tradition Chinese healing medicine, Gua Sha, or muscle scraping, takes a crystal or metal tool and scrapes along the neck, face, and shoulders. Helpful with lymph drainage and circulation to stagnant areas of the body. Redness will occur.",
        img: guasha,
        price: "Add $20 to Any Massage",
        price2: "",
        addon: "",
        class: "gua-sha",
      },
      {
        title: "tension headache  \n session",
        description:
          "60 or 90 minute massage session geared to work specifically on pressure points in the face, head, and neck. The session focuses on upper body massage and stretching with deeper neck work than a typical session, as well as aromatherapy and scalp work.",
        img: prenatal,
        price: "Add $10 to Any Massage",
        price2: "",
        addon: "",
        class: "infrared",
      },
      // {
      //   title: "cryotherapy Massage",
      //   description:
      //     "Using this form of cold treatment with massage therapy helps boost the immune system response, decrease inflammation and swelling in areas of injury, and reduce pain",
      //   img: cryo,
      //   price: "Add $10 to Any Massage",
      //   price2: "",
      //   addon: "",
      //   class: "cryo",
      // },
      {
        title: "cbd massage",
        description:
          "Massage with hands, forearms and CBD oil. Oil placed on joints, bottoms of feet and neck help aid with inflammation and relaxation",
        img: cbd,
        price: "Add $10 to Any Massage",
        price2: "",
        addon: "",
        class: "cbd",
      },
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
  left: 42%;
  font-size: 3.2rem;
  font-weight: bold;
  letter-spacing: 2px;
  opacity: 0;
  color: var(--dark);
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
    left: 2%;
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
    left: 24%;
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
    transform: rotate(8deg);
    right: 28%;
    top: 5%;
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
    left: 2%;
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
    transform: rotate(10deg);
    position: absolute;
    // left: 20%;
    left: 28%;
    bottom: 6%;
    z-index: 2;
  }

  .gua-sha {
    height: 15rem !important;
    width: 20rem !important;
    background-image: url("../assets/svgs/hotstone.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: rotate(-10deg);
    position: absolute;
    left: 55%;
    // left: 40%;
    bottom: 2%;
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
    background-image: url("../assets/svgs/cupping.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    // transform: rotate(-40deg);
    // position: absolute;
    // right: 5%;
    // bottom: 15%;
    z-index: 2;
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

@media (max-width: 1200px) {
  .container {
    padding: 6vh 0 0 0;
  }
  .services-content {
    border-radius: 0 !important;
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
  }
}

@media (max-width: 821px) {
  .services-title {
    opacity: 1;
    margin-top: 4vh;
    transition: none !important;
  }
  .service-btn {
    opacity: 1 !important;
  }

  .dialog-text-container {
    .dialog-text {
      justify-content: center !important;
      p {
        margin-bottom: 0;
        font-size: 1.6rem !important;
        letter-spacing: 0.8;
        line-height: 2.2rem;
      }

      h6 {
        font-size: 1.4rem !important;
        font-weight: 600 !important;
        padding: 4px !important;
      }
    }
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
