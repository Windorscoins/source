var _0xa9e0=['meta','http','https','mailto','split','sanitize','value','rand','length','random','toString','substr','randFull','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','charAt','floor','pow','replaceAll','replace','\x5c$&','strip','ftime','non_unicode','undefined','toLowerCase','exports','trim','é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ','í|ì|ỉ|ĩ|ị','ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ','ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự','ý|ỳ|ỷ|ỹ|ỵ','É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ','Í|Ì|Ỉ|Ĩ|Ị','Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ','strike','code','div','iframe','table','thead','span','img','href','name','target','title','alt','width','height','src','style','class','area','base','basefont','input'];(function(_0xfbcf2,_0x1bae1b){var _0x362cbe=function(_0x59327c){while(--_0x59327c){_0xfbcf2['push'](_0xfbcf2['shift']());}};_0x362cbe(++_0x1bae1b);}(_0xa9e0,0x1a9));var _0x0a9e=function(_0xd3e3dd,_0x439a6b){_0xd3e3dd=_0xd3e3dd-0x0;var _0xd13df4=_0xa9e0[_0xd3e3dd];return _0xd13df4;};'use strict';var sanitize=require('sanitize-html');var trim=require(_0x0a9e('0x0'));var unicode_char={'a':'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ','d':'đ','e':_0x0a9e('0x1'),'i':_0x0a9e('0x2'),'o':_0x0a9e('0x3'),'u':_0x0a9e('0x4'),'y':_0x0a9e('0x5'),'A':'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ','D':'Đ','E':_0x0a9e('0x6'),'I':_0x0a9e('0x7'),'O':_0x0a9e('0x8'),'U':'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự','Y':'Ý|Ỳ|Ỷ|Ỹ|Ỵ'},trim=require(_0x0a9e('0x0')),sanitizeIni={'allowedTags':['h1','h2','h3','h4','h5','h6','blockquote','p','a','ul','ol','nl','li','b','i','strong','em',_0x0a9e('0x9'),_0x0a9e('0xa'),'hr','br',_0x0a9e('0xb'),_0x0a9e('0xc'),_0x0a9e('0xd'),_0x0a9e('0xe'),'caption','label','tbody','tr','th','td','pre',_0x0a9e('0xf'),'i',_0x0a9e('0x10')],'allowedAttributes':{'a':[_0x0a9e('0x11'),_0x0a9e('0x12'),_0x0a9e('0x13'),_0x0a9e('0x14')],'img':['src',_0x0a9e('0x15'),_0x0a9e('0x16'),_0x0a9e('0x17')],'iframe':[_0x0a9e('0x18'),_0x0a9e('0x11'),_0x0a9e('0x16'),'height'],'div':[_0x0a9e('0x19'),'class','id'],'label':[_0x0a9e('0x19'),'class'],'tbody':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'tr':['style',_0x0a9e('0x1a')],'th':['style',_0x0a9e('0x1a')],'td':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'pre':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'span':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'i':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'h1':[_0x0a9e('0x19'),_0x0a9e('0x1a'),'id'],'h2':[_0x0a9e('0x19'),'class','id'],'h3':[_0x0a9e('0x19'),_0x0a9e('0x1a'),'id'],'h4':['style',_0x0a9e('0x1a'),'id'],'h5':['style','class','id'],'h6':[_0x0a9e('0x19'),_0x0a9e('0x1a'),'id'],'ul':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'ol':['style',_0x0a9e('0x1a')],'nl':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'li':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'b':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'strong':['style','class'],'strike':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'code':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'hr':['style',_0x0a9e('0x1a')],'br':['style',_0x0a9e('0x1a')],'table':['style',_0x0a9e('0x1a'),_0x0a9e('0x16')],'thead':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'caption':[_0x0a9e('0x19'),_0x0a9e('0x1a')],'p':[_0x0a9e('0x19'),_0x0a9e('0x1a'),'id']},'selfClosing':['img','br','hr',_0x0a9e('0x1b'),_0x0a9e('0x1c'),_0x0a9e('0x1d'),_0x0a9e('0x1e'),'link',_0x0a9e('0x1f')],'allowedSchemes':[_0x0a9e('0x20'),_0x0a9e('0x21'),_0x0a9e('0x22')],'allowedSchemesByTag':{'img':[_0x0a9e('0x20')]}};var unicode_map={};for(var name in unicode_char){var value=unicode_char[name][_0x0a9e('0x23')]('|');for(var name_u in value){unicode_map[value[name_u]]=name;}};class LbUnicode{[_0x0a9e('0x24')](_0x2e8759,_0x1dbde2=!![]){if(Array['isArray'](_0x2e8759)){for(var _0x426950=0x0;_0x426950<_0x2e8759['length'];_0x426950++)_0x2e8759[_0x426950][_0x0a9e('0x25')]=sanitize(_0x2e8759[_0x426950][_0x0a9e('0x25')]?trim(String(_0x2e8759[_0x426950][_0x0a9e('0x25')])):'',_0x1dbde2?sanitizeIni:null);return _0x2e8759;}else return sanitize(_0x2e8759?trim(String(_0x2e8759)):'',_0x1dbde2?sanitizeIni:null);}[_0x0a9e('0x26')](_0x25ce3a,_0x5180f1=![]){for(var _0x66c1d2='';_0x66c1d2[_0x0a9e('0x27')]<_0x25ce3a;)_0x66c1d2+=Math[_0x0a9e('0x28')]()[_0x0a9e('0x29')](0x24)[_0x0a9e('0x2a')](0x2,0x1);return _0x66c1d2+(_0x5180f1==!![]?'-':'');}[_0x0a9e('0x2b')](_0x332d35){var _0x39e565='';var _0x5583a4=_0x0a9e('0x2c');for(var _0x5e7238=0x0;_0x5e7238<_0x332d35;_0x5e7238++)_0x39e565+=_0x5583a4[_0x0a9e('0x2d')](Math[_0x0a9e('0x2e')](Math[_0x0a9e('0x28')]()*_0x5583a4[_0x0a9e('0x27')]));return _0x39e565;}['lazyround'](_0x191e91,_0xd1836d){try{if(!_0xd1836d||!_0xd1836d||!parseInt(_0xd1836d)||_0x191e91==0x0)return _0x191e91;var _0x1fa90d='1';for(var _0x15de0e=0x1;_0x15de0e<=_0xd1836d;_0x15de0e++){_0x1fa90d+='0';}var _0x4853b1=Math['round'](_0x191e91/Math[_0x0a9e('0x2f')](0xa,_0xd1836d))*parseInt(_0x1fa90d);if(_0x4853b1<_0x191e91)_0x191e91+=Math['pow'](0xa,_0xd1836d);return _0x4853b1;}catch(_0x24936a){return _0x191e91;}}[_0x0a9e('0x30')](_0x381c37,_0x1ef87a,_0x4f41ae){var _0x381c37=_0x381c37[_0x0a9e('0x31')](/[-\/\\^$*+?.()|[\]{}]/g,_0x0a9e('0x32'));return _0x4f41ae['replace'](new RegExp(_0x381c37,'g'),_0x1ef87a);}[_0x0a9e('0x33')](_0x1a180b){_0x1a180b=_0x1a180b||'';return _0x1a180b[_0x0a9e('0x31')](/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi,'')['trim']();}['trim'](_0x11b61d,_0x40d766){if(_0x40d766)return trim(module['exports'][_0x0a9e('0x33')](_0x11b61d));else return trim(_0x11b61d);}[_0x0a9e('0x34')](_0x2e1b3a){var _0x148f55=module['exports']['trim'](_0x2e1b3a,!![]);if(_0x148f55[_0x0a9e('0x27')]==0x4)if(_0x148f55[_0x0a9e('0x2a')](0x1,0x1)==':')return'0'+_0x148f55;else return _0x148f55['substr'](0x0,0x2)+':0'+_0x148f55[_0x0a9e('0x2a')](-0x1);else if(_0x148f55[_0x0a9e('0x27')]==0x3)return'0'+_0x148f55+'0';else return _0x148f55;}[_0x0a9e('0x35')](_0x5b4f5e,_0x316c8f=![]){if(_0x5b4f5e=='')return'';if(typeof _0x5b4f5e==_0x0a9e('0x36'))return'';_0x5b4f5e=_0x5b4f5e[_0x0a9e('0x31')](/[^\x00-\x80]/g,function(_0x43dd5b){return unicode_map[_0x43dd5b]?unicode_map[_0x43dd5b]:_0x43dd5b;});if(_0x316c8f==!![]){_0x5b4f5e=_0x5b4f5e[_0x0a9e('0x31')](/[^a-zA-Z0-9]/g,'-');for(var _0xeaa5e5=0x0;_0xeaa5e5<=0xa;_0xeaa5e5++)_0x5b4f5e=_0x5b4f5e[_0x0a9e('0x31')]('--','-');_0x5b4f5e=_0x5b4f5e[_0x0a9e('0x37')]();}return _0x5b4f5e;}}module[_0x0a9e('0x38')]=new LbUnicode();