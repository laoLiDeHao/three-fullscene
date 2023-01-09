/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-28 10:01:59
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-28 10:23:42
 * @FilePath: \three-learn\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
