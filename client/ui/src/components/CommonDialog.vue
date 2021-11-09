<template>
  <v-dialog
    :value="open"
    :max-width="dialogMaxWidth"
    @click:outside="closeModal()"
    @keydown.enter="handleEnterPressed()"
    @keydown.esc="closeModal()"
  >
    <v-card class="dialog-card" :color="'var(--background)'">
      <v-card-title class="d-flex justify-center">
        <slot name="title"></slot>
        <v-btn class="close-btn" icon @click="closeModal()"
          ><v-icon class="close-icon" color="secondary"
            >highlight_off</v-icon
          ></v-btn
        >
      </v-card-title>

      <v-card-actions style="height: 100%">
        <slot name="content"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialogMaxWidth: {
      type: [Number, String],
      default: 500,
    },
    open: {
      type: Boolean,
      default: false,
    },
    currentMassage: {
      type: Object,
      default: () => ({}),
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
// This CSS cannot be scoped because the dialog is mounted near the root of the app -- v-deep will not work
.v-dialog {
  margin: 0 !important;
  box-shadow: none !important;
  border-radius: 30px !important;
  box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.5) !important;

  .v-sheet,
  .v-card {
    box-shadow: none !important;
    position: relative;
  }

  .v-card__title {
    border-radius: 0 !important;
    display: flex;
    text-align: left;
    padding: 0 !important;

    .v-btn {
      position: absolute;
      right: 2.5rem;
      top: 2.5rem;
      color: var(--light) !important;

      .v-icon {
        font-size: 4rem;
        color: var(--dark) !important;
      }
    }
  }

  .v-card__actions {
    padding: 0 !important;
  }

  .action-buttons-container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 1rem;
  }

  .dialog-error-text {
    color: red !important;
    font-size: 1.5rem;
    text-align: center;
  }

  .close-icon {
    width: 2rem;
  }
}

.dialog-card {
  height: 90vh;
  border-radius: 30px !important;
  padding: 5.5rem 4rem;
  color: var(--text);
}

@media (max-width: 600px) {
  .v-dialog__content {
    height: 100vh !important;
    width: 100vw !important;
  }
  .dialog-card {
    border: 1px solid green;
    height: 90vh !important;
    width: 100% !important;
  }
}
</style>
