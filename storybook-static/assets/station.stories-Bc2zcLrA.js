import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";var o,s,c,l=e((()=>{o=n(),s=t(r()),i(),c=s.forwardRef(({className:e,code:t,...n},r)=>(0,o.jsx)(`span`,{ref:r,className:a(`font-mono font-extrabold text-[11px] tracking-wider px-2 py-0.5 rounded border border-border bg-muted/60 text-muted-foreground`,e),...n,children:t.toUpperCase()})),c.displayName=`StationBadge`,c.__docgenInfo={description:``,methods:[],displayName:`StationBadge`,props:{code:{required:!0,tsType:{name:`string`},description:``}}}})),u,d,f,p=e((()=>{u=n(),d=t(r()),i(),f=d.forwardRef(({className:e,stationBadge:t,name:n,metaDetails:r,...i},o)=>(0,u.jsxs)(`div`,{ref:o,className:a(`flex flex-wrap items-center gap-3 py-2 border-b border-border/50 text-sm font-semibold`,e),...i,children:[t,(0,u.jsx)(`span`,{className:`text-foreground font-bold`,children:n}),r&&(0,u.jsx)(`span`,{className:`ml-auto text-xs text-muted-foreground font-medium`,children:r})]})),f.displayName=`StationInfoRow`,f.__docgenInfo={description:``,methods:[],displayName:`StationInfoRow`,props:{stationBadge:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},name:{required:!0,tsType:{name:`string`},description:``},metaDetails:{required:!1,tsType:{name:`string`},description:``}}}})),m,h,g,_=e((()=>{m=n(),h=t(r()),i(),g=h.forwardRef(({className:e,items:t,...n},r)=>(0,m.jsx)(`div`,{ref:r,className:a(`flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-muted-foreground`,e),...n,children:t.map((e,n)=>(0,m.jsxs)(`div`,{className:`flex items-center gap-1.5 font-medium`,children:[(0,m.jsxs)(`span`,{className:`text-muted-foreground/65 font-bold uppercase text-[9px] tracking-wider`,children:[e.label,`:`]}),(0,m.jsx)(`span`,{className:`text-foreground`,children:e.value}),n<t.length-1&&(0,m.jsx)(`span`,{className:`text-muted-foreground/30`,children:`•`})]},n))})),g.displayName=`StationMeta`,g.__docgenInfo={description:``,methods:[],displayName:`StationMeta`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string;
  value: React.ReactNode;
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}}]}}],raw:`Array<{
  label: string;
  value: React.ReactNode;
}>`},description:``}}}})),v,y,b,x=e((()=>{v=n(),y=t(r()),i(),b=y.forwardRef(({className:e,headerSlot:t,metaSlot:n,timelineSlot:r,actionsSlot:i,...o},s)=>(0,v.jsxs)(`div`,{ref:s,className:a(`rounded-xl border border-border bg-card p-5 shadow-premium-sm hover:shadow-premium-md transition-shadow duration-200 flex flex-col gap-4`,e),...o,children:[(t||i)&&(0,v.jsxs)(`div`,{className:`flex justify-between items-center gap-4`,children:[(0,v.jsx)(`div`,{className:`flex-1 min-w-0`,children:t}),i&&(0,v.jsx)(`div`,{className:`shrink-0`,children:i})]}),r&&(0,v.jsx)(`div`,{className:`w-full`,children:r}),n&&(0,v.jsx)(`div`,{className:`border-t border-border/50 pt-3.5`,children:n})]})),b.displayName=`StationCard`,b.__docgenInfo={description:``,methods:[],displayName:`StationCard`,props:{headerSlot:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},metaSlot:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},timelineSlot:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},actionsSlot:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),S,C,w,T=e((()=>{S=n(),C=t(r()),i(),w=C.forwardRef(({className:e,items:t,...n},r)=>(0,S.jsx)(`div`,{ref:r,className:a(`space-y-3`,e),...n,children:t.map((e,t)=>(0,S.jsxs)(`div`,{className:`flex items-center justify-between py-2 px-3 border border-border/40 rounded-lg bg-muted/10 text-xs font-semibold`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,S.jsx)(`span`,{className:`font-mono bg-muted border border-border px-1.5 py-0.5 rounded text-[10px]`,children:e.trainNumber}),(0,S.jsxs)(`div`,{className:`flex flex-col`,children:[(0,S.jsx)(`span`,{className:`text-foreground font-bold`,children:e.trainName}),(0,S.jsxs)(`span`,{className:`text-[10px] text-muted-foreground`,children:[`Platform `,e.platform,` • `,e.time]})]})]}),(0,S.jsx)(`div`,{className:`flex flex-col items-end gap-1`,children:(0,S.jsx)(`span`,{className:a(`text-[9px] uppercase font-bold px-2 py-0.5 rounded-full border`,e.delayStatus===`onTime`?`bg-green-500/10 text-green-600 border-green-500/20`:e.delayStatus===`delayed`?`bg-red-500/10 text-red-600 border-red-500/20`:`bg-slate-500/10 text-slate-500 border-slate-500/20`),children:e.delayStatus===`onTime`?`On Time`:e.delayLabel||`Delayed`})})]},t))})),w.displayName=`StationTimeline`,w.__docgenInfo={description:``,methods:[],displayName:`StationTimeline`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`StationTimelineItem`}],raw:`StationTimelineItem[]`},description:``}}}})),E,D,O,k,A;e((()=>{E=n(),l(),p(),_(),x(),T(),D={title:`Railway/Station`,component:b,parameters:{layout:`centered`},tags:[`autodocs`]},O={render:()=>(0,E.jsx)(b,{className:`w-[450px]`,headerSlot:(0,E.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,E.jsx)(c,{code:`NDLS`}),(0,E.jsx)(`span`,{className:`font-bold text-sm`,children:`New Delhi Railway Station`})]}),timelineSlot:(0,E.jsx)(w,{items:[{trainNumber:`12952`,trainName:`Mumbai Rajdhani`,time:`16:55`,platform:`3`,delayStatus:`onTime`},{trainNumber:`12002`,trainName:`Bhopal Shatabdi`,time:`06:00`,platform:`1`,delayStatus:`delayed`,delayLabel:`15m delay`}]}),metaSlot:(0,E.jsx)(g,{items:[{label:`Zone`,value:`NR`},{label:`State`,value:`Delhi`},{label:`Platforms`,value:`16`}]})})},k={render:()=>(0,E.jsxs)(`div`,{className:`w-[400px] space-y-1`,children:[(0,E.jsx)(f,{stationBadge:(0,E.jsx)(c,{code:`MMCT`}),name:`Mumbai Central`,metaDetails:`Zone: WR`}),(0,E.jsx)(f,{stationBadge:(0,E.jsx)(c,{code:`HWH`}),name:`Howrah Jn`,metaDetails:`Zone: ER`})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <StationCard className="w-[450px]" headerSlot={<div className="flex items-center gap-2">\r
          <StationBadge code="NDLS" />\r
          <span className="font-bold text-sm">New Delhi Railway Station</span>\r
        </div>} timelineSlot={<StationTimeline items={[{
    trainNumber: "12952",
    trainName: "Mumbai Rajdhani",
    time: "16:55",
    platform: "3",
    delayStatus: "onTime"
  }, {
    trainNumber: "12002",
    trainName: "Bhopal Shatabdi",
    time: "06:00",
    platform: "1",
    delayStatus: "delayed",
    delayLabel: "15m delay"
  }]} />} metaSlot={<StationMeta items={[{
    label: "Zone",
    value: "NR"
  }, {
    label: "State",
    value: "Delhi"
  }, {
    label: "Platforms",
    value: "16"
  }]} />} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[400px] space-y-1">\r
      <StationInfoRow stationBadge={<StationBadge code="MMCT" />} name="Mumbai Central" metaDetails="Zone: WR" />\r
      <StationInfoRow stationBadge={<StationBadge code="HWH" />} name="Howrah Jn" metaDetails="Zone: ER" />\r
    </div>
}`,...k.parameters?.docs?.source}}},A=[`DefaultCard`,`InfoRowDemo`]}))();export{O as DefaultCard,k as InfoRowDemo,A as __namedExportsOrder,D as default};