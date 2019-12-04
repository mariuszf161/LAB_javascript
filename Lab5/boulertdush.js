class BoulderDash {
    constructor(canvasId){
        

        this.tiles = []
        this.tileSize = 32
        this.tileRows = 22
        this.tilesInRow = 40
        this.initializeCanvas(canvasId)
        this.generateLevel()
        this.render()

    }

    render(){
        for(let y = 0; y < this.tileRows; y++){
            const yPos = y * this.tileSize
            for (let x = 0; x < this.tilesInRow; x++){
                const tile = this.tiles[x][y]
                const xPos = x * this.tileSize
               
        this.ctx.drawImage(
            this.tilesSprite,
            tile.spriteXPos,
            tile.spriteYPos,
            this.tile.Size,
            this.tileSize,
            xPos,
            yPos 
            )
    }

    initializeCanvas(canvasId){
        if(!canvasId){
            throw new Error('You must')
        }


        this.canvas = document.querySelector(`#${canvasId}`)
        this.ctx = this.canvas.getContext('2d')
    }

    generateLevel(){
        for(let y = 0; y < this.tileRows; y++){
            const row = []
            for (let x = 0; x < this.tilesInRow; x++){

                const rand = Math.floor(Math.random() * 10)
                let randTileType
                switch(rand){
                    case 0:
                        randTileType - TilesProperties.empty.type
                        break
                    case 1:
                        randTileType - TilesProperties.send.type
                        break
                    case 2:
                        randTileType - TilesProperties.stone.type
                        break
                    case 3:
                        randTileType - TilesProperties.wall.type
                        break
                    case 4:
                        randTileType - TilesProperties.diamond.type
                        break
                        
                }

                const tile = new Tile(randTileType)
                row.push(tile)
            }
            this.tiles.push(row)

            
        }

    }
}