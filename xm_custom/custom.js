// 鼠标点击特效
(function($) {
  const styleContent = `
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
  `;
  $('<style>').text(styleContent).appendTo('head');

  var a_idx = 0;
  const words = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];

  $(document).ready(function() {
    $("body").click(function(e) {
      const word = words[a_idx];
      a_idx = (a_idx + 1) % words.length;

      // 文字元素
      const $text = $("<span class='click-effect-text'></span>").text(word);
      $text.css({
        top: e.pageY - window.pageYOffset - 20,
        left: e.pageX,
        color: `rgb(${~~(255 * Math.random())},${~~(255 * Math.random())},${~~(255 * Math.random())})`
      });
      $("body").append($text);

      $text.on('animationend', () => $text.remove());

      // 粒子
      const particleCount = 8;
      for(let i = 0; i < particleCount; i++) {
        const $p = $('<div class="particle"></div>');
        const angle = Math.random() * 2 * Math.PI;
        const distance = 30 + Math.random() * 30;
        const x = Math.cos(angle) * distance + 'px';
        const y = Math.sin(angle) * distance + 'px';

        $p.css({
          top: e.pageY - window.pageYOffset,
          left: e.pageX,
          '--x': x,
          '--y': y,
          background: `rgb(${~~(255 * Math.random())},${~~(255 * Math.random())},${~~(255 * Math.random())})`
        });

        $("body").append($p);
        $p.on('animationend', () => $p.remove());
      }
    });
  });
})(jQuery);



// 鼠标移动星星特效
(function() { 
    function t() { 
        i(); 
        a();
    }  

    function i() { 
        document.addEventListener("mousemove", o);
        document.addEventListener("touchmove", e);
        document.addEventListener("touchstart", e);
        window.addEventListener("resize", n);
    }  

    function n(t) { 
        d = window.innerWidth;
        window.innerHeight;
    }  

    function e(t) { 
        if (t.touches.length > 0) {
            for (var i = 0; i < t.touches.length; i++) {
                s(t.touches[i].clientX, t.touches[i].clientY, r[Math.floor(Math.random() * r.length)]);
            }
        }
    }  

    function o(t) { 
        u.x = t.clientX;
        u.y = t.clientY;
        s(u.x, u.y, r[Math.floor(Math.random() * r.length)]);
    }  

    function s(t, i, n) { 
        var e = new l; 
        e.init(t, i, n);
        f.push(e);
    }  

    function h() { 
        for (var t = 0; t < f.length; t++) f[t].update();
        for (t = f.length - 1; t >= 0; t--) {
            if (f[t].lifeSpan < 0) {
                f[t].die();
                f.splice(t, 1);
            }
        }
    }  

    function a() { 
        requestAnimationFrame(a);
        h();
    }  

    function l() { 
        this.character = "✦";
        this.lifeSpan = 240; // 生命周期
        this.initialStyles = { 
            position: "fixed", 
            top: "0", 
            display: "block", 
            pointerEvents: "none", 
            "z-index": "10000000", 
            fontSize: "20px", 
            "will-change": "transform" 
        };

        this.init = function(t, i, n) { 
            this.velocity = { 
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() * 0.3), 
                y: 0.5
            };
            this.position = { x: t - 10, y: i - 20 };
            this.initialStyles.color = n;
            this.element = document.createElement("span");
            this.element.innerHTML = this.character;
            c(this.element, this.initialStyles);
            this.update();
            document.body.appendChild(this.element);
        };

        this.update = function() { 
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.lifeSpan--;
            this.element.style.transform = 
                "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + this.lifeSpan / 240 + ")";
            this.element.style.opacity = this.lifeSpan / 240; // 透明度跟寿命比例减淡，更自然

        };

        this.die = function() { 
            this.element.parentNode.removeChild(this.element);
        };
    }  

    function c(t, i) { 
        for (var n in i) {
            t.style[n] = i[n];
        }
    } 

    var r = ["#D61C59", "#E7D84B", "#1B8798", "#ffaaff", "#aaaaff"],
        d = window.innerWidth,
        u = (window.innerHeight, { x: d / 2, y: d / 2 }),
        f = [];

    t();
})();




