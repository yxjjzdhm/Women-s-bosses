/*
 * @Date: 2021-03-23 17:20:44
 * @LastEditors: 张锦滨
 * @LastEditTime: 2021-03-23 23:06:01
 * @Description: 
 * @FilePath: \superman1\src\main.js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')