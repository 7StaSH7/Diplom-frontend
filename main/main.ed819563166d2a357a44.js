!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=16)}([function(e,t,s){"use strict";s.d(t,"c",(function(){return i})),s.d(t,"k",(function(){return n})),s.d(t,"l",(function(){return r})),s.d(t,"i",(function(){return o})),s.d(t,"g",(function(){return c})),s.d(t,"d",(function(){return a})),s.d(t,"h",(function(){return d})),s.d(t,"m",(function(){return h})),s.d(t,"e",(function(){return u})),s.d(t,"f",(function(){return _})),s.d(t,"a",(function(){return p})),s.d(t,"b",(function(){return m})),s.d(t,"j",(function(){return g}));const i={container:document.querySelector(".header-nav-container"),lightNotAuthTemplate:document.querySelector("#header-nav-not-logged-in"),lightAuthTemplate:document.querySelector("#header-nav-logged-in"),darkNotAuthTemplate:document.querySelector("#header-nav-not-logged-in-dark"),darkAuthTemplate:document.querySelector("#header-nav-logged-in-dark"),authButtonSelector:".header__nav-item-button"},n={form:{formSelector:".header-search__form",requiredInputSelectors:[".header-search__input"],actionButtonSelector:".header-search__button"}},r={container:document.querySelector(".search-results"),selectors:{items:".search-results__items"},templates:{results:document.querySelector("#search-results"),searchResultsProcess:document.querySelector("#search-results-process"),searchNoResults:document.querySelector("#search-no-results"),searchError:document.querySelector("#search-error")}},o={container:document.querySelector(".saved-articles"),templates:{results:document.querySelector("#saved-articles")},selectors:{items:".saved-articles__items"}},c={container:document.querySelector(".popup"),contentContainer:document.querySelector(".popup__content"),closeIcon:document.querySelector(".popup__close")},a={template:document.querySelector("#popup-login"),form:{formSelector:".popup__form",actionButtonSelector:".popup__form-button",requiredInputSelectors:[".popup__form-input_email",".popup__form-input_password"]}},d={template:document.querySelector("#popup-registration"),form:{formSelector:".popup__form",actionButtonSelector:".popup__form-button",requiredInputSelectors:[".popup__form-input_email",".popup__form-input_password",".popup__form-input_name"]}},h={template:document.querySelector("#popup-successful-registration")},l="https://api.news-stash.tk",u={signup:l+"/signup",signin:l+"/signin",logout:l+"/logout",getSpecificUser:l+"/users/me",getArticles:l+"/articles",createArticle:l+"/articles",deleteArticle:l+"/articles"},_={url:"https://newsapi.org/v2/everything",sortBy:"publishedAt",pageSize:100,apiKey:"5c1f5cc59318410fb892e15b34bc2d4d"},p={articlesQuantity:3},m={template:document.querySelector("#article-card"),actionTemplates:{baseAction:document.querySelector("#article-card-base-action"),likeAction:document.querySelector("#article-card-like-action"),unlikeAction:document.querySelector("#article-card-unlike-action"),savedAction:document.querySelector("#article-card-saved-action")}},g={name:document.querySelector(".header-saved__name"),articlesCount:document.querySelector(".header-saved__articles-count"),details:document.querySelector(".header-saved__details"),tagTemplate:document.querySelector("#header-saved-detail-tag")}},function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));class i{constructor(){this.dependencies={},this._handlers=[]}_setHandlers(e){e.forEach(({element:e,event:t,method:s})=>{this._addEventListener(e,t,s)})}_addEventListener(e,t,s){e.addEventListener(t,s),this._handlers.push({element:e,event:t,method:s})}_reset(){this._handlers.forEach(e=>{e.element.removeEventListener(e.event,e.method)})}setDependencies(e){this._dependencies=e}}},function(e,t,s){"use strict";s(8);var i=s(1);class n extends i.a{constructor(e){super();const{template:t,actionTemplates:s,article:i,dependencies:n}=e;this._article=i,this._actionTemplates=s,this.like=this.like.bind(this),this.unlike=this.unlike.bind(this),this.remove=this.remove.bind(this),this.setDependencies(n),this._createCard(t)}_getCardDate(e){const t=new Date(e),s=t.getFullYear(),i=t.getMonth();return`${t.getDate()} ${["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"][i]}, ${s}`}_getCardType(){let e="base";return this._dependencies.auth&&this._dependencies.articlesList&&(this._dependencies.auth.isSavedPage()?e="saved":this._dependencies.auth.isAuth()&&(e=this._dependencies.articlesList.articleIsLiked(this._newsUrl)?"unlike":"like")),e}_setCardAction(e,t){this._reset(),this._iconContainer.innerHTML="",this._iconContainer.appendChild(e.cloneNode(!0).content),t&&this._setHandlers([{element:this._iconContainer.querySelector(".article-card__action"),event:"click",method:t}])}_setCardActionBlock(){switch(this._getCardType()){case"saved":this._setCardAction(this._actionTemplates.savedAction,this.remove);break;case"unlike":this._setCardAction(this._actionTemplates.unlikeAction,this.unlike);break;case"like":this._setCardAction(this._actionTemplates.likeAction,this.like);break;default:this._setCardAction(this._actionTemplates.baseAction,null)}}_createCard(e){const{_id:t,source:s,title:i,date:n,text:r,link:o,image:c,keyword:a}=this._article;this._id=t,this._newsUrl=o,this._keyword=a,this._container=e.cloneNode(!0).content;const d=this._container.querySelector(".article-card__img");d.src=c,d.alt=i,this._container.querySelector(".article-card__date").textContent=this._getCardDate(n),this._container.querySelector(".article-card__title").textContent=i,this._container.querySelector(".article-card__text").textContent=r,this._container.querySelector(".article-card__source").textContent=s,this._iconContainer=this._container.querySelector(".article-card__icon-container"),this._setCardActionBlock(),this._container.querySelector(".article-card__link").href=o;const h=this._iconContainer.querySelector(".article-card__tag");h&&(h.textContent=this._keyword),this._dependencies.articlesList&&this._dependencies.articlesList.articleIsLiked(this._newsUrl)&&(this._id=this._dependencies.articlesList.getLikedByLink(this._newsUrl)._id)}like(){if(this._dependencies.mainApi&&this._dependencies.articlesList){const{source:e,title:t,date:s,text:i,link:n,image:r,keyword:o}=this._article;this._dependencies.mainApi.createArticle({source:e,title:t,date:s,text:i,link:n,image:r,keyword:o}).then(e=>{this._dependencies.articlesList.addLiked(e),this._id=e._id,this._setCardActionBlock()}).catch(e=>console.log(e))}}unlike(){this._dependencies.mainApi&&this._dependencies.articlesList&&this._dependencies.mainApi.removeArticle(this._id).then(()=>{this._dependencies.articlesList.removeLiked(this._id),this._setCardActionBlock()}).catch(e=>console.log(e))}remove(){this._dependencies.mainApi&&this._dependencies.articlesList&&this._dependencies.mainApi.removeArticle(this._id).then(()=>{this._dependencies.articlesList.removeLiked(this._id),this._dependencies.articlesList.updateArticles(this._dependencies.articlesList.getLiked()),this._reset(),this._dependencies.savedStat&&this._dependencies.savedStat.render()}).catch(e=>console.log(e))}updateView(){this._setCardActionBlock()}getDomElement(){return this._container}}s.d(t,"b",(function(){return o})),s.d(t,"c",(function(){return c})),s.d(t,"a",(function(){return r}));const r=e=>new n(e),o=()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},c=()=>{const e=(new Date).getTime(),t=new Date(e-6048e5);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}},function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));s(9);var i=s(1);class n extends i.a{constructor(e){super();const{lightNotAuthTemplate:t,lightAuthTemplate:s,darkNotAuthTemplate:i,darkAuthTemplate:n,authButtonSelector:r,theme:o,container:c}=e;this._notAuthTemplate="light"===o?t:i,this._authTemplate="light"===o?s:n,this._authButtonSelector=r,this._container=c}render({isLoggedIn:e,userName:t}){this._reset(),this._container.innerHTML="";const s=e?this._authTemplate:this._notAuthTemplate;let i;this._container.appendChild(s.cloneNode(!0).content),!e&&this._dependencies.loginPopup?i=this._dependencies.loginPopup.open:e&&this._dependencies.auth&&(i=this._dependencies.auth.logout,document.querySelector(".header__nav-item-name").textContent=t),i&&this._setHandlers([{element:this._container.querySelector(this._authButtonSelector),event:"click",method:i}])}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));class i{constructor(e){const{articlesQuantity:t}=e;this._lastPhrase="",this._currentArticleIndex=0,this._articles=[],this._liked=[],this._articlesQuantity=t}hasArticles(){return this._articles.length>0}articleIsLiked(e){return this._liked.some(t=>t.link===e)}getLikedByLink(e){return this._liked.find(t=>t.link===e)}getPhrase(){return this._lastPhrase}getLikedCount(){return this._liked.length}someMore(){return this._articles.length>this._currentArticleIndex}setLiked(e){this._liked=e||[]}getLiked(){return this._liked}addLiked(e){this._liked.push(e)}removeLiked(e){this._liked=this._liked.filter(t=>t._id!==e)}getKeywordsQuantity(){const e=this._liked.reduce((e,{keyword:t})=>(e[t]?e[t]+=1:e[t]=1,e),{});return Object.entries(e).sort((e,t)=>t[1]-e[1])}updateArticles(e,t=""){this._articles=e,this._lastPhrase=t,this._currentArticleIndex=0}getArticlesQuantity(e=!1){if(e)return this._articles;const t=this._currentArticleIndex,s=Math.min(this._currentArticleIndex+this._articlesQuantity,this._articles.length);return t>=s?[]:(this._currentArticleIndex=s,this._articles.slice(t,s))}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));class i{constructor(){this.logout=this.logout.bind(this)}_setUserData({name:e}){this._name=e,this._loggedIn=!0}_clearUserData(){this._name="",this._loggedIn=!1}_redirectToMainPage(){this.isSavedPage()&&(window.location.href="/main")}setDependencies(e){this._dependencies=e}isAuth(){return this._loggedIn}isSavedPage(){return"/"===window.location.pathname||"/savedArticles/"===window.location.pathname}getUserName(){return this._name}authenticate(){this._dependencies.mainApi&&this._dependencies.mainApi.getUserData().then(e=>{if(e.message)throw new Error("Unauthorized");this._setUserData(e)}).then(()=>this._dependencies.mainApi.getArticles()).then(e=>this._dependencies.articlesList.setLiked(e)).catch(()=>{this._clearUserData(),this._redirectToMainPage()}).finally(()=>{this._dependencies.header&&this._dependencies.header.render({isLoggedIn:this._loggedIn,userName:this._name}),this._dependencies.newsCardList&&this._dependencies.newsCardList.updateCardsViews(),this.isSavedPage()&&(this._dependencies.articlesList&&this._dependencies.articlesList.updateArticles(this._dependencies.articlesList.getLiked()),this._dependencies.savedStat&&this._dependencies.savedStat.render())})}logout(){this._clearUserData(),this._dependencies.mainApi&&this._dependencies.mainApi.logout().finally(()=>{this._dependencies.header&&this._dependencies.header.render({userName:this._name,isLoggedIn:this._loggedIn})}),this._dependencies.newsCardList&&this._dependencies.newsCardList.updateCardsViews(),this._redirectToMainPage()}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));class i{constructor(e){this._routes=e}signup({email:e,password:t,name:s}){return fetch(this._routes.signup,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t,name:s})}).catch(e=>new Error(e.message))}signin({email:e,password:t}){return fetch(this._routes.signin,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).catch(e=>new Error(e.message))}logout(){return fetch(this._routes.logout,{method:"POST",credentials:"include"}).catch(e=>new Error(e.message))}getUserData(){return fetch(this._routes.getSpecificUser,{method:"GET",credentials:"include"}).then(e=>e.json()).catch(e=>e)}getArticles(){return fetch(this._routes.getArticles,{method:"GET",credentials:"include"}).then(e=>e.json()).catch(e=>console.log(e))}createArticle(e){const{keyword:t,title:s,text:i,source:n,image:r,link:o,date:c}=e;return fetch(this._routes.createArticle,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:t,title:s,text:i,source:n,image:r,link:o,date:c})}).then(e=>e.json()).catch(e=>console.log(e))}removeArticle(e){return fetch(`${this._routes.deleteArticle}/${e}`,{method:"DELETE",credentials:"include"}).then(e=>e.json()).catch(e=>console.log(e))}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));s(10);var i=s(1),n=s(2);class r extends i.a{constructor(e){super();const{container:t,results:s,searchResultsProcess:i,searchNoResults:n,searchError:r,selectors:o}=e;this._container=t,this._results=s,this._searchResultsProcess=i,this._searchNoResults=n,this._searchError=r,this._selectors=o,this._cards=[],this._showMore=this._showMore.bind(this)}_renderTemplate(e){this._reset(),this._container.innerHTML="",this._container.appendChild(e.cloneNode(!0).content)}_showNewsCardList(){this._container.classList.remove("search-results_hidden")}hideNewsCardList(){this._container.classList.add("search-results_hidden")}renderLoader(){this._showNewsCardList(),this._renderTemplate(this._searchResultsProcess)}renderError(){this._renderTemplate(this._searchError)}renderResults(){this._showNewsCardList(),this._renderTemplate(this._results),this._resultsContainer=this._container.querySelector(this._selectors.items),this._showMoreButton=this._container.querySelector(".search-results__show-more"),this._setHandlers([{element:this._showMoreButton,event:"click",method:this._showMore}]),this._showMore()}_showMore(){if(this._dependencies.articlesList){let e=!1;this._dependencies.auth&&(e=this._dependencies.auth.isSavedPage());this._dependencies.articlesList.getArticlesQuantity(e).forEach(e=>{this._addCard({...e,keyword:e.keyword||this._dependencies.articlesList.getPhrase()})}),this._dependencies.articlesList.someMore()||this._showMoreButton.classList.add("search-results__show-more_hidden")}}_addCard(e){if(this._dependencies.createArticleCard&&this._dependencies.cardOptions){const t={auth:this._dependencies.auth,mainApi:this._dependencies.mainApi,articlesList:this._dependencies.articlesList,savedStat:this._dependencies.savedStat},s=Object(n.a)({...this._dependencies.cardOptions,article:e,dependencies:t});this._resultsContainer.appendChild(s.getDomElement()),this._cards.push(s)}}renderNoResults(){this._renderTemplate(this._searchNoResults)}updateCardsViews(){this._cards.forEach(e=>e.updateView())}}},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);s(11);var i=s(0),n=s(2),r=s(3),o=s(4),c=s(5),a=s(6);s(12);var d=s(1);class h extends d.a{constructor(e){super(e);const{closeIcon:t,container:s,contentContainer:i,template:n}=e;this._closeIcon=t,this._container=s,this._contentContainer=i,this._template=n,this._handleKeydown=this._handleKeydown.bind(this),this._clearContent=this._clearContent.bind(this),this._popupLinkClick=this._popupLinkClick.bind(this),this.setContent=this.setContent.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}_setTemplate(){this._contentContainer.appendChild(this._template.cloneNode(!0).content)}_setEventListeners(){this._setHandlers([{element:this._closeIcon,event:"click",method:e=>this.close(e)},{element:document,event:"keydown",method:e=>this._handleKeydown(e)},{element:document,event:"mousedown",method:e=>this._handleKeydown(e)},{element:this._container.querySelector(".popup__link"),event:"click",method:this._popupLinkClick}])}_clearContent(){this._dependencies.form&&this._dependencies.form.close(),this._reset(),this._contentContainer.innerHTML=""}_handleKeydown(e){("Escape"===e.key||e.target.classList.contains("popup_opened"))&&this.close()}_popupLinkClick(){return!0}setContent(){this._setTemplate(),this._setEventListeners(),this._dependencies.form&&this._dependencies.form.addForm()}open(){this.setContent(),this._container.classList.add("popup_opened")}close(){this._clearContent(),this._container.classList.remove("popup_opened")}}s(13);class l extends d.a{constructor(e){super();const{formSelector:t,actionButtonSelector:s,inputSelectors:i=[]}=e;this._formSelector=t,this._actionButtonSelector=s,this._inputSelectors=i,this._submitForm=this._submitForm.bind(this)}_setEventListeners(){this._setHandlers([{element:this._form,event:"input",method:e=>{this[e.target.name]=e.target.value,this._validateForm()?this._actionButton.removeAttribute("disabled"):this._actionButton.setAttribute("disabled","true"),this._setServerError("")}},{element:this._form,event:"submit",method:e=>{this._setServerError(""),this._submitForm(e)}}])}_selectInputs(){this._inputs=this._inputSelectors.map(e=>this._form.querySelector(e))}_setForm(){this._form=document.querySelector(this._formSelector),this._formError=this._form.querySelector(".popup__form-error_server-error")}_setActionButton(){this._actionButton=document.querySelector(this._actionButtonSelector)}_setServerError(e){this._formError&&(this._formError.textContent=e)}_submitForm(e){e.preventDefault()}_validateForm(){let e=!0;return this._inputs.length&&this._inputs.forEach(t=>{t&&(e=e&&this._validateInputElement(t))}),e}_validateInputElement(e){return e.validity.valid}addForm(){this._setForm(),this._setActionButton(),this._setEventListeners(),this._selectInputs(),this._setServerError("")}close(){this._reset()}}s(14);var u=s(7);const _=new class extends h{_popupLinkClick(){this._loadRegisterPopup()}_loadRegisterPopup(){this._dependencies.registrationPopup&&(this._clearContent(),this._dependencies.registrationPopup.setContent())}}({...i.g,template:i.d.template}),p=new class extends h{_popupLinkClick(){this._loadLoginPopup()}_loadLoginPopup(){this._dependencies.loginPopup&&(this._clearContent(),this._dependencies.loginPopup.setContent())}loadSuccessfulRegPopup(){this._dependencies.successfulRegistrationPopup&&(this._clearContent(),this._dependencies.successfulRegistrationPopup.setContent())}}({...i.g,template:i.h.template}),m=new class extends h{_popupLinkClick(){this._loadLoginPopup()}_loadLoginPopup(){this._dependencies.loginPopup&&(this._clearContent(),this._dependencies.loginPopup.setContent())}}({...i.g,...i.m}),g=new class extends l{_submitForm(e){if(e.preventDefault(),!this._validateForm())return void this._setServerError("Нужно ввести ключевое слово");const{newsApi:t,articlesList:s,newsCardList:i}=this._dependencies;t&&s&&i&&(i.renderLoader(),t.getNews(this.search).then(e=>{if(""===this.search)return i.hideNewsCardList(),void this._setServerError("Нужно ввести ключевое слово");s.updateArticles(e,this.search),s.hasArticles()?i.renderResults():i.renderNoResults()}).catch(()=>{s.updateArticles([]),i.renderError()}))}}({...i.k.form}),f=new class extends l{async _submitForm(e){if(e.preventDefault(),this._setServerError(""),this._dependencies.mainApi)try{const e=await this._dependencies.mainApi.signin({email:this.email,password:this.password});if(200!==e.status){const t=await e.json();throw new Error(t.message)}this._dependencies.auth&&await this._dependencies.auth.authenticate(),this.close(),this._dependencies.popup&&this._dependencies.popup.close()}catch(e){this._setServerError("Неправильное имя пользователя или пароль")}}}({...i.d.form}),w=new class extends l{async _submitForm(e){if(e.preventDefault(),this._setServerError(""),this._dependencies.mainApi)try{const e=await this._dependencies.mainApi.signup({email:this.email,password:this.password,name:this.name});if(200!==e.status){const t=await e.json();throw new Error(t.message)}this._dependencies.popup&&this._dependencies.popup.loadSuccessfulRegPopup()}catch(e){this._setServerError("Такой пользователь уже зарегистрирован!")}}}({...i.h.form}),y=new o.a({...i.a}),S=new u.a({container:i.l.container,...i.l.templates,selectors:i.l.selectors}),k=new r.a({...i.c,theme:"light"}),v=new a.a(i.e),L=new class{constructor(e,t){this._apiSettings=e,this._dependencies=t,this.getNews=this.getNews.bind(this)}getNews(e){const{url:t,sortBy:s,pageSize:i,apiKey:n}=this._apiSettings,{getFromDate:r,getToDate:o}=this._dependencies,c=r(),a=o();return fetch(`${t}?q=${e}&from=${c}&to=${a}&sortBy=${s}&pageSize=${i}&apiKey=${n}`).then(e=>e.json()).then(e=>e.articles.map(e=>{const t={};return t.source=e.source.name,t._id=e._id,t.title=e.title,t.date=e.publishedAt,t.link=e.url,t.keyword=e.keyword,t.image=e.urlToImage||"",t.text=e.description||"Нет описания :(",t})).catch(e=>new Error(e.message))}}(i.f,{getFromDate:n.b,getToDate:n.c,articlesList:y}),A=new c.a;_.setDependencies({registrationPopup:p,form:f}),p.setDependencies({loginPopup:_,successfulRegistrationPopup:m,mainApi:v,form:w}),m.setDependencies({loginPopup:_}),A.setDependencies({mainApi:v,header:k,newsCardList:S,articlesList:y}),k.setDependencies({loginPopup:_,auth:A}),g.setDependencies({newsApi:L,articlesList:y,newsCardList:S}),f.setDependencies({mainApi:v,auth:A,popup:_}),w.setDependencies({mainApi:v,popup:p}),S.setDependencies({mainApi:v,articlesList:y,createArticleCard:n.a,cardOptions:i.b,auth:A}),g.addForm(),A.authenticate()}]);