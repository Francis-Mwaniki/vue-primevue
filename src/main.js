 
import "./main.css"
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/md-light-indigo/theme.css'

import 'primeicons/primeicons.css'


import { createApp } from 'vue'
// Example import for PrimeVue Toast
import ToastService from 'primevue/toastservice';
import Button from 'primevue/button';
import SplitButton from 'primevue/splitbutton';
import App from './App.vue'




const app = createApp(App)



app.use(PrimeVue);

app.use(ToastService);

app.component('Button', Button);
app.component('SplitButton', SplitButton);

app.mount('#app')

// export { toastBus }
