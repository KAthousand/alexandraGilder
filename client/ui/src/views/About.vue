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
              Alexandra is a Michigan licensed Massage Therapist based in the metro Detroit area. Specializing in modalities such as prenatal massage, trigger point therapy, gua sha, cupping, buccal and facial massage for TMJ, muscle lifting, etc.
            </p>
            <br />
            <p>
              Her training is vast amongst places like Irene’s Myomassology Institute and the Esalen Institute. Alexandra is a spiritually curious practitioner &amp; avid student of the body. Sessions reflect your personal and emotional needs. Inquire within to better customize your experience.
            </p>
            <br />
            <p>
              Preferred/fastest contact method is text message. 
              House calls are available to schedule via text message -only-
              <br/>
              <br/>
              Prices vary please contact for more information to schedule 
            </p>
            <br />
            <p>
              If you are attempting to book a session and don’t see what you hope for, reach out. I refer to those on my cancellation list first when things on my schedule open up. I also often post session openings on my instagram story for bookings. 

            </p>
          </div>
          <v-card-text class="contact-info">
            <div class="contact-phone">
              <a href="sms:+12486138418"> <h5>(248)613-8418</h5></a>
            </div>
            <div class="contact-email">
              <a class="info-link" href="mailto:lexandraga@gmail.com"
                >lexandraga@gmail.com</a
              >
            </div>
            <div class="contact-insta">
              <a
                href="http://www.instagram.com/chillbabes"
                target="_blank"
                rel="noreferrer"
                class="info-link"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </v-card-text>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import allyPhoto from "../assets/img/allyBioPhoto02.jpg"
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
  max-width: 1200px;
  background-color: var(--rainbow-grey-blue) !important;

  .about-img-container {
    width: 40%;
    position: relative;

    .about-img {
      max-width: 500px;
      border-radius: 0.8rem;
      position: absolute;
      top: 10%;
      left: 20%;
      z-index: 4;
      width: 90%;
      opacity: 0;
    }
  }

  .about-text {
    height: 100%;
    width: 50%;

    .about-title {
      position: absolute;
      top: 5%;
      right: 30%;
      color: var(--light);
      animation: name-animation 0.75s forwards;
      z-index: 4;

      h2 {
        font-size: 11.5rem;
        font-family: var(--font-display);
        font-weight: 600;
        letter-spacing: 1rem;
        line-height: 8rem;
        opacity: 0;
      }
    }

    .about-text-content {
      position: absolute;
      z-index: 5;
      top: 18%;
      left: 52%;
      width: 37%;
      padding: 5%;
      border: 2px solid var(--light);
      color: var(--light);
      transition: 0.25s;
      transition-delay: 0.5s;

      p {
        font-size: 1.15rem;
        line-height: 1.6rem;
        letter-spacing: 1px;
        font-weight: 600;
        margin-bottom: 0;
        z-index: 5;
      }
    }
  }
}

.contact-info {
  height: 10rem;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 2%;
  width: 80rem;
  z-index: 5;
  left: 20%;

  .contact-email,
  .contact-phone,
  .contact-insta {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin: 0 1rem;
  }

  a {
    color: var(--dark);
    text-decoration: none;
  }
  .contact-insta {
    background-image: url("../assets/svgs/deeptissue.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .contact-email {
    background-image: url("../assets/svgs/raindrop.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    a {
      padding: 0 1rem !important;
    }
  }

  .contact-phone {
    background-image: url("../assets/svgs/cryo.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}

i {
  width: 100%;
  text-align: center;
  transform: scale(3.5);
  color: var(--dark);
  transition: 0.5s;
}

@media (max-width: 1400px) {
  .about-container {
    margin-top: 20rem;
    padding: 0 !important;
    width: 100vw !important;
    max-width: 100vw !important;
    height: 105% !important;
  }
  .about-title {
    width: 75%;
    top: 8vh !important;
    right: 20% !important;
  }

  .about-content {
    padding: 0;
    margin: 0 !important;
    width: 100vw;
    max-width: 100vw;
    border-radius: 0 !important;
    background-image: url("../assets/svgs/about2.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .about-text-content {
    top: 30% !important;
    left: auto !important;
    right: 8% !important;
  }
  .about-img-container {
    height: 75%;
    width: 50% !important;
    .about-img {
      top: 20% !important;
    }
  }
  .contact-info {
    left: -1% !important;
  }

  .contact-info {
    height: 12rem !important;
    display: flex;
    flex-wrap: wrap;
    left: 2% !important;
    bottom: 2% !important;
    width: 96%;
  }
  .contact-email {
    order: 1;
    width: 100%;
  }
  .contact-insta,
  .contact-phone {
    height: 80% !important;
    width: 40% !important;
    height: 100%;
    position: absolute !important;
    // top: -60%;
    transform: rotate(-10deg);
  }
  .contact-insta {
    right: 0%;
    transform: rotate(10deg);
  }
}

@media (max-width: 910px) {
  .about-container {
    // margin-top: 10rem;

    height: 100% !important;
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
    height: 75%;
    width: 100% !important;

    .about-img {
      border-radius: 0.8rem;
      position: absolute;
      opacity: 1 !important;
      top: 35% !important;
      left: auto !important;
      right: 25%;
      z-index: 4;
      width: 50% !important;
    }
  }

  .about-text {
    width: 100% !important;
  }
  .about-title {
    transition: none !important;
    width: 100%;
    top: 7vh !important;
    left: 0rem;
    h2 {
      font-size: 7.5rem !important;
      font-family: var(--font-display);
      font-weight: 600;
      letter-spacing: 0.4rem !important;
      line-height: 3rem;
      opacity: 1 !important;
    }
  }
  .about-text-content {
    opacity: 1 !important;
    top: 50% !important;
    left: auto !important;
    right: 15% !important;
    width: 70% !important;
    font-size: 1.8rem !important;

    p {
      font-size: 1.25rem !important;
      line-height: 1.6rem !important;
      letter-spacing: 1px;
      font-weight: 600;
      margin-bottom: 0;
      z-index: 5;
    }
  }

  .contact-info {
    height: 12rem !important;
    display: flex;
    flex-wrap: wrap;
    left: 2% !important;
    // bottom: 2% !important;
    width: 96%;
  }
  .contact-email {
    order: 1;
    width: 100%;
  }
  .contact-insta,
  .contact-phone {
    height: 80% !important;
    width: 40% !important;
    height: 100%;
    position: absolute !important;
    top: 0%;
    transform: rotate(-10deg);
  }
  .contact-insta {
    right: 0%;
    transform: rotate(10deg);
  }
}

@media (max-width: 415px) {
  .about-container {
    margin: 0rem !important;
  }
  .about-text {
    padding: 0 !important;
  }
  .about-text-content {
    width: 92% !important;
    left: 0% !important;
    top: 37% !important;
    right: auto !important;
    margin: 0 4% !important;

    p {
      font-size: 1.25rem !important;
      line-height: 1.5rem !important;
      letter-spacing: 1px;
      font-weight: 600;
      margin-bottom: 0;
      z-index: 5;
      padding: 0 6px !important;
    }
  }

  .about-img-container {
    height: 50%;
  }

  .contact-info {
    height: 20% !important;
  }

  .contact-email {
    height: 90% !important;
    width: 40% !important;
  }

  .contact-phone {
    width: 40% !important;
    height: 45% !important;
    top: 5%;
    right: 10% !important;
    transform: rotate(0deg) !important;
  }
  .contact-insta {
    right: 0%;
    width: 35% !important;
    height: 45% !important;
    top: 50%;
    transform: rotate(0deg);
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
      opacity: 1 !important;
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
    transition: none !important;
    transform: translateY(-20px) !important;
    width: 100%;
    top: 8vh !important;
    left: 2rem;
    h2 {
      font-size: 6.5rem !important;
      opacity: 1 !important;
      font-family: var(--font-display);
      font-weight: 600;
      letter-spacing: 0.8rem !important;
      line-height: 3rem;
    }
  }
  .about-text-content {
    transform: translateY(-15px) !important;
    opacity: 1 !important;
    top: 35% !important;
    left: auto !important;
    right: 2%;
    padding: 3% !important;
    width: 70% !important;
    p {
      font-size: 1.2rem !important;
    }
  }

  .contact-info {
    top: 2%;
    left: 44% !important;
    width: 56%;
  }
}
</style>
