
export const removeLeadingNumbers = title =>
    title.replace(/[\n\r]+|[\s]{2,}/g, ' ')
        .trim()
        .replace(/^\d+\.\s*/, '')

export const hasSingleEmoji = text => {
    const emojiRegex = /^[\u{1F000}-\u{1FFFF}\u{2000}-\u{3FFF}\u{E000}-\u{EFFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}\u{FE00}-\u{FEFF}\u{20D0}-\u{20FF}\u{1F900}-\u{1F9FF}\u{1F1E6}-\u{1F1FF}]+$/u
    return emojiRegex.test(text)
}
