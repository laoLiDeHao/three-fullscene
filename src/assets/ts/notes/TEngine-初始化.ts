/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-28 15:49:51
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-30 13:25:45
 * @FilePath: \three-learn\src\assets\ts\notes\TEngine-初始化.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// /*
//  * @Author: Ember.PL 1084861534@163.com
//  * @Date: 2022-12-28 10:21:41
//  * @LastEditors: Ember.PL 1084861534@163.com
//  * @LastEditTime: 2022-12-28 15:55:17
//  * @FilePath: \three-learn\src\assets\TEngine.ts
//  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  */
import { WebGLRenderer, Scene, PerspectiveCamera, Mesh, BoxGeometry, MeshStandardMaterial, Vector3, AmbientLight, AxesHelper, GridHelper, Object3D } from "three";

// import Stats from 'three/examples/jsm/libs/stats.module'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// export class TEngine {

//     private dom: HTMLElement

//     private renderer: WebGLRenderer

//     private scene: Scene

//     private camera: PerspectiveCamera

//     constructor(dom: HTMLElement) {
//         this.dom = dom
//         this.renderer = new WebGLRenderer({
//             antialias:true//抗锯齿
//         })
//         this.scene = new Scene()
//         this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)
//         this.camera.position.set(20, 20, 20)
//         this.camera.lookAt(new Vector3(0, 0, 0))
//         this.camera.up = new Vector3(0, 1, 0)

//         this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)

//         // 环境光
//         const ambientLight: AmbientLight = new AmbientLight('#fff', 1)
//         // 参考坐标轴
//         const axesHelper: AxesHelper = new AxesHelper(500)
//         // 矩阵线
//         const gridHelper: GridHelper = new GridHelper(500, 10, '#fff', '#999')
//         // 性能监视
//         const stats = Stats()
//         const statsDom = stats.domElement
//         statsDom.style.position = 'fixed'
//         statsDom.style.top = '0px'
//         statsDom.style.right = '0px'
//         statsDom.style.left = 'unset'

//          // 轨道监控
//          const orbitControls: OrbitControls = new OrbitControls(this.camera,this.renderer.domElement)
//         orbitControls.autoRotate = true
//          // 最简单的模型
//         const box: Mesh = new Mesh(
//             new BoxGeometry(10, 10, 10),
//             new MeshStandardMaterial({ color: "#f00" })//物体颜色
//         )
//         this.scene.add(box)
//         this.scene.add(ambientLight)
//         this.scene.add(axesHelper)
//         this.scene.add(gridHelper)
       
//         // this.renderer.setClearColor('rgb(255,255,255)')//场景颜色*canvas
//         // this.renderer.clearColor()//清空场景色

//         // console.log('TEngine init', this.dom, this);


//         // 动态渲染 request Animation Frame 让场景动起来
//         const tick = () => {
//             // this.camera.position.x += .01

//             orbitControls.update()//轨道相机控制
//             stats.update()//帧率检测
//             this.camera.lookAt(box.position)
//             this.renderer.render(this.scene, this.camera)
//             requestAnimationFrame(tick)
//         }
//         tick()



//         dom.appendChild(this.renderer.domElement)
//         dom.appendChild(statsDom)
//     }

   
// }