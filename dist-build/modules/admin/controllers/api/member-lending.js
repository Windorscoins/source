var _0xe0cf=['./../../../../models/Tx','./../../../../config/config','bignumber.js','config','underscore','index','_id','length','first','rest','delete','member','findById','statistics','update','systemLending','minus','amount','valueOf','deleteQ','balance','direct','RemoveInterest','findAllQ','interestReceived','total','earned','investment','capitalReleased','dailly','post','body','RemoveDirect','findOne','rootUsername','create','address','coin','plus','totalSend','storage','USD','active','json','get','omit','results','page','exports','router','./../../../../models/MemberInvest','./../../../../models/DirectBonus','./../../../../models/Member','./../../../../models/MemberStatistics','./../../../../models/MemberBalance','./../../../../models/UsdTransaction'];(function(_0x3a99c0,_0x246432){var _0x2e2788=function(_0x3c6744){while(--_0x3c6744){_0x3a99c0['push'](_0x3a99c0['shift']());}};_0x2e2788(++_0x246432);}(_0xe0cf,0x1ba));var _0xfe0c=function(_0x2dbdf9,_0x1d6bcf){_0x2dbdf9=_0x2dbdf9-0x0;var _0x4ce49e=_0xe0cf[_0x2dbdf9];return _0x4ce49e;};'use strict';const core=require('./../../../../core/core');const MemberInvest=require(_0xfe0c('0x0'));const DirectBonus=require(_0xfe0c('0x1'));const Member=require(_0xfe0c('0x2'));const MemberStatistics=require(_0xfe0c('0x3'));const MemberBalance=require(_0xfe0c('0x4'));const UsdTransaction=require(_0xfe0c('0x5'));const WalletAddress=require('./../../../../models/WalletAddress');const MemberInterestReceived=require('./../../../../models/MemberInterestReceived');const Tx=require(_0xfe0c('0x6'));const Config=require(_0xfe0c('0x7'));var bigNumber=require(_0xfe0c('0x8'));bigNumber[_0xfe0c('0x9')]({'DECIMAL_PLACES':0x8,'ERRORS':![],'ROUNDING_MODE':0x1});const _=require(_0xfe0c('0xa'));class AdminApiMemberLending extends core{constructor(){super();this[_0xfe0c('0xb')]();}['RemoveDirect'](_0x5491f2,_0x2d806f){DirectBonus['findAllQ']({'memberInvest':_0x5491f2[_0xfe0c('0xc')]},(_0x4d28f6,_0x109353)=>{if(_0x109353&&_0x109353['length']){let _0x4af49c=[];let _0x53ba5f=_0x62a829=>{if(_0x62a829&&_0x62a829[_0xfe0c('0xd')]){let _0x1e712b=_[_0xfe0c('0xe')](_0x62a829);let _0xd56713=()=>{_0x53ba5f(_[_0xfe0c('0xf')](_0x62a829));};DirectBonus[_0xfe0c('0x10')](_0x1e712b[_0xfe0c('0xc')],()=>{Member['findById'](_0x1e712b[_0xfe0c('0x11')],(_0x136192,_0x3533c5)=>{MemberStatistics[_0xfe0c('0x12')](_0x3533c5[_0xfe0c('0x13')],(_0x4edd2f,_0x2611ff)=>{MemberStatistics[_0xfe0c('0x14')](_0x2611ff[_0xfe0c('0xc')],{'systemLending':_0x1e712b['lv']<=0x5?new bigNumber(_0x2611ff[_0xfe0c('0x15')])[_0xfe0c('0x16')](_0x5491f2[_0xfe0c('0x17')])[_0xfe0c('0x18')]():_0x2611ff[_0xfe0c('0x15')],'balance.direct':new bigNumber(_0x2611ff['balance']['direct'])[_0xfe0c('0x16')](_0x1e712b[_0xfe0c('0x17')])},()=>{UsdTransaction[_0xfe0c('0x19')]({'foreignKey':_0x1e712b[_0xfe0c('0xc')]},()=>{MemberBalance[_0xfe0c('0x12')](_0x3533c5[_0xfe0c('0x1a')],(_0x4aabb8,_0x49f353)=>{MemberBalance[_0xfe0c('0x14')](_0x49f353[_0xfe0c('0xc')],{'direct':new bigNumber(_0x49f353[_0xfe0c('0x1b')])[_0xfe0c('0x16')](_0x1e712b['amount'])},()=>{_0xd56713();});});});});});});});}else{_0x2d806f();}};_0x53ba5f(_0x109353);}else{this[_0xfe0c('0x1c')](_0x5491f2,()=>{_0x2d806f();});}});}[_0xfe0c('0x1c')](_0x4dac8b,_0x533dcc){MemberInterestReceived[_0xfe0c('0x1d')]({'memberInvest':_0x4dac8b[_0xfe0c('0xc')]},(_0x17339c,_0x36c023)=>{if(_0x36c023&&_0x36c023[_0xfe0c('0xd')]){let _0x246336=_0x4c7bb1=>{if(_0x4c7bb1&&_0x4c7bb1['length']){let _0x7839fc=_[_0xfe0c('0xe')](_0x4c7bb1);let _0x374ff4=()=>{_0x246336(_[_0xfe0c('0xf')](_0x4c7bb1));};MemberInterestReceived['delete'](_0x7839fc[_0xfe0c('0xc')],()=>{UsdTransaction[_0xfe0c('0x19')]({'foreignKey':_0x7839fc[_0xfe0c('0xc')]},()=>{Member[_0xfe0c('0x12')](_0x7839fc['member'],(_0x160c88,_0x567883)=>{MemberBalance[_0xfe0c('0x12')](_0x567883[_0xfe0c('0x1a')],(_0x2b999a,_0x126aa5)=>{MemberStatistics[_0xfe0c('0x12')](_0x567883['statistics'],_0x5bd9c3=>{MemberBalance[_0xfe0c('0x14')](_0x126aa5['_id'],{'interestReceived':new bigNumber(_0x126aa5[_0xfe0c('0x1e')])[_0xfe0c('0x16')](_0x7839fc['earned'][_0xfe0c('0x1f')])},()=>{MemberStatistics[_0xfe0c('0x14')](_0x5bd9c3[_0xfe0c('0xc')],{'balance.interestReceived':new bigNumber(_0x5bd9c3[_0xfe0c('0x1a')]['interestReceived'])['minus'](_0x7839fc[_0xfe0c('0x20')][_0xfe0c('0x1f')]),'investment.earned.total':new bigNumber(_0x5bd9c3[_0xfe0c('0x21')][_0xfe0c('0x20')][_0xfe0c('0x1f')])[_0xfe0c('0x16')](_0x7839fc[_0xfe0c('0x20')][_0xfe0c('0x1f')]),'investment.earned.interestReceived':new bigNumber(_0x5bd9c3[_0xfe0c('0x21')][_0xfe0c('0x20')]['interestReceived'])['minus'](_0x7839fc[_0xfe0c('0x20')][_0xfe0c('0x1e')]),'investment.earned.capitalReleased':new bigNumber(_0x5bd9c3[_0xfe0c('0x21')][_0xfe0c('0x20')][_0xfe0c('0x22')])['minus'](_0x7839fc[_0xfe0c('0x20')][_0xfe0c('0x22')]),'investment.earned.dailly':new bigNumber(_0x5bd9c3['investment']['earned'][_0xfe0c('0x23')])[_0xfe0c('0x16')](_0x7839fc[_0xfe0c('0x20')][_0xfe0c('0x23')])},()=>{_0x374ff4();});});});});});});});}else{_0x533dcc();}};_0x246336(_0x36c023);}else{_0x533dcc();}});}[_0xfe0c('0xb')](){this[_0xfe0c('0x24')]('/',(_0x259914,_0x1b68c2)=>{MemberInvest[_0xfe0c('0x12')](_0x259914[_0xfe0c('0x25')]['id'],(_0x4160cc,_0xa551e9)=>{if(_0xa551e9){this[_0xfe0c('0x26')](_0xa551e9,()=>{Member[_0xfe0c('0x12')](_0xa551e9['member'],(_0x17c793,_0x3fd3e7)=>{MemberBalance[_0xfe0c('0x12')](_0x3fd3e7[_0xfe0c('0x1a')],(_0x1688dc,_0x5cf267)=>{MemberStatistics[_0xfe0c('0x12')](_0x3fd3e7[_0xfe0c('0x13')],(_0x5dfb30,_0x2230c5)=>{WalletAddress[_0xfe0c('0x27')]({'member':_0x3fd3e7[_0xfe0c('0xc')]},(_0x27c154,_0x44259f)=>{Member['findOne']({'username':Config[_0xfe0c('0x28')]},(_0x2e5442,_0x5a5294)=>{WalletAddress[_0xfe0c('0x27')]({'member':_0x5a5294['_id']},(_0x5975d9,_0x1c6c4b)=>{Tx[_0xfe0c('0x29')]({'to':_0x44259f[_0xfe0c('0x2a')],'from':_0x1c6c4b[_0xfe0c('0x2a')],'amount':_0xa551e9[_0xfe0c('0x2b')],'status':0x1},()=>{WalletAddress[_0xfe0c('0x14')](_0x44259f['_id'],{'balance':new bigNumber(_0x44259f[_0xfe0c('0x1a')])[_0xfe0c('0x2c')](_0xa551e9['coin']),'totalReceived':new bigNumber(_0x44259f['totalReceived'])[_0xfe0c('0x2c')](_0xa551e9[_0xfe0c('0x2b')])},(_0x333016,_0x587e9a)=>{WalletAddress[_0xfe0c('0x14')](_0x1c6c4b[_0xfe0c('0xc')],{'balance':new bigNumber(_0x1c6c4b[_0xfe0c('0x1a')])['minus'](_0xa551e9[_0xfe0c('0x2b')]),'totalSend':new bigNumber(_0x1c6c4b[_0xfe0c('0x2d')])[_0xfe0c('0x2c')](_0xa551e9[_0xfe0c('0x2b')])},(_0x3d5732,_0x4a55ae)=>{MemberBalance['update'](_0x5cf267[_0xfe0c('0xc')],{'coin':new bigNumber(_0x5cf267[_0xfe0c('0x2b')])[_0xfe0c('0x2c')](_0xa551e9[_0xfe0c('0x2b')]),'storage':new bigNumber(_0x5cf267[_0xfe0c('0x2e')])[_0xfe0c('0x2c')](_0xa551e9[_0xfe0c('0x2b')])},()=>{MemberStatistics[_0xfe0c('0x14')](_0x3fd3e7[_0xfe0c('0x13')],{'investment.total.USD':new bigNumber(_0x2230c5['investment'][_0xfe0c('0x1f')][_0xfe0c('0x2f')])['minus'](_0xa551e9['amount']),'investment.total.coin':new bigNumber(_0x2230c5[_0xfe0c('0x21')][_0xfe0c('0x1f')][_0xfe0c('0x2b')])[_0xfe0c('0x16')](_0xa551e9[_0xfe0c('0x2b')]),'investment.active.USD':new bigNumber(_0x2230c5['investment']['active']['USD'])[_0xfe0c('0x16')](_0xa551e9[_0xfe0c('0x17')]),'investment.active.coin':new bigNumber(_0x2230c5[_0xfe0c('0x21')][_0xfe0c('0x30')][_0xfe0c('0x2b')])[_0xfe0c('0x16')](_0xa551e9[_0xfe0c('0x2b')])},()=>{MemberInvest['delete'](_0xa551e9['_id'],()=>{_0x1b68c2[_0xfe0c('0x31')]({'status':!![]});});});});});});});});});});});});});});}else{_0x1b68c2[_0xfe0c('0x31')]({'status':!![]});}});});this[_0xfe0c('0x32')]('/',(_0x137a69,_0x2d6f08)=>{MemberInvest['findAllMember']((_0x2fa1fa,_0x4d7ba3,_0x11b863)=>{_0x2d6f08[_0xfe0c('0x31')]({'status':!![],'lending':_0x4d7ba3,'pagination':this['_'][_0xfe0c('0x33')](_0x11b863,_0xfe0c('0x34'))});},+_0x137a69['query']['per_page']||0x14,+_0x137a69['query'][_0xfe0c('0x35')]||0x0,{'min':0x1});});}}module[_0xfe0c('0x36')]=new AdminApiMemberLending()[_0xfe0c('0x37')];