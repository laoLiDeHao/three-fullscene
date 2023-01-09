<!--
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-28 10:01:59
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-28 10:18:36
 * @FilePath: \three-learn\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
  <div>
    <RouterView />
  </div>



</template>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  color: white;
}

.wrapper a {
  color: white;
}
</style>
