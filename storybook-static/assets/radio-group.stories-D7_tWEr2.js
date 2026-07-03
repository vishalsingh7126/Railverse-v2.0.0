import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{a as o,i as s}from"./dist-B-BWKeHq.js";import{r as c,t as l}from"./dist-OhB4-H1Q.js";import{i as u,n as d,r as f,t as p}from"./dist-B5XBrbQZ.js";import{n as m,t as h}from"./dist-DKaiPyUB.js";import{n as g,t as _}from"./dist-B9HYOnv_.js";import{n as v,t as ee}from"./dist-B7hytRt4.js";import{n as te,t as ne}from"./dist-D7SRttzx.js";import{i as re,n as ie,r as ae,t as oe}from"./dist-Cc9ezWzV.js";import{n as se,t as ce}from"./dist-CuREqwCm.js";function le(e){let{__scopeRadio:t,checked:n=!1,children:r,disabled:i,form:a,name:o,onCheck:s,required:c,value:l=`on`,internal_do_not_use_render:u}=e,[d,f]=b.useState(null),[p,m]=b.useState(null),h={checked:n,disabled:i,required:c,name:o,form:a,value:l,control:d,setControl:f,hasConsumerStoppedPropagationRef:b.useRef(!1),isFormControl:d?!!a||!!d.closest(`form`):!0,bubbleInput:p,setBubbleInput:m,onCheck:()=>s?.()};return(0,x.jsx)(me,{scope:t,...h,children:ue(u)?u(h):r})}function ue(e){return typeof e==`function`}function de(e){return e?`checked`:`unchecked`}function fe(e){let{__scopeRadioGroup:t,value:n,disabled:r,children:i,internal_do_not_use_render:a}=e,o=F(xe,t),s=P(t),c=o.disabled||r;return(0,S.jsx)(le,{...s,checked:o.value===n,disabled:c,required:o.required,name:o.name,value:n,onCheck:()=>o.onValueChange(n),internal_do_not_use_render:a,children:i})}var y,b,x,S,C,pe,w,me,T,E,D,he,O,k,A,j,ge,M,_e,ve,N,P,ye,F,I,be,xe,L,Se,R,z,B,Ce,V,we=e((()=>{y=t(r(),1),d(),s(),u(),c(),re(),ee(),_(),b=t(r(),1),ne(),ce(),m(),x=n(),S=n(),C=`Radio`,[pe,w]=f(C),[me,T]=pe(C),E=`RadioTrigger`,D=b.forwardRef(({__scopeRadio:e,onClick:t,...n},r)=>{let{checked:i,disabled:a,value:s,setControl:c,onCheck:u,hasConsumerStoppedPropagationRef:d,isFormControl:f,bubbleInput:m}=T(E,e),h=o(r,c);return(0,x.jsx)(l.button,{type:`button`,role:`radio`,"aria-checked":i,"data-state":de(i),"data-disabled":a?``:void 0,disabled:a,value:s,...n,ref:h,onClick:p(t,e=>{i||u(),m&&f&&(d.current=e.isPropagationStopped(),d.current||e.stopPropagation())})})}),D.displayName=E,he=b.forwardRef((e,t)=>{let{__scopeRadio:n,name:r,checked:i,required:a,disabled:o,value:s,onCheck:c,form:l,...u}=e;return(0,x.jsx)(le,{__scopeRadio:n,checked:i,disabled:o,required:a,onCheck:c,name:r,form:l,value:s,internal_do_not_use_render:({isFormControl:e})=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(D,{...u,ref:t,__scopeRadio:n}),e&&(0,x.jsx)(j,{__scopeRadio:n})]})})}),he.displayName=C,O=`RadioIndicator`,k=b.forwardRef((e,t)=>{let{__scopeRadio:n,forceMount:r,...i}=e,a=T(O,n);return(0,x.jsx)(h,{present:r||a.checked,children:(0,x.jsx)(l.span,{"data-state":de(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t})})}),k.displayName=O,A=`RadioBubbleInput`,j=b.forwardRef(({__scopeRadio:e,...t},n)=>{let{control:r,checked:i,required:a,disabled:s,name:c,value:u,form:d,bubbleInput:f,setBubbleInput:p,hasConsumerStoppedPropagationRef:m}=T(A,e),h=o(n,p),g=se(i),_=te(r);b.useEffect(()=>{let e=f;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set,r=!m.current;if(g!==i&&n){let t=new Event(`click`,{bubbles:r});n.call(e,i),e.dispatchEvent(t)}},[f,g,i,m]);let v=b.useRef(i);return(0,x.jsx)(l.input,{type:`radio`,"aria-hidden":!0,defaultChecked:v.current,required:a,disabled:s,name:c,value:u,form:d,...t,tabIndex:-1,ref:h,style:{...t.style,..._,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})}),j.displayName=A,ge=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],M=`RadioGroup`,[_e,ve]=f(M,[ae,w]),N=ae(),P=w(),[ye,F]=_e(M),I=y.forwardRef((e,t)=>{let{__scopeRadioGroup:n,name:r,defaultValue:i,value:a,required:o=!1,disabled:s=!1,orientation:c,dir:u,loop:d=!0,onValueChange:f,...p}=e,m=N(n),h=g(u),[_,ee]=v({prop:a,defaultProp:i??null,onChange:f,caller:M});return(0,S.jsx)(ye,{scope:n,name:r,required:o,disabled:s,value:_,onValueChange:ee,children:(0,S.jsx)(ie,{asChild:!0,...m,orientation:c,dir:h,loop:d,children:(0,S.jsx)(l.div,{role:`radiogroup`,"aria-required":o,"aria-orientation":c,"data-disabled":s?``:void 0,dir:h,...p,ref:t})})})}),I.displayName=M,be=`RadioGroupItem`,xe=`RadioGroupItemProvider`,L=`RadioGroupItemTrigger`,Se=`RadioGroupItemBubbleInput`,R=y.forwardRef((e,t)=>{let{__scopeRadioGroup:n,...r}=e,i=N(n),a=P(n),{checked:s,disabled:c}=T(L,a.__scopeRadio),l=y.useRef(null),u=o(t,l),d=y.useRef(!1);return y.useEffect(()=>{let e=e=>{ge.includes(e.key)&&(d.current=!0)},t=()=>d.current=!1;return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t)}},[]),(0,S.jsx)(oe,{asChild:!0,...i,focusable:!c,active:s,children:(0,S.jsx)(D,{...a,...r,ref:u,onKeyDown:p(r.onKeyDown,e=>{e.key===`Enter`&&e.preventDefault()}),onFocus:p(r.onFocus,()=>{d.current&&l.current?.click()})})})}),R.displayName=L,z=y.forwardRef((e,t)=>{let{__scopeRadioGroup:n,value:r,disabled:i,...a}=e;return(0,S.jsx)(fe,{__scopeRadioGroup:n,value:r,disabled:i,internal_do_not_use_render:({isFormControl:e})=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(R,{...a,ref:t,__scopeRadioGroup:n}),e&&(0,S.jsx)(B,{__scopeRadioGroup:n})]})})}),z.displayName=be,B=y.forwardRef((e,t)=>{let{__scopeRadioGroup:n,...r}=e;return(0,S.jsx)(j,{...P(n),...r,ref:t})}),B.displayName=Se,Ce=`RadioGroupIndicator`,V=y.forwardRef((e,t)=>{let{__scopeRadioGroup:n,...r}=e;return(0,S.jsx)(k,{...P(n),...r,ref:t})}),V.displayName=Ce})),H,U,W,Te=e((()=>{H=n(),U=t(r()),we(),i(),W=U.forwardRef(({className:e,error:t,helperText:n,options:r,disabled:i,orientation:o=`vertical`,...s},c)=>{let l=U.useId();return(0,H.jsxs)(`div`,{className:`flex flex-col gap-1.5 w-full`,children:[(0,H.jsx)(I,{ref:c,disabled:i,orientation:o,"aria-describedby":n?l:void 0,className:a(`flex gap-4`,o===`vertical`?`flex-col`:`flex-row flex-wrap items-center`,e),...s,children:r.map(e=>{let n=`${s.name||`radio`}-${e.value}`,r=`label-${n}`,o=e.disabled||i;return(0,H.jsxs)(`div`,{className:`flex items-start gap-2.5`,children:[(0,H.jsx)(`div`,{className:`flex items-center h-5 shrink-0`,children:(0,H.jsx)(z,{id:n,value:e.value,disabled:o,"aria-labelledby":r,className:a(`aspect-square h-4 w-4 rounded-full border border-input text-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary transition-all cursor-pointer flex items-center justify-center relative`,t&&`border-destructive focus-visible:ring-destructive`),children:(0,H.jsx)(V,{className:`flex items-center justify-center h-full w-full after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-primary`})})}),(0,H.jsxs)(`div`,{className:`flex flex-col gap-0.5 select-none`,children:[(0,H.jsx)(`label`,{id:r,htmlFor:n,className:a(`text-sm font-medium leading-tight cursor-pointer text-foreground`,o&&`opacity-50 cursor-not-allowed`,t&&`text-destructive`),children:e.label}),e.description&&(0,H.jsx)(`span`,{className:a(`text-xs text-muted-foreground`,o&&`opacity-50`),children:e.description})]})]},e.value)})}),n&&(0,H.jsx)(`span`,{id:l,className:a(`text-xs leading-none text-muted-foreground`,t&&`text-destructive`),children:n})]})}),W.displayName=`RadioGroup`,W.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`,props:{error:{required:!1,tsType:{name:`boolean`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`Array<{
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}>`},description:``},orientation:{defaultValue:{value:`"vertical"`,computed:!1},required:!1}}}})),G,Ee,K,q,J,Y,X,Z,Q,$,De;e((()=>{G=n(),Te(),Ee={title:`Forms/RadioGroup`,component:W,parameters:{layout:`centered`},tags:[`autodocs`]},K=[{value:`ac1`,label:`AC First Class (1A)`,description:`Premium tier with private coupes`},{value:`ac2`,label:`AC 2 Tier (2A)`,description:`Comfortable air-conditioned berths`},{value:`sl`,label:`Sleeper Class (SL)`,description:`Standard non-AC sleeper berths`}],q=[{value:`m`,label:`Male`},{value:`f`,label:`Female`},{value:`o`,label:`Other`}],J={args:{options:K,defaultValue:`ac2`,name:`travel-class`,orientation:`vertical`}},Y={args:{options:q,defaultValue:`m`,name:`passenger-gender`,orientation:`horizontal`}},X={args:{options:K,defaultValue:`ac1`,name:`disabled-classes`,disabled:!0}},Z={args:{options:[{value:`gp`,label:`General Quota`},{value:`tq`,label:`Tatkal Quota`,description:`Not available for this booking class`,disabled:!0},{value:`ld`,label:`Ladies Quota`}],defaultValue:`gp`,name:`quota-selection`}},Q={args:{options:q,name:`error-gender`,error:!0,helperText:`Please select a gender option to complete booking.`}},$={args:{options:[{value:`yes`,label:`نعم، أريد تأمين السفر`,description:`تغطية تأمينية كاملة ضد الحوادث`},{value:`no`,label:`لا، شكراً لك`}],defaultValue:`no`,name:`rtl-insurance`},render:e=>(0,G.jsx)(`div`,{dir:`rtl`,className:`w-[300px]`,children:(0,G.jsx)(W,{...e})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    options: classOptions,
    defaultValue: "ac2",
    name: "travel-class",
    orientation: "vertical"
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    options: genderOptions,
    defaultValue: "m",
    name: "passenger-gender",
    orientation: "horizontal"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    options: classOptions,
    defaultValue: "ac1",
    name: "disabled-classes",
    disabled: true
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "gp",
      label: "General Quota"
    }, {
      value: "tq",
      label: "Tatkal Quota",
      description: "Not available for this booking class",
      disabled: true
    }, {
      value: "ld",
      label: "Ladies Quota"
    }],
    defaultValue: "gp",
    name: "quota-selection"
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    options: genderOptions,
    name: "error-gender",
    error: true,
    helperText: "Please select a gender option to complete booking."
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "yes",
      label: "نعم، أريد تأمين السفر",
      description: "تغطية تأمينية كاملة ضد الحوادث"
    }, {
      value: "no",
      label: "لا، شكراً لك"
    }],
    defaultValue: "no",
    name: "rtl-insurance"
  },
  render: args => <div dir="rtl" className="w-[300px]">\r
      <RadioGroup {...args} />\r
    </div>
}`,...$.parameters?.docs?.source}}},De=[`Vertical`,`Horizontal`,`DisabledGroup`,`DisabledOption`,`WithError`,`RTLCheck`]}))();export{X as DisabledGroup,Z as DisabledOption,Y as Horizontal,$ as RTLCheck,J as Vertical,Q as WithError,De as __namedExportsOrder,Ee as default};