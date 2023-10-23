export const replaceWithLocale = (router, word) => {
    return word + router.locale.charAt(0) + router.locale.slice(1)
}