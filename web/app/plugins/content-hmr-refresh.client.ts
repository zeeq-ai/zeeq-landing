export default defineNuxtPlugin(() => {
  if (!import.meta.dev || !import.meta.hot) {
    return
  }

  let reloadTimer: ReturnType<typeof setTimeout> | undefined

  // Nuxt Content emits updates for Markdown edits, but custom collection pages
  // do not always refresh their rendered content reliably. In dev, use a small
  // debounced full-page reload so content edits are immediately visible.
  import.meta.hot.on('nuxt-content:update', () => {
    if (reloadTimer) {
      clearTimeout(reloadTimer)
    }

    reloadTimer = setTimeout(() => {
      window.location.reload()
    }, 100)
  })
})
