import { Container } from "pixi.js";

export class Player extends Container {
    protected playerSpeed: number = 7;

    protected leftKey: Array<string> = ["ArrowLeft", "a", "A"];
    protected rightKey: Array<string> = ["ArrowRight", "d", "D"];
    protected downKey: Array<string> = ["ArrowDown", "s", "S"];
    protected upKey: Array<string> = ["ArrowUp", "w", "W"];

    protected isLeftKeyPressed: boolean = false;
    protected isRightKeyPressed: boolean = false;
    protected isDownKeyPressed: boolean = false;
    protected isUpKeyPressed: boolean = false;

    protected playerTexture: any;

    constructor(playerTexture: any) {
        super();

        this.playerTexture = playerTexture;

        window.addEventListener('onKeyDown', this.onKeyDown.bind(this));
        window.addEventListener('onKeyUp', this.onKeyDown.bind(this));
    }

    protected onKeyDown(event: any) {
        this.handleKey(event, true);
    }

    protected onKeyUp(event: any){
        this.handleKey(event, false);
    }

    protected handleKey(event: any, isPressed: boolean){
        if (this.leftKey.includes(event)) {
            this.isLeftKeyPressed = isPressed;
        } else if (this.rightKey.includes(event)) {
            this.isRightKeyPressed = isPressed;
        } else if (this.downKey.includes(event)) {
            this.isDownKeyPressed = isPressed;
        } else if (this.upKey.includes(event)) {
            this.isUpKeyPressed = isPressed;
        }
    }
}