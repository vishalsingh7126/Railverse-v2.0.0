import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{c as o,g as s,nt as c,t as l}from"./lucide-react-CiXeiYw5.js";var u,d,f,p=e((()=>{u=n(),d=t(r()),i(),f=d.forwardRef(({className:e,items:t,collapse:n=!1,...r},i)=>(0,u.jsx)(`nav`,{ref:i,"aria-label":`Main Navigation`,className:a(`flex items-center gap-1`,n?`hidden md:flex`:`flex`,e),...r,children:t.map((e,t)=>(0,u.jsxs)(`a`,{href:e.href,"aria-current":e.active?`page`:void 0,className:a(`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,e.active?`bg-primary/10 text-primary dark:bg-primary/20`:`text-muted-foreground hover:text-foreground hover:bg-accent/50`),children:[e.icon&&(0,u.jsx)(`span`,{className:`h-4 w-4 flex items-center justify-center`,children:e.icon}),(0,u.jsx)(`span`,{children:e.label})]},t))})),f.displayName=`NavigationBar`,f.__docgenInfo={description:``,methods:[],displayName:`NavigationBar`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`NavigationItem`}],raw:`NavigationItem[]`},description:``},collapse:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),m,h,g,_;e((()=>{m=n(),p(),l(),h={title:`Navigation/NavigationBar`,component:f,parameters:{layout:`centered`},tags:[`autodocs`]},g={args:{items:[{label:`Search Trains`,href:`#`,active:!0,icon:(0,m.jsx)(o,{className:`h-4 w-4`})},{label:`PNR Status`,href:`#`,icon:(0,m.jsx)(s,{className:`h-4 w-4`})},{label:`Explore Quotas`,href:`#`,icon:(0,m.jsx)(c,{className:`h-4 w-4`})}]}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Search Trains",
      href: "#",
      active: true,
      icon: <Train className="h-4 w-4" />
    }, {
      label: "PNR Status",
      href: "#",
      icon: <Search className="h-4 w-4" />
    }, {
      label: "Explore Quotas",
      href: "#",
      icon: <Compass className="h-4 w-4" />
    }]
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,h as default};