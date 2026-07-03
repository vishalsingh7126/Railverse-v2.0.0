import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{n as o,t as s}from"./dist-CycxXvbf.js";var c,l,u,d,f=e((()=>{c=n(),l=t(r()),o(),i(),u=s(`grid w-full grid-cols-1`,{variants:{ratio:{"1:1":`lg:grid-cols-2`,"2:1":`lg:grid-cols-[2fr_1fr]`,"1:2":`lg:grid-cols-[1fr_2fr]`,"3:1":`lg:grid-cols-[3fr_1fr]`,"1:3":`lg:grid-cols-[1fr_3fr]`},gap:{none:`gap-0`,sm:`gap-4`,md:`gap-6`,lg:`gap-8`}},defaultVariants:{ratio:`1:1`,gap:`md`}}),d=l.forwardRef(({className:e,ratio:t,gap:n,left:r,right:i,...o},s)=>(0,c.jsxs)(`div`,{ref:s,className:a(u({ratio:t,gap:n}),e),...o,children:[(0,c.jsx)(`div`,{children:r}),(0,c.jsx)(`div`,{children:i})]})),d.displayName=`SplitView`,d.__docgenInfo={description:``,methods:[],displayName:`SplitView`,props:{left:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},right:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}},composes:[`VariantProps`]}})),p,m,h,g,_;e((()=>{p=n(),f(),m={title:`Layout/SplitView`,component:d,parameters:{layout:`fullscreen`},tags:[`autodocs`]},h={args:{ratio:`1:1`,gap:`md`,left:(0,p.jsx)(`div`,{className:`bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold`,children:`Left Column Content`}),right:(0,p.jsx)(`div`,{className:`bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold`,children:`Right Column Content`})}},g={args:{ratio:`1:3`,gap:`lg`,left:(0,p.jsx)(`div`,{className:`bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold`,children:`Left Menu (1/4)`}),right:(0,p.jsx)(`div`,{className:`bg-accent/40 border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold h-[200px]`,children:`Right Body Content (3/4)`})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: "1:1",
    gap: "md",
    left: <div className="bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold">\r
        Left Column Content\r
      </div>,
    right: <div className="bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold">\r
        Right Column Content\r
      </div>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: "1:3",
    gap: "lg",
    left: <div className="bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold">\r
        Left Menu (1/4)\r
      </div>,
    right: <div className="bg-accent/40 border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold h-[200px]">\r
        Right Body Content (3/4)\r
      </div>
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`SidebarLike`]}))();export{h as Default,g as SidebarLike,_ as __namedExportsOrder,m as default};