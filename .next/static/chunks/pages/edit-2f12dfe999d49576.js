(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{52234:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit",function(){return n(94258)}])},25542:function(e,t,n){"use strict";var i=n(85893),r=(n(67294),n(82010));t.Z=function(e){var t=e.children,n=e.type,s=e.onClick,a=e.classes,l=(0,r.F)().theme;return"primary"===n?(0,i.jsx)("button",{onClick:s,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ".concat("dark"===l?"bg-white text-black":"bg-black text-white","  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100"),children:t}):(0,i.jsx)("button",{onClick:s,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ".concat("dark"===l?"hover:bg-slate-600 text-white":"hover:bg-slate-100"," hover:scale-105 active:scale-100  tablet:first:ml-0 ").concat(a),children:t})}},42665:function(e,t,n){"use strict";var i=n(85893),r=n(11163),s=n(67294),a=n(25542),l=n(2271),c=n(82010),o=n(69954);t.Z=function(e){var t=e.handleWorkScroll,n=e.handleAboutScroll,d=e.isBlog,u=(0,r.useRouter)(),m=(0,c.F)(),h=m.theme,p=m.setTheme,g=(0,s.useState)(!1),x=g[0],f=g[1];return(0,s.useEffect)((function(){f(!0)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.J,{className:"block tablet:hidden mt-5",children:function(e){var r=e.open;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex items-center justify-between p-2 laptop:p-0",children:[(0,i.jsxs)("h1",{onClick:function(){return u.push("/")},className:"font-medium cursor-pointer p-2 laptop:p-0",children:[o.name,"."]}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)(a.Z,{onClick:function(){return p("dark"===h?"light":"dark")},children:(0,i.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})}),(0,i.jsx)(l.J.Button,{children:(0,i.jsx)("img",{className:"h-5",src:"/images/".concat(r?"light"===h?"cancel.svg":"cancel-white.svg":"dark"===h?"menu-white.svg":"menu.svg")})})]})]}),(0,i.jsx)(l.J.Panel,{className:"absolute right-0 z-10 w-11/12 p-4 ".concat("dark"===h?"bg-slate-800":"bg-white"," shadow-md rounded-md"),children:d?(0,i.jsxs)("div",{className:"grid grid-cols-1",children:[(0,i.jsx)(a.Z,{onClick:function(){return u.push("/")},classes:"first:ml-1",children:"Home"}),o.showBlog&&(0,i.jsx)(a.Z,{onClick:function(){return u.push("/blog")},children:"Blog"}),(0,i.jsx)(a.Z,{onClick:function(){return window.open("mailto:gurlgotgame@gmail.com")},children:"Contact"})]}):(0,i.jsxs)("div",{className:"grid grid-cols-1",children:[(0,i.jsx)(a.Z,{onClick:t,children:"Work"}),(0,i.jsx)(a.Z,{onClick:n,children:"About"}),o.showBlog&&(0,i.jsx)(a.Z,{onClick:function(){return u.push("/blog")},children:"Blog"}),(0,i.jsx)(a.Z,{onClick:function(){return window.open("mailto:gurlgotgame@gmail.com")},children:"Contact"})]})})]})}}),(0,i.jsxs)("div",{className:"mt-10 hidden flex-row items-center justify-between sticky ".concat("light"===h&&"bg-white"," dark:text-white top-0 z-10 tablet:flex"),children:[(0,i.jsxs)("h1",{onClick:function(){return u.push("/")},className:"font-medium cursor-pointer mob:p-2 laptop:p-0",children:[o.name,"."]}),d?(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(a.Z,{onClick:function(){return u.push("/")},children:"Home"}),o.showBlog&&(0,i.jsx)(a.Z,{onClick:function(){return u.push("/blog")},children:"Blog"}),(0,i.jsx)(a.Z,{onClick:function(){return window.open("mailto:gurlgotgame@gmail.com")},children:"Contact"}),x&&h&&(0,i.jsx)(a.Z,{onClick:function(){return p("dark"===h?"light":"dark")},children:(0,i.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})})]}):(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(a.Z,{onClick:t,children:"Work"}),(0,i.jsx)(a.Z,{onClick:n,children:"About"}),o.showBlog&&(0,i.jsx)(a.Z,{onClick:function(){return u.push("/blog")},children:"Blog"}),(0,i.jsx)(a.Z,{onClick:function(){return window.open("mailto:gurlgotgame@gmail.com")},children:"Contact"}),x&&h&&(0,i.jsx)(a.Z,{onClick:function(){return p("dark"===h?"light":"dark")},children:(0,i.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===h?"moon.svg":"sun.svg")})})]})]})]})}},94258:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var i,r=n(85893),s=n(67294),a=n(25542),l=n(42665),c=new Uint8Array(16);function o(){if(!i&&!(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(c)}var d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(e){return"string"===typeof e&&d.test(e)},m=[],h=0;h<256;++h)m.push((h+256).toString(16).substr(1));var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n};var g=function(e,t,n){var i=(e=e||{}).random||(e.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=i[r];return t}return p(i)},x=n(82010),f=n(69954);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){j(e,t,n[t])}))}return e}function y(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(){var e=(0,s.useState)(f),t=e[0],n=e[1],i=(0,s.useState)("HEADER"),c=i[0],o=i[1],d=(0,x.F)().theme,u=function(e,i){var r=t.projects;r[e]=b({},i),n(b({},t,{projects:r}))},m=function(e,i){var r=t.services;r[e]=b({},i),n(b({},t,{services:r}))},h=function(e,i){var r=t.socials;r[e]=b({},i),n(b({},t,{socials:r}))};return(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsx)(l.Z,{}),(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"z-10 sticky top-12 ".concat("dark"===d?"bg-transparent":"bg-white"),children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-4xl",children:"Dashboard"}),(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(a.Z,{onClick:function(){alert("This thing only works in development mode.")},type:"primary",children:"Save"})})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(a.Z,{onClick:function(){return o("HEADER")},type:"HEADER"===c&&"primary",children:"Header"}),(0,r.jsx)(a.Z,{onClick:function(){return o("PROJECTS")},type:"PROJECTS"===c&&"primary",children:"Projects"}),(0,r.jsx)(a.Z,{onClick:function(){return o("SERVICES")},type:"SERVICES"===c&&"primary",children:"Services"}),(0,r.jsx)(a.Z,{onClick:function(){return o("ABOUT")},type:"ABOUT"===c&&"primary",children:"About"}),(0,r.jsx)(a.Z,{onClick:function(){return o("SOCIAL")},type:"SOCIAL"===c&&"primary",children:"Social"})]})]}),"HEADER"===c&&(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Name"}),(0,r.jsx)("input",{value:t.name,onChange:function(e){return n(b({},t,{name:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-sx opacity-50",children:"Header Tagline One"}),(0,r.jsx)("input",{value:t.headerTaglineOne,onChange:function(e){return n(b({},t,{headerTaglineOne:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Header Tagline Two"}),(0,r.jsx)("input",{value:t.headerTaglineTwo,onChange:function(e){return n(b({},t,{headerTaglineTwo:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Header Tagline Three"}),(0,r.jsx)("input",{value:t.headerTaglineThree,onChange:function(e){return n(b({},t,{headerTaglineThree:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Header Tagline Four"}),(0,r.jsx)("input",{value:t.headerTaglineFour,onChange:function(e){return n(b({},t,{headerTaglineFour:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex items-center",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Blog"}),(0,r.jsxs)("div",{className:"w-4/5 ml-10 flex items-center",children:[(0,r.jsx)(a.Z,{onClick:function(){return n(b({},t,{showBlog:!0}))},type:t.showBlog&&"primary",children:"Yes"}),(0,r.jsx)(a.Z,{onClick:function(){return n(b({},t,{showBlog:!1}))},classes:!t.showBlog&&"bg-red-500 text-white hover:bg-red-600",children:"No"})]})]})]}),"PROJECTS"===c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mt-10",children:t.projects.map((function(e,i){return(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-2xl",children:e.title}),(0,r.jsx)(a.Z,{onClick:function(){return function(e){var i=t.projects;i=i.filter((function(t){return t.id!==e})),n(b({},t,{projects:i}))}(e.id)},type:"primary",children:"Delete"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Title"}),(0,r.jsx)("input",{value:e.title,onChange:function(t){return u(i,b({},e,{title:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Description"}),(0,r.jsx)("input",{value:e.description,onChange:function(t){return u(i,b({},e,{description:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Image Source"}),(0,r.jsx)("input",{value:e.imageSrc,onChange:function(t){return u(i,b({},e,{imageSrc:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"url"}),(0,r.jsx)("input",{value:e.url,onChange:function(t){return u(i,b({},e,{url:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsx)("hr",{className:"my-10"})]},e.id)}))}),(0,r.jsx)("div",{className:"my-10",children:(0,r.jsx)(a.Z,{onClick:function(){n(b({},t,{projects:y(t.projects).concat([{id:g(),title:"New Project",description:"Web Design & Development",imageSrc:"https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",url:"http://chetanverma.com/"}])}))},type:"primary",children:"Add Project +"})})]}),"SERVICES"===c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mt-10",children:t.services.map((function(e,i){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-2xl",children:e.title}),(0,r.jsx)(a.Z,{onClick:function(){return function(e){var i=t.services;i=i.filter((function(t){return t.id!==e})),n(b({},t,{services:i}))}(e.id)},type:"primary",children:"Delete"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Title"}),(0,r.jsx)("input",{value:e.title,onChange:function(t){return m(i,b({},e,{title:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Description"}),(0,r.jsx)("textarea",{value:e.description,onChange:function(t){return m(i,b({},e,{description:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"})]}),(0,r.jsx)("hr",{className:"my-10"})]},e.id)}))}),(0,r.jsx)("div",{className:"my-10",children:(0,r.jsx)(a.Z,{onClick:function(){n(b({},t,{services:y(t.services).concat([{id:g(),title:"New Service",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}])}))},type:"primary",children:"Add Service +"})})]}),"ABOUT"===c&&(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsx)("h1",{className:"text-2xl",children:"About"}),(0,r.jsx)("textarea",{className:"w-full h-96 mt-10 p-2 rounded-md shadow-md border",value:t.aboutpara,onChange:function(e){return n(b({},t,{aboutpara:e.target.value}))}})]}),"SOCIAL"===c&&(0,r.jsxs)("div",{className:"mt-10",children:[t.socials.map((function(e,i){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-2xl",children:e.title}),(0,r.jsx)(a.Z,{onClick:function(){return function(e){var i=t.socials;i=i.filter((function(t){return t.id!==e})),n(b({},t,{socials:i}))}(e.id)},type:"primary",children:"Delete"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Title"}),(0,r.jsx)("input",{value:e.title,onChange:function(t){return h(i,b({},e,{title:t.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"flex items-center mt-5",children:[(0,r.jsx)("label",{className:"w-1/5 text-lg opacity-50",children:"Link"}),(0,r.jsx)("input",{value:e.link,onChange:function(e){return h(i,b({},service,{link:e.target.value}))},className:"w-4/5 ml-10 p-2 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsx)("hr",{className:"my-10"})]},e.id)})})),(0,r.jsx)("div",{className:"my-10",children:(0,r.jsx)(a.Z,{onClick:function(){n(b({},t,{socials:y(t.socials).concat([{id:g(),title:"New Link",link:"www.chetanverma.com"}])}))},type:"primary",children:"Add Social +"})})]})]})]})}},69954:function(e){"use strict";e.exports=JSON.parse('{"name":"Hello ","headerTaglineOne":"I\'m Avi \ud83d\udc4b ","headerTaglineTwo":"Designer and Devloper","headerTaglineThree":"Solution-focused","headerTaglineFour":"Critical-thinker","showBlog":true,"socials":[{"title":"Github","link":"https://github.com/AR31313"},{"title":"LinkedIn","link":"https://www.linkedin.com/in/yay4avi/"},{"title":"GIS Portfolio","link":"https://yay4avi.wixsite.com/gisportfolio"},{"title":"Business","link":"https://www.anuranaskitchen.com/"},{"title":"Resume","link":"https://my.indeed.com/p/avir-nkmrudo"}],"projects":[{"id":"2","title":"Employee Management System","description":"Command-line application to manage a database.","imageSrc":"https://user-images.githubusercontent.com/96843377/181689038-76686611-df28-4075-b9a5-e82bb8dbabb5.png","url":"https://github.com/AR31313/EmployeeManagement_System"},{"id":"3","title":"Scheduler","description":"Feature dynamically updated HTML and CSS powered by jQuery","imageSrc":"https://user-images.githubusercontent.com/96843377/181689796-fbb9e22f-9f1f-4591-8c68-25fb7cc69ea3.png","url":"https://github.com/AR31313/scheduler"},{"id":"1","title":"Password Generator","description":"API for a backend social network site that uses a NoSQL database.","imageSrc":"https://user-images.githubusercontent.com/96843377/181689755-ba7f4b3a-bead-4ceb-a8a9-8a8da0604c48.png","url":"https://ar31313.github.io/password_generator/"},{"id":"4","title":"NPS Hike Search Tool","description":"The application uses the National Park Service API to return the list of hiking activities as well as the coordinates.","imageSrc":"https://user-images.githubusercontent.com/96843377/181690165-8154548b-480e-4ac9-8916-c972b01a5b5d.png","url":"https://github.com/AR31313/NPSHikeSearchTool"}],"services":[{"id":"1","title":"Web Developer","description":"Earned Certificate in Full Stack Web Development from University of Washington. Skills in HTML, CSS & JavaScript; proficient with Microsoft Office, Adobe Photoshop, Esri & ArcGIS programs as well as Quickbooks"},{"id":"2","title":"GIS Mapping & Analysis","description":"Earned Geographic Information Systems Certificate from University of Washington. Has Excellent cartographic techniques, spatial analysis ability & can create professional-quality graphic representations of social environmental and economic conditions. "},{"id":"3","title":"Environmental Scientist","description":"Earned Bachelor of Science with Environmental Focus from University of Washington. Extensive data analysis experience, field sampling, etc."},{"id":"4","title":"Entrepreneur","description":"Started a business from the ground up and have been successfully running it for the last eight years with continued growth and resilience."}],"aboutpara":"Front-end Web Developer with background in Business Management, Environmental Science with extensive GIS Experience. Earned Certificate in Full Stack Web Development, GIS and Bachelor of Science Degree from University of Washington. Skills in Mongo, Express, React & Node; proficient with Microsoft Office, Esri & ArcGIS programs as well as Quickbooks. Known as a highly motivated problem solver with a strong commitment to continually learning new things and developing myself professionally."}')}},function(e){e.O(0,[891,774,888,179],(function(){return t=52234,e(e.s=t);var t}));var t=e.O();_N_E=t}]);