"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// ═══════════════════════════════════════════════
// ANALYTICS — GA4 + GTM + Microsoft Clarity
// Configura tus IDs en .env.local:
//   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
//   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
//   NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX
// ═══════════════════════════════════════════════

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function Analytics() {
    const pathname = usePathname();

    // Track page views on route change
    useEffect(() => {
        if (GA4_ID && typeof window.gtag === "function") {
            window.gtag("config", GA4_ID, {
                page_path: pathname,
            });
        }
    }, [pathname]);

    // Don't render scripts if no IDs configured
    if (!GA4_ID && !GTM_ID && !CLARITY_ID) return null;

    return (
        <>
            {/* ── Google Tag Manager ── */}
            {GTM_ID && (
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${GTM_ID}');
                        `,
                    }}
                />
            )}

            {/* ── Google Analytics 4 ── */}
            {GA4_ID && (
                <>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA4_ID}', {
                                    page_path: window.location.pathname,
                                    send_page_view: true
                                });
                            `,
                        }}
                    />
                </>
            )}

            {/* ── Microsoft Clarity ── */}
            {CLARITY_ID && (
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window,document,"clarity","script","${CLARITY_ID}");
                        `,
                    }}
                />
            )}
        </>
    );
}

// ═══════════════════════════════════════════════
// HELPER: Track conversion events from any component
// Usage: import { trackEvent } from '@/components/Analytics';
//        trackEvent('cta_click', { cta_text: 'Empieza gratis' });
// ═══════════════════════════════════════════════
export function trackEvent(eventName, params = {}) {
    // GA4
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", eventName, params);
    }
    // GTM dataLayer
    if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...params,
        });
    }
}
