import { DefaultSEO } from '@/components/seo/DefaultSEO';
import { Providers } from '@/providers';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <DefaultSEO />
      <Component {...pageProps} />
    </Providers>
  );
}
