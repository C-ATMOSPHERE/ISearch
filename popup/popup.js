
const SEARCH_ENGINES = {
    yummyanime: {
        name: 'YummyAnime',
        url: query => `https://yummyani.me/search?word=${encodeURIComponent(query)}`,
        prefix: 'ya'
    },
    animego: {
        name: 'AnimeGo',
        url: query => `https://animego.org/search/all?q=${encodeURIComponent(query)}`,
        prefix: 'ag'
    },
    animevost: {
        name: 'AnimeVost',
        url: query => `https://animevost.org/?do=search&subaction=search&story=${encodeURIComponent(query)}`,
        prefix: 'av'
    },
    github: {
        name: 'GitHub',
        url: query => `https://github.com/search?q=${encodeURIComponent(query)}`,
        prefix: 'git'
    },
    google: {
        name: 'Google',
        url: query => `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        prefix: 'g'
    },
    youtube: {
        name: 'YouTube',
        url: query => `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
        prefix: 'yt'
    },
    wikipedia: {
        name: 'Wikipedia',
        url: query => `https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`,
        prefix: 'w'
    },
    unknowncheats: {
        name: 'UnknownCheats',
        url: query => `https://www.unknowncheats.me/forum/search.php?do=process&query=${encodeURIComponent(query)}`,
        prefix: 'uc'
    },
};


const PREFIX_MAP = Object.values(SEARCH_ENGINES).reduce((map, engine) => {
    map[engine.prefix] = engine;
    return map;
}, {});


function validateInput(input) {
    return input.trim() !== '';
}


function displayError(message) {
    const errorDiv = document.getElementById('errorDiv');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    document.getElementById('searchInput').style.borderColor = 'red';
}


function hideError() {
    const errorDiv = document.getElementById('errorDiv');
    errorDiv.style.display = 'none';
    document.getElementById('searchInput').style.borderColor = '';
}


function handleSearch() {
    const searchInput = document.getElementById('searchInput').value.trim();
    const selectedEngine = document.getElementById('searchEngine').value;
    let url;

    console.log('Search Input:', searchInput);
    console.log('Selected Engine:', selectedEngine);

    if (!validateInput(searchInput)) {
        displayError("Please enter a search term.");
        console.log("Validation failed: No search term entered.");
        return; 
    }

    hideError();


    if (searchInput.startsWith('!')) {
        const parts = searchInput.substring(1).trim().split(' ');
        const prefix = parts[0].toLowerCase();
        const searchTerm = parts.slice(1).join(' ');

        console.log('Extracted Prefix:', prefix);
        console.log('Search Term from Prefix:', searchTerm);


        if (PREFIX_MAP[prefix]) {
            url = PREFIX_MAP[prefix].url(searchTerm);
            console.log('Generated URL from prefix:', url);
        } else {
            displayError(`Unknown prefix! Please use !g (Google), !w (Wikipedia), !yt (YouTube) , !git (GitHub), !ag (AnimeGo), !ya (YummyAnime)
            `);
            console.log("Unknown prefix:", prefix);
            return;
        }
    } else {

        if (SEARCH_ENGINES[selectedEngine]) {
            url = SEARCH_ENGINES[selectedEngine].url(searchInput);
            console.log('Generated URL from selected engine:', url);
        } else {
            displayError("Selected search engine is invalid.");
            console.log("Invalid search engine selected:", selectedEngine);
            return;
        }
    }

    console.log('Opening URL:', url);
    chrome.tabs.create({ url });
}


document.getElementById('searchButton').addEventListener('click', handleSearch);

document.getElementById('searchInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});


const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight}px`;
});


function populateSearchEngineDropdown() {
    const searchEngineSelect = document.getElementById('searchEngine');
    searchEngineSelect.innerHTML = '';
    Object.entries(SEARCH_ENGINES).forEach(([key, engine]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = engine.name;
        searchEngineSelect.appendChild(option);
    });
    console.log('Search engine dropdown populated');
}


populateSearchEngineDropdown();