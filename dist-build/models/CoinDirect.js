var _0x808b=['exports','./base/model','mongooseConnection','findAllMemberQ','_model','find','populate','paginate','results','findAllMember','sort'];(function(_0xb1bdd7,_0x20814e){var _0x4309de=function(_0x57103c){while(--_0x57103c){_0xb1bdd7['push'](_0xb1bdd7['shift']());}};_0x4309de(++_0x20814e);}(_0x808b,0x135));var _0xb808=function(_0x1319f8,_0x5014f5){_0x1319f8=_0x1319f8-0x0;var _0xf48ce7=_0x808b[_0x1319f8];return _0xf48ce7;};'use strict';const dataAccess=require('./base/dataAccess');const Model=require(_0xb808('0x0'));var mongoose=dataAccess[_0xb808('0x1')];var ModelShema=mongoose['model']('CoinDirect');class CoinDirect extends Model{constructor(){super(ModelShema);}[_0xb808('0x2')](_0x15db31,_0x2ef8ab,_0x4cff18=0x270f,_0x488cdb=0x0,_0x33fe48=null){let _0x13be00=this[_0xb808('0x3')][_0xb808('0x4')](_0x15db31);if(_0x33fe48!=null){_0x13be00['sort'](_0x33fe48);}_0x13be00[_0xb808('0x5')]('member');_0x13be00[_0xb808('0x6')]({'perPage':_0x4cff18,'delta':0x5,'page':_0x488cdb},function(_0x1fb9a8,_0x4cb2c0){_0x2ef8ab(_0x1fb9a8,_0x4cb2c0[_0xb808('0x7')],_0x4cb2c0);});}[_0xb808('0x8')](_0x38fdec,_0x23bde9=0x270f,_0x5ec15b=0x0,_0x53dbda=null){let _0x4c9053=this[_0xb808('0x3')][_0xb808('0x4')]();if(_0x53dbda!=null){_0x4c9053[_0xb808('0x9')](_0x53dbda);}_0x4c9053[_0xb808('0x5')]('member');_0x4c9053['paginate']({'perPage':_0x23bde9,'delta':0x5,'page':_0x5ec15b},function(_0x13010c,_0x48f65c){_0x38fdec(_0x13010c,_0x48f65c['results'],_0x48f65c);});}}module[_0xb808('0xa')]=new CoinDirect();