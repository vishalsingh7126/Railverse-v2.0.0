import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-B5heM3EC.js";import{n as i,t as a}from"./utils-Birg4gb4.js";var o,s,c,l=e((()=>{o=n(),s=t(r()),i(),c=s.forwardRef(({className:e,value:t=null,variant:n=`linear`,size:r=`md`,...i},s)=>{let c=t==null;if(n===`linear`)return(0,o.jsx)(`div`,{ref:s,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":c?void 0:t,className:a(`relative w-full overflow-hidden rounded-full bg-secondary`,{sm:`h-1`,md:`h-2`,lg:`h-3`}[r],e),...i,children:(0,o.jsx)(`div`,{className:a(`h-full w-full flex-1 bg-primary transition-all duration-300 ease-in-out rounded-full`,c&&`animate-progress-indeterminate origin-left`),style:{transform:c?void 0:`translateX(-${100-(t||0)}%)`}})});let l={sm:{box:32,stroke:3,radius:13,center:16},md:{box:48,stroke:4,radius:20,center:24},lg:{box:64,stroke:6,radius:26,center:32}}[r],u=2*Math.PI*l.radius,d=c?0:u-(t||0)/100*u;return(0,o.jsx)(`div`,{ref:s,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":c?void 0:t,className:a(`relative flex items-center justify-center select-none`,c&&`animate-spin duration-1500`,e),style:{width:l.box,height:l.box},...i,children:(0,o.jsxs)(`svg`,{className:`w-full h-full transform -rotate-90`,viewBox:`0 0 ${l.box} ${l.box}`,children:[(0,o.jsx)(`circle`,{cx:l.center,cy:l.center,r:l.radius,className:`stroke-secondary fill-transparent`,strokeWidth:l.stroke}),(0,o.jsx)(`circle`,{cx:l.center,cy:l.center,r:l.radius,className:a(`stroke-primary fill-transparent transition-all duration-300 ease-in-out`,c&&`animate-circular-dash`),strokeWidth:l.stroke,strokeDasharray:u,strokeDashoffset:c?u/4:d,strokeLinecap:`round`})]})})}),c.displayName=`Progress`,c.__docgenInfo={description:``,methods:[],displayName:`Progress`,props:{value:{required:!1,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:``,defaultValue:{value:`null`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"linear" | "circular"`,elements:[{name:`literal`,value:`"linear"`},{name:`literal`,value:`"circular"`}]},description:``,defaultValue:{value:`"linear"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}}}}})),u,d,f,p,m,h,g,_,v,y;e((()=>{u=n(),l(),d={title:`Feedback/Progress`,component:c,parameters:{layout:`centered`},tags:[`autodocs`]},f={args:{value:65,variant:`linear`,size:`md`},render:e=>(0,u.jsx)(`div`,{className:`w-[300px]`,children:(0,u.jsx)(c,{...e})})},p={args:{value:null,variant:`linear`,size:`md`},render:e=>(0,u.jsx)(`div`,{className:`w-[300px]`,children:(0,u.jsx)(c,{...e})})},m={args:{value:75,variant:`circular`,size:`md`}},h={args:{value:null,variant:`circular`,size:`md`}},g={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-4 w-[300px]`,children:[(0,u.jsx)(c,{value:45,variant:`linear`,size:`sm`}),(0,u.jsx)(c,{value:45,variant:`linear`,size:`md`}),(0,u.jsx)(c,{value:45,variant:`linear`,size:`lg`})]})},_={render:()=>(0,u.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,u.jsx)(c,{value:45,variant:`circular`,size:`sm`}),(0,u.jsx)(c,{value:45,variant:`circular`,size:`md`}),(0,u.jsx)(c,{value:45,variant:`circular`,size:`lg`})]})},v={render:()=>(0,u.jsxs)(`div`,{dir:`rtl`,className:`w-[300px] flex flex-col gap-2`,children:[(0,u.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`جاري تحميل البيانات...`}),(0,u.jsx)(c,{value:80,variant:`linear`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 65,
    variant: "linear",
    size: "md"
  },
  render: args => <div className="w-[300px]">\r
      <Progress {...args} />\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: null,
    variant: "linear",
    size: "md"
  },
  render: args => <div className="w-[300px]">\r
      <Progress {...args} />\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    variant: "circular",
    size: "md"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: null,
    variant: "circular",
    size: "md"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-[300px]">\r
      <Progress value={45} variant="linear" size="sm" />\r
      <Progress value={45} variant="linear" size="md" />\r
      <Progress value={45} variant="linear" size="lg" />\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Progress value={45} variant="circular" size="sm" />\r
      <Progress value={45} variant="circular" size="md" />\r
      <Progress value={45} variant="circular" size="lg" />\r
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="w-[300px] flex flex-col gap-2">\r
      <span className="text-xs text-muted-foreground">جاري تحميل البيانات...</span>\r
      <Progress value={80} variant="linear" />\r
    </div>
}`,...v.parameters?.docs?.source}}},y=[`LinearDeterminate`,`LinearIndeterminate`,`CircularDeterminate`,`CircularIndeterminate`,`LinearSizes`,`CircularSizes`,`RTLCheck`]}))();export{m as CircularDeterminate,h as CircularIndeterminate,_ as CircularSizes,f as LinearDeterminate,p as LinearIndeterminate,g as LinearSizes,v as RTLCheck,y as __namedExportsOrder,d as default};