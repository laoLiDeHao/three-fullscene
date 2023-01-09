<!--
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-28 10:01:59
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-31 14:19:01
 * @FilePath: \three-learn\src\views\HomeView.vue
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
const threeTarget = ref(null)

onMounted(() => {
  const TE = new TEngine(threeTarget.value!)//! 一定有标识
  TE.addObject(...BasicObjectsList)
  TE.addObject(...codeModelList)
  TE.addObject(...LightsList)
  TE.addObject(...HelperList)
  

  /*
  const testCanvas = new TCanvasTextureEditor()
  testCanvas.draw(ctx=>{
    ctx.beginPath()
    ctx.rect(10, 10, 200, 200)//矩形路径

    ctx.strokeStyle = 'red'//路径色彩
    ctx.stroke()
    ctx.fillStyle = 'aqua'
    ctx.fill()
    ctx.closePath()
  }).preview()
  */
  // framePromise.then(group=>{
  //   TE.addObject(group)
  // })
  // getFrame().then(group => {
  //   group && TE.addObject(group)
  // })
  // groupProimes.then(group=>{
  //   TE.addObject(group)
  // })
  groupListPromise.then(group=>{
    TE.addObject(...group)
  })
 
  
})
</script>

<template>
  <div class="three-canvas" ref="threeTarget">
  </div>

</template>


<style lang="css" scoped>
.three-canvas {
  width: 100vw;
  height: 100vh;
}
</style>
