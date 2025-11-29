// 将 banner 背景图复制到 web_bg
const banner = document.querySelector('.banner');
const webBg = document.querySelector('#web_bg');
const bannerElem = document.querySelector("#banner");
const bannerMask = document.querySelector("#banner .mask");
const toggleIcon = document.getElementById('toggle-background-mode-icon');

webBg.style.backgroundImage = banner.style.background.split(' ')[0];

// 清空 banner 的原背景和遮罩颜色
bannerElem.style.background = 'url()';
bannerMask.style.backgroundColor = 'rgba(0,0,0,0)';
toggleIcon.className = "fa-solid fa-toggle-on";

// 保持目录和分类列表透明
['#toc', '.category-list'].forEach(selector => {
    const el = document.querySelector(selector);
    if(el) el.style.backgroundColor = "transparent";
});

// 判断是否需要切换背景模式
if (localStorage.getItem('BackgroundMode') === 'false' || !localStorage.getItem('BackgroundMode') || window.innerWidth < window.innerHeight) {
    // 把 web_bg 的背景应用到 banner，不加遮罩
    bannerElem.style.background = webBg.style.backgroundImage + " center center / cover no-repeat";

    // 清空 web_bg 的背景
    webBg.style.backgroundImage = 'url()';

    // mask 保持透明
    bannerMask.style.backgroundColor = 'rgba(0,0,0,0)';

    // 切换按钮状态
    toggleIcon.className = "fa-solid fa-toggle-off";

    localStorage.setItem('BackgroundMode', 'false');
}
