"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[689],{219:function(e,t,i){i.d(t,{O:function(){return l}});var n="MovieList_movie_box__Ltezo",c="MovieList_movies_list__+ibTm",s="MovieList_movies_item__xrSVS",r="MovieList_movie_title__ZUwbv",a=i(87),o=i(184);function l(e){var t=e.movies;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{className:c,children:t.map((function(e){return(0,o.jsx)(a.rU,{to:"/movies/".concat(e.id),className:n,children:(0,o.jsx)("li",{className:s,children:(0,o.jsxs)("div",{className:n,children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title,title:e.title,width:"260"}),(0,o.jsx)("p",{className:r,children:e.title})]})},e.id)},e.id)}))})})}},123:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var n=i(439),c={},s=i(791),r={cast:"SearchBar_cast__DKViS"},a=i(184);function o(e){var t=e.handleSearch,i=(0,s.useState)(!1),c=(0,n.Z)(i,2),o=c[0],l=c[1];return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:r.search_box,children:(0,a.jsx)("input",{type:"text",className:r.search_input,placeholder:o?"":"Search for a movie...",onFocus:function(){l(!0)},onBlur:function(){l(!1)},onKeyUp:function(e){"Enter"===e.code&&t(e.target.value)}})})})}var l=i(219);function u(){var e=(0,s.useState)(""),t=(0,n.Z)(e,2),i=t[0],r=t[1],u=(0,s.useState)([]),h=(0,n.Z)(u,2),m=h[0],d=h[1];return(0,s.useEffect)((function(){fetch("https://api.themoviedb.org/3/search/movie?query=".concat(i,"&api_key=ce0c06de642193a801e7421c7d30b9dd")).then((function(e){return e.json()})).then((function(e){d(e.results)})).catch((function(e){return console.error(e)}))}),[i]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:c.movie_container,children:[(0,a.jsx)("h1",{className:c.movie_title,children:"Search movies"}),0===m.length?(0,a.jsx)(o,{handleSearch:function(e){r(e)}}):"",(0,a.jsx)(l.O,{movies:m})]})})}}}]);
//# sourceMappingURL=689.265cf246.chunk.js.map