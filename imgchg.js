<!--
//
// ■ 进行动态按钮图文件的切换动作
// 
toggleKey = new Object();
toggleKey[0] = "_off";
toggleKey[1] = "_on";
toggleKey[2] = "_ovr";
toggleKey[3] = "_out";
toggleKey[4] = "_mdn";
toggleKey[5] = "_mup";
function imgChange(id,act){
if(document.images){ document.images[id].src = eval("img." + id + toggleKey[act] + ".src");}
}
// 当这段程序代码应用到播放器使用时：
// 以函式 imgChange('按钮识别名称',0) 进行的动作即使用 "off" 的图档；
// 以函式 imgChange('按钮识别名称',1) 进行的动作即使用 "on" 的图档。
// 下面的部份就是设定 "off" 与 "on" 的动态按钮图文件。
// vmute, pmode, rept, playt, pauzt, stopt 这些都是「按钮识别名称」。
if(document.images){
img = new Object();
// 「静音模式」按钮的图文件 (已关闭／已开启)
img.vmute_off = new Image();
img.vmute_off.src = "./img/wave.gif";
img.vmute_on = new Image();
img.vmute_on.src = "./img/waveup.gif";

// 「播放顺序模式」按钮的图文件 (循序／随机)
img.pmode_off = new Image();
img.pmode_off.src = "./img/xunhuan.gif";
img.pmode_on = new Image();
img.pmode_on.src = "./img/suiji.gif";
// 「是否重复播放」按钮的图文件 (不重复／重复)
img.rept_off = new Image();
img.rept_off.src = "./img/s.gif";
img.rept_on = new Image();
img.rept_on.src = "./img/r.gif";
// 「播放」按钮的图文件 (非播放中／播放中／鼠标移至时)
img.playt_off = new Image();
img.playt_off.src = "./img/play.gif";
img.playt_on = new Image();
img.playt_on.src = "./img/playup.gif";
img.playt_ovr = new Image();
img.playt_ovr.src = "./img/playup.gif";
// 「暂停」按钮的图文件 (非暂停中／暂停中／鼠标移至时)
img.pauzt_off = new Image();
img.pauzt_off.src = "./img/pause.gif";
img.pauzt_on = new Image();
img.pauzt_on.src = "./img/pauseup.gif";
img.pauzt_ovr = new Image();
img.pauzt_ovr.src = "./img/pauseup.gif";
// 「停止」按钮的图文件 (未被停止／已停止／鼠标移至时)
img.stopt_off = new Image();
img.stopt_off.src = "./img/stop.gif";
img.stopt_on = new Image();
img.stopt_on.src = "./img/stopup.gif";
img.stopt_ovr = new Image();
img.stopt_ovr.src = "./img/stopup.gif";
// 「上一首曲目」按钮的图文件 (一般显示／鼠标移至时)
img.prevt_out = new Image();
img.prevt_out.src = "./img/pre.gif";
img.prevt_ovr = new Image();
img.prevt_ovr.src = "./img/preup.gif";
// 「下一首曲目」按钮的图文件 (一般显示／鼠标移至时)
img.nextt_out = new Image();
img.nextt_out.src = "./img/bef.gif";
img.nextt_ovr = new Image();
img.nextt_ovr.src = "./img/befup.gif";
// 「增加音量」按钮的图文件 (一般显示／鼠标移至时)
img.vup_out = new Image();
img.vup_out.src = "./img/g_vup.gif";
img.vup_ovr = new Image();
img.vup_ovr.src = "./img/g_vup_ovr.gif";
// 「减少音量」按钮的图文件 (一般显示／鼠标移至时)
img.vdn_out = new Image();
img.vdn_out.src = "./img/g_vdn.gif";
img.vdn_ovr = new Image();
img.vdn_ovr.src = "./img/g_vdn_ovr.gif";
// 「显示播放清单内容」按钮的图文件 (一般显示／鼠标移至时)
img.plist_out = new Image();
img.plist_out.src = "./img/g_plist.gif";
img.plist_ovr = new Image();
img.plist_ovr.src = "./img/g_plist.gif";
// 显示播放状态的 Scope 动态图文件 (静止／转动)
img.scope_off = new Image();
img.scope_off.src = "./img/act.gif";
img.scope_on = new Image();
img.scope_on.src = "./img/actup.gif";
}
function imgtog(tg,act){
if(tg=="vmute") { if(act=="2"){imgChange("vmute",1);} else {imgmute("vmute",0);} }
if(tg=="vdn") { if(act=="2"){imgChange("vdn",2);} else {imgChange("vdn",3);} }
if(tg=="vup") { if(act=="2"){imgChange("vup",2);} else {imgChange("vup",3);} }
if(tg=="pmode") { if(act=="2"){imgChange("pmode",1);} else {imgrnd();} }
if(tg=="rept") { if(act=="2"){imgChange("rept",1);} else {imgrept();} }
if(tg=="nextt") { if(act=="2"){imgChange("nextt",2);} else {imgChange("nextt",3);} }
if(tg=="prevt") { if(act=="2"){imgChange("prevt",2);} else {imgChange("prevt",3);} }
if(tg=="pauzt") { if(act=="2"){imgpauz(2);} else {imgpauz();} }
if(tg=="playt") { if(act=="2"){imgplay(2);} else {imgplay();} }
if(tg=="stopt") { if(act=="2"){imgstop(2);} else {imgstop();} }
if(tg=="plist") { if(act=="2"){imgChange("plist",2);} else {imgChange("plist",3);} }
}
function imgmute(){
var ps=Exobud.settings;
if(ps.mute){imgChange("vmute",1);}
else {imgChange("vmute",0);}
}
function imgrnd(){
if(blnRndPlay){imgChange("pmode",1);}
else {imgChange("pmode",0);}
}
function imgrept(){
if(blnRept){imgChange("rept",1);}
else {imgChange("rept",0);}
}
function imgpauz(f){
var wmps=Exobud.playState;
if(f==2){imgChange("pauzt",2);}
else {
if(wmps==2){imgChange("pauzt",1);}
else {imgChange("pauzt",0);}
}
}
function imgplay(f){
var wmps=Exobud.playState;
if(f==2){imgChange("playt",2);}
else {
if(wmps==3){imgChange("playt",1);}
else {imgChange("playt",0);}
}
}
function imgstop(f){
var wmps=Exobud.playState;
if(f==2){imgChange("stopt",2);}
else {
if(wmps==2 || wmps==3){imgChange("stopt",0);}
else {imgChange("stopt",1);}
}
}
//-->

