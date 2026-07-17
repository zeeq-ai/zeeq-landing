# Content Directory

This Nuxt app extends Docus while keeping the existing Vue landing page at `/`.

Docus derives documentation routes from the content tree. Because this app embeds docs under the `/docs` route, the documentation files intentionally live under `content/docs`. That folder maps the documentation namespace to `/docs` and keeps it separate from the landing page and any future non-doc content.

Do not flatten these files into `content/` unless the app is converted back into a standalone docs site. In a standalone Docus app, top-level content can own the root routes. In this landing app, moving the docs files up to `content/` would make them compete with root-level routes instead of preserving the `/docs` namespace.

The `/docs` entry route redirects to the first real content page, `content/docs/1.getting-started/1.introduction.md`, so the left navigation reflects the actual `Getting Started` subtree instead of a synthetic root page.
