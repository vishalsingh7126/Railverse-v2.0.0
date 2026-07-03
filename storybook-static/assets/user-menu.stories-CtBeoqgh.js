import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-DgulR3co.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{R as o,X as s,f as c,i as l,t as u,w as d}from"./lucide-react-BEh9a_Ah.js";import{a as f,c as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./dist-DST-FBeX.js";var b,x,S,C=e((()=>{b=n(),x=t(r()),p(),u(),i(),S=x.forwardRef(({className:e,avatarUrl:t,name:n,email:r,groups:i},o)=>(0,b.jsxs)(f,{children:[(0,b.jsx)(v,{asChild:!0,children:(0,b.jsxs)(`button`,{ref:o,type:`button`,className:a(`inline-flex items-center gap-2 p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors cursor-pointer`,e),children:[t?(0,b.jsx)(`img`,{src:t,alt:n,className:`h-8 w-8 rounded-full object-cover border border-border`}):(0,b.jsx)(`div`,{className:`h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm`,children:n.charAt(0).toUpperCase()}),(0,b.jsxs)(`div`,{className:`hidden md:flex flex-col items-start text-xs text-left leading-tight`,children:[(0,b.jsx)(`span`,{className:`font-semibold`,children:n}),(0,b.jsx)(`span`,{className:`text-muted-foreground`,children:r})]}),(0,b.jsx)(s,{className:`h-3 w-3 opacity-50 hidden md:block`})]})}),(0,b.jsx)(m,{children:(0,b.jsxs)(y,{align:`end`,className:`z-50 min-w-[200px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-premium-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95`,sideOffset:4,children:[(0,b.jsxs)(`div`,{className:`px-2 py-1.5 text-xs text-muted-foreground border-b border-border mb-1`,children:[`Signed in as `,(0,b.jsx)(`span`,{className:`font-semibold text-foreground`,children:r})]}),i.map((e,t)=>(0,b.jsxs)(x.Fragment,{children:[e.label&&(0,b.jsx)(_,{className:`px-2 py-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider`,children:e.label}),e.items.map((e,t)=>(0,b.jsxs)(h,{onClick:e.onClick,className:a(`flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm outline-none cursor-pointer focus:bg-accent focus:text-accent-foreground transition-colors`,e.danger?`text-red-600 focus:bg-red-600/10 focus:text-red-600`:`text-foreground`),children:[e.icon&&(0,b.jsx)(`span`,{className:`h-4 w-4 flex items-center justify-center`,children:e.icon}),(0,b.jsx)(`span`,{children:e.label})]},t)),t<i.length-1&&(0,b.jsx)(g,{className:`h-px bg-border my-1`})]},t))]})})]})),S.displayName=`UserMenu`,S.__docgenInfo={description:``,methods:[],displayName:`UserMenu`,props:{avatarUrl:{required:!1,tsType:{name:`string`},description:``},name:{required:!0,tsType:{name:`string`},description:``},email:{required:!0,tsType:{name:`string`},description:``},groups:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label?: string;
  items: UserMenuAction[];
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!1}},{key:`items`,value:{name:`Array`,elements:[{name:`UserMenuAction`}],raw:`UserMenuAction[]`,required:!0}}]}}],raw:`{
  label?: string;
  items: UserMenuAction[];
}[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),w,T,E,D;e((()=>{w=n(),C(),u(),T={title:`Navigation/UserMenu`,component:S,parameters:{layout:`centered`},tags:[`autodocs`]},E={args:{name:`Vishal Singh`,email:`vishal@travelcore.com`,groups:[{label:`Settings`,items:[{label:`My Profile`,icon:(0,w.jsx)(l,{className:`h-4 w-4`})},{label:`Billings`,icon:(0,w.jsx)(o,{className:`h-4 w-4`})},{label:`Preferences`,icon:(0,w.jsx)(c,{className:`h-4 w-4`})}]},{items:[{label:`Log Out`,icon:(0,w.jsx)(d,{className:`h-4 w-4`}),danger:!0}]}]}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Vishal Singh",
    email: "vishal@travelcore.com",
    groups: [{
      label: "Settings",
      items: [{
        label: "My Profile",
        icon: <User className="h-4 w-4" />
      }, {
        label: "Billings",
        icon: <CreditCard className="h-4 w-4" />
      }, {
        label: "Preferences",
        icon: <Settings className="h-4 w-4" />
      }]
    }, {
      items: [{
        label: "Log Out",
        icon: <LogOut className="h-4 w-4" />,
        danger: true
      }]
    }]
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`]}))();export{E as Default,D as __namedExportsOrder,T as default};