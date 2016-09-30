console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'Hello and welcome';

var img = document.getElementById('madi');
var marginRight = 0;
function moveLeft (){
    marginRight = marginRight + 10;
    img.style.marginRight = marginRight + px;
}
img.onclick=function() {
    var interval = setInterval(moveLeft,200);
    
};