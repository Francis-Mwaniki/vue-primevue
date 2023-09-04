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

    <!-- Share buttons for Facebook, Twitter, and Instagram -->
    <div class="share-buttons">
      <a
        class="share-button facebook"
        :href="facebookShareLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Facebook
      </a>
      <a
        class="share-button twitter"
        :href="twitterShareLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Twitter
      </a>
      <a
        class="share-button instagram"
        :href="instagramShareLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Instagram
      </a>
    </div>
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
  computed: {
    // Computed properties for generating share links
    facebookShareLink() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        this.imageUrl
      )}`;
    },
    twitterShareLink() {
      const text = "Check out this generated image!";
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(this.imageUrl)}`;
    },
    instagramShareLink() {
      return `https://www.instagram.com/upload/image/?url=${encodeURIComponent(
        this.imageUrl
      )}`;
    },
  },
  methods: {
    generateAndShareImage() {
      const content = this.$el.querySelector(".content");

      htmlToImage
        .toPng(content)
        .then((dataUrl) => {
          this.imageUrl = dataUrl;
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

.share-buttons {
  margin-top: 20px;
}

.share-button {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  text-decoration: none;
  border: 1px solid #333;
  border-radius: 5px;
  color: #333;
}

.share-button:hover {
  background-color: #333;
  color: #fff;
}
</style>
