var _0x94ff=['./../../../models/Captcha','exports','Times\x20New\x20Roman','resolve','PublicDir','rand','.png','datauri','create','code','_id','src','./../../../config/config','path','captchar'];(function(_0x4471da,_0x41f5d5){var _0x291fb1=function(_0x525f0f){while(--_0x525f0f){_0x4471da['push'](_0x4471da['shift']());}};_0x291fb1(++_0x41f5d5);}(_0x94ff,0x93));var _0xf94f=function(_0x17fff3,_0x9456ff){_0x17fff3=_0x17fff3-0x0;var _0x50ab04=_0x94ff[_0x17fff3];return _0x50ab04;};'use strict';const Config=require(_0xf94f('0x0'));const Path=require(_0xf94f('0x1'));const captchar=require(_0xf94f('0x2'));const LbUnicode=require('./../../../libraries/LbUnicode');const Captcha=require(_0xf94f('0x3'));module[_0xf94f('0x4')]=(_0x48ce3b,_0x2e2ca0)=>{return(_0x34163e,_0x4b0621)=>{captchar({'width':0x50,'height':0x1e,'fontSize':0x16,'fontFamily':_0xf94f('0x5'),'textLength':0x4,'backgroundColor':'#fff','outputDir':Path[_0xf94f('0x6')](Config[_0xf94f('0x7')],'captcha'),'imageName':LbUnicode[_0xf94f('0x8')](0x14)+_0xf94f('0x9'),'format':_0xf94f('0xa'),'pool':'0123456789','dummy':![]})['then'](function(_0x510972){Captcha[_0xf94f('0xb')]({'code':_0x510972[_0xf94f('0xc')]},(_0x286ad9,_0x2d86ce)=>{_0x4b0621({'id':_0x2d86ce[_0xf94f('0xd')],'src':_0x510972[_0xf94f('0xe')]});});});};};