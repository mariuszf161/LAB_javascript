document.addEventListener('DOMContentLoaded', appStart)

let canvas
let ctx

function appStart() {
    canvas = document.querySelector('#canvas')
    document
        .querySelector('#darken')
        .addEventListener('click', () => darkenFilter())
    document
        .querySelector('#light')
        .addEventListener('click', () => lightFilter())
    document
        .querySelector('#blur')
        .addEventListener('click', () => blurFilter())
    ctx = canvas.getContext('2d')
    //ctx.rect(50,50,300,200)
    //ctx.fill()
    //ctx.arc(500,500,50,0,2*Math.PI)
    //ctx.stroke()
    drawImage()
}
function drawImage() {
    const image = new Image()
    image.src = "photo.jpg"
    image.addEventListener('load' ,() => {
        ctx.drawImage(image, 0 ,0)  
    })
}
function darkenFilter(amount = 30){
    const canvasData = ctx.getImageData(0, 0, 500, 300)    
    for( let i = 0 ; i < canvasData.data.length; i+=4){
        canvasData.data[i] -=amount
        canvasData.data[i+1] -=amount
        canvasData.data[i+2] -=amount
        //canvasData.data[i+3] -=amount
    }
    ctx.putImageData(canvasData, 0, 0)    
}

function lightFilter(amount = 30){
    const canvasData = ctx.getImageData(0, 0, 500, 300)    
    for( let i = 0 ; i < canvasData.data.length; i+=4){
        canvasData.data[i] -=amount
        canvasData.data[i+1] -=amount
        canvasData.data[i+2] -=amount
        canvasData.data[i+3] -=amount
        canvasData.data[i+4] -=amount 
    }
    ctx.putImageData(canvasData, 0, 0)    
}

function blurFilter(amount = 30){
    const canvasData = ctx.getImageData(0, 0, 500, 300)
    for(let i = 0; i < canvasData.data.length; i+=4){
        canvasData.data[i*2] -=amount
    }
    ctx.putImageData(canvasData, 0, 0)
}
