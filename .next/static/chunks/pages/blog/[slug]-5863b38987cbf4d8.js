(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{49937:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(53010)}])},81353:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var r=n(10990),i=n(25317);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}var l=function(e,t,n){return r.ZP.fromTo(e,s({opacity:0},t),s({opacity:1},n,{stagger:.2,ease:i.Aq.easeOut}))}},25542:function(e,t,n){"use strict";var r=n(85893),i=(n(67294),n(82010));t.Z=function(e){var t=e.children,n=e.type,a=e.onClick,s=e.classes,l=(0,i.F)().theme;return"primary"===n?(0,r.jsx)("button",{onClick:a,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ".concat("dark"===l?"bg-white text-black":"bg-black text-white","  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100"),children:t}):(0,r.jsx)("button",{onClick:a,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ".concat("dark"===l?"hover:bg-slate-600 text-white":"hover:bg-slate-100"," hover:scale-105 active:scale-100  tablet:first:ml-0 ").concat(s),children:t})}},90003:function(e,t,n){"use strict";var r=n(85893),i=(n(67294),n(96420)),a=n(41664),s=n.n(a);t.Z=function(e){e.dark;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"mt-5 laptop:mt-40 p-2 laptop:p-0",children:[(0,r.jsx)("h1",{className:"text-2xl text-bold",children:"Contact."}),(0,r.jsx)("div",{className:"mt-5",children:(0,r.jsx)(i.Z,{})})]}),(0,r.jsxs)("h1",{className:"text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0",children:["Made With \u2764 Avi by"," ",(0,r.jsx)(s(),{href:"http://www.chetanverma.com",children:(0,r.jsx)("a",{className:"underline underline-offset-1",children:"Chetan Verma"})})]})]})}},42665:function(e,t,n){"use strict";var r=n(85893),i=n(11163),a=n(67294),s=n(25542),l=n(2271),o=n(82010),c=n(69954);t.Z=function(e){var t=e.handleWorkScroll,n=e.handleAboutScroll,u=e.isBlog,d=(0,i.useRouter)(),m=(0,o.F)(),h=m.theme,f=m.setTheme,p=(0,a.useState)(!1),g=p[0],x=p[1];return(0,a.useEffect)((function(){x(!0)}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.J,{className:"block tablet:hidden mt-5",children:function(e){var i=e.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between p-2 laptop:p-0",children:[(0,r.jsxs)("h1",{onClick:function(){return d.push("/")},className:"font-medium cursor-pointer p-2 laptop:p-0",children:[c.name,"."]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(s.Z,{onClick:function(){return f("dark"===h?"light":"dark")},children:(0,r.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})}),(0,r.jsx)(l.J.Button,{children:(0,r.jsx)("img",{className:"h-5",src:"/images/".concat(i?"light"===h?"cancel.svg":"cancel-white.svg":"dark"===h?"menu-white.svg":"menu.svg")})})]})]}),(0,r.jsx)(l.J.Panel,{className:"absolute right-0 z-10 w-11/12 p-4 ".concat("dark"===h?"bg-slate-800":"bg-white"," shadow-md rounded-md"),children:u?(0,r.jsxs)("div",{className:"grid grid-cols-1",children:[(0,r.jsx)(s.Z,{onClick:function(){return d.push("/")},classes:"first:ml-1",children:"Home"}),c.showBlog&&(0,r.jsx)(s.Z,{onClick:function(){return d.push("/blog")},children:"Blog"}),(0,r.jsx)(s.Z,{onClick:function(){return window.open("mailto:gurlgotgame@gmail.com")},children:"Contact"})]}):(0,r.jsxs)("div",{className:"grid grid-cols-1",children:[(0,r.jsx)(s.Z,{onClick:t,children:"Work"}),(0,r.jsx)(s.Z,{onClick:n,children:"About"}),c.showBlog&&(0,r.jsx)(s.Z,{onClick:function(){return d.push("/blog")},children:"Blog"}),(0,r.jsx)(s.Z,{onClick:function(){return window.open("mailto:gurlgotgame@gmail.com")},children:"Contact"})]})})]})}}),(0,r.jsxs)("div",{className:"mt-10 hidden flex-row items-center justify-between sticky ".concat("light"===h&&"bg-white"," dark:text-white top-0 z-10 tablet:flex"),children:[(0,r.jsxs)("h1",{onClick:function(){return d.push("/")},className:"font-medium cursor-pointer mob:p-2 laptop:p-0",children:[c.name,"."]}),u?(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(s.Z,{onClick:function(){return d.push("/")},children:"Home"}),c.showBlog&&(0,r.jsx)(s.Z,{onClick:function(){return d.push("/blog")},children:"Blog"}),(0,r.jsx)(s.Z,{onClick:function(){return window.open("mailto:gurlgotgame@gmail.com")},children:"Contact"}),g&&h&&(0,r.jsx)(s.Z,{onClick:function(){return f("dark"===h?"light":"dark")},children:(0,r.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})})]}):(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(s.Z,{onClick:t,children:"Work"}),(0,r.jsx)(s.Z,{onClick:n,children:"About"}),c.showBlog&&(0,r.jsx)(s.Z,{onClick:function(){return d.push("/blog")},children:"Blog"}),(0,r.jsx)(s.Z,{onClick:function(){return window.open("mailto:gurlgotgame@gmail.com")},children:"Contact"}),g&&h&&(0,r.jsx)(s.Z,{onClick:function(){return f("dark"===h?"light":"dark")},children:(0,r.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})})]})]})]})}},96420:function(e,t,n){"use strict";var r=n(85893),i=(n(67294),n(25542)),a=n(69954);t.Z=function(e){var t=e.className;return(0,r.jsx)("div",{className:"".concat(t," flex flex-wrap mob:flex-nowrap"),children:a.socials.map((function(e,t){return(0,r.jsx)(i.Z,{onClick:function(){return window.open(e.link)},children:e.title},t)}))})}},53010:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return T},default:function(){return B}});var r=n(85893),i=n(67294),a=n(42665),s=n(58439),l=n(77205),o=n(84283);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m={code:function(e){e.node;var t=e.inline,n=e.className,i=e.children,a=d(e,["node","inline","className","children"]),s=/language-(\w+)/.exec(n||"");return!t&&s?(0,r.jsx)(l.Z,u({style:o.cL,language:s[1],PreTag:"div"},a,{children:String(i).replace(/\n$/,"")})):(0,r.jsx)("code",u({className:n},a,{children:i}))}},h=function(e){var t=e.content;return(0,r.jsx)(s.D,{components:m,className:"markdown-class",children:t})},f=n(90003),p=n(9008),g=n.n(p),x=n(20558),b=n(81353),v=n(25542),j=n(34051),w=n.n(j),y=n(9198),k=n.n(y),N=n(93463),S=n(82010);n(95828);function C(e,t,n,r,i,a,s){try{var l=e[a](s),o=l.value}catch(c){return void n(c)}l.done?t(o):Promise.resolve(o).then(r,i)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}var Z=function(e){var t=e.post,n=e.close,a=(e.refresh,(0,S.F)().theme),s=(0,i.useState)("BLOGDETAILS"),l=s[0],o=s[1],c=(0,i.useState)(t.content),u=c[0],d=c[1],m=(0,i.useState)({date:t.date,title:t.title,tagline:t.tagline,preview:t.preview,image:t.image}),h=m[0],f=m[1],p=function(){var e,t=(e=w().mark((function e(){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=5;break;case 3:e.next=6;break;case 5:alert("This thing only works in development mode.");case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){C(a,r,i,s,l,"next",e)}function l(e){C(a,r,i,s,l,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,r.jsx)("div",{className:"fixed z-10 w-screen h-screen overflow-auto top-0 flex flex-col items-center ".concat("dark"===a?"bg-black":"bg-white"),children:(0,r.jsxs)("div",{className:"container my-20",children:[(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsxs)("div",{className:"z-10 sticky top-12",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-4xl",children:h.title}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(v.Z,{onClick:p,type:"primary",children:"Save"}),(0,r.jsx)(v.Z,{onClick:n,children:"Close"})]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(v.Z,{onClick:function(){return o("BLOGDETAILS")},type:"BLOGDETAILS"===l&&"primary",children:"Blog Details"}),(0,r.jsx)(v.Z,{onClick:function(){return o("CONTENT")},type:"CONTENT"===l&&"primary",children:"Content"})]})]})}),"BLOGDETAILS"===l&&(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,r.jsx)("label",{className:"w-full text-sx opacity-50",children:"Date"}),(0,r.jsx)(k(),{selected:new Date(h.date),className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",onChange:function(e){f(E({},h,{date:e.toISOString()}))}})]}),(0,r.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,r.jsx)("label",{className:"w-full text-sx opacity-50",children:"Title"}),(0,r.jsx)("input",{value:h.title,onChange:function(e){return f(E({},h,{title:e.target.value}))},className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,r.jsx)("label",{className:"w-full text-sx opacity-50",children:"Tagline"}),(0,r.jsx)("input",{value:h.tagline,onChange:function(e){return f(E({},h,{tagline:e.target.value}))},className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,r.jsx)("label",{className:"w-full text-sx opacity-50",children:"preview (SEO)"}),(0,r.jsx)("textarea",{value:h.preview,onChange:function(e){return f(E({},h,{preview:e.target.value}))},className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,r.jsx)("label",{className:"w-full text-sx opacity-50",children:"Image"}),(0,r.jsx)("input",{value:h.image,onChange:function(e){return f(E({},h,{image:e.target.value}))},className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]})]}),"CONTENT"===l&&(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("label",{className:"w-full text-sx opacity-50",children:"Content"}),(0,r.jsx)(N.Z,{className:"w-full h-auto mt-5 p-4 border hover:border-blue-400 rounded-xl shadow-xl",value:u,onChange:function(e){return d(e.target.value)}})]})})]})})},P=n(11163),T=!0,B=function(e){var t=e.post,n=(0,i.useState)(!1),s=n[0],l=n[1],o=(0,i.useRef)(),c=(0,i.useRef)(),u=(0,P.useRouter)();return(0,x.LI)((function(){(0,b.E)([o.current,c.current],{y:30},{y:0})}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(g(),{children:[(0,r.jsx)("title",{children:"Blog - "+t.title}),(0,r.jsx)("meta",{name:"description",content:t.preview})]}),(0,r.jsxs)("div",{className:"container mx-auto mt-10",children:[(0,r.jsx)(a.Z,{isBlog:!0}),(0,r.jsxs)("div",{className:"mt-10 flex flex-col",children:[(0,r.jsx)("img",{className:"w-full h-96 rounded-lg shadow-lg object-cover",src:t.image}),(0,r.jsx)("h1",{ref:o,className:"mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold",children:t.title}),(0,r.jsx)("h2",{ref:c,className:"mt-2 text-xl max-w-4xl text-darkgray opacity-50",children:t.tagline})]}),(0,r.jsx)(h,{content:t.content}),(0,r.jsx)(f.Z,{})]}),!1,s&&(0,r.jsx)(Z,{post:t,close:function(){return l(!1)},refresh:function(){return u.reload(window.location.pathname)}})]})}},20558:function(e,t,n){"use strict";n.d(t,{KO:function(){return i},LI:function(){return r}});var r=n(67294).useLayoutEffect;function i(e){if(e){var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}}},69954:function(e){"use strict";e.exports=JSON.parse('{"name":"Hello ","headerTaglineOne":"I\'m Avi \ud83d\udc4b ","headerTaglineTwo":"Designer and Devloper","headerTaglineThree":"Solution-focused","headerTaglineFour":"Critical-thinker","showBlog":true,"socials":[{"title":"Github","link":"https://github.com/AR31313"},{"title":"LinkedIn","link":"https://www.linkedin.com/in/yay4avi/"},{"title":"GIS Portfolio","link":"https://yay4avi.wixsite.com/gisportfolio"},{"title":"Business","link":"https://www.anuranaskitchen.com/"},{"title":"Resume","link":"https://my.indeed.com/p/avir-nkmrudo"}],"projects":[{"id":"2","title":"Employee Management System","description":"Command-line application to manage a database.","imageSrc":"https://user-images.githubusercontent.com/96843377/181689038-76686611-df28-4075-b9a5-e82bb8dbabb5.png","url":"https://github.com/AR31313/EmployeeManagement_System"},{"id":"3","title":"Scheduler","description":"Feature dynamically updated HTML and CSS powered by jQuery","imageSrc":"https://user-images.githubusercontent.com/96843377/181689796-fbb9e22f-9f1f-4591-8c68-25fb7cc69ea3.png","url":"https://github.com/AR31313/scheduler"},{"id":"1","title":"Password Generator","description":"API for a backend social network site that uses a NoSQL database.","imageSrc":"https://user-images.githubusercontent.com/96843377/181689755-ba7f4b3a-bead-4ceb-a8a9-8a8da0604c48.png","url":"https://ar31313.github.io/password_generator/"},{"id":"4","title":"NPS Hike Search Tool","description":"The application uses the National Park Service API to return the list of hiking activities as well as the coordinates.","imageSrc":"https://user-images.githubusercontent.com/96843377/181690165-8154548b-480e-4ac9-8916-c972b01a5b5d.png","url":"https://github.com/AR31313/NPSHikeSearchTool"}],"services":[{"id":"1","title":"Web Developer","description":"Earned Certificate in Full Stack Web Development from University of Washington. Skills in HTML, CSS & JavaScript; proficient with Microsoft Office, Adobe Photoshop, Esri & ArcGIS programs as well as Quickbooks"},{"id":"2","title":"GIS Mapping & Analysis","description":"Earned Geographic Information Systems Certificate from University of Washington. Has Excellent cartographic techniques, spatial analysis ability & can create professional-quality graphic representations of social environmental and economic conditions. "},{"id":"3","title":"Environmental Scientist","description":"Earned Bachelor of Science with Environmental Focus from University of Washington. Extensive data analysis experience, field sampling, etc."},{"id":"4","title":"Entrepreneur","description":"Started a business from the ground up and have been successfully running it for the last eight years with continued growth and resilience."}],"aboutpara":"Front-end Web Developer with background in Business Management, Environmental Science with extensive GIS Experience. Earned Certificate in Full Stack Web Development, GIS and Bachelor of Science Degree from University of Washington. Skills in Mongo, Express, React & Node; proficient with Microsoft Office, Esri & ArcGIS programs as well as Quickbooks. Known as a highly motivated problem solver with a strong commitment to continually learning new things and developing myself professionally."}')}},function(e){e.O(0,[891,324,664,242,774,888,179],(function(){return t=49937,e(e.s=t);var t}));var t=e.O();_N_E=t}]);