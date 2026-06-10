import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { ReelTotalGains } from "./ReelTotalGains";
import { ReelProblemSolution } from "./ReelProblemSolution";
import { ReelWhatsAppV2 } from "./ReelWhatsAppV2";
import { ReelPrecio } from "./ReelPrecio";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="ReelTotalGains"
        component={ReelTotalGains}
        durationInFrames={480}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          hook: "Tu gym pierde clientes cada día",
          subtext: "Y no es por el precio",
          cta: "totalgains.es · 14 días gratis",
          clips: ["clip1.mp4"],
          music: "phonk.mp3",
          clipFrames: 240,
        }}
      />
      <Composition
        id="ReelProblemSolution"
        component={ReelProblemSolution}
        durationInFrames={480}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          hook: "Si gestionas a tus atletas por WhatsApp… esto te va a doler",
          subtext: "Chats, PDFs y Excel: el caos que te frena",
          hook2: "Un sistema que trabaja por ti",
          subtext2: "Rutinas y dietas con IA, cobros y seguimiento. En un sitio.",
          cta: "totalgains.es · 14 días gratis",
          clips: ["clip_problema.mp4", "clip_solucion.mp4"],
          music: "music_tg.mp3",
          clipFrames: 240,
        }}
      />
      <Composition
        id="ReelWhatsAppV2"
        component={ReelWhatsAppV2}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition id="ReelPrecio" component={ReelPrecio} durationInFrames={450} fps={30} width={1080} height={1920} />
    </>
  );
};
