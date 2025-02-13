import { createApp } from 'vue'
import './style.css'
import App from './Index.vue'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

createApp(App).mount('#header')
