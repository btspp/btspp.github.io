!function n(s,r,c){function d(i,t){if(!r[i]){if(!s[i]){var e="function"==typeof require&&require;if(!t&&e)return e(i,!0);if(l)return l(i,!0);var o=new Error("Cannot find module '"+i+"'");throw o.code="MODULE_NOT_FOUND",o}var a=r[i]={exports:{}};s[i][0].call(a.exports,function(t){var e=s[i][1][t];return d(e||t)},a,a.exports,n,s,r,c)}return r[i].exports}for(var l="function"==typeof require&&require,t=0;t<c.length;t++)d(c[t]);return d}({1:[function(t,e,i){var o,a,n,s,r,c,d;d=t("./activity/oid.coffee"),c=t("./activity/markets.coffee"),r=t("./activity/home.coffee"),s=t("./activity/explorer.coffee"),n=t("./activity/exchange.coffee"),a=t("./activity/block.coffee"),o={_hash:{base:t("./activity/base.coffee"),block:a,exchange:n,explorer:s,home:r,markets:c,oid:d},getActivityClass:function(t){return this._hash[t]}},e.exports=o},{"./activity/base.coffee":3,"./activity/block.coffee":4,"./activity/exchange.coffee":5,"./activity/explorer.coffee":6,"./activity/home.coffee":7,"./activity/markets.coffee":8,"./activity/oid.coffee":9}],2:[function(t,e,i){var s,o;s=t("./activityHash.coffee"),o={goto:function(t){var e,i,o,a,n;utils.isBlockViewShowing()||(console.log(t),n=t.activity,(i=s.getActivityClass(n))?(o=e,e=a=new i,a.viewDidLoad(t),o&&o.viewWillDisappear(t),a.viewWillAppear(t),a.render(t),a.viewDidAppear(t),o&&o.viewDidDisappear(t)):$("#page-content").html("404! no module."))},push:function(t){},pop:function(t){},_curr_activity:null},e.exports=o},{"./activityHash.coffee":1}],3:[function(t,e,i){var o;function a(){}a.prototype.viewDidLoad=function(t){},a.prototype.viewWillAppear=function(t){},a.prototype.viewDidAppear=function(t){},a.prototype.viewWillDisappear=function(t){},a.prototype.viewDidDisappear=function(t){},a.prototype.render=function(t){var e;(e=templateMgr.getView(t.activity))?$("#page-content").html(e()):$("#page-content").html("404! no render.")},o=a,e.exports=o},{}],4:[function(t,e,i){var o,a={}.hasOwnProperty;function n(){return n.__super__.constructor.apply(this,arguments)}(function(t,e){for(var i in e)a.call(e,i)&&(t[i]=e[i]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype})(n,t("./base.coffee")),o=n,e.exports=o},{"./base.coffee":3}],5:[function(t,e,i){var o,a={}.hasOwnProperty;function n(){return n.__super__.constructor.apply(this,arguments)}(function(t,e){for(var i in e)a.call(e,i)&&(t[i]=e[i]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype})(n,t("./base.coffee")),o=n,e.exports=o},{"./base.coffee":3}],6:[function(t,e,i){var o,a={}.hasOwnProperty;function n(){return n.__super__.constructor.apply(this,arguments)}(function(t,e){for(var i in e)a.call(e,i)&&(t[i]=e[i]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype})(n,t("./base.coffee")),o=n,e.exports=o},{"./base.coffee":3}],7:[function(t,e,i){var o,a={}.hasOwnProperty;function n(){return n.__super__.constructor.apply(this,arguments)}(function(t,e){for(var i in e)a.call(e,i)&&(t[i]=e[i]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype})(n,t("./base.coffee")),o=n,e.exports=o},{"./base.coffee":3}],8:[function(t,e,i){var o,a={}.hasOwnProperty;function n(){return n.__super__.constructor.apply(this,arguments)}(function(t,e){for(var i in e)a.call(e,i)&&(t[i]=e[i]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype})(n,t("./base.coffee")),o=n,e.exports=o},{"./base.coffee":3}],9:[function(t,e,i){var o,a={}.hasOwnProperty;function n(){return n.__super__.constructor.apply(this,arguments)}(function(t,e){for(var i in e)a.call(e,i)&&(t[i]=e[i]);function o(){this.constructor=t}o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype})(n,t("./base.coffee")),n.prototype.viewDidAppear=function(t){var e,i,c,o;utils.showBlockView("查询中..."),c=t.args[1]||"2.1.0",e=window.bitshares_js.bitshares_ws.Apis,(i={})[""+c]=!0,o=i,e.instance().db_api().exec("get_objects",[[c]]).then(function(s){var r;return r=s[0],e.instance().db_api().exec("get_objects",[utils.parseAssetAndAccountOids(r,o)]).then(function(t){var e,i,o,a,n;for(utils.hideBlockView(),a={},e=0,i=t.length;e<i;e++)a[(n=t[e]).id]=n.name||n.symbol;return utils.isAssetOrAccountOid(c)&&(o=r.name||r.symbol)&&(a[r.id]=o),$("#block-view-origin-data").JSONView(s[0],{collapsed:!1,oidmemos:a})})})},o=n,e.exports=o},{"./base.coffee":3}],10:[function(t,e,i){var a,o;function n(){}console.log("app started "+window.location.href),t("./extension.coffee"),window.utils=t("./utils.coffee"),window.templateMgr=t("./template/templateMgr.coffee"),window.activityMgr=o=t("./activityMgr.coffee"),n.prototype.initialize=function(e){window.bitshares_js.bitshares_ws.Apis.instance("wss://api.weaccount.cn",!0).init_promise.then(function(t){return console.log(t[0].network),e()})},n.prototype.onHashChange=function(){o.goto(this._getLocationHash())},n.prototype._getLocationHash=function(){var t,e,i,o,a,n;return(a=(o=window.location.href).indexOf("#"))<0?{activity:"home",hash:"",args:{}}:{activity:(t=(e=0<=(n=(e=o.slice(a+1)).indexOf("?"))?decodeURI(e.slice(0,n))+e.slice(n):0<=(i=e.indexOf("#"))?decodeURI(e.slice(0,i))+e.slice(i):decodeURI(e)).replace(/\\/g,"/").split("/").filter(function(t){return""!==t})).first()||"home",hash:e=t.join("/"),args:t}},a=n,function(){var t,e,i,o;t=function(){window.app||(window.app=new a,app.initialize(function(){return app.onHashChange()}))},e=function(){t()},o=function(){console.log("load: "+location.hash)},i=function(){app.onHashChange()},window.addEventListener("load",o.bind(this),!1),window.addEventListener("pageshow",e.bind(this),!1),window.addEventListener("hashchange",i.bind(this),!1)}()},{"./activityMgr.coffee":2,"./extension.coffee":11,"./template/templateMgr.coffee":15,"./utils.coffee":23}],11:[function(t,e,i){var c,o;String.prototype.padLeft=function(t,e){return this.length>=t?this:Array(t-this.length+1).join(e||"0")+this},Array.prototype.delete=function(t){var e;0<=(e=this.indexOf(t))&&this.splice(e,1)},Array.prototype.delete_at=function(t){this.splice(t,1)},Array.prototype.insert=function(t,e){this.splice(t+1,0,e)},Array.prototype.insert_before=function(t,e){this.splice(t,0,e)},Array.prototype.first=function(){return this[0]},Array.prototype.last=function(){var t;if(0!==(t=this.length))return this[t-1]},Array.prototype.asc_sort=function(a){this.sort(function(t,e){var i,o;return(i=a(t))===(o=a(e))?0:o<i?1:-1})},Array.prototype.des_sort=function(a){this.sort(function(t,e){var i,o;return(i=a(t))===(o=a(e))?0:o<i?-1:1})},Array.prototype.asc_sort_by=function(a){this.sort(function(t,e){var i,o;return(i=t[a])===(o=e[a])?0:o<i?1:-1})},Array.prototype.des_sort_by=function(a){this.sort(function(t,e){var i,o;return(i=t[a])===(o=e[a])?0:o<i?-1:1})},o=function(t){var e,i,o,a,n,s,r;if(null==t||"object"!=typeof t)return t;if(t instanceof Array){for(s=[],i=0,a=t.length;i<a;i++)r=t[i],s.push(r);return s}if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return e="",null!=t.global&&(e+="g"),null!=t.ignoreCase&&(e+="i"),null!=t.multiline&&(e+="m"),null!=t.sticky&&(e+="y"),new RegExp(t.source,e);for(o in n=new t.constructor,t)n[o]=t[o];return n},c=function(t){var e,i,o,a,n,s,r;if(null==t||"object"!=typeof t)return t;if(t instanceof Array){for(s=[],i=0,a=t.length;i<a;i++)r=t[i],s.push(c(r));return s}if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return e="",null!=t.global&&(e+="g"),null!=t.ignoreCase&&(e+="i"),null!=t.multiline&&(e+="m"),null!=t.sticky&&(e+="y"),new RegExp(t.source,e);for(o in n=new t.constructor,t)n[o]=c(t[o]);return n},window.f_createevent=function(e,i){var o;try{o=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0})}catch(t){t,(o=document.createEvent("Event")).initEvent(e,!0,!0),o.detail=i}return o},window.clone=function(t){return o(t)},window.deep_clone=function(t){return c(t)},window.json_deep_clone=function(t){return JSON.parse(JSON.stringify(t))}},{}],12:[function(t,e,i){e.exports=function(){var t=[];return t.push('<div id="bottom" style="padding: 40px;" class="bg-light"><div class="container"><div class="row"><div class="col-md-3"><img src="/images/logo.png" width="64"/></div><div class="col-md-9"><div class="row"><div class="col-md-4 color-white">关于我们</div><div class="col-md-4 color-white">开发者</div><div class="col-md-4 color-white">相关链接</div></div><div class="row"><a href="https://btspp.io" target="_blank" class="col-md-4">BTS++</a><div class="col-md-4">Bitshares 核心代码</div><a href="https://bitshares.org" target="_blank" class="col-md-4">BitShares 官网</a></div><div class="row"><div class="col-md-4">更新历史</div><div class="col-md-4">石墨烯技术文档</div><a href="https://bitsharestalk.org" target="_blank" class="col-md-4">官方论坛</a></div><div class="row"><div class="col-md-4">意见反馈</div><div class="col-md-4"></div><div class="col-md-4"></div></div></div></div></div></div>'),t.join("")}},{}],13:[function(t,e,i){e.exports=function(){var t=[];return t.push('<div id="top-block-view"><div id="top-block-view-mask"></div><div id="top-block-view-content"><div id="top-block-view-loading"><img src="/images/loading2.gif"/></div><div id="top-block-view-tips" class="mt10">正在初始化网络，请耐心等待...</div></div></div>'),t.join("")}},{}],14:[function(t,e,i){e.exports=function(){var t=[];return t.push('<nav class="navbar navbar-expand-lg navbar-light bg-light"><button type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button><div id="navbarTogglerDemo01" class="collapse navbar-collapse"><a href="#" class="navbar-brand">btspp.io</a><ul class="navbar-nav mr-auto mt-2 mt-lg-0"><li class="nav-item active"><a href="#" class="nav-link">首页 <span class="sr-only">(current)</span></a></li><li class="nav-item"><a href="/#/markets" class="nav-link">行情</a></li><li class="nav-item"><a href="/#/exchange" class="nav-link">交易</a></li><li class="nav-item"><a href="/#/explorer" class="nav-link">浏览器</a></li><li class="nav-item"><a href="https://bts.ai" target="_blank" class="nav-link">区块浏览器(临时)</a></li><li class="nav-item"><form class="form-inline my-2 my-lg-0"><input type="search" placeholder="搜索账号" aria-label="Search" class="form-control mr-sm-2"/><button type="submit" class="btn btn-outline-success my-2 my-sm-0">搜索</button></form></li></ul><button type="button" class="btn btn-primary">登录</button></div></nav>'),t.join("")}},{}],15:[function(t,e,i){var o;o={include:{_botnav:t("./include/_botnav.js"),_hidden:t("./include/_hidden.js"),_topnav:t("./include/_topnav.js")},getInclude:function(t){return this.include[t]},view:{about:t("./view/about.js"),block:t("./view/block.js"),exchange:t("./view/exchange.js"),explorer:t("./view/explorer.js"),home:t("./view/home.js"),markets:t("./view/markets.js"),oid:t("./view/oid.js")},getView:function(t){return this.view[t]}},e.exports=o},{"./include/_botnav.js":12,"./include/_hidden.js":13,"./include/_topnav.js":14,"./view/about.js":16,"./view/block.js":17,"./view/exchange.js":18,"./view/explorer.js":19,"./view/home.js":20,"./view/markets.js":21,"./view/oid.js":22}],16:[function(t,e,i){e.exports=function(){var t=[];return t.push("<p>hello about!</p>"),t.join("")}},{}],17:[function(t,e,i){e.exports=function(){var t=[];return t.push('<style>#block-view-origin-data {word-wrap: break-word;word-break: break-all;overflow: hidden}\n</style><div id="view-block" class="container mt-md-5"><div class="area"><div class="row"><div class="col-md-6"><div class="clearfix"><div class="fl"><span title="icon account-login" aria-hidden="true" class="banner-icon oi oi-account-login"></span></div><div class="fl ml20 mt10"><div class="clearfix"><div class="fl">区块：</div><div class="fl"><h3 style="margin-top: 0;" class="color-white">41669611</h3></div></div><div>2019-10-09 15:14:12</div></div></div></div><div class="col-md-6 rightText"><span>出块见证人：</span><a href="javascirpt:;" class="color-primary">in.abit</a></div></div></div><div class="area"><div class="row"><div class="col-md-12"><div class="clearfix"><div class="fl"><span title="icon account-login" aria-hidden="true" class="banner-icon oi oi-account-login"></span></div><div class="fl mt20 ml20"><span>交易列表</span></div></div></div></div><table class="table table-striped table-sm mt10"><thead><tr><th>类型</th><th>说明</th><th>Tx ID</th></tr></thead><tbody><tr><td>创建限价单</td><td>cryptobridge-marketmaker 提交卖单，以0.00000526 BRIDGE.BTC/BRIDGE.BCO的价格卖出 340.2994665 BRIDGE.BCO</td><td>4914ef4d0b042a51e6bb5fddeaf4a6b8ec55f2a8</td></tr><tr><td>创建限价单</td><td>cryptobridge-marketmaker 提交卖单，以0.00000526 BRIDGE.BTC/BRIDGE.BCO的价格卖出 340.2994665 BRIDGE.BCO</td><td>4914ef4d0b042a51e6bb5fddeaf4a6b8ec55f2a8</td></tr><tr><td>创建限价单</td><td>cryptobridge-marketmaker 提交卖单，以0.00000526 BRIDGE.BTC/BRIDGE.BCO的价格卖出 340.2994665 BRIDGE.BCO</td><td>4914ef4d0b042a51e6bb5fddeaf4a6b8ec55f2a8</td></tr><tr><td>创建限价单</td><td>cryptobridge-marketmaker 提交卖单，以0.00000526 BRIDGE.BTC/BRIDGE.BCO的价格卖出 340.2994665 BRIDGE.BCO</td><td>4914ef4d0b042a51e6bb5fddeaf4a6b8ec55f2a8</td></tr><tr><td>创建限价单</td><td>cryptobridge-marketmaker 提交卖单，以0.00000526 BRIDGE.BTC/BRIDGE.BCO的价格卖出 340.2994665 BRIDGE.BCO</td><td>4914ef4d0b042a51e6bb5fddeaf4a6b8ec55f2a8</td></tr><tr><td>创建限价单</td><td>cryptobridge-marketmaker 提交卖单，以0.00000526 BRIDGE.BTC/BRIDGE.BCO的价格卖出 340.2994665 BRIDGE.BCO</td><td>4914ef4d0b042a51e6bb5fddeaf4a6b8ec55f2a8</td></tr></tbody></table></div><div class="area"><div class="row"><div class="col-md-12"><div class="clearfix"><div class="fl"><span title="icon account-login" aria-hidden="true" class="banner-icon oi oi-account-login"></span></div><div class="fl mt20 ml20"><span>原始数据</span></div></div></div></div><div id="block-view-origin-data" class="mt20"></div></div></div><script>$(function(){\n\n  var json = {"origin_data":{"previous":"027bd3ea210e1c4ba65be8fe3bac8206cd60c385","timestamp":"2019-10-09T07:14:12","witness":"1.6.35","transaction_merkle_root":"768f9014ca5b9bbb1a67c4e1e0f048ad0299f8ad","extensions":[],"witness_signature":"200842b7666e1d40579bca19a26ab6f48b16a208a088387ac89fc02b1dce6d14800e3a5b4a96d2e5a5c09878f534a7ae4b670a5b024e5397a320b81d9060c17b83","transactions":[{"ref_block_num":54250,"ref_block_prefix":1260129825,"expiration":"2019-10-09T07:14:25","operations":[[2,{"fee":{"amount":252,"asset_id":"1.3.0"},"fee_paying_account":"1.2.1086492","order":"1.7.413053746","extensions":[]}]],"extensions":[],"signatures":["1f1748a10c8930f83064568b35620899fff36db3db1c78fb19db776c1ec06d471728575a562e9ce4384cbc99aeb662a7b33acbc22b419ec57640aaa9a7454bcdfe"],"operation_results":[[2,{"amount":2110134,"asset_id":"1.3.113"}]]},{"ref_block_num":54250,"ref_block_prefix":1260129825,"expiration":"2019-10-09T07:14:25","operations":[[2,{"fee":{"amount":252,"asset_id":"1.3.0"},"fee_paying_account":"1.2.1077806","order":"1.7.413053744","extensions":[]}]],"extensions":[],"signatures":["1f0fdd379c2e151dd55752d911093769ec61152e2d59391a7ea62cc00a509cddef6d88d668d47397e60dee9ba0a1d2a2e6ce5baa32a3c7f760a7f2e53b5d6fb6b7"],"operation_results":[[2,{"amount":131356797,"asset_id":"1.3.0"}]]},{"ref_block_num":54250,"ref_block_prefix":1260129825,"expiration":"2019-10-09T07:14:40","operations":[[2,{"fee":{"amount":252,"asset_id":"1.3.0"},"fee_paying_account":"1.2.979829","order":"1.7.413053700","extensions":[]}]],"extensions":[],"signatures":["1f20c9566f2ce0781ab103edb33a9a01dfca730d2e13983fd62369b3ad6043218b6b04949e70f375ed219deef63d362db23e3c54896e139e2396e3ac5f576e90ab"],"operation_results":[[2,{"amount":500000,"asset_id":"1.3.1570"}]]},{"ref_block_num":54237,"ref_block_prefix":3258912698,"expiration":"2019-10-09T07:14:39","operations":[[2,{"fee":{"amount":252,"asset_id":"1.3.0"},"fee_paying_account":"1.2.584360","order":"1.7.413053660","extensions":[]}]],"extensions":[],"signatures":["205564bf76662759fcf52b0271bc7a1782e09fc362a0262931b055e7d6cc18cd4318c91b875df5083339580a3f513d2c66aafaea73ec5e249c2087a732dae259f7"],"operation_results":[[2,{"amount":12771129,"asset_id":"1.3.1898"}]]},{"ref_block_num":166,"ref_block_prefix":4008116487,"expiration":"2019-10-09T07:15:10","operations":[[2,{"fee":{"amount":252,"asset_id":"1.3.0"},"fee_paying_account":"1.2.1219240","order":"1.7.413047954","extensions":[]}],[1,{"fee":{"amount":2526,"asset_id":"1.3.0"},"seller":"1.2.1219240","amount_to_sell":{"amount":"3402994665","asset_id":"1.3.1564"},"min_to_receive":{"amount":178974,"asset_id":"1.3.1570"},"expiration":"2024-10-07T07:14:10","fill_or_kill":false,"extensions":[]}]],"extensions":[],"signatures":["206de0c58d3b96e46c1a6399b0dccad1ecc4bbfe4ed1e9746cc24dacf7065455f407e8b27a5fff39c29dc7c51ef0b6f9b69992d73d08c35d12522d7cc0296fbd1e"],"operation_results":[[2,{"amount":"2762264089","asset_id":"1.3.1564"}],[1,"1.7.413053750"]]}],"block_id":"027bd3eb818908e7ba3262bc3f0e2284e6202f27","signing_key":"BTS5hEKbh1FhVfmbfmtEaQ8diQ5MK1W14z6tBGWSPV879sg6pxzu8","transaction_ids":["29ab579f5e8cd359c7f422329da344333a78e19a","01c9e49acacccede99ab1fcd468ec9b016edf94e","06164cc6ac82001f950431ea804917b3cd370c1e","5c5a9afd79e3587866ab8845be238c45a4121368","4914ef4d0b042a51e6bb5fddeaf4a6b8ec55f2a8"]},"operations":[{"txid":"29ab579f5e8cd359c7f422329da344333a78e19a","infos":[2,{"fee":{"amount":252,"asset_id":"1.3.0"},"fee_paying_account":"1.2.1086492","order":"1.7.413053746","extensions":[]}],"op_type":2,"op_in_trx":0,"block_num":"41669611","block_time":"2019-10-09T07:14:12.000+00:00","trx_in_block":0,"info_ext":{"1.2.1086492":"vortexian-zzz6"},"operation_results":[2,{"amount":2110134,"asset_id":"1.3.113"}]},{"txid":"01c9e49acacccede99ab1fcd468ec9b016edf94e","infos":[2,{"fee":{"amount":252,"asset_id":"1.3.0"},"fee_paying_account":"1.2.1077806","order":"1.7.413053744","extensions":[]}],"op_type":2,"op_in_trx":0,"block_num":"41669611","block_time":"2019-10-09T07:14:12.000+00:00","trx_in_block":1,"info_ext":{"1.2.1077806":"vortexian-zzz5"},"operation_results":[2,{"amount":131356797,"asset_id":"1.3.0"}]},{"txid":"06164cc6ac82001f950431ea804917b3cd370c1e","infos":[2,{"fee":{"amount":252,"asset_id":"1.3.0"},"fee_paying_account":"1.2.979829","order":"1.7.413053700","extensions":[]}],"op_type":2,"op_in_trx":0,"block_num":"41669611","block_time":"2019-10-09T07:14:12.000+00:00","trx_in_block":2,"info_ext":{"1.2.979829":"bitbot3"},"operation_results":[2,{"amount":500000,"asset_id":"1.3.1570"}]},{"txid":"5c5a9afd79e3587866ab8845be238c45a4121368","infos":[2,{"fee":{"amount":252,"asset_id":"1.3.0"},"fee_paying_account":"1.2.584360","order":"1.7.413053660","extensions":[]}],"op_type":2,"op_in_trx":0,"block_num":"41669611","block_time":"2019-10-09T07:14:12.000+00:00","trx_in_block":3,"info_ext":{"1.2.584360":"vilimas9"},"operation_results":[2,{"amount":12771129,"asset_id":"1.3.1898"}]},{"txid":"4914ef4d0b042a51e6bb5fddeaf4a6b8ec55f2a8","infos":[2,{"fee":{"amount":252,"asset_id":"1.3.0"},"fee_paying_account":"1.2.1219240","order":"1.7.413047954","extensions":[]}],"op_type":2,"op_in_trx":0,"block_num":"41669611","block_time":"2019-10-09T07:14:12.000+00:00","trx_in_block":4,"info_ext":{"1.2.1219240":"cryptobridge-marketmaker"},"operation_results":[2,{"amount":"2762264089","asset_id":"1.3.1564"}]},{"txid":"4914ef4d0b042a51e6bb5fddeaf4a6b8ec55f2a8","infos":[1,{"fee":{"amount":2526,"asset_id":"1.3.0"},"seller":"1.2.1219240","amount_to_sell":{"amount":"3402994665","asset_id":"1.3.1564"},"min_to_receive":{"amount":178974,"asset_id":"1.3.1570"},"expiration":"2024-10-07T07:14:10","fill_or_kill":false,"extensions":[]}],"op_type":1,"op_in_trx":1,"block_num":"41669611","block_time":"2019-10-09T07:14:12.000+00:00","trx_in_block":4,"info_ext":{"1.3.1564":{"v":"BRIDGE.BCO","p":7,"t":"Simple"},"1.3.1570":{"v":"BRIDGE.BTC","p":8,"t":"Simple"},"1.2.1219240":"cryptobridge-marketmaker"},"operation_results":[1,"1.7.413053750"]}],"witness_name":"in.abit"};\n\n  $("#block-view-origin-data").JSONView(json,{ collapsed: false });\n})<\/script>'),t.join("")}},{}],18:[function(t,e,i){e.exports=function(){var t=[];return t.push("<p>hello exchange!</p>"),t.join("")}},{}],19:[function(t,e,i){e.exports=function(){var t=[];return t.push("<p>hello explorer!</p>"),t.join("")}},{}],20:[function(t,e,i){e.exports=function(){var t=[];return t.push('<div id="banner" class="container mt-md-5"><h2 class="centerText">区块链浏览器</h2><form class="row mt-md-4"><input type="search" placeholder="账户 / 资产 / 区块 / 交易" aria-label="Search" style="height: 50px; line-height: 50px; border-radius: 0;" class="form-control col-md-7 offset-md-2"/><button type="submit" style="height: 50px; line-height: 50px; padding: 0 30px; border-radius: 0;" class="col-md-1 btn btn-outline-success my-2 my-sm-0">搜索</button></form><div class="row mt-md-4"><a href="/#/oid" class="block col-md-3"><div class="clearfix"><div class="fl banner-icon-wrap"><span title="icon account-login" aria-hidden="true" class="banner-icon oi oi-account-login"></span></div><div class="fl ml20"><div><h3>416106119</h3></div><div>最新区块 ></div></div></div></a><div class="col-md-3"><div class="clearfix"><div class="fl"><span title="icon account-login" aria-hidden="true" class="banner-icon oi oi-account-login"></span></div><div class="fl ml20"><div><h3>416106119</h3></div><div>不可逆区块 ></div></div></div></div><div class="col-md-3"><div class="clearfix"><div class="fl"><span title="icon account-login" aria-hidden="true" class="banner-icon oi oi-account-login"></span></div><div class="fl ml20"><div><h3>1,687,420</h3></div><div>账户数量 ></div></div></div></div><div class="col-md-3"><div class="clearfix"><div class="fl"><span title="icon account-login" aria-hidden="true" class="banner-icon oi oi-account-login"></span></div><div class="fl ml20"><div><h3>2,744,706,806</h3></div><div>BTS当前供应量 ></div></div></div></div></div></div><div id="main-container"><div class="container"><div class="area"><div class="table-responsive"><div class="row"><div class="col-md-8"><div class="table-title">热门市场</div></div><div class="col-md-4 rightText"><div role="group" aria-label="Button group with nested dropdown" class="btn-group"><button type="button" class="btn btn-secondary">CNY</button><button type="button" class="btn btn-secondary">BTS</button><button type="button" class="btn btn-secondary">USD</button></div></div></div><table class="table table-striped table-sm mt10"><thead><tr><th>市场</th><th>交易量(24h)</th><th>价格</th><th>涨跌(24h)</th></tr></thead><tbody><tr><td>BTS/CNY</td><td>1501971 CNY</td><td>0.20891</td><td>-0.98%</td></tr><tr><td>BTS/CNY</td><td>1501971 CNY</td><td>0.20891</td><td>-0.98%</td></tr><tr><td>BTS/CNY</td><td>1501971 CNY</td><td>0.20891</td><td>-0.98%</td></tr><tr><td>BTS/CNY</td><td>1501971 CNY</td><td>0.20891</td><td>-0.98%</td></tr><tr><td>BTS/CNY</td><td>1501971 CNY</td><td>0.20891</td><td>-0.98%</td></tr><tr><td>BTS/CNY</td><td>1501971 CNY</td><td>0.20891</td><td>-0.98%</td></tr></tbody></table></div></div><div class="area"><div class="table-responsive"><div class="row"><div class="col-md-12"><div class="table-title">最新记录</div></div></div><table class="table table-striped table-sm mt10"><thead><tr><th>类型</th><th>说明</th><th>时间(本地)</th><th>Tx ID</th><th>所属区块</th></tr></thead><tbody><tr><td>取消限价单</td><td>lqqqqqq 提交卖单，以0.2103 CNY/BTS的价格卖出 2000.00243 BTS</td><td>2019-10-07 15:04:03</td><td>094944abc...</td><td>41611960</td></tr><tr><td>取消限价单</td><td>lqqqqqq 提交卖单，以0.2103 CNY/BTS的价格卖出 2000.00243 BTS</td><td>2019-10-07 15:04:03</td><td>094944abc...</td><td>41611960</td></tr><tr><td>取消限价单</td><td>lqqqqqq 提交卖单，以0.2103 CNY/BTS的价格卖出 2000.00243 BTS</td><td>2019-10-07 15:04:03</td><td>094944abc...</td><td>41611960</td></tr><tr><td>取消限价单</td><td>lqqqqqq 提交卖单，以0.2103 CNY/BTS的价格卖出 2000.00243 BTS</td><td>2019-10-07 15:04:03</td><td>094944abc...</td><td>41611960</td></tr><tr><td>取消限价单</td><td>lqqqqqq 提交卖单，以0.2103 CNY/BTS的价格卖出 2000.00243 BTS</td><td>2019-10-07 15:04:03</td><td>094944abc...</td><td>41611960</td></tr></tbody></table></div></div></div></div>'),t.join("")}},{}],21:[function(t,e,i){e.exports=function(){var t=[];return t.push("<p>hello market!</p>"),t.join("")}},{}],22:[function(t,e,i){e.exports=function(){var t=[];return t.push('<style>#block-view-origin-data {word-wrap: break-word;word-break: break-all;overflow: hidden}\n</style><div id="json-view" class="container mt-md-5"><div class="area-oid"><div class="row"><div class="col-md-12"></div></div><div id="block-view-origin-data" class="mt20"></div></div></div>'),t.join("")}},{}],23:[function(t,e,i){var o,a,d,n;o=/^\d+\.\d+\.\d+$/i,a=/^\d+\.[23]\.\d+$/i,n={delay0:function(t){setTimeout(t,0)},isAssetOrAccountOid:function(t){return t.match(a)},parseNestedOids:function(t,e){var i;return d(o,t,i={},e),Object.keys(i)},parseAssetAndAccountOids:function(t,e){var i;return d(a,t,i={},e),Object.keys(i)},isBlockViewShowing:function(){return this._blockview_showing},showBlockView:function(t){if(!this._blockview_showing)return this._blockview_showing=!0,document.getElementById("top-block-view").style.display="block",document.getElementById("top-block-view-tips").innerText=t},hideBlockView:function(){if(this._blockview_showing)return this._blockview_showing=!1,document.getElementById("top-block-view").style.display="none"},_blockview_showing:!(d=function(t,e,i,o){var a,n,s,r,c;if("string"!=(r=typeof e)){if("object"==r)if(e instanceof Array)for(a=0,s=e.length;a<s;a++)c=e[a],d(t,c,i,o);else for(n in e)d(t,e[n],i,o)}else e.match(t)&&!o[e]&&(i[e]=!0)})},e.exports=n},{}]},{},[10]);