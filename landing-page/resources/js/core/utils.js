
export const removeLeadingNumbers = title =>
    title.replace(/[\n\r]+|[\s]{2,}/g, ' ')
        .trim()
        .replace(/^\d+\.\s*/, '')