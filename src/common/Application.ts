import * as PIXI from "pixi.js"

export class Application{
    protected static app: PIXI.Application;
    
    public static async init(): Promise<void>{
        this.app = new PIXI.Application()

        await this.app.init({
            resizeTo: window,
            backgroundColor: "30364F"
            }  
        );

        this.app.canvas.style.position = "absolute";

        document.body.appendChild(this.app.canvas);
    }
}