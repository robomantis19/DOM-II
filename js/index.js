
//These Two dont work
// window.addEventListener('online', (event) => {
//     console.log("You are now connected to the network.");
// });
// Dont work
// let Mybackground = document.querySelector('.container.home');
// Mybackground.addEventListener('onload', (event) => {
//     Mybackground.style.backgroundColor = "black";
//     console.log('loading');
// })
let Mybackground = document.querySelector('body');
let homeNav = document.querySelector('.main-navigation')

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    Mybackground.style.backgroundColor = "black";
    homeNav.style.backgroundColor = "black"; 
  });



// Your code goes here
let links = document.querySelectorAll('nav .nav-link'); 
Array.from(links).forEach((element) => {
    element.addEventListener('mouseover', (e) => {
        element.style.color = "green";
        e.target.addEventListener('mouseleave', () => {
            e.target.style.color = "lightGreen"; 
        })
    })
})


//did not work
let FunBus = document.querySelector('.container.nav-container .logo-heading');
let left = 10
window.addEventListener('keydown', (key) => {
    console.log(key.keyCode);
    if(key.keyCode === 39){
        //
        left += 5
        FunBus.style.marginLeft = left + "px";

    }
});

let introImg = document.querySelector('.intro img');
console.log(introImg);
introImg.addEventListener('click', (event) => {
    window.alert("hello, push a the button b to change the background to black, and g to change the text to green");
})
let home = document.querySelector('.container.home')
// let homeNav = document.querySelector('.main-navigation')
//let Mybackground = document.querySelector('body');

window.addEventListener('keyup', (key) => {
    console.log(key.keyCode);
    if(key.keyCode === 66){
        //
        home.style.backgroundColor = "black";
        homeNav.style.backgroundColor = "black";
        Mybackground.style.backgroundColor = 'black'; 
    }
    if(key.keyCode == 87){

        home.style.backgroundColor = "white"; 
        homeNav.style.backgroundColor = "white";
    }
});

let p = document.querySelector('.container.home p')
window.addEventListener('keyup', (key) => {
    console.log(key.keyCode);
    if(key.keyCode === 71){
        //
        home.style.color = "green";
        FunBus.style.color = "green"; 
        links.style.color = "green"; 
    }
});


// Does not work.


// const allAboard = document.querySelector('.intro p'); 
// allAboard.addEventListener('select', buslog);
// function buslog(event){
//     const introH2 = document.querySelector('.intro h2'); 
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd)
//     introH2.append(`You selected: ${selection}`); 
// }


const titles = document.querySelectorAll('h2')
Array.from(titles).forEach( (element) => {
    element.addEventListener('dblclick', function(e) {
    element.style.fontSize = '4rem'; 
    e.preventDefault('select');
        e.target.addEventListener('click', function(lower) {
            e.target.style.fontSize = "3.2rem";
            e.preventDefault('select');
        });
    });
    // element.addEventListener('dbclick', function(e){
    //     element.style.fontSize = "2rem";
    // });
})

const btns = document.querySelectorAll('.destination .btn');
const h4 = document.querySelectorAll('.destination h4')
Array.from(btns).forEach((element, i) => { 
    element.addEventListener('click', (superSizeMe) => {
           element.style.color = "blue"; 
        //    Array.from(h4).forEach((item) => { 

        //    })
           const culur = ['red' , 'blue', 'yellow']
           
           h4[i].style.color = culur[i];
        
    })
})









// let destination = document.querySelectorAll('.destination');
// Array.from(destination).forEach((element ) => {
//     element.addEventListener('wheel', zoom); 
// })


//didn't work -----------------------
// function zoom(event) {
//     event.preventDefault();
  
//     scale += event.deltaY * -0.01;
  
//     // Restrict scale
//     scale = Math.min(Math.max(.125, scale), 4);
  
//     // Apply scale transform
//     el.style.transform = `scale(${scale})`;
//   }
  
//   let scale = 1;
//   const el = document.querySelector('.destination p');
//   el.onwheel = zoom;
const wheels = document.querySelectorAll('.destination p');

Array.from(wheels).forEach( (item2) => { 
    item2.addEventListener('wheel', (e) => {            
        e.target.style.transform = `scale(1.2)`; //'scale( 1 )';
        e.target.addEventListener('click', (event) => { 
            e.target.style.transform = `scale(1)`
        }) 
    })
})

