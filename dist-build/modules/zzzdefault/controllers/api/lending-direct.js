var _0x4842=['results','query','per_page','exports','router','./../../../../core/core','index','findAllQ','_id','omit'];(function(_0x2b5196,_0x189cef){var _0x4f65cc=function(_0x574f34){while(--_0x574f34){_0x2b5196['push'](_0x2b5196['shift']());}};_0x4f65cc(++_0x189cef);}(_0x4842,0xc3));var _0x2484=function(_0x27cabd,_0x1e853b){_0x27cabd=_0x27cabd-0x0;var _0x3f3ff8=_0x4842[_0x27cabd];return _0x3f3ff8;};'use strict';const core=require(_0x2484('0x0'));const DirectBonus=require('./../../../../models/DirectBonus');class AdminApiDirect extends core{constructor(){super();this[_0x2484('0x1')]();}['index'](){this['get']('/',(_0x3c289b,_0x5ef563)=>{DirectBonus[_0x2484('0x2')]({'member':_0x3c289b['member'][_0x2484('0x3')]},(_0x567609,_0x3b79c7,_0x59260f)=>{_0x5ef563['json']({'status':!![],'bonus':_0x3b79c7,'pagination':this['_'][_0x2484('0x4')](_0x59260f,_0x2484('0x5'))});},+_0x3c289b[_0x2484('0x6')][_0x2484('0x7')]||0x14,+_0x3c289b[_0x2484('0x6')]['page']||0x0,{'create':-0x1});});}}module[_0x2484('0x8')]=new AdminApiDirect()[_0x2484('0x9')];