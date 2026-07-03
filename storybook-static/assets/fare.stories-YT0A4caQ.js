import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";var o,s,c,l=e((()=>{o=n(),s=t(r()),i(),c=s.forwardRef(({className:e,amount:t,...n},r)=>(0,o.jsxs)(`span`,{ref:r,className:a(`inline-flex items-center text-xs font-bold px-2 py-0.5 rounded border border-primary/20 bg-primary/10 text-primary`,e),...n,children:[`₹`,t]})),c.displayName=`FareChip`,c.__docgenInfo={description:``,methods:[],displayName:`FareChip`,props:{amount:{required:!0,tsType:{name:`number`},description:``}}}})),u,d,f,p=e((()=>{u=n(),d=t(r()),i(),f=d.forwardRef(({className:e,difference:t,...n},r)=>{let i=t<0,o=Math.abs(t);return(0,u.jsx)(`span`,{ref:r,className:a(`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border`,i?`bg-green-500/10 text-green-600 border-green-500/20`:`bg-red-500/10 text-red-600 border-red-500/20`,e),...n,children:i?`-₹${o}`:`+₹${o}`})}),f.displayName=`PriceDifferenceBadge`,f.__docgenInfo={description:``,methods:[],displayName:`PriceDifferenceBadge`,props:{difference:{required:!0,tsType:{name:`number`},description:``}}}})),m,h,g,_=e((()=>{m=n(),h=t(r()),i(),g=h.forwardRef(({className:e,tierName:t,price:n,description:r,isSelected:i=!1,rightSlot:o,...s},c)=>(0,m.jsxs)(`div`,{ref:c,className:a(`rounded-xl border p-4 shadow-premium-sm hover:shadow-premium-md transition-all duration-200 flex justify-between items-center gap-4 cursor-pointer`,i?`border-primary bg-primary/5 ring-1 ring-primary`:`border-border bg-card`,e),...s,children:[(0,m.jsxs)(`div`,{className:`flex flex-col gap-1 min-w-0`,children:[(0,m.jsx)(`span`,{className:`text-sm font-bold text-foreground`,children:t}),r&&(0,m.jsx)(`span`,{className:`text-xs text-muted-foreground font-medium`,children:r})]}),(0,m.jsxs)(`div`,{className:`flex items-center gap-3 shrink-0`,children:[(0,m.jsxs)(`span`,{className:`text-base font-extrabold text-foreground`,children:[`₹`,n]}),o]})]})),g.displayName=`FareCard`,g.__docgenInfo={description:``,methods:[],displayName:`FareCard`,props:{className:{required:!1,tsType:{name:`string`},description:``},tierName:{required:!0,tsType:{name:`string`},description:``},price:{required:!0,tsType:{name:`number`},description:``},description:{required:!1,tsType:{name:`string`},description:``},isSelected:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},rightSlot:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),v,y,b,x=e((()=>{v=n(),y=t(r()),i(),b=y.forwardRef(({className:e,title:t=`Fare Comparison`,items:n,...r},i)=>(0,v.jsxs)(`div`,{ref:i,className:a(`rounded-xl border border-border bg-card p-5 shadow-premium-sm flex flex-col gap-4`,e),...r,children:[t&&(0,v.jsx)(`span`,{className:`text-xs font-bold text-muted-foreground uppercase tracking-wider`,children:t}),(0,v.jsx)(`div`,{className:`flex flex-col gap-2`,children:n.map((e,t)=>(0,v.jsxs)(`div`,{className:`flex justify-between items-center py-2 border-b border-border/50 last:border-b-0 text-xs font-semibold`,children:[(0,v.jsxs)(`div`,{className:`flex flex-col`,children:[(0,v.jsx)(`span`,{className:`text-foreground font-bold`,children:e.tierName}),e.availabilityStatus&&(0,v.jsx)(`span`,{className:`text-[10px] text-muted-foreground mt-0.5`,children:e.availabilityStatus})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-3 font-bold text-sm`,children:[(0,v.jsxs)(`span`,{children:[`₹`,e.price]}),e.difference!==void 0&&(0,v.jsx)(`span`,{className:a(`text-[9px] uppercase px-1.5 py-0.5 rounded border font-bold`,e.difference<0?`bg-green-500/10 text-green-600 border-green-500/20`:`bg-red-500/10 text-red-600 border-red-500/20`),children:e.difference<0?`Cheapest`:`+₹${e.difference}`})]})]},t))})]})),b.displayName=`FareComparisonCard`,b.__docgenInfo={description:``,methods:[],displayName:`FareComparisonCard`,props:{title:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Fare Comparison"`,computed:!1}},items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  tierName: string;
  price: number;
  difference?: number;
  availabilityStatus?: string;
}`,signature:{properties:[{key:`tierName`,value:{name:`string`,required:!0}},{key:`price`,value:{name:`number`,required:!0}},{key:`difference`,value:{name:`number`,required:!1}},{key:`availabilityStatus`,value:{name:`string`,required:!1}}]}}],raw:`Array<{
  tierName: string;
  price: number;
  difference?: number;
  availabilityStatus?: string;
}>`},description:``}}}})),S,C,w,T=e((()=>{S=n(),C=t(r()),i(),w=C.forwardRef(({className:e,breakdown:t,total:n,...r},i)=>(0,S.jsxs)(`div`,{ref:i,className:a(`rounded-xl border border-border bg-card p-5 shadow-premium-sm flex flex-col gap-4 text-xs font-semibold`,e),...r,children:[(0,S.jsx)(`span`,{className:`text-xs font-bold text-muted-foreground uppercase tracking-wider`,children:`Fare Breakdown`}),(0,S.jsx)(`div`,{className:`space-y-2 border-b border-border/50 pb-3 font-medium`,children:t.map((e,t)=>(0,S.jsxs)(`div`,{className:`flex justify-between items-center`,children:[(0,S.jsx)(`span`,{className:`text-muted-foreground`,children:e.label}),(0,S.jsxs)(`span`,{className:`text-foreground font-bold`,children:[`₹`,e.amount]})]},t))}),(0,S.jsxs)(`div`,{className:`flex justify-between items-center text-sm font-bold text-foreground`,children:[(0,S.jsx)(`span`,{children:`Total Fare`}),(0,S.jsxs)(`span`,{children:[`₹`,n]})]})]})),w.displayName=`FareBreakdown`,w.__docgenInfo={description:``,methods:[],displayName:`FareBreakdown`,props:{breakdown:{required:!0,tsType:{name:`Array`,elements:[{name:`FareBreakdownItem`}],raw:`FareBreakdownItem[]`},description:``},total:{required:!0,tsType:{name:`number`},description:``}}}})),E,D,O,k,A,j,M,N;e((()=>{E=n(),l(),p(),_(),x(),T(),D={title:`Railway/Fare`,component:g,parameters:{layout:`centered`},tags:[`autodocs`]},O={args:{tierName:`AC 3 Tier (3A)`,price:1250,description:`Includes catering & bedroll services`,isSelected:!1}},k={args:{tierName:`AC First Class (1A)`,price:3450,description:`Coupe/Cabin layout, premium catering`,isSelected:!0}},A={render:()=>(0,E.jsxs)(`div`,{className:`flex gap-3 items-center`,children:[(0,E.jsx)(c,{amount:650}),(0,E.jsx)(f,{difference:-120}),(0,E.jsx)(f,{difference:45})]})},j={render:()=>(0,E.jsx)(b,{className:`w-[400px]`,items:[{tierName:`AC 3 Tier (3A)`,price:1250,difference:-2200,availabilityStatus:`Available 45`},{tierName:`AC 2 Tier (2A)`,price:2150,difference:-1300,availabilityStatus:`RAC 5`},{tierName:`AC First Class (1A)`,price:3450,difference:0,availabilityStatus:`WL 2`}]})},M={render:()=>(0,E.jsx)(w,{className:`w-[350px]`,breakdown:[{label:`Base Fare`,amount:1050},{label:`Superfast Charge`,amount:45},{label:`Reservation Fee`,amount:40},{label:`GST (5%)`,amount:65}],total:1200})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    tierName: "AC 3 Tier (3A)",
    price: 1250,
    description: "Includes catering & bedroll services",
    isSelected: false
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    tierName: "AC First Class (1A)",
    price: 3450,
    description: "Coupe/Cabin layout, premium catering",
    isSelected: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3 items-center">\r
      <FareChip amount={650} />\r
      <PriceDifferenceBadge difference={-120} />\r
      <PriceDifferenceBadge difference={45} />\r
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <FareComparisonCard className="w-[400px]" items={[{
    tierName: "AC 3 Tier (3A)",
    price: 1250,
    difference: -2200,
    availabilityStatus: "Available 45"
  }, {
    tierName: "AC 2 Tier (2A)",
    price: 2150,
    difference: -1300,
    availabilityStatus: "RAC 5"
  }, {
    tierName: "AC First Class (1A)",
    price: 3450,
    difference: 0,
    availabilityStatus: "WL 2"
  }]} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <FareBreakdown className="w-[350px]" breakdown={[{
    label: "Base Fare",
    amount: 1050
  }, {
    label: "Superfast Charge",
    amount: 45
  }, {
    label: "Reservation Fee",
    amount: 40
  }, {
    label: "GST (5%)",
    amount: 65
  }]} total={1200} />
}`,...M.parameters?.docs?.source}}},N=[`DefaultCard`,`SelectedCard`,`ChipsDemo`,`ComparisonDemo`,`BreakdownDemo`]}))();export{M as BreakdownDemo,A as ChipsDemo,j as ComparisonDemo,O as DefaultCard,k as SelectedCard,N as __namedExportsOrder,D as default};