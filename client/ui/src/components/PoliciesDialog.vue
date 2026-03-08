<template>
  <CommonDialog
        :open="isPoliciesOpen"
        :dialogMaxWidth="500"
        @dialog-closed="closeModal()"
      >
        <template #title>
          <div class="policy-title">
            <span>POLICIES</span>
            <v-divider class="policy-divider"></v-divider>
          </div>
        </template>
        <template #content>
          <div class="policy-content">
              <div class="policy-text">
                <div class="policy-text-intro">
                  <p><span class="bold">Things Happen.</span>
                  I ask that all of my clients be respectful of my craft, education, and time. Please notify me of cancellations as far in advance as possible,
                  as it is very difficult for me to fill a booked session last minute. 
                </p>
                </div>
                <div class="policy">
                  <p><span class="bold">Cancelling in under 24 hours</span> from your booked appointment will result in a fee for the booked services. 
                    Cancelling within 24 hours of your booked appointment and rescheduling will result in a fee for the cancelled services.</p>
                </div>
                <div class="policy">
                  <p><span class="bold">I reserve the right to terminate any booked appointments or services immediately. </span>
                    If you are over 20 minutes late to your booked appointment I reserve the right to cancel your session and you will be charged a fee for the booked service.</p>
                    
                </div>
                <div class="policy">
                  <p><span class="bold">Inappropriate behavior will not be tolerated.</span> 
                    Any inappropriate behavior or any form of harassment will result in the immediate termination of the session and the client still be responsible full price of all booked services.
                    Any clients that exhibit behavior that I deem inappropriate will be banned from all future services.</p>
                </div>
                <div class="policy">
                  <p><span class="bold">I do not perform any extra services beyond massage therapy sessions.</span></p>
                </div>
              </div>
          </div>
        </template>
      </CommonDialog>
</template>

<script>
import CommonDialog from "./CommonDialog.vue"
export default {
  components: { CommonDialog },
  props: {
    dialogMaxWidth: {
      type: [Number, String],
      default: 500,
    },
    isPoliciesOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("dialog-closed")
    },
    handleEnterPressed() {
      this.$emit("enter-pressed")
    },
  },
}
</script>

<style lang="scss">
.policy-title{
  height: 100%;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 2.5em;
  span{
    margin-bottom: 2rem;
  }
  .policy-divider{
    margin-top: 2rem;
  }
}
.policy-content{
  height: 80%;
  width: 100%;
  padding: 2rem 5.25rem;

  .policy-text{
    height: 100%;
      display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.9rem;
    letter-spacing: 0.5px;
    font-weight: 400;
    margin-bottom: 0;
  }

  .policy-text-intro{
    margin-bottom: 1.5rem;
  }
  .policy{
    margin-bottom: 1.5rem;
  }
  .bold{
    font-weight: 800;
  }
}

@media (max-width: 400px) {
  .policy-title{
    padding-top: 1rem;
  }
    .policy-content {
      height: 100%;
      padding: 1.5rem 2rem;
    }
}
</style>