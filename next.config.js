/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './nextra-theme.config.tsx',
  defaultShowCopyCode: true
})

const nextConfig = {}

module.exports = withNextra(nextConfig)
