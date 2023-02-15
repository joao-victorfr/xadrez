const changeColor = (index) => {
  const pixel = document.getElementsByClassName('pixel');
  if (index >= 0 && index <= 7) {
    if (index % 2 === 0) {
      pixel[index].style.backgroundColor = "darkkhaki";
    } else {
      pixel[index].style.backgroundColor = "saddlebrown";
    }
  }
  if (index >= 8 && index <= 15) {
    if (index % 2 === 0) {
      pixel[index].style.backgroundColor = "saddlebrown";
    } else {
      pixel[index].style.backgroundColor = "darkkhaki";
    }
  }
  if (index >= 16 && index <= 23) {
    if (index % 2 === 0) {
      pixel[index].style.backgroundColor = "darkkhaki";
    } else {
      pixel[index].style.backgroundColor = "saddlebrown";
    }
  }
  if (index >= 24 && index <= 31) {
    if (index % 2 === 0) {
      pixel[index].style.backgroundColor = "saddlebrown";
    } else {
      pixel[index].style.backgroundColor = "darkkhaki";
    }
  }
  if (index >= 32 && index <= 39) {
    if (index % 2 === 0) {
      pixel[index].style.backgroundColor = "darkkhaki";
    } else {
      pixel[index].style.backgroundColor = "saddlebrown";
    }
  }
  if (index >= 40 && index <= 47) {
    if (index % 2 === 0) {
      pixel[index].style.backgroundColor = "saddlebrown";
    } else {
      pixel[index].style.backgroundColor = "darkkhaki";
    }
  }
  if (index >= 48 && index <= 55) {
    if (index % 2 === 0) {
      pixel[index].style.backgroundColor = "darkkhaki";
    } else {
      pixel[index].style.backgroundColor = "saddlebrown";
    }
  }
  if (index >= 56) {
    if (index % 2 === 0) {
      pixel[index].style.backgroundColor = "saddlebrown";
    } else {
      pixel[index].style.backgroundColor = "darkkhaki";
    }
  }
};

const createBoard = () => {
  let size = 8;
  const field = document.getElementById('field');
  for (let index = 0; index < size ** 2; index += 1) { 
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    field.appendChild(pixel);
    changeColor(index);
  }
};

const torreBrancaEsquerda = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'torre';
  pixel[0].appendChild(image);
  image.innerHTML = "<img id='torreBrancaEsquerda' src='torre-branco.png'>";
  image.style.width = '10px';
};

const torrePretaEsquerda = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'torre';
  pixel[56].appendChild(image);
  image.innerHTML = "<img id='torrePretaEsquerda' src='torre.png'>";
  image.style.width = '10px';
};

const cavaloBrancoEsquerda = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'cavalo';
  pixel[1].appendChild(image);
  image.innerHTML = "<img id='cavaloBrancoEsquerda' src='cavalo-branco.png'>";
  image.style.width = '10px';
};

const cavaloPretoEsquerda = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'cavalo';
  pixel[57].appendChild(image);
  image.innerHTML = "<img id='cavaloPretoEsquerda' src='cavalo.png'>";
  image.style.width = '10px';
};

const bispoBrancoEsquerda = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'bispo';
  pixel[2].appendChild(image);
  image.innerHTML = "<img id='bispoBrancoEsquerda' src='bispo-branco.png'>";
  image.style.width = '10px';
};

const bispoPretoEsquerda = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'bispo';
  pixel[58].appendChild(image);
  image.innerHTML = "<img id='bispoPretoEsquerda' src='bispo.png'>";
  image.style.width = '10px';
};

const reiBranco = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'rei';
  pixel[3].appendChild(image);
  image.innerHTML = "<img id='reiBranco' src='rei-branco.png'>";
  image.style.width = '10px';
};

const reiPreto = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'rei';
  pixel[59].appendChild(image);
  image.innerHTML = "<img id='reiPreto' src='rei.png'>";
  image.style.width = '10px';
};

const rainhaBranca = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'rainha';
  pixel[4].appendChild(image);
  image.innerHTML = "<img id='rainhaBranca' src='rainha-branco.png'>";
  image.style.width = '10px';
};

const rainhaPreta = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'rainha';
  pixel[60].appendChild(image);
  image.innerHTML = "<img id='rainhaPreta' src='rainha.png'>";
  image.style.width = '10px';
};

const bispoBrancoDireita = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'bispo';
  pixel[5].appendChild(image);
  image.innerHTML = "<img id='bispoBrancoDireita' src='bispo-branco.png'>";
  image.style.width = '10px';
};

const bispoPretoDireita = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'bispo';
  pixel[61].appendChild(image);
  image.innerHTML = "<img id='bispoPretoDireita' src='bispo.png'>";
  image.style.width = '10px';
};

const cavaloBrancoDireita = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'cavalo';
  pixel[6].appendChild(image);
  image.innerHTML = "<img id='cavaloBrancoDireita' src='cavalo-branco.png'>";
  image.style.width = '10px';
};

const cavaloPretoDireita = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'cavalo';
  pixel[62].appendChild(image);
  image.innerHTML = "<img id='cavaloPretoDireita' src='cavalo.png'>";
  image.style.width = '10px';
};

const torreBrancaDireita = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'torre';
  pixel[7].appendChild(image);
  image.innerHTML = "<img id='torreBrancaDireita' src='torre-branco.png'>";
  image.style.width = '10px';
};

const torrePretaDireita = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'torre';
  pixel[63].appendChild(image);
  image.innerHTML = "<img id='torrePretaDireita' src='torre.png'>";
  image.style.width = '10px';
};

const peoes = () => {
  for (let index = 8; index <= 15; index += 1) {
    const pixel = document.getElementsByClassName('pixel');
    const image = document.createElement('div');
    image.className = 'peoes';
    pixel[index].appendChild(image);
    image.innerHTML = "<img class='peao' src='peao-branco.png'>";
    image.style.width = '10px';
  }
  for (let index = 48; index <= 55; index += 1) {
    const pixel = document.getElementsByClassName('pixel');
    const image = document.createElement('div');
    image.className = 'peoes';
    pixel[index].appendChild(image);
    image.innerHTML = "<img class='peao' src='peao.png'>";
    image.style.width = '10px';
  }
}

window.onload = () => {
  createBoard();
  torreBrancaEsquerda();
  torrePretaEsquerda();
  cavaloBrancoEsquerda();
  cavaloPretoEsquerda();
  bispoBrancoEsquerda();
  bispoPretoEsquerda();
  reiBranco();
  reiPreto();
  rainhaBranca();
  rainhaPreta();
  bispoBrancoDireita();
  bispoPretoDireita();
  cavaloBrancoDireita();
  cavaloPretoDireita();
  torreBrancaDireita();
  torrePretaDireita();
  peoes();
};
