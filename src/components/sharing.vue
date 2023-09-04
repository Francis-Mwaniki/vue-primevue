<template>
  <div class="container">
    <ShareNetwork
      network="facebook"
      url="https://binance.com/"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite"
    >
      <button class="fb-btn">Facebook</button>
    </ShareNetwork>
    <ShareNetwork
      network="twitter"
      url="https://binance.com/"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      hashtags="vuejs,vite"
    >
      <button class="fb-btn">Twitter</button>
    </ShareNetwork>
    <ShareNetwork
      network="linkedin"
      url="https://binance.com/"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      hashtags="vuejs,vite"
    >
      <button class="fb-btn">Linkedin</button>
    </ShareNetwork>
    <ShareNetwork
      network="whatsapp"
      url="https://binance.com/"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      hashtags="vuejs,vite"
    >
      <button class="fb-btn">Whatsapp</button>
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.fb-btn {
  background-color: #3b5998;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
}
</style>
