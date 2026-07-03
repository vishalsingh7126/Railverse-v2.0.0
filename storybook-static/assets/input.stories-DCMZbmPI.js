import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{n as o,t as s}from"./dist-CycxXvbf.js";import{M as c,g as l,t as u}from"./lucide-react-CiXeiYw5.js";var d,f,p,m,h=e((()=>{d=n(),f=t(r()),o(),i(),p=s(`flex items-center rounded-md border ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-all duration-150 overflow-hidden`,{variants:{variant:{default:`border-input bg-background`,filled:`border-transparent bg-muted/50 focus-within:bg-background focus-within:border-input`,ghost:`border-transparent bg-transparent focus-within:border-input`},size:{sm:`h-8 text-xs`,md:`h-10 text-sm`,lg:`h-12 text-base`}},defaultVariants:{variant:`default`,size:`md`}}),m=f.forwardRef(({className:e,type:t=`text`,variant:n,size:r,error:i=!1,helperText:o,loading:s=!1,startIcon:c,endIcon:l,prefix:u,suffix:m,disabled:h,id:g,..._},v)=>{let y=f.useId(),b=g||y,x=f.useId();return(0,d.jsxs)(`div`,{className:`flex flex-col gap-1.5 w-full`,children:[(0,d.jsxs)(`div`,{className:a(p({variant:n,size:r}),i&&`border-destructive focus-within:ring-destructive`,h&&`opacity-50 bg-muted cursor-not-allowed`,e),children:[u&&(0,d.jsx)(`span`,{className:`flex items-center justify-center px-3 border-r border-border bg-muted/40 text-muted-foreground select-none h-full font-medium`,children:u}),c&&(0,d.jsx)(`span`,{className:`flex items-center justify-center pl-3 text-muted-foreground select-none shrink-0`,children:c}),(0,d.jsx)(`input`,{id:b,type:t,className:a(`flex h-full w-full bg-transparent px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:pointer-events-none`,(c||u)&&`pl-2`,(l||m||s)&&`pr-2`),ref:v,disabled:h,"aria-invalid":i,"aria-describedby":o?x:void 0,..._}),s&&(0,d.jsx)(`span`,{className:`flex items-center justify-center pr-3 shrink-0`,children:(0,d.jsxs)(`svg`,{className:`animate-spin h-4 w-4 text-muted-foreground`,xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,d.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,d.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]})}),l&&!s&&(0,d.jsx)(`span`,{className:`flex items-center justify-center pr-3 text-muted-foreground select-none shrink-0`,children:l}),m&&(0,d.jsx)(`span`,{className:`flex items-center justify-center px-3 border-l border-border bg-muted/40 text-muted-foreground select-none h-full font-medium`,children:m})]}),o&&(0,d.jsx)(`span`,{id:x,className:a(`text-[11px] leading-none text-muted-foreground`,i&&`text-destructive`),children:o})]})}),m.displayName=`Input`,m.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},helperText:{required:!1,tsType:{name:`string`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},startIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},endIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},prefix:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},suffix:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},type:{defaultValue:{value:`"text"`,computed:!1},required:!1}},composes:[`Omit`,`VariantProps`]}})),g,_,v,y,b,x,S,C,w,T,E;e((()=>{g=n(),u(),h(),_={title:`Foundations/Input`,component:m,parameters:{layout:`centered`},tags:[`autodocs`]},v={args:{placeholder:`Enter PNR Number`}},y={args:{placeholder:`Search stations...`,startIcon:(0,g.jsx)(l,{className:`h-4 w-4`})}},b={args:{type:`email`,placeholder:`passenger@travelcore.in`,endIcon:(0,g.jsx)(c,{className:`h-4 w-4`})}},x={args:{placeholder:`9876543210`,prefix:`+91`}},S={args:{placeholder:`railverse`,suffix:`.in`}},C={args:{placeholder:`Retrieving availability...`,loading:!0}},w={args:{placeholder:`12345`,error:!0,helperText:`PNR number must be exactly 10 digits`,value:`12345`}},T={args:{placeholder:`Locked input`,disabled:!0,value:`Cannot edit this value`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter PNR Number"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search stations...",
    startIcon: <Search className="h-4 w-4" />
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "passenger@travelcore.in",
    endIcon: <Mail className="h-4 w-4" />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "9876543210",
    prefix: "+91"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "railverse",
    suffix: ".in"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Retrieving availability...",
    loading: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "12345",
    error: true,
    helperText: "PNR number must be exactly 10 digits",
    value: "12345"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Locked input",
    disabled: true,
    value: "Cannot edit this value"
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithStartIcon`,`WithEndIcon`,`WithPrefix`,`WithSuffix`,`WithLoading`,`WithError`,`Disabled`]}))();export{v as Default,T as Disabled,b as WithEndIcon,w as WithError,C as WithLoading,x as WithPrefix,y as WithStartIcon,S as WithSuffix,E as __namedExportsOrder,_ as default};