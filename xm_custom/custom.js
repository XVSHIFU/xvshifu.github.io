(s=>{s("<style>").text(`
    .click-effect-text {
      position: fixed;
      font-weight: bold;
      user-select: none;
      pointer-events: none;
      z-index: 9999;
      animation: floatFade 1.5s forwards;
    }
    @keyframes floatFade {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-160px);
      }
    }
    .particle {
      position: fixed;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      animation: particleMove 1s forwards;
    }
    @keyframes particleMove {
      0% {
        opacity: 1;
        transform: translate(0,0) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate(var(--x), var(--y)) scale(0);
      }
    }
  `).appendTo("head");var r=0;let l=["富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"];s(document).ready(function(){s("body").click(function(e){var t=l[r];r=(r+1)%l.length;let n=s("<span class='click-effect-text'></span>").text(t);n.css({top:e.pageY-window.pageYOffset-20,left:e.pageX,color:`rgb(${~~(255*Math.random())},${~~(255*Math.random())},${~~(255*Math.random())})`}),s("body").append(n),n.on("animationend",()=>n.remove());for(let t=0;t<8;t++){let t=s('<div class="particle"></div>');var i=2*Math.random()*Math.PI,a=30+30*Math.random(),o=Math.cos(i)*a+"px",i=Math.sin(i)*a+"px";t.css({top:e.pageY-window.pageYOffset,left:e.pageX,"--x":o,"--y":i,background:`rgb(${~~(255*Math.random())},${~~(255*Math.random())},${~~(255*Math.random())})`}),s("body").append(t),t.on("animationend",()=>t.remove())}})})})(jQuery),(()=>{function t(t){r=window.innerWidth}function e(t){if(0<t.touches.length)for(var e=0;e<t.touches.length;e++)i(t.touches[e].clientX,t.touches[e].clientY,s[Math.floor(Math.random()*s.length)])}function n(t){l.x=t.clientX,l.y=t.clientY,i(l.x,l.y,s[Math.floor(Math.random()*s.length)])}function i(t,e,n){var i=new o;i.init(t,e,n),d.push(i)}function a(){requestAnimationFrame(a);for(var t=0;t<d.length;t++)d[t].update();for(t=d.length-1;0<=t;t--)d[t].lifeSpan<0&&(d[t].die(),d.splice(t,1))}function o(){this.character="✦",this.lifeSpan=240,this.initialStyles={position:"fixed",top:"0",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"20px","will-change":"transform"},this.init=function(t,e,n){this.velocity={x:(Math.random()<.5?-1:1)*(.3*Math.random()),y:.5},this.position={x:t-10,y:e-20},this.initialStyles.color=n,this.element=document.createElement("span"),this.element.innerHTML=this.character;var i,a=this.element,o=this.initialStyles;for(i in o)a.style[i]=o[i];this.update(),document.body.appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/240+")",this.element.style.opacity=this.lifeSpan/240},this.die=function(){this.element.parentNode.removeChild(this.element)}}var s=["#D61C59","#E7D84B","#1B8798","#ffaaff","#aaaaff"],r=window.innerWidth,l={x:r/2,y:r/2},d=[];document.addEventListener("mousemove",n),document.addEventListener("touchmove",e),document.addEventListener("touchstart",e),window.addEventListener("resize",t),a()})();