import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-B5heM3EC.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{b as o,t as s}from"./lucide-react-DHsWKGbp.js";import{n as c,t as l}from"./button-4PP5bSzD.js";var u,d,f,p=e((()=>{u=n(),d=t(r()),s(),c(),i(),f=d.forwardRef(({className:e,title:t=`Something went wrong`,description:n,onRetry:r,illustration:i,actions:s,children:c,...d},f)=>(0,u.jsxs)(`div`,{ref:f,className:a(`flex flex-col items-center justify-center text-center p-8 rounded-lg border border-destructive/20 bg-destructive/5 text-destructive select-none max-w-md mx-auto gap-4`,e),...d,children:[i&&(0,u.jsx)(`div`,{className:`flex items-center justify-center w-full`,children:i}),!i&&(0,u.jsx)(`div`,{className:`flex items-center justify-center h-12 w-12 rounded-full bg-destructive/10 text-destructive`,children:(0,u.jsx)(o,{className:`h-6 w-6`,"aria-hidden":`true`})}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-1.5 max-w-sm`,children:[(0,u.jsx)(`h3`,{className:`font-semibold text-base leading-none tracking-tight text-destructive`,children:t}),n&&(0,u.jsx)(`p`,{className:`text-xs text-muted-foreground leading-normal`,children:n})]}),(s||r)&&(0,u.jsxs)(`div`,{className:`flex items-center justify-center gap-2 mt-1`,children:[s,!s&&r&&(0,u.jsx)(l,{variant:`destructive`,size:`sm`,onClick:r,children:`Try Again`})]}),c]})),f.displayName=`ErrorState`,f.__docgenInfo={description:``,methods:[],displayName:`ErrorState`,props:{title:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Something went wrong"`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:``},onRetry:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},illustration:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},actions:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),m,h,g,_,v,y;e((()=>{m=n(),p(),c(),h={title:`Feedback/ErrorState`,component:f,parameters:{layout:`centered`},tags:[`autodocs`]},g={args:{title:`Connection Timed Out`,description:`The railway reservation system took too long to respond. Please check your connection and retry.`,onRetry:()=>alert(`Retrying connection...`)}},_={render:()=>(0,m.jsx)(f,{title:`Seat Allocation Aborted`,description:`Your session has expired due to inactivity. The reserved berth layout was released back into the pool.`,children:(0,m.jsxs)(`div`,{className:`flex gap-2 mt-2`,children:[(0,m.jsx)(l,{size:`sm`,variant:`destructive`,children:`Release & Start Over`}),(0,m.jsx)(l,{size:`sm`,variant:`outline`,children:`Contact Support`}),(0,m.jsx)(l,{size:`sm`,variant:`ghost`,children:`Go Home`})]})})},v={render:()=>(0,m.jsx)(`div`,{dir:`rtl`,className:`w-[350px]`,children:(0,m.jsx)(f,{title:`فشلت عملية الدفع`,description:`انتهت مهلة الاتصال ببوابة الدفع الإلكتروني. يرجى المحاولة مرة أخرى.`,onRetry:()=>{}})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Connection Timed Out",
    description: "The railway reservation system took too long to respond. Please check your connection and retry.",
    onRetry: () => alert("Retrying connection...")
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorState title="Seat Allocation Aborted" description="Your session has expired due to inactivity. The reserved berth layout was released back into the pool.">\r
      <div className="flex gap-2 mt-2">\r
        <Button size="sm" variant="destructive">\r
          Release & Start Over\r
        </Button>\r
        <Button size="sm" variant="outline">\r
          Contact Support\r
        </Button>\r
        <Button size="sm" variant="ghost">\r
          Go Home\r
        </Button>\r
      </div>\r
    </ErrorState>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="w-[350px]">\r
      <ErrorState title="فشلت عملية الدفع" description="انتهت مهلة الاتصال ببوابة الدفع الإلكتروني. يرجى المحاولة مرة أخرى." onRetry={() => {}} />\r
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`ComposedWithMultipleActions`,`RTLCheck`]}))();export{_ as ComposedWithMultipleActions,g as Default,v as RTLCheck,y as __namedExportsOrder,h as default};