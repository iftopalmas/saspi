// Método para buscar o conteúdo da página
const fetchReadmeContent = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return await response.text();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Método para obter as seções de cada parte do container
const getSectionsFromContainer = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const container = doc.querySelector('.markdown-body.entry-content.container-lg');

    if (!container) {
        throw new Error('Container not found');
    }

    // Manipulate and extract sections as needed
    // For example:
    const sections = container.querySelectorAll('h1, h2, h3, p');
    const extractedSections = Array.from(sections).map(section => ({
        tagName: section.tagName,
        content: section.textContent.trim(),
    }));

    return extractedSections;
}

// Método para renderizar o conteúdo
const renderContent = (sections) => {
    // Render the content into a new structure, for example:
    const renderedContent = sections.map(section => {
        return `<${section.tagName}>${section.content}</${section.tagName}>`;
    }).join('');

    // Assuming you want to append this content to an existing HTML element with ID 'output'
    const outputElement = document.querySelector('main');

    if (outputElement) {
        outputElement.innerHTML = renderedContent;
    }
}

const displayErrorMessage = (message) => {
    const errorHTML = document.createElement('div');
    errorHTML.innerHTML = `
                <div class="flex flex-col bg-gray-50 items-center justify-center h-screen px-4">
                <div>
                    <svg fill="none" viewBox="0 0 465.79 348.34" xmlns="http://www.w3.org/2000/svg" class="w-full">
                     <g transform="translate(-219.13 -126.3)" fill="none">
                      <rect x="221.13" y="128.3" width="461.79" height="344.34" rx="4.194" stroke="#e1e4e5" stroke-width="4"/>
                      <path class="stroke-gray-600" d="m404.57 247.97v23.992m95.978-23.992v23.992m35.801 108.38s-31.442-30.145-83.879-30.145c-52.436 0-83.879 30.145-83.879 30.145" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="33.798"/>
                      <g stroke="#e1e4e5">
                       <rect x="221.13" y="128.3" width="461.79" height="40.04" rx="4.194" stroke-width="4"/>
                       <g stroke-width="4.194">
                        <rect x="237.14" y="141.65" width="13.347" height="13.347" rx="6.673"/>
                        <rect x="261.17" y="141.65" width="13.347" height="13.347" rx="6.673"/>
                        <rect x="285.19" y="141.65" width="13.347" height="13.347" rx="6.673"/>
                       </g>
                      </g>
                     </g>
                    </svg>
                </div>

                  <h1 class="text-4xl font-bold mb-4 text-gray-600 mt-4">ERRO</h1>
                  <p class="text-center text-gray-600">Pedimos desculpas, estamos com dificuldades para acessar os dados da página.</p>

                  <div class="mt-4 mb-6">
                    <p class="md:text-sm text-gray-500">(${message})</p>
                  </div>

                  <div class="mt-4 text-center">
                    <p class="text-gray-600 mb-3">Acesse informações pelo link abaixo:</p>
                    <a href="https://github.com/iftopalmas/saspi" class="text-blue-500 hover:underline mr-2">Programação</a>
                    <a href="https://www.instagram.com/caspi_ifto/" class="text-blue-500 hover:underline mr-2">CASPI</a>
                    <a href="http://ifto.edu.br/palmas" class="text-blue-500 hover:underline">IFTO</a>
                  </div>
                </div>
            `;

    const container = document.querySelector('main');
    container.innerHTML = '';

    container.appendChild(errorHTML);
}

// Chamada para buscar o conteúdo, extrair seções e renderizar
//const githubRepoURL = 'https://github.com/iftopalmas/saspi';
const githubRepoURL = 'http://127.0.0.1:5500/index.html';

fetchReadmeContent(githubRepoURL)
    .then(html => {
        const sections = getSectionsFromContainer(html);
        renderContent(sections);
    })
    .catch(error => {
        console.error('Error:', error);
        displayErrorMessage(error);
    });