<template>
  <div>
    <div class="content">
      <!-- Your content goes here -->
      <p>Company Name: {{ companyName }}</p>
      <p>Profit: {{ profit }}%</p>
      <p>Entry Price: ${{ entryPrice }}</p>
      <p>Last Price: ${{ lastPrice }}</p>
      <p>Shared Code: {{ sharedCode }}</p>
    </div>

    <!-- Button to generate and share the image -->
    <button @click="generateAndShareImage">Share Image</button>

    <!-- The generated image will be displayed here -->
    <img v-if="imageUrl" :src="imageUrl" alt="Generated Image" />
  </div>
</template>

<script>
import * as htmlToImage from "html-to-image";

export default {
  data() {
    return {
      companyName: "Beannsofts Inc",
      profit: +20,
      entryPrice: 200,
      lastPrice: 220,
      sharedCode: "1234567890",
      imageUrl: null,
    };
  },
  methods: {
    generateAndShareImage() {
      const content = this.$el.querySelector(".content");

      htmlToImage
        .toPng(content)
        .then((dataUrl) => {
          this.imageUrl = dataUrl;

          // Check if the Web Share API is available in the browser
          if (navigator.share) {
            navigator
              .share({
                title: "Generated Image",
                text: "Check out this generated image!",
                url: dataUrl,
              })
              .then(() => {
                // Sharing succeeded
                console.log("Shared successfully");
              })
              .catch((error) => {
                // Sharing failed
                console.error("Error sharing:", error);
              });
          } else {
            // Fallback for browsers that don't support Web Share API
            console.log("Web Share API is not supported in this browser.");
          }
        })
        .catch((error) => {
          console.error("Error generating image:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles for the content here */
.content {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

button {
  margin-top: 10px;
}

img {
  max-width: 100%;
  margin-top: 10px;
}
</style>
