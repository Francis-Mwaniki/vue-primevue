<template>
  <div class="container">
    <div class="text-container" ref="textContainer">
      <p class="dynamic-text">Hello, Dynamic World!</p>
    </div>
    <canvas ref="canvas" width="600" height="400"></canvas>
    <ShareNetwork
      :network="selectedNetwork"
      :url="shareUrl"
      :title="shareTitle"
      :image="canvasImage"
    >
      <button class="fb-btn">Share Image on {{ selectedNetwork }}</button>
    </ShareNetwork>
    <div class="network-buttons">
      <button @click="selectedNetwork = 'facebook'">Facebook</button>
      <button @click="selectedNetwork = 'twitter'">Twitter</button>
      <button @click="selectedNetwork = 'linkedin'">LinkedIn</button>
      <button @click="selectedNetwork = 'whatsapp'">WhatsApp</button>
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
      shareUrl: "https://example.com", // Replace with your actual URL
      shareTitle: "Check out this canvas-generated image!", // Replace with your desired title
      canvasImage: "",
    };
  },
  mounted() {
    this.generateImage();
  },
  methods: {
    async generateImage() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a styled rectangle
      ctx.fillStyle = "lightblue";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Convert the content of the text container to an SVG image
      const textContainer = this.$refs.textContainer;
      const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="${textContainer.offsetWidth}" height="${textContainer.offsetHeight}">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml" class="text-container">
              ${textContainer.innerHTML}
            </div>
          </foreignObject>
        </svg>`;

      // Create an image from the SVG data
      const img = new Image();
      img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData)}`;

      img.onload = () => {
        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0);

        // Save the canvas image as a data URL
        this.canvasImage = canvas.toDataURL();
      };
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100vh;
}

.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
  background-color: white;
  border: 1px solid black;
}

.dynamic-text {
  font-size: 50px;
  font-weight: bold;
}

.network-buttons {
  display: flex;
  gap: 10px;
}
</style>
