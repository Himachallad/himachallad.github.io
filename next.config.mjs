/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist",
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });

        return config;
    },
};

export default nextConfig;
