import {getNameInitials, removeLeadingNumbers} from "../core/utils.js";
import {STUDENTS_ROLE, STUDENTS_ROLE_PLURAL, TEACHERS_ROLE, TEACHERS_ROLE_PLURAL} from "../consts.js";

const organizingCommitteeSectionTemplate = data => `
    <section>
        <article class="prose lg:prose-xl px-4 lg:px-0 mx-auto mt-24">
            <h2 class="uppercase">${data?.title}</h2>
            ${data?.content}
        </article>
        
        ${data.teachersTemplate ?? ''}
        ${data.studentsTemplate ?? ''}
    </section>
`

const organizingCommitteeTemplate = (title, dataList) => `
    <article class="max-w-[50rem] px-4 lg:px-0 mx-auto my-10">
        <div class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50">
            <time class="text-lg font-semibold text-gray-900">${title}</time>
            
            ${dataList.map(data => `
                <ol class="mt-3 divide-y divider-gray-200">
                    <li>
                        <a href="${data?.link}" class="items-center block p-3 sm:flex hover:bg-gray-100">
                            <div class="hidden sm:inline-flex relative items-center justify-center w-12 h-12 mb-3 me-3 sm:mb-0 overflow-hidden bg-gray-200 rounded-full">
                                <span class="font-medium text-gray-600 uppercase">
                                    ${getNameInitials(data?.name)}
                                </span>
                            </div>
                            <div class="text-gray-600">
                                <div class="font-medium text-gray-900">
                                    ${data?.name}
                                </div>
                                <div class="text-sm font-normal">
                                    ${data?.position}
                                </div>
                            </div>
                        </a>
                    </li>
                </ol>
            `).join('')}
        </div>
    </article>
`

export const getOrganizingCommittee = (html, selector) => {
    const title = removeLeadingNumbers(html.querySelector(selector).textContent)
    const contentEl = html.querySelector(selector).nextElementSibling
    const content = contentEl.firstElementChild.outerHTML
    const tableEl = contentEl.querySelector('table')
    const tableData = getTableData(tableEl)
    const teachersTemplate = organizingCommitteeTemplate(TEACHERS_ROLE_PLURAL, tableData.filter(teacher => teacher.role === TEACHERS_ROLE))
    const studentsTemplate = organizingCommitteeTemplate(STUDENTS_ROLE_PLURAL, tableData.filter(teacher => teacher.role === STUDENTS_ROLE))

    return organizingCommitteeSectionTemplate({
        title,
        content,
        teachersTemplate,
        studentsTemplate
    })
}

const getTableData = (table) => {
    const trList = Array.from(table.querySelectorAll('tr'))

    const data = trList.map(tr => {
        const firstTr = tr.querySelector('td:first-child')
        const secondTr = tr.querySelector('td:last-child')

        const name = firstTr.textContent
        const link = firstTr.querySelector('a')?.getAttribute('href') ?? '#'
        const role = secondTr?.textContent.split("/").at(0)?.trim()
        const position = secondTr?.textContent.split("/").at(1)?.trim()

        return {name, link, role, position}
    })

    return data.filter(member => member.role && member.position)
}
