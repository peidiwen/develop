import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import router from './router';
const app = createApp(App);
app.use(ArcoVue);

createApp(App).use(router).mount('#app')
app.mount(c());
function c(){
    router.push('./components/welcome')
}