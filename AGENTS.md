# Vue 3.5, Nuxt, and Nuxt UI Landing Site

This is a modern, responsive landing page website that uses:

- Vue 3.5
- TypeScript
- Nuxt
- Nuxt UI (uses Tailwind CSS)

## Nuxt UI MCP

Use to obtain component documentation.  Don't guess about Nuxt UI components; use the tool to get docs, props, slots, etc.

Also available:

- <https://ui.nuxt.com/llms.txt> (more efficient, quick overview)
- <https://ui.nuxt.com/llms-full.txt>

## Firebase

This application deploys as a static website to Firebase hosting.

- `firebase.json` and `.firebaserc` are the Firebase configuration files

## Key Design Rules

- Use Nuxt UI components whenever possible and use docs to get props, slots, API
  - Use Nuxt UI `Page*` and `Dashboard*` components to build pages and dashboards
  - Minimally use the `<style>` element in the SFC (only when necessary)
- Layouts should be responsive; aim for responsive designs whenever possible
- Compilation target for final delivery is a static website; no dynamic backend
- Be mindful of spacing: consistent, responsive, and clear visual separation

## Key Technical Rules

- Organize components following Nuxt best practices
- Vue Single File Component Layout (SFC) order: `<template></template>`, `<script setup lang="ts"></script>`, `<style scoped></style>`
- In the `<script>`: imports, local type declarations, `defineProps` `defineModel`, `defineEmits`, `ref`, `computed`, `watch`, functions
- Use Vue Composition API and refactor common code into composables
- Adhere to Model View View Model (MVVM) pattern and create local view models using `computed`
- Avoid calling functions from `<template>` `v-for`; precompute the view model using `computed` because this is cached and reactive

## Interacting with UI

- Use browser tool if provided or Playwright MCP tool
- The application is running in a browser with HMR; avoid killing the process and restarting the server
