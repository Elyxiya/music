// vite-env.d.ts
interface ImportMetaEnv {
  readonly VUE_APP_VERSION: string
  readonly VUE_APP_VISITOR_BADGE_ID: string
  readonly VUE_APP_BASE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
