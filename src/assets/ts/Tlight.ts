/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-28 19:32:45
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-31 14:30:28
 * @FilePath: \three-learn\src\assets\ts\Tlight.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { AmbientLight, PointLight, SpotLight, type Object3D } from "three";
import { wall } from "./Objects/BasicObjects";
export const LightsList: Object3D[] = []
// 环境光
const ambientLight: AmbientLight = new AmbientLight('#fff', 0.2)

// 点光源
export const pointLight: PointLight = new PointLight(
    '#f00',
    0.9,//强度
    50,//范围
    0.1//衰减
)
// 聚光灯

export const spotLight: SpotLight = new SpotLight(
    '#222',
    2,
    200,
    Math.PI / 180 * 50, //角度
    0,
    0//两端衰减
)
spotLight.castShadow = true //阴影
spotLight.position.set(0, 100,50)
spotLight.target = wall


// spotLight.rotation.x = Math.PI / 180 * 90
/*
打开阴影可视化要同时打开物体、阴影投射处物体、灯光还有renderer的显示阴影

soptLight
matrixWorld

*/
// spotLight.position.set(-50, 50, -50)
// pointLight.position.set(20, 20, 20)
LightsList.push(
    ambientLight,
    // pointLight,
    spotLight
)