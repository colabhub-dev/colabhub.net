declare module 'nuxt/schema' {
  interface RuntimeConfig {
    mongoUri: string,
    googleClientId: string,
    googleClientSecret: string,
    googleRedirectUrl: string,
  }
}

export {}
