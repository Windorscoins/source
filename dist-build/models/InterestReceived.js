var _0xbd54=['./base/dataAccess','./base/model','mongooseConnection','exports'];(function(_0x4514d6,_0x55c2b1){var _0x30a2b1=function(_0x1eddd8){while(--_0x1eddd8){_0x4514d6['push'](_0x4514d6['shift']());}};_0x30a2b1(++_0x55c2b1);}(_0xbd54,0x1ac));var _0x4bd5=function(_0x2fcd9b,_0x368dcb){_0x2fcd9b=_0x2fcd9b-0x0;var _0x1ceb78=_0xbd54[_0x2fcd9b];return _0x1ceb78;};'use strict';const dataAccess=require(_0x4bd5('0x0'));const Model=require(_0x4bd5('0x1'));var mongoose=dataAccess[_0x4bd5('0x2')];var ModelShema=mongoose['model']('InterestReceived');class InterestReceived extends Model{constructor(){super(ModelShema);}}module[_0x4bd5('0x3')]=new InterestReceived();