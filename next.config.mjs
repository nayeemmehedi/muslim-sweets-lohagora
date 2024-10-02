/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '**', // Allows images from any domain, for testing purposes.
        },
      ],
    },
  };
  
  export default nextConfig;
  