
import { DoubleSide, Group, Mesh, MeshStandardMaterial, PlaneGeometry, Sprite, SpriteMaterial } from 'three'
import { framePromise } from './TLoadModel'
import { pictureTexture, pictureTextureList, tipsTexture, tipsTextureList } from './TTexture'
import pictureConfig from "../json/pictures.json";
import { DefauleLoaderManager } from './TLoaderManager';


export const groupProimes = new Promise<Group>((resolve, reject) => {

    const group = new Group()

    // 图片
    const picture: Mesh = new Mesh(
        new PlaneGeometry(192, 108),
        new MeshStandardMaterial({
            map: pictureTexture,
            side: DoubleSide
        })
    )
    picture.position.y = 0
    picture.scale.set(0.16, 0.16, 0.16)
    group.add(picture)


    // 标签
    const tips: Mesh = new Mesh(
        new PlaneGeometry(16, 9),
        new MeshStandardMaterial({
            map: tipsTexture,
            side: DoubleSide
        })
    )
    group.add(tips)
    tips.scale.set(0.3, 0.3, 0.3)
    tips.position.set(-10, -7, 0.05)
    // tips.onBeforeRender=(render,scene,camera)=>{
    //     tips.lookAt(camera.position)
    // }
    // 还有个afterRender

    // 精灵
    const spriteTips: Sprite = new Sprite(new SpriteMaterial({
        map: tipsTexture,
        sizeAttenuation: false,//固定尺寸，不随相机缩放改变
        depthWrite: false,
        depthTest: false,//这两项是关闭深度测试，将他做成类似html的效果
    }))
    group.add(spriteTips)
    spriteTips.scale.set(0.3, 0.3, 0.3)
    spriteTips.position.set(-10, 0, 15)
    spriteTips.scale.set(0.048, 0.027, 1)


    framePromise.then(frame => {
        // 相框
        group.add(frame)
        group.position.y = 50
        group.position.z = 0
        resolve(group)
    }).catch(err => {
        reject(err);
    })
})

// 通过json配置文件批量导入的相框和铭牌展示组
export const groupListPromise = new Promise<Group[]>((resolve, reject) => {
    DefauleLoaderManager.addEventListener('loaded',(event)=>{
        const sourcecMap = event.sourceMap
        const frame = sourcecMap['frame.obj']
        const groupList: Group[] = []
        let y = 90
        pictureConfig.forEach((item, i, arr) => {
            // const pictureTexture = pictureTextureList[i]
            const pictureTexture = sourcecMap[`${item.url}`]
            const tipsTexture = tipsTextureList[i]

            const group: Group = new Group()

            // 图片
            const picture: Mesh = new Mesh(
                new PlaneGeometry(192, 108),
                new MeshStandardMaterial({
                    map: pictureTexture,
                    side: DoubleSide
                })
            )
            picture.scale.set(0.16, 0.16, 0.16)
            group.add(picture)


            // 标签
            const tips: Mesh = new Mesh(
                new PlaneGeometry(16, 9),
                new MeshStandardMaterial({
                    map: tipsTexture,
                    side: DoubleSide
                })
            )
            group.add(tips)
            tips.scale.set(0.3, 0.3, 0.3)
            tips.position.set(-10, -7, 0.05)

            // 相框
            const newFrame = frame.clone()
            group.add(newFrame)
            group.position.x = -80 + 40*(i%5)
            // 换行
            if(i%5==0&&i!=0) y-=20
            group.position.y = y
            group.position.z = 0

            groupList.push(group)
        })
        resolve(groupList)
    })
    /*
    framePromise.then(frame => {
        const groupList: Group[] = []
        let y = 90
        pictureConfig.forEach((item, i, arr) => {
            

            const pictureTexture = pictureTextureList[i]
            const tipsTexture = tipsTextureList[i]

            const group: Group = new Group()

            // 图片
            const picture: Mesh = new Mesh(
                new PlaneGeometry(192, 108),
                new MeshStandardMaterial({
                    map: pictureTexture,
                    side: DoubleSide
                })
            )
            picture.scale.set(0.16, 0.16, 0.16)
            group.add(picture)


            // 标签
            const tips: Mesh = new Mesh(
                new PlaneGeometry(16, 9),
                new MeshStandardMaterial({
                    map: tipsTexture,
                    side: DoubleSide
                })
            )
            group.add(tips)
            tips.scale.set(0.3, 0.3, 0.3)
            tips.position.set(-10, -7, 0.05)

            // 相框
            const newFrame = frame.clone()
            group.add(newFrame)
            group.position.x = -80 + 40*(i%5)
            // 换行
            console.log(i%5);
            
            if(i%5==0&&i!=0) y-=20
            group.position.y = y
            group.position.z = 0

            groupList.push(group)
        })
        resolve(groupList)

    }).catch(err => {
        reject(err)
    })
    */
})