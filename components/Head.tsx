import React from 'react';
import NextHead from 'next/head';

interface HeadProps {
  title?: string;
}

const Head: React.FC<HeadProps> = ({ title }) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title || 'Github Profile'}</title>
      <meta
        name="description"
        content={'A web app for visualizing your Github data'}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon-16x16.png"
      />
      <meta name="theme-color" content="#0d1117" />
      <meta
        property="og:url"
        content={'https://githubprofile.karabiberisapps.com'}
      />
      <meta property="og:title" content={'Github Profile'} />
      <meta
        property="og:description"
        content={'A web app for visualizing your Github data'}
      />
    </NextHead>
  );
};

export default Head;
