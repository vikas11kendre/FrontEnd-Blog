"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[733],{6733:function(n,e,i){i.r(e);var t=i(2791),o=i(7689),l=i(9434),r=i(4428),s=i(9895),x=i(3552),c=i(6015),d=i(5953),a=i(4565),p=i(184);e.default=function(){var n=(0,o.UO)().name.replace("%20"," ");console.log(n);var e=(0,l.I0)(),i=(0,l.v9)((function(n){return n.posts})),u=i.posts,f=i.isLoading;return(0,t.useEffect)((function(){e((0,s.Nh)(n))}),[]),u.length||f?f?(0,p.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,p.jsx)(c.Z,{component:"img",src:x,loading:"lazy",sx:{width:"90%"}})}):(0,p.jsxs)(d.ZP,{container:!0,children:[(0,p.jsx)(d.ZP,{item:!0,xs:12,children:(0,p.jsx)(c.Z,{children:(0,p.jsx)(a.Z,{variant:"h5",sx:{color:"#6b7688",fontSize:"24px",fontWeight:"600",mt:"24px"},children:"Posts Created by ".concat(n)})})}),u.map((function(n,e){return(0,p.jsx)(d.ZP,{item:!0,xs:12,sm:6,lg:4,children:(0,p.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,p.jsx)(r.Z,{post:n})})},e)}))]}):"No posts found"}},4428:function(n,e,i){i(2791);var t=i(4565),o=i(6015),l=i(3978),r=i(1830),s=i.n(r),x=i(7237),c=i(7488),d=i(2271),a=i(1286),p=i(2426),u=i.n(p),f=i(9434),h=i(9895),m=i(7689),v=i(184);e.Z=function(n){var e,i,r,p,g=n.post,j=JSON.parse(localStorage.getItem("profile")),Z=(0,m.s0)(),C=(null===j||void 0===j?void 0:j.result.sub)||(null===j||void 0===j||null===(e=j.result)||void 0===e?void 0:e._id),y=(0,f.I0)(),z=function(){return Z("/posts/".concat(g._id))},k=function(){var n,e,i;return(null===g||void 0===g||null===(n=g.likes)||void 0===n?void 0:n.length)>0?null!==g&&void 0!==g&&null!==(e=g.likes)&&void 0!==e&&e.find((function(n){return n===C}))?(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",color:"#4168FA",cursor:"pointer"},children:[(0,v.jsx)(x.Z,{fontSize:"small"}),"\xa0",null===g||void 0===g||null===(i=g.likes)||void 0===i?void 0:i.length]})}):(0,v.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",color:"#4168FA",cursor:"pointer"},children:[(0,v.jsx)(c.Z,{fontSize:"small"}),g.likes.length]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(c.Z,{sx:{color:"#4168FA",cursor:"pointer"},fontSize:"small"})})};return(0,v.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",maxWidth:"326px",mb:"40px",mt:"20px"},children:[(0,v.jsx)(o.Z,{component:"img",loading:"lazy",onClick:z,src:null===g||void 0===g?void 0:g.selectedFile,sx:{"&:hover":{transform:"scale(1.1)"},cursor:"pointer",height:"210px",width:{md:"320px",sm:"300px",lg:"320px",xs:"320px"},objectFit:"contain",borderRadius:"10px",border:"1px solid #EDF2F8"}}),(0,v.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",mb:"40px",mt:{sm:"20px",xs:"8px"}},children:[(0,v.jsx)(o.Z,{onClick:function(){return Z("/catageory/".concat(null===g||void 0===g?void 0:g.catageory))},sx:{display:"flex",justifyContent:"center",background:"#FFE9A2",maxWidth:"90px",p:"2px",cursor:"pointer"},children:(0,v.jsx)(t.Z,{sx:{fontSize:"12px",fontWeight:"700",color:" #0A0B0D"},children:null===g||void 0===g?void 0:g.catageory.toUpperCase()})}),(0,v.jsx)(o.Z,{sx:{maxHeight:"62px"},children:(0,v.jsx)(t.Z,{sx:{color:" #0A0B0D",mt:"10px",fontSize:"16px",fontWeight:"700"},children:(null===g||void 0===g||null===(i=g.title)||void 0===i?void 0:i.length)>90?null===g||void 0===g?void 0:g.substring(0,90).concat("..."):null===g||void 0===g?void 0:g.title})}),(0,v.jsx)(o.Z,{sx:{mt:"10px"},children:(0,v.jsx)(t.Z,{sx:{color:" #0A0B0D",fontSize:{lg:"14px",md:"14px",sm:"14px",xs:"14px"}},children:(null===(r=g.subtitle)||void 0===r?void 0:r.length)>90?null===(p=g.subtitle)||void 0===p?void 0:p.substring(0,90).concat("..."):null===g||void 0===g?void 0:g.subtitle})}),(0,v.jsx)(o.Z,{sx:{display:"flex",mt:"10px",flexWrap:"wrap"},children:g.tags.map((function(n){return(0,v.jsxs)(t.Z,{sx:{fontSize:{lg:"12px",md:"12px",sm:"12px",xs:"12px"},color:" #0A0B0D",mr:"8px",fontWeight:"400"},children:["#",n]},n)}))}),(0,v.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"row",mt:"10px"},children:[(0,v.jsxs)(o.Z,{sx:{display:"inline-flex",alignItems:"center",mr:"10px",flexDirection:"row",background:"#EDF2F8",borderRadius:"10px",p:"4px",maxWidth:"250px"},children:[(0,v.jsx)(l.Z,{onClick:function(){return Z("/creators/".concat(g.name))},alt:g.name,sx:{backgroundColor:"#4168FA",cursor:"pointer",width:{xs:"18px"},height:{xs:"18px"},mr:"8px",ml:"2px"},children:(0,v.jsx)(t.Z,{sx:{color:"white",fontSize:"11px",fontWeight:"600"},children:g.name.charAt(0).toUpperCase()})}),(0,v.jsx)(t.Z,{onClick:function(){return Z("/creators/".concat(g.name))},sx:{fontSize:{xs:"11px"},fontWeight:"600",color:" #0A0B0D",pr:"5px",cursor:"pointer"},children:g.name.toUpperCase()})]}),(0,v.jsx)(o.Z,{onClick:C?function(){y((0,h.n9)(g._id)),s().fire(" Thank  you for your love and support ,it will take few seconds to update")}:function(){return s().fire("You need to login first")},children:(0,v.jsx)(k,{})}),(C===(null===g||void 0===g?void 0:g.creator)||"639731de321f262c6969a414"===C)&&(0,v.jsxs)(o.Z,{sx:{flexDirection:"row",display:"flex",color:"#37588D",height:"18px",width:"18px",alignItems:"center",ml:"20px"},children:[(0,v.jsx)(a.Z,{onClick:function(){y((0,h.qh)(g._id)),y((0,h.qq)(!1))},sx:{pr:"5px",cursor:"pointer"}}),(0,v.jsx)(d.Z,{sx:{cursor:"pointer"},onClick:function(){y((0,h.fR)(g._id))}})]})]}),(0,v.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",mt:"16px"},children:[(0,v.jsx)(t.Z,{onClick:z,sx:{color:"#4168FA",fontSize:"13px",fontWeight:"600",cursor:"pointer"},children:"Read More"}),(0,v.jsxs)(t.Z,{sx:{color:" #0A0B0D",fontSize:"11px",fontWeight:"600",ml:"10px"},children:["- ",u()(g.createdAt).fromNow()]})]})]})]})}},2271:function(n,e,i){var t=i(4836);e.Z=void 0;var o=t(i(5649)),l=i(184),r=(0,o.default)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");e.Z=r},1286:function(n,e,i){var t=i(4836);e.Z=void 0;var o=t(i(5649)),l=i(184),r=(0,o.default)((0,l.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.Z=r},7237:function(n,e,i){var t=i(4836);e.Z=void 0;var o=t(i(5649)),l=i(184),r=(0,o.default)((0,l.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");e.Z=r},7488:function(n,e,i){var t=i(4836);e.Z=void 0;var o=t(i(5649)),l=i(184),r=(0,o.default)((0,l.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");e.Z=r}}]);
//# sourceMappingURL=733.c1f40d32.chunk.js.map