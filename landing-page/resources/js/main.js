import {getContent} from "./core/getContent.js"
import {renderError} from "./sections/error.js"
import {renderSections} from "./core/render.js"

getContent()
    .then(htmlString => {
        const parser = new DOMParser();
        return parser.parseFromString(htmlString, 'text/html');
    })
    .then(html => renderSections(html))
    .catch(error => {
        console.error('Error:', error)
        renderError({error})
    })