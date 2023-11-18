import {APP_TAG_SELECTOR} from "../consts.js"
import {getHero} from "../sections/hero.js";
import {getIntroduction} from "../sections/introduction.js";
import {getGenericSection} from "../sections/genericSection.js";
import {getOrganizingCommittee} from "../sections/organizingCommittee.js";

export const renderSections = html => {
    const container = document.querySelector(APP_TAG_SELECTOR)
    container.innerHTML = ''

    container.innerHTML += getHero(html)
    container.innerHTML += getIntroduction(html)
    container.innerHTML += getGenericSection(html, '#user-content-objetivo-geral')
    container.innerHTML += getGenericSection(html, '#user-content-objetivos-específicos')
    container.innerHTML += getGenericSection(html, '#user-content-bem-vindo-ao-ifto-campus-palmas')
    container.innerHTML += getGenericSection(html, '#user-content-inscrições')
    container.innerHTML += getGenericSection(html, '#user-content-certificado')
    container.innerHTML += getOrganizingCommittee(html, '#user-content-comissão-organizadora')
}

export const renderTemplate = template => {
    const errorEl = document.createElement('div')
    errorEl.innerHTML = template

    const app = document.querySelector(APP_TAG_SELECTOR)
    app.innerHTML = ''

    app.appendChild(errorEl)
}
