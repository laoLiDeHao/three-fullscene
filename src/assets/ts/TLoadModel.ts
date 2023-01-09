/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-29 11:56:21
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-30 18:00:08
 * @FilePath: \three-learn\src\assets\ts\TLoadModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Group, Material, Mesh, MeshStandardMaterial } from "three";
import { frameColorTexture, frameDisplacementTexture, frameRoughnessTexture } from "./TTexture";
import { DefauleLoaderManager } from "./TLoaderManager";
// import { Group } from "three";




const objLoader: OBJLoader = new OBJLoader()
const mtlLoader: MTLLoader = new MTLLoader()






// 这里模型加载异步的 有了DefaultLoaderManager 就不是异步了
export const framePromise = new Promise<Mesh>((resolve, reject) => {
    DefauleLoaderManager.addEventListener('loaded', (event) => {
        const sourcecMap = event.sourceMap
        const group = sourcecMap["frame.obj"]
        const frameMesh: Mesh = group.children[0] as Mesh//as mesh 同步类型
        (frameMesh.material as Material).dispose()
        frameMesh.material = new MeshStandardMaterial({
            map: sourcecMap['Wood060_1K-JPG/Wood060_1K_Color.jpg'],
            roughnessMap: sourcecMap['Wood060_1K-JPG/Wood060_1K_Roughness.jpg'],
            // displacementMap: frameDisplacementTexture
            bumpMap: sourcecMap['Wood060_1K-JPG/Wood060_1K_Displacement.jpg']
        })
        // frameMesh.position.y = 35
        // frameMesh.position.z = -1
        frameMesh.rotation.y = -Math.PI / 180 * 87
        resolve(frameMesh)
    })
    /*
    之前的异步方法
    // objLoader.loadAsync('/frame.obj')
    //     .then(group => {
    //         const frameMesh: Mesh = group.children[0] as Mesh//as mesh 同步类型
    //         (frameMesh.material as Material).dispose()
    //         frameMesh.material = frameMaterial
    //         // frameMesh.position.y = 35
    //         // frameMesh.position.z = -1
    //         frameMesh.rotation.y = -Math.PI / 180 * 87
    //         resolve(frameMesh)
    //     }).catch(
    //         err => reject(err)
    //     )
    */
})


// 异步函数替代promise
export const getFrame = async (): Promise<Mesh | null> => {
    const group = await objLoader.loadAsync('frame.obj')
    if (group instanceof Group) {
        const frameMesh: Mesh = group.children[0] as Mesh//as mesh 同步类型
        (frameMesh.material as Material).dispose()
        frameMesh.material = frameMaterial
        // frameMesh.position.y = 35
        // frameMesh.position.z = -1
        frameMesh.rotation.y = -Math.PI / 180 * 88

        return frameMesh
    }
    console.error(group)
    return null
}



// 材质贴图
export const frameMaterial: MeshStandardMaterial = new MeshStandardMaterial({
    map: frameColorTexture,
    roughnessMap: frameRoughnessTexture,
    // displacementMap: frameDisplacementTexture
    bumpMap: frameDisplacementTexture
})