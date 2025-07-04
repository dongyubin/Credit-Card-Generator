"use client";

import Script from "next/script";

const GoogleAdsence = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ADSENCE && (
        <>
          {/* 1. 加载 Google AdSense 库 */}
          <Script
            id="google-adsense-library"
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENCE}`}
            crossOrigin="anonymous"
          />

          {/* 2. 放置广告容器 */}
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENCE}
            data-ad-slot="1430942601"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />

          {/* 3. 初始化广告 */}
          <Script
            id="google-adsense-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (adsbygoogle = window.adsbygoogle || []).push({});
              `
            }}
          />
        </>
      )}
    </>
  );
};

export default GoogleAdsence;