var _0x3a4d=['Transfer','exports','./../base/dataAccess','mongooseConnection','schema','Schema','Types','ObjectId','Member','now','index'];(function(_0x131e9f,_0x19919e){var _0xcd8187=function(_0x35b470){while(--_0x35b470){_0x131e9f['push'](_0x131e9f['shift']());}};_0xcd8187(++_0x19919e);}(_0x3a4d,0x10a));var _0xd3a4=function(_0x592478,_0x4a11ee){_0x592478=_0x592478-0x0;var _0x205377=_0x3a4d[_0x592478];return _0x205377;};'use strict';const dataAccess=require(_0xd3a4('0x0'));var mongoose=dataAccess['mongooseInstance'];var mongooseConnect=dataAccess[_0xd3a4('0x1')];class Schema{static get[_0xd3a4('0x2')](){var _0x392ebf=new mongoose[(_0xd3a4('0x3'))]({'memberSend':{'type':mongoose[_0xd3a4('0x3')][_0xd3a4('0x4')][_0xd3a4('0x5')],'ref':_0xd3a4('0x6')},'memberReceived':{'type':mongoose[_0xd3a4('0x3')][_0xd3a4('0x4')]['ObjectId'],'ref':'Member'},'amount':{'type':Number,'default':0x0},'type':{'type':String,'default':''},'code':{'type':String,'default':''},'address':{'type':String,'default':''},'active':{'type':Boolean,'default':!![]},'cancel':{'type':Boolean,'default':![]},'create':{'type':Date,'default':Date[_0xd3a4('0x7')]}});_0x392ebf[_0xd3a4('0x8')]({'memberid':'text'});return _0x392ebf;}}var schema=mongooseConnect['model'](_0xd3a4('0x9'),Schema[_0xd3a4('0x2')]);module[_0xd3a4('0xa')]=schema;