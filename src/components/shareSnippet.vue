<template>
  <ShareNetwork
    @click="shareImage"
    network="facebook"
    :url="`${shareUrl}`"
    title="Profit and Loss"
    description="The best platform for trading"
    quote="Profit and Loss"
    hashtags="Profit and Loss"
    :image="imageData"
  >
    Share on Facebook
  </ShareNetwork>

  <div class="share-button">
    <div class="image-container" v-if="imageData">
      <img :src="imageData" alt="Shared Image" @click="openModal" />
    </div>

    <!-- Modal for displaying the shared image -->
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <img :src="imageData" alt="Shared Image" />
      </div>
    </div>
  </div>
</template>

<script>
import { ShareNetwork } from "vue-social-sharing";

export default {
  components: {
    ShareNetwork,
  },
  data() {
    return {
      selectedNetwork: "facebook",
      shareUrl: "", // Replace with your actual URL
      shareTitle: "Beannsoft Limited", //
      canvasImage: "",
      imageData: null,
      showModal: false,
      payload: {
        companyName: "Beannsofts Inc",
        profit: +20,
        entryPrice: 200,
        lastPrice: 220,
        sharedCode: "1234567890",
      },
    };
  },
  mounted() {},
  methods: {
    shareImage() {
      // Generate an image with the payload
      this.generateImage();

      // Show the modal with the shared image
      this.showModal = true;
    },
    closeModal() {
      // Close the modal
      this.showModal = false;
    },
    generateImage() {
      // Create a canvas element to draw the image
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 400; // Increase the width to accommodate the text
      canvas.height = 300; // Increase the height to accommodate the text

      // Customize the image appearance
      ctx.fillStyle = "black"; // Set the background color to black
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "20px Arial";
      ctx.fillStyle = "white"; // Set the text color to white
      ctx.fillText(` ${this.payload.companyName}`, 20, 40);
      ctx.fillText(` ${this.payload.profit}`, 20, 80);
      ctx.fillText(` ${this.payload.entryPrice}`, 20, 120);
      ctx.fillText(` ${this.payload.lastPrice}`, 20, 160);
      ctx.fillText(` ${this.payload.sharedCode}`, 20, 200);

      // Convert the canvas to a data URL
      const imageData = canvas.toDataURL("image/png");

      // Update the component data with the generated image
      this.imageData = imageData;
      this.shareUrl = import.meta.env.VITE_APP_URL + this.imageData;
    },
  },
};
</script>

<style scoped>
/* Your CSS styles (same as before) */

.share-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  margin-top: 20px;
}

.image-container img {
  width: 300px;
  height: 200px;
  cursor: pointer;
}

/* Styles for the modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: azure;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  overflow: auto;
}

.modal-content {
  position: relative;
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 80%;
  text-align: center;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
}
</style>
