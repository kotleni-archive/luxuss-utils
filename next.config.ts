import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://luksus-s.com/wp-content/uploads/**')],
    },
};

export default nextConfig;
