const nextConfig = {
    reactStrictMode: true,

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://trains-backend-refactored-476707797740.europe-west9.run.app/api/:path*'
            }
        ];
    },

    async headers() {
        return [
            {
                source: '/api/(.*)',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, POST, PUT, DELETE, OPTIONS',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'Content-Type, Authorization',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
