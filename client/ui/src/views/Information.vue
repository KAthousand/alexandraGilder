<template>
  <div class="container">
    <v-card class="information-card d-flex">
      <div class="information-content">
        <div class="info" style="margin-top: 1rem">
          <v-card-title class="info-title d-flex flex-column">
            LOCATION
          </v-card-title>
          <v-divider
            style="
              border-color: var(--dark);
              width: 70%;
              border-width: 2px;
              margin: 0 auto;
              height: 100%;
              background-color: var(--dark);
            "
          ></v-divider>
          <v-card-text class="location-text">
            <p>220 South Main St.</p>
            <p>Royal Oak, MI, 48067</p>
            <p>Inside Bamboo Royal Oak</p>
            <v-btn class="view-map-btn" depressed>View on map</v-btn>
          </v-card-text>
        </div>

        <div class="location-img">
          <v-img class="photo" :src="mapPhoto"></v-img>
        </div>
        <div class="info" style="padding: 0 4rem">
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
            <div class="contact-phone"><h5>(248)613-8418</h5></div>
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
        </div>
      </div>
      <div class="map-container">
        <v-img class="map-photo" height="100%;" :src="map"></v-img>
      </div>
    </v-card>
  </div>
</template>

<script>
import mapPhoto from "../assets/img/mapphoto.png"
import map from "../assets/img/map.png"
export default {
  data: () => ({
    map: map,
    mapPhoto: mapPhoto,
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

  .map-container {
    height: 100%;
    width: 60%;
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
    height: 32%;
    display: flex;
    width: 70%;
    margin: -1rem auto 0 auto;
    border-radius: 0.5rem;

    .photo {
      border: 6px solid var(--light);
      border-radius: 0.5rem;
    }
  }

  .information-content {
    background-color: var(--rainbow-yellow);
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
    }

    .info {
      background-color: transparent !important;
      padding: 0 30%;
      margin: 2.5rem 0;

      .location-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .view-map-btn {
        background-color: var(--dark);
        color: var(--rainbow-yellow);
        margin: 1rem auto 0 auto;
        width: 80%;
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

@media (max-width: 600px) {
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
    height: 20% !important;
    width: 90% !important;
    margin-bottom: 3rem !important;
  }

  .contact-info {
    justify-content: center;
    flex-wrap: wrap;
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

  .info {
    padding: 0 4rem !important;
  }
}
@media (orientation: landscape) {
  .container {
    padding: 6vh 0 0 0;
  }
  .information-card {
    border-radius: 0px !important;
  }
  .information-content {
    padding-top: 4rem;
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

  .info {
    width: 50%;
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
