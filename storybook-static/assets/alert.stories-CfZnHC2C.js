import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-DgulR3co.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{n as o,t as s}from"./dist-CycxXvbf.js";import{A as c,H as l,W as u,o as d,t as f}from"./lucide-react-BEh9a_Ah.js";import{n as p,t as m}from"./button-DoyZb59j.js";var h,g,_,v,y=e((()=>{h=n(),g=t(r()),o(),f(),i(),_=s(`relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground`,{variants:{variant:{default:`bg-background text-foreground border-border`,info:`bg-blue-500/10 text-blue-800 dark:text-blue-400 border-blue-500/20 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400`,success:`bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border-emerald-500/20 [&>svg]:text-emerald-600 dark:[&>svg]:text-emerald-400`,warning:`bg-amber-500/10 text-amber-800 dark:text-amber-400 border-amber-500/20 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400`,error:`bg-destructive/10 text-destructive border-destructive/20 [&>svg]:text-destructive`}},defaultVariants:{variant:`default`}}),v=g.forwardRef(({className:e,variant:t,title:n,description:r,icon:i,children:o,...s},f)=>{let p=g.useMemo(()=>{if(i)return i;switch(t){case`info`:return(0,h.jsx)(c,{className:`h-4 w-4`,"aria-hidden":`true`});case`success`:return(0,h.jsx)(l,{className:`h-4 w-4`,"aria-hidden":`true`});case`warning`:return(0,h.jsx)(d,{className:`h-4 w-4`,"aria-hidden":`true`});case`error`:return(0,h.jsx)(u,{className:`h-4 w-4`,"aria-hidden":`true`});default:return null}},[t,i]);return(0,h.jsxs)(`div`,{ref:f,role:`alert`,className:a(_({variant:t}),e),...s,children:[p,(0,h.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[n&&(0,h.jsx)(`h5`,{className:`font-semibold text-sm leading-none tracking-tight`,children:n}),r&&(0,h.jsx)(`div`,{className:`text-xs opacity-90 leading-relaxed`,children:r}),o]})]})}),v.displayName=`Alert`,v.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{title:{required:!1,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}},composes:[`VariantProps`]}})),b,x,S,C,w,T,E,D,O,k;e((()=>{b=n(),y(),p(),x={title:`Feedback/Alert`,component:v,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`info`,`success`,`warning`,`error`]}}},S={args:{variant:`default`,title:`Schedules Updated`,description:`New summer train schedule updates are now active.`}},C={args:{variant:`info`,title:`Platform Allocation Changed`,description:`Train 12002 will now arrive on Platform 3 instead of Platform 1.`}},w={args:{variant:`success`,title:`Ticket Confirmed`,description:`Your PNR seat berth has been booked and synced to your email.`}},T={args:{variant:`warning`,title:`Train Delayed`,description:`Train 12002 is running late by 45 minutes from Gwalior station.`}},E={args:{variant:`error`,title:`Payment Transaction Failed`,description:`Insufficient funds detected. Please choose another payment gateway.`}},D={render:()=>(0,b.jsx)(v,{variant:`warning`,title:`Ticket Reservation Expiring`,children:(0,b.jsxs)(`div`,{className:`flex flex-col gap-2.5`,children:[(0,b.jsx)(`span`,{className:`text-xs`,children:`Your locked seat booking will release in 2 minutes. Complete booking now.`}),(0,b.jsx)(m,{size:`sm`,className:`w-fit`,children:`Proceed to Payment`})]})})},O={render:()=>(0,b.jsx)(`div`,{dir:`rtl`,className:`w-full flex flex-col gap-4`,children:(0,b.jsx)(v,{variant:`info`,title:`تحديثات جدول السفر`,description:`تم تحديث مواعيد قطارات النوم المتجهة إلى أسوان.`})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "Schedules Updated",
    description: "New summer train schedule updates are now active."
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Platform Allocation Changed",
    description: "Train 12002 will now arrive on Platform 3 instead of Platform 1."
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Ticket Confirmed",
    description: "Your PNR seat berth has been booked and synced to your email."
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Train Delayed",
    description: "Train 12002 is running late by 45 minutes from Gwalior station."
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Payment Transaction Failed",
    description: "Insufficient funds detected. Please choose another payment gateway."
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="warning" title="Ticket Reservation Expiring">\r
      <div className="flex flex-col gap-2.5">\r
        <span className="text-xs">\r
          Your locked seat booking will release in 2 minutes. Complete booking now.\r
        </span>\r
        <Button size="sm" className="w-fit">\r
          Proceed to Payment\r
        </Button>\r
      </div>\r
    </Alert>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="w-full flex flex-col gap-4">\r
      <Alert variant="info" title="تحديثات جدول السفر" description="تم تحديث مواعيد قطارات النوم المتجهة إلى أسوان." />\r
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Info`,`Success`,`Warning`,`ErrorState`,`WithActionBtn`,`RTLCheck`]}))();export{S as Default,E as ErrorState,C as Info,O as RTLCheck,w as Success,T as Warning,D as WithActionBtn,k as __namedExportsOrder,x as default};