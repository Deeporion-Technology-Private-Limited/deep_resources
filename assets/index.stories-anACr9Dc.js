import{j as r}from"./jsx-runtime-DWbWqHZ-.js";import{c as M}from"./index-EdoPz0t3.js";import{c as E}from"./index-Bb4qSo10.js";import{r as B}from"./index-l2PZgWEW.js";const v=({className:e,handleClick:n})=>r.jsx("div",{className:e,onClick:n,children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M12.6667 4.27333L11.7267 3.33333L8 7.06L4.27333 3.33333L3.33333 4.27333L7.06 8L3.33333 11.7267L4.27333 12.6667L8 8.93999L11.7267 12.6667L12.6667 11.7267L8.94 8L12.6667 4.27333Z",fill:"#DC2626"})})}),w=({className:e,handleClick:n})=>r.jsx("div",{className:e,onClick:n,children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M12.6667 4.27333L11.7267 3.33333L8 7.06L4.27333 3.33333L3.33333 4.27333L7.06 8L3.33333 11.7267L4.27333 12.6667L8 8.93999L11.7267 12.6667L12.6667 11.7267L8.94 8L12.6667 4.27333Z",fill:"#D97706"})})}),C=({className:e,handleClick:n})=>r.jsx("div",{className:e,onClick:n,children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M12.6667 4.27334L11.7267 3.33334L8 7.06L4.27333 3.33334L3.33333 4.27334L7.06 8L3.33333 11.7267L4.27333 12.6667L8 8.94L11.7267 12.6667L12.6667 11.7267L8.94 8L12.6667 4.27334Z",fill:"#26282B"})})});v.__docgenInfo={description:"",methods:[],displayName:"CloseRed"};w.__docgenInfo={description:"",methods:[],displayName:"CloseYellow"};C.__docgenInfo={description:"",methods:[],displayName:"CloseBlack"};var a=(e=>(e.error="error",e.warning="warning",e.information="information",e))(a||{}),i=(e=>(e.small="px-4 py-2 text-sm",e.medium="px-4 py-2 text-base",e.large="px-6 py-3 text-lg",e))(i||{}),l=(e=>(e.children="You have to agree with Privacy Policy and Terms and Conditions to Sign up",e))(l||{}),y=(e=>(e.Primary="text-white",e))(y||{});const T=E(["w-[360px]","h-fit","b-[0px, 0px, 0px, 4px]","p-[12px, 16px, 12px, 16px]","rounded","gap-[8px]","border-l-[4px]","border-t-[0.5px]","border-b-[0.5px]","border-r-[0.5px]"],{variants:{variant:{[a.error]:"",[a.warning]:"",[a.information]:""},size:{sm:i.small,md:i.medium,lg:i.large},colorscheme:{primary:y.Primary}},compoundVariants:[{variant:a.error,className:" text-[#DC2626] gap-2 border-l-[#DC2626]  bg-[#FEE2E2]"},{variant:a.warning,className:"text-[#D97706]  border-l-[#D97706]  bg-[#FEF3C7] gap-2"},{variant:a.information,className:"border-l-[#8833FF] text-black  gap-2"}],defaultVariants:{variant:a.error,size:"sm",colorscheme:"primary"}}),j=B.forwardRef(({variant:e=a.error,size:n,colorscheme:k,className:b,handleClose:d,addRightIcon:I=!1,children:R,..._},N)=>{const D=e===a.error?r.jsx(v,{handleClick:d}):e===a.warning?r.jsx(w,{handleClick:d}):r.jsx(C,{handleClick:d});return r.jsx("div",{ref:N,className:M(T({variant:e,size:n,colorscheme:k,className:b})),..._,children:r.jsxs("div",{className:"flex gap-2",children:[r.jsx("div",{children:R}),r.jsx("button",{children:I&&D})]})})});j.__docgenInfo={description:"",methods:[],displayName:"SystemMessage",props:{variant:{defaultValue:{value:"systemMessageTypes.error",computed:!0},required:!1},addRightIcon:{defaultValue:{value:"false",computed:!1},required:!1}}};const Y={title:"Components/systemMessage/systemMessage",component:j,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{variant:a.error,children:l.children,addRightIcon:!1,handleClose:()=>{alert("clicked on error message")}}},o={args:{variant:a.warning,children:l.children,addRightIcon:!1,handleClose:()=>{alert("clicked on error warning")}}},t={args:{variant:a.information,children:l.children,addRightIcon:!1,handleClose:()=>{alert("clicked on error information")}}};var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: systemMessageTypes.error,
    children: messageText.children,
    addRightIcon: false,
    handleClose: () => {
      alert("clicked on error message");
    }
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: systemMessageTypes.warning,
    children: messageText.children,
    addRightIcon: false,
    handleClose: () => {
      alert("clicked on error warning");
    }
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,u,L;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: systemMessageTypes.information,
    children: messageText.children,
    addRightIcon: false,
    handleClose: () => {
      alert("clicked on error information");
    }
  }
}`,...(L=(u=t.parameters)==null?void 0:u.docs)==null?void 0:L.source}}};const Z=["Default","Warning","Information"];export{s as Default,t as Information,o as Warning,Z as __namedExportsOrder,Y as default};
