import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{d as I,h as n,e as t,f as d,g as p}from"./index-CXqPxUVV.js";import{B as X}from"./index-CEXuD1xl.js";import"./index-l2PZgWEW.js";import"./index-Xez1tONa.js";import"./index-EdoPz0t3.js";import"./index-Bb4qSo10.js";import"./type-CninyjiE.js";import"./index-Ccr_5eeb.js";import"./index-DQvjorRN.js";import"./index-BouTX4n_.js";import"./index-CzcUTvj8.js";import"./index-avE5IJUA.js";import"./index-D673b99b.js";import"./index-D19_gley.js";import"./index-CvjtUvXf.js";import"./type-Djapa02M.js";import"./index-DuKMShiw.js";import"./index-Ka7pLT58.js";import"./index-BiUH8Pgz.js";import"./index-Du1pcn1V.js";const be={title:"Components/Menu Item",component:I,parameters:{layout:"centered"},tags:["autodocs"]},Y="Item",r=({variant:q,label:F,leftIcon:G,rightIcon:H,wannaChangRightIcon:J,leftSpacer:K,border:N,size:P,isSubmenu:Q,children:T,onClick:U})=>({args:{variant:q,label:F,leftIcon:G,rightIcon:H,wannaChangRightIcon:J,leftSpacer:K,border:N,size:P,isSubmenu:Q,children:T,onClick:U}}),a=r({variant:n.Default,label:"Item 1",size:t.Small,leftSpacer:!1,onClick:()=>alert("Default item clicked")}),i=r({variant:n.RightIcon,label:Y,rightIcon:e.jsx(d,{}),size:t.Medium,onClick:()=>alert("Right icon item clicked")}),o=r({variant:n.LeftIcon,label:"Item 3",leftIcon:e.jsx(p,{}),size:t.Medium,onClick:()=>alert("Left icon item clicked")}),c=r({variant:n.LeftSpacer,label:"Item 4",leftSpacer:!0,size:t.Medium,onClick:()=>alert("Left spacer item clicked")}),m=r({variant:n.Border,label:"Item 5",border:!0,leftSpacer:!0,size:t.Medium,onClick:()=>alert("Border item clicked")}),l=r({variant:n.LeftIcon,label:"Item 6",leftIcon:e.jsx(p,{}),rightIcon:e.jsx(d,{}),size:t.Medium,onClick:()=>alert("Left icon item clicked")}),s=r({variant:n.LeftIcon,label:"Item 6",leftIcon:e.jsx(p,{}),rightIcon:e.jsx(d,{}),wannaChangRightIcon:!0,size:t.Medium,onClick:()=>alert("Left icon item clicked")}),u=r({variant:n.Default,label:"Menu Items",rightIcon:e.jsx(d,{}),size:t.Medium,isSubmenu:!0,children:e.jsxs(X,{children:[e.jsx(I,{label:"Submenu Item 1",size:t.Medium,variant:"Default",onClick:()=>alert("Submenu item 1 clicked")}),e.jsx(I,{label:"Submenu Item 2",size:t.Medium,variant:"Default",onClick:()=>alert("Submenu item 2 clicked")}),e.jsx(I,{label:"Submenu Item 3",size:t.Small,variant:"Default",onClick:()=>alert("Submenu item 3 clicked")})]})});var f,S,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`generateMenuItemStory({
  variant: MenuItemVariant.Default,
  label: "Item 1",
  size: MenuItemSize.Small,
  leftSpacer: false,
  onClick: () => alert("Default item clicked")
})`,...(M=(S=a.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var g,b,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`generateMenuItemStory({
  variant: MenuItemVariant.RightIcon,
  label,
  rightIcon: <LeftIcon />,
  size: MenuItemSize.Medium,
  onClick: () => alert("Right icon item clicked")
})`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,z,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`generateMenuItemStory({
  variant: MenuItemVariant.LeftIcon,
  label: "Item 3",
  leftIcon: <RightIcon />,
  size: MenuItemSize.Medium,
  onClick: () => alert("Left icon item clicked")
})`,...(C=(z=o.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var L,v,x;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`generateMenuItemStory({
  variant: MenuItemVariant.LeftSpacer,
  label: "Item 4",
  leftSpacer: true,
  size: MenuItemSize.Medium,
  onClick: () => alert("Left spacer item clicked")
})`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var R,D,j;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`generateMenuItemStory({
  variant: MenuItemVariant.Border,
  label: "Item 5",
  border: true,
  leftSpacer: true,
  size: MenuItemSize.Medium,
  onClick: () => alert("Border item clicked")
})`,...(j=(D=m.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var y,B,W;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`generateMenuItemStory({
  variant: MenuItemVariant.LeftIcon,
  label: "Item 6",
  leftIcon: <RightIcon />,
  rightIcon: <LeftIcon />,
  size: MenuItemSize.Medium,
  onClick: () => alert("Left icon item clicked")
})`,...(W=(B=l.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var V,O,w;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`generateMenuItemStory({
  variant: MenuItemVariant.LeftIcon,
  label: "Item 6",
  leftIcon: <RightIcon />,
  rightIcon: <LeftIcon />,
  wannaChangRightIcon: true,
  size: MenuItemSize.Medium,
  onClick: () => alert("Left icon item clicked")
})`,...(w=(O=s.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var A,E,_;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`generateMenuItemStory({
  variant: MenuItemVariant.Default,
  label: "Menu Items",
  rightIcon: <LeftIcon />,
  size: MenuItemSize.Medium,
  isSubmenu: true,
  children: <Box>
            <MenuItem label="Submenu Item 1" size={MenuItemSize.Medium} variant="Default" onClick={() => alert("Submenu item 1 clicked")} />
            <MenuItem label="Submenu Item 2" size={MenuItemSize.Medium} variant="Default" onClick={() => alert("Submenu item 2 clicked")} />
            <MenuItem label="Submenu Item 3" size={MenuItemSize.Small} variant="Default" onClick={() => alert("Submenu item 3 clicked")} />
        </Box>
})`,...(_=(E=u.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const he=["Default","WithRightIcon","WithLeftIcon","WithLeftSpacer","WithBorder","WithLeftAndRightIcon","ChangeRightIconOnClick","Submenu"];export{s as ChangeRightIconOnClick,a as Default,u as Submenu,m as WithBorder,l as WithLeftAndRightIcon,o as WithLeftIcon,c as WithLeftSpacer,i as WithRightIcon,he as __namedExportsOrder,be as default};
