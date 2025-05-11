import { NextSeo } from 'next-seo';
import { ComponentProps } from 'react';

type PageTitleProps = ComponentProps<typeof NextSeo>;

export function PageTitle({
  title,
  description,
  canonical,
  noindex = false,
  nofollow = false,
}: PageTitleProps) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      noindex={noindex}
      nofollow={nofollow}
      openGraph={{
        title,
        description,
        url: canonical,
      }}
    />
  );
}
