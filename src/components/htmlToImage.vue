<template>
  <div>
    <!-- Your HTML content here -->
    <div id="thanku_poster">
      <!-- Your content to be converted to an image goes here -->
    </div>

    <button @click="createImage">Create and Share Image</button>
  </div>
</template>

<script>
import { toJpeg } from "html-to-image";

export default {
  methods: {
    dataURLtoFile(dataurl, filename) {
      // Your dataURLtoFile function here
    },
    shareFile(file, title, text) {
      // Your shareFile function here
    },
    createImage() {
      toJpeg(document.getElementById("thanku_poster"), { quality: 0.95 })
        .then((dataUrl) => {
          // Assuming you have a method to hide the thanks card
          this.hideThanksCard();

          const file = this.dataURLtoFile(dataUrl, "thanku_poster.png");
          this.shareFile(file, "Title", "https://co-aid.in");
        })
        .catch((error) => console.log("Error creating image", error));
    },
    hideThanksCard() {
      // Implement a method to hide the thanks card
    },
  },
};
</script>
