// 渐变进入动画
window.addEventListener('DOMContentLoaded', function() {
  // 依次显示主内容区和卡片
  const fadeSections = document.querySelectorAll('.fadein-section, .fadein');
  fadeSections.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 200 + idx * 120);
  });

  // 卡片依次渐变
  const fadeCards = document.querySelectorAll('.fadein-card');
  fadeCards.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 600 + idx * 120);
  });
}); 