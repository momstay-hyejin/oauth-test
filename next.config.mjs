/** @type {import('next').NextConfig} */
import withTM from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: true,
  
  swcMinify: true,
	images: {
		unoptimized: true
  },
  output: 'export'
};

export default withTM(['@codetrix-studio/capacitor-google-auth'])(nextConfig);