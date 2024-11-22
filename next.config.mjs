import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  compress: true,
  swcMinify: true,
};

export default withNextIntl(nextConfig);
