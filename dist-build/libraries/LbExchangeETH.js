var _0xdf98=['min','minus','__IniSellAction','__IniBuyAction','sendToMember','member','do-update-info','findOne','address','balance','totalSend','update','_id','totalReceived','findById','coin','buy','Buy\x20SVC:<br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20UNITS\x20TOTAL\x20SVC:\x20','format','0,0.00000000',',\x20UNITS\x20FILLED\x20SVC:\x20',',\x20PRICE:\x20',',\x20FEES\x20ETH:\x20','statistics','exchange','coinwallet','Exchange:\x20BUY\x20SVC','do-update-open-orders-eth','sell','exchange_sell_coin_success','Exchange:\x20SELL\x20SVC','__UpdateExchange','cancel','Exchange:\x20Cancel\x20Sell\x20SVC','cancel_sell','Cancel\x20Sell\x20SVC:<br\x20/>\x0a\x20\x20\x20\x20UNITS\x20TOTAL\x20SVC:\x20','totalAmount',',\x20TOTAL\x20ETH:\x20','fee','exchange_buy_coin_cancel','Exchange:\x20Cancel\x20Buy\x20SVC','createExchange','Sell\x20SVC:<br\x20/>\x0aUNITS\x20TOTAL\x20SVC:\x20','exchange_buy_coin','Exchange:\x20Buy\x20SVC','exchange_sell_coin','Exchange:\x20Sell\x20SVC','./../models/Exchange','./../models/Member','./../models/MemberBalance','./../models/MemberStatistics','./../models/EthTransaction','./../models/WalletTransaction','./../models/ExchangeHistory','./../config/config','./../models/CoinTransaction','./LbExchangeHistory','./LbSocket','underscore','numeral','bignumber.js','config','./../models/Tx','./../models/WalletAddress','listExchange','isIniExchange','findAllQ','plus','EmitItem','rate','Sells','amount','totalRemaining','valueOf','Buys','__SendExchangeInfo','type','__IniExchange','__IniExchangeBuy','getTicker','create','ETH','price_usd','times','emit','__IniExchangeSell','market-history-eth','update-exchange-eth','length','first','rest'];(function(_0x152d40,_0x260904){var _0x9e3aee=function(_0x56fe4e){while(--_0x56fe4e){_0x152d40['push'](_0x152d40['shift']());}};_0x9e3aee(++_0x260904);}(_0xdf98,0x140));var _0x8df9=function(_0xa8dda,_0x124443){_0xa8dda=_0xa8dda-0x0;var _0x24a728=_0xdf98[_0xa8dda];return _0x24a728;};'use strict';const Exchange=require(_0x8df9('0x0'));const Member=require(_0x8df9('0x1'));const MemberBalance=require(_0x8df9('0x2'));const MemberStatistics=require(_0x8df9('0x3'));const EthTransaction=require(_0x8df9('0x4'));const WalletTransaction=require(_0x8df9('0x5'));const ExchangeHistory=require(_0x8df9('0x6'));const Config=require(_0x8df9('0x7'));const CoinTransaction=require(_0x8df9('0x8'));var LbExchangeHistory=require(_0x8df9('0x9'));const LbCoinmarketcap=require('./LbCoinmarketcap');const LbSocket=require(_0x8df9('0xa'));var _=require(_0x8df9('0xb'));const numeral=require(_0x8df9('0xc'));var bigNumber=require(_0x8df9('0xd'));bigNumber[_0x8df9('0xe')]({'DECIMAL_PLACES':0x8,'ERRORS':![],'ROUNDING_MODE':0x1});const Tx=require(_0x8df9('0xf'));const WalletAddress=require(_0x8df9('0x10'));class LbExchangeETH{constructor(){this[_0x8df9('0x11')]={'Sells':{},'Buys':{}};this[_0x8df9('0x12')]=![];Exchange[_0x8df9('0x13')]({'success':![],'cancel':![],'market':'ETH'},(_0x1875e3,_0x365c5c)=>{_0x365c5c['forEach'](_0x525f59=>{this[_0x8df9('0x14')](_0x525f59);});},0x98967f,0x0,{'rate':-0x1});}[_0x8df9('0x15')](_0x2c165b,_0x472c78,_0x512d7d){}[_0x8df9('0x14')](_0x51c8fb,_0x5cab23=![]){if(_0x51c8fb['type']=='S'){if(this[_0x8df9('0x11')]['Sells'][_0x51c8fb[_0x8df9('0x16')]]){this[_0x8df9('0x11')][_0x8df9('0x17')][_0x51c8fb[_0x8df9('0x16')]][_0x8df9('0x18')]=new bigNumber(this[_0x8df9('0x11')][_0x8df9('0x17')][_0x51c8fb['rate']][_0x8df9('0x18')])['plus'](_0x51c8fb[_0x8df9('0x19')])[_0x8df9('0x1a')]();}else{this[_0x8df9('0x11')][_0x8df9('0x17')][_0x51c8fb[_0x8df9('0x16')]]={'amount':_0x51c8fb[_0x8df9('0x19')],'rate':_0x51c8fb[_0x8df9('0x16')]};}}else{if(this[_0x8df9('0x11')][_0x8df9('0x1b')][_0x51c8fb[_0x8df9('0x16')]]){this[_0x8df9('0x11')]['Buys'][_0x51c8fb[_0x8df9('0x16')]]['amount']=new bigNumber(this[_0x8df9('0x11')][_0x8df9('0x1b')][_0x51c8fb[_0x8df9('0x16')]][_0x8df9('0x18')])['plus'](_0x51c8fb[_0x8df9('0x19')])[_0x8df9('0x1a')]();}else{this['listExchange'][_0x8df9('0x1b')][_0x51c8fb[_0x8df9('0x16')]]={'amount':_0x51c8fb[_0x8df9('0x19')],'rate':_0x51c8fb[_0x8df9('0x16')]};}}this[_0x8df9('0x1c')](_0x51c8fb);if(_0x5cab23){this[_0x8df9('0x15')](_0x51c8fb['type'],_0x51c8fb[_0x8df9('0x16')],this[_0x8df9('0x11')][_0x51c8fb[_0x8df9('0x1d')]=='S'?_0x8df9('0x17'):'Buys'][_0x51c8fb[_0x8df9('0x16')]][_0x8df9('0x18')]);this[_0x8df9('0x1e')](_0x51c8fb);}}[_0x8df9('0x1e')](_0x44ea34){if(this[_0x8df9('0x12')]){setTimeout(()=>{this[_0x8df9('0x1e')](_0x44ea34);},0x64);return;}this['isIniExchange']=!![];if(_0x44ea34[_0x8df9('0x1d')]=='B'){this[_0x8df9('0x1f')](_0x44ea34,(_0x3aa383,_0x3cae53)=>{if(_0x3aa383){LbCoinmarketcap[_0x8df9('0x20')](_0x1da419=>{ExchangeHistory[_0x8df9('0x21')]({'amount':_0x3aa383,'market':_0x8df9('0x22'),'rate':_0x3cae53?_0x3cae53:_0x44ea34[_0x8df9('0x16')],'type':_0x44ea34[_0x8df9('0x1d')],'usd':_0x3cae53?new bigNumber(_0x1da419[_0x8df9('0x22')][_0x8df9('0x23')])[_0x8df9('0x24')](_0x3cae53):new bigNumber(_0x1da419['ETH'][_0x8df9('0x23')])[_0x8df9('0x24')](_0x44ea34['rate'])},(_0x352683,_0x3cd89d)=>{if(_0x3cd89d)LbSocket['io'][_0x8df9('0x25')]('market-history-eth',_0x3cd89d);this[_0x8df9('0x12')]=![];});});}else{this[_0x8df9('0x12')]=![];}});}else{this[_0x8df9('0x26')](_0x44ea34,(_0x36cb33,_0xf1723d)=>{if(_0x36cb33){LbCoinmarketcap[_0x8df9('0x20')](_0x41c4a7=>{ExchangeHistory[_0x8df9('0x21')]({'amount':_0x36cb33,'rate':_0xf1723d?_0xf1723d:_0x44ea34[_0x8df9('0x16')],'type':_0x44ea34['type'],'market':_0x8df9('0x22'),'usd':_0xf1723d?new bigNumber(_0x41c4a7['ETH'][_0x8df9('0x23')])[_0x8df9('0x24')](_0xf1723d):new bigNumber(_0x41c4a7[_0x8df9('0x22')][_0x8df9('0x23')])[_0x8df9('0x24')](_0x44ea34[_0x8df9('0x16')])},(_0x5df4a6,_0x5d719a)=>{if(_0x5d719a)LbSocket['io']['emit'](_0x8df9('0x27'),_0x5d719a);this[_0x8df9('0x12')]=![];});});}else{this[_0x8df9('0x12')]=![];}});}}[_0x8df9('0x1c')](_0x425956,_0x1db866=![]){if(_0x1db866)LbSocket['io'][_0x8df9('0x25')](_0x8df9('0x27'),_0x1db866);if(this[_0x8df9('0x11')][_0x8df9('0x17')][_0x425956['rate']]&&this[_0x8df9('0x11')][_0x8df9('0x17')][_0x425956[_0x8df9('0x16')]][_0x8df9('0x18')]<=0x0){delete this[_0x8df9('0x11')][_0x8df9('0x17')][_0x425956[_0x8df9('0x16')]];}if(this['listExchange'][_0x8df9('0x1b')][_0x425956[_0x8df9('0x16')]]&&this['listExchange']['Buys'][_0x425956[_0x8df9('0x16')]][_0x8df9('0x18')]<=0x0){delete this[_0x8df9('0x11')][_0x8df9('0x1b')][_0x425956[_0x8df9('0x16')]];}LbSocket['io'][_0x8df9('0x25')](_0x8df9('0x28'),{'amount':this[_0x8df9('0x11')]['Sells'][_0x425956[_0x8df9('0x16')]]?this['listExchange'][_0x8df9('0x17')][_0x425956[_0x8df9('0x16')]]['amount']:0x0,'rate':_0x425956['rate'],'type':'Sells'});LbSocket['io'][_0x8df9('0x25')](_0x8df9('0x28'),{'amount':this[_0x8df9('0x11')][_0x8df9('0x1b')][_0x425956[_0x8df9('0x16')]]?this[_0x8df9('0x11')][_0x8df9('0x1b')][_0x425956[_0x8df9('0x16')]][_0x8df9('0x18')]:0x0,'rate':_0x425956['rate'],'type':_0x8df9('0x1b')});}[_0x8df9('0x26')](_0x344943,_0x3c2770){Exchange[_0x8df9('0x13')]({'success':![],'cancel':![],'type':'B','market':'ETH','$or':[{'rate':_0x344943[_0x8df9('0x16')]},{'rate':{'$gte':_0x344943['rate']}}]},(_0x1a74b2,_0x5aa543)=>{let _0x3b8153=0x0;let _0x1c860d=0x0;let _0x2e0188=_0x102056=>{if(_0x102056&&_0x102056[_0x8df9('0x29')]&&_0x3b8153<_0x344943[_0x8df9('0x19')]){let _0x2bce00=_[_0x8df9('0x2a')](_0x102056);if(!_0x1c860d||_0x1c860d<_0x2bce00[_0x8df9('0x16')]){_0x1c860d=_0x2bce00[_0x8df9('0x16')];}let _0x1cd99d=()=>{_0x2e0188(_[_0x8df9('0x2b')](_0x102056));};let _0x1a00fc=Math[_0x8df9('0x2c')](new bigNumber(_0x344943[_0x8df9('0x19')])[_0x8df9('0x2d')](_0x3b8153)[_0x8df9('0x1a')](),_0x2bce00['totalRemaining']);this[_0x8df9('0x2e')](_0x344943,_0x1a00fc,()=>{if(this[_0x8df9('0x11')][_0x8df9('0x17')][_0x344943[_0x8df9('0x16')]]){this[_0x8df9('0x11')]['Sells'][_0x344943[_0x8df9('0x16')]][_0x8df9('0x18')]=new bigNumber(this[_0x8df9('0x11')][_0x8df9('0x17')][_0x344943[_0x8df9('0x16')]][_0x8df9('0x18')])[_0x8df9('0x2d')](_0x1a00fc);this[_0x8df9('0x1c')](_0x344943);}this[_0x8df9('0x2f')](_0x2bce00,_0x1a00fc,()=>{if(this[_0x8df9('0x11')][_0x8df9('0x1b')][_0x2bce00[_0x8df9('0x16')]]){this['listExchange'][_0x8df9('0x1b')][_0x2bce00[_0x8df9('0x16')]]['amount']=new bigNumber(this[_0x8df9('0x11')]['Buys'][_0x2bce00[_0x8df9('0x16')]][_0x8df9('0x18')])[_0x8df9('0x2d')](_0x1a00fc);this[_0x8df9('0x1c')](_0x2bce00);}LbSocket[_0x8df9('0x30')](_0x2bce00[_0x8df9('0x31')],_0x8df9('0x32'),{'update':!![]});_0x3b8153=new bigNumber(_0x1a00fc)['plus'](_0x3b8153)[_0x8df9('0x1a')]();WalletAddress[_0x8df9('0x33')]({'member':_0x2bce00[_0x8df9('0x31')]},(_0x38fd35,_0x21e15f)=>{WalletAddress[_0x8df9('0x33')]({'member':_0x344943[_0x8df9('0x31')]},(_0x5c595c,_0x3bdc41)=>{Tx[_0x8df9('0x21')]({'from':_0x3bdc41[_0x8df9('0x34')],'to':_0x21e15f[_0x8df9('0x34')],'amount':_0x3b8153,'status':0x1},()=>{WalletAddress['update'](_0x21e15f['_id'],{'balance':new bigNumber(_0x21e15f[_0x8df9('0x35')])[_0x8df9('0x14')](_0x3b8153),'totalReceived':new bigNumber(_0x21e15f[_0x8df9('0x36')])['plus'](_0x3b8153)},(_0x7c90c6,_0xa4ce28)=>{WalletAddress[_0x8df9('0x37')](_0x3bdc41[_0x8df9('0x38')],{'balance':new bigNumber(_0x3bdc41['balance'])[_0x8df9('0x2d')](_0x3b8153),'totalSend':new bigNumber(_0x3bdc41['totalReceived'])[_0x8df9('0x14')](_0x3b8153)},(_0x2cf361,_0x1aeb59)=>{_0x1cd99d();});});});});});});});}else{LbSocket[_0x8df9('0x30')](_0x344943[_0x8df9('0x31')],_0x8df9('0x32'),{'update':!![]});_0x3c2770(_0x3b8153,_0x1c860d);}};_0x2e0188(_0x5aa543);},0xf423f,0x0,{'rate':-0x1,'create':-0x1});}[_0x8df9('0x1f')](_0x1af749,_0x22ee84){Exchange[_0x8df9('0x13')]({'success':![],'cancel':![],'type':'S','market':'ETH','$or':[{'rate':_0x1af749[_0x8df9('0x16')]},{'rate':{'$lte':_0x1af749[_0x8df9('0x16')]}}]},(_0xb638b,_0x4aa457)=>{let _0x57eee1=0x0;let _0x3dfc8e=0x0;let _0x4c2d81=_0x527b7e=>{if(_0x527b7e&&_0x527b7e['length']&&_0x57eee1<_0x1af749[_0x8df9('0x19')]){let _0x1b9581=_[_0x8df9('0x2a')](_0x527b7e);if(!_0x3dfc8e||_0x3dfc8e<_0x1b9581[_0x8df9('0x16')]){_0x3dfc8e=_0x1b9581[_0x8df9('0x16')];}let _0x3dbacb=()=>{_0x4c2d81(_['rest'](_0x527b7e));};let _0x1d5f98=Math[_0x8df9('0x2c')](new bigNumber(_0x1af749[_0x8df9('0x19')])[_0x8df9('0x2d')](_0x57eee1)['valueOf'](),_0x1b9581[_0x8df9('0x19')]);this[_0x8df9('0x2f')](_0x1af749,_0x1d5f98,()=>{if(this['listExchange'][_0x8df9('0x1b')][_0x1af749[_0x8df9('0x16')]]){this['listExchange']['Buys'][_0x1af749[_0x8df9('0x16')]][_0x8df9('0x18')]=new bigNumber(this[_0x8df9('0x11')][_0x8df9('0x1b')][_0x1af749[_0x8df9('0x16')]][_0x8df9('0x18')])['minus'](_0x1d5f98);this[_0x8df9('0x1c')](_0x1af749);}this[_0x8df9('0x2e')](_0x1b9581,_0x1d5f98,()=>{if(this[_0x8df9('0x11')]['Sells'][_0x1b9581['rate']]){this[_0x8df9('0x11')][_0x8df9('0x17')][_0x1b9581[_0x8df9('0x16')]][_0x8df9('0x18')]=new bigNumber(this[_0x8df9('0x11')][_0x8df9('0x17')][_0x1b9581[_0x8df9('0x16')]][_0x8df9('0x18')])['minus'](_0x1d5f98);this[_0x8df9('0x1c')](_0x1b9581);}LbSocket[_0x8df9('0x30')](_0x1b9581[_0x8df9('0x31')],'do-update-info',{'update':!![]});_0x57eee1=new bigNumber(_0x1d5f98)['plus'](_0x57eee1)[_0x8df9('0x1a')]();WalletAddress[_0x8df9('0x33')]({'member':_0x1af749['member']},(_0x545e44,_0x21ab06)=>{WalletAddress['findOne']({'member':_0x1b9581[_0x8df9('0x31')]},(_0x11738d,_0x47432f)=>{Tx[_0x8df9('0x21')]({'from':_0x47432f[_0x8df9('0x34')],'to':_0x21ab06[_0x8df9('0x34')],'amount':_0x57eee1,'status':0x1},()=>{WalletAddress[_0x8df9('0x37')](_0x21ab06[_0x8df9('0x38')],{'balance':new bigNumber(_0x21ab06[_0x8df9('0x35')])[_0x8df9('0x14')](_0x57eee1),'totalReceived':new bigNumber(_0x21ab06[_0x8df9('0x36')])[_0x8df9('0x14')](_0x57eee1)},(_0x125868,_0x4d61aa)=>{WalletAddress['update'](_0x47432f[_0x8df9('0x38')],{'balance':new bigNumber(_0x47432f[_0x8df9('0x35')])['minus'](_0x57eee1),'totalSend':new bigNumber(_0x47432f[_0x8df9('0x39')])[_0x8df9('0x14')](_0x57eee1)},(_0xff9fe6,_0x4f47ef)=>{_0x3dbacb();});});});});});});});}else{LbSocket[_0x8df9('0x30')](_0x1af749[_0x8df9('0x31')],'do-update-info',{'update':!![]});_0x22ee84(_0x57eee1,_0x3dfc8e);}};_0x4c2d81(_0x4aa457);},0xf423f,0x0,{'rate':0x1,'create':-0x1});}['__IniBuyAction'](_0x445699,_0x538204,_0x1bc8ed){Exchange[_0x8df9('0x37')](_0x445699[_0x8df9('0x38')],{'totalRemaining':new bigNumber(_0x445699['totalRemaining'])[_0x8df9('0x2d')](_0x538204)[_0x8df9('0x1a')](),'successDate':new Date(),'success':new bigNumber(_0x445699[_0x8df9('0x19')])['minus'](_0x538204)['valueOf']()<=0x0?!![]:![]},()=>{Member[_0x8df9('0x3a')](_0x445699['member'],(_0x5a0ffc,_0x7293f)=>{if(_0x7293f){LbSocket[_0x8df9('0x30')](_0x7293f[_0x8df9('0x38')],'do-update-open-orders-eth',{'update':!![]});MemberBalance[_0x8df9('0x3a')](_0x7293f['balance'],(_0x58c988,_0x267f76)=>{MemberBalance[_0x8df9('0x37')](_0x267f76[_0x8df9('0x38')],{'coin':new bigNumber(_0x267f76[_0x8df9('0x3b')])[_0x8df9('0x14')](_0x538204)[_0x8df9('0x1a')]()},()=>{CoinTransaction[_0x8df9('0x21')]({'member':_0x7293f['_id'],'address':_0x7293f['coinwallet'],'plus':!![],'type':_0x8df9('0x3c'),'amount':_0x538204,'description':_0x8df9('0x3d')+numeral(_0x538204)[_0x8df9('0x3e')](_0x8df9('0x3f'))+_0x8df9('0x40')+numeral(_0x538204)['format'](_0x8df9('0x3f'))+_0x8df9('0x41')+numeral(_0x445699[_0x8df9('0x16')])[_0x8df9('0x3e')](_0x8df9('0x3f'))+',\x20TOTAL\x20ETH:\x20'+numeral(new bigNumber(_0x445699[_0x8df9('0x16')])[_0x8df9('0x24')](_0x538204)[_0x8df9('0x1a')]())['format'](_0x8df9('0x3f'))+_0x8df9('0x42')+numeral(new bigNumber(_0x445699[_0x8df9('0x16')])['times'](_0x538204)[_0x8df9('0x24')](0.0025)['valueOf']())[_0x8df9('0x3e')](_0x8df9('0x3f'))},()=>{});MemberStatistics[_0x8df9('0x3a')](_0x7293f[_0x8df9('0x43')],(_0xe5cf16,_0x4f57a5)=>{MemberStatistics[_0x8df9('0x37')](_0x4f57a5['_id'],{'exchange.buy.amount':new bigNumber(_0x4f57a5['exchange'][_0x8df9('0x3c')][_0x8df9('0x18')])[_0x8df9('0x14')](_0x538204)[_0x8df9('0x1a')](),'exchange.buy.ETH':new bigNumber(_0x4f57a5[_0x8df9('0x44')]['buy'][_0x8df9('0x22')])[_0x8df9('0x14')](new bigNumber(_0x538204)['times'](_0x445699[_0x8df9('0x16')]))},()=>{WalletTransaction[_0x8df9('0x21')]({'address':_0x7293f[_0x8df9('0x45')],'member':_0x7293f[_0x8df9('0x38')],'type':'exchange_buy_coin_success','to':_0x8df9('0x3b'),'description':_0x8df9('0x46'),'amount':_0x538204,'foreignKey':_0x445699['_id']},()=>{_0x1bc8ed();});});});});});}else{_0x1bc8ed();}});});}['__IniSellAction'](_0x102140,_0x2467ce,_0x37b328){Exchange[_0x8df9('0x37')](_0x102140[_0x8df9('0x38')],{'totalRemaining':new bigNumber(_0x102140[_0x8df9('0x19')])[_0x8df9('0x2d')](_0x2467ce)[_0x8df9('0x1a')](),'successDate':new Date(),'success':new bigNumber(_0x102140[_0x8df9('0x19')])[_0x8df9('0x2d')](_0x2467ce)[_0x8df9('0x1a')]()<=0x0?!![]:![]},()=>{Member[_0x8df9('0x3a')](_0x102140['member'],(_0x36fa6f,_0x3012c8)=>{if(_0x3012c8){LbSocket['sendToMember'](_0x3012c8[_0x8df9('0x38')],_0x8df9('0x47'),{'update':!![]});MemberBalance[_0x8df9('0x3a')](_0x3012c8[_0x8df9('0x35')],(_0x216cde,_0x26e24d)=>{MemberBalance[_0x8df9('0x37')](_0x26e24d[_0x8df9('0x38')],{'ETH':new bigNumber(_0x26e24d['ETH'])[_0x8df9('0x14')](new bigNumber(_0x2467ce)['times'](_0x102140[_0x8df9('0x16')])[_0x8df9('0x24')](new bigNumber(0x1)[_0x8df9('0x2d')](Config['exchange']['fee']))[_0x8df9('0x1a')]())[_0x8df9('0x1a')]()},()=>{MemberStatistics['findById'](_0x3012c8[_0x8df9('0x43')],(_0x53e510,_0x4a23f2)=>{MemberStatistics['update'](_0x4a23f2[_0x8df9('0x38')],{'exchange.sell.amount':new bigNumber(_0x4a23f2[_0x8df9('0x44')][_0x8df9('0x48')][_0x8df9('0x18')])[_0x8df9('0x14')](_0x2467ce)[_0x8df9('0x1a')](),'exchange.sell.ETH':new bigNumber(_0x4a23f2[_0x8df9('0x44')][_0x8df9('0x48')][_0x8df9('0x22')])[_0x8df9('0x14')](new bigNumber(_0x2467ce)[_0x8df9('0x24')](_0x102140[_0x8df9('0x16')])[_0x8df9('0x24')](new bigNumber(0x1)[_0x8df9('0x2d')](Config[_0x8df9('0x44')]['fee']))[_0x8df9('0x1a')]())},()=>{EthTransaction['create']({'member':_0x3012c8[_0x8df9('0x38')],'type':_0x8df9('0x49'),'to':_0x8df9('0x22'),'description':_0x8df9('0x4a'),'amount':new bigNumber(_0x2467ce)['times'](_0x102140[_0x8df9('0x16')])[_0x8df9('0x24')](new bigNumber(0x1)['minus'](Config[_0x8df9('0x44')]['fee']))[_0x8df9('0x1a')](),'foreignKey':_0x102140['_id']},()=>{_0x37b328();});});});});});}else{_0x37b328();}});});}['IniBuySuccess'](_0x31b730,_0x9a9ef,_0x3ff3e9){}[_0x8df9('0x4b')](_0x220b95){}[_0x8df9('0x4c')](_0x2ea1fd,_0x207d55){Member[_0x8df9('0x3a')](_0x2ea1fd['member'],(_0x5f1c05,_0x5da0c2)=>{MemberBalance['findById'](_0x5da0c2[_0x8df9('0x35')],(_0x63997e,_0x4556dd)=>{let _0x294f3f={};if(_0x2ea1fd[_0x8df9('0x1d')]=='S'){_0x294f3f[_0x8df9('0x3b')]=new bigNumber(_0x4556dd[_0x8df9('0x3b')])[_0x8df9('0x14')](_0x2ea1fd['totalRemaining'])['valueOf']();WalletTransaction[_0x8df9('0x21')]({'address':_0x5da0c2[_0x8df9('0x45')],'member':_0x5da0c2[_0x8df9('0x38')],'type':'exchange_sell_coin_cancel','description':_0x8df9('0x4d'),'amount':_0x2ea1fd[_0x8df9('0x19')],'foreignKey':_0x2ea1fd[_0x8df9('0x38')]},()=>{});CoinTransaction['create']({'member':_0x5da0c2[_0x8df9('0x38')],'address':_0x5da0c2['coinwallet'],'plus':!![],'type':_0x8df9('0x4e'),'amount':_0x2ea1fd[_0x8df9('0x19')],'description':_0x8df9('0x4f')+numeral(_0x2ea1fd[_0x8df9('0x50')])[_0x8df9('0x3e')]('0,0.00000000')+',\x20UNITS\x20FILLED\x20SVC:\x20'+numeral(_0x2ea1fd[_0x8df9('0x19')])[_0x8df9('0x3e')](_0x8df9('0x3f'))+_0x8df9('0x41')+numeral(_0x2ea1fd[_0x8df9('0x16')])[_0x8df9('0x3e')](_0x8df9('0x3f'))+_0x8df9('0x51')+numeral(new bigNumber(_0x2ea1fd[_0x8df9('0x16')])[_0x8df9('0x24')](_0x2ea1fd[_0x8df9('0x19')])[_0x8df9('0x1a')]())['format'](_0x8df9('0x3f'))+_0x8df9('0x42')+numeral(new bigNumber(_0x2ea1fd[_0x8df9('0x16')])[_0x8df9('0x24')](_0x2ea1fd[_0x8df9('0x19')])[_0x8df9('0x24')](0.0025)[_0x8df9('0x1a')]())[_0x8df9('0x3e')](_0x8df9('0x3f'))},()=>{});if(this[_0x8df9('0x11')][_0x8df9('0x17')][_0x2ea1fd[_0x8df9('0x16')]]){this[_0x8df9('0x11')]['Sells'][_0x2ea1fd[_0x8df9('0x16')]][_0x8df9('0x18')]=new bigNumber(this[_0x8df9('0x11')]['Sells'][_0x2ea1fd[_0x8df9('0x16')]]['amount'])[_0x8df9('0x2d')](_0x2ea1fd[_0x8df9('0x19')]);this[_0x8df9('0x1c')](_0x2ea1fd);}}else{_0x294f3f[_0x8df9('0x22')]=new bigNumber(_0x4556dd['ETH'])[_0x8df9('0x14')](new bigNumber(_0x2ea1fd[_0x8df9('0x19')])[_0x8df9('0x24')](_0x2ea1fd['rate'])[_0x8df9('0x24')](new bigNumber(0x1)[_0x8df9('0x14')](Config[_0x8df9('0x44')][_0x8df9('0x52')])))[_0x8df9('0x1a')]();EthTransaction[_0x8df9('0x21')]({'member':_0x5da0c2['_id'],'type':_0x8df9('0x53'),'to':_0x8df9('0x22'),'description':_0x8df9('0x54'),'amount':new bigNumber(_0x2ea1fd[_0x8df9('0x19')])['times'](_0x2ea1fd[_0x8df9('0x16')])['times'](new bigNumber(0x1)['plus'](Config[_0x8df9('0x44')]['fee'])),'foreignKey':_0x2ea1fd[_0x8df9('0x38')]},()=>{});if(this[_0x8df9('0x11')][_0x8df9('0x1b')][_0x2ea1fd[_0x8df9('0x16')]]){this[_0x8df9('0x11')]['Buys'][_0x2ea1fd[_0x8df9('0x16')]]['amount']=new bigNumber(this[_0x8df9('0x11')][_0x8df9('0x1b')][_0x2ea1fd[_0x8df9('0x16')]]['amount'])[_0x8df9('0x2d')](_0x2ea1fd[_0x8df9('0x19')]);this[_0x8df9('0x1c')](_0x2ea1fd);}}MemberBalance[_0x8df9('0x37')](_0x5da0c2[_0x8df9('0x35')],_0x294f3f,()=>{Exchange[_0x8df9('0x37')](_0x2ea1fd[_0x8df9('0x38')],{'cancel':!![],'cancelDate':new Date(),'cancelAmount':_0x2ea1fd[_0x8df9('0x19')]},(_0x4c5678,_0x22d3b8)=>{LbSocket[_0x8df9('0x30')](_0x5da0c2['_id'],_0x8df9('0x32'),{'update':!![]});LbSocket[_0x8df9('0x30')](_0x5da0c2['_id'],_0x8df9('0x47'),{'update':!![]});});});});});}[_0x8df9('0x55')](_0x318863,_0x135b14,_0xd7051e,_0x1d2ade='S',_0x24ea77){MemberBalance[_0x8df9('0x3a')](_0x318863[_0x8df9('0x35')],(_0x5bc37b,_0x4ed1bf)=>{let _0x56083c={};if(_0x1d2ade=='S'){_0x56083c[_0x8df9('0x3b')]=new bigNumber(_0x4ed1bf[_0x8df9('0x3b')])[_0x8df9('0x2d')](_0x135b14)[_0x8df9('0x1a')]();CoinTransaction['create']({'member':_0x318863[_0x8df9('0x38')],'address':_0x318863[_0x8df9('0x45')],'plus':![],'type':'sell','amount':_0x135b14,'description':_0x8df9('0x56')+numeral(_0x135b14)[_0x8df9('0x3e')](_0x8df9('0x3f'))+',\x20UNITS\x20FILLED\x20SVC:\x20'+numeral(_0x135b14)[_0x8df9('0x3e')](_0x8df9('0x3f'))+_0x8df9('0x41')+numeral(_0xd7051e)[_0x8df9('0x3e')](_0x8df9('0x3f'))+_0x8df9('0x51')+numeral(new bigNumber(_0xd7051e)['times'](_0x135b14)[_0x8df9('0x1a')]())[_0x8df9('0x3e')](_0x8df9('0x3f'))+',\x20FEES\x20ETH:\x20'+numeral(new bigNumber(_0xd7051e)[_0x8df9('0x24')](_0x135b14)['times'](0.0025)[_0x8df9('0x1a')]())[_0x8df9('0x3e')](_0x8df9('0x3f'))},()=>{});}else{_0x56083c[_0x8df9('0x22')]=new bigNumber(_0x4ed1bf[_0x8df9('0x22')])[_0x8df9('0x2d')](new bigNumber(_0x135b14)['times'](_0xd7051e)['times'](new bigNumber(0x1)[_0x8df9('0x14')](Config[_0x8df9('0x44')][_0x8df9('0x52')])))[_0x8df9('0x1a')]();}MemberBalance[_0x8df9('0x37')](_0x318863['balance'],_0x56083c,()=>{Exchange[_0x8df9('0x21')]({'type':_0x1d2ade=='S'?'S':'B','member':_0x318863[_0x8df9('0x38')],'totalAmount':_0x135b14,'totalRemaining':_0x135b14,'rate':_0xd7051e,'market':_0x8df9('0x22')},(_0x21d487,_0x318c94)=>{LbSocket[_0x8df9('0x30')](_0x318c94[_0x8df9('0x31')],_0x8df9('0x47'),{'update':!![]});LbSocket['sendToMember'](_0x318c94[_0x8df9('0x31')],_0x8df9('0x32'),{'update':!![]});if(_0x1d2ade=='B'){EthTransaction[_0x8df9('0x21')]({'member':_0x318863[_0x8df9('0x38')],'type':_0x8df9('0x57'),'to':_0x8df9('0x3b'),'description':_0x8df9('0x58'),'amount':new bigNumber(_0x135b14)[_0x8df9('0x24')](_0xd7051e)['times'](new bigNumber(0x1)[_0x8df9('0x14')](Config[_0x8df9('0x44')][_0x8df9('0x52')]))['times'](-0x1)[_0x8df9('0x1a')](),'foreignKey':_0x318c94['_id']},()=>{});}else{WalletTransaction[_0x8df9('0x21')]({'address':_0x318863[_0x8df9('0x45')],'member':_0x318863[_0x8df9('0x38')],'type':_0x8df9('0x59'),'description':_0x8df9('0x5a'),'amount':_0x135b14*-0x1,'foreignKey':_0x318c94[_0x8df9('0x38')]},()=>{});}this[_0x8df9('0x14')](_0x318c94,!![]);_0x24ea77();});});});}}module['exports']=new LbExchangeETH();