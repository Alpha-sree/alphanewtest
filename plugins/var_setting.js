//codded by afnanplk
const MyPnky = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const plk = require('./sql/tryplk');
const Config = require('../config');

//===== dont forget to add language in language.json===== when taking code
const Language = require('../language');
const Lang = Language.getString('admin');
// ======= cammand is .setting ===========

MyPnky.addCommand({pattern: 'setting$', fromMe: true, desc: 'add features to group'}, (async (message, match) => {
var _0x2d3127=_0x7533;(function(_0x44e19e,_0x258016){var _0x23e392=_0x7533,_0x4bdcc1=_0x44e19e();while(!![]){try{var _0x197299=parseInt(_0x23e392(0x1a9))/0x1+-parseInt(_0x23e392(0x1a8))/0x2+-parseInt(_0x23e392(0x1a4))/0x3*(-parseInt(_0x23e392(0x1a2))/0x4)+-parseInt(_0x23e392(0x1a5))/0x5+-parseInt(_0x23e392(0x1a7))/0x6+parseInt(_0x23e392(0x19e))/0x7+parseInt(_0x23e392(0x1ab))/0x8;if(_0x197299===_0x258016)break;else _0x4bdcc1['push'](_0x4bdcc1['shift']());}catch(_0x59cff2){_0x4bdcc1['push'](_0x4bdcc1['shift']());}}}(_0x4d84,0x4d9a6));var ms=await plk[_0x2d3127(0x1a6)](message[_0x2d3127(0x1a0)]);function _0x7533(_0x2a21d5,_0x5752c4){var _0x4d84bb=_0x4d84();return _0x7533=function(_0x753399,_0x34e007){_0x753399=_0x753399-0x19e;var _0x12e0b4=_0x4d84bb[_0x753399];return _0x12e0b4;},_0x7533(_0x2a21d5,_0x5752c4);}function _0x4d84(){var _0xb9d91f=['replace','575148bObLtP','text','jid','message','39768sDpvrf','```\x20this\x20g','129HpOBgu','1141815buCLim','addplk','499512qgaeGg','93686IiGSyn','46937vKGGbD','sendMessag','957704KLmJYz'];_0x4d84=function(){return _0xb9d91f;};return _0x4d84();}ms===![]?await message['client'][_0x2d3127(0x1aa)+'e'](message[_0x2d3127(0x1a0)],Lang['setting'],MessageType[_0x2d3127(0x19f)]):await message['client'][_0x2d3127(0x1aa)+'e'](message[_0x2d3127(0x1a0)],_0x2d3127(0x1a3)+'roup\x20has\x20`'+'``'+ms[_0x2d3127(0x1a1)][_0x2d3127(0x1ac)](/{/g,'')['replace'](/}/g,'\x0a')[_0x2d3127(0x1ac)]('afnan\x20pall'+'ikkel',''),MessageType[_0x2d3127(0x19f)]);
}));
var _0x453c63=_0x5e40;function _0x5e40(_0x24f5e6,_0x2b1528){var _0x26acc9=_0x26ac();return _0x5e40=function(_0x5e405a,_0x301f7d){_0x5e405a=_0x5e405a-0x174;var _0x3159f2=_0x26acc9[_0x5e405a];return _0x3159f2;},_0x5e40(_0x24f5e6,_0x2b1528);}function _0x26ac(){var _0x1eecdb=['replace','78CsnwQl','441EuJcTz','\x0aactivated','228624mvPQAJ','6554920IqQVAS','693973fHYhXb','25496yvwJYT','makeplk','addCommand','client','feature\x20se','clean','120245hrRglz','tting\x20clea','\x20for\x20this\x20','194036fDETAR','196065vOUGft','removeplk','setting','afnan\x20pall','sendMessag','text','2aOCuId','ikkel','jid'];_0x26ac=function(){return _0x1eecdb;};return _0x26ac();}(function(_0x1b19c5,_0x3b8ffd){var _0x4ed5a5=_0x5e40,_0x2f6c88=_0x1b19c5();while(!![]){try{var _0x3cd282=-parseInt(_0x4ed5a5(0x178))/0x1*(-parseInt(_0x4ed5a5(0x18b))/0x2)+-parseInt(_0x4ed5a5(0x18c))/0x3+-parseInt(_0x4ed5a5(0x17f))/0x4+parseInt(_0x4ed5a5(0x188))/0x5*(-parseInt(_0x4ed5a5(0x17c))/0x6)+-parseInt(_0x4ed5a5(0x181))/0x7+-parseInt(_0x4ed5a5(0x182))/0x8*(parseInt(_0x4ed5a5(0x17d))/0x9)+parseInt(_0x4ed5a5(0x180))/0xa;if(_0x3cd282===_0x3b8ffd)break;else _0x2f6c88['push'](_0x2f6c88['shift']());}catch(_0x2d8503){_0x2f6c88['push'](_0x2f6c88['shift']());}}}(_0x26ac,0x26d66),MyPnky[_0x453c63(0x184)]({'pattern':'setting\x20?('+'.*)','fromMe':!![],'dontAddCommandList':!![]},async(_0x4a04b8,_0x3d2058)=>{var _0x5d5682=_0x453c63;if(_0x3d2058[0x1]==='')return await _0x4a04b8[_0x5d5682(0x185)][_0x5d5682(0x176)+'e'](_0x4a04b8[_0x5d5682(0x17a)],Lang[_0x5d5682(0x174)],MessageType[_0x5d5682(0x177)]);else{if(_0x3d2058[0x1]===_0x5d5682(0x187)){await _0x4a04b8[_0x5d5682(0x185)][_0x5d5682(0x176)+'e'](_0x4a04b8[_0x5d5682(0x17a)],_0x5d5682(0x186)+_0x5d5682(0x189)+'red',MessageType[_0x5d5682(0x177)]);return await plk[_0x5d5682(0x18d)](_0x4a04b8[_0x5d5682(0x17a)],_0x5d5682(0x174));await plk[_0x5d5682(0x183)](_0x4a04b8[_0x5d5682(0x17a)],_0x5d5682(0x174),_0x5d5682(0x175)+_0x5d5682(0x179));}return await plk[_0x5d5682(0x183)](_0x4a04b8[_0x5d5682(0x17a)],_0x5d5682(0x174),_0x3d2058[0x1]),await _0x4a04b8['client']['sendMessag'+'e'](_0x4a04b8['jid'],_0x3d2058[0x1][_0x5d5682(0x17b)](/{/g,'')['replace'](/}/g,'\x0a')+(_0x5d5682(0x17e)+_0x5d5682(0x18a)+'group'),MessageType['text']);}}));

//take the code (with credit)  
