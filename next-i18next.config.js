module.exports = {
  i18n: {
    locales: ['en', 'ko', 'ja'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: { useSuspense: false },
}