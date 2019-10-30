// Your code goes here
const NavMouseOv = document.querySelectorAll('a');
NavMouseOv.forEach(item => {
    item.addEventListener('mouseover', e => {
    item.style.color = 'grey';
    });
});


//----------------------------------------------
const NavMouseOut = document.querySelectorAll('a');
NavMouseOut.forEach(item => {
    item.addEventListener('mouseout', e => {
    item.style.color = 'black';
    });
});

//--------------added prevents navigation during TL meeting----------------
const stopNavigation = document.querySelectorAll('nav a');
stopNavigation.forEach(items =>{
    items.addEventListener('click', e => {
        e.preventDefault();
    })
})

//--------------------added right click img during TL meeting -----------

const selectAlert = document.querySelector('.img-fluid');
selectAlert.addEventListener('contextmenu', e => {
    e.preventDefault();
    
    alert("picture of a boat");
});
//-------------------added input during TL meeting

const input = document.createElement('input')

input.setAttribute('type', 'text')
input.setAttribute('value', 'Please Input Name');
input.style.backgroundColor = 'brown';
input.style.height = "50px";
input.style.marginLeft= "300px";
const containerHome = document.querySelector('.home');
containerHome.appendChild(input);
//------------- added focus during TL ---------
input.addEventListener('focus', e =>{
    // alert("thanks for the input")
    e.target.style.backgroundColor = "purple";

})
input.addEventListener('blur', event=>{
    event.target.style.backgroundColor = "blue";
});
//------------------------
const keyDown = document.querySelector('body');
keyDown.addEventListener('keypress', e => {
    if(e.keyCode === 66){
        
    }
   keyDown.style.backgroundColor = "brown";
   //keyDown.style.textContent.color = 'white';
})
//----------------------------------------------
function colorPicker(event){
    event.preventDefault();
    Picker += event.deltaY * -.01;
    if(Picker <= .1){
        Picker = "red";
    }else if (Picker >=.1){
        Picker = "blue";
    }else if(Picker >= .5){
        Picker = "green";
    }
    
    el.style.backgroundColor = Picker;
}
let Picker = 1;
const el = document.querySelector('.intro p');
el.onwheel = colorPicker
el.addEventListener('wheel', colorPicker);


//--------------------------------------------
var dragged;
const logoDrag = document.querySelectorAll('.text-content p')[0];
logoDrag.addEventListener("dragover", e => {
    e.preventDefault();
    logoDrag.style.color = "red";
})
logoDrag.addEventListener("dragenter", e => {
    e.preventDefault();
    
})
logoDrag.addEventListener("drop", e => {
    e.preventDefault();
})

// --------------------------------

window.addEventListener('load', e =>{
    console.log('page is loaded');
});
//------------------------------------------
const AdventureFocus = document.querySelectorAll('.text-content h2')[0];
AdventureFocus.addEventListener('focus', e => {
    e.target.style.backgroundColor = "green";
})
//focus doesnt work
//---------------------------------------
const clickDiv = document.querySelectorAll('.text-content');
clickDiv.forEach(item=>{
    item.addEventListener('click', e => {
        item.style.backgroundColor = "yellow";
    })
})
//---------------------------------------

const bgColor = document.querySelector('body');
window.addEventListener('resize', e => {
   bgColor.style.backgroundColor = "white";
});

//-----------------------------




window.addEventListener('scroll', function(e) {
    bgColor.style.backgroundColor = 'green';
  
});

//------------------------
// const destH4 = document.querySelector('.destination h4')
// const btnDouble = document.querySelectorAll('.btn');
// btnDouble.forEach(item => {
//     item.addEventListener('dblclick', e => {
//     //item.style.backgroundColor = "purple";
//     destH4.style.fontSize = "4rem";
//     });
// })
//-----------------modified during TL meeting -------
const Dest = document.querySelectorAll('.destination');

Dest.forEach((item, index) => {
    const btn = document.querySelectorAll('.btn');
    const h4 = document.querySelectorAll('.destination h4');
    btn[index].addEventListener('dblclick', e => {
        h4[index].style.fontSize = '4rem';

    })
})

//----------------------------------
