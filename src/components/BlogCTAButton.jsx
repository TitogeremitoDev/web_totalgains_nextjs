"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";
import { trackEvent } from "@/components/Analytics";

export default function BlogCTAButton() {
    return (
        <Link
            href="/onboarding/"
            className="btn btn-gold"
            onClick={() => trackEvent('cta_click', { cta_text: 'Empieza gratis', cta_location: 'blog_sidebar' })}
        >
            <Rocket size={16} /> Empieza gratis
        </Link>
    );
}
