function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const changeColorButton = document.querySelector('.change-color');
  const colorSpan = document.querySelector('.color');
  const body = document.body;
  
  changeColorButton.addEventListener('click', () => {
    const newColor = getRandomHexColor(); // Генеруємо новий випадковий колір
    body.style.backgroundColor = newColor; // Задаємо фон <body>
    colorSpan.textContent = newColor; // Вставляємо колір у span.color
  });