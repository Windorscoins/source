var _0xb7e7=['plus','minus','coinwallet','received','findOne','rootUsername','create','address','totalReceived','totalSend','coin','total','buy_coin_usd','Buy\x20SVC','SVC','./../../../core/token','./../../../models/MemberBalance','./../../../libraries/LbCoin','./../../../config/config','./../../../models/UsdTransaction','./../../../models/Tx','./../../../models/WalletAddress','underscore','config','exports','token','findById','balance','interestReceived','direct','matching','accruedProfitNotValid','accruedProfitNotEnoughBuy','locale','levelBonusNotValid','matchingBonusNotValid','matchingBonusNotEnoughBuy','systemBonusNotValid','system','systemBonusNotEnoughBuy','getCoinExchange','times','convert','valueOf','update','_id'];(function(_0x3fe86d,_0x194ab3){var _0x2b9ad9=function(_0x52550e){while(--_0x52550e){_0x3fe86d['push'](_0x3fe86d['shift']());}};_0x2b9ad9(++_0x194ab3);}(_0xb7e7,0xf5));var _0x7b7e=function(_0x3d0cf6,_0x467bcb){_0x3d0cf6=_0x3d0cf6-0x0;var _0x575824=_0xb7e7[_0x3d0cf6];return _0x575824;};'use strict';const Token=require(_0x7b7e('0x0'));const Member=require('./../../../models/Member');const MemberBalance=require(_0x7b7e('0x1'));const MemberStatistics=require('./../../../models/MemberStatistics');const LbCoin=require(_0x7b7e('0x2'));const Config=require(_0x7b7e('0x3'));const UsdTransaction=require(_0x7b7e('0x4'));const WalletTransaction=require('./../../../models/WalletTransaction');const CoinTransaction=require('./../../../models/CoinTransaction');const Tx=require(_0x7b7e('0x5'));const WalletAddress=require(_0x7b7e('0x6'));var _=require(_0x7b7e('0x7'));var bigNumber=require('bignumber.js');bigNumber[_0x7b7e('0x8')]({'DECIMAL_PLACES':0x8,'ERRORS':![],'ROUNDING_MODE':0x1});module[_0x7b7e('0x9')]=(_0x2917f9,_0x1647e5)=>{return(_0x148964,_0x26bb8d)=>{if(_0x148964&&_0x148964[_0x7b7e('0xa')]){new Token(_0x148964['token'],_0x299519=>{if(_0x299519){MemberBalance[_0x7b7e('0xb')](_0x299519[_0x7b7e('0xc')],(_0x29b622,_0xd581fb)=>{let _0x18a1de=+_0x148964[_0x7b7e('0xd')]||0x0;let _0x55620b=+_0x148964[_0x7b7e('0xe')]||0x0;let _0x54d8ce=+_0x148964[_0x7b7e('0xf')]||0x0;let _0x430eab=+_0x148964['system']||0x0;if(_0x18a1de<0x0){return _0x26bb8d({'status':![],'msg':__({'phrase':_0x7b7e('0x10'),'locale':_0x148964['locale']||'en'})});}else if(_0x18a1de>0x0&&_0xd581fb['interestReceived']<_0x18a1de){return _0x26bb8d({'status':![],'msg':__({'phrase':_0x7b7e('0x11'),'locale':_0x148964[_0x7b7e('0x12')]||'en'})});}if(_0x55620b<0x0){return _0x26bb8d({'status':![],'msg':__({'phrase':_0x7b7e('0x13'),'locale':_0x148964[_0x7b7e('0x12')]||'en'})});}else if(_0x55620b>0x0&&_0xd581fb[_0x7b7e('0xe')]<_0x55620b){return _0x26bb8d({'status':![],'msg':__({'phrase':'levelBonusNotEnoughBuy','locale':_0x148964['locale']||'en'})});}if(_0x54d8ce<0x0){return _0x26bb8d({'status':![],'msg':__({'phrase':_0x7b7e('0x14'),'locale':_0x148964[_0x7b7e('0x12')]||'en'})});}else if(_0x54d8ce>0x0&&_0xd581fb[_0x7b7e('0xf')]<_0x54d8ce){return _0x26bb8d({'status':![],'msg':__({'phrase':_0x7b7e('0x15'),'locale':_0x148964[_0x7b7e('0x12')]||'en'})});}if(_0x430eab<0x0){return _0x26bb8d({'status':![],'msg':__({'phrase':_0x7b7e('0x16'),'locale':_0x148964[_0x7b7e('0x12')]||'en'})});}else if(_0x430eab>0x0&&_0xd581fb[_0x7b7e('0x17')]<_0x430eab){return _0x26bb8d({'status':![],'msg':__({'phrase':_0x7b7e('0x18'),'locale':_0x148964[_0x7b7e('0x12')]||'en'})});}let _0x12e8e9=_0x18a1de+_0x55620b+_0x54d8ce;LbCoin[_0x7b7e('0x19')](_0x448980=>{let _0x3bec7d=_0x12e8e9/_0x448980;let _0x9776c3=new bigNumber(_0x3bec7d)[_0x7b7e('0x1a')](Config[_0x7b7e('0x1b')]['fee'])[_0x7b7e('0x1c')]();MemberBalance[_0x7b7e('0x1d')](_0xd581fb[_0x7b7e('0x1e')],{'coin':new bigNumber(_0xd581fb['coin'])[_0x7b7e('0x1f')](_0x3bec7d)[_0x7b7e('0x20')](_0x9776c3),'interestReceived':new bigNumber(_0xd581fb[_0x7b7e('0xd')])[_0x7b7e('0x20')](_0x18a1de),'direct':new bigNumber(_0xd581fb[_0x7b7e('0xe')])[_0x7b7e('0x20')](_0x55620b),'matching':new bigNumber(_0xd581fb[_0x7b7e('0xf')])[_0x7b7e('0x20')](_0x54d8ce),'system':new bigNumber(_0xd581fb['system'])['minus'](_0x430eab)},()=>{});CoinTransaction['create']({'member':_0x299519[_0x7b7e('0x1e')],'address':_0x299519[_0x7b7e('0x21')],'plus':!![],'type':_0x7b7e('0x22'),'amount':new bigNumber(_0x3bec7d)['minus'](_0x9776c3),'description':'Received\x20from\x20USD\x20wallet'},()=>{});WalletAddress['findOne']({'member':_0x299519[_0x7b7e('0x1e')]},(_0x3c8192,_0x16a3c7)=>{Member[_0x7b7e('0x23')]({'username':Config[_0x7b7e('0x24')]},(_0x48fad1,_0x6a1e71)=>{WalletAddress[_0x7b7e('0x23')]({'member':_0x6a1e71['_id']},(_0x57b9da,_0x4e5de7)=>{Tx[_0x7b7e('0x25')]({'from':_0x4e5de7[_0x7b7e('0x26')],'to':_0x16a3c7['address'],'amount':new bigNumber(_0x3bec7d)[_0x7b7e('0x20')](_0x9776c3),'status':0x1},()=>{WalletAddress['update'](_0x16a3c7[_0x7b7e('0x1e')],{'balance':new bigNumber(_0x16a3c7[_0x7b7e('0xc')])[_0x7b7e('0x1f')](new bigNumber(_0x3bec7d)['minus'](_0x9776c3)),'totalReceived':new bigNumber(_0x16a3c7[_0x7b7e('0x27')])[_0x7b7e('0x1f')](new bigNumber(_0x3bec7d)[_0x7b7e('0x20')](_0x9776c3))},(_0x326dd2,_0x33f9a1)=>{WalletAddress['update'](_0x4e5de7[_0x7b7e('0x1e')],{'balance':new bigNumber(_0x4e5de7['balance'])[_0x7b7e('0x20')](new bigNumber(_0x3bec7d)[_0x7b7e('0x20')](_0x9776c3)),'totalSend':new bigNumber(_0x4e5de7[_0x7b7e('0x28')])[_0x7b7e('0x1f')](new bigNumber(_0x3bec7d)[_0x7b7e('0x20')](_0x9776c3))},(_0x247ea0,_0x29cb58)=>{});});});});});});MemberStatistics['findById'](_0x299519['statistics'],(_0xebcdbc,_0x162b84)=>{MemberStatistics['update'](_0x162b84,{'convert.coin':new bigNumber(_0x162b84[_0x7b7e('0x1b')][_0x7b7e('0x29')])[_0x7b7e('0x1f')](_0x3bec7d)['minus'](_0x9776c3),'convert.interestReceived':new bigNumber(_0x162b84[_0x7b7e('0x1b')][_0x7b7e('0xd')])[_0x7b7e('0x1f')](_0x18a1de),'convert.direct':new bigNumber(_0x162b84[_0x7b7e('0x1b')][_0x7b7e('0xe')])[_0x7b7e('0x1f')](_0x55620b),'convert.matching':new bigNumber(_0x162b84[_0x7b7e('0x1b')][_0x7b7e('0xf')])[_0x7b7e('0x1f')](_0x54d8ce),'convert.system':new bigNumber(_0x162b84[_0x7b7e('0x1b')][_0x7b7e('0x17')])[_0x7b7e('0x1f')](_0x430eab),'convert.total':new bigNumber(_0x162b84[_0x7b7e('0x1b')][_0x7b7e('0x2a')])[_0x7b7e('0x1f')](_0x12e8e9)},()=>{});});WalletTransaction[_0x7b7e('0x25')]({'address':_0x299519['coinwallet'],'member':_0x299519[_0x7b7e('0x1e')],'type':_0x7b7e('0x2b'),'description':_0x7b7e('0x2c'),'amount':new bigNumber(_0x3bec7d)[_0x7b7e('0x20')](_0x9776c3)},(_0x36abfc,_0x909c65)=>{if(_0x18a1de){UsdTransaction[_0x7b7e('0x25')]({'member':_0x299519[_0x7b7e('0x1e')],'type':_0x7b7e('0x2b'),'to':_0x7b7e('0x2d'),'description':'Buy\x20SVC','amount':_0x18a1de*-0x1,'foreignKey':_0x909c65[_0x7b7e('0x1e')]},()=>{});}if(_0x55620b){UsdTransaction[_0x7b7e('0x25')]({'member':_0x299519[_0x7b7e('0x1e')],'type':_0x7b7e('0x2b'),'to':'SVC','description':_0x7b7e('0x2c'),'amount':_0x55620b*-0x1,'foreignKey':_0x909c65[_0x7b7e('0x1e')]},()=>{});}if(_0x54d8ce){UsdTransaction[_0x7b7e('0x25')]({'member':_0x299519['_id'],'type':'buy_coin_usd','to':_0x7b7e('0x2d'),'description':'Buy\x20SVC','amount':_0x54d8ce*-0x1,'foreignKey':_0x909c65[_0x7b7e('0x1e')]},()=>{});}_0x26bb8d({'status':!![]});});});});}else{_0x26bb8d({'status':![],'login':!![]});}});}else{_0x26bb8d({'status':![],'login':!![]});}};};