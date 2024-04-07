import Script from "next/script";
import React from "react";

type AdsenseType = { publisherId: string }

function AdSense({ publisherId }: AdsenseType) {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}

export default AdSense;
