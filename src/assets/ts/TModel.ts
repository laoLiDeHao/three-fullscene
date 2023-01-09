import { BufferAttribute, BufferGeometry, Color, DoubleSide, Mesh, MeshBasicMaterial, MeshStandardMaterial, Object3D } from "three";
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper";
import { pictureTexture } from "./TTexture";

export const codeModelList: Object3D[] = []

const size: number = 10

/*
画面拼接
const point: Float32Array = new Float32Array([
    -size, size, size,
    size, size, size,
    size, size, -size,
    size, size, -size,
    -size, size, -size,
    -size, size, size,

])
*/

// 顶点索引
const point: Float32Array = new Float32Array([
    -size, size, size,
    size, size, size,
    size, size, -size,
    -size, size, -size,

    -size, -size, size,
    size, -size, size,
    size, -size, -size,
    -size, -size, -size,

    size, size, size,
    size, size, -size,
    size, -size, -size,
    size, -size, size,

    -size, size, size,
    -size, size, -size,
    -size, -size, -size,
    -size, -size, size,


    -size, size, size,
    size, size, size,
    -size, -size, size,
    size, -size, size,

    -size, size, -size,
    size, size, -size,
    -size, -size, -size,
    size, -size, -size,
])

const normals: Float32Array = new Float32Array([
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,


    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,

    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,


    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,


    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
])


const index: number[] = [
    // 从看向的方向上 顺时针看不到，逆时针看得到
    0, 1, 2,
    2, 3, 0,

    4, 5, 6,
    6, 7, 4,

    8, 9, 10,
    10, 11, 8,

    12, 14, 13,
    14, 12, 15,

    17, 18, 19,
    16, 18, 17,

    23, 22, 21,
    20, 21, 22,





]

// 材质贴图
const uv: Float32Array = new Float32Array([
    0, 0,
    1, 0,
    1, 1,
    0, 1,

    0, 0,
    1, 0,
    1, 1,
    0, 1,

    0, 0,
    1, 0,
    1, 1,
    0, 1,

    0, 0,
    1, 0,
    1, 1,
    0, 1,

    0, 0,
    1, 0,
    1, 1,
    0, 1,

    0, 0,
    1, 0,
    1, 1,
    0, 1,
])

const material: MeshStandardMaterial = new MeshStandardMaterial({
    color: '#fff',
    side: DoubleSide, //双面比较吃性能，面翻倍
    map: pictureTexture

})

const geometry: BufferGeometry = new BufferGeometry()
/*
画面拼接
// 位置与发现保持一致
geometry.setAttribute('position', new BufferAttribute(point, 3))//位置信息 3表示3个数表示一个顶点
geometry.setAttribute('normal', new BufferAttribute(point, 3))//法线信息 3表示3个数表示一个顶点
*/
geometry.setAttribute('position', new BufferAttribute(point, 3))//位置信息 3表示3个数表示一个顶点
geometry.setAttribute('normal', new BufferAttribute(normals, 3))//法线信息 3表示3个数表示一个顶点
geometry.setAttribute('uv', new BufferAttribute(uv, 2))//材质索引 3表示3个数表示一个顶点
geometry.setIndex(index)
const codeBox: Mesh = new Mesh(geometry, material)
codeBox.position.y = 10

const codeBoxNormalHelper = new VertexNormalsHelper(codeBox, 10, new Color('green').getHex())

/*
通过VertexNormalsHelper可以看出来，官方box有24个面，每个面都有自己的法线和uv，所以棱角分明

我们手搓的少了好多法线

精细化处理一下 和官方一样

原理就是给每个面都写对应点，且点不能复用

所以 代码搓模不可取

*/

codeModelList.push(
    // codeBox, codeBoxNormalHelper
    )