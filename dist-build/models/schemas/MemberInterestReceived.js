var _0xaee6=['Types','ObjectId','Member','MemberInterestReceived','exports','./../base/dataAccess','mongooseInstance','schema','Schema'];(function(_0x38ec2c,_0x59f649){var _0xb74645=function(_0x35fc6d){while(--_0x35fc6d){_0x38ec2c['push'](_0x38ec2c['shift']());}};_0xb74645(++_0x59f649);}(_0xaee6,0x68));var _0x6aee=function(_0x4c8130,_0x1af1b8){_0x4c8130=_0x4c8130-0x0;var _0x2f4f4f=_0xaee6[_0x4c8130];return _0x2f4f4f;};'use strict';const dataAccess=require(_0x6aee('0x0'));var mongoose=dataAccess[_0x6aee('0x1')];var mongooseConnect=dataAccess['mongooseConnection'];class Schema{static get[_0x6aee('0x2')](){var _0x3f11af=new mongoose[(_0x6aee('0x3'))]({'create':{'type':Date,'default':Date['now']},'days':{'type':Number,'default':0x0},'member':{'type':mongoose[_0x6aee('0x3')][_0x6aee('0x4')][_0x6aee('0x5')],'ref':_0x6aee('0x6')},'memberInvest':{'type':mongoose[_0x6aee('0x3')][_0x6aee('0x4')][_0x6aee('0x5')],'ref':'MemberInvest'},'percent':{'type':Number,'default':0x0},'earned':{'total':{'type':Number,'default':0x0},'capitalReleased':{'type':Number,'default':0x0},'interestReceived':{'type':Number,'default':0x0},'dailly':{'type':Number,'default':0x0}}});return _0x3f11af;}}var schema=mongooseConnect['model'](_0x6aee('0x7'),Schema['schema']);module[_0x6aee('0x8')]=schema;