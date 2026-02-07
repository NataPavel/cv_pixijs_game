import { Container, Graphics } from "pixi.js";
import { GameUtils } from "../../common/GameUtils";

export class Player extends Container {
    protected playerSpeed: number = 8;
    protected playerTexture: any;
    protected playerSizeWidth!: number;
    protected playerSizeHeight!: number;

    protected leftKey: Array<string> = ["ArrowLeft", "KeyA"];
    protected rightKey: Array<string> = ["ArrowRight", "KeyD"];
    protected downKey: Array<string> = ["ArrowDown", "KeyS"];
    protected upKey: Array<string> = ["ArrowUp", "KeyW"];

    protected isLeftKeyPressed: boolean = false;
    protected isRightKeyPressed: boolean = false;
    protected isDownKeyPressed: boolean = false;
    protected isUpKeyPressed: boolean = false;

    protected testPlayer: any;

    constructor(playerTexture: any) {
        super();

        this.playerTexture = playerTexture;
        
        this.init();
        
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    protected test(event:any){
        console.log(event);
    }

    protected init(){
        this.playerSizeWidth = GameUtils.playerSizeWidth;
        this.playerSizeHeight = GameUtils.playerSizeHeight;

        this.testPlayer = new Graphics()
            .rect(0, 0, this.playerSizeWidth, this.playerSizeHeight)
            .fill("09637e");
            
        this.addChild(this.testPlayer);

        // let circleCenterForDebug = new Graphics().circle(0, 0, 10).fill("09637e");
        // this.addChild(circleCenterForDebug);
    }

    protected onKeyDown(event: any) {
        this.handleKey(event, true);
    }

    protected onKeyUp(event: any){
        this.handleKey(event, false);
    }

    protected handleKey(event: any, isPressed: boolean){
        if(!event.code){
            return;
        }
        
        if (this.leftKey.includes(event.code)) {
            this.isLeftKeyPressed = isPressed;
        } else if (this.rightKey.includes(event.code)) {
            this.isRightKeyPressed = isPressed;
        } else if (this.downKey.includes(event.code)) {
            this.isDownKeyPressed = isPressed;
        } else if (this.upKey.includes(event.code)) {
            this.isUpKeyPressed = isPressed;
        }
    }

    public update(){
        if(this.isLeftKeyPressed && this.x > 0){
            console.log("Left key pressed");
            this.x -= this.playerSpeed;
        } 
        if(this.isRightKeyPressed && this.x < GameUtils.appWidth - this.playerSizeWidth){
            console.log("Right key pressed");
            this.x += this.playerSpeed;
        } 
        if(this.isUpKeyPressed && this.y > 0){
            console.log("Up key pressed");
            this.y -= this.playerSpeed;
        } 
        if(this.isDownKeyPressed && this.y< GameUtils.appHeight - this.playerSizeHeight){
            console.log("Down key pressed");
            this.y += this.playerSpeed;
        }
    }

    public destroy(){}
}