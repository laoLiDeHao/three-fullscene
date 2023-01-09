/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-12-28 16:17:55
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-12-28 16:34:03
 * @FilePath: \three-learn\src\assets\ts\TCanvasTextureEditor.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export class TCanvasTextureEditor{
    canvas:HTMLCanvasElement 

    constructor(width:number = 512,height:number = 512,BG :string = '#fff'){
        this.canvas = document.createElement('canvas')
        this.canvas.width = width
        this.canvas.height = height
        this.canvas.style.backgroundColor = BG
    }

    draw(fun:(ctx:CanvasRenderingContext2D)=>void){
        const ctx = this.canvas.getContext('2d')
        if(ctx){
            fun(ctx)
            return this //链式调用
        }else{
            console.log('error : your browser can not support canvas 2d');
            return this
        }
        
    }


    preview (){
        const canvas = this.canvas
        canvas.style.position = 'fixed'
        canvas.style.top = ('25%')
        canvas.style.left = ('25%')
        document.body.appendChild(this.canvas)
        return this
    }
}
