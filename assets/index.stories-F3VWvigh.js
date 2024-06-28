import{C as d}from"./index-CvjtUvXf.js";import"./jsx-runtime-DWbWqHZ-.js";import"./index-l2PZgWEW.js";import"./index-EdoPz0t3.js";import"./index-Bb4qSo10.js";import"./type-Djapa02M.js";const S={title:"Components/Calendar/SelectDateCalendar",component:d,parameters:{layout:"centered"},tags:["autodocs"]},m=new Date,l=m.getFullYear(),p=m.getMonth()+1,e={args:{year:l,month:p}},t={args:{year:l,month:p,selectedDate:new Date},argTypes:{onDateSelect:{action:"selected"}}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    year: currentYear,
    month: currentMonth
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var o,s,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    year: currentYear,
    month: currentMonth,
    selectedDate: new Date()
  },
  argTypes: {
    onDateSelect: {
      action: "selected"
    }
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const C=["Default","WithSelectedDate"];export{e as Default,t as WithSelectedDate,C as __namedExportsOrder,S as default};
