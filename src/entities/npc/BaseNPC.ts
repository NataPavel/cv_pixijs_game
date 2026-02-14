import { Container, Graphics, Text } from "pixi.js";
import { entityParameterType } from "../types/EntityParametersType";
import { GameUtils } from "../../common/GameUtils";

export class BaseNPC extends Container{
    protected npcName: string;
    protected npcTexture: string;

    protected interactionKey: string = "KeyE";
    protected interactionKeyText = new Text({
        text: 'Press E to interact',
        alpha: 0
    });

    protected npcWidth: number = 50;
    protected npcHeight: number = 50;

    constructor(npcName: string, npcTexture: string){
        super();

        this.npcName = npcName;
        this.npcTexture = npcTexture;

        this.init();
    }

    protected init(){
        let testNPC = new Graphics().rect(0, 0, 50, 50).fill("254F22");
        this.addChild(testNPC);

        const npcNameTextToDisplay = new Text({
            text: this.npcName
        })
        npcNameTextToDisplay.x -= 55;
        npcNameTextToDisplay.y -= 25;

        this.addChild(npcNameTextToDisplay);
        this.addChild(this.interactionKeyText);

        window.addEventListener('keydown', this.onInteractionKeyPressed.bind(this));
    }

    // on interation with player should display speach bubble
    protected onInteractionKeyPressed(event: any){
        if(event.code === this.interactionKey){
            // show npc's speach
            // '...' - by default
        }
    }

    public showInteractionKey(){
        this.interactionKeyText.alpha = 1;
    }

    public hideInteractionKey(){
        this.interactionKeyText.alpha = 0;
    }

    public getNPCParameters(): entityParameterType{
        return {
            x: this.x,
            y: this.y,
            width: this.npcWidth,
            height: this.npcHeight
        };
    }

    public destroy() {}

    public update(){
    }
}