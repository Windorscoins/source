var _0x0d2c=['statistics','buycoin','Buy\x20ICO','buy','DoUpdateInfo','updateMemberTransaction','json','exports','router','./../../../../core/core','./../../../../models/MemberBalance','./../../../../models/MemberStatistics','./../../../../models/WalletAddress','./../../../../models/WalletTransaction','./../../../../libraries/LbCoinmarketcap','./../../../../models/CoinConfig','./../../../../models/SysConfig','./../../../../config/config','./../../../../models/MemberBuyCoin','./../../../../models/CoinTransaction','./../../../../models/BtcTransaction','./../../../../libraries/LbBuyCoin','bignumber.js','config','index','post','type','BTC','amount','notEmpty','member','_id','withMessage','buyCoinTime','canNotBuyCoinThisTime','checkBody','amountRequired','asyncValidationErrors','then','startOf','day','valueOf','body','updateQ','plus','sold','sold_coin','value','findOne','qty','getTicker','div','price_usd','ETH','__Ini','rootUsername','address','update','balance','totalReceived','minus','findById','create','syswallet','buyICO','coin','ICO\x20Order','buy_ico'];(function(_0x5b4826,_0x4a3682){var _0xd64a1a=function(_0x52f8d9){while(--_0x52f8d9){_0x5b4826['push'](_0x5b4826['shift']());}};_0xd64a1a(++_0x4a3682);}(_0x0d2c,0x91));var _0xc0d2=function(_0x3d70d8,_0x155a9d){_0x3d70d8=_0x3d70d8-0x0;var _0x576d58=_0x0d2c[_0x3d70d8];return _0x576d58;};'use strict';const core=require(_0xc0d2('0x0'));const Member=require('./../../../../models/Member');const MemberBalance=require(_0xc0d2('0x1'));const MemberStatistics=require(_0xc0d2('0x2'));const WalletAddress=require(_0xc0d2('0x3'));const WalletTransaction=require(_0xc0d2('0x4'));const LbCoinmarketcap=require(_0xc0d2('0x5'));const CoinConfig=require(_0xc0d2('0x6'));const SysConfig=require(_0xc0d2('0x7'));const Config=require(_0xc0d2('0x8'));const MemberBuyCoin=require(_0xc0d2('0x9'));const CoinTransaction=require(_0xc0d2('0xa'));const EthTransaction=require('./../../../../models/EthTransaction');const BtcTransaction=require(_0xc0d2('0xb'));const LbBuyCoin=require(_0xc0d2('0xc'));const moment=require('moment-timezone');var bigNumber=require(_0xc0d2('0xd'));const Tx=require('./../../../../models/Tx');bigNumber[_0xc0d2('0xe')]({'DECIMAL_PLACES':0x8,'ERRORS':![],'ROUNDING_MODE':0x1});class DefaultApiBuyCoin extends core{constructor(){super();this[_0xc0d2('0xf')]();}[_0xc0d2('0xf')](){this[_0xc0d2('0x10')]('/',(_0x2b0236,_0x17ac36)=>{if(_0x2b0236['body'][_0xc0d2('0x11')]==_0xc0d2('0x12'))_0x2b0236['checkBody'](_0xc0d2('0x13'),__('amountRequired'))[_0xc0d2('0x14')]()['BuyBTCAmount'](_0x2b0236[_0xc0d2('0x15')][_0xc0d2('0x16')])[_0xc0d2('0x17')](__('amountNotValid'))[_0xc0d2('0x18')]()[_0xc0d2('0x17')](__(_0xc0d2('0x19')));else _0x2b0236[_0xc0d2('0x1a')]('amount',__(_0xc0d2('0x1b')))['notEmpty']()['BuyETHAmount'](_0x2b0236['member']['_id'])[_0xc0d2('0x17')](__('amountNotValid'))[_0xc0d2('0x18')]()[_0xc0d2('0x17')](__(_0xc0d2('0x19')));_0x2b0236[_0xc0d2('0x1c')]()[_0xc0d2('0x1d')](()=>{let _0x283595=moment()['tz'](Config['time'])[_0xc0d2('0x1e')](_0xc0d2('0x1f'))[_0xc0d2('0x20')]();let _0x31acad=+_0x2b0236[_0xc0d2('0x21')][_0xc0d2('0x13')];CoinConfig['findOne']({'date':_0x283595},(_0x34e1f8,_0xb867fa)=>{CoinConfig[_0xc0d2('0x22')]({'date':_0x283595},{'sold':new bigNumber(_0x31acad)[_0xc0d2('0x23')](_0xb867fa[_0xc0d2('0x24')])},()=>{});});SysConfig['findOne']({'code':_0xc0d2('0x25')},(_0x1fb883,_0x5d64e3)=>{SysConfig['updateQ']({'code':'sold_coin'},{'value':new bigNumber(_0x31acad)[_0xc0d2('0x23')](_0x5d64e3[_0xc0d2('0x26')])},()=>{});});MemberBuyCoin[_0xc0d2('0x27')]({'member':_0x2b0236[_0xc0d2('0x15')][_0xc0d2('0x16')],'date':_0x283595},(_0x483b0f,_0x1f92a0)=>{MemberBuyCoin['updateQ']({'member':_0x2b0236[_0xc0d2('0x15')][_0xc0d2('0x16')],'date':_0x283595},{'qty':new bigNumber(_0x2b0236[_0xc0d2('0x21')][_0xc0d2('0x13')])[_0xc0d2('0x23')](_0x1f92a0?_0x1f92a0[_0xc0d2('0x28')]:0x0)},(_0x3a0258,_0x2c0af6)=>{},{'upsert':!![]});});CoinConfig[_0xc0d2('0x27')]({'date':_0x283595},(_0x58a004,_0x8b9741)=>{let _0x43b11e=_0x31acad*_0x8b9741['price'];LbCoinmarketcap[_0xc0d2('0x29')](_0x1fa9f=>{let _0x4614fb=new bigNumber(_0x43b11e)[_0xc0d2('0x2a')](_0x1fa9f['BTC'][_0xc0d2('0x2b')]);let _0x2b4fcd=new bigNumber(_0x43b11e)[_0xc0d2('0x2a')](_0x1fa9f[_0xc0d2('0x2c')][_0xc0d2('0x2b')]);Member['findById'](_0x2b0236[_0xc0d2('0x15')]['_id'],(_0x11971c,_0x5883c8)=>{LbBuyCoin[_0xc0d2('0x2d')](_0x5883c8[_0xc0d2('0x16')],_0x31acad,0x1,_0x5883c8);WalletAddress[_0xc0d2('0x27')]({'member':_0x5883c8[_0xc0d2('0x16')]},(_0x186f02,_0x37d8b0)=>{Member['findOne']({'username':Config[_0xc0d2('0x2e')]},(_0x2d24d8,_0x3c3187)=>{WalletAddress['findOne']({'member':_0x3c3187[_0xc0d2('0x16')]},(_0x205abe,_0x5568d9)=>{Tx['create']({'from':_0x5568d9[_0xc0d2('0x2f')],'to':_0x37d8b0[_0xc0d2('0x2f')],'amount':_0x31acad,'status':0x1},()=>{WalletAddress[_0xc0d2('0x30')](_0x37d8b0[_0xc0d2('0x16')],{'balance':new bigNumber(_0x37d8b0[_0xc0d2('0x31')])[_0xc0d2('0x23')](_0x31acad),'totalReceived':new bigNumber(_0x37d8b0[_0xc0d2('0x32')])['plus'](_0x31acad)},(_0xfa3f68,_0x1a3d9c)=>{WalletAddress[_0xc0d2('0x30')](_0x5568d9[_0xc0d2('0x16')],{'balance':new bigNumber(_0x5568d9[_0xc0d2('0x31')])[_0xc0d2('0x33')](_0x31acad),'totalSend':new bigNumber(_0x5568d9['totalSend'])[_0xc0d2('0x23')](_0x31acad)},(_0x2a19f7,_0x4ef81d)=>{});});});});});});MemberBalance[_0xc0d2('0x34')](_0x5883c8[_0xc0d2('0x31')],(_0x4a083c,_0x239b2e)=>{let _0x7aa1e3={'coin':new bigNumber(_0x239b2e['coin'])[_0xc0d2('0x23')](_0x31acad)};if(_0x2b0236[_0xc0d2('0x21')][_0xc0d2('0x11')]==_0xc0d2('0x12')){_0x7aa1e3[_0xc0d2('0x12')]=new bigNumber(_0x239b2e[_0xc0d2('0x12')])[_0xc0d2('0x33')](_0x4614fb);BtcTransaction[_0xc0d2('0x35')]({'address':_0x5883c8[_0xc0d2('0x36')][_0xc0d2('0x12')][_0xc0d2('0x2f')],'member':_0x5883c8[_0xc0d2('0x16')],'type':_0xc0d2('0x37'),'to':_0xc0d2('0x38'),'description':_0xc0d2('0x39'),'amount':_0x4614fb*-0x1},()=>{});}else{_0x7aa1e3[_0xc0d2('0x2c')]=new bigNumber(_0x239b2e[_0xc0d2('0x2c')])[_0xc0d2('0x33')](_0x2b4fcd);EthTransaction[_0xc0d2('0x35')]({'address':_0x5883c8[_0xc0d2('0x36')][_0xc0d2('0x2c')][_0xc0d2('0x2f')],'member':_0x5883c8[_0xc0d2('0x16')],'type':_0xc0d2('0x37'),'to':_0xc0d2('0x38'),'description':_0xc0d2('0x39'),'amount':_0x2b4fcd*-0x1},()=>{});}CoinTransaction['create']({'member':_0x5883c8['_id'],'address':_0x5883c8['coinwallet'],'plus':!![],'type':_0xc0d2('0x3a'),'amount':new bigNumber(_0x31acad),'description':_0xc0d2('0x39')},()=>{});MemberBalance[_0xc0d2('0x30')](_0x5883c8[_0xc0d2('0x31')],_0x7aa1e3,()=>{MemberStatistics['findById'](_0x5883c8[_0xc0d2('0x3b')],(_0x4bc89d,_0x3ad280)=>{let _0x415ab4={};_0x415ab4['balance.coin']=new bigNumber(_0x3ad280[_0xc0d2('0x31')][_0xc0d2('0x38')])[_0xc0d2('0x23')](_0x31acad);_0x415ab4[_0xc0d2('0x3c')]=new bigNumber(_0x3ad280[_0xc0d2('0x3c')])[_0xc0d2('0x23')](_0x31acad);MemberStatistics['update'](_0x5883c8[_0xc0d2('0x3b')],_0x415ab4,()=>{WalletTransaction['create']({'address':_0x5883c8['coinwallet'],'member':_0x5883c8[_0xc0d2('0x16')],'amount':_0x31acad,'description':_0xc0d2('0x3d'),'type':_0xc0d2('0x3e'),'to':_0xc0d2('0x38')},()=>{this['updateConfig']();this[_0xc0d2('0x3f')](_0x5883c8[_0xc0d2('0x16')]);this[_0xc0d2('0x40')](_0x5883c8[_0xc0d2('0x16')]);_0x17ac36[_0xc0d2('0x41')]({'status':!![]});});});});});});});});});})['catch'](_0x3ae1fd=>{_0x17ac36['json']({'status':![],'err':_0x3ae1fd});});});}}module[_0xc0d2('0x42')]=new DefaultApiBuyCoin()[_0xc0d2('0x43')];