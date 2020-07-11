import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
