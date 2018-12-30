import Vue from 'vue'
import App from './App.vue'

import Student from './Student.vue'
//import Employee from './Employee.vue'

Vue.component("student", Student)
//Vue.component("employee", Employee)


new Vue({
  el: '#app',
  render: h => h(App)
})
