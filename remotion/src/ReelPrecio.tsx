import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadCarlito } from "@remotion/google-fonts/Carlito";
import React from "react";
import { AbsoluteFill, Img, OffthreadVideo, Sequence, interpolate, spring,
  staticFile, useCurrentFrame, useVideoConfig } from "remotion";
const { fontFamily: ANTON } = loadAnton();
const { fontFamily: CAR } = loadCarlito();
const BG="#080d1a", BLUE="#3b5bdb", LBLUE="#60a5fa", GREEN="#22c55e", RED="#eb5763", WHITE="#ffffff";
const tStyle=(c:string,s:number):React.CSSProperties=>({fontFamily:ANTON,fontStyle:"italic",
  transform:"skewX(-9deg)",textTransform:"uppercase",color:c,fontSize:s,lineHeight:1.04,letterSpacing:1,margin:0});
const cover:React.CSSProperties={width:"100%",height:"100%",objectFit:"cover"};

const Seg:React.FC<{clip:string;off:number;dur:number;kind:"pushin"|"punch";focus?:"left"|"right"}>=({clip,off,dur,kind,focus})=>{
  const f=useCurrentFrame();
  const z = kind==="punch"
    ? interpolate(f,[0,5,dur],[1.22,1.0,1.07],{extrapolateRight:"clamp"})
    : interpolate(f,[0,dur],[1.02,1.12]);
  const fs = focus? 1.42 : 1;
  const tx = focus==="left"? 22 : focus==="right"? -22 : 0;
  return (<AbsoluteFill style={{transform:`scale(${z*fs}) translateX(${tx}%)`}}>
    <Sequence from={-off}><OffthreadVideo src={staticFile(clip)} muted style={cover}/></Sequence>
  </AbsoluteFill>);
};

const Hook:React.FC<{lines:string[];color?:string;top?:number;size?:number}>=({lines,color=WHITE,top=210,size=84})=>{
  const f=useCurrentFrame();
  const op=interpolate(f,[0,8],[0,1],{extrapolateRight:"clamp"});
  const y=interpolate(f,[0,10],[24,0],{extrapolateRight:"clamp"});
  return (<div style={{position:"absolute",top,left:64,right:64,opacity:op,transform:`translateY(${y}px)`}}>
    {lines.map((l,i)=><p key={i} style={{...tStyle(color,size),textShadow:"0 4px 26px rgba(0,0,0,.6)"}}>{l}</p>)}</div>);
};

const BigPrice:React.FC<{label:string;num:string;color:string}>=({label,num,color})=>{
  const f=useCurrentFrame();
  const sc=interpolate(f,[0,5],[1.3,1.0],{extrapolateRight:"clamp"});  // punch-zoom
  const op=interpolate(f,[0,3],[0,1],{extrapolateRight:"clamp"});
  return (<AbsoluteFill style={{justifyContent:"center",alignItems:"center"}}>
    <div style={{textAlign:"center",transform:`scale(${sc})`,opacity:op}}>
      <p style={{...tStyle(WHITE,68),textShadow:"0 4px 30px rgba(0,0,0,.8)"}}>{label}</p>
      <div style={{...tStyle(color,310),lineHeight:1,textShadow:"0 10px 50px rgba(0,0,0,.8)"}}>
        {num}<span style={{fontFamily:CAR,fontStyle:"normal",fontWeight:700,fontSize:150}}>€</span></div>
    </div></AbsoluteFill>);
};
const Remate:React.FC=()=>{
  const f=useCurrentFrame(); const {fps}=useVideoConfig();
  const s=spring({frame:f,fps,config:{damping:11}});
  return (<div style={{position:"absolute",top:1470,left:0,right:0,textAlign:"center",transform:`scale(${0.7+0.3*s})`,opacity:s}}>
    <p style={{...tStyle(LBLUE,76),textShadow:"0 4px 24px rgba(0,0,0,.8)"}}>TU PRECIO ES UN FILTRO</p></div>);
};
const Watermark:React.FC=()=> (<Img src={staticFile("logo.png")} style={{position:"absolute",right:36,bottom:90,width:80,height:82,opacity:0.95}}/>);

export const ReelPrecio:React.FC=()=>{
  return (<AbsoluteFill style={{backgroundColor:BG,fontFamily:CAR}}>
    {/* 6 segmentos = jump-cuts + zooms */}
    <Sequence from={0} durationInFrames={48}><Seg clip="clip_precio_e1.mp4" off={0} dur={48} kind="pushin"/></Sequence>
    <Sequence from={48} durationInFrames={54}><Seg clip="clip_precio_e1.mp4" off={130} dur={54} kind="punch"/></Sequence>
    <Sequence from={102} durationInFrames={73}><Seg clip="clip_precio_e2.mp4" off={0} dur={73} kind="pushin" focus="left"/></Sequence>
    <Sequence from={175} durationInFrames={65}><Seg clip="clip_precio_e2.mp4" off={150} dur={65} kind="punch" focus="right"/></Sequence>
    <Sequence from={240} durationInFrames={60}><Seg clip="clip_precio_e3.mp4" off={0} dur={60} kind="pushin"/></Sequence>
    <Sequence from={300} durationInFrames={60}><Seg clip="clip_precio_e3.mp4" off={120} dur={60} kind="punch"/></Sequence>

    {/* overlays */}
    <Sequence from={6} durationInFrames={96}><Hook lines={["DOS ENTRENADORES","HACEN LO MISMO."]} size={86}/></Sequence>
    <Sequence from={102} durationInFrames={73}>
      <AbsoluteFill style={{background:"rgba(8,13,26,.30)"}}/>
      <Sequence from={8}><BigPrice label="UNO COBRA" num="60" color={RED}/></Sequence>
    </Sequence>
    <Sequence from={175} durationInFrames={65}>
      <AbsoluteFill style={{background:"rgba(8,13,26,.30)"}}/>
      <BigPrice label="OTRO COBRA" num="300" color={GREEN}/>
    </Sequence>
    <Sequence from={245} durationInFrames={52}><Hook lines={["LA DIFERENCIA","NO ES EL","SERVICIO."]} size={78}/></Sequence>
    <Sequence from={300} durationInFrames={55}><Hook lines={["ES CÓMO SE","POSICIONAN."]} size={88}/></Sequence>
    <Sequence from={335} durationInFrames={25}><Remate/></Sequence>

    <Sequence from={360} durationInFrames={90}><Closing/></Sequence>
    <Watermark/>
    <Sequence from={434} durationInFrames={16}><FadeBlack/></Sequence>
  </AbsoluteFill>);
};

const Closing:React.FC=()=>{
  const f=useCurrentFrame(); const {fps}=useVideoConfig();
  const flash=interpolate(f,[0,9,24],[1,1,0],{extrapolateRight:"clamp"});
  const zoom=spring({frame:f-4,fps,config:{damping:10,stiffness:120}});
  const cta=spring({frame:f-24,fps,config:{damping:14}});
  return (<AbsoluteFill style={{backgroundColor:BG}}>
    <AbsoluteFill style={{justifyContent:"center",alignItems:"center",flexDirection:"column",gap:60}}>
      <Img src={staticFile("logo.png")} style={{width:700,transform:`scale(${zoom})`,filter:"drop-shadow(0 20px 90px rgba(59,91,219,.65))"}}/>
      <div style={{background:BLUE,borderRadius:28,padding:"40px 86px",textAlign:"center",transform:`scale(${cta})`,boxShadow:"0 18px 80px rgba(59,91,219,.75)"}}>
        <div style={{color:WHITE,fontFamily:ANTON,fontStyle:"italic",fontSize:74,transform:"skewX(-8deg)"}}>TOTALGAINS.ES</div>
        <div style={{color:"#e9eeff",fontFamily:CAR,fontWeight:700,fontSize:40,marginTop:10}}>14 días gratis · sin tarjeta</div>
      </div>
    </AbsoluteFill>
    <AbsoluteFill style={{backgroundColor:"#fff",opacity:flash}}/>
  </AbsoluteFill>);
};
const FadeBlack:React.FC=()=>{const f=useCurrentFrame();const o=interpolate(f,[0,15],[0,1],{extrapolateLeft:"clamp",extrapolateRight:"clamp"});return <AbsoluteFill style={{backgroundColor:"#000",opacity:o}}/>;};
