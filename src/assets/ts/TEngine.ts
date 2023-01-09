/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-28 10:21:41
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-30 13:31:38
 * @FilePath: \three-learn\src\assets\TEngine.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { WebGLRenderer, Scene, PerspectiveCamera, Mesh, BoxGeometry, MeshStandardMaterial, Object3D, Vector3, AmbientLight, AxesHelper, GridHelper, Vector2, Raycaster, Group } from "three";
import * as THREE from "three";
import Stats from 'three/examples/jsm/libs/stats.module'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { TEventManager } from "./TEvent";

import TWEEN from '@tweenjs/tween.js';
export class TEngine {

    private dom: HTMLElement

    private renderer: WebGLRenderer

    private scene: Scene

    private camera: PerspectiveCamera

    private eventManager: TEventManager

    constructor(dom: HTMLElement) {
        this.dom = dom
        const renderer = new WebGLRenderer({
            antialias: true//抗锯齿
        })
        const scene = new Scene()
        const camera = new PerspectiveCamera(100, dom.offsetWidth / dom.offsetHeight, 1, 1100)
        camera.position.set(0, 500, 0)
        // camera.target = new Vector3( 0, 0, 0 );
        camera.lookAt(new THREE.Vector3( 0, -1, 0 ))
        // camera.up = new Vector3(0, 1, 0)

        renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)


        renderer.shadowMap.enabled = true
        // 性能监视
        const stats = Stats()
        const statsDom = stats.domElement
        statsDom.style.position = 'fixed'
        statsDom.style.top = '0px'
        statsDom.style.right = '0px'
        statsDom.style.left = 'unset'

        // 轨道监控
        const orbitControls: OrbitControls = new OrbitControls(camera, renderer.domElement)
        // orbitControls.enablePan = false
        orbitControls.update()
        // orbitControls.autoRotate = true
        const control: TransformControls = new TransformControls(camera, renderer.domElement);
        control.addEventListener('dragging-changed', function (event) {

            orbitControls.enabled = !event.value;

        });

        // 事件管理

        const eventManager = new TEventManager({
            dom: renderer.domElement,
            scene: scene,
            camera: camera
        })
        // hover事件
        let cacheObj: Mesh | null = null
        eventManager.addEventListener('mousemove', (event) => {

            // if (event.intersection.length) {
            //     const object = event.intersection[0].object //注意这里要object
            //     if (object == cacheObj) {
            //         return
            //     } else if (object != cacheObj && cacheObj) {
            //         (cacheObj.material as MeshStandardMaterial).color.multiplyScalar(
            //             0.5
            //         );
            //     }
            //     if (object.material) {
            //         object.material.color.multiplyScalar(2)
            //         cacheObj = object
            //     } else {
            //         if (cacheObj) {
            //             (cacheObj.material as MeshStandardMaterial).color.multiplyScalar(
            //                 0.5
            //             );
            //         }
            //         cacheObj = null
            //     }

            // }

        })

        eventManager.addEventListener('click', (event) => {
            // 添加变换控制器
            if (event.intersection.length) {
                const object = event.intersection[0].object //注意这里要object
                // control.attach(
                //     object.parent instanceof Group ? object.parent : object
                // )
                // scene.add(control)
            } else {
                // control.detach()
                // scene.remove(control)
            }
        })

        // 动态渲染 request Animation Frame 让场景动起来
        const tick = () => {
            // this.camera.position.x += .01

            // orbitControls.update()//轨道相机控制
            TWEEN.update()
            stats.update()//帧率检测
            // this.camera.lookAt(box.position)
            renderer.render(scene, camera)
            requestAnimationFrame(tick)
        }
        tick()
        // 相机动画
        let start = () => {
            let cooler = { lat: 0, y: camera.position.y, fov: camera.fov }
            new TWEEN.Tween(cooler)
                .to({ lat: 90, y: 0, fov: 100 }, 2500)
                .delay(1000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(() => {
                    
                    let phi = THREE.MathUtils.degToRad(cooler.lat);
                    console.log('x',-500 * Math.cos(phi),1,-500 * Math.sin(phi));
                    camera.lookAt(1,-500 * Math.cos(phi),-500 * Math.sin(phi))
                   
                    camera.position.y = cooler.y;
                    camera.fov = cooler.fov;
                    camera.updateProjectionMatrix();
                })
                .start()
        }
        start()



        console.log('TWEEN', TWEEN);

        dom.appendChild(renderer.domElement)
        dom.appendChild(statsDom)

        this.renderer = renderer
        this.scene = scene
        this.camera = camera
        this.eventManager = eventManager


    }
    // 添加模型
    addObject(...object: Object3D[]) {
        object.forEach(item => {
            this.scene.add(item)
        })
    }


    // 作者：songdy
    // 链接：https://juejin.cn/post/6844903797681045512
    // 来源：稀土掘金
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

}