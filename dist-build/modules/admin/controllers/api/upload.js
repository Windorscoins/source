var _0x567a=['checkBody','Image\x20is\x20not\x20valid','image','asyncValidationErrors','then','Crop','unlinkSync','path','json','images/','catch','exports','router','./../../../../core/core','./../../../../libraries/LbImage','Upload_Dir','tmp/','index','single','file'];(function(_0x17cc1f,_0x32b8c1){var _0x38e48f=function(_0x20b4bc){while(--_0x20b4bc){_0x17cc1f['push'](_0x17cc1f['shift']());}};_0x38e48f(++_0x32b8c1);}(_0x567a,0x1b1));var _0xa567=function(_0x5b4826,_0x4a3682){_0x5b4826=_0x5b4826-0x0;var _0xd64a1a=_0x567a[_0x5b4826];return _0xd64a1a;};'use strict';const core=require(_0xa567('0x0'));var Multer=require('multer');const fs=require('fs');const Config=require('./../../../../config/config');const LbImage=require(_0xa567('0x1'));var upload=Multer({'dest':Config[_0xa567('0x2')]+_0xa567('0x3')});class AdminAPIUpload extends core{constructor(){super();this[_0xa567('0x4')]();}['index'](){this['postM']('*',upload[_0xa567('0x5')](_0xa567('0x6')),(_0x57f38b,_0x1733eb)=>{_0x57f38b[_0xa567('0x7')](_0xa567('0x6'),_0xa567('0x8'))[_0xa567('0x9')](_0x57f38b[_0xa567('0x6')],!![]);_0x57f38b[_0xa567('0xa')]()[_0xa567('0xb')](()=>{LbImage[_0xa567('0xc')](_0x57f38b[_0xa567('0x6')],'images',{'thumb':{'width':0x96,'height':![]}},(_0x519259,_0x47244d)=>{if(_0x519259){if(_0x57f38b[_0xa567('0x6')]){fs[_0xa567('0xd')](_0x57f38b[_0xa567('0x6')][_0xa567('0xe')]);}_0x1733eb[_0xa567('0xf')]({'status':![],'msg':_0x519259});}else{_0x1733eb[_0xa567('0xf')]({'status':!![],'file':Config['UploadBasePath']+_0xa567('0x10')+_0x47244d});}});})[_0xa567('0x11')](_0x319e5d=>{if(_0x57f38b[_0xa567('0x6')]){fs[_0xa567('0xd')](_0x57f38b[_0xa567('0x6')][_0xa567('0xe')]);}_0x1733eb['json']({'status':![],'errors':_0x319e5d});});});}}module[_0xa567('0x12')]=new AdminAPIUpload()[_0xa567('0x13')];