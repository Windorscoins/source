var _0x5ec3=['results','find','exports','./base/model','mongooseConnection','model','MemberInvest','findAllMemberQ','_model','sort','populate','member','paginate'];(function(_0x5c99f9,_0x2d8b40){var _0x2b7643=function(_0x15d3d9){while(--_0x15d3d9){_0x5c99f9['push'](_0x5c99f9['shift']());}};_0x2b7643(++_0x2d8b40);}(_0x5ec3,0xed));var _0x35ec=function(_0x6123a9,_0x36d64e){_0x6123a9=_0x6123a9-0x0;var _0x2f61e4=_0x5ec3[_0x6123a9];return _0x2f61e4;};'use strict';const dataAccess=require('./base/dataAccess');const Model=require(_0x35ec('0x0'));var mongoose=dataAccess[_0x35ec('0x1')];var ModelShema=mongoose[_0x35ec('0x2')](_0x35ec('0x3'));class MemberInvest extends Model{constructor(){super(ModelShema);}[_0x35ec('0x4')](_0x521b75,_0x1684f3,_0x10f53c=0x270f,_0x2cc246=0x0,_0x2250ad=null){let _0x3441b2=this[_0x35ec('0x5')]['find'](_0x521b75);if(_0x2250ad!=null){_0x3441b2[_0x35ec('0x6')](_0x2250ad);}_0x3441b2[_0x35ec('0x7')](_0x35ec('0x8'));_0x3441b2[_0x35ec('0x9')]({'perPage':_0x10f53c,'delta':0x5,'page':_0x2cc246},function(_0x5be4ff,_0xe1264d){_0x1684f3(_0x5be4ff,_0xe1264d[_0x35ec('0xa')],_0xe1264d);});}['findAllMember'](_0x4c4e1c,_0x56c9c0=0x270f,_0x6851b1=0x0,_0x4445aa=null){let _0x4c0fc3=this[_0x35ec('0x5')][_0x35ec('0xb')]();if(_0x4445aa!=null){_0x4c0fc3[_0x35ec('0x6')](_0x4445aa);}_0x4c0fc3['populate'](_0x35ec('0x8'));_0x4c0fc3[_0x35ec('0x9')]({'perPage':_0x56c9c0,'delta':0x5,'page':_0x6851b1},function(_0x3930d9,_0x29c907){_0x4c4e1c(_0x3930d9,_0x29c907['results'],_0x29c907);});}}module[_0x35ec('0xc')]=new MemberInvest();