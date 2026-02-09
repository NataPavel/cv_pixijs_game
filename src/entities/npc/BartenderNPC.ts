import { BaseNPC } from "./BaseNPC";

export class BartenderNPC extends BaseNPC{
    constructor(npcName: string, npcTexture: string){
        super(npcName, npcTexture);
    }

    // override function, because here'll be custom message
    protected onInteractionKeyPressed(event: any){
        if(event.code === this.interactionKey){
            // show npc's speach
            // '...' - by default
        }
    }
}