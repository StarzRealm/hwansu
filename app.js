/* ================= 기본 데이터 ================= */
const H=3600000, MIN=60000;
const EL=['fire','water','wood','earth','metal'];
const ELK={fire:'불',water:'물',wood:'나무',earth:'땅',metal:'쇠'};
const ELC={fire:'#e5484d',water:'#3b8beb',wood:'#3fa34d',earth:'#c9822b',metal:'#d4a20a'};
const ELBG={fire:'#ffe3d6',water:'#dfeefc',wood:'#e3f5e1',earth:'#f7e7cf',metal:'#f8efcc'};
const ELG={fire:'#8e1f1a,#e5484d 45%,#ff9a52 80%,#ffe08a',water:'#1b4f96,#3b8beb 60%,#a9d6ff',wood:'#1f6b2b,#3fa34d 60%,#9fe08f',earth:'#7a4512,#c9822b 60%,#f0c98a',metal:'#8a6a04,#d4a20a 60%,#ffe58a'};
const NAMES=["알","유체","강아지","백구","풍운개","해태","황구","화염개","구미호","아기새","적원앙","진·적원앙","보라부엉이","청원앙","진·청원앙","흑부엉이","까마귀","월영오","삼족오","화염뱁새","아기주작","화조","적봉","봉황","주작","아기뱀","쪽빛뱀","청사","금사","붉은뱀","홍사","혈사","지룡","지맥룡","황룡","이무기","교룡","수룡","벽파룡","천우룡","청룡","아기거북","바다거북","장수거북","흑갑장수거북","거북","늑대거북","붉은늑대거북","화염거북","폭염거구","뇌명신귀","파도거북","빙하거북","설산거구","쌍두흑사거북","쌍두흑룡거북","현무","아기호랑이","청호","자호","눈빛털대호","적호","대호","백두산호랑이","흰갈기적호","비호","기린","흰갈기호랑이","산군","아기백호","어린백호","환령백호","백호","아기곰","곰돌이","흑곰","반달곰","보라곰돌이","청웅","백곰"];
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
const CHILD={};Object.keys(FORMS).forEach(k=>CHILD[k]=[]);Object.keys(FORMS).forEach(k=>{const p=FORMS[k].parent;if(p!=null)CHILD[p].push(+k);});
const SUNGSU=new Set([22,23,24,38,39,40,54,55,56,70,71,72]), YOUNGSU=new Set([18,34,50,66]);
const GRP={A:['water','wood'],B:['fire','metal','earth']};
const EVO_LV=[5,10,15,20,25,30,40,50,60,75,99];
const TOT=[280,680,2000,3700,6470,11260,29640,48770,61600,119090,198920];
const K=TOT.map((t,i)=>{let s=0;for(let l=1;l<EVO_LV[i];l++)s+=10*Math.pow(l,1.5);return t/s;});
const need=(lv,st)=>Math.max(1,Math.round(10*Math.pow(lv,1.5)*K[st-1]));
const maxLv=st=>st>=12?1:EVO_LV[st-1];
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
 sus_s:{n:'수상한 기운 (소)',p:3,img:'i/sus_s.png',cat:'성장',d:'현재 레벨 경험치 30%, 무작위 오행 +1',daily:1},
 sus_m:{n:'수상한 기운 (중)',p:8,img:'i/sus_m.png',cat:'성장',d:'레벨 경험치 70%, 무작위 오행 +3~4, 포만감 -30',daily:1},
 sus_l:{n:'수상한 기운 (대)',p:15,img:'i/sus_l.png',cat:'성장',d:'즉시 레벨 +1, 무작위 오행 +5~6, 10% 질병',daily:1},
 sec_active:{n:'환수행동력 회복 비서',p:10,img:'i/sec_active.gif',cat:'성장',d:'행동력 +50',daily:1},
 reset_ki:{n:'오행초기화기운',p:50,img:'i/reset_ki.gif',cat:'기타',d:'오행 점수를 0으로, 고정 해제'},
 sec_bless:{n:'강화축복비서',p:25,img:'i/sec_bless.gif',cat:'강화',d:'강화 성공 확률 +10%'},
 sec_protect:{n:'파괴방지비서',p:200,img:'i/sec_protect.gif',cat:'강화',d:'합성 파괴를 막아요'},
 sec_instant:{n:'수련즉시완료비서',p:0,img:'i/sec_instant.gif',cat:'운영자',d:'진행 중 수련 즉시 완료',admin:1},
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
const img=no=>'assets/h/'+String(no).padStart(2,'0')+'.gif';
const isAdmin=()=>acc&&(acc.role==='main'||acc.role==='sub');
const isMain=()=>acc&&acc.role==='main';
function toast(m){const l=document.createElement('div');l.className='toast';l.textContent=m;document.body.appendChild(l);setTimeout(()=>l.remove(),2600);}
function fmtDur(ms){ms=Math.max(0,ms);const h=Math.floor(ms/H),m=Math.floor(ms%H/MIN),s=Math.floor(ms%MIN/1000);return h+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');}
async function sha(s){try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('hwansu:'+s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');}catch(e){let h=0;for(const c of 'hwansu:'+s)h=(h*31+c.charCodeAt(0))|0;return 'x'+h;}}
const rnd=()=>Math.random();

/* ================= 저장 ================= */
let saveChain=Promise.resolve();
function save(){acc.rev=(acc.rev||0)+1;const snap=JSON.parse(JSON.stringify(acc));saveChain=saveChain.then(()=>db.doc('accounts/'+snap.uid).set(snap)).catch(e=>{toast('저장 실패: '+(e&&e.message||e));});return saveChain;}
async function log(msg){try{await db.collection('adminlogs').add({t:Date.now(),by:acc.id,msg});}catch(e){}}

/* ================= 환수 계산 ================= */
function newPet(){return{no:0,st:1,lv:1,exp:0,el:{fire:0,water:0,wood:0,earth:0,metal:0},elT:{fire:0,water:0,wood:0,earth:0,metal:0},lock:null,hu:100,th:100,cl:100,aff:0,en:100,sick:null,sleep:null,train:null,eq:{w:null,a:null,s:null},ts:now(),acc:{roll:0,low:0,zero:0,nopat:0,sickA:0},zf:false,daily:{d:'',pat:0,play:0,sleep:0},prev:null,result:null,lastPat:now(),born:now()};}
function gearOf(u){return acc.gear.find(g=>g.u===u);}
function gstat(t,g,p,key){const v=GS[t][key][g];return v[0]+v[1]*p;}
function stats(p){const r={cp:0,en:0,res:0,decay:0,regen:0,exp:0,aff:0,affEl:null};for(const t of ['w','a','s']){const g=p.eq&&p.eq[t]?gearOf(p.eq[t]):null;if(!g)continue;for(const k in GS[t])r[k]+=gstat(t,g.g,g.p,k);if(t==='s')r.affEl=g.aff||'fire';}return r;}
const maxEn=p=>100+stats(p).en;
const hearts=p=>HEART_T.filter(x=>p.aff>=x).length;
function daily(p){const d=dayKey(now());if(p.daily.d!==d)p.daily={d,pat:0,play:0,sleep:0};return p.daily;}
function accDaily(){const d=dayKey(now());if(!acc.daily||acc.daily.d!==d)acc.daily={d,sus_s:0,sus_m:0,sus_l:0,sec_active:0};return acc.daily;}
function cp(p){const s=p.st-1,st=stats(p);let v=10+50*s*s+5*(s+1)*(p.lv-1)+st.cp;v*=1+HEART_CP[hearts(p)]/100;const a=(p.hu+p.th+p.cl)/3;v*=a>=70?1.1:a>=40?1:.7;return Math.round(v);}
const huRate=p=>p.st===2?100/3:10;
function addAff(p,v){p.aff=Math.max(0,Math.min(100,p.aff+v));}
function addEl(p,e,amt){const cur=p.el[e];let cap=50;if(p.lock){const r=p.lock.indexOf(e);cap=[50,40,30,10,10][r];}const nv=Math.min(cap,cur+amt);if(nv>cur){p.el[e]=nv;p.elT[e]=now();}
 if(!p.lock&&p.el[e]>=50){p.lock=[...EL].sort((a,b)=>p.el[b]-p.el[a]||p.elT[a]-p.elT[b]);toast(ELK[p.lock[0]]+' 오행이 50에 닿아 순위가 고정됐어요!');}}
function addExp(p,amt){if(p.st>=12)return;const mx=maxLv(p.st);p.exp+=amt;while(p.lv<mx&&p.exp>=need(p.lv,p.st)){p.exp-=need(p.lv,p.st);p.lv++;}if(p.lv>=mx){p.lv=mx;p.exp=0;}}
function lvUp(p,n){const mx=maxLv(p.st);p.lv=Math.min(mx,p.lv+n);if(p.lv>=mx)p.exp=0;}
function randEl(){return EL[Math.floor(rnd()*5)];}
function makeSick(p,t){if(p.sick==null){p.sick=t;addAff(p,-5);if(p.train){p.train=null;}}}

function finishTraining(p,t){
 const sp=SPOTS[p.train.s],dur=(p.train.end-p.train.start)/H,st=stats(p),m=.5*(1-st.decay/100);
 const ded=(k,rate)=>{const v=p[k];if(v>10)p[k]=Math.max(10,v-rate*dur*m);};
 ded('hu',huRate(p));ded('th',12.5);ded('cl',100/24);
 const ratio=cp(p)/sp.rec;let fail=10,great=15;if(ratio<1){fail=Math.min(85,10+(1-ratio)*70);great=5;}else if(ratio>=1.5){fail=5;great=22;}
 const r=rnd()*100,out=r<fail?'fail':r<fail+great?'great':'ok';
 let exp=sp.exp*{fail:.3,ok:1,great:2}[out]*(1+(st.exp+HEART_EXP[hearts(p)])/100)*(cfg.expMult||1);
 const lvFrom=p.lv;let enc=null,coins=0;
 if(rnd()<.1){const pool=['bless','luck','snack','lost'];if(p.st>=5)pool.push('dosa');enc=pool[Math.floor(rnd()*pool.length)];}
 if(enc==='bless')exp*=1.5;
 addExp(p,Math.round(exp));
 if(enc==='luck'){coins=3+Math.floor(rnd()*(3+p.st*2));acc.coins+=coins;}
 if(enc==='snack'){p.hu=Math.min(100,p.hu+30);p.th=Math.min(100,p.th+30);}
 if(enc==='lost'){addEl(p,randEl(),2);}
 if(enc==='dosa'){lvUp(p,1);}
 p.result={spot:sp.n,out,enc,exp:Math.round(exp),lvFrom,lvTo:p.lv,coins,max:p.lv>=maxLv(p.st)};
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
function tickAll(){let changed=false;acc.slots.forEach((p,i)=>{if(!p)return;const r=advance(p,now());if(r==='vanish'){vanish(i,'병을 이기지 못하고 선계로 돌아갔어요.');changed=true;}else if(r)changed=true;});return changed;}
function freeGear(p){}
function vanish(i,msg){const p=acc.slots[i];acc.notice[i]=NAMES[p.no]+'은(는) '+msg;acc.slots[i]=null;}
function topEls(p){const mx=Math.max(...EL.map(e=>p.el[e]));return{mx,tops:mx>0?EL.filter(e=>p.el[e]===mx):[]};}
function evoCheck(p){
 if(p.st>=12)return{done:true,reason:'완성된 최종 단계예요'};
 const kids=CHILD[p.no];if(!kids.length)return{done:true,reason:'최종 형태예요'};
 const {mx,tops}=topEls(p);let target=null;
 if(kids.length===1&&!FORMS[kids[0]].cond)target=kids[0];
 else for(const k of kids){const c=FORMS[k].cond;
  if(c==='zero'&&mx===0)target=k;
  else if(c&&c.el&&tops.length===1&&tops[0]===c.el)target=k;
  else if(c&&c.grp&&tops.length>=1&&tops.every(e=>GRP[c.grp].includes(e)))target=k;}
 let why='';if(!target)why=mx===0?'오행이 모두 0이에요':tops.length>1?'최상위 오행이 동점이에요':'요구하는 오행이 최상위가 아니에요';
 const ml=maxLv(p.st);
 if(p.lv<ml)return{ok:false,target,reason:'Lv '+ml+' 필요'+(target?'':' · '+why)};
 if(!target)return{ok:false,stuck:true,reason:why};
 if(p.sick!=null)return{ok:false,target,reason:'아파서 진화할 수 없어요'};
 if(p.train)return{ok:false,target,reason:'수련 중이에요'};
 if(p.sleep)return{ok:false,target,reason:'자는 중이에요'};
 return{ok:true,target};
}
function condText(no){const c=FORMS[no]&&FORMS[no].cond;if(!c)return'레벨만';if(c==='zero')return'오행 모두 0';if(c.el)return'최상위 '+ELK[c.el];return'최상위 '+GRP[c.grp].map(e=>ELK[e]).join('·');}
function dexAdd(no){if(!acc.dex[no])acc.dex[no]={d:dayKey(now()).slice(5).replace('-','.'),freed:false};}
function badgeOf(p){const e=evoCheck(p);if(SUNGSU.has(p.no))return['b-s','성수'];if(YOUNGSU.has(p.no))return['b-y','영수'];if(e.done||e.stuck)return['b-f','최종'];return null;}

/* ================= 행동 ================= */
const P=()=>acc.slots[sel];
function take(id,n=1){if((acc.inv[id]||0)<n){toast(ITEMS[id].n+'이(가) 없어요. 상점에서 사 주세요.');return false;}acc.inv[id]-=n;return true;}
function guard(p,opt={}){if(!p)return false;if(p.train&&!opt.train){toast('수련 중이에요.');return false;}if(p.sleep&&!opt.sleep){toast('자는 중이에요. 먼저 깨워 주세요.');return false;}return true;}
const A={
 feed(el){const p=P();if(!guard(p))return;if(p.hu>75)return toast('배가 불러요. 포만감 75 이하일 때 줄 수 있어요.');const id=el==='yy'?'ki_yy':'ki_'+el;if(!take(id))return;
  p.hu=Math.min(100,p.hu+25);
  if(el==='yy'){const pos=EL.filter(e=>p.el[e]>0);if(pos.length){const e=pos[Math.floor(rnd()*pos.length)];p.el[e]--;toast(ELK[e]+' -1');}else toast('포만감만 찼어요.');}
  else{let a=3;const st=stats(p);if(st.affEl===el&&rnd()*100<Math.min(100,st.aff))a++;addEl(p,el,a);}
  closeLayer();commit();},
 dew(){const p=P();if(!guard(p))return;if(p.th>60)return toast('아직 목마르지 않아요 (60 이하일 때).');if(!take('dew'))return;p.th=Math.min(100,p.th+40);commit();},
 soap(){const p=P();if(!guard(p))return;if(p.cl>50)return toast('아직 깨끗해요 (50 이하일 때).');if(!take('soap'))return;p.cl=Math.min(100,p.cl+50);commit();},
 pat(){const p=P();if(!guard(p))return;const d=daily(p);if(d.play)return toast('오늘은 이미 놀아줬어요.');if(d.pat>=2)return toast('오늘 쓰다듬기를 다 했어요.');d.pat++;addAff(p,7);p.acc.nopat=0;toast('기분 좋아해요! 호감도 +7');commit();},
 play(){const p=P();if(!guard(p))return;const d=daily(p);if(d.pat||d.play)return toast('오늘 교감을 이미 했어요.');if(p.en<10)return toast('행동력이 부족해요.');d.play=1;p.en-=10;p.hu=Math.max(0,p.hu-10);addAff(p,15);p.acc.nopat=0;toast('신나게 놀았어요! 호감도 +15');commit();},
 sleep(){const p=P();if(!p)return;if(p.sleep){p.sleep=null;toast('깨웠어요.');return commit();}if(p.train)return toast('수련 중이에요.');const d=daily(p);if(d.sleep>=2)return toast('오늘 재울 수 있는 횟수를 다 썼어요.');d.sleep++;p.sleep=now()+8*H;toast('잠들었어요. 8시간 동안 수치가 천천히 줄어요.');commit();},
 elixir(){const p=P();if(!p)return;if(p.sick==null)return toast('아프지 않아요.');if(!take('elixir'))return;if(rnd()<.5){p.sick=null;p.acc.sickA=0;toast('나았어요!');}else toast('치료에 실패했어요…');commit();},
 sus(k){const p=P();if(!guard(p))return;if(p.st>=12)return toast('완성된 환수에게는 효과가 없어요.');if(!take(k))return;const mx=maxLv(p.st);
  if(k==='sus_s'){if(p.lv<mx)addExp(p,Math.round(need(p.lv,p.st)*.3));addEl(p,randEl(),1);}
  if(k==='sus_m'){if(p.lv<mx)addExp(p,Math.round(need(p.lv,p.st)*.7));addEl(p,randEl(),3+(rnd()<.5?1:0));p.hu=Math.max(0,p.hu-30);}
  if(k==='sus_l'){lvUp(p,1);addEl(p,randEl(),5+(rnd()<.5?1:0));if(rnd()<.1){makeSick(p,now());toast('으앗, 몸이 안 좋아졌어요!');}}
  toast(ITEMS[k].n+' 사용!');closeLayer();commit();},
 energy(){const p=P();if(!p)return;if(!take('sec_active'))return;p.en=Math.min(maxEn(p),p.en+50);toast('행동력 +50');commit();},
 resetKi(){const p=P();if(!p)return;if(!take('reset_ki'))return;EL.forEach(e=>{p.el[e]=0;p.elT[e]=0;});p.lock=null;toast('오행이 초기화됐어요.');commit();},
 admItem(k){const p=P();if(!p)return;if(!take(k))return;
  if(k==='sec_instant'){if(!p.train){acc.inv[k]++;return toast('진행 중인 수련이 없어요.');}p.train.end=now();advance(p,now());}
  if(k==='sec_cure'){p.sick=null;p.acc.sickA=0;toast('나았어요!');}
  if(k==='sec_cancel'){if(!p.prev){acc.inv[k]++;return toast('되돌릴 진화가 없어요.');}Object.assign(p,p.prev);p.prev=null;toast('진화를 되돌렸어요.');}
  commit();},
 train(i){const p=P();if(!guard(p))return;if(p.sick!=null)return toast('아파서 수련할 수 없어요.');if(p.st>=12)return toast('완성된 환수는 수련이 필요 없어요.');const sp=SPOTS[i];if(p.en<sp.cost)return toast('행동력이 부족해요.');
  if(p.lv>=maxLv(p.st))return toast('최대 레벨이라 경험치를 더 받을 수 없어요. 먼저 진화하세요.');
  p.en-=sp.cost;p.train={s:i,start:now(),end:now()+sp.min*MIN};toast(NAMES[p.no]+'이(가) '+sp.n+'(으)로 떠났어요.');commit();},
 evolve(){const p=P();const e=evoCheck(p);if(!e.ok)return toast(e.reason);evoAnim(p,e.target);},
 liberate(){const p=P();if(!p)return;if(p.st<4)return toast('4단계부터 해방할 수 있어요.');if(p.sick!=null)return toast('아플 때는 해방할 수 없어요.');if(acc.dex[p.no]&&acc.dex[p.no].freed)return toast('이미 해방한 환수예요. 선계 귀환만 가능해요.');
  confirmBox('해방하기',NAMES[p.no]+'을(를) 해방할까요? 되돌릴 수 없어요. 도감에 解 도장이 찍혀요.',()=>{dexAdd(p.no);acc.dex[p.no].freed=true;acc.notice[sel]=NAMES[p.no]+'을(를) 해방했어요. 새 알 코드를 입력하세요.';acc.slots[sel]=null;commit();toast('해방했어요.');});},
 home(){const p=P();if(!p)return;if(p.st<4)return toast('4단계부터 선계 귀환할 수 있어요.');const c=REFUND[p.st];
  confirmBox('선계 귀환',NAMES[p.no]+'을(를) 선계로 돌려보내고 환수 코인 '+c+'개를 받을까요?',()=>{acc.coins+=c;acc.notice[sel]=NAMES[p.no]+'이(가) 선계로 돌아갔어요. (코인 +'+c+')';acc.slots[sel]=null;commit();});},
 autoSleep(){acc.autoSleep=!(acc.autoSleep===true);commit();},
 ack(){const p=P();if(p){p.result=null;commit();}}
};
async function commit(){render();await save();}

/* ================= 진화 연출 ================= */
function evoAnim(p,target){
 const L=document.getElementById('layer');const oldS=img(p.no),newS=img(target);let cancelled=false;
 L.innerHTML='<div class="overlay"><div class="evo stage" id="evo"><div style="position:absolute;inset:0;background:rgba(8,16,20,.55)" id="evoDim"></div><img class="m px" id="evoA" src="'+oldS+'" alt=""><div class="say" id="evoSay">어라…?<br>'+esc(NAMES[p.no])+'의 모습이…!</div></div></div>';
 const box=document.getElementById('evo'),a=document.getElementById('evoA'),say=document.getElementById('evoSay');
 setTimeout(()=>{if(cancelled)return;box.style.background='radial-gradient(circle at 50% 45%,#2a3f52,#070d12 70%)';box.classList.remove('stage');document.getElementById('evoDim').remove();a.classList.add('sil');
  say.innerHTML='<button class="btn soft" id="evoCancel">진화 취소하기</button>';say.style.background='transparent';say.style.border='none';say.style.textAlign='center';
  document.getElementById('evoCancel').onclick=()=>{cancelled=true;closeLayer();toast('진화를 멈췄어요.');};
  let iv=420,flip=false,t=0;
  const loop=()=>{if(cancelled)return;flip=!flip;a.src=flip?newS:oldS;t+=iv;iv=Math.max(55,iv*.86);if(t<3400)setTimeout(loop,iv);else boom();};loop();},1600);
 function boom(){if(cancelled)return;const el=topEls(p).tops[0]||'metal';const c=ELC[el];say.innerHTML='';a.src=newS;
  const b=document.createElement('div');b.className='burst';b.style.background='radial-gradient(circle,#fff 0%,#fff6d6 15%,'+c+' 40%,rgba(0,0,0,0) 70%)';box.insertBefore(b,a);
  setTimeout(()=>{if(cancelled)return;
   p.prev=JSON.parse(JSON.stringify(Object.assign({},p,{prev:null})));
   const oldName=NAMES[p.no];p.no=target;p.st++;p.lv=1;p.exp=0;p.en=maxEn(p);EL.forEach(e=>{p.el[e]=0;p.elT[e]=0;});p.lock=null;dexAdd(target);
   a.classList.remove('sil');b.remove();box.classList.add('stage');box.style.background='';
   say.style.cssText='';say.innerHTML='축하합니다!<br>'+esc(oldName)+'은(는) <b>'+esc(NAMES[target])+'</b>(으)로 진화했다!<br><small style="color:#2b5a5e">행동력이 가득 찼어요!</small><div style="margin-top:10px;text-align:right"><button class="btn" id="evoOk">확인</button></div>';
   document.getElementById('evoOk').onclick=closeLayer;commit();},1100);}
}
function closeLayer(){document.getElementById('layer').innerHTML='';}
function confirmBox(title,msg,yes){const L=document.getElementById('layer');L.innerHTML='<div class="overlay"><div class="modal" role="dialog" aria-label="'+esc(title)+'"><b class="serif" style="font-size:22px;color:#ffd36e">'+esc(title)+'</b><p style="margin:0">'+esc(msg)+'</p><div style="display:flex;gap:8px;margin-top:6px"><button class="btn" id="cfY">확인</button><button class="btn ghost" id="cfN">취소</button></div></div></div>';document.getElementById('cfY').onclick=()=>{closeLayer();yes();};document.getElementById('cfN').onclick=closeLayer;}
function feedMenu(){const L=document.getElementById('layer');const ks=['fire','water','wood','earth','metal','yy'];
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="기운 먹이기"><b class="serif" style="font-size:20px">어떤 기운을 먹일까요?</b><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%">'+ks.map(k=>{const id=k==='yy'?'ki_yy':'ki_'+k;return '<button class="act" data-a="feed" data-v="'+k+'"><img class="px" src="assets/'+ITEMS[id].img+'" alt=""><b>'+ITEMS[id].n+'</b><small>보유 '+(acc.inv[id]||0)+'</small></button>';}).join('')+'</div><button class="btn ghost" data-close="1">닫기</button></div></div>';}
function susMenu(){const L=document.getElementById('layer');L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="수상한 기운"><b class="serif" style="font-size:20px">수상한 기운</b><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%">'+['sus_s','sus_m','sus_l'].map(k=>'<button class="act" data-a="sus" data-v="'+k+'"><img class="px" src="assets/'+ITEMS[k].img+'" alt=""><b>'+['소','중','대'][['sus_s','sus_m','sus_l'].indexOf(k)]+'</b><small>보유 '+(acc.inv[k]||0)+'</small></button>').join('')+'</div><p class="muted" style="color:#c9d8d5">빨리 크는 대신 오행이 무작위로 올라 분기가 틀어질 수 있어요.</p><button class="btn ghost" data-close="1">닫기</button></div></div>';}

/* ================= 화면 ================= */
function header(){
 const tabs=[['home','환수'],['train','선계수련'],['gear','장비'],['bag','가방'],['shop','상점'],['code','코드'],['dex','도감']];
 return '<header class="sky"><div class="bar"><span class="logo">환수키우기</span><nav class="main" aria-label="주 메뉴">'+tabs.map(([k,n])=>'<button data-view="'+k+'" class="'+(view===k?'on':'')+'">'+n+'</button>').join('')+'</nav><div class="coinbox"><img class="px" src="assets/i/coin_spin.gif" alt="" width="44" height="44"><b>'+fmt(acc.coins)+'</b><span class="muted" style="margin-left:4px">코인</span></div><span style="color:#fff8e6;font-size:13px">'+esc(acc.nick||acc.id)+'</span><button class="btn ghost sm" data-a2="logout">로그아웃</button></div>'+
 ((cfg.expMult||1)>1||cfg.notice?'<div class="banner">'+((cfg.expMult||1)>1?'<span class="tag">이벤트</span><span>경험치 '+cfg.expMult+'배 적용 중</span>':'')+(cfg.notice?'<span>[공지] '+esc(cfg.notice)+'</span>':'')+'</div>':'')+
 (acc.offset?'<div class="banner" style="background:#7a4512">테스트 시간 +'+(acc.offset/H).toFixed(1)+'시간 앞당겨진 상태예요</div>':'')+'</header>';
}
function slotsBar(){return '<div class="slots" role="tablist" aria-label="환수 슬롯">'+[0,1,2].map(i=>{const p=acc.slots[i];if(!p)return '<button role="tab" class="slot'+(sel===i?' on':'')+'" data-sel="'+i+'"><img class="px" src="assets/i/q.png" alt="" style="padding:10px"><span><b>빈 슬롯</b><small>알 코드를 입력하세요</small></span></button>';
 const st=p.train?'수련 중 · '+fmtDur(p.train.end-now()):p.sick!=null?'아파요!':p.sleep?'자는 중':p.st+'단계 · Lv '+p.lv;
 return '<button role="tab" class="slot'+(sel===i?' on':'')+'" data-sel="'+i+'"><img class="px" src="'+img(p.no)+'" alt=""><span><b>'+NAMES[p.no]+'</b><small>'+st+'</small></span></button>';}).join('')+'</div>';}
function bar(lb,v,max,grad,warn){const w=Math.max(0,Math.min(100,v/max*100));return '<div class="stat"><span class="lb">'+lb+'</span><div class="tr"><i style="width:'+w+'%;background:linear-gradient(90deg,'+grad+')"></i></div><span class="v" style="'+(warn?'color:#b02a1f':'')+'">'+fmt(v)+(max!==100?'/'+fmt(max):'')+'</span></div>';}
function elBars(p){const order=p.lock||[...EL].sort((a,b)=>p.el[b]-p.el[a]||p.elT[a]-p.elT[b]);
 return order.map((e,r)=>{const v=p.el[e],locked=p.lock&&r===0,cap=p.lock?[50,40,30,10,10][r]:50;
  return '<div class="el"><div class="orb'+(locked?' glow':'')+'" style="border-color:'+ELC[e]+';background:'+ELBG[e]+'"><img src="assets/i/'+e+'.svg" alt=""></div><div style="flex:1;display:flex;flex-direction:column;gap:3px"><div style="display:flex;justify-content:space-between;font-size:13px"><b style="color:'+ELC[e]+'">'+ELK[e]+(p.lock?' · '+(r+1)+'위':'')+'</b><b>'+v+(locked?' 고정':' <span class="muted">/ '+cap+'</span>')+'</b></div><div class="trk'+(locked?' glow':'')+'" style="border:1px solid '+ELC[e]+'"><i style="width:'+(v/50*100)+'%;background:linear-gradient(90deg,'+ELG[e]+')"></i>'+(p.lock&&r>0?'<span class="cap" style="left:'+(cap/50*100)+'%"></span>':'')+'</div></div></div>';}).join('');}
function vHome(){
 const p=P();
 if(!p){const n=acc.notice[sel];return slotsBar()+'<div class="card" style="max-width:560px">'+(n?'<p class="warn">'+esc(n)+'</p>':'')+'<h2>알 코드 입력</h2><p class="muted">운영자에게 받은 알 코드를 입력하면 이 슬롯에서 알을 키울 수 있어요.</p><form data-form="egg" style="display:flex;gap:8px;flex-wrap:wrap"><label class="f" style="flex:1">알 코드<input type="text" name="code" placeholder="EGG-XXXX-XXXX" required></label><button class="btn teal" style="align-self:flex-end">알 받기</button></form></div>';}
 const e=evoCheck(p),bd=badgeOf(p),st=stats(p),d=daily(p),ad=accDaily(),mx=maxLv(p.st),hr=hearts(p);
 const stCls=p.sick!=null?' sick':p.sleep?' sleep':'';
 const status=p.train?'<span class="chip" style="background:rgba(43,90,94,.9);color:#e8fff8">수련 중 · '+esc(SPOTS[p.train.s].n)+' · '+fmtDur(p.train.end-now())+'</span>':p.sick!=null?'<span class="chip" style="background:#8f2219;color:#fff">아파요! 소멸까지 '+fmtDur(p.sick+24*H-now())+'</span>':p.sleep?'<span class="chip" style="background:#2c3466;color:#e6e9ff">자는 중 · '+fmtDur(p.sleep-now())+'</span>':'<span class="chip" style="background:rgba(43,90,94,.9);color:#e8fff8">수련 가능</span>';
 const warns=[];if(p.cl<=20)warns.push('청결도가 20 이하예요. 1시간마다 병에 걸릴 수 있어요.');if(p.hu<=10)warns.push('배가 너무 고파요!');if(p.th<=10)warns.push('목이 너무 말라요!');
 const lvTxt=p.st>=12?'완성':p.lv>=mx?'Lv '+p.lv+' MAX':'Lv '+p.lv;
 const expW=p.st>=12||p.lv>=mx?100:p.exp/need(p.lv,p.st)*100;
 const acts=[['feed','',ITEMS.ki_fire.img,'기운 먹이기','포만감 '+Math.round(p.hu)],['dew','',ITEMS.dew.img,'설화의 이슬','보유 '+(acc.inv.dew||0)],['soap','',ITEMS.soap.img,'씻기기','비누 '+(acc.inv.soap||0)],['pat','','i/pat.png','쓰다듬기','오늘 '+d.pat+'/2'],['play','','i/play.png','놀아주기',d.play?'오늘 완료':'행동력 -10'],['sleep','','i/sleep.png',p.sleep?'깨우기':'재우기','남은 '+(2-d.sleep)+'회'],['elixir','',ITEMS.elixir.img,'영약환단','보유 '+(acc.inv.elixir||0)],['susm','',ITEMS.sus_s.img,'수상한 기운','소·중·대'],['energy','',ITEMS.sec_active.img,'행동력 비서','보유 '+(acc.inv.sec_active||0)],['resetKi','',ITEMS.reset_ki.img,'오행초기화','보유 '+(acc.inv.reset_ki||0)]];
 const adm=['sec_instant','sec_cure','sec_cancel'].filter(k=>acc.inv[k]>0).map(k=>['admItem',k,ITEMS[k].img,ITEMS[k].n,'보유 '+acc.inv[k]]);

 return slotsBar()+'<div class="row"><section class="grow" aria-label="환수 모습"><div class="stagebox stage'+stCls+'"><div style="position:absolute;left:18px;top:16px;display:flex;flex-direction:column;gap:8px"><div class="plate" style="display:flex;align-items:baseline;gap:8px"><span class="serif" style="font-size:24px;font-weight:700">'+NAMES[p.no]+'</span><span class="muted">no.'+String(p.no).padStart(2,'0')+' · '+p.st+'단계</span></div><div style="display:flex;gap:6px;flex-wrap:wrap">'+(bd?'<span class="chip '+bd[0]+(bd[1]==='성수'?' glow':'')+'">'+bd[1]+'</span>':'')+status+'</div></div><div class="plate cpp" style="position:absolute;right:18px;top:16px;min-width:170px"><div style="display:flex;justify-content:space-between;align-items:baseline"><span class="muted">전투력</span><b style="font-size:18px;color:#8a2a12">'+fmt(cp(p))+'</b></div><div class="muted" style="display:flex;justify-content:space-between"><span>호감도 보너스</span><span>+'+HEART_CP[hr]+'%</span></div></div><img class="pet px" src="'+img(p.no)+'" alt="'+NAMES[p.no]+'"><div style="position:absolute;left:0;right:0;bottom:0;padding:10px 18px;background:linear-gradient(0deg,rgba(20,40,46,.78),rgba(20,40,46,0));display:flex;align-items:center;gap:12px;color:#fff8e6"><b>'+lvTxt+'</b><div style="flex:1;height:12px;border-radius:6px;background:rgba(255,255,255,.25);overflow:hidden"><i style="display:block;height:100%;width:'+expW+'%;background:linear-gradient(90deg,#f0c75e,#fff0b5)"></i></div><span style="font-size:13px">'+(p.st>=12?'최종 완성':p.lv>=mx?'경험치 MAX':fmt(p.exp)+' / '+fmt(need(p.lv,p.st)))+'</span></div></div>'+
 '<div class="card"><div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;align-items:center"><h2 style="margin:0">돌보기</h2><label style="display:flex;gap:8px;align-items:center;font-size:13px;cursor:pointer"><input type="checkbox" data-a="autoSleep" '+(acc.autoSleep===true?'checked':'')+' style="width:18px;height:18px;accent-color:#2b5a5e">수련 후 자동 수면 <span class="muted">(오늘 남은 수면 '+(2-d.sleep)+'회)</span></label></div>'+warns.map(w=>'<p class="warn" style="margin:8px 0 0">'+w+'</p>').join('')+
 '<div class="acts" style="margin-top:12px">'+acts.concat(adm).map(a=>'<button class="act" data-a="'+a[0]+'" data-v="'+a[1]+'"><img class="px" src="assets/'+a[2]+'" alt=""><b>'+a[3]+'</b><small>'+a[4]+'</small></button>').join('')+'</div>'+
 '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn'+(e.ok?' teal':'')+'" style="flex:1 1 220px;min-height:52px;font-size:15px" data-a="evolve" '+(e.ok?'':'disabled')+'>'+(e.ok?'진화하기 → ???':e.done?'최종 형태':'진화하기 · '+esc(e.reason))+'</button><button class="btn" style="flex:1 1 140px" data-a="liberate" '+(p.st<4?'disabled':'')+'>해방하기</button><button class="btn soft" style="flex:1 1 140px" data-a="home" '+(p.st<4?'disabled':'')+'>선계 귀환'+(p.st>=4?' · '+REFUND[p.st]+'코인':'')+'</button></div>'+(e.stuck?'<p class="warn" style="margin:10px 0 0">진화 조건을 맞추지 못해 최종 표시가 붙었어요: '+esc(e.reason)+'. 기운을 더 먹이거나 오행을 초기화하면 다시 진화할 수 있어요.</p>':'')+'</div></section>'+
 '<aside class="side" aria-label="환수 상태"><div class="card"><h2>상태</h2>'+bar('행동력',p.en,maxEn(p),'#3d7d84,#7cc4c2')+bar('포만감',p.hu,100,'#c9822b,#f0c98a',p.hu<=10)+bar('목마름',p.th,100,'#3b8beb,#a9d6ff',p.th<=10)+bar('청결도',p.cl,100,p.cl<=20?'#c0392b,#f08a7e':'#6fae3a,#bfe59a',p.cl<=20)+
 '<div class="stat"><span class="lb">호감도</span><span role="img" aria-label="하트 5개 중 '+hr+'개" style="display:flex;gap:3px">'+[0,1,2,3,4].map(i=>'<svg aria-hidden="true" width="22" height="20" viewBox="0 0 24 22"><path d="M12 21 2.5 11.5A5.5 5.5 0 0 1 12 4a5.5 5.5 0 0 1 9.5 7.5z" fill="'+(i<hr?'#e0505a':'#f3e3d8')+'" stroke="#a8323a" stroke-width="1.5"/></svg>').join('')+'</span><span class="muted" style="margin-left:auto">'+Math.round(p.aff)+'/100</span></div></div>'+
 '<div class="card"><div style="display:flex;justify-content:space-between;align-items:baseline"><h2 style="margin:0">오행</h2><span class="muted">'+(p.st<12&&CHILD[p.no].length?'다음 진화: '+esc(CHILD[p.no].length===1?condText(CHILD[p.no][0]):'분기점'):'')+'</span></div>'+elBars(p)+'<p class="muted" style="margin:6px 0 0">1위가 50이 되면 순위가 고정되고, 아래 순위는 40/30/10/10이 상한이에요.</p></div>'+
 '<div class="card"><div style="display:flex;justify-content:space-between"><h2 style="margin:0 0 8px">장비</h2><button class="btn soft sm" data-view="gear">장비 관리</button></div><div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px">'+['w','a','s'].map(t=>{const g=p.eq[t]?gearOf(p.eq[t]):null;return g?'<div class="gear g'+g.g+'"><img class="px" src="assets/eq/'+g.g+'_'+t+'.gif" alt=""><b class="c'+g.g+'" style="font-size:12px">'+GN[g.g]+' +'+g.p+'</b><small class="muted">'+TN[t]+'</small></div>':'<div class="gear"><div style="width:72px;height:72px;display:flex;align-items:center;justify-content:center" class="muted">비어 있음</div><small class="muted">'+TN[t]+'</small></div>';}).join('')+'</div></div></aside></div>';
}
function vTrain(){const p=P();
 if(!p)return slotsBar()+'<div class="card">빈 슬롯이에요. 환수를 고른 뒤 수련을 보내세요.</div>';
 const s=selSpot==null?Math.min(9,Math.max(0,p.st-1)):selSpot,sp=SPOTS[s],c=cp(p),ratio=c/sp.rec;
 const running=acc.slots.map((q,i)=>q&&q.train?'<div style="display:flex;gap:10px;align-items:center;margin:6px 0"><img class="px" src="'+img(q.no)+'" alt="" width="48" height="48" style="object-fit:contain"><div style="flex:1"><div style="display:flex;justify-content:space-between;font-size:14px"><b>'+NAMES[q.no]+' · '+esc(SPOTS[q.train.s].n)+'</b><b style="color:#2b5a5e">'+fmtDur(q.train.end-now())+'</b></div><div class="stat" style="margin:4px 0"><div class="tr"><i style="width:'+((now()-q.train.start)/(q.train.end-q.train.start)*100)+'%;background:linear-gradient(90deg,#3d7d84,#7cc4c2)"></i></div></div></div></div>':'').join('');
 return slotsBar()+'<div class="row"><section class="grow"><div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px"><h1 class="serif" style="margin:0;font-size:26px">선계수련</h1>'+((cfg.expMult||1)>1?'<b style="color:#2b5a5e;font-size:13px">이벤트: 경험치 '+cfg.expMult+'배</b>':'')+'</div><div class="grid2">'+SPOTS.map((q,i)=>{const r=c/q.rec,tag=i===Math.min(9,p.st-1)?['추천','background:#f0c75e;color:#3a2a08']:r>=1?['여유','background:#e3f1e4;color:#2e7d3a']:['전투력 부족','background:#fbe4df;color:#8f2219'];
  return '<button class="spot'+(i===s?' on':'')+'" data-spot="'+i+'"><div class="th thumb" style="background-position:'+q.pos+';filter:hue-rotate('+q.hue+'deg)"></div><div style="flex:1;display:flex;flex-direction:column;gap:6px;min-width:0"><div style="display:flex;align-items:center;gap:6px"><b class="muted">'+(i+1)+'</b><b class="serif" style="font-size:17px">'+q.n+'</b><span class="chip" style="margin-left:auto;padding:2px 8px;font-size:11px;'+tag[1]+'">'+tag[0]+'</span></div><div class="kv"><span>추천 <b>'+fmt(q.rec)+'</b></span><span>시간 <b>'+(q.min<60?q.min+'분':q.min/60+'시간')+'</b></span><span>경험치 <b>'+fmt(q.exp)+'</b></span><span>행동력 <b style="color:#2b5a5e">-'+q.cost+'</b></span></div></div></button>';}).join('')+'</div></section>'+
 '<aside class="side"><div class="card"><h2>선택한 수련지</h2><div class="thumb" style="height:110px;border-radius:10px;background-position:'+sp.pos+';filter:hue-rotate('+sp.hue+'deg);border:1px solid var(--line)"></div><div style="display:flex;justify-content:space-between;align-items:baseline;margin:10px 0"><b class="serif" style="font-size:21px">'+(s+1)+'. '+sp.n+'</b><b style="font-size:13px;color:'+(ratio>=1?'#2e7d3a':'#b02a1f')+'">전투력 '+(ratio>=1?'여유 +':'부족 ')+Math.round((ratio-1)*100)+'%</b></div><div class="kv" style="font-size:14px"><span>보낼 환수 <b>'+NAMES[p.no]+'</b></span><span>전투력 <b>'+fmt(c)+'</b></span><span>행동력 <b>'+Math.floor(p.en)+' → '+Math.floor(p.en-sp.cost)+'</b></span><span>예상 경험치 <b>'+fmt(sp.exp*(cfg.expMult||1))+'</b></span></div><p class="muted">끝나면 포만감·목마름·청결도가 한 번에 줄어요 (최저 10).'+(acc.autoSleep===true?' 끝나면 자동으로 잠들어요.':'')+'</p><button class="btn teal" style="width:100%;min-height:52px;font-size:17px" data-a="train" data-v="'+s+'" '+(p.train||p.sick!=null||p.sleep||p.en<sp.cost||p.st>=12?'disabled':'')+'>'+(p.train?'수련 중':p.sleep?'자는 중 (먼저 깨우세요)':p.sick!=null?'아파서 못 가요':p.en<sp.cost?'행동력 부족':'수련 보내기')+'</button></div><div class="card"><h2>진행 중</h2>'+(running||'<p class="muted">진행 중인 수련이 없어요.</p>')+'</div></aside></div>';}
function vDex(){const own=Object.keys(acc.dex).length,freed=Object.values(acc.dex).filter(d=>d.freed).length;
 return '<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap"><h1 class="serif" style="margin:0;font-size:26px">환수 도감</h1><div style="display:flex;align-items:center;gap:10px;flex:1 1 280px;max-width:420px"><div class="stat" style="flex:1;margin:0"><div class="tr"><i style="width:'+own/80*100+'%;background:linear-gradient(90deg,#c9a24a,#f0d78a)"></i></div></div><b>'+own+' / 80</b><span class="muted">해방 '+freed+'</span></div></div><div class="dex">'+NAMES.map((n,i)=>{const d=acc.dex[i];if(!d)return '<div class="dc no"><span class="muted" style="align-self:flex-start;font-weight:700">no.'+String(i).padStart(2,'0')+'</span><img class="px" src="assets/i/q.png" alt="" style="padding:20px;opacity:.7"><span class="n" style="color:#9a8b6c">???</span><span class="muted" style="min-height:14px"></span></div>';
  const b=SUNGSU.has(i)?['b-s','성수']:YOUNGSU.has(i)?['b-y','영수']:!CHILD[i].length?['b-f','최종']:null;
  return '<div class="dc"><span class="muted" style="align-self:flex-start;font-weight:700">no.'+String(i).padStart(2,'0')+'</span><img class="px" src="'+img(i)+'" alt=""><span class="n">'+n+'</span><span class="muted" style="min-height:14px">'+esc(d.d)+'</span>'+(b?'<span class="badge '+b[0]+'">'+b[1]+'</span>':'')+(d.freed?'<span class="seal" aria-label="해방함">解</span>':'')+'</div>';}).join('')+'</div>';}
function vShop(){const cats=['기운','생활','약','성장','강화','기타'],ad=accDaily();
 return '<h1 class="serif" style="margin:0;font-size:26px">상점</h1>'+cats.map(c=>'<div class="card"><h2>'+c+'</h2><div class="items">'+Object.entries(ITEMS).filter(([k,v])=>v.cat===c).map(([k,v])=>{const lim=v.daily?(ad[k]||0)+'/'+v.daily:'';return '<div class="item"><img class="px" src="assets/'+v.img+'" alt=""><div class="t"><b>'+v.n+'</b><small>'+v.d+'</small><small>'+v.p+'코인 · 보유 '+(acc.inv[k]||0)+(lim?' · 오늘 구매 '+lim:'')+'</small></div><div style="display:flex;flex-direction:column;gap:4px"><button class="btn sm" data-buy="'+k+'" data-n="1">1개</button>'+(v.daily?'':'<button class="btn soft sm" data-buy="'+k+'" data-n="10">10개</button>')+'</div></div>';}).join('')+'</div></div>').join('')+
 '<div class="card"><h2>장비 (일반 등급)</h2><div class="items">'+['w','a','s'].map(t=>'<div class="item"><img class="px" src="assets/eq/0_'+t+'.gif" alt=""><div class="t"><b>일반 '+TN[t]+'</b><small>'+Object.keys(GS[t]).map(k=>SL[k]+' '+gstat(t,0,0,k)+(PCT[k]?'%':'')).join(', ')+'</small><small>30코인</small></div><button class="btn sm" data-buyeq="'+t+'">구매</button></div>').join('')+'</div></div>';}
function vBag(){const has=Object.entries(acc.inv).filter(([k,n])=>n>0&&ITEMS[k]);
 return '<h1 class="serif" style="margin:0;font-size:26px">가방</h1><div class="card"><div class="items">'+(has.length?has.map(([k,n])=>'<div class="item"><img class="px" src="assets/'+ITEMS[k].img+'" alt=""><div class="t"><b>'+ITEMS[k].n+' ×'+n+'</b><small>'+ITEMS[k].d+'</small></div></div>').join(''):'<p class="muted">가방이 비어 있어요.</p>')+'</div><p class="muted">아이템은 환수 화면의 돌보기 버튼에서 사용해요.</p></div>';}
function gearCard(g,extra){return '<button class="gear g'+g.g+(S.forgeSel.includes(g.u)?' sel':'')+'" data-gsel="'+g.u+'"><img class="px" src="assets/eq/'+g.g+'_'+g.t+'.gif" alt=""><b class="c'+g.g+'" style="font-size:13px">'+GN[g.g]+' '+TN[g.t]+' +'+g.p+'</b><small class="muted">'+(extra||'')+'</small></button>';}
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

function resultOverlay(){const i=acc.slots.findIndex(q=>q&&q.result);if(i<0)return '';const p=acc.slots[i];let res='';{const r=p.result,encN={bless:'성수의 축복 (경험치 ×1.5)',luck:'뜻밖의 행운 (코인 +'+r.coins+')',snack:'선녀의 간식 (포만감·목마름 +30)',lost:'길 잃은 기운 (무작위 오행 +2)',dosa:'도사의 집중수련 (레벨 +1)'};
  res='<div class="overlay"><div class="modal" role="dialog" aria-label="수련 결과"><span style="font-size:12px;color:#f0c75e;letter-spacing:2px">'+esc(r.spot)+' 수련 결과</span><span class="serif" style="font-size:34px;font-weight:700;color:'+(r.out==='fail'?'#c9d8d5':'#ffd36e')+'">'+{fail:'실패…',ok:'성공',great:'대성공!'}[r.out]+'</span><img class="px" src="'+img(p.no)+'" alt="" width="96" height="96" style="object-fit:contain">'+(r.enc?'<div class="chip" style="background:rgba(255,255,255,.08);border:1px solid rgba(240,199,94,.5);color:#fff8e6">인카운트 · '+encN[r.enc]+'</div>':'')+'<b style="font-size:22px">+'+fmt(r.exp)+' EXP</b><span class="muted" style="color:#c9d8d5">Lv '+r.lvFrom+' → '+r.lvTo+(r.max?' (MAX)':'')+'</span><button class="btn" data-ack="'+i+'" style="background:#f0c75e">확인</button></div></div>';}return res;}

/* ================= 공통 렌더 / 로그인 ================= */
const MODE=(document.body.dataset.mode||'player');
let HS=null, unsubMe=null;
function normAcc(d){const a=JSON.parse(JSON.stringify(d));a.notice=a.notice||[null,null,null];a.gear=a.gear||[];a.inv=a.inv||{};a.dex=a.dex||{};a.slots=a.slots||[null,null,null];a.offset=0;return a;}
function render(){
 const app=document.getElementById('app');
 if(!acc){app.innerHTML=loginView(S.loginMsg||'');return;}
 if(MODE==='admin'){app.innerHTML=isAdmin()?adminHeader()+'<main>'+adminBody()+'</main>':'<main><div class="card">운영자 계정이 아니에요. <button class="btn sm" data-a2="logout">로그아웃</button></div></main>';return;}
 const keep=document.activeElement&&document.activeElement.id;
 const body={home:vHome,train:vTrain,gear:vGear,bag:vBag,shop:vShop,code:vCode,dex:vDex}[view]||vHome;
 app.innerHTML=header()+'<main>'+body()+'</main>'+resultOverlay();
 if(keep){const el=document.getElementById(keep);if(el)el.focus();}
}
function loginView(msg){
 const boot=MODE==='admin'&&S.needBoot;
 return '<header class="sky" style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:16px"><div style="display:flex;flex-direction:column;gap:14px;width:min(460px,100%)"><form data-form="login" class="card" style="display:flex;flex-direction:column;gap:12px;border:2px solid var(--gold)"><div style="text-align:center"><h1 style="margin:0"><img src="assets/title.png" alt="starz realm 환수키우기" style="width:100%;height:auto;display:block"></h1>'+(MODE==='admin'?'<p class="serif" style="margin:6px 0 0;font-size:18px;font-weight:700;color:#2b5a5e">운영자 사이트</p>':'')+'</div><label class="f">아이디<input type="text" name="id" autocomplete="username" required></label><label class="f">비밀번호<input type="password" name="pw" autocomplete="current-password" required></label><button class="btn teal" style="min-height:48px">들어가기</button>'+(msg?'<p class="warn" style="margin:0">'+esc(msg)+'</p>':'')+'<p class="muted" style="margin:0">계정은 운영자가 발급해요.</p></form>'+
 (boot?'<form data-form="boot" class="card adm" style="display:flex;flex-direction:column;gap:10px"><b class="serif" style="font-size:18px">첫 메인 운영자 만들기</b><p class="muted" style="margin:0">아직 운영자가 없어요. 처음 한 번만 나오는 화면이에요. 여기서 만든 계정이 메인 운영자가 돼요.</p><label class="f">아이디 (영문·숫자 3~20자)<input type="text" name="id" required></label><label class="f">비밀번호 (6자 이상)<input type="password" name="pw" minlength="6" required></label><label class="f">마크 닉네임<input type="text" name="nick"></label><button class="btn">메인 운영자 만들기</button></form>':'')+'</div></header>';}
async function loadAccount(uid){
 const d=await db.doc('accounts/'+uid).get();
 if(!d.exists){S.loginMsg='계정 정보가 없어요. 운영자에게 문의하세요.';acc=null;await HS.signOut();return render();}
 if(d.data().banned){S.loginMsg='정지된 계정이에요. 운영자에게 문의하세요.';acc=null;await HS.signOut();return render();}
 acc=normAcc(d.data());acc.uid=uid;S.loginMsg='';
 if(MODE==='player'){const ch=tickAll();render();if(ch)save();
  if(unsubMe)unsubMe();unsubMe=db.doc('accounts/'+uid).onSnapshot(s=>{if(!s.exists||!acc||s.metadata&&s.metadata.hasPendingWrites)return;const r=s.data();if((r.rev||0)>(acc.rev||0)){if(r.banned){toast('정지된 계정이에요.');return logout();}acc=normAcc(r);acc.uid=uid;tickAll();render();toast('운영자가 계정 정보를 바꿨어요.');}},()=>{});}
 else{render();if(isAdmin())AD.loadList();}
}
async function logout(){if(unsubMe){unsubMe();unsubMe=null;}acc=null;AS.tgt=null;AS.list=null;try{await HS.signOut();}catch(e){}render();}

/* ================= 운영자 사이트 ================= */
const AS={tab:'users',tgt:null,list:null,eggs:null,logs:null,newPw:'',codeGen:'',slot:0};
function adminHeader(){const tabs=[['users','유저 관리'],['eggs','알 코드'],['event','이벤트·공지'],['tools','코드 테스트'],['logs','변경 기록']];if(isMain())tabs.splice(1,0,['make','계정 만들기']);
 return '<header class="sky"><div class="bar"><span class="logo">환수 운영자</span><nav class="main" aria-label="운영자 메뉴">'+tabs.map(([k,n])=>'<button data-xtab="'+k+'" class="'+(AS.tab===k?'on':'')+'">'+n+'</button>').join('')+'</nav><span style="color:#fff8e6;font-size:13px">'+esc(acc.nick||acc.id)+' ('+(isMain()?'메인 운영자':'보조 운영자')+')</span><button class="btn ghost sm" data-a2="logout">로그아웃</button></div></header>';}
function adminBody(){return {users:aUsers,make:aMake,eggs:aEggs,event:aEvent,tools:aTools,logs:aLogs}[AS.tab]();}
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
 if(!main)return h+'<p class="muted" style="margin-top:10px">보조 운영자는 코인만 바꿀 수 있어요.</p></div>';
 const itemOpts=Object.entries(ITEMS).map(([k,v])=>'<option value="'+k+'">'+v.n+'</option>').join('');
 h+='<h3 class="serif" style="margin:18px 0 6px">아이템창</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">아이템<select id="xItem">'+itemOpts+'</select></label><label class="f">수량<input type="number" id="xQty" value="10" min="1" style="width:80px"></label><button class="btn sm" data-x="itemGive">지급</button></div><div class="items" style="margin-top:10px">'+Object.entries(ITEMS).map(([k,v])=>'<label class="item" style="cursor:default"><img class="px" src="assets/'+v.img+'" alt=""><span class="t"><b>'+v.n+'</b></span><input type="number" min="0" data-xinv="'+k+'" value="'+(t.inv[k]||0)+'" style="width:72px"></label>').join('')+'</div><div style="margin-top:8px"><button class="btn sm" data-x="invSave">아이템 수량 저장</button></div>';
 h+='<h3 class="serif" style="margin:18px 0 6px">장비</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">종류<select id="xEqT"><option value="w">무기</option><option value="a">방어구</option><option value="s">보조무기</option></select></label><label class="f">등급<select id="xEqG">'+GN.map((n,i)=>'<option value="'+i+'">'+n+'</option>').join('')+'</select></label><label class="f">강화<input type="number" id="xEqP" value="0" min="0" max="9" style="width:70px"></label><button class="btn sm" data-x="eqGive">장비 지급</button></div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;margin-top:10px">'+(t.gear.length?t.gear.map(g=>'<div class="gear g'+g.g+'"><img class="px" src="assets/eq/'+g.g+'_'+g.t+'.gif" alt="" style="width:56px;height:56px"><b class="c'+g.g+'" style="font-size:12px">'+GN[g.g]+' '+TN[g.t]+' +'+g.p+'</b><button class="btn red sm" data-xgdel="'+esc(g.u)+'">회수</button></div>').join(''):'<p class="muted">장비가 없어요.</p>')+'</div>';
 const p=t.slots[AS.slot];
 h+='<h3 class="serif" style="margin:18px 0 6px">환수</h3><div class="slots">'+[0,1,2].map(i=>'<button class="slot'+(AS.slot===i?' on':'')+'" data-xslot="'+i+'">'+(t.slots[i]?'<img class="px" src="'+img(t.slots[i].no)+'" alt=""><span><b>'+NAMES[t.slots[i].no]+'</b><small>'+t.slots[i].st+'단계 Lv '+t.slots[i].lv+(t.slots[i].sick!=null?' · 아픔':'')+(t.slots[i].train?' · 수련 중':'')+'</small></span>':'<span style="padding:12px"><b>빈 슬롯 '+(i+1)+'</b>'+(t.notice&&t.notice[i]?'<small>'+esc(t.notice[i])+'</small>':'')+'</span>')+'</button>').join('')+'</div>';
 if(p){const formOpts=NAMES.map((n,i)=>'<option value="'+i+'" '+(p.no===i?'selected':'')+'>'+String(i).padStart(2,'0')+' '+n+' ('+FORMS[i].st+'단계)</option>').join('');
  h+='<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:12px"><label class="f">환수 종류<select id="xNo">'+formOpts+'</select></label><label class="f">레벨<input type="number" id="xLv" value="'+p.lv+'" min="1" max="99" style="width:70px"></label>'+EL.map(e=>'<label class="f">'+ELK[e]+'<input type="number" id="xEl_'+e+'" value="'+p.el[e]+'" min="0" max="50" style="width:64px"></label>').join('')+'</div><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:8px">'+[['hu','포만감'],['th','목마름'],['cl','청결도'],['aff','호감도'],['en','행동력']].map(([k,n])=>'<label class="f">'+n+'<input type="number" id="xS_'+k+'" value="'+Math.round(p[k])+'" min="0" style="width:72px"></label>').join('')+'<button class="btn teal sm" data-x="petApply">적용</button></div><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn sm" data-xp="finish">수련 즉시 완료</button><button class="btn sm" data-xp="wake">깨우기</button><button class="btn sm" data-xp="cure">병 치료</button><button class="btn sm" data-xp="unlock">오행 고정 풀기</button><button class="btn sm" data-xp="daily">오늘 횟수 초기화</button><button class="btn sm red" data-xp="del">환수 삭제</button></div>';}
 else h+='<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><button class="btn teal sm" data-xp="egg">이 슬롯에 알 넣기</button>'+(t.notice&&t.notice[AS.slot]?'<span class="muted">'+esc(t.notice[AS.slot])+'</span>':'')+'</div><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:8px"><label class="f">복구할 환수<select id="xRestore">'+NAMES.map((n,i)=>'<option value="'+i+'">'+String(i).padStart(2,'0')+' '+n+'</option>').join('')+'</select></label><label class="f">레벨<input type="number" id="xRLv" value="1" min="1" style="width:70px"></label><button class="btn sm" data-x="restore">환수 복구</button><span class="muted">소멸·실수 해방 복구용</span></div>';
 const owned=Object.keys(t.dex).map(Number).sort((a,b)=>a-b);
 h+='<h3 class="serif" style="margin:18px 0 6px">도감 ('+owned.length+'/80)</h3><p class="muted" style="margin:0 0 6px">'+(owned.length?owned.map(i=>String(i).padStart(2,'0')+' '+NAMES[i]+(t.dex[i].freed?'(解)':'')).join(', '):'비어 있어요')+'</p><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">도감 번호<input type="number" id="xDex" min="0" max="79" value="0" style="width:80px"></label><button class="btn sm" data-x="dexAdd">채우기</button><button class="btn soft sm" data-x="dexDel">지우기</button><button class="btn soft sm" data-x="dexFree">解 표시 켜기/끄기</button></div>';
 h+='<h3 class="serif" style="margin:18px 0 6px">계정</h3><div style="display:flex;gap:8px;flex-wrap:wrap">'+(t.uid!==acc.uid?'<button class="btn soft sm" data-x="ban">'+(t.banned?'정지 해제':'계정 정지')+'</button><button class="btn red sm" data-x="delAcc">게임 데이터 삭제</button>':'')+'</div><p class="muted">비밀번호를 잊은 유저는 Firebase 콘솔 → Authentication에서 그 사용자를 삭제한 뒤, "계정 만들기"에서 같은 아이디로 다시 만들면 게임 데이터가 그대로 이어져요.</p></div>';
 return h;}
function aMake(){return '<div class="card adm" style="max-width:640px"><h2>계정 만들기</h2><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">아이디 (영문·숫자 3~20자)<input type="text" id="nId" style="width:160px"></label><label class="f">마크 닉네임<input type="text" id="nNick" style="width:160px"></label><label class="f">권한<select id="nRole"><option value="player">플레이어</option><option value="sub">보조 운영자</option><option value="main">메인 운영자</option></select></label><button class="btn teal sm" data-x="mkAcc">만들기</button></div>'+(AS.newPw?'<p class="ok" style="margin-top:10px;font-size:15px">'+esc(AS.newPw)+'</p>':'')+'<p class="muted">비밀번호는 자동으로 만들어져요. 이 화면을 벗어나면 다시 볼 수 없으니 바로 DM으로 전달하세요. 예전에 쓰던 아이디로 다시 만들면 남아 있던 게임 데이터가 새 계정으로 옮겨져요.</p></div>';}
function aEggs(){return '<div class="card adm"><h2>알 코드 발급</h2><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">대상 아이디 (비우면 누구나)<input type="text" id="egT" style="width:160px"></label><label class="f">개수<input type="number" id="egN" value="1" min="1" max="20" style="width:70px"></label><button class="btn sm" data-x="mkEgg">발급</button><button class="btn soft sm" data-x="loadEggs">목록 새로고침</button></div>'+(AS.eggs?'<div style="overflow-x:auto"><table class="t" style="margin-top:10px"><tr><th>코드</th><th>대상</th><th>상태</th><th>발급</th><th></th></tr>'+AS.eggs.map(e=>'<tr><td><b>'+esc(e.id)+'</b></td><td>'+esc(e.target||'누구나')+'</td><td>'+(e.used?'사용됨 ('+esc(e.by)+')':'미사용')+'</td><td>'+esc(e.from||'')+' · '+new Date(e.t).toLocaleDateString('ko-KR')+'</td><td>'+(e.used?'':'<button class="btn red sm" data-xegdel="'+esc(e.id)+'">취소</button>')+'</td></tr>').join('')+'</table></div>':'')+'</div>';}
function aEvent(){return '<div class="card adm" style="max-width:640px"><h2>이벤트 · 공지</h2><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">경험치 배율<select id="cfgExp">'+[1,1.5,2,3].map(v=>'<option '+((cfg.expMult||1)==v?'selected':'')+'>'+v+'</option>').join('')+'</select></label>'+(isMain()?'<label class="f" style="flex:1;min-width:220px">상단 공지 (비우면 숨김)<input type="text" id="cfgNotice" value="'+esc(cfg.notice||'')+'"></label>':'')+'<button class="btn sm" data-x="saveCfg">저장</button></div><p class="muted">'+(cfg.by?'마지막 변경: '+esc(cfg.by):'')+'</p></div>';}
function aTools(){return '<div class="card adm" style="max-width:640px"><h2>환수 코드 만들기 (테스트용)</h2><p class="muted">게임 없이 코인 입력을 확인할 때 써요. 데이터팩과 같은 계산식이에요.</p><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">플레이어 번호<input type="number" id="cgId" value="1" style="width:100px"></label><label class="f">회차<input type="number" id="cgN" value="1" style="width:80px"></label><label class="f">코인<input type="number" id="cgC" value="10" style="width:80px"></label><button class="btn sm" data-x="genCode">만들기</button></div>'+(AS.codeGen?'<p class="ok" style="margin-top:8px;font-size:16px">'+esc(AS.codeGen)+'</p>':'')+'</div>';}
function aLogs(){return '<div class="card adm"><h2>변경 기록</h2><button class="btn soft sm" data-x="loadLogs">불러오기</button>'+(AS.logs?'<div style="overflow-x:auto"><table class="t" style="margin-top:10px"><tr><th>시각</th><th>운영자</th><th>내용</th></tr>'+AS.logs.map(l=>'<tr><td>'+new Date(l.t).toLocaleString('ko-KR')+'</td><td>'+esc(l.by)+'</td><td>'+esc(l.msg)+'</td></tr>').join('')+'</table></div>':'')+'</div>';}
function randPw(){const c='abcdefghjkmnpqrstuvwxyz23456789';let s='';for(let i=0;i<8;i++)s+=c[Math.floor(rnd()*c.length)];return s;}
function randCode(){const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let s='EGG-';for(let i=0;i<8;i++){s+=c[Math.floor(rnd()*c.length)];if(i===3)s+='-';}return s;}
function blankAcc(id,uid,role,nick){return{id,uid,role:role||'player',nick:nick||id,banned:false,playerNo:null,lastNonce:0,coins:0,inv:{},gear:[],slots:[null,null,null],notice:[null,null,null],dex:{},daily:null,offset:0,autoSleep:false,rev:1,created:Date.now()};}
function tPet(){const p=newPet();const t=Date.now();p.ts=t;p.lastPat=t;p.born=t;return p;}
async function saveTgt(msg){const t=AS.tgt;t.rev=(t.rev||0)+1;await db.doc('accounts/'+t.uid).set(t);if(msg)log(t.id+': '+msg);const i=(AS.list||[]).findIndex(a=>a.uid===t.uid);if(i>=0)AS.list[i]=JSON.parse(JSON.stringify(t));toast('저장했어요.');render();}
const AD={
 async loadList(){const q=await db.collection('accounts').get();AS.list=q.docs.map(d=>Object.assign({uid:d.id},d.data())).sort((a,b)=>(a.id>b.id?1:-1));if(AS.tgt){const n=AS.list.find(a=>a.uid===AS.tgt.uid);AS.tgt=n?normT(n):null;}render();},
 find(){AS.find=document.getElementById('xFind').value.trim();render();},
 reload(){AD.loadList();},
 close(){AS.tgt=null;render();},
 async coinAdd(){const n=Math.abs(+document.getElementById('xCoin').value||0),m=document.getElementById('xMemo').value;AS.tgt.coins=(AS.tgt.coins||0)+n;await saveTgt('코인 +'+n+(m?' ('+m+')':''));},
 async coinSub(){const n=Math.abs(+document.getElementById('xCoin').value||0),m=document.getElementById('xMemo').value;AS.tgt.coins=Math.max(0,(AS.tgt.coins||0)-n);await saveTgt('코인 -'+n+(m?' ('+m+')':''));},
 async coinSet(){const n=Math.max(0,+document.getElementById('xCoin').value||0),m=document.getElementById('xMemo').value,o=AS.tgt.coins||0;AS.tgt.coins=n;await saveTgt('코인 '+o+' → '+n+(m?' ('+m+')':''));},
 async itemGive(){const k=document.getElementById('xItem').value,n=Math.max(1,+document.getElementById('xQty').value||1);AS.tgt.inv[k]=(AS.tgt.inv[k]||0)+n;await saveTgt(ITEMS[k].n+' ×'+n+' 지급');},
 async invSave(){const ch=[];document.querySelectorAll('[data-xinv]').forEach(el=>{const k=el.dataset.xinv,v=Math.max(0,+el.value||0);if((AS.tgt.inv[k]||0)!==v){ch.push(ITEMS[k].n+' '+(AS.tgt.inv[k]||0)+'→'+v);AS.tgt.inv[k]=v;}});if(!ch.length)return toast('바뀐 게 없어요.');await saveTgt('아이템 수정: '+ch.join(', '));},
 async eqGive(){const t=document.getElementById('xEqT').value,g=+document.getElementById('xEqG').value,pl=Math.min(MAXP[g],Math.max(0,+document.getElementById('xEqP').value||0));AS.tgt.gear.push({u:'g'+Date.now()+Math.floor(rnd()*1000),t,g,p:pl,aff:'fire'});await saveTgt('장비 지급 '+GN[g]+' '+TN[t]+' +'+pl);},
 async petApply(){const p=AS.tgt.slots[AS.slot];if(!p)return;const no=+document.getElementById('xNo').value;if(no!==p.no){p.no=no;p.st=FORMS[no].st;tDex(no);}p.lv=Math.max(1,Math.min(maxLv(p.st),+document.getElementById('xLv').value||1));if(p.lv>=maxLv(p.st))p.exp=0;EL.forEach((e,i)=>{p.el[e]=Math.max(0,Math.min(50,+document.getElementById('xEl_'+e).value||0));p.elT[e]=Date.now()+i;});p.lock=EL.some(e=>p.el[e]>=50)?[...EL].sort((a,b)=>p.el[b]-p.el[a]||p.elT[a]-p.elT[b]):null;['hu','th','cl','aff'].forEach(k=>p[k]=Math.max(0,Math.min(100,+document.getElementById('xS_'+k).value||0)));p.en=Math.max(0,+document.getElementById('xS_en').value||0);if(p.hu>0&&p.th>0&&p.cl>0)p.zf=false;await saveTgt('환수 편집: '+NAMES[p.no]+' Lv'+p.lv);},
 async restore(){const no=+document.getElementById('xRestore').value,lv=+document.getElementById('xRLv').value||1;const p=tPet();p.no=no;p.st=FORMS[no].st;p.lv=Math.max(1,Math.min(maxLv(p.st),lv));AS.tgt.slots[AS.slot]=p;AS.tgt.notice[AS.slot]=null;tDex(no);await saveTgt('환수 복구: '+NAMES[no]);},
 async dexAdd(){const n=+document.getElementById('xDex').value;if(!(n>=0&&n<80))return;tDex(n);await saveTgt('도감 채움 '+n);},
 async dexDel(){const n=+document.getElementById('xDex').value;delete AS.tgt.dex[n];await saveTgt('도감 지움 '+n);},
 async dexFree(){const n=+document.getElementById('xDex').value;tDex(n);AS.tgt.dex[n].freed=!AS.tgt.dex[n].freed;await saveTgt('도감 解 '+(AS.tgt.dex[n].freed?'켬':'끔')+' '+n);},
 async ban(){AS.tgt.banned=!AS.tgt.banned;await saveTgt(AS.tgt.banned?'계정 정지':'정지 해제');},
 delAcc(){const t=AS.tgt;confirmBox('게임 데이터 삭제',t.id+'의 환수와 아이템이 모두 사라져요. 로그인 계정은 Firebase 콘솔에서 따로 지워야 해요.',async()=>{await db.doc('accounts/'+t.uid).delete();log(t.id+': 게임 데이터 삭제');AS.tgt=null;await AD.loadList();});},
 async mkAcc(){const id=document.getElementById('nId').value.trim(),nick=document.getElementById('nNick').value.trim(),role=document.getElementById('nRole').value;if(!/^[A-Za-z0-9_-]{3,20}$/.test(id))return toast('아이디는 영문·숫자 3~20자로 해 주세요.');const pw=randPw();let uid;
  try{uid=await HS.createUser(id,pw);}catch(e){return toast(String(e&&e.code||e).includes('email-already-in-use')?'이미 있는 아이디예요. 비밀번호 재발급이라면 Firebase 콘솔에서 먼저 삭제하세요.':'만들지 못했어요: '+(e&&e.code||e));}
  const old=await db.collection('accounts').where('id','==',id).get();let data;
  if(!old.empty){const o=old.docs[0];data=Object.assign({},o.data(),{uid,role,nick:nick||o.data().nick,banned:false,rev:(o.data().rev||0)+1});await db.doc('accounts/'+uid).set(data);if(o.id!==uid)await db.doc('accounts/'+o.id).delete();log(id+': 계정 재발급 (데이터 이어짐)');}
  else{data=blankAcc(id,uid,role,nick);await db.doc('accounts/'+uid).set(data);log(id+': 계정 생성 ('+role+')');}
  AS.newPw='아이디 '+id+' / 비밀번호 '+pw;render();AD.loadList();},
 async mkEgg(){const t=document.getElementById('egT').value.trim(),n=Math.min(20,Math.max(1,+document.getElementById('egN').value||1));const made=[];for(let i=0;i<n;i++){const c=randCode();await db.doc('eggcodes/'+c).set({id:c,target:t||null,used:false,by:null,byUid:null,t:Date.now(),from:acc.id});made.push(c);}log('알 코드 '+n+'개 발급'+(t?' ('+t+' 전용)':''));toast('발급했어요.');await AD.loadEggs();},
 async loadEggs(){const q=await db.collection('eggcodes').orderBy('t','desc').limit(60).get();AS.eggs=q.docs.map(d=>d.data());render();},
 async saveCfg(){cfg.expMult=+document.getElementById('cfgExp').value;const n=document.getElementById('cfgNotice');if(n)cfg.notice=n.value;cfg.by=acc.id+' · '+new Date().toLocaleString('ko-KR');await db.doc('config/global').set(cfg);log('이벤트/공지: 경험치 '+cfg.expMult+'배'+(n?' / 공지 "'+n.value+'"':''));toast('저장했어요.');render();},
 genCode(){const id=+document.getElementById('cgId').value,n=+document.getElementById('cgN').value,c=+document.getElementById('cgC').value;AS.codeGen=id+'-'+n+'-'+c+'-'+((id*37+n*53+c*71+1234)%9973);render();},
 async loadLogs(){const q=await db.collection('adminlogs').orderBy('t','desc').limit(80).get();AS.logs=q.docs.map(d=>d.data());render();}
};
function normT(a){const t=JSON.parse(JSON.stringify(a));t.inv=t.inv||{};t.gear=t.gear||[];t.dex=t.dex||{};t.slots=t.slots||[null,null,null];t.notice=t.notice||[null,null,null];return t;}
function tDex(no){if(!AS.tgt.dex[no])AS.tgt.dex[no]={d:dayKey(Date.now()).slice(5).replace('-','.'),freed:false};}
const MAIN_ONLY=new Set(['itemGive','invSave','eqGive','petApply','restore','dexAdd','dexDel','dexFree','ban','delAcc','mkAcc']);

/* ================= 이벤트 ================= */
document.addEventListener('submit',async ev=>{const f=ev.target;ev.preventDefault();const fd=new FormData(f),k=f.dataset.form;if(busy)return;busy=true;try{
 if(k==='login'){const id=String(fd.get('id')).trim();if(!/^[A-Za-z0-9_-]{1,40}$/.test(id)){S.loginMsg='아이디 또는 비밀번호가 틀렸어요.';return render();}
  let uid;try{uid=await HS.signIn(id,String(fd.get('pw')));}catch(e){S.loginMsg='아이디 또는 비밀번호가 틀렸어요.';return render();}
  await loadAccount(uid);}
 if(k==='boot'){const id=String(fd.get('id')).trim(),pw=String(fd.get('pw')),nick=String(fd.get('nick')||'').trim();if(!/^[A-Za-z0-9_-]{3,20}$/.test(id))return toast('아이디는 영문·숫자 3~20자로 해 주세요.');
  let uid;try{uid=await HS.register(id,pw);}catch(e){return toast('만들지 못했어요: '+(e&&e.code||e));}
  await db.doc('accounts/'+uid).set(blankAcc(id,uid,'main',nick||id));await db.doc('config/bootstrap').set({by:id,t:Date.now()});S.needBoot=false;toast('메인 운영자를 만들었어요!');await loadAccount(uid);}
 if(!acc)return;
 if(k==='egg'){const code=String(fd.get('code')).trim().toUpperCase();const slot=acc.slots[sel]==null?sel:acc.slots.findIndex(s=>!s);if(slot<0)return toast('빈 슬롯이 없어요.');if(!/^EGG-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code))return toast('알 코드 형식이 아니에요.');const d=await db.doc('eggcodes/'+code).get();if(!d.exists)return toast('없는 알 코드예요.');const e=d.data();if(e.used)return toast('이미 사용한 알 코드예요.');if(e.target&&e.target!==acc.id)return toast('다른 사람 전용 알 코드예요.');
  try{await db.doc('eggcodes/'+code).set(Object.assign({},e,{used:true,by:acc.id,byUid:acc.uid,usedT:Date.now()}));}catch(er){return toast('알 코드를 쓰지 못했어요.');}
  acc.slots[slot]=newPet();acc.notice[slot]=null;dexAdd(0);sel=slot;view='home';toast('알을 받았어요!');await commit();}
 if(k==='coin'){const m=String(fd.get('code')).trim().match(/^(\d+)-(\d+)-(\d+)-(\d+)$/);if(!m)return toast('코드 형식이 아니에요. 예: 3-7-10-4821');const [id,n,c,chk]=m.slice(1).map(Number);if((id*37+n*53+c*71+1234)%9973!==chk)return toast('잘못된 코드예요.');if(acc.playerNo&&acc.playerNo!==id)return toast('본인 플레이어 번호의 코드가 아니에요.');if(n<=(acc.lastNonce||0))return toast('이미 사용한 코드예요.');acc.playerNo=id;acc.lastNonce=n;acc.coins+=c;toast('환수 코인 '+c+'개가 들어왔어요!');await commit();}
}finally{busy=false;}});
document.addEventListener('click',async ev=>{const t=ev.target.closest('button,[data-close],input[type=checkbox]');if(!t)return;const ds=t.dataset;
 if(ds.close&&ev.target===t)return closeLayer();
 if(ds.view){view=ds.view;S.forgeSel=[];return render();}
 if(ds.sel!=null){sel=+ds.sel;selSpot=null;S.forgeSel=[];return render();}
 if(ds.spot!=null){selSpot=+ds.spot;return render();}
 if(ds.a){const a=ds.a;if(a==='feed'&&!ds.v)return feedMenu();if(a==='susm')return susMenu();if(A[a])return A[a](ds.v);}
 if(ds.ack!=null){const q=acc.slots[+ds.ack];if(q){q.result=null;return commit();}}
 if(ds.a2==='logout')return logout();
 if(ds.buy){const k=ds.buy,n=+ds.n,it=ITEMS[k],ad=accDaily();if(it.daily&&(ad[k]||0)+n>it.daily)return toast('오늘은 더 살 수 없어요 (하루 '+it.daily+'개).');if(acc.coins<it.p*n)return toast('코인이 부족해요.');acc.coins-=it.p*n;acc.inv[k]=(acc.inv[k]||0)+n;if(it.daily)ad[k]=(ad[k]||0)+n;toast(it.n+' ×'+n+' 구매!');return commit();}
 if(ds.buyeq){if(acc.coins<30)return toast('코인이 부족해요.');acc.coins-=30;acc.gear.push({u:'g'+Date.now()+Math.floor(rnd()*1000),t:ds.buyeq,g:0,p:0,aff:'fire'});toast('일반 '+TN[ds.buyeq]+' 구매!');return commit();}
 if(ds.gsel){const u=ds.gsel;const i=S.forgeSel.indexOf(u);if(i>=0)S.forgeSel.splice(i,1);else{S.forgeSel.push(u);if(S.forgeSel.length>2)S.forgeSel.shift();}return render();}
 if(t.matches('[data-bless]')){S.bless=t.checked;return render();}
 if(t.matches('[data-protect]')){S.protect=t.checked;return render();}
 if(ds.aff){const g=gearOf(S.forgeSel[0]);g.aff=ds.aff;return commit();}
 if(ds.equip){const p=P(),g=gearOf(ds.equip);if(!p)return;const o=equippedBy(g.u);if(o!=null)acc.slots[o].eq[g.t]=null;p.eq[g.t]=g.u;if(p.en>maxEn(p))p.en=maxEn(p);toast('장착했어요.');return commit();}
 if(ds.unequip){const p=P(),g=gearOf(ds.unequip);p.eq[g.t]=null;if(p.en>maxEn(p))p.en=maxEn(p);return commit();}
 if(ds.enh){const g=gearOf(ds.enh);if(g.p>=MAXP[g.g])return;if(acc.coins<ECOST[g.g])return toast('코인이 부족해요.');let r=RATE[g.p+1];if(S.bless){if(!take('sec_bless'))return;r+=.1;}acc.coins-=ECOST[g.g];if(rnd()<r){g.p++;toast('강화 성공! +'+g.p);}else toast('강화 실패… 단계는 그대로예요.');return commit();}
 if(ds.synth){const [a,b]=S.forgeSel.map(gearOf);const sy=SYN[a.g];if(acc.coins<SFEE[a.g])return toast('코인이 부족해요.');let prot=false;if(sy.x&&S.protect){if(!take('sec_protect'))return;prot=true;}acc.coins-=SFEE[a.g];const r=rnd();
  if(r<sy.s){acc.gear=acc.gear.filter(x=>x.u!==a.u&&x.u!==b.u);acc.gear.push({u:'g'+Date.now(),t:a.t,g:a.g+1,p:0,aff:a.aff||'fire'});toast('합성 성공! '+GN[a.g+1]+' '+TN[a.t]+' 획득!');}
  else if(r<sy.s+sy.d){b.g--;b.p=0;toast('합성 실패… 장비 하나가 '+GN[b.g]+'(으)로 내려갔어요.');}
  else if(r<sy.s+sy.d+sy.x){if(prot)toast('파괴될 뻔했지만 파괴방지비서가 막았어요!');else{acc.gear=acc.gear.filter(x=>x.u!==b.u);toast('합성 실패… 장비 하나가 파괴됐어요.');}}
  else toast('합성 실패… 코인만 사라졌어요.');S.forgeSel=[];return commit();}
 // 운영자
 if(MODE!=='admin'||!isAdmin())return;
 if(ds.xtab){AS.tab=ds.xtab;if(ds.xtab==='eggs'&&!AS.eggs)AD.loadEggs();if(ds.xtab==='logs'&&!AS.logs)AD.loadLogs();return render();}
 if(ds.xpick){const a=(AS.list||[]).find(x=>x.uid===ds.xpick);AS.tgt=a?normT(a):null;AS.slot=0;return render();}
 if(ds.x&&AD[ds.x]){if(MAIN_ONLY.has(ds.x)&&!isMain())return toast('메인 운영자만 할 수 있어요.');try{return await AD[ds.x]();}catch(e){toast('실패했어요: '+(e&&e.message||e));}}
 if(ds.xslot!=null){AS.slot=+ds.xslot;return render();}
 if(ds.xgdel&&isMain()){const u=ds.xgdel;AS.tgt.slots.forEach(p=>{if(p)['w','a','s'].forEach(k=>{if(p.eq[k]===u)p.eq[k]=null;});});AS.tgt.gear=AS.tgt.gear.filter(g=>g.u!==u);return saveTgt('장비 회수');}
 if(ds.xp&&isMain()){const t=AS.tgt,i=AS.slot,p=t.slots[i],k=ds.xp,tn=Date.now()+(t.offset||0);
  if(k==='egg'){t.slots[i]=tPet();t.notice[i]=null;tDex(0);}
  else if(p){if(k==='finish'&&p.train)p.train.end=tn;if(k==='wake')p.sleep=null;if(k==='cure'){p.sick=null;p.acc.sickA=0;}if(k==='unlock')p.lock=null;if(k==='daily'){p.daily={d:'',pat:0,play:0,sleep:0};t.daily=null;}if(k==='del')t.slots[i]=null;}
  return saveTgt({egg:'알 넣기',finish:'수련 즉시 완료',wake:'깨우기',cure:'병 치료',unlock:'오행 고정 해제',daily:'오늘 횟수 초기화',del:'환수 삭제'}[k]+' (슬롯 '+(i+1)+')');}
 if(ds.xegdel){await db.doc('eggcodes/'+ds.xegdel).delete();log('알 코드 취소 '+ds.xegdel);return AD.loadEggs();}
});
setInterval(()=>{if(MODE!=='player'||!acc||document.getElementById('layer').innerHTML)return;const ch=tickAll();const a=document.activeElement;const typing=a&&(a.tagName==='INPUT'||a.tagName==='SELECT');if(!typing&&(view==='home'||view==='train'))render();if(ch)save();},2000);

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
 function dref(path){const r=F.doc(fs,path);return{path,id:r.id,get:async()=>snap(await F.getDoc(r)),set:d=>F.setDoc(r,clean(d)),delete:()=>F.deleteDoc(r),onSnapshot:(n,e)=>F.onSnapshot(r,s=>n(snap(s)),e)};}
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
 let cur=null,listeners=[];const subs={};
 const snap=(path,d)=>({id:path.split('/').pop(),exists:d!==undefined,data:()=>d===undefined?undefined:clean(d),metadata:{hasPendingWrites:false,fromCache:false}});
 const fire=path=>(subs[path]||[]).forEach(f=>f(snap(path,st.docs[path])));
 function dref(path){return{path,id:path.split('/').pop(),get:async()=>snap(path,st.docs[path]),set:async d=>{st.docs[path]=clean(d);persist();setTimeout(()=>fire(path),0);},delete:async()=>{delete st.docs[path];persist();},onSnapshot:(n)=>{(subs[path]=subs[path]||[]).push(n);return()=>{subs[path]=subs[path].filter(x=>x!==n);};}};}
 function q(col,f,ord,lim){return{where:(a,o,v)=>q(col,(f||[]).concat([[a,v]]),ord,lim),orderBy:(a,d)=>q(col,f,[a,d],lim),limit:n=>q(col,f,ord,n),get:async()=>{let ks=Object.keys(st.docs).filter(k=>k.startsWith(col+'/')&&k.split('/').length===col.split('/').length+1);let ds=ks.map(k=>snap(k,st.docs[k]));if(f)ds=ds.filter(s=>f.every(([a,v])=>s.data()[a]===v));if(ord)ds.sort((a,b)=>(a.data()[ord[0]]-b.data()[ord[0]])*(ord[1]==='desc'?-1:1));if(lim)ds=ds.slice(0,lim);return{docs:ds,size:ds.length,empty:!ds.length};},doc:id=>dref(col+'/'+id),add:async d=>{const r=dref(col+'/'+Math.random().toString(36).slice(2));await r.set(d);return r;}};}
 const err=c=>{const e=new Error(c);e.code=c;return e;};
 return{db:{doc:dref,collection:c=>q(c)},
  signIn:async(id,pw)=>{const u=st.users[emailOf(id)];if(!u||u.pw!==pw)throw err('auth/invalid-credential');cur=u.uid;return cur;},
  signOut:async()=>{cur=null;},
  register:async(id,pw)=>{const e=emailOf(id);if(st.users[e])throw err('auth/email-already-in-use');const uid='u'+Math.random().toString(36).slice(2,10);st.users[e]={uid,pw};persist();cur=uid;return uid;},
  createUser:async(id,pw)=>{const e=emailOf(id);if(st.users[e])throw err('auth/email-already-in-use');const uid='u'+Math.random().toString(36).slice(2,10);st.users[e]={uid,pw};persist();return uid;},
  onAuth:cb=>{setTimeout(()=>cb(cur),0);}};
}
(async function boot(){
 const app=document.getElementById('app');
 try{HS=/[?&]mock/.test(location.search)?makeMock():await makeFirebase();}catch(e){app.innerHTML='<main><div class="card">서버에 연결하지 못했어요. 잠시 뒤 새로고침해 주세요.<br><small class="muted">'+esc(e&&e.message||e)+'</small></div></main>';return;}
 db=HS.db;
 if(MODE==='admin'){try{const b=await db.doc('config/bootstrap').get();S.needBoot=!b.exists;}catch(e){S.needBoot=false;}}
 let first=true;
 HS.onAuth(async uid=>{
  try{const c=await db.doc('config/global').get();if(c.exists)cfg=Object.assign({expMult:1},c.data());}catch(e){}
  if(uid&&first&&!acc){first=false;try{await loadAccount(uid);}catch(e){S.loginMsg='불러오지 못했어요: '+(e&&e.message||e);acc=null;render();}return;}
  first=false;if(!uid&&!acc)render();
 });
})();
