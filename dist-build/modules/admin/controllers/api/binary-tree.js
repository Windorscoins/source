var _0xb95a=['right','forEach','all','then','get','/:memberid.html','findOne','params','memberid','member','json','_id','binary','exports','./../../../../core/core','./../../../../models/Member','index','getChild','findAllQ','length','push','username','fullname','gender','path','parent','pull','left','child'];(function(_0x117d27,_0x5b4724){var _0x56665=function(_0x468f13){while(--_0x468f13){_0x117d27['push'](_0x117d27['shift']());}};_0x56665(++_0x5b4724);}(_0xb95a,0xbc));var _0xab95=function(_0x9db8a8,_0x48d52f){_0x9db8a8=_0x9db8a8-0x0;var _0x8c0021=_0xb95a[_0x9db8a8];return _0x8c0021;};'use strict';const core=require(_0xab95('0x0'));const Member=require(_0xab95('0x1'));class DefaultApiBinaryTree extends core{constructor(){super();this[_0xab95('0x2')]();}[_0xab95('0x3')](_0x5b975a,_0x3456a1,_0x4c63da=null,_0x287cd9){if(_0x3456a1==0x5){return _0x287cd9(_0x4c63da);}Member[_0xab95('0x4')]({'path.binary.parent':_0x5b975a},(_0x1e23bd,_0x28633a)=>{if(_0x28633a&&_0x28633a[_0xab95('0x5')]){let _0x40ed65=[];let _0x6d2d6a=_0x3b8d20=>{_0x40ed65[_0xab95('0x6')](new Promise((_0x5c26a7,_0x17c054)=>{let _0x455522={'username':_0x3b8d20[_0xab95('0x7')],'fullname':_0x3b8d20[_0xab95('0x8')],'gender':_0x3b8d20[_0xab95('0x9')],'id':_0x3b8d20['_id'],'lv':_0x3456a1,'parent':_0x3b8d20[_0xab95('0xa')]['binary'][_0xab95('0xb')],'child':{'left':null,'right':null}};this[_0xab95('0x3')](_0x3b8d20['_id'],_0x3456a1+0x1,_0x455522,_0x69a487=>{if(_0x3b8d20[_0xab95('0xa')]['binary'][_0xab95('0xc')]==_0xab95('0xd')){_0x4c63da[_0xab95('0xe')][_0xab95('0xd')]=_0x69a487;}else{_0x4c63da[_0xab95('0xe')][_0xab95('0xf')]=_0x69a487;}_0x5c26a7();});}));};_0x28633a[_0xab95('0x10')](_0x1a0d34=>{_0x6d2d6a(_0x1a0d34);});Promise[_0xab95('0x11')](_0x40ed65)[_0xab95('0x12')](()=>{_0x287cd9(_0x4c63da);});}else{_0x287cd9(_0x4c63da);}});}[_0xab95('0x2')](){this[_0xab95('0x13')](_0xab95('0x14'),(_0x54f337,_0xddd7a)=>{Member[_0xab95('0x15')]({'_id':_0x54f337[_0xab95('0x16')][_0xab95('0x17')],'path.binary.tree':new RegExp(String(_0x54f337[_0xab95('0x18')]['_id']),'i')},(_0x397e1b,_0x2b90d7)=>{if(!_0x2b90d7){return _0xddd7a[_0xab95('0x19')]({'status':![],'binaryTree':{}});}let _0x276583={'username':_0x2b90d7[_0xab95('0x7')],'fullname':_0x2b90d7[_0xab95('0x8')],'gender':_0x2b90d7[_0xab95('0x9')],'id':_0x2b90d7[_0xab95('0x1a')],'parent':_0x2b90d7[_0xab95('0xa')][_0xab95('0x1b')]['parent'],'lv':0x0,'child':{'left':null,'right':null}};this[_0xab95('0x3')](_0x2b90d7[_0xab95('0x1a')],0x1,_0x276583,_0x3d3988=>{_0xddd7a['json']({'binaryTree':_0x3d3988});});});});}}module[_0xab95('0x1c')]=new DefaultApiBinaryTree()['router'];