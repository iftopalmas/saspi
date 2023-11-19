import {removeLeadingNumbers} from "../core/utils.js"
import {getAlertFromTable} from "../components/alert.js"

const genericSectionTemplate = data => `
    <section id="${data?.selector?.substring(1)}" class="prose lg:prose-xl px-4 lg:px-0 mx-auto py-4">
        <article>
            <h2 class="uppercase">${data.title}</h2>
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
        selector,
        title,
        content,
        alerts
    })
}
