"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[492],{5492:(e,s,t)=>{t.r(s),t.d(s,{default:()=>d});var a=t(5043),c=t(1072),n=t(8602),i=t(4282),r=t(3204),l=t(5475),o=(t(8421),t(579));const d=()=>{const[e,s]=(0,a.useState)([]);(0,a.useEffect)((()=>{(()=>{const e=JSON.parse(localStorage.getItem("cartItems"))||[];s(e)})()}),[]);const t=(t,a)=>{const c=e.map((e=>e.id===t?{...e,quantity:a}:e));s(c),localStorage.setItem("cartItems",JSON.stringify(c))};return(0,o.jsxs)("div",{className:"container mt-4",style:{paddingsLeft:"15px",marginRight:"50px"},children:[(0,o.jsxs)(c.A,{children:[(0,o.jsxs)(n.A,{md:8,children:[(0,o.jsx)("h2",{className:"mb-4",children:"Shopping Cart"}),(0,o.jsx)("div",{className:"cart-items",children:e.length>0?e.map((a=>(0,o.jsx)("div",{className:"cart-item mb-4 p-3 border-bottom",children:(0,o.jsxs)(c.A,{className:"align-items-center",children:[(0,o.jsx)(n.A,{xs:1,className:"product-number",children:(0,o.jsx)("span",{children:e.indexOf(a)+1})}),(0,o.jsxs)(n.A,{xs:8,children:[(0,o.jsx)("h5",{className:"product-name",children:a.name}),(0,o.jsxs)("p",{className:"text-muted",children:["Price:",a.isDiscount?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("span",{style:{textDecoration:"line-through",color:"red"},children:["\u20b9",a.price]})," "," ",(0,o.jsxs)("span",{style:{color:"green"},children:["\u20b9",(.7*a.price).toFixed(2)]})," "]}):(0,o.jsxs)(o.Fragment,{children:["\u20b9",a.price]})]}),(0,o.jsxs)("div",{className:"quantity-controls d-flex",children:[(0,o.jsx)(i.A,{variant:"outline-secondary",className:"quantity-btn",onClick:()=>t(a.id,a.quantity-1),disabled:a.quantity<=1,children:"-"}),(0,o.jsx)("span",{className:"quantity",children:a.quantity}),(0,o.jsx)(i.A,{variant:"outline-secondary",className:"quantity-btn",onClick:()=>t(a.id,a.quantity+1),children:"+"})]})]}),(0,o.jsx)(n.A,{xs:3,className:"text-md-right",children:(0,o.jsxs)(i.A,{variant:"danger",className:"remove-btn",onClick:()=>(t=>{const a=e.filter((e=>e.id!==t));s(a),localStorage.setItem("cartItems",JSON.stringify(a))})(a.id),children:[(0,o.jsx)(r.RCe,{})," Remove"]})})]})},a.id))):(0,o.jsx)("p",{children:"Your cart is empty."})})]}),(0,o.jsx)(n.A,{md:4,children:e.length>0&&(0,o.jsxs)("div",{className:"cart-summary p-4 bg-light rounded",children:[(0,o.jsx)("h5",{children:"Order Summary"}),(0,o.jsxs)("p",{className:"text-muted",children:["Subtotal (",e.length," items): \u20b9",e.reduce(((e,s)=>e+(s.isDiscount?.7*s.price:s.price)*s.quantity),0).toFixed(2)]}),(0,o.jsx)(i.A,{as:l.N_,to:"/checkout",variant:"success",className:"btn-block",children:"Proceed to Checkout"})]})})]}),e.length>0&&(0,o.jsx)(i.A,{className:"back-to-top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},variant:"secondary",style:{position:"fixed",bottom:"20px",right:"20px"},children:(0,o.jsx)(r.uCC,{size:20})})]})}},1072:(e,s,t)=>{t.d(s,{A:()=>o});var a=t(8139),c=t.n(a),n=t(5043),i=t(7852),r=t(579);const l=n.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,as:n="div",...l}=e;const o=(0,i.oU)(t,"row"),d=(0,i.gy)(),m=(0,i.Jm)(),h=`${o}-cols`,x=[];return d.forEach((e=>{const s=l[e];let t;delete l[e],null!=s&&"object"===typeof s?({cols:t}=s):t=s;const a=e!==m?`-${e}`:"";null!=t&&x.push(`${h}${a}-${t}`)})),(0,r.jsx)(n,{ref:s,...l,className:c()(a,o,...x)})}));l.displayName="Row";const o=l}}]);
//# sourceMappingURL=492.20c4389a.chunk.js.map