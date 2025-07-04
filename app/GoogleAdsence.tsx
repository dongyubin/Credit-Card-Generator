"use client";

import Script from "next/script";

const GoogleAdsence = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ADSENCE ? (
        <>
          <Script
            id="google-adsence"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENCE}"
     crossorigin="anonymous"></script>
                    <ins class="adsbygoogle"
                    style="display:block"
                    data-ad-client="${process.env.NEXT_PUBLIC_GOOGLE_ADSENCE}"
                    data-ad-slot="1430942601"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
              })();
            `,
            }}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default GoogleAdsence;
