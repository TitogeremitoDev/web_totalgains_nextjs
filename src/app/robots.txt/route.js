/* robots.txt hecho a mano (antes src/app/robots.js). El generador de Next no
   admite líneas propias y hacía falta Content-Signal (contentsignals.org): dice
   para qué se puede usar el contenido. Aquí, todo SÍ — buscar, responder con
   él e incluso entrenar IAs —, porque a TotalGains le interesa que las IAs lo
   conozcan (al revés que el ejemplo del revisor «agent-ready», que pone
   ai-train=no). Va en cada grupo: un robot con grupo propio solo lee el suyo. */

export const dynamic = "force-static";

// Toda la zona /app/ es la aplicación autenticada — NUNCA debe indexarse en SEO ni AI
const APP_DISALLOW = ["/app/", "/private/", "/api/"];
const SIGNAL = "search=yes, ai-input=yes, ai-train=yes";

const AGENTES = [
    "*",
    // AI crawlers — allow contenido público + disallow de la app
    "GPTBot", "Google-Extended", "ClaudeBot", "PerplexityBot", "OAI-SearchBot",
    "CCBot", "anthropic-ai", "Applebot-Extended", "Bytespider",
    // Bing/Copilot
    "bingbot", "msnbot",
];

export function GET() {
    const grupos = AGENTES.map((ua) => [
        `User-Agent: ${ua}`,
        `Content-Signal: ${SIGNAL}`,
        "Allow: /",
        ...APP_DISALLOW.map((ruta) => `Disallow: ${ruta}`),
    ].join("\n"));
    const texto = [
        "# Señales de contenido (https://contentsignals.org): search = mostrar el contenido en buscadores;",
        "# ai-input = usarlo para responder en tiempo real con IA; ai-train = entrenar modelos de IA.",
        "",
        grupos.join("\n\n"),
        "",
        "Sitemap: https://totalgains.es/sitemap.xml",
        "",
    ].join("\n");
    return new Response(texto, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
