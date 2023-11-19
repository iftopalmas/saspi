import {GITHUB_REPO_URL} from "../consts.js"
import {renderLoading} from "../components/loading.js"

export const getContent = async () => {
    try {
        renderLoading()

        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(GITHUB_REPO_URL)}`)

        if (! response.ok) {
            return Promise.reject(Error('Failed to fetch data'))
        }

        return response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}
