import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{n as o,t as s}from"./railway-tokens-CTYdScs7.js";var c,l,u,d=e((()=>{c=n(),l=t(r()),i(),u=l.forwardRef(({className:e,tier:t,...n},r)=>(0,c.jsx)(`span`,{ref:r,className:a(`inline-flex items-center text-xs font-bold px-2 py-0.5 rounded border border-border bg-card text-foreground`,e),...n,children:t.toUpperCase()})),u.displayName=`SeatBadge`,u.__docgenInfo={description:``,methods:[],displayName:`SeatBadge`,props:{tier:{required:!0,tsType:{name:`string`},description:``}}}})),f,p,m,h=e((()=>{f=n(),p=t(r()),i(),m=p.forwardRef(({className:e,coach:t,...n},r)=>(0,f.jsx)(`span`,{ref:r,className:a(`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider`,e),...n,children:t})),m.displayName=`CoachBadge`,m.__docgenInfo={description:``,methods:[],displayName:`CoachBadge`,props:{coach:{required:!0,tsType:{name:`string`},description:``}}}})),g,_,v,y=e((()=>{g=n(),_=t(r()),i(),v=_.forwardRef(({className:e,type:t,...n},r)=>(0,g.jsx)(`span`,{ref:r,className:a(`inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded bg-muted/40 text-muted-foreground border border-border/40`,e),...n,children:t})),v.displayName=`SeatTypeChip`,v.__docgenInfo={description:``,methods:[],displayName:`SeatTypeChip`,props:{type:{required:!0,tsType:{name:`string`},description:``}}}})),b,x,S,C=e((()=>{b=n(),x=t(r()),i(),o(),S=x.forwardRef(({className:e,status:t,count:n,totalQuota:r=100,...i},o)=>{let c=s.availability[t]||s.availability.available,l=Math.min(100,Math.max(0,n/r*100));return(0,b.jsxs)(`div`,{ref:o,className:a(`space-y-1.5 w-full`,e),...i,children:[(0,b.jsxs)(`div`,{className:`flex justify-between items-center text-xs font-semibold`,children:[(0,b.jsx)(`span`,{className:`text-muted-foreground font-medium`,children:`Availability`}),(0,b.jsxs)(`span`,{className:a(`font-bold px-2 py-0.5 rounded border text-[10px] uppercase`,c.bg,c.text,c.border),children:[t,` (`,n,`)`]})]}),(0,b.jsx)(`div`,{className:`h-1.5 w-full rounded-full bg-accent/40 overflow-hidden relative`,children:(0,b.jsx)(`div`,{className:a(`h-full rounded-full transition-all duration-500`,t===`available`?`bg-green-500`:t===`rac`?`bg-amber-500`:`bg-red-500`),style:{width:`${l}%`}})})]})}),S.displayName=`AvailabilityMeter`,S.__docgenInfo={description:``,methods:[],displayName:`AvailabilityMeter`,props:{status:{required:!0,tsType:{name:`union`,raw:`"available" | "rac" | "waitlist"`,elements:[{name:`literal`,value:`"available"`},{name:`literal`,value:`"rac"`},{name:`literal`,value:`"waitlist"`}]},description:``},count:{required:!0,tsType:{name:`number`},description:``},totalQuota:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}}}}})),w,T,E,D=e((()=>{w=n(),T=t(r()),i(),E=T.forwardRef(({className:e,coaches:t,...n},r)=>(0,w.jsx)(`div`,{ref:r,className:a(`flex flex-wrap gap-2 items-center text-xs font-semibold`,e),...n,children:t.map((e,t)=>(0,w.jsxs)(`div`,{className:a(`px-3 py-1.5 rounded-lg border flex flex-col items-center justify-center min-w-[50px] leading-tight cursor-pointer`,e.isSelected?`border-primary bg-primary/10 text-primary font-bold`:`border-border bg-card text-muted-foreground hover:border-muted-foreground/40 transition-colors`),children:[(0,w.jsx)(`span`,{className:`text-sm font-bold text-foreground`,children:e.code}),(0,w.jsx)(`span`,{className:`text-[9px] uppercase opacity-75`,children:e.type})]},t))})),E.displayName=`CoachLegend`,E.__docgenInfo={description:``,methods:[],displayName:`CoachLegend`,props:{coaches:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  code: string;
  type: string;
  isSelected?: boolean;
}`,signature:{properties:[{key:`code`,value:{name:`string`,required:!0}},{key:`type`,value:{name:`string`,required:!0}},{key:`isSelected`,value:{name:`boolean`,required:!1}}]}}],raw:`Array<{
  code: string;
  type: string;
  isSelected?: boolean;
}>`},description:``}}}})),O,k,A,j=e((()=>{O=n(),k=t(r()),i(),A=k.forwardRef(({className:e,items:t,...n},r)=>(0,O.jsx)(`div`,{ref:r,className:a(`flex flex-wrap gap-4 items-center text-xs font-semibold text-muted-foreground`,e),...n,children:t.map((e,t)=>(0,O.jsxs)(`div`,{className:`flex items-center gap-1.5 font-medium`,children:[(0,O.jsx)(`span`,{className:a(`h-2.5 w-2.5 rounded-sm shrink-0`,e.colorClass)}),(0,O.jsx)(`span`,{children:e.label})]},t))})),A.displayName=`SeatLegend`,A.__docgenInfo={description:``,methods:[],displayName:`SeatLegend`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string;
  colorClass: string;
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`colorClass`,value:{name:`string`,required:!0}}]}}],raw:`Array<{
  label: string;
  colorClass: string;
}>`},description:``}}}})),M,N,P,F,I,L,R,z,B;e((()=>{M=n(),d(),h(),y(),C(),D(),j(),N={title:`Railway/Seat`,component:S,parameters:{layout:`centered`},tags:[`autodocs`]},P={args:{status:`available`,count:45,totalQuota:100}},F={args:{status:`rac`,count:12,totalQuota:50}},I={args:{status:`waitlist`,count:8,totalQuota:20}},L={render:()=>(0,M.jsxs)(`div`,{className:`flex gap-3 items-center`,children:[(0,M.jsx)(u,{tier:`3A`}),(0,M.jsx)(u,{tier:`2A`}),(0,M.jsx)(u,{tier:`SL`}),(0,M.jsx)(m,{coach:`B1`}),(0,M.jsx)(m,{coach:`A2`}),(0,M.jsx)(v,{type:`Lower Berth`}),(0,M.jsx)(v,{type:`Side Upper`})]})},R={render:()=>(0,M.jsx)(E,{coaches:[{code:`ENG`,type:`Engine`},{code:`A1`,type:`2AC`},{code:`B1`,type:`3AC`,isSelected:!0},{code:`B2`,type:`3AC`},{code:`S1`,type:`Sleeper`}]})},z={render:()=>(0,M.jsx)(A,{items:[{label:`Available`,colorClass:`bg-green-500`},{label:`Booked`,colorClass:`bg-muted`},{label:`Selected`,colorClass:`bg-primary`}]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    status: "available",
    count: 45,
    totalQuota: 100
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    status: "rac",
    count: 12,
    totalQuota: 50
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    status: "waitlist",
    count: 8,
    totalQuota: 20
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3 items-center">\r
      <SeatBadge tier="3A" />\r
      <SeatBadge tier="2A" />\r
      <SeatBadge tier="SL" />\r
      <CoachBadge coach="B1" />\r
      <CoachBadge coach="A2" />\r
      <SeatTypeChip type="Lower Berth" />\r
      <SeatTypeChip type="Side Upper" />\r
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <CoachLegend coaches={[{
    code: "ENG",
    type: "Engine"
  }, {
    code: "A1",
    type: "2AC"
  }, {
    code: "B1",
    type: "3AC",
    isSelected: true
  }, {
    code: "B2",
    type: "3AC"
  }, {
    code: "S1",
    type: "Sleeper"
  }]} />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <SeatLegend items={[{
    label: "Available",
    colorClass: "bg-green-500"
  }, {
    label: "Booked",
    colorClass: "bg-muted"
  }, {
    label: "Selected",
    colorClass: "bg-primary"
  }]} />
}`,...z.parameters?.docs?.source}}},B=[`DefaultMeter`,`RACMeter`,`WaitlistMeter`,`BadgesDemo`,`CoachLegendDemo`,`SeatLegendDemo`]}))();export{L as BadgesDemo,R as CoachLegendDemo,P as DefaultMeter,F as RACMeter,z as SeatLegendDemo,I as WaitlistMeter,B as __namedExportsOrder,N as default};