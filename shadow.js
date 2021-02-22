 // learned from Wes Bos Javascript 30- day 16 text shadow mouse move
 const body = document.querySelector('body');
 const dark = document.querySelector('.dark');
 const text = dark.querySelector('h1');
 const walk = 100;

 function shadow(e) {
     const { offsetWidth: width, offsetHeight: height } = dark;
     let { offsetX: x, offsetY: y } = e;
     if (this !== e.target) {
         x = x + e.target.offsetLeft;
         y = y + e.target.offsetTop;
     }
     const xWalk = Math.round((x / width * walk) - (walk / 2));
     const yWalk = Math.round((y / height * walk) - (walk / 2));
     text.style.textShadow = `${xWalk * -1}px ${yWalk * -1}px 4px rgba(0,0,0,0.7)`;
 }
 function flashlight(){
     let black = document.querySelector('.blackScreen');
     black.classList.toggle('blackScreen');
     let pos = document.documentElement;
 pos.addEventListener('mousemove', e => {
     pos.style.setProperty('--x', e.clientX + 'px')
     pos.style.setProperty('--y', e.clientY + 'px')
 }
 )};
 body.addEventListener('click', flashlight);

 dark.addEventListener('mousemove', shadow);