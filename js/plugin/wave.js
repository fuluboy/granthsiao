var self=window;!function(e){function t(){var e=document.querySelector("body");(u=document.createElement("canvas")).width=innerWidth,u.height=innerHeight,u.style.position="absolute",u.style.top=0,u.style.bottom=0,u.style.left=0,u.style.right=0,u.style.zIndex=-1,u.style.cursor="n-resize",e.appendChild(u),function(){return u.getContext&&u.getContext("2d")}?(s=u.getContext("2d"),"ontouchmove"in window?(u.addEventListener("touchstart",a,!1),u.addEventListener("touchend",h,!1),u.addEventListener("touchmove",d,!1)):(u.addEventListener("mousedown",i,!1),u.addEventListener("mouseup",o,!1),u.addEventListener("mousemove",r,!1)),window.onresize=n,function(){for(var e=Math.round(u.width/170),t=0,n=e;t<n;t++)g.push({x:u.width*t/(n-1),y:.5*u.height-20,vy:10*Math.random(),depth:.5*u.height});for(var t=0,n=e;t<n;t++)f.push({x:u.width*t/(n-1),y:.5*u.height,vy:10*Math.random(),depth:.5*u.height});for(var t=0,n=e;t<n;t++)c.push({x:u.width*t/(n-1),y:.5*u.height+20,vy:10*Math.random(),depth:.5*u.height});l()}()):console.error("Please, update your browser for seeing this animation.")}function n(){u.width=window.innerWidth,u.height=window.innerHeight}function i(e){e.preventDefault(),x=!0}function o(e){e.preventDefault(),x=!1}function r(e){e.preventDefault(),w.x=e.pageX-u.offsetLeft,w.y=e.pageY-u.offsetTop,interactive&&(x=interactive=!1)}function a(e){e.preventDefault(),x=!0}function h(e){e.preventDefault(),x=!1}function d(e){e.preventDefault(),w.x=e.touches[0].pageX-u.offsetLeft,w.y=e.touches[0].pageY-u.offsetTop,interactive&&(x=interactive=!1)}function l(){v(),function(){var e;.99,e=interactive?Math.round(u.width/4.5):280,interactive&&(m+=.05,w.x=.5*u.width+Math.sin(m)*u.width*.2,w.y=.5*u.height-50+Math.sin(m)*u.height*.2);for(var t=0;t<(g.length||f.length||c.length);t++){var n=g[t],i=f[t],o=c[t];n.y+=n.vy,i.y+=i.vy,o.y+=o.vy,n.vy+=(n.depth-n.y)*(interactive?.03:.009),i.vy+=(i.depth-i.y)*(interactive?.02:.008),o.vy+=(o.depth-o.y)*(interactive?.01:.007),n.vy*=.99,i.vy*=.99,o.vy*=.99,y(w,n)<e&&x&&(n.vy+=(w.y-n.y)*(interactive?.03:.009)),y(w,i)<e&&x&&(i.vy+=(w.y-i.y)*(interactive?.02:.008)),y(w,o)<e&&x&&(o.vy+=(w.y-o.y)*(interactive?.01:.007))}}(),function(){for(var e=0;e<(g.length||f.length||c.length);e++){v(),s.save(),s.globalAlpha=.5,s.fillStyle="#f98f00",s.beginPath(),s.moveTo(g[0].x,g[0].y);for(i=1;i<g.length-2;i++){var t=(g[i].x+g[i+1].x)/2,n=(g[i].y+g[i+1].y)/2;s.quadraticCurveTo(g[i].x,g[i].y,t,n)}s.quadraticCurveTo(g[g.length-2].x,g[g.length-2].y,g[g.length-1].x,g[g.length-1].y),s.lineTo(u.width,u.height),s.lineTo(0,u.height),s.lineTo(0,g[0].y),s.fill(),s.restore(),s.save(),s.globalAlpha=.5,s.fillStyle="#00fddc",s.beginPath(),s.moveTo(f[0].x,f[0].y);for(i=1;i<f.length-2;i++){var t=(f[i].x+f[i+1].x)/2,n=(f[i].y+f[i+1].y)/2;s.quadraticCurveTo(f[i].x,f[i].y,t,n)}s.quadraticCurveTo(f[f.length-2].x,f[f.length-2].y,f[f.length-1].x,f[f.length-1].y),s.lineTo(u.width,u.height),s.lineTo(0,u.height),s.lineTo(0,f[0].y),s.fill(),s.restore(),s.save(),s.globalAlpha=.5,s.fillStyle="#05cdf8",s.beginPath(),s.moveTo(c[0].x,c[0].y);for(var i=1;i<c.length-2;i++){var t=(c[i].x+c[i+1].x)/2,n=(c[i].y+c[i+1].y)/2;s.quadraticCurveTo(c[i].x,c[i].y,t,n)}s.quadraticCurveTo(c[c.length-2].x,c[c.length-2].y,c[c.length-1].x,c[c.length-1].y),s.lineTo(u.width,u.height),s.lineTo(0,u.height),s.lineTo(0,c[0].y),s.fill(),s.restore()}}(),requestAnimFrame(l)}function v(){s.clearRect(0,0,innerWidth,innerHeight)}function y(e,t){var n=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y);return Math.sqrt(n*n+i*i)}var u,s,g=[],f=[],c=[],w={x:.5*innerWidth,y:.5*innerHeight},m=0,x=interactive=!0;window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.addEventListener?window.addEventListener("load",t,!1):window.onload=t}();