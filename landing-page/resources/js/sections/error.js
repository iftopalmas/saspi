import {renderTemplate} from "../core/render.js"

const errorTemplate = data => `
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
        <p class="text-center text-gray-600">
            Pedimos desculpas, estamos com dificuldades para acessar os dados da página.
        </p>
        
        ${data.error ? `<div class="mt-4 mb-6"><p class="md:text-sm text-gray-500">(${data.error})</p></div>` : ''}
        
        <div class="mt-4 text-center">
            <p class="text-gray-600 mb-3">Acesse informações pelo link abaixo:</p>
            <a href="https://github.com/iftopalmas/saspi" class="text-blue-500 hover:underline mr-2">Programação</a>
            <a href="https://www.instagram.com/caspi_ifto/" class="text-blue-500 hover:underline mr-2">CASPI</a>
            <a href="http://ifto.edu.br/palmas" class="text-blue-500 hover:underline">IFTO</a>
        </div>
    </div>`

export const renderError = data => renderTemplate(errorTemplate(data))
