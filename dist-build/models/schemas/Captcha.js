var _0x2d7e=['schema','Schema','now','model','Captcha','exports','./../base/dataAccess','mongooseInstance','mongooseConnection'];(function(_0x4268cc,_0x287cc0){var _0xce1279=function(_0xb595a8){while(--_0xb595a8){_0x4268cc['push'](_0x4268cc['shift']());}};_0xce1279(++_0x287cc0);}(_0x2d7e,0x180));var _0xe2d7=function(_0x553466,_0x4a92d3){_0x553466=_0x553466-0x0;var _0x230f12=_0x2d7e[_0x553466];return _0x230f12;};'use strict';const dataAccess=require(_0xe2d7('0x0'));var mongoose=dataAccess[_0xe2d7('0x1')];var mongooseConnect=dataAccess[_0xe2d7('0x2')];class Schema{static get[_0xe2d7('0x3')](){var _0xab0e4d=new mongoose[(_0xe2d7('0x4'))]({'create':{'type':Date,'default':Date[_0xe2d7('0x5')]},'code':{'type':String,'default':''}});return _0xab0e4d;}}var schema=mongooseConnect[_0xe2d7('0x6')](_0xe2d7('0x7'),Schema[_0xe2d7('0x3')]);module[_0xe2d7('0x8')]=schema;