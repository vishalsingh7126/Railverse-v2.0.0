import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-DgulR3co.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{c as o,m as s,t as c}from"./lucide-react-BEh9a_Ah.js";import{n as l,t as u}from"./button-DoyZb59j.js";var d,f,p,m=e((()=>{d=n(),f=t(r()),i(),p=f.forwardRef(({className:e,icon:t,title:n,description:r,action:i,illustration:o,children:s,...c},l)=>(0,d.jsxs)(`div`,{ref:l,className:a(`flex flex-col items-center justify-center text-center p-8 rounded-lg border border-dashed border-border bg-card/30 text-card-foreground select-none max-w-md mx-auto gap-4`,e),...c,children:[o&&(0,d.jsx)(`div`,{className:`flex items-center justify-center w-full`,children:o}),!o&&t&&(0,d.jsx)(`div`,{className:`flex items-center justify-center h-12 w-12 rounded-full bg-muted/60 text-muted-foreground`,children:t}),(0,d.jsxs)(`div`,{className:`flex flex-col gap-1.5 max-w-sm`,children:[n&&(0,d.jsx)(`h3`,{className:`font-semibold text-base leading-none tracking-tight text-foreground`,children:n}),r&&(0,d.jsx)(`p`,{className:`text-xs text-muted-foreground leading-normal`,children:r})]}),i&&(0,d.jsx)(`div`,{className:`flex items-center justify-center mt-1`,children:i}),s]})),p.displayName=`EmptyState`,p.__docgenInfo={description:``,methods:[],displayName:`EmptyState`,props:{icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},title:{required:!1,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},action:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},illustration:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),h,g,_,v,y,b,x;e((()=>{h=n(),m(),c(),l(),g={title:`Feedback/EmptyState`,component:p,parameters:{layout:`centered`},tags:[`autodocs`]},_={args:{icon:(0,h.jsx)(s,{className:`h-6 w-6`}),title:`No Trains Found`,description:`We couldn't find any direct trains matching your origin, destination, or date.`,action:(0,h.jsx)(u,{variant:`outline`,children:`Modify Journey Search`})}},v={render:()=>(0,h.jsx)(p,{icon:(0,h.jsx)(o,{className:`h-6 w-6`}),title:`No Live Journeys Active`,description:`You don't have any tickets booked for travel today.`,children:(0,h.jsxs)(`div`,{className:`mt-2 flex gap-2`,children:[(0,h.jsx)(u,{size:`sm`,children:`Search Trains`}),(0,h.jsx)(u,{size:`sm`,variant:`ghost`,children:`View PNR History`})]})})},y={args:{title:`Travel History Clear`,description:`Once you complete booking trips, your journeys list will compile here.`,illustration:(0,h.jsx)(`div`,{className:`relative h-24 w-full bg-linear-to-r from-indigo-500/10 to-purple-500/10 rounded-md border border-indigo-500/10 flex items-center justify-center`,children:(0,h.jsx)(`span`,{className:`text-xs font-semibold text-indigo-500`,children:`Journey Records empty`})})}},b={render:()=>(0,h.jsx)(`div`,{dir:`rtl`,className:`w-[350px]`,children:(0,h.jsx)(p,{icon:(0,h.jsx)(s,{className:`h-6 w-6`}),title:`لم يتم العثور على رحلات`,description:`يرجى تعديل محطة المغادرة أو تاريخ السفر للبحث مرة أخرى.`,action:(0,h.jsx)(u,{size:`sm`,children:`تعديل البحث`})})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Search className="h-6 w-6" />,
    title: "No Trains Found",
    description: "We couldn't find any direct trains matching your origin, destination, or date.",
    action: <Button variant="outline">Modify Journey Search</Button>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState icon={<Train className="h-6 w-6" />} title="No Live Journeys Active" description="You don't have any tickets booked for travel today.">\r
      <div className="mt-2 flex gap-2">\r
        <Button size="sm">Search Trains</Button>\r
        <Button size="sm" variant="ghost">\r
          View PNR History\r
        </Button>\r
      </div>\r
    </EmptyState>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Travel History Clear",
    description: "Once you complete booking trips, your journeys list will compile here.",
    illustration: <div className="relative h-24 w-full bg-linear-to-r from-indigo-500/10 to-purple-500/10 rounded-md border border-indigo-500/10 flex items-center justify-center">\r
        <span className="text-xs font-semibold text-indigo-500">Journey Records empty</span>\r
      </div>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div dir="rtl" className="w-[350px]">\r
      <EmptyState icon={<Search className="h-6 w-6" />} title="لم يتم العثور على رحلات" description="يرجى تعديل محطة المغادرة أو تاريخ السفر للبحث مرة أخرى." action={<Button size="sm">تعديل البحث</Button>} />\r
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`ComposedWithChildren`,`WithCustomIllustration`,`RTLCheck`]}))();export{v as ComposedWithChildren,_ as Default,b as RTLCheck,y as WithCustomIllustration,x as __namedExportsOrder,g as default};