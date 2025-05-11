import { DefaultSeo } from 'next-seo';

export function DefaultSEO() {
  return (
    <DefaultSeo
      defaultTitle="Kamion"
      description="Kamion Admin Dashboard"
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: 'https://admin.kamion.co/',
        siteName: 'Kamion',
      }}
      twitter={{
        handle: '@kamion',
        site: '@kamion',
        cardType: 'summary_large_image',
      }}
    />
  );
}
