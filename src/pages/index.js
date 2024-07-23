import { Inter } from "next/font/google";
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   GoogleAuth.initialize({
  //     clientId: process.env.NEXT_PUBLIC_GOOGLE_IOS_CLIENT_ID,
  //     scopes: ['profile', 'email'],
  //     grantOfflineAccess: true,
  //   });
  // }, []);

  const handleGoogleLogin = async () => {
    try {
      // const user = await GoogleAuth.signIn();
          const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}?provider=google`;
    const scope =
      'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
    const responseType = 'code';

    const oauthURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=${responseType}&client_id=${
      process.env.NEXT_PUBLIC_GOOGLE_IOS_CLIENT_ID
    }&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
    window.location.href = oauthURL;
      // console.log('User Info: ', )
      handleLoginSuccess('succsess')
    } catch (error) {
      handleLoginFailure(error)
    }
  };

  const handleLoginSuccess = (response) => {
    console.log('Google Sign-In Success', response);
    router.push('/auth')
  };

  const handleLoginFailure = (error) => {
    console.error('Google Sign-In Error', error);
  };

  return (
    <main className='flex justify-center items-center mt-4'>
      <button onClick={handleGoogleLogin} className='border p-1 pointer'>구글 로그인</button>
    </main>
  );
}
