function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const controls = document.querySelector('#controls');
  const input = controls.querySelector('input');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');
  
  
  function createBoxes(amount) {
    const elements = [];
    let size = 30;
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.marginBottom = '5px';
      elements.push(box);
      size += 10;
    }
  
    boxesContainer.innerHTML = '';
    boxesContainer.append(...elements);
  }
  
  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
  
  createButton.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
  
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });
  
  destroyButton.addEventListener('click', destroyBoxes);
