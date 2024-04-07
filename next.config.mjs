/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images:{
      domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'],
      remotePatterns: [
          {
              hostname: 'res.cloudinary.com',
          },
          {
              hostname: 'lh3.googleusercontent.com',
          },
      ],
    }
};

export default nextConfig;
