import {APP_TAG_SELECTOR, README_CONTAINER_TAG_SELECTOR} from "../consts.js"
import {getHero} from "../sections/hero.js"
import {getIntroduction} from "../sections/introduction.js"
import {getGenericSection} from "../sections/genericSection.js"
import {getOrganizingCommittee} from "../sections/organizingCommittee.js"
import {getEventSchedule} from "../sections/eventSchedule.js"

export const renderSections = html => {
    const effectiveHtml = html.querySelector(README_CONTAINER_TAG_SELECTOR)
    const container = document.querySelector(APP_TAG_SELECTOR)
    container.innerHTML = ''

    container.innerHTML += getHero(effectiveHtml)
    container.innerHTML += getIntroduction(effectiveHtml)
    container.innerHTML += getGenericSection(effectiveHtml, '#user-content-objetivo-geral')
    container.innerHTML += getGenericSection(effectiveHtml, '#user-content-objetivos-específicos')
    container.innerHTML += getGenericSection(effectiveHtml, '#user-content-bem-vindo-ao-ifto-campus-palmas')
    container.innerHTML += getEventSchedule(effectiveHtml, '#user-content-programação')
    container.innerHTML += getGenericSection(effectiveHtml, '#user-content-inscrições')
    container.innerHTML += getGenericSection(effectiveHtml, '#user-content-certificado')
    container.innerHTML += getOrganizingCommittee(effectiveHtml, '#user-content-comissão-organizadora')
}

export const renderTemplate = template => {
    const errorEl = document.createElement('div')
    errorEl.innerHTML = template

    const app = document.querySelector(APP_TAG_SELECTOR)
    app.innerHTML = ''

    app.appendChild(errorEl)
}
