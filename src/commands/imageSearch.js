const _0x220082=_0x4fcb;function _0x2fb4(){const _0x1d0242=['⚠️\x20Your\x20image\x20search\x20did\x20not\x20return\x20any\x20result.','writeFileSync','90bzFcQo','url','608773qcBvYo','3972TIckJc','parse','log','endsWith','Pushed\x20to\x20streams:\x20','--------------------\x0aImage\x20Search\x20Result\x0a\x0aFound:\x20','1150EuVeGt','\x20image','utf8','⏳MantoBot\x20Sending\x20search\x20result...','39699qDTZZL','messageID','.jpg','296lqVtkE','./temps/search-image-','102qbalBb','catch','.png','cloudscraper','existsSync','Deleted\x20file:\x20','threads','\x0aOnly\x20showing:\x206\x20images\x0a\x0a--------------------','end','googlethis','imageSearchQueue','207830DJdHHh','createReadStream','length','sendMessage','APP_SETTINGS_LIST_FILE','then','defaultSettings','233647dcmkbf','🔎\x20Searching\x20image...','push','threadID','669668GqVwVK','310197sTUBRH'];_0x2fb4=function(){return _0x1d0242;};return _0x2fb4();}(function(_0x2af679,_0x20a200){const _0x20bc25=_0x4fcb,_0x31c936=_0x2af679();while(!![]){try{const _0x17bbf=parseInt(_0x20bc25(0xd2))/0x1+parseInt(_0x20bc25(0xd6))/0x2+parseInt(_0x20bc25(0xd7))/0x3+-parseInt(_0x20bc25(0xb1))/0x4*(parseInt(_0x20bc25(0xb7))/0x5)+-parseInt(_0x20bc25(0xc0))/0x6*(-parseInt(_0x20bc25(0xcb))/0x7)+parseInt(_0x20bc25(0xbe))/0x8*(-parseInt(_0x20bc25(0xbb))/0x9)+-parseInt(_0x20bc25(0xda))/0xa*(parseInt(_0x20bc25(0xb0))/0xb);if(_0x17bbf===_0x20a200)break;else _0x31c936['push'](_0x31c936['shift']());}catch(_0x66acdb){_0x31c936['push'](_0x31c936['shift']());}}}(_0x2fb4,0x460ce));function _0x4fcb(_0x5a43d3,_0x438140){const _0x2fb40e=_0x2fb4();return _0x4fcb=function(_0x4fcb9b,_0x416c08){_0x4fcb9b=_0x4fcb9b-0xaf;let _0x374b8f=_0x2fb40e[_0x4fcb9b];return _0x374b8f;},_0x4fcb(_0x5a43d3,_0x438140);}const google=require(_0x220082(0xc9)),cloudscraper=require(_0x220082(0xc3)),fs=require('fs'),configs=require('../../configs'),global=require('../../global'),openSettings=()=>{const _0x5cd8b1=_0x220082;return JSON[_0x5cd8b1(0xb2)](fs['readFileSync'](configs[_0x5cd8b1(0xcf)],{'encoding':_0x5cd8b1(0xb9)}));},imageSearch=async(_0x3efb08,_0x406748,_0xe93558,_0x20aa85)=>{const _0x1449b6=_0x220082;let _0x21017d=openSettings(),_0x34520d=_0x21017d[_0x1449b6(0xc6)][_0x406748[_0x1449b6(0xd5)]]||_0x21017d[_0x1449b6(0xd1)],_0xdec3fa=_0x3efb08[0x1];_0xe93558[_0x1449b6(0xce)](_0x1449b6(0xd3),_0x406748['threadID'],_0x406748[_0x1449b6(0xbc)]);let _0x55b5fb=await google['image'](_0xdec3fa,{'safe':![]});if(_0x55b5fb['length']===0x0){_0xe93558[_0x1449b6(0xce)](_0x1449b6(0xd8),_0x406748[_0x1449b6(0xd5)],_0x406748[_0x1449b6(0xbc)]);return;}let _0x4b645c=[],_0x33d9e5=0x0;console[_0x1449b6(0xb3)](_0x55b5fb);for(let _0x3f58f8 of _0x55b5fb){if(_0x33d9e5>=0x6)break;console['log'](_0x33d9e5+':\x20'+_0x3f58f8['url']);let _0x4b7011=_0x3f58f8[_0x1449b6(0xaf)];if(!_0x4b7011[_0x1449b6(0xb4)](_0x1449b6(0xbd))&&!_0x4b7011[_0x1449b6(0xb4)](_0x1449b6(0xc2)))continue;let _0x47f6f3=_0x1449b6(0xbf)+_0x33d9e5+_0x1449b6(0xbd),_0x1043b6=![];await cloudscraper['get']({'uri':_0x4b7011,'encoding':null})[_0x1449b6(0xd0)](_0x2bab2f=>fs[_0x1449b6(0xd9)](_0x47f6f3,_0x2bab2f))[_0x1449b6(0xc1)](_0x38cff9=>{console['log'](_0x38cff9),_0x1043b6=!![];});if(_0x1043b6)continue;console['log'](_0x1449b6(0xb5)+_0x47f6f3),_0x4b645c[_0x1449b6(0xd4)](fs[_0x1449b6(0xcc)](_0x47f6f3)['on'](_0x1449b6(0xc8),async()=>{const _0x5c3e21=_0x1449b6;fs[_0x5c3e21(0xc4)](_0x47f6f3)&&fs['unlink'](_0x47f6f3,_0x328106=>{const _0x58720b=_0x5c3e21;if(_0x328106)return console['log'](_0x328106);console[_0x58720b(0xb3)](_0x58720b(0xc5)+_0x47f6f3);});})),_0x33d9e5+=0x1;}_0xe93558[_0x1449b6(0xce)](_0x1449b6(0xba),_0x406748[_0x1449b6(0xd5)],_0x406748[_0x1449b6(0xbc)]);let _0xed2c66={'body':_0x1449b6(0xb6)+_0x55b5fb['length']+_0x1449b6(0xb8)+(_0x55b5fb[_0x1449b6(0xcd)]>0x1?'s':'')+_0x1449b6(0xc7),'attachment':_0x4b645c};_0xe93558[_0x1449b6(0xce)](_0xed2c66,_0x406748['threadID'],_0x406748['messageID']);};module['exports']=async(_0x58b126,_0x5a68b5,_0x2bb5f5,_0x47b84b)=>{const _0x1f9f7d=_0x220082;global[_0x1f9f7d(0xca)]['enqueue'](async()=>{await imageSearch(_0x58b126,_0x5a68b5,_0x2bb5f5,_0x47b84b);});};