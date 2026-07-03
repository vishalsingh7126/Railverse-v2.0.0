import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r,u as i}from"./iframe-Eud8cKR2.js";import{n as a,t as o}from"./utils-Birg4gb4.js";import{i as s,r as c,t as l}from"./es-DOc7_Z7u.js";import{n as u,t as d}from"./button--BoMoHyd.js";import{n as f,t as p}from"./spinner-Cz65wQFP.js";var m,h,g,_,v=e((()=>{m=n(),h=t(r()),g=t(i()),l(),f(),a(),_=h.forwardRef(({className:e,visible:t,message:n,usePortal:r=!0,...i},a)=>{let[l,u]=h.useState(!1);h.useEffect(()=>{u(!0)},[]);let d=(0,m.jsx)(s,{children:t&&(0,m.jsxs)(c.div,{ref:a,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:o(`absolute inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-background/60 dark:bg-background/40 backdrop-blur-sm transition-all`,r&&`fixed`,e),role:`status`,"aria-live":`polite`,"aria-busy":t,...i,children:[(0,m.jsx)(p,{variant:`brand`,size:`lg`}),n&&(0,m.jsx)(`span`,{className:`text-sm font-semibold text-foreground tracking-wide`,children:n})]})});return r?l?(0,g.createPortal)(d,document.body):null:d}),_.displayName=`LoadingOverlay`,_.__docgenInfo={description:``,methods:[],displayName:`LoadingOverlay`,props:{visible:{required:!0,tsType:{name:`boolean`},description:``},message:{required:!1,tsType:{name:`string`},description:``},usePortal:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}}})),y,b,x,S,C,w,T,E,D;e((()=>{y=n(),b=t(r()),v(),u(),x={title:`Feedback/LoadingOverlay`,component:_,parameters:{layout:`centered`},tags:[`autodocs`]},S=()=>{let[e,t]=b.useState(!1);return(0,y.jsxs)(`div`,{className:`relative border border-border p-6 rounded-lg w-[320px] bg-card text-card-foreground`,children:[(0,y.jsx)(`h3`,{className:`font-semibold text-base mb-2`,children:`Passenger Ticket Booking`}),(0,y.jsx)(`p`,{className:`text-xs text-muted-foreground mb-4`,children:`Make payments and reserve berths. The tickets will be generated instantly.`}),(0,y.jsx)(d,{onClick:()=>{t(!0),setTimeout(()=>t(!1),3e3)},className:`w-full`,children:`Reserve Seats (3s load)`}),(0,y.jsx)(_,{visible:e,usePortal:!1,message:`Reserving ticket...`})]})},C={args:{visible:!1},render:()=>(0,y.jsx)(S,{})},w=()=>{let[e,t]=b.useState(!1);return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(d,{onClick:()=>{t(!0),setTimeout(()=>t(!1),3e3)},children:`Show Global Loader (3s)`}),(0,y.jsx)(_,{visible:e,usePortal:!0,message:`Syncing with IRCTC gateway...`})]})},T={args:{visible:!1},render:()=>(0,y.jsx)(w,{})},E={args:{visible:!0},render:()=>(0,y.jsxs)(`div`,{className:`relative border p-6 rounded-lg w-[320px]`,dir:`rtl`,children:[(0,y.jsx)(`h3`,{className:`font-semibold text-base mb-2`,children:`تأكيد حجز التذكرة`}),(0,y.jsx)(`p`,{className:`text-xs text-muted-foreground mb-4`,children:`سيتم إرسال رسالة التأكيد عبر البريد الإلكتروني.`}),(0,y.jsx)(_,{visible:!0,usePortal:!1,message:`جاري معالجة طلبك...`})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false
  },
  render: () => <InlineDemo />
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false
  },
  render: () => <PortalDemo />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true
  },
  render: () => <div className="relative border p-6 rounded-lg w-[320px]" dir="rtl">\r
      <h3 className="font-semibold text-base mb-2">تأكيد حجز التذكرة</h3>\r
      <p className="text-xs text-muted-foreground mb-4">\r
        سيتم إرسال رسالة التأكيد عبر البريد الإلكتروني.\r
      </p>\r
      <LoadingOverlay visible={true} usePortal={false} message="جاري معالجة طلبك..." />\r
    </div>
}`,...E.parameters?.docs?.source}}},D=[`InlineContainer`,`GlobalPortal`,`RTLCheck`]}))();export{T as GlobalPortal,C as InlineContainer,E as RTLCheck,D as __namedExportsOrder,x as default};