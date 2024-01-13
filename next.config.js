/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  // theme: './themes/theme1/index.jsx',
  themeConfig: './nextra-theme.config.tsx',
  defaultShowCopyCode: true,
  latex: true
})

const nextConfig = {}

module.exports = withNextra(nextConfig)
