/* ================= 기본 데이터 ================= */
const H=3600000, MIN=60000;
const EL=['fire','water','wood','earth','metal'];
const ELK={fire:'불',water:'물',wood:'나무',earth:'땅',metal:'쇠',yang:'양',yin:'음',neutral:'중립'};
const ELC={yang:'#e07a10',yin:'#6a4ad0',neutral:'#7a7a8a',fire:'#e5484d',water:'#3b8beb',wood:'#3fa34d',earth:'#c9822b',metal:'#d4a20a'};
const ELBG={yang:'#fff1cf',yin:'#ece6ff',neutral:'#eeeef2',fire:'#ffe3d6',water:'#dfeefc',wood:'#e3f5e1',earth:'#f7e7cf',metal:'#f8efcc'};
const ELG={fire:'#8e1f1a,#e5484d 45%,#ff9a52 80%,#ffe08a',water:'#1b4f96,#3b8beb 60%,#a9d6ff',wood:'#1f6b2b,#3fa34d 60%,#9fe08f',earth:'#7a4512,#c9822b 60%,#f0c98a',metal:'#8a6a04,#d4a20a 60%,#ffe58a'};
const NAMES=["알","유체","강아지","백구","풍운개","해태","황구","화염개","구미호","아기새","적원앙","진·적원앙","보라부엉이","청원앙","진·청원앙","흑부엉이","까마귀","월영오","삼족오","화염뱁새","아기주작","화조","적봉","봉황","주작","아기뱀","쪽빛뱀","청사","금사","붉은뱀","홍사","혈사","지룡","지맥룡","황룡","이무기","교룡","수룡","벽파룡","천우룡","청룡","아기거북","바다거북","장수거북","흑갑장수거북","거북","늑대거북","붉은늑대거북","화염거북","폭염거구","뇌명신귀","파도거북","빙하거북","설산거구","쌍두흑사거북","쌍두흑룡거북","현무","아기호랑이","청호","자호","눈빛털대호","적호","대호","백두산호랑이","흰갈기적호","비호","기린","흰갈기호랑이","산군","아기백호","어린백호","환령백호","백호","아기곰","곰돌이","흑곰","반달곰","보라곰돌이","청웅","백곰","음양알","음양유체","일요의정","양기씨앗","열풍유체","양기아기수","질풍야수","광풍맹호","악풍비수","폭풍의흉조","파멸질풍수","궁기","양기범","태양맹호","일양신호","철턱심승","포식야수","탐욕의맹수","폭식거수","무한포식자","도철","월요의정","음영씨앗","심연유체","음기아기수","기류청령","몽환수","와류괴수","심연의사자","혼세마수","혼돈","음영룡아","심음교룡","태음신룡","철완맹수","분노의괴수","파쇄거수","불굴의흉수","광폭대괴수","도올","화요의정","불씨병아리","화계","염화신계","불꽃강아지","열화견","홍련신견","수요의정","물방울뱀","수류사","벽수신사","이슬양","수연양","천수신양","목요의정","가지원숭이","거목원숭이","울목신원","새싹토끼","수목토끼","청목신토","금요의정","철쥐","강철쥐","금속신서","송아지철우","청동소","철갑신우","토요의정","흙망아지","대지준마","후토신마","흙돼지","대지멧돼지","지덕신돈"];
const FORMS={}; // no -> {st,parent,cond}
function F(no,st,parent,cond){FORMS[no]={st,parent,cond:cond||null};}
F(0,1,null);F(1,2,0);
F(2,3,1,'zero');F(9,3,1,{el:'fire'});F(25,3,1,{el:'wood'});F(41,3,1,{el:'water'});F(57,3,1,{el:'metal'});F(73,3,1,{el:'earth'});
[[2,3,6],[9,13,10],[25,26,29],[41,42,45],[57,61,58],[73,77,74]].forEach(([p,a,b])=>{F(a,4,p,{grp:'A'});F(b,4,p,{grp:'B'});});
[[3,4,5],[6,7,8],[10,11,12],[13,14,15],[26,27,28],[29,30,31],[42,43,44],[45,46,47],[58,59,60],[61,62,63],[74,75,76],[77,78,79]].forEach(([a,b,c])=>{F(b,5,a);F(c,6,b);});
function chain(parent,list){let p=parent,st=FORMS[parent].st;list.forEach(([no,el])=>{st++;F(no,st,p,{el});p=no;});}
chain(12,[[16,'earth'],[17,'metal'],[18,'fire']]);chain(12,[[19,'fire'],[20,'fire'],[21,'fire'],[22,'fire'],[23,'fire'],[24,'fire']]);
chain(28,[[32,'earth'],[33,'metal'],[34,'fire']]);chain(28,[[35,'water'],[36,'water'],[37,'water'],[38,'wood'],[39,'wood'],[40,'wood']]);
chain(44,[[48,'fire'],[49,'earth'],[50,'wood']]);chain(44,[[51,'water'],[52,'water'],[53,'water'],[54,'metal'],[55,'metal'],[56,'water']]);
chain(60,[[64,'fire'],[65,'wood'],[66,'earth']]);chain(63,[[67,'wood'],[68,'wood'],[69,'metal'],[70,'metal'],[71,'metal'],[72,'metal']]);

// ---- 음양알 계열 (80~154): 상위 알 ----
F(80,1,null);F(81,2,80);
F(82,3,81,{tie:['fire','water']});F(101,3,81,{tie:['metal','earth']});
F(120,3,81,{el:'fire'});F(127,3,81,{el:'water'});F(134,3,81,{el:'wood'});F(141,3,81,{el:'metal'});F(148,3,81,{el:'earth'});
F(83,4,82,{tie:['fire','wood']});F(92,4,82,{tie:['fire','earth']});F(102,4,101,{tie:['water','metal']});F(111,4,101,{tie:['water','earth']});
[[120,121,'fire',['wood','water']],[120,124,'fire',['earth','metal']],[127,128,'water',['earth','wood']],[127,131,'water',['fire','metal']],[134,135,'wood',['water','earth']],[134,138,'wood',['fire','metal']],
 [141,142,'metal',['earth','wood']],[141,145,'metal',['wood','fire']],[148,149,'earth',['wood','water']],[148,152,'earth',['fire','metal']]].forEach(([p,k,top,sec])=>F(k,4,p,{top,sec}));
[[83,84,85],[92,93,94],[102,103,104],[111,112,113],[121,122,123],[124,125,126],[128,129,130],[131,132,133],[135,136,137],[138,139,140],[142,143,144],[145,146,147],[149,150,151],[152,153,154]].forEach(([a,b,c])=>{F(b,5,a);F(c,6,b);});
chain(85,[[86,'wood'],[87,'wood'],[88,'wood'],[89,'wood'],[90,'wood'],[91,'wood']]);chain(85,[[95,'fire'],[96,'fire'],[97,'fire'],[98,'fire'],[99,'fire'],[100,'fire']]);
chain(104,[[105,'water'],[106,'water'],[107,'water'],[108,'water'],[109,'water'],[110,'water']]);chain(104,[[114,'metal'],[115,'metal'],[116,'metal'],[117,'metal'],[118,'metal'],[119,'metal']]);
const CHILD={};Object.keys(FORMS).forEach(k=>CHILD[k]=[]);Object.keys(FORMS).forEach(k=>{const p=FORMS[k].parent;if(p!=null)CHILD[p].push(+k);});
const SAHYUNG=new Set([91,100,110,119]),PREMIUM=no=>no>=80;
const SUNGSU=new Set([22,23,24,38,39,40,54,55,56,70,71,72]), YOUNGSU=new Set([18,34,50,66]);
const GRP={A:['water','wood'],B:['fire','metal','earth']};
const EVO_LV=[5,10,15,20,25,30,40,50,60,75,99];
const TOT=[280,680,2000,3700,6470,11260,29640,48770,61600,119090,198920];
const K=TOT.map((t,i)=>{let s=0;for(let l=1;l<EVO_LV[i];l++)s+=10*Math.pow(l,1.5);return t/s;});
const need=(lv,st)=>Math.max(1,Math.round(10*Math.pow(lv,1.5)*K[st-1]));
const needP=p=>Math.round(need(p.lv,p.st)*(PREMIUM(p.no)?1.5:1));
const maxLv=st=>st>=12?1:EVO_LV[st-1];
const ENC_W={egg:2,gear:4,secret:6,dosa:8,susluck:10,blesssec:12,bless:14,luck:14,snack:14,lost:16};
const FAIL_ZERO=0.5; // 내 전투력이 권장의 50% 미만인 곳에서 실패하면 경험치 0
const FEED_DAILY=20; // 환수 한 마리당 하루 먹이 횟수
const LUCK=[[5,8],[5,10],[6,13],[7,17],[9,22],[11,28],[14,36],[18,46],[22,60],[28,78],[35,100],[35,100]];
const REFUND={4:5,5:8,6:14,7:22,8:33,9:48,10:65,11:84,12:100};
const HEART_T=[10,25,45,70,100], HEART_CP=[0,2,4,7,10,15], HEART_EXP=[0,2,4,6,8,10];
const SPOTS=[['운무 계곡',10,10,60,5,'45% 55%',0],['청류 연못',80,30,220,10,'30% 70%',160],['송운 숲',300,60,520,15,'95% 50%',40],['홍염 고개',600,120,1200,20,'20% 40%',320],['황토 평원',1050,240,2800,30,'55% 85%',20],['백금 협곡',1600,480,6500,40,'65% 35%',200],['현수 심연',2450,480,11000,40,'80% 30%',180],['오행 제단',3300,720,20000,50,'50% 75%',260],['천계 문턱',5900,720,32000,50,'70% 40%',0],['선계 정상',8400,720,50000,50,'40% 20%',300]].map(a=>({n:a[0],rec:a[1],min:a[2],exp:a[3],cost:a[4],pos:a[5],hue:a[6]}));
const ITEMS={
 ki_fire:{n:'불의 기운',p:1,img:'i/ki_fire.png',cat:'기운',d:'포만감 +25, 불 +3'},
 ki_water:{n:'물의 기운',p:1,img:'i/ki_water.png',cat:'기운',d:'포만감 +25, 물 +3'},
 ki_wood:{n:'나무의 기운',p:1,img:'i/ki_wood.png',cat:'기운',d:'포만감 +25, 나무 +3'},
 ki_earth:{n:'땅의 기운',p:1,img:'i/ki_earth.png',cat:'기운',d:'포만감 +25, 땅 +3'},
 ki_metal:{n:'쇠의 기운',p:1,img:'i/ki_metal.png',cat:'기운',d:'포만감 +25, 쇠 +3'},
 ki_yy:{n:'음양의 기운',p:2,img:'i/ki_yy.png',cat:'기운',d:'포만감 +25, 0보다 큰 오행 하나 -1'},
 dew:{n:'설화의 이슬',p:1,img:'i/dew.png',cat:'생활',d:'목마름 +40 (60 이하일 때)'},
 soap:{n:'비누',p:1,img:'i/soap.png',cat:'생활',d:'청결도 +50 (50 이하일 때)'},
 elixir:{n:'영약환단',p:30,img:'i/elixir.png',cat:'약',d:'50% 확률로 병 치료'},
 sus_s:{n:'수상한 기운 (소)',p:3,img:'i/sus_s.png',cat:'성장',d:'경험치 +100 (확정), 무작위 오행 +1',daily:5},
 sus_m:{n:'수상한 기운 (중)',p:8,img:'i/sus_m.png',cat:'성장',d:'레벨 경험치 50%, 무작위 오행 +3~4, 포만감 -30',daily:3},
 sus_l:{n:'수상한 기운 (대)',p:15,img:'i/sus_l.png',cat:'성장',d:'즉시 레벨 +1, 무작위 오행 +5~6, 10% 질병',daily:1},
 sec_active:{n:'환수행동력 회복 비서',p:10,img:'i/sec_active.gif',cat:'성장',d:'행동력 +50',daily:1},
 reset_ki:{n:'오행초기화기운',p:50,img:'i/reset_ki.gif',cat:'기타',d:'오행 점수를 0으로, 고정 해제'},
 tal_time:{n:'시간단축부적',p:5,img:'i/tal_time.gif',cat:'성장',d:'진행 중인 수련의 남은 시간 10% 단축'},
 sec_boss:{n:'토벌재도전비서',p:15,img:'i/sec_boss.gif',cat:'성장',d:'오늘 월드보스 공격 횟수 +1',daily:1},
 egg_n:{n:'환수 알',p:0,img:'h/00.gif',cat:'알',d:'빈 슬롯이 생기면 부화시킬 수 있어요'},
 egg_yy:{n:'음양알',p:0,img:'h/80.gif',cat:'알',d:'상위 알. 빈 슬롯이 생기면 부화시킬 수 있어요'},
 sec_yb:{n:'야바위재도전비서',p:3,img:'i/sec_yb.gif',cat:'성장',d:'오늘 환수 야바위 기회 +1',daily:3},
 sec_bless:{n:'강화축복비서',p:25,img:'i/sec_bless.gif',cat:'강화',d:'강화 성공 확률 +10%'},
 sec_protect:{n:'파괴방지비서',p:200,img:'i/sec_protect.gif',cat:'강화',d:'합성 파괴를 막아요'},
 sec_instant:{n:'즉시완료비서',p:0,img:'i/sec_instant.gif',cat:'운영자',d:'진행 중인 수련·심부름 즉시 완료',admin:1},
 sec_cure:{n:'질병치료비서',p:0,img:'i/sec_cure.gif',cat:'운영자',d:'확률 없이 즉시 치료',admin:1},
 sec_cancel:{n:'진화취소비서',p:0,img:'i/sec_cancel.gif',cat:'운영자',d:'직전 진화를 되돌려요',admin:1}
};
const GN=['일반','고급','희귀','영웅','전설','신화'], TN={w:'무기',a:'방어구',s:'보조무기'};
const MAXP=[3,3,5,5,7,9], ECOST=[3,6,12,25,50,100], SFEE=[10,20,50,120,300];
const RATE={1:1,2:1,3:.9,4:.8,5:.7,6:.5,7:.5,8:.3,9:.1};
const SYN=[{s:.5,d:0,x:0},{s:.5,d:0,x:0},{s:.5,d:.1,x:0},{s:.3,d:.1,x:0},{s:.2,d:0,x:.1}];
const GS={w:{cp:[[10,5],[40,10],[120,20],[350,50],[900,100],[2200,200]],en:[[5,1],[10,2],[18,2],[30,3],[48,3],[73,3]],res:[[2,1],[6,1],[10,1],[16,2],[28,2],[51,1]]},
 a:{decay:[[2,1],[6,1],[10,1],[16,1],[22,2],[41,1]]},
 s:{regen:[[3,1],[7,1],[12,1],[18,2],[30,2],[51,1]],exp:[[1,.5],[3,.5],[5,1],[11,1],[17,1],[25.5,.5]],aff:[[5,1],[10,2],[18,2],[30,3],[48,3],[73,3]]}};
const SL={cp:'전투력',en:'행동력 최대',res:'질병 저항',decay:'생활 수치 감소 속도 감소',regen:'행동력 회복 속도',exp:'획득 경험치',aff:'오행 친화'};
const PCT={res:1,decay:1,regen:1,exp:1,aff:1};

/* ================= 상태 ================= */
let db=null, acc=null, cfg={expMult:1}, view='home', sel=0, selSpot=null, toastT=null, busy=false;
const S={forgeSel:[],adminSlot:0,adminAccs:null,eggs:null,logs:null,newPw:null,codeGen:''};
const now=()=>Date.now()+((acc&&acc.offset)||0);
const dayKey=t=>new Date(t+9*H-6*H).toISOString().slice(0,10);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=n=>Math.round(n).toLocaleString('ko-KR');
const img=no=>'h/'+String(no).padStart(2,'0')+'.gif';
const isAdmin=()=>acc&&(acc.role==='main'||acc.role==='sub');
const isMain=()=>acc&&acc.role==='main';
function toast(m){if(typeof SFX!=='undefined'&&/(없어요|부족|아니에요|이미 |할 수 없|다 했|다 썼|수련 중이|자는 중|아직|불러요|못했|아프지|없는|더 살 수|형식이)/.test(m))SFX.nopeMaybe();const l=document.createElement('div');l.className='toast';l.textContent=m;document.body.appendChild(l);setTimeout(()=>l.remove(),2600);}
function fmtDur(ms){ms=Math.max(0,ms);const h=Math.floor(ms/H),m=Math.floor(ms%H/MIN),s=Math.floor(ms%MIN/1000);return h+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');}
async function sha(s){try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('hwansu:'+s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');}catch(e){let h=0;for(const c of 'hwansu:'+s)h=(h*31+c.charCodeAt(0))|0;return 'x'+h;}}
const rnd=()=>Math.random();

/* ================= 저장 ================= */
let saveChain=Promise.resolve();
function save(){acc.rev=(acc.rev||0)+1;const snap=JSON.parse(JSON.stringify(acc));saveChain=saveChain.then(()=>db.doc('accounts/'+snap.uid).set(snap)).catch(e=>{toast('저장 실패: '+(e&&e.message||e));});return saveChain;}
async function log(msg){try{await db.collection('adminlogs').add({t:Date.now(),by:acc.id,msg});}catch(e){}}

/* ================= 환수 계산 ================= */
function giveEgg(no){no=no||0;const k=acc.slots.findIndex(q=>!q);if(k>=0){acc.slots[k]=newPet(no);acc.notice[k]=null;dexAdd(no);return k;}const key=no===80?'egg_yy':'egg_n';acc.inv[key]=(acc.inv[key]||0)+1;return -1;}
function hatch(key){const k=acc.slots[sel]==null?sel:acc.slots.findIndex(q=>!q);if(k<0)return toast('빈 슬롯이 없어요. 해방하거나 선계로 돌려보낸 뒤 부화시켜 주세요.');if(!take(key))return;const no=key==='egg_yy'?80:0;acc.slots[k]=newPet(no);acc.notice[k]=null;dexAdd(no);sel=k;view='home';SFX.play('egg');toast(ITEMS[key].n+'을(를) 슬롯 '+(k+1)+'에 꺼냈어요!');commit();}
function newPet(no){return{no:no||0,st:1,lv:1,exp:0,el:{fire:0,water:0,wood:0,earth:0,metal:0},elT:{fire:0,water:0,wood:0,earth:0,metal:0},lock:null,hu:100,th:100,cl:100,aff:0,en:100,sick:null,sleep:null,train:null,eq:{w:null,a:null,s:null},ts:now(),acc:{roll:0,low:0,zero:0,nopat:0,sickA:0},zf:false,daily:{d:'',pat:0,play:0,sleep:0},prev:null,result:null,lastPat:now(),born:now()};}
function gearOf(u){return acc.gear.find(g=>g.u===u);}
function gstat(t,g,p,key){const v=GS[t][key][g];return v[0]+v[1]*p;}
function stats(p){const r={cp:0,en:0,res:0,decay:0,regen:0,exp:0,aff:0,affEl:null};for(const t of ['w','a','s']){const g=p.eq&&p.eq[t]?gearOf(p.eq[t]):null;if(!g)continue;for(const k in GS[t])r[k]+=gstat(t,g.g,g.p,k);if(t==='s')r.affEl=g.aff||'fire';}return r;}
const maxEn=p=>100+stats(p).en;
const hearts=p=>HEART_T.filter(x=>p.aff>=x).length;
function daily(p){const d=dayKey(now());if(p.daily.d!==d)p.daily={d,pat:0,play:0,sleep:0};return p.daily;}
function weekKey(t){const d=new Date(dayKey(t)+'T00:00:00Z');d.setUTCDate(d.getUTCDate()-((d.getUTCDay()+6)%7));return d.toISOString().slice(0,10);}
function accWeekly(){const w=weekKey(now());if(!acc.weekly||acc.weekly.w!==w)acc.weekly={w,egg:0};return acc.weekly;}
const EGG_PRICE=50,EGG_WEEK=1;
function accDaily(){const d=dayKey(now());if(!acc.daily||acc.daily.d!==d)acc.daily={d,sus_s:0,sus_m:0,sus_l:0,sec_active:0};return acc.daily;}
function cp(p){const s=p.st-1,st=stats(p);let v=10+50*s*s+5*(s+1)*(p.lv-1)+st.cp;v*=1+HEART_CP[hearts(p)]/100;if(PREMIUM(p.no))v*=1.2;const a=(p.hu+p.th+p.cl)/3;v*=a>=70?1.1:a>=40?1:.7;return Math.round(v);}
const huRate=p=>p.st===2?100/3:10;
function addAff(p,v){p.aff=Math.max(0,Math.min(100,p.aff+v));}
function addEl(p,e,amt){const cur=p.el[e];let cap=50;if(p.lock){const r=p.lock.indexOf(e);cap=[50,40,30,10,10][r];}const nv=Math.min(cap,cur+amt);if(nv>cur){p.el[e]=nv;p.elT[e]=now();}
 if(!p.lock&&p.el[e]>=50){p.lock=[...EL].sort((a,b)=>p.el[b]-p.el[a]||p.elT[a]-p.elT[b]);toast(ELK[p.lock[0]]+' 오행이 50에 닿아 순위가 고정됐어요!');}}
function addExp(p,amt){if(p.st>=12)return;const mx=maxLv(p.st);p.exp+=amt;while(p.lv<mx&&p.exp>=needP(p)){p.exp-=needP(p);p.lv++;}if(p.lv>=mx){p.lv=mx;p.exp=0;}}
function lvUp(p,n){const mx=maxLv(p.st);p.lv=Math.min(mx,p.lv+n);if(p.lv>=mx)p.exp=0;}
function randEl(){return EL[Math.floor(rnd()*5)];}
function makeSick(p,t){if(p.sick==null){p.sick=t;SFX.play('sick');addAff(p,-5);if(p.train){p.train=null;}}}

function finishTraining(p,t){
 const sp=SPOTS[p.train.s],dur=(p.train.end-p.train.start)/H,st=stats(p),m=.5*(1-st.decay/100);
 const ded=(k,rate)=>{const v=p[k];if(v>10)p[k]=Math.max(10,v-rate*dur*m);};
 ded('hu',huRate(p));ded('th',12.5);ded('cl',100/24);
 const ratio=cp(p)/sp.rec;let fail=10,great=15;if(ratio<1){fail=Math.min(85,10+(1-ratio)*70);great=5;}else if(ratio>=1.5){fail=5;great=22;}
 const r=rnd()*100,out=r<fail?'fail':r<fail+great?'great':'ok';
 const noExp=out==='fail'&&ratio<FAIL_ZERO;
 let exp=(noExp?0:sp.exp*{fail:.3,ok:1,great:2}[out])*(1+(st.exp+HEART_EXP[hearts(p)])/100)*(cfg.expMult||1);
 const lvFrom=p.lv;let coins=0;
 let gearT=null;
 // 인카운트: 개수를 먼저 정하고(1개 10%·2개 5%·3개 1%), 가중치 풀에서 겹치지 않게 뽑아요
 const er=rnd()*100,en=er<1?3:er<6?2:er<16?1:0;
 const pool=Object.keys(ENC_W).filter(k=>(k!=='dosa'||p.st>=5));let encs=[];
 for(let j=0;j<en&&pool.length;j++){const tot=pool.reduce((s2,k)=>s2+ENC_W[k],0);let x=rnd()*tot,pick=pool.length-1;for(let z=0;z<pool.length;z++){x-=ENC_W[pool[z]];if(x<0){pick=z;break;}}encs.push(pool.splice(pick,1)[0]);}
 const has=k=>encs.includes(k);
 if(has('bless'))exp*=1.5;
 addExp(p,Math.round(exp));
 if(has('luck')){const [lo,hi]=LUCK[p.st-1];coins=lo+Math.floor(rnd()*(hi-lo+1));acc.coins+=coins;}
 let eggTo=null;if(has('egg')){eggTo=giveEgg(0);}
 if(has('gear')){gearT=['w','a','s'][Math.floor(rnd()*3)];acc.gear.push({u:'g'+Date.now()+Math.floor(rnd()*1e6),t:gearT,g:0,p:0,aff:'fire'});}
 if(has('secret')){acc.inv.sec_instant=(acc.inv.sec_instant||0)+1;}
 let susK=null;if(has('susluck')){const z=rnd();susK=z<.6?'sus_s':z<.9?'sus_m':'sus_l';acc.inv[susK]=(acc.inv[susK]||0)+1;}
 if(has('blesssec')){acc.inv.sec_bless=(acc.inv.sec_bless||0)+1;}
 if(has('snack')){p.hu=Math.min(100,p.hu+30);p.th=Math.min(100,p.th+30);}
 if(has('lost')){addEl(p,randEl(),2);}
 if(has('dosa')){lvUp(p,1);}
 p.result={spot:sp.n,out,noExp,enc:encs[0]||null,encs,exp:Math.round(exp),lvFrom,lvTo:p.lv,coins,gearT,susK,eggBag:eggTo===-1,max:p.lv>=maxLv(p.st)};
 p.train=null;
 const d=daily(p);if(acc.autoSleep===true&&d.sleep<2){p.sleep=t+8*H;d.sleep++;}
}
// 시간 흐름: 반환 'vanish'면 소멸
function advance(p,to){
 let t=p.ts;if(!(to>t))return;let ev=false;
 while(t<to){
  let step=Math.min(to-t,10*MIN);
  if(p.train&&p.train.end>t&&p.train.end<t+step)step=p.train.end-t;
  if(p.sleep&&p.sleep>t&&p.sleep<t+step)step=p.sleep-t;
  if(p.sick!=null&&p.sick+24*H>t&&p.sick+24*H<t+step)step=p.sick+24*H-t;
  const h=step/H,st=stats(p),training=p.train&&t<p.train.end;
  p.en=Math.min(100+st.en,p.en+5*(1+st.regen/100)*h);
  if(!training){
   const m=(p.sleep&&t<p.sleep?.5:1)*(1-st.decay/100);
   p.hu=Math.max(0,p.hu-huRate(p)*m*h);p.th=Math.max(0,p.th-12.5*m*h);p.cl=Math.max(0,p.cl-(100/24)*m*h);
   const zero=p.hu<=0||p.th<=0||p.cl<=0;
   if(zero&&p.sick==null){makeSick(p,t);ev=true;}
   if(zero&&!p.zf){p.zf=true;}
   if(!zero)p.zf=false;
   p.acc.roll+=h;
   while(p.acc.roll>=1){p.acc.roll-=1;if(p.sick==null){const c=.1*(1-Math.min(60,st.res)/100);if((p.hu<=10&&rnd()<c)||(p.th<=10&&rnd()<c)||(p.cl<=20&&rnd()<c)){makeSick(p,t);ev=true;}}}
  }
  const low=p.hu<=50||p.th<=50||p.cl<=50;
  if(low){p.acc.low+=h;while(p.acc.low>=6){p.acc.low-=6;addAff(p,-3);}}else p.acc.low=0;
  if(p.zf){p.acc.zero+=h;while(p.acc.zero>=6){p.acc.zero-=6;addAff(p,-5);}}else p.acc.zero=0;
  p.acc.nopat+=h;while(p.acc.nopat>=24){p.acc.nopat-=24;addAff(p,-5);}
  if(p.sick!=null){p.acc.sickA+=h;while(p.acc.sickA>=1){p.acc.sickA-=1;addAff(p,-2);}}
  t+=step;
  if(p.train&&t>=p.train.end){finishTraining(p,p.train.end);ev=true;}
  if(p.sleep&&t>=p.sleep)p.sleep=null;
  if(p.sick!=null&&t-p.sick>=24*H){p.ts=t;return 'vanish';}
 }
 p.ts=to;return ev?'event':null;
}
function tickAll(){let changed=false;acc.slots.forEach((p,i)=>{if(!p)return;const r=advance(p,now());if(acc.slots[i]&&p.errand&&now()>=p.errand.end){finishErrand(p);changed=true;}if(r==='vanish'){vanish(i,'병을 이기지 못하고 선계로 돌아갔어요.');changed=true;}else if(r)changed=true;});return changed;}
function freeGear(p){}
function vanish(i,msg){const p=acc.slots[i];SFX.play('sad');acc.notice[i]=NAMES[p.no]+'은(는) '+msg;acc.slots[i]=null;}
function topEls(p){const mx=Math.max(...EL.map(e=>p.el[e]));return{mx,tops:mx>0?EL.filter(e=>p.el[e]===mx):[]};}
function evoCheck(p){
 if(p.st>=12)return{done:true,reason:'완성된 최종 단계예요'};
 const kids=CHILD[p.no];if(!kids.length)return{done:true,reason:'최종 형태예요'};
 const {mx,tops}=topEls(p);let target=null;
 if(kids.length===1&&!FORMS[kids[0]].cond)target=kids[0];
 else for(const k of kids){const c=FORMS[k].cond;
  if(c==='zero'&&mx===0)target=k;
  else if(c&&c.el&&tops.length===1&&tops[0]===c.el)target=k;
  else if(c&&c.grp&&tops.length>=1&&tops.every(e=>GRP[c.grp].includes(e)))target=k;
  else if(c&&c.tie&&mx>0&&tops.length===2&&c.tie.every(e=>tops.includes(e)))target=k;
  else if(c&&c.top&&tops.length===1&&tops[0]===c.top){const rest=EL.filter(e=>e!==c.top),m2=Math.max(...rest.map(e=>p.el[e])),sec=rest.filter(e=>p.el[e]===m2);if(m2>0&&sec.every(e=>c.sec.includes(e)))target=k;}}
 let why='';if(!target)why=PREMIUM(p.no)?'진화 조건이 충족되지 않았습니다':mx===0?'오행이 모두 0이에요':tops.length>1?'최상위 오행이 동점이에요':'요구하는 오행이 최상위가 아니에요';
 const ml=maxLv(p.st);
 if(p.lv<ml)return{ok:false,target,reason:'Lv '+ml+' 필요'+(target?'':' · '+why)};
 if(!target)return{ok:false,stuck:true,reason:why};
 if(p.sick!=null)return{ok:false,target,reason:'아파서 진화할 수 없어요'};
 if(p.train)return{ok:false,target,reason:'수련 중이에요'};
 if(p.sleep)return{ok:false,target,reason:'자는 중이에요'};
 return{ok:true,target};
}
function condText(no){const c=FORMS[no]&&FORMS[no].cond;if(!c)return'레벨만';if(c.tie||c.top)return'숨겨진 조건';if(c==='zero')return'오행 모두 0';if(c.el)return'최상위 '+ELK[c.el];return'최상위 '+GRP[c.grp].map(e=>ELK[e]).join('·');}
function dexAdd(no){if(!acc.dex[no])acc.dex[no]={d:dayKey(now()).slice(5).replace('-','.'),freed:false};}
function badgeOf(p){const e=evoCheck(p);if(SAHYUNG.has(p.no))return['b-x','사흉'];if(SUNGSU.has(p.no))return['b-s','성수'];if(YOUNGSU.has(p.no))return['b-y','영수'];if(e.done||e.stuck)return['b-f','최종'];return null;}

/* ================= 행동 ================= */
const P=()=>acc.slots[sel];
function take(id,n=1){if((acc.inv[id]||0)<n){toast(ITEMS[id].n+'이(가) 없어요. 상점에서 사 주세요.');return false;}acc.inv[id]-=n;return true;}
function guard(p,opt={}){if(!p)return false;if(p.errand&&!opt.errand){toast('심부름 중이에요. '+fmtDur(p.errand.end-now())+' 뒤에 돌아와요.');return false;}if(p.train&&!opt.train){toast('수련 중이에요.');return false;}if(p.sleep&&!opt.sleep){toast('자는 중이에요. 먼저 깨워 주세요.');return false;}return true;}
const A={
 feed(el){const p=P();if(!guard(p))return;const d=daily(p);if((d.feed||0)>=FEED_DAILY){closeLayer();return toast('오늘은 더 먹일 수 없어요 (하루 '+FEED_DAILY+'번).');}const id=el==='yy'?'ki_yy':'ki_'+el;if(!take(id))return;
  d.feed=(d.feed||0)+1;const over=Math.round(p.hu)>=100;
  p.hu=Math.min(100,p.hu+25);if(over){p.cl=Math.max(0,p.cl-5);p.th=Math.max(0,p.th-5);addAff(p,-1);}
  if(el==='yy'){const pos=EL.filter(e=>p.el[e]>0);if(pos.length){const e=pos[Math.floor(rnd()*pos.length)];p.el[e]--;toast(ELK[e]+' -1');}else toast('포만감만 찼어요.');}
  else{let a=3;const st=stats(p);if(st.affEl===el&&rnd()*100<Math.min(100,st.aff))a++;addEl(p,el,a);}
  SFX.play('munch');if(over)setTimeout(()=>toast('과식했어요! 청결도 -5 · 목마름 -5 · 호감도 -1'),50);closeLayer();commit();},
 dew(){const p=P();if(!guard(p))return;if(p.th>60)return toast('아직 목마르지 않아요 (60 이하일 때).');if(!take('dew'))return;SFX.play('drip');p.th=Math.min(100,p.th+40);commit();},
 soap(){const p=P();if(!guard(p))return;if(p.cl>50)return toast('아직 깨끗해요 (50 이하일 때).');if(!take('soap'))return;SFX.play('bubble');p.cl=Math.min(100,p.cl+50);commit();},
 pat(){const p=P();if(!guard(p))return;const d=daily(p);if(d.play)return toast('오늘은 이미 놀아줬어요.');if(d.pat>=2)return toast('오늘 쓰다듬기를 다 했어요.');d.pat++;addAff(p,7);p.acc.nopat=0;SFX.play('pat');toast('기분 좋아해요! 호감도 +7');commit();},
 play(){const p=P();if(!guard(p))return;const d=daily(p);if(d.pat||d.play)return toast('오늘 교감을 이미 했어요.');if(p.en<10)return toast('행동력이 부족해요.');d.play=1;p.en-=10;p.hu=Math.max(0,p.hu-10);addAff(p,15);p.acc.nopat=0;SFX.play('play');toast('신나게 놀았어요! 호감도 +15');commit();},
 sleep(){const p=P();if(!p)return;if(p.sleep){p.sleep=null;(SFX.play('wake'),toast('깨웠어요.'));return commit();}if(p.train)return toast('수련 중이에요.');const d=daily(p);if(d.sleep>=2)return toast('오늘 재울 수 있는 횟수를 다 썼어요.');d.sleep++;p.sleep=now()+8*H;SFX.play('sleep');toast('잠들었어요. 8시간 동안 수치가 천천히 줄어요.');commit();},
 elixir(){const p=P();if(!p)return;if(p.sick==null)return toast('아프지 않아요.');if(!take('elixir'))return;if(rnd()<.5){p.sick=null;p.acc.sickA=0;(SFX.play('heal'),toast('나았어요!'));}else (SFX.play('thud'),toast('치료에 실패했어요…'));commit();},
 sus(k){const p=P();if(!guard(p))return;if(p.st>=12)return toast('완성된 환수에게는 효과가 없어요.');if(!take(k))return;const mx=maxLv(p.st);
  if(k==='sus_s'){if(p.lv<mx)addExp(p,100);addEl(p,randEl(),1);}
  if(k==='sus_m'){if(p.lv<mx)addExp(p,Math.round(needP(p)*.5));addEl(p,randEl(),3+(rnd()<.5?1:0));p.hu=Math.max(0,p.hu-30);}
  if(k==='sus_l'){lvUp(p,1);addEl(p,randEl(),5+(rnd()<.5?1:0));if(rnd()<.1){makeSick(p,now());toast('으앗, 몸이 안 좋아졌어요!');}}
  SFX.play('magic');toast(ITEMS[k].n+' 사용!');closeLayer();commit();},
 energy(){const p=P();if(!p)return;if(!take('sec_active'))return;p.en=Math.min(maxEn(p),p.en+50);SFX.play('heal');toast('행동력 +50');commit();},
 resetKi(){const p=P();if(!p)return;if(!take('reset_ki'))return;EL.forEach(e=>{p.el[e]=0;p.elT[e]=0;});p.lock=null;SFX.play('mystic');toast('오행이 초기화됐어요.');commit();},
 admItem(k){const p=P();if(!p)return;if(!take(k))return;
  if(k==='tal_time'){if(!p.train){acc.inv[k]++;return toast('진행 중인 수련이 없어요. (심부름에는 쓸 수 없어요)');}const left=p.train.end-now(),cut=Math.max(0,left*.1);p.train.end-=cut;SFX.play('magic');toast('남은 수련 시간이 '+fmtDur(cut)+' 줄었어요.');}
  if(k==='sec_instant'){if(p.train){p.train.end=now();advance(p,now());}else if(p.errand){p.errand.end=now();tickAll();SFX.play('magic');}else{acc.inv[k]++;return toast('진행 중인 수련이나 심부름이 없어요.');}}
  if(k==='sec_cure'){p.sick=null;p.acc.sickA=0;(SFX.play('heal'),toast('나았어요!'));}
  if(k==='sec_cancel'){if(!p.prev){acc.inv[k]++;return toast('되돌릴 진화가 없어요.');}Object.assign(p,p.prev);p.prev=null;SFX.play('mystic');toast('진화를 되돌렸어요.');}
  commit();},
 tcancel(i){const p=acc.slots[i==null?sel:+i];if(!p||!p.train)return;
  confirmBox('수련 취소',NAMES[p.no]+'의 '+SPOTS[p.train.s].n+' 수련을 멈출까요? 경험치는 받지 못하고, 쓴 행동력과 그동안 줄어든 포만감·목마름·청결도는 돌아오지 않아요.',()=>{advance(p,now());if(!p.train)return render();
   const dur=(now()-p.train.start)/H,st=stats(p),m=.5*(1-st.decay/100);const ded=(k,rate)=>{const v=p[k];if(v>10)p[k]=Math.max(10,v-rate*dur*m);};ded('hu',huRate(p));ded('th',12.5);ded('cl',100/24);
   const nm=SPOTS[p.train.s].n;p.train=null;SFX.play('thud');toast(nm+' 수련을 취소했어요.');commit();});},
 train(i){const p=P();if(!guard(p))return;if(p.sick!=null)return toast('아파서 수련할 수 없어요.');if(p.st>=12)return toast('완성된 환수는 수련이 필요 없어요.');const sp=SPOTS[i];if(p.en<sp.cost)return toast('행동력이 부족해요.');
  if(p.lv>=maxLv(p.st))return toast('최대 레벨이라 경험치를 더 받을 수 없어요. 먼저 진화하세요.');
  p.en-=sp.cost;p.train={s:i,start:now(),end:now()+sp.min*MIN};SFX.play('whoosh');toast(NAMES[p.no]+'이(가) '+sp.n+'(으)로 떠났어요.');commit();},
 evolve(){const p=P();const e=evoCheck(p);if(!e.ok)return toast(e.reason);evoAnim(p,e.target);},
 liberate(){const p=P();if(!p)return;if(p.st<4)return toast('4단계부터 해방할 수 있어요.');if(p.sick!=null)return toast('아플 때는 해방할 수 없어요.');if(acc.dex[p.no]&&acc.dex[p.no].freed)return toast('이미 해방한 환수예요. 선계 귀환만 가능해요.');
  confirmBox('해방하기',NAMES[p.no]+'을(를) 해방할까요? 되돌릴 수 없어요. 도감에 解 도장이 찍혀요.',()=>{dexAdd(p.no);acc.dex[p.no].freed=true;acc.notice[sel]=NAMES[p.no]+'을(를) 해방했어요. 새 알 코드를 입력하세요.';acc.slots[sel]=null;commit();SFX.play('mystic');toast('해방했어요.');});},
 home(){const p=P();if(!p)return;if(p.st<4)return toast('4단계부터 선계 귀환할 수 있어요.');const c=REFUND[p.st];
  confirmBox('선계 귀환',NAMES[p.no]+'을(를) 선계로 돌려보내고 환수 코인 '+c+'개를 받을까요?',()=>{SFX.play('mystic');SFX.play('coins');acc.coins+=c;acc.notice[sel]=NAMES[p.no]+'이(가) 선계로 돌아갔어요. (코인 +'+c+')';acc.slots[sel]=null;commit();});},
 autoSleep(){acc.autoSleep=!(acc.autoSleep===true);commit();},
 ack(){const p=P();if(p){p.result=null;commit();}}
};
async function commit(){render();await save();syncArena();}

/* ================= 진화 연출 ================= */
function evoAnim(p,target){
 const L=document.getElementById('layer');const oldS=img(p.no),newS=img(target);let cancelled=false;
 L.innerHTML='<div class="overlay"><div class="evo stage" id="evo"><div style="position:absolute;inset:0;background:rgba(8,16,20,.55)" id="evoDim"></div><img class="m px" id="evoA" src="'+oldS+'" alt=""><div class="say" id="evoSay">어라…?<br>'+esc(NAMES[p.no])+'의 모습이…!</div></div></div>';
 const box=document.getElementById('evo'),a=document.getElementById('evoA'),say=document.getElementById('evoSay');SFX.play('huh');
 setTimeout(()=>{if(cancelled)return;box.style.background='radial-gradient(circle at 50% 45%,#2a3f52,#070d12 70%)';box.classList.remove('stage');document.getElementById('evoDim').remove();a.classList.add('sil');
  say.innerHTML='<button class="btn soft" id="evoCancel">진화 취소하기</button>';say.style.background='transparent';say.style.border='none';say.style.textAlign='center';
  document.getElementById('evoCancel').onclick=()=>{cancelled=true;closeLayer();SFX.play('thud');toast('진화를 멈췄어요.');};
  let iv=420,flip=false,t=0;
  const loop=()=>{if(cancelled)return;flip=!flip;a.src=flip?newS:oldS;SFX.evoBlip(t);t+=iv;iv=Math.max(55,iv*.86);if(t<3400)setTimeout(loop,iv);else boom();};loop();},1600);
 function boom(){if(cancelled)return;const el=topEls(p).tops[0]||'metal';const c=ELC[el];say.innerHTML='';a.src=newS;SFX.play('boom');
  const b=document.createElement('div');b.className='burst';b.style.background='radial-gradient(circle,#fff 0%,#fff6d6 15%,'+c+' 40%,rgba(0,0,0,0) 70%)';box.insertBefore(b,a);
  setTimeout(()=>{if(cancelled)return;
   p.prev=JSON.parse(JSON.stringify(Object.assign({},p,{prev:null})));
   const oldName=NAMES[p.no];p.no=target;p.st++;p.lv=1;p.exp=0;p.en=maxEn(p);EL.forEach(e=>{p.el[e]=0;p.elT[e]=0;});p.lock=null;dexAdd(target);
   a.classList.remove('sil');b.remove();box.classList.add('stage');box.style.background='';
   SFX.play('fanfare');say.style.cssText='';say.innerHTML='축하합니다!<br>'+esc(oldName)+'은(는) <b>'+esc(NAMES[target])+'</b>(으)로 진화했다!<br><small style="color:#2b5a5e">행동력이 가득 찼어요!</small><div style="margin-top:10px;text-align:right"><button class="btn" id="evoOk">확인</button></div>';
   document.getElementById('evoOk').onclick=closeLayer;commit();},1100);}
}
function closeLayer(){document.getElementById('layer').innerHTML='';}
function confirmBox(title,msg,yes){const L=document.getElementById('layer');L.innerHTML='<div class="overlay"><div class="modal" role="dialog" aria-label="'+esc(title)+'"><b class="serif" style="font-size:22px;color:#ffd36e">'+esc(title)+'</b><p style="margin:0">'+esc(msg)+'</p><div style="display:flex;gap:8px;margin-top:6px"><button class="btn" id="cfY">확인</button><button class="btn ghost" id="cfN">취소</button></div></div></div>';document.getElementById('cfY').onclick=()=>{closeLayer();yes();};document.getElementById('cfN').onclick=closeLayer;}
function feedMenu(){const L=document.getElementById('layer');const ks=['fire','water','wood','earth','metal','yy'];
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="기운 먹이기"><b class="serif" style="font-size:20px">어떤 기운을 먹일까요?</b>'+(()=>{const p=P(),d=p?daily(p):{};return '<small style="color:#c9d8d5">오늘 먹이 '+(d.feed||0)+' / '+FEED_DAILY+'</small>'+(p&&Math.round(p.hu)>=100?'<small style="color:#ff9a7a">배가 가득 찼어요. 더 먹이면 과식해서 청결도·목마름 -5, 호감도 -1</small>':'');})()+'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%">'+ks.map(k=>{const id=k==='yy'?'ki_yy':'ki_'+k;return '<button class="act" data-a="feed" data-v="'+k+'"><img class="px" src="'+ITEMS[id].img+'" alt=""><b>'+ITEMS[id].n+'</b><small>보유 '+(acc.inv[id]||0)+'</small></button>';}).join('')+'</div><button class="btn ghost" data-close="1">닫기</button></div></div>';}
function susMenu(){const L=document.getElementById('layer');L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="수상한 기운"><b class="serif" style="font-size:20px">수상한 기운</b><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%">'+['sus_s','sus_m','sus_l'].map(k=>'<button class="act" data-a="sus" data-v="'+k+'"><img class="px" src="'+ITEMS[k].img+'" alt=""><b>'+['소','중','대'][['sus_s','sus_m','sus_l'].indexOf(k)]+'</b><small>보유 '+(acc.inv[k]||0)+'</small></button>').join('')+'</div><p class="muted" style="color:#c9d8d5">빨리 크는 대신 오행이 무작위로 올라 분기가 틀어질 수 있어요.</p><button class="btn ghost" data-close="1">닫기</button></div></div>';}

/* ================= 화면 ================= */

/* ================= 우편함 ================= */
function mailParts(m){const a=[];if(m.coins)a.push('코인 '+fmt(m.coins));if(m.eggs)a.push('환수 알 ×'+m.eggs);if(m.yyEggs)a.push('음양알 ×'+m.yyEggs);Object.entries(m.items||{}).forEach(([k,n])=>{if(ITEMS[k]&&n>0)a.push(ITEMS[k].n+' ×'+n);});(m.gear||[]).forEach(g=>a.push(GN[g.g]+' '+TN[g.t]+' +'+g.p));return a;}
function mailIcons(m){let h='';if(m.coins)h+='<span class="mchip"><img class="px" src="i/coin_spin.gif" alt="">'+fmt(m.coins)+'</span>';if(m.eggs)h+='<span class="mchip"><img class="px" src="h/00.gif" alt="">환수 알 ×'+m.eggs+'</span>';if(m.yyEggs)h+='<span class="mchip"><img class="px" src="h/80.gif" alt="">음양알 ×'+m.yyEggs+'</span>';Object.entries(m.items||{}).forEach(([k,n])=>{if(ITEMS[k]&&n>0)h+='<span class="mchip"><img class="px" src="'+ITEMS[k].img+'" alt="">'+esc(ITEMS[k].n)+' ×'+n+'</span>';});(m.gear||[]).forEach(g=>{h+='<span class="mchip"><img class="px" src="eq/'+g.g+'_'+g.t+'.gif" alt=""><b class="c'+g.g+'">'+GN[g.g]+' '+TN[g.t]+' +'+g.p+'</b></span>';});return h;}
function newMailId(){return 'm'+Date.now().toString(36)+Math.floor(rnd()*1e6).toString(36);}

/* ================= 출석부 ================= */
const ATT=[{k:'sus_s'},{k:'sec_bless'},{k:'sec_active'},{k:'sec_instant'},{k:'sus_m'},{k:'sus_l'},{egg:1}];
function attReward(r){return r.egg?{n:'환수 알',img:'h/00.gif'}:{n:ITEMS[r.k].n,img:ITEMS[r.k].img};}
function attCheck(){if(MODE!=='player'||!acc)return 0;const t=dayKey(now()),y=dayKey(now()-24*H),a=acc.att||{last:null,streak:0};if(a.last===t)return 0;
 const st=a.last===y&&a.streak<7?a.streak+1:1;acc.att={last:t,streak:st};const r=ATT[st-1];
 if(r.egg){acc.attEggBag=giveEgg(0)<0;}
 else acc.inv[r.k]=(acc.inv[r.k]||0)+1;
 return st;}
function attModal(fresh){const a=acc.att||{streak:0},st=a.last===dayKey(now())?a.streak:0;const L=document.getElementById('layer');
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal att" role="dialog" aria-label="출석부"><b class="serif" style="font-size:24px;color:#ffd36e">출석부</b><p style="margin:0;color:#e8fff8">'+(st?'연속 <b style="color:#ffd36e">'+st+'일째</b> 출석 중!':'오늘 아직 출석하지 않았어요.')+'</p>'+
 '<div class="attgrid">'+ATT.map((r,i)=>{const w=attReward(r),on=i<st,now_=fresh&&i===st-1;return '<div class="attc'+(on?' on':'')+(i===6?' big':'')+'"><span class="attd">'+(i+1)+'일차</span><img class="px" src="'+w.img+'" alt=""><small>'+esc(w.n)+'</small>'+(on?'<span class="seal7'+(now_?' drop':'')+'">完</span>':'')+'</div>';}).join('')+'</div>'+
 (fresh?'<p style="margin:0;color:#ffd36e;font-weight:700">오늘의 보상: '+esc(attReward(ATT[st-1]).n)+' 획득!'+(ATT[st-1].egg&&acc.attEggBag?' (빈 슬롯이 없어 가방에 보관했어요)':'')+'</p>':'')+
 '<small style="color:#c9d8d5">매일 오전 6시에 새 출석이 열려요. 하루라도 빠지면 1일차부터 다시 시작해요.</small><button class="btn" data-close="1" style="background:#f0c75e">확인</button></div></div>';
 if(fresh)setTimeout(()=>SFX.play(st===7?'fanfare':'egg'),350);}
function header(){
 const tabs=[['home','환수'],['train','선계수련'],['gear','장비'],['bag','가방'],['shop','상점'],['code','코드'],['dex','도감'],['pvp','대전'],['boss','토벌'],['mail','우편']];
 return '<header class="sky"><div class="bar"><span class="logo">환수키우기</span><nav class="main" aria-label="주 메뉴">'+tabs.map(([k,n])=>'<button data-view="'+k+'" class="'+(view===k?'on':'')+'">'+n+(k==='mail'&&acc.mail&&acc.mail.length?'<span class="mbadge">'+acc.mail.length+'</span>':'')+'</button>').join('')+'</nav><div class="coinbox"><img class="px" src="i/coin_spin.gif" alt="" width="44" height="44"><b>'+fmt(acc.coins)+'</b><span class="muted" style="margin-left:4px">코인</span></div><button class="btn ghost sm" data-a2="att" title="출석부">출석'+(acc.att&&acc.att.last===dayKey(now())?' '+acc.att.streak+'일':'')+'</button><button class="btn ghost sm" data-a2="sfx" title="효과음" aria-label="효과음 '+(SFX.st.sfx?'끄기':'켜기')+'">'+(SFX.st.sfx?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>':'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>')+'</button><button class="btn ghost sm" data-a2="bgm" title="배경음" aria-label="배경음 '+(SFX.st.bgm?'끄기':'켜기')+'" style="'+(SFX.st.bgm?'':'opacity:.4')+'"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg></button><span style="color:#fff8e6;font-size:13px">'+esc(acc.nick||acc.id)+'</span><button class="btn ghost sm" data-a2="logout">로그아웃</button></div>'+
 ((cfg.expMult||1)>1||cfg.notice?'<div class="banner">'+((cfg.expMult||1)>1?'<span class="tag">이벤트</span><span>경험치 '+cfg.expMult+'배 적용 중</span>':'')+(cfg.notice?'<span>[공지] '+esc(cfg.notice)+'</span>':'')+'</div>':'')+
 (acc.offset?'<div class="banner" style="background:#7a4512">테스트 시간 +'+(acc.offset/H).toFixed(1)+'시간 앞당겨진 상태예요</div>':'')+'</header>';
}
function slotsBar(){return '<div class="slots" role="tablist" aria-label="환수 슬롯">'+[0,1,2].map(i=>{const p=acc.slots[i];if(!p)return '<button role="tab" class="slot'+(sel===i?' on':'')+'" data-sel="'+i+'"><img class="px" src="i/q.png" alt="" style="padding:10px"><span><b>빈 슬롯</b><small>알 코드를 입력하세요</small></span></button>';
 const st=p.errand?'심부름 중 · '+fmtDur(p.errand.end-now()):p.train?'수련 중 · '+fmtDur(p.train.end-now()):p.sick!=null?'아파요!':p.sleep?'자는 중':p.st+'단계 · Lv '+p.lv;
 return '<button role="tab" class="slot'+(sel===i?' on':'')+'" data-sel="'+i+'"><img class="px" src="'+img(p.no)+'" alt=""><span><b>'+NAMES[p.no]+'</b><small>'+st+'</small></span></button>';}).join('')+'</div>';}
function bar(lb,v,max,grad,warn){const w=Math.max(0,Math.min(100,v/max*100));return '<div class="stat"><span class="lb">'+lb+'</span><div class="tr"><i style="width:'+w+'%;background:linear-gradient(90deg,'+grad+')"></i></div><span class="v" style="'+(warn?'color:#b02a1f':'')+'">'+fmt(v)+(max!==100?'/'+fmt(max):'')+'</span></div>';}
function elBars(p){const order=p.lock||[...EL].sort((a,b)=>p.el[b]-p.el[a]||p.elT[a]-p.elT[b]);
 return order.map((e,r)=>{const v=p.el[e],locked=p.lock&&r===0,cap=p.lock?[50,40,30,10,10][r]:50;
  return '<div class="el"><div class="orb'+(locked?' glow':'')+'" style="border-color:'+ELC[e]+';background:'+ELBG[e]+'"><img src="i/'+e+'.svg" alt=""></div><div style="flex:1;display:flex;flex-direction:column;gap:3px"><div style="display:flex;justify-content:space-between;font-size:13px"><b style="color:'+ELC[e]+'">'+ELK[e]+(p.lock?' · '+(r+1)+'위':'')+'</b><b>'+v+(locked?' 고정':' <span class="muted">/ '+cap+'</span>')+'</b></div><div class="trk'+(locked?' glow':'')+'" style="border:1px solid '+ELC[e]+'"><i style="width:'+(v/50*100)+'%;background:linear-gradient(90deg,'+ELG[e]+')"></i>'+(p.lock&&r>0?'<span class="cap" style="left:'+(cap/50*100)+'%"></span>':'')+'</div></div></div>';}).join('');}
function vHome(){
 const p=P();
 if(!p){const n=acc.notice[sel];return slotsBar()+'<div class="card" style="max-width:560px">'+(n?'<p class="warn">'+esc(n)+'</p>':'')+'<h2>알 코드 입력</h2>'+(['egg_n','egg_yy'].some(k=>acc.inv[k]>0)?'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">'+['egg_n','egg_yy'].filter(k=>acc.inv[k]>0).map(k=>'<button class="btn" data-hatch="'+k+'"><img class="px" src="'+ITEMS[k].img+'" alt="" style="width:28px;height:28px;vertical-align:-8px"> 가방의 '+ITEMS[k].n+' 꺼내기 ('+acc.inv[k]+')</button>').join('')+'</div>':'')+'<p class="muted">운영자에게 받은 알 코드를 입력하면 이 슬롯에서 알을 키울 수 있어요. 상점에서 알을 살 수도 있어요 (주 '+EGG_WEEK+'개, '+EGG_PRICE+'코인).</p><form data-form="egg" style="display:flex;gap:8px;flex-wrap:wrap"><label class="f" style="flex:1">알 코드<input type="text" name="code" placeholder="EGG-XXXX-XXXX" required></label><button class="btn teal" style="align-self:flex-end">알 받기</button></form></div>';}
 const e=evoCheck(p),bd=badgeOf(p),st=stats(p),d=daily(p),ad=accDaily(),mx=maxLv(p.st),hr=hearts(p);
 const stCls=p.sick!=null?' sick':p.sleep?' sleep':'';
 const status=p.errand?'<span class="chip" style="background:rgba(160,100,30,.92);color:#fff8e6">심부름 중 · '+esc(ERR[p.errand.m].n)+' · '+fmtDur(p.errand.end-now())+'</span>':p.train?'<span class="chip" style="background:rgba(43,90,94,.9);color:#e8fff8">수련 중 · '+esc(SPOTS[p.train.s].n)+' · '+fmtDur(p.train.end-now())+'</span> <button class="btn soft sm" data-a="tcancel" data-v="'+sel+'" style="min-height:0;padding:3px 10px">수련 취소</button>':p.sick!=null?'<span class="chip" style="background:#8f2219;color:#fff">아파요! 소멸까지 '+fmtDur(p.sick+24*H-now())+'</span>':p.sleep?'<span class="chip" style="background:#2c3466;color:#e6e9ff">자는 중 · '+fmtDur(p.sleep-now())+'</span>':'<span class="chip" style="background:rgba(43,90,94,.9);color:#e8fff8">수련 가능</span>';
 const warns=[];if(p.cl<=20)warns.push('청결도가 20 이하예요. 1시간마다 병에 걸릴 수 있어요.');if(p.hu<=10)warns.push('배가 너무 고파요!');if(p.th<=10)warns.push('목이 너무 말라요!');
 const lvTxt=p.st>=12?'완성':p.lv>=mx?'Lv '+p.lv+' MAX':'Lv '+p.lv;
 const expW=p.st>=12||p.lv>=mx?100:p.exp/needP(p)*100;
 const acts=[['feed','',ITEMS.ki_fire.img,'기운 먹이기','포만감 '+Math.round(p.hu)],['dew','',ITEMS.dew.img,'설화의 이슬','보유 '+(acc.inv.dew||0)],['soap','',ITEMS.soap.img,'씻기기','비누 '+(acc.inv.soap||0)],['pat','','i/pat.png','쓰다듬기','오늘 '+d.pat+'/2'],['play','','i/play.png','놀아주기',d.play?'오늘 완료':'행동력 -10'],['sleep','','i/sleep.png',p.sleep?'깨우기':'재우기','남은 '+(2-d.sleep)+'회'],['elixir','',ITEMS.elixir.img,'영약환단','보유 '+(acc.inv.elixir||0)],['susm','',ITEMS.sus_s.img,'수상한 기운','소·중·대'],['energy','',ITEMS.sec_active.img,'행동력 비서','보유 '+(acc.inv.sec_active||0)],['resetKi','',ITEMS.reset_ki.img,'오행초기화','보유 '+(acc.inv.reset_ki||0)]];
 const adm=['tal_time','sec_instant','sec_cure','sec_cancel'].filter(k=>acc.inv[k]>0).map(k=>['admItem',k,ITEMS[k].img,ITEMS[k].n,'보유 '+acc.inv[k]]);

 return slotsBar()+'<div class="row"><section class="grow" aria-label="환수 모습"><div class="stagebox stage'+stCls+'"><div style="position:absolute;left:18px;top:16px;display:flex;flex-direction:column;gap:8px"><div class="plate" style="display:flex;align-items:baseline;gap:8px"><span class="serif" style="font-size:24px;font-weight:700">'+NAMES[p.no]+'</span><span class="muted">no.'+String(p.no).padStart(2,'0')+' · '+p.st+'단계</span>'+elTag(ELOF[p.no])+'</div><div style="display:flex;gap:6px;flex-wrap:wrap">'+(bd?'<span class="chip '+bd[0]+(bd[1]==='성수'?' glow':'')+'">'+bd[1]+'</span>':'')+status+'</div></div><div class="plate cpp" style="position:absolute;right:18px;top:16px;min-width:170px"><div style="display:flex;justify-content:space-between;align-items:baseline"><span class="muted">전투력</span><b style="font-size:18px;color:#8a2a12">'+fmt(cp(p))+'</b></div><div class="muted" style="display:flex;justify-content:space-between"><span>호감도 보너스</span><span>+'+HEART_CP[hr]+'%</span></div></div><img class="pet px" src="'+img(p.no)+'" alt="'+NAMES[p.no]+'"><div style="position:absolute;left:0;right:0;bottom:0;padding:10px 18px;background:linear-gradient(0deg,rgba(20,40,46,.78),rgba(20,40,46,0));display:flex;align-items:center;gap:12px;color:#fff8e6"><b>'+lvTxt+'</b><div style="flex:1;height:12px;border-radius:6px;background:rgba(255,255,255,.25);overflow:hidden"><i style="display:block;height:100%;width:'+expW+'%;background:linear-gradient(90deg,#f0c75e,#fff0b5)"></i></div><span style="font-size:13px">'+(p.st>=12?'최종 완성':p.lv>=mx?'경험치 MAX':fmt(p.exp)+' / '+fmt(needP(p)))+'</span></div></div>'+
 '<div class="card"><div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;align-items:center"><h2 style="margin:0">돌보기</h2><label style="display:flex;gap:8px;align-items:center;font-size:13px;cursor:pointer"><input type="checkbox" data-a="autoSleep" '+(acc.autoSleep===true?'checked':'')+' style="width:18px;height:18px;accent-color:#2b5a5e">수련 후 자동 수면 <span class="muted">(오늘 남은 수면 '+(2-d.sleep)+'회)</span></label></div>'+warns.map(w=>'<p class="warn" style="margin:8px 0 0">'+w+'</p>').join('')+
 '<div class="acts" style="margin-top:12px">'+acts.concat(adm).map(a=>'<button class="act" data-a="'+a[0]+'" data-v="'+a[1]+'"><img class="px" src="'+a[2]+'" alt=""><b>'+a[3]+'</b><small>'+a[4]+'</small></button>').join('')+'</div>'+
 '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn'+(e.ok?' teal':'')+'" style="flex:1 1 220px;min-height:52px;font-size:15px" data-a="evolve" '+(e.ok?'':'disabled')+'>'+(e.ok?'진화하기 → ???':e.done?'최종 형태':'진화하기 · '+esc(e.reason))+'</button><button class="btn" style="flex:1 1 140px" data-a="liberate" '+(p.st<4?'disabled':'')+'>해방하기</button><button class="btn soft" style="flex:1 1 140px" data-a="home" '+(p.st<4?'disabled':'')+'>선계 귀환'+(p.st>=4?' · '+REFUND[p.st]+'코인':'')+'</button></div>'+(e.stuck?'<p class="warn" style="margin:10px 0 0">진화 조건을 맞추지 못해 최종 표시가 붙었어요: '+esc(e.reason)+'. 기운을 더 먹이거나 오행을 초기화하면 다시 진화할 수 있어요.</p>':'')+'</div></section>'+
 '<aside class="side" aria-label="환수 상태"><div class="card"><h2>상태</h2>'+bar('행동력',p.en,maxEn(p),'#3d7d84,#7cc4c2')+bar('포만감',p.hu,100,'#c9822b,#f0c98a',p.hu<=10)+bar('목마름',p.th,100,'#3b8beb,#a9d6ff',p.th<=10)+bar('청결도',p.cl,100,p.cl<=20?'#c0392b,#f08a7e':'#6fae3a,#bfe59a',p.cl<=20)+
 '<div class="stat"><span class="lb">호감도</span><span role="img" aria-label="하트 5개 중 '+hr+'개" style="display:flex;gap:3px">'+[0,1,2,3,4].map(i=>'<svg aria-hidden="true" width="22" height="20" viewBox="0 0 24 22"><path d="M12 21 2.5 11.5A5.5 5.5 0 0 1 12 4a5.5 5.5 0 0 1 9.5 7.5z" fill="'+(i<hr?'#e0505a':'#f3e3d8')+'" stroke="#a8323a" stroke-width="1.5"/></svg>').join('')+'</span><span class="muted" style="margin-left:auto">'+Math.round(p.aff)+'/100</span></div></div>'+
 '<div class="card"><div style="display:flex;justify-content:space-between;align-items:baseline"><h2 style="margin:0">오행</h2><span class="muted">'+(p.st<12&&CHILD[p.no].length?'다음 진화: '+esc(CHILD[p.no].length===1?condText(CHILD[p.no][0]):'분기점'):'')+'</span></div>'+elBars(p)+'<p class="muted" style="margin:6px 0 0">1위가 50이 되면 순위가 고정되고, 아래 순위는 40/30/10/10이 상한이에요.</p></div>'+
 '<div class="card"><div style="display:flex;justify-content:space-between"><h2 style="margin:0 0 8px">장비</h2><button class="btn soft sm" data-view="gear">장비 관리</button></div><div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px">'+['w','a','s'].map(t=>{const g=p.eq[t]?gearOf(p.eq[t]):null;return g?'<div class="gear g'+g.g+'"><img class="px" src="eq/'+g.g+'_'+t+'.gif" alt=""><b class="c'+g.g+'" style="font-size:12px">'+GN[g.g]+' +'+g.p+'</b><small class="muted">'+TN[t]+'</small></div>':'<div class="gear"><div style="width:72px;height:72px;display:flex;align-items:center;justify-content:center" class="muted">비어 있음</div><small class="muted">'+TN[t]+'</small></div>';}).join('')+'</div></div></aside></div>';
}
function vTrain(){const p=P();
 if(!p)return slotsBar()+'<div class="card">빈 슬롯이에요. 환수를 고른 뒤 수련을 보내세요.</div>';
 const s=selSpot==null?Math.min(9,Math.max(0,p.st-1)):selSpot,sp=SPOTS[s],c=cp(p),ratio=c/sp.rec;
 const running=acc.slots.map((q,i)=>q&&q.train?'<div style="display:flex;gap:10px;align-items:center;margin:6px 0"><img class="px" src="'+img(q.no)+'" alt="" width="48" height="48" style="object-fit:contain"><div style="flex:1"><div style="display:flex;justify-content:space-between;font-size:14px"><b>'+NAMES[q.no]+' · '+esc(SPOTS[q.train.s].n)+'</b><b style="color:#2b5a5e">'+fmtDur(q.train.end-now())+'</b></div><div class="stat" style="margin:4px 0"><div class="tr"><i style="width:'+((now()-q.train.start)/(q.train.end-q.train.start)*100)+'%;background:linear-gradient(90deg,#3d7d84,#7cc4c2)"></i></div></div></div><button class="btn soft sm" data-a="tcancel" data-v="'+i+'">취소</button></div>':'').join('');
 return slotsBar()+'<div class="row"><section class="grow"><div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px"><h1 class="serif" style="margin:0;font-size:26px">선계수련</h1>'+((cfg.expMult||1)>1?'<b style="color:#2b5a5e;font-size:13px">이벤트: 경험치 '+cfg.expMult+'배</b>':'')+'</div><div class="grid2">'+SPOTS.map((q,i)=>{const r=c/q.rec,tag=i===Math.min(9,p.st-1)?['추천','background:#f0c75e;color:#3a2a08']:r>=1?['여유','background:#e3f1e4;color:#2e7d3a']:['전투력 부족','background:#fbe4df;color:#8f2219'];
  return '<button class="spot'+(i===s?' on':'')+'" data-spot="'+i+'"><div class="th thumb" style="background-position:'+q.pos+';filter:hue-rotate('+q.hue+'deg)"></div><div style="flex:1;display:flex;flex-direction:column;gap:6px;min-width:0"><div style="display:flex;align-items:center;gap:6px"><b class="muted">'+(i+1)+'</b><b class="serif" style="font-size:17px">'+q.n+'</b><span class="chip" style="margin-left:auto;padding:2px 8px;font-size:11px;'+tag[1]+'">'+tag[0]+'</span></div><div class="kv"><span>추천 <b>'+fmt(q.rec)+'</b></span><span>시간 <b>'+(q.min<60?q.min+'분':q.min/60+'시간')+'</b></span><span>경험치 <b>'+fmt(q.exp)+'</b></span><span>행동력 <b style="color:#2b5a5e">-'+q.cost+'</b></span></div></div></button>';}).join('')+'</div></section>'+
 '<aside class="side"><div class="card"><h2>선택한 수련지</h2><div class="thumb" style="height:110px;border-radius:10px;background-position:'+sp.pos+';filter:hue-rotate('+sp.hue+'deg);border:1px solid var(--line)"></div><div style="display:flex;justify-content:space-between;align-items:baseline;margin:10px 0"><b class="serif" style="font-size:21px">'+(s+1)+'. '+sp.n+'</b><b style="font-size:13px;color:'+(ratio>=1?'#2e7d3a':'#b02a1f')+'">전투력 '+(ratio>=1?'여유 +':'부족 ')+Math.round((ratio-1)*100)+'%</b></div><div class="kv" style="font-size:14px"><span>보낼 환수 <b>'+NAMES[p.no]+'</b></span><span>전투력 <b>'+fmt(c)+'</b></span><span>행동력 <b>'+Math.floor(p.en)+' → '+Math.floor(p.en-sp.cost)+'</b></span><span>예상 경험치 <b>'+fmt(sp.exp*(cfg.expMult||1))+'</b></span></div>'+(ratio<FAIL_ZERO?'<p class="warn" style="margin:0 0 6px">전투력이 권장의 절반도 안 돼요! 실패하면 경험치를 하나도 못 받아요.</p>':'')+'<p class="muted">끝나면 포만감·목마름·청결도가 한 번에 줄어요 (최저 10).'+(acc.autoSleep===true?' 끝나면 자동으로 잠들어요.':'')+'</p><button class="btn teal" style="width:100%;min-height:52px;font-size:17px" data-a="train" data-v="'+s+'" '+(p.train||p.sick!=null||p.sleep||p.en<sp.cost||p.st>=12?'disabled':'')+'>'+(p.train?'수련 중':p.sleep?'자는 중 (먼저 깨우세요)':p.sick!=null?'아파서 못 가요':p.en<sp.cost?'행동력 부족':'수련 보내기')+'</button></div><div class="card"><h2>진행 중</h2>'+(running||'<p class="muted">진행 중인 수련이 없어요.</p>')+'</div></aside></div>';}

/* ================= 도감 컬렉션 (해방하면 불이 들어와요) ================= */
const COLS=[[3,5,'해태의 수호','백구','해태'],[6,8,'여우불의 길','황구','구미호'],[9,18,'태양의 삼족오','아기새','삼족오'],[9,24,'남방 주작','아기새','주작'],[25,34,'중앙 황룡','아기뱀','황룡'],[25,40,'동방 청룡','아기뱀','청룡'],[41,50,'뇌명의 신귀','아기거북','뇌명신귀'],[41,56,'북방 현무','아기거북','현무'],[57,66,'상서로운 기린','아기호랑이','기린'],[57,72,'서방 백호','아기호랑이','백호'],[73,76,'달빛 곰의 숲','아기곰','반달곰']];
function colPath(a,b){const r=[];let x=b;while(x!=null){r.unshift(x);if(x===a)break;x=FORMS[x].parent;}return r[0]===a?r:[a,b];}
const COLS2=[
 {t:'칠요의 정령',m:[82,101,120,127,134,141,148],sub:'일요 · 월요 · 화요 · 수요 · 목요 · 금요 · 토요의정',own:true},
 {t:'흉풍의 궁기',a:83,b:91},{t:'탐식의 도철',a:83,b:100},{t:'심연의 혼돈',a:102,b:110},{t:'패악의 도올',a:102,b:119},
 {t:'십이지신',m:[144,147,94,140,113,130,151,133,137,123,126,154],sub:'자·축·인·묘·진·사·오·미·신·유·술·해'}];
function colCard(c){const m=c.m||colPath(c.a,c.b).filter(i=>FORMS[i].st>=4),on=i=>c.own?!!acc.dex[i]:!!(acc.dex[i]&&acc.dex[i].freed),fr=m.filter(on).length,full=fr===m.length;
 return {full,h:'<div class="col'+(full?' full':'')+'"><div class="colh"><b class="serif">'+esc(c.t)+'</b><span class="colp">'+(full?'<b class="colok">完成</b>':(c.own?'획득 ':'해방 ')+fr+'/'+m.length)+'</span></div><div class="colm">'+
  m.map(i=>{const d=acc.dex[i],no=String(i).padStart(2,'0'),lit=on(i);if(!d)return '<div class="cm no" title="no.'+no+'"><span>'+no+'</span><b>?</b></div>';
   return '<div class="cm'+(lit?' lit':' dim')+'" title="'+esc(NAMES[i])+(lit?(c.own?' (획득)':' (해방)'):'')+'"><img class="px" src="'+img(i)+'" alt=""><span>'+no+'</span></div>';}).join('')+'</div></div>'};}
function vCollections(){const all=COLS.map(([a,b,t])=>({t,a,b})).concat(COLS2),cs=all.map(colCard),done=cs.filter(c=>c.full).length;
 return '<div class="colhead"><h2 class="serif" style="margin:0">도감 컬렉션</h2><span class="muted">완성 '+done+' / '+all.length+' · 해방한 환수에 불이 들어와요</span></div>'+cs.slice(0,COLS.length).map(c=>c.h).join('')+
  '<div class="colhead" style="margin-top:6px"><h3 class="serif" style="margin:0;color:#6a4ad0">음양알 컬렉션</h3></div>'+cs.slice(COLS.length).map(c=>c.h).join('');}
function vDex(){const own=Object.keys(acc.dex).length,freed=Object.values(acc.dex).filter(d=>d.freed).length;
 return '<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap"><h1 class="serif" style="margin:0;font-size:26px">환수 도감</h1><div style="display:flex;align-items:center;gap:10px;flex:1 1 280px;max-width:420px"><div class="stat" style="flex:1;margin:0"><div class="tr"><i style="width:'+own/NAMES.length*100+'%;background:linear-gradient(90deg,#c9a24a,#f0d78a)"></i></div></div><b>'+own+' / '+NAMES.length+'</b><span class="muted">해방 '+freed+'</span></div></div><div class="dexwrap"><div class="dexL"><div class="dex">'+NAMES.map((n,i)=>{const d=acc.dex[i];if(!d)return '<div class="dc no"><span class="muted" style="align-self:flex-start;font-weight:700">no.'+String(i).padStart(2,'0')+'</span><img class="px" src="i/q.png" alt="" style="padding:20px;opacity:.7"><span class="n" style="color:#9a8b6c">???</span><span class="muted" style="min-height:14px"></span></div>';
  const b=SAHYUNG.has(i)?['b-x','사흉']:SUNGSU.has(i)?['b-s','성수']:YOUNGSU.has(i)?['b-y','영수']:!CHILD[i].length?['b-f','최종']:null;
  return '<div class="dc"><span class="muted" style="align-self:flex-start;font-weight:700">no.'+String(i).padStart(2,'0')+'</span><img class="px" src="'+img(i)+'" alt=""><span class="n">'+n+'</span>'+elTag(ELOF[i])+'<span class="muted" style="min-height:14px">'+esc(d.d)+'</span>'+(b?'<span class="badge '+b[0]+'">'+b[1]+'</span>':'')+(d.freed?'<span class="seal" aria-label="해방함">解</span>':'')+'</div>';}).join('')+'</div></div><div class="dexR">'+vCollections()+'</div></div>';}
function vShop(){const cats=['기운','생활','약','성장','강화','기타'],ad=accDaily();
 return '<h1 class="serif" style="margin:0;font-size:26px">상점</h1>'+cats.map(c=>'<div class="card"><h2>'+c+'</h2><div class="items">'+Object.entries(ITEMS).filter(([k,v])=>v.cat===c).map(([k,v])=>{const lim=v.daily?(ad[k]||0)+'/'+v.daily:'';return '<div class="item"><img class="px" src="'+v.img+'" alt=""><div class="t"><b>'+v.n+'</b><small>'+v.d+'</small><small>'+v.p+'코인 · 보유 '+(acc.inv[k]||0)+(lim?' · 오늘 구매 '+lim:'')+'</small></div><div style="display:flex;flex-direction:column;gap:4px"><button class="btn sm" data-buy="'+k+'" data-n="1">1개</button>'+(v.daily?'':'<button class="btn soft sm" data-buy="'+k+'" data-n="10">10개</button>')+'</div></div>';}).join('')+'</div></div>').join('')+
 (()=>{const wk=accWeekly(),left=EGG_WEEK-wk.egg,free=acc.slots.some(q=>!q);return '<div class="card"><h2>환수 알</h2><div class="items"><div class="item"><img class="px" src="h/00.gif" alt=""><div class="t"><b>환수 알</b><small>빈 슬롯에 바로 들어가요(없으면 가방). 매주 월요일 오전 6시에 초기화</small><small>'+EGG_PRICE+'코인 · 이번 주 '+wk.egg+'/'+EGG_WEEK+'</small></div><button class="btn sm" data-buyegg="1" '+(left<=0?'disabled':'')+'>'+(left<=0?'이번 주 구매 완료':'구매')+'</button></div></div></div>';})()+
 '<div class="card"><h2>장비 (일반 등급)</h2><div class="items">'+['w','a','s'].map(t=>'<div class="item"><img class="px" src="eq/0_'+t+'.gif" alt=""><div class="t"><b>일반 '+TN[t]+'</b><small>'+Object.keys(GS[t]).map(k=>SL[k]+' '+gstat(t,0,0,k)+(PCT[k]?'%':'')).join(', ')+'</small><small>30코인</small></div><button class="btn sm" data-buyeq="'+t+'">구매</button></div>').join('')+'</div></div>';}
function vBag(){const has=Object.entries(acc.inv).filter(([k,n])=>n>0&&ITEMS[k]);
 return '<h1 class="serif" style="margin:0;font-size:26px">가방</h1><div class="card"><div class="items">'+(has.length?has.map(([k,n])=>'<div class="item"><img class="px" src="'+ITEMS[k].img+'" alt=""><div class="t"><b>'+ITEMS[k].n+' ×'+n+'</b><small>'+ITEMS[k].d+'</small></div>'+(ITEMS[k].cat==='알'?'<button class="btn teal sm" data-hatch="'+k+'" '+(acc.slots.some(q=>!q)?'':'disabled')+'>부화</button>':'')+'</div>').join(''):'<p class="muted">가방이 비어 있어요.</p>')+'</div><p class="muted">아이템은 환수 화면의 돌보기 버튼에서 사용해요.</p></div>';}
function gearCard(g,extra){return '<button class="gear g'+g.g+(S.forgeSel.includes(g.u)?' sel':'')+'" data-gsel="'+g.u+'"><img class="px" src="eq/'+g.g+'_'+g.t+'.gif" alt=""><b class="c'+g.g+'" style="font-size:13px">'+GN[g.g]+' '+TN[g.t]+' +'+g.p+'</b><small class="muted">'+(extra||'')+'</small></button>';}
function equippedBy(u){let r=null;acc.slots.forEach((p,i)=>{if(p&&Object.values(p.eq).includes(u))r=i;});return r;}
function vGear(){const p=P();const sg=S.forgeSel.map(gearOf).filter(Boolean);const one=sg[0];
 let panel='<p class="muted">장비를 누르면 강화·장착할 수 있어요. 같은 종류·같은 등급의 최대 강화 장비 2개를 고르면 합성할 수 있어요.</p>';
 if(sg.length===1){const g=one,mp=MAXP[g.g],eqd=equippedBy(g.u);const rate=g.p<mp?Math.min(1,RATE[g.p+1]+(S.bless?.1:0)):0;
  panel='<h3 class="serif" style="margin:0 0 6px">'+GN[g.g]+' '+TN[g.t]+' +'+g.p+' / '+mp+'</h3><div class="muted">'+Object.keys(GS[g.t]).map(k=>SL[k]+' '+(Math.round(gstat(g.t,g.g,g.p,k)*10)/10)+(PCT[k]?'%':'')).join(' · ')+(g.t==='s'?' · 친화 속성 '+ELK[g.aff||'fire']:'')+'</div>'+
  (g.t==='s'?'<div style="display:flex;gap:4px;margin:8px 0;flex-wrap:wrap">'+EL.map(e=>'<button class="btn sm '+((g.aff||'fire')===e?'':'soft')+'" data-aff="'+e+'">'+ELK[e]+'</button>').join('')+'</div>':'')+
  '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">'+(p?(eqd===sel?'<button class="btn soft" data-unequip="'+g.u+'">해제</button>':'<button class="btn teal" data-equip="'+g.u+'">'+NAMES[p.no]+'에게 장착</button>'):'')+
  (g.p<mp?'<button class="btn" data-enh="'+g.u+'">강화 ('+ECOST[g.g]+'코인 · '+Math.round(rate*100)+'%)</button><label style="display:flex;gap:6px;align-items:center;font-size:13px"><input type="checkbox" data-bless '+(S.bless?'checked':'')+'>강화축복비서 사용 (보유 '+(acc.inv.sec_bless||0)+')</label>':'<span class="ok">최대 강화! 같은 장비와 합성할 수 있어요.</span>')+'</div>';}
 if(sg.length===2){const [a,b]=sg,okk=a.t===b.t&&a.g===b.g&&a.p===MAXP[a.g]&&b.p===MAXP[b.g]&&a.g<5&&equippedBy(a.u)==null&&equippedBy(b.u)==null;const sy=SYN[a.g]||{};
  panel='<h3 class="serif" style="margin:0 0 6px">합성</h3>'+(okk?'<p>'+GN[a.g]+' '+TN[a.t]+' 2개 → <b class="c'+(a.g+1)+'">'+GN[a.g+1]+'</b> 성공 '+Math.round(sy.s*100)+'%'+(sy.d?' · 하락 '+Math.round(sy.d*100)+'%':'')+(sy.x?' · 파괴 '+Math.round(sy.x*100)+'%':'')+'</p><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><button class="btn teal" data-synth="1">합성 ('+SFEE[a.g]+'코인)</button>'+(sy.x?'<label style="font-size:13px;display:flex;gap:6px;align-items:center"><input type="checkbox" data-protect '+(S.protect?'checked':'')+'>파괴방지비서 사용 (보유 '+(acc.inv.sec_protect||0)+')</label>':'')+'</div>':'<p class="warn">같은 종류·같은 등급이고 둘 다 최대 강화여야 해요. 장착 중인 장비는 먼저 해제하세요. 신화는 합성할 수 없어요.</p>');}
 return slotsBar()+'<div class="row"><section class="grow"><div class="card"><h2>보유 장비</h2><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px">'+(acc.gear.length?acc.gear.slice().sort((x,y)=>y.g-x.g||y.p-x.p).map(g=>{const e=equippedBy(g.u);return gearCard(g,e!=null&&acc.slots[e]?NAMES[acc.slots[e].no]+' 장착 중':'');}).join(''):'<p class="muted">장비가 없어요. 상점에서 일반 장비를 사 보세요.</p>')+'</div></div></section><aside class="side"><div class="card"><h2>강화 · 합성</h2>'+panel+'</div></aside></div>';}
function vCode(){return '<h1 class="serif" style="margin:0;font-size:26px">코드</h1><div class="row"><div class="card" style="flex:1 1 360px"><h2>환수 코드 (게임 → 웹)</h2><p class="muted">게임에서 <b>/trigger hwansu</b>로 받은 [환수 코드]를 입력하세요. 금화 3개 = 코인 1개예요.</p><form data-form="coin" style="display:flex;gap:8px;flex-wrap:wrap"><label class="f" style="flex:1">환수 코드<input type="text" name="code" placeholder="3-7-10-4821" required></label><button class="btn teal" style="align-self:flex-end">입력</button></form><p class="muted">연결된 플레이어 번호: '+(acc.playerNo||'아직 없음 (첫 코드로 연결돼요)')+' · 마지막 회차: '+(acc.lastNonce||0)+'</p></div><div class="card" style="flex:1 1 360px"><h2>알 코드</h2><form data-form="egg" style="display:flex;gap:8px;flex-wrap:wrap"><label class="f" style="flex:1">알 코드<input type="text" name="code" placeholder="EGG-XXXX-XXXX" required></label><button class="btn teal" style="align-self:flex-end">알 받기</button></form><p class="muted">빈 슬롯에 알이 들어가요.</p></div></div>';}

function vMail(){const ms=(acc.mail||[]).slice().sort((a,b)=>b.t-a.t);
 return '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><h1 class="serif" style="margin:0;font-size:26px">우편함</h1>'+(ms.length>1?'<button class="btn teal" data-mclaim="*">모두 받기 ('+ms.length+')</button>':'')+'</div>'+
 (ms.length?'<div class="mlist">'+ms.map(m=>'<div class="card mail"><div class="mhead"><b class="serif" style="font-size:18px">'+esc(m.title||'우편')+'</b><small class="muted">'+esc(m.from||'운영자')+' · '+new Date(m.t).toLocaleDateString('ko-KR')+'</small></div>'+(m.msg?'<p style="margin:6px 0;white-space:pre-wrap">'+esc(m.msg)+'</p>':'')+'<div class="mchips">'+mailIcons(m)+'</div><div style="text-align:right;margin-top:8px"><button class="btn" data-mclaim="'+esc(m.id)+'">'+(mailParts(m).length?'받기':'확인')+'</button></div></div>').join('')+'</div>'
 :'<div class="card" style="text-align:center;padding:40px 16px"><img class="px" src="i/q.png" alt="" style="width:48px;opacity:.5"><p class="muted">받은 우편이 없어요.</p></div>');}
function claimMail(id){const list=acc.mail||[];const want=id==='*'?list.slice().sort((a,b)=>a.t-b.t):list.filter(m=>m.id===id);if(!want.length)return;const got=[],done=new Set();let free=acc.slots.filter(q=>!q).length,blocked=0;
 want.forEach(m=>{const e=(m.eggs||0)+(m.yyEggs||0);
  if(m.coins)acc.coins+=m.coins;Object.entries(m.items||{}).forEach(([k,n])=>{if(ITEMS[k]&&n>0)acc.inv[k]=(acc.inv[k]||0)+n;});(m.gear||[]).forEach(g=>acc.gear.push({u:'g'+Date.now()+Math.floor(rnd()*1e6),t:g.t,g:g.g,p:g.p||0,aff:'fire'}));
  for(let j=0;j<e;j++){if(giveEgg(j<(m.eggs||0)?0:80)<0)blocked++;}
  got.push(...mailParts(m));done.add(m.id);});
 acc.mail=list.filter(m=>!done.has(m.id));
 
 if(got.length){SFX.play(got.some(t=>t.startsWith('환수 알')||t.startsWith('음양알'))?'egg':'coins');toast('받았어요! '+got.slice(0,4).join(', ')+(got.length>4?' 외 '+(got.length-4)+'개':'')+(blocked?' (알 '+blocked+'개는 빈 슬롯이 없어 가방에 보관했어요)':''));}else SFX.play('ok');
 commit();}

/* ================= 환수 대전 (비동기) ================= */
const ELOF=["fire","water","earth","water","water","water","fire","fire","fire","fire","fire","fire","earth","water","water","wood","earth","metal","fire","fire","fire","fire","fire","fire","fire","wood","water","water","wood","fire","fire","metal","earth","metal","fire","water","water","water","wood","wood","wood","water","water","water","wood","earth","earth","fire","fire","earth","wood","water","water","water","metal","metal","water","metal","earth","fire","metal","wood","water","wood","fire","wood","earth","wood","wood","metal","metal","metal","metal","earth","fire","earth","earth","wood","water","water","neutral","neutral","yang","yang","yang","yang","yang","yang","yang","yang","yang","yang","yang","yang","yang","yang","yang","yang","yang","yang","yang","yin","yin","yin","yin","yin","yin","yin","yin","yin","yin","yin","yin","yin","yin","yin","yin","yin","yin","yin","fire","fire","fire","fire","fire","fire","fire","water","water","water","water","water","water","water","wood","wood","wood","wood","wood","wood","wood","metal","metal","metal","metal","metal","metal","metal","earth","earth","earth","earth","earth","earth","earth"];
// 오행 상극: 물→불→쇠→나무→땅→물 (앞이 뒤를 이겨요)
const BEATS={water:'fire',fire:'metal',metal:'wood',wood:'earth',earth:'water'};
const OHENG=['fire','water','wood','earth','metal'];
function isAdv(a,d){if(BEATS[a]===d)return true;if(a==='yang'||a==='yin')return OHENG.includes(d)||(a==='yang'&&d==='yin')||(a==='yin'&&d==='yang');return false;}
const SKILL={yang:'양기 폭발',yin:'음기 파동',neutral:'음양 구르기',fire:'화염구',water:'물대포',wood:'덩굴채찍',earth:'바위 떨구기',metal:'쇠발톱'};
const ADV_ATK=1.25, WEAK_TAKE=1.2;           // 상성 유리: 추가 데미지 +25%, 상성 불리: 받는 피해 +20%
const PVP_WIN=10, PVP_LOSE=5, DEF_WIN=3, DEF_LOSE=5, PVP_DAILY=3;
const PV={list:null,logs:null,busy:false,atk:null,loaded:false};
let arenaKey=null;
function sunKey(t){const d=new Date(dayKey(t)+'T00:00:00Z');d.setUTCDate(d.getUTCDate()-d.getUTCDay());return d.toISOString().slice(0,10);}
function aEff(a){return a&&a.week===sunKey(now())?{m:a.medals,w:a.w||0,l:a.l||0,dw:a.dw||0,dl:a.dl||0}:{m:100,w:0,l:0,dw:0,dl:0};}
function repPet(){if(acc.arenaRep==null)return null;const i=acc.slots.findIndex(q=>q&&q.born===acc.arenaRep);return i<0?null:{i,p:acc.slots[i]};}
function petSnap(p){return{no:p.no,st:p.st,lv:p.lv,cp:cp(p),el:ELOF[p.no]||'fire'};}
function elTag(el){return '<span class="eltag" style="background:'+ELBG[el]+';color:'+ELC[el]+';border-color:'+ELC[el]+'"><img src="i/'+el+'.svg" alt="">'+ELK[el]+'</span>';}
async function syncArena(force){if(MODE!=='player'||!acc||!db)return;if(acc.arenaRep==null&&!force)return;const r=repPet(),pet=r?petSnap(r.p):null;
 const key=pet?[pet.no,pet.st,pet.lv,pet.cp].join('|'):'none';if(!force&&key===arenaKey)return;arenaKey=key;
 const ref=db.doc('arena/'+acc.uid);try{const s=await ref.get();if(!s.exists){if(!pet)return;await ref.set({uid:acc.uid,id:acc.id,nick:acc.nick||acc.id,week:sunKey(now()),medals:100,w:0,l:0,dw:0,dl:0,pet,t:Date.now()});}else await ref.update({pet,nick:acc.nick||acc.id,t:Date.now()});}catch(e){arenaKey=null;}}
function bStat(s){return{hp:Math.round(60+s.cp*1.2),atk:8+s.cp*0.15};}
function simBattle(A,D,seed){let x=seed>>>0;const R=()=>{x=(x+0x6D2B79F5)>>>0;let t=x;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};
 const sa=bStat(A),sd=bStat(D);let ha=sa.hp,hd=sd.hp;const log=[];let turn=0;
 while(ha>0&&hd>0&&turn<30){const aT=turn%2===0,at=aT?A:D,df=aT?D:A,st=aT?sa:sd;
  const miss=R()<.05,crit=!miss&&R()<.1,adv=isAdv(at.el,df.el)?1:0;
  const dmg=miss?0:Math.max(1,Math.round(st.atk*(0.85+R()*0.3)*(crit?1.5:1)*(adv?ADV_ATK*WEAK_TAKE:1)));
  if(aT)hd=Math.max(0,hd-dmg);else ha=Math.max(0,ha-dmg);
  log.push([aT?0:1,dmg,crit?1:0,miss?1:0,adv,ha,hd]);turn++;}
 const win=hd<=0?true:ha<=0?false:(ha/sa.hp)>(hd/sd.hp);
 return{log,win,hpA:sa.hp,hpD:sd.hp};}
async function loadArena(){if(!acc)return;PV.loaded=true;try{const wk=sunKey(now());const q=await db.collection('arena').get();PV.list=q.docs.map(d=>d.data()).filter(a=>a&&a.pet);
  const b1=await db.collection('battles').where('duid','==',acc.uid).where('week','==',wk).get();const b2=await db.collection('battles').where('auid','==',acc.uid).where('week','==',wk).get();
  PV.logs=b1.docs.map(d=>Object.assign({id:d.id,role:'def'},d.data())).concat(b2.docs.map(d=>Object.assign({id:d.id,role:'atk'},d.data()))).sort((x,y)=>y.t-x.t).slice(0,20);}
 catch(e){PV.list=PV.list||[];PV.logs=PV.logs||[];toast('대전 정보를 불러오지 못했어요.');}
 if(view==='pvp'&&!document.getElementById('layer').innerHTML)render();}
async function setRep(i){const q=acc.slots[i];if(!q)return;if(!q.born)q.born=Date.now()+i;acc.arenaRep=q.born;SFX.play('equip');toast(NAMES[q.no]+'을(를) 대표 환수로 정했어요.');await commit();await syncArena(true);loadArena();}
async function fight(uid){if(PV.busy)return;const ad=accDaily();if((ad.pvp||0)>=PVP_DAILY)return toast('오늘 공격 횟수를 다 썼어요. 내일 오전 6시에 다시 할 수 있어요.');
 if((ad.pvpTo||[]).includes(uid))return toast('같은 상대는 하루에 한 번만 도전할 수 있어요.');
 const me=repPet();if(!me)return toast('먼저 대표 환수를 정해 주세요.');
 const ai=PV.atk!=null&&acc.slots[PV.atk]?PV.atk:me.i,ap=acc.slots[ai];if(!ap)return toast('출전할 환수를 골라 주세요.');if(ap.sick!=null)return toast('아픈 환수는 대전에 나갈 수 없어요.');
 PV.busy=true;try{
  const dRef=db.doc('arena/'+uid),ds=await dRef.get();if(!ds.exists||!ds.data().pet){toast('상대 정보를 찾지 못했어요.');return;}const dd=ds.data();
  const myRef=db.doc('arena/'+acc.uid);let ms=await myRef.get();if(!ms.exists){await syncArena(true);ms=await myRef.get();}const mine=ms.exists?ms.data():null;
  const A=petSnap(ap),D=dd.pet,res=simBattle(A,D,Math.floor(rnd()*4294967296));
  const wk=sunKey(now()),ea=aEff(mine),ed=aEff(dd),na=Math.max(0,ea.m+(res.win?PVP_WIN:-PVP_LOSE)),nd=Math.max(0,ed.m+(res.win?-DEF_LOSE:DEF_WIN));
  ad.pvp=(ad.pvp||0)+1;ad.pvpTo=(ad.pvpTo||[]).concat([uid]);await save();
  await myRef.update({week:wk,medals:na,w:ea.w+(res.win?1:0),l:ea.l+(res.win?0:1),dw:ea.dw,dl:ea.dl});
  await dRef.update({week:wk,medals:nd,w:ed.w,l:ed.l,dw:ed.dw+(res.win?0:1),dl:ed.dl+(res.win?1:0)});
  const b={t:Date.now(),week:wk,auid:acc.uid,duid:uid,a:{nick:acc.nick||acc.id,pet:A},d:{nick:dd.nick,pet:D},win:res.win,da:na-ea.m,dd:nd-ed.m,ma:na,md:nd,hpA:res.hpA,hpD:res.hpD,logS:JSON.stringify(res.log)};
  try{await db.collection('battles').add(b);}catch(e){}
  render();battleAnim(b,'atk');
 }catch(e){toast('대전에 실패했어요: '+(e&&e.message||e));}finally{PV.busy=false;}}
function vArena(){if(!PV.loaded)setTimeout(loadArena,0);
 const r=repPet(),me=(PV.list||[]).find(a=>a.uid===acc.uid),e=aEff(me),ad=accDaily(),used=(ad.pvp||0)>=PVP_DAILY;
 let h='<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><h1 class="serif" style="margin:0;font-size:26px">환수 대전</h1><span class="muted">하루 '+PVP_DAILY+'번 공격 (같은 상대는 1번) · 매주 일요일 오전 6시 마패 초기화 (기본 100)</span></div>';
 h+='<div class="row" style="margin-top:12px"><div class="card" style="flex:1 1 340px"><h2>나의 대표 환수 <small class="muted">· 방어에 나가요</small></h2>';
 if(r){const s=petSnap(r.p);h+='<div style="display:flex;gap:14px;align-items:center"><img class="px" src="'+img(s.no)+'" width="96" height="96" style="object-fit:contain" alt=""><div><b class="serif" style="font-size:21px">'+NAMES[s.no]+'</b> '+elTag(s.el)+'<div class="muted" style="margin-top:4px">'+s.st+'단계 · Lv '+s.lv+' · 전투력 <b>'+fmt(s.cp)+'</b></div></div></div>';}
 else h+='<p class="muted">대표 환수를 정하면 대전에 참여할 수 있어요. 다른 유저는 내 대표 환수에게 도전해요.</p>';
 h+='<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px">'+acc.slots.map((q,i)=>q?'<button class="btn sm '+(r&&r.i===i?'teal':'soft')+'" data-arep="'+i+'">'+(r&&r.i===i?'대표 ✓ ':'')+esc(NAMES[q.no])+'</button>':'').join('')+'</div></div>';
 h+='<div class="card" style="flex:1 1 260px;text-align:center"><h2>이번 주 마패</h2><div style="display:flex;align-items:center;justify-content:center;gap:12px"><img class="px" src="i/mapae.png" width="72" height="72" alt=""><b class="serif" style="font-size:44px">'+e.m+'</b></div><div class="muted">공격 '+e.w+'승 '+e.l+'패 · 방어 '+e.dw+'승 '+e.dl+'패</div><p style="margin:8px 0 0"><b style="color:'+(used?'#8a7a5a':'#2b5a5e')+'">'+(used?'오늘 공격 완료':'오늘 공격 가능 ('+(PVP_DAILY-(ad.pvp||0))+'/'+PVP_DAILY+')')+'</b></p></div></div>';
 if(r){const ai=PV.atk!=null&&acc.slots[PV.atk]?PV.atk:r.i,atkEl=ELOF[acc.slots[ai].no];
  h+='<div class="card"><h2>공격하기</h2><div class="muted" style="margin-bottom:6px">출전할 환수를 고르세요</div><div class="slots" style="margin:0">'+acc.slots.map((q,i)=>q?'<button class="slot'+(ai===i?' on':'')+'" data-atk="'+i+'"><img class="px" src="'+img(q.no)+'" alt=""><span><b>'+esc(NAMES[q.no])+'</b><small>'+ELK[ELOF[q.no]]+' · 전투력 '+fmt(cp(q))+(q.sick!=null?' · 아픔':'')+'</small></span></button>':'').join('')+'</div>';
  const opp=(PV.list||[]).filter(a=>a.uid!==acc.uid).map(a=>Object.assign({},a,{em:aEff(a).m})).sort((x,y)=>Math.abs(x.em-e.m)-Math.abs(y.em-e.m)||y.em-x.em).slice(0,10);
  h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-top:16px"><b>상대 고르기 <small class="muted">· 마패가 비슷한 순</small></b><button class="btn soft sm" data-pvprefresh="1">새로고침</button></div>';
  h+=PV.list==null?'<p class="muted">불러오는 중…</p>':opp.length?'<div class="opps">'+opp.map(a=>{const adv=isAdv(atkEl,a.pet.el)?'<span class="advg">상성 유리</span>':isAdv(a.pet.el,atkEl)?'<span class="advb">상성 불리</span>':'';
   return '<div class="opp"><img class="px" src="'+img(a.pet.no)+'" alt=""><div class="t"><b>'+esc(a.nick)+'</b><small>'+esc(NAMES[a.pet.no])+' '+elTag(a.pet.el)+' '+adv+'</small><small>전투력 '+fmt(a.pet.cp)+' · <img class="px" src="i/mapae.png" alt="" style="width:16px;height:16px;vertical-align:-3px"> '+a.em+'</small></div>'+((ad.pvpTo||[]).includes(a.uid)?'<button class="btn soft sm" disabled>오늘 도전함</button>':'<button class="btn sm" data-fight="'+esc(a.uid)+'" '+(used||PV.busy?'disabled':'')+'>도전</button>')+'</div>';}).join('')+'</div>':'<p class="muted">아직 도전할 상대가 없어요.</p>';
  h+='<p class="muted" style="margin-bottom:0">상성: 물 → 불 → 쇠 → 나무 → 땅 → 물 (화살표 쪽을 이겨요). 양·음은 오행 모두에게 강하고, 양과 음은 서로 상성이에요. 유리하면 추가 데미지, 불리하면 받는 피해가 늘어요.</p></div>';}
 const rank=(PV.list||[]).map(a=>Object.assign({},a,{em:aEff(a).m})).sort((x,y)=>y.em-x.em).slice(0,10);
 h+='<div class="row"><div class="card" style="flex:1 1 320px"><h2>이번 주 순위</h2>'+(rank.length?'<table class="t">'+rank.map((a,i)=>'<tr'+(a.uid===acc.uid?' style="background:#fff3c4"':'')+'><td style="width:34px"><b>'+(i+1)+'</b></td><td><img class="px" src="'+img(a.pet.no)+'" alt="" width="32" height="32" style="object-fit:contain;vertical-align:middle"> '+esc(a.nick)+'</td><td style="text-align:right;white-space:nowrap"><img class="px" src="i/mapae.png" alt="" style="width:20px;height:20px;vertical-align:-4px"> <b>'+a.em+'</b></td></tr>').join('')+'</table>':'<p class="muted">아직 없어요.</p>')+'</div>';
 h+='<div class="card" style="flex:1 1 320px"><h2>이번 주 대전 기록</h2>'+(PV.logs&&PV.logs.length?PV.logs.map(b=>{const mw=b.role==='atk'?b.win:!b.win,op=b.role==='atk'?b.d:b.a,dm=b.role==='atk'?b.da:b.dd;
   return '<div class="blog"><b style="color:'+(mw?'#2e7d3a':'#b02a1f')+'">'+(b.role==='atk'?'공격 ':'방어 ')+(mw?'승리':'패배')+'</b><span style="flex:1">vs '+esc(op.nick)+' <small class="muted">('+esc(NAMES[op.pet.no])+')</small></span><span class="muted">'+(dm>0?'+':'')+dm+'</span><button class="btn soft sm" data-replay="'+esc(b.id)+'">다시 보기</button></div>';}).join(''):'<p class="muted">이번 주 기록이 없어요.</p>')+'</div></div>';
 return h;}
function pnm(P){return P.boss?P.name:NAMES[P.no];}
function pim(P){return P.boss?P.img:img(P.no);}
function abPlate(nick,P,id){return '<div class="abp-top"><b>'+esc(pnm(P))+'</b>'+elTag(P.el)+'<small>'+(P.boss?'월드보스':'Lv '+P.lv)+'</small></div><div class="abp-own">'+(P.boss?'흑화한 12지신':esc(nick)+' · 전투력 '+fmt(P.cp))+'</div><div class="abp-hp"><span>HP</span><div class="abp-tr"><i id="'+id+'"></i></div></div><div class="abp-num" id="'+id+'n"></div>';}
function battleAnim(b,role){const L=document.getElementById('layer'),log=JSON.parse(b.logS||'[]'),A=b.a.pet,D=b.d.pet,boss=b.kind==='boss';let sp=1,i=0,done=false,alive=true;
 L.innerHTML='<div class="overlay"><div class="abox'+(boss?' bossf':'')+'" role="dialog" aria-label="'+(boss?'월드보스 토벌':'환수 대전')+'"><div class="abf" id="abf"><div class="abp abp-d">'+abPlate(b.d.nick,D,'hD')+'</div><img class="px abpet abpet-d'+(boss?' abboss':'')+'" id="pD" src="'+pim(D)+'" alt=""><img class="px abpet abpet-a" id="pA" src="'+pim(A)+'" alt=""><div class="abp abp-a">'+abPlate(b.a.nick,A,'hA')+'</div><div id="abfx"></div></div><div class="abmsg" id="abMsg"></div><div class="abbtn" id="abBtns"><button class="btn soft sm" id="abFast">빨리 보기</button><button class="btn soft sm" id="abSkip">결과 바로 보기</button></div></div></div>';
 const $=id=>document.getElementById(id),msg=t=>{const m=$('abMsg');if(m)m.innerHTML=t;},ok=()=>alive&&$('abf');
 const hp=(ha,hd)=>{[['hA',ha,b.hpA],['hD',hd,b.hpD]].forEach(([id,v,m])=>{const e=$(id);if(!e)return;const w=Math.max(0,v/m*100);e.style.width=w+'%';e.style.background=w>50?'#4caf50':w>20?'#f0b429':'#e5484d';$(id+'n').textContent=fmt(Math.ceil(v))+' / '+fmt(m);});};
 const num=(target,txt,cls)=>{const t=$(target),f=$('abfx');if(!t||!f)return;const box=$('abf').getBoundingClientRect(),r=t.getBoundingClientRect();const n=document.createElement('div');n.className='abdmg '+(cls||'');n.textContent=txt;n.style.left=(r.left-box.left+r.width/2)+'px';n.style.top=(r.top-box.top+6)+'px';f.appendChild(n);setTimeout(()=>n.remove(),1000);};
 hp(b.hpA,b.hpD0!=null?b.hpD0:b.hpD);
 msg(boss?'<b>'+esc(b.a.nick)+'</b>의 '+esc(pnm(A))+'이(가) 월드보스 <b>'+esc(pnm(D))+'</b>에게 맞선다!':'<b>'+esc(b.a.nick)+'</b>의 '+esc(pnm(A))+'이(가) <b>'+esc(b.d.nick)+'</b>의 '+esc(pnm(D))+'에게 도전했다!');
 function finish(quick){if(done||!ok())return;done=true;const last=log[log.length-1]||[0,0,0,0,0,b.hpA,b.hpD];hp(last[5],last[6]);
  if(last[6]<=0)$('pD').classList.add('faint');if(last[5]<=0)$('pA').classList.add('faint');
  if(boss)msg(last[6]<=0?'<b style="color:#c8281e">'+esc(pnm(D))+'</b>이(가) 쓰러졌다! 토벌 성공!':last[5]<=0?esc(pnm(A))+'이(가) 쓰러졌다…':'공격 시간이 끝났다! '+esc(pnm(A))+'이(가) 물러난다.');
  else msg((last[5]>0&&last[6]>0?'시간 초과! 남은 체력 비율이 높은 쪽이 이겼어요. ':'')+'<b>'+esc(b.win?b.a.nick:b.d.nick)+'</b>의 승리!');
  const bt=$('abBtns');if(bt)bt.innerHTML='';
  setTimeout(()=>{if(!ok())return;const res=document.createElement('div');res.className='abres';
   if(boss){SFX.play(b.killed?'fanfare':'ok');res.innerHTML='<span class="serif" style="font-size:34px;font-weight:700;color:#ffd36e">'+(b.killed?'토벌 성공!':'공격 완료')+'</span><div style="color:#e8fff8;font-size:18px">이번 공격 데미지 <b style="color:#ffd36e;font-size:30px">'+fmt(b.dealt)+'</b></div><small style="color:#c9d8d5">내 누적 데미지 '+fmt(b.myTotal)+' · 남은 보스 체력 '+fmt(Math.max(0,last[6]))+'</small><button class="btn" id="abOk" style="background:#f0c75e;margin-top:8px">확인</button>';}
   else{const meWin=role==='atk'?b.win:!b.win,delta=role==='atk'?b.da:b.dd,total=role==='atk'?b.ma:b.md;SFX.play(meWin?'fanfare':'sad');
    res.innerHTML='<span class="serif" style="font-size:40px;font-weight:700;color:'+(meWin?'#ffd36e':'#c9d8d5')+'">'+(meWin?'승리!':'패배…')+'</span><div style="display:flex;align-items:center;gap:10px;justify-content:center"><img class="px" src="i/mapae.png" alt="" width="56" height="56"><b style="font-size:28px;color:'+(delta>=0?'#ffd36e':'#ff8a7a')+'">'+(delta>=0?'+':'')+delta+'</b><span style="color:#e8fff8">→ 마패 '+total+'</span></div><small style="color:#c9d8d5">'+(role==='atk'?'공격':'방어')+' 기록 · '+new Date(b.t).toLocaleString('ko-KR')+'</small><button class="btn" id="abOk" style="background:#f0c75e;margin-top:8px">확인</button>';}
   document.querySelector('.abox').appendChild(res);$('abOk').onclick=()=>{alive=false;closeLayer();if(boss)loadBoss();else if(role==='atk')loadArena();};},quick?150:700);}
 function step(){if(done||!ok())return;if(i>=log.length)return finish();const [w,dmg,crit,miss,adv,ha,hd]=log[i++],P=w?D:A,T=w?'pA':'pD',me=w?'pD':'pA',sk=skillOf(P),pc=(PAL[sk.pal]||PAL.fire)[2];
  msg(esc(w?b.d.nick:b.a.nick)+'의 '+esc(pnm(P))+'의 <b style="color:'+pc+'">'+esc(sk.n)+'</b>!');
  const actor=$(me);actor.classList.remove('lunge-a','lunge-d');void actor.offsetWidth;actor.classList.add(w?'lunge-d':'lunge-a');
  let hitAt=320;try{hitAt=skillFx(sk,$('abf'),actor,$(T));}catch(e){}
  setTimeout(()=>{if(done||!ok())return;const base=$('abMsg').innerHTML;
   if(miss){num(T,'빗나감','miss');SFX.play('nope');msg(base+' 하지만 빗나갔다!');}
   else{const t=$(T);t.classList.remove('shake');void t.offsetWidth;t.classList.add('shake');num(T,'-'+fmt(dmg),crit?'crit':adv?'adv':'');SFX.play(crit?'up':'clank');hp(ha,hd);
    msg(base+(crit?' <b style="color:#ffd36e">치명타!</b>':'')+(adv?' <b style="color:#7cf0a0">효과가 굉장했다!</b>':''));}
   setTimeout(step,Math.round(850/sp));},Math.round(hitAt/sp));}
 $('abFast').onclick=()=>{sp=sp>1?1:3;$('abFast').textContent=sp>1?'보통 속도':'빨리 보기';};
 $('abSkip').onclick=()=>finish(true);
 SFX.play('whoosh');setTimeout(step,1300);}
function replay(id){const b=(PV.logs||[]).find(x=>x.id===id);if(b)battleAnim(b,b.role);}


/* ================= 고유 스킬 · 도트 이펙트 ================= */
// fx 기본형: ball(구체) burst(폭발) slash(베기) claw(할퀴기) bite(물기) pillar(기둥) beam(광선) wave(파도) vortex(소용돌이) thunder(번개) spike(가시) rain(낙하) shock(충격파) orbs(연속구) ice(얼음) vine(덩굴) rock(바위)
const PAL={yang:['#ffffff','#fff2a8','#ffb030','#e07a10'],yin:['#efe6ff','#b49cff','#6a4ad0','#241046'],neutral:['#ffffff','#e0e0ea','#9a9aae','#4a4a5a'],fire:['#fff2a8','#ffb030','#e5484d','#8e1f1a'],water:['#e8fbff','#7cc8ff','#3b8beb','#1b4f96'],wood:['#e9ffd8','#9fe08f','#3fa34d','#1f6b2b'],earth:['#fff0d0','#f0c98a','#c9822b','#7a4512'],metal:['#ffffff','#ffe58a','#d4a20a','#8a6a04'],
 dark:['#e6dcff','#a57ce8','#5a2f99','#1e0b3a'],holy:['#ffffff','#fff6c8','#ffd36e','#f0a020'],ice:['#ffffff','#d8f6ff','#8ad8ff','#3a8ad8'],thunder:['#ffffff','#fff27a','#ffd000','#7a5af0'],blood:['#ffd6d6','#ff6a6a','#c8102e','#5a0010'],petal:['#fff0fa','#ffb3e0','#c86ad8','#6a2a8a']};
const SKILLS=[
 ['굴러박치기','shock'],['물방울 튀기기','ball','water'],['할퀴기','claw'],['흰 송곳니','bite','ice'],['풍운 질주','slash','ice'],['해태의 심판','pillar','holy'],['황토 돌진','shock','earth'],['화염 포효','burst'],['여우불','orbs'],
 ['쪼기','bite'],['붉은 깃털','rain'],['홍련 깃날','slash'],['보랏빛 응시','beam','dark'],['청류 깃털','rain'],['청파 깃날','slash'],['흑야의 울음','shock','dark'],['흑깃 폭풍','vortex','dark'],['월광 낙인','pillar','ice'],['태양 강림','pillar','holy'],
 ['불씨 쪼기','ball'],['작은 불꽃날개','burst'],['화염 선회','vortex'],['적봉 낙화','rain'],['봉황 비상','pillar'],['주작 열화진','rain','fire'],
 ['독니','bite','wood'],['쪽빛 물줄기','beam'],['청사 휘감기','vine','water'],['금비늘 칼날','slash','metal'],['화염 독니','bite'],['홍염 휘감기','vine','fire'],['혈독 송곳니','bite','blood'],['지룡 융기','spike'],['지맥 파동','shock','earth'],['황룡 천강','pillar','holy'],
 ['물안개 브레스','beam'],['교룡 소용돌이','vortex'],['수룡 해일','wave'],['벽파 덩굴창','spike','wood'],['천우 낙뢰','thunder','thunder'],['청룡 승천','pillar','wood'],
 ['껍질 박치기','shock','water'],['거품 방울','orbs'],['장수 해류','wave'],['흑갑 가시','spike','dark'],['바위 등껍질','rock'],['바위 물기','bite','earth'],['용암 물기','bite','fire'],['화산 분출','pillar','fire'],['폭염 짓밟기','shock','fire'],['뇌명 강타','thunder','thunder'],
 ['파도 몰아치기','wave'],['빙하 파편','ice','ice'],['눈사태','rock','ice'],['쌍두 독니','bite','dark'],['흑룡 쌍포','beam','dark'],['현무 빙결진','ice','ice'],
 ['앞발 할퀴기','claw'],['청호 돌진','slash','water'],['자염 발톱','claw','fire'],['설광 베기','slash','ice'],['적호 포효','shock','fire'],['대호 일격','claw','water'],['백두 산사태','rock','wood'],['화염 갈기','burst','fire'],['비호 섬광','slash','thunder'],['기린 서광','pillar','holy'],
 ['흰갈기 질풍','slash','wood'],['산군의 포효','shock','wood'],['작은 금빛 발톱','claw','metal'],['백금 할퀴기','claw','metal'],['환령 검무','slash','metal'],['백호 금강참','slash','holy'],
 ['곰발 펀치','shock','earth'],['불꽃 곰발','burst','fire'],['흑곰 내려찍기','rock','earth'],['반달 베기','slash','earth'],['보랏빛 꽃잎','vine','petal'],['청류 강타','wave'],['빙설 포옹','ice','ice'],
 ['음양 구르기','shock','neutral'],['음양 방울','orbs','neutral'],['일광 세례','pillar','yang'],['햇살 씨앗탄','ball','yang'],['열풍 회오리','vortex','yang'],['양기 포효','shock','yang'],['질풍 할퀴기','claw','wood'],['광풍참','slash','wood'],['악풍 깃칼','rain','wood'],['폭풍 낙뢰','thunder','thunder'],['파멸의 돌풍','vortex','wood'],['흉풍 멸천','vortex','dark'],['양기 발톱','claw','yang'],['태양 맹호참','slash','yang'],['일양 천강','pillar','yang'],['철턱 깨물기','bite','fire'],['포식의 아가리','bite','fire'],['탐욕의 불꽃','burst','fire'],['폭식 짓밟기','shock','fire'],['무한 포식','vortex','fire'],['도철 탐천','bite','dark'],['월광 세례','pillar','yin'],['그림자 씨앗탄','ball','yin'],['심연 물방울','orbs','yin'],['음기 포효','shock','yin'],['기류 물줄기','beam','water'],['몽환 안개','vortex','water'],['와류 해일','wave','water'],['심연 낙인','pillar','yin'],['혼세 파도','wave','yin'],['혼돈 붕괴','vortex','dark'],['음영 브레스','beam','yin'],['심음 소용돌이','vortex','yin'],['태음 월광포','beam','yin'],['철완 강타','shock','metal'],['분노 할퀴기','claw','metal'],['파쇄 낙석','rock','metal'],['불굴 돌진','slash','metal'],['광폭 난무','claw','blood'],['도올 패천','shock','dark'],['화요 불꽃','burst','fire'],['불씨 쪼기','bite','fire'],['화계 깃불','rain','fire'],['염화 신조탄','pillar','fire'],['불꽃 물기','bite','fire'],['열화 질주','wave','fire'],['홍련 포효','burst','fire'],['수요 물방울','orbs','water'],['물방울 독니','bite','water'],['수류 휘감기','vine','water'],['벽수 해일','wave','water'],['이슬 박치기','shock','water'],['수연 안개','vortex','water'],['천수 빙우','ice','ice'],['목요 새싹탄','ball','wood'],['가지 휘두르기','slash','wood'],['거목 내려찍기','rock','wood'],['울목 덩굴창','spike','wood'],['새싹 발차기','shock','wood'],['수목 꽃잎','vine','petal'],['청목 월광참','slash','wood'],['금요 쇳가루','rain','metal'],['철니 물기','bite','metal'],['강철 할퀴기','claw','metal'],['금속 낫베기','slash','metal'],['철뿔 박치기','shock','metal'],['청동 돌진','wave','metal'],['철갑 지진','rock','metal'],['토요 흙탄','ball','earth'],['흙먼지 질주','wave','earth'],['대지 발굽','shock','earth'],['후토 융기','spike','earth'],['흙돼지 돌진','shock','earth'],['대지 엄니','bite','earth'],['지덕 산사태','rock','earth']
].map(([n,fx,pal])=>({n,fx,pal}));
function skillOf(P){if(P.boss)return P.skill||{n:'흑화의 일격',fx:'burst',pal:'dark'};const s=SKILLS[P.no]||{n:SKILL[P.el],fx:'ball'};return{n:s.n,fx:s.fx,pal:s.pal||P.el};}
// 도트 입자: 정사각형 픽셀을 계단식으로 움직여요
function skillFx(sk,box,from,to){const pal=PAL[sk.pal]||PAL.fire,B=box.getBoundingClientRect(),fa=from.getBoundingClientRect(),ta=to.getBoundingClientRect();
 const ax=fa.left-B.left+fa.width/2,ay=fa.top-B.top+fa.height/2,tx=ta.left-B.left+ta.width/2,ty=ta.top-B.top+ta.height/2,R=Math.min(ta.width,ta.height)/2;
 const L=box.querySelector('#abfx')||box;const rnd_=Math.random,col=i=>pal[Math.min(pal.length-1,i)];
 const P=(x,y,sz,c,extra)=>{const d=document.createElement('i');d.className='pxp';d.style.cssText='left:'+Math.round(x)+'px;top:'+Math.round(y)+'px;width:'+sz+'px;height:'+sz+'px;background:'+c+';'+(extra||'');L.appendChild(d);return d;};
 const A=(el,kf,dur,delay,ease)=>{const a=el.animate(kf,{duration:dur,delay:delay||0,easing:ease||'steps(8,end)',fill:'forwards'});a.onfinish=()=>el.remove();return a;};
 const ring=(cx,cy,n,r0,r1,dur,delay,sz)=>{for(let i=0;i<n;i++){const t=i/n*Math.PI*2,p=P(cx,cy,sz||8,col(i%3));A(p,[{transform:'translate('+Math.cos(t)*r0+'px,'+Math.sin(t)*r0+'px)',opacity:1},{transform:'translate('+Math.cos(t)*r1+'px,'+Math.sin(t)*r1+'px)',opacity:0}],dur,delay);}};
 const flash=(cx,cy,sz,delay)=>{const p=P(cx-sz/2,cy-sz/2,sz,'radial-gradient(circle,'+pal[0]+' 0%,'+pal[1]+' 35%,rgba(0,0,0,0) 70%)','border-radius:50%');A(p,[{transform:'scale(.2)',opacity:1},{transform:'scale(1.5)',opacity:0}],420,delay,'ease-out');};
 const line=(x1,y1,x2,y2,n,sz,delay,dur,c)=>{for(let i=0;i<n;i++){const f=i/(n-1),p=P(x1+(x2-x1)*f,y1+(y2-y1)*f,sz,c||col(i%2?1:0));A(p,[{opacity:0},{opacity:1,offset:.2},{opacity:0}],dur||360,(delay||0)+i*12);}};
 const proj=(sx,sy,ex,ey,sz,dur,delay)=>{const p=P(sx-sz/2,sy-sz/2,sz,col(1),'box-shadow:0 0 0 4px '+col(2)+',0 0 0 8px '+col(3)+'55');A(p,[{transform:'translate(0,0)'},{transform:'translate('+(ex-sx)+'px,'+(ey-sy)+'px)'}],dur,delay,'steps(7,end)');};
 const H=380;switch(sk.fx){
  case 'ball':proj(ax,ay,tx,ty,14,320,0);setTimeout(()=>{flash(tx,ty,R*2,0);ring(tx,ty,10,6,R,380,0,6);},300);return H;
  case 'orbs':for(let k=0;k<4;k++){const oy=ay+(k-1.5)*14;proj(ax,oy,tx+(rnd_()-.5)*R,ty+(rnd_()-.5)*R,10,300,k*80);}setTimeout(()=>ring(tx,ty,12,4,R*1.1,400,0,6),420);return H+80;
  case 'burst':flash(tx,ty,R*2.6,60);ring(tx,ty,16,4,R*1.3,460,60,8);ring(tx,ty,10,2,R*.7,380,140,6);return H;
  case 'slash':for(let k=0;k<3;k++){const o=(k-1)*R*.35;line(tx-R+o,ty-R,tx+R*.6+o,ty+R*.9,14,6,k*70,300,col(k===1?0:1));}flash(tx,ty,R*1.6,180);return H;
  case 'claw':for(let k=0;k<3;k++){const o=(k-1)*R*.3;line(tx-R*.7+o,ty-R*.9,tx-R*.2+o,ty+R*.9,12,5,k*40,280,col(k===1?0:2));}ring(tx,ty,8,6,R*.8,300,160,5);return H;
  case 'bite':{const t=P(tx-R*.7,ty-R,R*1.4,col(0),'clip-path:polygon(0 0,100% 0,85% 60%,70% 100%,55% 60%,40% 100%,25% 60%,10% 100%);height:'+R*.8+'px');const b=P(tx-R*.7,ty+R*.2,R*1.4,col(0),'clip-path:polygon(0 100%,100% 100%,90% 40%,75% 0,60% 40%,45% 0,30% 40%,15% 0);height:'+R*.8+'px');
   A(t,[{transform:'translateY(-'+R*.5+'px)',opacity:.9},{transform:'translateY('+R*.25+'px)',opacity:1,offset:.6},{opacity:0}],380,0,'steps(5,end)');A(b,[{transform:'translateY('+R*.5+'px)',opacity:.9},{transform:'translateY(-'+R*.25+'px)',opacity:1,offset:.6},{opacity:0}],380,0,'steps(5,end)');ring(tx,ty,8,4,R*.9,300,220,6);return H;}
  case 'pillar':{const p=P(tx-R*.45,0,R*.9,'linear-gradient(90deg,'+col(3)+'00,'+col(1)+','+col(0)+','+col(1)+','+col(3)+'00)','height:'+(ty+R*.6)+'px;transform-origin:top');A(p,[{transform:'scaleY(0)',opacity:1},{transform:'scaleY(1)',opacity:1,offset:.4},{transform:'scaleX(1.4)',opacity:0}],520,0,'steps(8,end)');ring(tx,ty+R*.5,12,4,R*1.2,420,180,7);return H+100;}
  case 'beam':{const dx=tx-ax,dy=ty-ay,len=Math.hypot(dx,dy),ang=Math.atan2(dy,dx)*180/Math.PI;const p=P(ax,ay-9,len,'linear-gradient(180deg,'+col(2)+','+col(0)+' 40%,'+col(0)+' 60%,'+col(2)+')','height:18px;transform-origin:0 50%;transform:rotate('+ang+'deg) scaleX(0)');
   p.animate([{transform:'rotate('+ang+'deg) scaleX(0)',opacity:1},{transform:'rotate('+ang+'deg) scaleX(1)',opacity:1,offset:.5},{transform:'rotate('+ang+'deg) scaleX(1) scaleY(.2)',opacity:0}],{duration:460,easing:'steps(7,end)',fill:'forwards'}).onfinish=()=>p.remove();flash(tx,ty,R*1.8,220);return H;}
  case 'wave':for(let r=0;r<4;r++)for(let k=0;k<6;k++){const p=P(ax,ty-R+r*R*.55+(k%2)*6,10,col(r%3));A(p,[{transform:'translateX(0)',opacity:1},{transform:'translateX('+(tx-ax+R*.6)+'px)',opacity:.2}],420,k*30+r*20,'steps(9,end)');}return H+60;
  case 'vortex':for(let k=0;k<18;k++){const p=P(tx,ty,7,col(k%3));const t0=k/18*Math.PI*2,kf=[];for(let s=0;s<=6;s++){const t=t0+s*.9,r=R*(1.2-s*.15);kf.push({transform:'translate('+Math.cos(t)*r+'px,'+Math.sin(t)*r*.6+'px)',opacity:s<6?1:0});}A(p,kf,520,k*10,'steps(12,end)');}return H+100;
  case 'thunder':{let x=tx+(rnd_()-.5)*20,y=0;const pts=[];while(y<ty){const nx=tx+(rnd_()-.5)*R*.8,ny=Math.min(ty,y+R*.5);pts.push([x,y,nx,ny]);x=nx;y=ny;}pts.forEach(([a,b,c,d],i)=>line(a,b,c,d,6,7,i*20,260,col(i%2)));flash(tx,ty,R*2.4,140);ring(tx,ty,10,4,R,320,160,6);return H;}
  case 'spike':for(let k=0;k<5;k++){const sx=tx-R+k*R*.5,h=R*(.8+rnd_()*.6),p=P(sx-7,ty+R*.6-h,14,'linear-gradient(0deg,'+col(3)+','+col(1)+')','height:'+h+'px;clip-path:polygon(50% 0,100% 100%,0 100%);transform-origin:bottom');A(p,[{transform:'scaleY(0)'},{transform:'scaleY(1)',offset:.4},{transform:'scaleY(1)',opacity:0}],460,k*45,'steps(6,end)');}return H+60;
  case 'rain':for(let k=0;k<14;k++){const sx=tx+(rnd_()-.5)*R*2,p=P(sx,0,k%3?6:10,col(k%3),'height:'+(k%3?14:10)+'px');A(p,[{transform:'translateY(0)',opacity:1},{transform:'translateY('+(ty+R*.3)+'px)',opacity:.3}],360,k*25,'steps(7,end)');}setTimeout(()=>ring(tx,ty+R*.3,10,4,R,300,0,6),360);return H+120;
  case 'shock':ring(tx,ty,20,2,R*1.5,420,0,8);ring(tx,ty,14,2,R*.9,360,90,6);flash(tx,ty,R*1.6,0);box.classList.remove('quake');void box.offsetWidth;box.classList.add('quake');return H;
  case 'ice':for(let k=0;k<8;k++){const t=k/8*Math.PI*2,p=P(tx+Math.cos(t)*R*1.4,ty+Math.sin(t)*R*1.4,8,col(k%2),'height:16px;transform:rotate('+(t*180/Math.PI+90)+'deg)');A(p,[{opacity:0},{transform:'translate('+(-Math.cos(t)*R*1.2)+'px,'+(-Math.sin(t)*R*1.2)+'px) rotate('+(t*180/Math.PI+90)+'deg)',opacity:1}],300,k*20,'steps(6,end)');}
   setTimeout(()=>{const c=P(tx-R*.5,ty-R*.6,R,'linear-gradient(135deg,'+col(0)+','+col(2)+')','height:'+R*1.2+'px;clip-path:polygon(50% 0,100% 35%,80% 100%,20% 100%,0 35%);opacity:.85');A(c,[{transform:'scale(.3)',opacity:.9},{transform:'scale(1)',opacity:.9,offset:.5},{transform:'scale(1.1)',opacity:0}],420,0,'steps(6,end)');},280);return H+120;
  case 'vine':for(let k=0;k<22;k++){const f=k/21,x=tx-R*1.1+f*R*2.2,y=ty+Math.sin(f*Math.PI*3)*R*.6,p=P(x,y,8,col(k%2?1:2));A(p,[{opacity:0,transform:'scale(.2)'},{opacity:1,transform:'scale(1)',offset:.3},{opacity:0}],440,k*14,'steps(6,end)');}return H+100;
  case 'rock':for(let k=0;k<6;k++){const sx=tx+(rnd_()-.5)*R*1.6,sz=10+Math.floor(rnd_()*3)*4,p=P(sx,0,sz,col(2),'box-shadow:inset -3px -3px 0 '+col(3)+',inset 3px 3px 0 '+col(1));A(p,[{transform:'translateY(0)'},{transform:'translateY('+(ty+R*.2)+'px)',offset:.8},{transform:'translateY('+(ty+R*.1)+'px)',opacity:0}],400,k*50,'steps(8,end)');}setTimeout(()=>{box.classList.remove('quake');void box.offsetWidth;box.classList.add('quake');},360);return H+140;
  default:flash(tx,ty,R*2,0);return H;}}

/* ================= 월드보스 (흑화한 12지신) ================= */
const BOSSES=[
 {n:'흑화 자신(子神)',a:'쥐',el:'water',sk:{n:'흑류 낫베기',fx:'slash',pal:'water'}},
 {n:'흑화 축신(丑神)',a:'소',el:'earth',sk:{n:'흑우 대지진',fx:'shock',pal:'earth'}},
 {n:'흑화 인신(寅神)',a:'호랑이',el:'wood',sk:{n:'흑림 맹호참',fx:'claw',pal:'wood'}},
 {n:'흑화 묘신(卯神)',a:'토끼',el:'wood',sk:{n:'흑월 가시덩굴',fx:'spike',pal:'wood'}},
 {n:'흑화 진신(辰神)',a:'용',el:'earth',sk:{n:'흑룡 붕산',fx:'rock',pal:'earth'}},
 {n:'흑화 사신(巳神)',a:'뱀',el:'fire',sk:{n:'흑염 독무',fx:'vortex',pal:'fire'}},
 {n:'흑화 오신(午神)',a:'말',el:'fire',sk:{n:'흑염 질주',fx:'wave',pal:'fire'}},
 {n:'흑화 미신(未神)',a:'양',el:'earth',sk:{n:'흑양 석장 강림',fx:'pillar',pal:'earth'}},
 {n:'흑화 신신(申神)',a:'원숭이',el:'metal',sk:{n:'흑철 여의봉',fx:'shock',pal:'metal'}},
 {n:'흑화 유신(酉神)',a:'닭',el:'metal',sk:{n:'흑금 깃칼',fx:'rain',pal:'metal'}},
 {n:'흑화 술신(戌神)',a:'개',el:'earth',sk:{n:'흑견 물어뜯기',fx:'bite',pal:'earth'}},
 {n:'흑화 해신(亥神)',a:'돼지',el:'water',sk:{n:'흑해 해일',fx:'wave',pal:'water'}}];
// 기본 수치: 1번(쥐)은 6단계 환수 5명이 7일 동안 매일 쳐야 겨우 잡는 정도. 다음 보스마다 1.2배
const BOSS_HP=i=>Math.round(110000*Math.pow(1.2,i)/1000)*1000, BOSS_ATK=i=>Math.round(200*Math.pow(1.2,i)), BOSS_ROUNDS=10, BOSS_DAILY=1;
const BV={cur:null,hits:null,loaded:false,busy:false,atk:null};
function bossPet(c){const d=BOSSES[c.no-1];return{boss:true,no:c.no,name:d.n,img:'b/'+String(c.no).padStart(2,'0')+'.gif',el:d.el,skill:d.sk,lv:0,cp:0};}
function simBoss(A,c,seed){let x=seed>>>0;const R=()=>{x=(x+0x6D2B79F5)>>>0;let t=x;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};
 const sa=bStat(A),bel=BOSSES[c.no-1].el;let ha=sa.hp,hd=c.hp,dealt=0;const log=[];
 for(let r=0;r<BOSS_ROUNDS&&ha>0&&hd>0;r++){
  {const miss=R()<.05,crit=!miss&&R()<.1,adv=isAdv(A.el,bel)?1:0;const dmg=miss?0:Math.max(1,Math.round(sa.atk*(0.85+R()*0.3)*(crit?1.5:1)*(adv?ADV_ATK*WEAK_TAKE:1)));const real=Math.min(dmg,hd);hd-=real;dealt+=real;log.push([0,dmg,crit?1:0,miss?1:0,adv,ha,hd]);}
  if(hd<=0)break;
  {const miss=R()<.05,crit=!miss&&R()<.1,adv=isAdv(bel,A.el)?1:0;const dmg=miss?0:Math.max(1,Math.round(c.atk*(0.85+R()*0.3)*(crit?1.5:1)*(adv?ADV_ATK*WEAK_TAKE:1)));ha=Math.max(0,ha-dmg);log.push([1,dmg,crit?1:0,miss?1:0,adv,ha,hd]);}}
 return{log,dealt,hpA:sa.hp};}
async function loadBoss(){if(!acc)return;BV.loaded=true;try{const s=await db.doc('boss/current').get();BV.cur=s.exists?s.data():null;
  if(BV.cur){const q=await db.collection('bosshits').where('iid','==',BV.cur.iid).get();BV.hits=q.docs.map(d=>d.data()).sort((a,b)=>b.dmg-a.dmg);}else BV.hits=[];}
 catch(e){BV.cur=BV.cur||null;BV.hits=BV.hits||[];if(MODE==='player')toast('월드보스 정보를 불러오지 못했어요.');}
 if(MODE==='admin'||(view==='boss'&&!document.getElementById('layer').innerHTML))render();}
async function bossAttack(){if(BV.busy)return;const c=BV.cur;if(!c||c.killed)return toast('지금은 공격할 수 있는 보스가 없어요.');const ad=accDaily();if((ad.boss||0)>=BOSS_DAILY+(ad.bossBonus||0))return toast('오늘 공격 횟수를 다 썼어요. 토벌재도전비서로 한 번 더 도전할 수 있어요.');
 const ai=BV.atk!=null&&acc.slots[BV.atk]?BV.atk:acc.slots.findIndex(q=>q),ap=acc.slots[ai];if(!ap)return toast('공격할 환수가 없어요.');if(ap.sick!=null)return toast('아픈 환수는 토벌에 나갈 수 없어요.');if(ap.train)return toast('수련 중인 환수는 토벌에 나갈 수 없어요.');if(ap.errand)return toast('심부름 중인 환수는 토벌에 나갈 수 없어요.');
 BV.busy=true;try{const ref=db.doc('boss/current'),s=await ref.get();if(!s.exists){toast('보스가 사라졌어요.');return;}const cur=s.data();if(cur.iid!==c.iid||cur.killed){BV.cur=cur;render();toast('이미 토벌된 보스예요.');return;}
  const A=petSnap(ap),res=simBoss(A,cur,Math.floor(rnd()*4294967296));
  ad.boss=(ad.boss||0)+1;await save();
  await ref.incr('hp',-res.dealt);const after=(await ref.get()).data();let killed=false;
  if(after.hp<=0&&!after.killed){await ref.update({hp:0,killed:true,killedAt:Date.now(),killer:acc.nick||acc.id});killed=true;}
  const hRef=db.doc('bosshits/'+cur.iid+'_'+acc.uid),hs=await hRef.get(),old=hs.exists?hs.data():null;const myTotal=(old?old.dmg:0)+res.dealt;
  await hRef.set({iid:cur.iid,uid:acc.uid,nick:acc.nick||acc.id,dmg:myTotal,n:(old?old.n:0)+1,last:Date.now(),best:Math.max(old?old.best||0:0,res.dealt),pet:{no:A.no,st:A.st},claimed:old?!!old.claimed:false});
  const D=bossPet(cur);render();
  battleAnim({kind:'boss',t:Date.now(),a:{nick:acc.nick||acc.id,pet:A},d:{nick:D.name,pet:D},hpA:res.hpA,hpD:cur.maxHp,hpD0:cur.hp,logS:JSON.stringify(res.log),dealt:res.dealt,myTotal,killed},'atk');
 }catch(e){toast('공격에 실패했어요: '+(e&&e.message||e));}finally{BV.busy=false;}}
async function bossClaim(){const c=BV.cur;if(!c||!c.killed)return;const ref=db.doc('bosshits/'+c.iid+'_'+acc.uid),s=await ref.get();if(!s.exists)return toast('이번 토벌에 참여하지 않았어요.');const h=s.data();if(h.claimed)return toast('이미 보상을 받았어요.');
 const top=(BV.hits||[])[0],mvp=top&&top.uid===acc.uid;const mk=(r,title)=>Object.assign({id:newMailId(),t:Date.now(),from:'월드보스',title,msg:pnm(bossPet(c))+' 토벌 보상이에요.',coins:0,eggs:0,items:{},gear:[]},r||{},{id:newMailId(),title});
 const ms=[];const has=r=>r&&(r.coins||r.eggs||r.yyEggs||Object.keys(r.items||{}).length||(r.gear||[]).length);if(has(c.reward))ms.push(mk(c.reward,'월드보스 토벌 보상'));if(mvp&&has(c.mvpReward))ms.push(mk(c.mvpReward,'월드보스 MVP 보상'));
 await ref.update({claimed:true});acc.mail=(acc.mail||[]).concat(ms);SFX.play('fanfare');toast(ms.length?'보상을 우편함으로 보냈어요!'+(mvp?' (MVP 보상 포함)':''):'이번 보스에는 설정된 보상이 없어요.');await commit();loadBoss();}
function bossCard(c,hits,admin){if(!c)return '<div class="card" style="text-align:center;padding:36px 16px"><img class="px" src="i/q.png" alt="" style="width:56px;opacity:.5"><p class="muted">지금은 출현한 월드보스가 없어요.'+(admin?'':' 운영자가 보스를 소환하면 알려드릴게요.')+'</p></div>';
 const D=bossPet(c),pct=Math.max(0,c.hp/c.maxHp*100),tot=(hits||[]).reduce((s,h)=>s+h.dmg,0);
 return '<div class="card bossc'+(c.killed?' dead':'')+'"><div class="bossimg"><img class="px" src="'+D.img+'" alt="">'+(c.killed?'<span class="bossdead">討伐</span>':'')+'</div><div class="bossinfo"><small class="muted">12지신 · '+BOSSES[c.no-1].a+'</small><b class="serif" style="font-size:26px">'+esc(D.name)+'</b><div>'+elTag(D.el)+' <span class="muted">고유기: '+esc(D.skill.n)+' · 공격력 '+fmt(c.atk)+'</span></div>'+
  '<div class="bosshp"><i style="width:'+pct+'%"></i><span>'+fmt(c.hp)+' / '+fmt(c.maxHp)+' ('+pct.toFixed(1)+'%)</span></div><small class="muted">'+(c.killed?'토벌 완료 · 마지막 일격 '+esc(c.killer||'')+' · '+new Date(c.killedAt).toLocaleString('ko-KR'):'출현 '+new Date(c.start).toLocaleString('ko-KR')+' · 참여 '+(hits||[]).length+'명 · 누적 데미지 '+fmt(tot))+'</small>'+
  '<div class="mchips" style="margin-top:6px"><span class="muted" style="font-size:12px;align-self:center">참여 보상</span>'+(mailParts(c.reward||{}).length?mailIcons(c.reward):'<span class="muted" style="font-size:12px">없음</span>')+'</div>'+
  (mailParts(c.mvpReward||{}).length?'<div class="mchips" style="margin-top:4px"><span class="muted" style="font-size:12px;align-self:center">MVP(누적 1위)</span>'+mailIcons(c.mvpReward)+'</div>':'')+'</div></div>';}
function bossRank(c,hits){const tot=(hits||[]).reduce((s,h)=>s+h.dmg,0)||1;return '<div class="card"><h2>누적 데미지 기록</h2>'+((hits||[]).length?'<table class="t">'+'<tr><th>순위</th><th>유저</th><th style="text-align:right">누적 데미지</th><th style="text-align:right">공격</th><th style="text-align:right">비중</th></tr>'+hits.map((h,i)=>'<tr'+(acc&&h.uid===acc.uid?' style="background:#fff3c4"':'')+'><td><b>'+(i+1)+'</b>'+(i===0?' 👑':'')+'</td><td><img class="px" src="'+img(h.pet?h.pet.no:0)+'" alt="" width="28" height="28" style="object-fit:contain;vertical-align:middle"> '+esc(h.nick)+'</td><td style="text-align:right"><b>'+fmt(h.dmg)+'</b></td><td style="text-align:right">'+h.n+'회</td><td style="text-align:right">'+(h.dmg/tot*100).toFixed(1)+'%</td></tr>').join('')+'</table>':'<p class="muted">아직 공격한 유저가 없어요.</p>')+'</div>';}
function bossRetry(){const ad=accDaily();if((ad.boss||0)<BOSS_DAILY+(ad.bossBonus||0))return toast('아직 공격 기회가 남아 있어요.');if(!take('sec_boss'))return;ad.bossBonus=(ad.bossBonus||0)+1;SFX.play('magic');toast('월드보스 공격 기회가 1번 늘었어요!');commit();}
function vBoss(){if(!BV.loaded)setTimeout(loadBoss,0);const c=BV.cur,ad=accDaily(),lim=BOSS_DAILY+(ad.bossBonus||0),used=(ad.boss||0)>=lim;
 let h='<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><h1 class="serif" style="margin:0;font-size:26px">월드보스 토벌</h1><span class="muted">하루 '+BOSS_DAILY+'번 공격 (토벌재도전비서로 추가) · 서버 모두가 함께 체력을 깎아요</span></div><div style="margin-top:12px">'+bossCard(c,BV.hits)+'</div>';
 if(c&&!c.killed){const ai=BV.atk!=null&&acc.slots[BV.atk]?BV.atk:acc.slots.findIndex(q=>q);
  h+='<div class="card"><h2>출전할 환수</h2>'+(ai<0?'<p class="muted">키우는 환수가 없어요.</p>':'<div class="slots" style="margin:0">'+acc.slots.map((q,i)=>{if(!q)return '';const el=ELOF[q.no],a=isAdv(el,BOSSES[c.no-1].el)?'<span class="advg">상성 유리</span>':isAdv(BOSSES[c.no-1].el,el)?'<span class="advb">상성 불리</span>':'';
   return '<button class="slot'+(ai===i?' on':'')+'" data-batk="'+i+'"><img class="px" src="'+img(q.no)+'" alt=""><span><b>'+esc(NAMES[q.no])+' '+a+'</b><small>'+ELK[el]+' · 전투력 '+fmt(cp(q))+(q.sick!=null?' · 아픔':q.train?' · 수련 중':'')+'</small></span></button>';}).join('')+'</div>')+
   '<div style="display:flex;gap:10px;align-items:center;margin-top:12px;flex-wrap:wrap"><button class="btn teal" data-bossgo="1" style="min-height:48px;font-size:17px" '+(used||ai<0||BV.busy?'disabled':'')+'>'+(used?'오늘 공격 완료':'공격하기 ('+(lim-(ad.boss||0))+'/'+lim+')')+'</button>'+(used?'<button class="btn sm" data-bossretry="1" '+((acc.inv.sec_boss||0)?'':'disabled')+'><img class="px" src="i/sec_boss.gif" alt="" style="width:22px;height:22px;vertical-align:-6px"> 토벌재도전비서 사용 (보유 '+(acc.inv.sec_boss||0)+')</button>':'')+'<span class="muted">한 번에 최대 '+BOSS_ROUNDS+'번 공격해요. 체력이 0이 되면 그 자리에서 물러나요. 단계가 낮으면 보스에게 금방 쓰러져요.</span></div></div>';}
 if(c&&c.killed){const mine=(BV.hits||[]).find(x=>x.uid===acc.uid);h+='<div class="card" style="text-align:center">'+(mine?(mine.claimed?'<p class="muted">토벌 보상을 이미 받았어요.</p>':'<p>토벌에 참여했어요! 보상을 받으세요.</p><button class="btn" data-bossclaim="1" style="background:#f0c75e">토벌 보상 받기</button>'):'<p class="muted">이번 토벌에는 참여하지 않았어요.</p>')+'</div>';}
 h+=bossRank(c,BV.hits);return h;}
// 운영자: 월드보스 관리
function aBoss(){const c=BV.cur;if(!BV.loaded)setTimeout(loadBoss,0);const main=isMain();
 const sel=AS.bossNo||(c?c.no:1),i=sel-1;
 let h='<div class="card adm"><h2>현재 월드보스</h2>'+bossCard(c,BV.hits,true)+(c?'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn soft sm" data-x="bossReload">새로고침</button>'+(main?'<button class="btn soft sm" data-x="bossHeal">체력 가득 채우기</button><button class="btn red sm" data-x="bossEnd">보스 내리기</button>':'')+'</div>':'')+'</div>';
 h+='<div class="card adm"><h2>월드보스 지정 · 소환</h2><p class="muted">새로 소환하면 지금 보스와 누적 기록이 새 회차로 바뀌어요. (이전 회차 기록은 남아 있어요)</p><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">보스<select id="bNo">'+BOSSES.map((d,k)=>'<option value="'+(k+1)+'"'+(k===i?' selected':'')+'>'+(k+1)+'. '+d.n+' ('+d.a+' · '+ELK[d.el]+')</option>').join('')+'</select></label><label class="f">체력<input type="number" id="bHp" value="'+BOSS_HP(i)+'" style="width:120px"></label><label class="f">공격력<input type="number" id="bAtk" value="'+BOSS_ATK(i)+'" style="width:90px"></label><button class="btn soft sm" data-x="bossPreset">기본값</button></div>'+
  '<div class="bosspreview"><img class="px" src="b/'+String(sel).padStart(2,'0')+'.gif" alt=""><span class="muted">기본값: 1번(쥐) 체력 110,000 · 공격력 200 (6단계 환수 5명이 7일 동안 매일 공격하면 겨우 잡는 정도), 다음 보스마다 1.2배</span></div>'+
  '<h3 class="serif" style="margin:14px 0 6px">토벌 보상 (참여한 모두)</h3>'+mailForm('bR',c&&c.reward||{title:'토벌 보상'})+'<h3 class="serif" style="margin:14px 0 6px">MVP 보상 (누적 데미지 1위 추가)</h3>'+mailForm('bM',c&&c.mvpReward||{title:'MVP 보상'})+
  '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">'+(main?'<button class="btn teal" data-x="bossSpawn">이 보스 소환</button>':'')+(c&&main?'<button class="btn sm" data-x="bossSaveReward">현재 보스 보상만 바꾸기</button>':'')+'</div>'+(main?'':'<p class="muted">보조 운영자는 볼 수만 있어요.</p>')+'</div>'+bossRank(c,BV.hits);
 return h;}


/* ================= 강화 · 합성 연출 ================= */
function forgeAnim(o){const L=document.getElementById('layer');let done=false;
 const syn=o.kind==='synth',col={success:'#ffd36e',fail:'#c9d8d5',down:'#ff9a52',destroy:'#ff5a4a',protect:'#7cc8ff',empty:'#c9d8d5'}[o.out];
 L.innerHTML='<div class="overlay forge"><div class="fbox"><div class="fttl">'+esc(o.title)+'</div><div class="fstage" id="fst"><div class="frune r1"></div><div class="frune r2"></div><div class="fglow" id="fglow"></div>'+
  (syn?'<img class="px fitem fa" id="fA" src="'+o.imgs[0]+'" alt=""><img class="px fitem fb" id="fB" src="'+o.imgs[1]+'" alt="">':'<img class="px fitem" id="fA" src="'+o.imgs[0]+'" alt="">')+'<div id="ffx"></div></div>'+
  '<div class="frate">성공 확률 <b>'+Math.round(o.rate*100)+'%</b>'+(o.extra?' · '+esc(o.extra):'')+'</div><div class="fgauge"><i id="fg"></i></div><div class="fres" id="fres"></div><div class="fbtn"><button class="btn soft sm" id="fSkip">바로 보기</button></div></div></div>';
 const $=id=>document.getElementById(id),st=$('fst'),fx=$('ffx');
 const spark=(n,cs,spread,up,dur)=>{for(let k=0;k<n;k++){const p=document.createElement('i');p.className='pxp';const sz=[4,6,8][k%3];p.style.cssText='left:'+(50+(Math.random()-.5)*spread)+'%;top:'+(55+(Math.random()-.5)*20)+'%;width:'+sz+'px;height:'+sz+'px;background:'+cs[k%cs.length];fx.appendChild(p);
  const a=p.animate([{transform:'translate(0,0)',opacity:1},{transform:'translate('+((Math.random()-.5)*160)+'px,'+(up?-(60+Math.random()*120):(Math.random()-.5)*200)+'px)',opacity:0}],{duration:dur||700,delay:Math.random()*200,easing:'steps(8,end)',fill:'forwards'});a.onfinish=()=>p.remove();}};
 SFX.play('charge');
 const t0=performance.now(),D=2600;let raf;
 const tick=()=>{if(done)return;const f=Math.min(1,(performance.now()-t0)/D);$('fg').style.width=(f*100)+'%';st.style.setProperty('--sp',(2.6-f*2.2)+'s');st.style.setProperty('--sh',(f*f*6)+'px');
  if(syn){const d=(1-f)*90,ang=f*720;$('fA').style.transform='translate('+(-d*Math.cos(ang*Math.PI/180))+'px,'+(-d*Math.sin(ang*Math.PI/180)*.4)+'px)';$('fB').style.transform='translate('+(d*Math.cos(ang*Math.PI/180))+'px,'+(d*Math.sin(ang*Math.PI/180)*.4)+'px)';}
  if(Math.random()<.25+f*.5)spark(1,['#fff6c8','#ffd36e','#7cc8ff'],60,true,600);
  if(f<1)raf=requestAnimationFrame(tick);else reveal();};
 raf=requestAnimationFrame(tick);
 function reveal(){if(done)return;done=true;cancelAnimationFrame(raf);$('fg').style.width='100%';st.classList.add('stop');const A=$('fA'),B=$('fB');if(B)B.style.display='none';A.style.transform='';
  const g=$('fglow');
  if(o.out==='success'){g.className='fglow ok';if(o.resImg)A.src=o.resImg;A.classList.add('pop');spark(36,['#ffffff','#fff2a8','#ffd36e','#f0a020'],30,false,900);SFX.play('fanfare');st.classList.add('flash');}
  else if(o.out==='destroy'){g.className='fglow bad';A.classList.add('shatter');spark(40,['#ff6a5a','#8a1a14','#444','#999'],20,false,900);SFX.play('crash');st.classList.add('quake');}
  else if(o.out==='down'){g.className='fglow warn';A.classList.add('crack');if(o.resImg)setTimeout(()=>{A.src=o.resImg;},300);SFX.play('clank');st.classList.add('quake');}
  else if(o.out==='protect'){g.className='fglow shield';A.classList.add('shield');spark(20,['#ffffff','#7cc8ff','#3b8beb'],40,false,800);SFX.play('heal');}
  else{g.className='fglow dull';A.classList.add('fizz');spark(12,['#888','#aaa','#666'],30,true,800);SFX.play('thud');}
  $('fres').innerHTML='<b class="serif" style="color:'+col+'">'+esc(o.head)+'</b><span>'+esc(o.sub||'')+'</span><button class="btn" id="fOk" style="background:#f0c75e;margin-top:6px">확인</button>';
  const sb=$('fSkip');if(sb)sb.remove();$('fOk').onclick=()=>{closeLayer();render();syncArena();};}
 $('fSkip').onclick=()=>{$('fg').style.width='100%';reveal();};}


/* ================= 선계 심부름 ================= */
// 그림을 바꿔 올리면 이 숫자를 올려 주세요 (브라우저에 남은 옛 그림 대신 새 그림을 불러와요)
const IMG_V='2';
const ERR=[{n:'아랫마을 장터',min:30,bags:1,boost:false,bg:'e/e1.png?'+IMG_V,d:'장터 상인들의 잔심부름'},{n:'대숲 오솔길',min:60,bags:1,boost:true,bg:'e/e2.png?'+IMG_V,d:'대숲 너머 약초꾼에게 짐 전하기 · 좋은 보따리 확률 업'},{n:'구름 고갯길',min:180,bags:2,boost:false,bg:'e/e3.png?'+IMG_V,d:'구름 고개 넘어 이웃 마을 배달'},{n:'선계 상단',min:480,bags:5,boost:false,bg:'e/e4.png?'+IMG_V,d:'선계 상단과 함께 하늘길 교역'}];
const BAGS=[{n:'일반 보따리',img:'i/bag1.png',lo:1,hi:5},{n:'상급 보따리',img:'i/bag2.png',lo:3,hi:10},{n:'최상급 보따리',img:'i/bag3.png',lo:10,hi:30}];
const ERRAND_DAILY=5;
// 단계가 높을수록 좋은 보따리. 최상급은 6단계부터, 12단계 10% (확률 업 20%)
function bagOdds(st,boost){let top=st>=6?.10*(st-5)/7:0,mid=.10+.03*(st-1);if(boost){top*=2;mid=Math.min(.7,mid*1.5);}return{top,mid,norm:Math.max(0,1-top-mid)};}
function rollBag(st,boost){const o=bagOdds(st,boost),r=rnd(),t=r<o.top?2:r<o.top+o.mid?1:0,b=BAGS[t];return{t,c:b.lo+Math.floor(rnd()*(b.hi-b.lo+1))};}
function finishErrand(p){const m=ERR[p.errand.m],bags=[];for(let k=0;k<m.bags;k++)bags.push(rollBag(p.st,m.boost));const total=bags.reduce((s,b)=>s+b.c,0);acc.coins+=total;p.errandResult={m:p.errand.m,bags,total};p.errand=null;}
function sendErrand(m){const p=P();if(!guard(p))return;if(p.errand)return toast('이미 심부름 중이에요.');if(p.sick!=null)return toast('아파서 심부름을 갈 수 없어요.');if(p.st<2)return toast('알은 심부름을 갈 수 없어요. 부화한 뒤에 보내 주세요.');
 const ad=accDaily();if((ad.errand||0)>=ERRAND_DAILY)return toast('오늘 심부름 횟수를 다 썼어요 (하루 '+ERRAND_DAILY+'번).');
 ad.errand=(ad.errand||0)+1;p.errand={m,start:now(),end:now()+ERR[m].min*MIN};SFX.play('whoosh');toast(NAMES[p.no]+'이(가) '+ERR[m].n+'(으)로 심부름을 떠났어요.');commit();}
function errandOverlay(){const i=acc.slots.findIndex(q=>q&&q.errandResult);if(i<0)return '';const p=acc.slots[i],r=p.errandResult,m=ERR[r.m];
 return '<div class="overlay"><div class="modal errres" role="dialog" aria-label="심부름 결과"><span style="font-size:12px;color:#f0c75e;letter-spacing:2px">'+esc(m.n)+' 심부름 완료</span><img class="px" src="'+img(p.no)+'" alt="" width="80" height="80" style="object-fit:contain"><b class="serif" style="font-size:20px;color:#fff8e6">'+esc(NAMES[p.no])+'이(가) 보따리를 들고 왔어요!</b><div class="bagrow">'+r.bags.map((b,k)=>'<button class="bagb t'+b.t+'" data-bagopen="'+k+'" title="'+BAGS[b.t].n+'"><img class="px" src="'+BAGS[b.t].img+'" alt=""><small>'+BAGS[b.t].n+'</small><span class="bagc">+'+b.c+'</span></button>').join('')+'</div><span class="muted" style="color:#c9d8d5">보따리를 눌러 열어 보세요</span><div class="bagtot" id="bagTot" style="display:none">코인 <b>+'+r.total+'</b></div><button class="btn" data-errack="'+i+'" style="background:#f0c75e">'+(r.bags.length>1?'모두 열고 ':'')+'받기</button></div></div>';}
function bagOpen(btn){if(btn.classList.contains('open'))return;btn.classList.add('open');const t=+[...btn.classList].find(c=>/^t\d$/.test(c)).slice(1);SFX.play(t===2?'fanfare':t===1?'coins':'buy');
 if(document.querySelectorAll('.bagb:not(.open)').length===0){const e=document.getElementById('bagTot');if(e)e.style.display='';}}
function vTrainHub(){const m=S.tmode||'train';return '<div class="tmode">'+[['train','선계수련'],['errand','선계 심부름'],['game','환수 야바위']].map(([k,n])=>'<button class="'+(m===k?'on':'')+'" data-tmode="'+k+'">'+n+'</button>').join('')+'</div>'+(m==='errand'?slotsBar()+vErrand():m==='game'?slotsBar()+vGame():vTrain());}
function vErrand(){const p=P();if(!p)return '<div class="card"><p class="muted">환수를 먼저 키워 주세요.</p></div>';const ad=accDaily(),left=ERRAND_DAILY-(ad.errand||0);
 let h='<div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><div><b class="serif" style="font-size:20px">선계 심부름</b><div class="muted">환수를 심부름 보내면 코인이 든 보따리를 가져와요. 심부름 중에는 수련·돌보기를 할 수 없어요.</div></div><b style="color:#2b5a5e">오늘 남은 심부름 '+left+' / '+ERRAND_DAILY+'</b></div>';
 h+='<div class="card" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><img class="px" src="'+img(p.no)+'" alt="" width="64" height="64" style="object-fit:contain"><div style="flex:1"><b>'+esc(NAMES[p.no])+'</b> <span class="muted">'+p.st+'단계</span><div class="muted" style="font-size:13px">보따리 확률 (보통 / 확률 업): '+[false,true].map(bo=>{const o=bagOdds(p.st,bo);return '일반 '+Math.round(o.norm*100)+'% · 상급 '+Math.round(o.mid*100)+'% · 최상급 '+(o.top*100).toFixed(1)+'%';}).join('  /  ')+(p.st<6?' <br>최상급 보따리는 6단계부터 나와요.':'')+'</div></div>'+
  (p.errand?'<div class="errnow"><b>'+esc(ERR[p.errand.m].n)+' 심부름 중</b><div class="stat" style="margin:4px 0"><div class="tr"><i style="width:'+Math.min(100,(now()-p.errand.start)/(p.errand.end-p.errand.start)*100)+'%;background:linear-gradient(90deg,#c9822b,#f0c98a)"></i></div></div><span class="muted">남은 시간 '+fmtDur(p.errand.end-now())+'</span></div>':'')+'</div>';
 h+='<div class="errgrid">'+ERR.map((m,k)=>'<div class="errc"><div class="errbg" style="background-image:url('+m.bg+')"><span class="errt">'+(m.min<60?m.min+'분':(m.min/60)+'시간')+'</span>'+(m.boost?'<span class="errup">확률 UP</span>':'')+'</div><div class="errb"><b class="serif" style="font-size:17px">'+esc(m.n)+'</b><small class="muted">'+esc(m.d)+'</small><div class="errbags">보따리 '+Array.from({length:m.bags}).map(()=>'<img class="px" src="i/bag1.png" alt="">').join('')+' ×'+m.bags+'</div>'+
  '<button class="btn teal" data-errand="'+k+'" '+(p.errand||p.train||p.sleep||p.sick!=null||p.st<2||left<=0?'disabled':'')+'>'+(p.errand?'심부름 중':p.train?'수련 중':p.sleep?'자는 중':p.sick!=null?'아파서 못 가요':p.st<2?'알은 못 가요':left<=0?'오늘 횟수 끝':'심부름 보내기')+'</button></div></div>').join('')+'</div>';
 const others=acc.slots.map((q,i)=>q&&q.errand&&i!==sel?'<div style="display:flex;gap:8px;align-items:center;margin:4px 0"><img class="px" src="'+img(q.no)+'" alt="" width="36" height="36" style="object-fit:contain"><b>'+esc(NAMES[q.no])+'</b><span class="muted">'+esc(ERR[q.errand.m].n)+' · '+fmtDur(q.errand.end-now())+'</span></div>':'').join('');
 if(others)h+='<div class="card"><h2>다른 환수 심부름</h2>'+others+'</div>';
 return h;}
/* ================= 환수 야바위 (하루 1번) ================= */
const YB_REWARD=5;
function ybLim(ad){return 1+(ad.gameBonus||0);}
function ybRetry(){const ad=accDaily();if((ad.game||0)<ybLim(ad))return toast('아직 야바위 기회가 남아 있어요.');if(!take('sec_yb'))return;ad.gameBonus=(ad.gameBonus||0)+1;SFX.play('magic');toast('야바위 기회가 1번 늘었어요!');commit();}
function vGame(){const p=P(),ad=accDaily(),used=(ad.game||0)>=ybLim(ad);
 return '<div class="card" style="text-align:center"><b class="serif" style="font-size:22px">환수 야바위</b><p class="muted" style="margin:4px 0 10px">선택한 환수가 그릇 하나에 숨어요. 그릇이 섞인 뒤 환수가 숨은 그릇을 찾으면 코인 <b>'+YB_REWARD+'개</b>! 하루 한 번 (야바위재도전비서로 추가).</p>'+
 (p?'<img class="px" src="'+img(p.no)+'" alt="" width="96" height="96" style="object-fit:contain"><div><b>'+esc(NAMES[p.no])+'</b>와(과) 함께 놀기</div>':'<p class="muted">환수가 없어요.</p>')+
 '<button class="btn teal" data-ybstart="1" style="margin-top:10px;min-height:48px;font-size:17px" '+(used||!p?'disabled':'')+'>'+(used?'오늘 기회 끝':'야바위 시작 ('+(ybLim(ad)-(ad.game||0))+'/'+ybLim(ad)+')')+'</button>'+(used?'<div style="margin-top:8px"><button class="btn sm" data-ybretry="1" '+((acc.inv.sec_yb||0)?'':'disabled')+'><img class="px" src="i/sec_yb.gif" alt="" style="width:22px;height:22px;vertical-align:-6px"> 야바위재도전비서 사용 (보유 '+(acc.inv.sec_yb||0)+')</button></div>':'')+'</div>';}
function ybStart(){const p=P(),ad=accDaily();if(!p)return;if((ad.game||0)>=ybLim(ad))return toast('오늘 야바위 기회를 다 썼어요. 야바위재도전비서로 한 번 더 할 수 있어요.');ad.game=(ad.game||0)+1;save();
 const L=document.getElementById('layer'),X=[18,50,82];let slot=[0,1,2],hid=Math.floor(rnd()*3),phase='show';
 L.innerHTML='<div class="overlay"><div class="ybox"><b class="serif" style="font-size:22px;color:#ffd36e">환수 야바위</b><div class="ystage" id="yst"><img class="px ypet" id="ypet" src="'+img(p.no)+'" alt="" style="left:'+X[hid]+'%">'+[0,1,2].map(k=>'<div class="ycup" id="yc'+k+'" data-cup="'+k+'" style="left:'+X[k]+'%"></div>').join('')+'</div><div class="ymsg" id="ymsg">'+esc(NAMES[p.no])+'이(가) 그릇 아래로 숨어요!</div><div id="ybtn"></div></div></div>';
 const $=id=>document.getElementById(id),cup=k=>$('yc'+k);
 [0,1,2].forEach(k=>cup(k).classList.add('up'));
 setTimeout(()=>{[0,1,2].forEach(k=>cup(k).classList.remove('up'));SFX.play('thud');},1100);
 const swaps=[];for(let n=0;n<11;n++){const a=Math.floor(rnd()*3);let b=Math.floor(rnd()*2);if(b>=a)b++;swaps.push([a,b]);}
 let n=0;const pet=$('ypet');
 function doSwap(){if(!$('yst'))return;if(n>=swaps.length){phase='pick';$('ymsg').textContent='어느 그릇에 숨었을까? 골라 보세요!';[0,1,2].forEach(k=>cup(k).classList.add('pickable'));return;}
  const [sa,sb]=swaps[n++],ca=slot[sa],cb=slot[sb],dur=Math.max(170,520-n*36);[ca,cb].forEach(c=>{cup(c).style.transition='left '+dur+'ms ease-in-out, transform '+dur+'ms ease-in-out';});
  slot[sa]=cb;slot[sb]=ca;cup(ca).style.left=X[sb]+'%';cup(cb).style.left=X[sa]+'%';cup(ca).style.transform='translate(-50%,-22%)';cup(cb).style.transform='translate(-50%,8%)';
  if(ca===hid||cb===hid){const nh=ca===hid?sb:sa;pet.style.transition='left '+dur+'ms ease-in-out';pet.style.left=X[nh]+'%';}
  SFX.play('tap');setTimeout(()=>{cup(ca).style.transform='';cup(cb).style.transform='';setTimeout(doSwap,60);},dur);}
 setTimeout(()=>{$('ymsg').textContent='섞는 중…';doSwap();},1800);
 $('yst').onclick=ev=>{const c=ev.target.closest('.ycup');if(!c||phase!=='pick')return;phase='done';const k=+c.dataset.cup,win=k===hid;[0,1,2].forEach(q=>{cup(q).classList.remove('pickable');});c.classList.add('up');if(!win)setTimeout(()=>cup(hid).classList.add('up'),500);
  if(win){acc.coins+=YB_REWARD;SFX.play('fanfare');$('ymsg').innerHTML='<b style="color:#ffd36e">찾았다!</b> 코인 +'+YB_REWARD;pet.classList.add('happy');}else{SFX.play('sad');$('ymsg').innerHTML='아쉬워요… 여기 숨어 있었어요! 내일 다시 도전해요.';}
  save();$('ybtn').innerHTML='<button class="btn" id="ybOk" style="background:#f0c75e;margin-top:8px">확인</button>';$('ybOk').onclick=()=>{closeLayer();render();};};}

function resultOverlay(){const i=acc.slots.findIndex(q=>q&&q.result);if(i<0)return '';const p=acc.slots[i];let res='';{const r=p.result;SFX.once(i+'|'+r.spot+'|'+r.exp+'|'+r.lvTo+'|'+r.out,r.out);if(r.lvTo>r.lvFrom)setTimeout(()=>SFX.play('lvup'),0);const EL_=r.encs||(r.enc?[r.enc]:[]);EL_.forEach((k,j)=>setTimeout(()=>SFX.play({luck:'coins',egg:'egg',gear:'equip',secret:'magic',susluck:'magic',blesssec:'up'}[k]||'heal'),900+j*600));const encN={bless:'성수의 축복 (경험치 ×1.5)',luck:'뜻밖의 행운 (코인 +'+r.coins+')',snack:'선녀의 간식 (포만감·목마름 +30)',lost:'길 잃은 기운 (무작위 오행 +2)',dosa:'도사의 집중수련 (레벨 +1)',egg:'환수 알 발견! ('+(r.eggBag?'가방에 보관했어요':'빈 슬롯에 알이 들어왔어요')+')',gear:'떠돌이 장비 (일반 '+(TN[r.gearT]||'장비')+' 획득)',secret:'비기 발견 (즉시완료비서 +1)',susluck:'수상한 행운 ('+(ITEMS[r.susK]?ITEMS[r.susK].n:'수상한 기운')+' +1)',blesssec:'축복비서 발견 (강화축복비서 +1)'};
  res='<div class="overlay"><div class="modal" role="dialog" aria-label="수련 결과"><span style="font-size:12px;color:#f0c75e;letter-spacing:2px">'+esc(r.spot)+' 수련 결과</span><span class="serif" style="font-size:34px;font-weight:700;color:'+(r.out==='fail'?'#c9d8d5':'#ffd36e')+'">'+{fail:'실패…',ok:'성공',great:'대성공!'}[r.out]+'</span><img class="px" src="'+img(p.no)+'" alt="" width="96" height="96" style="object-fit:contain">'+(EL_.length>1?'<span style="color:#ffd36e;font-weight:700">✨ 인카운트 '+EL_.length+'개 동시 발생!</span>':'')+EL_.map(k=>'<div class="chip" style="background:rgba(255,255,255,.08);border:1px solid rgba(240,199,94,.5);color:#fff8e6">인카운트 · '+encN[k]+'</div>').join('')+(r.noExp?'<span style="color:#ff8a7a;font-size:13px">전투력 차이가 너무 커서 경험치를 얻지 못했어요</span>':'')+'<b style="font-size:22px">+'+fmt(r.exp)+' EXP</b><span class="muted" style="color:#c9d8d5">Lv '+r.lvFrom+' → '+r.lvTo+(r.max?' (MAX)':'')+'</span><button class="btn" data-ack="'+i+'" style="background:#f0c75e">확인</button></div></div>';}return res;}

/* ================= 공통 렌더 / 로그인 ================= */
const MODE=(document.body.dataset.mode||'player');

/* ================= 사운드 (Web Audio로 직접 합성 · 파일 없음) ================= */
const SFX=(()=>{
 let ctx=null,fx=null,bg=null,bgT=null,last=0,lastKey='';
 const pref=k=>{try{return localStorage.getItem('hs_'+k)!=='0';}catch(e){return true;}};
 const st={sfx:pref('sfx'),bgm:pref('bgm')};
 function init(){if(ctx){if(ctx.state==='suspended')ctx.resume();return true;}const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return false;ctx=new AC();
  const out=ctx.createDynamicsCompressor();out.connect(ctx.destination);fx=ctx.createGain();fx.gain.value=st.sfx?1:0;fx.connect(out);bg=ctx.createGain();bg.gain.value=st.bgm?1:0;bg.connect(out);if(st.bgm)startBgm();return true;}
 function tone(f,d,o={}){const t=ctx.currentTime+(o.at||0),g=ctx.createGain(),os=ctx.createOscillator();os.type=o.type||'sine';os.frequency.setValueAtTime(f,t);if(o.to)os.frequency.exponentialRampToValueAtTime(o.to,t+d);
  const v=o.vol||.15,a=o.atk||.005;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+a);g.gain.exponentialRampToValueAtTime(.0001,t+d);os.connect(g);g.connect(o.dest||fx);os.start(t);os.stop(t+d+.05);}
 let nb=null;function noise(d,o={}){if(!nb){nb=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate);const c=nb.getChannelData(0);for(let i=0;i<c.length;i++)c[i]=Math.random()*2-1;}
  const t=ctx.currentTime+(o.at||0),s=ctx.createBufferSource(),f=ctx.createBiquadFilter(),g=ctx.createGain();s.buffer=nb;s.loop=true;f.type=o.ft||'lowpass';f.frequency.setValueAtTime(o.f||1200,t);if(o.fto)f.frequency.exponentialRampToValueAtTime(o.fto,t+d);f.Q.value=o.q||1;
  const v=o.vol||.15;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+(o.atk||.005));g.gain.exponentialRampToValueAtTime(.0001,t+d);s.connect(f);f.connect(g);g.connect(fx);s.start(t);s.stop(t+d+.05);}
 const seq=(ns,step,o)=>ns.forEach((f,i)=>f&&tone(f,o.d||step*1.6,Object.assign({},o,{at:(o.at||0)+i*step})));
 const N={C4:262,D4:294,E4:330,G4:392,A4:440,C5:523,D5:587,E5:659,G5:784,A5:880,C6:1047,E6:1319,G6:1568,C7:2093};
 const S={
  tap:()=>tone(720,.06,{vol:.05,to:820}),
  charge:()=>{tone(180,2.6,{to:900,type:'triangle',vol:.05,atk:.4});for(let k=0;k<10;k++)tone(500+k*90,.06,{type:'square',vol:.025+k*.003,at:k*k*.026});},
  nope:()=>{tone(240,.1,{type:'square',vol:.04});tone(180,.14,{type:'square',vol:.04,at:.09});},
  coins:()=>{[0,.09,.18].forEach((a,i)=>{tone(988+i*60,.08,{type:'square',vol:.05,at:a});tone(1319+i*80,.3,{type:'square',vol:.05,at:a+.06});});},
  buy:()=>{noise(.05,{ft:'highpass',f:3000,vol:.08});tone(1568,.12,{type:'triangle',vol:.1,at:.04});tone(2093,.4,{type:'triangle',vol:.09,at:.12});},
  munch:()=>{[0,.13,.26].forEach(a=>noise(.07,{f:900,vol:.18,at:a}));tone(N.G5,.15,{type:'triangle',vol:.1,at:.42});tone(N.C6,.3,{type:'triangle',vol:.1,at:.52});},
  drip:()=>{tone(500,.14,{to:1500,vol:.14});tone(700,.16,{to:1900,vol:.1,at:.2});},
  bubble:()=>{for(let i=0;i<7;i++){const f=500+Math.random()*700;tone(f,.07,{to:f*1.8,vol:.09,at:i*.06});}},
  pat:()=>{tone(N.E5,.16,{type:'triangle',vol:.13});tone(N.A5,.3,{type:'triangle',vol:.13,at:.12});},
  play:()=>seq([N.C5,N.E5,N.G5,N.C6,N.G5,N.C6,N.E6],.075,{type:'triangle',vol:.11}),
  sleep:()=>seq([N.G5,N.E5,N.D5,N.C5],.28,{vol:.1,atk:.04,d:.6}),
  wake:()=>seq([N.C5,N.E5,N.G5,N.C6],.09,{type:'triangle',vol:.1}),
  heal:()=>{seq([N.C6,N.E6,N.G6,N.C7],.07,{vol:.07,d:.6});seq([N.G5,N.C6,N.E6],.09,{vol:.05,at:.05,d:.6});},
  thud:()=>{tone(140,.35,{to:55,vol:.25});noise(.2,{f:400,vol:.1});},
  sad:()=>seq([N.C5,466,N.G4,370],.22,{type:'triangle',vol:.1,d:.4}),
  whoosh:()=>{noise(.6,{ft:'bandpass',f:400,fto:2400,q:2,vol:.22,atk:.15});tone(300,.5,{to:900,vol:.04,atk:.1});},
  magic:()=>{for(let i=0;i<9;i++)tone(800+i*170+Math.random()*60,.25,{vol:.05,at:i*.04});},
  up:()=>{for(let i=0;i<8;i++)tone(N.C5*Math.pow(2,i/5),.2,{type:'triangle',vol:.08,at:i*.045});tone(N.C7,.6,{vol:.06,at:.38});},
  clank:()=>{tone(220,.12,{type:'square',vol:.07});noise(.15,{ft:'highpass',f:2500,vol:.1});tone(165,.3,{type:'triangle',vol:.1,at:.08});},
  crash:()=>{noise(.9,{f:3000,fto:200,vol:.3});tone(110,.6,{to:40,vol:.25});tone(90,.5,{type:'square',vol:.05,at:.05});},
  equip:()=>{tone(1250,.12,{type:'triangle',vol:.1});tone(1870,.25,{type:'triangle',vol:.07,at:.05});},
  egg:()=>{S.magic();tone(N.C6,.8,{vol:.08,at:.35});tone(N.G6,.8,{vol:.05,at:.4});},
  mystic:()=>[N.C4,N.G4,N.D5,N.A5].forEach((f,i)=>tone(f,1.6,{vol:.06,atk:.4,at:i*.12})),
  huh:()=>{tone(N.E5,.15,{type:'triangle',vol:.1});tone(N.A5,.25,{type:'triangle',vol:.1,at:.18,to:N.C6});},
  boom:()=>{noise(1.1,{f:5000,fto:150,vol:.3});tone(70,.9,{to:35,vol:.3});S.magic();},
  fanfare:()=>{seq([N.C5,N.E5,N.G5],.11,{type:'square',vol:.06});tone(N.C6,.9,{type:'square',vol:.06,at:.33});tone(N.E6,.9,{type:'triangle',vol:.05,at:.33});tone(N.C4,.9,{type:'triangle',vol:.12,at:.33});},
  great:()=>{S.fanfare();S.magic();},
  ok:()=>{tone(N.A5,.6,{type:'triangle',vol:.1});tone(N.E6,.8,{vol:.06,at:.08});},
  fail:()=>S.sad(),
  lvup:()=>seq([N.G5,N.C6,N.E6,N.G6],.08,{type:'square',vol:.05,at:.5}),
  sick:()=>{tone(300,.6,{to:200,type:'triangle',vol:.08});tone(310,.6,{to:190,type:'triangle',vol:.06,at:.05});}
 };
 function play(k){if(MODE!=='player'||!st.sfx||!S[k])return;if(!init())return;if(k!=='tap')last=performance.now();try{S[k]();}catch(e){}}
 function evoBlip(t){if(!st.sfx||!init())return;tone(300+t*.25,.05,{type:'triangle',vol:.07});}
 // 선계 배경음: 오음계로 가야금 뜯듯 잔잔하게 + 낮은 바탕음
 const PENT=[N.C4,N.D4,N.E4,N.G4,N.A4,N.C5,N.D5,N.E5,N.G5,N.A5];let nextT=0,pad=0;
 function startBgm(){if(bgT||!ctx)return;nextT=ctx.currentTime+.3;pad=0;bgT=setInterval(()=>{if(document.hidden)return;if(nextT<ctx.currentTime)nextT=ctx.currentTime+.1;while(nextT<ctx.currentTime+1){const at=nextT-ctx.currentTime,f=PENT[Math.floor(Math.random()*PENT.length)];tone(f,1.8,{type:'triangle',vol:.035,dest:bg,at});if(Math.random()<.3)tone(f*2,1.2,{vol:.012,dest:bg,at:at+.02});
   if(pad<=nextT){const r=[N.C4,N.A4/2,N.G4/2][Math.floor(Math.random()*3)];tone(r/2,7,{vol:.03,atk:2,dest:bg,at});tone(r*.75,7,{vol:.015,atk:2.5,dest:bg,at});pad=nextT+6;}
   nextT+=[.45,.6,.9,1.2,1.8][Math.floor(Math.random()*5)];}},250);}
 function toggle(k){st[k]=!st[k];try{localStorage.setItem('hs_'+k,st[k]?'1':'0');}catch(e){}if(!init())return;const g=k==='sfx'?fx:bg;g.gain.setTargetAtTime(st[k]?1:0,ctx.currentTime,.05);if(k==='bgm'){if(st.bgm)startBgm();else{clearInterval(bgT);bgT=null;}}if(k==='sfx'&&st.sfx)S.tap();}
 function nopeMaybe(){if(performance.now()-last>200)play('nope');}
 function once(key,k){if(key===lastKey)return;lastKey=key;setTimeout(()=>play(k),0);}
 return {play,evoBlip,toggle,init,st,nopeMaybe,once};
})();
document.addEventListener('pointerdown',()=>{if(MODE==='player')SFX.init();},{capture:true});
let HS=null, unsubMe=null;
function normAcc(d){const a=JSON.parse(JSON.stringify(d));a.notice=a.notice||[null,null,null];a.gear=a.gear||[];a.inv=a.inv||{};a.dex=a.dex||{};a.slots=a.slots||[null,null,null];a.mail=a.mail||[];a.offset=0;return a;}
function render(){
 const app=document.getElementById('app');
 if(!acc){app.innerHTML=loginView(S.loginMsg||'');return;}
 if(MODE==='admin'){app.innerHTML=isAdmin()?adminHeader()+'<main>'+adminBody()+'</main>':'<main><div class="card">운영자 계정이 아니에요. <button class="btn sm" data-a2="logout">로그아웃</button></div></main>';return;}
 const keep=document.activeElement&&document.activeElement.id;
 const body={home:vHome,train:vTrainHub,gear:vGear,bag:vBag,shop:vShop,code:vCode,dex:vDex,pvp:vArena,boss:vBoss,mail:vMail}[view]||vHome;
 app.innerHTML=header()+'<main>'+body()+'</main>'+resultOverlay()+errandOverlay();
 if(keep){const el=document.getElementById(keep);if(el)el.focus();}
}
function loginView(msg){
 const boot=MODE==='admin'&&S.needBoot;
 return '<header class="sky" style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:16px"><div style="display:flex;flex-direction:column;gap:14px;width:min(460px,100%)"><form data-form="login" class="card" style="display:flex;flex-direction:column;gap:12px;border:2px solid var(--gold)"><div style="text-align:center"><h1 style="margin:0"><img src="title.png" alt="starz realm 환수키우기" style="width:100%;height:auto;display:block"></h1>'+(MODE==='admin'?'<p class="serif" style="margin:6px 0 0;font-size:18px;font-weight:700;color:#2b5a5e">운영자 사이트</p>':'')+'</div><label class="f">아이디<input type="text" name="id" autocomplete="username" required></label><label class="f">비밀번호<input type="password" name="pw" autocomplete="current-password" required></label><button class="btn teal" style="min-height:48px">들어가기</button>'+(msg?'<p class="warn" style="margin:0">'+esc(msg)+'</p>':'')+'<p class="muted" style="margin:0">계정은 운영자가 발급해요.</p></form>'+
 (boot?'<form data-form="boot" class="card adm" style="display:flex;flex-direction:column;gap:10px"><b class="serif" style="font-size:18px">첫 메인 운영자 만들기</b><p class="muted" style="margin:0">아직 운영자가 없어요. 처음 한 번만 나오는 화면이에요. 여기서 만든 계정이 메인 운영자가 돼요.</p><label class="f">아이디 (영문·숫자 3~20자)<input type="text" name="id" required></label><label class="f">비밀번호 (6자 이상)<input type="password" name="pw" minlength="6" required></label><label class="f">마크 닉네임<input type="text" name="nick"></label><button class="btn">메인 운영자 만들기</button></form>':'')+'</div></header>';}
async function loadAccount(uid){
 const d=await db.doc('accounts/'+uid).get();
 if(!d.exists){S.loginMsg='계정 정보가 없어요. 운영자에게 문의하세요.';acc=null;await HS.signOut();return render();}
 if(d.data().banned){S.loginMsg='정지된 계정이에요. 운영자에게 문의하세요.';acc=null;await HS.signOut();return render();}
 acc=normAcc(d.data());acc.uid=uid;S.loginMsg='';
 if(MODE==='player'){const ch=tickAll();render();if(ch)save();
  arenaKey=null;PV.list=null;PV.logs=null;PV.loaded=false;syncArena();
  {const st=attCheck();if(st){save();render();attModal(true);}}
  if(unsubMe)unsubMe();unsubMe=db.doc('accounts/'+uid).onSnapshot(s=>{if(!s.exists||!acc||s.metadata&&s.metadata.hasPendingWrites)return;const r=s.data();if((r.rev||0)>(acc.rev||0)){if(r.banned){toast('정지된 계정이에요.');return logout();}const before=(acc.mail||[]).length;acc=normAcc(r);acc.uid=uid;tickAll();render();if(acc.mail.length>before){SFX.play('egg');toast('우편이 도착했어요! 우편함을 확인해 주세요.');}else toast('운영자가 계정 정보를 바꿨어요.');}},()=>{});}
 else{render();if(isAdmin())AD.loadList();}
}
async function logout(){if(unsubMe){unsubMe();unsubMe=null;}acc=null;AS.tgt=null;AS.list=null;try{await HS.signOut();}catch(e){}render();}

/* ================= 운영자 사이트 ================= */
const AS={tab:'users',tgt:null,list:null,eggs:null,logs:null,newPw:'',codeGen:'',slot:0};
function adminHeader(){const tabs=[['users','유저 관리'],['eggs','알 코드'],['mail','우편'],['boss','월드보스'],['event','이벤트·공지'],['tools','코드 테스트'],['logs','변경 기록']];if(isMain())tabs.splice(1,0,['make','계정 만들기']);
 return '<header class="sky"><div class="bar"><span class="logo">환수 운영자</span><nav class="main" aria-label="운영자 메뉴">'+tabs.map(([k,n])=>'<button data-xtab="'+k+'" class="'+(AS.tab===k?'on':'')+'">'+n+'</button>').join('')+'</nav><span style="color:#fff8e6;font-size:13px">'+esc(acc.nick||acc.id)+' ('+(isMain()?'메인 운영자':'보조 운영자')+')</span><button class="btn ghost sm" data-a2="logout">로그아웃</button></div></header>';}
function adminBody(){return {users:aUsers,make:aMake,eggs:aEggs,mail:aMail,boss:aBoss,event:aEvent,tools:aTools,logs:aLogs}[AS.tab]();}
const roleN={main:'메인',sub:'보조',player:'플레이어'};
function aUsers(){
 const L=AS.list||[];const tot=L.reduce((s,a)=>s+(a.coins||0),0),pets=L.reduce((s,a)=>s+(a.slots||[]).filter(Boolean).length,0);
 let h='<div class="row"><div class="card" style="flex:1 1 180px"><span class="muted">계정 수</span><div class="serif" style="font-size:28px;font-weight:700">'+L.length+'</div></div><div class="card" style="flex:1 1 180px"><span class="muted">서버 전체 코인</span><div class="serif" style="font-size:28px;font-weight:700">'+fmt(tot)+'</div></div><div class="card" style="flex:1 1 180px"><span class="muted">키우는 환수</span><div class="serif" style="font-size:28px;font-weight:700">'+pets+'</div></div></div>';
 h+='<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><h2 style="margin:0">유저 목록</h2><div style="display:flex;gap:8px"><input type="text" id="xFind" placeholder="아이디·닉네임 검색" value="'+esc(AS.find||'')+'"><button class="btn soft sm" data-x="find">검색</button><button class="btn soft sm" data-x="reload">새로고침</button></div></div><div style="overflow-x:auto"><table class="t" style="margin-top:10px"><tr><th>아이디</th><th>닉네임</th><th>권한</th><th>코인</th><th>환수</th><th>상태</th><th></th></tr>'+
 L.filter(a=>!AS.find||(a.id+' '+a.nick).toLowerCase().includes(AS.find.toLowerCase())).map(a=>'<tr><td><b>'+esc(a.id)+'</b></td><td>'+esc(a.nick)+'</td><td>'+(roleN[a.role]||'')+'</td><td>'+fmt(a.coins||0)+'</td><td>'+(a.slots||[]).filter(Boolean).map(q=>NAMES[q.no]+' '+q.st+'단계').join(', ')+'</td><td>'+(a.banned?'<b style="color:#b02a1f">정지</b>':'정상')+'</td><td><button class="btn sm '+(AS.tgt&&AS.tgt.uid===a.uid?'teal':'')+'" data-xpick="'+esc(a.uid)+'">관리</button></td></tr>').join('')+'</table></div></div>';
 if(AS.tgt)h+=aDetail();
 return h;}
function aDetail(){const t=AS.tgt,main=isMain();
 let h='<div class="card adm"><div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;align-items:baseline"><h2 style="margin:0">'+esc(t.id)+' <span class="muted">('+esc(t.nick)+' · '+(roleN[t.role]||'')+' · 플레이어 번호 '+(t.playerNo||'없음')+' · 코드 회차 '+(t.lastNonce||0)+')</span></h2><button class="btn soft sm" data-x="close">닫기</button></div>';
 h+='<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:12px"><b style="font-size:15px">코인 '+fmt(t.coins||0)+'</b><label class="f">수량<input type="number" id="xCoin" value="100" style="width:100px"></label><button class="btn sm" data-x="coinAdd">추가</button><button class="btn soft sm" data-x="coinSub">차감</button><button class="btn soft sm" data-x="coinSet">이 값으로 설정</button><label class="f" style="flex:1;min-width:160px">메모 (기록에 남아요)<input type="text" id="xMemo" placeholder="예: 버그 보상"></label></div>';
 h+='<h3 class="serif" style="margin:18px 0 6px">대전 · 마패</h3>'+(AS.tgtArena===undefined?'<p class="muted">불러오는 중…</p>':!AS.tgtArena?'<p class="muted">아직 대전에 참여하지 않았어요 (대표 환수 미지정).</p>':(()=>{const e=aEff(AS.tgtArena),pt=AS.tgtArena.pet;return '<div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap"><img class="px" src="i/mapae.png" alt="" width="40" height="40"><b style="font-size:22px">'+e.m+'</b><span class="muted">이번 주 · 공격 '+e.w+'승 '+e.l+'패 · 방어 '+e.dw+'승 '+e.dl+'패'+(pt?' · 대표 '+esc(NAMES[pt.no])+' (전투력 '+fmt(pt.cp)+')':' · 대표 환수 없음')+'</span></div><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:8px"><label class="f">마패<input type="number" id="xMedal" value="10" min="0" style="width:90px"></label><button class="btn sm" data-x="medalAdd">추가</button><button class="btn soft sm" data-x="medalSub">차감</button><button class="btn soft sm" data-x="medalSet">이 값으로 설정</button><button class="btn soft sm" data-x="medalReset">100으로 초기화</button></div><p class="muted" style="margin:4px 0 0">이번 주 점수만 바뀌어요. 위의 메모 칸에 적은 내용이 변경 기록에 같이 남아요.</p>';})());
 h+='<h3 class="serif" style="margin:18px 0 6px">우편 보내기</h3>'+mailForm('mU')+'<div style="margin-top:8px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><button class="btn teal sm" data-x="sendOne">이 유저에게 보내기</button>'+(t.mail&&t.mail.length?'<span class="muted">안 받은 우편 '+t.mail.length+'개: '+t.mail.map(m=>esc(m.title||'우편')).join(', ')+'</span>':'')+'</div>';
 if(!main)return h+'<p class="muted" style="margin-top:10px">보조 운영자는 코인과 우편만 다룰 수 있어요.</p></div>';
 const itemOpts=Object.entries(ITEMS).map(([k,v])=>'<option value="'+k+'">'+v.n+'</option>').join('');
 h+='<h3 class="serif" style="margin:18px 0 6px">아이템창</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">아이템<select id="xItem">'+itemOpts+'</select></label><label class="f">수량<input type="number" id="xQty" value="10" min="1" style="width:80px"></label><button class="btn sm" data-x="itemGive">지급</button></div><div class="items" style="margin-top:10px">'+Object.entries(ITEMS).map(([k,v])=>'<label class="item" style="cursor:default"><img class="px" src="'+v.img+'" alt=""><span class="t"><b>'+v.n+'</b></span><input type="number" min="0" data-xinv="'+k+'" value="'+(t.inv[k]||0)+'" style="width:72px"></label>').join('')+'</div><div style="margin-top:8px"><button class="btn sm" data-x="invSave">아이템 수량 저장</button></div>';
 h+='<h3 class="serif" style="margin:18px 0 6px">장비</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">종류<select id="xEqT"><option value="w">무기</option><option value="a">방어구</option><option value="s">보조무기</option></select></label><label class="f">등급<select id="xEqG">'+GN.map((n,i)=>'<option value="'+i+'">'+n+'</option>').join('')+'</select></label><label class="f">강화<input type="number" id="xEqP" value="0" min="0" max="9" style="width:70px"></label><button class="btn sm" data-x="eqGive">장비 지급</button></div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;margin-top:10px">'+(t.gear.length?t.gear.map(g=>'<div class="gear g'+g.g+'"><img class="px" src="eq/'+g.g+'_'+g.t+'.gif" alt="" style="width:56px;height:56px"><b class="c'+g.g+'" style="font-size:12px">'+GN[g.g]+' '+TN[g.t]+' +'+g.p+'</b><button class="btn red sm" data-xgdel="'+esc(g.u)+'">회수</button></div>').join(''):'<p class="muted">장비가 없어요.</p>')+'</div>';
 const p=t.slots[AS.slot];
 h+='<h3 class="serif" style="margin:18px 0 6px">환수</h3><div class="slots">'+[0,1,2].map(i=>'<button class="slot'+(AS.slot===i?' on':'')+'" data-xslot="'+i+'">'+(t.slots[i]?'<img class="px" src="'+img(t.slots[i].no)+'" alt=""><span><b>'+NAMES[t.slots[i].no]+'</b><small>'+t.slots[i].st+'단계 Lv '+t.slots[i].lv+(t.slots[i].sick!=null?' · 아픔':'')+(t.slots[i].train?' · 수련 중':'')+'</small></span>':'<span style="padding:12px"><b>빈 슬롯 '+(i+1)+'</b>'+(t.notice&&t.notice[i]?'<small>'+esc(t.notice[i])+'</small>':'')+'</span>')+'</button>').join('')+'</div>';
 if(p){const formOpts=NAMES.map((n,i)=>'<option value="'+i+'" '+(p.no===i?'selected':'')+'>'+String(i).padStart(2,'0')+' '+n+' ('+FORMS[i].st+'단계)</option>').join('');
  h+='<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:12px"><label class="f">환수 종류<select id="xNo">'+formOpts+'</select></label><label class="f">레벨<input type="number" id="xLv" value="'+p.lv+'" min="1" max="99" style="width:70px"></label>'+EL.map(e=>'<label class="f">'+ELK[e]+'<input type="number" id="xEl_'+e+'" value="'+p.el[e]+'" min="0" max="50" style="width:64px"></label>').join('')+'</div><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:8px">'+[['hu','포만감'],['th','목마름'],['cl','청결도'],['aff','호감도'],['en','행동력']].map(([k,n])=>'<label class="f">'+n+'<input type="number" id="xS_'+k+'" value="'+Math.round(p[k])+'" min="0" style="width:72px"></label>').join('')+'<button class="btn teal sm" data-x="petApply">적용</button></div><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn sm" data-xp="finish">수련·심부름 즉시 완료</button><button class="btn sm" data-xp="wake">깨우기</button><button class="btn sm" data-xp="cure">병 치료</button><button class="btn sm" data-xp="unlock">오행 고정 풀기</button><button class="btn sm" data-xp="daily">오늘 횟수 초기화</button><button class="btn sm red" data-xp="del">환수 삭제</button></div>';}
 else h+='<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><button class="btn teal sm" data-xp="egg">이 슬롯에 알 넣기</button><button class="btn sm" data-xp="yyegg">음양알 넣기</button>'+(t.notice&&t.notice[AS.slot]?'<span class="muted">'+esc(t.notice[AS.slot])+'</span>':'')+'</div><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:8px"><label class="f">복구할 환수<select id="xRestore">'+NAMES.map((n,i)=>'<option value="'+i+'">'+String(i).padStart(2,'0')+' '+n+'</option>').join('')+'</select></label><label class="f">레벨<input type="number" id="xRLv" value="1" min="1" style="width:70px"></label><button class="btn sm" data-x="restore">환수 복구</button><span class="muted">소멸·실수 해방 복구용</span></div>';
 const owned=Object.keys(t.dex).map(Number).sort((a,b)=>a-b);
 h+='<h3 class="serif" style="margin:18px 0 6px">도감 ('+owned.length+'/'+NAMES.length+')</h3><p class="muted" style="margin:0 0 6px">'+(owned.length?owned.map(i=>String(i).padStart(2,'0')+' '+NAMES[i]+(t.dex[i].freed?'(解)':'')).join(', '):'비어 있어요')+'</p><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">도감 번호<input type="number" id="xDex" min="0" max="'+(NAMES.length-1)+'" value="0" style="width:80px"></label><button class="btn sm" data-x="dexAdd">채우기</button><button class="btn soft sm" data-x="dexDel">지우기</button><button class="btn soft sm" data-x="dexFree">解 표시 켜기/끄기</button></div>';
 h+='<h3 class="serif" style="margin:18px 0 6px">계정</h3><div style="display:flex;gap:8px;flex-wrap:wrap">'+(t.uid!==acc.uid?'<button class="btn soft sm" data-x="ban">'+(t.banned?'정지 해제':'계정 정지')+'</button><button class="btn red sm" data-x="delAcc">게임 데이터 삭제</button>':'')+'</div><p class="muted">비밀번호를 잊은 유저는 Firebase 콘솔 → Authentication에서 그 사용자를 삭제한 뒤, "계정 만들기"에서 같은 아이디로 다시 만들면 게임 데이터가 그대로 이어져요.</p></div>';
 return h;}
function mailForm(px,m){m=m||{};const its=Object.entries(m.items||{});const g=(m.gear||[])[0]||null;
 const itemOpts=sel=>'<option value="">없음</option>'+Object.entries(ITEMS).map(([k,v])=>'<option value="'+k+'"'+(sel===k?' selected':'')+'>'+v.n+'</option>').join('');
 return '<div class="mform"><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f" style="flex:1;min-width:180px">제목<input type="text" id="'+px+'T" maxlength="40" value="'+esc(m.title||'')+'" placeholder="예: 가입을 환영해요!"></label><label class="f">코인<input type="number" id="'+px+'C" min="0" value="'+(m.coins||0)+'" style="width:90px"></label><label class="f">환수 알<input type="number" id="'+px+'E" min="0" max="3" value="'+(m.eggs||0)+'" style="width:64px"></label><label class="f">음양알<input type="number" id="'+px+'Y" min="0" max="3" value="'+(m.yyEggs||0)+'" style="width:64px"></label></div>'+
 '<label class="f" style="margin-top:8px">내용<textarea id="'+px+'M" rows="2" maxlength="300" style="width:100%;resize:vertical">'+esc(m.msg||'')+'</textarea></label>'+
 '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:8px">'+[0,1,2].map(i=>'<label class="f">아이템 '+(i+1)+'<select id="'+px+'I'+i+'">'+itemOpts(its[i]?its[i][0]:'')+'</select></label><label class="f">수량<input type="number" id="'+px+'Q'+i+'" min="1" value="'+(its[i]?its[i][1]:1)+'" style="width:64px"></label>').join('')+'</div>'+
 '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:8px"><label class="f">장비<select id="'+px+'GT"><option value="">없음</option>'+[['w','무기'],['a','방어구'],['s','보조무기']].map(([k,n])=>'<option value="'+k+'"'+(g&&g.t===k?' selected':'')+'>'+n+'</option>').join('')+'</select></label><label class="f">등급<select id="'+px+'GG">'+GN.map((n,i)=>'<option value="'+i+'"'+(g&&g.g===i?' selected':'')+'>'+n+'</option>').join('')+'</select></label><label class="f">강화<input type="number" id="'+px+'GP" min="0" max="9" value="'+(g?g.p:0)+'" style="width:64px"></label></div></div>';}
function readMail(px){const v=id=>document.getElementById(px+id);const items={};[0,1,2].forEach(i=>{const k=v('I'+i).value,n=Math.max(1,+v('Q'+i).value||1);if(k)items[k]=(items[k]||0)+n;});
 const gt=v('GT').value,gg=+v('GG').value,gear=gt?[{t:gt,g:gg,p:Math.min(MAXP[gg],Math.max(0,+v('GP').value||0))}]:[];
 return {title:v('T').value.trim(),msg:v('M').value.trim(),coins:Math.max(0,Math.floor(+v('C').value||0)),eggs:Math.min(3,Math.max(0,Math.floor(+v('E').value||0))),yyEggs:Math.min(3,Math.max(0,Math.floor(+v('Y').value||0))),items,gear};}
function stampMail(m){return Object.assign({},m,{id:newMailId(),t:Date.now(),from:m.from||'운영자'});}
function aMail(){const w=cfg.welcome||{};const main=isMain();
 return '<div class="card adm" style="max-width:820px"><h2>전체 우편 보내기</h2><p class="muted">모든 플레이어 우편함에 똑같이 들어가요. 정지된 계정은 빠져요.</p>'+mailForm('mA')+'<div style="display:flex;gap:10px;align-items:center;margin-top:10px;flex-wrap:wrap"><label style="display:flex;gap:6px;align-items:center"><input type="checkbox" id="mAadm"> 운영자 계정에도 보내기</label><button class="btn teal sm" data-x="sendAll">전체 발송</button></div></div>'+
 '<div class="card adm" style="max-width:820px;margin-top:14px"><h2>가입 보상</h2><p class="muted">"계정 만들기"로 <b>새로</b> 만든 계정의 우편함에 자동으로 들어가요. (비밀번호 재발급으로 다시 만든 계정은 받지 않아요)</p>'+(main?'':'<p class="muted">보조 운영자는 볼 수만 있어요.</p>')+'<label style="display:flex;gap:6px;align-items:center;margin-bottom:8px"><input type="checkbox" id="mWon" '+(w.on?'checked':'')+(main?'':' disabled')+'> 가입 보상 켜기</label>'+mailForm('mW',w)+(main?'<div style="margin-top:10px"><button class="btn sm" data-x="saveWelcome">가입 보상 저장</button></div>':'')+(w.on?'<p class="ok" style="margin-top:8px">지금 설정: '+esc(w.title||'(제목 없음)')+' — '+esc(mailParts(w).join(', ')||'보상 없음')+'</p>':'<p class="muted" style="margin-top:8px">지금은 꺼져 있어요.</p>')+'</div>';}
function aMake(){return '<div class="card adm" style="max-width:640px"><h2>계정 만들기</h2><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">아이디 (영문·숫자 3~20자)<input type="text" id="nId" style="width:160px"></label><label class="f">마크 닉네임<input type="text" id="nNick" style="width:160px"></label><label class="f">권한<select id="nRole"><option value="player">플레이어</option><option value="sub">보조 운영자</option><option value="main">메인 운영자</option></select></label><button class="btn teal sm" data-x="mkAcc">만들기</button></div>'+(AS.newPw?'<p class="ok" style="margin-top:10px;font-size:15px">'+esc(AS.newPw)+'</p>':'')+'<p class="muted">비밀번호는 자동으로 만들어져요. 이 화면을 벗어나면 다시 볼 수 없으니 바로 DM으로 전달하세요. 예전에 쓰던 아이디로 다시 만들면 남아 있던 게임 데이터가 새 계정으로 옮겨져요.</p></div>';}
function aEggs(){return '<div class="card adm"><h2>알 코드 발급</h2><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">대상 아이디 (비우면 누구나)<input type="text" id="egT" style="width:160px"></label><label class="f">알 종류<select id="egK"><option value="">일반 알</option><option value="yy">음양알</option></select></label><label class="f">개수<input type="number" id="egN" value="1" min="1" max="20" style="width:70px"></label><button class="btn sm" data-x="mkEgg">발급</button><button class="btn soft sm" data-x="loadEggs">목록 새로고침</button></div>'+(AS.eggs?'<div style="overflow-x:auto"><table class="t" style="margin-top:10px"><tr><th>코드</th><th>대상</th><th>상태</th><th>발급</th><th></th></tr>'+AS.eggs.map(e=>'<tr><td><b>'+esc(e.id)+'</b>'+(e.kind==='yy'?' <span class="eltag" style="background:#ece6ff;color:#6a4ad0;border-color:#6a4ad0">음양알</span>':'')+'</td><td>'+esc(e.target||'누구나')+'</td><td>'+(e.used?'사용됨 ('+esc(e.by)+')':'미사용')+'</td><td>'+esc(e.from||'')+' · '+new Date(e.t).toLocaleDateString('ko-KR')+'</td><td>'+(e.used?'':'<button class="btn red sm" data-xegdel="'+esc(e.id)+'">취소</button>')+'</td></tr>').join('')+'</table></div>':'')+'</div>';}
function aEvent(){return '<div class="card adm" style="max-width:640px"><h2>이벤트 · 공지</h2><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">경험치 배율<select id="cfgExp">'+[1,1.5,2,3].map(v=>'<option '+((cfg.expMult||1)==v?'selected':'')+'>'+v+'</option>').join('')+'</select></label>'+(isMain()?'<label class="f" style="flex:1;min-width:220px">상단 공지 (비우면 숨김)<input type="text" id="cfgNotice" value="'+esc(cfg.notice||'')+'"></label>':'')+'<button class="btn sm" data-x="saveCfg">저장</button></div><p class="muted">'+(cfg.by?'마지막 변경: '+esc(cfg.by):'')+'</p></div>';}
function aTools(){return '<div class="card adm" style="max-width:640px"><h2>환수 코드 만들기 (테스트용)</h2><p class="muted">게임 없이 코인 입력을 확인할 때 써요. 데이터팩과 같은 계산식이에요.</p><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">플레이어 번호<input type="number" id="cgId" value="1" style="width:100px"></label><label class="f">회차<input type="number" id="cgN" value="1" style="width:80px"></label><label class="f">코인<input type="number" id="cgC" value="10" style="width:80px"></label><button class="btn sm" data-x="genCode">만들기</button></div>'+(AS.codeGen?'<p class="ok" style="margin-top:8px;font-size:16px">'+esc(AS.codeGen)+'</p>':'')+'</div>';}
function aLogs(){return '<div class="card adm"><h2>변경 기록</h2><button class="btn soft sm" data-x="loadLogs">불러오기</button>'+(AS.logs?'<div style="overflow-x:auto"><table class="t" style="margin-top:10px"><tr><th>시각</th><th>운영자</th><th>내용</th></tr>'+AS.logs.map(l=>'<tr><td>'+new Date(l.t).toLocaleString('ko-KR')+'</td><td>'+esc(l.by)+'</td><td>'+esc(l.msg)+'</td></tr>').join('')+'</table></div>':'')+'</div>';}
function randPw(){const c='abcdefghjkmnpqrstuvwxyz23456789';let s='';for(let i=0;i<8;i++)s+=c[Math.floor(rnd()*c.length)];return s;}
function randCode(){const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let s='EGG-';for(let i=0;i<8;i++){s+=c[Math.floor(rnd()*c.length)];if(i===3)s+='-';}return s;}
function blankAcc(id,uid,role,nick){return{id,uid,role:role||'player',nick:nick||id,banned:false,playerNo:null,lastNonce:0,coins:0,inv:{},gear:[],slots:[null,null,null],notice:[null,null,null],dex:{},mail:[],daily:null,offset:0,autoSleep:false,rev:1,created:Date.now()};}
function tPet(no){const p=newPet(no);const t=Date.now();p.ts=t;p.lastPat=t;p.born=t;return p;}
const J=x=>JSON.stringify(x===undefined?null:x),CL=x=>x==null?x:JSON.parse(JSON.stringify(x));
function mergeT(base,tgt,fresh,abs){const out=CL(fresh);base=base||{};
 const keys=new Set([...Object.keys(base),...Object.keys(tgt)]);
 for(const k of keys){if(k==='rev'||k==='uid')continue;const b=base[k],t=tgt[k];if(J(b)===J(t))continue;
  if(k==='coins'&&!abs.coins){out.coins=Math.max(0,(out.coins||0)+(t||0)-(b||0));continue;}
  if(k==='inv'){out.inv=out.inv||{};new Set([...Object.keys(b||{}),...Object.keys(t||{})]).forEach(x=>{const bb=(b||{})[x]||0,tt=(t||{})[x]||0;if(bb!==tt)out.inv[x]=Math.max(0,(out.inv[x]||0)+tt-bb);});continue;}
  if(k==='dex'){out.dex=out.dex||{};new Set([...Object.keys(b||{}),...Object.keys(t||{})]).forEach(x=>{if(J((b||{})[x])!==J((t||{})[x])){if((t||{})[x]===undefined)delete out.dex[x];else out.dex[x]=CL(t[x]);}});continue;}
  if(k==='slots'||k==='notice'){out[k]=out[k]||[null,null,null];for(let i=0;i<3;i++){const bs=(b||[])[i],ts=(t||[])[i],fs=out[k][i];if(J(bs)===J(ts))continue;
    if(k==='slots'&&bs&&ts&&fs&&fs.born===bs.born&&ts.born===bs.born){new Set([...Object.keys(bs),...Object.keys(ts)]).forEach(x=>{if(J(bs[x])!==J(ts[x])){if(ts[x]===undefined)delete fs[x];else fs[x]=CL(ts[x]);}});}
    else out[k][i]=CL(ts===undefined?null:ts);}continue;}
  if(k==='gear'){const bm=new Map((b||[]).map(g=>[g.u,g])),tm=new Map((t||[]).map(g=>[g.u,g]));let g=(out.gear||[]).filter(x=>!(bm.has(x.u)&&!tm.has(x.u)));
   tm.forEach((v,u)=>{if(!bm.has(u))g.push(CL(v));else if(J(bm.get(u))!==J(v)){const i=g.findIndex(x=>x.u===u);if(i>=0)g[i]=CL(v);}});out.gear=g;continue;}
  out[k]=CL(t);}
 out.rev=(fresh.rev||0)+1;return out;}
async function saveTgt(msg){const t=AS.tgt,s0=await db.doc('accounts/'+t.uid).get();const fresh=s0.exists?s0.data():t;
 const out=mergeT(AS.base,t,fresh,AS.abs||{});AS.abs=null;await db.doc('accounts/'+t.uid).set(out);if(msg)log(t.id+': '+msg);
 AS.tgt=normT(Object.assign({uid:t.uid},out));AS.base=CL(AS.tgt);const i=(AS.list||[]).findIndex(a=>a.uid===t.uid);if(i>=0)AS.list[i]=CL(AS.tgt);toast('저장했어요.');render();}
const AD={
 async loadList(){const q=await db.collection('accounts').get();AS.list=q.docs.map(d=>Object.assign({uid:d.id},d.data())).sort((a,b)=>(a.id>b.id?1:-1));if(AS.tgt){const n=AS.list.find(a=>a.uid===AS.tgt.uid);AS.tgt=n?normT(n):null;AS.base=CL(AS.tgt);}render();},
 find(){AS.find=document.getElementById('xFind').value.trim();render();},
 reload(){AD.loadList();},
 close(){AS.tgt=null;render();},
 async bossSpawn(){const no=+document.getElementById('bNo').value,hp=Math.max(1,Math.round(+document.getElementById('bHp').value||0)),atk=Math.max(1,Math.round(+document.getElementById('bAtk').value||0)),reward=readMail('bR'),mvpReward=readMail('bM');
  confirmBox('월드보스 소환',BOSSES[no-1].n+' (체력 '+fmt(hp)+', 공격력 '+fmt(atk)+')을(를) 소환할까요? 지금 보스는 내려가요.',async()=>{await db.doc('boss/current').set({iid:'w'+Date.now().toString(36),no,maxHp:hp,hp,atk,start:Date.now(),killed:false,reward,mvpReward,by:acc.id});log('월드보스 소환: '+BOSSES[no-1].n+' 체력 '+hp+' 공격력 '+atk+' / 보상 '+(mailParts(reward).join(', ')||'없음')+' / MVP '+(mailParts(mvpReward).join(', ')||'없음'));toast('소환했어요!');await loadBoss();});},
 async bossSaveReward(){const reward=readMail('bR'),mvpReward=readMail('bM');await db.doc('boss/current').update({reward,mvpReward});log('월드보스 보상 변경: '+(mailParts(reward).join(', ')||'없음')+' / MVP '+(mailParts(mvpReward).join(', ')||'없음'));toast('보상을 바꿨어요.');await loadBoss();},
 async bossHeal(){const c=BV.cur;if(!c)return;await db.doc('boss/current').update({hp:c.maxHp,killed:false});log('월드보스 체력 회복');toast('체력을 가득 채웠어요.');await loadBoss();},
 bossEnd(){confirmBox('보스 내리기','지금 월드보스를 내릴까요? 아직 보상을 안 받은 유저는 받을 수 없게 돼요.',async()=>{await db.doc('boss/current').delete();log('월드보스 내림');BV.cur=null;BV.hits=[];toast('보스를 내렸어요.');render();});},
 bossReload(){return loadBoss();},
 bossPreset(){AS.bossNo=+document.getElementById('bNo').value;render();},

 async loadArenaT(){const t=AS.tgt;if(!t)return;try{const s=await db.doc('arena/'+t.uid).get();if(AS.tgt&&AS.tgt.uid===t.uid){AS.tgtArena=s.exists?s.data():null;render();}}catch(e){AS.tgtArena=null;render();}},
 async medalSave(nv,what){const a=AS.tgtArena;if(!a)return toast('대전에 참여하지 않은 유저예요.');const e=aEff(a),m=document.getElementById('xMemo').value;nv=Math.max(0,Math.round(nv));
  await db.doc('arena/'+AS.tgt.uid).update({week:sunKey(now()),medals:nv,w:e.w,l:e.l,dw:e.dw,dl:e.dl});log(AS.tgt.id+': 마패 '+what+' '+e.m+'→'+nv+(m?' ('+m+')':''));toast('마패를 '+nv+'(으)로 바꿨어요.');await AD.loadArenaT();},
 medalAdd(){const n=Math.abs(+document.getElementById('xMedal').value||0);return AD.medalSave(aEff(AS.tgtArena).m+n,'+'+n);},
 medalSub(){const n=Math.abs(+document.getElementById('xMedal').value||0);return AD.medalSave(aEff(AS.tgtArena).m-n,'-'+n);},
 medalSet(){return AD.medalSave(+document.getElementById('xMedal').value||0,'설정');},
 medalReset(){return AD.medalSave(100,'초기화');},

 async sendOne(){const m=readMail('mU');if(!m.title)return toast('제목을 적어 주세요.');const mm=stampMail(Object.assign(m,{from:'운영자'}));await db.doc('accounts/'+AS.tgt.uid).pushMail(mm);log(AS.tgt.id+': 우편 "'+m.title+'" '+(mailParts(m).join(', ')||'(보상 없음)'));toast('우편을 보냈어요.');await AD.loadList();},
 sendAll(){const m=readMail('mA');if(!m.title)return toast('제목을 적어 주세요.');const adm=document.getElementById('mAadm').checked;
  confirmBox('전체 우편','"'+m.title+'" — '+(mailParts(m).join(', ')||'보상 없음')+'\n모든 '+(adm?'계정':'플레이어')+'에게 보낼까요?',async()=>{if(!AS.list)await AD.loadList();const tg=AS.list.filter(a=>!a.banned&&(adm||a.role==='player'));let ok=0,fail=0;
   for(const a of tg){try{await db.doc('accounts/'+a.uid).pushMail(stampMail(Object.assign({},m,{from:'운영자'})));ok++;}catch(e){fail++;}}
   log('전체 우편 "'+m.title+'" '+(mailParts(m).join(', ')||'(보상 없음)')+' → '+ok+'명');toast(ok+'명에게 보냈어요.'+(fail?' ('+fail+'명 실패)':''));await AD.loadList();});},
 async saveWelcome(){const m=readMail('mW');m.on=document.getElementById('mWon').checked;if(m.on&&!m.title)return toast('제목을 적어 주세요.');m.from='운영자';cfg.welcome=m;await db.doc('config/global').set(cfg);log('가입 보상 '+(m.on?'켜기: "'+m.title+'" '+(mailParts(m).join(', ')||'(보상 없음)'):'끄기'));toast('저장했어요.');render();},

 async coinAdd(){const n=Math.abs(+document.getElementById('xCoin').value||0),m=document.getElementById('xMemo').value;AS.tgt.coins=(AS.tgt.coins||0)+n;await saveTgt('코인 +'+n+(m?' ('+m+')':''));},
 async coinSub(){const n=Math.abs(+document.getElementById('xCoin').value||0),m=document.getElementById('xMemo').value;AS.tgt.coins=Math.max(0,(AS.tgt.coins||0)-n);await saveTgt('코인 -'+n+(m?' ('+m+')':''));},
 async coinSet(){const n=Math.max(0,+document.getElementById('xCoin').value||0),m=document.getElementById('xMemo').value,o=AS.tgt.coins||0;AS.tgt.coins=n;AS.abs={coins:true};await saveTgt('코인 '+o+' → '+n+(m?' ('+m+')':''));},
 async itemGive(){const k=document.getElementById('xItem').value,n=Math.max(1,+document.getElementById('xQty').value||1);AS.tgt.inv[k]=(AS.tgt.inv[k]||0)+n;await saveTgt(ITEMS[k].n+' ×'+n+' 지급');},
 async invSave(){const ch=[];document.querySelectorAll('[data-xinv]').forEach(el=>{const k=el.dataset.xinv,v=Math.max(0,+el.value||0);if((AS.tgt.inv[k]||0)!==v){ch.push(ITEMS[k].n+' '+(AS.tgt.inv[k]||0)+'→'+v);AS.tgt.inv[k]=v;}});if(!ch.length)return toast('바뀐 게 없어요.');await saveTgt('아이템 수정: '+ch.join(', '));},
 async eqGive(){const t=document.getElementById('xEqT').value,g=+document.getElementById('xEqG').value,pl=Math.min(MAXP[g],Math.max(0,+document.getElementById('xEqP').value||0));AS.tgt.gear.push({u:'g'+Date.now()+Math.floor(rnd()*1000),t,g,p:pl,aff:'fire'});await saveTgt('장비 지급 '+GN[g]+' '+TN[t]+' +'+pl);},
 async petApply(){const p=AS.tgt.slots[AS.slot];if(!p)return;const no=+document.getElementById('xNo').value;if(no!==p.no){p.no=no;p.st=FORMS[no].st;tDex(no);}p.lv=Math.max(1,Math.min(maxLv(p.st),+document.getElementById('xLv').value||1));if(p.lv>=maxLv(p.st))p.exp=0;EL.forEach((e,i)=>{p.el[e]=Math.max(0,Math.min(50,+document.getElementById('xEl_'+e).value||0));p.elT[e]=Date.now()+i;});p.lock=EL.some(e=>p.el[e]>=50)?[...EL].sort((a,b)=>p.el[b]-p.el[a]||p.elT[a]-p.elT[b]):null;['hu','th','cl','aff'].forEach(k=>p[k]=Math.max(0,Math.min(100,+document.getElementById('xS_'+k).value||0)));p.en=Math.max(0,+document.getElementById('xS_en').value||0);if(p.hu>0&&p.th>0&&p.cl>0)p.zf=false;await saveTgt('환수 편집: '+NAMES[p.no]+' Lv'+p.lv);},
 async restore(){const no=+document.getElementById('xRestore').value,lv=+document.getElementById('xRLv').value||1;const p=tPet();p.no=no;p.st=FORMS[no].st;p.lv=Math.max(1,Math.min(maxLv(p.st),lv));AS.tgt.slots[AS.slot]=p;AS.tgt.notice[AS.slot]=null;tDex(no);await saveTgt('환수 복구: '+NAMES[no]);},
 async dexAdd(){const n=+document.getElementById('xDex').value;if(!(n>=0&&n<NAMES.length))return;tDex(n);await saveTgt('도감 채움 '+n);},
 async dexDel(){const n=+document.getElementById('xDex').value;delete AS.tgt.dex[n];await saveTgt('도감 지움 '+n);},
 async dexFree(){const n=+document.getElementById('xDex').value;tDex(n);AS.tgt.dex[n].freed=!AS.tgt.dex[n].freed;await saveTgt('도감 解 '+(AS.tgt.dex[n].freed?'켬':'끔')+' '+n);},
 async ban(){AS.tgt.banned=!AS.tgt.banned;await saveTgt(AS.tgt.banned?'계정 정지':'정지 해제');},
 delAcc(){const t=AS.tgt;confirmBox('게임 데이터 삭제',t.id+'의 환수와 아이템이 모두 사라져요. 로그인 계정은 Firebase 콘솔에서 따로 지워야 해요.',async()=>{await db.doc('accounts/'+t.uid).delete();log(t.id+': 게임 데이터 삭제');AS.tgt=null;await AD.loadList();});},
 async mkAcc(){const id=document.getElementById('nId').value.trim(),nick=document.getElementById('nNick').value.trim(),role=document.getElementById('nRole').value;if(!/^[A-Za-z0-9_-]{3,20}$/.test(id))return toast('아이디는 영문·숫자 3~20자로 해 주세요.');const pw=randPw();let uid;
  try{uid=await HS.createUser(id,pw);}catch(e){return toast(String(e&&e.code||e).includes('email-already-in-use')?'이미 있는 아이디예요. 비밀번호 재발급이라면 Firebase 콘솔에서 먼저 삭제하세요.':'만들지 못했어요: '+(e&&e.code||e));}
  const old=await db.collection('accounts').where('id','==',id).get();let data;
  if(!old.empty){const o=old.docs[0];data=Object.assign({},o.data(),{uid,role,nick:nick||o.data().nick,banned:false,rev:(o.data().rev||0)+1});await db.doc('accounts/'+uid).set(data);if(o.id!==uid)await db.doc('accounts/'+o.id).delete();log(id+': 계정 재발급 (데이터 이어짐)');}
  else{data=blankAcc(id,uid,role,nick);if(cfg.welcome&&cfg.welcome.on){const w=Object.assign({},cfg.welcome);delete w.on;data.mail=[stampMail(w)];}await db.doc('accounts/'+uid).set(data);log(id+': 계정 생성 ('+role+')'+(data.mail.length?' + 가입 보상':''));}
  AS.newPw='아이디 '+id+' / 비밀번호 '+pw;render();AD.loadList();},
 async mkEgg(){const t=document.getElementById('egT').value.trim(),n=Math.min(20,Math.max(1,+document.getElementById('egN').value||1));const made=[];for(let i=0;i<n;i++){const c=randCode();await db.doc('eggcodes/'+c).set({id:c,kind:document.getElementById('egK').value||null,target:t||null,used:false,by:null,byUid:null,t:Date.now(),from:acc.id});made.push(c);}log('알 코드 '+n+'개 발급'+(t?' ('+t+' 전용)':''));toast('발급했어요.');await AD.loadEggs();},
 async loadEggs(){const q=await db.collection('eggcodes').orderBy('t','desc').limit(60).get();AS.eggs=q.docs.map(d=>d.data());render();},
 async saveCfg(){cfg.expMult=+document.getElementById('cfgExp').value;const n=document.getElementById('cfgNotice');if(n)cfg.notice=n.value;cfg.by=acc.id+' · '+new Date().toLocaleString('ko-KR');await db.doc('config/global').set(cfg);log('이벤트/공지: 경험치 '+cfg.expMult+'배'+(n?' / 공지 "'+n.value+'"':''));toast('저장했어요.');render();},
 genCode(){const id=+document.getElementById('cgId').value,n=+document.getElementById('cgN').value,c=+document.getElementById('cgC').value;AS.codeGen=id+'-'+n+'-'+c+'-'+((id*37+n*53+c*71+1234)%9973);render();},
 async loadLogs(){const q=await db.collection('adminlogs').orderBy('t','desc').limit(80).get();AS.logs=q.docs.map(d=>d.data());render();}
};
function normT(a){const t=JSON.parse(JSON.stringify(a));t.inv=t.inv||{};t.gear=t.gear||[];t.dex=t.dex||{};t.slots=t.slots||[null,null,null];t.notice=t.notice||[null,null,null];t.mail=t.mail||[];return t;}
function tDex(no){if(!AS.tgt.dex[no])AS.tgt.dex[no]={d:dayKey(Date.now()).slice(5).replace('-','.'),freed:false};}
const MAIN_ONLY=new Set(['bossSpawn','bossSaveReward','bossHeal','bossEnd','saveWelcome','itemGive','invSave','eqGive','petApply','restore','dexAdd','dexDel','dexFree','ban','delAcc','mkAcc']);

/* ================= 이벤트 ================= */
document.addEventListener('submit',async ev=>{const f=ev.target;ev.preventDefault();const fd=new FormData(f),k=f.dataset.form;if(busy)return;busy=true;try{
 if(k==='login'){const id=String(fd.get('id')).trim();if(!/^[A-Za-z0-9_-]{1,40}$/.test(id)){S.loginMsg='아이디 또는 비밀번호가 틀렸어요.';return render();}
  let uid;try{uid=await HS.signIn(id,String(fd.get('pw')));}catch(e){S.loginMsg='아이디 또는 비밀번호가 틀렸어요.';return render();}
  await loadAccount(uid);}
 if(k==='boot'){const id=String(fd.get('id')).trim(),pw=String(fd.get('pw')),nick=String(fd.get('nick')||'').trim();if(!/^[A-Za-z0-9_-]{3,20}$/.test(id))return toast('아이디는 영문·숫자 3~20자로 해 주세요.');
  let uid;try{uid=await HS.register(id,pw);}catch(e){return toast('만들지 못했어요: '+(e&&e.code||e));}
  await db.doc('accounts/'+uid).set(blankAcc(id,uid,'main',nick||id));await db.doc('config/bootstrap').set({by:id,t:Date.now()});S.needBoot=false;toast('메인 운영자를 만들었어요!');await loadAccount(uid);}
 if(!acc)return;
 if(k==='egg'){const code=String(fd.get('code')).trim().toUpperCase();if(!/^EGG-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code))return toast('알 코드 형식이 아니에요.');const d=await db.doc('eggcodes/'+code).get();if(!d.exists)return toast('없는 알 코드예요.');const e=d.data();if(e.used)return toast('이미 사용한 알 코드예요.');if(e.target&&e.target!==acc.id)return toast('다른 사람 전용 알 코드예요.');
  try{await db.doc('eggcodes/'+code).set(Object.assign({},e,{used:true,by:acc.id,byUid:acc.uid,usedT:Date.now()}));}catch(er){return toast('알 코드를 쓰지 못했어요.');}
  const slot=giveEgg(e.kind==='yy'?80:0);if(slot>=0){sel=slot;view='home';}SFX.play('egg');toast(slot>=0?'알을 받았어요!':'알을 받았어요! 빈 슬롯이 없어 가방에 보관했어요.');await commit();}
 if(k==='coin'){const m=String(fd.get('code')).trim().match(/^(\d+)-(\d+)-(\d+)-(\d+)$/);if(!m)return toast('코드 형식이 아니에요. 예: 3-7-10-4821');const [id,n,c,chk]=m.slice(1).map(Number);if((id*37+n*53+c*71+1234)%9973!==chk)return toast('잘못된 코드예요.');if(acc.playerNo&&acc.playerNo!==id)return toast('본인 플레이어 번호의 코드가 아니에요.');if(n<=(acc.lastNonce||0))return toast('이미 사용한 코드예요.');acc.playerNo=id;acc.lastNonce=n;acc.coins+=c;SFX.play('coins');toast('환수 코인 '+c+'개가 들어왔어요!');await commit();}
}finally{busy=false;}});
document.addEventListener('error',ev=>{const t=ev.target;if(t&&t.tagName==='IMG'&&!t.dataset.fb&&/\/(h|b)\//.test(t.src)){t.dataset.fb='1';t.src='i/q.png';}},true);
document.addEventListener('change',ev=>{if(ev.target&&ev.target.id==='bNo'&&MODE==='admin'){AS.bossNo=+ev.target.value;render();}});
document.addEventListener('click',async ev=>{const t=ev.target.closest('button,[data-close],input[type=checkbox]');if(!t)return;const ds=t.dataset;if(t.tagName==='BUTTON'&&!ds.a2)SFX.play('tap');
 if(ds.close&&ev.target===t)return closeLayer();
 if(ds.view){view=ds.view;S.forgeSel=[];if(view==='pvp')PV.loaded=false;if(view==='boss')BV.loaded=false;return render();}
 if(ds.batk!=null){BV.atk=+ds.batk;return render();}
 if(ds.bossgo)return bossAttack();
 if(ds.bossclaim)return bossClaim();
 if(ds.bossretry)return bossRetry();
 if(ds.tmode){S.tmode=ds.tmode;return render();}
 if(ds.errand!=null)return sendErrand(+ds.errand);
 if(ds.bagopen!=null)return bagOpen(t);
 if(ds.errack!=null){const q=acc.slots[+ds.errack];if(q){q.errandResult=null;SFX.play('coins');toast('코인을 받았어요!');return commit();}}
 if(ds.ybstart)return ybStart();
 if(ds.ybretry)return ybRetry();
 if(ds.hatch)return hatch(ds.hatch);
 if(ds.arep!=null)return setRep(+ds.arep);
 if(ds.atk!=null){PV.atk=+ds.atk;return render();}
 if(ds.fight)return fight(ds.fight);
 if(ds.replay)return replay(ds.replay);
 if(ds.pvprefresh){PV.list=null;render();return loadArena();}
 if(ds.sel!=null){sel=+ds.sel;selSpot=null;S.forgeSel=[];return render();}
 if(ds.spot!=null){selSpot=+ds.spot;return render();}
 if(ds.a){const a=ds.a;if(a==='feed'&&!ds.v)return feedMenu();if(a==='susm')return susMenu();if(A[a])return A[a](ds.v);}
 if(ds.ack!=null){const q=acc.slots[+ds.ack];if(q){q.result=null;return commit();}}
 if(ds.a2==='att')return attModal(false);
 if(ds.a2==='sfx'||ds.a2==='bgm'){SFX.toggle(ds.a2);return render();}
 if(ds.mclaim)return claimMail(ds.mclaim);
 if(ds.a2==='logout')return logout();
 if(ds.buy){const k=ds.buy,n=+ds.n,it=ITEMS[k],ad=accDaily();if(it.daily&&(ad[k]||0)+n>it.daily)return toast('오늘은 더 살 수 없어요 (하루 '+it.daily+'개).');if(acc.coins<it.p*n)return toast('코인이 부족해요.');acc.coins-=it.p*n;acc.inv[k]=(acc.inv[k]||0)+n;if(it.daily)ad[k]=(ad[k]||0)+n;SFX.play('buy');toast(it.n+' ×'+n+' 구매!');return commit();}
 if(ds.buyegg){const wk=accWeekly();if(wk.egg>=EGG_WEEK)return toast('이번 주에는 더 살 수 없어요 (주 '+EGG_WEEK+'개).');if(acc.coins<EGG_PRICE)return toast('코인이 부족해요.');
  acc.coins-=EGG_PRICE;wk.egg++;const k=giveEgg(0);SFX.play('egg');toast(k>=0?'환수 알을 샀어요! 슬롯 '+(k+1)+'에 들어갔어요.':'환수 알을 샀어요! 빈 슬롯이 없어 가방에 보관했어요.');return commit();}
 if(ds.buyeq){if(acc.coins<30)return toast('코인이 부족해요.');acc.coins-=30;acc.gear.push({u:'g'+Date.now()+Math.floor(rnd()*1000),t:ds.buyeq,g:0,p:0,aff:'fire'});SFX.play('buy');toast('일반 '+TN[ds.buyeq]+' 구매!');return commit();}
 if(ds.gsel){const u=ds.gsel;const i=S.forgeSel.indexOf(u);if(i>=0)S.forgeSel.splice(i,1);else{S.forgeSel.push(u);if(S.forgeSel.length>2)S.forgeSel.shift();}return render();}
 if(t.matches('[data-bless]')){S.bless=t.checked;return render();}
 if(t.matches('[data-protect]')){S.protect=t.checked;return render();}
 if(ds.aff){const g=gearOf(S.forgeSel[0]);g.aff=ds.aff;return commit();}
 if(ds.equip){const p=P(),g=gearOf(ds.equip);if(!p)return;const o=equippedBy(g.u);if(o!=null)acc.slots[o].eq[g.t]=null;p.eq[g.t]=g.u;if(p.en>maxEn(p))p.en=maxEn(p);SFX.play('equip');toast('장착했어요.');return commit();}
 if(ds.unequip){const p=P(),g=gearOf(ds.unequip);p.eq[g.t]=null;if(p.en>maxEn(p))p.en=maxEn(p);SFX.play('clank');return commit();}
 if(ds.enh){const g=gearOf(ds.enh);if(g.p>=MAXP[g.g])return;if(acc.coins<ECOST[g.g])return toast('코인이 부족해요.');let r=RATE[g.p+1];if(S.bless){if(!take('sec_bless'))return;r+=.1;}acc.coins-=ECOST[g.g];
  const ok=rnd()<r,from=g.p;if(ok)g.p++;save();const im='eq/'+g.g+'_'+g.t+'.gif',nm=GN[g.g]+' '+TN[g.t];
  forgeAnim({kind:'enh',title:nm+' +'+from+' → +'+(from+1)+' 강화',imgs:[im],rate:Math.min(1,r),extra:S.bless?'강화축복비서 사용':'',out:ok?'success':'fail',head:ok?'+'+g.p+' 강화 성공!':'강화 실패…',sub:ok?nm+' +'+g.p:'단계는 +'+g.p+' 그대로예요.'});return;}
 if(ds.synth){const [a,b]=S.forgeSel.map(gearOf);const sy=SYN[a.g];if(acc.coins<SFEE[a.g])return toast('코인이 부족해요.');let prot=false;if(sy.x&&S.protect){if(!take('sec_protect'))return;prot=true;}acc.coins-=SFEE[a.g];const r=rnd();
  const imA='eq/'+a.g+'_'+a.t+'.gif',imB='eq/'+b.g+'_'+b.t+'.gif',nm=GN[a.g]+' '+TN[a.t],o={kind:'synth',title:nm+' 합성 → '+GN[a.g+1],imgs:[imA,imB],rate:sy.s,extra:(sy.d?'하락 '+Math.round(sy.d*100)+'%':'')+(sy.x?' 파괴 '+Math.round(sy.x*100)+'%'+(prot?' (방지)':''):'')};
  if(r<sy.s){acc.gear=acc.gear.filter(x=>x.u!==a.u&&x.u!==b.u);acc.gear.push({u:'g'+Date.now(),t:a.t,g:a.g+1,p:0,aff:a.aff||'fire'});Object.assign(o,{out:'success',resImg:'eq/'+(a.g+1)+'_'+a.t+'.gif',head:'합성 성공!',sub:GN[a.g+1]+' '+TN[a.t]+' 획득!'});}
  else if(r<sy.s+sy.d){b.g--;b.p=0;Object.assign(o,{out:'down',resImg:'eq/'+b.g+'_'+b.t+'.gif',head:'합성 실패… 등급 하락',sub:'장비 하나가 '+GN[b.g]+'(으)로 내려갔어요.'});}
  else if(r<sy.s+sy.d+sy.x){if(prot)Object.assign(o,{out:'protect',head:'파괴 방지!',sub:'파괴될 뻔했지만 파괴방지비서가 막았어요.'});else{acc.gear=acc.gear.filter(x=>x.u!==b.u);Object.assign(o,{out:'destroy',head:'합성 실패… 파괴',sub:'장비 하나가 부서졌어요.'});}}
  else Object.assign(o,{out:'fail',head:'합성 실패…',sub:'코인만 사라지고 장비는 그대로예요.'});
  S.forgeSel=[];save();forgeAnim(o);return;}
 // 운영자
 if(MODE!=='admin'||!isAdmin())return;
 if(ds.xtab){AS.tab=ds.xtab;if(ds.xtab==='eggs'&&!AS.eggs)AD.loadEggs();if(ds.xtab==='logs'&&!AS.logs)AD.loadLogs();return render();}
 if(ds.xpick){const a=(AS.list||[]).find(x=>x.uid===ds.xpick);AS.tgt=a?normT(a):null;AS.base=CL(AS.tgt);AS.slot=0;AS.tgtArena=undefined;render();return AD.loadArenaT();}
 if(ds.x&&AD[ds.x]){if(MAIN_ONLY.has(ds.x)&&!isMain())return toast('메인 운영자만 할 수 있어요.');try{return await AD[ds.x]();}catch(e){toast('실패했어요: '+(e&&e.message||e));}}
 if(ds.xslot!=null){AS.slot=+ds.xslot;return render();}
 if(ds.xgdel&&isMain()){const u=ds.xgdel;AS.tgt.slots.forEach(p=>{if(p)['w','a','s'].forEach(k=>{if(p.eq[k]===u)p.eq[k]=null;});});AS.tgt.gear=AS.tgt.gear.filter(g=>g.u!==u);return saveTgt('장비 회수');}
 if(ds.xp&&isMain()){const t=AS.tgt,i=AS.slot,p=t.slots[i],k=ds.xp,tn=Date.now()+(t.offset||0);
  if(k==='egg'||k==='yyegg'){const n0=k==='yyegg'?80:0;t.slots[i]=tPet(n0);t.notice[i]=null;tDex(n0);}
  else if(p){if(k==='finish'&&p.train)p.train.end=tn;if(k==='finish'&&p.errand)p.errand.end=tn;if(k==='wake')p.sleep=null;if(k==='cure'){p.sick=null;p.acc.sickA=0;}if(k==='unlock')p.lock=null;if(k==='daily'){p.daily={d:'',pat:0,play:0,sleep:0};t.daily=null;}if(k==='del')t.slots[i]=null;}
  return saveTgt({egg:'알 넣기',yyegg:'음양알 넣기',finish:'수련·심부름 즉시 완료',wake:'깨우기',cure:'병 치료',unlock:'오행 고정 해제',daily:'오늘 횟수 초기화',del:'환수 삭제'}[k]+' (슬롯 '+(i+1)+')');}
 if(ds.xegdel){await db.doc('eggcodes/'+ds.xegdel).delete();log('알 코드 취소 '+ds.xegdel);return AD.loadEggs();}
});
setInterval(()=>{if(MODE!=='player'||!acc||document.getElementById('layer').innerHTML)return;if(acc.att&&acc.att.last!==dayKey(now())){const st=attCheck();if(st){save();render();attModal(true);return;}}const ch=tickAll();const a=document.activeElement;const typing=a&&(a.tagName==='INPUT'||a.tagName==='SELECT');if(!typing&&(view==='home'||view==='train')&&!document.querySelector('.errres'))render();if(ch)save();},2000);

/* ================= 저장소 연결 (Firebase) ================= */
const FBV='10.14.1';
const emailOf=id=>String(id).toLowerCase()+'@hwansu.game';
const clean=d=>JSON.parse(JSON.stringify(d));
async function makeFirebase(){
 const cfg=(await import('./firebase-config.js')).firebaseConfig;
 const {initializeApp}=await import('https://www.gstatic.com/firebasejs/'+FBV+'/firebase-app.js');
 const A=await import('https://www.gstatic.com/firebasejs/'+FBV+'/firebase-auth.js');
 const F=await import('https://www.gstatic.com/firebasejs/'+FBV+'/firebase-firestore.js');
 const app=initializeApp(cfg),auth=A.getAuth(app),fs=F.getFirestore(app);
 const snap=s=>({id:s.id,exists:s.exists(),data:()=>s.exists()?s.data():undefined,metadata:s.metadata});
 function dref(path){const r=F.doc(fs,path);return{path,id:r.id,get:async()=>snap(await F.getDoc(r)),set:d=>F.setDoc(r,clean(d)),pushMail:m=>F.updateDoc(r,{mail:F.arrayUnion(clean(m)),rev:F.increment(1)}),update:d=>F.updateDoc(r,clean(d)),incr:(k,n)=>F.updateDoc(r,{[k]:F.increment(n)}),delete:()=>F.deleteDoc(r),onSnapshot:(n,e)=>F.onSnapshot(r,s=>n(snap(s)),e)};}
 function q(path,cons){const c=F.collection(fs,path);return{orderBy:(f,d)=>q(path,cons.concat(F.orderBy(f,d||'asc'))),limit:n=>q(path,cons.concat(F.limit(n))),where:(f,o,v)=>q(path,cons.concat(F.where(f,o,v))),get:async()=>{const r=await F.getDocs(F.query(c,...cons));return{docs:r.docs.map(snap),size:r.size,empty:r.empty};},doc:id=>dref(path+'/'+id),add:d=>F.addDoc(c,clean(d))};}
 let second=null;
 return{db:{doc:dref,collection:p=>q(p,[])},
  signIn:async(id,pw)=>(await A.signInWithEmailAndPassword(auth,emailOf(id),pw)).user.uid,
  signOut:()=>A.signOut(auth),
  register:async(id,pw)=>(await A.createUserWithEmailAndPassword(auth,emailOf(id),pw)).user.uid,
  createUser:async(id,pw)=>{if(!second)second=initializeApp(cfg,'hs-second');const sa=A.getAuth(second);const u=(await A.createUserWithEmailAndPassword(sa,emailOf(id),pw)).user.uid;await A.signOut(sa);return u;},
  onAuth:cb=>A.onAuthStateChanged(auth,u=>cb(u?u.uid:null))};
}
// 로컬 확인용 가짜 저장소 (주소 끝에 ?mock 을 붙였을 때만)
function makeMock(){
 const K='hs_mock_v1';let st={docs:{},users:{}};try{st=JSON.parse(localStorage.getItem(K))||st;}catch(e){}
 const persist=()=>{try{localStorage.setItem(K,JSON.stringify(st));}catch(e){}};
 const sync=()=>{try{st=JSON.parse(localStorage.getItem(K))||st;}catch(e){}};
 let cur=null,listeners=[];const subs={};
 const snap=(path,d)=>({id:path.split('/').pop(),exists:d!==undefined,data:()=>d===undefined?undefined:clean(d),metadata:{hasPendingWrites:false,fromCache:false}});
 const fire=path=>(subs[path]||[]).forEach(f=>f(snap(path,st.docs[path])));
 function dref(path){return{path,id:path.split('/').pop(),get:async()=>{sync();return snap(path,st.docs[path]);},set:async d=>{sync();st.docs[path]=clean(d);persist();setTimeout(()=>fire(path),0);},incr:async(k,n)=>{sync();const o=st.docs[path];if(!o)throw new Error('not-found');o[k]=(o[k]||0)+n;persist();setTimeout(()=>fire(path),0);},update:async d=>{sync();const o=st.docs[path];if(!o)throw new Error('not-found');Object.assign(o,clean(d));persist();setTimeout(()=>fire(path),0);},pushMail:async m=>{sync();const d=st.docs[path];if(!d)throw new Error('not-found');d.mail=(d.mail||[]).concat([clean(m)]);d.rev=(d.rev||0)+1;persist();setTimeout(()=>fire(path),0);},delete:async()=>{sync();delete st.docs[path];persist();},onSnapshot:(n)=>{(subs[path]=subs[path]||[]).push(n);return()=>{subs[path]=subs[path].filter(x=>x!==n);};}};}
 function q(col,f,ord,lim){return{where:(a,o,v)=>q(col,(f||[]).concat([[a,v]]),ord,lim),orderBy:(a,d)=>q(col,f,[a,d],lim),limit:n=>q(col,f,ord,n),get:async()=>{sync();let ks=Object.keys(st.docs).filter(k=>k.startsWith(col+'/')&&k.split('/').length===col.split('/').length+1);let ds=ks.map(k=>snap(k,st.docs[k]));if(f)ds=ds.filter(s=>f.every(([a,v])=>s.data()[a]===v));if(ord)ds.sort((a,b)=>(a.data()[ord[0]]-b.data()[ord[0]])*(ord[1]==='desc'?-1:1));if(lim)ds=ds.slice(0,lim);return{docs:ds,size:ds.length,empty:!ds.length};},doc:id=>dref(col+'/'+id),add:async d=>{const r=dref(col+'/'+Math.random().toString(36).slice(2));await r.set(d);return r;}};}
 const err=c=>{const e=new Error(c);e.code=c;return e;};
 return{db:{doc:dref,collection:c=>q(c)},
  signIn:async(id,pw)=>{sync();const u=st.users[emailOf(id)];if(!u||u.pw!==pw)throw err('auth/invalid-credential');cur=u.uid;return cur;},
  signOut:async()=>{cur=null;},
  register:async(id,pw)=>{sync();const e=emailOf(id);if(st.users[e])throw err('auth/email-already-in-use');const uid='u'+Math.random().toString(36).slice(2,10);st.users[e]={uid,pw};persist();cur=uid;return uid;},
  createUser:async(id,pw)=>{sync();const e=emailOf(id);if(st.users[e])throw err('auth/email-already-in-use');const uid='u'+Math.random().toString(36).slice(2,10);st.users[e]={uid,pw};persist();return uid;},
  onAuth:cb=>{setTimeout(()=>cb(cur),0);}};
}
(async function boot(){
 const app=document.getElementById('app');
 try{HS=/[?&]mock/.test(location.search)?makeMock():await makeFirebase();}catch(e){app.innerHTML='<main><div class="card">서버에 연결하지 못했어요. 잠시 뒤 새로고침해 주세요.<br><small class="muted">'+esc(e&&e.message||e)+'</small></div></main>';return;}
 db=HS.db;if(/[?&]mock/.test(location.search))window.__dbg={evoCheck,newPet,cp,needP,isAdv,maxLv,condText};
 if(MODE==='admin'){try{const b=await db.doc('config/bootstrap').get();S.needBoot=!b.exists;}catch(e){S.needBoot=false;}}
 let first=true;
 HS.onAuth(async uid=>{
  try{const c=await db.doc('config/global').get();if(c.exists)cfg=Object.assign({expMult:1},c.data());}catch(e){}
  if(uid&&first&&!acc){first=false;try{await loadAccount(uid);}catch(e){S.loginMsg='불러오지 못했어요: '+(e&&e.message||e);acc=null;render();}return;}
  first=false;if(!uid&&!acc)render();
 });
})();
