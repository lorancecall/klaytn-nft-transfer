(function(){"use strict";var t={2290:function(t,e,n){var a=n(9242),o=n(3396);function r(t,e){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var l=n(89);const s={},c=(0,l.Z)(s,[["render",r]]);var u=c,d=n(678);const i=t=>((0,o.dD)("data-v-8dd49566"),t=t(),(0,o.Cn)(),t),p=i((()=>(0,o._)("div",{class:"title"},[(0,o._)("h1",null,"Klaytn NFT transfer")],-1))),v={class:"home"},m=i((()=>(0,o._)("div",{class:"alert-content"},[(0,o._)("p",null,"Kaikas is not installed")],-1)));function f(t,e,n,a,r,l){const s=(0,o.up)("modal-comp"),c=(0,o.up)("alert-comp");return(0,o.wg)(),(0,o.iD)("div",null,[p,(0,o._)("div",v,[(0,o.Wm)(s,{onClose:a.toggleModal,modalActive:a.modalActive},null,8,["onClose","modalActive"]),(0,o.Wm)(c,{onCloseAlert:a.toggleAlert,alertActive:a.alertActive},{default:(0,o.w5)((()=>[m])),_:1},8,["onCloseAlert","alertActive"]),(0,o._)("button",{onClick:e[0]||(e[0]=(...t)=>a.connect&&a.connect(...t)),type:"button"},"Connect Wallet")])])}var y=n(7139);const _=t=>((0,o.dD)("data-v-fe013dc4"),t=t(),(0,o.Cn)(),t),b={class:"modal"},w={class:"modal-inner"},A=_((()=>(0,o._)("h1",null,"NFT transfer",-1))),k={class:"modal-content"},I=_((()=>(0,o._)("b",null,"connected wallet",-1)));function g(t,e,n,r,l,s){const c=(0,o.up)("custom-form");return(0,o.wg)(),(0,o.j4)(a.uT,{name:"modal-animation"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",b,[(0,o.Wm)(a.uT,{name:"model-animation-inner"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",w,[(0,o._)("i",{onClick:e[0]||(e[0]=(...t)=>r.close&&r.close(...t)),class:"fa-regular fa-circle-xmark"}),A,(0,o._)("div",k,[(0,o.wy)((0,o._)("div",null,[I,(0,o.Uk)(": "+(0,y.zw)(t.$store.state.addresses),1)],512),[[a.F8,null!==t.$store.state.klaytn]]),(0,o.Wm)(c,{contractId:r.contractId,"onUpdate:contractId":e[1]||(e[1]=t=>r.contractId=t),tokenId:r.tokenId,"onUpdate:tokenId":e[2]||(e[2]=t=>r.tokenId=t),toAddress:r.toAddress,"onUpdate:toAddress":e[3]||(e[3]=t=>r.toAddress=t)},null,8,["contractId","tokenId","toAddress"])]),(0,o._)("button",{onClick:e[4]||(e[4]=(...t)=>r.close&&r.close(...t)),type:"button"},"Close"),(0,o._)("button",{onClick:e[5]||(e[5]=(...t)=>r.sendTx&&r.sendTx(...t)),type:"button"},"Send")],512),[[a.F8,n.modalActive]])])),_:1})],512),[[a.F8,n.modalActive]])])),_:1})}var C=n(4870);const h=t=>((0,o.dD)("data-v-f9a09e30"),t=t(),(0,o.Cn)(),t),T=h((()=>(0,o._)("label",null," NFT Contract Address ",-1))),O=["value"],x=h((()=>(0,o._)("label",null," Token ID ",-1))),F=["value"],j=h((()=>(0,o._)("label",null," To Address ",-1))),M=["value"];function W(t,e,n,a,r,l){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("p",null,[T,(0,o._)("input",{type:"text",value:n.contractId,placeholder:"Contract id",onInput:e[0]||(e[0]=e=>t.$emit("update:contractId",e.target.value)),pattern:"0x.{40}"},null,40,O)]),(0,o._)("p",null,[x,(0,o._)("input",{type:"text",value:n.tokenId,placeholder:"Token id",onInput:e[1]||(e[1]=e=>t.$emit("update:tokenId",e.target.value)),pattern:"\\d+"},null,40,F)]),(0,o._)("p",null,[j,(0,o._)("input",{type:"text",value:n.toAddress,placeholder:"To address",onInput:e[2]||(e[2]=e=>t.$emit("update:toAddress",e.target.value)),pattern:"0x.{40}"},null,40,M)])])}var D={props:{contractId:String,tokenId:String,toAddress:String}};const H=(0,l.Z)(D,[["render",W],["__scopeId","data-v-f9a09e30"]]);var N=H,$=n(65),S={components:{CustomForm:N},props:{modalActive:Boolean},setup(t,{emit:e}){const n=(0,C.iH)(""),a=(0,C.iH)(""),o=(0,C.iH)(""),r=(0,$.oR)(),l=()=>{e("close")},s=async()=>{const t=r.state.caver.rpc.klay,e=r.state.addresses[0],l=r.state.caver.abi.encodeFunctionCall({constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},[e,o.value,a.value]),s=await t.sendTransaction({type:"SMART_CONTRACT_EXECUTION",from:e,to:n.value,data:l,gas:3e5,value:0});return s};return{contractId:n,tokenId:a,toAddress:o,close:l,sendTx:s}}};const U=(0,l.Z)(S,[["render",g],["__scopeId","data-v-fe013dc4"]]);var Z=U;const E={class:"alert"},R={class:"alert-inner"},K={class:"alert-inner-button"};function P(t,e,n,r,l,s){return(0,o.wg)(),(0,o.j4)(a.uT,{name:"alert-animation"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",E,[(0,o.Wm)(a.uT,{name:"alert-animation-inner"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",R,[(0,o._)("i",{onClick:e[0]||(e[0]=(...t)=>r.closeAlert&&r.closeAlert(...t)),class:"fa-regular fa-circle-xmark"}),(0,o.WI)(t.$slots,"default",{},void 0,!0),(0,o._)("div",K,[(0,o._)("button",{onClick:e[1]||(e[1]=(...t)=>r.closeAlert&&r.closeAlert(...t)),type:"button"},"Close")])],512),[[a.F8,n.alertActive]])])),_:3})],512),[[a.F8,n.alertActive]])])),_:3})}var B={props:{alertActive:Boolean},setup(t,{emit:e}){const n=()=>{e("closeAlert")};return{closeAlert:n}}};const z=(0,l.Z)(B,[["render",P],["__scopeId","data-v-072470e3"]]);var V=z,X={name:"HomeView",components:{ModalComp:Z,AlertComp:V},setup(){const t=(0,$.oR)(),e=(0,C.iH)(!1),n=(0,C.iH)(!1),a=async()=>{t.commit("connectWallet"),null!==t.state.klaytn?o():r()},o=()=>{e.value=!e.value},r=()=>{n.value=!n.value};return{modalActive:e,alertActive:n,toggleModal:o,toggleAlert:r,connect:a}}};const q=(0,l.Z)(X,[["render",f],["__scopeId","data-v-8dd49566"]]);var G=q;const J=[{path:"/",name:"home",component:G}],L=(0,d.p7)({history:(0,d.PO)("/"),routes:J});var Q=L;n(1703);const Y=(0,$.MT)({state(){return{klaytn:null,addresses:null,caver:null,abi:[{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"amount",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"}]}},mutations:{async connectWallet(t){if(void 0===window.klaytn)throw new Error("Kaikas Not Installed!");t.klaytn=window.klaytn,t.addresses=await t.klaytn.enable().catch((t=>(console.error(t),null))),t.caver=window.caver}}});var tt=Y;(0,a.ri)(u).use(tt).use(Q).mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var l=1/0;for(d=0;d<t.length;d++){a=t[d][0],o=t[d][1],r=t[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||l>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(s=!1,r<l&&(l=r));if(s){t.splice(d--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[a,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,l=a[0],s=a[1],c=a[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var d=c(n)}for(e&&e(a);u<l.length;u++)r=l[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(d)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2290)}));a=n.O(a)})();
//# sourceMappingURL=app.813aed2d.js.map