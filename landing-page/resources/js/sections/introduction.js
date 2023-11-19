const introductionTemplate = elements => `
    <section>
        <article class="prose lg:prose-xl px-4 lg:px-0 mx-auto my-16">
            ${elements.map(element => `<p>${element.textContent}</p>`).join('')}
        </article>
    </section>
`

export const getIntroduction = html => {
    const elements = Array.from(html
        .querySelector('#user-content-preamble')
        .querySelectorAll('p'))

    return introductionTemplate(elements)
}
