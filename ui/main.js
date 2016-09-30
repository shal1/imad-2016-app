console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'Hello and welcome';

var img = document.getElementById('dino');
img.onclick=function() {
    img.style.marginRight = '80 px';
};