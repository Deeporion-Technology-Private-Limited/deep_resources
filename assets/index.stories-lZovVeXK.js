import{j as a}from"./jsx-runtime-DWbWqHZ-.js";import{C as m}from"./index-avE5IJUA.js";import{a as e}from"./type-CninyjiE.js";import{r as W}from"./index-l2PZgWEW.js";import"./index-EdoPz0t3.js";import"./index-Bb4qSo10.js";const oe={title:"Components/Checkbox",component:m,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{label:"Default Checkbox",value:"Default Checkbox",checked:!1,size:e.Medium,variant:"Basic",labelClassname:"",onChange:()=>{}}},r={args:{label:"Checked Checkbox",checked:!0,size:e.Medium,onChange:()=>{}}},s={args:{label:"Disabled Checkbox",checked:!1,size:e.Medium,disabled:!0,onChange:()=>{}}},n={args:{label:"Radio Option",checked:!1,size:e.Medium,variant:"Basic",type:"radio",onChange:()=>{}}},t={args:{label:"Label Before Checkbox",checked:!1,size:e.Medium,variant:"Basic",labelPosition:"before",onChange:()=>{}}},c={args:{type:"toggle",checked:!1,size:e.Medium,variant:"Basic",labelPosition:"before",onChange:()=>{}}},l={args:{type:"checkbox",label:"Custom Checkbox",checked:!0,containerClassName:"w-10 h-10 rounded-lg border-2 border-blue-500 bg-blue-100",inputClassName:"cursor-pointer",checkedClassName:"",fillColor:"red"}},i={args:{type:"radio",label:"Custom Radio",containerClassName:"w-10 h-10 rounded-full border-2 border-green-500 bg-teal-200 ",inputClassName:"cursor-pointer",checkedClassName:"bg-red-500"}},d={args:{type:"toggle",label:"Custom Toggle",containerClassName:"w-[4.2rem] h-9 rounded-full border-2 border-purple-500 bg-white",inputClassName:"cursor-pointer",checkedClassName:"bg-teal-500"}},u={args:{type:"toggle",label:"Disabled Toggle",checked:!1,disabled:!0,containerClassName:"w-16 h-9 rounded-full border-2 border-gray-500 bg-gray-200 cursor-not-allowed opacity-50",inputClassName:"cursor-not-allowed",checkedClassName:"bg-gray-500"}},p={args:{},render:()=>{const[g,b]=W.useState("option1");return a.jsxs("div",{children:[a.jsx(m,{label:"Option 1",type:"radio",value:"option1",name:"radioGroup",checked:g==="option1",onChange:()=>b("option1")}),a.jsx(m,{label:"Option 2",type:"radio",value:"option2",name:"radioGroup",checked:g==="option2",onChange:()=>b("option2")}),a.jsx(m,{label:"Option 3",type:"radio",value:"option3",name:"radioGroup",checked:g==="option3",onChange:()=>b("option3")})]})}};var h,C,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Default Checkbox",
    value: "Default Checkbox",
    checked: false,
    size: ButtonSize.Medium,
    variant: "Basic",
    labelClassname: "",
    onChange: () => {}
  }
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var f,x,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Checked Checkbox",
    checked: true,
    size: ButtonSize.Medium,
    onChange: () => {}
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var N,S,v;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Disabled Checkbox",
    checked: false,
    size: ButtonSize.Medium,
    disabled: true,
    onChange: () => {}
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var z,B,w;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Radio Option",
    checked: false,
    size: ButtonSize.Medium,
    variant: "Basic",
    type: "radio",
    onChange: () => {}
  }
}`,...(w=(B=n.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var D,M,R;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Label Before Checkbox",
    checked: false,
    size: ButtonSize.Medium,
    variant: "Basic",
    labelPosition: "before",
    onChange: () => {}
  }
}`,...(R=(M=t.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var T,V,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: "toggle",
    checked: false,
    size: ButtonSize.Medium,
    variant: "Basic",
    labelPosition: "before",
    onChange: () => {}
  }
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var G,j,L;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: "checkbox",
    label: "Custom Checkbox",
    checked: true,
    containerClassName: "w-10 h-10 rounded-lg border-2 border-blue-500 bg-blue-100",
    inputClassName: "cursor-pointer",
    checkedClassName: "",
    fillColor: 'red'
  }
}`,...(L=(j=l.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var P,E,_;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: "radio",
    label: "Custom Radio",
    containerClassName: "w-10 h-10 rounded-full border-2 border-green-500 bg-teal-200 ",
    inputClassName: "cursor-pointer",
    checkedClassName: "bg-red-500"
  }
}`,...(_=(E=i.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var q,A,F;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: "toggle",
    label: "Custom Toggle",
    containerClassName: "w-[4.2rem] h-9 rounded-full border-2 border-purple-500 bg-white",
    inputClassName: "cursor-pointer",
    checkedClassName: "bg-teal-500"
  }
}`,...(F=(A=d.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var H,I,J;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: "toggle",
    label: "Disabled Toggle",
    checked: false,
    disabled: true,
    containerClassName: "w-16 h-9 rounded-full border-2 border-gray-500 bg-gray-200 cursor-not-allowed opacity-50",
    inputClassName: "cursor-not-allowed",
    checkedClassName: "bg-gray-500"
  }
}`,...(J=(I=u.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [checkedValue, setCheckedValue] = useState<string>("option1"); // State to track checked value

    return <div>
        <Checkbox label="Option 1" type="radio" value="option1" name="radioGroup" checked={checkedValue === "option1"} onChange={() => setCheckedValue("option1")} />
        <Checkbox label="Option 2" type="radio" value="option2" name="radioGroup" checked={checkedValue === "option2"} onChange={() => setCheckedValue("option2")} />
        <Checkbox label="Option 3" type="radio" value="option3" name="radioGroup" checked={checkedValue === "option3"} onChange={() => setCheckedValue("option3")} />
      </div>;
  }
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const re=["Default","Checked","Disabled","Radio","LabelBefore","ToogleSwitch","CustomCheckbox","CustomeRadio","CustomToggle","DisabledToggle","RadioGroup"];export{r as Checked,l as CustomCheckbox,d as CustomToggle,i as CustomeRadio,o as Default,s as Disabled,u as DisabledToggle,t as LabelBefore,n as Radio,p as RadioGroup,c as ToogleSwitch,re as __namedExportsOrder,oe as default};
