(self.webpackChunkclient=self.webpackChunkclient||[]).push([[898],{7898:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return $}});var r=n(6015),o=n(4942),i=n(3366),s=n(7462),a=n(2791),c=n(1184),l=n(5682),u=n(8519),f=n(2466),d=n(277),h=n(5513),p=n(184),x=["component","direction","spacing","divider","children"];function g(t,e){var n=a.Children.toArray(t).filter(Boolean);return n.reduce((function(t,r,o){return t.push(r),o<n.length-1&&t.push(a.cloneElement(e,{key:"separator-".concat(o)})),t}),[])}var m,y=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(t,e){return[e.root]}})((function(t){var e=t.ownerState,n=t.theme,r=(0,s.Z)({display:"flex",flexDirection:"column"},(0,c.k9)({theme:n},(0,c.P$)({values:e.direction,breakpoints:n.breakpoints.values}),(function(t){return{flexDirection:t}})));if(e.spacing){var i=(0,l.hB)(n),a=Object.keys(n.breakpoints.values).reduce((function(t,n){return("object"===typeof e.spacing&&null!=e.spacing[n]||"object"===typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t}),{}),u=(0,c.P$)({values:e.direction,base:a}),d=(0,c.P$)({values:e.spacing,base:a});"object"===typeof u&&Object.keys(u).forEach((function(t,e,n){if(!u[t]){var r=e>0?u[n[e-1]]:"column";u[t]=r}}));r=(0,f.Z)(r,(0,c.k9)({theme:n},d,(function(t,n){return{"& > :not(style) + :not(style)":(0,o.Z)({margin:0},"margin".concat((r=n?u[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,l.NA)(i,t))};var r})))}return r=(0,c.dt)(n.breakpoints,r)})),v=a.forwardRef((function(t,e){var n=(0,h.Z)({props:t,name:"MuiStack"}),r=(0,u.Z)(n),o=r.component,a=void 0===o?"div":o,c=r.direction,l=void 0===c?"column":c,f=r.spacing,d=void 0===f?0:f,m=r.divider,v=r.children,O=(0,i.Z)(r,x),Z={direction:l,spacing:d};return(0,p.jsx)(y,(0,s.Z)({as:a,ownerState:Z,ref:e},O,{children:m?g(v,m):v}))})),O=v,Z=n(4565),j=n(2426),I=n.n(j),S=n(9434),R=n(199),b=n.n(R),E=n(7689),C=n(9895),T=n(4165),w=n(5861),L=n(885),A=n(2982),F=n(6650),N=n(3978),B=n(9417),D=n(7205),k=n(1830),U=n.n(k),P={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},W=new Uint8Array(16);function z(){if(!m&&!(m="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(W)}for(var G=[],H=0;H<256;++H)G.push((H+256).toString(16).slice(1));function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(G[t[e+0]]+G[t[e+1]]+G[t[e+2]]+G[t[e+3]]+"-"+G[t[e+4]]+G[t[e+5]]+"-"+G[t[e+6]]+G[t[e+7]]+"-"+G[t[e+8]]+G[t[e+9]]+"-"+G[t[e+10]]+G[t[e+11]]+G[t[e+12]]+G[t[e+13]]+G[t[e+14]]+G[t[e+15]]).toLowerCase()}var Y=function(t,e,n){if(P.randomUUID&&!e&&!t)return P.randomUUID();var r=(t=t||{}).random||(t.rng||z)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return M(r)},K=function(t){var e=t.post,n=(0,A.Z)(null===e||void 0===e?void 0:e.comments).reverse(),o=(0,a.useState)(n),i=(0,L.Z)(o,2),s=i[0],c=i[1],l=(0,a.useState)([]),u=(0,L.Z)(l,2),f=u[0],d=u[1],h=JSON.parse(localStorage.getItem("profile")),x=(0,S.I0)(),g=(0,a.useRef)(),m=function(){var t=(0,w.Z)((0,T.Z)().mark((function t(){var n,r,o,i;return(0,T.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===h||void 0===h||null===(n=h.result)||void 0===n||!n.name){t.next=12;break}return r=(new Date).toLocaleDateString(),o="".concat(h.result.name,": ").concat(f," :").concat(r),t.next=5,x((0,C.fX)(o,e._id));case 5:i=t.sent,d(""),c(i.reverse()),g.current.scrollIntoView({behavior:"smooth"}),U().fire("Thank you for your comment"),t.next=13;break;case 12:U().fire("You need to login first");case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,p.jsx)(r.Z,{sx:{mt:"40px",mb:"30px"},children:(0,p.jsxs)(F.Z,{sx:{p:"12px"},children:[(0,p.jsx)(Z.Z,{variant:"h6",sx:{color:"#46364a",fontWeight:"bold"},children:"Comment Section"}),(0,p.jsx)(r.Z,{sx:{mb:"40px"},children:s.map((function(t){return(0,p.jsxs)(r.Z,{children:[(0,p.jsx)("div",{ref:g}),(0,p.jsxs)(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:"10px"},children:[(0,p.jsxs)(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-start"},children:[(0,p.jsx)(N.Z,{sx:{backgroundColor:"#F4511E"},alt:e.name,src:e.picture,children:(0,p.jsx)(Z.Z,{variant:"body1",children:t.split(":")[0].charAt(0)})}),(0,p.jsx)(Z.Z,{variant:"body1",sx:{ml:"9px",fontWeight:"bold",color:"#6b7688"},children:t.split(":")[0]})]},Y()),(0,p.jsx)(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,p.jsx)(Z.Z,{align:"right",children:t.split(":")[2]})})]},Y()),(0,p.jsx)(r.Z,{sx:{pl:"40px",color:"#6b7688"},children:(0,p.jsxs)(Z.Z,{gutterBottom:!0,variant:"body1",children:[t.split(":")[1]," "]})})]},Y())}))}),(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(Z.Z,{sx:{mb:"20px"},children:"Write a comment "}),(0,p.jsx)(B.Z,{fullWidth:!0,rows:4,label:"comment",multiline:!0,value:f,onChange:function(t){return d(t.target.value)}}),(0,p.jsx)(D.Z,{sx:{mt:"20px"},variant:"contained",onClick:m,children:"comment"})]})]})})},_=n(9952),V=n(3552),$=function(){var t,e=(0,S.v9)((function(t){return t.posts})),n=e.post,o=e.posts,i=e.isLoading,s=(0,E.s0)(),c=(0,S.I0)(),l=(0,E.UO)().id;if((0,a.useEffect)((function(){c((0,C.xl)(l))}),[c,l]),(0,a.useEffect)((function(){n&&c((0,C.oP)({search:"none",tags:null===n||void 0===n?void 0:n.tags.join(",")}))}),[c,n]),!n)return null;if(i)return(0,p.jsx)(r.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,p.jsx)(r.Z,{component:"img",src:V,sx:{width:"90%"}})});var u=o.filter((function(t){return t._id!==(null===n||void 0===n?void 0:n._id)}));return(0,p.jsxs)(r.Z,{sx:{mt:"40px",maxWidth:"lg",display:"flex",flexDirection:{md:"row",xs:"column"}},children:[(0,p.jsx)(r.Z,{sx:{display:"flex",flexBasis:"60%"},children:(0,p.jsxs)(O,{sx:{maxWidth:"md"},children:[(0,p.jsxs)(r.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[(0,p.jsx)(_.Z,{sx:{color:"#505BF7",cursor:"pointer",width:{xs:"46px"},height:{xs:"46px"},mr:"8px",ml:"2px"}}),(0,p.jsx)(Z.Z,{sx:{fontSize:{md:"28px",sm:"28px",xs:"18px"},fontWeight:"600",color:" #0A0B0D",mr:"20px"},children:null===n||void 0===n||null===(t=n.name)||void 0===t?void 0:t.toUpperCase()}),(0,p.jsxs)(Z.Z,{sx:{color:"#888585",fontSize:{sm:"14px",xs:"11px"},fontWeight:"600"},children:["- ",I()(n.createdAt).fromNow()]})]}),(0,p.jsxs)(r.Z,{sx:{display:"flex",mt:"30px",flexWrap:"wrap",alignItems:"center",ml:"10px"},children:[(0,p.jsx)(Z.Z,{sx:{color:" #0A0B0D",fontSize:"14px",mr:"14px",fontWeight:"600"},children:"Tags :"}),n.tags.map((function(t,e){return(0,p.jsx)(r.Z,{sx:{background:"#EDF2F8",borderRadius:"20px",mr:"12px"},children:(0,p.jsxs)(Z.Z,{sx:{fontSize:{lg:"14px",md:"14px",sm:"14px",xs:"14px"},color:" #4E596C",ml:"8px",mr:"8px",fontWeight:"600",p:"3px"},children:[(0,p.jsx)("span",{})," #",t]})},e)}))]}),(0,p.jsxs)(r.Z,{sx:{display:"flex",mt:"30px",flexWrap:"wrap",alignItems:"center",ml:"10px"},children:[(0,p.jsx)(Z.Z,{sx:{color:" #0A0B0D",fontSize:"14px",mr:"14px",fontWeight:"600"},children:"Catageory :"}),(0,p.jsx)(r.Z,{sx:{background:"#FED75B",borderRadius:"14px",mr:"12px"},children:(0,p.jsx)(Z.Z,{sx:{fontSize:"14px",color:" #262A31",ml:"8px",mr:"8px",fontWeight:"600",p:"3px"},children:n.catageory})})]}),(0,p.jsx)(Z.Z,{sx:{mt:"30px",color:"#6B75FF",fontSize:"30px",fontWeight:"600",mb:"22px"},children:null===n||void 0===n?void 0:n.title}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(r.Z,{component:"img",src:null===n||void 0===n?void 0:n.selectedFile,sx:{objectFit:"contain",maxHeight:"400px"},loading:"lazy"})}),(0,p.jsx)(r.Z,{sx:{overflowX:"scroll"},dangerouslySetInnerHTML:{__html:b()(JSON.parse(n.message))}}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(K,{post:n})})]})}),(0,p.jsxs)(r.Z,{sx:{display:"flex",flexBasis:"40%",flexDirection:"column",ml:"5px"},children:[(0,p.jsx)(r.Z,{children:u.length&&(0,p.jsx)(r.Z,{sx:{display:"flex"},children:(0,p.jsx)(Z.Z,{sx:{color:"#0A0B0D",fontSize:"24px",fontWeight:"600",mb:"24px"},children:"You might also like"})})}),(0,p.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",pl:"16px"},children:u.map((function(t,e){return(0,p.jsxs)(r.Z,{onClick:function(){return s("/posts/".concat(t._id))},sx:{display:"flex",alignItems:"center",mt:"20px",cursor:"pointer"},children:[(0,p.jsxs)(r.Z,{sx:{flexBasis:"70%"},children:[(0,p.jsx)(Z.Z,{sx:{fontSize:"14px",fontWeight:"600"},children:t.title}),(0,p.jsxs)(Z.Z,{sx:{fontSize:"12px"},children:[t.name," in ",t.catageory]})]}),(0,p.jsx)(r.Z,{sx:{flexBasis:"30%"},children:(0,p.jsx)(r.Z,{component:"img",loading:"lazy",src:t.selectedFile,sx:{width:"100%",maxHeight:"140px",objectFit:"fill"}})})]},e)}))})]})]})}},9952:function(t,e,n){"use strict";var r=n(4836);e.Z=void 0;var o=r(n(5649)),i=n(184),s=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");e.Z=s},199:function(t){t.exports=function(){"use strict";function t(t,e){if(t)for(var n in t)({}).hasOwnProperty.call(t,n)&&e(n,t[n])}function e(t){return void 0===t||null===t||0===t.length||0===t.trim().length}var n={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function r(t){return t&&n[t]}function o(e){var n="";return t(e,(function(t,e){e&&(n+="".concat(t,":").concat(e,";"))})),n}function i(t,e){var n=[];if(e)for(var r=0,o=0,i=t,s=e.trigger||"#",a=e.separator||" ";i.length>0&&o>=0;)if(i[0]===s?(o=0,r=0,i=i.substr(s.length)):(o=i.indexOf(a+s))>=0&&(i=i.substr(o+(a+s).length),r+=o+a.length),o>=0){var c=i.indexOf(a)>=0?i.indexOf(a):i.length,l=i.substr(0,c);l&&l.length>0&&n.push({offset:r,length:l.length+s.length,type:"HASHTAG"}),r+=s.length}return n}function s(t,e){var n=[],r=0,o=t.entityRanges.map((function(t){return{offset:t.offset,length:t.length,key:t.key,type:"ENTITY"}}));return(o=(o=o.concat(i(t.text,e))).sort((function(t,e){return t.offset-e.offset}))).forEach((function(t){t.offset>r&&n.push({start:r,end:t.offset}),n.push({start:t.offset,end:t.offset+t.length,entityKey:t.key,type:t.type}),r=t.offset+t.length})),r<t.text.length&&n.push({start:r,end:t.text.length}),n}function a(t){return!(!(t.entityRanges.length>0)||!e(t.text)&&"atomic"!==t.type)}function c(t){var e=t.text,n=t.inlineStyleRanges,r={BOLD:new Array(e.length),ITALIC:new Array(e.length),UNDERLINE:new Array(e.length),STRIKETHROUGH:new Array(e.length),CODE:new Array(e.length),SUPERSCRIPT:new Array(e.length),SUBSCRIPT:new Array(e.length),COLOR:new Array(e.length),BGCOLOR:new Array(e.length),FONTSIZE:new Array(e.length),FONTFAMILY:new Array(e.length),length:e.length};return n&&n.length>0&&n.forEach((function(t){for(var e=t.offset,n=e+t.length,o=e;o<n;o+=1)0===t.style.indexOf("color-")?r.COLOR[o]=t.style.substring(6):0===t.style.indexOf("bgcolor-")?r.BGCOLOR[o]=t.style.substring(8):0===t.style.indexOf("fontsize-")?r.FONTSIZE[o]=t.style.substring(9):0===t.style.indexOf("fontfamily-")?r.FONTFAMILY[o]=t.style.substring(11):r[t.style]&&(r[t.style][o]=!0)})),r}function l(t,e){var n={};return t.COLOR[e]&&(n.COLOR=t.COLOR[e]),t.BGCOLOR[e]&&(n.BGCOLOR=t.BGCOLOR[e]),t.FONTSIZE[e]&&(n.FONTSIZE=t.FONTSIZE[e]),t.FONTFAMILY[e]&&(n.FONTFAMILY=t.FONTFAMILY[e]),t.UNDERLINE[e]&&(n.UNDERLINE=!0),t.ITALIC[e]&&(n.ITALIC=!0),t.BOLD[e]&&(n.BOLD=!0),t.STRIKETHROUGH[e]&&(n.STRIKETHROUGH=!0),t.CODE[e]&&(n.CODE=!0),t.SUBSCRIPT[e]&&(n.SUBSCRIPT=!0),t.SUPERSCRIPT[e]&&(n.SUPERSCRIPT=!0),n}function u(t,e,n){var r=!0;return n>0&&n<t.length?e.forEach((function(e){r=r&&t[e][n]===t[e][n-1]})):r=!1,r}function f(t,e){return"BOLD"===t?"<strong>".concat(e,"</strong>"):"ITALIC"===t?"<em>".concat(e,"</em>"):"UNDERLINE"===t?"<ins>".concat(e,"</ins>"):"STRIKETHROUGH"===t?"<del>".concat(e,"</del>"):"CODE"===t?"<code>".concat(e,"</code>"):"SUPERSCRIPT"===t?"<sup>".concat(e,"</sup>"):"SUBSCRIPT"===t?"<sub>".concat(e,"</sub>"):e}function d(t){return t&&t.length>0?t.map((function(t){switch(t){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return t}})).join(""):""}function h(t,e){if(t&&(t.COLOR||t.BGCOLOR||t.FONTSIZE||t.FONTFAMILY)){var n='style="';return t.COLOR&&(n+="color: ".concat(t.COLOR,";")),t.BGCOLOR&&(n+="background-color: ".concat(t.BGCOLOR,";")),t.FONTSIZE&&(n+="font-size: ".concat(t.FONTSIZE).concat(/^\d+$/.test(t.FONTSIZE)?"px":"",";")),t.FONTFAMILY&&(n+="font-family: ".concat(t.FONTFAMILY,";")),"<span ".concat(n+='"',">").concat(e,"</span>")}return e}function p(t,e,n,r){var o=t[e];if("function"===typeof r){var i=r(o,n);if(i)return i}if("MENTION"===o.type)return'<a href="'.concat(o.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(o.data.value,'">').concat(n,"</a>");if("LINK"===o.type){var s=o.data.targetOption||"_self";return'<a href="'.concat(o.data.url,'" target="').concat(s,'">').concat(n,"</a>")}if("IMAGE"===o.type){var a=o.data.alignment;return a&&a.length?'<div style="text-align:'.concat(a,';"><img src="').concat(o.data.src,'" alt="').concat(o.data.alt,'" style="height: ').concat(o.data.height,";width: ").concat(o.data.width,'"/></div>'):'<img src="'.concat(o.data.src,'" alt="').concat(o.data.alt,'" style="height: ').concat(o.data.height,";width: ").concat(o.data.width,'"/>')}return"EMBEDDED_LINK"===o.type?'<iframe width="'.concat(o.data.width,'" height="').concat(o.data.height,'" src="').concat(o.data.src,'" frameBorder="0"></iframe>'):n}function x(t,e,n,r){var o=[],i=Array.from(t.text);if(i.length>0)for(var s,a=c(t),f=n;f<r;f+=1)f!==n&&u(a,e,f)?(s.text.push(i[f]),s.end=f+1):(s={styles:l(a,f),text:[i[f]],start:f,end:f+1},o.push(s));return o}function g(t){if(t){for(var e=t,n=0;n<e.length&&" "===t[n];n+=1)e=e.replace(" ","&nbsp;");return e}return t}function m(t){if(t){for(var e=t,n=e.length-1;n>=0&&" "===e[n];n-=1)e="".concat(e.substring(0,n),"&nbsp;").concat(e.substring(n+1));return e}return t}function y(e){var n=e.styles,r=d(e.text);return t(n,(function(t,e){r=f(t,r)})),r}function v(t,e){var n=x(t,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],e.start,e.end),r="";return n.forEach((function(t){r+=y(t)})),r=h(e.styles,r)}function O(t,e,n,r){var o=[];x(t,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],n.start,n.end).forEach((function(e){o.push(v(t,e))}));var i=o.join("");return"ENTITY"===n.type?void 0!==n.entityKey&&null!==n.entityKey&&(i=p(e,n.entityKey,i,r)):"HASHTAG"===n.type&&(i='<a href="'.concat(i,'" class="wysiwyg-hashtag">').concat(i,"</a>")),i}function Z(t,e,n,r){var o=[],i=s(t,n);return i.forEach((function(n,s){var a=O(t,e,n,r);0===s&&(a=g(a)),s===i.length-1&&(a=m(a)),o.push(a)})),o.join("")}function j(t,e,n,i,s){var c=[];if(a(t))c.push(p(e,t.entityRanges[0].key,void 0,s));else{var l=r(t.type);if(l){c.push("<".concat(l));var u=o(t.data);u&&c.push(' style="'.concat(u,'"')),i&&c.push(' dir = "auto"'),c.push(">"),c.push(Z(t,e,n,s)),c.push("</".concat(l,">"))}}return c.push("\n"),c.join("")}function I(t){return"unordered-list-item"===t||"ordered-list-item"===t}function S(t,e,n,i,s){var a,c=[],l=[];return t.forEach((function(t){var u=!1;if(a?a.type!==t.type?(c.push("</".concat(r(a.type),">\n")),c.push("<".concat(r(t.type),">\n"))):a.depth===t.depth?l&&l.length>0&&(c.push(S(l,e,n,i,s)),l=[]):(u=!0,l.push(t)):c.push("<".concat(r(t.type),">\n")),!u){c.push("<li");var f=o(t.data);f&&c.push(' style="'.concat(f,'"')),i&&c.push(' dir = "auto"'),c.push(">"),c.push(Z(t,e,n,s)),c.push("</li>\n"),a=t}})),l&&l.length>0&&c.push(S(l,e,n,i,s)),c.push("</".concat(r(a.type),">\n")),c.join("")}function R(t,e,n,r){var o=[];if(t){var i=t.blocks,s=t.entityMap;if(i&&i.length>0){var a=[];if(i.forEach((function(t){if(I(t.type))a.push(t);else{if(a.length>0){var i=S(a,s,e,r);o.push(i),a=[]}var c=j(t,s,e,n,r);o.push(c)}})),a.length>0){var c=S(a,s,e,n,r);o.push(c),a=[]}}}return o.join("")}return R}()}}]);
//# sourceMappingURL=898.a8112c37.chunk.js.map