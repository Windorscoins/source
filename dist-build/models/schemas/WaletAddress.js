var _0x55d2=['model','WalletAddress','./../base/dataAccess','mongooseInstance','mongooseConnection','schema','Schema','Types','ObjectId','index','text'];(function(_0x17fd1f,_0x59e2be){var _0x5a4d5c=function(_0x7c82a1){while(--_0x7c82a1){_0x17fd1f['push'](_0x17fd1f['shift']());}};_0x5a4d5c(++_0x59e2be);}(_0x55d2,0x7b));var _0x255d=function(_0x3e012e,_0x3d905d){_0x3e012e=_0x3e012e-0x0;var _0x336587=_0x55d2[_0x3e012e];return _0x336587;};'use strict';const dataAccess=require(_0x255d('0x0'));var mongoose=dataAccess[_0x255d('0x1')];var mongooseConnect=dataAccess[_0x255d('0x2')];class Schema{static get[_0x255d('0x3')](){var _0x57cbc1=new mongoose[(_0x255d('0x4'))]({'address':{'type':String,'default':''},'member':{'type':mongoose[_0x255d('0x4')][_0x255d('0x5')][_0x255d('0x6')],'ref':'Member'},'balance':{'type':Number,'default':0x0},'totalReceived':{'type':Number,'default':0x0},'totalSend':{'type':Number,'default':0x0},'create':{'type':Date,'default':Date['now']}});_0x57cbc1[_0x255d('0x7')]({'memberid':_0x255d('0x8')});return _0x57cbc1;}}var schema=mongooseConnect[_0x255d('0x9')](_0x255d('0xa'),Schema[_0x255d('0x3')]);module['exports']=schema;