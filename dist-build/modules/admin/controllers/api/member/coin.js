var _0xdcdf=['body','totalReceived','minus','totalSend','statistics','coin','adminTransfer','json','exports','router','./../../../../../models/MemberBalance','./../../../../../models/MemberStatistics','./../../../../../config/config','./../../../../../models/WalletAddress','./../../../../../models/Tx','bignumber.js','config','index','post','findById','memberid','amount','balance','username','findOne','_id','rootUsername','create','address','update','plus'];(function(_0x581069,_0x4d9197){var _0x3e5fd9=function(_0x1da2b0){while(--_0x1da2b0){_0x581069['push'](_0x581069['shift']());}};_0x3e5fd9(++_0x4d9197);}(_0xdcdf,0xe3));var _0xfdcd=function(_0x5b4826,_0x4a3682){_0x5b4826=_0x5b4826-0x0;var _0xd64a1a=_0xdcdf[_0x5b4826];return _0xd64a1a;};'use strict';const Core=require('./../../../../../core/core');const Member=require('./../../../../../models/Member');const MemberBalance=require(_0xfdcd('0x0'));const MemberStatistics=require(_0xfdcd('0x1'));const Config=require(_0xfdcd('0x2'));const WalletAddress=require(_0xfdcd('0x3'));const Tx=require(_0xfdcd('0x4'));var bigNumber=require(_0xfdcd('0x5'));bigNumber[_0xfdcd('0x6')]({'DECIMAL_PLACES':0x8,'ERRORS':![],'ROUNDING_MODE':0x1});class AdminMemberCoin extends Core{constructor(){super();this[_0xfdcd('0x7')]();}[_0xfdcd('0x7')](){this[_0xfdcd('0x8')]('/',(_0x14976d,_0x262e85)=>{Member[_0xfdcd('0x9')](_0x14976d['body'][_0xfdcd('0xa')],(_0x38fa3d,_0x230a91)=>{if(_0x230a91&&+_0x14976d['body'][_0xfdcd('0xb')]){MemberBalance[_0xfdcd('0x9')](_0x230a91[_0xfdcd('0xc')],(_0xb5431a,_0x283ceb)=>{if(_0x230a91[_0xfdcd('0xd')]!=Config['rootUsername']){WalletAddress[_0xfdcd('0xe')]({'member':_0x230a91[_0xfdcd('0xf')]},(_0x4effd9,_0x1ce762)=>{Member[_0xfdcd('0xe')]({'username':Config[_0xfdcd('0x10')]},(_0x218809,_0x4c36a3)=>{WalletAddress[_0xfdcd('0xe')]({'member':_0x4c36a3['_id']},(_0x2e41b6,_0x3fcab6)=>{Tx[_0xfdcd('0x11')]({'from':_0x3fcab6[_0xfdcd('0x12')],'to':_0x1ce762[_0xfdcd('0x12')],'amount':_0x14976d['body'][_0xfdcd('0xb')],'status':0x1},()=>{WalletAddress[_0xfdcd('0x13')](_0x1ce762[_0xfdcd('0xf')],{'balance':new bigNumber(_0x1ce762['balance'])[_0xfdcd('0x14')](_0x14976d[_0xfdcd('0x15')][_0xfdcd('0xb')]),'totalReceived':new bigNumber(_0x1ce762[_0xfdcd('0x16')])[_0xfdcd('0x14')](_0x14976d['body'][_0xfdcd('0xb')])},(_0x18ab8c,_0x2fefed)=>{WalletAddress[_0xfdcd('0x13')](_0x3fcab6['_id'],{'balance':new bigNumber(_0x3fcab6[_0xfdcd('0xc')])[_0xfdcd('0x17')](_0x14976d['body'][_0xfdcd('0xb')]),'totalSend':new bigNumber(_0x3fcab6[_0xfdcd('0x18')])[_0xfdcd('0x14')](_0x14976d['body']['amount'])},(_0x3a646e,_0x5e1877)=>{});});});});});});}else{WalletAddress['findOne']({'member':_0x230a91[_0xfdcd('0xf')]},(_0x4339d0,_0x39383b)=>{Tx[_0xfdcd('0x11')]({'from':'','to':_0x39383b['address'],'amount':_0x14976d[_0xfdcd('0x15')][_0xfdcd('0xb')],'status':0x1},()=>{WalletAddress['update'](_0x39383b[_0xfdcd('0xf')],{'balance':new bigNumber(_0x39383b[_0xfdcd('0xc')])['plus'](_0x14976d['body']['amount']),'totalReceived':new bigNumber(_0x39383b[_0xfdcd('0x16')])[_0xfdcd('0x14')](_0x14976d['body'][_0xfdcd('0xb')])},(_0x5b7753,_0x21ccfd)=>{});});});}MemberBalance[_0xfdcd('0x13')](_0x230a91[_0xfdcd('0xc')],{'coin':new bigNumber(_0x14976d[_0xfdcd('0x15')][_0xfdcd('0xb')])[_0xfdcd('0x14')](_0x283ceb['coin'])},(_0x5d661c,_0x2acbb5)=>{MemberStatistics[_0xfdcd('0x9')](_0x230a91[_0xfdcd('0x19')],(_0x43c2d0,_0x406568)=>{MemberStatistics[_0xfdcd('0x13')](_0x230a91[_0xfdcd('0x19')],{'balance.coin':new bigNumber(_0x14976d['body'][_0xfdcd('0xb')])['plus'](_0x406568[_0xfdcd('0xc')][_0xfdcd('0x1a')]),'adminTransfer.coin':new bigNumber(_0x14976d[_0xfdcd('0x15')][_0xfdcd('0xb')])[_0xfdcd('0x14')](_0x406568[_0xfdcd('0x1b')][_0xfdcd('0x1a')])},(_0x2b3dd8,_0x12541c)=>{if(_0x2b3dd8){_0x262e85[_0xfdcd('0x1c')]({'status':![],'err':[{'params':_0xfdcd('0xb'),'msg':_0x2b3dd8}]});}else{this['DoUpdateInfo'](_0x230a91[_0xfdcd('0xf')]);_0x262e85['json']({'status':!![]});}});});});});}else{_0x262e85['json']({'status':![]});}});});}}module[_0xfdcd('0x1d')]=new AdminMemberCoin()[_0xfdcd('0x1e')];