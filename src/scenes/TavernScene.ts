import { GameUtils } from "../common/GameUtils";
import { BaseScene } from "./BaseScene";

export class TavernScene extends BaseScene{
    constructor(playerTexture: any, backgroundTexture: any){
        super(playerTexture, backgroundTexture);
    }

    protected init(): void {
        super.init();

        this._playerPositionX = GameUtils.appWidth / 2;
        this._playerPositionY = GameUtils.appHeight - GameUtils.playerSizeHeight;

        this._player.x = this._playerPositionX;
        this._player.y = this._playerPositionY;
    }
}