import { extend } from "@vue/shared"
import { EventDispatcher, Loader, TextureLoader, type BaseEvent } from "three"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import pictureConfig from "../json/pictures.json";


// 管理器泛型
export interface LoadedEvent extends BaseEvent {
    sourceMap: { [key: string]: any }
}

interface processInfo {
    total: number,
    success: number,
    error: number,
    progress: number,
}

const imageLoader = new TextureLoader()

export class TLoaderManager extends EventDispatcher<LoadedEvent> {
    total: number = 0
    success: number = 0
    error: number = 0
    progress: number = 0

    loadmap: { [key: string]: Loader } = {
        jpg: imageLoader,
        png: imageLoader,
        obj: new OBJLoader(),
        mtl: new MTLLoader(),
    }

    sourcecMap: { [key: string]: any } = {
        // url: group
        // url: imagenode
    }

    constructor() {
        super()
    }

    load(urls: string[]) {
        this.total += urls.length

        for (const url of urls) {
            const ext = url.split('.').pop()//获取文件扩展名


            // 不支持的url
            if (!ext || !this.loadmap[ext]) {
                this.error += 1
                this.dispatchProcessInfo();
                console.warn(`找不到支持的loader:${url}`);
                continue
            }

            // 避免重复加载
            if (this.sourcecMap[url]) {
                this.success += 1
                this.dispatchProcessInfo();
                continue
            }

            const loader = this.loadmap[ext]
            this.progress += 1
            loader.loadAsync(url).then(res => {
                this.sourcecMap[url] = res
                this.success += 1
                this.progress -= 1
                this.dispatchProcessInfo();
                this.dispatchLoaded()
            }).catch(err => {
                this.error += 1
                this.progress -= 1
               this.dispatchProcessInfo();
                this.dispatchLoaded()
            })
        }
    }

    // 
    private dispatchLoaded(): boolean {
        if (this.total === this.success + this.error) {
            this.dispatchEvent({
                type: 'loaded',
                sourceMap: this.sourcecMap
            })
        }
        return this.total === this.success + this.error
    }

    private dispatchProcessInfo(): processInfo {
        let info: processInfo = {
            total: this.total,
            success: this.success,
            error: this.error,
            progress: this.progress,
        }
        console.log("加载中：",info);
        return info
    }
}



export const DefauleLoaderManager = new TLoaderManager()
const urls = [
    'image/864111291.jpg',
    'Wood060_1K-JPG/Wood060_1K_Color.jpg',
    'Wood060_1K-JPG/Wood060_1K_Color.jpg',
    'Wood060_1K-JPG/Wood060_1K_Displacement.jpg',
    'frame.obj'
]
pictureConfig.forEach(ele => {
    urls.push(ele.url)
})
// console.log('urls',urls);

DefauleLoaderManager.load(urls)