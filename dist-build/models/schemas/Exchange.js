var _0xa9e0=['Schema','Types','Member','now','Exchange','mongooseInstance','schema'];(function(_0x2e24fa,_0x5e55bb){var _0x5e004a=function(_0x411160){while(--_0x411160){_0x2e24fa['push'](_0x2e24fa['shift']());}};_0x5e004a(++_0x5e55bb);}(_0xa9e0,0x1a9));var _0x0a9e=function(_0x2898a3,_0x28d606){_0x2898a3=_0x2898a3-0x0;var _0x2add76=_0xa9e0[_0x2898a3];return _0x2add76;};'use strict';const dataAccess=require('./../base/dataAccess');var mongoose=dataAccess[_0x0a9e('0x0')];var mongooseConnect=dataAccess['mongooseConnection'];class Schema{static get[_0x0a9e('0x1')](){var _0x432180=new mongoose[(_0x0a9e('0x2'))]({'member':{'type':mongoose[_0x0a9e('0x2')][_0x0a9e('0x3')]['ObjectId'],'ref':_0x0a9e('0x4')},'totalAmount':{'type':Number,'default':0x0},'totalRemaining':{'type':Number,'default':0x0},'rate':{'type':Number,'default':0x0},'market':{'type':String,'default':null},'type':{'type':String,'default':'S'},'success':{'type':Boolean,'default':![]},'cancel':{'type':Boolean,'default':![]},'cancelAmount':{'type':Boolean,'default':![]},'cancelDate':{'type':Date,'default':Date[_0x0a9e('0x5')]},'successDate':{'type':Date,'default':Date[_0x0a9e('0x5')]},'create':{'type':Date,'default':Date['now']}});return _0x432180;}}var schema=mongooseConnect['model'](_0x0a9e('0x6'),Schema['schema']);module['exports']=schema;