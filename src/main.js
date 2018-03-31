import Vue from 'vue'
import App from './App'

export const bus = new Vue();
new Vue({
  el: '#app',
  render: h => h(App)
});
