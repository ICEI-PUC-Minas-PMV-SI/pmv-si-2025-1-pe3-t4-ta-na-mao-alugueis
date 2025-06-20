document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('search-input');
    
    const searchButton = document.querySelector('.barra-de-pesquisa button'); // Seleciona o botão de pesquisa
    
    const suggestionsContainer = document.getElementById('suggestions-container');
    
    const suggestionsList = document.getElementById('suggestions-list');
    
    const userLoginButton = document.getElementById('user-login-button');
    
    const adsContainer = document.getElementById('ads-container');
    
    const anunciarButton = document.getElementById('anunciar-button');
    
    const cadastroButton = document.getElementById('cadastro-button');
    
    
    
    if (anunciarButton) { // Verifica se o botão existe antes de adicionar o listener
    
    anunciarButton.addEventListener('click', () => {
    
    window.location.href = 'login.html'; // Redireciona para a página de funções de anúncio
    
    });
    
    }
    
    if (cadastroButton) { // Verifica se o botão existe antes de adicionar o listener
    
        cadastroButton.addEventListener('click', () => {
        
        window.location.href = 'login.html'; // Redireciona para a página de funções de anúncio
        
        });
        
    }
    
    
    if (userLoginButton) { // Verifica se o botão existe
    
    userLoginButton.addEventListener('click', () => {
    
    window.location.href = 'login.html'; // Redireciona para login.html
    
    });
    
    }
    
    
    
    const sectionsData = [
    
    { term: "Genérico", section: "Autos", page: "login.html?q=" },
    
    { term: "Genérico", section: "Ferramentas", page: "login.html?q=" },
    
    { term: "Genérico", section: "Imóveis", page: "login.html?q=" },
    
    { term: "Genérico", section: "Esportes", page: "login.html?q=" },
    
    { term: "Genérico", section: "Decorações de Festa", page: "login.html?q=" },
    
    // Local para adicionar mais seções conforme necessário
    
    ];
    
    
    
    let currentSelectedSuggestionIndex = -1;
    
    function updateSelectedSuggestion(newIndex) {
    
    const listItems = suggestionsList.children;
    
    for (let i = 0; i < listItems.length; i++) {
    
    listItems[i].classList.remove('selected');
    
    }
    
    
    
    
    
    if (newIndex >= 0 && newIndex < listItems.length) {
    
    listItems[newIndex].classList.add('selected');
    
    currentSelectedSuggestionIndex = newIndex;
    
    } else {
    
    currentSelectedSuggestionIndex = -1;
    
    }
    
    }
    
    
    
    // Função para acionar a navegação
    
    function navigateToSuggestion(index) {
    
    const listItems = suggestionsList.children;
    
    if (index >= 0 && index < listItems.length) {
    
    const selectedItem = listItems[index];
    
    
    
    const query = searchInput.value.trim();
    
    const originalSuggestion = sectionsData[index];
    
    if (originalSuggestion) {
    
    window.location.href = `${originalSuggestion.page}${encodeURIComponent(query)}`;
    
    }
    
    }
    
    }
    
    
    
    
    
    searchInput.addEventListener('input', () => {
    
    const query = searchInput.value.trim();
    
    suggestionsList.innerHTML = '';
    
    currentSelectedSuggestionIndex = -1;
    
    
    
    if (query.length === 0) {
    
    suggestionsContainer.style.display = 'none';
    
    return;
    
    }
    
    
    
    const allSections = sectionsData;
    
    
    
    if (allSections.length > 0) {
    
    allSections.forEach((item, index) => {
    
    const listItem = document.createElement('li');
    
    listItem.textContent = `"${query}" em ${item.section}`;
    
    
    
    
    
    listItem.dataset.page = item.page;
    
    listItem.dataset.section = item.section;
    
    listItem.dataset.term = item.term;
    
    
    
    listItem.addEventListener('click', () => {
    
    
    
    window.location.href = `${listItem.dataset.page}${encodeURIComponent(query)}`;
    
    });
    
    
    
    
    
    listItem.addEventListener('mouseover', () => {
    
    updateSelectedSuggestion(index);
    
    });
    
    
    
    suggestionsList.appendChild(listItem);
    
    });
    
    
    
    
    
    updateSelectedSuggestion(0);
    
    suggestionsContainer.style.display = 'block';
    
    
    
    } else {
    
    suggestionsContainer.style.display = 'none';
    
    }
    
    });
    
    
    
    
    
    document.addEventListener('click', (event) => {
    
    if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target) && !searchButton.contains(event.target)) {
    
    suggestionsContainer.style.display = 'none';
    
    currentSelectedSuggestionIndex = -1;
    
    }
    
    });
    
    
    
    
    
    searchInput.addEventListener('keydown', (event) => {
    
    if (event.key === 'Escape') {
    
    suggestionsContainer.style.display = 'none';
    
    searchInput.blur();
    
    currentSelectedSuggestionIndex = -1;
    
    }
    
    
    
    if (suggestionsContainer.style.display === 'block') {
    
    if (event.key === 'ArrowDown') {
    
    event.preventDefault();
    
    updateSelectedSuggestion(Math.min(currentSelectedSuggestionIndex + 1, suggestionsList.children.length - 1));
    
    } else if (event.key === 'ArrowUp') {
    
    event.preventDefault();
    
    updateSelectedSuggestion(Math.max(currentSelectedSuggestionIndex - 1, 0));
    
    } else if (event.key === 'Enter') {
    
    event.preventDefault();
    
    if (currentSelectedSuggestionIndex !== -1) {
    
    navigateToSuggestion(currentSelectedSuggestionIndex);
    
    }
    
    }
    
    }
    
    });
    
    
    
    
    
    searchButton.addEventListener('click', () => {
    
    const query = searchInput.value.trim();
    
    if (query.length > 0) {
    
    if (currentSelectedSuggestionIndex !== -1) {
    
    
    
    navigateToSuggestion(currentSelectedSuggestionIndex);
    
    } else {
    
    if (sectionsData.length > 0) {
    
    window.location.href = `${sectionsData[0].page}${encodeURIComponent(query)}`;
    
    } else {
    
    
    
    alert("Por favor, digite um termo ou selecione uma sugestão.");
    
    }
    
    }
    
    } else {
    
    
    
    alert("Por favor, digite algo para buscar.");
    
    }
    
    suggestionsContainer.style.display = 'none';
    
    currentSelectedSuggestionIndex = -1;
    
    });
    
    /* Endereçamento do restante dos botões do header */
    
        const planoProfissionalButton = document.getElementById('plano-profissional-button');
        if (planoProfissionalButton) {
            planoProfissionalButton.addEventListener('click', (event) => {
                event.stopPropagation();
                window.location.href = 'login.html'; // Redireciona para profissional.html
            });
            planoProfissionalButton.setAttribute('data-custom-redirect', 'true');
        }
    
        const meusAnunciosButton = document.getElementById('meus-anuncios-button');
        if (meusAnunciosButton) {
            meusAnunciosButton.addEventListener('click', (event) => {
                event.stopPropagation();
                window.location.href = 'login.html'; // Redireciona para anuncio.html
            });
            meusAnunciosButton.setAttribute('data-custom-redirect', 'true');
        }
    
        const chatButton = document.getElementById('chat-button');
        if (chatButton) {
            chatButton.addEventListener('click', (event) => {
                event.stopPropagation();
                window.location.href = 'login.html'; // Redireciona para chat.html
            });
            chatButton.setAttribute('data-custom-redirect', 'true');
        }
    
        const notificacoesButton = document.getElementById('notificacoes-button');
        if (notificacoesButton) {
            notificacoesButton.addEventListener('click', (event) => {
                event.stopPropagation();
                window.location.href = 'login.html'; // Redireciona para notificacoes.html
            });
            notificacoesButton.setAttribute('data-custom-redirect', 'true');
        }
    
    });
    
    