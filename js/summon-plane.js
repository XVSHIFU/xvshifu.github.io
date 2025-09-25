document.addEventListener('DOMContentLoaded', function() {

    // 创建浮动圆形按钮
    var btn = document.createElement('button');
    btn.id = 'summonPlaneBtn';
    btn.innerText = '✈️';
    document.body.appendChild(btn);

    // 按钮样式：圆形 + 科技感
    btn.style.position = 'fixed';
    btn.style.bottom = '80px';
    btn.style.right = '20px';
    btn.style.zIndex = '10000';
    btn.style.width = '60px';
    btn.style.height = '60px';
    btn.style.borderRadius = '50%';
    btn.style.border = 'none';
    btn.style.background = 'linear-gradient(135deg,#1e90ff,#00ffff)';
    btn.style.color = '#fff';
    btn.style.fontSize = '24px';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0 0 15px rgba(0,255,255,0.7), 0 0 25px rgba(0,128,255,0.5)';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

    btn.addEventListener('mouseenter', function() {
        btn.style.transform = 'scale(1.2)';
        btn.style.boxShadow = '0 0 25px rgba(0,255,255,1), 0 0 40px rgba(0,128,255,0.8)';
    });
    btn.addEventListener('mouseleave', function() {
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = '0 0 15px rgba(0,255,255,0.7), 0 0 25px rgba(0,128,255,0.5)';
    });

    // 点击按钮加载飞机游戏并飞出动画
    btn.onclick = function() {
        // 创建游戏层容器
        var gameLayer = document.createElement('div');
        gameLayer.id = 'airplaneGameLayer';
        gameLayer.style.position = 'fixed';
        gameLayer.style.bottom = btn.offsetTop + 'px';
        gameLayer.style.right = (window.innerWidth - btn.offsetLeft - btn.offsetWidth) + 'px';
        gameLayer.style.width = '0px';
        gameLayer.style.height = '0px';
        gameLayer.style.backgroundColor = '#000';
        gameLayer.style.zIndex = '9999';
        gameLayer.style.borderRadius = '10px';
        gameLayer.style.overflow = 'hidden';
        gameLayer.style.transition = 'all 0.5s ease-out';
        document.body.appendChild(gameLayer);

        // 飞出动画
        setTimeout(function() {
            gameLayer.style.bottom = '0px';
            gameLayer.style.right = '0px';
            gameLayer.style.width = window.innerWidth + 'px';
            gameLayer.style.height = window.innerHeight + 'px';
            gameLayer.style.borderRadius = '0px';
        }, 10);

        // 加载飞机 JS
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://uipv4.zywvvd.com:33030/HexoFiles/js/games/airplane/airplane.js';
        gameLayer.appendChild(s);
    };
});
