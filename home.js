let pesquisarElement = document.querySelector('.pesquisar');
pesquisarElement.addEventListener('mouseover', function() {
pesquisarElement.classList.add('passou o mouse');
});
pesquisarElement.addEventListener('mouseout', function() {
pesquisarElement.classList.remove('passou o mouse');
});

// Obter as referências dos elementos
const carrossel = document.getElementById("carrossel");
const setaEsquerda = document.getElementById("seta_esquerda");
const setaDireita = document.getElementById("seta_direita");
const carrosselImages = Array.from(carrossel.getElementsByClassName("carrossel-image"));

// Define o índice inicial e a quantidade total de imagens
let currentIndex = 0;
const totalImages = carrosselImages.length;

// Exibe a imagem inicial
carrosselImages[currentIndex].classList.add("active");

// Adicione o evento de clique para a seta esquerda
setaEsquerda.addEventListener("click", function() {
carrosselImages[currentIndex].classList.remove("active");
currentIndex = (currentIndex - 1 + totalImages) % totalImages;
carrosselImages[currentIndex].classList.add("active");
});

// Adicione o evento de clique para a seta direita
setaDireita.addEventListener("click", function() {
carrosselImages[currentIndex].classList.remove("active");
currentIndex = (currentIndex + 1) % totalImages;
carrosselImages[currentIndex].classList.add("active");
});

// Define o intervalo de tempo em milissegundos (3 segundos)
const intervalTime = 3000;

// Função para alternar para a próxima imagem do carrossel
function nextImage() {
carrosselImages[currentIndex].classList.remove("active");
currentIndex = (currentIndex + 1) % totalImages;
carrosselImages[currentIndex].classList.add("active");
}

// Função para iniciar a animação automática do carrossel
function startcarrossel() {
carrosselInterval = setInterval(nextImage, intervalTime);
}

// Função para parar a animação automática do carrossel
function stopcarrossel() {
clearInterval(carrosselInterval);
}

// Adicione o evento de clique para a seta esquerda
setaEsquerda.addEventListener("click", function() {
stopcarrossel();
carrosselImages[currentIndex].classList.remove("active");
currentIndex = (currentIndex - 1 + totalImages) % totalImages;
carrosselImages[currentIndex].classList.add("active");
startcarrossel();
});

// Adicione o evento de clique para a seta direita
setaDireita.addEventListener("click", function() {
stopcarrossel();
carrosselImages[currentIndex].classList.remove("active");
currentIndex = (currentIndex + 1) % totalImages;
carrosselImages[currentIndex].classList.add("active");
startcarrossel();
});

// Inicia a animação automática do carrossel
let carrosselInterval = startcarrossel();


