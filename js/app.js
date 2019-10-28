const imgFade = document.querySelector('.img-fade');
//Side-Nav
const sideNav = document.querySelector('#slide-out');
//Buttons
const btnSchool1 = document.querySelector('#btn1');
const btnSchool2 = document.querySelector('#btn2');
const btnSchool3 = document.querySelector('#btn3');
//Footer
const foot = document.querySelector('#foot');
//Material Icons
const icon1 = document.querySelector('#icon1');
const icon2 = document.querySelector('#icon2');
const icon3 = document.querySelector('#icon3');
const icon4 = document.querySelector('#icon4');
//Button Color settings
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const purple = document.querySelector('#purple');
const orange = document.querySelector('#orange');
const black = document.querySelector('#black');

//Others
const btnLarge = document.querySelector('.btn-large')
const backDrop = document.querySelector('.backdrop');

//Function for the color changer
const changeColor = (removeClass, classColor) => {
    sideNav.classList.remove(removeClass);
    sideNav.classList.add(classColor);
    btnSchool1.classList.remove(removeClass);
    btnSchool1.classList.add(classColor);
    btnSchool2.classList.remove(removeClass);
    btnSchool2.classList.add(classColor);
    btnSchool3.classList.remove(removeClass);
    btnSchool3.classList.add(classColor);
    foot.classList.remove(removeClass);
    foot.classList.add(classColor);
    btnLarge.classList.remove(removeClass);
    btnLarge.classList.add(classColor);
}


//addEventListeners
blue.addEventListener('click', e => {
    e.preventDefault();
    if(sideNav.classList.contains('green')){
        changeColor('green','blue');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('red')){
        changeColor('red','blue');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('yellow')){
        changeColor('yellow','blue');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('purple')){
        changeColor('purple','blue');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('orange')){
        changeColor('orange','blue');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else {
        changeColor('black','blue');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    
});

green.addEventListener('click', e => {
    e.preventDefault();
    
    if(sideNav.classList.contains('blue')){
        changeColor('blue','green');
       
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('red')){
        changeColor('red','green');
        
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('yellow')){
        changeColor('yellow','green');
        
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('purple')){
        changeColor('purple','green');
        
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('orange')){
        changeColor('orange','green');
        
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else {
        
        changeColor('black','green');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    
});
red.addEventListener('click', e => {
    e.preventDefault();
    if(sideNav.classList.contains('blue')){
        changeColor('blue','red');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('green')){
        changeColor('green','red');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('yellow')){
        changeColor('yellow','red');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('purple')){
        changeColor('purple','red');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('orange')){
        changeColor('orange','red');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else {
        changeColor('black','red');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    
});
yellow.addEventListener('click', e => {
    e.preventDefault();
    if(sideNav.classList.contains('blue')){
        changeColor('blue','yellow');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
        sideNav.classList.add('darken-1')
    }
    else if(sideNav.classList.contains('green')){
        changeColor('green','yellow');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
        sideNav.classList.add('darken-1')
    }
    else if(sideNav.classList.contains('red')){
        changeColor('red','yellow');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
        sideNav.classList.add('darken-1')
    }
    else if(sideNav.classList.contains('purple')){
        changeColor('purple','yellow');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
        sideNav.classList.add('darken-1')
    }
    else if(sideNav.classList.contains('orange')){
        changeColor('orange','yellow');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
        sideNav.classList.add('darken-1')
    }
    else {
        changeColor('black','yellow');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
        sideNav.classList.add('darken-1')
    }
    
});
purple.addEventListener('click', e => {
    e.preventDefault();
    if(sideNav.classList.contains('blue')){
        changeColor('blue','purple');
    }
    else if(sideNav.classList.contains('green')){
        changeColor('green','purple');
    }
    else if(sideNav.classList.contains('red')){
        changeColor('red','purple');
    }
    else if(sideNav.classList.contains('yellow')){
        changeColor('yellow','purple');
    }
    else if(sideNav.classList.contains('orange')){
        changeColor('orange','purple');
    }
    else {
        changeColor('black','purple');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    
});
orange.addEventListener('click', e => {
    e.preventDefault();
    if(sideNav.classList.contains('blue')){
        changeColor('blue','orange');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('green')){
        changeColor('green','orange');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('red')){
        changeColor('red','orange');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('yellow')){
        changeColor('yellow','orange');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else if(sideNav.classList.contains('purple')){
        changeColor('purple','orange');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    else {
        changeColor('black','orange');
        icon1.classList.remove('white-text');
        icon2.classList.remove('white-text');
        icon3.classList.remove('white-text');
        icon4.classList.remove('white-text');
    }
    
});
black.addEventListener('click', e => {
    e.preventDefault();
    if(sideNav.classList.contains('blue')){
        changeColor('blue','black');
        icon1.classList.add('white-text');
        icon2.classList.add('white-text');
        icon3.classList.add('white-text');
        icon4.classList.add('white-text');
    }
    else if(sideNav.classList.contains('green')){
        changeColor('green','black');
        icon1.classList.add('white-text');
        icon2.classList.add('white-text');
        icon3.classList.add('white-text');
        icon4.classList.add('white-text');
    }
    else if(sideNav.classList.contains('red')){
        changeColor('red','black');
        icon1.classList.add('white-text');
        icon2.classList.add('white-text');
        icon3.classList.add('white-text');
        icon4.classList.add('white-text');
    }
    else if(sideNav.classList.contains('yellow')){
        changeColor('yellow','black');
        icon1.classList.add('white-text');
        icon2.classList.add('white-text');
        icon3.classList.add('white-text');
        icon4.classList.add('white-text');
    }
    else if(sideNav.classList.contains('purple')){
        changeColor('purple','black');
        icon1.classList.add('white-text');
        icon2.classList.add('white-text');
        icon3.classList.add('white-text');
        icon4.classList.add('white-text');
    }
    else {
        changeColor('orange','black');
        icon1.classList.add('white-text');
        icon2.classList.add('white-text');
        icon3.classList.add('white-text');
        icon4.classList.add('white-text');
    }
    
});
// const icon1 = document.querySelector('#icon1');
// const icon2 = document.querySelector('#icon2');
// const icon3 = document.querySelector('#icon3');
// const icon4 = document.querySelector('#icon4');


setInterval(_ => {
    
    imgFade.style.display = 'block';
 
}, 3600);




