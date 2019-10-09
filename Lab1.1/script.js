document.addEventListener('DOMContentLoaded', appStart) //ładownie el strony
let btn, box
function appStart() {
    btn = document.querySelector('#actionbtn')
    box = document.querySelector('#box')
    btn.addEventListener('click', btnClick)
}
let counterHandler  
function btnClick(e){
    // console.log('btn kliknety')          
    box.classList.toggle('green')
    counterHandler = setInterval(
        wypiszliczbe,
        1000
    )
    for (let i=0; i<10; i++) {
        box.innerHTML += i + '<br>'
    }
}
let licznik = 1
function wypiszliczbe() {
    
    box.innerHTML += licznik + '<br>'
    licznik++
    if (licznik===11){
        clearInterval(counterHandler)
    }
}


