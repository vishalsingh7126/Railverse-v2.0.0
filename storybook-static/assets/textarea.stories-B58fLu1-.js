import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-B5heM3EC.js";import{n as i,t as a}from"./utils-Birg4gb4.js";var o,s,c,l=e((()=>{o=n(),s=t(r()),i(),c=s.forwardRef(({className:e,error:t=!1,helperText:n,disabled:r,id:i,...c},l)=>{let u=s.useId(),d=i||u,f=s.useId();return(0,o.jsxs)(`div`,{className:`flex flex-col gap-1.5 w-full`,children:[(0,o.jsx)(`textarea`,{id:d,className:a(`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50`,t&&`border-destructive focus-visible:ring-destructive`,e),ref:l,disabled:r,"aria-invalid":t,"aria-describedby":n?f:void 0,...c}),n&&(0,o.jsx)(`span`,{id:f,className:a(`text-[11px] leading-none text-muted-foreground`,t&&`text-destructive`),children:n})]})}),c.displayName=`Textarea`,c.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},helperText:{required:!1,tsType:{name:`string`},description:``}}}})),u,d,f,p,m;e((()=>{l(),u={title:`Foundations/Textarea`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{error:{control:`boolean`},disabled:{control:`boolean`}}},d={args:{placeholder:`Tell us about your journey preferences...`}},f={args:{placeholder:`Input feedback details...`,error:!0,helperText:`Feedback description cannot be empty`}},p={args:{placeholder:`Disabled textarea`,disabled:!0,value:`System automatic check. Cannot modify this text.`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Tell us about your journey preferences..."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Input feedback details...",
    error: true,
    helperText: "Feedback description cannot be empty"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
    value: "System automatic check. Cannot modify this text."
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithError`,`Disabled`]}))();export{d as Default,p as Disabled,f as WithError,m as __namedExportsOrder,u as default};