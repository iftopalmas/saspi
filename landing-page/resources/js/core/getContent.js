import {GITHUB_REPO_URL} from "../consts.js"
import {renderLoading} from "../sections/loading.js"

export const getContent = async () => {
    try {
        renderLoading()

        const response = await fetch(GITHUB_REPO_URL)

        if (! response.ok) {
            return Promise.reject(Error('Failed to fetch data'))
        }

        return response.text()
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}