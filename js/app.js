/* 1. Dropdown */

var bar = document.querySelector("ul").children[0];
var dropdown = document.querySelector(".dropdown");
// console.dir(bar);

bar.addEventListener('mouseover', function () {
    dropdown.style.display = 'block';
});
bar.addEventListener('mouseout', function () {
    dropdown.style.display = 'none';
});


/* 2. Bloki z obrazkami chowanie bloku z nazwą*/

var whiteChair = document.querySelector('.ad_1');
var ornament = document.querySelector(".ornament_1");
var text = document.querySelector(".ad_text_1");

whiteChair.addEventListener('mouseover', function () {
    console.dir(this);
    ornament.style.display = 'none';
    text.style.display = 'none';
});
whiteChair.addEventListener('mouseout', function () {
    ornament.style.display = 'block';
    text.style.display = 'block';
});

var child = document.querySelector('.ad_2');
var ornament2 = document.querySelector(".ornament_2");
var text2 = document.querySelector(".ad_text_2");

child.addEventListener('mouseover', function () {
    console.dir(this);
    ornament2.style.display = 'none';
    text2.style.display = 'none';
});
child.addEventListener('mouseout', function () {
    ornament2.style.display = 'block';
    text2.style.display = 'block';
});

// 3. Slajder

document.addEventListener("DOMContentLoaded", function () {
    var next = document.querySelector('.slider_right'),
        prev = document.querySelector('.slider_left'),
        allFoto = document.querySelectorAll('.banner_foto'),
        indexOfImage = 0;
    console.dir(allFoto[0]);
    allFoto[0].children[indexOfImage].style.display = 'inline-block';
    next.addEventListener('click', function (e) {
        allFoto[0].children[indexOfImage].style.display = 'none';
        if (indexOfImage === allFoto[0].children.length - 1) {
            indexOfImage = 0;
            allFoto[0].children[indexOfImage].style.display = 'inline-block';
        }
        else {
            indexOfImage++;
            allFoto[0].children[indexOfImage].style.display = 'inline-block';
        }
    });
    prev.addEventListener('click', function (e) {
        allFoto[0].children[indexOfImage].style.display = 'none';
        if (indexOfImage === 0) {
            indexOfImage = allFoto[0].children.length - 1;
            allFoto[0].children[indexOfImage].style.display = 'inline-block';
        } else {
            indexOfImage--;
            allFoto[0].children[indexOfImage].style.display = 'inline-block';
        }
    });
});
