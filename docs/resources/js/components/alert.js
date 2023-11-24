import {hasSingleEmoji} from "../core/utils.js"

const alertTemplate = data => `
    <div class="p-4 mb-4 text-sm rounded-lg ${data.alertClass}">
        <span class="[&>*]:font-normal [&>*]:text-current">
            ${data.alertContent}
        </span>
    </div>
`

export const getAlertFromTable = (table) => {
    const emoji = table.querySelector('tr:first-child td:first-child').querySelector('div').textContent

    if (! emoji) {
        return ''
    }

    if (! hasSingleEmoji(emoji)) {
        return ''
    }

    const alertContent = table.querySelector('tr:first-child td:last-child').outerHTML
    let alertClass

    switch (emoji) {
        case '📎':
            alertClass = 'text-blue-800 bg-blue-50'
            break
        case '❗':
            alertClass = 'text-red-800 bg-red-50'
            break
        default:
            alertClass = 'text-gray-800 bg-gray-50'
            break
    }

    return alertTemplate({
        alertClass,
        alertContent
    })
}
