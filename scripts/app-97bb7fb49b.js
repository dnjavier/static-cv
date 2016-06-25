!function(){"use strict";angular.module("portfolio",["ngAnimate","ngTouch","ui.router","ui.bootstrap","toastr","chart.js","contentful"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("portfolio").service("webDevTec",t)}(),function(){"use strict";function t(){function t(){}var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{item:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("portfolio").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,s,o,i){var n,r=t(s[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});s.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){r.type(t).pause()["delete"]()}),n=e.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(t){r.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){n()})}function s(t,e){function s(){return o().then(function(){t.info("Activated Contributors View")})}function o(){return e.getContributors(10).then(function(t){return i.contributors=t,i.contributors})}var i=this;i.contributors=[],s()}s.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:s,controllerAs:"vm"};return o}t.$inject=["malarkey"],angular.module("portfolio").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function s(s){function i(t){return t.data}function n(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return s||(s=30),e.get(o+"/contributors?per_page="+s).then(i)["catch"](n)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",i={apiHost:o,getContributors:s};return i}t.$inject=["$log","$http"],angular.module("portfolio").factory("githubContributor",t)}(),!function(){angular.module("contentful",[])}(),function(){function t(t,e,s,o){var i;e.contentfulEntry&&(i=t.$eval(e.contentfulEntry),o.isQueryString(i)?s.entries(i).then(function(e){var s={};e.data&&e.data.items&&e.data.items.length&&(s=e.data.items[0]),t.$contentfulEntry=s},function(){t.$contentfulEntry={}}):s.entry(i).then(function(e){t.$contentfulEntry=e.data},function(){t.$contentfulEntry={}})),e.hasOwnProperty("contentfulEntries")&&(i=t.$eval(e.contentfulEntries),s.entries(i).then(function(e){t.$contentfulEntries=e.data},function(){t.$contentfulEntries={limit:0,skip:0,total:0,items:[]}}))}t.$inject=["t","n","e","r"],t.$inject=["$scope","$attrs","contentful","contentfulHelpers"],angular.module("contentful").controller("ContentfulDirectiveCtrl",t)}(),function(){function t(){return{restrict:"EA",scope:!0,controller:"ContentfulDirectiveCtrl"}}t.$inject=[],angular.module("contentful").directive("contentfulEntries",t)}(),function(){function t(){return{restrict:"EA",scope:!0,controller:"ContentfulDirectiveCtrl"}}t.$inject=[],angular.module("contentful").directive("contentfulEntry",t)}(),function(){function t(){function t(){}return t.prototype.resolveResponse=function(t){var e=this;return e.walkMutate(t,e.isLink,function(s){return e.getLink(t,s)||s}),t.items||[]},t.prototype.isLink=function(t){return t&&t.sys&&t.sys.type&&"Link"===t.sys.type?!0:!1},t.prototype.getLink=function(t,e){var s=this,o=e.sys.linkType,i=e.sys.id,n=function(t){return t&&t.sys&&t.sys.type===o&&t.sys.id===i};return s.findLink(t.items,n)||t.includes&&s.findLink(t.includes[o],n)},t.prototype.findLink=function(t,e){var s,o=null;if(!angular.isArray(t))return o;for(s=0;s<t.length;s++)if(e(t[s])){o=t[s];break}return o},t.prototype.walkMutate=function(t,e,s){var o=this;return e(t)?s(t):angular.isArray(t)||angular.isObject(t)?(angular.forEach(t,function(i,n){t[n]=o.walkMutate(i,e,s)}),t):t},t.prototype.isQueryString=function(t){return t.toString().indexOf("=")>-1?!0:t.toString().indexOf("&")>-1?!0:t.toString().indexOf("?")>-1?!0:!1},new t}angular.module("contentful").factory("contentfulHelpers",t)}(),function(){function t(){function t(t,e,s){return new o(t,e,s,i)}function o(t,e,s,o){if(this._$http=t,this._$q=e,this._contentfulHelpers=s,this.options=o,"function"!=typeof t.get)throw new Error("The contentful service needs a valid http service to work with");if("function"!=typeof e.when)throw new Error("The contentful service needs a valid promise service to work with")}t.$inject=["t","n","e"];var i={host:"cdn.contentful.com",space:null,accessToken:null,secure:!0};this.setOptions=function(t){return angular.extend(i,t),this},this.$get=t,t.$inject=["$http","$q","contentfulHelpers"],o.prototype.request=function(t,e){var s;return e=e||{},e.headers=e.headers||{},e.params=e.params||{},e.headers["Content-Type"]="application/vnd.contentful.delivery.v1+json",e.params.access_token=this.options.accessToken,s=[this.options.secure?"https":"http","://",this.options.host,":",this.options.secure?"443":"80","/spaces/",this.options.space,t].join(""),this._$http.get(s,e)},o.prototype.asset=function(t){return this.request("/assets/"+t)},o.prototype.assets=function(t){return this.processResponseWithMultipleEntries(this.request("/assets",s(e(t))))},o.prototype.contentType=function(t){return this.request("/content_types/"+t)},o.prototype.contentTypes=function(t){return this.processResponseWithMultipleEntries(this.request("/content_types",s(e(t))))},o.prototype.entry=function(t){return this.request("/entries/"+t)},o.prototype.entries=function(t){return this.processResponseWithMultipleEntries(this.request("/entries",s(e(t))))},o.prototype.space=function(){return this.request("")},o.prototype.processResponseWithMultipleEntries=function(t){var e=this;return t&&t.then&&t.then(function(t){var s={limit:t.data.limit,skip:t.data.skip,total:t.data.total};return s.items=e._contentfulHelpers.resolveResponse(t.data),t.data=s,t},function(t){return t}),t},o.prototype.processResponseWithSingleEntry=function(t){return t&&t.then&&t.then(function(t){return t},function(t){return t}),t}}function e(t){var e={};if(!t)return e;var s=t.toString().split("&");return angular.forEach(s,function(t){var s=t.split("=");s.length>1&&(e[s[0]]=s[1])}),e}function s(t){return angular.isObject(t)||(t={}),{params:t}}angular.module("contentful").provider("contentful",t)}(),function(){"use strict";function t(t){var e=this;e.jobs=[],e.studies=[],e.item={img:"assets/images/resume.png",gif:"assets/images/resume.gif",title:"Resume",state:"resume",desc:"My Academic Qualifications"},t.entries().then(function(t){for(var s=t.data,o=s.items.length-1;o>=0;o--)"work"==s.items[o].sys.contentType.sys.id&&e.jobs.push(s.items[o]),"studies"==s.items[o].sys.contentType.sys.id&&e.studies.push(s.items[o])},function(t){console.log("Oops, error "+t.status),console.log(t)})}t.$inject=["contentful"],angular.module("portfolio").controller("ResumeController",t)}(),function(){"use strict";function t(){var t=this;t.item={img:"assets/images/profile.png",gif:"assets/images/profile.gif",title:"Profile",state:"profile",desc:"A brief about me"},t.labels=["",""],t.data=[50,50],t.colours=["#00B6F9","#FFFFFF"],t.green=["#7fc857","#FFFFFF"],t.red=["#dd1b16","#FFFFFF"],t.black=["#353535","#FFFFFF"],t.brown=["#6e4e37","#FFFFFF"]}angular.module("portfolio").controller("ProfileController",t)}(),function(){"use strict";function t(t){var e=this;e.projects=[],e.item={img:"assets/images/portfolio.png",gif:"assets/images/portfolio.gif",title:"Portfolio",state:"portfolio",desc:"Some of My Works"},t.entries().then(function(t){for(var s=t.data,o=s.items.length-1;o>=0;o--)"project"==s.items[o].sys.contentType.sys.id&&e.projects.push(s.items[o])},function(t){console.log("Oops, error "+t.status),console.log(t)})}t.$inject=["contentful"],angular.module("portfolio").controller("PortfolioController",t)}(),function(){"use strict";function t(t,e,s,o,i){function n(){t(function(){a.classAnimation="rubberBand"},4e3)}function r(){s.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),a.classAnimation=""}var a=this;a.items=[{img:"assets/images/profile.png",gif:"assets/images/profile.gif",title:"Profile",state:"profile"},{img:"assets/images/resume.png",gif:"assets/images/resume.gif",title:"Resume",state:"resume"},{img:"assets/images/portfolio.png",gif:"assets/images/portfolio.gif",title:"Portfolio",state:"portfolio"},{img:"assets/images/blog.png",gif:"assets/images/blog.gif",title:"Blog",state:"blog"},{img:"assets/images/contact.png",gif:"assets/images/contact.gif",title:"Contact",state:"contact"}];var l;a.changeImg=function(t){l=t.img,t.img=t.gif},a.changeImgBack=function(t){t.img=l},a.goToElement=function(t){o.hash(t),i()},a.classAnimation="",a.creationDate=1456341402465,a.showToastr=r,n()}t.$inject=["$timeout","webDevTec","toastr","$location","$anchorScroll"],angular.module("portfolio").controller("MainController",t)}(),function(){"use strict";function t(){var t=this;t.item={img:"assets/images/contact.png",gif:"assets/images/contact.gif",title:"Contact",state:"contact",desc:"Get in touch with me"}}angular.module("portfolio").controller("ContactController",t)}(),function(){"use strict";function t(){var t=this;t.item={img:"assets/images/blog.png",gif:"assets/images/blog.gif",title:"Blog",state:"blog",desc:"I write here my thoughts"}}angular.module("portfolio").controller("BlogController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("portfolio").run(t)}(),function(){"use strict";function t(t,e,s){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("profile",{url:"/profile",templateUrl:"app/profile/profile.html",controller:"ProfileController",controllerAs:"profile"}).state("resume",{url:"/resume",templateUrl:"app/resume/resume.html",controller:"ResumeController",controllerAs:"resume"}).state("portfolio",{url:"/portfolio",templateUrl:"app/portfolio/portfolio.html",controller:"PortfolioController",controllerAs:"portfolio"}).state("blog",{url:"/blog",templateUrl:"app/blog/blog.html",controller:"BlogController",controllerAs:"blog"}).state("contact",{url:"/contact",templateUrl:"app/contact/contact.html",controller:"ContactController",controllerAs:"contact"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("portfolio").config(t)}(),function(){"use strict";angular.module("portfolio").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e,s){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0,s.setOptions({space:"dbkd6l6b6160",accessToken:"69268629511d314673b1f549d90c2049b610bc8ec986e087aa89724e7fe749cd"})}t.$inject=["$logProvider","toastrConfig","contentfulProvider"],angular.module("portfolio").config(t)}(),angular.module("portfolio").run(["$templateCache",function(t){t.put("app/blog/blog.html",'<acme-navbar item="blog.item"></acme-navbar><div class="blog"><section><div class="container"><div class="row"><div class="col-md-12"><div class="col-md-6"><h2>This section is currently underconstruction</h2></div><div class="col-md-6"><img src="assets/images/construction.png" alt="" class="img-responsive"></div></div></div></div></section></div>'),t.put("app/contact/contact.html",'<acme-navbar item="contact.item"></acme-navbar><div class="contact"><section><div class="container"><div class="row"><div class="col-md-6"><h2>Contact info</h2><div class="info-square"><p class="text-left">Address</p><p class="text-right">San Antonio de Escazu</p><br><p class="text-left">Phone</p><p class="text-right">+506 8850 5706</p><br><p class="text-left">E-mail</p><p class="text-right">info@javier.tech</p><br><p class="text-left">Skype</p><p class="text-right">dn.javier</p><br><p class="text-left">Website</p><p class="text-right">www.javier.tech</p></div></div><div class="col-md-6"><h2>Contact form</h2><form class="contact-form" method="POST" action="https://formspree.io/dn.javier@hotmail.com"><input type="text" id="name" name="name" placeholder="Name"> <input type="email" id="email" name="email" placeholder="Email"> <textarea id="message" name="message" placeholder="Message"></textarea> <input type="submit" class="btn btn-color hover-animate" value="Send Message"></form></div></div></div></section></div>'),t.put("app/main/main.html",'<section class="first"><div class="container"><div class="row v-center"><div class="col-xs-12 col-md-5 text-right"><img src="assets/images/photo1.png" class="img-responsive" alt=""></div><div class="col-xs-12 col-md-7"><h1>JAVIER DELGADO</h1><h3>Web developer</h3><ul><li><a target="_blank" href="https://www.facebook.com/dn.javier"><i class="fa fa-facebook"></i></a></li><li><a target="_blank" href="https://twitter.com/djaviern"><i class="fa fa-twitter"></i></a></li><li><a target="_blank" href="https://cr.linkedin.com/in/javier-delgado-84510a101"><i class="fa fa-linkedin"></i></a></li><li><a target="_blank" href="https://github.com/dnjavier"><i class="fa fa-github"></i></a></li></ul></div></div></div></section><section class="second"><div class="text-center" ng-repeat="item in main.items"><a ui-sref="{{ item.state }}" ng-click="main.goToElement(\'header\')"><img ng-src="{{ item.img }}" class="img-responsive" ng-mouseover="main.changeImg(item)" ng-mouseleave="main.changeImgBack(item)"><p>{{ item.title }}</p></a></div></section><section class="third text-center"><div class="container"><div class="row"><div class="col-md-4"><i class="fa fa-mobile"></i><p>+506 8850-5706</p></div><div class="col-md-4"><i class="fa fa-paper-plane"></i><p>info@javier.tech</p></div><div class="col-md-4"><i class="fa fa-map-marker"></i><p>San Jose, Costa Rica.</p></div></div></div></section>'),t.put("app/portfolio/portfolio.html",'<acme-navbar item="portfolio.item"></acme-navbar><div class="portfolio"><section><div class="container"><div class="row"><div class="col-md-12"><ul><li class="active">All</li><li>Web Design</li><li>Fullstack</li><li>Mobile Apps</li></ul></div></div><div class="row"><div class="col-md-4" ng-repeat="project in portfolio.projects"><div class="project"><img src="{{project.fields.screenshot.fields.file.url}}" alt=""><div class="item"><h3>{{project.fields.name}}</h3><p>{{project.fields.technologies}}</p><a href="#">View details</a></div></div></div></div></div></section></div>'),t.put("app/profile/profile.html",'<acme-navbar item="profile.item"></acme-navbar><div class="profile"><section><div class="container"><div class="row"><div class="col-md-7 brief"><h2>Hello, I am web developer</h2><p>I am coursing system engineering at ULACIT. This university has been important for my professional development for all my improve in leadership that I have acquired and the opportunities that they have given to me for trainings in areas of my career and being in conferences like EXPOTELECOM. Working in the student’s government has made me a person who knows how to deal with different kinds of people, people who think different than me. I have got the ability to communicate, deal and negotiate with people to take forward work.</p><a ui-sref="contact" class="btn">Contact me</a> <a target="_self" href="assets/Javier-Delgado.pdf" download="javier-delgado-cv.pdf" class="btn btn-color">Download CV</a></div><div class="col-md-5"><div class="info-square"><p class="text-left">Name</p><p class="text-right">Javier Delgado</p><br><p class="text-left">E-mail</p><p class="text-right">info@javier.tech</p><br><p class="text-left">Address</p><p class="text-right">San Antonio, Escazu</p><br><p class="text-left">Phone</p><p class="text-right">+506 8850-5706</p><br><p class="text-left">Website</p><p class="text-right">www.javier.tech</p></div></div></div></div></section><section><div class="container"><div class="row"><div class="col-md-6"><div class="container"><div class="row"><h2>Soft Skills</h2><div class="col-md-3"><canvas id="doughnut" class="chart chart-doughnut" chart-data="[90, 10]" chart-labels="profile.labels" chart-colours="profile.colours"></canvas><h4 class="text-center">Communication</h4></div><div class="col-md-3"><canvas id="doughnut" class="chart chart-doughnut" chart-data="[85, 15]" chart-labels="profile.labels" chart-colours="profile.colours"></canvas><h4 class="text-center">Negotiation</h4></div><div class="col-md-3"><canvas id="doughnut" class="chart chart-doughnut" chart-data="[95, 5]" chart-labels="profile.labels" chart-colours="profile.colours"></canvas><h4 class="text-center">Teamwork</h4></div><div class="col-md-3"><canvas id="doughnut" class="chart chart-doughnut" chart-data="[95, 5]" chart-labels="profile.labels" chart-colours="profile.colours"></canvas><h4 class="text-center">Leadership</h4></div></div></div></div><div class="col-md-6"><div class="container"><div class="row"><h2>Technical Skills</h2><div class="col-md-3"><canvas id="doughnut" class="chart chart-doughnut" chart-data="[70, 30]" chart-labels="profile.labels" chart-colours="profile.green"></canvas><h4 class="text-center">Mongo</h4></div><div class="col-md-3"><canvas id="doughnut" class="chart chart-doughnut" chart-data="[80, 20]" chart-labels="profile.labels" chart-colours="profile.black"></canvas><h4 class="text-center">Express</h4></div><div class="col-md-3"><canvas id="doughnut" class="chart chart-doughnut" chart-data="[95, 5]" chart-labels="profile.labels" chart-colours="profile.red"></canvas><h4 class="text-center">Angular</h4></div><div class="col-md-3"><canvas id="doughnut" class="chart chart-doughnut" chart-data="[75, 25]" chart-labels="profile.labels" chart-colours="profile.brown"></canvas><h4 class="text-center">Node</h4></div></div></div></div></div></div></section></div>'),t.put("app/resume/resume.html",'<acme-navbar item="resume.item"></acme-navbar><div class="resume"><section><div class="container"><div class="row"><div class="col-md-6"><h2>Education</h2><div class="box" ng-repeat="study in resume.studies"><div class="container"><div class="row"><div class="col-md-6"><p class="text-left">Name</p><p class="text-right">{{study.fields.name}}</p><br><p class="text-left">Address</p><p class="text-right">{{study.fields.address}}</p><br><p class="text-left">Period</p><p class="text-right">{{study.fields.period}}</p><br><p class="text-left">Level</p><p class="text-right">{{study.fields.level}}</p></div><div class="col-md-12"><p>{{study.fields.description}}</p></div></div></div></div></div><div class="col-md-6"><h2>Work</h2><div class="box" ng-repeat="job in resume.jobs"><div class="container"><div class="row"><div class="col-md-6"><p class="text-left">Name</p><p class="text-right">{{job.fields.name}}</p><br><p class="text-left">Address</p><p class="text-right">{{job.fields.address}}</p><br><p class="text-left">Period</p><p class="text-right">{{job.fields.period}}</p><br><p class="text-left">Post</p><p class="text-right">{{job.fields.post}}</p></div><div class="col-md-12"><p>{{job.fields.description}}</p></div></div></div></div></div></div></div></section></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div id="header" class="container-fluid"><div class="row"><div class="col-xs-3 col-md-1"><img ng-src="{{ vm.item.img }}" class="img-responsive"></div><div class="col-xs-7 col-md-9 text"><h2>{{ vm.item.title }}</h2><p>{{ vm.item.desc }}</p></div><div class="col-xs-1 col-md-1 text-right"><a href="/"><i class="fa fa-times"></i></a></div></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-97bb7fb49b.js.map
