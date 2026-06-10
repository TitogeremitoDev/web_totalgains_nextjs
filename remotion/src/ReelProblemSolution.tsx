import { loadFont } from "@remotion/google-fonts/Carlito";
import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  OffthreadVideo,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const { fontFamily } = loadFont();
const BG = "#080d1a";
const BLUE = "#3b5bdb";
const GREEN = "#22c55e";
const RED = "#eb5763";
const FONT = `${fontFamily}, Lato, sans-serif`;
const CLOSE_FRAMES = 75;

type Props = {
  hook: string;
  subtext: string;
  hook2: string;
  subtext2: string;
  cta: string;
  clips: string[];
  music: string;
  clipFrames?: number;
};

const Caption: React.FC<{
  title: string;
  sub: string;
  kicker: string;
  kickerColor: string;
}> = ({ title, sub, kicker, kickerColor }) => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  const y = interpolate(frame, [0, 14], [30, 0], { extrapolateRight: "clamp" });
  return (
    <div
      style={{
        position: "absolute",
        top: 170,
        width: "100%",
        padding: "0 70px",
        textAlign: "center",
        opacity: op,
        transform: `translateY(${y}px)`,
      }}
    >
      <div
        style={{
          display: "inline-block",
          background: kickerColor,
          color: "#fff",
          fontSize: 30,
          fontWeight: 700,
          padding: "8px 26px",
          borderRadius: 999,
          marginBottom: 26,
          letterSpacing: 1,
        }}
      >
        {kicker}
      </div>
      <div
        style={{
          fontSize: 76,
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.1,
          textShadow: "0 4px 30px rgba(0,0,0,.55)",
          textWrap: "balance" as never,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 40,
          color: "#cdd6ec",
          marginTop: 22,
          textShadow: "0 3px 20px rgba(0,0,0,.6)",
        }}
      >
        {sub}
      </div>
    </div>
  );
};

export const ReelProblemSolution: React.FC<Props> = ({
  hook,
  subtext,
  hook2,
  subtext2,
  cta,
  clips,
  music,
  clipFrames = 240,
}) => {
  const { durationInFrames } = useVideoConfig();
  const closeStart = durationInFrames - CLOSE_FRAMES;

  return (
    <AbsoluteFill style={{ backgroundColor: BG, fontFamily: FONT }}>
      {clips.map((clip, i) => {
        const from = i * clipFrames;
        const dur = Math.min(clipFrames, Math.max(0, closeStart - from));
        if (dur <= 0) return null;
        return (
          <Sequence key={clip} from={from} durationInFrames={dur}>
            <OffthreadVideo
              src={staticFile(clip)}
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <AbsoluteFill
              style={{
                background:
                  "linear-gradient(180deg, rgba(8,13,26,.78) 0%, rgba(8,13,26,.15) 38%, rgba(8,13,26,.15) 62%, rgba(8,13,26,.85) 100%)",
              }}
            />
          </Sequence>
        );
      })}

      <Audio
        src={staticFile(music)}
        volume={(f) =>
          interpolate(
            f,
            [0, 20, closeStart, durationInFrames - 8],
            [0, 0.7, 0.7, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          )
        }
      />

      {/* Problema durante clip 0 */}
      <Sequence durationInFrames={clipFrames}>
        <Caption kicker="EL PROBLEMA" kickerColor={RED} title={hook} sub={subtext} />
      </Sequence>

      {/* Solución durante clip 1 */}
      <Sequence from={clipFrames} durationInFrames={Math.max(0, closeStart - clipFrames)}>
        <Caption kicker="LA SOLUCIÓN" kickerColor={GREEN} title={hook2} sub={subtext2} />
      </Sequence>

      <Sequence from={closeStart - 60} durationInFrames={60}>
        <CtaBox text={cta} />
      </Sequence>

      <Sequence from={closeStart} durationInFrames={CLOSE_FRAMES}>
        <Closing cta={cta} />
      </Sequence>

      <Img
        src={staticFile("logo.png")}
        style={{ position: "absolute", right: 36, bottom: 90, width: 80, height: 82, opacity: 0.92 }}
      />
    </AbsoluteFill>
  );
};

const CtaBox: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 14 } });
  return (
    <div
      style={{
        position: "absolute",
        top: 1600,
        height: 150,
        left: 70,
        right: 70,
        background: BLUE,
        borderRadius: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${pop})`,
        boxShadow: "0 12px 50px rgba(59,91,219,.45)",
      }}
    >
      <span style={{ color: "#fff", fontSize: 46, fontWeight: 700 }}>{text}</span>
    </div>
  );
};

const Closing: React.FC<{ cta: string }> = ({ cta }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const flash = interpolate(frame, [0, 4, 10], [1, 1, 0], { extrapolateRight: "clamp" });
  const zoom = spring({ frame: frame - 6, fps, config: { damping: 11 } });
  const fadeOut = interpolate(frame, [CLOSE_FRAMES - 18, CLOSE_FRAMES - 2], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 60 }}>
        <Img src={staticFile("logo.png")} style={{ width: 300, transform: `scale(${zoom})` }} />
        <div style={{ background: BLUE, borderRadius: 26, padding: "30px 70px", color: "#fff", fontSize: 48, fontWeight: 700, opacity: zoom }}>
          {cta}
        </div>
      </AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: "#fff", opacity: flash }} />
      <AbsoluteFill style={{ backgroundColor: "#000", opacity: fadeOut }} />
    </AbsoluteFill>
  );
};
