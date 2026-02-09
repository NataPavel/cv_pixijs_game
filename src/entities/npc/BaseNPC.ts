import { Container, Graphics, Text } from "pixi.js";

export class BaseNPC extends Container{
    protected npcName: string;
    protected npcTexture: string;
    protected interactionKey: string = "KeyE";

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

        window.addEventListener('keydown', this.onInteractionKeyPressed.bind(this));
    }

    // on interation with player should display speach bubble
    protected onInteractionKeyPressed(event: any){
        if(event.code === this.interactionKey){
            // show npc's speach
            // '...' - by default
        }
    }

    protected setPlayerPosition(){}

    public destroy() {}

    public update(){}
}