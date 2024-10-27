import Script from "next/script";

function Scripts() {
  return (
    <>
      {/* <!-- Google tag (gtag.js) -->*/}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js
				?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
		`,
        }}
      />

      {/* 카카오맵 */}
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=83545697a7ab39d76d740660c9541aa8&libraries=services&autoload=false"
        strategy="beforeInteractive"
      />
    </>
  );
}

export default Scripts;
