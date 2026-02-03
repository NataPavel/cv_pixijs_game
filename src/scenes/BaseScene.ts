import { Container } from "pixi.js";
import { Player } from "../entities/player/Player";

export class BaseScene extends Container{
    protected _backgroundTexture: any;
    protected _playerTexture: any;
    protected _player!: Player;

    constructor(playerTexture: any, backgroundTexture: any){
        super();
        this._playerTexture = playerTexture;
        this._backgroundTexture = backgroundTexture;

        this.init();
    }

    protected init(){
        this._player = new Player(this._playerTexture);
    }

    public update(){
        this._player.update();
    }

    public destroy(){}
}