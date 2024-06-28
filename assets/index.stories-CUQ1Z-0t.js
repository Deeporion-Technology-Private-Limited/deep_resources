import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{n as H,R as w}from"./index-CXqPxUVV.js";import"./index-Xez1tONa.js";import"./index-Ccr_5eeb.js";import"./index-DQvjorRN.js";import{I as d,a as m,b as u}from"./index-BouTX4n_.js";import{T}from"./index-CzcUTvj8.js";import{B as o}from"./index-CEXuD1xl.js";import{C as z}from"./index-avE5IJUA.js";import"./index-D673b99b.js";import"./index-D19_gley.js";import"./index-CvjtUvXf.js";import"./index-DuKMShiw.js";import{H as n}from"./index-Ka7pLT58.js";import"./index-BiUH8Pgz.js";import"./index-Du1pcn1V.js";import{L as W}from"./LoginForm-BJBfKBUw.js";import"./index-l2PZgWEW.js";import"./index-EdoPz0t3.js";import"./index-Bb4qSo10.js";import"./type-CninyjiE.js";import"./type-Djapa02M.js";import"./backimage-BYoc7IgR.js";import"./style-UCEm-Xpt.js";import"./type-DK4aipoV.js";import"./OpenEye-B29E7dXg.js";var M=(t=>(t.Checkbox="checkbox",t.Radio="radio",t))(M||{});const ae={title:"Components/PopupModal/Modal",component:H,parameters:{layout:"centered"},argTypes:{},tags:["autodocs"]},r={args:{onClose:()=>t=>!t,button02:!0,button01:!0,modalbutton:!0,openModal:!0,crossIcon:!0,header:e.jsxs(o,{className:"mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]",children:[e.jsx(n,{FontSize:"text-xl",fontWeight:"font-bold",text:"Model Heading"})," "]}),children:e.jsx(o,{children:e.jsx(n,{FontSize:"text-base",fontWeight:"font-normal",text:"Contents in the modals"})})}},a={args:{onClose:()=>t=>!t,button02:!0,button01:!0,modalbutton:!0,openModal:!0,crossIcon:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{className:"font-normal ",FontSize:"text-base",fontWeight:"font-normal",text:"Please fill the Form"}),e.jsxs("div",{className:"flex flex-col mb-4",children:[e.jsx("label",{htmlFor:"input1",className:"mb-2 text-lg font-normal text-slate-500 ",children:"Name :"}),e.jsx(d,{id:"input1",placeholder:"Input 1",type:m.Text,variant:u.Standard,value:""})]}),e.jsxs("div",{className:"flex flex-col mb-4",children:[e.jsx("label",{htmlFor:"input2",className:"mb-2 text-lg font-normal text-slate-500",children:"Email :"}),e.jsx(d,{id:"input1",placeholder:"Input 1",variant:u.Standard,type:m.Text,value:""})]})]}),header:e.jsx(e.Fragment,{children:e.jsxs(o,{className:"mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]",children:[e.jsx(n,{FontSize:"text-xl",fontWeight:"font-bold",text:"Modal Heading"})," "]})})}},s={args:{onClose:()=>t=>!t,button02:!0,button01:!0,modalbutton:!0,openModal:!0,crossIcon:!0,header:e.jsx(e.Fragment,{children:e.jsxs(o,{className:"mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]",children:[e.jsx(n,{FontSize:"text-xl",fontWeight:"font-bold",text:"Modal Heading"})," "]})}),children:e.jsxs(e.Fragment,{children:[e.jsx(n,{className:"font-normal ",FontSize:"text-base",fontWeight:"font-normal",text:"Rate your experience"}),e.jsx(w,{style:{boxShadow:"none"},imageSrc:"",rating:4,className:"shadow-none",StarRating:!0,reviewerName:""})]})}},l={args:{onClose:()=>t=>!t,button02:!0,button01:!0,modalbutton:!0,openModal:!0,crossIcon:!0,header:e.jsx(e.Fragment,{children:e.jsxs(o,{className:"mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]",children:[e.jsx(n,{FontSize:"text-xl",fontWeight:"font-bold",text:"Modal Heading"})," "]})}),children:e.jsxs(e.Fragment,{children:[e.jsx(T,{className:"mb-4",children:'"Contents in the Terms and conditions"'}),e.jsx(z,{label:"Accept the Terms and Conditions",type:M.Checkbox,value:" "})]})}},i={args:{onClose:()=>t=>!t,modalbutton:!0,button02:!1,button01:!1,openModal:!0,crossIcon:!1,children:e.jsx(W,{}),header:e.jsx(e.Fragment,{})}};var c,x,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    button02: true,
    button01: true,
    modalbutton: true,
    openModal: true,
    crossIcon: true,
    header: <Box className="mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]">
        <Headings FontSize="text-xl" fontWeight="font-bold" text={"Model Heading"} />{" "}
      </Box>,
    children: <Box>
        <Headings FontSize={"text-base"} fontWeight="font-normal" text={"Contents in the modals"}></Headings>
      </Box>
  }
}`,...(p=(x=r.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var b,f,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    button02: true,
    button01: true,
    modalbutton: true,
    openModal: true,
    crossIcon: true,
    children: <>
        <Headings className="font-normal " FontSize={"text-base"} fontWeight="font-normal" text={"Please fill the Form"}></Headings>

        <div className="flex flex-col mb-4">
          <label htmlFor="input1" className="mb-2 text-lg font-normal text-slate-500 ">
            Name :
          </label>
          <Input id="input1" placeholder="Input 1" type={InputType.Text} variant={InputVariant.Standard} value={""} />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="input2" className="mb-2 text-lg font-normal text-slate-500">
            Email :
          </label>
          <Input id="input1" placeholder="Input 1" variant={InputVariant.Standard} type={InputType.Text} value={""} />
        </div>
      </>,
    header: <>
        <Box className="mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]">
          <Headings FontSize="text-xl" fontWeight="font-bold" text={"Modal Heading"} />{" "}
        </Box>
      </>
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,j,F;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    button02: true,
    button01: true,
    modalbutton: true,
    openModal: true,
    crossIcon: true,
    header: <>
        <Box className="mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]">
          <Headings FontSize="text-xl" fontWeight="font-bold" text={"Modal Heading"} />{" "}
        </Box>
      </>,
    children: <>
        <Headings className="font-normal " FontSize={"text-base"} fontWeight="font-normal" text={"Rate your experience"}></Headings>

        <ReviewCard style={{
        boxShadow: "none"
      }} imageSrc={""} rating={4} className="shadow-none" StarRating reviewerName={""} />
      </>
  }
}`,...(F=(j=s.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var S,N,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    button02: true,
    button01: true,
    modalbutton: true,
    openModal: true,
    crossIcon: true,
    header: <>
        <Box className="mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]">
          <Headings FontSize="text-xl" fontWeight="font-bold" text={"Modal Heading"} />{" "}
        </Box>
      </>,
    children: <>
        <Text className="mb-4">"Contents in the Terms and conditions"</Text>

        <Checkbox label="Accept the Terms and Conditions" type={Checkboxinput.Checkbox} value={" "} />
      </>
  }
}`,...(y=(N=l.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var C,v,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    modalbutton: true,
    button02: false,
    button01: false,
    openModal: true,
    crossIcon: false,
    children: <LoginForm />,
    header: <></>
  }
}`,...(I=(v=i.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const se=["Default","ModalInputs","ReviewModal","PrivacyPolicy","LoginForms"];export{r as Default,i as LoginForms,a as ModalInputs,l as PrivacyPolicy,s as ReviewModal,se as __namedExportsOrder,ae as default};
