import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{p as ae,f as ie,n as le,c as ce,s as me}from"./image-BeeV7SWf.js";import{l as x}from"./logo-B4LWwk5Z.js";import{c as ue}from"./index-EdoPz0t3.js";import{c as pe}from"./index-Bb4qSo10.js";import{r as C}from"./index-l2PZgWEW.js";import{N as t,p as fe}from"./type-BES1X02X.js";import"./index-Xez1tONa.js";import{I as b}from"./index-Ccr_5eeb.js";import{G as D}from"./index-DQvjorRN.js";import"./index-BouTX4n_.js";import{T as de}from"./index-CzcUTvj8.js";import{B as r}from"./index-CEXuD1xl.js";import{L as ge,d as S,e as k,F as xe,N as he,o as Ie,p as ve}from"./index-CXqPxUVV.js";import"./index-avE5IJUA.js";import"./index-D673b99b.js";import"./index-D19_gley.js";import"./index-CvjtUvXf.js";import"./index-DuKMShiw.js";import"./index-Ka7pLT58.js";import{L as Ne}from"./index-BiUH8Pgz.js";import"./index-Du1pcn1V.js";import{c}from"./type-CninyjiE.js";import"./type-Djapa02M.js";const Le=pe(["w-full","border","h-fit","flex","justify-center","items-center","py-[20px]"],{variants:{direction:{[t.Row]:"flex flex-row w-full h-[76px]",[t.Column]:"flex flex-col h-[100vh]"}},defaultVariants:{direction:t.Row}}),y={profileName:"profile",profile:fe},J=C.forwardRef(({className:K,children:je,title:Q,LogoIcon:N="",direction:X=t.Column,navItem:s,profileItem:h,hover:Y,showNavItemName:Z=!1,isLogin:ee=!1,largeSidebar:a,...oe},re)=>{const[I,L]=C.useState([]),j=o=>{if(v(o)){const te=I.filter(se=>se.menus!==o.menus);L(te);return}o.path?window.location.href=o.path:o.submenu&&o.submenu.length>0?L([...I,o]):alert("there is nothing we can do")},v=o=>I.find(n=>n.menus===o.menus),ne=()=>ee?e.jsxs(e.Fragment,{children:[e.jsx(r,{className:` group-hover:hidden ${a?"hidden":"block"}`,children:e.jsx("img",{className:"w-[38px] h-[38px] rounded-full",src:h.profilePicture,alt:"profile"})}),e.jsx(r,{className:`group-hover:block w-full ${a?"block":"hidden"}`,children:e.jsxs(r,{className:"flex items-center gap-2",children:[e.jsx("img",{className:"w-[38px] h-[38px] rounded-full",src:h.profilePicture,alt:"profile"}),e.jsx(de,{as:"h2",className:"font-[600]",children:h.profileName})]})})]}):e.jsx(b,{iconUrl:y.profile,text:y.profileName,className:"font-bold",direction:c.Column}),w=o=>e.jsx(r,{className:"pl-4",children:o&&(o==null?void 0:o.map(n=>e.jsxs(r,{className:"w-full flex items-center justify-center flex-col",children:[e.jsx(S,{leftIcon:n.menuIconComponent,size:k.Medium,label:n.menus,className:"shadow-none w-full pl-[10px]",onClick:()=>j(n)}),v(n)&&n.submenu&&w(n.submenu)]},n.menus)))});return e.jsx(r,{ref:re,className:ue(Le({direction:X}),K,"transition-width duration-300 flex flex-col items-center",a&&"w-52, items-start",Y&&!a&&" group hover:w-52 hover:items-start"),...oe,children:e.jsxs(r,{className:`w-full flex justify-between gap-16 flex-col h-full 
            group-hover:items-start px-[10px] ${a?"items-start":"items-center"}`,children:[e.jsxs(r,{className:`gap-[28px] w-full flex flex-col justify-center group-hover:items-start
              ${a?"items-start":"items-center"}`,children:[N!==""?e.jsx(Ne,{logo:N}):e.jsx(ge,{children:Q}),e.jsx(r,{className:`${a?"hidden":"block"} group-hover:hidden w-full`,children:e.jsx(D,{direction:c.Column,children:s&&(s==null?void 0:s.map(o=>e.jsx(r,{className:"w-full flex items-center justify-center",children:e.jsx(b,{iconUrl:o.menuIcon,text:`${Z?o.menus:""}`,direction:c.Column,className:"text-[12px]"})})))})}),e.jsx(r,{className:`group-hover:block w-full ${a?"block":"hidden"}`,children:e.jsx(r,{children:s&&(s==null?void 0:s.map(o=>e.jsxs(r,{className:"w-full flex items-center justify-center flex-col",children:[e.jsx(S,{leftIcon:o.menuIconComponent,size:k.Medium,label:o.menus,className:"shadow-none w-full pl-[10px]",onClick:()=>j(o)}),v(o)&&o.submenu&&w(o.submenu)]},o.menus)))})})]}),e.jsx(r,{className:"gap-[28px] pl-[0px] flex-col",children:e.jsx(D,{direction:c.Column,children:ne()})})]})})});J.__docgenInfo={description:"",methods:[],displayName:"SideNavbar",props:{LogoIcon:{defaultValue:{value:'""',computed:!1},required:!1},direction:{defaultValue:{value:"NavbarDirection.Column",computed:!0},required:!1},showNavItemName:{defaultValue:{value:"false",computed:!1},required:!1},isLogin:{defaultValue:{value:"false",computed:!1},required:!1}}};const Ae={title:"Components/Header/SideNavbar",component:J,parameters:{layout:"centered"},tags:["autodocs"]},i={profileName:"karan",profilePicture:ae},l=[{menuIconComponent:e.jsx(xe,{}),menuIcon:ie,menus:"Favourite",submenu:[{menus:"fav1"},{menus:"fav2"},{menus:"fav3",submenu:[{menus:"fav3 to 1"},{menus:"fav3 to 2"},{menus:"fav3 to 3"}]}]},{menuIconComponent:e.jsx(he,{}),menuIcon:le,menus:"Notifications"},{menuIconComponent:e.jsx(Ie,{}),menuIcon:ce,menus:"Cart"},{menuIconComponent:e.jsx(ve,{}),menuIcon:me,menus:"Setting"}],m={args:{title:"Logo",direction:t.Column,navItem:l,profileItem:i}},u={args:{title:"Logo",direction:t.Column,navItem:l,isLogin:!0,profileItem:i}},p={args:{title:"Logo",direction:t.Column,navItem:l,isLogin:!0,LogoIcon:x,profileItem:i}},f={args:{title:"Logo",direction:t.Column,navItem:l,isLogin:!0,LogoIcon:x,showNavItemName:!0,profileItem:i}},d={args:{title:"Logo",direction:t.Column,navItem:l,isLogin:!0,LogoIcon:x,showNavItemName:!0,profileItem:i,largeSidebar:!0,hover:!1}},g={args:{title:"Logo",direction:t.Column,navItem:l,isLogin:!0,LogoIcon:x,showNavItemName:!0,profileItem:i,largeSidebar:!1,hover:!0}};var B,M,$;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    profileItem: profileDetail
  }
}`,...($=(M=m.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var F,V,q;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    profileItem: profileDetail
  }
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var P,R,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    LogoIcon: log,
    profileItem: profileDetail
  }
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var _,z,E;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    LogoIcon: log,
    showNavItemName: true,
    profileItem: profileDetail
  }
}`,...(E=(z=f.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var H,G,T;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    LogoIcon: log,
    showNavItemName: true,
    profileItem: profileDetail,
    largeSidebar: true,
    hover: false
  }
}`,...(T=(G=d.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var U,O,A;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    LogoIcon: log,
    showNavItemName: true,
    profileItem: profileDetail,
    largeSidebar: false,
    hover: true
  }
}`,...(A=(O=g.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const Je=["Default","LogedIn","WithLogoIcon","WithMenuItemName","LargeSideBar","HoverSideBar"];export{m as Default,g as HoverSideBar,d as LargeSideBar,u as LogedIn,p as WithLogoIcon,f as WithMenuItemName,Je as __namedExportsOrder,Ae as default};
