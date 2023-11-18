import {removeLeadingNumbers} from "../core/utils.js";
import {getAlertFromTable} from "../components/alert.js";

const genericSectionTemplate = data => `
    <section class="prose lg:prose-xl px-4 lg:px-0 mx-auto my-24">
        <article>
            <h2>${data.title}</h2>
            ${data.content}
            ${data.alerts}
        </article>
    </section>
`

export const getGenericSection = (html, selector) => {
    const title = removeLeadingNumbers(html.querySelector(selector).textContent)
    const contentEl = html.querySelector(selector).nextElementSibling
    let content = contentEl.outerHTML
    let alerts = ''

    if (contentEl.querySelector('table')) {
        const tables = Array.from(contentEl.querySelectorAll('table'))

        contentEl.querySelectorAll('table').forEach(el => el.parentElement.removeChild(el))

        alerts = tables.map(table => getAlertFromTable(table)).join('')

        if (alerts) {
            content = contentEl.outerHTML
        }
    }

    return genericSectionTemplate({
        title,
        content,
        alerts
    })
}
