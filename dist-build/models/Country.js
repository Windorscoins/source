var _0x2687=['Country','exports','./base/dataAccess','model'];(function(_0x3be849,_0x3009e6){var _0x2cf8ec=function(_0x4979fd){while(--_0x4979fd){_0x3be849['push'](_0x3be849['shift']());}};_0x2cf8ec(++_0x3009e6);}(_0x2687,0x15a));var _0x7268=function(_0x42175e,_0x39895d){_0x42175e=_0x42175e-0x0;var _0x30ad2a=_0x2687[_0x42175e];return _0x30ad2a;};'use strict';const dataAccess=require(_0x7268('0x0'));const Model=require('./base/model');var mongoose=dataAccess['mongooseConnection'];var ModelShema=mongoose[_0x7268('0x1')](_0x7268('0x2'));class Country extends Model{constructor(){super(ModelShema);}}module[_0x7268('0x3')]=new Country();