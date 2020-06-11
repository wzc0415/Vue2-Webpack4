import Vue from "vue";
import App from './App.vue';
import './plugins/element';
import router from "./router";
import store from "./store";
import './style/global.scss';
import 'element-ui/lib/theme-chalk/index.css';

new Vue({
    router,
    store,
    render(h) {
        return h(App)
    }
}).$mount("#app");
