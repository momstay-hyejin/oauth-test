import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.oauth.test',
  appName: 'oauth-test',
  webDir: 'out',
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: process.env.NEXT_PUBLIC_GOOGLE_IOS_CLIENT_ID,
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
