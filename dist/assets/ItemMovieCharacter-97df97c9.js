import{s as n,j as e,L as l,A as t,y as o,z as d,T as a,C as m,g as p,P as x}from"./index-ffe4187c.js";import{u as j}from"./useApiGetByUrl-24e9f3c0.js";/* empty css                  */const h=({url:i})=>{const{data:s,loading:r,error:c}=j(i);return c&&n("error","Error","The API call attempt failed."),e.jsx(e.Fragment,{children:r?e.jsx(l,{isLoading:r}):e.jsxs(t,{className:"acordion",children:[e.jsx(o,{expandIcon:e.jsx(d,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:e.jsx(a,{className:"title",children:s.title})}),e.jsxs(m,{children:[e.jsx("div",{className:"container-item-movie",children:e.jsxs("div",{className:"container-img-description",children:[e.jsx("img",{className:"img-card",src:p("films",s.title),alt:s.name}),e.jsxs(e.Fragment,{children:["a",e.jsxs(a,{className:"description",children:[e.jsx("span",{children:"Release Date"})," ",s.release_date]}),e.jsxs(a,{className:"description",children:[e.jsx("span",{children:"Director"})," ",s.director]}),e.jsxs(a,{className:"description",children:[e.jsx("span",{children:"Producers"})," ",s.producer]})]})]})}),e.jsx("div",{className:"container-opening",children:e.jsx(a,{className:"description",children:s.opening_crawl})})]})]})})};h.propTypes={url:x.string.isRequired};export{h as default};
