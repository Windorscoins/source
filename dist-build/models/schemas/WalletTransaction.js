var _0x679d=['text','model','WalletTransaction','exports','./../base/dataAccess','mongooseConnection','schema','Schema','Types','ObjectId','Member','now','index'];(function(_0x3f0619,_0xe4b7b0){var _0x1ca465=function(_0x1e305c){while(--_0x1e305c){_0x3f0619['push'](_0x3f0619['shift']());}};_0x1ca465(++_0xe4b7b0);}(_0x679d,0x1a4));var _0xd679=function(_0x36e03f,_0x2d3dd5){_0x36e03f=_0x36e03f-0x0;var _0x50b142=_0x679d[_0x36e03f];return _0x50b142;};'use strict';const dataAccess=require(_0xd679('0x0'));var mongoose=dataAccess['mongooseInstance'];var mongooseConnect=dataAccess[_0xd679('0x1')];class Schema{static get[_0xd679('0x2')](){var _0x4febae=new mongoose[(_0xd679('0x3'))]({'address':{'type':String,'default':''},'member':{'type':mongoose[_0xd679('0x3')][_0xd679('0x4')][_0xd679('0x5')],'ref':_0xd679('0x6')},'type':{'type':String,'default':'buy'},'to':{'type':String,'default':'coin'},'description':{'type':String,'default':''},'foreignKey':{'type':mongoose[_0xd679('0x3')]['Types']['Mixed'],'default':null},'amount':{'type':Number,'default':0x0},'create':{'type':Date,'default':Date[_0xd679('0x7')]}});_0x4febae[_0xd679('0x8')]({'memberid':_0xd679('0x9')});return _0x4febae;}}var schema=mongooseConnect[_0xd679('0xa')](_0xd679('0xb'),Schema['schema']);module[_0xd679('0xc')]=schema;