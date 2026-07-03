import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-B5heM3EC.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{E as o,O as s,m as c,t as l,u}from"./lucide-react-DHsWKGbp.js";import{a as d,i as f,n as p,r as m,t as h}from"./dist-SpTnAb3m.js";var g,_,v,y=e((()=>{g=n(),_=t(r()),d(),l(),i(),v=_.forwardRef(({value:e,defaultValue:t,onChange:n,options:r,placeholder:i=`Select option...`,searchPlaceholder:l=`Search...`,emptyState:d=`No results found.`,onSearchChange:v,loading:y=!1,disabled:b=!1,error:x=!1,helperText:S,className:C},w)=>{let[T,E]=_.useState(!1),[D,O]=_.useState(t||``),[k,A]=_.useState(``),j=e!==void 0,M=j?e:D,N=r.find(e=>e.value===M),[P,F]=_.useState(0),I=e=>{j||O(e),n?.(e),E(!1),A(``)},L=e=>{let t=e.target.value;A(t),v?.(t),F(0)},R=_.useMemo(()=>v?r:r.filter(e=>e.label.toLowerCase().includes(k.toLowerCase())),[r,k,v]);return(0,g.jsxs)(`div`,{className:`flex flex-col gap-1.5 w-full`,children:[(0,g.jsxs)(m,{open:T&&!b,onOpenChange:E,children:[(0,g.jsx)(f,{asChild:!0,children:(0,g.jsxs)(`button`,{ref:w,disabled:b,className:a(`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all cursor-pointer text-left [&>span]:line-clamp-1`,x&&`border-destructive focus:ring-destructive`,C),children:[(0,g.jsx)(`span`,{className:a(!N&&`text-muted-foreground`),children:N?N.label:i}),y?(0,g.jsx)(c,{className:`h-4 w-4 animate-spin text-muted-foreground`}):(0,g.jsx)(o,{className:`h-4 w-4 text-muted-foreground`})]})}),(0,g.jsx)(p,{children:(0,g.jsxs)(h,{align:`start`,className:a(`z-50 w-[var(--radix-popover-trigger-width)] min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-premium-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 p-1`),onKeyDown:e=>{e.key===`ArrowDown`?(e.preventDefault(),F(e=>(e+1)%Math.max(1,R.length))):e.key===`ArrowUp`?(e.preventDefault(),F(e=>(e-1+R.length)%Math.max(1,R.length))):e.key===`Enter`?(e.preventDefault(),R[P]&&I(R[P].value)):e.key===`Escape`&&E(!1)},children:[(0,g.jsxs)(`div`,{className:`flex items-center border-b border-border/60 px-3 py-2 gap-2`,children:[(0,g.jsx)(u,{className:`h-4 w-4 text-muted-foreground shrink-0`,"aria-hidden":`true`}),(0,g.jsx)(`input`,{type:`text`,value:k,onChange:L,placeholder:l,className:`h-7 w-full bg-transparent text-sm focus:outline-none text-foreground placeholder:text-muted-foreground`,autoFocus:!0})]}),(0,g.jsxs)(`div`,{className:`max-h-52 overflow-y-auto mt-1 flex flex-col gap-0.5`,children:[y&&(0,g.jsxs)(`div`,{className:`flex items-center justify-center py-6 text-sm text-muted-foreground gap-2`,children:[(0,g.jsx)(c,{className:`h-4 w-4 animate-spin`,"aria-hidden":`true`}),(0,g.jsx)(`span`,{children:`Searching...`})]}),!y&&R.length===0&&(0,g.jsx)(`div`,{className:`py-6 text-center text-sm text-muted-foreground`,children:d}),!y&&R.map((e,t)=>{let n=M===e.value;return(0,g.jsxs)(`button`,{type:`button`,onClick:()=>I(e.value),className:a(`relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none text-left transition-colors`,t===P?`bg-accent text-accent-foreground`:`text-foreground`,n&&`font-semibold`),children:[n&&(0,g.jsx)(`span`,{className:`absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,children:(0,g.jsx)(s,{className:`h-4 w-4`,"aria-hidden":`true`})}),e.label]},e.value)})]})]})})]}),S&&(0,g.jsx)(`span`,{className:a(`text-xs leading-none text-muted-foreground`,x&&`text-destructive`),children:S})]})}),v.displayName=`Combobox`,v.__docgenInfo={description:``,methods:[],displayName:`Combobox`,props:{value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`ComboboxOption`}],raw:`ComboboxOption[]`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Select option..."`,computed:!1}},searchPlaceholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Search..."`,computed:!1}},emptyState:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``,defaultValue:{value:`"No results found."`,computed:!1}},onSearchChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(search: string) => void`,signature:{arguments:[{type:{name:`string`},name:`search`}],return:{name:`void`}}},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},helperText:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),b,x,S,C,w,T,E,D,O,k;e((()=>{b=n(),y(),x={title:`Forms/Combobox`,component:v,parameters:{layout:`centered`},tags:[`autodocs`]},S=[{value:`ndls`,label:`New Delhi (NDLS)`},{value:`bct`,label:`Mumbai Central (MMCT)`},{value:`sbc`,label:`KSR Bengaluru City (SBC)`},{value:`mas`,label:`Chennai Central (MAS)`},{value:`hwh`,label:`Howrah Junction (HWH)`}],C={args:{options:S,placeholder:`Search boarding station...`,searchPlaceholder:`Type station name or code...`}},w={args:{options:S,loading:!0,placeholder:`Fetching station records...`}},T={args:{options:[],placeholder:`Search stations...`,emptyState:(0,b.jsxs)(`div`,{className:`flex flex-col items-center gap-1 py-4`,children:[(0,b.jsx)(`span`,{className:`text-xs font-semibold text-destructive`,children:`No stations matched`}),(0,b.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:`Try spelling the full name`})]})}},E={args:{options:S,disabled:!0,placeholder:`Station selection locked`}},D={args:{options:S,error:!0,helperText:`Boarding station is mandatory for booking ticket.`,placeholder:`Search boarding station...`}},O={args:{options:[{value:`cai`,label:`محطة رمسيس (القاهرة)`},{value:`alx`,label:`محطة سيدي جابر (الإسكندرية)`}],placeholder:`ابحث عن محطة القيام...`,searchPlaceholder:`اكتب اسم المحطة...`,emptyState:`لم يتم العثور على نتائج`},render:e=>(0,b.jsx)(`div`,{dir:`rtl`,className:`w-[300px]`,children:(0,b.jsx)(v,{...e})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    options: stationOptions,
    placeholder: "Search boarding station...",
    searchPlaceholder: "Type station name or code..."
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    options: stationOptions,
    loading: true,
    placeholder: "Fetching station records..."
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    options: [],
    placeholder: "Search stations...",
    emptyState: <div className="flex flex-col items-center gap-1 py-4">\r
        <span className="text-xs font-semibold text-destructive">No stations matched</span>\r
        <span className="text-[10px] text-muted-foreground">Try spelling the full name</span>\r
      </div>
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    options: stationOptions,
    disabled: true,
    placeholder: "Station selection locked"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    options: stationOptions,
    error: true,
    helperText: "Boarding station is mandatory for booking ticket.",
    placeholder: "Search boarding station..."
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "cai",
      label: "محطة رمسيس (القاهرة)"
    }, {
      value: "alx",
      label: "محطة سيدي جابر (الإسكندرية)"
    }],
    placeholder: "ابحث عن محطة القيام...",
    searchPlaceholder: "اكتب اسم المحطة...",
    emptyState: "لم يتم العثور على نتائج"
  },
  render: args => <div dir="rtl" className="w-[300px]">\r
      <Combobox {...args} />\r
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Default`,`LoadingState`,`CustomEmptyState`,`Disabled`,`WithError`,`RTLCheck`]}))();export{T as CustomEmptyState,C as Default,E as Disabled,w as LoadingState,O as RTLCheck,D as WithError,k as __namedExportsOrder,x as default};