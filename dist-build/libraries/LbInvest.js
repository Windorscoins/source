var _0x4c41=['./../models/Member','./../models/MemberStatistics','./../models/MemberInterestReceived','./../models/MatchingBonus','./../models/InterestRate','./../models/DirectBonus','./../models/UsdTransaction','./../models/Lending','bignumber.js','config','underscore','__IniInterest','subtract','day','findAllQ','length','first','activeDate','time','floor','valueOf','clone','add','__IniDays','member','_id','findOne','days','update','capitalBack','findById','amount','rate','interestRate','dailly','plus','total','earned','capitalReleased','interestReceived','updateQ','create','USD','You\x20earned\x20interest\x20of\x20investment\x20package\x20','balance','active','statistics','minus','investment','system','__IniMatching','min','referralid','matching','forEach','split','You\x20received\x20matching\x20bonus\x20from\x20','%\x20of\x20','IniDirect','__IniDirect','systemLending','bonus','direct','You\x20received\x20level\x20bonus\x20from\x20','username','direct_bonus','exports'];(function(_0x5979dc,_0x426e84){var _0x2da5e7=function(_0x76e366){while(--_0x76e366){_0x5979dc['push'](_0x5979dc['shift']());}};_0x2da5e7(++_0x426e84);}(_0x4c41,0x86));var _0x14c4=function(_0x23e6da,_0xfaaad6){_0x23e6da=_0x23e6da-0x0;var _0x346c35=_0x4c41[_0x23e6da];return _0x346c35;};'use strict';const Member=require(_0x14c4('0x0'));const MemberBalance=require('./../models/MemberBalance');const MemberStatistics=require(_0x14c4('0x1'));const MemberInvest=require('./../models/MemberInvest');const InterestReceived=require('./../models/InterestReceived');const MemberInterestReceived=require(_0x14c4('0x2'));const MatchingBonus=require(_0x14c4('0x3'));const InterestRate=require(_0x14c4('0x4'));const DirectBonus=require(_0x14c4('0x5'));const UsdTransaction=require(_0x14c4('0x6'));const Lending=require(_0x14c4('0x7'));const Config=require('./../config/config');var bigNumber=require(_0x14c4('0x8'));bigNumber[_0x14c4('0x9')]({'DECIMAL_PLACES':0x8,'ERRORS':![],'ROUNDING_MODE':0x1});const moment=require('moment-timezone');const _=require(_0x14c4('0xa'));class LbInvest{constructor(){this[_0x14c4('0xb')]();}[_0x14c4('0xb')](){let _0x5832db=moment()[_0x14c4('0xc')](0x1,_0x14c4('0xd'))['valueOf']();MemberInvest[_0x14c4('0xe')]({'active':{'$ne':![]},'$or':[{'iniDate':null},{'iniDate':{'$lte':new Date(_0x5832db)}}]},(_0x15ea33,_0x27e763)=>{if(_0x27e763&&_0x27e763[_0x14c4('0xf')]){let _0x4c8ea3=_0xdaf2cf=>{if(_0xdaf2cf&&_0xdaf2cf['length']){let _0x50d681=_[_0x14c4('0x10')](_0xdaf2cf);this['__DoIniInvest'](_0x50d681,()=>{_0x4c8ea3(_['rest'](_0xdaf2cf));});}else{setTimeout(()=>{this[_0x14c4('0xb')]();},0x2710);}};_0x4c8ea3(_0x27e763);}else{setTimeout(()=>{this[_0x14c4('0xb')]();},0x2710);}},0xa,0x0,{'create':0x1});}['__DoIniInvest'](_0x380b5c,_0x2a212d){let _0x54f592=moment(_0x380b5c[_0x14c4('0x11')])['tz'](Config[_0x14c4('0x12')]);let _0x297116=moment()['tz'](Config[_0x14c4('0x12')]);let _0x2b81c1=Math[_0x14c4('0x13')]((_0x297116[_0x14c4('0x14')]()-_0x54f592['valueOf']())/0x5265c00);MemberInvest['update'](_0x380b5c,{'iniDate':new Date(_0x54f592[_0x14c4('0x15')]()[_0x14c4('0x16')](_0x2b81c1,_0x14c4('0xd'))[_0x14c4('0x14')]())},()=>{if(_0x2b81c1){this[_0x14c4('0x17')](_0x380b5c,_0x2b81c1,_0x54f592,_0x2a212d);}else{_0x2a212d();}});}['__IniOneDay'](_0x16b660,_0xf266a2,_0x249f39,_0x404563,_0x965aae,_0x54f3b1){let _0x39a419=_0x249f39['clone']()[_0x14c4('0x16')](_0xf266a2,_0x14c4('0xd'))['startOf'](_0x14c4('0xd'));MemberInterestReceived['findOne']({'member':_0x16b660[_0x14c4('0x18')],'memberInvest':_0x16b660[_0x14c4('0x19')],'days':_0xf266a2},(_0x55ef16,_0x3b121e)=>{if(!_0x3b121e){InterestRate[_0x14c4('0x1a')]({'date':new Date(_0x39a419[_0x14c4('0x14')]())},(_0x41a606,_0x16b064)=>{if(_0x16b064){if(_0x16b660&&_0x16b660[_0x14c4('0x1b')]<_0xf266a2){MemberInvest[_0x14c4('0x1c')](_0x16b660[_0x14c4('0x19')],{'days':Math['min'](_0xf266a2,_0x965aae[_0x14c4('0x1d')])},()=>{});}MemberInvest[_0x14c4('0x1e')](_0x16b660[_0x14c4('0x19')],(_0x52f948,_0xb2bdf7)=>{if(_0x965aae['capitalBack']<_0xf266a2){return _0x404563(!![]);}let _0x4b2f34=_0xb2bdf7[_0x14c4('0x1f')]/0x64*_0x16b064[_0x14c4('0x20')];let _0xb482c5=_0xb2bdf7['amount']/0x64*_0x965aae[_0x14c4('0x21')][_0x14c4('0x22')];let _0x2c5378=0x0;MemberInvest['update'](_0xb2bdf7[_0x14c4('0x19')],{'todayEarned':{'total':new bigNumber(_0x4b2f34)['plus'](_0xb482c5)[_0x14c4('0x23')](_0x2c5378),'capitalReleased':_0x2c5378,'interestReceived':_0x4b2f34,'dailly':_0xb482c5},'earned':{'total':new bigNumber(_0x4b2f34)[_0x14c4('0x23')](_0xb482c5)[_0x14c4('0x23')](_0x2c5378)['plus'](_0xb2bdf7['earned'][_0x14c4('0x24')]),'capitalReleased':new bigNumber(_0x2c5378)[_0x14c4('0x23')](_0xb2bdf7[_0x14c4('0x25')][_0x14c4('0x26')]),'interestReceived':new bigNumber(_0x4b2f34)[_0x14c4('0x23')](_0xb2bdf7[_0x14c4('0x25')][_0x14c4('0x27')]),'dailly':new bigNumber(_0xb482c5)[_0x14c4('0x23')](_0xb2bdf7[_0x14c4('0x25')][_0x14c4('0x22')])}},()=>{});InterestReceived[_0x14c4('0x1a')]({'member':_0xb2bdf7[_0x14c4('0x18')],'date':new Date(_0x39a419[_0x14c4('0x14')]())},(_0x4ada42,_0x5e9db8)=>{let _0x167a85={'total':new bigNumber(_0x4b2f34)['plus'](_0xb482c5)[_0x14c4('0x23')](_0x2c5378)[_0x14c4('0x23')](_0x5e9db8?_0x5e9db8['earned'][_0x14c4('0x24')]:0x0),'capitalReleased':new bigNumber(_0x2c5378)[_0x14c4('0x23')](_0x5e9db8?_0x5e9db8[_0x14c4('0x25')][_0x14c4('0x26')]:0x0),'interestReceived':new bigNumber(_0x4b2f34)[_0x14c4('0x23')](_0x5e9db8?_0x5e9db8[_0x14c4('0x25')][_0x14c4('0x27')]:0x0),'dailly':new bigNumber(_0xb482c5)['plus'](_0x5e9db8?_0x5e9db8[_0x14c4('0x25')]['dailly']:0x0)};if(_0x5e9db8){InterestReceived[_0x14c4('0x28')]({'member':_0xb2bdf7[_0x14c4('0x18')],'date':new Date(_0x39a419[_0x14c4('0x14')]())},{'earned':_0x167a85},(_0x978d60,_0x37e648)=>{},{'upsert':!![]});}else{InterestReceived[_0x14c4('0x29')]({'member':_0xb2bdf7[_0x14c4('0x18')],'date':new Date(_0x39a419[_0x14c4('0x14')]()),'earned':_0x167a85},(_0x20df5f,_0x472043)=>{});}});MemberInterestReceived[_0x14c4('0x29')]({'member':_0xb2bdf7[_0x14c4('0x18')],'memberInvest':_0xb2bdf7[_0x14c4('0x19')],'days':_0xf266a2,'percent':_0x16b064[_0x14c4('0x20')],'create':new Date(_0x249f39[_0x14c4('0x15')]()['add'](_0xf266a2,_0x14c4('0xd'))['valueOf']()),'earned':{'total':new bigNumber(_0x4b2f34)['plus'](_0xb482c5)['plus'](_0x2c5378),'capitalReleased':_0x2c5378,'interestReceived':_0x4b2f34,'dailly':_0xb482c5}},(_0x27fcfa,_0x3f0b2c)=>{UsdTransaction[_0x14c4('0x29')]({'member':_0xb2bdf7[_0x14c4('0x18')],'type':'interest_received','to':_0x14c4('0x2a'),'description':_0x14c4('0x2b')+_0xb2bdf7[_0x14c4('0x1f')]+'$','amount':new bigNumber(_0x4b2f34)[_0x14c4('0x23')](_0xb482c5)['plus'](_0x2c5378),'foreignKey':_0x3f0b2c[_0x14c4('0x19')]},()=>{});});MemberBalance[_0x14c4('0x1e')](_0x54f3b1[_0x14c4('0x2c')],(_0x52fa54,_0x3dff80)=>{MemberBalance[_0x14c4('0x1c')](_0x3dff80[_0x14c4('0x19')],{'interestReceived':new bigNumber(_0x4b2f34)[_0x14c4('0x23')](_0xb482c5)[_0x14c4('0x23')](_0x2c5378)['plus'](_0x3dff80[_0x14c4('0x27')])},(_0x3416c9,_0x411ae5)=>{if(_0x965aae[_0x14c4('0x1d')]==_0xf266a2&&_0xb2bdf7[_0x14c4('0x2d')]){MemberInvest[_0x14c4('0x1c')](_0xb2bdf7['_id'],{'active':![],'ended':_0x249f39[_0x14c4('0x15')]()[_0x14c4('0x16')](_0x965aae[_0x14c4('0x1d')],_0x14c4('0xd'))},()=>{MemberStatistics[_0x14c4('0x1e')](_0x54f3b1[_0x14c4('0x2e')],(_0x9d5a13,_0x124ba0)=>{MemberStatistics['update'](_0x124ba0['_id'],{'investment.active.USD':new bigNumber(_0x124ba0['investment'][_0x14c4('0x2d')][_0x14c4('0x2a')])[_0x14c4('0x2f')](_0xb2bdf7[_0x14c4('0x1f')]),'investment.active.coin':new bigNumber(_0x124ba0[_0x14c4('0x30')][_0x14c4('0x2d')]['coin'])[_0x14c4('0x2f')](_0xb2bdf7['coint'])},(_0x1fa57f,_0x10299c)=>{});});UsdTransaction['create']({'member':_0xb2bdf7[_0x14c4('0x18')],'type':'lending_ended','to':_0x14c4('0x2a'),'description':'Refund\x20the\x20investment\x20package\x20'+_0xb2bdf7[_0x14c4('0x1f')]+'$','amount':_0xb2bdf7[_0x14c4('0x1f')],'foreignKey':_0xb2bdf7['_id']},()=>{MemberBalance['findById'](_0x54f3b1[_0x14c4('0x2c')],(_0x4d7c83,_0x3c83bb)=>{MemberBalance[_0x14c4('0x1c')](_0x3c83bb[_0x14c4('0x19')],{'system':new bigNumber(_0xb2bdf7[_0x14c4('0x1f')])[_0x14c4('0x23')](_0x3c83bb[_0x14c4('0x31')])},(_0x5aa1ed,_0x221f12)=>{});});});});}MemberStatistics[_0x14c4('0x1e')](_0x54f3b1[_0x14c4('0x2e')],(_0x4ca563,_0x586006)=>{MemberStatistics[_0x14c4('0x1c')](_0x586006[_0x14c4('0x19')],{'balance.interestReceived':new bigNumber(_0x4b2f34)[_0x14c4('0x23')](_0xb482c5)[_0x14c4('0x23')](_0x2c5378)[_0x14c4('0x23')](_0x586006['balance']['interestReceived']),'investment.earned.total':new bigNumber(_0x4b2f34)['plus'](_0xb482c5)[_0x14c4('0x23')](_0x2c5378)[_0x14c4('0x23')](_0x586006[_0x14c4('0x30')]['earned'][_0x14c4('0x24')]),'investment.earned.interestReceived':new bigNumber(_0x4b2f34)[_0x14c4('0x23')](_0x586006['investment'][_0x14c4('0x25')][_0x14c4('0x27')]),'investment.earned.capitalReleased':new bigNumber(_0x2c5378)[_0x14c4('0x23')](_0x586006[_0x14c4('0x30')]['earned'][_0x14c4('0x26')]),'investment.earned.dailly':new bigNumber(_0xb482c5)[_0x14c4('0x23')](_0x586006[_0x14c4('0x30')]['earned'][_0x14c4('0x22')])},(_0x5b459b,_0x3d32a8)=>{this[_0x14c4('0x32')](_0xb2bdf7,_0x54f3b1,{'interestReceived':_0x4b2f34,'capitalReleased':_0x2c5378,'dailly':_0xb482c5},_0x249f39['clone']()[_0x14c4('0x16')](_0xf266a2,_0x14c4('0xd')),()=>{_0x404563(!![]);},0x1,_0x54f3b1);});});});});});}else{_0x404563(!![]);}});}else{_0x404563(![]);}});}['__IniDays'](_0x25bd3e,_0x2eb3d5,_0xd0e789,_0x3fdb0f){Lending['findById'](_0x25bd3e['lending'],(_0x4d3dcc,_0x38f196)=>{_0x2eb3d5=Math[_0x14c4('0x33')](_0x38f196['capitalBack'],_0x2eb3d5);if(_0x38f196){Member['findById'](_0x25bd3e[_0x14c4('0x18')],(_0x3421ef,_0x2579e3)=>{if(_0x2579e3){let _0x4ed807=_0xc04141=>{if(_0xc04141>0x0){this['__IniOneDay'](_0x25bd3e,_0xc04141,_0xd0e789,_0x47f5d9=>{if(!_0x47f5d9){_0x3fdb0f();}else{_0x4ed807(_0xc04141-0x1);}},_0x38f196,_0x2579e3);}else{_0x3fdb0f();}};_0x4ed807(_0x2eb3d5);}else{_0x3fdb0f();}});}else{_0x3fdb0f();}});}[_0x14c4('0x32')](_0x3112ea,_0x330de2,_0x2d6f24,_0xeb19d4,_0x9415ac,_0x46dbbb=0x1,_0x4e594f){if(_0x330de2[_0x14c4('0x34')]){Member['findById'](_0x330de2[_0x14c4('0x34')],(_0x38abe2,_0x8f81fb)=>{if(_0x8f81fb){this[_0x14c4('0x32')](_0x3112ea,_0x8f81fb,_0x2d6f24,_0xeb19d4,()=>{},_0x46dbbb+0x1,_0x4e594f);MemberInvest['findAllQ']({'member':_0x8f81fb[_0x14c4('0x19')]},(_0x33434e,_0x3dc438)=>{});MemberInvest[_0x14c4('0xe')]({'member':_0x8f81fb[_0x14c4('0x19')],'$or':[{'active':!![]},{'ended':{'$gte':new Date(_0xeb19d4['valueOf']())}}],'activeDate':{'$lte':new Date(_0xeb19d4[_0x14c4('0x14')]())}},(_0x5e4e62,_0x22590e)=>{if(_0x22590e&&_0x22590e[0x0]){let _0x52bcd3=_0x22590e[0x0];Lending[_0x14c4('0x1e')](_0x52bcd3['lending'],(_0x49e476,_0x2af90d)=>{if(_0x2af90d&&_0x2af90d[_0x14c4('0x35')]){let _0x2b7493=_0x2af90d[_0x14c4('0x35')]['split'](';');let _0x5a088c={};if(_0x2b7493&&_0x2b7493[_0x14c4('0xf')]){_0x2b7493[_0x14c4('0x36')](_0x5c3c54=>{let _0xf284ec=_0x5c3c54[_0x14c4('0x37')]('=');_0x5a088c[_0xf284ec[0x0]]=+_0xf284ec[0x1];});}if(_0x5a088c[_0x46dbbb]){let _0x2f0e1a=_0x2d6f24['interestReceived']/0x64*_0x5a088c[_0x46dbbb];MatchingBonus[_0x14c4('0x29')]({'memberInvest':_0x3112ea['_id'],'member':_0x8f81fb[_0x14c4('0x19')],'percent':_0x5a088c[_0x46dbbb],'lv':_0x46dbbb,'description':_0x14c4('0x38')+_0x22590e['username']+'\x20'+_0x5a088c[_0x46dbbb]+_0x14c4('0x39')+_0x2d6f24['interestReceived']+'$','amount':_0x2f0e1a,'create':new Date(_0xeb19d4[_0x14c4('0x14')]())},()=>{MemberBalance[_0x14c4('0x1e')](_0x8f81fb[_0x14c4('0x2c')],(_0x2515bd,_0x2071e0)=>{MemberBalance[_0x14c4('0x1c')](_0x2071e0[_0x14c4('0x19')],{'matching':new bigNumber(_0x2071e0['matching'])[_0x14c4('0x23')](_0x2f0e1a)},()=>{MemberStatistics[_0x14c4('0x1e')](_0x8f81fb[_0x14c4('0x2e')],(_0xaf68d7,_0x5114f0)=>{MemberStatistics[_0x14c4('0x1c')](_0x5114f0['_id'],{'balance.matching':new bigNumber(_0x5114f0[_0x14c4('0x2c')][_0x14c4('0x35')])[_0x14c4('0x23')](_0x2f0e1a)},()=>{_0x9415ac();});});});});});}else{_0x9415ac();}}else{_0x9415ac();}});}else{_0x9415ac();}},0x1,0x1,{'amount':-0x1});}else{_0x9415ac();}});}else{_0x9415ac();}}[_0x14c4('0x3a')](_0x501161,_0x4e89d8){if(_0x501161&&_0x4e89d8&&_0x4e89d8['referralid']){Member[_0x14c4('0x1e')](_0x4e89d8[_0x14c4('0x34')],(_0x33a98b,_0x6b0838)=>{if(_0x6b0838){this[_0x14c4('0x3b')](_0x501161,_0x4e89d8,_0x6b0838,0x1);}});}}[_0x14c4('0x3b')](_0x7b1900,_0x3b95a4,_0x3df2a6,_0x434630){if(_0x434630<=0x5){MemberStatistics['findById'](_0x3df2a6[_0x14c4('0x2e')],(_0x2705b3,_0x351489)=>{MemberStatistics[_0x14c4('0x1c')](_0x351489[_0x14c4('0x19')],{'systemLending':new bigNumber(_0x351489[_0x14c4('0x3c')])[_0x14c4('0x23')](_0x7b1900[_0x14c4('0x1f')])[_0x14c4('0x14')]()},()=>{});});}if(Config['bonus']['direct'][_0x434630]){if(_0x3df2a6&&_0x3df2a6[_0x14c4('0x34')]){Member[_0x14c4('0x1e')](_0x3df2a6[_0x14c4('0x34')],(_0x2aff19,_0x22711d)=>{if(_0x22711d){this['__IniDirect'](_0x7b1900,_0x3b95a4,_0x22711d,_0x434630+0x1);}});}MemberStatistics[_0x14c4('0x1e')](_0x3df2a6[_0x14c4('0x2e')],(_0xd0e459,_0x47a59b)=>{let _0xe17810=0x8;if(_0x47a59b[_0x14c4('0x3c')]<0x4baf0){_0xe17810=0x3;}else if(_0x47a59b[_0x14c4('0x3c')]<0xc5c10){_0xe17810=0x5;}if(_0xe17810>=_0x434630){let _0x37b129=_0x7b1900[_0x14c4('0x1f')]/0x64*Config[_0x14c4('0x3d')][_0x14c4('0x3e')][_0x434630];DirectBonus[_0x14c4('0x29')]({'member':_0x3df2a6[_0x14c4('0x19')],'memberInvest':_0x7b1900[_0x14c4('0x19')],'percent':Config[_0x14c4('0x3d')]['direct'][_0x434630],'lv':_0x434630,'description':_0x14c4('0x3f')+_0x3b95a4[_0x14c4('0x40')]+'\x20'+Config[_0x14c4('0x3d')][_0x14c4('0x3e')][_0x434630]+_0x14c4('0x39')+_0x7b1900[_0x14c4('0x1f')]+'$','amount':_0x37b129,'create':_0x7b1900[_0x14c4('0x29')]},(_0x31aac0,_0x222a72)=>{UsdTransaction['create']({'member':_0x3df2a6[_0x14c4('0x19')],'type':_0x14c4('0x41'),'to':'USD','description':_0x14c4('0x3f')+_0x3b95a4[_0x14c4('0x40')]+'\x20'+Config[_0x14c4('0x3d')][_0x14c4('0x3e')][_0x434630]+'%\x20of\x20'+_0x7b1900[_0x14c4('0x1f')]+'$','amount':_0x37b129,'foreignKey':_0x222a72[_0x14c4('0x19')]},()=>{});MemberBalance[_0x14c4('0x1e')](_0x3df2a6[_0x14c4('0x2c')],(_0x339fe3,_0x4eec22)=>{MemberBalance[_0x14c4('0x1c')](_0x4eec22[_0x14c4('0x19')],{'direct':new bigNumber(_0x4eec22[_0x14c4('0x3e')])['plus'](_0x37b129)},()=>{MemberStatistics[_0x14c4('0x1e')](_0x3df2a6['statistics'],(_0x338681,_0x4c4cf8)=>{MemberStatistics[_0x14c4('0x1c')](_0x4c4cf8[_0x14c4('0x19')],{'balance.direct':new bigNumber(_0x4c4cf8[_0x14c4('0x2c')][_0x14c4('0x3e')])[_0x14c4('0x23')](_0x37b129)},()=>{});});});});});}});}}}module[_0x14c4('0x42')]=new LbInvest();