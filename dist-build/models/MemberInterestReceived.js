var _0xb7a8=['results','member','exports','./base/dataAccess','./base/model','mongooseConnection','MemberInterestReceived','findAllMemberQ','_model','find','sort','populate','paginate'];(function(_0x1d0091,_0x341713){var _0x5106de=function(_0x4ffc68){while(--_0x4ffc68){_0x1d0091['push'](_0x1d0091['shift']());}};_0x5106de(++_0x341713);}(_0xb7a8,0x1e4));var _0x8b7a=function(_0x4d25dc,_0x41e933){_0x4d25dc=_0x4d25dc-0x0;var _0x301d0e=_0xb7a8[_0x4d25dc];return _0x301d0e;};'use strict';const dataAccess=require(_0x8b7a('0x0'));const Model=require(_0x8b7a('0x1'));var mongoose=dataAccess[_0x8b7a('0x2')];var ModelShema=mongoose['model'](_0x8b7a('0x3'));class MemberInterestReceived extends Model{constructor(){super(ModelShema);}[_0x8b7a('0x4')](_0x1185b9,_0x1d1de7,_0x1d61f3=0x270f,_0x42e4c1=0x0,_0xa539dd=null){let _0x4045d9=this[_0x8b7a('0x5')][_0x8b7a('0x6')](_0x1185b9);if(_0xa539dd!=null){_0x4045d9[_0x8b7a('0x7')](_0xa539dd);}_0x4045d9[_0x8b7a('0x8')]('member');_0x4045d9[_0x8b7a('0x9')]({'perPage':_0x1d61f3,'delta':0x5,'page':_0x42e4c1},function(_0x55f130,_0x456ae9){_0x1d1de7(_0x55f130,_0x456ae9[_0x8b7a('0xa')],_0x456ae9);});}['findAllMember'](_0x45fbd1,_0x17f307=0x270f,_0x41b541=0x0,_0x5ccf33=null){let _0x1dc988=this['_model'][_0x8b7a('0x6')]();if(_0x5ccf33!=null){_0x1dc988[_0x8b7a('0x7')](_0x5ccf33);}_0x1dc988[_0x8b7a('0x8')](_0x8b7a('0xb'));_0x1dc988['paginate']({'perPage':_0x17f307,'delta':0x5,'page':_0x41b541},function(_0x2a5b9d,_0x4db96b){_0x45fbd1(_0x2a5b9d,_0x4db96b[_0x8b7a('0xa')],_0x4db96b);});}}module[_0x8b7a('0xc')]=new MemberInterestReceived();