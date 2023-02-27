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
  image.className = 'div_peca';
  pixel[0].appendChild(image);
  image.innerHTML = "<img id='torreBrancaEsquerda' class='pieces' src='torre-branco.png'>";
};

const torrePretaEsquerda = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[56].appendChild(image);
  image.innerHTML = "<img id='torrePretaEsquerda' class='pieces' src='torre.png'>";
};

const cavaloBrancoEsquerda = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[1].appendChild(image);
  image.innerHTML = "<img id='cavaloBrancoEsquerda' class='pieces' src='cavalo-branco.png'>";
};

const cavaloPretoEsquerda = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[57].appendChild(image);
  image.innerHTML = "<img id='cavaloPretoEsquerda' class='pieces' src='cavalo.png'>";
};

const bispoBrancoEsquerda = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[2].appendChild(image);
  image.innerHTML = "<img id='bispoBrancoEsquerda' class='pieces' src='bispo-branco.png'>";
};

const bispoPretoEsquerda = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[58].appendChild(image);
  image.innerHTML = "<img id='bispoPretoEsquerda' class='pieces' src='bispo.png'>";
};

const reiBranco = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[3].appendChild(image);
  image.innerHTML = "<img id='reiBranco' class='pieces' src='rei-branco.png'>";
};

const reiPreto = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[59].appendChild(image);
  image.innerHTML = "<img id='reiPreto' class='pieces' src='rei.png'>";
};

const rainhaBranca = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[4].appendChild(image);
  image.innerHTML = "<img id='rainhaBranca' class='pieces' src='rainha-branco.png'>";
};

const rainhaPreta = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[60].appendChild(image);
  image.innerHTML = "<img id='rainhaPreta' class='pieces' src='rainha.png'>";
};

const bispoBrancoDireita = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[5].appendChild(image);
  image.innerHTML = "<img id='bispoBrancoDireita' class='pieces' src='bispo-branco.png'>";
};

const bispoPretoDireita = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[61].appendChild(image);
  image.innerHTML = "<img id='bispoPretoDireita' class='pieces' src='bispo.png'>";
};

const cavaloBrancoDireita = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[6].appendChild(image);
  image.innerHTML = "<img id='cavaloBrancoDireita' class='pieces' src='cavalo-branco.png'>";
};

const cavaloPretoDireita = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[62].appendChild(image);
  image.innerHTML = "<img id='cavaloPretoDireita' class='pieces' src='cavalo.png'>";
};

const torreBrancaDireita = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[7].appendChild(image);
  image.innerHTML = "<img id='torreBrancaDireita' class='pieces' src='torre-branco.png'>";
};

const torrePretaDireita = () => {
  const pixel = document.getElementsByClassName('pixel');
  const image = document.createElement('div');
  image.className = 'div_peca';
  pixel[63].appendChild(image);
  image.innerHTML = "<img id='torrePretaDireita' class='pieces' src='torre.png'>";
};

const peoes = () => {
  for (let index = 8; index <= 15; index += 1) {
    const pixel = document.getElementsByClassName('pixel');
    const image = document.createElement('div');
    image.className = 'div_peca';
    pixel[index].appendChild(image);
    image.innerHTML = "<img class='peao pieces' src='peao-branco.png'>";
  }
  for (let index = 48; index <= 55; index += 1) {
    const pixel = document.getElementsByClassName('pixel');
    const image = document.createElement('div');
    image.className = 'div_peca';
    pixel[index].appendChild(image);
    image.innerHTML = "<img class='peao pieces' src='peao.png'>";
  }
}

const changePosition = (evt) => {
  let fatherPieceSelected = localStorage.getItem('selecionedPiece');
  const pixel = document.getElementsByClassName('pixel');
  console.log(evt.target);
  for (let index = 0; index < pixel.length; index += 1) {
    if (pixel[index] === evt.target) {
      pixel[index].innerHTML = fatherPieceSelected;
      localStorage.setItem('selecionedPiece', '');
    }
  }

}

const select = (evt) => {
  const pieces = document.querySelectorAll(".pieces");
  let fatherPieceSelected = '';
  let pieceSelected = '';
  for (let index = 0; index < pieces.length; index += 1) {
    let clicked = evt.target;
    pieces[index].classList.remove('selected');
    if (evt.target === pieces[index].parentElement || evt.target === pieces[index].parentElement.parentElement) {
      clicked = pieces[index];
    }
    if (pieces[index] === evt.target || pieces[index] === clicked){
      pieces[index].classList.add('selected');
      fatherPieceSelected = pieces[index].parentElement.parentElement.innerHTML
      pieceSelected = pieces[index].parentElement.innerHTML;
      pieces[index].parentElement.innerHTML = ''; 

      localStorage.setItem('selecionedPiece', fatherPieceSelected);
      const pixel = document.querySelectorAll(".pixel");
      for (let index = 0; index < pixel.length; index += 1) {
        pixel[index] = document.addEventListener('click', changePosition);
      }
    }
  }
};

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

  const pieces = document.querySelectorAll(".pieces");
  for (let index = 0; index < pieces.length; index += 1) {
    pieces[index] = document.addEventListener('click', select);
  }
};

