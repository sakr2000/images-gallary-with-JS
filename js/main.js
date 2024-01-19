/*
=====3 parts=============
-Part1
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.getElementsByName()
document.querySelectorAll('.demo .test h1')//10h1
document.querySelector('.demo .test h1')//h1
-Part2
elm,event,action
i====click==
elm.style.property
elm.style.cssText
elm.classList.add('test'),remove,replace
-part3
addEventListener
*/

var Close = document.getElementById('close');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var boxContainer = document.getElementById('boxContainer');
var boxItem = document.getElementById('boxItem');
var img = Array.from(document.querySelectorAll('.item img'));
var index = 0;
Close.addEventListener('click', function() {
    boxContainer.style.display = "none";
});
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function(e) {
        boxContainer.style.display = "flex";
        boxItem.style.backgroundImage = `url('${e.target.src}')`;
        index = img.indexOf(e.target);
    })
}

function preImg() {
    index--;
    if (index == -1)
        index = img.length - 1;
    boxItem.style.backgroundImage = `url('${img[index].src}')`;
}

function Nextimg() {
    index++;
    if (index == img.length)
        index = 0;
    boxItem.style.backgroundImage = `url('${img[index].src}')`;
}
next.addEventListener('click', Nextimg);
prev.addEventListener('click', preImg);

document.addEventListener('keyup', function(e) {
    if (e.key == "ArrowRight") {
        Nextimg();
    } else if (e.key == "ArrowLeft") {
        preImg();
    } else if (e.key == "Escape") {
        boxContainer.style.display = "none";
    }
})