import{i as r}from"./vue-demi.b3a9cad9.js";import{e as u,r as p,m as l}from"./@vue.7a2ae99d.js";/*!
  * pinia v2.0.10
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const f=Symbol();var i;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(i||(i={}));function d(){const e=u(!0),o=e.run(()=>p({}));let s=[],c=[];const a=l({install(t){a._a=t,t.provide(f,a),t.config.globalProperties.$pinia=a,c.forEach(n=>s.push(n)),c=[]},use(t){return!this._a&&!r?c.push(t):s.push(t),this},_p:s,_a:null,_e:e,_s:new Map,state:o});return a}export{d as c};
