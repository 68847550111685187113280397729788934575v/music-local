const _0x9f929f=_0x298d;!function(n,t){const o=_0x298d,f=_0x3d8a();for(;;)try{if(987108===parseInt(o(529))/1+-parseInt(o(566))/2+parseInt(o(403))/3+parseInt(o(518))/4+parseInt(o(441))/5*(-parseInt(o(555))/6)+-parseInt(o(422))/7+parseInt(o(567))/8)break;f.push(f.shift())}catch(n){f.push(f.shift())}}();const audioPlayer=document[_0x9f929f(505)+_0x9f929f(413)](_0x9f929f(440)+"r"),musicList=document[_0x9f929f(505)+_0x9f929f(413)](_0x9f929f(509)),playPauseBtn=document[_0x9f929f(505)+_0x9f929f(413)](_0x9f929f(402)+"tn"),progressSlider=document[_0x9f929f(505)+_0x9f929f(413)](_0x9f929f(554)+_0x9f929f(389)),progressTime=document[_0x9f929f(505)+_0x9f929f(413)](_0x9f929f(559)+"me"),speedSelect=document[_0x9f929f(505)+_0x9f929f(413)](_0x9f929f(487)+"t"),randomBtn=document[_0x9f929f(505)+_0x9f929f(413)](_0x9f929f(404)),loopBtn=document[_0x9f929f(505)+_0x9f929f(413)](_0x9f929f(495)),volumeSlider=document[_0x9f929f(505)+_0x9f929f(413)](_0x9f929f(434)+"er"),scriptPath=document[_0x9f929f(504)+_0x9f929f(468)][_0x9f929f(534)],folderName=window[_0x9f929f(470)][_0x9f929f(503)][_0x9f929f(568)]("/")[2];function _0x298d(n,t){const o=_0x3d8a();return(_0x298d=function(n,t){return o[n-=382]})(n,t)}songsJsonPath=_0x9f929f(427)+"/"+folderName+_0x9f929f(453)+"n",musicServerURL=_0x9f929f(563)+_0x9f929f(511)+_0x9f929f(408)+_0x9f929f(549);let songNameContainer=document[_0x9f929f(505)+_0x9f929f(413)](_0x9f929f(510)+_0x9f929f(414)),isPlaying=!1,isSeeking=!1,isRandom=!1,isLooping=!1;function togglePlay(){const n=_0x9f929f,t={YqUDd:n(469)};isPlaying?(audioPlayer[n(491)](),playPauseBtn[n(388)+"t"]="▶"):(audioPlayer[n(560)](),playPauseBtn[n(388)+"t"]=t[n(409)]),isPlaying=!isPlaying}function updateProgressSlider(){const n=_0x9f929f,t={CStcW:function(n,t){return n(t)},AOobR:function(n,t){return n(t)}};if(!isSeeking){const o=audioPlayer[n(464)+"e"],f=audioPlayer[n(397)];progressSlider[n(401)]=o,progressTime[n(388)+"t"]=t[n(526)](formatTime,o)+n(433)+t[n(385)](formatTime,f)}}function addDownloadButton(n,t){const o=_0x9f929f,f={qJLSF:o(524),iBZcI:o(472)+o(479),mpNYH:o(523),oTfNp:o(469),iCCVx:o(496),rUBhJ:o(481)+"iv",KqLgb:o(396),qNCPI:o(522),lxYFC:o(557)+"tn",yiJDp:o(476),WruAZ:o(499)},e=document[o(539)+o(486)](f[o(565)]);e[o(540)]=f[o(467)];const a=document[o(539)+o(486)](f[o(507)]);a[o(388)+"t"]=f[o(473)],a[o(540)]=f[o(383)],a[o(418)+"te"](f[o(525)],t),a[o(532)+o(415)](f[o(400)],(function(){const n=o,t=this[n(462)+"te"](f[n(525)]),e=musicServerURL+"/"+t+n(435),a=document[n(539)+n(486)]("a");a[n(553)]=e,a[n(527)]=t+n(435),a[n(476)]()})),e[o(500)+"d"](a),n[o(500)+"d"](e);const i=document[o(539)+o(486)](f[o(565)]);i[o(388)+"t"]=t,i[o(540)]=f[o(429)],i[o(532)+o(415)](f[o(400)],(function(){const n=o,t=document[n(546)+n(449)](f[n(480)]);t&&t[n(494)][n(465)](f[n(393)]);const e=this[n(388)+"t"],a=musicServerURL+"/"+e+n(435);audioPlayer[n(534)]=a,audioPlayer[n(560)](),isPlaying=!0,playPauseBtn[n(388)+"t"]=f[n(460)],i[n(494)][n(506)](f[n(393)])})),n[o(500)+"d"](i),musicList[o(500)+"d"](n)}function toggleRandom(){const n=_0x9f929f,t={JrhdD:n(445),ySvcY:function(n){return n()}};isRandom=!isRandom,randomBtn[n(494)][n(543)](t[n(489)],isRandom),isRandom&&t[n(447)](shuffleMusicList)}function toggleLoop(){const n=_0x9f929f,t={VAcxI:n(445)};isLooping=!isLooping,loopBtn[n(494)][n(543)](t[n(407)],isLooping),audioPlayer[n(412)]=isLooping}function shuffleMusicList(){const n=_0x9f929f,t={JjhwJ:function(n,t){return n-t},ZURJk:function(n,t){return n>t},RMjld:function(n,t){return n*t},ZYpwi:function(n,t){return n+t}},o=Array[n(533)](musicList[n(463)]);for(let f=t[n(382)](o[n(569)],1);t[n(538)](f,0);f--){const e=Math[n(410)](t[n(536)](Math[n(520)](),t[n(446)](f,1)));[o[f],o[e]]=[o[e],o[f]]}musicList[n(498)]="",o[n(484)]((t=>{musicList[n(500)+"d"](t)}))}function _0x3d8a(){const n=["FFJKa","getAttribu","children","currentTim","remove","AJMAL MUSI","rUBhJ","ipt","▐ ▌","location","volume",".song-name","qNCPI","PUYrC","VPWQv","click","EODcO","li[data-sr",".darken","iBZcI","download-d","EVCau","FwWPn","forEach","shift","ent","speedSelec","eENev","JrhdD","data","pause","contains","Lljnh","classList","loopBtn","div","error","innerHTML","song-name","appendChil","jqsgm","closest","pathname","currentScr","getElement","add","KqLgb","DSamc","songList","songNameCo","sic-8be.pa","NyaPh",".title","timeupdate","XUIwE","OumuC","SabVX","6850648OtpUDn","uENaD","random","VYcMa","Download","darken","data-song","qJLSF","CStcW","download","mqQVV","421422kMJJgQ","FzQCV","trzaz","addEventLi","from","src","WyxzL","RMjld","then","ZURJk","createElem","className","LoTih","QzNvs","toggle","HBfoC","padStart","querySelec","title","LIIsi","sic2","sRSYy","VYjwk","BUTTON","href","progressSl","6ozPlTR","C | ","download-b","xPEdO","progressTi","play","MdDqs","indexOf","https://mu",'c="music/',"iCCVx","615778mFDGVn","541080zjHhor","split","length","JjhwJ","lxYFC","bbTJO","AOobR","pWYap","VwEiE","textConten","ider","VtCan","ZgFXf","change","mpNYH","data-src","input","button","duration","toString","ng-name","yiJDp","value","playPauseB","3616680maiEsk","randomBtn","playbackRa","max","VAcxI","ges.dev/mu","YqUDd","floor","target","loop","ById","ntainer","stener","spowA","PIgla","setAttribu","loadedmeta","gMWpq","IJIxD","10761352vxrvgl","KCUyE","tagName","AdvkH","znRrJ","/playlists","replace","WruAZ","nHZhS","zjkCJ","hEuhF"," / ","volumeSlid",".mp3","nhuGl","json","KWnRG","QKuyv","audioPlaye","2874730PpNmWK","JbWyW","oNkKq","UPOWG","active","ZYpwi","ySvcY","pop","tor","catch","CqIaH",'.mp3"] .so',"/songs.jso","OAStN","ended","WSPUF","xpnpU","FRrhB","ncUOg","oTfNp"];return(_0x3d8a=function(){return n})()}function loadAndCacheSongs(n){const t=_0x9f929f,o={uENaD:t(394),VPWQv:function(n,t,o){return n(t,o)}};n[t(484)]((n=>{const f=t,e=musicServerURL+"/"+n+f(435),a=document[f(539)+f(486)]("li");a[f(418)+"te"](o[f(519)],e),o[f(475)](addDownloadButton,a,n)}))}function formatTime(n){const t=_0x9f929f,o={KWnRG:function(n,t){return n/t},VwEiE:function(n,t){return n%t}},f=Math[t(410)](o[t(438)](n,60)),e=Math[t(410)](o[t(387)](n,60));return f[t(398)]()[t(545)](2,"0")+":"+e[t(398)]()[t(545)](2,"0")}function playSong(n){const t=_0x9f929f,o={UPOWG:function(n){return n()},ncUOg:function(n){return n()},bbTJO:function(n,t){return n(t)},JbWyW:t(523),jqsgm:t(394),sRSYy:t(469),FzQCV:t(455)},f=Array[t(533)](musicList[t(463)])[n][t(462)+"te"](o[t(501)]);audioPlayer[t(534)]=f,audioPlayer[t(560)](),isPlaying=!0,playPauseBtn[t(388)+"t"]=o[t(550)],currentSongIndex=n,audioPlayer[t(532)+t(415)](o[t(530)],(function(){const n=t;isRandom?o[n(444)](playRandomSong):o[n(459)](playNextSong);const f=o[n(384)](decodeURIComponent,audioPlayer[n(534)][n(568)]("/")[n(448)]()[n(568)](".")[n(485)]());o[n(384)](updateSongName,f);const e=document[n(546)+n(449)](n(478)+n(564)+f+(n(452)+n(399)));e&&e[n(494)][n(506)](o[n(442)])}))}function playNextSong(){const n=_0x9f929f,t={VYcMa:function(n,t){return n%t},mqQVV:function(n,t){return n+t},CqIaH:function(n,t){return n(t)}},o=Array[n(533)](musicList[n(463)]),f=t[n(521)](t[n(528)](currentSongIndex,1),o[n(569)]);t[n(451)](playSong,f)}function playRandomSong(){const n=_0x9f929f,t={WyxzL:function(n,t){return n*t},znRrJ:function(n,t){return n(t)}},o=Array[n(533)](musicList[n(463)]),f=Math[n(410)](t[n(535)](Math[n(520)](),o[n(569)]));t[n(426)](playSong,f)}audioPlayer[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(419)+_0x9f929f(490),(function(){const n=_0x9f929f;progressSlider[n(406)]=audioPlayer[n(397)]})),audioPlayer[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(514),(function(){const n=_0x9f929f;progressSlider[n(401)]=audioPlayer[n(464)+"e"]})),playPauseBtn[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(476),togglePlay),progressSlider[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(395),(function(){const n=_0x9f929f,t={spowA:function(n,t){return n(t)},PUYrC:function(n,t){return n(t)}},o=t[n(416)](parseFloat,this[n(401)]);audioPlayer[n(464)+"e"]=o,progressTime[n(388)+"t"]=t[n(416)](formatTime,o)+n(433)+t[n(474)](formatTime,audioPlayer[n(397)]),isSeeking=!0})),progressSlider[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(392),(function(){isSeeking=!1})),audioPlayer[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(514),updateProgressSlider),speedSelect[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(392),(function(){const n=_0x9f929f;audioPlayer[n(405)+"te"]={PIgla:function(n,t){return n(t)}}[n(417)](parseFloat,this[n(401)])})),randomBtn[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(476),(function(){const n=_0x9f929f,t={EODcO:function(n){return n()},nhuGl:function(n){return n()}};t[n(477)](toggleRandom),isRandom?(t[n(436)](shuffleMusicList),t[n(477)](playRandomSong)):t[n(436)](playNextSong)})),loopBtn[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(476),toggleLoop),volumeSlider[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(395),(function(){const n=_0x9f929f,t={xpnpU:function(n,t){return n(t)}}[n(457)](parseFloat,this[n(401)]);audioPlayer[n(471)]=t})),fetch(songsJsonPath)[_0x9f929f(537)]((n=>n[_0x9f929f(437)]()))[_0x9f929f(537)]((n=>{const t=_0x9f929f,o={KCUyE:function(n,t){return n(t)},XUIwE:function(n,t){return n>t}};o[t(423)](loadAndCacheSongs,n),o[t(515)](n[t(569)],0)&&o[t(423)](playSong,0)}))[_0x9f929f(450)]((n=>{const t=_0x9f929f,o={hEuhF:function(n,t){return n(t)},gMWpq:function(n,t){return n>t},eENev:function(n,t){return n(t)},Lljnh:t(453)+"n"};console[t(497)](n),o[t(432)](fetch,o[t(493)])[t(537)]((n=>n[t(437)]()))[t(537)]((n=>{const f=t;o[f(432)](loadAndCacheSongs,n),o[f(420)](n[f(569)],0)&&o[f(488)](playSong,0)}))[t(450)]((n=>{console[t(497)](n)}))})),randomBtn[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(476),(function(){const n=_0x9f929f,t={WSPUF:function(n){return n()},DSamc:function(n){return n()}};t[n(456)](toggleRandom),isRandom?(t[n(508)](shuffleMusicList),t[n(508)](playRandomSong)):t[n(456)](playNextSong)})),audioPlayer[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(560),(function(){const n=_0x9f929f,t={OAStN:n(472)+n(479),FwWPn:n(523),zjkCJ:function(n,t){return n(t)},trzaz:function(n,t){return n(t)}},o=document[n(546)+n(449)](t[n(454)]);o&&o[n(494)][n(465)](t[n(483)]);const f=t[n(431)](decodeURIComponent,audioPlayer[n(534)][n(568)]("/")[n(448)]()[n(568)](".")[n(485)]());t[n(531)](updateSongName,f);const e=document[n(546)+n(449)](n(478)+n(564)+f+(n(452)+n(399)));e&&e[n(494)][n(506)](t[n(483)])})),audioPlayer[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(455),(function(){const n=_0x9f929f,t={VtCan:function(n){return n()},VYjwk:function(n){return n()},nHZhS:n(472)+n(479),EVCau:n(523),OumuC:function(n,t){return n(t)}};isRandom?t[n(390)](playRandomSong):t[n(551)](playNextSong);const o=document[n(546)+n(449)](t[n(430)]);o&&o[n(494)][n(465)](t[n(482)]);const f=t[n(516)](decodeURIComponent,audioPlayer[n(534)][n(568)]("/")[n(448)]()[n(568)](".")[n(485)]());document[n(547)]=n(466)+n(556)+f,songNameContainer[n(388)+"t"]=f;const e=document[n(546)+n(449)](n(478)+n(564)+f+(n(452)+n(399)));e&&e[n(494)][n(506)](t[n(482)])})),musicList[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(476),(function(n){const t=_0x9f929f,o={MdDqs:function(n,t){return n===t},LoTih:function(n,t){return n===t},QKuyv:t(552),IJIxD:t(557)+"tn",FRrhB:t(394),AdvkH:t(522),oNkKq:t(510)+t(414),xPEdO:t(469)};if(o[t(561)](n[t(411)][t(424)],"LI")||o[t(541)](n[t(411)][t(424)],o[t(439)])&&n[t(411)][t(494)][t(492)](o[t(421)])){const f=Array[t(533)](musicList[t(463)])[t(562)](n[t(411)][t(502)]("li")),e=n[t(411)][t(502)]("li")[t(462)+"te"](o[t(458)]),a=n[t(411)][t(502)]("li")[t(388)+"t"][t(428)](o[t(425)],"");document[t(547)]=t(466)+t(556)+a;const i=document[t(505)+t(413)](o[t(443)]);i&&(i[t(388)+"t"]=a),audioPlayer[t(534)]=e,audioPlayer[t(560)](),playPauseBtn[t(388)+"t"]=o[t(558)],isPlaying=!0,currentSongIndex=f}}));const titleElement=document[_0x9f929f(546)+_0x9f929f(449)](_0x9f929f(513));function updateSongName(n){const t=_0x9f929f;document[t(547)]=t(466)+t(556)+n,songNameContainer[t(388)+"t"]=n}titleElement[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(476),(function(){const n=_0x9f929f;window[n(470)][n(553)]="/"})),randomBtn[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(476),toggleRandom),loopBtn[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(476),toggleLoop),audioPlayer[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(560),(function(){const n=_0x9f929f,t={ZgFXf:n(472)+n(479),HBfoC:n(523),SabVX:function(n,t){return n(t)},pWYap:function(n,t){return n(t)}},o=document[n(546)+n(449)](t[n(391)]);o&&o[n(494)][n(465)](t[n(544)]);const f=t[n(517)](decodeURIComponent,audioPlayer[n(534)][n(568)]("/")[n(448)]()[n(568)](".")[n(485)]());t[n(386)](updateSongName,f);const e=document[n(546)+n(449)](n(478)+n(564)+f+(n(452)+n(399)));e&&e[n(494)][n(506)](t[n(544)])})),audioPlayer[_0x9f929f(532)+_0x9f929f(415)](_0x9f929f(455),(function(){const n=_0x9f929f,t={FFJKa:function(n){return n()},NyaPh:function(n){return n()},QzNvs:function(n,t){return n(t)},LIIsi:n(523)};isRandom?t[n(461)](playRandomSong):t[n(512)](playNextSong);const o=t[n(542)](decodeURIComponent,audioPlayer[n(534)][n(568)]("/")[n(448)]()[n(568)](".")[n(485)]());t[n(542)](updateSongName,o);const f=document[n(546)+n(449)](n(478)+n(564)+o+(n(452)+n(399)));f&&f[n(494)][n(506)](t[n(548)])}));