/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-28 15:48:22
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-31 14:48:49
 * @FilePath: \three-learn\src\assets\ts\Objects\BasicObjects.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Mesh, BoxGeometry, MeshStandardMaterial, SphereGeometry, CylinderGeometry, Object3D, Line, Points, PointsMaterial, LineBasicMaterial, LineDashedMaterial, Plane, PlaneGeometry, DoubleSide, Color } from "three";
import { pictureTexture } from "../TTexture";
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper";
// 物体默认开启receiveShadow和castShadow，不然调试很麻烦
export const BasicObjectsList: Object3D[] = []
const meshMaterial = new MeshStandardMaterial({ color: "#0f0" })
// 地面
const stage: Mesh = new Mesh(
    new BoxGeometry(200, 10, 200),
    new MeshStandardMaterial({
        color: "rgb(150,150,150)",
        roughness: 0.5//0-1
    })
)
stage.castShadow = true
stage.receiveShadow = true
stage.position.y = -5
// 立方体
const box: Mesh = new Mesh(
    new BoxGeometry(20, 20, 20),
    new MeshStandardMaterial({
        color: "#fff",
        map: pictureTexture
        // metalness:1, //金属感
        // roughness:0.3
    })
)



box.castShadow = true
box.receiveShadow = true
box.position.y = 10
box.position.x = 30
const boxNormalHelper = new VertexNormalsHelper(box, 10, new Color('green').getHex())

// 相片
export const plane: Mesh = new Mesh(
    new PlaneGeometry(192, 108),
    new MeshStandardMaterial({
        map: pictureTexture,
        side: DoubleSide
    })
)
plane.position.y = 35
plane.position.z = 0
plane.scale.set(0.1, 0.1, 0.1)


// 墙
export const wall: Mesh = new Mesh(
    new BoxGeometry(200, 120, 10),
    new MeshStandardMaterial()
)
wall.position.z = - 7
wall.position.y = 60
wall.castShadow = true
wall.receiveShadow = true
wall.updateMatrix()
wall.updateMatrixWorld()


wall.addEventListener('mouseenter', () => {
    console.log('wall enter');
    (wall.material as MeshStandardMaterial).color = new Color('red')
})
wall.addEventListener('mouseleave', () => {
    console.log('wall leave');
    (wall.material as MeshStandardMaterial).color = new Color('white')
})
wall.addEventListener('mousemove', () => {
    console.log('wall move');
})
wall.addEventListener('click', () => {
    console.log('wall click');
})

/*
    如果有相关的引用，要更新本地坐标和世界坐标
*/

BasicObjectsList.push(
    stage,
    // box,
    // boxNormalHelper,
    // plane,
    wall
)