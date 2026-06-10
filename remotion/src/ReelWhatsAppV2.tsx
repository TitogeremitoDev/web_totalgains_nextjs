import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadCarlito } from "@remotion/google-fonts/Carlito";
import React from "react";
import {
  AbsoluteFill, Img, OffthreadVideo, Sequence, interpolate, spring,
  staticFile, useCurrentFrame, useVideoConfig,
} from "remotion";

const { fontFamily: ANTON } = loadAnton();
const { fontFamily: CARLITO } = loadCarlito();
const BG = "#080d1a", BLUE = "#3b5bdb", LBLUE = "#60a5fa", GREEN = "#22c55e", RED = "#eb5763", WHITE = "#ffffff";

const E1 = 90, E2 = 244, E3 = 372, END = 450; // cut frames

const titleStyle = (color: string, size = 86): React.CSSProperties => ({
  fontFamily: ANTON, fontStyle: "italic", transform: "skewX(-9deg)",
  textTransform: "uppercase", color, fontSize: size, lineHeight: 1.04,
  letterSpacing: 1, margin: 0,
});

const TopScrim: React.FC = () => (
  <AbsoluteFill style={{
    background: "linear-gradient(180deg, rgba(8,13,26,.82) 0%, rgba(8,13,26,.45) 26%, rgba(8,13,26,0) 46%)",
  }} />
);

const Caption: React.FC<{ lines: string[]; color: string; top?: number; size?: number }> =
  ({ lines, color, top = 150, size = 86 }) => {
    const f = useCurrentFrame();
    const op = interpolate(f, [0, 10], [0, 1], { extrapolateRight: "clamp" });
    const y = interpolate(f, [0, 12], [26, 0], { extrapolateRight: "clamp" });
    return (
      <div style={{ position: "absolute", top, left: 64, right: 64, opacity: op, transform: `translateY(${y}px)` }}>
        {lines.map((ln, i) => (
          <p key={i} style={titleStyle(color, size)}>{ln}</p>
        ))}
      </div>
    );
  };

const Watermark: React.FC = () => (
  <Img src={staticFile("logo.png")}
    style={{ position: "absolute", right: 36, bottom: 90, width: 80, height: 82, opacity: 0.95 }} />
);

export const ReelWhatsAppV2: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BG, fontFamily: CARLITO }}>
      {/* E1 DOLOR */}
      <Sequence from={0} durationInFrames={E1}>
        <OffthreadVideo src={staticFile("clip_problema.mp4")} muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <TopScrim />
        <Caption color={WHITE} size={82}
          lines={["Si gestionas", "a tus atletas", "por WhatsApp…"]} />
      </Sequence>

      {/* E2 AGITACIÓN */}
      <Sequence from={E1} durationInFrames={E2 - E1}>
        <OffthreadVideo src={staticFile("clip_e2.mp4")} muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <TopScrim />
        <Sequence from={10} durationInFrames={(E2 - E1) - 10}>
          <Caption color={WHITE} size={92} lines={["15-40 h al mes", "en esto"]} />
        </Sequence>
        <Sequence from={78} durationInFrames={(E2 - E1) - 78}>
          <div style={{ position: "absolute", top: 470, left: 64, right: 64 }}>
            <Caption color={RED} size={80} lines={["Y el atleta", "que no ves…", "se va"]} />
          </div>
        </Sequence>
      </Sequence>

      {/* E3 GIRO */}
      <Sequence from={E2} durationInFrames={E3 - E2}>
        <OffthreadVideo src={staticFile("clip_solucion.mp4")} muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <AbsoluteFill style={{
          background: "linear-gradient(180deg, rgba(8,13,26,.8) 0%, rgba(8,13,26,.25) 30%, rgba(8,13,26,.55) 100%)",
        }} />
        <UIPhone />
        <Caption color={WHITE} size={80} lines={["Todo en un", "solo panel"]} />
        <GreenCheck />
      </Sequence>

      {/* E4 CIERRE */}
      <Sequence from={E3} durationInFrames={END - E3}>
        <Closing />
      </Sequence>

      {/* WATERMARK siempre visible */}
      <Watermark />

      {/* Fade final a negro (encima de todo) */}
      <Sequence from={END - 16} durationInFrames={16}>
        <FadeBlack />
      </Sequence>
    </AbsoluteFill>
  );
};

const UIPhone: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: f - 4, fps, config: { damping: 16 } });
  const y = interpolate(pop, [0, 1], [120, 0]);
  return (
    <div style={{
      position: "absolute", left: 0, right: 0, top: 560, display: "flex",
      justifyContent: "center", transform: `translateY(${y}px)`, opacity: pop,
    }}>
      <div style={{ filter: "drop-shadow(0 24px 70px rgba(59,91,219,.45))" }}>
        <Img src={staticFile("ui_tg.png")} style={{ width: 430 }} />
      </div>
    </div>
  );
};

const GreenCheck: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f - 6, fps, config: { damping: 12 } });
  return (
    <div style={{
      position: "absolute", top: 392, left: 64, width: 74, height: 74, borderRadius: 999,
      background: GREEN, display: "flex", alignItems: "center", justifyContent: "center",
      transform: `scale(${s})`, color: "#fff", fontSize: 46, fontFamily: CARLITO, fontWeight: 700,
    }}>✓</div>
  );
};

const Closing: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const flash = interpolate(f, [0, 4, 10], [1, 1, 0], { extrapolateRight: "clamp" });
  const zoom = spring({ frame: f - 6, fps, config: { damping: 11 } });
  const ctaPop = spring({ frame: f - 26, fps, config: { damping: 14 } });
  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 56 }}>
        <Img src={staticFile("logo.png")} style={{ width: 300, transform: `scale(${zoom})` }} />
        <div style={{
          background: BLUE, borderRadius: 26, padding: "28px 56px", color: WHITE,
          fontFamily: CARLITO, fontSize: 40, fontWeight: 700, transform: `scale(${ctaPop})`,
          boxShadow: "0 12px 50px rgba(59,91,219,.5)", textAlign: "center",
        }}>totalgains.es · 14 días gratis · sin tarjeta</div>
      </AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: "#fff", opacity: flash }} />
    </AbsoluteFill>
  );
};

const FadeBlack: React.FC = () => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <AbsoluteFill style={{ backgroundColor: "#000", opacity: o }} />;
};
