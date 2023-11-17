import {removeLeadingNumbers} from "../core/utils.js";

const genericSectionTemplate = data => `
    <section>
        <article class="prose lg:prose-xl px-4 lg:px-0 mx-auto my-16">
            <h2>${data.title}</h2>
            ${data.content}
        </article>
    </section>
`

export const getGenericSection = (html, selector) => {
    const data = {}

    data.title = removeLeadingNumbers(html.querySelector(selector).textContent)
    data.content = html.querySelector(selector).nextElementSibling.outerHTML

    return genericSectionTemplate(data)
}
