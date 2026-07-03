import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{n as o,t as s}from"./dist-CycxXvbf.js";var c,l,u,d,f=e((()=>{c=n(),l=t(r()),o(),i(),u=s(`w-full transition-all duration-300 z-40 border-b border-border`,{variants:{variant:{solid:`bg-background text-foreground`,transparent:`bg-transparent text-foreground border-transparent`},glassmorphism:{true:`backdrop-blur-md bg-background/80 dark:bg-background/80`,false:``},sticky:{true:`sticky top-0`,false:`relative`}},defaultVariants:{variant:`solid`,glassmorphism:!0,sticky:!0}}),d=l.forwardRef(({className:e,variant:t=`solid`,glassmorphism:n=!0,sticky:r=!0,logo:i,navigation:o,actions:s,scrollAware:d=!0,...f},p)=>{let[m,h]=l.useState(!1);l.useEffect(()=>{if(!d)return;let e=()=>{h(window.scrollY>10)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[d]);let g=d&&m?`solid`:t,_=d&&!m&&t===`transparent`?`border-transparent`:`border-border`;return(0,c.jsx)(`header`,{ref:p,className:a(u({variant:g,glassmorphism:n,sticky:r}),_,m&&`shadow-premium-sm`,e),...f,children:(0,c.jsxs)(`div`,{className:`h-16 px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4 max-w-7xl mx-auto w-full`,children:[i&&(0,c.jsx)(`div`,{className:`flex shrink-0 items-center`,children:i}),o&&(0,c.jsx)(`div`,{className:`hidden md:flex flex-1 justify-center`,children:o}),s&&(0,c.jsx)(`div`,{className:`flex items-center gap-2 shrink-0`,children:s})]})})}),d.displayName=`Header`,d.__docgenInfo={description:``,methods:[],displayName:`Header`,props:{logo:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},navigation:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},actions:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},scrollAware:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},variant:{defaultValue:{value:`"solid"`,computed:!1},required:!1},glassmorphism:{defaultValue:{value:`true`,computed:!1},required:!1},sticky:{defaultValue:{value:`true`,computed:!1},required:!1}},composes:[`VariantProps`]}})),p,m,h,g,_;e((()=>{p=n(),f(),m={title:`Navigation/Header`,component:d,parameters:{layout:`fullscreen`},tags:[`autodocs`]},h={args:{variant:`solid`,logo:(0,p.jsx)(`span`,{className:`font-bold text-lg tracking-tight`,children:`Railverse`}),navigation:(0,p.jsxs)(`nav`,{className:`flex gap-6 text-sm font-medium text-muted-foreground`,children:[(0,p.jsx)(`a`,{href:`#`,className:`text-foreground hover:text-foreground`,children:`Search`}),(0,p.jsx)(`a`,{href:`#`,className:`hover:text-foreground`,children:`Schedule`}),(0,p.jsx)(`a`,{href:`#`,className:`hover:text-foreground`,children:`PNR Status`})]}),actions:(0,p.jsxs)(`div`,{className:`flex gap-2`,children:[(0,p.jsx)(`button`,{className:`px-3 py-1.5 text-xs border rounded-md`,children:`Log In`}),(0,p.jsx)(`button`,{className:`px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md`,children:`Sign Up`})]})}},g={args:{variant:`transparent`,scrollAware:!0,logo:(0,p.jsx)(`span`,{className:`font-bold text-lg tracking-tight`,children:`Railverse`}),navigation:(0,p.jsxs)(`nav`,{className:`flex gap-6 text-sm font-medium text-muted-foreground`,children:[(0,p.jsx)(`a`,{href:`#`,className:`hover:text-foreground`,children:`Home`}),(0,p.jsx)(`a`,{href:`#`,className:`hover:text-foreground`,children:`Features`})]}),actions:(0,p.jsx)(`button`,{className:`px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md`,children:`Action`})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    logo: <span className="font-bold text-lg tracking-tight">Railverse</span>,
    navigation: <nav className="flex gap-6 text-sm font-medium text-muted-foreground">\r
        <a href="#" className="text-foreground hover:text-foreground">\r
          Search\r
        </a>\r
        <a href="#" className="hover:text-foreground">\r
          Schedule\r
        </a>\r
        <a href="#" className="hover:text-foreground">\r
          PNR Status\r
        </a>\r
      </nav>,
    actions: <div className="flex gap-2">\r
        <button className="px-3 py-1.5 text-xs border rounded-md">Log In</button>\r
        <button className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md">\r
          Sign Up\r
        </button>\r
      </div>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "transparent",
    scrollAware: true,
    logo: <span className="font-bold text-lg tracking-tight">Railverse</span>,
    navigation: <nav className="flex gap-6 text-sm font-medium text-muted-foreground">\r
        <a href="#" className="hover:text-foreground">\r
          Home\r
        </a>\r
        <a href="#" className="hover:text-foreground">\r
          Features\r
        </a>\r
      </nav>,
    actions: <button className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md">\r
        Action\r
      </button>
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`TransparentScrollAware`]}))();export{h as Default,g as TransparentScrollAware,_ as __namedExportsOrder,m as default};