"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[932],{8932:(s,e,t)=>{t.r(e),t.d(e,{default:()=>p});var i=t(5043),a=t(3216),n=t(2741),r=t(7918),c=t(1072),o=t(8602),l=t(4282),d=(t(8421),t(579));const p=()=>{const{id:s}=(0,a.g)(),e=n.v[s],[t,p]=(0,i.useState)(1),[m,x]=(0,i.useState)(!1),[h,u]=(0,i.useState)(0);if(!e)return(0,d.jsx)("h2",{children:"Product not found!"});return(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsxs)(c.A,{children:[(0,d.jsx)(o.A,{sm:2,className:"sidenav-fixed",children:(0,d.jsx)(r.A,{})}),(0,d.jsx)(o.A,{sm:10,className:"product-content",children:(0,d.jsxs)(c.A,{className:"mt-4",children:[(0,d.jsxs)(o.A,{sm:5,children:[(0,d.jsx)("div",{className:"product-image "+(m?"zoom":""),onClick:()=>{x(!m)},style:{border:"1px solid #ddd",padding:"10px",cursor:"zoom-in"},children:(0,d.jsx)("img",{src:e.image,alt:e.ProductName,style:{width:"100%",transition:"transform 0.3s ease"}})}),(0,d.jsxs)("p",{style:{fontSize:"12px",color:"#999"},children:["Click to ",m?"zoom out":"zoom in"]})]}),(0,d.jsxs)(o.A,{sm:7,children:[(0,d.jsx)("h2",{children:e.ProductName}),(0,d.jsxs)("p",{style:{fontSize:"28px",color:"green"},children:["\u20b9",e.price]}),(0,d.jsx)("p",{className:"justified-text",children:e.description||"No description available."}),(0,d.jsx)("p",{children:(0,d.jsxs)("strong",{children:["Author: ",e.author]})})," ",(0,d.jsxs)("div",{className:"star-rating",style:{marginBottom:"10px"},children:[(s=>[...Array(5)].map(((e,t)=>(0,d.jsx)("span",{style:{fontSize:"20px",color:t<s?"#ffc107":"#e4e5e9"},children:"\u2605"},t))))(e.rating),(0,d.jsxs)("p",{style:{marginTop:"5px"},children:["Rating: ",e.rating," Star",e.rating>1?"s":""]})]}),(0,d.jsxs)("div",{className:"quantity-controls",children:[(0,d.jsx)(l.A,{variant:"outline-secondary",onClick:()=>{t>1&&p(t-1)},children:"-"}),(0,d.jsx)("span",{style:{padding:"0 10px",fontSize:"18px"},children:t}),(0,d.jsx)(l.A,{variant:"outline-secondary",onClick:()=>p(t+1),children:"+"})]}),(0,d.jsx)(l.A,{variant:"success",onClick:()=>{const s=JSON.parse(localStorage.getItem("cartItems"))||[],i={id:e.id,name:e.ProductName,price:e.price,quantity:t>0?t:1},a=s.findIndex((s=>s.id===i.id));-1!==a?s[a].quantity+=i.quantity:s.push(i),localStorage.setItem("cartItems",JSON.stringify(s)),alert(`${i.name} added to cart!`)},style:{marginTop:"20px",display:"block",width:"100%"},children:"Add to Cart"})]})]})})]})})}},1072:(s,e,t)=>{t.d(e,{A:()=>l});var i=t(8139),a=t.n(i),n=t(5043),r=t(7852),c=t(579);const o=n.forwardRef(((s,e)=>{let{bsPrefix:t,className:i,as:n="div",...o}=s;const l=(0,r.oU)(t,"row"),d=(0,r.gy)(),p=(0,r.Jm)(),m=`${l}-cols`,x=[];return d.forEach((s=>{const e=o[s];let t;delete o[s],null!=e&&"object"===typeof e?({cols:t}=e):t=e;const i=s!==p?`-${s}`:"";null!=t&&x.push(`${m}${i}-${t}`)})),(0,c.jsx)(n,{ref:e,...o,className:a()(i,l,...x)})}));o.displayName="Row";const l=o}}]);
//# sourceMappingURL=932.9d13b519.chunk.js.map