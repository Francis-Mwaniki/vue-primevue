<template>
  <div>
    <h1>File Sharing App</h1>
    <!-- <button @click="getImage">Get Image</button> -->
    <button @click="generateImage">Generate Image</button>
    <img v-if="imageUrl" :src="imageUrl" alt="Generated Image" />
    <button @click="shareImage">Share Image</button>
  </div>
  <div class="content">
    <!-- Your content goes here -->
    <p>Company Name: {{ companyName }}</p>
    <p>Profit: {{ profit }}%</p>
    <p>Entry Price: ${{ entryPrice }}</p>
    <p>Last Price: ${{ lastPrice }}</p>
    <p>Shared Code: {{ sharedCode }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import * as htmlToImage from "html-to-image";
export default {
  name: "FileSharingApp",
  data() {
    return {
      imageUrl: "",
      companyName: "Beannsofts Inc",
      profit: +20,
      entryPrice: 200,
      lastPrice: 220,
      sharedCode: "1234567890",
    };
  },
  methods: {
    generateImage() {
      const content = document.querySelector(".content");

      htmlToImage
        .toPng(content)
        .then((dataUrl) => {
          this.imageUrl = dataUrl;
        })
        .catch((error) => {
          console.error("Error generating image:", error);
        });
    },
    shareImage() {
      if (navigator.share) {
        // Fetch the image data
        fetch(this.imageUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const shareData = {
              files: [new File([blob], "image.png", { type: blob.type })],
            };

            // Share the image using the Web Share API
            navigator
              .share(shareData)
              .then(() => {
                alert("Image shared successfully");
              })
              .catch((error) => {
                alert("Error sharing image:", error);
              });
          })
          .catch((error) => {
            alert("Error fetching image:", error);
          });
      } else {
        alert("Web Share API is not supported in this browser");
      }
    },
  },
};
</script>
<style scoped>
/* CSS */
.content {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  text-align: center;
}

.content p {
  margin: 10px 0;
  font-size: 16px;
  color: #333;
}

.content p:first-child {
  font-size: 20px;
  font-weight: bold;
}

.content p:last-child {
  font-size: 18px;
  font-weight: bold;
}

.content p span {
  color: #f00;
}

.content p span.positive {
  color: #0f0;
}

.content p span.negative {
  color: #f00;
}

.content p span.zero {
  color: #000;
}

.content p span:before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}
</style>
