"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[787],{219:function(e,t,i){i.d(t,{O:function(){return u}});var n="MovieList_movie_box__Ltezo",s="MovieList_movies_list__+ibTm",c="MovieList_movies_item__xrSVS",r="MovieList_movie_title__ZUwbv",o=i(87),a=i(184);function u(e){var t=e.movies;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{className:s,children:t.map((function(e){return(0,a.jsx)(o.rU,{to:"/movies/".concat(e.id),className:n,children:(0,a.jsx)("li",{className:c,children:(0,a.jsxs)("div",{className:n,children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title,title:e.title,width:"260"}),(0,a.jsx)("p",{className:r,children:e.title})]})},e.id)},e.id)}))})})}},787:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var n=i(152),s={},c=i(791),r=i(184),o=function(e){var t=e.onSubmit,i=(0,c.useState)(""),s=(0,n.Z)(i,2),o=s[0],a=s[1];return(0,r.jsx)("header",{children:(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o&&(t(o),a(""))},children:[(0,r.jsx)("button",{type:"submit",children:(0,r.jsx)("span",{children:"Search"})}),(0,r.jsx)("input",{type:"text",autocomplete:"off",autofocus:!0,value:o,onChange:function(e){a(e.target.value)}})]})})},a=i(219);function u(){var e=(0,c.useState)(""),t=(0,n.Z)(e,2),i=t[0],u=t[1],l=(0,c.useState)([]),h=(0,n.Z)(l,2),m=h[0],d=h[1];return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/search/movie?query=".concat(i,"&api_key=ce0c06de642193a801e7421c7d30b9dd")).then((function(e){return e.json()})).then((function(e){d(e.results)})).catch((function(e){return console.error(e)}))}),[i]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:s.movie_container,children:[(0,r.jsx)("h1",{className:s.movie_title,children:"Search movies"}),0===m.length?(0,r.jsx)(o,{handleSearch:function(e){u(e)}}):"",(0,r.jsx)(a.O,{movies:m})]})})}}}]);
//# sourceMappingURL=787.1182a2ef.chunk.js.map