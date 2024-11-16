import './polyfills.server.mjs';
import{A as G,B as s,C as r,D as l,E as a,G as X,H as $,L as J,O as N,P as Q,S as ee,Y as D,a as U,b as C,c as W,d as f,e as F,f as _,g as x,h as I,i as b,j as m,k as h,l as B,m as V,n as M,o as L,p as k,q as u,r as K,s as A,t as Z,u as g,v as q,w as z,x as T,y as H,z as Y}from"./chunk-ZGH2J75I.mjs";import{a as j}from"./chunk-VVCT4QZE.mjs";var ce=[],te=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=g({type:t})}static{this.\u0275inj=u({imports:[D.forRoot(ce),D]})}}return t})();var y="Service workers are disabled or not supported by this browser";function le(t){return _(()=>W(new Error(t)))}var E=class{constructor(i){if(this.serviceWorker=i,!i)this.worker=this.events=this.registration=le(y);else{let n=x(i,"controllerchange").pipe(f(()=>i.controller)),o=_(()=>C(i.controller)),p=F(o,n);this.worker=p.pipe(m(v=>!!v)),this.registration=this.worker.pipe(M(()=>i.getRegistration()));let R=x(i,"message").pipe(f(v=>v.data)).pipe(m(v=>v&&v.type)).pipe(V());R.connect(),this.events=R}}postMessage(i,e){return this.worker.pipe(h(1),L(n=>{n.postMessage(j({action:i},e))})).toPromise().then(()=>{})}postMessageWithOperation(i,e,n){let o=this.waitForOperationCompleted(n),p=this.postMessage(i,e);return Promise.all([p,o]).then(([,c])=>c)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(i){let e;return typeof i=="string"?e=n=>n.type===i:e=n=>i.includes(n.type),this.events.pipe(m(e))}nextEventOfType(i){return this.eventsOfType(i).pipe(h(1))}waitForOperationCompleted(i){return this.eventsOfType("OPERATION_COMPLETED").pipe(m(e=>e.nonce===i),h(1),f(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},oe=(()=>{class t{get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,this.pushManager=null,this.subscriptionChanges=new U,!e.isEnabled){this.messages=b,this.notificationClicks=b,this.subscription=b;return}this.messages=this.sw.eventsOfType("PUSH").pipe(f(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(f(o=>o.data)),this.pushManager=this.sw.registration.pipe(f(o=>o.pushManager));let n=this.pushManager.pipe(M(o=>o.getSubscription()));this.subscription=I(n,this.subscriptionChanges)}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(y));let n={userVisibleOnly:!0},o=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),p=new Uint8Array(new ArrayBuffer(o.length));for(let c=0;c<o.length;c++)p[c]=o.charCodeAt(c);return n.applicationServerKey=p,this.pushManager.pipe(M(c=>c.subscribe(n)),h(1)).toPromise().then(c=>(this.subscriptionChanges.next(c),c))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(y));let e=n=>{if(n===null)throw new Error("Not subscribed to push notifications.");return n.unsubscribe().then(o=>{if(!o)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(h(1),M(e)).toPromise()}decodeBase64(e){return atob(e)}static{this.\u0275fac=function(n){return new(n||t)(A(E))}}static{this.\u0275prov=k({token:t,factory:t.\u0275fac})}}return t})(),P=(()=>{class t{get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=b,this.unrecoverable=b;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(y));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(y));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static{this.\u0275fac=function(n){return new(n||t)(A(E))}}static{this.\u0275prov=k({token:t,factory:t.\u0275fac})}}return t})();var ne=new K("");function pe(t,i,e,n){return()=>{if(!(N(n)&&"serviceWorker"in navigator&&e.enabled!==!1))return;navigator.serviceWorker.addEventListener("controllerchange",()=>{navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})});let o;if(typeof e.registrationStrategy=="function")o=e.registrationStrategy();else{let[c,...d]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(c){case"registerImmediately":o=C(null);break;case"registerWithDelay":o=re(+d[0]||0);break;case"registerWhenStable":o=d[0]?I(ie(t),re(+d[0])):ie(t);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`)}}t.get(G).runOutsideAngular(()=>o.pipe(h(1)).subscribe(()=>navigator.serviceWorker.register(i,{scope:e.scope}).catch(c=>console.error("Service worker registration failed with:",c))))}}function re(t){return C(null).pipe(B(t))}function ie(t){return t.get($).isStable.pipe(m(e=>e))}function de(t,i){return new E(N(i)&&t.enabled!==!1?navigator.serviceWorker:void 0)}var w=class{};function me(t,i={}){return q([oe,P,{provide:ne,useValue:t},{provide:w,useValue:i},{provide:E,useFactory:de,deps:[w,T]},{provide:X,useFactory:pe,deps:[z,ne,w,T],multi:!0}])}var se=(()=>{class t{static register(e,n={}){return{ngModule:t,providers:[me(e,n)]}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=g({type:t})}static{this.\u0275inj=u({providers:[oe,P]})}}return t})();var S=(()=>{class t{constructor(e){this.swUpdate=e}ngOnInit(){this.isBrowser()&&(this.registrarServiceWorker(),this.verificarActualizaciones(),this.configurarPushNotifications())}isBrowser(){return typeof window<"u"&&typeof navigator<"u"}registrarServiceWorker(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/ngsw-worker.js").then(e=>console.log("Service Worker registrado:",e)).catch(e=>console.error("Error al registrar el Service Worker:",e))}verificarActualizaciones(){this.swUpdate.isEnabled&&this.swUpdate.versionUpdates.pipe(m(e=>e.type==="VERSION_READY")).subscribe(()=>{confirm("Hay una nueva versi\xF3n disponible. \xBFDesea cargarla?")&&window.location.reload()})}configurarPushNotifications(){"PushManager"in window&&navigator.serviceWorker.ready.then(e=>{e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:this.urlBase64ToUint8Array("YOUR_PUBLIC_VAPID_KEY")}).then(n=>{console.log("Suscrito a notificaciones push:",n)}).catch(n=>{console.error("Error al suscribirse a notificaciones push:",n)})})}urlBase64ToUint8Array(e){let n="=".repeat((4-e.length%4)%4),o=(e+n).replace(/\-/g,"+").replace(/_/g,"/"),p=window.atob(o),c=new Uint8Array(p.length);for(let d=0;d<p.length;++d)c[d]=p.charCodeAt(d);return c}static{this.\u0275fac=function(n){return new(n||t)(Y(P))}}static{this.\u0275cmp=Z({type:t,selectors:[["app-root"]],decls:76,vars:0,consts:[["lang","es"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["rel","stylesheet","href",H`https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css`],[1,"container"],[1,"d-flex","justify-content-between","align-items-center","py-3"],[1,"text-primary"],[1,"nav"],[1,"nav-item"],["href","#inicio",1,"nav-link"],["href","#acerca",1,"nav-link"],["href","#servicios",1,"nav-link"],["href","#contacto",1,"nav-link"],["id","inicio",1,"mb-5"],[1,"banner-image","img-fluid"],["id","acerca",1,"mb-5"],[1,"highlight"],[1,"team-image","img-fluid"],["id","servicios",1,"mb-5"],[1,"row"],[1,"col-md-4","text-center"],[1,"service-image","service1","img-fluid","mb-3"],[1,"service-image","service2","img-fluid","mb-3"],[1,"service-image","service3","img-fluid","mb-3"],["id","contacto",1,"mb-5"],[1,"form-group"],["for","nombre"],["type","text","id","nombre","name","nombre","required","",1,"form-control"],["for","email"],["type","email","id","email","name","email","required","",1,"form-control"],["for","mensaje"],["id","mensaje","name","mensaje","rows","4","required","",1,"form-control"],["type","submit",1,"btn","btn-primary"],[1,"contact-image","img-fluid","mt-4"],[1,"text-center","py-4"]],template:function(n,o){n&1&&(s(0,"html",0)(1,"head"),l(2,"meta",1)(3,"meta",2),s(4,"title"),a(5,"ARODI INC"),r(),l(6,"link",3),r(),s(7,"body")(8,"div",4)(9,"header",5)(10,"h1",6),a(11,"ARODI INC"),r(),s(12,"nav")(13,"ul",7)(14,"li",8)(15,"a",9),a(16,"Inicio"),r()(),s(17,"li",8)(18,"a",10),a(19,"Acerca de"),r()(),s(20,"li",8)(21,"a",11),a(22,"Servicios"),r()(),s(23,"li",8)(24,"a",12),a(25,"Contacto"),r()()()()(),s(26,"main")(27,"section",13),l(28,"div",14),r(),s(29,"section",15)(30,"h2"),a(31,"Acerca de nosotros"),r(),s(32,"p"),a(33,"Somos una empresa dedicada a proporcionar "),s(34,"span",16),a(35,"soluciones innovadoras"),r(),a(36,"."),r(),l(37,"div",17),r(),s(38,"section",18)(39,"h2"),a(40,"Nuestros servicios"),r(),s(41,"div",19)(42,"div",20),l(43,"div",21),s(44,"p"),a(45,"Desarrollo M\xF3vil"),r()(),s(46,"div",20),l(47,"div",22),s(48,"p"),a(49,"Desarrollo Web"),r()(),s(50,"div",20),l(51,"div",23),s(52,"p"),a(53,"Asesor\xEDas de Programaci\xF3n"),r()()()(),s(54,"section",24)(55,"h2"),a(56,"Contacto"),r(),s(57,"form")(58,"div",25)(59,"label",26),a(60,"Nombre:"),r(),l(61,"input",27),r(),s(62,"div",25)(63,"label",28),a(64,"Email:"),r(),l(65,"input",29),r(),s(66,"div",25)(67,"label",30),a(68,"Mensaje:"),r(),l(69,"textarea",31),r(),s(70,"button",32),a(71,"Enviar"),r()(),l(72,"div",33),r()(),s(73,"footer",34)(74,"p"),a(75,"\xA9 2024 Mi P\xE1gina Web. Todos los derechos reservados."),r()()()()())},styles:['body[_ngcontent-%COMP%]{background-color:#121212;color:#fff;font-family:Arial,sans-serif}.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px}header[_ngcontent-%COMP%]{text-align:center;padding:20px 0}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline;margin:0 15px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;transition:color .3s ease}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:tomato}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn 2s ease-in-out}.welcome-image[_ngcontent-%COMP%], .team-image[_ngcontent-%COMP%], .service-image[_ngcontent-%COMP%], .contact-image[_ngcontent-%COMP%]{width:100%;height:200px;background-size:cover;background-position:center;animation:_ngcontent-%COMP%_fadeIn 2s ease-in-out}.service-image.service1[_ngcontent-%COMP%]{background-image:url("./media/service1-K5D6LS5J.jpg")}.service-image.service2[_ngcontent-%COMP%]{background-image:url("./media/service2-B6BFTXHM.jpg")}.service-image.service3[_ngcontent-%COMP%]{background-image:url("./media/service3-IIDSDXSC.jpg")}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-top:10px}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:10px;margin-top:5px;border:none;border-radius:5px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;padding:10px;background-color:tomato;color:#fff;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#ff4500}footer[_ngcontent-%COMP%]{text-align:center;padding:20px 0}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}']})}}return t})();var ae=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=g({type:t,bootstrap:[S]})}static{this.\u0275inj=u({imports:[Q,te,se.register("ngsw-worker.js",{enabled:!J(),registrationStrategy:"registerWhenStable:30000"})]})}}return t})();var ge=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=g({type:t,bootstrap:[S]})}static{this.\u0275inj=u({imports:[ae,ee]})}}return t})();export{ge as a};