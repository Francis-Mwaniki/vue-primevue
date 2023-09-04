<template>
  <div>
    <h1>File Sharing App</h1>
    <button @click="getImage">Get Image</button>
    <img :src="imageUrl" />
    <button @click="shareImage">Share Image</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FileSharingApp",
  data() {
    return {
      imageUrl: "",
    };
  },
  methods: {
    getImage() {
      // Get the image from the server
      this.imageUrl = "https://picsum.photos/200/300";
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
