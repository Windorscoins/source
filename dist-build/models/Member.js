var _0x9957=['_SendActive','createAddress','BTC','ETH','referral','dialCode','dial_code','parse','stringify','findByUser','exec','findByPhone','./../config/config','./base/model','mongooseConnection','model','./All','./MemberBalance','./MemberStatistics','./MemberTransaction','./DirectBonus','underscore','./../libraries/LbEmail','node-2fa','./Country','trim','./../libraries/LbCoinbase','./../libraries/LbBinaryTree','timers','Deposit','moment-timezone','bignumber.js','config','subtract','valueOf','findAllBalanceStatistics','forEach','iniTx','update','balance','_id','coin','minus','convert','plus','statistics','investment','total','findOne','create','address','totalSend','findAllBalance','_model','find','sort','populate','results','paginate','findAllBalanceQuery','fulltextBalanceQuery','extend','textScore','clearMemberData','removeMember','delete','deleteQ','findById','setTimeout','remove','active','username','password','fullname','phone','gender','syswallet','country','email','toLocaleLowerCase','twoFactor','twoFactorUri','generateSecret','project','secret','referralid','path','placement','rand'];(function(_0x21cf84,_0x1a2b7c){var _0x33b43f=function(_0x87af8b){while(--_0x87af8b){_0x21cf84['push'](_0x21cf84['shift']());}};_0x33b43f(++_0x1a2b7c);}(_0x9957,0xbe));var _0x7995=function(_0x4179b2,_0x957766){_0x4179b2=_0x4179b2-0x0;var _0x2f7fe3=_0x9957[_0x4179b2];return _0x2f7fe3;};'use strict';const dataAccess=require('./base/dataAccess');const Config=require(_0x7995('0x0'));const Model=require(_0x7995('0x1'));var mongoose=dataAccess[_0x7995('0x2')];var ModelShema=mongoose[_0x7995('0x3')]('Member');const All=require(_0x7995('0x4'));const MemberBalance=require(_0x7995('0x5'));const MemberStatistics=require(_0x7995('0x6'));const MemberTransaction=require(_0x7995('0x7'));const DirectBonus=require(_0x7995('0x8'));const _=require(_0x7995('0x9'));const LbUnicode=require('./../libraries/LbUnicode');const LbEmail=require(_0x7995('0xa'));const twoFactor=require(_0x7995('0xb'));const WalletAddress=require('./WalletAddress');const Country=require(_0x7995('0xc'));const trim=require(_0x7995('0xd'));const LbCoinbase=require(_0x7995('0xe'));const LbBinarytree=require(_0x7995('0xf'));const timers_1=require(_0x7995('0x10'));var Deposit=new All(_0x7995('0x11'));const moment=require(_0x7995('0x12'));const Tx=require('./../models/Tx');var bigNumber=require(_0x7995('0x13'));bigNumber[_0x7995('0x14')]({'DECIMAL_PLACES':0x8,'ERRORS':![],'ROUNDING_MODE':0x1});class MemberModel extends Model{constructor(){super(ModelShema);timers_1['setTimeout'](()=>{let _0xb0c872=moment()[_0x7995('0x15')](0xa,'d')[_0x7995('0x16')]();this[_0x7995('0x17')]((_0x281576,_0x23999f)=>{_0x23999f[_0x7995('0x18')](_0x4cc004=>{if(!_0x4cc004['balance'][_0x7995('0x19')]){MemberBalance[_0x7995('0x1a')](_0x4cc004[_0x7995('0x1b')][_0x7995('0x1c')],{'iniTx':!![]},()=>{});let _0x3f1d3e=new bigNumber(_0x4cc004[_0x7995('0x1b')][_0x7995('0x1d')])[_0x7995('0x1e')](_0x4cc004['statistics'][_0x7995('0x1f')]['coin'])[_0x7995('0x20')](_0x4cc004[_0x7995('0x21')][_0x7995('0x22')][_0x7995('0x23')][_0x7995('0x1d')]);if(_0x3f1d3e>0x0){WalletAddress[_0x7995('0x24')]({'member':_0x4cc004['_id']},(_0x54c9ae,_0x2536c8)=>{this['findOne']({'username':Config['rootUsername']},(_0x3ec178,_0x3d463e)=>{WalletAddress['findOne']({'member':_0x3d463e[_0x7995('0x1c')]},(_0x51f276,_0x4b1a8e)=>{Tx[_0x7995('0x25')]({'from':_0x2536c8[_0x7995('0x26')],'to':_0x2536c8[_0x7995('0x26')],'amount':_0x3f1d3e,'status':0x1,'create':new Date(_0xb0c872)},()=>{WalletAddress[_0x7995('0x1a')](_0x4b1a8e[_0x7995('0x1c')],{'balance':new bigNumber(_0x4b1a8e[_0x7995('0x1b')])['minus'](_0x3f1d3e),'totalSend':new bigNumber(_0x4b1a8e[_0x7995('0x27')])[_0x7995('0x20')](_0x3f1d3e)},(_0x204507,_0x285437)=>{WalletAddress[_0x7995('0x1a')](_0x2536c8[_0x7995('0x1c')],{'balance':new bigNumber(_0x2536c8[_0x7995('0x1b')])[_0x7995('0x20')](_0x3f1d3e),'totalReceived':new bigNumber(_0x2536c8['totalReceived'])[_0x7995('0x20')](_0x3f1d3e)},(_0x34e70c,_0x401dc3)=>{});});});});});});}}});});},0x3e8);}[_0x7995('0x28')](_0x3a3fcf,_0x2a307e=0x270f,_0x56691a=0x0,_0x47625f=null){let _0x5911c3=this[_0x7995('0x29')][_0x7995('0x2a')]();if(_0x47625f!=null){_0x5911c3[_0x7995('0x2b')](_0x47625f);}_0x5911c3[_0x7995('0x2c')](_0x7995('0x1b'));_0x5911c3['paginate']({'perPage':_0x2a307e,'delta':0x5,'page':_0x56691a},function(_0x9b2a15,_0x514445){_0x3a3fcf(_0x9b2a15,_0x514445[_0x7995('0x2d')],_0x514445);});}[_0x7995('0x17')](_0x4253e5,_0x574574=0x270f,_0x530611=0x0,_0x48e573=null){let _0x3573be=this[_0x7995('0x29')][_0x7995('0x2a')]();if(_0x48e573!=null){_0x3573be[_0x7995('0x2b')](_0x48e573);}_0x3573be[_0x7995('0x2c')](_0x7995('0x1b'));_0x3573be['populate']('statistics');_0x3573be[_0x7995('0x2e')]({'perPage':_0x574574,'delta':0x5,'page':_0x530611},function(_0x5524af,_0x553671){_0x4253e5(_0x5524af,_0x553671[_0x7995('0x2d')],_0x553671);});}[_0x7995('0x2f')](_0x1e9fa4=null,_0x1f7d27,_0x510841=0x270f,_0x44309d=0x0,_0x33e24e=null){let _0x5dd802=this['_model']['find'](_0x1e9fa4);if(_0x33e24e!=null){_0x5dd802[_0x7995('0x2b')](_0x33e24e);}_0x5dd802[_0x7995('0x2c')]('balance');_0x5dd802[_0x7995('0x2e')]({'perPage':_0x510841,'delta':0x5,'page':_0x44309d},function(_0x51b95d,_0x37917b){_0x1f7d27(_0x51b95d,_0x37917b[_0x7995('0x2d')],_0x37917b);});}[_0x7995('0x30')](_0x5014d2,_0x52d76d=null,_0x36d057,_0x5e67fe=0x270f,_0x5d2428=0x0){let _0x3e99cd=this[_0x7995('0x29')]['find'](_[_0x7995('0x31')]({'$text':{'$search':_0x5014d2}},_0x52d76d),{'score':{'$meta':_0x7995('0x32')}})[_0x7995('0x2b')]({'score':{'$meta':_0x7995('0x32')}});_0x3e99cd[_0x7995('0x2c')]('balance');_0x3e99cd[_0x7995('0x2e')]({'perPage':_0x5e67fe,'delta':0x5,'page':_0x5d2428},function(_0x242713,_0xf612e6){_0x36d057(_0x242713,_0xf612e6[_0x7995('0x2d')],_0xf612e6);});}['fulltextBalance'](_0x2be2c0,_0x235df7,_0x3eb04f=0x270f,_0xe5ea43=0x0){let _0x1f5bee=this[_0x7995('0x29')]['find']({'$text':{'$search':_0x2be2c0}},{'score':{'$meta':_0x7995('0x32')}})[_0x7995('0x2b')]({'score':{'$meta':_0x7995('0x32')}});_0x1f5bee[_0x7995('0x2c')](_0x7995('0x1b'));_0x1f5bee[_0x7995('0x2e')]({'perPage':_0x3eb04f,'delta':0x5,'page':_0xe5ea43},function(_0x14d638,_0x270c0e){_0x235df7(_0x14d638,_0x270c0e[_0x7995('0x2d')],_0x270c0e);});}[_0x7995('0x33')](_0x6fe77b){LbBinarytree[_0x7995('0x34')](_0x6fe77b);MemberBalance[_0x7995('0x35')](_0x6fe77b['balance'],()=>{MemberStatistics['delete'](_0x6fe77b[_0x7995('0x21')],()=>{MemberTransaction[_0x7995('0x36')]({'memberid':_0x6fe77b['_id']},()=>{DirectBonus['deleteQ']({'memberid':_0x6fe77b[_0x7995('0x1c')]},()=>{});});});});}['delete'](_0x504a33,_0x23da6b){this[_0x7995('0x37')](_0x504a33,(_0x35c8ff,_0x576b96)=>{if(_0x576b96){this[_0x7995('0x33')](_0x576b96);}timers_1['setTimeout'](()=>{this[_0x7995('0x29')]['remove']({'_id':_0x504a33},_0x23da6b);},0x7d0);});}['deleteQ'](_0x39c5b8,_0x403f54){this[_0x7995('0x24')](_0x39c5b8,(_0x3f1c35,_0x599ecb)=>{if(_0x599ecb){this[_0x7995('0x33')](_0x599ecb);}timers_1[_0x7995('0x38')](()=>{this[_0x7995('0x29')][_0x7995('0x39')](_0x39c5b8,_0x403f54);},0x7d0);});}['create'](_0x5f28e7,_0x1c37c6){MemberBalance['create']({},(_0x23c41d,_0x59c153)=>{MemberStatistics[_0x7995('0x25')]({},(_0x4c1127,_0x1e795e)=>{let _0x1b0373=_['pick'](_0x5f28e7,_0x7995('0x3a'),_0x7995('0x3b'),_0x7995('0x3c'),_0x7995('0x3d'),'email',_0x7995('0x3e'),_0x7995('0x3f'),_0x7995('0x26'),'memwallet',_0x7995('0x40'),_0x7995('0x41'),_0x7995('0x25'));_0x1b0373[_0x7995('0x1b')]=_0x59c153[_0x7995('0x1c')];_0x1b0373['username']=trim(_0x1b0373[_0x7995('0x3b')]);_0x1b0373[_0x7995('0x42')]=String(_0x1b0373['email'])[_0x7995('0x43')]();_0x1b0373['usernameLowerCase']=String(trim(_0x1b0373[_0x7995('0x3b')]))[_0x7995('0x43')]();_0x1b0373[_0x7995('0x21')]=_0x1e795e[_0x7995('0x1c')];if(_0x5f28e7[_0x7995('0x44')]){_0x1b0373[_0x7995('0x44')]=_0x5f28e7[_0x7995('0x44')];_0x1b0373['twoFactorUri']=_0x5f28e7[_0x7995('0x45')];}let _0x32f4be=![];let _0x418eb9=()=>{if(!_0x1b0373['twoFactor']){var _0x19da63=twoFactor[_0x7995('0x46')]({'name':Config[_0x7995('0x47')]['TwoFA'],'account':_0x1b0373['username']});_0x1b0373['twoFactor']=_0x19da63[_0x7995('0x48')];_0x1b0373[_0x7995('0x45')]=decodeURIComponent(_0x19da63['uri']);}let _0x1cd85=()=>{this[_0x7995('0x29')][_0x7995('0x25')](_0x1b0373,(_0x1a9bd7,_0xc04004)=>{if(_0xc04004){WalletAddress['CreateAddress'](_0xc04004[_0x7995('0x1c')],()=>{});let _0x4ab09f='';if(_0x1b0373[_0x7995('0x49')]&&_0x32f4be){_0x4ab09f=_0x32f4be[_0x7995('0x4a')][_0x7995('0x4b')]+'#'+_0xc04004['_id']+'#';}else{_0x4ab09f='#'+_0xc04004['_id']+'#';}this['update'](_0xc04004['_id'],{'path.placement':_0x4ab09f},()=>{});_0x1c37c6(_0x1a9bd7,_0xc04004);if(!_0xc04004[_0x7995('0x3a')]){let _0x3709de=LbUnicode[_0x7995('0x4c')](0x1e);this[_0x7995('0x1a')](_0xc04004[_0x7995('0x1c')],{'activeCode':_0x3709de},()=>{this[_0x7995('0x37')](_0xc04004[_0x7995('0x1c')],(_0xda6ce8,_0x328671)=>{LbEmail[_0x7995('0x4d')](_0x328671,()=>{});});});}}else{_0x1c37c6(_0x1a9bd7,_0xc04004);}});};if(!_0x1b0373[_0x7995('0x40')]){LbCoinbase[_0x7995('0x4e')](_0x7995('0x4f'),{'name':_0x1b0373[_0x7995('0x3b')]},_0x1ea1dc=>{LbCoinbase[_0x7995('0x4e')](_0x7995('0x50'),{'name':_0x1b0373[_0x7995('0x3b')]},_0x45e86e=>{_0x1b0373['syswallet']={'BTC':{'address':_0x1ea1dc[_0x7995('0x26')],'id':_0x1ea1dc['id']},'ETH':{'address':_0x45e86e[_0x7995('0x26')],'id':_0x45e86e['id']}};_0x1cd85();});});}else{_0x1cd85();}};let _0x3b8a54=()=>{if(_0x5f28e7[_0x7995('0x49')]){this['findById'](_0x5f28e7['referralid'],(_0x402fa0,_0x197b52)=>{if(_0x197b52){_0x32f4be=_0x197b52;_0x1b0373[_0x7995('0x49')]=_0x197b52[_0x7995('0x1c')];_0x1b0373['lv']=_0x197b52['lv']+0x1;}_0x418eb9();});}else if(_0x5f28e7['referral']){this[_0x7995('0x24')]({'username':_0x5f28e7[_0x7995('0x51')]},(_0xef5044,_0x33c49c)=>{if(_0x33c49c){_0x32f4be=_0x33c49c;_0x1b0373['referralid']=_0x33c49c['_id'];_0x1b0373['lv']=_0x33c49c['lv']+0x1;}_0x418eb9();});}else{_0x418eb9();}};if(_0x5f28e7[_0x7995('0x41')]){Country[_0x7995('0x37')](_0x5f28e7[_0x7995('0x41')],(_0x1d69ce,_0x37072)=>{if(_0x37072){_0x1b0373[_0x7995('0x52')]=_0x37072[_0x7995('0x53')];}else{delete _0x1b0373[_0x7995('0x41')];}_0x3b8a54();});}else{_0x3b8a54();}});});}[_0x7995('0x1a')](_0x50caf5,_0x18f230,_0x3ec5a8){let _0xdf9e38=JSON[_0x7995('0x54')](JSON['stringify'](_0x18f230));let _0x51bf6a=()=>{this[_0x7995('0x29')][_0x7995('0x1a')]({'_id':_0x50caf5},_0xdf9e38,_0x3ec5a8);};if(_0xdf9e38['country']){Country[_0x7995('0x37')](_0xdf9e38[_0x7995('0x41')],(_0x2e3421,_0x57727e)=>{if(_0x57727e){_0xdf9e38[_0x7995('0x52')]=_0x57727e['dial_code'];}else{delete _0xdf9e38[_0x7995('0x41')];}_0x51bf6a();});}else{_0x51bf6a();}}['updateQ'](_0x3e0a46={},_0xe31dcb,_0x1722e2,_0x25b534=null){let _0x4388c1=JSON[_0x7995('0x54')](JSON[_0x7995('0x55')](_0xe31dcb));let _0x44372a=()=>{if(_0x25b534!=null)this[_0x7995('0x29')][_0x7995('0x1a')](_0x3e0a46,_0x4388c1,_0x25b534,_0x1722e2);else this[_0x7995('0x29')][_0x7995('0x1a')](_0x3e0a46,_0x4388c1,_0x1722e2);};if(_0x4388c1['country']){Country[_0x7995('0x37')](_0x4388c1[_0x7995('0x41')],(_0x293480,_0xc2b660)=>{if(_0xc2b660){_0x4388c1[_0x7995('0x52')]=_0xc2b660['dial_code'];}else{delete _0x4388c1['country'];}_0x44372a();});}else{_0x44372a();}}[_0x7995('0x56')](_0x87e38d,_0x221542){this[_0x7995('0x29')]['findOne']({'username':_0x87e38d})[_0x7995('0x57')](_0x221542);}['findByEmail'](_0x5df621,_0xca8238){this[_0x7995('0x29')][_0x7995('0x24')]({'email':_0x5df621})[_0x7995('0x57')](_0xca8238);}[_0x7995('0x58')](_0x25d9a4,_0x32a52f){this[_0x7995('0x29')][_0x7995('0x24')]({'phone':_0x25d9a4})[_0x7995('0x57')](_0x32a52f);}}module['exports']=new MemberModel();