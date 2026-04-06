import Script from "next/script";
import { SITE } from "@/lib/constants";

export function Analytics() {
  return (
    <>
      {/* Google Analytics (GA4) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE.google.analyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${SITE.google.analyticsId}');
          ${
            SITE.google.adsId
              ? `gtag('config', '${SITE.google.adsId}');`
              : "// TODO: Add Google Ads ID"
          }
        `}
      </Script>

      {/* Conversion tracking helper */}
      <Script id="conversion-helpers" strategy="afterInteractive">
        {`
          // Track form submissions
          window.trackFormSubmission = function(formName) {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'form_submission', {
                event_category: 'Lead',
                event_label: formName,
              });
              ${
                SITE.google.adsId
                  ? `// gtag('event', 'conversion', { send_to: '${SITE.google.adsId}/CONVERSION_LABEL' });`
                  : ""
              }
            }
          };

          // Track phone clicks
          window.trackPhoneClick = function() {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'phone_click', {
                event_category: 'Lead',
                event_label: '${SITE.phone}',
              });
            }
          };

          // Track CTA clicks
          window.trackCTAClick = function(ctaName) {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'cta_click', {
                event_category: 'Engagement',
                event_label: ctaName,
              });
            }
          };
        `}
      </Script>

      {/* Mia Chatbot Widget */}
      <Script
        src={SITE.miaWidget.src}
        data-widget-id={SITE.miaWidget.id}
        strategy="lazyOnload"
      />
    </>
  );
}
