var _0x0427=['./base/model','mongooseConnection','model','WalletTransaction','./../libraries/LbSocket','create','_model','updateWalletTransaction','exports'];(function(_0x441c4f,_0x27f352){var _0x5a7696=function(_0x1d74a8){while(--_0x1d74a8){_0x441c4f['push'](_0x441c4f['shift']());}};_0x5a7696(++_0x27f352);}(_0x0427,0xe1));var _0x7042=function(_0x1f761d,_0x17a060){_0x1f761d=_0x1f761d-0x0;var _0x2129c8=_0x0427[_0x1f761d];return _0x2129c8;};'use strict';const dataAccess=require('./base/dataAccess');const Model=require(_0x7042('0x0'));var mongoose=dataAccess[_0x7042('0x1')];var ModelShema=mongoose[_0x7042('0x2')](_0x7042('0x3'));const LbSocket=require(_0x7042('0x4'));class WalletTransaction extends Model{constructor(){super(ModelShema);}[_0x7042('0x5')](_0x2c7c32,_0x53ab81){this[_0x7042('0x6')][_0x7042('0x5')](_0x2c7c32,(_0x25c552,_0x346aa8)=>{_0x53ab81(_0x25c552,_0x346aa8);LbSocket[_0x7042('0x7')]();if(_0x346aa8){}});}}module[_0x7042('0x8')]=new WalletTransaction();