var _0x3423=['mongooseConnection','model','Deposit','exports','./base/dataAccess','./base/model'];(function(_0x5d3495,_0x2f1703){var _0x1c62e6=function(_0xafd2ef){while(--_0xafd2ef){_0x5d3495['push'](_0x5d3495['shift']());}};_0x1c62e6(++_0x2f1703);}(_0x3423,0x8e));var _0x3342=function(_0x5b4826,_0x4a3682){_0x5b4826=_0x5b4826-0x0;var _0xd64a1a=_0x3423[_0x5b4826];return _0xd64a1a;};'use strict';const dataAccess=require(_0x3342('0x0'));const Model=require(_0x3342('0x1'));var mongoose=dataAccess[_0x3342('0x2')];var ModelShema=mongoose[_0x3342('0x3')](_0x3342('0x4'));class Deposit extends Model{constructor(){super(ModelShema);}}module[_0x3342('0x5')]=new Deposit();