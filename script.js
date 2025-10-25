document.addEventListener("DOMContentLoaded", () => {
  // 1 Мигание заголовка
  const h1 = document.querySelector("header h1");
  setInterval(() => {
    h1.style.color = h1.style.color === "red" ? "#a7ff55ff" : "red";
  }, 500);
  // 2 Мигание границ карточек
  const newsCards = document.querySelectorAll(".news-card");
  newsCards.forEach((card, index) => {
    setInterval(() => {
      card.style.borderColor = card.style.borderColor === "red" ? "#045a00ff" : "red";
    }, 400 + index * 100);
  });
  // 4 Banner GIF мигание
  const banners = document.querySelectorAll(".banner-gif");
  setInterval(() => {
    banners.forEach(b => b.style.opacity = Math.random() > 0.5 ? "1" : "0.6");
  }, 500);
  // 5 Модальные окна
  const modals = document.querySelectorAll(".modal");
  newsCards.forEach(card => {
    card.addEventListener("click", () => {
      const modalId = card.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "block";
    });
  });
  const closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });
  window.addEventListener("click", e => {
    modals.forEach(modal => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
  // 6 ASCII-style хаотичный текст подзаголовка
  const headerText = document.querySelector("header p");
  setInterval(() => {
    const chars = ['🕹️','🎮','⚡','💀','🔥','🟥','🖤','🔴'];
    headerText.textContent = Array.from(headerText.textContent).map(c => chars[Math.floor(Math.random()*chars.length)]).join('');
    setTimeout(() => {
      headerText.textContent = "Новости классических игр, жанры и хаос 90-х!";
    }, 200);
  }, 1000);

  // 7 Footer links подсветка
  const footerLinks = document.querySelectorAll("footer a");
  footerLinks.forEach(link => {
    link.addEventListener("mouseenter", () => link.style.color = "#004901ff");
    link.addEventListener("mouseleave", () => link.style.color = "green");
  });
  // 8 Параллакс скролл карточек
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    newsCards.forEach(card => {
      card.style.transform = `translateY(${scrollPos/30}px) scale(1)`;
    });
  });
});
// 9 Плавающие пиксельные эффекты
const numPixels = 25; // количество пикселей
const pixels = [];
for (let i = 0; i < numPixels; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.left = Math.random() * window.innerWidth + "px";
  pixel.style.top = Math.random() * window.innerHeight + "px";
  pixel.style.backgroundColor = ['red','green',][Math.floor(Math.random()*6)];
  document.body.appendChild(pixel);
  pixels.push({
    el: pixel,
    x: parseFloat(pixel.style.left),
    y: parseFloat(pixel.style.top),
    dx: (Math.random() - 0.5) * 1.5, // скорость по X
    dy: (Math.random() - 0.5) * 1.5  // скорость по Y
  });
}
// Анимация движения пикселей
function animatePixels() {
  pixels.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
    if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;

    p.el.style.left = p.x + "px";
    p.el.style.top = p.y + "px";
  });
  requestAnimationFrame(animatePixels);
}
animatePixels();
