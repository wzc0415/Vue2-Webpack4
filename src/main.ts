import Vue from "vue";
// import Vue from 'vue/dist/vue.js';
import App from './App.vue';

new Vue({
    render(h) {
        return h(App)
    }
}).$mount("#app");
