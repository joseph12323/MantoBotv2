function _0x2d9a(){const _0x463dbc=['https://translate.google.com','13271670dIJqoz','❌\x20Invalid\x20language\x20used!\x20Type:\x20\x0a\x0a','APP_SETTINGS_LIST_FILE','code','1577298hczTBr','❤\x20Made\x20by\x20@Danilo\x20Manto','❌\x20Failed\x20to\x20generate\x20speech\x20synthesis\x20for\x20the\x20phrase/word:\x0a\x0a','exports','existsSync','writeFileSync','sendMessage','Deleted\x20file:\x20','2894913KruDFe','utf8','9hVsdLY','defaultSettings','threads','log','../../configs','threadID','then','messageID','name','./temps/say.mp3','readFileSync','parse','2134WUmvgc','body','807598hTCogj','🔰\x20Supported\x20TTS\x20Languages\x0a\x0a','7337224yzasuR','132klsPpp','find','list','\x0a\x0aPlease\x20try\x20using\x20a\x20different\x20language.','google-tts-api','../utils/google-tts-languages','14GuwJmC','getAudioUrl','1146PiXsNC','✔\x20Successfully\x20generated\x20a\x20speech\x20synthesis!\x0a\x0aLanguage:\x20','attachment','5ZGHZmo','📄\x20','1274204YElFUe','prefix'];_0x2d9a=function(){return _0x463dbc;};return _0x2d9a();}const _0x1c0710=_0x2c3c;(function(_0x22f52a,_0x4939aa){const _0x15afd0=_0x2c3c,_0x33bf44=_0x22f52a();while(!![]){try{const _0x449986=-parseInt(_0x15afd0(0x153))/0x1*(-parseInt(_0x15afd0(0x146))/0x2)+-parseInt(_0x15afd0(0x138))/0x3+parseInt(_0x15afd0(0x158))/0x4*(-parseInt(_0x15afd0(0x156))/0x5)+-parseInt(_0x15afd0(0x130))/0x6*(-parseInt(_0x15afd0(0x151))/0x7)+parseInt(_0x15afd0(0x14a))/0x8+parseInt(_0x15afd0(0x13a))/0x9*(-parseInt(_0x15afd0(0x15b))/0xa)+parseInt(_0x15afd0(0x148))/0xb*(parseInt(_0x15afd0(0x14b))/0xc);if(_0x449986===_0x4939aa)break;else _0x33bf44['push'](_0x33bf44['shift']());}catch(_0x2a4a7d){_0x33bf44['push'](_0x33bf44['shift']());}}}(_0x2d9a,0xd2992));const googleTTS=require(_0x1c0710(0x14f)),googleTTSLanguages=require(_0x1c0710(0x150)),configs=require(_0x1c0710(0x13e)),cloudscraper=require('cloudscraper'),fs=require('fs'),openSettings=()=>JSON[_0x1c0710(0x145)](fs[_0x1c0710(0x144)](configs[_0x1c0710(0x15d)],{'encoding':_0x1c0710(0x139)})),isLanguageValid=_0x29323a=>googleTTSLanguages[_0x1c0710(0x14c)](_0x29323a)!==undefined,say=async(_0x4f2623,_0x465fcd,_0x56bd8c,_0x3142d6)=>{const _0x4018a1=_0x1c0710,_0x238d68=openSettings(),_0x5a90de=_0x238d68['threads'][_0x465fcd[_0x4018a1(0x13f)]]||_0x238d68['defaultSettings'],_0x20edfb=_0x4f2623[0x1],_0x18d8d2=_0x4f2623[0x2];console[_0x4018a1(0x13d)](_0x4f2623);if(!isLanguageValid(_0x20edfb)){_0x56bd8c['sendMessage'](_0x4018a1(0x15c)+_0x5a90de[_0x4018a1(0x159)]+'say\x20languages-list\x0a\x0aTo\x20see\x20the\x20list\x20of\x20supported\x20languages.',_0x465fcd[_0x4018a1(0x13f)],_0x465fcd['messageID']);return;}const _0x56ec22=googleTTS[_0x4018a1(0x152)](_0x18d8d2,{'lang':googleTTSLanguages[_0x4018a1(0x14c)](_0x20edfb)[_0x4018a1(0x12f)],'slow':![],'host':_0x4018a1(0x15a)}),_0x336516=_0x4018a1(0x143),_0x1270a8={};if(_0x56ec22===undefined){_0x56bd8c[_0x4018a1(0x136)](_0x4018a1(0x132)+_0x18d8d2+_0x4018a1(0x14e),_0x465fcd[_0x4018a1(0x13f)],_0x465fcd['messageID']);return;}cloudscraper['get']({'uri':_0x56ec22,'encoding':null})['then'](_0x4076bc=>fs[_0x4018a1(0x135)](_0x336516,_0x4076bc))[_0x4018a1(0x140)](_0x1a788b=>{const _0x199e7d=_0x4018a1;_0x1270a8[_0x199e7d(0x147)]=_0x199e7d(0x154)+googleTTSLanguages[_0x199e7d(0x14c)](_0x20edfb)[_0x199e7d(0x142)],_0x1270a8[_0x199e7d(0x155)]=fs['createReadStream'](_0x336516)['on']('end',async()=>{const _0x481696=_0x199e7d;fs[_0x481696(0x134)](_0x336516)&&fs['unlink'](_0x336516,_0x4f8818=>{const _0x3c1b72=_0x481696;if(_0x4f8818)return console[_0x3c1b72(0x13d)](_0x4f8818);console[_0x3c1b72(0x13d)](_0x3c1b72(0x137)+_0x336516);});}),_0x56bd8c['sendMessage'](_0x1270a8,_0x465fcd['threadID'],_0x465fcd['messageID']);});},list=async(_0x41c826,_0xb295b3,_0xf90763,_0xbcee07)=>{const _0x4f910d=_0x1c0710,_0x1e9be=openSettings(),_0xee2035=_0x1e9be[_0x4f910d(0x13c)][_0xb295b3[_0x4f910d(0x13f)]]||_0x1e9be[_0x4f910d(0x13b)];let _0x8c113e=_0x4f910d(0x149),_0x1fdb26={};for(let _0x4a6e8e of googleTTSLanguages[_0x4f910d(0x14d)]())_0x8c113e+=_0x4f910d(0x157)+_0x4a6e8e['name']+'\x20('+_0x4a6e8e[_0x4f910d(0x12f)]+')\x0a\x0a';_0x8c113e+=_0x4f910d(0x131),_0x1fdb26[_0x4f910d(0x147)]=_0x8c113e,_0x1fdb26['mentions']=[{'id':'100007515468996','tag':'@Danilo\x20Manto'}],_0xf90763[_0x4f910d(0x136)](_0x1fdb26,_0xb295b3[_0x4f910d(0x13f)],_0xb295b3[_0x4f910d(0x141)]);};function _0x2c3c(_0x143433,_0x255bd2){const _0x2d9a90=_0x2d9a();return _0x2c3c=function(_0x2c3c31,_0x10f177){_0x2c3c31=_0x2c3c31-0x12f;let _0x5442cc=_0x2d9a90[_0x2c3c31];return _0x5442cc;},_0x2c3c(_0x143433,_0x255bd2);}module[_0x1c0710(0x133)]={'say':say,'list':list};