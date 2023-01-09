/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-28 19:50:33
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-30 11:25:19
 * @FilePath: \three-learn\src\assets\ts\THelper.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
    AxesHelper,
    GridHelper,
    Object3D,
    PointLightHelper,
    SpotLightHelper
} from "three"; // 参考坐标轴
import { pointLight, spotLight } from "./Tlight";
export const HelperList: Object3D[] = []

// 三维坐标
const axesHelper: AxesHelper = new AxesHelper(500)
// 矩阵线
const gridHelper: GridHelper = new GridHelper(500, 10, '#fff', '#999')
// 点光源可视化工具
const pointLightHelper: PointLightHelper = new PointLightHelper(
    pointLight,
    pointLight.distance,
    pointLight.color
)
// 聚光灯可视化
const spotLightHelper: SpotLightHelper = new SpotLightHelper(
    spotLight,
    spotLight.color
)
HelperList.push(
    axesHelper,
    gridHelper,
    //  pointLightHelper,
    //  spotLightHelper
)