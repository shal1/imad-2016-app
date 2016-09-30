console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'Hello and welcome';

var img = document.getElementById('madi');
var marginRight = 0;
function moveLeft (){
    marginRight = marginRight + 3;
    img.style.marginRight = marginRight + 'px';
}
img.onclick=function() {
    var interval = setInterval(moveLeft,50);
    
};
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    counter= counter + 1;
    var span = document.getElementById('count');
    span.innerHTML =counter.toString();
};