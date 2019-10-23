document.addEventListener('DOMContentLoaded', appStart)
let canvas
let myPs

function appStart() {
    //canvas = document.querySelector('#canvas')
    myPs = new Photoshop('canvas')

    // canvas.addEventListener('touchstart', onTouchStart)
    // canvas.addEventListener('touchend', onTouchEnd)
    // canvas.addEventListener('touchmove', onTouchMove)
    document
        .querySelector('#squareBtn')
        .addEventListener('touchstart', () =>{
           // myPs.brushShape = new Brush('square')
            myPs.setBrush('square')
        })
    document
        .querySelector('#circleBtn')
        .addEventListener('touchstart', () =>{
            //myPs.brushShape = new Brush('circle')
            myPs.setBrush('circle')
        })    
    
}



//function onTouchStart(e){}

//function onTouchEnd(e){}