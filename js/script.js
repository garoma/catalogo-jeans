// CONFIGURAÇÃO - Altere aqui suas informações
const WHATSAPP_NUMERO = '5581999999999'; // Coloque seu número aqui

// PRODUTOS - Adicione seus produtos aqui
const produtos = [
    {
        nome: "Calça Jeans Skinny Feminina – Azul Claro",
        descricao: "Calça jeans skinny feminina com modelagem que valoriza a silhueta, oferecendo um caimento perfeito ao corpo. Confeccionada em jeans de alta qualidade, possui toque macio, excelente elasticidade e conforto para o uso diário.",
        preco: "R$ 28,00",
        midias: [
            {tipo: "img", src: "images/produtos/produto1-1.jpeg"},
            {tipo: "img", src: "images/produtos/produto1-2.jpeg"},
            {tipo: "img", src: "images/produtos/produto1-3.jpeg"}
        ],
        tamanhos: "36, 38, 40, 42, 44",
        grades: ["1", "2", "3", "4", "5","6", "7", "8", "9", "10","11", "12", "13", "14", "15","16", "17", "18", "19", "20","21", "22", "23", "24", "25","26", "27", "28", "29", "30"]
    },
    {
        nome: "Calça Jeans Skinny Feminina – Azul Escuro",
        descricao: "Calça jeans skinny feminina com modelagem que valoriza a silhueta, oferecendo um caimento perfeito ao corpo. Confeccionada em jeans de alta qualidade, possui toque macio, excelente elasticidade e conforto para o uso diário.",
        preco: "R$ 28,00",
        midias: [
            {tipo: "img", src: "images/produtos/produto2-1.jpeg"},
            {tipo: "img", src: "images/produtos/produto2-2.jpeg"},
            {tipo: "img", src: "images/produtos/produto2-3.jpeg"}
        ],
        tamanhos: "36, 38, 40, 42, 44",
        grades: ["1", "2", "3", "4", "5","6", "7", "8", "9", "10","11", "12", "13", "14", "15","16", "17", "18", "19", "20","21", "22", "23", "24", "25","26", "27", "28", "29", "30"]
    },
    {
        nome: "Saia Jeans Feminina Curta – Azul Médio",
        descricao: "Saia jeans feminina curta com modelagem moderna e caimento impecável, ideal para valorizar a silhueta com conforto e estilo. Confeccionada em jeans de alta qualidade, possui estrutura firme, toque macio e excelente durabilidade.",
        preco: "R$ 20,00",
        midias: [
            {tipo: "img", src: "images/produtos/produto3-1.jpeg"},
            {tipo: "img", src: "images/produtos/produto3-2.jpeg"}
        ],
        tamanhos: "36, 38, 40, 42, 44",
        grades: ["1", "2", "3", "4", "5","6", "7", "8", "9", "10","11", "12", "13", "14", "15","16", "17", "18", "19", "20","21", "22", "23", "24", "25","26", "27", "28", "29", "30"]
    },
    {
        nome: "Saia Jeans Feminina Curta – Azul Escuro",
        descricao: "Saia jeans feminina curta com modelagem moderna e caimento impecável, ideal para valorizar a silhueta com conforto e estilo. Confeccionada em jeans de alta qualidade, possui estrutura firme, toque macio e excelente durabilidade.",
        preco: "R$ 20,00",
        midias: [
            {tipo: "img", src: "images/produtos/produto4-1.jpeg"},
            {tipo: "img", src: "images/produtos/produto4-2.jpeg"}
        ],
        tamanhos: "36, 38, 40, 42, 44",
        grades: ["1", "2", "3", "4", "5","6", "7", "8", "9", "10","11", "12", "13", "14", "15","16", "17", "18", "19", "20","21", "22", "23", "24", "25","26", "27", "28", "29", "30"]
    },
    // {
    //     nome: "Calça Jeans Flare Vintage",
    //     descricao: "Estilo retrô com modelagem boca de sino que alonga a silhueta. Perfeita para um look vintage e moderno ao mesmo tempo. Jeans de alta qualidade com lavagem especial.",
    //     preco: "R$ 179,90",
    //     midias: [
    //         {tipo: "img", src: "images/produtos/produto5-1.jpeg"},
    //         {tipo: "img", src: "images/produtos/produto5-2.jpeg"},
    //         {tipo: "img", src: "images/produtos/produto5-3.jpeg"}
    //     ],
    //     tamanhos: "36, 38, 40, 42, 44",
    // },
    // {
    //     nome: "Calça Jeans Flare Vintage",
    //     descricao: "Estilo retrô com modelagem boca de sino que alonga a silhueta. Perfeita para um look vintage e moderno ao mesmo tempo. Jeans de alta qualidade com lavagem especial.",
    //     preco: "R$ 179,90",
    //     midias: [
    //         {tipo: "img", src: "images/produtos/produto6-1.jpeg"},
    //         {tipo: "img", src: "images/produtos/produto6-2.jpeg"},
    //         {tipo: "img", src: "images/produtos/produto6-3.jpeg"}
    //     ],
    //     tamanhos: "36, 38, 40, 42, 44",
    // },
    {
        nome: "Calça Jeans Pantalona de Elástico Azul Claro",
        descricao: "Calça jeans feminina wide leg com modelagem moderna e caimento impecável. Possui cintura média/alta que valoriza a silhueta e pernas amplas que garantem conforto e estilo. Confeccionada em jeans de alta qualidade, ideal para compor looks casuais ou fashionistas.",
        preco: "R$ 30,00",
        midias: [
            {tipo: "video", src: "images/videos/produto1.mp4"}
        ],
        tamanhos: "36, 38, 40, 42, 44",
        grades: ["1", "2", "3", "4", "5","6", "7", "8", "9", "10","11", "12", "13", "14", "15","16", "17", "18", "19", "20","21", "22", "23", "24", "25","26", "27", "28", "29", "30"]
    },
    {
        nome: "Calça Jeans Wide Leg Azul Claro (Costas)",
        descricao: "Calça jeans wide leg com excelente caimento traseiro, valorizando o quadril e garantindo ajuste perfeito. Modelagem moderna com acabamento de qualidade, ideal para quem busca estilo aliado ao conforto.",
        preco: "R$ 35,00",
        midias: [
            {tipo: "video", src: "images/videos/produto2.mp4"}
        ],
        tamanhos: "36, 38, 40, 42, 44",
        grades: ["1", "2", "3", "4", "5","6", "7", "8", "9", "10","11", "12", "13", "14", "15","16", "17", "18", "19", "20","21", "22", "23", "24", "25","26", "27", "28", "29", "30"]
    },
    {
        nome: "Calça Jeans Wide Leg Azul Médio",
        descricao: "Calça jeans feminina wide leg em tom azul médio clássico. Possui cintura média/alta e modelagem elegante, perfeita para composições sofisticadas ou casuais. Ideal para uso diário ou ocasiões especiais.",
        preco: "R$ 35,00",
        midias: [
            {tipo: "video", src: "images/videos/produto3.mp4"}
        ],
        tamanhos: "36, 38, 40, 42, 44",
        grades: ["1", "2", "3", "4", "5","6", "7", "8", "9", "10","11", "12", "13", "14", "15","16", "17", "18", "19", "20","21", "22", "23", "24", "25","26", "27", "28", "29", "30"]
    },
    {
        nome: "Short Meia Cocha Feminino",
        descricao: "Short jeans feminino com modelagem justa e confortável, ideal para looks modernos e sensuais. Confeccionado em jeans de qualidade, valoriza as curvas sem perder o conforto.",
        preco: "R$ 22,00",
        midias: [
            {tipo: "video", src: "images/videos/produto4.mp4"}
        ],
        tamanhos: "36, 38, 40, 42, 44",
        grades: ["1", "2", "3", "4", "5","6", "7", "8", "9", "10","11", "12", "13", "14", "15","16", "17", "18", "19", "20","21", "22", "23", "24", "25","26", "27", "28", "29", "30"]
    },
    {
        nome: "Calça Jeans Flare Azul Médio",
        descricao: "Calça jeans feminina flare, com modelagem que alonga a silhueta e proporciona um visual elegante. Possui cintura média/alta e acabamento impecável, ideal para quem busca sofisticação no dia a dia.",
        preco: "R$ 28,00",
        midias: [
            {tipo: "video", src: "images/videos/produto5.mp4"}
        ],
        tamanhos: "36, 38, 40, 42, 44",
        grades: ["1", "2", "3", "4", "5","6", "7", "8", "9", "10","11", "12", "13", "14", "15","16", "17", "18", "19", "20","21", "22", "23", "24", "25","26", "27", "28", "29", "30"]
    },
    {
        nome: "Calça Jeans Flare Azul Claro",
        descricao: "Calça jeans flare feminina com caimento perfeito e visual moderno. A modelagem proporciona elegância e conforto, sendo ideal para compor looks fashion e versáteis.",
        preco: "R$ 28,00",
        midias: [
            {tipo: "video", src: "images/videos/produto6.mp4"}
        ],
        tamanhos: "36, 38, 40, 42, 44",
        grades: ["1", "2", "3", "4", "5","6", "7", "8", "9", "10","11", "12", "13", "14", "15","16", "17", "18", "19", "20","21", "22", "23", "24", "25","26", "27", "28", "29", "30"]
    },
];

// VARIÁVEIS GLOBAIS
let carouselPositions = [];
let modalPosition = 0;
let currentProduct = null;
let carrinho = [];

// INICIALIZAÇÃO
function init() {
    carouselPositions = new Array(produtos.length).fill(0);
    renderProdutos();
    atualizarCarrinho();
}

// RENDERIZAR PRODUTOS
function renderProdutos() {
    const grid = document.getElementById('produtos-grid');
    grid.innerHTML = produtos.map((produto, index) => `
        <div class="produto-card" onclick="openModal(${index})">
            <div class="carousel" id="carousel-${index}">
                <div class="carousel-images">
                    ${produto.midias.map(m => 
                        m.tipo === 'video' 
                            ? `<video 
                                src="${m.src}" 
                                preload="metadata"
                                playsinline
                                muted
                                style="width: 100%; height: 100%; object-fit: cover; flex-shrink: 0;"
                                onloadedmetadata="this.currentTime = 0.1; this.play();"
                              ></video>`
                            : `<img src="${m.src}" alt="${produto.nome}" style="width: 100%; height: 100%; object-fit: cover; flex-shrink: 0;">`
                    ).join('')}
                </div>
                <button class="carousel-btn prev" onclick="moveCarousel(event, ${index}, -1)">‹</button>
                <button class="carousel-btn next" onclick="moveCarousel(event, ${index}, 1)">›</button>
            </div>
            <div class="dots" id="dots-${index}"></div>
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao.substring(0, 100)}...</p>
                <div class="preco">${produto.preco}</div>
                <button class="btn-ver-mais">Ver Detalhes</button>
            </div>
        </div>
    `).join('');

    produtos.forEach((_, i) => updateDots(i));
}

// CARROSSEL DOS CARDS
function moveCarousel(event, index, direction) {
    event.stopPropagation();
    const images = document.querySelector(`#carousel-${index} .carousel-images`);
    const totalImages = produtos[index].midias.length;
    carouselPositions[index] = (carouselPositions[index] + direction + totalImages) % totalImages;
    images.style.transform = `translateX(-${carouselPositions[index] * 100}%)`;
    updateDots(index);
}

function updateDots(index) {
    const dotsContainer = document.getElementById(`dots-${index}`);
    dotsContainer.innerHTML = '';
    produtos[index].midias.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === carouselPositions[index] ? ' active' : '');
        dot.onclick = (e) => {
            e.stopPropagation();
            carouselPositions[index] = i;
            document.querySelector(`#carousel-${index} .carousel-images`).style.transform = `translateX(-${i * 100}%)`;
            updateDots(index);
        };
        dotsContainer.appendChild(dot);
    });
}

// MODAL
function openModal(index) {
    currentProduct = index;
    const modal = document.getElementById('modal');
    const modalCarousel = document.getElementById('modal-carousel');
    const modalInfo = document.getElementById('modal-info');
    const produto = produtos[index];

    modalCarousel.innerHTML = `
        <button class="carousel-btn prev" onclick="moveModalCarousel(-1)">‹</button>
        <button class="carousel-btn next" onclick="moveModalCarousel(1)">›</button>
        <div class="carousel-images" style="display: flex; transition: transform 0.5s;">
            ${produto.midias.map((m, idx) => 
                m.tipo === 'video' 
                    ? `<video 
                        id="modal-video-${idx}"
                        src="${m.src}" 
                        controls 
                        controlsList="nodownload"
                        playsinline
                        preload="metadata"
                        style="width: 100%; height: 100%; object-fit: contain; flex-shrink: 0; background: #000;"
                      ></video>`
                    : `<img src="${m.src}" alt="${produto.nome}" style="width: 100%; height: 100%; object-fit: contain; flex-shrink: 0;">`
            ).join('')}
        </div>
    `;

    modalInfo.innerHTML = `
        <h2>${produto.nome}</h2>
        <p>${produto.descricao}</p>
        <p><b>Numeração: ${produto.tamanhos}</b></p>
        <div class="preco">${produto.preco}</div>
        <div class="tamanho-select">
            <label for="tamanho-select">Escolha quantidade grades:</label>
            <select id="tamanho-select">
                <option value="">Selecione uma grade</option>
                ${produto.grades.map(t => `<option value="${t}">${t}</option>`).join('')}
            </select>
        </div>
        <button class="btn-ver-mais" onclick="adicionarAoCarrinho()">Adicionar ao Carrinho</button>
    `;

    updateModalDots();
    modalPosition = 0;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Pausar todos os vídeos quando abrir o modal
    pauseAllVideos();
}

function closeModal() {
    pauseAllVideos();
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function moveModalCarousel(direction) {
    pauseAllVideos();
    const images = document.querySelector('#modal-carousel .carousel-images');
    const totalImages = produtos[currentProduct].midias.length;
    modalPosition = (modalPosition + direction + totalImages) % totalImages;
    images.style.transform = `translateX(-${modalPosition * 100}%)`;
    updateModalDots();
}

function updateModalDots() {
    const dotsContainer = document.getElementById('modal-dots');
    dotsContainer.innerHTML = '';
    produtos[currentProduct].midias.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === modalPosition ? ' active' : '');
        dot.onclick = () => {
            pauseAllVideos();
            modalPosition = i;
            document.querySelector('#modal-carousel .carousel-images').style.transform = `translateX(-${i * 100}%)`;
            updateModalDots();
        };
        dotsContainer.appendChild(dot);
    });
}

// CARRINHO
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('active');
}

function adicionarAoCarrinho() {
    const tamanhoSelect = document.getElementById('tamanho-select');
    const tamanho = tamanhoSelect.value;

    if (!tamanho) {
        alert('Por favor, selecione uma grade!');
        return;
    }

    const produto = produtos[currentProduct];
    
    // Se o produto tem vídeo, usa a primeira imagem se houver, senão cria um placeholder
    let imagemCarrinho = produto.midias.find(m => m.tipo === 'img')?.src;
    if (!imagemCarrinho) {
        // Se só tem vídeo, usa um ícone de vídeo ou a primeira mídia
        imagemCarrinho = produto.midias[0].src;
    }
    
    const item = {
        id: Date.now(),
        produtoId: currentProduct,
        nome: produto.nome,
        preco: produto.preco,
        tamanho: tamanho,
        imagem: imagemCarrinho,
        temVideo: produto.midias[0].tipo === 'video'
    };

    carrinho.push(item);
    atualizarCarrinho();
    closeModal();
    toggleCart();
    
    const cartBtn = document.querySelector('.cart-float');
    cartBtn.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 300);
}

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartCount.textContent = carrinho.length;

    if (carrinho.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Seu carrinho está vazio</p>';
        cartTotal.textContent = 'R$ 0,00';
        return;
    }

    cartItems.innerHTML = carrinho.map(item => `
        <div class="cart-item">
            ${item.temVideo 
                ? `<div class="cart-item-img" style="background: #000; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px;">🎥</div>`
                : `<img src="${item.imagem}" alt="${item.nome}" class="cart-item-img">`
            }
            <div class="cart-item-info">
                <h4>${item.nome}</h4>
                <p>Grades: ${item.tamanho}</p>
                <p class="cart-item-price">${item.preco}</p>
            </div>
            <button class="cart-item-remove" onclick="removerDoCarrinho(${item.id})">×</button>
        </div>
    `).join('');

    const total = carrinho.reduce((sum, item) => {
        const valor = parseFloat(item.preco.replace('R$ ', '').replace(',', '.'));
        return sum + valor;
    }, 0);

    cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    let mensagem = '*🛍️ Novo Pedido - Jeans Feminino*\n\n';
    
    carrinho.forEach((item, index) => {
        mensagem += `*${index + 1}. ${item.nome}*\n`;
        mensagem += `   Grades: ${item.tamanho}\n`;
        mensagem += `   Valor: ${item.preco}\n\n`;
    });

    const total = carrinho.reduce((sum, item) => {
        const valor = parseFloat(item.preco.replace('R$ ', '').replace(',', '.'));
        return sum + valor;
    }, 0);

    mensagem += `*TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
    //mensagem += '📸 _Fotos dos produtos serão enviadas em seguida_';

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// FUNÇÃO PARA PAUSAR TODOS OS VÍDEOS
function pauseAllVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
}

// EVENTOS
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// INICIAR
init();