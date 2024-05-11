/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // distDir: "dist",
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    async rewrites() {
        return [
            {
                source: "/covid",
                destination: "/test/index.html",
            }
        ];
    }
};

export default nextConfig;
