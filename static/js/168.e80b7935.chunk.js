"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(152),c={},s=n(791),i=n(689),a=n(184);function o(){var e=(0,s.useState)([]),t=(0,r.Z)(e,2),n=t[0],o=t[1],u=(0,i.UO)().movieId;return(0,s.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(u,"/reviews?api_key=ce0c06de642193a801e7421c7d30b9dd")).then((function(e){return e.json()})).then((function(e){return o(e.results)})).catch((function(e){return console.error(e)}))}),[u]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{className:c.review_list,children:n.map((function(e){return(0,a.jsxs)("li",{className:c.review_item,children:[(0,a.jsxs)("p",{className:c.review_author,children:[e.author,":"]}),(0,a.jsx)("p",{className:c.review_content,children:e.content})]},e.id)}))})})}}}]);
//# sourceMappingURL=168.e80b7935.chunk.js.map