var _0xb10b=['results','query','per_page','page','exports','router','./../../../../core/core','./../../../../models/MemberBalance','./../../../../models/MemberStatistics','./../../../../models/Deposit','bignumber.js','config','index','put','findOne','body','depositid','action','confirm','findById','type','amount','plus','update','statistics','deposit.','deposit','balance.','_id','json','length','forEach','push','memberid','clone','pick','username','all','then','omit'];(function(_0x51adc6,_0x4c4f72){var _0xc3b86b=function(_0x8c233){while(--_0x8c233){_0x51adc6['push'](_0x51adc6['shift']());}};_0xc3b86b(++_0x4c4f72);}(_0xb10b,0x11e));var _0xbb10=function(_0x8f072b,_0x2f92b5){_0x8f072b=_0x8f072b-0x0;var _0x1fda65=_0xb10b[_0x8f072b];return _0x1fda65;};'use strict';const core=require(_0xbb10('0x0'));const Member=require('./../../../../models/Member');const MemberBalance=require(_0xbb10('0x1'));const MemberStatistics=require(_0xbb10('0x2'));const Deposit=require(_0xbb10('0x3'));var bigNumber=require(_0xbb10('0x4'));bigNumber[_0xbb10('0x5')]({'DECIMAL_PLACES':0x8,'ERRORS':![],'ROUNDING_MODE':0x1});class AdminApiDeposit extends core{constructor(){super();this[_0xbb10('0x6')]();}['index'](){this[_0xbb10('0x7')]('/',(_0x3cdd53,_0x513741)=>{Deposit[_0xbb10('0x8')]({'_id':_0x3cdd53[_0xbb10('0x9')][_0xbb10('0xa')],'cancel':![],'active':![]},(_0x1c3ee5,_0x2353ef)=>{if(_0x2353ef){if(_0x3cdd53[_0xbb10('0x9')][_0xbb10('0xb')]==_0xbb10('0xc')){Member['findById'](_0x2353ef['memberid'],(_0x20bd61,_0x118a74)=>{MemberBalance[_0xbb10('0xd')](_0x118a74['balance'],(_0x408248,_0x5be7e0)=>{let _0x44fb19={};_0x44fb19[_0x2353ef[_0xbb10('0xe')]]=new bigNumber(_0x2353ef[_0xbb10('0xf')])[_0xbb10('0x10')](_0x5be7e0[_0x2353ef[_0xbb10('0xe')]]);MemberBalance[_0xbb10('0x11')](_0x118a74['balance'],_0x44fb19,()=>{MemberStatistics[_0xbb10('0xd')](_0x118a74[_0xbb10('0x12')],(_0x45b9d6,_0x17fd46)=>{let _0x3df17b={};_0x3df17b[_0xbb10('0x13')+_0x2353ef[_0xbb10('0xe')]]=new bigNumber(_0x2353ef[_0xbb10('0xf')])[_0xbb10('0x10')](_0x17fd46[_0xbb10('0x14')][_0x2353ef['type']]);_0x3df17b[_0xbb10('0x15')+_0x2353ef[_0xbb10('0xe')]]=new bigNumber(_0x2353ef[_0xbb10('0xf')])[_0xbb10('0x10')](_0x17fd46[_0xbb10('0x14')][_0x2353ef[_0xbb10('0xe')]]);MemberStatistics[_0xbb10('0x11')](_0x118a74[_0xbb10('0x12')],_0x3df17b,()=>{Deposit[_0xbb10('0x11')](_0x2353ef[_0xbb10('0x16')],{'active':!![]},()=>{this['DoUpdateInfo'](_0x118a74[_0xbb10('0x16')]);_0x513741[_0xbb10('0x17')]({'status':!![]});});});});});});});}else{Deposit[_0xbb10('0x11')](_0x2353ef[_0xbb10('0x16')],{'cancel':!![]},()=>{_0x513741[_0xbb10('0x17')]({'status':!![]});});}}else{_0x513741[_0xbb10('0x17')]({'status':![]});}});});this['get']('/',(_0x12f888,_0x12ef77)=>{Deposit['findAll']((_0x4c4b0d,_0x8e2b97,_0x311abe)=>{if(_0x8e2b97&&_0x8e2b97[_0xbb10('0x18')]){let _0x317da4=[];_0x8e2b97[_0xbb10('0x19')]((_0x1824b7,_0x407cb4)=>{_0x317da4[_0xbb10('0x1a')](new Promise((_0x7f2377,_0x395404)=>{Member[_0xbb10('0xd')](_0x1824b7[_0xbb10('0x1b')],(_0x537898,_0x4fedac)=>{_0x8e2b97[_0x407cb4]=this['_']['extend'](this[_0xbb10('0x1c')](_0x8e2b97[_0x407cb4]),{'member':this['_'][_0xbb10('0x1d')](_0x4fedac,_0xbb10('0x1e'),'fullname')});_0x7f2377();});}));});Promise[_0xbb10('0x1f')](_0x317da4)[_0xbb10('0x20')](()=>{_0x12ef77[_0xbb10('0x17')]({'status':!![],'deposit':_0x8e2b97,'pagination':this['_'][_0xbb10('0x21')](_0x311abe,_0xbb10('0x22'))});});}else{_0x12ef77[_0xbb10('0x17')]({'status':!![],'deposit':_0x8e2b97,'pagination':this['_'][_0xbb10('0x21')](_0x311abe,'results')});}},+_0x12f888[_0xbb10('0x23')][_0xbb10('0x24')]||0x14,+_0x12f888[_0xbb10('0x23')][_0xbb10('0x25')]||0x0,{'create':-0x1});});}}module[_0xbb10('0x26')]=new AdminApiDeposit()[_0xbb10('0x27')];