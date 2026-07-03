import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";var o,s,c,l=e((()=>{o=n(),s=t(r()),i(),c=s.forwardRef(({value:e,defaultValue:t=``,onChange:n,length:r=6,disabled:i=!1,error:c=!1,mask:l=!1,type:u=`numeric`,className:d,autoFocus:f=!0},p)=>{let[m,h]=s.useState(t),g=e!==void 0,_=g?e:m,v=s.useRef([]);s.useEffect(()=>{f&&v.current[0]&&!i&&v.current[0].focus()},[f,i]);let y=(()=>{let e=[];for(let t=0;t<r;t++)e.push(_[t]||``);return e})(),b=e=>{let t=e.slice(0,r);g||h(t),n?.(t)},x=e=>u===`numeric`?/^[0-9]$/.test(e):/^[a-zA-Z0-9]$/.test(e),S=(e,t)=>{let n=e.target.value.slice(-1);if(n===``){let e=[...y];e[t]=``,b(e.join(``));return}if(!x(n))return;let i=[...y];i[t]=n;let a=i.join(``);if(b(a),t<r-1){var o;(o=v.current[t+1])==null||o.focus()}},C=(e,t)=>{if(e.key===`Backspace`)if(y[t]===``){if(t>0){var n;let e=[...y];e[t-1]=``,b(e.join(``)),(n=v.current[t-1])==null||n.focus()}}else{let e=[...y];e[t]=``,b(e.join(``))}else if(e.key===`ArrowLeft`&&t>0){var i;(i=v.current[t-1])==null||i.focus()}else if(e.key===`ArrowRight`&&t<r-1){var a;(a=v.current[t+1])==null||a.focus()}},w=e=>{var t;e.preventDefault();let n=e.clipboardData.getData(`text`).trim().split(``).filter(x).slice(0,r);b(n.join(``));let i=Math.min(n.length,r-1);(t=v.current[i])==null||t.focus()};return(0,o.jsx)(`div`,{className:a(`flex items-center gap-2`,d),children:y.map((e,t)=>(0,o.jsx)(`input`,{type:l?`password`:`text`,inputMode:u===`numeric`?`numeric`:`text`,pattern:u===`numeric`?`[0-9]*`:`[a-zA-Z0-9]*`,disabled:i,value:e,ref:e=>{e&&(v.current[t]=e,t===0&&p&&(typeof p==`function`?p(e):p.current=e))},onChange:e=>S(e,t),onKeyDown:e=>C(e,t),onPaste:w,className:a(`h-12 w-10 rounded-md border border-input bg-background text-center text-lg font-bold text-foreground transition-all ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,c&&`border-destructive focus-visible:ring-destructive`),"aria-label":`Digit ${t+1} of ${r}`},t))})}),c.displayName=`OTPInput`,c.__docgenInfo={description:``,methods:[],displayName:`OTPInput`,props:{value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},length:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`6`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},mask:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`"numeric" | "alphanumeric"`,elements:[{name:`literal`,value:`"numeric"`},{name:`literal`,value:`"alphanumeric"`}]},description:``,defaultValue:{value:`"numeric"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},autoFocus:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}}})),u,d,f,p,m,h,g,_,v;e((()=>{u=n(),l(),d={title:`Forms/OTPInput`,component:c,parameters:{layout:`centered`},tags:[`autodocs`]},f={args:{length:6,type:`numeric`,autoFocus:!1}},p={args:{length:4,type:`alphanumeric`,autoFocus:!1}},m={args:{length:4,type:`numeric`,mask:!0,autoFocus:!1}},h={args:{length:6,disabled:!0,defaultValue:`123456`,autoFocus:!1}},g={args:{length:6,error:!0,defaultValue:`12`,autoFocus:!1}},_={render:()=>(0,u.jsxs)(`div`,{dir:`rtl`,className:`flex flex-col gap-2`,children:[(0,u.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`أدخل رمز التحقق (OTP)`}),(0,u.jsx)(c,{length:6,type:`numeric`,autoFocus:!1})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    type: "numeric",
    autoFocus: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    type: "alphanumeric",
    autoFocus: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    type: "numeric",
    mask: true,
    autoFocus: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    disabled: true,
    defaultValue: "123456",
    autoFocus: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: true,
    defaultValue: "12",
    autoFocus: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="flex flex-col gap-2">\r
      <span className="text-xs text-muted-foreground">أدخل رمز التحقق (OTP)</span>\r
      <OTPInput length={6} type="numeric" autoFocus={false} />\r
    </div>
}`,..._.parameters?.docs?.source}}},v=[`DefaultNumeric`,`AlphanumericCode`,`MaskedPIN`,`Disabled`,`WithError`,`RTLCheck`]}))();export{p as AlphanumericCode,f as DefaultNumeric,h as Disabled,m as MaskedPIN,_ as RTLCheck,g as WithError,v as __namedExportsOrder,d as default};