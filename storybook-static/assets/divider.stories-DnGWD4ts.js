import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";var o,s,c,l=e((()=>{o=n(),s=t(r()),i(),c=s.forwardRef(({className:e,orientation:t=`horizontal`,label:n,labelAlign:r=`center`,...i},s)=>t===`vertical`?(0,o.jsx)(`div`,{ref:s,className:a(`w-[1px] h-auto bg-border shrink-0 self-stretch my-1`,e),role:`separator`,"aria-orientation":`vertical`,...i}):n?(0,o.jsxs)(`div`,{ref:s,className:a(`flex items-center w-full my-4 select-none`,e),role:`separator`,"aria-orientation":`horizontal`,...i,children:[(0,o.jsx)(`div`,{className:a(`grow h-[1px] bg-border`,r===`start`&&`grow-0 w-6`)}),(0,o.jsx)(`span`,{className:`px-3 text-[11px] font-semibold tracking-wider uppercase text-muted-foreground shrink-0`,children:n}),(0,o.jsx)(`div`,{className:a(`grow h-[1px] bg-border`,r===`end`&&`grow-0 w-6`)})]}):(0,o.jsx)(`div`,{ref:s,className:a(`w-full h-[1px] bg-border my-4 shrink-0`,e),role:`separator`,"aria-orientation":`horizontal`,...i})),c.displayName=`Divider`,c.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:``,defaultValue:{value:`"horizontal"`,computed:!1}},label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},labelAlign:{required:!1,tsType:{name:`union`,raw:`"start" | "center" | "end"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`}]},description:``,defaultValue:{value:`"center"`,computed:!1}}}}})),u,d,f,p,m,h,g;e((()=>{u=n(),l(),d={title:`Foundations/Divider`,component:c,parameters:{layout:`padded`},tags:[`autodocs`]},f={args:{orientation:`horizontal`}},p={args:{orientation:`horizontal`,label:`Secured by TravelCore Gate`,labelAlign:`center`}},m={args:{orientation:`horizontal`,label:`Halt Stations Sequence`,labelAlign:`start`}},h={render:()=>(0,u.jsxs)(`div`,{className:`flex h-5 items-center gap-4 text-xs font-semibold text-muted-foreground select-none`,children:[(0,u.jsx)(`span`,{children:`PNR Status`}),(0,u.jsx)(c,{orientation:`vertical`}),(0,u.jsx)(`span`,{children:`Live Tracking`}),(0,u.jsx)(c,{orientation:`vertical`}),(0,u.jsx)(`span`,{children:`Availability Matrix`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    label: "Secured by TravelCore Gate",
    labelAlign: "center"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    label: "Halt Stations Sequence",
    labelAlign: "start"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-5 items-center gap-4 text-xs font-semibold text-muted-foreground select-none">\r
      <span>PNR Status</span>\r
      <Divider orientation="vertical" />\r
      <span>Live Tracking</span>\r
      <Divider orientation="vertical" />\r
      <span>Availability Matrix</span>\r
    </div>
}`,...h.parameters?.docs?.source}}},g=[`HorizontalDefault`,`WithLabelMiddle`,`WithLabelStart`,`VerticalSplit`]}))();export{f as HorizontalDefault,h as VerticalSplit,p as WithLabelMiddle,m as WithLabelStart,g as __namedExportsOrder,d as default};