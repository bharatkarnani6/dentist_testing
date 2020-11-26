
 var h = document.querySelector('h1');
 var p = h.getBoundingClientRect();
 var c = document.querySelector('.cursor2');

 document.body.onmousemove = function (e) {
     /*Adjust the cursor position*/
     c.style.left = e.clientX + 'px';
     c.style.top = e.clientY + 'px';
     /*Adjust the clip-path*/
     h.style.setProperty('--x', (e.clientX - p.top) + 'px');
     h.style.setProperty('--y', (e.clientY - p.left) + 'px');
 }
 
var img = document.querySelector('img');
var test = img.getBoundingClientRect();
let cr = document.querySelector('.cursor');

window.addEventListener('mousemove',(e)=>{
    cr.style.left = e.pageX + 'px';
    cr.style.top = e.pageY + 'px';

    img.style.setProperty('--x', (e.clientX - test.top) + 'px');
    img.style.setProperty('--y', (e.clientY - test.left) + 'px');
})

