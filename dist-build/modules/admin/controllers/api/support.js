var _0xc21e=['notEmpty','class','Status\x20type\x20is\x20required','content','subject','asyncValidationErrors','then','length','forEach','push','create','_id','body','all','json','catch','get','/edit.html','findById','query','update','clone','member','findAllMemberQ','per_page','page','put','Content\x20is\x20required','supportid','exports','router','./../../../../core/core','./../../../../models/Messages','./../../../../models/Member','index','post','checkBody','status','Status\x20is\x20required'];(function(_0x389fb4,_0x131de2){var _0x233f58=function(_0x64c0b6){while(--_0x64c0b6){_0x389fb4['push'](_0x389fb4['shift']());}};_0x233f58(++_0x131de2);}(_0xc21e,0x17e));var _0xec21=function(_0x21e9c4,_0x3d4c47){_0x21e9c4=_0x21e9c4-0x0;var _0x537d4e=_0xc21e[_0x21e9c4];return _0x537d4e;};'use strict';const core=require(_0xec21('0x0'));const Messages=require(_0xec21('0x1'));const Member=require(_0xec21('0x2'));class AdminApiSupport extends core{constructor(){super();this['index']();}[_0xec21('0x3')](){this[_0xec21('0x4')]('/',(_0x10351e,_0xd94b5d)=>{_0x10351e[_0xec21('0x5')](_0xec21('0x6'),_0xec21('0x7'))[_0xec21('0x8')]();_0x10351e['checkBody'](_0xec21('0x9'),_0xec21('0xa'))[_0xec21('0x8')]();_0x10351e[_0xec21('0x5')](_0xec21('0xb'),'Content\x20is\x20required')[_0xec21('0x8')]();_0x10351e[_0xec21('0x5')](_0xec21('0xc'),'Subject\x20is\x20required')['notEmpty']();_0x10351e[_0xec21('0xd')]()[_0xec21('0xe')](()=>{Member['findAll']((_0x791642,_0x2efc12)=>{let _0xd9232e=[];if(_0x2efc12&&_0x2efc12[_0xec21('0xf')]){_0x2efc12[_0xec21('0x10')](_0x5ee9f6=>{_0xd9232e[_0xec21('0x11')](new Promise((_0x55e74e,_0x3ea83f)=>{Messages[_0xec21('0x12')]({'member':_0x5ee9f6[_0xec21('0x13')],'adminRead':!![],'isAdmin':!![],'memberRead':![],'subject':_0x10351e['body'][_0xec21('0xc')],'status':_0x10351e[_0xec21('0x14')][_0xec21('0x6')],'class':_0x10351e[_0xec21('0x14')][_0xec21('0x9')],'messages':[{'content':_0x10351e[_0xec21('0x14')][_0xec21('0xb')],'isAdmin':!![]}]},(_0x350a53,_0x4fdb21)=>{_0x55e74e();});}));});}Promise[_0xec21('0x15')](_0xd9232e)[_0xec21('0xe')](()=>{_0xd94b5d[_0xec21('0x16')]({'status':!![]});});},0x98967f,0x0);})[_0xec21('0x17')](_0x3ab226=>{_0xd94b5d[_0xec21('0x16')]({'status':![],'err':_0x3ab226});});});this[_0xec21('0x18')](_0xec21('0x19'),(_0x3c790e,_0x350443)=>{if(_0x3c790e['query']['supportid']){Messages[_0xec21('0x1a')](_0x3c790e[_0xec21('0x1b')]['supportid'],(_0x58c4fa,_0x176b59)=>{if(_0x176b59){Messages[_0xec21('0x1c')](_0x176b59[_0xec21('0x13')],{'adminRead':!![]},()=>{});let _0x5dff00=this[_0xec21('0x1d')](_0x176b59);Member[_0xec21('0x1a')](_0x5dff00[_0xec21('0x1e')],(_0x52d5e2,_0x20ede9)=>{_0x5dff00[_0xec21('0x1e')]=_0x20ede9;_0x350443[_0xec21('0x16')]({'status':!![],'support':_0x5dff00});});}else{_0x350443[_0xec21('0x16')]({'status':![]});}});}else{_0x350443[_0xec21('0x16')]({'status':![]});}});this[_0xec21('0x18')]('/',(_0x5692b0,_0x3563dc)=>{Messages[_0xec21('0x1f')]({},(_0x4cd699,_0x19b556,_0x5bfe85)=>{_0x3563dc[_0xec21('0x16')]({'status':!![],'support':_0x19b556,'pagination':this['_']['omit'](_0x5bfe85,'results')});},+_0x5692b0[_0xec21('0x1b')][_0xec21('0x20')]||0x14,+_0x5692b0[_0xec21('0x1b')][_0xec21('0x21')]||0x0,{'adminRead':0x1,'lastUpdate':-0x1,'create':-0x1});});this[_0xec21('0x22')]('/',(_0x5521e3,_0x1f6bc5)=>{_0x5521e3['checkBody'](_0xec21('0x6'),_0xec21('0x7'))[_0xec21('0x8')]();_0x5521e3[_0xec21('0x5')]('class',_0xec21('0xa'))[_0xec21('0x8')]();_0x5521e3[_0xec21('0x5')](_0xec21('0xb'),_0xec21('0x23'))[_0xec21('0x8')]();_0x5521e3[_0xec21('0xd')]()[_0xec21('0xe')](()=>{Messages[_0xec21('0x1c')](_0x5521e3[_0xec21('0x14')][_0xec21('0x24')],{'adminRead':!![],'memberRead':![],'lastUpdate':new Date(),'status':_0x5521e3['body'][_0xec21('0x6')],'class':_0x5521e3[_0xec21('0x14')][_0xec21('0x9')],'$push':{'messages':{'content':_0x5521e3[_0xec21('0x14')][_0xec21('0xb')],'isAdmin':!![]}}},(_0x5d1f9d,_0x4323cf)=>{if(_0x5d1f9d){_0x1f6bc5['json']({'status':![],'msg':_0x5d1f9d['toString']()});}else{_0x1f6bc5['json']({'status':!![]});}});})[_0xec21('0x17')](_0x374f62=>{_0x1f6bc5[_0xec21('0x16')]({'status':![],'err':_0x374f62});});});}}module[_0xec21('0x25')]=new AdminApiSupport()[_0xec21('0x26')];