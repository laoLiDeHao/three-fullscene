<!--
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-28 10:01:59
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-28 10:19:31
 * @FilePath: \three-learn\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { TEngine } from "../assets/ts/TEngine";
import { BasicObjectsList } from '../assets/ts/Objects/BasicObjects'
import { TCanvasTextureEditor } from "../assets/ts/TCanvasEditor";
import { LightsList } from "../assets/ts/Tlight";
import { HelperList } from "../assets/ts/THelper";
import { codeModelList } from "@/assets/ts/TModel";
import { framePromise, frameMaterial, getFrame } from "@/assets/ts/TLoadModel";
import type { Material, Mesh } from "three";
import { groupProimes,groupListPromise } from "@/assets/ts/TGroup";
import { fullsceneBall } from "@/assets/ts/Objects/Fullsceneball";
const threeTarget = ref(null)

onMounted(() => {
  const TE = new TEngine(threeTarget.value!)//! 一定有标识
  // TE.addObject(...BasicObjectsList)
  TE.addObject(...codeModelList)
  TE.addObject(...LightsList)
  TE.addObject(...HelperList)
  TE.addObject(fullsceneBall)
})
</script>

<template>
  <div class="three-canvas" ref="threeTarget">
  </div>
</template>

<style  lang="css" scoped>
.three-canvas {
  width: 100vw;
  height: 100vh;
}
</style>
