<template>
  <teleport to="body">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-body">
      <slot></slot>
    </div>
  </teleport>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Styling for the modal overlay and content */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-body {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  height: 50%;
  border-radius: 3px;
  z-index: 100;
  margin: 0 auto;
  position: absolute;
  top: 25%;
  bottom: 0;
  left: 0;
  right: 0;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

.modal-header {
  text-align: center;
  margin-bottom: 10px;
}

.warning-icon {
  color: #f39c12;
  font-size: 36px;
}

.modal-footer {
  text-align: center;
  margin-top: 10px;
}
</style>
