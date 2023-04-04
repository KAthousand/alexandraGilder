<template>
  <div class="container">
    <v-card class="information-card d-flex">
      <div
        class="
          information-content
          d-flex
          flex-column
          justify-center
          align-center
        "
      >
        <div class="info" style="margin-top: 1rem">
          <v-card-title class="info-title d-flex flex-column">
            LOCATION
          </v-card-title>
          <v-divider
            style="
              border-color: var(--dark);
              width: 30%;
              border-width: 2px;
              margin: 0 auto;
              height: 100%;
              background-color: var(--dark);
            "
          ></v-divider>
          <v-card-text class="location-text">
            <p>1320 N Campbell Rd.</p>
            <p>Royal Oak, MI, 48067</p>
            <!-- <p>Inside Folio Coworking Space</p> -->
            <!-- <span class="location-detail"
              >* Metered parking in street or shared lot behind Imperial. <br />
              Please enter through front door.</span
            > -->
            <v-btn
              class="view-map-btn"
              depressed
              href="https://www.google.com/maps/place/1320+N+Campbell+Rd,+Royal+Oak,+MI+48067/@42.5017229,-83.1267433,17z/data=!3m1!4b1!4m6!3m5!1s0x8824c5807f21cc6f:0x689ba551598cd2b!8m2!3d42.5017229!4d-83.1245493!16s%2Fg%2F11g4g71hys"
              target="_blank"
              >View on map</v-btn
            >
          </v-card-text>
        </div>
        <div class="d-flex justify-center align-center">
          <a
            href="https://www.google.com/maps/place/1320+N+Campbell+Rd,+Royal+Oak,+MI+48067/@42.5017229,-83.1267433,17z/data=!3m1!4b1!4m6!3m5!1s0x8824c5807f21cc6f:0x689ba551598cd2b!8m2!3d42.5017229!4d-83.1245493!16s%2Fg%2F11g4g71hys"
            target="_blank"
            class="location-img-container"
          >
            <div class="location-img">
              <v-img class="photo" :src="mapPhoto"></v-img>
            </div>
          </a>
        </div>

        <!-- <div class="info" style="padding: 1rem 0; width: 90%">
          <v-card-title class="info-title d-flex flex-column">
            CONTACT
          </v-card-title>
          <v-divider
            style="
              border-color: var(--dark);
              width: 30%;
              border-width: 2px;
              margin: 0 auto;
              height: 100%;
              background-color: var(--dark);
            "
          ></v-divider>
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
        </div> -->
      </div>
      <a
        href="https://www.google.com/maps/place/Folio+Ferndale/@42.4615352,-83.1336939,15z/data=!4m13!1m6!3m5!1s0x8824cfeb0b0ef811:0x35ec2173d57b6290!2sFolio+Ferndale!8m2!3d42.4612694!4d-83.1336827!3m5!1s0x8824cfeb0b0ef811:0x35ec2173d57b6290!8m2!3d42.4612694!4d-83.1336827!15sCg5mb2xpbyBmZXJuZGFsZZIBD2Nvd29ya2luZ19zcGFjZQ"
        target="_blank"
        class="map-container"
      >
        <v-img class="map-photo" height="100%" :src="map"></v-img>
      </a>
    </v-card>
  </div>
</template>

<script>
import bamboo from "../assets/img/allyLocationPhoto.png"
import map from "../assets/img/allyMapLocation.png"
export default {
  data: () => ({
    map: map,
    mapPhoto: bamboo,
  }),
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  padding: 5%;
  max-width: 1440px;
}
.information-card {
  height: 100%;
  width: 100%;
  border-radius: 1.5rem !important;
  box-shadow: 0px 20px 38px -21px rgba(0, 0, 0, 0.46) !important;
  background-image: url("../assets/svgs/info.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .map-container {
    height: 100%;
    width: 50%;
    background-color: var(--rainbow-yellow);
    border-top-right-radius: 1.5rem !important;
    border-bottom-right-radius: 1.5rem !important;
    display: flex;
    justify-content: center;
    align-items: center;

    .map-photo {
      height: 100%;
      border-top-right-radius: 1.5rem !important;
      border-bottom-right-radius: 1.5rem !important;
    }
  }

  .location-img {
    height: 100%;
    width: 100%;
    max-width: 465px;
    // height: 32%;
    display: flex;
    // width: 70%;
    margin: -1rem auto 0 auto;
    border-radius: 0.5rem;

    .photo {
      border: 6px solid var(--light);
      border-radius: 0.5rem;
    }
  }

  .information-content {
    border-radius: inherit;
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    height: 100%;
    width: 50%;
    color: var(--dark);

    p {
      text-align: center;
      margin-bottom: 0.5rem;
      font-size: 1.4rem;
      line-height: 1.8rem;
      font-weight: 500;
    }

    .info {
      background-color: var(--rainbow-yellow) !important;
      width: 60%;
      padding: 1rem 0;
      margin: 2.5rem auto;

      .info-title {
        background-color: var(--rainbow-yellow);
      }

      .location-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--rainbow-yellow);
      }

      .location-detail {
        font-weight: 400;
        font-style: italic;
        text-align: center;
        padding: 1rem 0;
      }

      .view-map-btn {
        background-color: var(--dark);
        color: var(--rainbow-yellow);
        margin: 1rem auto 0 auto;
        width: 60%;
        font-size: 1.4rem;
      }
    }

    .info-link {
      text-decoration: none;
      color: var(--dark);
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
    background-image: url("../assets/svgs/prenatal.svg");
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
  color: var(--rainbow-yellow);
  transition: 0.5s;
}

.info-title {
  font-family: var(--font-display);
  font-size: 3.2rem;
  letter-spacing: 0.2rem;
  line-height: 0.8rem;
  margin-bottom: 0 !important;
}

@media (max-width: 1400px) {
  .container {
    margin-top: 6vh !important;
    padding: 0 !important;
    height: 90%;
  }
  .information-card {
    border-radius: 0px !important;
  }
}

@media (max-width: 1000px) {
  .container {
    padding: 6vh 0 0 0;
  }
  .information-card {
    border-radius: 0px !important;
    flex-direction: column;
  }
  .information-content {
    padding-top: 4rem;
    height: 100% !important;
    width: 100% !important;
  }
  .map-container {
    display: none;
    height: 0 !important;
  }

  .location-img {
    height: 38% !important;
  }

  .contact-info {
    justify-content: center;
    // flex-wrap: wrap;
    height: 100%;
    margin-top: 3rem !important;
  }

  .contact-email,
  .contact-phone,
  .contact-insta {
    height: 10rem !important;
    width: 50% !important;
    margin: 0 0 1rem 0 !important;
  }
  i {
    transform: scale(4.5);
  }
}

@media (max-width: 600px) {
  .container {
    padding: 4vh 0 0 0;
  }
}
@media screen and (max-height: 400px) and (max-width: 850px) {
  .container {
    padding: 3vh 0 0 0;
  }
  .information-card {
    border-radius: 0px !important;
  }

  .information-content {
    // padding-top: 4rem;
    height: 100% !important;
    width: 100% !important;
    display: flex;
  }
  .map-container {
    display: none !important;
  }

  .location-img {
    display: none !important;
  }

  .contact-info {
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 !important;
    height: 80%;
  }

  .contact-email,
  .contact-phone,
  .contact-insta {
    height: 10rem !important;
    width: 45% !important;
    margin: 0 !important;
    // margin: 0 0 1rem 0 !important;
  }
  i {
    transform: scale(4.5);
  }

  .info {
    width: 50%;
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
