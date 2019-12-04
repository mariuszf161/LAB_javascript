
class Tile{
    constructor(type){
        if(!type){
            throw new Error('Yoy must provide a Title Type')
        }
        this.type = name
        this.setSpritePosition(type)
    }
    setSpritePosition(){
        this.spriteXPos = TilesProperties[type].spriteXPos
        this.spriteYPos = TilesProperties[type].spriteYPos
    }
    
}