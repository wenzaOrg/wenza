"use client";

import Script from "next/script";

const TawkMessenger = () => {
  const propertyId = process.env.NEXT_PUBLIC_TAWKTO_PROJECT_ID;
  const widgetId = process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID;

  if (!propertyId || !widgetId) return null;

  return (
    <>
      <Script
        id="tawk-to-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          `,
        }}
      />
      <Script
        id="tawk-to-script"
        strategy="afterInteractive"
        src={`https://embed.tawk.to/${propertyId}/${widgetId}`}
        crossOrigin="anonymous"
      />
    </>
  );
};

export default TawkMessenger;
