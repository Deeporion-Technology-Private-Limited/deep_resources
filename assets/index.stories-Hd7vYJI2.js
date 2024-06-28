import{j as n}from"./jsx-runtime-DWbWqHZ-.js";import{r as c}from"./index-l2PZgWEW.js";import{c as m}from"./index-EdoPz0t3.js";import{c as b}from"./index-Bb4qSo10.js";const u=b(["w-full","border","border-gray-200","rounded-lg","transition-all","duration-100","outline-none","placeholder:text-gray-400","placeholder:text-sm"],{variants:{size:{small:"text-sm p-1",medium:"text-base p-2",large:"text-lg p-3"}},defaultVariants:{size:"medium"}}),C=c.forwardRef(({className:t,suggestions:r,onSegmentChange:g,size:i="medium",type:o,color:j,...V},v)=>{const[d,w]=c.useState(r[0]),H=(e,a)=>{o==="toggle"&&a===r.length-1||(w(e),g&&g(e))};return n.jsx("div",{className:m("relative",t),ref:v,...V,children:n.jsx("div",{className:m("flex space-x-2 bg-gray-200 p-1 rounded-lg",u({size:i})),children:r.map((e,a)=>n.jsxs("button",{className:m("rounded-lg transition-all duration-100 flex items-center",{"bg-primary-500 text-white":e===d,"bg-gray-200 text-gray-800 hover:bg-white hover:text-gray-800":e!==d,"cursor-not-allowed opacity-50":o==="toggle"&&a===r.length-1},u({size:i})),onClick:()=>H(e,a),disabled:o==="toggle"&&a===r.length-1,children:[o==="default"&&n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-1",children:n.jsx("path",{d:"M16.6667 2.50001H15.8333V0.833344H14.1667V2.50001H5.83334V0.833344H4.16667V2.50001H3.33334C2.41667 2.50001 1.66667 3.25001 1.66667 4.16668V17.5C1.66667 18.4167 2.41667 19.1667 3.33334 19.1667H16.6667C17.5833 19.1667 18.3333 18.4167 18.3333 17.5V4.16668C18.3333 3.25001 17.5833 2.50001 16.6667 2.50001ZM16.6667 17.5H3.33334V8.33334H16.6667V17.5ZM16.6667 6.66668H3.33334V4.16668H16.6667V6.66668Z",fill:"#72787F"})}),e]},e))})})});C.__docgenInfo={description:"",methods:[],displayName:"SegmentControl",props:{size:{defaultValue:{value:'"medium"',computed:!1},required:!1}}};const D={title:"Components/Segment-Control/SegmentControl",component:C,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{type:"default",suggestions:["Segment 1","Segment 2","Segment 3"],onSegmentChange:t=>t,size:"medium"}},l={args:{type:"toggle",suggestions:["Day","Week","Month","Year"],onSegmentChange:t=>t,size:"medium"}};var p,h,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "default",
    suggestions: ["Segment 1", "Segment 2", "Segment 3"],
    onSegmentChange: (segment: any) => segment,
    size: "medium"
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,S,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: "toggle",
    suggestions: ["Day", "Week", "Month", "Year"],
    onSegmentChange: (segment: any) => segment,
    size: "medium"
  }
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const _=["Default","Toggle"];export{s as Default,l as Toggle,_ as __namedExportsOrder,D as default};
