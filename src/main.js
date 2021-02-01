import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(VueResource)
Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
