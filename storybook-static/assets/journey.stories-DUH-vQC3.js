import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{O as o,b as s,it as c,mt as l,ot as u,t as d,ut as f}from"./lucide-react-CiXeiYw5.js";import{r as p,t as m}from"./es-DOc7_Z7u.js";import{n as h,t as g}from"./railway-tokens-CTYdScs7.js";var _,v,y,b=e((()=>{_=n(),v=t(r()),i(),h(),y=v.forwardRef(({className:e,source:t,destination:n,date:r,duration:i,status:o=`onTime`,actions:s,...c},l)=>{let u=g.delays[o];return(0,_.jsxs)(`div`,{ref:l,className:a(`rounded-xl border border-border bg-card p-5 shadow-premium-sm hover:shadow-premium-md transition-shadow duration-200 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center`,e),...c,children:[(0,_.jsxs)(`div`,{className:`flex flex-col gap-2 flex-1 min-w-0`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-3 flex-wrap`,children:[(0,_.jsx)(`span`,{className:`text-lg font-bold tracking-tight text-foreground`,children:t}),(0,_.jsx)(`span`,{className:`text-muted-foreground text-sm font-semibold`,children:`➜`}),(0,_.jsx)(`span`,{className:`text-lg font-bold tracking-tight text-foreground`,children:n})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-4 text-xs font-semibold text-muted-foreground flex-wrap`,children:[r&&(0,_.jsx)(`span`,{children:r}),i&&(0,_.jsxs)(`span`,{children:[`• `,i]}),(0,_.jsx)(`span`,{className:a(`px-2 py-0.5 rounded-full text-[10px] font-bold border`,u.bg,u.text,u.border),children:u.label})]})]}),s&&(0,_.jsx)(`div`,{className:`flex items-center gap-2 shrink-0 w-full md:w-auto justify-end`,children:s})]})}),y.displayName=`JourneyCard`,y.__docgenInfo={description:``,methods:[],displayName:`JourneyCard`,props:{source:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},destination:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},date:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},duration:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},status:{required:!1,tsType:{name:`union`,raw:`"onTime" | "delayed" | "cancelled" | "diverted"`,elements:[{name:`literal`,value:`"onTime"`},{name:`literal`,value:`"delayed"`},{name:`literal`,value:`"cancelled"`},{name:`literal`,value:`"diverted"`}]},description:``,defaultValue:{value:`"onTime"`,computed:!1}},actions:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),x,S,C,w=e((()=>{x=n(),S=t(r()),i(),C=S.forwardRef(({className:e,currentStatus:t,progressSlot:n,eta:r,trainInfo:i,metadata:o,primaryCta:s,secondaryCta:c,statusBanner:l,...u},d)=>(0,x.jsxs)(`div`,{ref:d,className:a(`rounded-2xl border border-border bg-gradient-to-br from-card to-muted/20 p-6 md:p-8 shadow-premium-md relative overflow-hidden flex flex-col gap-6`,e),...u,children:[l&&(0,x.jsx)(`div`,{className:`w-full shrink-0`,children:l}),(0,x.jsxs)(`div`,{className:`flex flex-col md:flex-row justify-between gap-6 items-start`,children:[(0,x.jsxs)(`div`,{className:`space-y-2 flex-1 min-w-0`,children:[i&&(0,x.jsx)(`div`,{className:`flex items-center gap-2 flex-wrap`,children:i}),t&&(0,x.jsx)(`div`,{className:`text-xl md:text-2xl font-bold tracking-tight text-foreground`,children:t}),r&&(0,x.jsx)(`div`,{className:`text-sm font-semibold text-muted-foreground`,children:r})]}),(0,x.jsxs)(`div`,{className:`flex items-center gap-2 shrink-0 flex-wrap`,children:[c,s]})]}),n&&(0,x.jsx)(`div`,{className:`w-full shrink-0`,children:n}),o&&(0,x.jsx)(`div`,{className:`border-t border-border pt-4 w-full text-xs text-muted-foreground`,children:o})]})),C.displayName=`JourneyHero`,C.__docgenInfo={description:``,methods:[],displayName:`JourneyHero`,props:{currentStatus:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},progressSlot:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},eta:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},trainInfo:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},metadata:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},primaryCta:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},secondaryCta:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},statusBanner:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),T,E,D,O=e((()=>{T=n(),E=t(r()),i(),D=E.forwardRef(({className:e,items:t,...n},r)=>(0,T.jsx)(`div`,{ref:r,className:a(`grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border border-border bg-card shadow-premium-sm`,e),...n,children:t.map((e,t)=>(0,T.jsxs)(`div`,{className:`flex items-center gap-3`,children:[e.icon&&(0,T.jsx)(`div`,{className:`h-8 w-8 rounded-lg bg-accent/40 flex items-center justify-center text-muted-foreground shrink-0`,children:e.icon}),(0,T.jsxs)(`div`,{className:`flex flex-col leading-tight min-w-0`,children:[(0,T.jsx)(`span`,{className:`text-[10px] font-bold text-muted-foreground uppercase tracking-wider`,children:e.label}),(0,T.jsx)(`span`,{className:`text-sm font-semibold text-foreground truncate`,children:e.value})]})]},t))})),D.displayName=`JourneySummary`,D.__docgenInfo={description:``,methods:[],displayName:`JourneySummary`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string;
  value: React.ReactNode;
  icon?: React.ReactNode;
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`icon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}}]}}],raw:`Array<{
  label: string;
  value: React.ReactNode;
  icon?: React.ReactNode;
}>`},description:``}}}})),k,A,j,M=e((()=>{k=n(),A=t(r()),i(),m(),h(),j=A.forwardRef(({className:e,percentage:t,currentStation:n,delayStatus:r=`onTime`,eta:i,...o},s)=>{let c=g.delays[r];return(0,k.jsxs)(`div`,{ref:s,className:a(`space-y-2.5 w-full`,e),...o,children:[(0,k.jsxs)(`div`,{className:`flex justify-between items-center text-xs font-semibold text-muted-foreground`,children:[n&&(0,k.jsxs)(`span`,{children:[`Current: `,(0,k.jsx)(`strong`,{className:`text-foreground`,children:n})]}),i&&(0,k.jsxs)(`span`,{children:[`ETA: `,(0,k.jsx)(`strong`,{className:`text-foreground`,children:i})]})]}),(0,k.jsx)(`div`,{className:`h-2 w-full rounded-full bg-accent/40 overflow-hidden relative`,children:(0,k.jsx)(p.div,{initial:{width:0},animate:{width:`${t}%`},transition:{type:`spring`,stiffness:80,damping:15},className:a(`h-full rounded-full transition-colors duration-300`,r===`onTime`?`bg-green-500`:r===`delayed`?`bg-red-500`:`bg-muted-foreground`)})}),(0,k.jsxs)(`div`,{className:`flex justify-between items-center text-[10px] font-bold uppercase tracking-wider`,children:[(0,k.jsx)(`span`,{className:c.text,children:c.label}),(0,k.jsxs)(`span`,{className:`text-muted-foreground`,children:[t,`% Complete`]})]})]})}),j.displayName=`JourneyProgress`,j.__docgenInfo={description:``,methods:[],displayName:`JourneyProgress`,props:{percentage:{required:!0,tsType:{name:`number`},description:``},currentStation:{required:!1,tsType:{name:`string`},description:``},delayStatus:{required:!1,tsType:{name:`union`,raw:`"onTime" | "delayed" | "cancelled" | "diverted"`,elements:[{name:`literal`,value:`"onTime"`},{name:`literal`,value:`"delayed"`},{name:`literal`,value:`"cancelled"`},{name:`literal`,value:`"diverted"`}]},description:``,defaultValue:{value:`"onTime"`,computed:!1}},eta:{required:!1,tsType:{name:`string`},description:``}}}})),N,P,F,I=e((()=>{N=n(),P=t(r()),i(),d(),h(),F=P.forwardRef(({className:e,stops:t,...n},r)=>(0,N.jsxs)(`div`,{ref:r,className:a(`relative pl-6 space-y-6 py-2`,e),...n,children:[(0,N.jsx)(`div`,{className:`absolute left-2.5 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2`}),t.map((e,t)=>{let n=e.status===`completed`,r=e.status===`current`,i=e.status===`delayed`,o=e.status===`cancelled`,s=e.status===`skipped`;return(0,N.jsxs)(`div`,{className:`relative flex flex-col md:flex-row md:items-center justify-between gap-2`,children:[(0,N.jsxs)(`div`,{className:a(`absolute left-[-23px] h-5 w-5 rounded-full flex items-center justify-center border bg-background z-10 transition-colors`,g.timelineStatus[e.status]),children:[!n&&!i&&!s&&(0,N.jsx)(`div`,{className:a(`h-1.5 w-1.5 rounded-full`,r?`bg-primary`:`bg-muted-foreground/30`)}),n&&(0,N.jsx)(f,{className:`h-4.5 w-4.5 text-primary-foreground fill-primary`}),i&&(0,N.jsx)(l,{className:`h-4.5 w-4.5 text-red-500 fill-red-500/20`}),s&&(0,N.jsx)(u,{className:`h-4.5 w-4.5 text-muted-foreground`})]}),(0,N.jsxs)(`div`,{className:`flex-1 leading-tight min-w-0`,children:[(0,N.jsx)(`span`,{className:a(`text-sm font-semibold block`,o&&`line-through text-muted-foreground`,r?`text-foreground font-bold`:`text-muted-foreground hover:text-foreground transition-colors`),children:e.name}),(0,N.jsxs)(`span`,{className:`text-xs text-muted-foreground flex items-center gap-2 flex-wrap mt-0.5`,children:[(0,N.jsx)(`span`,{children:e.time}),e.platform&&(0,N.jsxs)(`span`,{children:[`• Platform `,e.platform]}),i&&e.delayMinutes&&(0,N.jsxs)(`span`,{className:`text-red-500 font-semibold`,children:[`(Delayed `,e.delayMinutes,`m)`]})]})]})]},t)})]})),F.displayName=`JourneyTimeline`,F.__docgenInfo={description:``,methods:[],displayName:`JourneyTimeline`,props:{stops:{required:!0,tsType:{name:`Array`,elements:[{name:`TimelineStop`}],raw:`TimelineStop[]`},description:``}}}})),L,R,z,B,V,H,U,W,G;e((()=>{L=n(),b(),w(),O(),M(),I(),d(),R={title:`Railway/Journey`,component:y,parameters:{layout:`centered`},tags:[`autodocs`]},z={args:{source:`NDLS`,destination:`MMCT`,date:`Fri, 4 Jul`,duration:`16h 10m`,status:`onTime`,actions:(0,L.jsx)(`button`,{className:`px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md`,children:`View details`})}},B={args:{source:`HWH`,destination:`NDLS`,date:`Fri, 4 Jul`,duration:`17h 30m`,status:`delayed`,actions:(0,L.jsx)(`button`,{className:`px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md`,children:`View details`})}},V={render:()=>(0,L.jsx)(D,{items:[{label:`Train Number`,value:`12952`,icon:(0,L.jsx)(s,{className:`h-4 w-4`})},{label:`Journey Date`,value:`04 Jul 2026`,icon:(0,L.jsx)(c,{className:`h-4 w-4`})},{label:`Halt Count`,value:`7 Stops`,icon:(0,L.jsx)(o,{className:`h-4 w-4`})}]})},H={render:()=>(0,L.jsx)(j,{percentage:65,currentStation:`Ratlam Jn (RTM)`,delayStatus:`onTime`,eta:`08:35 AM`})},U={render:()=>(0,L.jsx)(F,{stops:[{name:`New Delhi (NDLS)`,time:`16:55`,status:`completed`,platform:`3`},{name:`Kota Jn (KOTA)`,time:`22:15`,status:`completed`,platform:`1`},{name:`Ratlam Jn (RTM)`,time:`02:00`,status:`current`,platform:`4`,delayMinutes:10},{name:`Vadodara Jn (BRC)`,time:`04:50`,status:`upcoming`,platform:`2`},{name:`Mumbai Central (MMCT)`,time:`08:35`,status:`upcoming`,platform:`5`}]})},W={render:()=>(0,L.jsx)(C,{className:`w-[600px]`,trainInfo:(0,L.jsx)(`span`,{className:`text-xs font-bold text-primary`,children:`12952 • Mumbai Rajdhani`}),currentStatus:`Approaching Ratlam Jn (RTM)`,eta:`ETA: 08:35 AM • Running 10 mins late`,progressSlot:(0,L.jsx)(j,{percentage:60,currentStation:`Kota Jn`,delayStatus:`delayed`,eta:`08:45 AM`}),metadata:(0,L.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{className:`block text-[10px] uppercase font-bold text-muted-foreground`,children:`Source`}),(0,L.jsx)(`span`,{className:`text-sm font-semibold`,children:`New Delhi (NDLS)`})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{className:`block text-[10px] uppercase font-bold text-muted-foreground`,children:`Destination`}),(0,L.jsx)(`span`,{className:`text-sm font-semibold`,children:`Mumbai Central (MMCT)`})]})]}),primaryCta:(0,L.jsx)(`button`,{className:`px-4 py-2 text-xs bg-primary text-primary-foreground rounded-lg font-bold`,children:`Track Live`}),secondaryCta:(0,L.jsx)(`button`,{className:`px-4 py-2 text-xs border rounded-lg font-bold`,children:`Share Status`})})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    source: "NDLS",
    destination: "MMCT",
    date: "Fri, 4 Jul",
    duration: "16h 10m",
    status: "onTime",
    actions: <button className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md">View details</button>
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    source: "HWH",
    destination: "NDLS",
    date: "Fri, 4 Jul",
    duration: "17h 30m",
    status: "delayed",
    actions: <button className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md">View details</button>
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <JourneySummary items={[{
    label: "Train Number",
    value: "12952",
    icon: <Navigation className="h-4 w-4" />
  }, {
    label: "Journey Date",
    value: "04 Jul 2026",
    icon: <Clock className="h-4 w-4" />
  }, {
    label: "Halt Count",
    value: "7 Stops",
    icon: <MapPin className="h-4 w-4" />
  }]} />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <JourneyProgress percentage={65} currentStation="Ratlam Jn (RTM)" delayStatus="onTime" eta="08:35 AM" />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <JourneyTimeline stops={[{
    name: "New Delhi (NDLS)",
    time: "16:55",
    status: "completed",
    platform: "3"
  }, {
    name: "Kota Jn (KOTA)",
    time: "22:15",
    status: "completed",
    platform: "1"
  }, {
    name: "Ratlam Jn (RTM)",
    time: "02:00",
    status: "current",
    platform: "4",
    delayMinutes: 10
  }, {
    name: "Vadodara Jn (BRC)",
    time: "04:50",
    status: "upcoming",
    platform: "2"
  }, {
    name: "Mumbai Central (MMCT)",
    time: "08:35",
    status: "upcoming",
    platform: "5"
  }]} />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <JourneyHero className="w-[600px]" trainInfo={<span className="text-xs font-bold text-primary">12952 • Mumbai Rajdhani</span>} currentStatus="Approaching Ratlam Jn (RTM)" eta="ETA: 08:35 AM • Running 10 mins late" progressSlot={<JourneyProgress percentage={60} currentStation="Kota Jn" delayStatus="delayed" eta="08:45 AM" />} metadata={<div className="grid grid-cols-2 gap-4">\r
          <div>\r
            <span className="block text-[10px] uppercase font-bold text-muted-foreground">Source</span>\r
            <span className="text-sm font-semibold">New Delhi (NDLS)</span>\r
          </div>\r
          <div>\r
            <span className="block text-[10px] uppercase font-bold text-muted-foreground">Destination</span>\r
            <span className="text-sm font-semibold">Mumbai Central (MMCT)</span>\r
          </div>\r
        </div>} primaryCta={<button className="px-4 py-2 text-xs bg-primary text-primary-foreground rounded-lg font-bold">Track Live</button>} secondaryCta={<button className="px-4 py-2 text-xs border rounded-lg font-bold">Share Status</button>} />
}`,...W.parameters?.docs?.source}}},G=[`CardOnTime`,`CardDelayed`,`SummaryView`,`ProgressIndicator`,`TimelineView`,`HeroDashboard`]}))();export{B as CardDelayed,z as CardOnTime,W as HeroDashboard,H as ProgressIndicator,V as SummaryView,U as TimelineView,G as __namedExportsOrder,R as default};