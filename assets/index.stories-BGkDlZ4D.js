import{A as d}from"./index-BN8GxwV6.js";import{c as g}from"./Address-BtXnavLd.js";import"./jsx-runtime-DWbWqHZ-.js";import"./index-l2PZgWEW.js";import"./index-EdoPz0t3.js";import"./index-Bb4qSo10.js";const S={title:"Components/AutoComplete/AutoComplete",component:d,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{type:"text",placeholder:"Insert text here",suggestions:["Apple","Banana","Orange","Peach","Grapes"]}},r={args:{type:"country",placeholder:"Insert number here",suggestions:g.map(s=>s.label)}},t={args:{type:"multivalues",placeholder:"Select Multi Values",suggestions:g.map(s=>s.label)}};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Insert text here",
    suggestions: ["Apple", "Banana", "Orange", "Peach", "Grapes"]
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "country",
    placeholder: "Insert number here",
    suggestions: countries.map(country => country.label)
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,m,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: "multivalues",
    placeholder: "Select Multi Values",
    suggestions: countries.map(country => country.label)
  }
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const I=["Text","Country","MultipleValues"];export{r as Country,t as MultipleValues,e as Text,I as __namedExportsOrder,S as default};
