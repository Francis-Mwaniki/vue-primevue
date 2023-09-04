import './assets/main.css'
  // import { createChatWoot } from '@productdevbook/chatwoot/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueSocialSharing from 'vue-social-sharing'
// import GoogleSignInPlugin from "vue3-google-signin"
const app = createApp(App)
// app.use(GoogleSignInPlugin, {
//     clientId: '382550446541-6pe5rlb12i2af95bf99c78a837r7injk.apps.googleusercontent.com',
//   });

  // const chatwoot = createChatWoot({
  //   init: {
  //     websiteToken: 'RQKFP4W9eShUJVwBxr6xUc2r'
  //   },
  //   settings: {
  //     locale: 'en',
  //     position: 'left',
  //     launcherTitle: 'Hello Chat'
  //   },
  //   partytown: false,
  // })
  
  // app.use(chatwoot)
  app.use(VueSocialSharing);
app.use(createPinia())

app.mount('#app')
