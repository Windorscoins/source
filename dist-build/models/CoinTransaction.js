var _0xeda8=['exports','./base/dataAccess','./base/model','mongooseConnection','model','CoinTransaction'];(function(_0x44aeb9,_0x67fb61){var _0x3d980d=function(_0x111d5d){while(--_0x111d5d){_0x44aeb9['push'](_0x44aeb9['shift']());}};_0x3d980d(++_0x67fb61);}(_0xeda8,0xaf));var _0x8eda=function(_0x1ea6ab,_0x477386){_0x1ea6ab=_0x1ea6ab-0x0;var _0x3a5aa6=_0xeda8[_0x1ea6ab];return _0x3a5aa6;};'use strict';const dataAccess=require(_0x8eda('0x0'));const Model=require(_0x8eda('0x1'));var mongoose=dataAccess[_0x8eda('0x2')];var ModelShema=mongoose[_0x8eda('0x3')](_0x8eda('0x4'));class CoinTransaction extends Model{constructor(){super(ModelShema);}}module[_0x8eda('0x5')]=new CoinTransaction();