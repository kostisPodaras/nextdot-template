import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  children: HTMLElement | Object | [],
  title: string,
  description: string,
  siteTitle?: string,
  siteDescription?: string,
  url?: string,
  absoluteImageUrl?: string,
  canonicalLink?: string,
  noindex?: boolean,
};

const Meta = ({
  children,
  title,
  description,
  siteTitle,
  siteDescription,
  url,
  absoluteImageUrl,
  canonicalLink,
  noindex,
}: Props) => (
  <Helmet>
    {children}
    {title && <title>{title}</title>}
    {title && <meta property="og:title" content={title} />}
    {description && <meta name="description" content={description} />}
    {description && <meta property="og:description" content={description} />}
    {url && <meta property="og:type" content="website" />}
    {url && <meta property="og:url" content={url} />}
    {noindex && <meta name="robots" content="noindex" />}
    {canonicalLink && <link rel="canonical" href={canonicalLink} />}

    <meta property="og:locale" content="en_US" />

    {siteTitle && <meta property="og:site_name" content={siteTitle} />}
    {siteDescription && (
      <meta name="twitter:description" content={siteDescription} />
    )}
    {siteTitle && <meta name="twitter:title" content={siteTitle} />}
    {absoluteImageUrl && (
      <meta name="twitter:image" content={absoluteImageUrl} />
    )}
    {absoluteImageUrl && (
      <meta name="twitter:card" content={absoluteImageUrl} />
    )}
    {absoluteImageUrl && (
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
    )}
    {absoluteImageUrl && (
      <meta property="og:image" content={absoluteImageUrl} />
    )}
  </Helmet>
);

Meta.defaultProps = {
  siteTitle: '',
  siteDescription: '',
  url: '',
  absoluteImageUrl: '',
  canonicalLink: '',
  noindex: false,
};

export default Meta;
