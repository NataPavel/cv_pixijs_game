import { GameUtils } from "../common/GameUtils";
import { BaseNPC } from "../entities/npc/BaseNPC";
import { BaseScene } from "./BaseScene";

export class TavernScene extends BaseScene{
    protected testNPC!: BaseNPC;
    constructor(playerTexture: any, backgroundTexture: any){
        super(playerTexture, backgroundTexture);
    }

    protected init() {
        super.init();

        this.setPlayerPosition();
        this.initNPCs();
    }

    protected initNPCs() {
        this.testNPC = new BaseNPC("Rayan Gosling", "none");

        this.testNPC.x = GameUtils.appWidth / 2;
        this.testNPC.y = this.testNPC.height + 10;
        this.addChild(this.testNPC);
    }

    protected setPlayerPosition(){
        this._playerPositionX = GameUtils.appWidth / 2;
        this._playerPositionY = GameUtils.appHeight - GameUtils.playerSizeHeight;

        this._player.x = this._playerPositionX;
        this._player.y = this._playerPositionY;
    }

    public update(): void {
        super.update();

        // for test purpose only
        // let testNPCObj = {
        //     x: this.testNPC.x,
        //     y: this.testNPC.y,
        //     width: this.testNPC.width,
        //     height: this.testNPC.height
        // }

        // let playerObj = {
        //     x: this._player.x,
        //     y: this._player.y,
        //     width: this._player.width,
        //     height: this._player.height
        // }

        // if(GameUtils.isCollision(testNPCObj, playerObj)){
        //     console.log("Collision occured");
        // }
        //
    }
}