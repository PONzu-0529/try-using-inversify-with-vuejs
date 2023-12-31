import 'reflect-metadata';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ContainerHelper } from './helpers/ContainerHelper';
import { SampleService1 } from './services/SampleService1';
import { SampleService1Mock } from './mocks/SampleService1Mock';

Vue.config.productionTip = false

ContainerHelper.bind('SampleService1', SampleService1);

if (process.env.NODE_ENV === 'test') {
  ContainerHelper.rebind('SampleService1', SampleService1Mock);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
