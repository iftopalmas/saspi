import {removeLeadingNumbers} from "../core/utils.js"

const eventScheduleSectionTemplate = data => `
    <section>
        <article class="prose lg:prose-xl px-4 lg:px-0 mx-auto mt-24">
            <h2 class="uppercase">${data.title}</h2>
            ${data.content}
        </article>
        
        ${data.eventSchedulesTemplates ?? ''}
    </section>
`

const eventScheduleTemplate = (dataList) => `
    <article class="max-w-[50rem] px-4 lg:px-0 mx-auto my-10">
        <ol class="relative border-s border-gray-200">
        
            ${dataList?.map(day => `
                <li class="mb-16 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time class="text-base font-normal leading-none text-gray-500">
                        ${day?.eventDate}
                    </time>
                    
                    ${day?.dailySchedules.map(
                        dayEvent => `
                            <div class="mt-10">
                                <h3 class="text-lg font-semibold text-gray-900">${dayEvent?.schedule}</h3>
                                <p class="mb-4 text-base font-normal text-gray-500">${dayEvent?.time} - ${dayEvent?.local}</p>
                            </div>
                        `
                    ).join('')}
                    
                </li>
            `).join('')}
            
        </ol>
    </article>
`

export const getEventSchedule = (html, selector) => {
    const title = removeLeadingNumbers(html.querySelector(selector).textContent)
    const contentEl = html.querySelector(selector).nextElementSibling
    const elementsContents = Array.from(contentEl.querySelectorAll(':scope > div:not(:has(> table))'))
    const content = elementsContents.map(el => el?.outerHTML).join('')
    const scheduleEls = contentEl.querySelectorAll(':scope > div:has(> h3 + table)')
    const data = getDataScheduleData(scheduleEls)
    const eventSchedulesTemplates = eventScheduleTemplate(data)

    return eventScheduleSectionTemplate({
        title,
        content,
        eventSchedulesTemplates
    })
}

const getDataScheduleData = (scheduleEls) => {
    const scheduleElsList = Array.from(scheduleEls)

    return scheduleElsList.map(schedule => {
        const table = schedule.lastElementChild
        const eventDate = removeLeadingNumbers(schedule.firstElementChild.textContent)
        const dailySchedules = getTableData(table)

        return {eventDate, dailySchedules}
    })
}

const getTableData = (table) => {
    const trList = Array.from(table.querySelectorAll('tr'))

    const data = trList.map(tr => {

        const time = tr.querySelector('td:first-child')?.textContent
        const schedule = tr.querySelector('td:nth-child(2)')?.textContent
        const local = tr.querySelector('td:nth-child(3)')?.textContent

        return {time, schedule, local}
    })

    return data.filter(item => item.time && item.schedule && item.local).slice(1)
}
