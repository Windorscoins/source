var _0xa252=['findById','balance','interestReceived','direct','matching','locale','accruedProfitNotEnoughBuy','levelBonusNotEnoughBuy','matchingBonusNotValid','matchingBonusNotEnoughBuy','getCoinExchange','length','min','max','update','_id','minus','statistics','USD','investment','total','plus','active','coin','create','capitalBack','reinvest','Reinvest','IniDirect','sendToMember','do-update-invest','forEach','investAmountNotValid','./../../../core/token','./../../../models/MemberStatistics','./../../../libraries/LbCoin','./../../../models/MemberInvest','./../../../libraries/LbInvest','./../../../models/Lending','config','exports','token'];(function(_0x148da6,_0x3ca3b0){var _0x3ff858=function(_0x2dbf3c){while(--_0x2dbf3c){_0x148da6['push'](_0x148da6['shift']());}};_0x3ff858(++_0x3ca3b0);}(_0xa252,0x1c5));var _0x2a25=function(_0x1217d2,_0x79ab2){_0x1217d2=_0x1217d2-0x0;var _0x3a88a6=_0xa252[_0x1217d2];return _0x3a88a6;};'use strict';const Token=require(_0x2a25('0x0'));const LbSocket=require('./../../../libraries/LbSocket');const MemberBalance=require('./../../../models/MemberBalance');const MemberStatistics=require(_0x2a25('0x1'));const LbCoin=require(_0x2a25('0x2'));const UsdTransaction=require('./../../../models/UsdTransaction');const MemberInvest=require(_0x2a25('0x3'));const LbInvest=require(_0x2a25('0x4'));const Lending=require(_0x2a25('0x5'));var bigNumber=require('bignumber.js');bigNumber[_0x2a25('0x6')]({'DECIMAL_PLACES':0x8,'ERRORS':![],'ROUNDING_MODE':0x1});module[_0x2a25('0x7')]=(_0x4bd572,_0x3008f9)=>{return(_0x48ffa1,_0x11143e)=>{if(_0x48ffa1&&_0x48ffa1[_0x2a25('0x8')]){new Token(_0x48ffa1['token'],_0x52acf8=>{if(_0x52acf8){MemberBalance[_0x2a25('0x9')](_0x52acf8[_0x2a25('0xa')],(_0x38f37a,_0x2de3aa)=>{let _0x12d633=+_0x48ffa1[_0x2a25('0xb')]||0x0;let _0x1705b0=+_0x48ffa1[_0x2a25('0xc')]||0x0;let _0x5c6c0d=+_0x48ffa1[_0x2a25('0xd')]||0x0;if(_0x12d633<0x0){return _0x11143e({'status':![],'msg':__({'phrase':'accruedProfitNotValid','locale':_0x48ffa1[_0x2a25('0xe')]||'en'})});}else if(_0x12d633>0x0&&_0x2de3aa[_0x2a25('0xb')]<_0x12d633){return _0x11143e({'status':![],'msg':__({'phrase':_0x2a25('0xf'),'locale':_0x48ffa1[_0x2a25('0xe')]||'en'})});}if(_0x1705b0<0x0){return _0x11143e({'status':![],'msg':__({'phrase':'levelBonusNotValid','locale':_0x48ffa1[_0x2a25('0xe')]||'en'})});}else if(_0x1705b0>0x0&&_0x2de3aa[_0x2a25('0xc')]<_0x1705b0){return _0x11143e({'status':![],'msg':__({'phrase':_0x2a25('0x10'),'locale':_0x48ffa1[_0x2a25('0xe')]||'en'})});}if(_0x5c6c0d<0x0){return _0x11143e({'status':![],'msg':__({'phrase':_0x2a25('0x11'),'locale':_0x48ffa1[_0x2a25('0xe')]||'en'})});}else if(_0x5c6c0d>0x0&&_0x2de3aa['matching']<_0x5c6c0d){return _0x11143e({'status':![],'msg':__({'phrase':_0x2a25('0x12'),'locale':_0x48ffa1[_0x2a25('0xe')]||'en'})});}let _0x599e99=_0x12d633+_0x1705b0+_0x5c6c0d;LbCoin[_0x2a25('0x13')](_0x2800d5=>{let _0x16f86c=_0x599e99/_0x2800d5;Lending['findAll']((_0x5bc58b,_0x9541a1)=>{if(_0x9541a1&&_0x9541a1[_0x2a25('0x14')]){let _0x340791=![];let _0x3f8c42;let _0x1a9200=_0x5dd538=>{if(_0x5dd538[_0x2a25('0x15')]<=_0x599e99&&(!_0x5dd538[_0x2a25('0x16')]||_0x5dd538[_0x2a25('0x16')]>=_0x599e99)&&!_0x340791){_0x340791=!![];let _0x2a2d74=_0x16f86c;MemberBalance[_0x2a25('0x17')](_0x2de3aa[_0x2a25('0x18')],{'interestReceived':new bigNumber(_0x2de3aa['interestReceived'])[_0x2a25('0x19')](_0x12d633),'direct':new bigNumber(_0x2de3aa[_0x2a25('0xc')])[_0x2a25('0x19')](_0x1705b0),'matching':new bigNumber(_0x2de3aa[_0x2a25('0xd')])['minus'](_0x5c6c0d)},()=>{});MemberStatistics[_0x2a25('0x9')](_0x52acf8[_0x2a25('0x1a')],(_0x2ccbd8,_0x4a1f92)=>{MemberStatistics['update'](_0x52acf8[_0x2a25('0x1a')],{'investment.total.USD':new bigNumber(_0x4a1f92['investment']['total'][_0x2a25('0x1b')])['plus'](_0x599e99),'investment.total.coin':new bigNumber(_0x4a1f92[_0x2a25('0x1c')][_0x2a25('0x1d')]['coin'])[_0x2a25('0x1e')](_0x2a2d74),'investment.active.USD':new bigNumber(_0x4a1f92[_0x2a25('0x1c')][_0x2a25('0x1f')]['USD'])['plus'](_0x599e99),'investment.active.coin':new bigNumber(_0x4a1f92[_0x2a25('0x1c')][_0x2a25('0x1f')][_0x2a25('0x20')])[_0x2a25('0x1e')](_0x2a2d74),'investment.reinvest':new bigNumber(_0x4a1f92[_0x2a25('0x1c')]['reinvest'])[_0x2a25('0x1e')](_0x599e99)},()=>{MemberInvest[_0x2a25('0x21')]({'member':_0x52acf8[_0x2a25('0x18')],'lending':_0x5dd538[_0x2a25('0x18')],'coin':_0x2a2d74,'amount':_0x599e99,'capitalBack':_0x5dd538[_0x2a25('0x22')]},(_0x55fe29,_0xfd9d7a)=>{if(_0x12d633){UsdTransaction[_0x2a25('0x21')]({'member':_0x52acf8[_0x2a25('0x18')],'type':_0x2a25('0x23'),'to':_0x2a25('0x1b'),'description':_0x2a25('0x24'),'amount':_0x12d633*-0x1,'foreignKey':_0xfd9d7a[_0x2a25('0x18')]},()=>{});}if(_0x1705b0){UsdTransaction[_0x2a25('0x21')]({'member':_0x52acf8[_0x2a25('0x18')],'type':_0x2a25('0x23'),'to':_0x2a25('0x1b'),'description':_0x2a25('0x24'),'amount':_0x1705b0*-0x1,'foreignKey':_0xfd9d7a[_0x2a25('0x18')]},()=>{});}if(_0x5c6c0d){UsdTransaction[_0x2a25('0x21')]({'member':_0x52acf8['_id'],'type':_0x2a25('0x23'),'to':'USD','description':'Reinvest','amount':_0x5c6c0d*-0x1,'foreignKey':_0xfd9d7a[_0x2a25('0x18')]},()=>{});}LbInvest[_0x2a25('0x25')](_0xfd9d7a,_0x52acf8);_0x11143e({'status':!![]});LbSocket[_0x2a25('0x26')](_0x52acf8[_0x2a25('0x18')],'do-update-info',{'update':!![]});LbSocket['sendToMember'](_0x52acf8[_0x2a25('0x18')],_0x2a25('0x27'),{'update':!![]});});});});}};_0x9541a1[_0x2a25('0x28')](_0x3abd10=>{_0x1a9200(_0x3abd10);});if(!_0x340791){_0x11143e({'status':![],'msg':__({'phrase':_0x2a25('0x29'),'locale':_0x48ffa1['locale']||'en'})});}}else{_0x11143e({'status':![],'msg':__({'phrase':_0x2a25('0x29'),'locale':_0x48ffa1['locale']||'en'})});}},0x270f,0x0,{'min':0x1});});});}else{_0x11143e({'status':![],'login':!![]});}});}else{_0x11143e({'status':![],'login':!![]});}};};