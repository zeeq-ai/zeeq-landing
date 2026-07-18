import { installMermaid } from 'v-beautiful-mermaid/client'
import 'v-beautiful-mermaid/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  installMermaid(nuxtApp.vueApp, {
    lightTheme: 'zinc-light',
    darkTheme: 'zinc-dark',
    colorMode: 'auto',
  })
})
