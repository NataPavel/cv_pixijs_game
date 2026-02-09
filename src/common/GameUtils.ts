/*
    Class which contains variables 
    that every class can use
*/
export class GameUtils{
    public static appWidth: number;
    public static appHeight: number;

    public static playerSizeHeight: number;
    public static playerSizeWidth: number;

    public static interactionRadius: number = 10;

    // where obj - it anything besides player
    public static isInteraction(objX: number, objY: number, playerX: number, playerY: number): boolean{
        return false;
    }

    public static isCollision(obj: any, player: any): boolean{
        return (
            obj.x < player.x + player.width &&
            obj.x + obj.width > player.x &&
            obj.y < player.y + player.height &&
            obj.y + obj.height > player.y
        );
    }
}