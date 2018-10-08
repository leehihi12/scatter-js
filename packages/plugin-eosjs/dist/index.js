"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_scatterjsCore=require("scatterjs-core"),proxy=function(a,b){return new Proxy(a,b)},cache={},ScatterEOS=/*#__PURE__*/function(a){function b(){return(0,_classCallCheck2.default)(this,b),(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(b).call(this,_scatterjsCore.Blockchains.EOS,_scatterjsCore.PluginTypes.BLOCKCHAIN_SUPPORT))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"hookProvider",value:function b(a){return function(b){return new Promise(function(c){var d=Object.assign(b,{blockchain:_scatterjsCore.Blockchains.EOS,network:a,requiredFields:{}});_scatterjsCore.SocketService.sendApiRequest({type:"requestSignature",payload:d}).then(function(a){return c(a.signatures)})})}}},{key:"signatureProvider",value:function b(){var a=0>=arguments.length?void 0:arguments[0];// Protocol will be deprecated.
return function(b,c){var d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(b=_scatterjsCore.Network.fromJson(b),!b.isValid())throw Error.noNetwork();var e="".concat(b.protocol,"://").concat(b.hostport()),f=b.hasOwnProperty("chainId")&&b.chainId.length?b.chainId:d.chainId;// The proxy stands between the eosjs object and scatter.
// This is used to add special functionality like adding `requiredFields` arrays to transactions
return proxy(c({httpEndpoint:e,chainId:f}),{get:function j(g,h){var i=null;return function(){for(var g=arguments.length,j=Array(g),k=0;k<g;k++)j[k]=arguments[k];if(j.find(function(a){return a.hasOwnProperty("keyProvider")}))throw Error.usedKeyProvider();// The signature provider which gets elevated into the user's Scatter
var l=/*#__PURE__*/function(){var c=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function c(d){var e,f,g,h;return _regenerator.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return a(),e=j.find(function(a){return a.hasOwnProperty("requiredFields")})||{requiredFields:{}},f=Object.assign(d,{blockchain:_scatterjsCore.Blockchains.EOS,network:b,requiredFields:e.requiredFields}),c.next=5,_scatterjsCore.SocketService.sendApiRequest({type:"requestSignature",payload:f});case 5:if(g=c.sent,g){c.next=8;break}return c.abrupt("return",null);case 8:if(!g.hasOwnProperty("signatures")){c.next=13;break}return i=g.returnedFields,h=j.find(function(a){return a.hasOwnProperty("signProvider")}),h&&g.signatures.push(h.signProvider(d.buf,d.sign)),c.abrupt("return",g.signatures);case 13:return c.abrupt("return",g);case 14:case"end":return c.stop();}},c,this)}));return function(){return c.apply(this,arguments)}}();return new Promise(function(a,b){var g,k=function(){var a=JSON.stringify(Object.assign(d,{httpEndpoint:e,chainId:f}));return cache.hasOwnProperty(a)||(cache[a]=c(Object.assign(d,{httpEndpoint:e,signProvider:l,chainId:f}))),cache[a]},m=k();(g=k())[h].apply(g,j).then(function(b){// Standard method ( ie. not contract )
if(!b.hasOwnProperty("fc"))return b=Object.assign(b,{returnedFields:i}),void a(b);// Catching chained promise methods ( contract .then action )
var c=proxy(b,{get:function c(a,b){return"then"===b?a[b]:function(){for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return new Promise(/*#__PURE__*/function(){var c=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function c(e,f){return _regenerator.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:a[b].apply(a,d).then(function(a){e(Object.assign(a,{returnedFields:i}))}).catch(f);case 1:case"end":return c.stop();}},c,this)}));return function(){return c.apply(this,arguments)}}())}}});a(c)}).catch(function(a){return b(a)})})}}});// Proxy
}}}]),b}(_scatterjsCore.Plugin);exports.default=ScatterEOS,"undefined"!=typeof window&&(window.ScatterEOS=ScatterEOS);