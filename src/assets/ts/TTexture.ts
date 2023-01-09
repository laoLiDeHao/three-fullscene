
import { CanvasTexture, Texture, TextureLoader } from "three";
import { TCanvasTextureEditor } from "./TCanvasEditor";
import pictureConfig from "../json/pictures.json";
// 图片配置单


const textureLoader: TextureLoader = new TextureLoader()
// 加载贴图
export const pictureTexture: Texture = textureLoader.load('image/864111291.jpg')

// 加载模型材质贴图
export const frameColorTexture: Texture = textureLoader.load('Wood060_1K-JPG/Wood060_1K_Color.jpg')
export const frameRoughnessTexture: Texture = textureLoader.load('Wood060_1K-JPG/Wood060_1K_Roughness.jpg')
export const frameDisplacementTexture: Texture = textureLoader.load('Wood060_1K-JPG/Wood060_1K_Displacement.jpg')

// canvasTexture
export const tipsTexture: Texture = new CanvasTexture(new TCanvasTextureEditor().draw(
    (cxt) => {
        cxt.fillStyle = 'yellow'
        cxt.fillRect(0, 0, 1920, 1080)

        cxt.fillStyle = 'black'
        cxt.textAlign = 'center'
        cxt.textBaseline = 'middle'
        cxt.font = '72px 微软雅黑'
        cxt.translate(256, 100)
        cxt.beginPath()
        cxt.fillText('作者：xxx', 0, 0)
        cxt.closePath()

        cxt.beginPath()
        cxt.fillText('ID：xxx', 0, 144)
        cxt.closePath()

        cxt.beginPath()
        cxt.fillText('时间：xxx', 0, 288)
        cxt.closePath()
    }
).canvas)


// 贴图组
export const pictureTextureList: Texture[] = []//照片   

export const tipsTextureList: Texture[] = []//铭牌

pictureConfig.forEach(item => {
    pictureTextureList.push(textureLoader.load(item.url))
    tipsTextureList.push(
        new CanvasTexture(new TCanvasTextureEditor().draw(
            (cxt) => {
                cxt.fillStyle = 'yellow'
                cxt.fillRect(0, 0, 1920, 1080)

                cxt.fillStyle = 'black'
                cxt.textAlign = 'center'
                cxt.textBaseline = 'middle'
                cxt.font = '50px 微软雅黑'
                cxt.translate(256, 100)
                cxt.beginPath()
                cxt.fillText(`作者:${item.author}`, 0, 0)
                cxt.closePath()

                cxt.beginPath()
                cxt.fillText(`ID:${item.id}`, 0, 144)
                cxt.closePath()

                cxt.beginPath()
                cxt.fillText(`时间:${item.date}`, 0, 288)
                cxt.closePath()
            }
        ).canvas)
    )
})