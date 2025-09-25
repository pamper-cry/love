// 爱心生成器
// 修改颜色数组
const colors = ['#ff4081', '#ff79b0', '#7c4dff', '#00e5ff', '#76ff03'];

function createHearts() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  // 保持原有位置和动画设置
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// 每0.5秒生成一个爱心
setInterval(createHearts, 500);

// 点击页面任意位置触发爱心爆发
document.addEventListener('click', (e) => {
  for(let i=0; i<10; i++) {
    setTimeout(createHearts, i*100);
  }
});