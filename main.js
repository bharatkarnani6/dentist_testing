let c = document.querySelector('.cursor');
let h = document.querySelectorAll('h1')[0]

window.addEventListener('mouseover',c);

window.addEventListener('mousemove',(e)=>{
    c.style.left = e.pageX + 'px';
    c.style.top = e.pageY + 'px';
})


// document.body.onmousemove = function (e) {
//     /*Adjust the cursor position*/
//     c.style.left = e.clientX + 'px';
//     c.style.top = e.clientY + 'px';
//     /*Adjust the clip-path*/
//     h.style.setProperty('--x', (e.clientX - p.top) + 'px');
//     h.style.setProperty('--y', (e.clientY - p.left) + 'px');
// }



