import{i as e,l as t}from"./preload-helper-CB6TPTYB.js";import{d as n,j as r}from"./iframe-Eud8cKR2.js";import{n as i,t as a}from"./utils-Birg4gb4.js";import{A as o,K as s,R as c,c as l,ct as u,t as d,v as f}from"./lucide-react-CiXeiYw5.js";var p,m,h,g,_=e((()=>{p=n(),m=t(r()),i(),d(),h={"no-journey":{icon:(0,p.jsx)(l,{className:`h-10 w-10 text-muted-foreground/50`}),title:`No Journey Found`,description:`We couldn't find any active or upcoming journeys. Try searching for a new route.`},"no-live-status":{icon:(0,p.jsx)(o,{className:`h-10 w-10 text-muted-foreground/50`}),title:`No Live Status Available`,description:`Live tracking data is unavailable for this train right now. Please try again shortly.`},"no-seat-data":{icon:(0,p.jsx)(c,{className:`h-10 w-10 text-muted-foreground/50`}),title:`No Seat Data Available`,description:`Seat availability information couldn't be loaded for this train and date.`},"no-fare-data":{icon:(0,p.jsx)(u,{className:`h-10 w-10 text-muted-foreground/50`}),title:`No Fare Data Found`,description:`Fare details are not available for this journey. Please check back later.`},"no-search-results":{icon:(0,p.jsx)(f,{className:`h-10 w-10 text-muted-foreground/50`}),title:`No Search Results`,description:`No trains found for this route and date. Try adjusting your search criteria.`},"no-recent-searches":{icon:(0,p.jsx)(s,{className:`h-10 w-10 text-muted-foreground/50`}),title:`No Recent Searches`,description:`Your search history will appear here once you start searching for trains.`}},g=m.forwardRef(({className:e,preset:t,title:n,description:r,icon:i,children:o,...s},c)=>{let l=t?h[t]:null,u=i??l?.icon,d=n??l?.title??`Nothing here`,f=r??l?.description;return(0,p.jsxs)(`div`,{ref:c,className:a(`flex flex-col items-center justify-center gap-4 py-12 px-6 text-center`,e),...s,children:[u&&(0,p.jsx)(`div`,{className:`rounded-2xl bg-muted/30 p-4 border border-border/40`,children:u}),(0,p.jsxs)(`div`,{className:`space-y-1.5 max-w-xs`,children:[(0,p.jsx)(`h3`,{className:`text-sm font-bold text-foreground`,children:d}),f&&(0,p.jsx)(`p`,{className:`text-xs text-muted-foreground leading-relaxed`,children:f})]}),o&&(0,p.jsx)(`div`,{className:`flex items-center gap-2 mt-1`,children:o})]})}),g.displayName=`RailwayEmptyState`,g.__docgenInfo={description:``,methods:[],displayName:`RailwayEmptyState`,props:{preset:{required:!1,tsType:{name:`union`,raw:`| "no-journey"
| "no-live-status"
| "no-seat-data"
| "no-fare-data"
| "no-search-results"
| "no-recent-searches"`,elements:[{name:`literal`,value:`"no-journey"`},{name:`literal`,value:`"no-live-status"`},{name:`literal`,value:`"no-seat-data"`},{name:`literal`,value:`"no-fare-data"`},{name:`literal`,value:`"no-search-results"`},{name:`literal`,value:`"no-recent-searches"`}]},description:``},title:{required:!1,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),v,y,b,x,S,C,w,T,E,D,O;e((()=>{v=n(),_(),y={title:`Railway/EmptyStates`,component:g,parameters:{layout:`centered`},tags:[`autodocs`]},b={args:{preset:`no-journey`}},x={args:{preset:`no-live-status`}},S={args:{preset:`no-seat-data`}},C={args:{preset:`no-fare-data`}},w={args:{preset:`no-search-results`}},T={args:{preset:`no-recent-searches`}},E={args:{preset:`no-live-status`,children:(0,v.jsx)(`button`,{className:`px-4 py-2 text-xs bg-primary text-primary-foreground rounded-lg font-bold`,children:`Refresh`})}},D={args:{title:`Route Unavailable`,description:`This route is temporarily suspended. Please check alternative connections.`,children:(0,v.jsx)(`button`,{className:`px-4 py-2 text-xs border rounded-lg font-semibold`,children:`View Alternatives`})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    preset: "no-journey"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    preset: "no-live-status"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    preset: "no-seat-data"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    preset: "no-fare-data"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    preset: "no-search-results"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    preset: "no-recent-searches"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    preset: "no-live-status",
    children: <button className="px-4 py-2 text-xs bg-primary text-primary-foreground rounded-lg font-bold">\r
        Refresh\r
      </button>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Route Unavailable",
    description: "This route is temporarily suspended. Please check alternative connections.",
    children: <button className="px-4 py-2 text-xs border rounded-lg font-semibold">\r
        View Alternatives\r
      </button>
  }
}`,...D.parameters?.docs?.source}}},O=[`NoJourney`,`NoLiveStatus`,`NoSeatData`,`NoFareData`,`NoSearchResults`,`NoRecentSearches`,`WithActionButton`,`CustomContent`]}))();export{D as CustomContent,C as NoFareData,b as NoJourney,x as NoLiveStatus,T as NoRecentSearches,w as NoSearchResults,S as NoSeatData,E as WithActionButton,O as __namedExportsOrder,y as default};