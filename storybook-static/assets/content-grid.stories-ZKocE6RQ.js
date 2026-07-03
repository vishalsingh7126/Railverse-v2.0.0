import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{n as o,t as s}from"./dist-CycxXvbf.js";var c,l,u,d,f=e((()=>{c=n(),l=t(r()),o(),i(),u=s(`grid w-full`,{variants:{cols:{1:`grid-cols-1`,2:`grid-cols-1 md:grid-cols-2`,3:`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`,4:`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`,sidebar:`grid-cols-1 lg:grid-cols-[280px_1fr]`,split:`grid-cols-1 lg:grid-cols-[1fr_1fr]`},gap:{none:`gap-0`,sm:`gap-4`,md:`gap-6`,lg:`gap-8`,xl:`gap-12`}},defaultVariants:{cols:3,gap:`md`}}),d=l.forwardRef(({className:e,cols:t,gap:n,...r},i)=>(0,c.jsx)(`div`,{ref:i,className:a(u({cols:t,gap:n}),e),...r})),d.displayName=`ContentGrid`,d.__docgenInfo={description:``,methods:[],displayName:`ContentGrid`,composes:[`VariantProps`]}})),p,m,h,g,_;e((()=>{p=n(),f(),m={title:`Layout/ContentGrid`,component:d,parameters:{layout:`fullscreen`},tags:[`autodocs`]},h={args:{cols:3,gap:`md`,children:(0,p.jsx)(p.Fragment,{children:Array.from({length:6}).map((e,t)=>(0,p.jsxs)(`div`,{className:`bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold`,children:[`Grid Item `,t+1]},t))})}},g={args:{cols:`sidebar`,gap:`lg`,children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold`,children:`Sidebar Left Pane (280px)`}),(0,p.jsx)(`div`,{className:`bg-accent/40 border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold h-[200px]`,children:`Main Content Pane (Remaining width)`})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: "md",
    children: <>\r
        {Array.from({
        length: 6
      }).map((_, i) => <div key={i} className="bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold">\r
            Grid Item {i + 1}\r
          </div>)}\r
      </>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    cols: "sidebar",
    gap: "lg",
    children: <>\r
        <div className="bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold">\r
          Sidebar Left Pane (280px)\r
        </div>\r
        <div className="bg-accent/40 border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold h-[200px]">\r
          Main Content Pane (Remaining width)\r
        </div>\r
      </>
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`SidebarLayout`]}))();export{h as Default,g as SidebarLayout,_ as __namedExportsOrder,m as default};