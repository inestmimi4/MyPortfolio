module.exports = {
    reactStrictMode: true,
    env: {
        NAME: process.env.NAME,
    },
    async rewrites() {
        return [
            {
                source: '/CV/:path*',
                destination: '/CV/:path*',
            },
        ];
    },
};