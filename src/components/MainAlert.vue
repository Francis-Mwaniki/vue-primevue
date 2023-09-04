<template>
  <div>
    <button @click="showModal">Show Modal</button>

    <WarningModal v-if="showingModal" @close="closeModal">
      <p>This is a warning message!</p>
    </WarningModal>
  </div>
</template>

<script>
import WarningModal from "./components/WarningModal.vue";

export default {
  components: {
    WarningModal,
  },
  data() {
    return {
      showingModal: false,
    };
  },
  methods: {
    showModal() {
      this.showingModal = true;
    },
    closeModal() {
      this.showingModal = false;
    },
  },
};
</script>
