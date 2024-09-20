"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[492],{5492:(s,e,t)=>{t.r(e),t.d(e,{default:()=>d});var a=t(5043),c=t(1072),n=t(8602),i=t(4282),r=t(3204),l=t(5475),o=(t(8421),t(579));const d=()=>{const[s,e]=(0,a.useState)([]);(0,a.useEffect)((()=>{(()=>{const s=JSON.parse(localStorage.getItem("cartItems"))||[];e(s)})()}),[]);const t=(t,a)=>{const c=s.map((s=>s.id===t?{...s,quantity:a}:s));e(c),localStorage.setItem("cartItems",JSON.stringify(c))};return(0,o.jsxs)("div",{className:"container mt-4",children:[(0,o.jsxs)(c.A,{children:[(0,o.jsxs)(n.A,{md:8,children:[(0,o.jsx)("h2",{className:"mb-4",children:"Shopping Cart"}),(0,o.jsx)("div",{className:"cart-items",children:s.length>0?s.map((a=>(0,o.jsx)("div",{className:"cart-item mb-4 p-3 border-bottom",children:(0,o.jsxs)(c.A,{className:"align-items-center",children:[(0,o.jsx)(n.A,{xs:1,className:"product-number",children:(0,o.jsx)("span",{children:s.indexOf(a)+1})}),(0,o.jsxs)(n.A,{xs:8,children:[(0,o.jsx)("h5",{className:"product-name",children:a.name}),(0,o.jsxs)("p",{className:"text-muted",children:["Price: \u20b9",a.price]}),(0,o.jsxs)("div",{className:"quantity-controls d-flex",children:[(0,o.jsx)(i.A,{variant:"outline-secondary",className:"quantity-btn",onClick:()=>t(a.id,a.quantity-1),disabled:a.quantity<=1,children:"-"}),(0,o.jsx)("span",{className:"quantity",children:a.quantity}),(0,o.jsx)(i.A,{variant:"outline-secondary",className:"quantity-btn",onClick:()=>t(a.id,a.quantity+1),children:"+"})]})]}),(0,o.jsx)(n.A,{xs:3,className:"text-md-right",children:(0,o.jsxs)(i.A,{variant:"danger",className:"remove-btn",onClick:()=>(t=>{const a=s.filter((s=>s.id!==t));e(a),localStorage.setItem("cartItems",JSON.stringify(a))})(a.id),children:[(0,o.jsx)(r.RCe,{})," Remove"]})})]})},a.id))):(0,o.jsx)("p",{children:"Your cart is empty."})})]}),(0,o.jsx)(n.A,{md:4,children:s.length>0&&(0,o.jsxs)("div",{className:"cart-summary p-4 bg-light rounded",children:[(0,o.jsx)("h5",{children:"Order Summary"}),(0,o.jsxs)("p",{className:"text-muted",children:["Subtotal (",s.length," items): \u20b9",s.reduce(((s,e)=>s+e.price*e.quantity),0)]}),(0,o.jsx)(i.A,{as:l.N_,to:"/checkout",variant:"success",className:"btn-block",children:"Proceed to Checkout"})]})})]}),s.length>0&&(0,o.jsx)(i.A,{className:"back-to-top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},variant:"secondary",style:{position:"fixed",bottom:"20px",right:"20px"},children:(0,o.jsx)(r.uCC,{size:20})})]})}},1072:(s,e,t)=>{t.d(e,{A:()=>o});var a=t(8139),c=t.n(a),n=t(5043),i=t(7852),r=t(579);const l=n.forwardRef(((s,e)=>{let{bsPrefix:t,className:a,as:n="div",...l}=s;const o=(0,i.oU)(t,"row"),d=(0,i.gy)(),m=(0,i.Jm)(),h=`${o}-cols`,x=[];return d.forEach((s=>{const e=l[s];let t;delete l[s],null!=e&&"object"===typeof e?({cols:t}=e):t=e;const a=s!==m?`-${s}`:"";null!=t&&x.push(`${h}${a}-${t}`)})),(0,r.jsx)(n,{ref:e,...l,className:c()(a,o,...x)})}));l.displayName="Row";const o=l}}]);
//# sourceMappingURL=492.1c755d13.chunk.js.map