import path from 'node:path';

// next-intl's createNextIntlPlugin() only maps `next-intl/config` to the
// request config here, but it loads @swc/core on import, and @swc/core 1.16
// refuses to run on machines whose %LOCALAPPDATA% grants an AppContainer SID
// write access. The alias below is the same mapping without the plugin.
const requestConfig = './src/i18n/request.ts';

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      'next-intl/config': requestConfig,
    },
  },
  webpack(config) {
    config.resolve.alias['next-intl/config'] = path.resolve(requestConfig);
    return config;
  },
};

export default nextConfig;
