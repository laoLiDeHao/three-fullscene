/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-30 11:38:41
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-30 13:02:09
 * @FilePath: \three-learn\src\assets\ts\TEvent.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEr
 */
import { Camera, EventDispatcher, Object3D, Raycaster, Scene, Vector2 } from "three";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";

export interface TEventManagerParameters {
    dom: HTMLCanvasElement,
    scene: Scene,
    camera: Camera,
}

// 加上EventDispatcher 可响应dispatch和add event listener
export class TEventManager extends EventDispatcher {
    private mouse: Vector2 = new Vector2//three坐标

    private raycaster: Raycaster = new Raycaster()//射线拾取器

    private dom: HTMLCanvasElement

    private scene: Scene

    private camera: Camera


    constructor(params: TEventManagerParameters) {
        super();

        this.dom = params.dom
        this.scene = params.scene
        this.camera = params.camera
        const mouse = this.mouse
        const raycaster = this.raycaster
        const dom = params.dom

        // 初始变换控制器
        const transformControls = new TransformControls(this.camera, dom)
        this.scene.add(transformControls)

        let cacheObj: Object3D | null = null
        dom.addEventListener('mousemove', (event) => {

            mouse.x = event.offsetX / dom.offsetWidth * 2 - 1
            mouse.y = -event.offsetY * 2 / dom.offsetHeight + 1
            // console.log(mouse.x, mouse.y);

            // 模拟hover
            raycaster.setFromCamera(mouse, this.camera)
            const intersection = raycaster.intersectObjects(this.scene.children)

            this.dispatchEvent({
                type: "mousemove",
                intersection
            })
            /*
            if (intersection.length) {
                const obj = intersection[0].object
                // 拾取到对比cache派送三种事件
                if (cacheObj === obj) {
                    cacheObj.dispatchEvent({
                        type: "mousemove"
                    })
                    return
                }
                if (cacheObj) cacheObj.dispatchEvent({
                    type: 'mouseleave'
                })
                cacheObj = obj
                obj.dispatchEvent({
                    type: 'mouseenter'
                })
            } else {
                // 未拾取到置空
                if (cacheObj) cacheObj.dispatchEvent({
                    type: "mouseleave"
                })
                cacheObj = null
            }
            */
        })
        dom.addEventListener('mousedown', (event) => {
            raycaster.setFromCamera(mouse, this.camera)
            const intersection = raycaster.intersectObjects(this.scene.children)

            this.dispatchEvent({
                type: "mousedown",
                intersection
            })

        })
        dom.addEventListener('mouseup', (event) => {
            raycaster.setFromCamera(mouse, this.camera)
            const intersection = raycaster.intersectObjects(this.scene.children)

            this.dispatchEvent({
                type: "mouseup",
                intersection
            })
        })


        dom.addEventListener('click', (event) => {
            raycaster.setFromCamera(mouse, this.camera)
            const intersection = raycaster.intersectObjects(this.scene.children)
            // 当前物体发送 click事件  其他几种事件我没加，加的话这样写就行
            intersection[0].object.dispatchEvent({
                type:'click'
            })
            this.dispatchEvent({
                type: "click",
                intersection
            })
        })

    }
}