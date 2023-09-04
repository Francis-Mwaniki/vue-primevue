<template>
  <div>
    <button @click="shareOnWhatsApp">Share on WhatsApp</button>
  </div>
</template>

<script>
export default {
  methods: {
    shareOnWhatsApp() {
      // Replace 'image_url' with the URL of the image you want to share.
      const imageUrl =
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

      // Create a WhatsApp share URL with the image.
      const whatsappShareUrl = `whatsapp://send?text=${encodeURIComponent(imageUrl)}`;

      // Open the WhatsApp mobile app with the share URL.
      window.location.href = whatsappShareUrl;
    },
  },
};
</script>
