/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-28 10:01:59
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-28 10:09:57
 * @FilePath: \three-learn\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/common.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
