/* ================= 기본 데이터 (2026-11 대개편) ================= */
const H=3600000, MIN=60000;
const EL=['fire','water','wood','earth','metal'];
const GAUGES=['fire','water','wood','earth','metal','yy'];
const ELK={fire:'불',water:'물',wood:'나무',earth:'땅',metal:'쇠',yang:'양',yin:'음',neutral:'중립',yy:'음양'};
const ELC={yang:'#e07a10',yin:'#6a4ad0',neutral:'#7a7a8a',fire:'#e5484d',water:'#3b8beb',wood:'#3fa34d',earth:'#c9822b',metal:'#d4a20a',yy:'#8a5ad0'};
const ELBG={yang:'#fff1cf',yin:'#ece6ff',neutral:'#eeeef2',fire:'#ffe3d6',water:'#dfeefc',wood:'#e3f5e1',earth:'#f7e7cf',metal:'#f8efcc',yy:'#efe6ff'};
const ELG={fire:'#8e1f1a,#e5484d 45%,#ff9a52 80%,#ffe08a',water:'#1b4f96,#3b8beb 60%,#a9d6ff',wood:'#1f6b2b,#3fa34d 60%,#9fe08f',earth:'#7a4512,#c9822b 60%,#f0c98a',metal:'#8a6a04,#d4a20a 60%,#ffe58a',yy:'#3a1f7a,#8a5ad0 55%,#ffd36e'};
// 도감: [이름, 단계, 부모(null=분기 풀/알), 속성, 진화 조건(분기점만), 등급(0환수~4신수), 배치 특성]
const SP=[["알",1,null,'neutral',0,0,'jeong'],
["유체",2,0,'neutral',0,0,'gong'],
["강아지",3,1,'earth',0,0,'yeong'],
["백구",4,2,'water',{water:10},0,'jeong'],
["풍운개",5,3,'water',0,0,'jeong'],
["해태",6,4,'yang',0,2,'seup'],
["황구",4,2,'fire',{fire:10},0,'do'],
["화염개",5,6,'fire',0,0,'do'],
["구미호",6,7,'yin',0,2,'yeong'],
["아기새",3,1,'fire',{fire:5},0,'do'],
["적원앙",4,9,'fire',{fire:10},0,'gong'],
["진'적원앙",5,10,'fire',0,0,'gong'],
["보라부엉이",6,11,'fire',0,1,'yeong'],
["청원앙",4,9,'water',{water:10},0,'jeong'],
["진'청원앙",5,13,'water',0,0,'jeong'],
["흑부엉이",6,14,'water',0,1,'yeong'],
["까마귀",7,12,'earth',{earth:25},1,'gong'],
["월영오",8,16,'earth',0,2,'gong'],
["삼족오",9,17,'earth',0,3,'gong'],
["화염뱁새",7,12,'fire',{fire:25},1,'yeong'],
["아기주작",8,19,'fire',0,2,'do'],
["화조",9,20,'fire',0,2,'do'],
["적봉",10,21,'fire',0,3,'do'],
["봉황",11,22,'fire',0,3,'do'],
["주작",12,23,'yang|fire',0,4,'do'],
["아기뱀",3,1,'wood',{wood:5},0,'seup'],
["쪽빛뱀",4,25,'water',{water:10},0,'jeong'],
["청사",5,26,'water',0,0,'jeong'],
["금사",6,27,'metal',0,1,'seup'],
["붉은뱀",4,25,'fire',{fire:10},0,'do'],
["홍사",5,29,'fire',0,0,'do'],
["혈사",6,30,'fire',0,1,'do'],
["지룡",7,28,'earth',{earth:25},1,'yeong'],
["지맥룡",8,32,'earth',0,2,'yeong'],
["황룡",9,33,'yang',0,3,'seup'],
["이무기",7,28,'water',{water:25},1,'jeong'],
["교룡",8,35,'water',0,2,'jeong'],
["수룡",9,36,'water',0,2,'jeong'],
["벽파룡",10,37,'water',0,3,'jeong'],
["천우룡",11,38,'wood',0,3,'yeong'],
["청룡",12,39,'yin|wood',0,4,'do'],
["아기거북",3,1,'water',{water:5},0,'jeong'],
["바다거북",4,41,'water',{water:10},0,'jeong'],
["장수거북",5,42,'water',0,0,'jeong'],
["흑갑장수거북",6,43,'water',0,1,'yeong'],
["거북",4,41,'earth',{earth:10},0,'yeong'],
["늑대거북",5,45,'earth',0,0,'yeong'],
["붉은늑대거북",6,46,'earth',0,1,'yeong'],
["화염거북",7,44,'fire',{fire:25},1,'do'],
["폭염거구",8,48,'fire',0,2,'do'],
["뇌명신귀",9,49,'wood',0,3,'gong'],
["파도거북",7,44,'water',{water:25},1,'jeong'],
["빙하거북",8,51,'water',0,2,'jeong'],
["설산거구",9,52,'water',0,2,'jeong'],
["쌍두흑사거북",10,53,'yin',0,3,'gong'],
["쌍두흑룡거북",11,54,'yin',0,3,'gong'],
["현무",12,55,'yin|water',0,4,'jeong'],
["아기호랑이",3,1,'metal',{metal:5},0,'gong'],
["청호",4,57,'water',{water:10},0,'jeong'],
["자호",5,58,'water',0,0,'jeong'],
["눈빛털대호",6,59,'water',0,1,'jeong'],
["적호",4,57,'fire',{fire:10},0,'do'],
["대호",5,61,'metal',0,0,'gong'],
["백두산호랑이",6,62,'metal',0,1,'gong'],
["흰갈기적호",7,60,'fire',{fire:25},1,'do'],
["비호",8,64,'fire',0,2,'do'],
["기린",9,65,'yang',0,3,'yeong'],
["흰갈기호랑이",7,60,'metal',{earth:25},1,'gong'],
["산군",8,67,'wood',0,2,'gong'],
["아기백호",9,68,'metal',0,2,'gong'],
["어린백호",10,69,'yang',0,3,'gong'],
["환령백호",11,70,'yang',0,3,'gong'],
["백호",12,71,'yang|metal',0,4,'gong'],
["아기곰",3,1,'earth',{earth:5},0,'yeong'],
["곰돌이",4,73,'earth',{earth:10},0,'yeong'],
["흑곰",5,74,'earth',0,0,'yeong'],
["반달곰",6,75,'earth',0,1,'yeong'],
["보라곰돌이",4,73,'water',{water:10},0,'jeong'],
["청웅",5,77,'water',0,0,'jeong'],
["백곰",6,78,'water',0,1,'jeong'],
["숲여우",3,null,'wood',0,0,'do'],
["잎여우",4,80,'wood',0,0,'do'],
["등불여우",5,81,'wood',0,0,'do'],
["녹림여우",6,82,'wood',0,1,'do'],
["흙너구리",3,null,'earth',0,0,'seup'],
["돌너구리",4,84,'earth',0,0,'seup'],
["산너구리",5,85,'earth',0,0,'seup'],
["너구리도사",6,86,'earth',0,1,'seup'],
["은늑대",3,null,'metal',0,0,'gong'],
["쇠늑대",4,88,'metal',0,0,'gong'],
["검광늑대",5,89,'metal',0,0,'gong'],
["철령늑대",6,90,'metal',0,1,'gong'],
["흙학",4,null,'earth',0,0,'yeong'],
["지맥학",5,92,'earth',0,0,'yeong'],
["대지학",6,93,'earth',0,1,'yeong'],
["나무까치",4,null,'wood',0,0,'do'],
["연리까치",5,95,'wood',0,0,'do'],
["고목까치",6,96,'wood',0,1,'do'],
["흙뱀",4,null,'earth',0,0,'seup'],
["지룡뱀",5,98,'earth',0,0,'seup'],
["황토구렁이",6,99,'earth',0,1,'seup'],
["녹사",4,null,'wood',0,0,'gong'],
["수풀뱀",5,101,'wood',0,0,'gong'],
["수풀구렁이",6,102,'wood',0,1,'gong'],
["쇠거북",4,null,'metal',0,0,'do'],
["철갑거북",5,104,'metal',0,0,'do'],
["흑철거북",6,105,'metal',0,1,'do'],
["흙거북",4,null,'earth',0,0,'yeong'],
["반석거북",5,107,'earth',0,0,'yeong'],
["대지거북",6,108,'earth',0,1,'yeong'],
["마당냥",4,null,'earth',0,0,'seup'],
["흙요묘",5,110,'earth',0,0,'seup'],
["지령냥",6,111,'earth',0,1,'seup'],
["쇠표범",4,null,'metal',0,0,'gong'],
["광폭표범",5,113,'metal',0,0,'gong'],
["백철표범",6,114,'metal',0,1,'gong'],
["물곰",4,null,'water',0,0,'jeong'],
["수맥곰",5,116,'water',0,0,'jeong'],
["옥천곰",6,117,'water',0,1,'jeong'],
["불곰",4,null,'fire',0,0,'do'],
["열기곰",5,119,'fire',0,0,'do'],
["홍염곰",6,120,'fire',0,1,'do'],
["안개박쥐",7,null,'water',0,1,'jeong'],
["수월박쥐",8,122,'water',0,1,'jeong'],
["심연박쥐",9,123,'water',0,2,'jeong'],
["처마제비",7,null,'wood',0,1,'do'],
["영목제비",8,125,'wood',0,1,'do'],
["비익제비",9,126,'wood',0,2,'do'],
["불이무기",7,null,'fire',0,1,'do'],
["업화이무기",8,128,'fire',0,2,'do'],
["화룡",9,129,'fire',0,3,'do'],
["쇠이무기",7,null,'metal',0,1,'seup'],
["천철무기",8,131,'metal',0,2,'seup'],
["파괴룡",9,132,'metal',0,3,'seup'],
["갑옷거북",7,null,'metal',0,1,'yeong'],
["천검거북",8,134,'metal',0,1,'yeong'],
["금강거북",9,135,'metal',0,2,'yeong'],
["거석거북",7,null,'earth',0,1,'yeong'],
["산악거북",8,137,'earth',0,1,'yeong'],
["지맥거북",9,138,'earth',0,2,'yeong'],
["물호랑이",7,null,'water',0,1,'jeong'],
["벽파호랑이",8,140,'water',0,2,'jeong'],
["천수호랑이",9,141,'water',0,3,'jeong'],
["쇠호랑이",7,null,'metal',0,1,'gong'],
["천검호랑이",8,143,'metal',0,2,'gong'],
["금강호랑이",9,144,'metal',0,3,'gong'],
["음양알",1,null,'neutral',0,0,'do'],
["음양유체",2,146,'neutral',0,0,'jeong'],
["일요의정",3,147,'yang',{fire:5,water:5},1,'seup'],
["양기씨앗",4,148,'yang',{fire:10,water:10},1,'seup'],
["열풍유체",5,149,'yang',0,1,'seup'],
["양기아기수",6,150,'yang',0,2,'seup'],
["양기범",4,148,'yang',{fire:10,wood:10},1,'seup'],
["태양맹호",5,152,'yang',0,1,'seup'],
["일양신호",6,153,'yang',0,2,'seup'],
["질풍야수",7,151,'yang',{wood:25,yy:25},2,'seup'],
["광풍맹호",8,155,'yang',0,2,'seup'],
["악풍비수",9,156,'yang',0,2,'seup'],
["폭풍의흉조",10,157,'yang',0,3,'seup'],
["파멸질풍수",11,158,'yang',0,3,'seup'],
["궁기",12,159,'yang|wood',0,4,'seup'],
["철턱짐승",7,151,'yang',{yy:25,fire:25},2,'seup'],
["포식야수",8,161,'yang',0,2,'seup'],
["탐욕의맹수",9,162,'yang',0,2,'seup'],
["폭식거수",10,163,'yang',0,3,'seup'],
["무한포식자",11,164,'yang',0,3,'seup'],
["도철",12,165,'yang|fire',0,4,'seup'],
["월요의정",3,147,'yin',{metal:5,earth:5},1,'yeong'],
["음영씨앗",4,167,'yin',{water:10,wood:10},1,'yeong'],
["심연유체",5,168,'yin',0,1,'yeong'],
["음기아기수",6,169,'yin',0,2,'yeong'],
["음영룡아",4,167,'yin',{water:10,earth:10},1,'yeong'],
["심음교룡",5,171,'yin',0,1,'yeong'],
["태음신룡",6,172,'yin',0,2,'yeong'],
["기류정령",7,170,'yin',{yy:25,water:25},2,'yeong'],
["몽환수",8,174,'yin',0,2,'yeong'],
["와류괴수",9,175,'yin',0,2,'yeong'],
["심연의사자",10,176,'yin',0,3,'yeong'],
["혼세마수",11,177,'yin',0,3,'yeong'],
["혼돈",12,178,'yin|water',0,4,'yeong'],
["철완맹수",7,170,'yin',{yy:25,metal:25},2,'yeong'],
["분노의괴수",8,180,'yin',0,2,'yeong'],
["파쇄거수",9,181,'yin',0,2,'yeong'],
["불굴의흉수",10,182,'yin',0,3,'yeong'],
["광폭대괴수",11,183,'yin',0,3,'yeong'],
["도올",12,184,'yin|metal',0,4,'yeong'],
["화요의정",3,147,'fire',{fire:5},1,'do'],
["불씨병아리",4,186,'fire',{fire:10,wood:5},1,'do'],
["화계",5,187,'fire',0,1,'do'],
["염화신계",6,188,'fire|wood',0,2,'do'],
["불꽃강아지",4,186,'fire',{fire:10,earth:5},1,'do'],
["열화견",5,190,'fire',0,1,'do'],
["홍련신견",6,191,'fire|earth',0,2,'do'],
["수요의정",3,147,'water',{water:5},1,'jeong'],
["물방울뱀",4,193,'water',{water:10,earth:5},1,'jeong'],
["수류사",5,194,'water',0,1,'jeong'],
["벽수신사",6,195,'water|earth',0,2,'jeong'],
["이슬양",4,193,'water',{water:10,wood:5},1,'jeong'],
["수연양",5,197,'water',0,1,'jeong'],
["천수신양",6,198,'water|wood',0,2,'jeong'],
["목요의정",3,147,'wood',{wood:5},1,'gong'],
["가지원숭이",4,200,'wood',{wood:10,water:5},1,'gong'],
["거목원숭이",5,201,'wood',0,1,'gong'],
["울목신원",6,202,'wood|water',0,2,'gong'],
["새싹토끼",4,200,'wood',{wood:10,earth:5},1,'seup'],
["수목토끼",5,204,'wood',0,1,'seup'],
["청목신토",6,205,'wood|earth',0,2,'seup'],
["금요의정",3,147,'metal',{metal:5},1,'seup'],
["철쥐",4,207,'metal',{metal:10,wood:5},1,'seup'],
["강철쥐",5,208,'metal',0,1,'seup'],
["금속신서",6,209,'metal|wood',0,2,'seup'],
["송아지철우",4,207,'metal',{metal:10,earth:5},1,'gong'],
["청동소",5,211,'metal',0,1,'gong'],
["철갑신우",6,212,'metal|earth',0,2,'gong'],
["토요의정",3,147,'earth',{earth:5},1,'gong'],
["흙망아지",4,214,'earth',{earth:10,metal:5},1,'gong'],
["대지준마",5,215,'earth',0,1,'gong'],
["후토신마",6,216,'earth|metal',0,2,'gong'],
["흙돼지",4,214,'earth',{earth:10,fire:5},1,'do'],
["대지멧돼지",5,218,'earth',0,1,'do'],
["지덕신돈",6,219,'earth|fire',0,2,'do'],
["성탄알",1,null,'neutral',0,0,'gong'],
["눈꽃유체",2,221,'neutral',0,0,'jeong'],
["눈요정",3,222,'water',{water:5},1,'jeong'],
["눈덩이요정",4,223,'water',{water:10},1,'jeong'],
["꼬마눈사람",5,224,'water',0,1,'jeong'],
["목도리눈사람",6,225,'water',0,1,'jeong'],
["눈꽃요정",4,223,'water',{wood:10},1,'jeong'],
["서리마녀",5,227,'water',0,1,'jeong'],
["눈의여왕",6,228,'yin',0,2,'yeong'],
["신사모자눈사람",7,226,'water',{water:25},2,'jeong'],
["산타모자눈사람",8,230,'water',0,2,'jeong'],
["큰눈사람",9,231,'water',0,2,'jeong'],
["눈눈사람",10,232,'water',0,3,'jeong'],
["눈눈눈사람",11,233,'water',0,3,'jeong'],
["산타클로스노우",12,234,'yang|water',0,4,'jeong'],
["네모눈사람",7,226,'water',{wood:25},2,'yeong'],
["얼어붙은눈사람",8,236,'water',0,2,'yeong'],
["고드름요정",9,237,'water',0,2,'yeong'],
["혹한의요정",10,238,'yin',0,3,'yeong'],
["겨울밤의요정",11,239,'yin',0,3,'yeong'],
["잭프로스트",12,240,'yin|water',0,4,'yeong'],
["장난감요정",3,222,'fire',{fire:5},1,'gong'],
["선물요정",4,242,'fire',{fire:10},1,'gong'],
["붉은모자선물요정",5,243,'fire',0,1,'gong'],
["아기산타",6,244,'fire',0,2,'gong'],
["선물상자",4,242,'wood',{wood:10},1,'do'],
["커다란선물상자",5,246,'wood',0,1,'do'],
["잭인더박스",6,247,'wood',0,1,'do'],
["재뭍은산타",7,245,'fire',{fire:25},2,'gong'],
["하나별산타",8,249,'fire',0,2,'gong'],
["둘별산타",9,250,'fire',0,2,'gong'],
["샛별산타",10,251,'yang',0,3,'seup'],
["겨울별산타",11,252,'yang',0,3,'seup'],
["산타클로스",12,253,'yang|fire',0,4,'seup'],
["졸린산타",7,245,'water',{water:25},2,'do'],
["눈토끼정령",8,255,'water',0,2,'do'],
["북극여우정령",9,256,'water',0,2,'do'],
["북극곰정령",10,257,'water',0,3,'do'],
["예티정령",11,258,'water',0,3,'do'],
["크람푸스",12,259,'yin|wood',0,4,'do'],
["나뭇가지요정",3,222,'wood',{wood:5},1,'do'],
["나무요정",4,261,'wood',{wood:10},1,'do'],
["리스요정",5,262,'wood',0,1,'do'],
["트리요정",6,263,'wood',0,2,'do'],
["깎인나무요정",4,261,'wood',{earth:10},1,'yeong'],
["장난감병정",5,265,'wood',0,1,'yeong'],
["호두까기왕자",6,266,'wood',0,2,'yeong'],
["종요정",3,222,'metal',{metal:5},1,'seup'],
["징글벨요정",4,268,'metal',{metal:10},1,'seup'],
["캐롤요정",5,269,'metal',0,1,'seup'],
["성탄대종정령",6,270,'metal',0,2,'seup'],
["쿠키반죽요정",4,268,'earth',{earth:10},1,'gong'],
["진저브레드맨",5,272,'earth',0,1,'gong'],
["진저브레드킹",6,273,'earth',0,2,'gong'],
["아기순록",3,222,'earth',{earth:5},1,'yeong'],
["반짝코순록",4,275,'earth',{earth:10},1,'yeong'],
["썰매순록",5,276,'earth',0,1,'yeong'],
["루돌프",6,277,'earth',0,2,'yeong'],
["흰사슴",4,275,'water',{water:10},1,'jeong'],
["얼음꽃사슴",5,279,'water',0,1,'jeong'],
["설화사슴",6,280,'water',0,2,'jeong']];
const POOL={"1": [2, 80, 84, 88], "9": [92, 95], "25": [98, 101], "41": [104, 107], "57": [110, 113], "73": [116, 119], "12": [122, 125], "28": [128, 131], "44": [134, 137], "60": [140, 143]};

const NAMES=[],FORMS={},ELOF=[],GRADE_N=[],TRAIT=[];
SP.forEach((r,no)=>{NAMES[no]=r[0];FORMS[no]={st:r[1],parent:r[2],cond:r[4]||null};ELOF[no]=r[3];GRADE_N[no]=r[5];TRAIT[no]=r[6];});
const TRAITN={gong:'공력',do:'도력',yeong:'영력',jeong:'정화력',seup:'습득력'};
/* ===== 스타즈렐름 등급 환수 (도감 282~ · s1-00 형식 표시) ===== */
const GBASE=600,GBASE_OLD=282,GSER=[['s1',21],['s2',12]],GUEST_ST=9,GUEST_MAX=99,G_DUAL_W=.1,G_EGG_LV=10,G_BABY_LV=30;
const GUEST_INFO={
 's1-00':['우주비행사알','fire'],'s1-01':['휴먼유체','yin'],'s1-02':['컴패니언유체','yin'],
 's1-03':['아이쓰','yin|water'],'s1-04':['눈보','yin|water'],'s1-05':['퍄퍄','yang|wood'],'s1-06':['레피','yang|wood'],
 's1-07':['꼬리','fire'],'s1-08':['루비','fire'],'s1-09':['세이','wood'],'s1-10':['고목령','wood'],'s1-11':['들레','yin'],'s1-12':['포우','yin'],
 's1-13':['와플','yang'],'s1-14':['동지·옹심·조랭이','yang'],'s1-15':['지구인','earth'],'s1-16':['크리미','earth'],'s1-17':['아롬','metal'],'s1-18':['루파핑','metal'],
 's1-19':['해달','water'],'s1-20':['루미','water'],
 's2-00':['치이카와알','fire'],'s2-01':['치이카와유체','yang'],'s2-02':['아이쓰','yang|water'],'s2-03':['퍄퍄','yang|wood'],'s2-04':['꼬리','fire'],
 's2-05':['세이','metal'],'s2-06':['들레','metal'],'s2-07':['와플','earth'],'s2-08':['지구','yang'],'s2-09':['아롬','yin'],'s2-10':['해달','water'],'s2-11':['군','yin']};
const GID=[];GSER.forEach(([s,n])=>{for(let k=0;k<n;k++)GID.push(s+'-'+String(k).padStart(2,'0'));});
const gno=id=>GBASE+GID.indexOf(id);
GID.forEach((id,k)=>{const no=GBASE+k,[sr,nn]=id.split('-'),n=+nn;NAMES[no]=(GUEST_INFO[id]&&GUEST_INFO[id][0])||('스타즈렐름 '+id);ELOF[no]=(GUEST_INFO[id]&&GUEST_INFO[id][1])||'neutral';GRADE_N[no]=-1;TRAIT[no]='seup';
 if(n===0)FORMS[no]={st:1,parent:null,cond:null};
 else if(sr==='s1'&&n<=2)FORMS[no]={st:2,parent:gno('s1-00'),cond:null};
 else if(sr==='s2'&&n===1)FORMS[no]={st:2,parent:gno('s2-00'),cond:null};
 else FORMS[no]={st:GUEST_ST,parent:sr==='s1'?gno(n%2?'s1-01':'s1-02'):gno('s2-01'),cond:{guest:1}};});
const isGuest=no=>no>=GBASE&&no<GBASE+GID.length;
const isGFinal=no=>isGuest(no)&&FORMS[no].st===GUEST_ST;
const gidOf=no=>GID[no-GBASE];
const gSer=no=>gidOf(no).split('-')[0];
function parseDexNo(v){v=String(v||'').trim().toLowerCase();if(/^s\d+-\d+$/.test(v)){const [a,b]=v.split('-');const k=GID.indexOf(a+'-'+String(+b).padStart(2,'0'));return k<0?-1:GBASE+k;}if(!/^\d+$/.test(v))return -1;const n=+v;return n<GBASE&&NAMES[n]!=null?n:-1;}
const dexNo=no=>isGuest(no)?gidOf(no):String(no).padStart(2,'0');
/* ===== 도깨비알 계통 (282~408) — 자동 생성: gen/dkdata.py ===== */
const DK_SP=[[282, "도깨비알", 1, 1, null, "neutral", 0, "do"], [283, "도깨비불", 2, 2, 282, "neutral", 0, "do"], [284, "너울불", 3, 3, 283, "fire", 5, "do"], [285, "불티동이", 4, 5, 284, "fire", 5, "do"], [286, "불도깨비", 6, 8, 285, "fire", 5, "do"], [287, "유성", 9, 11, 286, "fire|yang", 7, "do"], [288, "주작칠전사·유성", 12, 12, 287, "fire|yang", 9, "do"], [289, "성일마", 9, 9, 286, "fire|yang", 3, "do"], [290, "유귀", 9, 11, 286, "fire|yin", 7, "yeong"], [291, "주작칠전사·유귀", 12, 12, 290, "fire|yin", 9, "yeong"], [292, "귀금양", 9, 9, 286, "fire|yin", 3, "yeong"], [293, "유진", 9, 11, 286, "fire|yang", 7, "do"], [294, "주작칠전사·유진", 12, 12, 293, "fire|yang", 9, "do"], [295, "진수인", 9, 9, 286, "fire", 3, "do"], [296, "유정", 9, 11, 286, "fire|water", 7, "jeong"], [297, "주작칠전사·유정", 12, 12, 296, "fire|water", 9, "jeong"], [298, "정목한", 9, 9, 286, "fire|water", 3, "jeong"], [299, "유유", 9, 11, 286, "fire|wood", 7, "gong"], [300, "주작칠전사·유유", 12, 12, 299, "fire|wood", 9, "gong"], [301, "류토장", 9, 9, 286, "fire|wood", 3, "gong"], [302, "유익", 9, 11, 286, "fire|metal", 7, "gong"], [303, "주작칠전사·유익", 12, 12, 302, "fire|metal", 9, "gong"], [304, "익화사", 9, 9, 286, "fire|metal", 3, "gong"], [305, "유장", 9, 11, 286, "fire|earth", 7, "jeong"], [306, "주작칠전사·유장", 12, 12, 305, "fire|earth", 9, "jeong"], [307, "장월록", 9, 9, 286, "fire|earth", 3, "jeong"], [308, "지귀", 6, 8, 285, "fire", 5, "do"], [309, "화귀", 9, 9, 308, "fire", 5, "do"], [310, "아람불", 3, 3, 283, "wood", 5, "gong"], [311, "잎새동이", 4, 5, 310, "wood", 5, "gong"], [312, "독각귀", 6, 8, 311, "wood", 5, "gong"], [313, "뢰각", 9, 11, 312, "wood|yang", 7, "seup"], [314, "청룡칠전사·뢰각", 12, 12, 313, "wood|yang", 10, "seup"], [315, "각목교", 9, 9, 312, "wood|yang", 3, "seup"], [316, "뢰방", 9, 11, 312, "wood|yin", 7, "yeong"], [317, "청룡칠전사·뢰방", 12, 12, 316, "wood|yin", 10, "yeong"], [318, "방일토", 9, 9, 312, "wood|yin", 3, "yeong"], [319, "뢰항", 9, 11, 312, "wood|fire", 7, "do"], [320, "청룡칠전사·뢰항", 12, 12, 319, "wood|fire", 10, "do"], [321, "항금룡", 9, 9, 312, "wood|fire", 3, "do"], [322, "뢰기", 9, 11, 312, "wood|water", 7, "jeong"], [323, "청룡칠전사·뢰기", 12, 12, 322, "wood|water", 10, "jeong"], [324, "기수표", 9, 9, 312, "wood|water", 3, "jeong"], [325, "뢰미", 9, 11, 312, "wood|yin", 7, "gong"], [326, "청룡칠전사·뢰미", 12, 12, 325, "wood|yin", 10, "gong"], [327, "미화호", 9, 9, 312, "wood", 3, "gong"], [328, "뢰심", 9, 11, 312, "wood|metal", 7, "gong"], [329, "청룡칠전사·뢰심", 12, 12, 328, "wood|metal", 10, "gong"], [330, "심월호", 9, 9, 312, "wood|metal", 3, "gong"], [331, "뢰저", 9, 11, 312, "wood|earth", 7, "jeong"], [332, "청룡칠전사·뢰저", 12, 12, 331, "wood|earth", 10, "jeong"], [333, "저토학", 9, 9, 312, "wood|earth", 3, "jeong"], [334, "두두리", 6, 8, 311, "wood", 5, "gong"], [335, "이매", 9, 9, 334, "wood", 5, "gong"], [336, "벼림불", 3, 3, 283, "metal", 5, "seup"], [337, "벼림동이", 4, 5, 336, "metal", 5, "seup"], [338, "술불미또", 6, 8, 337, "metal", 5, "seup"], [339, "예규", 9, 11, 338, "metal|yang", 7, "seup"], [340, "백호칠전사·예규", 12, 12, 339, "metal|yang", 12, "seup"], [341, "규목랑", 9, 9, 338, "metal|yang", 3, "seup"], [342, "예묘", 9, 11, 338, "metal|yin", 7, "yeong"], [343, "백호칠전사·예묘", 12, 12, 342, "metal|yin", 12, "yeong"], [344, "묘일계", 9, 9, 338, "metal|yin", 3, "yeong"], [345, "예필", 9, 11, 338, "metal|fire", 7, "do"], [346, "백호칠전사·예필", 12, 12, 345, "metal|fire", 12, "do"], [347, "필월오", 9, 9, 338, "metal|fire", 3, "do"], [348, "예삼", 9, 11, 338, "metal|water", 7, "jeong"], [349, "백호칠전사·예삼", 12, 12, 348, "metal|water", 12, "jeong"], [350, "삼수원", 9, 9, 338, "metal|water", 3, "jeong"], [351, "예루", 9, 11, 338, "metal|wood", 7, "gong"], [352, "백호칠전사·예루", 12, 12, 351, "metal|wood", 12, "gong"], [353, "루금구", 9, 9, 338, "metal|wood", 3, "gong"], [354, "예자", 9, 11, 338, "metal|yin", 7, "gong"], [355, "백호칠전사·예자", 12, 12, 354, "metal|yin", 12, "gong"], [356, "자화후", 9, 9, 338, "metal", 3, "gong"], [357, "예위", 9, 11, 338, "metal|earth", 7, "jeong"], [358, "백호칠전사·예위", 12, 12, 357, "metal|earth", 12, "jeong"], [359, "위토치", 9, 9, 338, "metal|earth", 3, "jeong"], [360, "불가사리", 6, 8, 337, "metal", 5, "seup"], [361, "불가살", 9, 9, 360, "metal", 5, "seup"], [362, "여울불", 3, 3, 283, "water", 5, "jeong"], [363, "이슬동이", 4, 5, 362, "water", 5, "jeong"], [364, "물굽이", 6, 8, 363, "water", 5, "jeong"], [365, "월위", 9, 11, 364, "water|yang", 7, "seup"], [366, "현무칠전사·월위", 12, 12, 365, "water|yang", 11, "seup"], [367, "위월연", 9, 9, 364, "water|yang", 3, "seup"], [368, "월녀", 9, 11, 364, "water|yin", 7, "yeong"], [369, "현무칠전사·월녀", 12, 12, 368, "water|yin", 11, "yeong"], [370, "녀토복", 9, 9, 364, "water|yin", 3, "yeong"], [371, "월실", 9, 11, 364, "water|fire", 7, "do"], [372, "현무칠전사·월실", 12, 12, 371, "water|fire", 11, "do"], [373, "실화저", 9, 9, 364, "water|fire", 3, "do"], [374, "월허", 9, 11, 364, "water|yin", 7, "jeong"], [375, "현무칠전사·월허", 12, 12, 374, "water|yin", 11, "jeong"], [376, "허일서", 9, 9, 364, "water", 3, "jeong"], [377, "월벽", 9, 11, 364, "water|wood", 7, "gong"], [378, "현무칠전사·월벽", 12, 12, 377, "water|wood", 11, "gong"], [379, "벽수유", 9, 9, 364, "water|wood", 3, "gong"], [380, "월우", 9, 11, 364, "water|metal", 7, "gong"], [381, "현무칠전사·월우", 12, 12, 380, "water|metal", 11, "gong"], [382, "우금우", 9, 9, 364, "water|metal", 3, "gong"], [383, "월두", 9, 11, 364, "water|earth", 7, "jeong"], [384, "현무칠전사·월두", 12, 12, 383, "water|earth", 11, "jeong"], [385, "두목해", 9, 9, 364, "water|earth", 3, "jeong"], [386, "풍어귀", 6, 8, 363, "water", 5, "jeong"], [387, "망량", 9, 9, 386, "water", 5, "jeong"], [388, "마루불", 3, 3, 283, "earth", 5, "jeong"], [389, "옹기동이", 4, 5, 388, "earth", 5, "jeong"], [390, "철융신", 6, 8, 389, "earth", 6, "jeong"], [391, "터주대감", 9, 11, 390, "earth", 6, "jeong"], [392, "삼신·대지모", 12, 12, 391, "yin|earth", 8, "jeong"], [393, "업신도깨비", 6, 8, 389, "earth", 5, "jeong"], [394, "지신", 9, 9, 393, "earth", 6, "jeong"], [395, "해오름불", 3, 3, 283, "yang", 5, "seup"], [396, "화덕동이", 4, 5, 395, "yang", 5, "seup"], [397, "조왕신", 6, 8, 396, "yang", 6, "seup"], [398, "성주대신", 9, 11, 397, "yang", 6, "seup"], [399, "삼신·광명신", 12, 12, 398, "yang|fire", 8, "seup"], [400, "제석도깨비", 6, 8, 396, "yang", 5, "seup"], [401, "비형랑", 9, 9, 400, "yang", 6, "seup"], [402, "여우불", 3, 3, 283, "yin", 5, "yeong"], [403, "정화동이", 4, 5, 402, "yin", 5, "yeong"], [404, "우물신", 6, 8, 403, "yin", 6, "yeong"], [405, "문신장", 9, 11, 404, "yin", 6, "yeong"], [406, "삼신·수명신", 12, 12, 405, "yin|water", 8, "yeong"], [407, "측신도깨비", 6, 8, 403, "yin", 5, "yeong"], [408, "길달", 9, 9, 407, "yin", 6, "yeong"]];
const DK_RULE={"282": {"t": "one", "to": 283}, "283": {"t": "el", "m": {"fire": 284, "wood": 310, "metal": 336, "water": 362, "earth": 388}, "yy": [395, 402]}, "284": {"t": "one", "to": 285}, "285": {"t": "split", "l": [286, 308], "w": [1, 1]}, "287": {"t": "all6", "to": 288}, "290": {"t": "all6", "to": 291}, "293": {"t": "all6", "to": 294}, "296": {"t": "all6", "to": 297}, "299": {"t": "all6", "to": 300}, "302": {"t": "all6", "to": 303}, "305": {"t": "all6", "to": 306}, "286": {"t": "arrow", "s": [[287, 289], [290, 292], [293, 295], [296, 298], [299, 301], [302, 304], [305, 307]]}, "308": {"t": "one", "to": 309}, "310": {"t": "one", "to": 311}, "311": {"t": "split", "l": [312, 334], "w": [1, 1]}, "313": {"t": "all6", "to": 314}, "316": {"t": "all6", "to": 317}, "319": {"t": "all6", "to": 320}, "322": {"t": "all6", "to": 323}, "325": {"t": "all6", "to": 326}, "328": {"t": "all6", "to": 329}, "331": {"t": "all6", "to": 332}, "312": {"t": "arrow", "s": [[313, 315], [316, 318], [319, 321], [322, 324], [325, 327], [328, 330], [331, 333]]}, "334": {"t": "one", "to": 335}, "336": {"t": "one", "to": 337}, "337": {"t": "split", "l": [338, 360], "w": [1, 1]}, "339": {"t": "all6", "to": 340}, "342": {"t": "all6", "to": 343}, "345": {"t": "all6", "to": 346}, "348": {"t": "all6", "to": 349}, "351": {"t": "all6", "to": 352}, "354": {"t": "all6", "to": 355}, "357": {"t": "all6", "to": 358}, "338": {"t": "arrow", "s": [[339, 341], [342, 344], [345, 347], [348, 350], [351, 353], [354, 356], [357, 359]]}, "360": {"t": "one", "to": 361}, "362": {"t": "one", "to": 363}, "363": {"t": "split", "l": [364, 386], "w": [1, 1]}, "365": {"t": "all6", "to": 366}, "368": {"t": "all6", "to": 369}, "371": {"t": "all6", "to": 372}, "374": {"t": "all6", "to": 375}, "377": {"t": "all6", "to": 378}, "380": {"t": "all6", "to": 381}, "383": {"t": "all6", "to": 384}, "364": {"t": "arrow", "s": [[365, 367], [368, 370], [371, 373], [374, 376], [377, 379], [380, 382], [383, 385]]}, "386": {"t": "one", "to": 387}, "388": {"t": "one", "to": 389}, "389": {"t": "split", "l": [390, 393], "w": [1, 9]}, "390": {"t": "one", "to": 391}, "391": {"t": "all6", "to": 392}, "393": {"t": "one", "to": 394}, "395": {"t": "one", "to": 396}, "396": {"t": "split", "l": [397, 400], "w": [1, 9]}, "397": {"t": "one", "to": 398}, "398": {"t": "all6", "to": 399}, "400": {"t": "one", "to": 401}, "402": {"t": "one", "to": 403}, "403": {"t": "split", "l": [404, 407], "w": [1, 9]}, "404": {"t": "one", "to": 405}, "405": {"t": "all6", "to": 406}, "407": {"t": "one", "to": 408}};
const DK_SK={"282": ["뿔알 데굴박치기", "shock", "neutral"], "283": ["도깨비불 깜빡", "orbs", "neutral"], "284": ["너울 불꽃", "wave", "fire"], "285": ["불티 머리박치기", "burst", "fire"], "286": ["화염 방망이 뚝딱", "slash", "fire"], "287": ["주작 염광검", "slash", "fire"], "288": ["주작 비상검", "pillar", "fire"], "289": ["태양마 돌진", "shock", "fire"], "290": ["귀화 연권", "burst", "dark"], "291": ["주작 귀화권", "burst", "fire"], "292": ["요화 홀림불", "orbs", "dark"], "293": ["진화 철퇴", "rock", "fire"], "294": ["주작 진천퇴", "shock", "fire"], "295": ["지열 분출", "pillar", "fire"], "296": ["정화 석장", "orbs", "water"], "297": ["주작 정화진", "pillar", "holy"], "298": ["청염 흡기", "vortex", "water"], "299": ["유화 창격", "beam", "fire"], "300": ["주작 천화창", "beam", "fire"], "301": ["버들 탄막", "rain", "wood"], "302": ["익화 선풍", "vortex", "fire"], "303": ["주작 열풍선", "vortex", "fire"], "304": ["익사 관통", "beam", "fire"], "305": ["장염 부적", "orbs", "earth"], "306": ["주작 염서진", "rain", "fire"], "307": ["염장 확산", "shock", "fire"], "308": ["그리움의 불길", "burst", "blood"], "309": ["탑돌이 화염", "pillar", "fire"], "310": ["밤송이 톡", "ball", "wood"], "311": ["연잎 우산 빙글", "vortex", "wood"], "312": ["외다리 씨름", "shock", "wood"], "313": ["청룡 뇌각검", "slash", "wood"], "314": ["청룡 뇌광참", "thunder", "thunder"], "315": ["교룡 돌격", "shock", "wood"], "316": ["뢰방 연격", "burst", "dark"], "317": ["청룡 뇌권", "thunder", "thunder"], "318": ["월영 도약", "slash", "yin"], "319": ["항뢰 철퇴", "rock", "fire"], "320": ["청룡 낙뢰퇴", "thunder", "thunder"], "321": ["승룡 화염", "pillar", "fire"], "322": ["기류 석장", "wave", "water"], "323": ["청룡 해류진", "wave", "water"], "324": ["풍랑 질주", "slash", "water"], "325": ["뢰미 섬광창", "beam", "thunder"], "326": ["청룡 천뢰창", "thunder", "thunder"], "327": ["들불 꼬리", "rain", "fire"], "328": ["심풍 선", "vortex", "wood"], "329": ["청룡 폭풍선", "vortex", "thunder"], "330": ["심안 일격", "claw", "yin"], "331": ["저뢰 부적", "orbs", "earth"], "332": ["청룡 뇌서진", "rain", "thunder"], "333": ["뿌리 수호", "vine", "earth"], "334": ["두두리 방망이", "rock", "wood"], "335": ["홀림 안개", "orbs", "wood"], "336": ["담금 불똥", "spike", "metal"], "337": ["땅땅 망치질", "shock", "metal"], "338": ["불미질 강타", "rock", "metal"], "339": ["백호 예규검", "slash", "metal"], "340": ["백호 섬광참", "slash", "holy"], "341": ["늑대 무리 습격", "claw", "metal"], "342": ["묘영 연권", "claw", "yin"], "343": ["백호 월영권", "burst", "yin"], "344": ["새벽 쪼기", "rain", "yang"], "345": ["필화 철추", "rock", "fire"], "346": ["백호 열강추", "shock", "fire"], "347": ["화익 기습", "rain", "fire"], "348": ["삼수 석장", "wave", "water"], "349": ["백호 수륜진", "vortex", "water"], "350": ["물흐름 봉술", "slash", "water"], "351": ["루목 관창", "beam", "metal"], "352": ["백호 천금창", "beam", "holy"], "353": ["추적 포위", "orbs", "metal"], "354": ["자영 부채", "vortex", "yin"], "355": ["백호 월하선", "vortex", "dark"], "356": ["쇠부리 난격", "spike", "metal"], "357": ["위토 부적", "orbs", "earth"], "358": ["백호 금서진", "rain", "metal"], "359": ["곡식 방벽", "shock", "earth"], "360": ["쇠 먹어치우기", "bite", "metal"], "361": ["불멸 용광", "burst", "fire"], "362": ["여울 물보라", "wave", "water"], "363": ["꼬마 비구름", "rain", "water"], "364": ["물굽이 너울", "wave", "water"], "365": ["월위 수월검", "slash", "water"], "366": ["현무 월광참", "slash", "ice"], "367": ["절벽 활강", "beam", "water"], "368": ["월녀 파랑권", "burst", "yin"], "369": ["현무 흑파권", "burst", "dark"], "370": ["어둠의 축복", "orbs", "dark"], "371": ["실화 철퇴", "rock", "fire"], "372": ["현무 증기퇴", "shock", "water"], "373": ["불씨 반격", "burst", "fire"], "374": ["허공 석장", "vortex", "yin"], "375": ["현무 허공진", "vortex", "dark"], "376": ["틈새 흡기", "bite", "yin"], "377": ["벽류 창", "beam", "water"], "378": ["현무 심해창", "beam", "dark"], "379": ["비늘 방벽", "shock", "earth"], "380": ["월우 빗살선", "rain", "water"], "381": ["현무 폭우선", "rain", "ice"], "382": ["무쇠 들이받기", "shock", "metal"], "383": ["두목 부적", "orbs", "water"], "384": ["현무 북두진", "pillar", "ice"], "385": ["시비 가르기", "pillar", "holy"], "386": ["풍어 그물", "wave", "water"], "387": ["심해 도깨비불", "orbs", "dark"], "388": ["산마루 낙석", "rock", "earth"], "389": ["항아리 콩콩", "shock", "earth"], "390": ["금줄 결계", "vine", "earth"], "391": ["터주 축복", "pillar", "earth"], "392": ["만물 개화", "vine", "wood"], "393": ["흉내 곳간털기", "rain", "earth"], "394": ["지신밟기", "shock", "earth"], "395": ["해오름", "pillar", "yang"], "396": ["햇불 휘두르기", "burst", "yang"], "397": ["정화수 부뚜막불", "orbs", "yang"], "398": ["성주 상량", "pillar", "holy"], "399": ["광명 강림", "pillar", "holy"], "400": ["흉내 방울 주술", "orbs", "yang"], "401": ["귀신 다리 놓기", "beam", "yang"], "402": ["여우불 꼬리", "orbs", "yin"], "403": ["정화 불꽃 빙글", "orbs", "dark"], "404": ["우물 물거울", "vortex", "water"], "405": ["문신 수문격", "slash", "dark"], "406": ["운명의 실", "vine", "yin"], "407": ["머리카락 세기", "vine", "dark"], "408": ["여우 둔갑", "vortex", "yin"]};
DK_SP.forEach(([no,nm,st,st2,par,el,g,tr])=>{NAMES[no]=nm;FORMS[no]={st,st2,parent:par,cond:null,dk:1};ELOF[no]=el;GRADE_N[no]=g;TRAIT[no]=tr;});
const CHILD={};Object.keys(FORMS).forEach(k=>CHILD[k]=[]);Object.keys(FORMS).forEach(k=>{const p=FORMS[k].parent;if(p!=null)CHILD[p].push(+k);});
Object.entries(POOL).forEach(([p,ks])=>ks.forEach(k=>{if(!CHILD[p].includes(k))CHILD[p].push(k);}));
const isFinalNo=no=>isGuest(no)?isGFinal(no):!CHILD[no].length;
const EGG_NO={egg_n:0,egg_yy:146,egg_x:221,egg_dk:282};
const isDk=no=>no>=DK_FIRST&&no<=DK_LAST;
const DEX_N=NAMES.filter(x=>x!=null).length;
/* 손님 환수 번호 이전(282~314 → 600~632): 예전 기록을 새 번호로 */
function gFixDoc(d){if(!d||d.gm)return d;const off=GBASE-GBASE_OLD,inR=n=>typeof n==='number'&&n>=GBASE_OLD&&n<GBASE_OLD+GID.length;const walk=o=>{if(!o||typeof o!=='object')return;if(Array.isArray(o)){o.forEach(walk);return;}if(inR(o.no))o.no+=off;for(const k in o)if(o[k]&&typeof o[k]==='object')walk(o[k]);};walk(d);return d;}
function gMigrate(a){if(a.gmig)return a;const off=GBASE-GBASE_OLD,inR=n=>typeof n==='number'&&n>=GBASE_OLD&&n<GBASE_OLD+GID.length;
 const walk=o=>{if(!o||typeof o!=='object')return;if(Array.isArray(o)){o.forEach(walk);return;}if(inR(o.no)&&('st' in o||'lv' in o))o.no+=off;for(const k in o)if(o[k]&&typeof o[k]==='object')walk(o[k]);};
 ['slots','vil','gsp','mail','bench'].forEach(k=>walk(a[k]));if(a.tower&&inR(a.tower.bestNo))a.tower.bestNo+=off;
 if(a.dex){const nd={};for(const k in a.dex){const n=+k;nd[inR(n)?n+off:k]=a.dex[k];}a.dex=nd;}a.gmig=1;return a;}
/* ===== 등급 ===== */
/* 등급 번호(도감 6번째 칸): 0환수 1영물 2영수 3성수 4신수 / 신규 5도깨비(영수급) 6터주신(성수급) 7이십팔수(신수급) 8삼신(신수급) 9~12 주작·청룡·현무·백호칠전사(신수 ×1.2) */
const GRADES=['환수','영물','영수','성수','신수','도깨비','터주신','이십팔수','삼신','주작칠전사','청룡칠전사','현무칠전사','백호칠전사'];
const GRADE_TIER=[0,1,2,3,4,2,3,4,4,4,4,4,4],GRADE_X=[1,1,1,1,1,1,1,1,1,1,1,1,1];
/* 알 계통 보정 (전투 스탯 전체에 곱함): 일반 1 · 음양 1.2 · 성탄 1.1 · 손님 1.3 · 도깨비 1.3~1.5 (등급별) */
const DK_FIRST=282,DK_LAST=408;
function lineX(no,guest){if(guest)return 1.3;if(no>=146&&no<221)return 1.2;if(no>=221&&no<282)return 1.1;if(no>=DK_FIRST&&no<=DK_LAST){const g=GRADE_N[no]||0;return g>=8?1.5:(g===3||g===6||g===7)?1.4:1.3;}return 1;}
function lineN(no){return isGuest(no)?'':no>=146&&no<221?'음양알':no>=221&&no<282?'성탄알':no>=DK_FIRST&&no<=DK_LAST?'도깨비알':'환수알';}
const grTier=g=>GRADE_TIER[g]!=null?GRADE_TIER[g]:Math.max(0,Math.min(4,g|0));
const GRADE_KEY={'환수':'hwansu','영물':'yeongmul','영수':'yeongsu','성수':'seongsu','신수':'sinsu','스타즈렐름':'starz','게스트':'guest','도깨비':'dokkaebi','터주신':'teoju','이십팔수':'28su','삼신':'samsin','주작칠전사':'jujak7','청룡칠전사':'cheongryong7','현무칠전사':'hyeonmu7','백호칠전사':'baekho7'};
/* 전용 툴팁 그림이 없는 신규 등급은 같은 급의 툴팁을 씀 */
const TIP_KEY_FB={dokkaebi:'yeongsu',teoju:'seongsu','28su':'sinsu',samsin:'sinsu',jujak7:'sinsu',cheongryong7:'sinsu',hyeonmu7:'sinsu',baekho7:'sinsu'};
const GTAG_FB="this.outerHTML='<span class=&quot;badge b-g&quot;>GUEST</span>'";
function gradeOf(no){return isGuest(no)?'스타즈렐름':GRADES[GRADE_N[no]||0];}
const finalIcon='<img class="gicon" src="i/ui_final_badge.png" alt="최종" title="최종 형태">',waitIcon='<img class="gicon" src="i/ui_wait_badge.png" alt="진화 대기" title="진화 조건 미충족">';
function gRoll(kids){const w=kids.map(k=>String(ELOF[k]).includes('|')?G_DUAL_W:1),t=w.reduce((a,b)=>a+b,0);let r=Math.random()*t;for(let i=0;i<kids.length;i++){r-=w[i];if(r<=0)return kids[i];}return kids[kids.length-1];}
/* ===== 단계 · 레벨 · 경험치 ===== */
const ST_MAX=[5,10,16,23,31,40,50,61,72,82,91,99];
const ST_G=[1,1.04,1.08,1.18,1.29,1.41,1.55,1.70,1.86,2.10,2.39,2.75];
const maxLv=st=>ST_MAX[Math.max(1,Math.min(12,st))-1];
// 수련지 시간당 경험치 · 단계별 권장 수련지에서 만렙까지 걸리는 수련 시간 (구간 배율 1~3단계 ×0.6 · 4~6 ×1 · 7~9 ×1.6 · 10~12 ×2.5 반영)
const XPH=[60,80,106,141,188,250,332,442,588,782,1040,1383];
const ST_HOURS=[.5,1.5,4,8,13,20,40,60,135,210,300,480];/* 9~12단계 ×1.5 */
const ST_TOT=ST_HOURS.map((h,i)=>h*XPH[i]);
const LV_W=(st)=>{let s=0;for(let l=1;l<maxLv(st);l++)s+=1+.06*(l-1);return s;};
const LVW=ST_MAX.map((_,i)=>LV_W(i+1));
const need=(lv,st)=>Math.max(1,Math.round(ST_TOT[st-1]*(1+.06*(lv-1))/LVW[st-1]));
/* ===== 전투 스탯 ===== */
const BASE={hp:40,atk:10,def:6},GROW={hp:8,atk:2.5,def:1.5},EVO_K=.7;
const ST_START=[];{let s=Object.assign({},BASE);for(let i=0;i<12;i++){ST_START[i]=s;const n={};for(const k in BASE)n[k]=(s[k]+(ST_MAX[i]-1)*GROW[k]*ST_G[i])*EVO_K;s=n;}}
const GRADE_PCT=[0,.04,.08,.12,.16],GRADE_RATE=[0,4,8,12,16];
const EL_STAT={yang:['crit','atk'],yin:['pen','eva'],wood:['hp','eva'],fire:['atk','crit'],earth:['def','hp'],metal:['pen','crit'],water:['eva','hp']};
const STAT_N={hp:'체력',atk:'공격력',def:'방어력',eva:'회피',pen:'직격',crit:'치명'};
const STAR_MAX=no=>{if(isGuest(no)||!isFinalNo(no))return 0;const s=FORMS[no].st;return s>=12?5:s>=9?3:s>=6?1:0;};
const STAR_COST=[60,100,160,240,360];
const HEART_T=[20,40,60,80,100], HEART_BON=[0,2,4,6,8,10];
/* ===== 오행 게이지 ===== */
/* 오행 게이지 최대치: 단계 × 등급. 환수 등급은 예전 값(5~50), 신수 등급으로 갈수록 늘어 11단계 신수급 99 */
const G_OLD=[0,5,10,15,20,25,30,35,40,45,50,50],G_TOP=[0,5,10,16,22,29,37,46,58,75,99,99],G_TF=[0,.25,.5,.75,1];
const gCap=(st,no)=>{st=Math.max(1,Math.min(12,st));if(st<=1)return 0;const t=no==null?0:isGuest(no)?2:grTier(GRADE_N[no]||0);return Math.round(G_OLD[st-1]+(G_TOP[st-1]-G_OLD[st-1])*G_TF[t]);};
const gCapP=p=>gCap(p.st,p.no);
const gEls=no=>String(ELOF[no]||'neutral').split('|').map(e=>e==='yang'||e==='yin'?'yy':e).filter(e=>e!=='neutral');
const KI={fire:'ki_fire',water:'ki_water',wood:'ki_wood',earth:'ki_earth',metal:'ki_metal',yy:'ki_yy'};
/* ===== 상점 · 아이템 ===== */
const REFUND={4:10,5:15,6:25,7:40,8:60,9:85,10:110,11:150,12:200};
const LIB_RW={4:[10,1,0,null,0],5:[20,1,0,'sus_s',10],6:[30,2,0,'sus_l',10],7:[50,2,0,'tal_time',4],8:[100,3,0,'sec_t60',4],9:[120,0,1,'sec_t180',4],10:[150,0,1,'sec_t300',4],11:[250,0,2,'sec_t480',4],12:[400,0,3,'sec_t480',8]};
const LIB_IG={4:{ig_dp:1},5:{ig_dp:2},6:{ig_dp:4},7:{ig_ep:1},8:{ig_ep:2},9:{ig_ep:4},10:{ig_gp:1},11:{ig_gp:3},12:{ig_kp:1}};
function libMail(st){const r=LIB_RW[st];const m={title:st+'단계 해방 보상',from:'선계 관리소',coins:r[0]};if(r[1])m.eggs=r[1];if(r[2])m.yyEggs=r[2];m.items=Object.assign({},LIB_IG[st]||{});if(r[3])m.items[r[3]]=(m.items[r[3]]||0)+r[4];return m;}
/* 먹이 경험치: 1~3단계는 고정값(초반 빠르게), 4단계부터는 다음 수련 경험치 % */
const FOOD_XP={2:[500,.15],4:[1500,.4],5:[3000,.5]};
const foodXp=(fi,st)=>{const r=FOOD_XP[fi];return (st||1)<=3?{fx:r[0]}:{fm:r[1]};};
const fxTxt=p=>p.fxp?'+'+fmt(p.fxp):p.fxm?'+'+Math.round(p.fxm*100)+'%':'';
const FOOD=[null,{hu:15,p:1,n:'주먹밥'},{hu:25,p:3,n:'꿀떡'},{hu:40,p:5,n:'영초죽'},{hu:60,p:12,n:'선과 정식'},{hu:100,p:25,n:'어선만찬'}];
const ITEMS={
 ki_fire:{n:'불의 기운',p:0,img:'i/ui/icon_ki_fire.png',cat:'기운',d:'불 게이지 +1 (마을 생산)'},
 ki_water:{n:'물의 기운',p:0,img:'i/ui/icon_ki_water.png',cat:'기운',d:'물 게이지 +1 (마을 생산)'},
 ki_wood:{n:'나무의 기운',p:0,img:'i/ui/icon_ki_wood.png',cat:'기운',d:'나무 게이지 +1 (마을 생산)'},
 ki_earth:{n:'땅의 기운',p:0,img:'i/ui/icon_ki_earth.png',cat:'기운',d:'땅 게이지 +1 (마을 생산)'},
 ki_metal:{n:'쇠의 기운',p:0,img:'i/ui/icon_ki_metal.png',cat:'기운',d:'쇠 게이지 +1 (마을 생산)'},
 ki_yy:{n:'음양의 기운',p:0,img:'i/ui/icon_ki_yinyang.png',cat:'기운',d:'음양 게이지 +1 (마을 생산)'},
 food_1:{n:'주먹밥',p:1,img:'i/food_1.png',cat:'먹이',d:'포만감 +15'},
 food_2:{n:'꿀떡',p:3,img:'i/food_2.png',cat:'먹이',d:'포만감 +25 · 다음 수련 경험치 1~3단계 +500 / 4단계부터 +15% (1회)'},
 food_3:{n:'영초죽',p:5,img:'i/food_3.png',cat:'먹이',d:'포만감 +40 · 무작위 오행 +1 · 호감도 +2'},
 food_4:{n:'선과 정식',p:12,img:'i/food_4.png',cat:'먹이',d:'포만감 +60 · 다음 수련 경험치 1~3단계 +1,500 / 4단계부터 +40% (1회)'},
 food_5:{n:'어선만찬',p:25,img:'i/food_5.png',cat:'먹이',d:'포만감 +100 · 호감도 +5 · 다음 수련 경험치 1~3단계 +3,000 / 4단계부터 +50% (1회)'},
 dew:{n:'설화의 이슬',p:1,img:'i/dew.png',cat:'생활',d:'목마름 +40'},
 soap:{n:'비누',p:1,img:'i/soap.png',cat:'생활',d:'청결도 +50'},
 elixir:{n:'영약환단',p:30,img:'i/elixir.png',cat:'약',d:'50% 확률로 병 치료 (제작소에서도 만들 수 있어요)'},
 sus_s:{n:'수상한 기운 (소)',p:3,img:'i/sus_s.png',cat:'성장',d:'경험치 +100, 무작위 오행 +1 · 부작용: 포만감 -10',daily:5},
 sus_m:{n:'수상한 기운 (중)',p:0,img:'i/sus_m.png',cat:'성장',d:'레벨 경험치 50%, 무작위 오행 +2 · 부작용: 포만감·청결·목마름 -20 (마을 생산)'},
 sus_l:{n:'수상한 기운 (대)',p:0,img:'i/sus_l.png',cat:'성장',d:'즉시 레벨 +1 · 무작위 오행 +3 (마을 생산)'},
 wish_note:{n:'소원 쪽지',p:0,img:'i/ui/icon_wish.png',cat:'보상',d:'가방에서 [열기]를 누르면 소원을 비는 탑과 같은 무작위 보상이 나와요 (환수코인·기운·알·금패)'},
 sec_active:{n:'환수행동력 회복 비서',p:10,img:'i/sec_active.gif',cat:'성장',d:'행동력 +50',daily:1},
 reset_ki:{n:'오행초기화기운',p:50,img:'i/reset_ki.gif',cat:'기타',d:'오행 게이지를 모두 0으로'},
 tal_time:{n:'시간단축비서 (30분)',p:5,img:'i/sec_t30.gif',cat:'성장',d:'수련·심부름·건설의 남은 시간 30분 단축 (생산에는 쓸 수 없어요)'},
 sec_t60:{n:'시간단축비서 (1시간)',p:0,img:'i/sec_t60.gif',cat:'보상',d:'수련·심부름·건설의 남은 시간 1시간 단축 (보상 전용)'},
 sec_t180:{n:'시간단축비서 (3시간)',p:0,img:'i/sec_t180.gif',cat:'보상',d:'수련·심부름·건설의 남은 시간 3시간 단축 (보상 전용)'},
 sec_t300:{n:'시간단축비서 (5시간)',p:0,img:'i/sec_t300.gif',cat:'보상',d:'수련·심부름·건설의 남은 시간 5시간 단축 (보상 전용)'},
 sec_t480:{n:'시간단축비서 (8시간)',p:0,img:'i/sec_t480.gif',cat:'보상',d:'수련·심부름·건설의 남은 시간 8시간 단축 (보상 전용)'},
 sec_slot:{n:'성장슬롯추가비서',p:0,img:'i/sec_slot.gif',cat:'보상',d:'성장 슬롯을 1칸 늘려요 (최대 5칸)'},
 sec_vil:{n:'마을확장비서',p:0,img:'i/ui/nav_village.png',cat:'보상',d:'마을에 머무는 환수 한도 +5 (최대 40) · 확장하면 섬도 커져요 (20·30·40마리)'},
 ev_ticket:{n:'설화 던전 입장권',p:0,img:'i/ev_ticket.png',cat:'보상',d:'크리스마스 동지 설화 던전에 1번 들어갈 수 있어요'},
 xm_seal:{n:'크리스마스 씰',p:0,img:'i/ev_seal.png',cat:'보상',d:'진행 중인 수련·심부름 남은 시간 50% 감소, 수련 경험치 1.5배'},
 sec_fix:{n:'생활수치고정비서',p:5,img:'i/sec_fix.gif',cat:'생활',d:'8시간 동안 포만감·목마름·청결도가 줄지 않아요',daily:1},
 sec_aff:{n:'호감도비서',p:30,img:'i/sec_aff.gif',cat:'성장',d:'호감도 +10',daily:1},
 sec_tower:{n:'탑재도전비서',p:20,img:'i/sec_tower.gif',cat:'성장',d:'구천탑 도전 기회 +1 (주 1회 구매)',weekly:1},
 sec_pvp:{n:'대전재도전비서',p:10,img:'i/sec_pvp.gif',cat:'성장',d:'대전 1회 추가 도전',daily:2},
 sec_boss:{n:'토벌재도전비서',p:15,img:'i/sec_boss.gif',cat:'성장',d:'오늘 월드보스 공격 횟수 +1',daily:1},
 egg_n:{n:'환수 알',p:0,img:'h/00.gif',cat:'알',d:'빈 슬롯이 생기면 부화시킬 수 있어요'},
 egg_g1:{n:'우주비행사알',p:0,img:'h/s1-00.gif',cat:'알',d:'스타즈렐름 등급 알. 휴먼·컴패니언 유체 중 하나로 깨어나요'},
 egg_g2:{n:'치이카와알',p:0,img:'h/s2-00.gif',cat:'알',d:'스타즈렐름 등급 알. 치이카와유체로 깨어나요'},
 egg_x:{n:'성탄알',p:0,img:'h/221.gif',cat:'알',d:'크리스마스 한정 알'},
 egg_yy:{n:'음양알',p:0,img:'h/146.gif',cat:'알',d:'상위 알'},
 egg_dk:{n:'도깨비알',p:0,img:'h/282.png',cat:'알',d:'도깨비 계통 환수가 깨어나는 알 (도깨비 야행에서 얻어요)'},
 sec_bless:{n:'강화축복비서',p:25,img:'i/sec_bless.gif',cat:'강화',d:'강화 성공 확률 +10%'},
 sec_protect:{n:'파괴방지비서',p:200,img:'i/sec_protect.gif',cat:'강화',d:'합성 파괴를 막아요'},
 sec_cure:{n:'질병치료비서',p:0,img:'i/sec_cure.gif',cat:'운영자',d:'확률 없이 즉시 치료',admin:1},
 sec_cancel:{n:'진화취소비서',p:0,img:'i/sec_cancel.gif',cat:'운영자',d:'직전 진화를 되돌려요',admin:1},
 sec_xp50:{n:'경험의 비서 (50%)',p:0,img:'i/sec_xp50.png',cat:'운영자',d:'다음 수련(또는 진행 중인 수련) 경험치 +50%',admin:1},
 sec_kr:{n:'근두운충전비서',p:0,img:'i/sec_kr.png',cat:'운영자',d:'오늘 근두운 질주 입장 +1 (가방·근두운 질주 화면에서 사용, 오늘 입장을 다 썼을 때)',admin:1},
 sec_dg:{n:'야행충전비서',p:0,img:'i/sec_dg.png',cat:'운영자',d:'오늘 도깨비 야행 입장 +1 (가방·도깨비 야행 화면에서 사용, 오늘 입장을 다 썼을 때)',admin:1},
 sec_errand:{n:'심부름충전비서',p:0,img:'i/sec_errand.gif',cat:'운영자',d:'오늘 심부름 횟수 +1 (가방·심부름 화면에서 사용)',admin:1},
 sec_xp100:{n:'경험의 비서 (100%)',p:0,img:'i/sec_xp100.png',cat:'운영자',d:'다음 수련(또는 진행 중인 수련) 경험치 +100%',admin:1}
};
/* 근두운 질주: 엽전·부적도 아이템으로 지급할 수 있게 (받으면 근두운 질주로 들어가요 · 가방에는 안 보임) */
const KR_CHN={glass:'유리 구름',bat:'도깨비 방망이',thread:'월하노인의 실',thunder:'천둥 부적',pouch:'복주머니',basket:'선도 바구니',bell:'수호 방울',pinwheel:'바람개비',orb:'여의주 조각',herb:'불로초',shell:'거북 등껍질',haetae:'해태 부적',feather:'질풍 깃털',toad:'금두꺼비',mirror:'청동 거울',lantern:'청사초롱'};
ITEMS.kr_tok={n:'엽전',p:0,img:'i/kr/kr_coin.png',cat:'근두운',d:'근두운 질주에서 갈래 트리와 부적에 쓰는 엽전',admin:1};
for(const k in KR_CHN)for(let L=0;L<=5;L++)ITEMS['kr_c_'+k+'_'+L]={n:'부적 '+KR_CHN[k]+' '+L+'강',p:0,img:'i/kr/kr_c_'+k+'_'+L+'.png',cat:'근두운',d:'근두운 질주 부적 (근두운 질주 화면에서 끼워요)',admin:1};
/* ===== 장비 ===== */
const GN=['일반','고급','희귀','영웅','전설','신화'], TN={w:'무기',a:'방어구',s:'보조무기',n:'노리개',b:'방울'}, GT=['w','a','s','n','b'];
const MAXP=[3,3,5,5,7,9], ECOST=[3,6,12,25,50,100], SFEE=[10,20,50,120,300];
const RATE={1:1,2:1,3:.9,4:.8,5:.7,6:.5,7:.5,8:.3,9:.1};
const SYN=[{s:.5,d:0,x:0},{s:.5,d:0,x:0},{s:.5,d:.1,x:0},{s:.3,d:.1,x:0},{s:.2,d:0,x:.1}];
const GS={w:{atk:[8,20,50,120,250,400],pen:[2,5,12,25,45,70]},
 a:{def:[5,12,30,70,150,240],hp:[20,50,120,300,600,1000],decay:[2,6,10,16,22,30]},
 s:{crit:[3,6,10,16,24,34],eva:[2,5,8,13,20,28],regen:[3,7,12,18,30,50],exp:[1,3,5,10,15,25]}};
const ENH_K={w:.10,a:.10,s:.05,n:.05,b:.05};
const SL={atk:'공격력',pen:'직격',def:'방어력',hp:'체력',decay:'생활 수치 감소 속도 -',crit:'치명',eva:'회피',regen:'행동력 회복 속도 +',exp:'획득 경험치 +'};
const PCT={decay:1,regen:1,exp:1};
// 노리개: 주 옵션 1개(방어 수치 또는 치명·회피·직격) + 희귀부터 추가 옵션 (주 옵션의 40%)
const NG_OPT={def:{n:'방어',ic:'🛡️',v:[6,15,35,80,170,270]},hp:{n:'체력',ic:'❤️',v:[24,60,140,320,680,1080]},crit:{n:'치명',ic:'💥',v:[3,6,10,16,25,36]},eva:{n:'회피',ic:'💨',v:[3,6,10,16,25,36]},pen:{n:'직격',ic:'🎯',v:[3,6,10,16,25,36]}};
const NG_KEYS=['def','hp','crit','eva','pen'],NG_MAIN=['def','crit','eva','pen'];
const NG_SUBS=[0,0,1,2,3,3];
const NG_ART={};
// 방울: 생산·심부름·수련 중 하나의 시간 감소
const BELL={prod:{n:'생산',d:'배치된 건물의 생산 시간'},errand:{n:'심부름',d:'심부름 시간'},train:{n:'수련',d:'수련 시간'}};
const BELL_R=[[1,4],[3,7],[5,10],[8,13],[11,16],[14,20]];
const uid36=p=>(p||'g')+Date.now().toString(36)+Math.floor(Math.random()*1e9).toString(36);
function enhK(g){return 1+ENH_K[g.t]*(g.p||0);}
function ngVal(o,g,p,r,sub){const v=NG_OPT[o].v[g]*(0.85+0.3*(r==null?.5:r))*(1+ENH_K.n*(p||0))*(sub?.4:1);return Math.round(v*10)/10;}
function ngFill(gr){gr.subs=(gr.subs||[]).filter(x=>NG_OPT[x.o]).slice(0,NG_SUBS[gr.g]);while(gr.subs.length<NG_SUBS[gr.g]){const left=NG_KEYS.filter(k=>k!==gr.o&&!gr.subs.some(x=>x.o===k));if(!left.length)break;gr.subs.push({o:left[Math.floor(Math.random()*left.length)],r:Math.random()});}return gr;}
function ngNew(g){return ngFill({u:uid36('n'),t:'n',g,p:0,o:NG_MAIN[Math.floor(Math.random()*4)],r:Math.random(),subs:[]});}
function ngLines(gr){return [[gr.o,ngVal(gr.o,gr.g,gr.p,gr.r,false),true]].concat((gr.subs||[]).map(x=>[x.o,ngVal(x.o,gr.g,gr.p,x.r,true),false]));}
function bellNew(g,k){k=k||['prod','errand','train'][Math.floor(Math.random()*3)];return{u:uid36('b'),t:'b',g,p:0,k,r:Math.random()};}
function bellVal(gr){const [a,b]=BELL_R[gr.g];return Math.round((a+(b-a)*(gr.r==null?.5:gr.r))*(1+ENH_K.b*(gr.p||0))*10)/10;}
function gearNew(t,g){if(t==='n')return ngNew(g);if(t==='b')return bellNew(g);return{u:uid36('g'),t,g,p:0};}
const NG_IMG={def:'def',crit:'crit',eva:'eva',pen:'drain',hp:'def'};
function gearImg(g){if(g.t==='n')return NG_IMG[g.o]?'eq/n_'+NG_IMG[g.o]+'_'+g.g+'.gif':'eq/n.gif';if(g.t==='b')return 'eq/b_'+(g.k||'prod')+'_'+g.g+'.gif';return 'eq/'+g.g+'_'+g.t+'.gif';}
function gearName(g){return GN[g.g]+' '+(g.t==='n'&&NG_OPT[g.o]?NG_OPT[g.o].n+'의 ':g.t==='b'&&BELL[g.k]?BELL[g.k].n+'의 ':'')+TN[g.t];}
function gval(g,k){return Math.round(GS[g.t][k][g.g]*enhK(g)*10)/10;}
/* ================= 상태 ================= */
let db=null, acc=null, cfg={expMult:1}, view='village', sel=0, selSpot=null, toastT=null, busy=false;
const S={forgeSel:[],adminSlot:0,adminAccs:null,eggs:null,logs:null,newPw:null,codeGen:''};
const now=()=>Date.now()+((acc&&acc.offset)||0);
const dayKey=t=>new Date(t+9*H-6*H).toISOString().slice(0,10);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=n=>Math.round(n).toLocaleString('ko-KR');
const img=no=>isGuest(no)?'h/'+gidOf(no)+'.gif?'+IMG_V:isDk(no)?'h/'+no+'.png?'+IMG_V:'h/'+String(no).padStart(2,'0')+'.gif';
const isAdmin=()=>acc&&(acc.role==='main'||acc.role==='sub');
const isMain=()=>acc&&acc.role==='main';
function toast(m){if(typeof SFX!=='undefined'&&/(없어요|부족|아니에요|이미 |할 수 없|다 했|다 썼|수련 중이|자는 중|아직|불러요|못했|아프지|없는|더 살 수|형식이)/.test(m))SFX.nopeMaybe();const l=document.createElement('div');l.className='toast';l.textContent=m;document.body.appendChild(l);setTimeout(()=>l.remove(),2600);}
function fmtDur(ms){ms=Math.max(0,ms);const h=Math.floor(ms/H),m=Math.floor(ms%H/MIN),s=Math.floor(ms%MIN/1000);return h+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');}
async function sha(s){try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('hwansu:'+s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');}catch(e){let h=0;for(const c of 'hwansu:'+s)h=(h*31+c.charCodeAt(0))|0;return 'x'+h;}}
const rnd=()=>Math.random();

/* ================= 저장 ================= */
let saveChain=Promise.resolve();
// 한 계정은 한 기기에서만 저장: 다른 기기가 접속하면 이 기기는 저장을 멈추고 [이 기기에서 계속하기]를 보여줘요
const SESS=Math.random().toString(36).slice(2,10)+Date.now().toString(36);
/* 저장: 화면이 오래 잠들어 있다 깨어난 뒤(폰 백그라운드 등)에는 서버 기록을 먼저 확인해서,
   다른 기기 기록이 더 새로우면 덮어쓰지 않고 서버 기록을 불러온다 (옛 기록으로 되돌아가는 '초기화' 방지) */
let lastSaveOK=Date.now();S.needCheck=false;
/* Firestore 안전장치: 배열 안의 배열은 저장이 안 돼서 {0:..,1:..} 객체로 바꿔 저장 */
function noNest(v,inArr){if(Array.isArray(v)){const a=v.map(x=>noNest(x,true));return inArr?Object.assign({},a):a;}if(v&&typeof v==='object'){for(const k in v)v[k]=noNest(v[k],false);}return v;}
function save(){if(MODE==='player'&&S.kicked)return saveChain.then(()=>false);
 const base=acc.rev||0,chk=MODE==='player'&&(S.needCheck||Date.now()-lastSaveOK>90000);S.needCheck=false;
 if(MODE==='player'&&acc){acc.sess=SESS;acc.seen=Date.now();acc.seenV=view;}acc.rev=base+1;const snap=noNest(JSON.parse(JSON.stringify(acc)));
 saveChain=saveChain.then(async()=>{if(chk){const d=await db.doc('accounts/'+snap.uid).get();if(d.exists){const r=d.data();
   if(r.sess&&r.sess!==SESS){S.kicked=true;acc=normAcc(r);acc.uid=snap.uid;vilInit();render();kickModal();return false;}
   if((r.rev||0)>base){acc=normAcc(r);acc.uid=snap.uid;vilInit();tickAll();render();toast('다른 곳에서 바뀐 최신 기록을 불러왔어요.');return false;}}}
  await db.doc('accounts/'+snap.uid).set(snap);lastSaveOK=Date.now();return true;}).catch(e=>{toast('저장 실패: '+(e&&e.message||e));return false;});return saveChain;}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)S.needCheck=true;});
addEventListener('online',()=>{S.needCheck=true;});
addEventListener('pageshow',e=>{if(e.persisted)S.needCheck=true;});
async function log(msg){try{await db.collection('adminlogs').add({t:Date.now(),by:acc.id,msg});}catch(e){}}

/* ================= 환수 계산 ================= */
const MAX_SLOTS=5,SLOT_PRICE={3:300,4:999};
const VIL_CAP0=15,VIL_CAPMAX=40,VIL_EXP=[200,400,800,1500,2500];
// 슬롯 번호: 0~ 성장 슬롯, 500~ 마을, 1000~ 스타즈렐름 s1 공간, 2000~ s2 공간
function petAt(i){if(i>=2000)return gspOf('s2')[i-2000];if(i>=1000)return gspOf('s1')[i-1000];if(i>=500)return vilPets()[i-500];return acc.slots[i];}
function allPets(){return acc.slots.filter(Boolean).concat(vilPets(),gspOf('s1'),gspOf('s2'));}
function gspOf(sr){acc.gsp=acc.gsp||{};acc.gsp[sr]=acc.gsp[sr]||[];return acc.gsp[sr];}
function vilPets(){return (acc.vil&&acc.vil.pets)||[];}
// 쉬는 곳(마을·전용 공간)에 있는 동안은 시간이 멈춘 것처럼: 다시 나올 때 타이머를 그만큼 밀어요
function restIn(p){p.restAt=now();}
// 마을에서 쉬는 동안: 생활 수치는 그대로, 행동력만 평소 속도(시간당 5 + 보조무기 회복 보너스)로 차요
const EN_REGEN=5,EN_AWAY=.5;
function restEn(p){const d=Math.max(0,now()-(p.restAt||now()))/H;return Math.min(maxEn(p),p.en+EN_REGEN*(1+gearSum(p).regen/100)*d);}
function restOut(p,regen){const d=Math.max(0,now()-(p.restAt||now()));if(regen)p.en=restEn(p);['ts','sleep','fix','fixS','sick','lastPat'].forEach(k=>{if(typeof p[k]==='number'&&p[k])p[k]+=d;});delete p.restAt;}
function moveBlock(p){if(!p)return '';if(p.train)return '수련 중인 환수는 옮길 수 없어요.';if(p.errand)return '심부름 중인 환수는 옮길 수 없어요.';if(p.result||p.errandResult)return '먼저 결과를 확인해 주세요.';if(p.sick!=null)return '아픈 환수는 옮길 수 없어요. 먼저 치료해 주세요.';return '';}
const GSP_MAX=30,GSP={s1:{n:'우주비행사 정거장',bg:'i/gsp_s1.jpg',c:'#2a4a9a'},s2:{n:'말랑 친구들의 방',bg:'i/gsp_s2.jpg',c:'#d0608a'}};
function curePet(p){p.sick=null;['hu','th','cl'].forEach(k=>{p[k]=Math.max(p[k]||0,30);});p.aff=Math.max(p.aff,10);}
function slotPrice(){return SLOT_PRICE[acc.slots.length]||0;}
function addSlot(){if(acc.slots.length>=MAX_SLOTS)return false;acc.slots.push(null);acc.notice=acc.notice||[];while(acc.notice.length<acc.slots.length)acc.notice.push(null);return true;}
function slotFx(){SFX.play('mystic');SFX.play('fanfare');toast('성장 슬롯이 '+acc.slots.length+'칸으로 늘었어요!');}
function giveEgg(no){no=no||0;const key=no===146?'egg_yy':no===221?'egg_x':'egg_n';acc.inv[key]=(acc.inv[key]||0)+1;return -1;}
function eggNo(key){return key==='egg_yy'?146:key==='egg_x'?221:key==='egg_dk'?282:key==='egg_g1'?gno('s1-00'):key==='egg_g2'?gno('s2-00'):0;}
function hatch(key){const k=acc.slots[sel]==null?sel:acc.slots.findIndex(q=>!q);if(k<0)return toast('빈 성장 슬롯이 없어요. 환수를 마을로 보내거나 해방·선계 귀환한 뒤 부화시켜 주세요.');if(!take(key))return;const no=eggNo(key);acc.slots[k]=newPet(no);acc.notice[k]=null;dexAdd(no);sel=k;view='home';SFX.play('egg');toast(ITEMS[key].n+'을(를) 슬롯 '+(k+1)+'에 꺼냈어요!');commit();}
function newGauge(){return{fire:0,water:0,wood:0,earth:0,metal:0,yy:0};}
function newPet(no){return{no:no||0,st:FORMS[no||0].st,lv:1,exp:0,g:newGauge(),gT:newGauge(),star:0,hu:100,th:100,cl:100,aff:10,en:100,sick:null,sleep:null,train:null,errand:null,eq:{w:null,a:null,s:null,n:null,b:null},ts:now(),acc:{roll:0,low:0},daily:{d:'',pat:0,play:0,sleep:0},prev:null,result:null,born:now()+Math.floor(rnd()*1000)};}
function gearOf(u){return acc.gear.find(g=>g.u===u);}
// 장착 장비 합계
function gearSum(p){const r={atk:0,pen:0,def:0,hp:0,decay:0,crit:0,eva:0,regen:0,exp:0,bell:{prod:0,errand:0,train:0}};if(!p||!p.eq)return r;
 for(const t of GT){const g=p.eq[t]?gearOf(p.eq[t]):null;if(!g)continue;
  if(GS[t])for(const k in GS[t])r[k]+=gval(g,k);
  else if(t==='n')ngLines(g).forEach(([o,v])=>{r[o]+=v;});
  else if(t==='b')r.bell[g.k]=Math.max(r.bell[g.k],bellVal(g));}
 r.decay=Math.min(60,r.decay);return r;}
const maxEn=p=>100;
const hearts=p=>HEART_T.filter(x=>p.aff>=x).length;
/* ===== 전투 스탯 ===== */
function baseAt(st,lv){const i=Math.max(1,Math.min(12,st))-1,s=ST_START[i],g=ST_G[i],r={};for(const k in BASE)r[k]=s[k]+(lv-1)*GROW[k]*g;return r;}
function petStats(no,st,lv,star){const guest=isGuest(no),g0=guest?0:(GRADE_N[no]||0),gr=grTier(g0),gx=(GRADE_X[g0]||1)*lineX(no,guest),b=baseAt(st,lv),mx=baseAt(st,maxLv(st)),r={};
 for(const k in BASE)r[k]=(b[k]+mx[k]*GRADE_PCT[gr])*gx;
 ['eva','pen','crit'].forEach(k=>{r[k]=(3*st+GRADE_RATE[gr])*gx;});
 const els=String(ELOF[no]||'neutral').split('|').filter(e=>EL_STAT[e]),w=els.length>1?.6:1;
 els.forEach(e=>{const [m,s]=EL_STAT[e];if(BASE[m]!=null)r[m]+=mx[m]*.15*w;else r[m]+=st*8*w;if(BASE[s]!=null)r[s]+=mx[s]*.08*w;else r[s]+=st*4*w;});
 if(star){for(const k in BASE)r[k]*=1+.04*star;const add=star>=5?10:star>=3?6:3;['eva','pen','crit'].forEach(k=>{r[k]+=add;});}
 return r;}
function statsOf(p){const r=petStats(p.no,p.st,p.lv,p.star||0),G=gearSum(p),hb=(1+HEART_BON[hearts(p)]/100)*(1+titleEff('cp')/100);
 r.atk+=G.atk;r.pen+=G.pen;r.def+=G.def;r.hp+=G.hp;r.crit+=G.crit;r.eva+=G.eva;
 for(const k in BASE)r[k]*=hb;for(const k in r)r[k]=Math.round(r[k]);return r;}
const powerOf=s=>Math.round(s.hp*.25+s.atk*1.6+s.def*1.2+(s.eva+s.pen+s.crit)*1.5);
function cp(p){return powerOf(statsOf(p));}
const critP=c=>Math.min(.5,.05+c/(c+200)),evaP=(e,pen)=>Math.min(.4,Math.max(0,e-pen)/(e+200)),penP=p=>Math.min(.35,p/(p+300));
const ADV={wood:'earth',earth:'water',water:'fire',fire:'metal',metal:'wood',yin:'yang',yang:'yin'};
function isAdv(a,d){const A=String(a||'').split('|'),D=String(d||'').split('|');return A.some(x=>D.some(y=>ADV[x]===y));}
// 공격 1회: ATK²/(ATK+DEF) · ±30% · 치명 ×1.6 · 상성 ×1.2
function hitCalc(A,D,R,mul){const ev=evaP(D.eva||0,A.pen||0);if(R()<ev)return{dmg:0,crit:0,miss:1,adv:0};
 const def=(D.def||0)*(1-penP(A.pen||0)),crit=R()<critP(A.crit||0),adv=isAdv(A.el,D.el);
 let d=A.atk*A.atk/(A.atk+def)*(.7+R()*.6)*(crit?1.6:1)*(adv?1.2:1)*(mul||1);return{dmg:Math.max(1,Math.round(d)),crit:crit?1:0,miss:0,adv:adv?1:0};}
function snapStats(s){if(s.bs)return Object.assign({el:s.el},s.bs);const b=petStats(s.no||0,s.st||1,s.lv||1,0);for(const k in b)b[k]=Math.round(b[k]);b.el=s.el;return b;}
function seeded(seed){let x=seed>>>0;return()=>{x=(x+0x6D2B79F5)>>>0;let t=x;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
/* ===== 하루 · 주 ===== */
function autoOn(p){return p.autoSleep===undefined?acc.autoSleep===true:p.autoSleep===true;}
function fixOverlap(p,a,b){if(!p.fix)return 0;const s0=Math.max(a,p.fixS||0),e0=Math.min(b,p.fix);return Math.max(0,e0-s0);}
function daily(p,t){const d=dayKey(t==null?now():t);if(!p.daily||p.daily.d!==d){if(p.daily&&t!=null&&p.daily.d>d)return{d,pat:0,play:0,sleep:0};p.daily={d,pat:0,play:0,sleep:0};}return p.daily;}
function weekKey(t){const d=new Date(dayKey(t)+'T00:00:00Z');d.setUTCDate(d.getUTCDate()-((d.getUTCDay()+6)%7));return d.toISOString().slice(0,10);}
function accWeekly(){const w=weekKey(now());if(!acc.weekly||acc.weekly.w!==w)acc.weekly={w,egg:0};return acc.weekly;}

function accDaily(){const d=dayKey(now());if(!acc.daily||acc.daily.d!==d)acc.daily={d};return acc.daily;}
const huRate=p=>p.st===2?100/3:10;
function addAff(p,v){p.aff=Math.min(100,p.aff+v);}
// 오행 게이지: 단계별 최대치(5×(단계-1), 11·12단계 50)까지만
function addG(p,k,n){const cap=gCapP(p),cur=p.g[k]||0,nv=Math.min(cap,cur+n);if(nv>cur){p.g[k]=nv;p.gT[k]=now();}return nv-cur;}
function addExp(p,amt){const mx=maxLvP(p);if(p.lv>=mx)return;p.exp+=amt;while(p.lv<mx&&p.exp>=needP(p)){p.exp-=needP(p);p.lv++;}if(p.lv>=mx){p.lv=mx;p.exp=0;}}
function lvUp(p,n){const mx=maxLvP(p);p.lv=Math.min(mx,p.lv+n);if(p.lv>=mx)p.exp=0;}
const stN=p=>p&&isGuest(p.no)?(isGFinal(p.no)?'STARZ':(p.st===1?'STARZ 알':'STARZ 유체')):p.st+'단계';
const maxLvP=p=>isGFinal(p.no)?GUEST_MAX:isGuest(p.no)?(p.st===1?G_EGG_LV:G_BABY_LV):maxLv(p.st);
const needP=p=>isGFinal(p.no)?need(p.lv,9):isGuest(p.no)?Math.round(need(p.lv,p.st===1?2:4)*.5):need(p.lv,p.st);
function randG(){return GAUGES[Math.floor(rnd()*6)];}
function makeSick(p,t){if(p.sick==null){p.sick=t;SFX.play('sick');if(p.train)p.train=null;}}
/* ===== 선계수련 (12곳 · 10분~12시간) ===== */
const TMAP=['운무 계곡','청류 연못','송운 숲','홍염 고개','황토 평원','백금 협곡','현수 심연','오행 제단','천계 문턱','선계 정상','은하 운해','태초의 천궁'].map((n,i)=>({n,img:'m/t'+String(i+1).padStart(2,'0')+'.webp',xph:XPH[i]}));
const TDUR=[10,30,60,120,240,480,720],TEFF=[.85,.9,.95,1,1.05,1.1,1.15],TCOST=[1,3,6,13,28,58,90];
const durTxt=m=>m<60?Math.round(m)+'분':m%60?Math.floor(m/60)+'시간 '+Math.round(m%60)+'분':(m/60>=48&&m%1440===0?(m/1440)+'일':(m/60)+'시간');
const durMs=ms=>{const m=Math.round(ms/MIN);if(m>=1440){const d=Math.floor(m/1440),h=Math.round((m%1440)/60);return d+'일'+(h?' '+h+'시간':'');}return durTxt(m);};
TMAP.forEach((m,i)=>{const st=i+1,s=petStats(25,st,Math.ceil(maxLv(st)*.6),0);m.rec=powerOf(s);});
const ENC_W={egg:2,gear:4,kifind:8,dosa:8,susluck:10,blesssec:10,bless:14,luck:14,snack:14,lost:16};
const LUCK=[[2,4],[3,5],[3,6],[4,8],[5,10],[6,13],[7,16],[9,20],[11,25],[13,30],[16,36],[18,40]];
function trainCut(p){return gearSum(p).bell.train/100;}
function finishTraining(p,t){
 const tr=p.train,mp=TMAP[tr.m],hrs=TDUR[tr.d]/60,dur=Math.max(0,(tr.end-tr.start)-fixOverlap(p,tr.start,tr.end))/H,G=gearSum(p),m=.5*(1-G.decay/100);
 const ded=(k,rate)=>{p[k]=Math.max(0,p[k]-rate*dur*m);};ded('hu',huRate(p));ded('th',10);ded('cl',100/24);
 const ratio=(tr.cp!=null?tr.cp:cp(p))/mp.rec;let fail=8,great=12;if(ratio<1){fail=Math.min(85,8+(1-ratio)*70);great=4;}else if(ratio>=1.5){fail=4;great=20;}
 const r=rnd()*100,out=r<fail?'fail':r<fail+great?'great':'ok';const noExp=out==='fail'&&ratio<.5;
 let exp=(noExp?0:mp.xph*hrs*TEFF[tr.d]*{fail:.3,ok:1,great:1.5}[out])*(1+(G.exp+HEART_BON[hearts(p)])/100)*expM();
 const lvFrom=p.lv;let coins=0,gearT=null,susK=null,kiK=null;
 const er=rnd()*100,en=er<1?3:er<6?2:er<16?1:0;
 const pool=Object.keys(ENC_W).filter(k=>(k!=='dosa'||p.st>=5));let encs=[];
 for(let j=0;j<en&&pool.length;j++){const tot=pool.reduce((s2,k)=>s2+ENC_W[k],0);let x=rnd()*tot,pick=pool.length-1;for(let z=0;z<pool.length;z++){x-=ENC_W[pool[z]];if(x<0){pick=z;break;}}encs.push(pool.splice(pick,1)[0]);}
 const has=k=>encs.includes(k);
 if(has('bless'))exp*=1.5;if(tr.seal)exp*=1.5;if(tr.xb)exp*=1+tr.xb;if(tr.fm)exp*=1+tr.fm;if(tr.fx)exp+=tr.fx;
 addExp(p,Math.round(exp));
 if(has('luck')){const [lo,hi]=LUCK[Math.min(11,tr.m)];coins=lo+Math.floor(rnd()*(hi-lo+1));acc.coins+=coins;}
 let eggTo=null;if(has('egg'))eggTo=giveEgg(0);
 if(has('gear')){gearT=GT[Math.floor(rnd()*GT.length)];acc.gear.push(gearNew(gearT,0));}
 if(has('kifind')){kiK=GAUGES[Math.floor(rnd()*6)];acc.inv[KI[kiK]]=(acc.inv[KI[kiK]]||0)+3;}
 if(has('susluck')){susK='sus_s';acc.inv.sus_s=(acc.inv.sus_s||0)+1;}
 if(has('blesssec'))acc.inv.sec_bless=(acc.inv.sec_bless||0)+1;
 if(has('snack')){p.hu=Math.min(100,p.hu+30);p.th=Math.min(100,p.th+30);}
 if(has('lost'))addG(p,randG(),1);
 if(has('dosa'))lvUp(p,1);
 p.result={spot:mp.n,m:tr.m,out,noExp,encs,exp:Math.round(exp),lvFrom,lvTo:p.lv,coins,gearT,susK,kiK,eggBag:eggTo===-1,max:p.lv>=maxLvP(p)};
 p.train=null;
 const d=daily(p,t);if(autoOn(p)&&d.sleep<2){p.sleep=t+8*H;d.sleep++;}
}
// 시간 흐름 (성장 슬롯의 환수만): 반환 'vanish'면 소멸
function advance(p,to){
 let t=p.ts;if(!(to>t))return;let ev=false;
 while(t<to){
  let step=Math.min(to-t,10*MIN);
  if(p.train&&p.train.end>t&&p.train.end<t+step)step=p.train.end-t;
  if(p.errand&&p.errand.end>t&&p.errand.end<t+step)step=p.errand.end-t;
  if(p.sleep&&p.sleep>t&&p.sleep<t+step)step=p.sleep-t;
  if(p.fix&&p.fix>t&&p.fix<t+step)step=p.fix-t;
  if(p.sick!=null&&p.sick+24*H>t&&p.sick+24*H<t+step)step=p.sick+24*H-t;
  const h=step/H,G=gearSum(p),training=p.train&&t<p.train.end;
  const away=training||(p.errand&&t<p.errand.end);/* 수련·심부름 중에는 행동력 절반만 회복 */
  p.en=Math.min(maxEn(p),p.en+EN_REGEN*(away?EN_AWAY:1)*(1+G.regen/100)*h);
  if(!training){
   const m=(p.fix&&t<p.fix&&t>=(p.fixS||0)?0:1)*(p.sleep&&t<p.sleep?.4:1)*(1-G.decay/100);
   p.hu=Math.max(0,p.hu-huRate(p)*m*h);p.th=Math.max(0,p.th-10*m*h);p.cl=Math.max(0,p.cl-(100/24)*m*h);
  }
  // 생활 수치 중 하나라도 10 이하면 시간당 호감도 -1, 호감도 0 이하면 병
  if(p.hu<=10||p.th<=10||p.cl<=10){p.acc.low=(p.acc.low||0)+h;while(p.acc.low>=1){p.acc.low-=1;addAff(p,-1);}}else p.acc.low=0;
  if(p.aff<=0&&p.sick==null){makeSick(p,t);ev=true;}
  t+=step;
  if(p.train&&t>=p.train.end){finishTraining(p,p.train.end);ev=true;}
  if(p.sleep&&t>=p.sleep)p.sleep=null;
  if(p.sick!=null&&t-p.sick>=24*H){p.ts=t;return 'vanish';}
 }
 p.ts=to;return ev?'event':null;
}
function tickAll(){let changed=false;acc.slots.forEach((p,i)=>{if(!p)return;const r=advance(p,now());if(acc.slots[i]&&p.errand&&now()>=p.errand.end){finishErrand(p);changed=true;}if(r==='vanish'){vanish(i,'병을 이기지 못하고 선계로 돌아갔어요.');changed=true;}else if(r)changed=true;});
 if(typeof vilTick==='function'&&vilTick())changed=true;if(hotCheck())changed=true;return changed;}
function vanish(i,msg){const p=acc.slots[i];SFX.play('sad');unequipAll(p);acc.notice[i]=NAMES[p.no]+'은(는) '+msg;acc.slots[i]=null;}
function unequipAll(p){if(p&&p.eq)GT.forEach(t=>{p.eq[t]=null;});}
/* ===== 진화 판정 ===== */
// 분기점(조건 있는 자식): 조건 2개짜리 우선 → 먼저 달성한 조건 → 무작위. 실패 시 none 그룹 풀(있으면) 무작위, 없으면 '조건 미충족' 대기
// 분기점이 아닌 구간: 다음 형태의 속성 게이지(이중 속성은 둘 다)가 가득 + 최대 레벨
function condOk(p,c){return Object.entries(c).every(([k,v])=>(p.g[k]||0)>=v);}
function condT(p,c){return Math.max(...Object.keys(c).map(k=>p.gT[k]||0));}
/* 도깨비 계통: 한 모습이 여러 단계(st~st2)를 이어 가요. 구간 안에서는 같은 모습으로 단계만 올라요 */
const DK_SLOT=['yy','yy','fire','water','wood','metal','earth'];
function dkTargets(p){const f=FORMS[p.no],cap=gCapP(p),full=k=>cap>0&&(p.g[k]||0)>=cap,main=gEls(p.no);
 if(p.st<(f.st2||f.st))return main.every(full)?{list:[p.no],stay:1}:{stuck:true,needG:main};
 const R=DK_RULE[p.no];if(!R)return{done:true};
 const firstFull=ks=>ks.filter(full).sort((a,b)=>(p.gT[a]||0)-(p.gT[b]||0))[0];
 if(R.t==='one')return main.every(full)?{list:[R.to]}:{stuck:true,needG:main};
 if(R.t==='split')return main.every(full)?{list:R.l,w:R.w}:{stuck:true,needG:main};
 if(R.t==='all6')return GAUGES.every(full)?{list:[R.to]}:{stuck:true,needG:GAUGES};
 if(R.t==='el'){const k=firstFull(['fire','water','wood','metal','earth','yy']);if(!k)return{stuck:true,needG:['fire','water','wood','metal','earth','yy'],any:1};return k==='yy'?{list:R.yy,w:[1,1]}:{list:[R.m[k]]};}
 if(R.t==='arrow'){const ks=[...new Set(DK_SLOT)],k=firstFull(ks);if(!k)return{stuck:true,needG:ks,any:1};const L=[],W=[];DK_SLOT.forEach((g,i)=>{if(g===k){L.push(R.s[i][0],R.s[i][1]);W.push(1,9);}});return{list:L,w:W};}
 return{done:true};}
function evoTargets(p){if(isDk(p.no))return dkTargets(p);const kids=CHILD[p.no]||[];if(!kids.length)return{done:true};
 if(isGuest(p.no))return{list:kids,guest:true};
 const br=kids.filter(k=>FORMS[k].cond);
 if(br.length){const ok=br.filter(k=>condOk(p,FORMS[k].cond));
  if(ok.length){const mk=Math.max(...ok.map(k=>Object.keys(FORMS[k].cond).length));let c=ok.filter(k=>Object.keys(FORMS[k].cond).length===mk);const t0=Math.min(...c.map(k=>condT(p,FORMS[k].cond)));c=c.filter(k=>condT(p,FORMS[k].cond)===t0);return{list:c};}
  if(POOL[p.no])return{list:POOL[p.no],pool:true};return{stuck:true};}
 const k=kids[0],need_=gEls(k),cap=gCapP(p),fl=e=>(p.g[e]||0)>=cap;if(need_.every(fl)&&(p.st<11||need_.length>=2||GAUGES.some(e=>!need_.includes(e)&&fl(e))))return{list:[k]};return{stuck:true,needG:need_};}
function evoCheck(p){
 if(isGFinal(p.no))return{done:true,reason:'스타즈렐름 환수는 더 진화하지 않고 Lv '+GUEST_MAX+'까지 성장해요'};
 const T=evoTargets(p);if(T.done)return{done:true,reason:'최종 형태예요'};
 const ml=maxLvP(p);
 if(p.lv<ml)return{ok:false,reason:'Lv '+ml+' 필요'};
 if(T.stuck)return{ok:false,stuck:true,reason:'진화 조건이 충족되지 않았어요'};
 if(p.sick!=null)return{ok:false,reason:'아파서 진화할 수 없어요'};
 if(p.train)return{ok:false,reason:'수련 중이에요'};
 if(p.errand)return{ok:false,reason:'심부름 중이에요'};
 if(p.sleep)return{ok:false,reason:'자는 중이에요'};
 return{ok:true,list:T.list,guest:T.guest,w:T.w,stay:T.stay};
}
function evoPick(e){if(e.guest)return gRoll(e.list);if(e.w){const s=e.w.reduce((a,b)=>a+b,0);let r=rnd()*s;for(let i=0;i<e.list.length;i++){if((r-=e.w[i])<0)return e.list[i];}return e.list[e.list.length-1];}return e.list[Math.floor(rnd()*e.list.length)];}
function condText(no){return '';}
function dexAdd(no){if(!acc.dex[no])acc.dex[no]={d:dayKey(now()).slice(5).replace('-','.'),freed:false};}
function badgeOf(p){const e=evoCheck(p);return e.stuck?'wait':e.done?'final':'';}
// 각성: 최종 형태 + 최대 레벨 · 6단계 최종 ★1 · 9단계 ★3 · 12단계 ★5 · 재료는 주 속성 기운(이중 속성은 반씩)
function awakeCost(p){const s=(p.star||0)+1,n=STAR_COST[s-1],els=gEls(p.no);if(!els.length)return {};const r={},add=(k,v)=>{r[KI[k]]=(r[KI[k]]||0)+v;};
 if((s===3||s===5)&&!els.includes('yy')){const h=Math.ceil(n/2),each=Math.ceil(h/els.length);els.forEach(e=>add(e,each));add('yy',n-h);}else{const each=Math.ceil(n/els.length);els.forEach(e=>add(e,each));}return r;}
function awakeOk(p){const mx=STAR_MAX(p.no);if(!mx)return '각성할 수 없는 환수예요 (6·9·12단계 최종 형태만)';if((p.star||0)>=mx)return '최대 각성이에요 (★'+mx+')';if(p.lv<maxLvP(p))return '최대 레벨에서 각성할 수 있어요';return '';}
/* ===== 스타즈렐름 전용 공간 ===== */
function gspSend(i){const sp=acc.slots[i];if(!sp||!isGuest(sp.no))return;const w=moveBlock(sp);if(w)return toast(w);
 const sr=gSer(sp.no);if(gspOf(sr).length>=GSP_MAX)return toast(GSP[sr].n+'은(는) 최대 '+GSP_MAX+'마리까지 머물 수 있어요.');restIn(sp);gspOf(sr).push(sp);acc.slots[i]=null;acc.notice[i]=null;SFX.play('mystic');toast(NAMES[sp.no]+'이(가) '+GSP[sr].n+'(으)로 돌아갔어요.');closeLayer();commit();}
function gspMove(sr,k,i){const L=gspOf(sr),bp=L[k],sp=acc.slots[i];if(!bp)return;
 if(sp){if(!isGuest(sp.no)||gSer(sp.no)!==sr)return toast('같은 시리즈의 스타즈렐름 환수하고만 자리를 바꿀 수 있어요.');const w=moveBlock(sp);if(w)return toast(w);}
 restOut(bp);if(sp){restIn(sp);L[k]=sp;}else L.splice(k,1);acc.slots[i]=bp;acc.notice[i]=null;sel=i;
 SFX.play('equip');toast(sp?NAMES[bp.no]+'와(과) '+NAMES[sp.no]+'의 자리를 바꿨어요.':NAMES[bp.no]+'이(가) 슬롯 '+(i+1)+'에서 성장해요.');closeLayer();commit();}
function gspModal(sr,k){const bp=gspOf(sr)[k],L=document.getElementById('layer');if(!bp)return;
 const rows=acc.slots.map((sp,i)=>{let w='';if(sp){if(!isGuest(sp.no)||gSer(sp.no)!==sr)w='일반 환수가 있어요';else w=moveBlock(sp);}
  const lab=sp?'슬롯 '+(i+1)+' · '+NAMES[sp.no]+'와(과) 자리 바꾸기':'빈 슬롯 '+(i+1)+'(으)로 데려가기';
  return '<button class="btn '+(w?'soft':'teal')+' bmrow" data-gmv="'+sr+':'+k+':'+i+'" '+(w?'disabled':'')+'><img class="px" src="'+(sp?img(sp.no):'i/q.png')+'" alt=""><span>'+esc(lab)+(w?'<small>'+esc(w.replace(/\..*$/,''))+'</small>':'')+'</span></button>';}).join('');
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="전용 공간"><div style="display:flex;gap:12px;align-items:center"><img class="px" src="'+img(bp.no)+'" alt="" style="width:72px;height:72px;object-fit:contain"><div><b class="serif" style="font-size:22px;color:#ffd36e">'+esc(NAMES[bp.no])+'</b> '+gradeTag(bp.no)+'<div class="muted">no.'+dexNo(bp.no)+' · '+stN(bp)+' · Lv '+bp.lv+' · '+elName(ELOF[bp.no])+'</div></div></div><p class="muted" style="margin:0">성장 슬롯으로 데려갈까요? 같은 시리즈의 스타즈렐름가 있으면 서로 자리를 바꿔요.</p><div class="bmlist">'+rows+'</div><button class="btn soft" data-close="1">닫기</button></div></div>';}
function hasGuest(){return Object.keys(acc.dex||{}).some(k=>isGuest(+k))||gspOf('s1').length||gspOf('s2').length;}
function vGuest(){const sr=S.gsr||'s1',G=GSP[sr],L=gspOf(sr);
 const inSlot=acc.slots.map((q,i)=>q&&isGuest(q.no)&&gSer(q.no)===sr?'<div class="gsl"><img class="px" src="'+img(q.no)+'" alt=""><span><b>'+esc(NAMES[q.no])+'</b><small>슬롯 '+(i+1)+' · '+stN(q)+' · Lv '+q.lv+'</small></span><button class="btn sm teal" data-gsend="'+i+'" '+(L.length>=GSP_MAX?'disabled':'')+'>'+(L.length>=GSP_MAX?'공간이 가득 찼어요':'공간으로 보내기')+'</button></div>':'').join('');
 return '<div class="tmode">'+Object.keys(GSP).map(k=>'<button class="'+(sr===k?'on':'')+'" data-gsr="'+k+'">'+GSP[k].n+' ('+gspOf(k).length+'/'+GSP_MAX+')</button>').join('')+'</div>'+
  '<div class="groom gr-'+sr+'" style="background-image:url('+G.bg+'?'+IMG_V+')"><div class="grh"><img src="i/tag_starz.png?'+IMG_V+'" alt="GUEST" class="guestb" onerror="'+GTAG_FB+'"><b class="serif">'+G.n+'</b><span class="chip">'+L.length+' / '+GSP_MAX+'</span><small>스타즈렐름 환수 전용 공간 · 상태가 줄지 않아요 · 눌러서 성장 슬롯으로 데려가기</small></div><div class="grpets">'+
  (L.length?L.map((q,k)=>'<button class="grp" data-gsp="'+sr+':'+k+'" style="animation-delay:-'+(k*0.37%3).toFixed(2)+'s"><img class="px" src="'+img(q.no)+'" alt=""><span class="bn">'+esc(NAMES[q.no])+'<small>'+stN(q)+' · Lv '+q.lv+'</small></span></button>').join(''):'<p class="grempty">아직 이 공간에 있는 스타즈렐름 환수가 없어요.</p>')+'</div></div>'+
  '<div class="card"><h2>성장 슬롯의 '+G.n+' 스타즈렐름</h2>'+(inSlot||'<p class="muted">성장 슬롯에 이 시리즈의 스타즈렐름 환수가 없어요.</p>')+'</div>';}
/* ================= 행동 ================= */
const P=()=>acc.slots[sel];
function take(id,n=1){if((acc.inv[id]||0)<n){toast(ITEMS[id].n+'이(가) 부족해요.');return false;}acc.inv[id]-=n;return true;}
function guard(p,opt={}){if(!p)return false;if(p.errand&&!opt.errand){toast('심부름 중이에요. '+fmtDur(p.errand.end-now())+' 뒤에 돌아와요.');return false;}if(p.train&&!opt.train){toast('수련 중이에요.');return false;}if(p.sleep&&!opt.sleep){toast('자는 중이에요. 먼저 깨워 주세요.');return false;}return true;}
const TCUT={tal_time:30,sec_t60:60,sec_t180:180,sec_t300:300,sec_t480:480};
const A={
 food(k){const p=P();if(!guard(p))return;if(!ITEMS[k]||!take(k))return;const full=Math.round(p.hu)>=100,v=FOOD[+k.slice(5)].hu;
  p.hu=Math.min(100,p.hu+v);if(full)addAff(p,-3);const fx=[];const fi=+k.slice(5);
  const busy=p.fxp||p.fxm,bt='(먹이 경험치 효과는 한 번에 하나만 · 이미 '+fxTxt(p)+' 대기 중)';
  if(fi===2||fi===4){const e=foodXp(fi,p.st);if(!busy){if(e.fx)p.fxp=e.fx;else p.fxm=e.fm;fx.push('다음 수련 경험치 '+fxTxt(p)+' (1회)');}else fx.push(bt);}
  if(fi===3){const g=randG();addG(p,g,1);addAff(p,2);fx.push(ELK[g]+' 기운 +1','호감도 +2');}
  if(fi===5){addAff(p,5);fx.push('호감도 +5');if(!busy){const e=foodXp(5,p.st);if(e.fx)p.fxp=e.fx;else p.fxm=e.fm;fx.push('다음 수련 경험치 '+fxTxt(p)+' (1회)');}else fx.push(bt);}
  SFX.play('munch');toast((full?'배가 불렀는데 또 먹었어요… 호감도 -3':ITEMS[k].n+'을(를) 먹었어요! 포만감 +'+v)+(fx.length?' · '+fx.join(' · '):''));closeLayer();commit();},
 ki(v){const p=P();if(!guard(p))return;const [k,n0]=String(v).split(':'),n=+n0||1,id=KI[k];if(!id)return;const cap=gCapP(p);
  if(!cap)return toast('알은 아직 기운을 받을 수 없어요. 유체가 되면 쓸 수 있어요.');
  const room=cap-(p.g[k]||0);if(room<=0)return toast(ELK[k]+' 게이지가 이미 가득해요 ('+cap+').');
  const use=Math.min(n,room,acc.inv[id]||0);if(use<=0)return toast(ITEMS[id].n+'이(가) 없어요. 마을에서 생산해 주세요.');
  acc.inv[id]-=use;addG(p,k,use);SFX.play('magic');toast(ITEMS[id].n+' ×'+use+' · '+ELK[k]+' '+p.g[k]+'/'+cap);kiMenu();commit();},
 dew(){const p=P();if(!guard(p))return;if(p.th>=100)return toast('목마르지 않아요.');if(!take('dew'))return;SFX.play('drip');p.th=Math.min(100,p.th+40);commit();},
 soap(){const p=P();if(!guard(p))return;if(p.cl>=100)return toast('이미 깨끗해요.');if(!take('soap'))return;SFX.play('bubble');p.cl=Math.min(100,p.cl+50);commit();},
 pat(){const p=P();if(!guard(p))return;const d=daily(p);if(d.pat>=2)return toast('오늘 쓰다듬기를 다 했어요 (하루 2번).');d.pat++;addAff(p,2);SFX.play('pat');toast('기분 좋아해요! 호감도 +2');commit();},
 play(){const p=P();if(!guard(p))return;const d=daily(p);if(d.play)return toast('오늘은 이미 함께 놀았어요 (하루 1번).');if(p.sick!=null)return toast('아플 때는 놀 수 없어요.');playStart(p);},
 sleep(){const p=P();if(!p)return;if(p.sleep){p.sleep=null;SFX.play('wake');toast('깨웠어요.');return commit();}if(p.train)return toast('수련 중이에요.');if(p.errand)return toast('심부름 중이에요.');const d=daily(p);if(d.sleep>=2)return toast('오늘 재울 수 있는 횟수를 다 썼어요.');d.sleep++;p.sleep=now()+8*H;SFX.play('sleep');toast('잠들었어요. 8시간 동안 수치가 천천히 줄어요.');commit();},
 elixir(){const p=P();if(!p)return;if(p.sick==null)return toast('아프지 않아요.');if(!take('elixir'))return;if(rnd()<.5){curePet(p);SFX.play('heal');toast('나았어요!');}else{SFX.play('thud');toast('치료에 실패했어요…');}commit();},
 sus(k){const p=P();if(!guard(p))return;if(!['sus_s','sus_m','sus_l'].includes(k))return;if(!take(k))return;const mx=maxLvP(p);
  if(k==='sus_s'){if(p.lv<mx)addExp(p,100);addG(p,randG(),1);p.hu=Math.max(0,p.hu-10);}
  if(k==='sus_m'){if(p.lv<mx)addExp(p,Math.round(needP(p)*.5));addG(p,randG(),2);['hu','cl','th'].forEach(x=>{p[x]=Math.max(0,p[x]-20);});}
  if(k==='sus_l'){lvUp(p,1);addG(p,randG(),3);}
  SFX.play('magic');toast(ITEMS[k].n+' 사용!');closeLayer();commit();},
 energy(){const p=P();if(!p)return;if(!take('sec_active'))return;p.en=Math.min(maxEn(p),p.en+50);SFX.play('heal');toast('행동력 +50');commit();},
 resetKi(){const p=P();if(!p)return;confirmBox('오행 초기화',NAMES[p.no]+'의 오행 게이지를 모두 0으로 만들까요?',()=>{if(!take('reset_ki'))return;p.g=newGauge();p.gT=newGauge();SFX.play('mystic');toast('오행 게이지가 초기화됐어요.');commit();});},
 awaken(){const p=P();if(!p)return;const w=awakeOk(p);if(w)return toast(w);const c=awakeCost(p);const lack=Object.entries(c).filter(([k,n])=>(acc.inv[k]||0)<n);
  if(lack.length)return toast('기운이 부족해요: '+lack.map(([k,n])=>ITEMS[k].n+' '+(acc.inv[k]||0)+'/'+n).join(', '));
  confirmBox('각성 ★'+((p.star||0)+1),NAMES[p.no]+'을(를) 각성할까요?\n재료: '+Object.entries(c).map(([k,n])=>ITEMS[k].n+' ×'+n).join(', ')+'\n각성할 때마다 체력·공격력·방어력 +4%'+((p.star||0)+1===1?', 회피·직격·치명 +3':(p.star||0)+1===3?', 회피·직격·치명 +6 (★1 포함)':(p.star||0)+1===5?', 회피·직격·치명 +10 (★3 포함)':''),()=>{
   Object.entries(c).forEach(([k,n])=>{acc.inv[k]-=n;});p.star=(p.star||0)+1;SFX.play('fanfare');toast(NAMES[p.no]+' 각성 ★'+p.star+'!');commit();});},
 admItem(k){const p=P();if(!p)return;if(!take(k))return;
  if(TCUT[k]){const job=p.train||p.errand,nm=p.train?'수련':'심부름';if(!job){acc.inv[k]++;return toast('진행 중인 수련이나 심부름이 없어요. 건설 단축은 마을의 건물에서 써 주세요.');}const cut=TCUT[k]*MIN,left=job.end-now();SFX.play('magic');if(left<=cut){job.end=now();tickAll();toast(nm+'이 바로 끝났어요!');}else{job.end-=cut;toast('남은 '+nm+' 시간이 '+fmtDur(cut)+' 줄었어요.');}}
  if(k==='xm_seal'){const job=p.train||p.errand;if(!job){acc.inv[k]++;return toast('진행 중인 수련이나 심부름이 없어요.');}if(job.seal){acc.inv[k]++;return toast('이미 크리스마스 씰을 붙였어요.');}job.seal=1;const left=Math.max(0,job.end-now());job.end=now()+left/2;SFX.play('magic');toast((p.train?'수련':'심부름')+' 남은 시간이 절반으로 줄었어요!'+(p.train?' 경험치도 1.5배!':''));}
  if(k==='sec_fix'){if(p.fix&&p.fix>now()){acc.inv[k]++;return toast('이미 생활 수치가 고정되어 있어요. (남은 '+fmtDur(p.fix-now())+')');}p.fixS=now();p.fix=now()+8*H;SFX.play('magic');toast('8시간 동안 생활 수치가 줄지 않아요.');}
  if(k==='sec_aff'){if(p.aff>=100){acc.inv[k]++;return toast('호감도가 이미 가득해요.');}addAff(p,10);SFX.play('magic');toast('호감도가 10 올랐어요.');}
  if(k==='sec_cure'){curePet(p);SFX.play('heal');toast('나았어요!');}
  if(k==='sec_xp50'||k==='sec_xp100'){const v=k==='sec_xp50'?.5:1;if(p.train){if(p.train.xb){acc.inv[k]++;return toast('이 수련에는 이미 경험의 비서를 썼어요.');}p.train.xb=v;SFX.play('magic');toast('진행 중인 수련 경험치 +'+Math.round(v*100)+'%!');}else{if(p.xpb){acc.inv[k]++;return toast('이미 경험의 비서 효과가 기다리고 있어요 (+'+Math.round(p.xpb*100)+'%). 수련을 보내면 적용돼요.');}p.xpb=v;SFX.play('magic');toast('다음 수련 경험치 +'+Math.round(v*100)+'%! 수련을 보내면 적용돼요.');}}
  if(k==='sec_cancel'){if(!p.prev){acc.inv[k]++;return toast('되돌릴 진화가 없어요.');}Object.assign(p,p.prev);p.prev=null;SFX.play('mystic');toast('진화를 되돌렸어요.');}
  commit();},
 tcancel(i){const p=acc.slots[i==null?sel:+i];if(!p||!p.train)return;
  confirmBox('수련 취소',NAMES[p.no]+'의 '+TMAP[p.train.m].n+' 수련을 멈출까요? 경험치는 받지 못하고, 쓴 행동력과 그동안 줄어든 생활 수치는 돌아오지 않아요.',()=>{advance(p,now());if(!p.train)return render();
   const dur=Math.max(0,(now()-p.train.start)-fixOverlap(p,p.train.start,now()))/H,m=.5*(1-gearSum(p).decay/100);const ded=(k,rate)=>{p[k]=Math.max(0,p[k]-rate*dur*m);};ded('hu',huRate(p));ded('th',10);ded('cl',100/24);
   const nm=TMAP[p.train.m].n;p.train=null;SFX.play('thud');toast(nm+' 수련을 취소했어요.');commit();});},
 train(v){const p=P();if(!guard(p))return;const [m,d]=String(v).split(':').map(Number);if(p.sick!=null)return toast('아파서 수련할 수 없어요.');const mp=TMAP[m];if(!mp||TDUR[d]==null)return;
  if(p.lv>=maxLvP(p))return toast('최대 레벨이라 경험치를 더 받을 수 없어요. 먼저 진화하세요.');if(p.en<TCOST[d])return toast('행동력이 부족해요 ('+TCOST[d]+' 필요).');
  const ms=TDUR[d]*MIN*(1-trainCut(p));p.en-=TCOST[d];p.train={m,d,start:now(),end:now()+ms,cp:cp(p)};if(p.xpb){p.train.xb=p.xpb;p.xpb=0;}if(p.fxp){p.train.fx=p.fxp;p.fxp=0;}if(p.fxm){p.train.fm=p.fxm;p.fxm=0;}SFX.play('whoosh');toast(NAMES[p.no]+'이(가) '+mp.n+'(으)로 '+durTxt(TDUR[d])+' 수련을 떠났어요.');commit();},
 evolve(){const p=P();const e=evoCheck(p);if(!e.ok)return toast(e.reason);evoAnim(p,evoPick(e));},
 liberate(){const p=P();if(!p)return;if(isGuest(p.no))return toast('스타즈렐름 등급 환수는 해방할 수 없어요.');if(p.st<4)return toast('4단계부터 해방할 수 있어요.');if(p.sick!=null)return toast('아플 때는 해방할 수 없어요.');if(acc.dex[p.no]&&acc.dex[p.no].freed)return toast('이미 해방한 환수예요. 선계 귀환만 가능해요.');
  const lm=libMail(p.st);
  confirmBox('해방하기',NAMES[p.no]+'('+stN(p)+')을(를) 해방할까요? 되돌릴 수 없어요. 도감에 解 도장이 찍혀요.\n\n【해방 보상 · 우편으로 도착】\n'+mailParts(lm).join(', ')+'\n\n인게임 아이템(패)은 가방의 [코드화]에서 코드로 바꿔 게임에서 받아요.',()=>{const no=p.no,st=p.st;dexAdd(no);acc.dex[no].freed=true;unequipAll(p);
   acc.mail=acc.mail||[];acc.mail.push(stampMail(Object.assign(lm,{msg:NAMES[no]+'('+st+'단계)을(를) 해방한 보상이에요. 선계에서 새로운 인연을 기다려요.'})));
   acc.libs=acc.libs||[];acc.libs.push({id:'l'+Date.now().toString(36),no,st,t:Date.now(),done:true});
   acc.notice[sel]=NAMES[no]+'을(를) 해방했어요. 보상이 우편함에 도착했어요!';acc.slots[sel]=null;commit();SFX.play('mystic');toast('해방했어요! 우편함을 확인하세요.');});},
 home(){const p=P();if(!p)return;if(isGuest(p.no)&&!isGFinal(p.no))return toast('스타즈렐름 알·유체는 선계 귀환할 수 없어요. 완전체가 되면 보낼 수 있어요.');if(!isGuest(p.no)&&!isFinalNo(p.no))return toast('최종 형태만 선계로 돌려보낼 수 있어요.');const c=isGuest(p.no)?REFUND[GUEST_ST]:REFUND[Math.max(4,p.st)];
  confirmBox('선계 귀환',NAMES[p.no]+'을(를) 선계로 돌려보내고 환수코인 '+c+'개를 받을까요?',()=>{SFX.play('mystic');SFX.play('coins');unequipAll(p);acc.coins+=c;acc.notice[sel]=NAMES[p.no]+'이(가) 선계로 돌아갔어요. (환수코인 +'+c+')';acc.slots[sel]=null;commit();});},
 toVil(){const p=P();if(!p)return;const w=moveBlock(p);if(w)return toast(w);if(vilPets().length>=vilCap())return toast('마을이 가득 찼어요 ('+vilCap()+'마리). 상점에서 마을을 넓힐 수 있어요.');
  restIn(p);p.vb=null;const c=vilFreeCell(petSz(p));p.vx=c[0];p.vy=c[1];acc.vil.pets.push(p);acc.slots[sel]=null;acc.notice[sel]=null;SFX.play('equip');toast(NAMES[p.no]+'이(가) 마을로 갔어요. 마을에서는 생활 수치가 줄지 않고 행동력은 차요.');commit();},
 autoSleep(){const p=P();if(!p)return;p.autoSleep=!autoOn(p);toast(NAMES[p.no]+': 성장 후 자동 수면 (수련·심부름) '+(p.autoSleep?'켜짐':'꺼짐'));commit();},
 ack(){const p=P();if(p){p.result=null;commit();}}
};
async function commit(){render();await save();syncArena();syncVillage();}

/* ================= 진화 연출 ================= */
/* 진화 연출 2종 중 랜덤: 기존(실루엣 깜빡임) / 기운 공명(데이터 스캔 오마주) */
function evoAnim(p,target){return (Math.random()<.5?evoAnimA:evoAnimB)(p,target);}
function evoFinish(p,target,box,a,say){
 p.prev=JSON.parse(JSON.stringify(Object.assign({},p,{prev:null})));
 const oldName=NAMES[p.no],same=target===p.no,oldSt=p.st;p.no=target;p.st=same?p.st+1:FORMS[target].st;p.lv=1;p.exp=0;p.en=maxEn(p);p.g=newGauge();p.gT=newGauge();p.star=0;dexAdd(target);
 SFX.play('fanfare');say.style.cssText='';say.className='say';say.innerHTML='축하합니다!<br>'+(same?esc(oldName)+'이(가) <b>'+p.st+'단계</b>로 성장했다!':esc(oldName)+'은(는) <b>'+esc(NAMES[target])+'</b>(으)로 진화했다!')+'<br><small style="color:#2b5a5e">행동력이 가득 찼어요! 오행 게이지는 0부터 다시 채워요.</small><div style="margin-top:10px;text-align:right"><button class="btn" id="evoOk">확인</button></div>';
 document.getElementById('evoOk').onclick=closeLayer;commit();}
function evoAnimA(p,target){
 const L=document.getElementById('layer');const oldS=img(p.no),newS=img(target);let cancelled=false;
 L.innerHTML='<div class="overlay"><div class="evo stage" id="evo"><div style="position:absolute;inset:0;background:rgba(8,16,20,.55)" id="evoDim"></div><img class="m px" id="evoA" src="'+oldS+'" alt=""><div class="say" id="evoSay">어라…?<br>'+esc(NAMES[p.no])+'의 모습이…!</div></div></div>';
 const box=document.getElementById('evo'),a=document.getElementById('evoA'),say=document.getElementById('evoSay');SFX.play('huh');
 setTimeout(()=>{if(cancelled)return;box.style.background='radial-gradient(circle at 50% 45%,#2a3f52,#070d12 70%)';box.classList.remove('stage');document.getElementById('evoDim').remove();a.classList.add('sil');
  say.innerHTML='';say.style.background='transparent';say.style.border='none';say.style.textAlign='center';
  let iv=420,flip=false,t=0;
  const loop=()=>{if(cancelled)return;flip=!flip;a.src=flip?newS:oldS;SFX.evoBlip(t);t+=iv;iv=Math.max(55,iv*.86);if(t<3400)setTimeout(loop,iv);else boom();};loop();},1600);
 function boom(){if(cancelled)return;const el=gEls(target)[0]||'metal';const c=ELC[el];say.innerHTML='';a.src=newS;SFX.play('boom');
  const b=document.createElement('div');b.className='burst';b.style.background='radial-gradient(circle,#fff 0%,#fff6d6 15%,'+c+' 40%,rgba(0,0,0,0) 70%)';box.insertBefore(b,a);
  setTimeout(()=>{if(cancelled)return;
   a.classList.remove('sil');b.remove();box.classList.add('stage');box.style.background='';
   evoFinish(p,target,box,a,say);},1100);}
}
/* 기운 공명 진화: 오행 데이터 흐름 → 기운 고리가 위에서 아래로 훑으며 새 모습으로 바뀜 → 섬광 → 이름판 */
function evoAnimB(p,target){
 const L=document.getElementById('layer'),oldS=img(p.no),newS=img(target),el=gEls(target)[0]||'metal',c=ELC[el];let cancelled=false,raf=0;
 const RING=['wood','fire','earth','metal','water'];
 L.innerHTML='<div class="overlay"><div class="evo stage dv" id="evo" style="--dvc:'+c+'"><div class="dvdim" id="evoDim"></div><canvas class="dvcv" id="dvcv"></canvas><div class="dvgrid"></div>'
  +'<div class="dvpet" id="dvpet"><img class="px dvold" id="dvold" src="'+oldS+'" alt=""><img class="px dvnew" id="dvnew" src="'+newS+'" alt=""></div>'
  +RING.map((k,i)=>'<img class="dvring" src="i/evo2/dv_ring_'+k+'.png" alt="" style="--rd:'+(i*.16)+'s">').join('')+'<img class="dvflash" src="i/evo2/dv_flash.png" alt="">'
  +'<div class="say" id="evoSay">어라…?<br>'+esc(NAMES[p.no])+'의 기운이 공명하고 있어…!</div></div></div>';
 const box=document.getElementById('evo'),say=document.getElementById('evoSay'),pet=document.getElementById('dvpet'),nw=document.getElementById('dvnew'),cv=document.getElementById('dvcv');
 SFX.play('huh');
 const stop=()=>{cancelled=true;cancelAnimationFrame(raf);};
 /* 배경 흐름은 CSS(dv_bg_loop), 캔버스는 빛 조각만: dv_shards 4종을 오행 5색으로 미리 물들임 */
 const x=cv.getContext('2d'),R=Math.min(2,window.devicePixelRatio||1);let W=0,H=0;const GC=RING.map(k=>ELC[k]),SH=[];
 const sheet=new Image();sheet.onload=()=>{for(let f=0;f<4;f++)GC.forEach(col=>{const o=document.createElement('canvas');o.width=o.height=64;const g=o.getContext('2d');g.drawImage(sheet,f*64,0,64,64,0,0,64,64);g.globalCompositeOperation='source-atop';g.globalAlpha=.75;g.fillStyle=col;g.fillRect(0,0,64,64);SH.push(o);});};sheet.src='i/evo2/dv_shards.png';
 function size(){W=box.clientWidth;H=box.clientHeight;cv.width=W*R;cv.height=H*R;x.setTransform(R,0,0,R,0,0);}
 const shards=[];let scanY=-1,last=performance.now();
 function frame(t){if(cancelled||!box.isConnected)return;const dt=Math.min(.05,(t-last)/1000);last=t;
  x.clearRect(0,0,W,H);
  if(scanY>=0){const pr=pet.getBoundingClientRect(),br=box.getBoundingClientRect(),y=pr.top-br.top+scanY*pr.height;for(let k=0;k<3;k++)shards.push({x:pr.left-br.left+pr.width*(.2+Math.random()*.6),y,vx:(Math.random()-.5)*160,vy:-60-Math.random()*120,l:1,s:8+Math.random()*10,c:GC[(Math.random()*5)|0],im:SH.length?SH[(Math.random()*SH.length)|0]:null,r:Math.random()*6});}
  for(let i=shards.length-1;i>=0;i--){const q=shards[i];q.x+=q.vx*dt;q.y+=q.vy*dt;q.l-=dt*1.4;if(q.l<=0){shards.splice(i,1);continue;}x.globalAlpha=q.l;if(q.im){q.r+=dt*4;x.save();x.translate(q.x,q.y);x.rotate(q.r);x.drawImage(q.im,-q.s/2,-q.s/2,q.s,q.s);x.restore();}else{x.fillStyle=q.c;x.fillRect(q.x,q.y,q.s/3,q.s/3);}}
  x.globalAlpha=1;raf=requestAnimationFrame(frame);}
 setTimeout(()=>{if(cancelled)return;
  box.classList.remove('stage');box.classList.add('on');document.getElementById('evoDim').remove();size();raf=requestAnimationFrame(frame);SFX.play('mystic');
  say.className='say dvsay';say.innerHTML='';
  /* 고리가 위→아래로 훑으면 그 부분부터 새 모습 */
  setTimeout(()=>{if(cancelled)return;box.classList.add('scan');const T0=performance.now(),D=2600;let bl=0;
   const step=()=>{if(cancelled)return;const k=Math.min(1,(performance.now()-T0)/D);scanY=k;nw.style.clipPath='inset(0 0 '+((1-k)*100).toFixed(1)+'% 0)';box.style.setProperty('--ry',(pet.offsetTop+k*pet.offsetHeight).toFixed(1)+'px');
    if(performance.now()-bl>120){bl=performance.now();SFX.evoBlip(k*3400);}
    if(k<1)requestAnimationFrame(step);else{scanY=-1;flash();}};step();},1400);
 },1500);
 function flash(){if(cancelled)return;SFX.play('boom');box.classList.add('flash');say.innerHTML='';
  setTimeout(()=>{if(cancelled)return;box.classList.remove('scan','flash');box.classList.add('done');
   const nb=document.createElement('div');nb.className='dvname';nb.innerHTML='<small>진화</small><b>'+esc(NAMES[target])+'</b>';box.appendChild(nb);
   setTimeout(()=>{if(cancelled)return;stop();evoFinish(p,target,box,nw,say);},1500);},700);}
}
function closeLayer(){document.getElementById('layer').innerHTML='';}
function confirmBox(title,msg,yes){const L=document.getElementById('layer');L.innerHTML='<div class="overlay"><div class="modal" role="dialog" aria-label="'+esc(title)+'"><b class="serif" style="font-size:22px;color:#ffd36e">'+esc(title)+'</b><p style="margin:0;white-space:pre-line">'+esc(msg)+'</p><div style="display:flex;gap:8px;margin-top:6px"><button class="btn" id="cfY">확인</button><button class="btn ghost" id="cfN">취소</button></div></div></div>';document.getElementById('cfY').onclick=()=>{closeLayer();yes();};document.getElementById('cfN').onclick=closeLayer;}
function feedMenu(){const L=document.getElementById('layer'),p=P();
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="먹이 주기"><b class="serif" style="font-size:20px">무엇을 먹일까요?</b><small style="color:#c9d8d5;word-break:keep-all;text-align:center">포만감 '+Math.round(p?p.hu:0)+' / 100 · 가득 찬 상태에서 먹이면 호감도 -3</small><div class="feedl">'+[1,2,3,4,5].map(k=>{const id='food_'+k,n=acc.inv[id]||0;return '<button class="feedr" data-a="food" data-v="'+id+'" '+(n?'':'disabled')+'><img class="px" src="'+ITEMS[id].img+'" alt=""><span class="fn"><b>'+ITEMS[id].n+'</b><small>'+foodFx(k,p)+'</small></span><span class="fq"><em>포만감 +'+FOOD[k].hu+'</em><small>보유 '+n+'</small></span></button>';}).join('')+'</div><p class="muted" style="color:#c9d8d5;margin:0">먹이는 상점이나 마을의 [환수 음식]에서 얻어요.</p><button class="btn ghost" data-close="1">닫기</button></div></div>';}
/* 먹이 효과 한 줄 (현재 단계 기준) */
function foodFx(k,p){const st=p?p.st:1,xp=e=>e.fx?'+'+fmt(e.fx):'+'+Math.round(e.fm*100)+'%';
 if(k===1)return '배고픔 해결';if(k===3)return '오행 기운 +1 · 호감도 +2';
 const t='다음 수련 경험치 '+xp(foodXp(k,st));return k===5?'호감도 +5 · '+t:t;}
function kiMenu(){const L=document.getElementById('layer'),p=P();if(!p)return;const cap=gCapP(p);
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="기운 먹이기"><b class="serif" style="font-size:20px">기운 먹이기</b><small style="color:#c9d8d5">'+stN(p)+' 게이지 최대 '+cap+' · 기운 1개 = 게이지 +1</small><div class="kigrid">'+GAUGES.map(k=>{const id=KI[k],have=acc.inv[id]||0,v=p.g[k]||0,full=v>=cap;
  return '<div class="kirow"><img class="px" src="'+ITEMS[id].img+'" alt=""><div class="kib"><b style="color:'+ELC[k]+'">'+ELK[k]+'</b> <small>'+v+' / '+cap+' · 보유 '+have+'</small><div class="trk"><i style="width:'+(cap?v/cap*100:0)+'%;background:linear-gradient(90deg,'+ELG[k]+')"></i></div></div>'+[1,5,10].map(n=>'<button class="btn sm '+(full||!have?'soft':'')+'" data-a="ki" data-v="'+k+':'+n+'" '+(full||!have||!cap?'disabled':'')+'>×'+n+'</button>').join('')+'</div>';}).join('')+'</div><button class="btn ghost" data-close="1">닫기</button></div></div>';}
function susMenu(){const L=document.getElementById('layer');L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="수상한 기운"><b class="serif" style="font-size:20px">수상한 기운</b><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%">'+['sus_s','sus_m','sus_l'].map((k,i)=>'<button class="act" data-a="sus" data-v="'+k+'" '+((acc.inv[k]||0)?'':'disabled')+'><img class="px" src="'+ITEMS[k].img+'" alt=""><b>'+['소','중','대'][i]+'</b><small>보유 '+(acc.inv[k]||0)+'</small></button>').join('')+'</div><p class="muted" style="color:#c9d8d5">빨리 크는 대신 오행 게이지가 무작위로 오르고 부작용이 있어요.<br>소: 포만감 -10 · 중: 포만감·청결·목마름 -20 · 대: 무작위 오행 +3</p><button class="btn ghost" data-close="1">닫기</button></div></div>';}
/* ================= 화면 ================= */

/* ================= 우편함 ================= */
function mailParts(m){const a=[];if(m.coins)a.push('환수코인 '+fmt(m.coins));if(m.evc)a.push('이벤트 코인 '+fmt(m.evc));if(m.eggs)a.push('환수 알 ×'+m.eggs);if(m.yyEggs)a.push('음양알 ×'+m.yyEggs);Object.entries(m.items||{}).forEach(([k,n])=>{if(ITEMS[k]&&n>0)a.push(ITEMS[k].n+' ×'+n);});(m.gear||[]).forEach(g=>a.push(GN[g.g]+' '+(g.t==='n'?(g.o&&NG_OPT[g.o]?NG_OPT[g.o].n+'의 ':'')+'노리개':TN[g.t])+' +'+g.p));(m.pets||[]).forEach(pt=>{if(NAMES[pt.no])a.push('환수 '+NAMES[pt.no]+' Lv.'+pt.lv);});return a;}
function mailIcons(m){let h='';if(m.coins)h+='<span class="mchip"><img class="px" src="i/ui/icon_coin.png" alt="">'+fmt(m.coins)+'</span>';if(m.evc)h+='<span class="mchip"><img class="px" src="i/ev_coin.png" alt="">이벤트 코인 '+fmt(m.evc)+'</span>';if(m.eggs)h+='<span class="mchip"><img class="px" src="h/00.gif" alt="">환수 알 ×'+m.eggs+'</span>';if(m.yyEggs)h+='<span class="mchip"><img class="px" src="h/146.gif" alt="">음양알 ×'+m.yyEggs+'</span>';Object.entries(m.items||{}).forEach(([k,n])=>{if(ITEMS[k]&&n>0)h+='<span class="mchip"><img class="px" src="'+ITEMS[k].img+'" alt="">'+esc(ITEMS[k].n)+' ×'+n+'</span>';});(m.gear||[]).forEach(g=>{h+='<span class="mchip"><img class="px" src="'+(g.t==='n'?(g.o&&NG_OPT[g.o]?gearImg(g):'eq/n.gif'):gearImg(g))+'" alt=""><b class="c'+g.g+'">'+GN[g.g]+' '+(g.t==='n'?(g.o&&NG_OPT[g.o]?NG_OPT[g.o].n+'의 ':'')+'노리개':TN[g.t])+' +'+g.p+'</b></span>';});(m.pets||[]).forEach(pt=>{if(NAMES[pt.no])h+='<span class="mchip mpet"><img class="px" src="'+img(pt.no)+'" alt=""><b>'+esc(NAMES[pt.no])+'</b> Lv.'+pt.lv+'</span>';});return h;}
function newMailId(){return 'm'+Date.now().toString(36)+Math.floor(rnd()*1e6).toString(36);}

/* ================= 출석부 ================= */
const ATT=[{k:'sus_s'},{k:'sec_bless'},{k:'sec_active'},{k:'tal_time'},{k:'sus_m'},{k:'sus_l'},{egg:1}];
function attReward(r){return r.egg?{n:'환수 알',img:'h/00.gif'}:{n:ITEMS[r.k].n,img:ITEMS[r.k].img};}
function attCheck(){if(MODE!=='player'||!acc)return 0;const t=dayKey(now()),y=dayKey(now()-24*H),a=acc.att||{last:null,streak:0};if(a.last===t)return 0;
 const AL=attList(),st=a.last===y&&a.streak<AL.length?a.streak+1:1;acc.att={last:t,streak:st};rwGive(AL[st-1]);
 return st;}
function attModal(fresh,pg){const a=acc.att||{streak:0},st=a.last===dayKey(now())?a.streak:0,AL=attList(),last=AL.length-1;const L=document.getElementById('layer');
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal att" role="dialog" aria-label="출석부"><b class="serif" style="font-size:24px;color:#ffd36e">출석부</b><p style="margin:0;color:#e8fff8">'+(st?'연속 <b style="color:#ffd36e">'+st+'일째</b> 출석 중!':'오늘 아직 출석하지 않았어요.')+'</p>'+
 '<div class="attgrid">'+AL.map((r,i)=>{const w=rwInfo(r),on=i<st,now_=fresh&&i===st-1;return '<div class="attc'+(on?' on':'')+(i===last?' big':'')+'"><span class="attd">'+(i+1)+'일차</span><img class="px" src="'+w.img+'" alt=""><small>'+esc(w.n)+'</small>'+(on?'<span class="seal7'+(now_?' drop':'')+'">完</span>':'')+'</div>';}).join('')+'</div>'+
 (fresh&&st?'<p style="margin:0;color:#ffd36e;font-weight:700">오늘의 보상: '+esc(rwInfo(AL[st-1]).n)+' 획득!'+(AL[st-1].egg?' (알은 가방에 보관했어요)':'')+'</p>':'')+
 (pg?'<p class="attpass">월정액 '+pg.d+'일차 보상: <b>'+esc(rwInfo(pg.r).n)+'</b> 받았어요! <small>(남은 '+passLeft(S.pass)+'일)</small></p>':'')+
 '<small style="color:#c9d8d5">매일 오전 6시에 새 출석이 열려요. 하루라도 빠지면 1일차부터 다시 시작해요.</small><button class="btn" data-close="1" style="background:#f0c75e">확인</button></div></div>';
 if(fresh||pg)setTimeout(()=>SFX.play(st===AL.length?'fanfare':'egg'),350);}
/* ================= 도감 컬렉션 (해방하면 불이 들어와요) ================= */
function colPath(a,b){const r=[];let x=b;while(x!=null){r.unshift(x);if(x===a)break;x=FORMS[x].parent;}return r[0]===a?r:[a,b];}
function vMail(){const ms=(acc.mail||[]).slice().sort((a,b)=>b.t-a.t);
 return '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div class="pgtitle t-mail serif" style="margin:0">우편함</div>'+(ms.length>1?'<button class="btn teal" data-mclaim="*">모두 받기 ('+ms.length+')</button>':'')+'</div>'+
 (ms.length?'<div class="mlist">'+ms.map(m=>'<div class="card mail"><div class="mhead"><b class="serif" style="font-size:18px">'+esc(m.title||'우편')+'</b><small class="muted">'+esc(m.from||'운영자')+' · '+new Date(m.t).toLocaleDateString('ko-KR')+'</small></div>'+(m.msg?'<p style="margin:6px 0;white-space:pre-wrap;white-space:pre-line">'+esc(m.msg)+'</p>':'')+'<div class="mchips">'+mailIcons(m)+'</div><div style="text-align:right;margin-top:8px"><button class="btn" data-mclaim="'+esc(m.id)+'">'+(mailParts(m).length?'받기':'확인')+'</button></div></div>').join('')+'</div>'
 :'<div class="card" style="text-align:center;padding:40px 16px"><img class="px" src="i/ui4/mail_empty.png" alt="" style="width:160px;height:120px"><p class="muted">받은 우편이 없어요.</p></div>');}
function claimMail(id){const list=acc.mail||[];const want=id==='*'?list.slice().sort((a,b)=>a.t-b.t):list.filter(m=>m.id===id);if(!want.length)return;const got=[],done=new Set();let free=acc.slots.filter(q=>!q).length,blocked=0;
 let pSlot=acc.slots.filter(q=>!q).length,pVil=Math.max(0,vilCap()-vilPets().length),held=0,gotPets=0;
 want.forEach(m=>{const e=(m.eggs||0)+(m.yyEggs||0);const pn=(m.pets||[]).filter(pt=>NAMES[pt.no]&&FORMS[pt.no]).length;if(pn>pSlot+pVil){held++;return;}
  (m.pets||[]).forEach(pt=>{if(!NAMES[pt.no]||!FORMS[pt.no])return;const np=newPet(pt.no);np.lv=Math.min(maxLvP(np),Math.max(1,pt.lv||1));dexAdd(pt.no);gotPets++;const k=acc.slots.findIndex(q=>!q);if(k>=0){acc.slots[k]=np;acc.notice[k]=null;pSlot--;}else{vilInit();restIn(np);np.vb=null;const c=vilFreeCell(petSz(np));np.vx=c[0];np.vy=c[1];acc.vil.pets.push(np);pVil--;}});
  if(m.coins)acc.coins+=m.coins;if(m.evc)acc.evc=(acc.evc||0)+m.evc;Object.entries(m.items||{}).forEach(([k,n])=>{if(ITEMS[k]&&n>0)acc.inv[k]=(acc.inv[k]||0)+n;});(m.gear||[]).forEach(g=>{const n=gearNew(g.t,g.g);if(g.t==='n'&&g.o&&NG_OPT[g.o]){n.o=g.o;n.subs=[];ngFill(n);}if(g.t==='b'&&BELL[g.k])n.k=g.k;n.p=g.p||0;acc.gear.push(n);});
  for(let j=0;j<e;j++){if(giveEgg(j<(m.eggs||0)?0:146)<0)blocked++;}
  got.push(...mailParts(m));done.add(m.id);});
 acc.mail=list.filter(m=>!done.has(m.id));
 
 if(held)toast('환수를 둘 자리가 없어서 우편 '+held+'통은 남겨 뒀어요. 성장 슬롯이나 마을 자리를 비운 뒤 다시 받아 주세요.');
 if(got.length){SFX.play(gotPets||got.some(t=>t.startsWith('환수 알')||t.startsWith('음양알'))?'egg':'coins');toast('받았어요! '+got.slice(0,4).join(', ')+(got.length>4?' 외 '+(got.length-4)+'개':'')+(blocked?' (알 '+blocked+'개는 가방에 보관했어요)':''));}else SFX.play('ok');
 commit();}

/* ================= 화면: 상단 · 성장 슬롯 · 탐험 ================= */
const NAV=[['village','마을','nav_village'],['home','성장','nav_grow'],['train','수련·심부름','nav_tower'],['gear','장비','nav_gear'],['bag','가방','nav_bag'],['shop','상점','nav_shop'],['dex','도감','nav_dex'],['pvp','대전','nav_pvp'],['boss','토벌','nav_boss'],['tower','구천탑','nav_tower'],['dgn','도깨비 야행','nav_dgn'],['kr','근두운 질주','nav_kr'],['lotto','복권','nav_lotto']];
function header(){
 const tabs=NAV.filter(n=>!(n[0]==='dgn'&&!dgOpen())&&!(n[0]==='kr'&&!krOpen())&&!(n[0]==='lotto'&&!ltOpen())).concat(xmOn()?[['xmas','설화 던전','nav_event']]:[],hasGuest()?[['guest','전용 공간','nav_portal']]:[],[['code','코드','nav_settings'],['mail','우편','nav_mail'],['support','후원','nav_support']]);
 return '<header class="sky"><div class="bar"><span class="logo">환수키우기</span><nav class="main" aria-label="주 메뉴">'+tabs.map(([k,n,ic])=>'<button data-view="'+k+'" class="'+(view===k?'on':'')+'"><img class="navic" src="i/ui/'+ic+'.png" alt=""'+(ic==='nav_support'||ic==='nav_dgn'||ic==='nav_kr'?' onerror="this.onerror=null;this.src=\'i/ui/'+(ic==='nav_dgn'?'nav_boss':ic==='nav_kr'?'nav_tower':'nav_shop')+'.png\'"':'')+'>'+n+(k==='mail'&&acc.mail&&acc.mail.length?'<span class="mbadge">'+acc.mail.length+'</span>':'')+'</button>').join('')+'</nav><div class="coinbox"><img class="px" src="i/ui/icon_coin.png" alt="" width="44" height="44"><b>'+fmt(acc.coins)+'</b><span class="muted" style="margin-left:4px">환수코인</span></div><button class="btn ghost sm" data-a2="att" title="출석부">출석'+(acc.att&&acc.att.last===dayKey(now())?' '+acc.att.streak+'일':'')+'</button><button class="btn ghost sm" data-a2="msave" title="수동 저장 (오늘 남은 횟수 '+msaveLeft()+'/5)">💾 '+msaveLeft()+'/5</button><button class="btn ghost sm" data-a2="sfx" title="효과음" aria-label="효과음 '+(SFX.st.sfx?'끄기':'켜기')+'">'+(SFX.st.sfx?'🔊':'🔇')+'</button><button class="btn ghost sm" data-a2="bgm" title="배경음" aria-label="배경음 '+(SFX.st.bgm?'끄기':'켜기')+'" style="'+(SFX.st.bgm?'':'opacity:.4')+'">♪</button><span style="color:#fff8e6;font-size:13px">'+esc(acc.nick||acc.id)+'</span><button class="btn ghost sm" data-a2="logout">로그아웃</button></div>'+
 ((evBanner().length||cfg.notice)?'<div class="banner">'+(evBanner().length?'<span class="tag">이벤트</span><span>'+evBanner().map(esc).join(' · ')+'</span>':'')+(cfg.notice?'<span>[공지] '+esc(cfg.notice)+'</span>':'')+'</div>':'')+
 (acc.offset?'<div class="banner" style="background:#7a4512">테스트 시간 +'+(acc.offset/H).toFixed(1)+'시간 앞당겨진 상태예요</div>':'')+'</header>';}
function slotsBar(){return '<div class="slots" role="tablist" aria-label="성장 슬롯">'+acc.slots.map((_,i)=>{const p=acc.slots[i];if(!p)return '<button role="tab" class="slot'+(sel===i?' on':'')+'" data-sel="'+i+'"><img class="px" src="i/q.png" alt="" style="padding:10px"><span><b>빈 슬롯</b><small>알을 부화하거나 마을에서 데려와요</small></span></button>';
const st=p.errandResult?'🎁 심부름 완료!':p.result?'📜 수련 완료!':p.errand?'심부름 · '+fmtDur(p.errand.end-now()):p.train?'수련 · '+fmtDur(p.train.end-now()):p.sick!=null?'아파요!':p.sleep?'자는 중':stN(p)+' · Lv '+p.lv;
 return '<button role="tab" class="slot'+(sel===i?' on':'')+'" data-sel="'+i+'"><img class="px" src="'+img(p.no)+'" alt=""><span><b>'+NAMES[p.no]+'</b><small>'+st+'</small></span></button>';}).join('')+(acc.slots.length<MAX_SLOTS?'<button class="slot lockslot" data-slotadd="1"><img class="px" src="i/sec_slot.gif" alt=""><span><b>슬롯 추가</b><small>'+((acc.inv.sec_slot||0)>0?'성장슬롯추가비서 ('+acc.inv.sec_slot+')':slotPrice()+'환수코인')+'</small></span></button>':'')+'</div>'+doneBar();}
function enTip(p,html){const away=!!(p.train||p.errand),r=EN_REGEN*(away?EN_AWAY:1)*(1+gearSum(p).regen/100),mx=maxEn(p),ax=away?' (수련·심부름 중 절반)':'';let tip;
 if(p.en>=mx)tip='행동력이 가득 찼어요 · 시간당 +'+r.toFixed(2).replace(/\.?0+$/,'')+ax;
 else{const full=Math.ceil((mx-p.en)/r*60);tip='시간당 +'+r.toFixed(2).replace(/\.?0+$/,'')+ax+' · 가득 차기까지 '+(full>=60?Math.floor(full/60)+'시간 ':'')+(full%60)+'분';}
 return '<div class="entip" tabindex="0">'+html+'<span class="tipbox">'+esc(tip)+'</span></div>';}
function lifeEta(p){const G=gearSum(p),dm=1-G.decay/100,R={hu:huRate(p),th:10,cl:100/24},v={hu:p.hu,th:p.th,cl:p.cl},o={};const t0=now();let t=t0;const END=t0+14*24*H;
 const done=()=>['hu','th','cl'].every(k=>o[k+'0']!=null||v[k]<=0&&(o[k+'0']=o[k+'0']||t));
 Object.keys(v).forEach(k=>{if(v[k]<=10)o[k+'10']=t0;if(v[k]<=0)o[k+'0']=t0;});
 while(t<END&&!done()){let step=10*MIN;[p.train&&p.train.end,p.sleep,p.fix].forEach(b=>{if(b&&b>t&&b<t+step)step=b-t;});
  const training=p.train&&t<p.train.end,m=training?0:(p.fix&&t<p.fix&&t>=(p.fixS||0)?0:1)*(p.sleep&&t<p.sleep?.4:1)*dm,h=step/H;
  ['hu','th','cl'].forEach(k=>{if(!m||v[k]<=0)return;const d=R[k]*m*h,nv=v[k]-d;if(o[k+'10']==null&&v[k]>10&&nv<=10)o[k+'10']=t+(v[k]-10)/(R[k]*m)*H;if(o[k+'0']==null&&nv<=0)o[k+'0']=t+v[k]/(R[k]*m)*H;v[k]=Math.max(0,nv);});
  t+=step;}
 return {o,R,dm};}
function durK(d){const m=Math.max(1,Math.ceil(d/MIN)),dd=Math.floor(m/1440),hh=Math.floor(m%1440/60),mm=m%60,a=[];if(dd)a.push(dd+'일');if(hh)a.push(hh+'시간');if(!dd&&mm)a.push(mm+'분');return a.join(' ');}
function etaTxt(t){if(t==null)return '14일 넘게 괜찮아요';const d=t-now();if(d<=0)return '지금';return durK(d)+' 뒤';}
function lifeTip(p,k,html){const E=lifeEta(p),r=E.R[k]*E.dm,L=[];const v=p[k];
 const t=now(),cm=(p.train&&t<p.train.end)||(p.fix&&t<p.fix&&t>=(p.fixS||0))?0:(p.sleep&&t<p.sleep?.4:1);L.push('<b>지금 시간당 -'+(Math.round(r*cm*10)/10)+'</b>'+(cm!==1?' <small>(평소 -'+(Math.round(r*10)/10)+')</small>':'')+(E.dm<1?' · 장비로 -'+Math.round((1-E.dm)*100)+'% 느리게':''));
 const st=[];if(p.train&&now()<p.train.end)st.push('수련 중이라 멈춤 (끝나기까지 '+durK(p.train.end-now())+')');if(p.fix&&p.fix>now())st.push('생활수치 고정 중 (남은 '+durK(p.fix-now())+')');if(p.sleep&&p.sleep>now())st.push('잠자는 중이라 0.4배로 느리게 (깨기까지 '+durK(p.sleep-now())+')');
 if(st.length)L.push(st.join('<br>'));
 L.push(v<=10?'<span style="color:#ff9a8a">10 이하예요 · 시간당 호감도 -1</span>':'10 이하까지 '+etaTxt(E.o[k+'10'])+' <small>(호감도가 줄기 시작)</small>');
 if(v>0)L.push('0까지 '+etaTxt(E.o[k+'0']));
 return '<div class="entip" tabindex="0">'+html+'<span class="tipbox">'+L.join('<br>')+'</span></div>';}
function bar(lb,v,max,grad,warn){const w=Math.max(0,Math.min(100,v/max*100));return '<div class="stat"><span class="lb">'+lb+'</span><div class="tr"><i style="width:'+w+'%;background:linear-gradient(90deg,'+grad+')"></i></div><span class="v" style="'+(warn?'color:#b02a1f':'')+'">'+fmt(v)+(max!==100?'/'+fmt(max):'')+'</span></div>';}
function gaugeBars(p){const cap=gCapP(p),need_=gEls(p.no);
 return GAUGES.map(k=>{const v=p.g[k]||0,full=cap>0&&v>=cap;return '<div class="el"><div class="orb'+(full?' glow':'')+'"><img class="px elmed" src="'+ITEMS[KI[k]].img+'" alt=""></div><div style="flex:1;display:flex;flex-direction:column;gap:3px"><div style="display:flex;justify-content:space-between;font-size:13px"><b style="color:'+ELC[k]+'">'+ELK[k]+(need_.includes(k)?' <small class="muted">주 속성</small>':'')+'</b><b>'+v+' <span class="muted">/ '+cap+'</span></b></div><div class="trk'+(full?' glow':'')+'" style="border:1px solid '+ELC[k]+'"><i style="width:'+(cap?v/cap*100:0)+'%;background:linear-gradient(90deg,'+ELG[k]+')"></i></div></div></div>';}).join('');}
function statBlock(p){const s=statsOf(p),pc=x=>(x*100).toFixed(1).replace(/\.0$/,'')+'%';
 return '<div class="sgrid"><span>체력</span><b>'+fmt(s.hp)+'</b><span>공격력</span><b>'+fmt(s.atk)+'</b><span>방어력</span><b>'+fmt(s.def)+'</b><span>치명</span><b>'+s.crit+' <small>('+pc(critP(s.crit))+')</small></b><span>회피</span><b>'+s.eva+' <small>(최대 '+pc(evaP(s.eva,0))+')</small></b><span>직격</span><b>'+s.pen+' <small>(방어 무시 '+pc(penP(s.pen))+')</small></b></div>';}
function stageBg(p){if(p.train)return TMAP[p.train.m].img;if(p.errand)return ERR[p.errand.m].img;return 'm/home.webp';}
function vHome(){
 const p=P();
 if(!p){const n=acc.notice[sel],eggs=['egg_n','egg_yy','egg_x','egg_dk','egg_g1','egg_g2'].filter(k=>acc.inv[k]>0),vp=vilPets();
  return slotsBar()+'<div class="row"><div class="card" style="flex:1 1 420px">'+(n?'<p class="warn">'+esc(n)+'</p>':'')+'<h2>빈 성장 슬롯</h2>'+(eggs.length?'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">'+eggs.map(k=>'<button class="btn" data-hatch="'+k+'"><img class="px" src="'+ITEMS[k].img+'" alt="" style="width:28px;height:28px;vertical-align:-8px"> '+ITEMS[k].n+' 부화 ('+acc.inv[k]+')</button>').join('')+'</div>':'<p class="muted">가방에 알이 없어요.</p>')+
  '<h3 style="margin:12px 0 6px">마을에서 데려오기</h3>'+(vp.length?'<div class="vpick">'+vp.map((q,i)=>'<button class="bmp" data-vtoslot="'+i+'"><img class="px" src="'+img(q.no)+'" alt=""><small>'+esc(NAMES[q.no])+'<br>'+stN(q)+' Lv '+q.lv+'</small></button>').join('')+'</div>':'<p class="muted">마을에 환수가 없어요.</p>')+'</div>'+
  '<div class="card" style="flex:1 1 320px"><h2>알 코드 입력</h2><p class="muted">운영자에게 받은 알 코드를 입력하면 가방에 알이 들어와요.</p><form data-form="egg" style="display:flex;gap:8px;flex-wrap:wrap"><label class="f" style="flex:1">알 코드<input type="text" name="code" placeholder="EGG-XXXX-XXXX" required></label><button class="btn teal" style="align-self:flex-end">알 받기</button></form></div></div>';}
 const e=evoCheck(p),bd=badgeOf(p),d=daily(p),mx=maxLvP(p),hr=hearts(p),aw=awakeOk(p),smx=STAR_MAX(p.no);
 const stCls=p.sick!=null?' sick':p.sleep?' sleep':'';
 const status=p.errand?'<span class="chip" style="background:rgba(160,100,30,.92);color:#fff8e6">심부름 · '+esc(ERR[p.errand.m].n)+' · '+fmtDur(p.errand.end-now())+'</span>':p.train?'<span class="chip" style="background:rgba(43,90,94,.9);color:#e8fff8">수련 · '+esc(TMAP[p.train.m].n)+' · '+fmtDur(p.train.end-now())+(p.train.cp?' · 판정 전투력 '+fmt(p.train.cp)+' 고정':'')+(p.train.xb?' · 경험의 비서 +'+Math.round(p.train.xb*100)+'%':'')+'</span> <button class="btn soft sm" data-a="tcancel" data-v="'+sel+'" style="min-height:0;padding:3px 10px">수련 취소</button>':p.sick!=null?'<span class="chip" style="background:#8f2219;color:#fff">아파요! 소멸까지 '+fmtDur(p.sick+24*H-now())+'</span>':p.sleep?'<span class="chip" style="background:#2c3466;color:#e6e9ff">자는 중 · '+fmtDur(p.sleep-now())+'</span>':'<span class="chip" style="background:rgba(43,90,94,.9);color:#e8fff8">쉬는 중</span>';
 const warns=[];if(p.hu<=10)warns.push('배가 너무 고파요! 호감도가 시간마다 줄어요.');if(p.th<=10)warns.push('목이 너무 말라요! 호감도가 시간마다 줄어요.');if(p.cl<=10)warns.push('너무 더러워요! 호감도가 시간마다 줄어요.');if(p.aff<=5&&p.sick==null)warns.push('호감도가 0이 되면 병에 걸려요.');
 const lvTxt=p.lv>=mx?'Lv '+p.lv+' MAX':'Lv '+p.lv,expW=p.lv>=mx?100:p.exp/needP(p)*100;
 const acts=[['feed','','i/act_feed.png','먹이 주기','포만감 '+Math.round(p.hu)],['dew','','i/act_dew.png','설화의 이슬','보유 '+(acc.inv.dew||0)],['soap','','i/act_wash.png','씻기기','비누 '+(acc.inv.soap||0)],['kimenu','','i/ui/icon_ki_yinyang.png','기운 먹이기','게이지 '+gCapP(p)],['pat','','i/act_pat.png','쓰다듬기','오늘 '+d.pat+'/2'],['play','','i/act_play.png','놀아주기',d.play?'오늘 완료':'미니게임 · 호감도 +10'],['sleep','','i/act_sleep.png',p.sleep?'깨우기':'재우기','남은 '+(2-d.sleep)+'회'],['elixir','','i/act_elixir.png','영약환단','보유 '+(acc.inv.elixir||0)],['susm','',ITEMS.sus_s.img,'수상한 기운','소·중·대'],['energy','',ITEMS.sec_active.img,'행동력 비서','보유 '+(acc.inv.sec_active||0)],['resetKi','',ITEMS.reset_ki.img,'오행초기화','보유 '+(acc.inv.reset_ki||0)]];
 const adm=['xm_seal','sec_fix','tal_time','sec_t60','sec_t180','sec_t300','sec_t480','sec_aff','sec_cure','sec_xp50','sec_xp100'].filter(k=>acc.inv[k]>0).map(k=>['admItem',k,ITEMS[k].img,ITEMS[k].n,'보유 '+acc.inv[k]]);
 const star=smx?'<span class="stars">'+[...Array(smx)].map((_,i)=>'<i class="'+(i<(p.star||0)?'on':'')+'">★</i>').join('')+'</span>':'';
 return slotsBar()+'<div class="row"><section class="grow" aria-label="환수 탐험"><div class="stagebox explore'+stCls+'" style="'+(p.train||p.errand||!(acc.deco&&acc.deco.bg)?'background-image:url('+stageBg(p)+')':'')+'"><div style="position:absolute;left:18px;top:16px;display:flex;flex-direction:column;gap:8px;z-index:3"><div class="plate gname" style="display:flex;align-items:baseline;gap:8px;flex-wrap:wrap"><span class="serif" style="font-size:24px;font-weight:700">'+NAMES[p.no]+'</span>'+star+'<span class="muted">no.'+dexNo(p.no)+' · '+stN(p)+'</span>'+elTag(ELOF[p.no])+'</div><div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">'+(gradeTag(p.no)+(bd==='final'?finalIcon:bd==='wait'?waitIcon:'')+'<span class="chip" style="background:rgba(255,250,240,.92);color:#3a2a08">특성 '+TRAITN[TRAIT[p.no]]+'</span>')+status+decoBtn()+'</div></div><div class="plate cpp" style="position:absolute;right:18px;top:16px;min-width:170px;z-index:3"><div style="display:flex;justify-content:space-between;align-items:baseline"><span class="muted">전투력</span><b style="font-size:18px;color:#8a2a12">'+fmt(cp(p))+'</b></div><div class="muted" style="display:flex;justify-content:space-between"><span>호감도 보너스</span><span>+'+HEART_BON[hr]+'%</span></div></div><img class="pet px'+(isGuest(p.no)&&gSer(p.no)==='s2'?' chii':'')+'" src="'+img(p.no)+'" alt="'+NAMES[p.no]+'"><div class="expbar"><b>'+lvTxt+'</b><div class="ebt"><i style="width:'+expW+'%"></i></div><span style="font-size:13px">'+(p.lv>=mx?'경험치 MAX':fmt(p.exp)+' / '+fmt(needP(p)))+'</span></div></div>'+
 '<div class="card"><div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;align-items:center"><h2 style="margin:0">돌보기</h2><label style="display:flex;gap:8px;align-items:center;font-size:13px;cursor:pointer"><input type="checkbox" data-a="autoSleep" '+(autoOn(p)?'checked':'')+' style="width:18px;height:18px;accent-color:#2b5a5e">성장 후 자동 수면 <span class="muted">(오늘 남은 수면 '+(2-d.sleep)+'회)</span></label></div>'+warns.map(w=>'<p class="warn" style="margin:8px 0 0">'+w+'</p>').join('')+
 '<div class="acts" style="margin-top:12px">'+acts.concat(adm).map(a=>'<button class="act" data-a="'+a[0]+'" data-v="'+a[1]+'"><img class="px" src="'+a[2]+'" alt=""><b>'+a[3]+'</b><small>'+a[4]+'</small></button>').join('')+'</div>'+
 (()=>{const NO='필요 조건을 달성하지 못했습니다.\n',W=(tip,b)=>'<span class="bbw" data-bt="'+esc(tip)+'">'+b+'</span>',canHome=isGuest(p.no)?isGFinal(p.no):isFinalNo(p.no),coin=isGuest(p.no)?REFUND[GUEST_ST]:REFUND[Math.max(4,p.st)];
  return '<div class="bigrow">'+W(e.ok?'진화할 수 있어요! 어떤 모습이 될지는 진화해 봐야 알아요.':e.done?'최종 형태예요. 더 이상 진화하지 않아요.':NO+e.reason,'<button class="bigb evo" data-a="evolve" '+(e.ok?'':'disabled')+'><img class="px" src="i/act_evolve.png" alt=""><span>'+(e.done?'최종 형태':'진화하기')+'</span></button>')+
  (smx?W(aw?NO+aw:'각성 ★'+((p.star||0)+1)+'\n필요: '+Object.entries(awakeCost(p)).map(([k,n])=>ITEMS[k].n+' '+n).join(', '),'<button class="bigb evo" data-a="awaken" '+(aw?'disabled':'')+'><img class="px" src="i/ui/ui_final_badge.png" alt=""><span>각성하기</span></button>'):'')+
  (isGuest(p.no)?W('스타즈렐름 전용 공간으로 보내요.','<button class="bigb ret" data-gsend="'+sel+'"><img class="px" src="i/act_portal.png" alt=""><span>전용 공간으로</span></button>'):'')+
  W('마을로 보내면 생활 수치가 줄지 않고 행동력이 차요.','<button class="bigb ret" data-a="toVil"><img class="px" src="i/ui/nav_village.png" alt=""><span>마을로 보내기</span></button>')+
  W(isGuest(p.no)?'스타즈렐름 등급 환수는 해방할 수 없어요.':p.st<4?NO+'4단계부터 해방할 수 있어요.':'해방하면 되돌릴 수 없어요.\n도감에 解 도장이 찍히고 해방 보상이 우편으로 와요.','<button class="bigb free" data-a="liberate" '+(p.st<4||isGuest(p.no)?'disabled':'')+'><img class="px" src="i/act_free.png" alt=""><span>해방하기</span></button>')+
  W(canHome?'선계 귀환 보상: 환수코인 '+coin+'개\n환수는 선계로 돌아가고 성장 슬롯이 비어요.':NO+(isGuest(p.no)?'완전체가 되어야 선계로 돌려보낼 수 있어요.':'최종 형태만 선계로 돌려보낼 수 있어요.')+'\n(최종 형태 귀환 보상: 환수코인 '+coin+'개)','<button class="bigb ret" data-a="home" '+(canHome?'':'disabled')+'><img class="px" src="i/act_return.png" alt=""><span>선계 귀환</span></button>')+'</div>';})()+(e.stuck?'<p class="warn" style="margin:10px 0 0">지금 오행으로는 진화할 수 없어요. (조건 미충족)</p>':'')+'</div></section>'+
 '<aside class="side ornate" aria-label="환수 상태"><div class="card"><h2>상태</h2>'+enTip(p,bar('행동력',p.en,maxEn(p),'#3d7d84,#7cc4c2'))+lifeTip(p,'hu',bar('포만감',p.hu,100,'#c9822b,#f0c98a',p.hu<=10))+lifeTip(p,'th',bar('목마름',p.th,100,'#3b8beb,#a9d6ff',p.th<=10))+lifeTip(p,'cl',bar('청결도',p.cl,100,p.cl<=10?'#c0392b,#f08a7e':'#6fae3a,#bfe59a',p.cl<=10))+(p.fix&&p.fix>now()?'<div class="fixon"><img class="px" src="'+ITEMS.sec_fix.img+'" alt="">생활 수치 고정 중 · 남은 '+fmtDur(p.fix-now())+'</div>':'')+
 '<div class="stat"><span class="lb">호감도</span><span role="img" aria-label="하트 5개 중 '+hr+'개" style="display:flex;gap:3px">'+[0,1,2,3,4].map(i=>'<img class="px uiheart'+(i<hr?' on':'')+'" src="i/ui_heart_'+(i<hr?'full':'empty')+'.png" alt="">').join('')+'</span><span class="muted" style="margin-left:auto">'+Math.round(p.aff)+'/100</span></div></div>'+
 '<div class="card"><h2 style="margin:0 0 6px">오행 게이지</h2>'+gaugeBars(p)+'<p class="muted" style="margin:6px 0 0">기운 1개 = +1 · '+stN(p)+' 최대 '+gCapP(p)+' · 진화하면 0부터 다시 채워요.</p></div>'+
 '<div class="card"><h2 style="margin:0 0 6px">전투 능력치</h2>'+statBlock(p)+'</div>'+
 '<div class="card"><div style="display:flex;justify-content:space-between"><h2 style="margin:0 0 8px">장비</h2><button class="btn soft sm" data-view="gear">장비 관리</button></div><div class="eqrow">'+GT.map(t=>{const g=p.eq[t]?gearOf(p.eq[t]):null;return g?'<button class="gear g'+g.g+'" data-gpick="'+g.u+'"><img class="px" src="'+gearImg(g)+'" alt=""><b class="c'+g.g+'" style="font-size:11px">'+GN[g.g]+' +'+g.p+'</b><small class="muted">'+TN[t]+'</small></button>':'<button class="gear" data-view="gear"><div class="geq0 muted">비어 있음</div><small class="muted">'+TN[t]+'</small></button>';}).join('')+'</div></div></aside></div>';
}
/* ================= 수련 · 심부름 ================= */
function vTrainHub(){const m=S.tmode==='errand'?'errand':'train';return '<div class="pgtitle t-'+m+' serif">'+(m==='errand'?'선계 심부름':'선계수련')+'</div><div class="tmode">'+[['train','선계수련'],['errand','선계 심부름']].map(([k,n])=>'<button class="'+(m===k?'on':'')+'" data-tmode="'+k+'">'+n+'</button>').join('')+'</div>'+slotsBar()+(m==='errand'?vErrand():vTrain());}
function vTrain(){const p=P();
 if(!p)return '<div class="card">빈 슬롯이에요. 환수를 고른 뒤 수련을 보내세요.</div>';
 const rec=Math.min(11,Math.max(0,p.st-1)),s=selSpot==null?rec:selSpot,mp=TMAP[s],c=cp(p),ratio=c/mp.rec,cut=trainCut(p),G=gearSum(p);
 const running=acc.slots.map((q,i)=>q&&q.train?'<div class="trun"><img class="px" src="'+img(q.no)+'" alt=""><div style="flex:1"><div style="display:flex;justify-content:space-between;font-size:14px"><b>'+NAMES[q.no]+' · '+esc(TMAP[q.train.m].n)+'</b><b style="color:#2b5a5e">'+fmtDur(q.train.end-now())+'</b></div><div class="stat" style="margin:4px 0"><div class="tr"><i style="width:'+((now()-q.train.start)/(q.train.end-q.train.start)*100)+'%;background:linear-gradient(90deg,#3d7d84,#7cc4c2)"></i></div></div></div><button class="btn soft sm" data-a="tcancel" data-v="'+i+'">취소</button></div>':'').join('');
 return '<div class="row"><section class="grow"><div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px"><span></span>'+expBreak(p,G)+'</div><div class="mapgrid">'+TMAP.map((q,i)=>{const r=c/q.rec,tag=i===rec?['추천','background:#f0c75e;color:#3a2a08']:r>=1?['여유','background:#e3f1e4;color:#2e7d3a']:['전투력 부족','background:#fbe4df;color:#8f2219'];
  return '<button class="mapc'+(i===s?' on':'')+'" data-spot="'+i+'" style="background-image:linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(10,20,24,.85)),url('+q.img+')"><span class="mtag" style="'+tag[1]+'">'+tag[0]+'</span><b class="serif">'+(i+1)+'. '+q.n+'</b><small>권장 전투력 '+fmt(q.rec)+' · 시간당 '+fmt(q.xph)+' EXP</small></button>';}).join('')+'</div></section>'+
 '<aside class="side"><div class="card"><h2>'+(s+1)+'. '+mp.n+'</h2><div class="thumb2" style="background-image:url('+mp.img+')"></div><div class="kv" style="font-size:14px;margin:8px 0"><span>보낼 환수 <b>'+NAMES[p.no]+'</b></span><span>전투력 <b style="color:'+(ratio>=1?'#2e7d3a':'#b02a1f')+'">'+fmt(c)+' / '+fmt(mp.rec)+'</b></span><span>행동력 <b>'+Math.floor(p.en)+'</b></span>'+(cut?'<span>방울 <b>-'+Math.round(cut*100)+'%</b></span>':'')+'</div>'+(ratio<.5?'<p class="warn" style="margin:0 0 6px">전투력이 권장의 절반도 안 돼요! 실패하면 경험치를 하나도 못 받아요.</p>':'')+
  '<div class="durgrid">'+TDUR.map((m,d)=>{const exp=Math.round(mp.xph*m/60*TEFF[d]*(1+(G.exp+HEART_BON[hearts(p)])/100)*expM()),dis=p.train||p.errand||p.sick!=null||p.sleep||p.en<TCOST[d]||p.lv>=maxLvP(p);return '<button class="durb" data-a="train" data-v="'+s+':'+d+'" '+(dis?'disabled':'')+'><b>'+durTxt(m)+'</b><small>~'+fmt(exp)+' EXP · 효율 '+Math.round(TEFF[d]*100)+'%</small><small>행동력 -'+TCOST[d]+'</small></button>';}).join('')+'</div>'+
  '<p class="muted">짧은 수련은 행동력을 적게 쓰고, 긴 수련은 행동력을 많이 쓰는 대신 시간당 경험치가 많아요 (10분 85% → 12시간 115%). 수련·심부름 중에는 행동력이 절반만 차요. 끝나면 생활 수치가 한 번에 줄어요.'+(p.lv>=maxLvP(p)?'<br><b>최대 레벨이에요. 진화하면 다시 수련할 수 있어요.</b>':'')+(autoOn(p)?' 끝나면 자동으로 잠들어요.':'')+'</p></div><div class="card"><h2>진행 중</h2>'+(running||'<p class="muted">진행 중인 수련이 없어요.</p>')+'</div></aside></div>';}
/* ================= 상점 ================= */
const SHOP_CATS=[['먹이','먹이'],['생활','생활'],['약','약'],['성장','성장 · 비서'],['강화','강화'],['기운','기운'],['알','알'],['보상','특별'],['인게임','인게임'],['기타','기타']];
const DECO_SHOP_N=()=>TILES.map((t,n)=>t.free?null:{k:'tile:'+n,n:t.n,p:t.p,img:tileSrc(n)}).filter(Boolean).concat(PROPS.map((t,n)=>({k:'deco:'+n,n:t.n,p:t.p,img:decoSrc(n)})));
function vShop(){const ad=accDaily(),tab=S.shop||'item';
 let h='<div class="pgtitle t-shop serif">상점</div><div class="tmode">'+[['item','아이템'],['expand','확장'],['deco','꾸미기'],['ex','기운 교환소']].map(([k,n])=>'<button class="'+(tab===k?'on':'')+'" data-shop="'+k+'">'+n+'</button>').join('')+'</div>';
 if(tab==='item'){const eggOn=SHOPX.egg>0&&SHOPX.eggWeek>0,cats=SHOP_CATS.map(([c,cn])=>[c,cn,Object.entries(ITEMS).filter(([k,v])=>v.cat===c&&v.p>0)]).filter(([c,cn,l])=>l.length||(c==='알'&&eggOn));if(!cats.some(x=>x[0]===S.shopCat))S.shopCat=cats.length?cats[0][0]:null;
  h+='<div class="catwrap">'+catBar(cats.map(([c,cn,l])=>[c,cn,l.length+(c==='알'&&eggOn?1:0),l[0]?l[0][1].img:'h/00.gif']),S.shopCat,'shopcat')+'<div class="catbody">';
  h+=cats.filter(([c])=>c===S.shopCat).map(([c,cn,its])=>{return '<div class="card catcard"><h2>'+cn+'</h2><div class="items">'+its.map(([k,v])=>{const lim=v.daily?(ad[k]||0)+'/'+v.daily:'',wl=v.weekly?(accWeekly()[k]||0)+'/'+v.weekly:'';return '<div class="item"><img class="px" src="'+v.img+'" alt=""><div class="t"><b>'+v.n+'</b><small>'+v.d+'</small><small>'+v.p+'환수코인 · 보유 '+(acc.inv[k]||0)+(lim?' · 오늘 '+lim:'')+(wl?' · 이번 주 '+wl:'')+'</small></div><div style="display:flex;flex-direction:column;gap:4px"><button class="btn sm" data-buy="'+k+'" data-n="1">1개</button>'+(v.daily||v.weekly?'':'<button class="btn soft sm" data-buy="'+k+'" data-n="10">10개</button>')+'</div></div>';}).join('')+'</div></div>';}).join('');
  const wk=accWeekly(),left=SHOPX.eggWeek-wk.egg;if(eggOn&&S.shopCat==='알')h+='<div class="card catcard"><h2>환수 알</h2><div class="items"><div class="item"><img class="px" src="h/00.gif" alt=""><div class="t"><b>환수 알</b><small>가방에 들어가요. 매주 월요일 오전 6시에 초기화</small><small>'+SHOPX.egg+'환수코인 · 이번 주 '+wk.egg+'/'+SHOPX.eggWeek+'</small></div><button class="btn sm" data-buyegg="1" '+(left<=0?'disabled':'')+'>'+(left<=0?'이번 주 완료':'구매')+'</button></div></div></div>';h+='</div></div>';}
 if(tab==='expand'){const n=acc.slots.length,full=n>=MAX_SLOTS,pr=slotPrice(),vc=vilCap(),vk=Math.round((vc-VIL_CAP0)/5),vfull=vc>=VIL_CAPMAX;
  const xc=(im,nm,d,info,cur,btn)=>'<div class="xcard"><img class="px xim" src="'+im+'" alt=""><div class="xt"><b class="serif">'+nm+'</b><small>'+d+'</small><span class="xinfo">'+info+'</span><span class="xcur">'+cur+'</span></div><div class="xbtn">'+btn+'</div></div>';
  h+='<div class="xgrid">'+xc('i/ui3/shop_expand_slot.png','성장 슬롯 추가','수련·심부름을 보낼 수 있는 성장 슬롯이 1칸 늘어요.',full?'최대 '+MAX_SLOTS+'칸':(n+1)+'번째 슬롯 · <b>'+fmt(pr)+'</b>환수코인','현재 '+n+' / '+MAX_SLOTS,'<button class="btn" data-buyslot="1" '+(full?'disabled':'')+'>'+(full?'최대':'구매')+'</button>')+
  xc('i/ui3/shop_expand_village.png','마을 확장','마을에 머무는 환수 한도가 5마리 늘어요.',vfull?'최대 '+VIL_CAPMAX+'마리':'<b>'+fmt(VIL_EXP[vk])+'</b>환수코인','현재 '+vc+' / '+VIL_CAPMAX,'<button class="btn" data-buyvil="1" '+(vfull?'disabled':'')+'>'+(vfull?'최대':'구매')+'</button>')+'</div>';}
 if(tab==='deco'){vilInit();h+=islShopHtml()+'<h2 class="shsec serif">마을 꾸미기</h2><p class="muted shnote">산 꾸미기는 마을 보관함에 들어가요. 마을의 [배치 모드 → 보관함]에서 꺼내 놓으세요. 기본 돌길은 무료·무제한이에요.</p><div class="decogrid">'+DECO_SHOP_N().map(d=>decoCard(d.img,d.n,(d.k==='tile:5'?'연못 5×5':d.k.startsWith('tile')?'길·바닥':'소품 2×2'),d.p,((acc.vil.store||{})[d.k]||0),'data-buydeco="'+d.k+'"')).join('')+'</div>';}
 if(tab==='ex'){h+='<div class="extitle serif">기운 교환소</div><p class="muted shnote">같은 기운 3개를 다른 기운 1개로 바꿔요. 음양의 기운은 교환할 수 없어요 (음양의 기운 건물에서만 생산).</p><div class="exg2">'+EL.map(a=>{const hv=acc.inv[KI[a]]||0;return '<div class="exrow"><div class="exsrc"><img class="px" src="'+ITEMS[KI[a]].img+'" alt=""><div><b>'+ITEMS[KI[a]].n+' ×3</b><small>보유 '+fmt(hv)+'</small></div></div><img class="exarr px" src="i/ui3/shop_ex_arrow.png" alt="→"><div class="extg">'+EL.filter(b=>b!==a).map(b=>'<button class="exb" data-kix="'+a+':'+b+'" '+(hv>=3?'':'disabled')+'><img class="px" src="'+ITEMS[KI[b]].img+'" alt=""><span>'+ELK[b]+'</span></button>').join('')+'</div></div>';}).join('')+'</div>';}
 return h;}
function bagBtn(k){return ITEMS[k].cat==='알'?'<button class="btn teal sm" data-hatch="'+k+'" '+(acc.slots.some(q=>!q)?'':'disabled')+'>부화</button>':k==='wish_note'?'<button class="btn teal sm" data-wishnote="1">열기</button>':k==='sec_vil'?'<button class="btn teal sm" data-usevil="1">사용</button>':k==='sec_kr'?'<button class="btn teal sm" data-krfill="1" '+(krLeft()>0?'disabled':'')+'>사용</button>':k==='sec_dg'?'<button class="btn teal sm" data-dgfill="1" '+(dgLeft()>0?'disabled':'')+'>사용</button>':k==='sec_errand'?'<button class="btn teal sm" data-errfill="1" '+((accDaily().errand||0)>0?'':'disabled')+'>사용</button>':k.startsWith('isl_')?'<button class="btn teal sm" data-useisl="'+k.slice(4)+'">사용</button>':ITEMS[k].cat==='인게임'?'<button class="btn soft sm" data-bagtab="ig">코드화</button>':'';}
function decoCard(im,n,sub,price,have,attr){return '<div class="dcard2"><div class="dimg"><img src="'+im+'" alt=""></div><b class="dname2">'+esc(n)+'</b><div class="dbot"><small>'+esc(sub)+' · 보관 '+have+'</small><button class="btn sm" '+attr+'>'+fmt(price)+'환수코인</button></div></div>';}
function expBreak(p,G){const e=cfg.ev&&cfg.ev.exp,evm=Math.round((cfg.expMult||1)*(evOn(e)?(+e.m||1):1)*100)/100,tx=titleEff('xp'),gx=G?Math.round(G.exp||0):0,hx=p?HEART_BON[hearts(p)]:0,L=[];
 if(evm!==1)L.push(['ev','이벤트 경험치 ×'+evm]);if(tx)L.push(['ti','칭호 「'+esc(acc.title||'')+'」 +'+tx+'%']);if(gx)L.push(['gr','장비 +'+gx+'%']);if(hx)L.push(['hr','호감도 +'+hx+'%']);if(p&&p.xpb)L.push(['xs','경험의 비서 +'+Math.round(p.xpb*100)+'% (다음 수련)']);if(p&&(p.fxp||p.fxm))L.push(['fd','먹이 효과 '+fxTxt(p)+' (다음 수련)']);
 return L.length?'<div class="xpb">'+L.map(([k,t])=>'<span class="xpc xp-'+k+'">'+t+'</span>').join('')+'</div>':'';}
/* ================= 가방 · 코드화 ================= */
const BAG_CATS=['알','기운','먹이','생활','약','성장','강화','보상','인게임','기타','운영자'];
function vBag(){const tab=S.bag||'all',has=Object.entries(acc.inv).filter(([k,n])=>n>0&&ITEMS[k]&&ITEMS[k].cat!=='근두운');
 let h='<div class="pgtitle t-bag serif">가방</div><div class="tmode"><button class="'+(tab==='all'?'on':'')+'" data-bagtab="all">아이템</button><button class="'+(tab==='ig'?'on':'')+'" data-bagtab="ig">코드화 (인게임 아이템)</button></div>';
 if(tab==='ig')return h+vCodify();
 const by0=BAG_CATS.map(c=>[c,has.filter(([k])=>ITEMS[k].cat===c)]).filter(([c,l])=>l.length);if(S.bagCat!=='전체'&&!by0.some(x=>x[0]===S.bagCat))S.bagCat=by0.length?by0[0][0]:'전체';
 const by=S.bagCat==='전체'?by0:by0.filter(x=>x[0]===S.bagCat);
 if(by0.length)h+='<div class="catwrap">'+catBar(by0.map(([c,l])=>[c,c,l.reduce((a,x)=>a+x[1],0),ITEMS[l[0][0]].img]).concat([['전체','전체 보기',has.reduce((a,x)=>a+x[1],0),'i/ui/nav_bag.png']]),S.bagCat,'bagcat')+'<div class="catbody">';
 h+=by.length?by.map(([c,l])=>'<div class="card"><h2>'+c+'</h2><div class="items">'+l.map(([k,n])=>{const bb=bagBtn(k);return '<div class="item'+(bb?'':' nobtn')+'"><img class="px" src="'+ITEMS[k].img+'" alt=""><div class="t"><b class="inq"><span class="inm" title="'+esc(ITEMS[k].n)+'">'+ITEMS[k].n+'</span><span class="iq">×'+fmt(n)+'</span></b><small>'+ITEMS[k].d+'</small></div>'+bb+'</div>';}).join('')+'</div></div>').join(''):'<div class="card"><p class="muted">가방이 비어 있어요.</p></div>';

 if(by0.length)h+='</div></div>';return h+'<p class="muted pgdesc">먹이·기운·비서 같은 아이템은 성장 화면의 돌보기 버튼에서 사용해요.</p>';}
const CAT_IC={'먹이':'food','생활':'life','약':'med','성장':'grow','강화':'enh','기운':'ki','알':'egg','보상':'special','인게임':'ig','기타':'etc','운영자':'admin','전체':'all'};
function catBar(L,cur,attr){return '<nav class="catbar" aria-label="카테고리">'+L.map(([k,n,c,im])=>'<button class="catb'+(k===cur?' on':'')+'" data-'+attr+'="'+esc(k)+'"><span class="catic"><img class="px" src="i/cat/cat_'+(CAT_IC[k]||'etc')+'.png?'+IMG_V+'" alt="" onerror="this.onerror=null;this.src=\''+im+'\'"></span><b>'+esc(n)+'</b>'+(c!=null?'<small>'+c+'</small>':'')+'</button>').join('')+'</nav>';}
/* ================= 장비 ================= */
function gearCard(g,extra){const cand=S.synA&&S.synA!==g.u&&synOk(gearOf(S.synA),g),src=S.synA===g.u;return '<button class="gear g'+g.g+(src?' sel':'')+(cand?' cand':'')+(S.synA&&!cand&&!src?' dim':'')+(extra?' eqd':'')+'" data-gpick="'+g.u+'" title="'+esc(GN[g.g]+' '+gearName(g)+' +'+g.p+'\n'+gearShort(g)+(extra?'\n'+extra:''))+'"><img class="px" src="'+gearImg(g)+'" alt=""><span class="gpl">+'+g.p+'</span><b class="gnm c'+g.g+'">'+gearName(g)+'</b><small class="ngl">'+esc(gearShort(g))+'</small><small class="muted geqby">'+(extra||'')+'</small></button>';}
function gearShort(g){if(g.t==='n')return ngLines(g).map(([o,v])=>NG_OPT[o].n+' '+v).join(' · ');if(g.t==='b')return BELL[g.k].n+' 시간 -'+bellVal(g)+'%';return Object.keys(GS[g.t]).map(k=>SL[k]+' '+gval(g,k)+(PCT[k]?'%':'')).join(' · ');}
function synOk(a,b){return !!(a&&b&&a.u!==b.u&&a.t===b.t&&a.g===b.g&&a.p===MAXP[a.g]&&b.p===MAXP[b.g]&&a.g<5&&equippedBy(a.u)==null&&equippedBy(b.u)==null&&(a.t!=='b'||a.k===b.k));}
function gearStatTxt(g){if(g.t==='n')return ngLines(g).map(([o,v,m])=>(m?'【주】':'【추가】')+NG_OPT[o].n+' '+v).join(' · ');if(g.t==='b')return BELL[g.k].d+' -'+bellVal(g)+'% (강화할수록 +5%씩)';return Object.keys(GS[g.t]).map(k=>SL[k]+' '+gval(g,k)+(PCT[k]?'%':'')).join(' · ')+' (강화 1단계마다 +'+Math.round(ENH_K[g.t]*100)+'%)';}
function gearModal(u){const g=gearOf(u);if(!g)return;S.gm=u;const p=P(),mp=MAXP[g.g],eqd=equippedBy(g.u),rate=g.p<mp?Math.min(1,RATE[g.p+1]+(S.bless?.1:0)):0,L=document.getElementById('layer');
 const canSyn=g.p>=mp&&g.g<5,cands=acc.gear.filter(x=>synOk(g,x)).length;
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal gmodal" role="dialog" aria-label="장비"><div class="gmh"><img class="px" src="'+gearImg(g)+'" alt=""><div><b class="serif c'+g.g+'" style="font-size:22px">'+gearName(g)+' +'+g.p+' <small style="color:#c9d8d5">/ '+mp+'</small></b><div class="gms">'+esc(gearStatTxt(g))+'</div>'+(eqd!=null&&petAt(eqd)?'<div class="gms" style="color:#ffd36e">'+NAMES[petAt(eqd).no]+' 장착 중</div>':'')+'</div></div>'+
 '<div class="gmbtns">'+(eqd!=null?'<button class="btn soft" data-unequip="'+g.u+'">해제'+(petAt(eqd)?' ('+NAMES[petAt(eqd).no]+')':'')+'</button>':p?'<button class="btn teal" data-equip="'+g.u+'">'+NAMES[p.no]+'에게 장착</button>':'')+
 (g.p<mp?'<button class="btn" data-enh="'+g.u+'">강화 ('+ECOST[g.g]+'환수코인 · '+Math.round(rate*100)+'%)</button>':'')+
 (canSyn?'<button class="btn" data-synpick="'+g.u+'" '+(eqd!=null?'disabled':'')+'>합성할 장비 고르기 ('+cands+'개 가능)</button>':'')+'</div>'+
 (g.p<mp?'<label class="gmchk"><input type="checkbox" data-bless '+(S.bless?'checked':'')+'>강화축복비서 사용 (+10%, 보유 '+(acc.inv.sec_bless||0)+')</label>':'<p class="gms" style="margin:6px 0 0">'+(g.g<5?'최대 강화! 같은 종류·같은 등급의 최대 강화 장비와 합성할 수 있어요.':'신화 등급은 더 합성할 수 없어요.')+'</p>')+
 '<button class="btn ghost" data-close="1" style="width:100%;margin-top:8px">닫기</button></div></div>';}
function synthModal(){const [a,b]=S.forgeSel.map(gearOf);if(!a||!b)return;const sy=SYN[a.g]||{},L=document.getElementById('layer');S.gm=null;
 L.innerHTML='<div class="overlay"><div class="modal gmodal" role="dialog" aria-label="합성"><b class="serif" style="font-size:22px;color:#ffd36e">합성</b><div class="gmh" style="justify-content:center;gap:10px"><img class="px" src="'+gearImg(a)+'" alt=""><b style="font-size:24px">+</b><img class="px" src="'+gearImg(b)+'" alt=""><b style="font-size:24px">→</b><img class="px" src="'+gearImg(Object.assign({},a,{g:a.g+1}))+'" alt=""></div><p style="margin:0">'+gearName(a)+' + '+gearName(b)+' → <b class="c'+(a.g+1)+'">'+GN[a.g+1]+'</b> · 성공 '+Math.round(sy.s*100)+'%'+(sy.d?' · 하락 '+Math.round(sy.d*100)+'%':'')+(sy.x?' · 파괴 '+Math.round(sy.x*100)+'%':'')+'</p>'+
 (sy.x?'<label class="gmchk"><input type="checkbox" data-protect '+(S.protect?'checked':'')+'>파괴방지비서 사용 (보유 '+(acc.inv.sec_protect||0)+')</label>':'')+
 '<div class="gmbtns"><button class="btn teal" data-synth="1">합성 ('+SFEE[a.g]+'환수코인)</button><button class="btn ghost" data-syncancel="1">다른 장비 고르기</button></div></div></div>';}
function equippedBy(u){let r=null;acc.slots.forEach((p,i)=>{if(p&&p.eq&&Object.values(p.eq).includes(u))r=i;});vilPets().forEach((p,i)=>{if(p&&p.eq&&Object.values(p.eq).includes(u))r=500+i;});['s1','s2'].forEach((sr,z)=>gspOf(sr).forEach((p,i)=>{if(p&&p.eq&&Object.values(p.eq).includes(u))r=(z+1)*1000+i;}));return r;}
function vGear(){const sa=S.synA&&gearOf(S.synA);if(S.synA&&!sa)S.synA=null;const ft=S.gft||'all';
 const banner=sa?'<div class="card synbar"><b>합성할 장비를 고르세요</b><span>'+gearName(sa)+' +'+sa.p+' 와(과) 합성할 같은 종류·같은 등급의 최대 강화 장비를 눌러 주세요.</span><button class="btn soft sm" data-syncancel="all">합성 취소</button></div>':'';
 const list=acc.gear.filter(g=>ft==='all'||g.t===ft).slice().sort((x,y)=>y.g-x.g||y.p-x.p);
 const pp=P(),eqp=pp?'<div class="geqwrap"><div class="geqhead"><img class="px" src="'+img(pp.no)+'" alt=""><div><b class="serif">'+esc(NAMES[pp.no])+'</b><small>장착 중인 장비 · 칸을 누르면 자세히 볼 수 있어요</small></div></div><div class="geqpan">'+GT.map(t=>{const u=pp.eq&&pp.eq[t],g=u&&gearOf(u);return '<button class="geslot'+(g?' on g'+g.g:'')+'" '+(g?'data-gpick="'+g.u+'" title="'+esc(gearName(g)+' +'+g.p+'\n'+gearShort(g))+'"':'disabled title="'+TN[t]+' 비어 있음"')+'>'+(g?'<img class="px" src="'+gearImg(g)+'" alt=""><b>+'+g.p+'</b>':'<img class="px" src="i/ui3/gear_slot_'+t+'.png" alt="'+TN[t]+'">')+'<small>'+TN[t]+'</small></button>';}).join('')+'</div></div>':'';
 return '<div class="pgtitle t-gear serif">장비</div>'+slotsBar()+banner+eqp+'<div class="row"><section class="grow"><div class="card"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px"><h2 style="margin:0">보유 장비 ('+acc.gear.length+')</h2><div class="tmode" style="margin:0">'+[['all','전체']].concat(GT.map(t=>[t,TN[t]])).map(([k,n])=>'<button class="'+(ft===k?'on':'')+'" data-gft="'+k+'">'+n+'</button>').join('')+'</div></div><div class="gearlist">'+(list.length?list.map(g=>{const e=equippedBy(g.u),on=e!=null&&petAt(e);return '<div class="gwrap">'+gearCard(g,on?NAMES[petAt(e).no]+(e>=1000?' (전용 공간)':e>=500?' (마을)':'')+' 장착 중':'')+(on&&!S.synA?'<button class="btn soft sm gun" data-unequip="'+g.u+'">해제</button>':'')+'</div>';}).join(''):'<p class="muted">장비가 없어요. 심부름·수련 인카운트·월드보스에서 얻을 수 있어요.</p>')+'</div></div></section><aside class="side"><div class="card"><h2>장비 안내</h2><p class="muted" style="margin:0">· <b>무기</b>: 공격력·직격 · <b>방어구</b>: 방어력·체력·생활 수치 감소 완화<br>· <b>보조무기</b>: 치명·회피·행동력 회복·경험치<br>· <b>노리개</b>: 방어/치명/회피/직격 중 주 옵션 + 희귀부터 추가 옵션<br>· <b>방울</b>: 생산·심부름·수련 중 하나의 시간 감소<br>· 강화 1단계마다 무기·방어구 +10%, 나머지 +5%<br>· 지금 선택한 환수: <b>'+(P()?NAMES[P().no]:'없음')+'</b>'+(P()&&(P().train||P().errand)?'<br><b style="color:#c8281e">이 환수는 '+(P().train?'수련':'심부름')+' 중이라 장비를 바꿀 수 없어요.</b>':'')+'</p></div></aside></div>';}
function vCode(){return '<div class="pgtitle t-code serif">코드</div><div class="row"><div class="card" style="flex:1 1 360px"><h2>환수 코드 (게임 → 웹)</h2><p class="muted">게임에서 <b>/trigger hwansu</b>로 받은 [환수 코드]를 입력하세요. 금화 3개 = 환수코인 1개예요.</p><form data-form="coin" style="display:flex;gap:8px;flex-wrap:wrap"><label class="f" style="flex:1">환수 코드<input type="text" name="code" placeholder="3-7-10-4821" required></label><button class="btn teal" style="align-self:flex-end">입력</button></form><p class="muted">연결된 플레이어 번호: '+(acc.playerNo||'아직 없음 (첫 코드로 연결돼요)')+'</p></div><div class="card" style="flex:1 1 360px"><h2>알 코드</h2><form data-form="egg" style="display:flex;gap:8px;flex-wrap:wrap"><label class="f" style="flex:1">알 코드<input type="text" name="code" placeholder="EGG-XXXX-XXXX" required></label><button class="btn teal" style="align-self:flex-end">알 받기</button></form><p class="muted">가방에 알이 들어와요.</p></div><div class="card" style="flex:1 1 360px"><h2>인게임 코드 (웹 → 게임)</h2><p class="muted">동패·은패 같은 인게임 아이템은 가방의 [코드화]에서 코드로 바꿔요.</p><button class="btn teal" data-view="bag" data-bagtab2="ig">코드화 열기</button></div></div>';}
function gradeTag(no,cls){const g=gradeOf(no);return '<img class="gtag'+(cls?' '+cls:'')+'" src="i/tag_'+GRADE_KEY[g]+'.png?'+IMG_V+'" alt="'+g+'" title="'+g+' 등급">';}
function elName(el){return String(el).split('|').map(x=>ELK[x]).join('·');}
function elTag(el){if(el&&String(el).indexOf('|')>=0)return String(el).split('|').map(elTag).join('');if(!ELK[el])return '';return '<span class="eltag" style="background:'+ELBG[el]+';color:'+ELC[el]+';border-color:'+ELC[el]+'">'+(el==='neutral'?'':'<img src="i/'+el+'.svg" alt="">')+ELK[el]+'</span>';}
const SPR={"yinyang_2":[96,129,47.0,97.2,50,87],"wood_1":[96,129,47.0,97.2,47,87],"soap_3":[128,172,64.0,129.2,46,115],"drink_2":[96,129,47.0,97.2,32,87],"water_4":[128,172,64.0,135.2,52,91],"food_4":[128,172,63.5,129.0,56,116],"metal_4":[128,172,63.5,129.0,55,116],"wood_4":[128,172,63.5,129.0,55,116],"drink_3":[128,172,65.0,129.8,41,113],"center_5":[160,216,79.5,163.5,64,138],"water_3":[128,172,63.5,129.0,49,116],"wood_3":[128,172,63.5,129.0,40,116],"food_1":[96,129,47.0,97.2,42,87],"water_5":[160,216,79.5,161.5,50,146],"earth_3":[128,172,63.5,129.0,47,116],"soap_1":[96,129,47.0,97.2,36,87],"wood_5":[160,216,79.5,161.5,57,146],"center_3":[128,172,64.0,129.2,51,115],"craft_3":[96,129,47.5,97.5,21,86],"market_3":[128,172,63.5,129.0,49,116],"water_2":[96,129,47.0,97.2,50,87],"market_5":[160,216,79.5,161.5,58,146],"drink_4":[128,172,63.5,129.0,53,116],"soap_4":[128,172,63.5,137.0,43,84],"earth_4":[128,172,63.5,129.0,63,116],"soap_5":[160,216,79.0,161.8,66,145],"fire_2":[96,129,47.0,97.2,38,87],"wish_5":[160,216,80.5,164.0,46,136],"drink_1":[96,129,47.0,97.2,45,87],"fire_3":[128,172,63.5,131.5,38,106],"market_2":[96,129,47.5,97.5,38,86],"fire_4":[128,172,63.5,129.0,57,116],"exp_5":[160,216,79.5,161.5,54,146],"market_4":[128,172,63.5,129.0,59,116],"craft_1":[96,129,46.5,97.5,30,86],"water_1":[96,129,47.0,97.2,54,87],"center_2":[96,129,47.0,97.2,38,87],"yinyang_4":[128,172,63.5,129.0,73,116],"yinyang_3":[128,172,63.5,131.0,60,108],"wish_4":[128,172,63.5,129.0,39,116],"metal_1":[96,129,47.0,97.2,57,87],"earth_1":[96,129,47.0,97.2,68,87],"exp_4":[128,172,63.0,137.8,39,81],"earth_2":[96,129,47.0,97.2,44,87],"craft_2":[96,129,47.0,97.2,34,87],"craft_5":[160,216,79.5,164.0,49,136],"food_2":[96,129,47.0,97.2,42,87],"yinyang_5":[160,216,79.5,163.5,45,138],"fire_5":[160,216,79.5,161.5,55,146],"metal_3":[128,172,64.5,129.5,42,114],"wood_2":[96,129,47.0,97.2,39,87],"metal_5":[160,216,79.5,161.5,54,146],"soap_2":[96,129,47.0,97.2,45,87],"drink_5":[160,216,79.5,162.5,56,142],"exp_3":[128,172,62.5,130.5,39,110],"wish_1":[96,129,47.0,97.2,46,87],"wish_2":[96,129,47.0,97.2,16,87],"craft_4":[96,129,47.0,103.2,29,63],"exp_1":[96,129,47.0,97.2,26,87],"food_5":[160,216,79.5,161.5,55,146],"market_1":[96,129,47.0,97.2,40,87],"yinyang_1":[96,129,46.5,98.5,39,82],"center_4":[128,172,63.5,129.0,70,116],"metal_2":[96,129,47.0,97.2,41,87],"wish_3":[128,172,63.0,129.2,16,115],"exp_2":[96,129,47.0,97.2,37,87],"food_3":[128,172,64.5,129.5,45,114],"fire_1":[96,129,47.0,97.2,51,87],"center_1":[96,129,47.0,97.2,48,87],"earth_5":[160,216,79.5,161.5,55,146],"deco_2":[64,86,30.5,69.5,30,42],"deco_0":[64,86,35.5,69.0,24,44],"deco_1":[64,86,31.0,68.8,26,45],"deco_6":[64,86,29.5,70.5,18,38],"deco_7":[64,86,31.0,67.2,41,51],"deco_3":[64,86,31.0,67.2,44,51],"deco_8":[192,192,95.5,146.0,10,152],"deco_4":[64,86,31.0,67.2,35,51],"deco_5":[64,86,31.5,67.0,40,52],"xdeco_1":[64,86,31.5,70.5,16,62],"xdeco_4":[64,86,31.5,70.5,15,62],"xdeco_7":[64,86,31.5,70.5,11,62],"xdeco_5":[64,86,31.5,70.5,32,62],"xdeco_2":[64,86,31.5,70.5,4,62],"xdeco_3":[64,86,31.5,70.5,28,62],"xdeco_6":[64,86,31.5,70.5,30,62],"xdeco_0":[64,86,31.5,70.5,8,62],"tp_maple_5":[64,86,30.0,67.8,33,49],"tp_snow_4":[64,86,31.5,70.5,29,62],"tp_blossom_3":[64,86,38.5,70.5,16,38],"tp_maple_2":[64,86,31.5,67.0,36,52],"tp_snow_3":[64,86,31.5,70.5,31,62],"tp_blossom_5":[64,86,31.5,67.0,31,52],"tp_snow_2":[64,86,31.5,70.5,24,62],"tp_snow_5":[64,86,31.5,70.5,28,62],"tp_blossom_2":[64,86,30.0,67.8,32,49],"tp_blossom_6":[64,86,31.0,67.2,24,51],"tp_moon_5":[64,86,30.0,68.2,32,47],"tp_moon_6":[64,86,31.5,67.0,29,52],"tp_snow_1":[64,86,31.5,70.5,23,62],"tp_blossom_1":[64,86,32.0,68.2,30,47],"tp_maple_1":[64,86,30.0,67.8,32,49],"tp_moon_3":[64,86,31.5,67.0,18,52],"tp_moon_2":[64,86,31.5,67.0,22,52],"tp_snow_6":[64,86,31.5,70.5,27,62],"tp_moon_4":[64,86,32.0,67.2,32,51],"tp_blossom_4":[64,86,25.5,70.0,41,40],"tp_maple_3":[64,86,32.5,77.0,17,12],"tp_maple_6":[64,86,28.0,71.2,28,35],"tp_maple_4":[64,86,29.0,68.2,49,47],"tp_moon_1":[64,86,33.0,67.8,24,49]};
const BADIMG=window.BADIMG=window.BADIMG||new Set();
/* ===== 섬(메인 단계별·테마섬) 지오메트리 ===== */
const ISL_C=[1024,780],ISLQ=N=>[[ISL_C[0],ISL_C[1]-N*8],[ISL_C[0]+N*16,ISL_C[1]],[ISL_C[0],ISL_C[1]+N*8],[ISL_C[0]-N*16,ISL_C[1]]];
const ISL_MAIN=[24,30,36,42].map((N,i)=>({img:'v/isl/main_'+(i+1)+'.webp',q:ISLQ(N),N}));
const THEMES={
 snow:{n:'설경섬',ic:'❄️',img:'v/isl/snow_island.webp',q:ISLQ(36),N:36,wx:'snow',cloud:'grayscale(1) brightness(1.12) sepia(.45) hue-rotate(175deg) saturate(1.4)',sky:'linear-gradient(180deg,#9fb6e6 0%,#d7e3f7 55%,#eef3fb 100%)',p:3000,
  props:['눈사람','얼음 등롱','눈 덮인 정자','썰매','고드름 바위','설화 나무'],pp:[80,60,150,70,50,120]},
 blossom:{n:'벚꽃섬',ic:'🌸',img:'v/isl/blossom_island.webp',q:ISLQ(36),N:36,wx:'petal',cloud:'saturate(1.1)',sky:'linear-gradient(180deg,#f6b8d0 0%,#fbd9e6 55%,#fff0f5 100%)',p:3000,
  props:['벚꽃 그네','꽃 수레','나비 등','돗자리','벚꽃 아치','연분홍 등롱'],pp:[120,100,60,50,150,60]},
 moon:{n:'달빛섬',ic:'🌕',img:'v/isl/moon_island.webp',q:ISLQ(36),N:36,wx:'firefly',cloud:'grayscale(1) brightness(.48) sepia(1) hue-rotate(190deg) saturate(1.8)',sky:'linear-gradient(180deg,#141b3f 0%,#2b3570 55%,#4a4f8c 100%)',p:3000,
  props:['달토끼 절구','반딧불 병','별 등롱','달맞이 정자','은빛 갈대','소원 돌탑'],pp:[100,50,60,150,40,80]},
 maple:{n:'단풍섬',ic:'🍂',img:'v/isl/maple_island.webp',q:ISLQ(36),N:36,wx:'leaf',cloud:'grayscale(.6) sepia(.7) saturate(1.5) hue-rotate(-8deg) brightness(1.03)',sky:'linear-gradient(180deg,#f2a36b 0%,#f8cf9c 55%,#fff1dc 100%)',p:3000,
  props:['감나무','장독대','허수아비','낙엽 더미','곡식 수레','단풍 정자'],pp:[120,80,60,40,100,150]}};
const THEME_KEYS=Object.keys(THEMES);
const curIsl=()=>(VS.isl&&VS.isl!=='main'&&acc.vil&&(acc.vil.isls||[]).includes(VS.isl))?VS.isl:'main';
const oIsl=o=>o.i||'main';
const inIsl=o=>oIsl(o)===curIsl();
function mainStage(){const c=(acc.vil&&acc.vil.cap)||VIL_CAP0;return c>=40?4:c>=30?3:c>=20?2:1;}
function islGeo(k){k=k||curIsl();if(k==='main'){const s=ISL_MAIN[mainStage()-1];return{img:s.img,q:s.q,N:s.N,off:Math.floor((VG-s.N)/2)};}const t=THEMES[k];return{img:t.img,q:t.q,N:t.N,off:Math.floor((VG-t.N)/2)};}
let GEO=null;const geo=()=>GEO||(GEO=islGeo());
function cellXY(cx,cy){const g=geo(),u=(cx-g.off)/g.N,v=(cy-g.off)/g.N,[T,R,B,L]=g.q;
 return[T[0]+(R[0]-T[0])*u+(L[0]-T[0])*v+(B[0]-R[0]-L[0]+T[0])*u*v,T[1]+(R[1]-T[1])*u+(L[1]-T[1])*v+(B[1]-R[1]-L[1]+T[1])*u*v];}
function cellAt(mx,my){const g=geo();let u=.5,v=.5;const [T,R,B,L]=g.q;
 for(let i=0;i<12;i++){const x=T[0]+(R[0]-T[0])*u+(L[0]-T[0])*v+(B[0]-R[0]-L[0]+T[0])*u*v-mx,y=T[1]+(R[1]-T[1])*u+(L[1]-T[1])*v+(B[1]-R[1]-L[1]+T[1])*u*v-my;
  const a=R[0]-T[0]+(B[0]-R[0]-L[0]+T[0])*v,b=L[0]-T[0]+(B[0]-R[0]-L[0]+T[0])*u,c=R[1]-T[1]+(B[1]-R[1]-L[1]+T[1])*v,d=L[1]-T[1]+(B[1]-R[1]-L[1]+T[1])*u,det=a*d-b*c;if(Math.abs(det)<1e-9)break;
  u-=(d*x-b*y)/det;v-=(-c*x+a*y)/det;}
 return[Math.floor(g.off+u*g.N),Math.floor(g.off+v*g.N)];}
function islBounds(){const g=geo();return[g.off,g.off+g.N];}
/* 발자국(x,y,w,h) 네 꼭짓점 */
function fpPts(x,y,w,h){return{T:cellXY(x,y),R:cellXY(x+w,y),B:cellXY(x+w,y+h),L:cellXY(x,y+h)};}
const fpW=(x,y,w,h)=>{const p=fpPts(x,y,w,h);return p.R[0]-p.L[0];};
const cellH=()=>{const g=geo();return (g.q[2][1]-g.q[0][1])/g.N/2;};
/* 바닥 그림을 발자국 평행사변형에 붙이기 (affine) — d: 이미지 속 마름모 [top x,y, right x,y, left x,y] */
function flatImg(src,x,y,w,h,d,cls,attrs,z){const p=fpPts(x,y,w,h),e1=[d[2]-d[0],d[3]-d[1]],e2=[d[4]-d[0],d[5]-d[1]],s1=[p.R[0]-p.T[0],p.R[1]-p.T[1]],s2=[p.L[0]-p.T[0],p.L[1]-p.T[1]],det=e1[0]*e2[1]-e2[0]*e1[1];
 const i00=e2[1]/det,i01=-e2[0]/det,i10=-e1[1]/det,i11=e1[0]/det,a=s1[0]*i00+s2[0]*i10,b=s1[1]*i00+s2[1]*i10,c=s1[0]*i01+s2[0]*i11,dd=s1[1]*i01+s2[1]*i11,tx=p.T[0]-(a*d[0]+c*d[1]),ty=p.T[1]-(b*d[0]+dd*d[1]);
 return '<img class="'+cls+'" '+attrs+' src="'+src+'" alt="" draggable="false" style="transform:matrix('+[a,b,c,dd,tx,ty].map(n=>n.toFixed(4)).join(',')+');z-index:'+z+'">';}
const D_TILE=[32,0,64,16,0,16],D_POND=[80,0,160,40,0,40];
function pathSrc(o){const k=curIsl(),h=((o.x*7+o.y*13)%4+4)%4+1;if(k!=='main')return 'v/path/'+k+'_'+h+'.webp';if((acc.vil.skin||'base')==='xm')return 'v/path/xm_'+h+'.webp';return 'v/path/main_'+h+'.webp';}
function tileFlat(o,sel,bad){const n=+o.k.slice(5),t=tileSz(o),cls='vt'+(sel?' sel':'')+(bad?' bad':''),at='data-vo="'+o.u+'"',z=1+o.x+o.y;
 if(n===2){let ps=pathSrc(o);if(BADIMG.has(ps))ps=ps.replace('/xm_','/main_');return flatImg(ps,o.x,o.y,t,t,D_TILE,cls,at+(ps.includes('/xm_')?' onerror="BADIMG.add(\''+ps+'\');this.onerror=null;this.src=\''+ps.replace('/xm_','/main_')+'\'"':''),z);}
 if(n===5)return flatImg(tileSrc(5),o.x,o.y,t,t,D_POND,cls,at,z);
 return flatImg(tileSrc(n),o.x,o.y,t,t,D_TILE,cls,at,z);}
/* 테마 소품 */
const isTP=o=>String(o.k).startsWith('tp:');
function tpInfo(k){const [,t,n]=String(k).split(':'),T=THEMES[t];return T?{n:T.props[+n-1],p:T.pp[+n-1],img:'v/tp/'+t+'_'+n+'.webp',t,key:'tp_'+t+'_'+n}:null;}
/* 배치 칸 격자 (배치 모드) */
function gridSvg(){const [lo,hi]=islBounds();let M='',m='';const P=v=>v[0].toFixed(1)+' '+v[1].toFixed(1);
 for(let i=lo;i<=hi;i++){const seg='M'+P(cellXY(i,lo))+'L'+P(cellXY(i,hi))+'M'+P(cellXY(lo,i))+'L'+P(cellXY(hi,i));if((i-lo)%2===0)M+=seg;else m+=seg;}
 return '<svg class="vgrid2" viewBox="0 0 2048 1536" width="2048" height="1536"><path d="'+m+'" stroke="rgba(255,255,255,.28)" stroke-width=".8" fill="none"/><path d="'+M+'" stroke="rgba(255,255,255,.55)" stroke-width="1.2" fill="none"/></svg>';}
/* 하늘·운해 */
const xmSky=()=>curIsl()==='main'&&acc.vil&&(acc.vil.skin||'base')==='xm';
/* 구름 색은 미리 칠한 이미지로 (CSS filter는 모바일에서 큰 레이어 깜빡임 원인) */
/* 구름은 움직이지 않음 (큰 레이어 애니메이션이 모바일에서 깜빡임·튕김 원인) */
function skyHtml(){const k=curIsl(),tk=THEMES[k]?k:(xmSky()?'snow':''),ck=tk&&tk!=='main'&&['snow','blossom','moon','maple'].includes(tk)?' cl-'+tk:'';
 return ['ca','cb','cc'].map(c=>'<div class="vclouds '+c+ck+'"></div>').join('');}
function skyFront(){const k=curIsl(),T=THEMES[k],f=T?T.cloud:'none';return '';}
const skyBg=()=>{const T=THEMES[curIsl()]||(xmSky()?THEMES.snow:null);return T?T.sky:'linear-gradient(180deg,#f3b9d6 0%,#e9cdf3 45%,#d9d4f5 75%,#cfd8f5 100%)';};
/* 날씨 */
function wxKind(){const k=curIsl();if(k!=='main')return THEMES[k].wx;return (acc.vil.skin||'base')==='xm'?'snow':null;}
let WX=null;
/* 날씨 캔버스: 화면 갱신(morph)이 width/height를 지워도 매 프레임 크기를 맞춤 · 레티나 대응 · 눈은 원근감 있게 */
let WXSZ=null;
function wxStart(){const cv=document.getElementById('vwx'),kind=wxKind();if(!cv||!kind){WX&&cancelAnimationFrame(WX.raf);WX=null;return;}
 if(WX&&WX.cv===cv&&WX.kind===kind)return;WX&&cancelAnimationFrame(WX.raf);
 const ctx=cv.getContext('2d'),R=Math.min(2,window.devicePixelRatio||1),col={snow:'#ffffff',petal:'#ffb7d0',firefly:'#fff4a0',leaf:'#e86a2a'}[kind];
 let W=0,Hh=0;const P=[];
 /* 부드러운 눈송이 스프라이트 */
 const fl=document.createElement('canvas');fl.width=fl.height=32;{const g=fl.getContext('2d'),rg=g.createRadialGradient(16,16,0,16,16,16);rg.addColorStop(0,'rgba(255,255,255,1)');rg.addColorStop(.45,'rgba(255,255,255,.85)');rg.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=rg;g.fillRect(0,0,32,32);}
 function fit(){const cw=cv.clientWidth||800,ch=cv.clientHeight||600,bw=Math.round(cw*R),bh=Math.round(ch*R);
  if(cv.width!==bw||cv.height!==bh){cv.width=bw;cv.height=bh;}ctx.setTransform(R,0,0,R,0,0);
  if(cw!==W||ch!==Hh){const sx=W?cw/W:1,sy=Hh?ch/Hh:1;P.forEach(p=>{p.x*=sx;p.y*=sy;});W=cw;Hh=ch;WXSZ={w:bw,h:bh};
   const want=kind==='firefly'?40:Math.max(40,Math.min(130,Math.round(W*Hh/7000)));while(P.length<want)P.push(mk(true));P.length=want;}}
 function mk(any){const d=Math.random();return {x:Math.random()*(W||800),y:any?Math.random()*(Hh||600):-10-Math.random()*40,d,s:Math.random(),a:Math.random()*6.28,w:.6+Math.random()*1.2};}
 let last=performance.now(),wind=0,wt=0;
 function step(t){const c2=document.getElementById('vwx');if(c2!==cv){WX=null;return;}fit();const dt=Math.min(.05,(t-last)/1000)||.016;last=t;ctx.clearRect(0,0,W,Hh);
  wt+=dt;wind=Math.sin(wt*.23)*12+Math.sin(wt*.61)*6;
  P.forEach((p,i)=>{p.a+=dt*p.w;
   if(kind==='firefly'){p.x+=Math.cos(p.a)*24*dt;p.y+=Math.sin(p.a*.7)*18*dt;ctx.globalAlpha=.4+.6*Math.abs(Math.sin(p.a*2+p.s*9));ctx.fillStyle=col;ctx.shadowColor=col;ctx.shadowBlur=8;ctx.beginPath();ctx.arc(p.x,p.y,1.6+p.s,0,6.28);ctx.fill();ctx.shadowBlur=0;}
   else if(kind==='snow'){/* 가까운 눈(d↑)일수록 크고 빠르고 진함 */
    const sz=2+p.d*p.d*5,vy=16+p.d*36;p.y+=vy*dt;p.x+=(Math.sin(p.a)*(6+p.d*10)+wind*(.4+p.d))*dt;
    ctx.globalAlpha=.5+p.d*.45;ctx.drawImage(fl,p.x-sz,p.y-sz,sz*2,sz*2);}
   else{p.y+=(30+p.s*40)*dt;p.x+=(Math.sin(p.a)*50+18)*dt;ctx.globalAlpha=.85;ctx.fillStyle=col;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a);ctx.beginPath();ctx.ellipse(0,0,4+p.s*3,2+p.s,0,0,6.28);ctx.fill();ctx.restore();}
   if(p.y>Hh+12){P[i]=mk(false);}if(p.x>W+12)p.x=-12;if(p.x<-12)p.x=W+12;});
  ctx.globalAlpha=1;WX.raf=requestAnimationFrame(step);}
 WX={cv,kind,raf:requestAnimationFrame(step)};}
const wxAttr=()=>WXSZ?' width="'+WXSZ.w+'" height="'+WXSZ.h+'"':'';
/* 테마섬 배경음 */
let IBGM=null;
function islBgm(){const k=view==='village'?curIsl():'main',src=k!=='main'?'snd/isl_'+k+'.mp3':null;
 if(IBGM&&IBGM.k===k)return;if(IBGM){IBGM.a.pause();IBGM=null;}if(!src||acc.bgmOff){SFX.bgmHold(0);return;}
 SFX.bgmHold(1);const a=new Audio(src);a.loop=true;a.volume=.45;a.play().catch(()=>{});IBGM={k,a};}
/* 구경용 환수 (테마섬에서 돌아다니기) */
let WANDER=null;
function wanderTick(){const k=curIsl();if(typeof MODE!=='undefined'&&MODE!=='player'||!acc||!acc.vil||view!=='village'||VS.place||VS.visiting)return;const [lo,hi]=islBounds(),occ=k==='main'?vOcc(null):[];
 document.querySelectorAll('.vpet.roam').forEach(el=>{if(Math.random()<.45)return;const z=+el.dataset.z||2,p0=vilPets()[+el.dataset.vpet]||{},cx0=p0.vx==null?(lo+hi)/2:p0.vx,cy0=p0.vy==null?(lo+hi)/2:p0.vy;let x,y,n=0;do{x=Math.round(Math.max(lo,Math.min(hi-z,cx0+(Math.random()*2-1)*6)));y=Math.round(Math.max(lo,Math.min(hi-z,cy0+(Math.random()*2-1)*6)));n++;}while(n<12&&occ.some(q=>overlap(q,{x,y,w:z,h:z})));if(occ.some(q=>overlap(q,{x,y,w:z,h:z})))return;const cx=cellXY(x+z/2,y+z/2),W=el.offsetWidth||60;
  const ox=parseFloat(el.style.left)||0,pp=vilPets()[+el.dataset.vpet];const nl=cx[0]-W/2,dir=nl>ox+1?1:nl<ox-1?-1:0;if(pp){pp.vx=Math.round(x);pp.vy=Math.round(y);if(dir)pp.vf=petFlip(pp,dir);}if(dir)el.classList.toggle('flip',!!petFlip(pp||{},dir));el.style.transition='left 3.6s linear,top 3.6s linear';el.style.left=Math.round(cx[0]-W/2)+'px';el.style.top=Math.round(cx[1]-W*.9)+'px';el.style.zIndex=100+Math.ceil(x+y+2*z)*5+3;});}
setInterval(wanderTick,4000);
/* 테마섬 아이템·상점 */
THEME_KEYS.forEach(k=>{ITEMS['isl_'+k]={n:THEMES[k].n+' 열쇠',p:0,img:'v/isl/t_'+k+'.webp',cat:'보상',d:'가방에서 [사용]하면 '+THEMES[k].n+'이(가) 열려요 (꾸미기 전용 섬)'};});
function islOpen(k){vilInit();const v=acc.vil;v.isls=v.isls||[];if(v.isls.includes(k))return false;v.isls.push(k);return true;}
function islShopHtml(){const v=acc.vil,own=v.isls||[],st=v.store||{};
 const ownK=THEME_KEYS.filter(k=>own.includes(k));
 return '<h2 class="shsec serif">테마섬</h2><p class="muted shnote">테마섬은 꾸미기 전용 섬이에요. 섬마다 전용 길·소품·배경음악·날씨가 있고, 마을 환수를 구경 보낼 수 있어요. 마을 화면 위쪽 섬 버튼으로 오가요.</p><div class="igrid">'+THEME_KEYS.map(k=>{const T=THEMES[k],o=own.includes(k);
  return '<div class="icard2'+(o?' own':'')+'"><img class="iim" src="v/isl/t_'+k+'.webp" alt=""><div class="it"><b class="serif">'+T.ic+' '+T.n+'</b><small>전용 길 · 소품 '+T.props.length+'종 · 배경음악 · 날씨</small><span class="xinfo">'+(o?'보유 중':'<b>'+fmt(T.p)+'</b>환수코인')+'</span></div><div class="ibtn">'+(o?'<button class="btn soft" data-visl="'+k+'" data-view="village">가 보기</button>':'<button class="btn" data-buyisl="'+k+'">구매</button>')+'</div></div>';}).join('')+'</div>'+
  (ownK.length?'<h2 class="shsec serif">섬 전용 소품</h2><div class="decogrid">'+ownK.map(k=>{const T=THEMES[k];return T.props.map((n,i)=>{const kk='tp:'+k+':'+(i+1);return decoCard('v/tp/'+k+'_'+(i+1)+'.webp',n,T.n,T.pp[i],st[kk]||0,'data-buytp="'+kk+'"');}).join('');}).join('')+'</div>':'');}
function islBuy(k){const T=THEMES[k];if(!T)return;vilInit();if((acc.vil.isls||[]).includes(k))return toast('이미 가지고 있어요.');if(acc.coins<T.p)return toast('환수코인이 부족해요.');
 confirmBox('테마섬',T.n+'을(를) '+fmt(T.p)+'환수코인으로 열까요?',()=>{if(acc.coins<T.p)return;acc.coins-=T.p;islOpen(k);SFX.play('fanfare');toast(T.n+'이(가) 열렸어요! 마을 화면 위쪽 버튼으로 가 보세요.');commit();});}
function tpBuy(kk){const I=tpInfo(kk);if(!I)return;vilInit();if(!(acc.vil.isls||[]).includes(I.t))return;if(acc.coins<I.p)return toast('환수코인이 부족해요.');acc.coins-=I.p;acc.vil.store[kk]=(acc.vil.store[kk]||0)+1;SFX.play('buy');toast(I.n+'을(를) '+THEMES[I.t].n+' 보관함에 넣었어요.');commit();}
function vBoundsFix(){if(curIsl()!=='main')return;const v=acc.vil,[lo,hi]=islBounds();v.b.concat(v.o.filter(inIsl)).forEach(o=>{const f=fpOf(o);if(f.x<lo||f.y<lo||f.x+f.w>hi||f.y+f.h>hi)vFreeFor(o);});
 vilPets().forEach(p=>{if(p.vb||p.isl)return;const z=petSz(p);if(p.vx<lo||p.vy<lo||p.vx+z>hi||p.vy+z>hi){const c=vilFreeCell(z);p.vx=c[0];p.vy=c[1];}});}

function islImgTag(G){const xm=curIsl()==='main'&&(acc.vil.skin||'base')==='xm',xs=G.img.replace('/main_','/xm_main_');if(!xm||BADIMG.has(xs))return '<img class="vbg'+(xm?' xmtint':'')+'" src="'+G.img+'" alt="" draggable="false">';
 return '<img class="vbg" src="'+xs+'" alt="" draggable="false" onerror="BADIMG.add(\''+xs+'\');this.onerror=null;this.src=\''+G.img+'\';this.classList.add(\'xmtint\')">';}

/* ===== 마을 지도: 잡고 끌기·휠 확대·두 손가락 확대 ===== */
const VP={ptr:new Map(),pan:null,pinch:null,moved:false};
function vZoomTo(z,cx,cy){const e=document.getElementById('vview'),m=document.getElementById('vmap');if(!e||!m)return;const oz=VS.z||1;z=Math.max(vZmin(),Math.min(2,z));if(Math.abs(z-oz)<.001)return;
 const r=e.getBoundingClientRect(),px=cx-r.left,py=cy-r.top,mx=(e.scrollLeft+px)/oz,my=(e.scrollTop+py)/oz;VS.z=z;m.style.transform='scale('+z+')';const sz=e.querySelector('.vsize');if(sz){sz.style.width=VMW*z+'px';sz.style.height=VMH*z+'px';}
 e.scrollLeft=mx*z-px;e.scrollTop=my*z-py;}
document.addEventListener('wheel',ev=>{const e=ev.target.closest&&ev.target.closest('#vview');if(!e)return;ev.preventDefault();const k=Math.exp(-ev.deltaY*(ev.ctrlKey?.01:.0015));vZoomTo((VS.z||1)*k,ev.clientX,ev.clientY);},{passive:false});
/* #vview(플레이어) + .admvv(운영자 마을 미리보기) 둘 다 끌어서 이동 */
const vpEl=()=>VP.el&&VP.el.isConnected?VP.el:document.getElementById('vview');
document.addEventListener('pointerdown',ev=>{const e=ev.target.closest&&ev.target.closest('#vview,.admvv');if(!e)return;VP.el=e;if(VS.place&&ev.target.closest('[data-vo],[data-vpet]'))return;
 VP.ptr.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});VP.moved=false;
 if(VP.ptr.size===1)VP.pan={x:ev.clientX,y:ev.clientY,sl:e.scrollLeft,st:e.scrollTop};
 if(VP.ptr.size===2){const [a,b]=[...VP.ptr.values()];VP.pinch={d:Math.hypot(a.x-b.x,a.y-b.y),z:VS.z||1};VP.pan=null;}},true);
document.addEventListener('pointermove',ev=>{if(!VP.ptr.has(ev.pointerId))return;const e=vpEl();if(!e)return;VP.ptr.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});
 if(VP.pinch&&VP.ptr.size>=2&&e.id==='vview'){const [a,b]=[...VP.ptr.values()],d=Math.hypot(a.x-b.x,a.y-b.y);vZoomTo(VP.pinch.z*d/VP.pinch.d,(a.x+b.x)/2,(a.y+b.y)/2);VP.moved=true;return;}
 if(VP.pan){const dx=ev.clientX-VP.pan.x,dy=ev.clientY-VP.pan.y;if(!VP.moved&&Math.hypot(dx,dy)<6)return;VP.moved=true;e.classList.add('grabbing');e.scrollLeft=VP.pan.sl-dx;e.scrollTop=VP.pan.st-dy;}});
function vpEnd(ev){if(!VP.ptr.has(ev.pointerId))return;VP.ptr.delete(ev.pointerId);if(VP.ptr.size<2)VP.pinch=null;if(VP.ptr.size===0){VP.pan=null;const e=vpEl();if(e)e.classList.remove('grabbing');VP.el=null;}
 else if(VP.ptr.size===1){const e=vpEl(),[a]=[...VP.ptr.values()];if(e)VP.pan={x:a.x,y:a.y,sl:e.scrollLeft,st:e.scrollTop};}}
document.addEventListener('pointerup',vpEnd,true);document.addEventListener('pointercancel',vpEnd,true);
document.addEventListener('click',ev=>{if(VP.moved&&ev.target.closest&&ev.target.closest('#vview,.admvv')){ev.stopPropagation();ev.preventDefault();VP.moved=false;}},true);
/* ================= 선계 마을 (아이소메트릭 24×24) ================= */
// 48×48칸 · 한 칸 32×16 (아이소메트릭)
const VG=48,VX0=1024,VY0=362,VMW=2048,VMH=1536,CW=32,CH=16;
// 건물: 이름 · 그림 · 배치 특성 · 생산 · 업그레이드 기운 · 해금 중심부 단계
const BLD={
 center:{n:'중심부',img:'center',tr:'do',size:5,d:'마을의 중심. 단계를 올리면 새 건물이 열리고, 다른 건물은 중심부 단계까지만 올릴 수 있어요. 배치한 환수는 대전 대표 환수가 되고, 같은 특성 건물들의 생산 시간을 줄여 줘요.'},
 fire:{n:'불의 기운',img:'fire',tr:'do',make:'ki_fire',ki:['fire','wood','metal'],un:1},
 water:{n:'물의 기운',img:'water',tr:'jeong',make:'ki_water',ki:['water','metal','wood'],un:1},
 wood:{n:'나무의 기운',img:'wood',tr:'do',make:'ki_wood',ki:['wood','water','earth'],un:1},
 metal:{n:'쇠의 기운',img:'metal',tr:'gong',make:'ki_metal',ki:['metal','earth','fire'],un:1},
 earth:{n:'땅의 기운',img:'earth',tr:'yeong',make:'ki_earth',ki:['earth','fire','metal'],un:1},
 food:{n:'환수 음식',img:'food',tr:'gong',make:'food',ki:['fire','wood','earth'],un:1},
 drink:{n:'마실 물',img:'drink',tr:'jeong',make:'dew',ki:['water','wood'],un:1},
 soap:{n:'비누',img:'soap',tr:'gong',make:'soap',ki:['water','earth','wood'],un:1},
 yinyang:{n:'음양의 기운',img:'yinyang',tr:'yeong',make:'ki_yy',ki:['yy','fire','water'],un:2},
 craft:{n:'제작소',img:'craft',tr:'gong',make:'craft',ki:['metal','fire','earth'],un:2},
 market:{n:'환수코인 장터',img:'market',tr:'seup',make:'coins',ki:['metal','earth'],un:3},
 exp:{n:'수상한 기운',img:'exp',tr:'seup',make:'sus',ki:['water','wood','earth'],un:4},
 wish:{n:'소원을 비는 탑',img:'wish',tr:'yeong',ki:['yy','earth','metal'],un:5,d:'하루에 한 번 소원을 빌면 무작위 보상을 받아요.'}};
const BLD_ORDER=['fire','water','wood','metal','earth','food','drink','soap','yinyang','craft','market','exp','wish'];
const CRAFT_MAX_BY_C=[0,0,1,2,3,5];
const B_COIN=[0,30,50,150,500,1200],C_COIN=[0,0,100,300,1000,2400],B_KI=[0,0,30,80,200,500],C_KI=[0,0,5,50,150,400];
const B_TIME=[0,20*MIN,1*H,4*H,12*H,36*H],C_TIME=[0,0,6*H,24*H,72*H,168*H];
const PRD={ki:{iv:[36,30,24,18,12],cap:[8,12,16,24,36]},life:{iv:[40,35,30,25,20],cap:[6,8,12,16,24]},sus:{iv:[180,150,120,90,60],cap:[3,4,6,8,10]},wish:{iv:[720,600,480,360,240],cap:[1,2,2,3,3]}};
const MARKET_DAY=[30,45,65,90,120];
const B_SLOTS=[1,1,2,2,3];
const bSlots=b=>b.k==='center'?1:b.k==='wish'?0:(B_SLOTS[Math.max(0,b.lv-1)]||1);
const PET_GB=[0,5,10,15,20],PET_EXTRA=[0,3,6,9,12];
// 제작소 레시피 (제작소 단계로 해금 · 5단계는 제작 시간 -20%)
// 중심부 배치 환수(대표 환수): 같은 배치 특성 건물의 생산 시간 감소 · 등급별 환수 1% · 영물 3% · 영수 5% · 성수 7% · 신수 10% (스타즈렐름 5%)
const CENTER_CUT=[1,3,5,7,10];
function centerPet(){const c=acc.vil&&acc.vil.b.find(b=>b.u==='center'),id=c&&c.pets&&c.pets[0];return id==null?null:vilPets().find(q=>q.born===id)||null;}
function centerCut(k){const p=centerPet();if(!p||!BLD[k]||TRAIT[p.no]!==BLD[k].tr||k==='center')return 0;return isGuest(p.no)?5:CENTER_CUT[grTier(GRADE_N[p.no]||0)];}
// 꾸미기: 길·바닥 타일(1칸)과 소품(2×2)
const TILES=[{n:'풀밭',p:2,s:2},{n:'꽃밭',p:3,s:2},{n:'돌길',p:0,free:1,s:2},{n:'등불 돌길',p:5,s:2},{n:'네거리',p:3,s:2},{n:'연못',p:5,s:5},{n:'구름 바닥',p:5,s:3},{n:'벚꽃 바닥',p:5,s:2}];
const PROPS=[{n:'석등',p:30},{n:'소나무',p:40},{n:'벚나무',p:60},{n:'정자 의자',p:25},{n:'꽃 덤불',p:15},{n:'구름 다리',p:80},{n:'현판 기둥',p:50},{n:'이끼 바위',p:20}];
const SKINS={base:{n:'기본 선계 마을',bg:'v/bg.webp'},xm:{n:'동지 설화 마을',bg:'v/xm_bg.webp',tile:'xtile',deco:'xdeco',icon:'v/xm_icon.png'}};
const VS={z:null};

function vilInit(){if(!acc.vil||!acc.vil.b){acc.vil={g:2,b:[{u:'center',k:'center',lv:1,x:20,y:17,pets:[]}],o:[],pets:[],store:{},cap:VIL_CAP0,exp:0,skin:'base',skins:['base']};
  [27,29,31,33,35,37].forEach(y=>acc.vil.o.push({u:uid36('o'),k:'tile:2',x:22,y}));}
 if(acc.vil.g!==2){const v=acc.vil;v.b.forEach(b=>{b.x*=2;b.y*=2;});v.o.forEach(o=>{o.x*=2;o.y*=2;});(v.pets||[]).forEach(p=>{p.vx=(p.vx||0)*2;p.vy=(p.vy||0)*2;});v.g=2;}
 const v=acc.vil;v.o=v.o||[];v.pets=v.pets||[];v.store=v.store||{};v.cap=v.cap||VIL_CAP0;v.skins=v.skins||['base'];v.skin=v.skin||'base';v.b.forEach(b=>{b.pets=(b.pets||[]).filter(x=>v.pets.some(p=>p.born===x));});return v;}
const vilCap=()=>(acc.vil&&acc.vil.cap)||VIL_CAP0;
const bOf=u=>acc.vil.b.find(b=>b.u===u);
const centerLv=()=>(bOf('center')||{lv:1}).lv;
// 건물 자리(단계별): 1·2단계 3×3 · 3·4단계 4×4 · 5단계 5×5 (중심부도 같음) · 제작소는 1~4단계 3×3, 5단계 5×5 · 앞줄 2칸은 배치 환수 자리
const B_FRONT=2,B_SZ=[3,3,4,4,5],CRAFT_SZ=[3,3,3,3,5];
function bSize(k,lv){const L=Math.max(1,Math.min(5,lv||1)),s=(k==='craft'?CRAFT_SZ:B_SZ)[L-1];return{w:s,d:s,h:s+B_FRONT};}
const tileSz=o=>(TILES[+String(o.k).slice(5)]||{s:2}).s||2;
// 환수 크기: 1~3단계 2칸 · 4~8단계 3칸 · 9단계 이상·스타즈렐름 완전체 4칸
function petSz(p){const st=isGFinal(p.no)?9:p.st;return st>=9?4:st>=4?3:2;}
function fpOf(o){if(o.k&&BLD[o.k]){const s=bSize(o.k,Math.max(o.lv||1,o.bt?o.bt.to:0));return{x:o.x,y:o.y,w:s.w,h:s.h};}if(String(o.k).startsWith('deco:')||String(o.k).startsWith('tp:'))return{x:o.x,y:o.y,w:2,h:2};const t=tileSz(o);return{x:o.x,y:o.y,w:t,h:t};}
const isTile=o=>String(o.k).startsWith('tile:');
const overlap=(a,b)=>a.x<b.x+b.w&&b.x<a.x+a.w&&a.y<b.y+b.h&&b.y<a.y+a.h;
function bCost(k,to,nth){if(k==='center'){const r={c:C_COIN[to],ki:{}};EL.forEach(e=>{r.ki[e]=C_KI[to];});if(to>=3)r.ki.yy=C_KI[to];return r;}
 if(to===1){if(k==='craft'&&nth===4)return{c:3000,ki:{metal:50,fire:50}};if(k==='craft'&&nth===5)return{c:6000,ki:{metal:100,fire:100}};return{c:B_COIN[1],ki:{}};}
 const r={c:B_COIN[to],ki:{}};BLD[k].ki.forEach(e=>{r.ki[e]=B_KI[to];});return r;}
function bTime(k,to){return k==='center'?C_TIME[to]:B_TIME[to];}
function costTxt(c){return [c.c?'환수코인 '+fmt(c.c):''].concat(Object.entries(c.ki).map(([e,n])=>ITEMS[KI[e]].n.replace('의 기운','')+' '+n)).filter(Boolean).join(' · ');}
function costLack(c){const l=[];if(acc.coins<c.c)l.push('환수코인');Object.entries(c.ki).forEach(([e,n])=>{if((acc.inv[KI[e]]||0)<n)l.push(ITEMS[KI[e]].n);});return l;}
function payCost(c){acc.coins-=c.c;Object.entries(c.ki).forEach(([e,n])=>{acc.inv[KI[e]]-=n;});}
const building=()=>acc.vil.b.find(b=>b.bt);
function craftCount(){return acc.vil.b.filter(b=>b.k==='craft').length;}
function canBuild(k){const c=centerLv();if(k==='craft')return craftCount()<CRAFT_MAX_BY_C[c];return c>=BLD[k].un&&!acc.vil.b.some(b=>b.k===k);}
/* ----- 생산 ----- */
function pgBar(s,e,cls,top){const p=Math.max(0,Math.min(100,(now()-s)/Math.max(1,e-s)*100));return '<div class="pgb '+(cls||'')+'" data-pgs="'+s+'" data-pge="'+e+'"'+(top!=null?' style="top:'+top+'px"':'')+'><i style="width:'+p.toFixed(1)+'%"></i><b>'+fmtDur(e-now())+'</b></div>';}
setInterval(()=>{document.querySelectorAll('.pgb[data-pge]').forEach(el=>{const s=+el.dataset.pgs,e=+el.dataset.pge,p=Math.max(0,Math.min(100,(now()-s)/Math.max(1,e-s)*100));el.firstChild.style.width=p.toFixed(1)+'%';el.lastChild.textContent=e-now()>0?fmtDur(e-now()):'완료!';});},1000);
function bPetsOf(b){return (b.pets||[]).map(id=>vilPets().find(p=>p.born===id)).filter(Boolean);}
function bBonus(b){let s=0,ex=0,bell=0;bPetsOf(b).forEach(p=>{const gr=isGuest(p.no)?0:grTier(GRADE_N[p.no]||0),st=isGFinal(p.no)?9:p.st;s+=PET_GB[gr]+st*(TRAIT[p.no]===BLD[b.k].tr?5:2);ex=Math.max(ex,PET_EXTRA[gr]);bell=Math.max(bell,gearSum(p).bell.prod);});return{sp:Math.min(100,s),ex,bell};}
function bProd(b){const k=BLD[b.k].make,L=b.lv-1;if(!k||k==='craft'||b.lv<1)return null;
 let iv,cap;if(k==='coins'){iv=1440/MARKET_DAY[L];cap=MARKET_DAY[L];}else if(k.startsWith('ki_')){iv=PRD.ki.iv[L];cap=PRD.ki.cap[L];}else if(k==='sus'){iv=PRD.sus.iv[L];cap=PRD.sus.cap[L];}else if(k==='wish_note'){iv=PRD.wish.iv[L];cap=PRD.wish.cap[L];}else{iv=PRD.life.iv[L];cap=PRD.life.cap[L];}
 const B=bBonus(b),cc=centerCut(b.k);return{ms:iv*MIN/(1+B.sp/100)*(1-B.bell/100)*(1-cc/100)*(1-prodCut()),cap,ex:B.ex/100,sp:B.sp,bell:B.bell,cc};}
function bRoll(b){const k=BLD[b.k].make,L=b.lv;if(k==='food'){const w=[8,5,3,2,1].slice(0,L),t=w.reduce((a,c)=>a+c,0);let r=rnd()*t;for(let i=0;i<w.length;i++){r-=w[i];if(r<0)return 'food_'+(i+1);}return 'food_1';}
 if(k==='sus'){const r=rnd();if(L>=5&&r<.1)return 'sus_l';if(L>=3&&r<(L>=5?.4:L>=4?.3:.2))return 'sus_m';return 'sus_s';}return k;}
const stCount=b=>Object.values(b.st||{}).reduce((a,c)=>a+c,0);
function bTick(b,t){if(b.bt){if(t>=b.bt.e){b.lv=b.bt.to;b.bt=null;b.pt=t;SFX.play('fanfare');toast(BLD[b.k].n+' '+(b.lv===1?'건설':b.lv+'단계')+' 완료!');return true;}return false;}
 if(b.k==='craft'){if(b.job&&!b.job.done&&t>=b.job.e){b.job.done=1;return true;}return false;}
 const R=bProd(b);if(!R)return false;if(!b.pt){b.pt=t;return false;}b.st=b.st||{};let el=t-b.pt,n=stCount(b),ch=false;
 while(el>=R.ms&&n<R.cap){el-=R.ms;const it=bRoll(b);b.st[it]=(b.st[it]||0)+1;n++;ch=true;if(n<R.cap&&rnd()<R.ex){const i2=bRoll(b);b.st[i2]=(b.st[i2]||0)+1;n++;}}
 b.pt=n>=R.cap?t:t-el;return ch;}
function vilTick(){if(!acc.vil)return false;let ch=false;const t=now();acc.vil.b.forEach(b=>{if(bTick(b,t))ch=true;});return ch;}
function bHarvest(b,quiet){const got=b.st||{},ks=Object.keys(got).filter(k=>got[k]>0);const col=quiet&&typeof quiet==='object'?quiet:null;if(b.k==='craft'&&b.job&&b.job.done){const it=b.job.o||b.job.r,n=b.job.n||1;outGive(it,n);if(col)col[it]=(col[it]||0)+n;b.job=null;if(!quiet){SFX.play('coins');toast(outInfo(it).n+' ×'+n+' 완성품을 받았어요!');}return 1;}
 if(!ks.length)return 0;const parts=[];ks.forEach(k=>{if(col)col[k]=(col[k]||0)+got[k];if(k==='coins')acc.coins+=got[k];else acc.inv[k]=(acc.inv[k]||0)+got[k];parts.push((k==='coins'?'환수코인':ITEMS[k].n)+' +'+got[k]);});
 const R=bProd(b);if(R&&stCount(b)>=R.cap)b.pt=now();b.st={};if(!quiet){SFX.play('coins');toast(parts.join(', '));}return parts.length;}
function harvestAll(){vilTick();let n=0;const col={};acc.vil.b.forEach(b=>{n+=bHarvest(b,col);});if(!n)return toast('수확할 게 없어요.');SFX.play('coins');commit();harvSum(col);}
function harvSum(col){const ks=Object.keys(col).sort((a,b)=>a==='coins'?-1:b==='coins'?1:0),tot=ks.reduce((a,k)=>a+col[k],0);
 const chip=k=>{const I=k==='coins'?{n:'환수코인',img:'i/ui/icon_coin.png'}:outInfo(k);return '<span class="bsi"><img class="px" src="'+I.img+'" alt=""><span>'+esc(I.n)+'</span><b>×'+fmt(col[k])+'</b></span>';};
 const L=document.getElementById('layer');L.innerHTML='<div class="overlay" data-close="1"><div class="modal harvsum" role="dialog" aria-label="수확 결과"><img class="px" src="i/ui/ui_collect.png" alt="" style="width:56px;height:56px"><b class="serif" style="font-size:22px">마을 전체 수확!</b><small style="color:#c9d8d5">'+ks.length+'종 · 모두 '+fmt(tot)+'개를 받았어요</small><div class="bagsum" style="margin:12px 0;max-height:46vh;overflow:auto">'+ks.map(chip).join('')+'</div><button class="btn teal" data-close="1">확인</button></div></div>';}
function bShortcut(b,k){const c=TCUT[k];if(!b.bt)return toast('진행 중인 건설이 없어요.');if(!take(k))return;const left=b.bt.e-now();if(left<=c*MIN){b.bt.e=now();vilTick();}else b.bt.e-=c*MIN;SFX.play('magic');toast('건설 시간이 '+durTxt(c)+' 줄었어요.');commit();bModal(b.u);}
function bUpgrade(u){const b=bOf(u);if(!b||b.bt)return;if(building())return toast('지금 다른 건물을 짓고 있어요. 건설은 한 번에 하나씩이에요.');if(b.lv>=5)return toast('최고 단계예요.');
 if(b.k!=='center'&&b.lv+1>centerLv())return toast('중심부 단계까지만 올릴 수 있어요. 먼저 중심부를 '+(b.lv+1)+'단계로 올려 주세요.');
 {const t={u:b.u,k:b.k,lv:b.lv+1,x:b.x,y:b.y};if(!vValid(t))return toast((b.lv+1)+'단계가 되면 건물이 넓어져요. 오른쪽·아래쪽 공간이 부족하니 배치 모드에서 건물을 옮기거나 주변을 비워 주세요.');}
 const c=bCost(b.k,b.lv+1),l=costLack(c);if(l.length)return toast(l.join(', ')+'이(가) 부족해요.');
 confirmBox(BLD[b.k].n+' '+(b.lv+1)+'단계','필요: '+costTxt(c)+'\n시간: '+durMs(bBuildMs(b.k,b.lv+1))+'\n건설 중에는 생산이 멈춰요.',()=>{if(costLack(c).length)return;bHarvest(b,true);payCost(c);b.bt={to:b.lv+1,s:now(),e:now()+bBuildMs(b.k,b.lv+1)};SFX.play('build');toast('건설을 시작했어요!');commit();});}
function bBuildMs(k,to){return bTime(k,to);}
/* ----- 화면 좌표 ----- */
function skinOf(){return SKINS[(acc.vil&&acc.vil.skin)||'base']||SKINS.base;}
function tileSrc(n){const s=skinOf();return 'v/'+(s.tile||'tile')+'_'+n+'.webp';}
const XDECO_N=8;function decoSrc(n){const s=skinOf(),d=s.deco&&!(s.deco==='xdeco'&&n>=XDECO_N)?s.deco:'deco';return 'v/'+d+'_'+n+'.webp';}
function bSrc(b){const lv=Math.max(1,b.lv||1);return 'v/b_'+BLD[b.k].img+'_'+lv+'.webp';}
const B_BOX={"center_1":[320,48,272,301,120],"center_2":[320,30,289,301,79],"center_3":[384,29,355,361,60],"center_4":[448,45,403,421,45],"center_5":[512,23,489,481,51],"craft_1":[160,34,125,149,56],"craft_2":[160,32,127,149,43],"craft_3":[160,30,129,145,34],"craft_4":[160,24,136,146,20],"craft_5":[160,12,147,147,9],"drink_1":[256,38,217,241,89],"drink_2":[256,24,231,241,46],"drink_3":[320,26,294,301,32],"drink_4":[384,26,357,361,38],"drink_5":[448,31,416,421,45],"earth_1":[256,38,217,241,135],"earth_2":[256,24,231,241,71],"earth_3":[320,24,296,301,41],"earth_4":[384,25,359,361,38],"earth_5":[448,31,416,421,45],"exp_1":[256,38,217,241,52],"exp_2":[256,24,231,241,40],"exp_3":[320,29,290,301,32],"exp_4":[384,30,354,361,39],"exp_5":[448,34,413,421,45],"fire_1":[256,38,217,241,102],"fire_2":[256,26,229,241,26],"fire_3":[320,28,291,301,32],"fire_4":[384,48,336,361,38],"fire_5":[448,32,416,421,45],"food_1":[256,38,217,241,82],"food_2":[256,24,231,241,39],"food_3":[320,24,296,301,36],"food_4":[384,23,361,361,53],"food_5":[448,32,416,421,45],"market_1":[256,38,217,241,79],"market_2":[256,24,231,241,56],"market_3":[320,24,296,301,46],"market_4":[384,23,361,361,50],"market_5":[448,28,420,421,45],"metal_1":[256,38,217,241,114],"metal_2":[256,24,231,241,50],"metal_3":[320,24,295,301,32],"metal_4":[384,23,360,361,38],"metal_5":[448,33,414,421,45],"soap_1":[256,38,217,241,71],"soap_2":[256,24,231,241,31],"soap_3":[320,24,296,301,40],"soap_4":[384,27,356,361,38],"soap_5":[448,20,428,421,54],"water_1":[256,38,217,241,108],"water_2":[256,24,231,241,47],"water_3":[320,24,296,301,45],"water_4":[384,23,361,361,39],"water_5":[448,38,410,421,45],"wish_1":[256,38,217,241,91],"wish_2":[256,33,222,241,26],"wish_3":[320,49,270,301,32],"wish_4":[384,50,334,361,38],"wish_5":[448,43,405,421,45],"wood_1":[256,38,217,241,94],"wood_2":[256,24,230,241,46],"wood_3":[320,27,292,301,32],"wood_4":[384,23,360,361,38],"wood_5":[448,29,418,421,45],"yinyang_1":[256,38,217,241,78],"yinyang_2":[256,24,231,241,56],"yinyang_3":[320,24,296,301,73],"yinyang_4":[384,23,361,360,61],"yinyang_5":[448,45,402,420,45]};
const D_BOX={"deco_0":[192,14,178,184,10],"deco_1":[192,9,183,184,14],"deco_2":[192,9,183,184,17],"deco_3":[192,9,183,184,65],"deco_4":[192,9,183,184,34],"deco_5":[192,9,183,184,49],"deco_6":[192,22,169,184,10],"deco_7":[192,9,183,184,52],"deco_8":[192,20,172,184,10],"xdeco_0":[160,26,133,153,7],"xdeco_1":[160,20,140,153,7],"xdeco_2":[160,29,131,153,7],"xdeco_3":[160,7,153,152,7],"xdeco_4":[160,20,139,153,7],"xdeco_5":[160,7,153,147,13],"xdeco_6":[160,7,153,149,11],"xdeco_7":[160,24,136,153,7]};
const B_GROW=[1.05,1.1,1.16,1.22,1.3];
function objHtml(o,sel,bad){const f=fpOf(o);
 if(isTile(o))return tileFlat(o,sel,bad);
 const isB=!!BLD[o.k],d=isB?bSize(o.k,o.lv).d:f.h,C=cellXY(f.x+f.w/2,f.y+d/2),cw=fpW(f.x,f.y,f.w,d)/f.w;
 let src,key;if(isB){src=bSrc(o);key=BLD[o.k].img+'_'+Math.max(1,o.lv||1);}else if(isTP(o)){const I=tpInfo(o.k);src=I?I.img:'';key=I?I.key:'';}else{const n=+o.k.slice(5);key=decoSrc(n).slice(2,-5);src=decoSrc(n);}
 const bx_=SPR[key]||[64,86,32,70,20,64],sc=cw/32,W=bx_[0]*sc,H=bx_[1]*sc,L=C[0]-bx_[2]*sc,T=C[1]-bx_[3]*sc,TOP=bx_[4]*sc;
 const z=((VS.place?VS.place.sel:VS.sel)===o.u&&!isTile(o))?6000:100+(f.x+f.w+f.y+d)*5;
 let h='<div class="vo'+(isB?' vb':' vd')+(o.fl?' flip':'')+(sel?' sel':'')+(bad?' bad':'')+(isB&&o.lv<1?' ghost':'')+'" data-vo="'+o.u+'" style="left:'+L.toFixed(1)+'px;top:'+T.toFixed(1)+'px;width:'+W.toFixed(1)+'px;height:'+H.toFixed(1)+'px;z-index:'+z+'"><img class="px" src="'+src+'" alt="'+(isB?esc(BLD[o.k].n):'')+'" draggable="false">';
 if(isB&&!VS.place&&!VS.visiting){
  if(o.bt)h+='<div class="vbuild" style="top:'+Math.round(TOP-40)+'px"><img src="i/ui/ui_build.png" alt=""><b>'+fmtDur(o.bt.e-now())+'</b></div>';
  else if(o.k==='wish'&&wishReady())h+='<button class="vbub full" data-wishgo="1" style="top:'+Math.round(TOP-62)+'px"><img class="px" src="i/ui/icon_wish.png" alt=""><b>소원</b></button>';
  else{const n=stCount(o),R=bProd(o),done=o.k==='craft'&&o.job;if(R&&o.pt&&n<R.cap)h+=pgBar(o.pt,o.pt+R.ms,'vpg',Math.round(TOP-14));else if(done&&!o.job.done)h+=pgBar(o.job.s||now(),o.job.e,'vpg',Math.round(TOP-14));if(n>0||done){const k=done?(o.job.o||o.job.r):Object.keys(o.st).sort((a,b2)=>o.st[b2]-o.st[a])[0],ic=k==='coins'?'i/ui/icon_coin.png':outInfo(k).img,full=done?o.job.done:R&&n>=R.cap;
   if(!done||o.job.done)h+='<button class="vbub'+(full?' full':'')+'" data-vharv="'+o.u+'" style="top:'+Math.round(TOP-62)+'px"><img class="px" src="'+ic+'" alt=""><b>'+(done?'완성':n)+'</b></button>';
}}
  h+='<span class="vbn">'+esc(BLD[o.k].n)+(o.lv>0?' <i>'+o.lv+'</i>':'')+'</span>';}
 const selU=VS.place?VS.place.sel:VS.sel;
 if(!isTile(o)&&!VS.visiting&&selU===o.u){
  if(VS.place)h+='<div class="vfloat" style="top:'+Math.round((TOP||0)-30)+'px">'+(VS.place.ghost&&VS.place.ghost.u===o.u?'<button class="btn teal sm" data-vbuildgo="1">✔ 여기에 건설</button>':'<button class="btn teal sm" data-vdone="1">✔ 완료</button>')+'<button class="btn ghost sm" data-vcancel="1">✕ 취소</button></div>';
  else h+='<div class="vact" style="top:'+Math.round((TOP||0)-64)+'px"><button data-vact="move" title="이동"><img src="i/ui2/act_move.png" alt="" onerror="this.replaceWith(\'✥\')"><span>이동</span></button><button data-vact="flip" title="좌우 뒤집기"><img src="i/ui2/act_flip.png" alt="" onerror="this.replaceWith(\'⇋\')"><span>뒤집기</span></button>'+(isB?'<button data-vact="info" title="자세히"><img src="i/ui2/act_info.png" alt="" onerror="this.replaceWith(\'🔍\')"><span>자세히</span></button>':'<button data-vact="store" title="보관함에 넣기"><img src="i/ui2/act_store.png" alt="" onerror="this.replaceWith(\'📦\')"><span>보관함</span></button>')+'</div>';}
 return h+'</div>';}
function petPos(p){const z=petSz(p);if(p.vb){const b=bOf(p.vb);if(b){const s=bSize(b.k,b.lv),i=(b.pets||[]).indexOf(p.born),n=Math.max(1,(b.pets||[]).length),fx=b.x+(s.w/(n+1))*(i+1)-z/2;return[fx,b.y+s.d+B_FRONT/2-z/2,z];}}return[p.vx||0,p.vy||0,z];}
/* 마을 환수 방향: 그림 대부분이 왼쪽을 봐서, 오른쪽으로 갈 때 좌우 반전. 오른쪽을 보는 그림은 FACE_R에 번호 추가 */
const FACE_R=new Set([]);
function petFlip(p,dir){const r=FACE_R.has(p.no);return (dir>0)!==r?1:0;}
function petHtml(p,i,sel,bad){const [vx,vy,z]=petPos(p),C=cellXY(vx+z/2,vy+z/2),cx=C[0],by=cellXY(vx+z,vy+z)[1],cw=fpW(vx,vy,z,z)/z,W=Math.round(p.vb?Math.min(z*cw*.8,(()=>{const b=bOf(p.vb),n=Math.max(1,((b&&b.pets)||[]).length);return b?fpW(b.x,b.y,bSize(b.k,b.lv).w,bSize(b.k,b.lv).w)/n*1.15:z*cw;})()):z*cw*.95),roam=!p.vb;
 return '<div class="vpet'+(sel?' sel':'')+(bad?' bad':'')+(p.vb?' work':'')+(roam&&!VS.place?' roam':'')+(roam&&p.vf?' flip':'')+'" data-vpet="'+i+'" data-z="'+z+'" style="left:'+Math.round(cx-W/2)+'px;top:'+Math.round(by-W-4)+'px;width:'+W+'px;z-index:'+(100+Math.ceil(vx+vy+2*z)*5+3)+';animation-delay:-'+((i*0.41)%2).toFixed(2)+'s"><img class="px" src="'+img(p.no)+'" alt="" draggable="false" style="width:'+W+'px;height:'+W+'px"><span>'+esc(NAMES[p.no])+'</span></div>';}
const petHere=p=>(p.isl||'main')===curIsl();
function vilFreeCell(z){z=z||4;const occ=vOcc(null),pets=vilPets().filter(p=>!p.vb&&petHere(p)).map(p=>({x:p.vx,y:p.vy,w:petSz(p),h:petSz(p)}));for(let r=0;r<VG;r+=2)for(let y=Math.max(0,24-r);y<=Math.min(VG-z,24+r);y++)for(let x=Math.max(0,24-r);x<=Math.min(VG-z,24+r);x++){const f={x,y,w:z,h:z};const [lo,hi]=islBounds();if(x>=lo&&y>=lo&&x+z<=hi&&y+z<=hi&&!occ.some(o=>overlap(o,f))&&!pets.some(o=>overlap(o,f)))return[x,y];}return[0,0];}
function vOcc(skip){const L=[];if(curIsl()==='main')acc.vil.b.forEach(b=>{if(b.u!==skip)L.push(fpOf(b));});acc.vil.o.forEach(o=>{if(inIsl(o)&&!isTile(o)&&o.u!==skip)L.push(fpOf(o));});return L;}
function vValid(o){const f=fpOf(o),[lo,hi]=islBounds();if(f.x<lo||f.y<lo||f.x+f.w>hi||f.y+f.h>hi)return false;
 if(isTile(o))return !acc.vil.o.some(q=>q.u!==o.u&&inIsl(q)&&isTile(q)&&overlap(fpOf(q),f));
 if(vOcc(o.u).some(q=>overlap(q,f)))return false;
 if(curIsl()==='main'&&vilPets().some(p=>!p.vb&&petHere(p)&&overlap({x:p.vx,y:p.vy,w:petSz(p),h:petSz(p)},f)))return false;return true;}
function vPetValid(p){const z=petSz(p),f={x:p.vx,y:p.vy,w:z,h:z},[lo,hi]=islBounds();if(p.vx<lo||p.vy<lo||p.vx+z>hi||p.vy+z>hi)return false;if(curIsl()!=='main')return true;return !vOcc(null).some(q=>overlap(q,f))&&!vilPets().some(q=>q!==p&&!q.vb&&petHere(q)&&overlap({x:q.vx,y:q.vy,w:petSz(q),h:petSz(q)},f));}
/* ----- 마을 화면 ----- */
function vVillage(){const v=vilInit();vilTick();GEO=null;v.isls=v.isls||[];const k=curIsl(),main=k==='main',G=geo(),z=VS.z||1;const pl=VS.place;if(!pl)vBoundsFix();
 const os=v.o.filter(inIsl),ring=vRing(),objs=ring+os.filter(isTile).map(o=>objHtml(o,pl&&pl.sel===o.u,pl&&pl.sel===o.u&&!vValid(o))).join('')+os.filter(o=>!isTile(o)).concat(main?v.b:[]).map(o=>objHtml(o,pl&&pl.sel===o.u,pl&&pl.sel===o.u&&!vValid(o))).join('')+(pl&&pl.ghost?objHtml(pl.ghost,true,!vValid(pl.ghost)):'');
 const pets=vilPets().map((p,i)=>(main?(!p.isl||p.vb):(p.isl===k&&!p.vb))?petHtml(p,i,pl&&pl.sel==='p'+i,pl&&pl.sel==='p'+i&&!p.vb&&!vPetValid(p)):'').join('');
 if(VS.sel&&!bOf(VS.sel)&&!v.o.some(q=>q.u===VS.sel))VS.sel=null;
 const bld=building(),harv=v.b.some(b=>stCount(b)>0||(b.job&&b.job.done)),isls=['main'].concat(v.isls||[]);
 const tabs='<div class="isltabs">'+isls.map(x=>'<button class="'+(x===k?'on':'')+'" data-visl="'+x+'">'+(x==='main'?'🏯 선계 마을':THEMES[x].ic+' '+THEMES[x].n)+'</button>').join('')+(v.isls&&v.isls.length===THEME_KEYS.length?'':'<button class="add" data-shop="deco" data-view="shop">＋ 테마섬</button>')+'</div>';
 const bar=pl?'<div class="vtool place"><b>배치 모드</b><span class="muted">'+(pl.ghost?BLD[pl.ghost.k].n+'을(를) 놓을 곳으로 끌어 주세요':'건물·길·소품·환수를 끌어서 옮겨요')+'</span>'+
   (pl.ghost?'<button class="btn teal sm" data-vbuildgo="1">여기에 건설</button>':'<button class="btn soft sm" data-vstore="1">보관함</button>'+(pl.sel&&!String(pl.sel).startsWith('p')&&!bOf(pl.sel)?'<button class="btn soft sm" data-vput="1">보관함에 넣기</button><button class="btn soft sm" data-vdel="1">삭제</button>':''))+
   '<button class="btn sm" data-vdone="1">완료</button><button class="btn ghost sm" data-vcancel="1">취소</button></div>'
  :'<div class="vtool">'+tabs+'<span class="vstat">'+(main?'환수 '+vilPets().length+'/'+vilCap()+' · 섬 '+mainStage()+'단계'+(bld?' · 건설 중: '+esc(BLD[bld.k].n)+' '+fmtDur(bld.bt.e-now()):''):'구경 온 환수 '+vilPets().filter(p=>p.isl===k).length+'마리')+'</span>'+
   (main?'<button class="btn sm" data-vharvall="1" '+(harv?'':'disabled')+'><img src="i/ui/ui_collect.png" alt="" class="vic"> 한 번에 수확</button><button class="btn teal sm" data-vbuildmenu="1"><img src="i/ui/ui_build.png" alt="" class="vic"> 건설</button>':'<button class="btn teal sm" data-vroam="1">환수 구경 보내기</button>')+
   '<button class="btn soft sm" data-vplace="1">배치 모드</button>'+(main?'<button class="btn soft sm" data-vskin="1">스킨</button>':'<button class="btn soft sm" data-vbgm="1">'+(acc.bgmOff?'🔇':'🔊')+'</button>')+'<button class="btn soft sm" data-vtitle="1"><img src="i/ui2/icon_title.png" alt="" class="vic"> 칭호</button>'+(main?'<button class="btn soft sm" data-vgb="1"><img src="i/ui2/icon_guestbook.png" alt="" class="vic"> 방명록</button>':'')+'<button class="btn soft sm" data-vzoom="-1" aria-label="축소">－</button><button class="btn soft sm" data-vzoom="1" aria-label="확대">＋</button></div>';
 return '<div class="vwrap isl-'+k+(pl?' placing':'')+'">'+bar+'<div class="vview" id="vview" style="background:'+skyBg()+'"><div class="vsize" style="width:'+VMW*z+'px;height:'+VMH*z+'px"><div class="vmap skin-'+(v.skin||'base')+'" id="vmap" style="transform:scale('+z+')">'+skyHtml()+islImgTag(G)+(pl?gridSvg()+vFootprints():'')+objs+pets+skyFront()+'</div></div></div><canvas id="vwx" class="vwx"'+wxAttr()+'></canvas></div>';}
function vZmin(){const el=document.getElementById('vview');if(!el)return .3;return Math.max(.3,el.clientWidth/VMW,el.clientHeight/VMH);}
function vCenter(){const e=document.getElementById('vview');if(!e)return;const g=geo(),cx=(g.q[1][0]+g.q[3][0])/2,cy=(g.q[0][1]+g.q[2][1])/2-60;e.scrollLeft=cx*VS.z-e.clientWidth/2;e.scrollTop=cy*VS.z-e.clientHeight/2;}
function vFit(){const el=document.getElementById('vview');if(!el)return;wxStart();islBgm();
 if(VS.z==null){VS.z=Math.max(vZmin(),el.clientWidth<700?.6:.9);render();setTimeout(vCenter,0);return;}
 if(VS.z<vZmin()-.001){VS.z=vZmin();render();}
 if(S._vEnter){S._vEnter=0;vCenter();}}
/* ----- 건물 창 ----- */
function bModal(u){const b=bOf(u);if(!b)return;const D=BLD[b.k],L=document.getElementById('layer'),R=bProd(b),B=bBonus(b),slots=bSlots(b),ps=bPetsOf(b);vilTick();
 let h='<div class="overlay" data-close="1"><div class="modal bmod" role="dialog" aria-label="'+esc(D.n)+'"><div class="bmh"><img class="px" src="'+bSrc(b)+'" alt=""><div><b class="serif" style="font-size:22px;color:#ffd36e">'+esc(D.n)+'</b> <span class="chip">'+(b.lv>0?b.lv+'단계':'건설 중')+'</span><div class="muted" style="color:#c9d8d5">배치 특성: <b>'+TRAITN[D.tr]+'</b>'+(D.d?' · '+esc(D.d):'')+'</div></div></div>';
 if(b.bt)h+='<div class="bmrow"><img src="i/ui/ui_build.png" alt="" width="28"> <b>'+(b.bt.to===1?'건설':b.bt.to+'단계로 올리는')+' 중 · 남은 '+fmtDur(b.bt.e-now())+'</b></div><div class="bmrow">'+Object.keys(TCUT).filter(k=>acc.inv[k]>0).map(k=>'<button class="btn sm" data-bcut="'+b.u+':'+k+'"><img class="px" src="'+ITEMS[k].img+'" alt="" style="width:22px;height:22px;vertical-align:-6px"> '+durTxt(TCUT[k])+' 단축 ('+acc.inv[k]+')</button>').join('')+'</div>';
 if(R&&!b.bt){const per=R.ms/MIN;h+=(b.pt&&stCount(b)<R.cap?'<div class="bmpg"><small>다음 생산까지</small>'+pgBar(b.pt,b.pt+R.ms,'big')+'</div>':'<div class="bmpg"><small class="warn">보관함이 가득 찼어요 · 수확하면 다시 생산해요</small></div>');h+='<div class="bmrow"><span>생산 <b>'+(D.make==='coins'?'환수코인':D.make==='food'?'먹이 (1~'+b.lv+'단계 음식)':D.make==='sus'?'수상한 기운':ITEMS[D.make].n)+'</b> · '+(per>=60?(per/60).toFixed(1)+'시간':per.toFixed(1)+'분')+'마다 1개 · 보관 '+stCount(b)+'/'+R.cap+'</span>'+(stCount(b)?'<button class="btn sm" data-vharv="'+b.u+'">수확</button>':'')+'</div>'+(B.sp||B.bell||R.cc?'<div class="muted" style="color:#c9d8d5">보너스: 배치 환수 생산 속도 +'+B.sp+'%'+(B.bell?' · 방울 -'+B.bell+'%':'')+(B.ex?' · 추가 생산 '+B.ex+'%':'')+(R.cc?' · 대표 환수 -'+R.cc+'%':'')+'</div>':'');}
 if(b.k==='wish'&&b.lv>0&&!b.bt)h+='<div class="bmsec"><b>소원 빌기</b><span class="muted" style="color:#c9d8d5">하루 한 번 · 환수코인·기운·알·금패 중 무작위</span><button class="btn teal" data-wishgo="1" '+(wishReady()?'':'disabled')+'>'+(wishReady()?'소원 빌기':'오늘은 이미 빌었어요')+'</button></div>';
 if(b.k==='craft'&&b.lv>0&&!b.bt){h+='<div class="bmsec"><b>제작</b>';if(b.job){const o2=b.job.o||b.job.r;h+='<div class="bmrow"><img class="px" src="'+outInfo(o2).img+'" width="40" alt=""> <b>'+esc(outInfo(o2).n)+' ×'+(b.job.n||1)+'</b> '+(b.job.done?'<button class="btn sm" data-vharv="'+b.u+'">받기</button>':'· 남은 '+fmtDur(b.job.e-now()))+'</div>';}
  else{const tab=S.rcpTab||'item',E=Object.entries(RCP).filter(([k,r])=>outInfo(r.out).ok&&(String(r.out).startsWith('gear:')?'gear':'item')===tab).sort((x,y)=>(x[1].lv||1)-(y[1].lv||1));h+='<div class="tmode" style="margin:4px 0"><button class="'+(tab==='item'?'on':'')+'" data-rcptab="item:'+b.u+'">아이템</button><button class="'+(tab==='gear'?'on':'')+'" data-rcptab="gear:'+b.u+'">장비</button></div>';let lastLv=0;h+=E.map(([k,r])=>{let hd='';if((r.lv||1)!==lastLv){lastLv=r.lv||1;hd='<div class="rcphd">제작소 '+lastLv+'단계'+(tab==='gear'?' · '+GN[lastLv-1]+' 장비':'')+(b.lv<lastLv?' <small>(잠김)</small>':'')+'</div>';}const c={c:r.c||0,ki:r.ki||{}},l=costLack(c),lock=b.lv<(r.lv||1),min=r.min*(b.lv>=5?.8:1)*(1-prodCut());return hd+'<div class="rcp'+(lock?' lock':'')+'"><img class="px" src="'+outInfo(r.out).img+'" alt=""><div><b>'+esc(outInfo(r.out).n)+(r.n>1?' ×'+r.n:'')+(outInfo(r.out).ig?' <small style="color:#ffd36e">인게임</small>':'')+'</b><small>'+(costTxt(c)||'재료 없음')+' · '+durTxt(min)+(lock?' · 제작소 '+r.lv+'단계 필요':'')+'</small></div><button class="btn sm" data-craft="'+b.u+':'+k+'" '+(lock||l.length?'disabled':'')+'>제작</button></div>';}).map((x,i)=>x).join('');}
  h+='</div>';}
 if((b.lv>0||b.k==='center')&&bSlots(b)>0){h+='<div class="bmsec"><b>'+(b.k==='center'?'중심부 환수':'배치 환수 '+ps.length+'/'+slots)+'</b> <small class="muted" style="color:#c9d8d5">'+(b.k==='center'?'중심부에서 일하며 같은 특성 건물의 생산 시간을 줄여요 (등급별 1~10%) · 대전 대표는 대전 화면에서 따로 골라요'+(centerPet()?' · 지금 '+TRAITN[TRAIT[centerPet().no]]+' 건물 -'+(isGuest(centerPet().no)?5:CENTER_CUT[grTier(GRADE_N[centerPet().no]||0)])+'%':''):'등급·단계가 높을수록, 특성이 맞을수록('+TRAITN[D.tr]+') 효과가 커요')+'</small><div class="bmpets">'+ps.map(p=>'<button class="bmp" data-vunassign="'+p.born+'"><img class="px" src="'+img(p.no)+'" alt=""><small>'+esc(NAMES[p.no])+'<br>'+TRAITN[TRAIT[p.no]]+(TRAIT[p.no]===D.tr?' ✓':'')+'</small><span>빼기</span></button>').join('')+(ps.length<slots?'<button class="bmp add" data-vassign="'+b.u+'">＋<small>환수 배치</small></button>':'')+'</div></div>';}
 if(!b.bt){if(b.lv<5){const c=bCost(b.k,b.lv+1),lk=b.k!=='center'&&b.lv+1>centerLv();h+='<div class="bmsec"><b>'+(b.lv+1)+'단계로 올리기</b><div class="muted" style="color:#c9d8d5">'+costTxt(c)+' · '+durMs(bBuildMs(b.k,b.lv+1))+(lk?'<br>중심부를 먼저 '+(b.lv+1)+'단계로 올려야 해요':'')+'</div><button class="btn teal" data-vup="'+b.u+'" '+(lk||building()?'disabled':'')+'>'+(building()?'다른 건물 건설 중':'업그레이드')+'</button></div>';}else h+='<p class="muted" style="color:#ffd36e">최고 단계예요!</p>';}
 L.innerHTML=h+'<button class="btn ghost" data-close="1" style="width:100%">닫기</button></div></div>';}
function assignModal(u){const b=bOf(u),L=document.getElementById('layer'),D=BLD[b.k];const free=vilPets().map((p,i)=>[p,i]).filter(([p])=>!p.vb&&!(b.u==='center'&&noArena(p.no)));
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="환수 배치"><b class="serif" style="font-size:20px">'+esc(D.n)+'에 배치할 환수</b><p class="muted" style="color:#c9d8d5;margin:0">마을에 있는 환수만 배치할 수 있어요. 성장 슬롯의 환수는 먼저 마을로 보내 주세요.</p><div class="bmlist">'+(free.length?free.map(([p,i])=>{const gr=isGuest(p.no)?0:grTier(GRADE_N[p.no]||0),st=isGFinal(p.no)?9:p.st,bo=Math.min(100,PET_GB[gr]+st*(TRAIT[p.no]===D.tr?5:2));return '<button class="btn teal bmrow" data-vas="'+u+':'+i+'"><img class="px" src="'+img(p.no)+'" alt=""><span>'+esc(NAMES[p.no])+' · '+stN(p)+' · '+gradeOf(p.no)+' · '+TRAITN[TRAIT[p.no]]+(TRAIT[p.no]===D.tr?' ✓':'')+'<small>생산 속도 +'+bo+'%</small></span></button>';}).join(''):'<p class="muted">배치할 수 있는 환수가 없어요.</p>')+'</div><button class="btn ghost" data-close="1">닫기</button></div></div>';}
function vPetModal(i){const p=vilPets()[i],L=document.getElementById('layer');if(!p)return;const free=acc.slots.findIndex(q=>!q),b=p.vb&&bOf(p.vb);
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="마을 환수"><div style="display:flex;gap:12px;align-items:center"><img class="px" src="'+img(p.no)+'" alt="" style="width:80px;height:80px;object-fit:contain"><div><b class="serif" style="font-size:22px;color:#ffd36e">'+esc(NAMES[p.no])+'</b> '+gradeTag(p.no)+'<div class="muted" style="color:#c9d8d5">no.'+dexNo(p.no)+' · '+stN(p)+' · Lv '+p.lv+' · '+elName(ELOF[p.no])+' · 특성 '+TRAITN[TRAIT[p.no]]+'</div>'+'<div style="color:#9fe0d8">행동력 '+Math.floor(restEn(p))+' / '+maxEn(p)+'</div>'+(b?'<div style="color:#ffd36e">'+esc(BLD[b.k].n)+'에서 일하는 중</div>':'')+'</div></div><p class="muted" style="color:#c9d8d5;margin:0">마을에서는 생활 수치가 줄지 않고, 행동력은 평소처럼 차요. 수련·심부름은 성장 슬롯으로 데려가야 해요.</p><div class="bmlist">'+
  '<button class="btn teal" data-vtoslot="'+i+'" '+(free<0?'disabled':'')+'>'+(free<0?'빈 성장 슬롯이 없어요':'성장 슬롯 '+(free+1)+'(으)로 데려가기')+'</button>'+(b?'<button class="btn soft" data-vunassign="'+p.born+'">배치 해제</button>':'')+(isGuest(p.no)?'<button class="btn soft" data-vtogsp="'+i+'">전용 공간으로 보내기</button>':'')+'</div><button class="btn ghost" data-close="1">닫기</button></div></div>';}
function buildMenu(){const L=document.getElementById('layer'),c=centerLv(),bd=building();
 const rows=BLD_ORDER.map(k=>{const D=BLD[k],has=acc.vil.b.filter(b=>b.k===k).length,ok=canBuild(k),nth=k==='craft'?has+1:1,cost=bCost(k,1,nth),lock=c<D.un;
  if(!ok&&!lock&&k!=='craft')return '';if(k==='craft'&&!ok&&!lock&&has>=5)return '';
  return '<div class="rcp'+(lock||!ok?' lock':'')+'"><img class="px" src="v/b_'+D.img+'_1.webp" alt=""><div><b>'+esc(D.n)+(k==='craft'?' ('+has+'/'+CRAFT_MAX_BY_C[Math.max(c,2)]+')':'')+'</b><small>'+(lock?'중심부 '+D.un+'단계에서 열려요':!ok?'중심부 단계를 올리면 더 지을 수 있어요':costTxt(cost)+' · '+durMs(bTime(k,1)))+' · 특성 '+TRAITN[D.tr]+'</small></div><button class="btn sm" data-vnew="'+k+'" '+(lock||!ok||bd?'disabled':'')+'>짓기</button></div>';}).join('');
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal bmod" role="dialog" aria-label="건설"><b class="serif" style="font-size:22px;color:#ffd36e">건설</b><p class="muted" style="color:#c9d8d5;margin:0">같은 건물은 한 채씩 지을 수 있어요 (제작소는 최대 5채). 건설은 한 번에 하나씩 진행돼요.'+(bd?'<br><b style="color:#ffd36e">지금 '+esc(BLD[bd.k].n)+' 건설 중 · '+fmtDur(bd.bt.e-now())+'</b>':'')+'</p>'+(rows||'<p class="muted">지금 지을 수 있는 건물이 없어요.</p>')+'<button class="btn ghost" data-close="1" style="width:100%">닫기</button></div></div>';}
function storeModal(){const L=document.getElementById('layer'),st=acc.vil.store||{},k=curIsl();let body;
 if(k==='main'){const tiles=TILES.map((t,n)=>{const kk='tile:'+n,c=t.free?'∞':(st[kk]||0);return '<button class="vsi" data-vtake="'+kk+'" '+(t.free||st[kk]>0?'':'disabled')+'><img src="'+(n===2?'v/path/main_1.webp':tileSrc(n))+'" alt=""><small>'+t.n+'<br>'+c+'</small></button>';}).join('');
  const props=PROPS.map((t,n)=>{const kk='deco:'+n;return '<button class="vsi" data-vtake="'+kk+'" '+(st[kk]>0?'':'disabled')+'><img src="'+decoSrc(n)+'" alt=""><small>'+t.n+'<br>'+(st[kk]||0)+'</small></button>';}).join('');
  body='<b>길·바닥</b><div class="vsgrid">'+tiles+'</div><b>소품</b><div class="vsgrid">'+props+'</div>';}
 else{const T=THEMES[k],props=T.props.map((n,i)=>{const kk='tp:'+k+':'+(i+1);return '<button class="vsi" data-vtake="'+kk+'" '+(st[kk]>0?'':'disabled')+'><img src="v/tp/'+k+'_'+(i+1)+'.webp" alt=""><small>'+n+'<br>'+(st[kk]||0)+'</small></button>';}).join('');
  body='<b>'+T.n+' 길</b><div class="vsgrid"><button class="vsi" data-vtake="tile:2"><img src="v/path/'+k+'_1.webp" alt=""><small>'+T.n+' 길<br>∞</small></button></div><b>'+T.n+' 소품</b><div class="vsgrid">'+props+'</div>';}
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal bmod" role="dialog" aria-label="마을 보관함"><b class="serif" style="font-size:22px;color:#ffd36e">'+(k==='main'?'마을':THEMES[k].n)+' 보관함</b><p class="muted" style="color:#c9d8d5;margin:0">눌러서 꺼내 놓아요. 길은 무제한·무료예요. 더 많은 꾸미기는 상점의 [꾸미기]에서 살 수 있어요.</p>'+body+'<button class="btn ghost" data-close="1" style="width:100%">닫기</button></div></div>';}
function roamModal(){const L=document.getElementById('layer'),k=curIsl(),T=THEMES[k];const all=vilPets().map((p,i)=>[p,i]);const here=all.filter(([p])=>p.isl===k),can=all.filter(([p])=>!p.vb&&!p.isl);
 const row=([p,i],a,lb)=>'<button class="btn '+(a==='vroamgo'?'teal':'soft')+' bmrow" data-'+a+'="'+i+'"><img class="px" src="'+img(p.no)+'" alt=""><span>'+esc(NAMES[p.no])+' · '+stN(p)+'<small>'+lb+'</small></span></button>';
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="환수 구경"><b class="serif" style="font-size:20px">'+T.ic+' '+T.n+' 구경</b><p class="muted" style="color:#c9d8d5;margin:0">구경 온 환수는 섬을 자유롭게 돌아다녀요. 건물에서 일하는 환수는 보낼 수 없어요.</p>'+
  (here.length?'<b>구경 중</b><div class="bmlist">'+here.map(x=>row(x,'vroamback','마을로 돌려보내기')).join('')+'</div>':'')+
  '<b>마을에서 데려오기</b><div class="bmlist">'+(can.length?can.map(x=>row(x,'vroamgo','구경 보내기')).join(''):'<p class="muted">데려올 수 있는 환수가 없어요.</p>')+'</div><button class="btn ghost" data-close="1">닫기</button></div></div>';}
function skinModal(){const L=document.getElementById('layer'),v=acc.vil;
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="마을 스킨"><b class="serif" style="font-size:22px;color:#ffd36e">마을 스킨</b><div class="bmlist">'+Object.entries(SKINS).map(([k,s])=>{const own=v.skins.includes(k);return '<button class="btn '+(v.skin===k?'teal':'soft')+' bmrow" data-vskinset="'+k+'" '+(own?'':'disabled')+'><img src="'+(s.icon||'i/ui/nav_village.png')+'" alt=""><span>'+esc(s.n)+(v.skin===k?' ✓ 사용 중':own?'':'<small>이벤트 상점에서 구매</small>')+'</span></button>';}).join('')+'</div><p class="muted" style="color:#c9d8d5;margin:0">스킨을 바꾸면 땅·길·소품 그림이 바뀌어요.</p><button class="btn ghost" data-close="1">닫기</button></div></div>';}
/* ----- 배치 모드 (끌어서 놓기) ----- */
function placeStart(ghost,single){VS.sel=null;VS.place={snap:JSON.stringify({b:acc.vil.b,o:acc.vil.o,pets:acc.vil.pets.map(p=>[p.vx,p.vy])}),sel:single||null,single:single||null,ghost:ghost||null};if(ghost){const c=vFreeFor(ghost);ghost.x=c[0];ghost.y=c[1];VS.place.sel=ghost.u;}render();}
function vFreeFor(o){const gap=BLD[o.k]?2:0,f0=fpOf(o);for(let r=0;r<VG;r++)for(let y=Math.max(0,24-r);y<=Math.min(VG-1,24+r);y++)for(let x=Math.max(0,24-r);x<=Math.min(VG-1,24+r);x++){o.x=x;o.y=y;if(vValid(o)&&(!gap||!vOcc(o.u).some(q=>overlap(q,{x:x-gap,y:y-gap,w:f0.w+gap*2,h:f0.h+gap*2}))))return[x,y];}for(let y=0;y<VG;y++)for(let x=0;x<VG;x++){o.x=x;o.y=y;if(vValid(o))return[x,y];}return[0,0];}
function placeCancel(){const pl=VS.place;if(!pl)return;const s=JSON.parse(pl.snap);acc.vil.b=s.b;acc.vil.o=s.o;acc.vil.pets.forEach((p,i)=>{if(s.pets[i]){p.vx=s.pets[i][0];p.vy=s.pets[i][1];}});if(pl.taken)Object.entries(pl.taken).forEach(([k,n])=>{acc.vil.store[k]=(acc.vil.store[k]||0)+n;});VS.place=null;render();}
function placeDone(){const pl=VS.place;if(!pl)return;if(pl.ghost)return toast('먼저 [여기에 건설]을 누르거나 취소해 주세요.');
 const bad=acc.vil.b.concat(acc.vil.o).find(o=>!vValid(o)),bp=vilPets().find(p=>!p.vb&&!vPetValid(p));if(bad||bp){pl.sel=bad?bad.u:'p'+vilPets().indexOf(bp);render();return toast('겹치거나 마을 밖에 있는 것이 있어요. 빨간 표시를 옮겨 주세요.');}
 VS.place=null;SFX.play('ok');toast('배치를 저장했어요.');commit();}
let VDRAG=null;
function vPointerDown(ev){const pl=VS.place;if(!pl)return;const t=ev.target.closest('[data-vo],[data-vpet]');if(!t)return;ev.preventDefault();
 if(ev.target.closest('.vfloat'))return;const id=t.dataset.vo||('p'+t.dataset.vpet);if(pl.single&&id!==pl.single)return;if(id.startsWith('p')){const p=vilPets()[+id.slice(1)];if(p&&p.vb){pl.sel=null;return toast('일하는 환수는 건물 창에서 배치를 해제한 뒤 옮길 수 있어요.');}}
 pl.sel=id;VDRAG={id,sx:ev.clientX,sy:ev.clientY,moved:false};try{t.setPointerCapture(ev.pointerId);}catch(e){}render();}
function vPointerMove(ev){if(!VDRAG||!VS.place)return;const m=document.getElementById('vmap');if(!m)return;const r=m.getBoundingClientRect(),z=VS.z||1,mx=(ev.clientX-r.left)/z,my=(ev.clientY-r.top)/z;
 const id=VDRAG.id;let o=null,isP=id.startsWith('p');if(isP)o=vilPets()[+id.slice(1)];else o=(VS.place.ghost&&VS.place.ghost.u===id)?VS.place.ghost:(bOf(id)||acc.vil.o.find(q=>q.u===id));if(!o)return;
 const f=isP?{w:petSz(o),h:petSz(o)}:fpOf(o),d=isP?f.h:(BLD[o.k]?bSize(o.k,o.lv).d:f.h),[cx,cy]=cellAt(mx,my+d*cellH()/2);let nx=cx-Math.floor(f.w/2),ny=cy-Math.floor(d/2);
 if(isP){if(o.vx===nx&&o.vy===ny)return;o.vx=nx;o.vy=ny;}else{if(o.x===nx&&o.y===ny)return;o.x=nx;o.y=ny;}VDRAG.moved=true;
 const sc=document.getElementById('vview'),keep=sc?[sc.scrollLeft,sc.scrollTop]:null;render();const s2=document.getElementById('vview');if(s2&&keep){s2.scrollLeft=keep[0];s2.scrollTop=keep[1];}}
function vPointerUp(){VDRAG=null;}
document.addEventListener('pointerdown',ev=>{if(VS.place&&ev.target.closest&&ev.target.closest('#vmap'))vPointerDown(ev);});
document.addEventListener('pointermove',ev=>{if(VDRAG)vPointerMove(ev);});
document.addEventListener('pointerup',vPointerUp);
function vClick(ds){const v=acc.vil;
 if(ds.vzoom){const e=document.getElementById('vview');if(!e)return;const r=e.getBoundingClientRect();vZoomTo((VS.z||1)*(+ds.vzoom>0?1.25:1/1.25),r.left+r.width/2,r.top+r.height/2);return;}
 if(ds.visl){if(VS.place)return toast('배치 모드를 먼저 끝내 주세요.');VS.sel=null;VS.isl=ds.visl;GEO=null;render();setTimeout(vCenter,0);return;}
 if(ds.vbgm){acc.bgmOff=!acc.bgmOff;islBgm();save();return render();}
 if(ds.vroam)return roamModal();
 if(ds.vroamgo!=null){const p=vilPets()[+ds.vroamgo];if(!p||p.vb)return;p.isl=curIsl();const c=vilFreeCell(petSz(p));p.vx=c[0];p.vy=c[1];closeLayer();toast(NAMES[p.no]+'이(가) '+THEMES[curIsl()].n+'에 구경 왔어요!');return commit();}
 if(ds.vroamback!=null){const p=vilPets()[+ds.vroamback];if(!p)return;const k0=VS.isl;delete p.isl;VS.isl='main';GEO=null;const c=vilFreeCell(petSz(p));p.vx=c[0];p.vy=c[1];VS.isl=k0;GEO=null;closeLayer();toast('마을로 돌아왔어요.');return commit();}
 if(ds.vharvall)return harvestAll();
 if(ds.vharv){const b=bOf(ds.vharv);vilTick();if(b&&bHarvest(b))commit();if(document.querySelector('.bmod'))bModal(ds.vharv);return;}
 if(ds.vo&&!VS.place){if(curIsl()==='main'||!bOf(ds.vo)){const ob=bOf(ds.vo)||v.o.find(q=>q.u===ds.vo);if(!ob||isTile(ob))return;VS.sel=VS.sel===ob.u?null:ob.u;return render();}return;}
 if(ds.vact){const id=VS.sel,b=bOf(id),ob=b||v.o.find(q=>q.u===id);if(!ob)return;const k=ds.vact;
  if(k==='move'){VS.sel=null;placeStart(null,id);return;}
  if(k==='flip'){ob.fl=!ob.fl;SFX.play('tap');return commit();}
  if(k==='info'){VS.sel=null;render();if(b)return bModal(b.u);return;}
  if(k==='store'&&!b){v.o=v.o.filter(q=>q.u!==id);if(ob.k!=='tile:2')v.store[ob.k]=(v.store[ob.k]||0)+1;VS.sel=null;toast('보관함에 넣었어요.');return commit();}}
 if(ds.vpet!=null&&!VS.place)return vPetModal(+ds.vpet);
 if(ds.vbuildmenu)return buildMenu();
 if(ds.vplace)return placeStart();
 if(ds.vcancel)return placeCancel();
 if(ds.vdone)return placeDone();
 if(ds.vstore)return storeModal();
 if(ds.vskin)return skinModal();
 if(ds.vskinset){if(!v.skins.includes(ds.vskinset))return;v.skin=ds.vskinset;closeLayer();SFX.play('mystic');return commit();}
 if(ds.vtake){const k=ds.vtake,free=k==='tile:2';if(!free){if(!(v.store[k]>0))return;v.store[k]--;VS.place.taken=VS.place.taken||{};VS.place.taken[k]=(VS.place.taken[k]||0)+1;}const o={u:uid36('o'),k,x:24,y:24};if(curIsl()!=='main')o.i=curIsl();vFreeFor(o);v.o.push(o);VS.place.sel=o.u;closeLayer();return render();}
 if(ds.vput||ds.vdel){const id=VS.place&&VS.place.sel,o=v.o.find(q=>q.u===id);if(!o)return;
  if(ds.vput){v.o=v.o.filter(q=>q.u!==id);if(o.k!=='tile:2')v.store[o.k]=(v.store[o.k]||0)+1;VS.place.sel=null;if(VS.place.taken&&VS.place.taken[o.k]){VS.place.taken[o.k]--;}return render();}
  return confirmBox('삭제',(isTile(o)?TILES[+o.k.slice(5)].n:isTP(o)?tpInfo(o.k).n:PROPS[+o.k.slice(5)].n)+'을(를) 없앨까요? 되돌릴 수 없어요.'+(o.k==='tile:2'?'':' (보관함에 넣으면 나중에 다시 쓸 수 있어요)'),()=>{v.o=v.o.filter(q=>q.u!==id);VS.place.sel=null;if(VS.place.taken&&VS.place.taken[o.k])VS.place.taken[o.k]--;render();});}
 if(ds.vnew){const k=ds.vnew;if(!canBuild(k))return;if(building())return toast('지금 다른 건물을 짓고 있어요.');closeLayer();return placeStart({u:uid36('b'),k,lv:0,x:24,y:24,pets:[]});}
 if(ds.vbuildgo){const pl=VS.place,g=pl&&pl.ghost;if(!g)return;if(!vValid(g))return toast('여기에는 지을 수 없어요. 빈 곳으로 옮겨 주세요.');const nth=g.k==='craft'?craftCount()+1:1,c=bCost(g.k,1,nth),l=costLack(c);if(l.length)return toast(l.join(', ')+'이(가) 부족해요.');
  payCost(c);g.bt={to:1,s:now(),e:now()+bBuildMs(g.k,1)};acc.vil.b.push(g);pl.ghost=null;pl.sel=null;VS.place=null;SFX.play('build');toast(BLD[g.k].n+' 건설을 시작했어요!');return commit();}
 if(ds.vup)return bUpgrade(ds.vup);
 if(ds.bcut){const [u,k]=ds.bcut.split(':');return bShortcut(bOf(u),k);}
 if(ds.rcptab){const [tb,u]=ds.rcptab.split(':');S.rcpTab=tb;return bModal(u);}
 if(ds.craft){const [u,k]=ds.craft.split(':'),b=bOf(u),r=RCP[k];if(!b||!r||b.job||!outInfo(r.out).ok)return;if(b.lv<(r.lv||1))return toast('제작소 '+r.lv+'단계가 필요해요.');const c={c:r.c||0,ki:r.ki||{}};if(costLack(c).length)return toast('재료가 부족해요.');payCost(c);const ms=r.min*MIN*(b.lv>=5?.8:1)*(1-prodCut());b.job={r:k,o:r.out,n:r.n||1,s:now(),e:now()+ms};SFX.play('build');toast(outInfo(r.out).n+' 제작을 시작했어요!');commit();return bModal(u);}
 if(ds.vassign)return assignModal(ds.vassign);
 if(ds.vas){const [u,i]=ds.vas.split(':'),b=bOf(u),p=vilPets()[+i];if(!b||!p)return;const slots=bSlots(b);b.pets=b.pets||[];if(b.pets.length>=slots)return toast('배치 칸이 가득 찼어요.');vilTick();bHarvest(b,true);b.pets.push(p.born);p.vb=b.u;SFX.play('equip');toast(NAMES[p.no]+'을(를) '+BLD[b.k].n+'에 배치했어요.'+(b.u==='center'?' 같은 특성 건물의 생산 시간이 줄어요.':''));commit();return bModal(u);}
 if(ds.vunassign){const id=+ds.vunassign,p=vilPets().find(q=>q.born===id);if(!p)return;const b=bOf(p.vb);vilTick();if(b){bHarvest(b,true);b.pets=(b.pets||[]).filter(x=>x!==id);}p.vb=null;const c=vilFreeCell(petSz(p));p.vx=c[0];p.vy=c[1];SFX.play('clank');toast(NAMES[p.no]+'의 배치를 해제했어요.');commit();return b?bModal(b.u):closeLayer();}
 if(ds.vtoslot!=null){const i=+ds.vtoslot,p=vilPets()[i],k=acc.slots.findIndex(q=>!q);if(!p)return;if(k<0)return toast('빈 성장 슬롯이 없어요.');if(p.vb){const b=bOf(p.vb);vilTick();if(b){bHarvest(b,true);b.pets=b.pets.filter(x=>x!==p.born);}p.vb=null;}
  acc.vil.pets.splice(i,1);restOut(p,true);delete p.vx;delete p.vy;acc.slots[k]=p;acc.notice[k]=null;sel=k;closeLayer();SFX.play('equip');toast(NAMES[p.no]+'이(가) 성장 슬롯 '+(k+1)+'(으)로 왔어요.');view='home';return commit();}
 if(ds.vtogsp!=null){const i=+ds.vtogsp,p=vilPets()[i];if(!p||!isGuest(p.no))return;const sr=gSer(p.no);if(gspOf(sr).length>=GSP_MAX)return toast('전용 공간이 가득 찼어요.');if(p.vb){const b=bOf(p.vb);if(b)b.pets=b.pets.filter(x=>x!==p.born);p.vb=null;}acc.vil.pets.splice(i,1);gspOf(sr).push(p);closeLayer();SFX.play('mystic');toast(NAMES[p.no]+'이(가) '+GSP[sr].n+'(으)로 갔어요.');return commit();}
}

const RING_SVG='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="128" height="64"><polygon points="64,3 125,32 64,61 3,32" fill="rgba(255,215,90,.22)" stroke="#ffd36e" stroke-width="4"/><polygon points="64,9 113,32 64,55 15,32" fill="none" stroke="#fff6c8" stroke-width="1.5" stroke-dasharray="6 5"/></svg>');
function vRing(){const id=VS.place?VS.place.sel:VS.sel;if(!id||String(id).startsWith('p'))return '';const o=bOf(id)||acc.vil.o.find(q=>q.u===id)||(VS.place&&VS.place.ghost&&VS.place.ghost.u===id?VS.place.ghost:null);if(!o||isTile(o))return '';const f=fpOf(o),d=BLD[o.k]?bSize(o.k,Math.max(o.lv||1,o.bt?o.bt.to:0)).d:f.h;const C=cellXY(f.x+f.w/2,f.y+d/2),W=fpW(f.x,f.y,f.w,d)*1.35;return '<img class="vring2" src="i/ui2/sel_ring.png" alt="" style="left:'+(C[0]-W/2).toFixed(1)+'px;top:'+(C[1]-W*132/256).toFixed(1)+'px;width:'+W.toFixed(1)+'px;z-index:90">';}
document.addEventListener('click',ev=>{if(view!=='village'||VS.place||!VS.sel)return;const t=ev.target;if(!t.closest||!t.closest('#vview'))return;if(t.closest('[data-vo],.vact,[data-vpet],button'))return;VS.sel=null;render();});

const FP_SVG=c=>'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="128" height="64"><polygon points="64,1 127,32 64,63 1,32" fill="'+c+'" stroke="'+c.replace(/[\d.]+\)$/,'1)')+'" stroke-width="2"/></svg>');
const FP_OK=FP_SVG('rgba(90,220,120,.38)'),FP_BAD=FP_SVG('rgba(255,70,60,.42)'),FP_ALL=FP_SVG('rgba(255,255,255,.22)'),FP_FRONT=FP_SVG('rgba(255,230,150,.28)');
function vFootprints(){const pl=VS.place;if(!pl)return '';const v=acc.vil,L=v.o.filter(o=>inIsl(o)&&!isTile(o)).concat(curIsl()==='main'?v.b:[]).concat(pl.ghost?[pl.ghost]:[]);
 return L.map(o=>{const f=fpOf(o),sel=pl.sel===o.u,bad=sel&&!vValid(o),D=[64,0,128,32,0,32];
  if(BLD[o.k]){const d=bSize(o.k,Math.max(o.lv||1,o.bt?o.bt.to:0)).d;return flatImg(sel?(bad?FP_BAD:FP_OK):FP_ALL,f.x,f.y,f.w,d,D,'vfp','',95)+flatImg(sel?(bad?FP_BAD:FP_FRONT):FP_FRONT,f.x,f.y+d,f.w,f.h-d,D,'vfp','',95);}
  return flatImg(sel?(bad?FP_BAD:FP_OK):FP_ALL,f.x,f.y,f.w,f.h,D,'vfp','',95);}).join('');}
/* ================= 운영자 설정 (상점 · 제작 · 인게임 아이템 · 컬렉션 · 이벤트) ================= */
// 인게임 아이템 (코드로 바꿔 마인크래프트에서 받는 아이템) · 번호(no)는 코드에 들어가니 바꾸지 마세요
const IG_DEF=[{no:1,k:'ig_dpp',n:'동패조각',c:'gold',m:'b25',img:'i/ig_b25.png'},{no:2,k:'ig_epp',n:'은패조각',c:'light_purple',m:'b26',img:'i/ig_b26.png'},{no:3,k:'ig_dp',n:'동패',c:'gold',m:'b27',img:'i/ig_b27.png'},{no:4,k:'ig_ep',n:'은패',c:'light_purple',m:'b28',img:'i/ig_b28.png'},{no:5,k:'ig_gp',n:'금패',c:'yellow',m:'b29',img:'i/ig_b29.png'},{no:6,k:'ig_kp',n:'금강패',c:'aqua',m:'b30',img:'i/ig_b30.png'}]
 .map(x=>Object.assign(x,{give:'give @p book[item_name={"color":"'+x.c+'","text":"'+x.n+'"},custom_model_data={strings:["'+x.m+'"]}] 1'}));
const RCP_DEF={r1:{out:'elixir',n:1,lv:1,min:60,ki:{water:5,wood:5}},r2:{out:'ig_dpp',n:1,lv:1,min:180,ki:{fire:6,metal:6}},r3:{out:'ig_epp',n:1,lv:2,min:360,ki:{water:10,metal:10}},r4:{out:'ig_dp',n:1,lv:3,min:360,ki:{wood:20,metal:20}},r5:{out:'ig_ep',n:1,lv:4,min:720,ki:{wood:35,yy:25}},
 /* 기운 → 환수코인 */
 /* 모든 기운(6종) X개씩 → 환수코인 · 할 게 없을 때 쓰는 용도라 교환비는 낮게 (기운 60개→5 ~ 150개→50) */
 ...Object.fromEntries([[1,10,5,30],[2,10,10,60],[3,15,20,120],[4,20,35,180],[5,25,50,240]].map(([lv,x,n,min])=>['cn'+lv,{out:'coins',n,lv,min,ki:{wood:x,fire:x,earth:x,metal:x,water:x,yy:x}}]))};
// 장비 제작: 제작소 1단계 일반 · 2단계 고급 · 3단계 희귀 · 4단계 영웅 · 5단계 전설 (5종류)
// 재료 컨셉: 무기 불+쇠 · 방어구 땅+쇠 · 보조무기 나무+물 · 노리개 음양+물 · 방울 쇠+나무
const GEAR_RCP_KI={w:['fire','metal'],a:['earth','metal'],s:['wood','water'],n:['yy','water'],b:['metal','wood']};
const GEAR_RCP_N=[[8,6],[20,15],[50,40],[120,90],[300,220]],GEAR_RCP_C=[0,20,60,150,400],GEAR_RCP_MIN=[60,180,480,960,2160];
GT.forEach(t=>[0,1,2,3,4].forEach(g=>{const [a,b]=GEAR_RCP_KI[t],ki={};ki[a]=GEAR_RCP_N[g][0];ki[b]=GEAR_RCP_N[g][1];RCP_DEF['g_'+t+g]={out:'gear:'+t+':'+g,n:1,lv:g+1,min:GEAR_RCP_MIN[g],c:GEAR_RCP_C[g],ki};}));
function outInfo(k){k=String(k||'');if(k==='coins')return{ok:true,coin:1,n:'환수코인',img:'i/ui/icon_coin.png'};if(k.startsWith('gear:')){const [,t,g]=k.split(':');const gg=+g;if(!TN[t]||!(gg>=0&&gg<=5))return{ok:false,n:k,img:'i/q.png'};const f={t,g:gg,o:t==='n'?'def':undefined,k:t==='b'?'prod':undefined};return{ok:true,gear:1,n:GN[gg]+' '+TN[t]+(t==='n'?' (옵션 무작위)':t==='b'?' (종류 무작위)':''),img:t==='n'?'eq/n.gif':t==='b'?'eq/b_prod_'+gg+'.gif':gearImg(f)};}const it=ITEMS[k];return it?{ok:true,n:it.n,img:it.img,ig:it.ig}:{ok:false,n:k,img:'i/q.png'};}
function outGive(k,n){k=String(k);if(k==='coins'){acc.coins=(acc.coins||0)+n;return;}if(k.startsWith('gear:')){const [,t,g]=k.split(':');for(let i=0;i<n;i++)acc.gear.push(gearNew(t,+g));return;}acc.inv[k]=(acc.inv[k]||0)+n;}
const RCP={};
const SHOPX={egg:50,eggWeek:1};
const DEF_SNAP={items:JSON.stringify(ITEMS),tiles:TILES.map(t=>t.p),props:PROPS.map(t=>t.p),slot:Object.assign({},SLOT_PRICE),vil:VIL_EXP.slice()};
let IG=[];
function applyCfg(){const c=cfg||{};
 const base=JSON.parse(DEF_SNAP.items);Object.keys(ITEMS).forEach(k=>{if(!base[k])delete ITEMS[k];});Object.assign(ITEMS,base);
 IG=(c.ig&&c.ig.length?c.ig:IG_DEF).map(x=>Object.assign({},x));
 IG.forEach(x=>{ITEMS[x.k]={n:x.n,p:0,img:x.img||'i/q.png',cat:'인게임',d:'마인크래프트 인게임 아이템 · 가방의 [코드화]에서 코드로 바꿔 게임에서 받아요',ig:x.no,give:x.give};});
 Object.entries(c.shop||{}).forEach(([k,o])=>{const it=ITEMS[k];if(!it||!o)return;if(o.p!=null)it.p=+o.p;if(o.off)it.p=0;if(o.d!=null)it.daily=+o.d||undefined;if(o.w!=null)it.weekly=+o.w||undefined;});
 TILES.forEach((t,i)=>{t.p=c.deco&&c.deco['tile:'+i]!=null?+c.deco['tile:'+i]:DEF_SNAP.tiles[i];});PROPS.forEach((t,i)=>{t.p=c.deco&&c.deco['deco:'+i]!=null?+c.deco['deco:'+i]:DEF_SNAP.props[i];});
 Object.assign(SLOT_PRICE,DEF_SNAP.slot,c.slotP||{});VIL_EXP.splice(0,VIL_EXP.length,...(c.vilP&&c.vilP.length===5?c.vilP:DEF_SNAP.vil));
 SHOPX.egg=c.eggP!=null?+c.eggP:50;SHOPX.eggWeek=c.eggW!=null?+c.eggW:1;
 Object.keys(RCP).forEach(k=>delete RCP[k]);Object.assign(RCP,JSON.parse(JSON.stringify(c.rcp&&Object.keys(c.rcp).length?c.rcp:RCP_DEF)));if(c.rcp&&c.rcpV!==2)Object.keys(RCP_DEF).filter(k=>k.startsWith('g_')&&!RCP[k]).forEach(k=>{RCP[k]=JSON.parse(JSON.stringify(RCP_DEF[k]));});
 /* 환수코인 레시피는 운영자가 레시피를 한 번 저장하기 전까지 기본값으로 붙여 줌 (저장 후엔 운영자 설정 그대로) */
 if(c.rcp&&c.rcpCn!==2)Object.keys(RCP_DEF).filter(k=>k.startsWith('cn')).forEach(k=>{RCP[k]=JSON.parse(JSON.stringify(RCP_DEF[k]));});
 }
const IG_KEYS_NOW=()=>IG.map(x=>x.k);
/* ----- 이벤트 ----- */
function evOn(e){if(!e||!e.on)return false;const t=now();return (!e.s||t>=Date.parse(e.s))&&(!e.e||t<Date.parse(e.e));}
/* 미니게임 이벤트 (운영자 이벤트 화면에서 켜고 끔) */
const MG_EV=[['krTok','근두운 질주 · 엽전 획득','배율',2,'m','근두운 엽전 {v}배'],['krEnt','근두운 질주 · 하루 입장 추가','추가 횟수',1,'n','근두운 입장 +{v}'],['krCoin','근두운 질주 · 환수코인 보상','배율',1.5,'m','근두운 코인 보상 {v}배'],['krMerge','근두운 질주 · 부적 합성 축복','성공률 +%p',10,'n','부적 합성 성공률 +{v}%p'],
 ['dgRew','도깨비 야행 · 보상(코인·기운)','배율',2,'m','도깨비 야행 보상 {v}배'],['dgEnt','도깨비 야행 · 하루 입장 추가','추가 횟수',1,'n','도깨비 야행 입장 +{v}'],['dgBox','도깨비 야행 · 상자 행운','장비 등급↑ 확률 %',20,'n','도깨비 상자 행운 +{v}%'],['dgEgg','도깨비 야행 · 알 출현','배율',2,'m','도깨비 야행 알 {v}배'],['dgXp','도깨비 야행 · 경험치 보석','배율',1.5,'m','도깨비 야행 성장 {v}배']];
function mgEv(k){const e=cfg&&cfg.ev&&cfg.ev[k];if(!evOn(e))return 0;const r=MG_EV.find(x=>x[0]===k);if(r&&r[0].startsWith('kr')&&typeof krOpen==='function'&&!krOpen())return 0;if(r&&r[0].startsWith('dg')&&typeof dgOpen==='function'&&!dgOpen())return 0;return Math.max(0,+e.v||0);}
function mgM(k){return mgEv(k)||1;}
function expM(){const e=cfg.ev&&cfg.ev.exp;return (cfg.expMult||1)*(evOn(e)?(+e.m||1):1)*(1+titleEff('xp')/100);}
function prodCut(){const e=cfg.ev&&cfg.ev.prod;return Math.min(.9,(evOn(e)?Math.max(0,(+e.pct||0)/100):0)+titleEff('prod')/100);}
function hotNow(){const e=cfg.ev&&cfg.ev.hot;if(!evOn(e)||!e.from||!e.to)return false;const d=new Date(now()),m=d.getHours()*60+d.getMinutes(),f=e.from.split(':'),t=e.to.split(':'),a=+f[0]*60+ +f[1],b=+t[0]*60+ +t[1];return a<=b?m>=a&&m<b:m>=a||m<b;}
function hotCheck(){if(MODE!=='player'||!acc||!hotNow())return false;const e=cfg.ev.hot,d=new Date(now()),key=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();if(acc.hot===key)return false;acc.hot=key;
 const rw=Object.assign({},e.rw||{});acc.mail=acc.mail||[];acc.mail.push(stampMail(Object.assign({title:'핫타임 보상',from:'선계 관리소',msg:(e.msg||'핫타임에 접속해 줘서 고마워요!')},rw)));SFX.play('fanfare');toast('핫타임 보상이 우편함에 도착했어요!');return true;}
function evBanner(){const L=[];if((cfg.expMult||1)>1)L.push('경험치 '+cfg.expMult+'배');const ev=cfg.ev||{};const till=e=>e.e?' (~'+new Date(Date.parse(e.e)).toLocaleString('ko-KR',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})+')':'';
 if(evOn(ev.exp)&&(+ev.exp.m||1)>1)L.push('경험치 이벤트 '+ev.exp.m+'배'+till(ev.exp));if(evOn(ev.prod)&&prodCut()>0)L.push('마을 생산·제작 시간 -'+Math.round(prodCut()*100)+'%'+till(ev.prod));
 MG_EV.forEach(r=>{const v=mgEv(r[0]);if(v&&(r[4]==='n'||v!==1))L.push(r[5].replace('{v}',v)+till(ev[r[0]]));});
 if(evOn(ev.hot))L.push('핫타임 매일 '+ev.hot.from+'~'+ev.hot.to+' 접속 시 보상'+(hotNow()?' · 지금 진행 중!':''));return L;}
/* ----- 소원을 비는 탑 (하루 1번) ----- */
function wishReady(){const b=acc.vil&&acc.vil.b.find(x=>x.k==='wish');return !!(b&&b.lv>0&&!b.bt&&acc.wishDay!==dayKey(now()));}
function doWish(note){if(note){if(!take('wish_note'))return;}else{if(!wishReady())return toast('오늘은 이미 소원을 빌었어요. 내일 다시 빌 수 있어요.');acc.wishDay=dayKey(now());}const r=rnd()*100;let got;
 if(r<50){const c=5+Math.floor(rnd()*6);acc.coins+=c;got='환수코인 '+c;}
 else if(r<80){const k=GAUGES[Math.floor(rnd()*6)],n=1+Math.floor(rnd()*10);acc.inv[KI[k]]=(acc.inv[KI[k]]||0)+n;got=ITEMS[KI[k]].n+' ×'+n;}
 else if(r<90){acc.inv.egg_n=(acc.inv.egg_n||0)+1;got='환수 알';}
 else if(r<95){acc.inv.egg_yy=(acc.inv.egg_yy||0)+1;got='음양알';}
 else if(r<96){acc.inv.egg_g1=(acc.inv.egg_g1||0)+1;got='우주비행사알';}
 else if(r<97){acc.inv.egg_g2=(acc.inv.egg_g2||0)+1;got='치이카와알';}
 else{acc.inv.ig_gp=(acc.inv.ig_gp||0)+1;got='금패 (코드화 가능)';}
 SFX.play('fanfare');const L=document.getElementById('layer');L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="소원"><b class="serif" style="font-size:22px;color:#ffd36e">소원이 이루어졌어요!</b><img class="px" src="'+(note||!acc.vil.b.find(x=>x.k==='wish')?ITEMS.wish_note.img:bSrc(acc.vil.b.find(x=>x.k==='wish')))+'" alt="" style="width:120px;height:120px;object-fit:contain"><b style="font-size:20px">'+esc(got)+'</b><button class="btn" data-close="1">확인</button></div></div>';commit();}
/* ----- 컬렉션 ----- */
function colDefaults(){const L=[],path=(a,b)=>colPath(a,b).filter(i=>FORMS[i].st>=4);
 [[3,5,'해태의 수호'],[6,8,'여우불의 길'],[9,18,'태양의 삼족오'],[9,24,'남방 주작'],[25,34,'중앙 황룡'],[25,40,'동방 청룡'],[41,50,'뇌명의 신귀'],[41,56,'북방 현무'],[57,66,'상서로운 기린'],[57,72,'서방 백호'],[73,76,'달빛 곰의 숲']].forEach(([a,b,n])=>L.push({n,m:path(a,b)}));
 L.push({n:'흉풍의 궁기',m:path(149,160)},{n:'탐식의 도철',m:path(149,166)},{n:'심연의 혼돈',m:path(168,179)},{n:'패악의 도올',m:path(168,185)},{n:'십이지신',m:[210,213,154,206,173,196,217,199,203,189,192,220]});
 L.push({n:'눈사람 산타의 길',m:path(221,235)},{n:'서리 장난꾼 잭 프로스트',m:path(221,241)},{n:'산타클로스의 길',m:path(221,254)},{n:'심술쟁이 크람푸스',m:path(221,260)});
 L.push({n:'우주비행사 크루',m:[3,5,7,9,11,13,15,17,19].map(n=>gno('s1-'+String(n).padStart(2,'0')))},{n:'우주 컴패니언',m:[4,6,8,10,12,14,16,18,20].map(n=>gno('s1-'+String(n).padStart(2,'0')))},{n:'말랑 친구들',m:[2,3,4,5,6,7,8,9,10,11].map(n=>gno('s2-'+String(n).padStart(2,'0')))});
 return L.map((c,i)=>Object.assign(c,{id:'c'+(i+1),m:c.m.slice(0,12),rw:{coins:30}}));}
function colsNow(){const L=cfg.cols&&cfg.cols.length?cfg.cols:colDefaults();return L.map(c=>Object.assign({},c,{m:(c.m||[]).filter(canFree)})).filter(c=>c.m.length);}
// 불이 들어오는 조건: 해방한 환수 · 해방할 수 없는 환수(1~3단계, 스타즈렐름)는 획득만 해도 켜져요
const canFree=i=>!isGuest(i)&&FORMS[i]&&FORMS[i].st>=4;
const dexLit=i=>canFree(i)?!!(acc.dex[i]&&acc.dex[i].freed):!!acc.dex[i];
const colLit=i=>canFree(i)&&!!(acc.dex[i]&&acc.dex[i].freed);
function colCard(c){const m=c.m||[],fr=m.filter(colLit).length,full=m.length>0&&fr===m.length,got=acc.colDone&&acc.colDone[c.id];const rw=mailParts(Object.assign({title:''},c.rw||{}));
 return {full,h:'<div class="col'+(full?' full':'')+'">'+(full?'<img class="coldone px" src="i/dex/col_done.png" alt="완성">':'')+'<div class="colh"><b class="serif">'+esc(c.n)+'</b><span class="colp">'+(full?'<b class="colok">完成</b>':'해방 '+fr+'/'+m.length)+'</span></div><div class="colm">'+
  m.map(i=>{if(!NAMES[i])return '';const d=acc.dex[i],no=dexNo(i),lit=colLit(i);if(!d)return '<div class="cm no" data-tip="?'+i+'"><span>'+no+'</span><b>?</b></div>';
   return '<div class="cm'+(lit?' lit':' dim')+'" data-tip="'+i+'"><img class="px'+(lit?'':' sil')+'" src="'+img(i)+'" alt=""><span>'+no+'</span></div>';}).join('')+'</div>'+
  (rw.length?'<div class="colrw"><span class="muted">완성 보상: '+esc(rw.join(', '))+'</span>'+(got?'<b class="colok" style="font-size:13px">받음</b>':'<button class="btn sm" data-colclaim="'+c.id+'" '+(full?'':'disabled')+'>보상 받기</button>')+'</div>':'')+'</div>'};}
function colClaim(id){const c=colsNow().find(x=>x.id===id);if(!c)return;acc.colDone=acc.colDone||{};if(acc.colDone[id])return toast('이미 받은 보상이에요.');if(!(c.m||[]).every(colLit))return toast('아직 컬렉션을 완성하지 않았어요.');
 acc.colDone[id]=1;acc.mail=acc.mail||[];acc.mail.push(stampMail(Object.assign({title:'컬렉션 「'+c.n+'」 완성 보상',from:'선계 도감관',msg:'컬렉션을 완성했어요! 축하해요.'},c.rw||{})));SFX.play('fanfare');toast('완성 보상이 우편함에 도착했어요!');commit();}
function vDex(){const tab=S.dex||'all',own=Object.keys(acc.dex).length,freed=Object.values(acc.dex).filter(d=>d.freed).length;
 let h='<div class="dexhead"><div class="dextitle serif">환수 도감</div><div style="display:flex;align-items:center;gap:10px;flex:1 1 280px;max-width:420px"><div class="stat" style="flex:1;margin:0"><div class="tr"><i style="width:'+own/DEX_N*100+'%;background:linear-gradient(90deg,#c9a24a,#f0d78a)"></i></div></div><b>'+own+' / '+DEX_N+'</b><span class="muted">해방 '+freed+'</span></div></div><div class="tmode">'+[['all','전체 도감'],['col','컬렉션']].map(([k,n])=>'<button class="'+(tab===k?'on':'')+'" data-dextab="'+k+'">'+n+'</button>').join('')+'</div>';
 if(typeof skyBanner==='function')h+=skyBanner();
 if(tab==='col'){const cs=colsNow().map(colCard),done=cs.filter(c=>c.full).length;return h+'<div class="colhead"><span class="muted">완성 '+done+' / '+cs.length+' · 해방한 환수에만 불이 들어와요 (해방할 수 없는 1~3단계·스타즈렐름은 컬렉션에 넣지 않아요)</span></div><div class="colgrid">'+cs.map(c=>c.h).join('')+'</div>';}
 return h+'<p class="muted pgdesc" style="margin:4px 0 8px">획득하면 실루엣이 보이고, 해방하면 불이 들어와요. 해방할 수 없는 1~3단계와 스타즈렐름 환수는 획득만 해도 불이 들어와요.</p><div class="dex dexnum">'+NAMES.map((n,i)=>{const d=acc.dex[i],no=dexNo(i);
  if(!d)return '<div class="dc no" data-tip="?'+i+'"><span class="dno">'+no+'</span><b class="q">?</b><span class="n">???</span></div>';
  const lit=dexLit(i);return '<div class="dc g-'+tipKey(i)+(lit?' lit':' got')+'" data-tip="'+i+'"><span class="dno">'+no+'</span><img class="px'+(lit?'':' sil')+'" src="'+img(i)+'" alt=""><span class="n">'+esc(n)+'</span>'+(lit?gradeTag(i,'sm'):'')+(d.freed?'<span class="seal" aria-label="해방함">解</span>':'')+'</div>';}).join('')+'</div>';}
/* ----- 코드화 (인게임 아이템 → 코드) ----- */
// 코드: 플레이어-회차-(번호-개수)×최대6-확인숫자 · 확인숫자=(P×41+N×43+Σ(번호×97+개수×61)×순서+2468) mod 9973
function igChk(P0,N,pairs){let s=P0*41+N*43+2468;pairs.forEach(([a,b],j)=>{s+=(a*97+b*61)*(j+1);});return s%9973;}
/* 코드 회차(N)는 플레이어 번호별 서버 카운터(igctr/{번호})에서 받아요.
   계정 복구·되돌림·같은 번호를 쓰는 계정이 있어도 회차가 겹치지 않게 (게임은 번호_회차로 '이미 받은 코드'를 판단) */
const igMaxN=(L,P0)=>Math.max(0,...(L||[]).map(c=>{const m=igParse(c.code);return m&&m.P0===P0?m.N:0;}));
async function igNextN(P0,localN,hist){const ref=db.doc('igctr/'+P0),s=await ref.get();
 const cur=s.exists?(+s.data().n||0):Math.max(localN||0,igMaxN(hist,P0))+100;/* 카운터가 처음이면 예전 회차와 겹치지 않게 +100 건너뛰기 */
 const n=Math.max(cur,localN||0)+1;await ref.set({p:P0,n,t:Date.now()});return n;}
function igParse(code){const m=String(code).trim().split('-').map(Number);if(m.length<5||m.length%2===0||m.some(isNaN))return null;const P0=m[0],N=m[1],pairs=[];for(let i=2;i<m.length-1;i+=2)pairs.push([m[i],m[i+1]]);return{P0,N,pairs,k:m[m.length-1],ok:igChk(P0,N,pairs)===m[m.length-1]};}
function vCodify(){S.igSel=S.igSel||{};const P0=acc.playerNo,keys=IG_KEYS_NOW(),nsel=keys.filter(k=>S.igSel[k]>0).length;
 let h='<div class="card"><h2>인게임 아이템 코드화</h2><p class="muted">제작소·해방 보상·소원탑에서 얻은 인게임 아이템을 한 번에 코드로 바꿔요 (한 코드에 최대 6종류). 코드로 바꾼 아이템은 가방에서 빠져요.</p><p class="muted" style="margin:0 0 8px"><b>게임에서 받는 법:</b> 책과 깃펜 첫 장에 코드를 적고, 손에 든 채로 <b>/trigger hwansu_get</b></p>'+(P0?'':'<p class="warn">먼저 [코드] 메뉴에서 게임 → 웹 환수 코드를 한 번 입력해 플레이어 번호를 연결해 주세요.</p>')+
 '<div class="igl">'+keys.map(k=>{const have=acc.inv[k]||0,v=Math.min(have,S.igSel[k]||0);S.igSel[k]=v;const blk=!v&&nsel>=6;return '<div class="igr"><img class="px" src="'+ITEMS[k].img+'" alt=""><b>'+esc(ITEMS[k].n)+'</b><small>보유 '+have+'</small><div class="igc"><button class="btn sm soft" data-igs="'+k+':-1" '+(v>0?'':'disabled')+'>－</button><b>'+v+'</b><button class="btn sm soft" data-igs="'+k+':1" '+(v<have&&v<99&&!blk?'':'disabled')+'>＋</button><button class="btn sm ghost" data-igs="'+k+':all" '+(have&&!blk?'':'disabled')+'>전부</button></div></div>';}).join('')+'</div>'+
 '<button class="btn teal" data-igmake="1" style="width:100%;min-height:48px" '+(P0&&nsel?'':'disabled')+'>코드 만들기</button></div>';
 const L=(acc.igc||[]).slice(0,30);
 h+='<div class="card"><h2>발급한 코드</h2>'+(L.length?L.map(c=>'<div class="igh"><code>'+esc(c.code)+'</code><small class="muted">'+new Date(c.t).toLocaleString('ko-KR')+' · '+esc(c.txt||'')+'</small><button class="btn sm soft" data-copy="'+esc(c.code)+'">복사</button></div>').join(''):'<p class="muted">아직 발급한 코드가 없어요.</p>')+'</div>';
 return h;}
function igMake(){if(!acc.playerNo)return toast('플레이어 번호가 연결되지 않았어요.');const sel_=IG_KEYS_NOW().map(k=>[k,Math.min(acc.inv[k]||0,S.igSel[k]||0)]).filter(x=>x[1]>0).slice(0,6);if(!sel_.length)return toast('코드로 바꿀 아이템을 골라 주세요.');
 const txt=sel_.map(([k,n])=>ITEMS[k].n+' ×'+n).join(', ');
 if(S.kicked)return toast('다른 기기에서 접속 중이라 저장이 멈춰 있어요. 이 기기에서 이어서 하기를 누른 뒤 다시 시도해 주세요.');
 confirmBox('코드 만들기',txt+'\n\n코드로 바꾸면 가방에서 빠져요. 코드를 잃어버리지 않게 꼭 복사해 두세요.',async()=>{if(S.igBusy)return;if(sel_.some(([k,n])=>(acc.inv[k]||0)<n))return toast('아이템이 부족해요.');S.igBusy=true;let N;try{N=await igNextN(acc.playerNo,acc.igN||0,acc.igc);}catch(e){S.igBusy=false;return toast('코드 번호를 받지 못했어요. 잠시 뒤 다시 해 주세요. (아이템은 그대로예요)');}
  const bk={inv:JSON.parse(JSON.stringify(acc.inv)),igN:acc.igN,igc:acc.igc};sel_.forEach(([k,n])=>{acc.inv[k]-=n;if(acc.inv[k]<=0)delete acc.inv[k];});acc.igN=N;const pairs=sel_.map(([k,n])=>[ITEMS[k].ig,n]);
  const code=[acc.playerNo,N].concat(...pairs,[igChk(acc.playerNo,N,pairs)]).join('-');
  acc.igc=[{code,txt,t:Date.now(),p:pairs.map(([i,n])=>({i,n}))}].concat(acc.igc||[]).slice(0,100);S.igSel={};S.igBusy=true;render();toast('저장 중…');const ok=await save();S.igBusy=false;
  if(!ok){acc.inv=bk.inv;acc.igN=bk.igN;acc.igc=bk.igc;render();return toast('저장이 안 돼서 코드를 만들지 않았어요. 아이템은 그대로예요. 새로고침 후 다시 해 주세요.');}
  syncArena();syncVillage();SFX.play('fanfare');
  const L=document.getElementById('layer');L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="인게임 코드"><b class="serif" style="font-size:22px;color:#ffd36e">인게임 코드</b><code class="igbig">'+esc(code)+'</code><p class="muted" style="color:#c9d8d5;margin:0">'+esc(txt)+'<br>게임에서 책과 깃펜 첫 장에 이 코드를 적고 손에 든 채로 /trigger hwansu_get 을 입력하면 받아요. 가방 → 코드화에서 다시 볼 수 있어요.</p><button class="btn" data-copy="'+esc(code)+'">복사</button><button class="btn ghost" data-close="1">닫기</button></div></div>';});}
applyCfg();
/* ================= 환수 대전 (비동기) ================= */
const SKILL={yang:'양기 폭발',yin:'음기 파동',neutral:'음양 구르기',fire:'화염구',water:'물대포',wood:'덩굴채찍',earth:'바위 떨구기',metal:'쇠발톱'};
const PVP_WIN=10, PVP_LOSE=5, DEF_WIN=3, DEF_LOSE=5, PVP_DAILY=3;
const PV={list:null,logs:null,busy:false,atk:null,loaded:false};
/* 약자 보호 (운영자 설정 cfg.pvp)
   range: 내 전투력의 몇 % 이상인 상대만 도전 (위로는 제한 없음) · minN: 범위 안 상대가 적으면 가장 가까운 아래 상대 몇 명까지 허용
   tiers: [상대 전투력 % 미만, 이기면 얻는 메달, 상대가 잃는 메달] · cap: 하루에 방어로 메달을 잃는 최대 횟수 */
const PVP_DEF={range:70,minN:3,cap:3,tiers:[[50,2,1],[80,6,3],[120,10,5],[99999,15,5]]};
function pvpCfg(){const c=(cfg&&cfg.pvp)||{};return{range:c.range!=null?+c.range:PVP_DEF.range,minN:c.minN!=null?+c.minN:PVP_DEF.minN,cap:c.cap!=null?+c.cap:PVP_DEF.cap,tiers:(c.tiers&&c.tiers.length?c.tiers.map(t=>Array.isArray(t)?t:[t.u,t.w,t.l]):PVP_DEF.tiers).map(t=>t.map(Number)).sort((a,b)=>a[0]-b[0])};}
const pvpRatio=(myCp,dCp)=>myCp>0?dCp/myCp*100:100;
function pvpTier(r){const T=pvpCfg().tiers;return T.find(t=>r<t[0])||T[T.length-1];}
function pvpAllowed(myCp,list){const C=pvpCfg(),L=(list||[]).filter(a=>a&&a.pet&&a.uid!==acc.uid),ok=new Set(L.filter(a=>pvpRatio(myCp,a.pet.cp||0)>=C.range).map(a=>a.uid));
 if(ok.size<C.minN)L.filter(a=>!ok.has(a.uid)).sort((x,y)=>(y.pet.cp||0)-(x.pet.cp||0)).slice(0,C.minN-ok.size).forEach(a=>ok.add(a.uid));return ok;}
let arenaKey=null;
function sunKey(t){const d=new Date(dayKey(t)+'T00:00:00Z');d.setUTCDate(d.getUTCDate()-d.getUTCDay());return d.toISOString().slice(0,10);}
function aEff(a){return a&&a.week===sunKey(now())?{m:a.medals,w:a.w||0,l:a.l||0,dw:a.dw||0,dl:a.dl||0}:{m:100,w:0,l:0,dw:0,dl:0};}
function atkPetGet(){const i=atkIdx();if(i==='rep'){const r=repPet();return r?r.p:null;}return i>=0?acc.slots[i]:null;}
function repPet(){const id=acc.arenaRep;if(id==null)return null;const i=acc.slots.findIndex(q=>q&&q.born===id);if(i>=0)return{i,p:acc.slots[i]};const p=(acc.vil&&acc.vil.pets||[]).find(q=>q.born===id);return p?{i:-1,p}:null;}
function repModal(){const L=document.getElementById('layer'),all=acc.slots.map((p,i)=>p?{p,w:'성장 슬롯 '+(i+1)}:null).filter(Boolean).concat(vilPets().map(p=>({p,w:p.vb?(BLD[(bOf(p.vb)||{}).k]||{n:'건물'}).n+'에서 일하는 중':'마을'})));
 const cur=acc.arenaRep;L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="대표 환수 고르기"><b class="serif" style="font-size:20px">대표 환수 고르기</b><p class="muted" style="margin:0">대표 환수는 다른 유저의 도전을 막아요. 어디에 있든(성장 중·마을) 그대로 키우면서 대표로 둘 수 있어요. 스타즈렐름·게스트 등급은 고를 수 없어요.</p><div class="bmlist">'+
  all.map(({p,w})=>{if(!p.born)p.born=Date.now()+Math.floor(Math.random()*1e6);const no=noArena(p.no),on=p.born===cur;return '<button class="btn '+(on?'teal':'soft')+' bmrow" data-setrep="'+p.born+'" '+(no?'disabled':'')+'><img class="px" src="'+img(p.no)+'" alt=""><span>'+esc(NAMES[p.no])+' · '+stN(p)+' · 전투력 '+fmt(cp(p))+'<small>'+(on?'★ 지금 대표 · ':'')+w+(no?' · 대전 불가 등급':'')+'</small></span></button>';}).join('')+'</div><button class="btn ghost" data-close="1">닫기</button></div></div>';}
async function setRep(born){const all=acc.slots.filter(Boolean).concat(vilPets()),q=all.find(p=>String(p.born)===String(born));if(!q||noArena(q.no))return;acc.arenaRep=q.born;closeLayer();SFX.play('equip');toast(NAMES[q.no]+'을(를) 대표 환수로 정했어요.');await commit();await syncArena(true);loadArena();}
// 스타즈렐름·게스트 등급은 대전에 나갈 수 없어요 (방어·공격 모두)
const noArena=no=>isGuest(no)||GRADE_N[no]===-2;
function atkIdx(){if(PV.atk==='rep'){const r=repPet();if(r&&!noArena(r.p.no)&&r.p.sick==null)return r.i>=0?r.i:'rep';}if(PV.atk!=null&&PV.atk!=='rep'&&acc.slots[PV.atk]&&!noArena(acc.slots[PV.atk].no))return PV.atk;return acc.slots.findIndex(q=>q&&q.sick==null&&!noArena(q.no));}
function petSnap(p){const s=statsOf(p);return{no:p.no,st:p.st,lv:p.lv,star:p.star||0,cp:powerOf(s),el:ELOF[p.no]||'fire',bs:{hp:s.hp,atk:s.atk,def:s.def,eva:s.eva,pen:s.pen,crit:s.crit}};}
/* 대표 환수가 비었거나(미등록·해방·삭제) 대전에 못 나가는 환수면 → 가진 환수 중 전투력이 가장 높은 환수로 자동 등록 */
function autoRep(){const r=repPet();if(r&&!noArena(r.p.no))return false;
 const all=acc.slots.filter(Boolean).concat(vilPets()).filter(p=>!noArena(p.no));if(!all.length)return false;
 let best=all[0],bc=cp(best);all.slice(1).forEach(p=>{const c=cp(p);if(c>bc){best=p;bc=c;}});
 if(!best.born)best.born=Date.now()+Math.floor(Math.random()*1e6);if(acc.arenaRep===best.born)return false;acc.arenaRep=best.born;return true;}
async function syncArena(force){if(MODE!=='player'||!acc||!db)return;if(autoRep()){force=true;save();}if(acc.arenaRep==null&&!force)return;const r0=repPet(),r=r0&&!noArena(r0.p.no)?r0:null,pet=r?petSnap(r.p):null;
 const key=pet?[pet.no,pet.st,pet.lv,pet.cp,JSON.stringify(pet.bs||{}),acc.title||''].join('|'):'none';if(!force&&key===arenaKey)return;arenaKey=key;
 const ref=db.doc('arena/'+acc.uid);try{const s=await ref.get();if(!s.exists){if(!pet)return;await ref.set({uid:acc.uid,id:acc.id,nick:acc.nick||acc.id,week:sunKey(now()),medals:100,w:0,l:0,dw:0,dl:0,pet,title:acc.title||null,t:Date.now()});}else await ref.update({pet,nick:acc.nick||acc.id,title:acc.title||null,t:Date.now()});}catch(e){arenaKey=null;}}
function bStat(s){const b=snapStats(s);return{hp:b.hp,atk:b.atk};}
function simBattle(A,D,seed){const R=seeded(seed),sa=snapStats(A),sd=snapStats(D);let ha=sa.hp,hd=sd.hp;const log=[];let turn=0;
 while(ha>0&&hd>0&&turn<40){const aT=turn%2===0,r=hitCalc(aT?sa:sd,aT?sd:sa,R);
  if(aT)hd=Math.max(0,hd-r.dmg);else ha=Math.max(0,ha-r.dmg);
  log.push([aT?0:1,r.dmg,r.crit,r.miss,r.adv,ha,hd]);turn++;}
 const win=hd<=0?true:ha<=0?false:(ha/sa.hp)>(hd/sd.hp);
 return{log,win,hpA:sa.hp,hpD:sd.hp};}
async function loadArena(){if(!acc)return;PV.loaded=true;try{const wk=sunKey(now());const q=await db.collection('arena').get();PV.list=q.docs.map(d=>d.data()).filter(a=>a&&a.pet);
  const b1=await db.collection('battles').where('duid','==',acc.uid).where('week','==',wk).get();const b2=await db.collection('battles').where('auid','==',acc.uid).where('week','==',wk).get();
  PV.logs=b1.docs.map(d=>Object.assign({id:d.id,role:'def'},d.data())).concat(b2.docs.map(d=>Object.assign({id:d.id,role:'atk'},d.data()))).sort((x,y)=>y.t-x.t).slice(0,20);}
 catch(e){PV.list=PV.list||[];PV.logs=PV.logs||[];toast('대전 정보를 불러오지 못했어요.');}
 if(view==='pvp'&&!document.getElementById('layer').innerHTML)render();}
async function setRep_old(i){const q=acc.slots[i];if(!q)return;if(!q.born)q.born=Date.now()+i;acc.arenaRep=q.born;SFX.play('equip');toast(NAMES[q.no]+'을(를) 대표 환수로 정했어요.');await commit();await syncArena(true);loadArena();}
async function fight(uid,re){if(PV.busy)return;const ad=accDaily();
 if(re){if(!(acc.inv.sec_pvp>0))return toast('대전재도전비서가 없어요. 상점에서 살 수 있어요.');}
 else{if((ad.pvp||0)>=PVP_DAILY)return toast('오늘 공격 횟수를 다 썼어요. 내일 오전 6시에 다시 할 수 있어요.');
 if((ad.pvpTo||[]).includes(uid))return toast('같은 상대는 하루에 한 번만 도전할 수 있어요. (대전재도전비서로 한 번 더 할 수 있어요)');}
 if(autoRep())save();const me=repPet();if(!me)return toast('대전에 나갈 수 있는 환수가 없어요.');
 const ai=atkIdx(),ap=atkPetGet();if(!ap)return toast('출전할 환수를 골라 주세요.');if(noArena(ap.no))return toast('스타즈렐름·게스트 등급은 대전에 나갈 수 없어요.');if(ap.sick!=null)return toast('아픈 환수는 대전에 나갈 수 없어요.');
 PV.busy=true;try{
  const dRef=db.doc('arena/'+uid),ds=await dRef.get();if(!ds.exists||!ds.data().pet){toast('상대 정보를 찾지 못했어요.');return;}const dd=ds.data();
  const myRef=db.doc('arena/'+acc.uid);let ms=await myRef.get();if(!ms.exists){await syncArena(true);ms=await myRef.get();}const mine=ms.exists?ms.data():null;
  const A=petSnap(ap),D=dd.pet;
  if(!pvpAllowed(A.cp,(PV.list||[]).map(a=>a.uid===uid?dd:a).concat((PV.list||[]).some(a=>a.uid===uid)?[]:[dd])).has(uid)){toast('전투력 차이가 너무 커서 도전할 수 없어요. (내 전투력의 '+pvpCfg().range+'% 이상인 상대만)');return;}
  const res=simBattle(A,D,Math.floor(rnd()*4294967296)),T=pvpTier(pvpRatio(A.cp,D.cp||0)),C=pvpCfg(),today=dayKey(now());
  const dc=dd.dcap&&dd.dcap.d===today?dd.dcap.n:0,shield=res.win&&dc>=C.cap;/* 오늘 방어로 메달 잃은 횟수가 상한이면 보호막 */
  const wk=sunKey(now()),ea=aEff(mine),ed=aEff(dd),na=Math.max(0,ea.m+(res.win?T[1]:-PVP_LOSE)),nd=Math.max(0,ed.m+(res.win?(shield?0:-T[2]):DEF_WIN));
  if(re){acc.inv.sec_pvp--;ad.pvpRe=(ad.pvpRe||0)+1;if(!(ad.pvpTo||[]).includes(uid))ad.pvpTo=(ad.pvpTo||[]).concat([uid]);}else{ad.pvp=(ad.pvp||0)+1;ad.pvpTo=(ad.pvpTo||[]).concat([uid]);}await save();
  if(res.win)acc.pvpWins=(acc.pvpWins||0)+1;
  await myRef.update({week:wk,medals:na,w:ea.w+(res.win?1:0),l:ea.l+(res.win?0:1),dw:ea.dw,dl:ea.dl});
  await dRef.update({week:wk,medals:nd,w:ed.w,l:ed.l,dw:ed.dw+(res.win?0:1),dl:ed.dl+(res.win?1:0),dcap:{d:today,n:dc+(res.win&&!shield?1:0)}});
  const b={t:Date.now(),week:wk,auid:acc.uid,duid:uid,a:{nick:acc.nick||acc.id,pet:A},d:{nick:dd.nick,pet:D},win:res.win,da:na-ea.m,dd:nd-ed.m,shield:shield?1:0,ma:na,md:nd,hpA:res.hpA,hpD:res.hpD,logS:JSON.stringify(res.log)};
  try{await db.collection('battles').add(b);}catch(e){}
  render();battleAnim(b,'atk');
 }catch(e){toast('대전에 실패했어요: '+(e&&e.message||e));}finally{PV.busy=false;}}
function vArena(){if(!PV.loaded)setTimeout(loadArena,0);if(SO.users==null)setTimeout(loadUsers,0);titleCheck();
 const r=repPet(),me=(PV.list||[]).find(a=>a.uid===acc.uid),e=aEff(me),ad=accDaily(),used=(ad.pvp||0)>=PVP_DAILY,left=Math.max(0,PVP_DAILY-(ad.pvp||0)),tab=SO.tab||'rec';
 const MP='<img class="px mp" src="i/ui2/muhon_pae.png" alt="무혼패">';
 let h='<div class="duel"><div class="dban"><b class="serif">무혼 대전장</b></div><div class="dtop"><span class="dmp">'+MP+'<b>'+e.m+'</b><small>이번 주 무혼패</small></span><span class="dleft"><img src="i/ui2/icon_duel.png" alt=""> 남은 도전 <b>'+left+'/'+PVP_DAILY+'</b></span><span class="dhs"><img src="i/ui2/icon_heart_on.png" alt=""> 오늘 남은 하트 <b>'+(5-heartsToday().length)+'/5</b></span><span class="muted">매주 일요일 오전 6시 무혼패 초기화 (기본 100)</span></div>';
 h+='<div class="dgrid"><div class="dleftcol"><div class="dcaph">나의 대표 환수 <small>· 방어에 나가요</small></div><div class="dcard">';
 if(r){const s=petSnap(r.p);h+='<div class="dc-name serif">'+esc(NAMES[s.no])+'</div><div class="dc-info"><span class="dc-tags">'+elTag(s.el)+'</span><small>'+stN(s)+' · Lv '+s.lv+'</small><small>전투력 <b>'+fmt(s.cp)+'</b></small>'+tPlate(acc.title,1)+'<small class="dc-rec">공격 '+e.w+'승 '+e.l+'패 · 방어 '+e.dw+'승 '+e.dl+'패</small></div><img class="px dc-pet" src="'+img(s.no)+'" alt="">';}
 else h+='<div class="dc-name serif">비어 있음</div><div class="dc-info"><small>[대표 고르기]에서 대표 환수를 정해 주세요.</small></div>';
 h+='</div><button class="btn soft dgo" data-repmodal="1"><img src="i/ui2/icon_go_village.png" alt=""> 대표 고르기</button>';
 if(atkIdx()!==-1){const ai=atkIdx(),rr=repPet();h+='<div class="card dpick"><b>출전 환수</b><div class="slots" style="margin:6px 0 0">'+(rr&&rr.i<0&&!noArena(rr.p.no)?'<button class="slot'+(ai==='rep'?' on':'')+'" data-atk="rep"><img class="px" src="'+img(rr.p.no)+'" alt=""><span><b>'+esc(NAMES[rr.p.no])+' ★대표</b><small>'+elName(ELOF[rr.p.no])+' · 전투력 '+fmt(cp(rr.p))+(rr.p.sick!=null?' · 아픔':'')+'</small></span></button>':'')+acc.slots.map((q,i)=>q?'<button class="slot'+(ai===i?' on':'')+'" data-atk="'+i+'" '+(noArena(q.no)?'disabled title="스타즈렐름·게스트 등급은 대전에 나갈 수 없어요"':'')+'><img class="px" src="'+img(q.no)+'" alt=""><span><b>'+esc(NAMES[q.no])+'</b><small>'+elName(ELOF[q.no])+' · 전투력 '+fmt(cp(q))+(q.sick!=null?' · 아픔':'')+'</small></span></button>':'').join('')+'</div></div>';}
 else h+='<div class="card dpick"><p class="muted" style="margin:0">대전에 나갈 수 있는 환수가 없어요. (스타즈렐름·게스트 등급은 나갈 수 없어요)</p></div>';
 h+='</div><div class="drightcol"><div class="dtabs">'+[['rec','추천 상대','icon_recommend'],['all','전체 유저','icon_users'],['rank','순위','icon_rank'],['log','대전 기록','icon_history']].map(([k,n,ic])=>'<button class="'+(tab===k?'on':'')+'" data-dtab="'+k+'"><img src="i/ui2/'+ic+'.png" alt="">'+n+'</button>').join('')+'<button class="btn soft sm" data-pvprefresh="1" style="margin-left:auto">새로고침</button></div>';
 const users={};(SO.users||[]).forEach(u=>{users[u.uid]=u;});
 const atkEl=atkIdx()!==-1?ELOF[atkPetGet().no]:null;
 const myCp=atkIdx()!==-1&&atkPetGet()?cp(atkPetGet()):0,allow=pvpAllowed(myCp,PV.list);
 const fightBtn=a=>{if(!r||atkIdx()<0||!a.pet)return '';if(!allow.has(a.uid))return '<button class="btn soft sm dbtn" disabled title="내 전투력의 '+pvpCfg().range+'% 미만인 상대예요">너무 약한 상대</button>';const gm=pvpTier(pvpRatio(myCp,a.pet.cp||0))[1];if((ad.pvpTo||[]).includes(a.uid))return (acc.inv.sec_pvp||0)>0?'<button class="btn sm dbtn" data-refight="'+esc(a.uid)+'" '+(PV.busy?'disabled':'')+'><img src="'+ITEMS.sec_pvp.img+'" alt=""> 재도전</button>':'<button class="btn soft sm dbtn" disabled>오늘 도전함</button>';
  if(used)return (acc.inv.sec_pvp||0)>0?'<button class="btn sm dbtn" data-refight="'+esc(a.uid)+'" '+(PV.busy?'disabled':'')+'><img src="'+ITEMS.sec_pvp.img+'" alt=""> 추가 도전</button>':'';return '<button class="btn sm dbtn" data-fight="'+esc(a.uid)+'" '+(PV.busy?'disabled':'')+'><img src="i/ui2/icon_duel.png" alt=""> 도전 <small class="dgain">+'+gm+'</small></button>';};
 const rowH=(uid,a,extra,rk)=>{const u=users[uid]||{},pet=a&&a.pet,me2=uid===acc.uid,adv=pet&&atkEl?(isAdv(atkEl,pet.el)?'<span class="advg">상성 유리</span>':isAdv(pet.el,atkEl)?'<span class="advb">상성 불리</span>':''):'';
  return '<div class="drow'+(me2?' me':'')+(rk&&rk<=3?' rk'+rk:'')+'"><div class="dframe">'+(extra||'')+'<div class="dmirror">'+(pet?'<img class="px" src="'+img(pet.no)+'" alt="">':'<img src="i/ui2/icon_users.png" alt="" style="opacity:.6">')+'</div><div class="dinfo"><div class="dname">'+nickT(u.nick||(a&&a.nick)||'?',u.title||(a&&a.title)||null)+'</div><small class="dsub">'+(pet?esc(NAMES[pet.no])+' '+elTag(pet.el)+' '+adv+' · 전투력 '+fmt(pet.cp):'대표 환수 없음')+'</small><small class="dsub">'+(a?MP.replace('class="px mp"','class="px mp sm"')+' '+aEff(a).m+' · ':'')+'<img class="hico" src="i/ui2/icon_heart_on.png" alt=""> '+(u.hearts||0)+'</small></div></div><div class="dbtns">'+(me2?'<span class="muted">나</span>':fightBtn(a||{uid})+(u.vil?'<button class="btn soft sm dbtn" data-visit="'+esc(uid)+'"><img src="i/ui2/icon_visit.png" alt=""> 마을 구경</button>':'')+(u.uid?heartBtn(uid):''))+'</div></div>';};
 const arena={};(PV.list||[]).forEach(a=>{arena[a.uid]=a;});
 if(tab==='rec'){const opp=(PV.list||[]).filter(a=>a.uid!==acc.uid).map(a=>Object.assign({},a,{em:aEff(a).m,ok:allow.has(a.uid)?0:1})).sort((x,y)=>x.ok-y.ok||Math.abs(x.em-e.m)-Math.abs(y.em-e.m)||y.em-x.em).slice(0,10);
  h+=PV.list==null?'<p class="muted">불러오는 중…</p>':opp.length?'<div class="drows">'+opp.map(a=>rowH(a.uid,a)).join('')+'</div>':'<p class="muted">아직 도전할 상대가 없어요.</p>';
  {const C=pvpCfg();h+='<p class="muted dnote pgdesc">약자 보호: 내 전투력의 '+C.range+'% 이상인 상대만 도전할 수 있어요. 비슷하거나 강한 상대를 이길수록 메달을 많이 받아요 ('+C.tiers.map(t=>t[0]>=9999?'그 이상 +'+t[1]:t[0]+'% 미만 +'+t[1]).join(' · ')+'). 방어로 메달을 잃는 건 하루 '+C.cap+'번까지예요.</p>';}
  h+='<p class="muted dnote pgdesc">상성: 나무 → 땅 → 물 → 불 → 쇠 → 나무 (화살표 쪽을 이겨요) · 양과 음은 서로를 이겨요. 상성 유리 피해 ×1.2 · 치명 ×1.6 · 직격은 방어 일부 무시.</p>';}
 if(tab==='all'){const ids=[...new Set((SO.users||[]).map(u=>u.uid).concat((PV.list||[]).map(a=>a.uid)))];ids.sort((x,y)=>((users[y]||{}).hearts||0)-((users[x]||{}).hearts||0));
  h+=SO.users==null?'<p class="muted">불러오는 중…</p>':ids.length?'<div class="drows">'+ids.map(id=>rowH(id,arena[id])).join('')+'</div>':'<p class="muted">아직 유저가 없어요.</p>';}
 if(tab==='rank'){const rank=(PV.list||[]).map(a=>Object.assign({},a,{em:aEff(a).m})).sort((x,y)=>y.em-x.em).slice(0,20);
  h+=rank.length?'<div class="drows">'+rank.map((a,i)=>rowH(a.uid,a,'<div class="drk'+(i<3?' top':'')+'"><img src="i/ui2/'+(i<3?'rank_'+(i+1):'rank_n')+'.png?m3" alt=""><b>'+(i+1)+'</b></div>',i+1)).join('')+'</div>':'<p class="muted">아직 없어요.</p>';}
 if(tab==='log'){h+=PV.logs&&PV.logs.length?'<div class="dlogs">'+PV.logs.map(b=>{const mw=b.role==='atk'?b.win:!b.win,op=b.role==='atk'?b.d:b.a,dm=b.role==='atk'?b.da:b.dd;
   return '<div class="blog"><img class="seal" src="i/ui2/icon_'+(mw?'win':'lose')+'.png" alt="'+(mw?'승리':'패배')+'"><b style="color:'+(mw?'#2e7d3a':'#b02a1f')+'">'+(b.role==='atk'?'공격 ':'방어 ')+(mw?'승리':'패배')+'</b><span style="flex:1">vs '+esc(op.nick)+' <small class="muted">('+esc(NAMES[op.pet.no])+')</small></span><span class="muted">'+(dm>0?'+':'')+dm+'</span><button class="btn soft sm" data-replay="'+esc(b.id)+'">다시 보기</button></div>';}).join('')+'</div>':'<p class="muted">이번 주 기록이 없어요.</p>';}
 return h+'</div></div></div>';}
/* ===== 스킬 스프라이트 (fx/fx_NNN.png, 한 줄 8칸) — 없으면 코드 이펙트로 ===== */
const FXOK={};
function fxUrl(no){return 'fx/fx_'+(isGuest(no)?gidOf(no):String(no).padStart(3,'0'))+'.png?'+IMG_V;}
function fxPreload(nos){nos.forEach(no=>{if(no==null||FXOK[no]!==undefined)return;FXOK[no]=null;const im=new Image();im.onload=()=>{FXOK[no]=true;};im.onerror=()=>{FXOK[no]=false;};im.src=fxUrl(no);});}
function fxSprite(P,sk,box,from,to){if(P.boss||FXOK[P.no]!==true)return null;
 const B=box.getBoundingClientRect(),fa=from.getBoundingClientRect(),ta=to.getBoundingClientRect();
 const ax=fa.left-B.left+fa.width/2,ay=fa.top-B.top+fa.height/2,tx=ta.left-B.left+ta.width/2,ty=ta.top-B.top+ta.height/2,R=Math.min(ta.width,ta.height)/2;
 const L=box.querySelector('#abfx')||box,d=document.createElement('i'),S=Math.max(130,R*2.7),flip=ax>tx;let w=S,h=S,x=tx-S/2,y=ty-S/2,tf='',origin='50% 50%',dur=520;
 if(sk.fx==='pillar'||sk.fx==='thunder'){w=S*.8;h=S*1.6;x=tx-w/2;y=ty+R*.75-h;}
 else if(sk.fx==='beam'){const len=Math.hypot(tx-ax,ty-ay)+R*.6;w=len;h=Math.max(44,R*.9);x=ax;y=ay-h/2;origin='0 50%';tf='rotate('+Math.atan2(ty-ay,tx-ax)+'rad)';dur=480;}
 else if(sk.fx==='wave'){w=S*1.6;h=S*.8;x=tx-w/2;y=ty+R*.6-h;tf=flip?'scaleX(-1)':'';}
 else if(flip&&(sk.fx==='slash'||sk.fx==='claw'||sk.fx==='rain'))tf='scaleX(-1)';
 d.className='fxs';d.style.cssText='left:'+Math.round(x)+'px;top:'+Math.round(y)+'px;width:'+Math.round(w)+'px;height:'+Math.round(h)+'px;background-image:url('+fxUrl(P.no)+');transform-origin:'+origin+';transform:'+tf;L.appendChild(d);
 const a=d.animate([{backgroundPosition:'0% 0'},{backgroundPosition:'100% 0'}],{duration:dur,easing:'steps(8, jump-none)',fill:'forwards'});a.onfinish=()=>d.remove();
 if(sk.fx==='shock'||sk.fx==='rock'){setTimeout(()=>{box.classList.remove('quake');void box.offsetWidth;box.classList.add('quake');},dur*.45);}
 return Math.round(dur*.5);}
function pnm(P){return P.boss?P.name:NAMES[P.no];}
function pim(P){return P.boss?P.img:img(P.no);}
function abPlate(nick,P,id){return '<div class="abp-top"><b>'+esc(pnm(P))+'</b>'+elTag(P.el)+'<small>'+(P.boss?(P.tag||'월드보스'):'Lv '+P.lv)+'</small></div><div class="abp-own">'+(P.boss?esc(P.sub||'흑화한 12지신'):esc(nick)+' · 전투력 '+fmt(P.cp))+'</div><div class="abp-hp"><span>HP</span><div class="abp-tr"><i id="'+id+'"></i></div></div><div class="abp-num" id="'+id+'n"></div>';}
function battleAnim(b,role){const L=document.getElementById('layer'),log=JSON.parse(b.logS||'[]'),A=b.a.pet,D=b.d.pet,boss=b.kind==='boss',tw=b.kind==='tower'||b.kind==='xmas';fxPreload([A.boss?null:A.no,D.boss?null:D.no]);let sp=1,i=0,done=false,alive=true;
 L.innerHTML='<div class="overlay"><div class="abox'+(boss?' bossf':'')+'" role="dialog" aria-label="'+(boss?'월드보스 토벌':'환수 대전')+'"><div class="abf'+(tw?' twbf':'')+'" id="abf"'+(tw&&b.bgUrl?' style="background-image:url('+b.bgUrl+')"':'')+'><div class="abp abp-d">'+abPlate(b.d.nick,D,'hD')+'</div><img class="px abpet abpet-d'+(boss||(tw&&D.big)?' abboss':'')+(D.fb?' twfb':'')+'" id="pD" src="'+pim(D)+'" alt=""><img class="px abpet abpet-a" id="pA" src="'+pim(A)+'" alt=""><div class="abp abp-a">'+abPlate(b.a.nick,A,'hA')+'</div><div id="abfx"></div></div><div class="abmsg" id="abMsg"></div><div class="abbtn" id="abBtns"><button class="btn soft sm" id="abFast">빨리 보기</button><button class="btn soft sm" id="abSkip">결과 바로 보기</button></div></div></div>';
 const $=id=>document.getElementById(id),msg=t=>{const m=$('abMsg');if(m)m.innerHTML=t;},ok=()=>alive&&$('abf');
 const hp=(ha,hd)=>{[['hA',ha,b.hpA],['hD',hd,b.hpD]].forEach(([id,v,m])=>{const e=$(id);if(!e)return;const w=Math.max(0,v/m*100);e.style.width=w+'%';e.style.background=w>50?'#4caf50':w>20?'#f0b429':'#e5484d';$(id+'n').textContent=fmt(Math.ceil(v))+' / '+fmt(m);});};
 const num=(target,txt,cls)=>{const t=$(target),f=$('abfx');if(!t||!f)return;const box=$('abf').getBoundingClientRect(),r=t.getBoundingClientRect();const n=document.createElement('div');n.className='abdmg '+(cls||'');n.textContent=txt;n.style.left=(r.left-box.left+r.width/2)+'px';n.style.top=(r.top-box.top+6)+'px';f.appendChild(n);setTimeout(()=>n.remove(),1000);};
 hp(b.hpA0!=null?b.hpA0:b.hpA,b.hpD0!=null?b.hpD0:b.hpD);
 msg(tw?'<b>'+esc(b.lbl)+'</b> · '+esc(pnm(A))+'이(가) <b>'+esc(pnm(D))+'</b>에게 맞선다!':boss?'<b>'+esc(b.a.nick)+'</b>의 '+esc(pnm(A))+'이(가) 월드보스 <b>'+esc(pnm(D))+'</b>에게 맞선다!':'<b>'+esc(b.a.nick)+'</b>의 '+esc(pnm(A))+'이(가) <b>'+esc(b.d.nick)+'</b>의 '+esc(pnm(D))+'에게 도전했다!');
 function finish(quick){if(done||!ok())return;done=true;const last=log[log.length-1]||[0,0,0,0,0,b.hpA,b.hpD];hp(last[5],last[6]);
  if(last[6]<=0)$('pD').classList.add('faint');if(last[5]<=0)$('pA').classList.add('faint');
  if(boss)msg(last[6]<=0?'<b style="color:#c8281e">'+esc(pnm(D))+'</b>이(가) 쓰러졌다! 토벌 성공!':last[5]<=0?esc(pnm(A))+'이(가) 쓰러졌다…':'공격 시간이 끝났다! '+esc(pnm(A))+'이(가) 물러난다.');
  else if(tw)msg(b.win?'<b style="color:#ffd36e">'+esc(pnm(D))+'</b>을(를) 쓰러뜨렸다!':esc(pnm(A))+'이(가) 쓰러졌다…');
  else msg((last[5]>0&&last[6]>0?'시간 초과! 남은 체력 비율이 높은 쪽이 이겼어요. ':'')+'<b>'+esc(b.win?b.a.nick:b.d.nick)+'</b>의 승리!');
  const bt=$('abBtns');if(bt)bt.innerHTML='';
  setTimeout(()=>{if(!ok())return;const res=document.createElement('div');res.className='abres';
   if(tw){SFX.play(b.win?'fanfare':'sad');res.innerHTML='<span class="serif" style="font-size:36px;font-weight:700;color:'+(b.win?'#ffd36e':'#c9d8d5')+'">'+(b.win?esc(b.wtxt):'쓰러졌어요…')+'</span>'+(b.win&&b.reward?'<div style="color:#e8fff8;font-size:16px">'+esc(b.rlbl||'보상')+': <b style="color:#ffd36e">'+esc(b.reward)+'</b></div>':'')+(b.win?'':'<div style="color:#e8fff8;font-size:15px">'+esc(pnm(A))+'은(는) 이번 등반에서 쉬어야 해요.</div>')+'<small style="color:#c9d8d5">'+(b.endTxt||(b.ended?'출전할 환수가 없어 도전이 끝났어요.':b.win?'다음 화면에서 보상을 하나 골라요.':'남은 환수 '+b.left+'마리로 계속 도전할 수 있어요.'))+'</small><button class="btn" id="abOk" style="background:#f0c75e;margin-top:8px">확인</button>';}
   else if(boss){SFX.play(b.killed?'fanfare':'ok');res.innerHTML='<span class="serif" style="font-size:34px;font-weight:700;color:#ffd36e">'+(b.killed?'토벌 성공!':'공격 완료')+'</span><div style="color:#e8fff8;font-size:18px">이번 공격 데미지 <b style="color:#ffd36e;font-size:30px">'+fmt(b.dealt)+'</b></div><small style="color:#c9d8d5">내 누적 데미지 '+fmt(b.myTotal)+' · 남은 보스 체력 '+fmt(Math.max(0,last[6]))+'</small><button class="btn" id="abOk" style="background:#f0c75e;margin-top:8px">확인</button>';}
   else{const meWin=role==='atk'?b.win:!b.win,delta=role==='atk'?b.da:b.dd,total=role==='atk'?b.ma:b.md;SFX.play(meWin?'fanfare':'sad');
    res.innerHTML='<span class="serif" style="font-size:40px;font-weight:700;color:'+(meWin?'#ffd36e':'#c9d8d5')+'">'+(meWin?'승리!':'패배…')+'</span><div style="display:flex;align-items:center;gap:10px;justify-content:center"><img class="px" src="i/ui2/muhon_pae.png" alt="" width="56" height="56"><b style="font-size:28px;color:'+(delta>=0?'#ffd36e':'#ff8a7a')+'">'+(delta>=0?'+':'')+delta+'</b><span style="color:#e8fff8">→ 무혼패 '+total+'</span></div><small style="color:#c9d8d5">'+(role==='atk'?'공격':'방어')+' 기록 · '+new Date(b.t).toLocaleString('ko-KR')+'</small><button class="btn" id="abOk" style="background:#f0c75e;margin-top:8px">확인</button>';}
   document.querySelector('.abox').appendChild(res);$('abOk').onclick=()=>{alive=false;closeLayer();if(tw)render();else if(boss)loadBoss();else if(role==='atk')loadArena();};},quick?150:700);}
 function step(){if(done||!ok())return;if(i>=log.length)return finish();const [w,dmg,crit,miss,adv,ha,hd]=log[i++],P=w?D:A,T=w?'pA':'pD',me=w?'pD':'pA',sk=skillOf(P),pc=(PAL[sk.pal]||PAL.fire)[2];
  msg((tw&&w?'':esc(w?b.d.nick:b.a.nick)+'의 ')+esc(pnm(P))+'의 <b style="color:'+pc+'">'+esc(sk.n)+'</b>!');
  const actor=$(me);actor.classList.remove('lunge-a','lunge-d');void actor.offsetWidth;actor.classList.add(w?'lunge-d':'lunge-a');
  let hitAt=320;try{const hs=fxSprite(P,sk,$('abf'),actor,$(T));hitAt=hs!=null?hs:skillFx(sk,$('abf'),actor,$(T));}catch(e){}
  setTimeout(()=>{if(done||!ok())return;const base=$('abMsg').innerHTML;
   if(miss){num(T,'빗나감','miss');SFX.play('nope');msg(base+' 하지만 빗나갔다!');}
   else{const t=$(T);t.classList.remove('shake');void t.offsetWidth;t.classList.add('shake');num(T,'-'+fmt(dmg),crit?'crit':adv?'adv':'');SFX.play(crit?'up':'clank');hp(ha,hd);
    msg(base+(crit?' <b style="color:#ffd36e">치명타!</b>':'')+(adv?' <b style="color:#7cf0a0">효과가 굉장했다!</b>':''));}
   setTimeout(step,Math.round(850/sp));},Math.round(hitAt/sp));}
 $('abFast').onclick=()=>{sp=sp>1?1:3;$('abFast').textContent=sp>1?'보통 속도':'빨리 보기';};
 $('abSkip').onclick=()=>finish(true);
 SFX.play('whoosh');if(tw&&D.big){const f=$('abfx');if(f){const c=document.createElement('div');c.className='twcut';c.innerHTML='<small>'+esc(b.cut||'수문장')+'</small><b>'+esc(pnm(D))+'</b>';f.appendChild(c);setTimeout(()=>c.remove(),1900);}SFX.play('thud');setTimeout(step,2000);}else setTimeout(step,1300);}
function replay(id){const b=(PV.logs||[]).find(x=>x.id===id);if(b)battleAnim(b,b.role);}


/* ================= 고유 스킬 · 도트 이펙트 ================= */
// fx 기본형: ball(구체) burst(폭발) slash(베기) claw(할퀴기) bite(물기) pillar(기둥) beam(광선) wave(파도) vortex(소용돌이) thunder(번개) spike(가시) rain(낙하) shock(충격파) orbs(연속구) ice(얼음) vine(덩굴) rock(바위)
const PAL={yang:['#ffffff','#fff2a8','#ffb030','#e07a10'],yin:['#efe6ff','#b49cff','#6a4ad0','#241046'],neutral:['#ffffff','#e0e0ea','#9a9aae','#4a4a5a'],fire:['#fff2a8','#ffb030','#e5484d','#8e1f1a'],water:['#e8fbff','#7cc8ff','#3b8beb','#1b4f96'],wood:['#e9ffd8','#9fe08f','#3fa34d','#1f6b2b'],earth:['#fff0d0','#f0c98a','#c9822b','#7a4512'],metal:['#ffffff','#ffe58a','#d4a20a','#8a6a04'],
 dark:['#e6dcff','#a57ce8','#5a2f99','#1e0b3a'],holy:['#ffffff','#fff6c8','#ffd36e','#f0a020'],ice:['#ffffff','#d8f6ff','#8ad8ff','#3a8ad8'],thunder:['#ffffff','#fff27a','#ffd000','#7a5af0'],blood:['#ffd6d6','#ff6a6a','#c8102e','#5a0010'],petal:['#fff0fa','#ffb3e0','#c86ad8','#6a2a8a']};
const SK_REMAP={"80": 146, "81": 147, "82": 148, "83": 149, "84": 150, "85": 151, "86": 155, "87": 156, "88": 157, "89": 158, "90": 159, "91": 160, "92": 152, "93": 153, "94": 154, "95": 161, "96": 162, "97": 163, "98": 164, "99": 165, "100": 166, "101": 167, "102": 168, "103": 169, "104": 170, "105": 174, "106": 175, "107": 176, "108": 177, "109": 178, "110": 179, "111": 171, "112": 172, "113": 173, "114": 180, "115": 181, "116": 182, "117": 183, "118": 184, "119": 185, "120": 186, "121": 187, "122": 188, "123": 189, "124": 190, "125": 191, "126": 192, "127": 193, "128": 194, "129": 195, "130": 196, "131": 197, "132": 198, "133": 199, "134": 200, "135": 201, "136": 202, "137": 203, "138": 204, "139": 205, "140": 206, "141": 207, "142": 208, "143": 209, "144": 210, "145": 211, "146": 212, "147": 213, "148": 214, "149": 215, "150": 216, "151": 217, "152": 218, "153": 219, "154": 220, "155": 221, "156": 222, "157": 223, "158": 224, "159": 225, "160": 226, "161": 227, "162": 228, "163": 229, "164": 230, "165": 231, "166": 232, "167": 233, "168": 234, "169": 235, "170": 236, "171": 237, "172": 238, "173": 239, "174": 240, "175": 241, "176": 242, "177": 243, "178": 244, "179": 245, "180": 246, "181": 247, "182": 248, "183": 249, "184": 250, "185": 251, "186": 252, "187": 253, "188": 254, "189": 255, "190": 256, "191": 257, "192": 258, "193": 259, "194": 260, "195": 261, "196": 262, "197": 263, "198": 264, "199": 265, "200": 266, "201": 267, "202": 268, "203": 269, "204": 270, "205": 271, "206": 272, "207": 273, "208": 274, "209": 275, "210": 276, "211": 277, "212": 278, "213": 279, "214": 280, "215": 281};
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
 ['음양 구르기','shock','neutral'],['음양 방울','orbs','neutral'],['일광 세례','pillar','yang'],['햇살 씨앗탄','ball','yang'],['열풍 회오리','vortex','yang'],['양기 포효','shock','yang'],['질풍 할퀴기','claw','wood'],['광풍참','slash','wood'],['악풍 깃칼','rain','wood'],['폭풍 낙뢰','thunder','thunder'],['파멸의 돌풍','vortex','wood'],['흉풍 멸천','vortex','dark'],['양기 발톱','claw','yang'],['태양 맹호참','slash','yang'],['일양 천강','pillar','yang'],['철턱 깨물기','bite','fire'],['포식의 아가리','bite','fire'],['탐욕의 불꽃','burst','fire'],['폭식 짓밟기','shock','fire'],['무한 포식','vortex','fire'],['도철 탐천','bite','dark'],['월광 세례','pillar','yin'],['그림자 씨앗탄','ball','yin'],['심연 물방울','orbs','yin'],['음기 포효','shock','yin'],['기류 물줄기','beam','water'],['몽환 안개','vortex','water'],['와류 해일','wave','water'],['심연 낙인','pillar','yin'],['혼세 파도','wave','yin'],['혼돈 붕괴','vortex','dark'],['음영 브레스','beam','yin'],['심음 소용돌이','vortex','yin'],['태음 월광포','beam','yin'],['철완 강타','shock','metal'],['분노 할퀴기','claw','metal'],['파쇄 낙석','rock','metal'],['불굴 돌진','slash','metal'],['광폭 난무','claw','blood'],['도올 패천','shock','dark'],['화요 불꽃','burst','fire'],['불씨 쪼기','bite','fire'],['화계 깃불','rain','fire'],['염화 신조탄','pillar','fire'],['불꽃 물기','bite','fire'],['열화 질주','wave','fire'],['홍련 포효','burst','fire'],['수요 물방울','orbs','water'],['물방울 독니','bite','water'],['수류 휘감기','vine','water'],['벽수 해일','wave','water'],['이슬 박치기','shock','water'],['수연 안개','vortex','water'],['천수 빙우','ice','ice'],['목요 새싹탄','ball','wood'],['가지 휘두르기','slash','wood'],['거목 내려찍기','rock','wood'],['울목 덩굴창','spike','wood'],['새싹 발차기','shock','wood'],['수목 꽃잎','vine','petal'],['청목 월광참','slash','wood'],['금요 쇳가루','rain','metal'],['철니 물기','bite','metal'],['강철 할퀴기','claw','metal'],['금속 낫베기','slash','metal'],['철뿔 박치기','shock','metal'],['청동 돌진','wave','metal'],['철갑 지진','rock','metal'],['토요 흙탄','ball','earth'],['흙먼지 질주','wave','earth'],['대지 발굽','shock','earth'],['후토 융기','spike','earth'],['흙돼지 돌진','shock','earth'],['대지 엄니','bite','earth'],['지덕 산사태','rock','earth'],
 ['방울 굴리기','shock','fire'],['눈꽃 흩뿌리기','rain','ice'],['눈송이 바람','wave','ice'],['눈덩이 굴리기','ball','water'],['당근코 박치기','shock','ice'],['목도리 휘감기','wave','fire'],['눈꽃 결정탄','orbs','ice'],['서리 마법','beam','ice'],['얼음 왕관의 칙령','pillar','ice'],['신사의 인사','shock','ice'],['산타모자 눈폭탄','ball','fire'],['큰 눈사태','pillar','ice'],['겹눈 굴리기','ball','ice'],['눈눈눈 탑쌓기','pillar','ice'],['성탄의 대설','rain','holy'],['네모 눈벽돌','shock','ice'],['얼음 결정 박치기','spike','ice'],['고드름 낙하','rain','ice'],['혹한의 숨결','ice','ice'],['겨울밤 오로라','beam','yin'],['서리 장난','vortex','yin'],['장난감 나팔','shock','fire'],['리본 선물탄','ball','fire'],['빨간모자 돌진','slash','fire'],['아기 산타의 종','orbs','fire'],['상자 박치기','shock','earth'],['선물 산사태','burst','fire'],['깜짝 상자','burst','fire'],['굴뚝 재 뿌리기','vortex','earth'],['한별 선물','orbs','holy'],['두별 선물','orbs','holy'],['세별 선물','pillar','holy'],['겨울별 축복','rain','holy'],['산타의 썰매 행차','burst','yang'],['졸음 자장가','wave','water'],['눈토끼 뜀박질','shock','ice'],['여우 눈보라','vortex','ice'],['북극곰 앞발','claw','ice'],['예티 포효','burst','ice'],['크람푸스의 채찍','slash','yin'],['잔가지 찌르기','spike','wood'],['나뭇잎 회오리','vortex','wood'],['리스 휘감기','wave','wood'],['트리 별빛','pillar','holy'],['나무 조각칼','slash','wood'],['장난감 총검','spike','metal'],['호두 깨기','shock','metal'],['종소리','shock','metal'],['징글벨 울림','orbs','metal'],['캐롤 합창','wave','holy'],['성탄 대종','pillar','metal'],['반죽 던지기','ball','earth'],['진저 박치기','shock','earth'],['진저 왕의 지팡이','slash','earth'],['아기 뿔치기','shock','earth'],['반짝 코빛','beam','fire'],['썰매 돌진','slash','earth'],['루돌프의 빛나는 코','beam','holy'],['흰 뿔 찌르기','spike','ice'],['얼음꽃 개화','orbs','ice'],['설화의 뿔빛','pillar','ice']
].map(([n,fx,pal])=>({n,fx,pal}));
// 옛 도감 번호(음양 80~154 · 성탄 155~215) → 새 번호로 옮기기
{const OLD=SKILLS.slice();SKILLS.length=0;OLD.forEach((v,o)=>{const n=SK_REMAP[o]!=null?SK_REMAP[o]:(o<80?o:null);if(n!=null)SKILLS[n]=v;});}
const S1SK={'s1-00':['캡슐 착륙','shock','fire'],'s1-01':['꼬마 별 손짓','orbs','yin'],'s1-02':['물개 유령 버블','vortex','yin'],
 's1-03':['은하 빙결 사격','beam','ice'],'s1-04':['혜성 눈덩이','ball','ice'],
 's1-05':['솔라 넝쿨 앵커','vine','wood'],'s1-06':['광합성 안테나 빔','beam','yang'],
 's1-07':['로켓 부스터 펀치','burst','fire'],'s1-08':['혜성꼬리 불꽃 회전','vortex','fire'],
 's1-09':['행성 씨앗 투척','ball','wood'],'s1-10':['성운 뿌리 감기','vine','wood'],
 's1-11':['월광 중력장','orbs','yin'],'s1-12':['달토끼 크레이터 점프','shock','yin'],
 's1-13':['선플레어 고글 플래시','pillar','yang'],'s1-14':['새알심 유성우','rain','yang'],
 's1-15':['운석 낙하 호출','rock','earth'],'s1-16':['공룡 크레이터 쿵','shock','earth'],
 's1-17':['로즈골드 별 수리검','slash','metal'],'s1-18':['반짝 위성 공전','orbs','metal'],
 's1-19':['은하 해류 베기','slash','water'],'s1-20':['조개 물방울 포','wave','water']};
Object.entries(S1SK).forEach(([id,[n,fx,pal]])=>{SKILLS[gno(id)]={n,fx,pal};});
const S2SK={'s2-00':['알 데굴데굴','shock','fire'],'s2-01':['말랑 유령 돌진','vortex','yang'],'s2-02':['눈송이 솜주먹','ice','ice'],'s2-03':['풀숲 모자 기습','rain','wood'],'s2-04':['여우꼬리 불춤','burst','fire'],'s2-05':['워낭 박치기','shock','metal'],'s2-06':['은빛 뿔 콩콩','spike','metal'],'s2-07':['와플 내려찍기','rock','earth'],'s2-08':['크레용 별 낙서','orbs','yang'],'s2-09':['몽글 거품방울','orbs','petal'],'s2-10':['도넛 물보라','wave','water'],'s2-11':['밤하늘 목도리','vine','dark']};
Object.entries(S2SK).forEach(([id,[n,fx,pal]])=>{SKILLS[gno(id)]={n,fx,pal};});
Object.entries(DK_SK).forEach(([no,[n,fx,pal]])=>{SKILLS[+no]={n,fx,pal};});
function skillOf(P){if(P.boss)return P.skill||{n:'흑화의 일격',fx:'burst',pal:'dark'};const e0=String(P.el||'fire').split('|')[0],s=SKILLS[P.no]||{n:SKILL[e0]||'일격',fx:'ball'};return{n:s.n,fx:s.fx,pal:s.pal||e0};}
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
// 자동 보정: 첫 보스 체력 = 참여 인원 × 3300 × 7일, 이후 = 직전 보스의 하루 평균 피해 × 7일 × 1.2 · 공격력 400 / 방어력 300에서 보스마다 ×1.15
const BOSS_ROUNDS=10, BOSS_DAILY=1, BOSS_DAYS=7;
// 내린 보스 요약 저장 (자동 보정용)
async function bossSaveLast(c,hits){if(!c)return;const tot=(hits||[]).reduce((s,h)=>s+(h.dmg||0),0);const L={iid:c.iid,no:c.no,k:c.k||0,start:c.start,killed:!!c.killed,killedAt:c.killedAt||Date.now(),tot,n:(hits||[]).length,hp:c.maxHp||c.hp0||0};try{await db.doc('boss/last').set(L);BV.last=L;}catch(e){}}
function bossSuggest(){const c=BV.cur||BV.last,live=!!BV.cur,k=c?(c.k||0)+1:0,hits=BV.hits||[];let hp,why;
 const tot0=live?hits.reduce((s,h)=>s+h.dmg,0):(c?c.tot||0:0);
 if(c&&tot0>0){const tot=tot0,end=c.killed?c.killedAt:Date.now(),days=Math.max(1,(end-c.start)/(24*H));hp=Math.round(tot/days*BOSS_DAYS*1.2/1000)*1000;why=(live?'':'내린 보스 기준 · ')+'직전 보스 하루 평균 피해 '+fmt(tot/days)+' × '+BOSS_DAYS+'일 × 1.2';}
 else{const n=Math.max(1,(AS.list||[]).filter(a=>a.role==='player'&&!a.banned).length);hp=Math.round(n*1700*BOSS_DAYS*.9/1000)*1000;why='참여 예상 '+n+'명 × 1,700 × '+BOSS_DAYS+'일 × 0.9 (대략값 · 정확히는 아래 난이도 계산기)';}
 return{k,hp:Math.max(10000,hp),atk:Math.round(150*Math.pow(1.15,k)),def:Math.round(150*Math.pow(1.15,k)),why};}
const BV={cur:null,hits:null,loaded:false,busy:false,atk:null};
function bossPet(c){const d=BOSSES[c.no-1];return{boss:true,no:c.no,name:d.n,img:'b/'+dexNo(c.no)+'.gif',el:d.el,skill:d.sk,lv:0,cp:0};}
function bossStats(c){return{atk:c.atk,def:c.def!=null?c.def:Math.round(c.atk*.75),eva:c.eva||30,pen:c.pen||30,crit:c.crit||30,el:BOSSES[c.no-1].el};}
function simBoss(A,c,seed){const R=seeded(seed),sa=snapStats(A),bs=bossStats(c);let ha=sa.hp,hd=c.hp,dealt=0;const log=[];
 for(let r=0;r<BOSS_ROUNDS&&ha>0&&hd>0;r++){const a=hitCalc(sa,bs,R),real=Math.min(a.dmg,hd);hd-=real;dealt+=real;log.push([0,a.dmg,a.crit,a.miss,a.adv,ha,hd]);if(hd<=0)break;
  const b=hitCalc(bs,sa,R);ha=Math.max(0,ha-b.dmg);log.push([1,b.dmg,b.crit,b.miss,b.adv,ha,hd]);}
 return{log,dealt,hpA:sa.hp};}
/* ===== 운영자: 현재 보스 난이도 조정 · 난이도 계산기 ===== */
function bossTuneHtml(c){const v=(id,x,w)=>'<input type="number" id="'+id+'" value="'+x+'" style="width:'+w+'px">';
 return '<h3 class="serif" style="margin:14px 0 6px">난이도 조정 (지금 보스)</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end">'
  +'<label class="f">최대 체력'+v('bcMax',c.maxHp,130)+'</label><label class="f">남은 체력'+v('bcHp',c.hp,130)+'</label><label class="f">공격력'+v('bcAtk',c.atk,90)+'</label><label class="f">방어력'+v('bcDef',c.def!=null?c.def:Math.round(c.atk*.75),90)+'</label>'
  +'<button class="btn sm" data-x="bossTune">난이도 적용</button></div><p class="muted" style="margin:6px 0 0">누적 데미지·순위·보상은 그대로 두고 체력·공격력·방어력만 바꿔요. 남은 체력을 0으로 하면 바로 토벌 완료가 돼요.</p>';}
function bossCalcHtml(c){const R=AS.bcalc||{},d=R.days||BOSS_DAYS,per=R.per||BOSS_DAILY,atk=R.atk!=null?R.atk:(c?c.atk:150),def=R.def!=null?R.def:(c?(c.def!=null?c.def:Math.round(c.atk*.75)):150),act=R.act||14;
 let h='<div class="card adm"><h2>난이도 계산기</h2><p class="muted">유저들의 <b>대전 대표 환수</b>로 실제 공격을 수십 번 모의해서, 목표 일수 안에 잡히는 체력을 계산해요.</p>'
  +'<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">보스 공격력<input type="number" id="ccAtk" value="'+atk+'" style="width:90px"></label><label class="f">보스 방어력<input type="number" id="ccDef" value="'+def+'" style="width:90px"></label>'
  +'<label class="f">목표 일수<input type="number" id="ccDays" value="'+d+'" min="1" style="width:70px"></label><label class="f">1인 하루 공격<input type="number" id="ccPer" value="'+per+'" min="1" style="width:70px"></label><label class="f">최근 접속(일)<input type="number" id="ccAct" value="'+act+'" min="1" style="width:70px"></label>'
  +'<button class="btn teal sm" data-x="bossCalc">'+(R.busy?'계산 중…':'추천값 계산')+'</button></div>';
 if(R.res){const r=R.res;h+='<div class="bcalc"><p><b>참여 예상 '+r.n+'명</b> · 대표 환수 전투력 '+fmt(r.cpMin)+' ~ '+fmt(r.cpMax)+' · 1회 평균 '+fmt(r.avg)+' · 하루 합계 <b>'+fmt(r.daily)+'</b></p>'
  +'<table class="t"><tr><th>전투력</th><th>인원</th><th>1회 평균 데미지</th><th>버티는 턴</th></tr>'+r.bands.map(b=>'<tr><td>'+b.k+'</td><td>'+b.n+'</td><td>'+fmt(b.avg)+'</td><td>'+b.turn.toFixed(1)+' / '+BOSS_ROUNDS+'</td></tr>').join('')+'</table>'
  +'<p>추천 <b>최대 체력 '+fmt(r.rec)+'</b> <small class="muted">(하루 합계 × '+r.days+'일 × 0.9 — 빠지는 날 감안)</small>'+(r.recCur!=null?'<br>지금 보스 기준 <b>남은 체력 '+fmt(r.recCur)+'</b> <small class="muted">(남은 '+r.left.toFixed(1)+'일)</small>':'')+'</p>'
  +'<div style="display:flex;gap:8px;flex-wrap:wrap">'+(c?'<button class="btn sm" data-x="bossCalcFill">지금 보스 칸에 넣기</button>':'')+'<button class="btn soft sm" data-x="bossCalcFillNew">소환 칸에 넣기</button></div>'
  +(r.n?'':'<p class="muted">대표 환수가 등록된 유저가 없어요. 유저가 대전 화면에 한 번 들어가면 등록돼요.</p>')+'</div>';}
 return h+'</div>';}
async function bossCalcRun(){const g=id=>+document.getElementById(id).value,atk=Math.max(1,g('ccAtk')),def=Math.max(0,g('ccDef')),days=Math.max(1,g('ccDays')||BOSS_DAYS),per=Math.max(1,g('ccPer')||1),act=Math.max(1,g('ccAct')||14);
 AS.bcalc={atk,def,days,per,act,busy:true,res:(AS.bcalc||{}).res};render();
 try{const q=await db.collection('arena').get(),ok=new Set((AS.list||[]).filter(a=>!a.banned&&a.role!=='admin').map(a=>a.uid)),cut=Date.now()-act*24*H;
  const L=q.docs.map(d=>d.data()).filter(a=>a&&a.pet&&(!ok.size||ok.has(a.uid))&&(a.t||0)>=cut);
  const c=BV.cur,no=c?c.no:(+(document.getElementById('bNo')||{}).value||1),boss={no,hp:1e12,maxHp:1e12,atk,def};
  const rows=L.map((a,i)=>{let t=0,turns=0;for(let s=0;s<40;s++){const r=simBoss(a.pet,boss,i*977+s*31+7);t+=r.dealt;turns+=r.log.filter(x=>x[0]===0).length;}return{cp:a.pet.cp||0,avg:t/40,turn:turns/40};});
  const B=[[0,500],[500,800],[800,1100],[1100,1500],[1500,1e9]],bands=B.map(([lo,hi])=>{const X=rows.filter(r=>r.cp>=lo&&r.cp<hi);return{k:hi>1e8?fmt(lo)+' 이상':fmt(lo)+' ~ '+fmt(hi-1),n:X.length,avg:X.length?Math.round(X.reduce((s,r)=>s+r.avg,0)/X.length):0,turn:X.length?X.reduce((s,r)=>s+r.turn,0)/X.length:0};}).filter(b=>b.n);
  const sum=rows.reduce((s,r)=>s+r.avg,0),daily=Math.round(sum*per),rec=Math.max(1000,Math.round(daily*days*.9/1000)*1000);
  let left=null,recCur=null;if(c&&!c.killed){left=Math.max(.5,days-(Date.now()-c.start)/(24*H));recCur=Math.max(1000,Math.round(daily*left*.9/1000)*1000);}
  const cps=rows.map(r=>r.cp);AS.bcalc={atk,def,days,per,act,res:{n:rows.length,cpMin:cps.length?Math.min(...cps):0,cpMax:cps.length?Math.max(...cps):0,avg:rows.length?Math.round(sum/rows.length):0,daily,rec,recCur,left,days,bands}};
 }catch(e){AS.bcalc.busy=false;toast('계산 실패: '+(e&&e.message||e));}
 AS.bcalc.busy=false;render();}
async function loadBoss(){if(!acc)return;BV.loaded=true;try{const s=await db.doc('boss/current').get();BV.cur=s.exists?s.data():null;if(MODE!=='player'){try{const l=await db.doc('boss/last').get();BV.last=l.exists?l.data():null;}catch(e){}}
  if(BV.cur){const q=await db.collection('bosshits').where('iid','==',BV.cur.iid).get();BV.hits=q.docs.map(d=>gFixDoc(d.data())).sort((a,b)=>b.dmg-a.dmg);}else BV.hits=[];}
 catch(e){BV.cur=BV.cur||null;BV.hits=BV.hits||[];if(MODE==='player')toast('월드보스 정보를 불러오지 못했어요.');}
 if(MODE==='admin'||(view==='boss'&&!document.getElementById('layer').innerHTML))render();}
async function bossAttack(){if(BV.busy)return;const c=BV.cur;if(!c||c.killed)return toast('지금은 공격할 수 있는 보스가 없어요.');const ad=accDaily();if((ad.boss||0)>=BOSS_DAILY+(ad.bossBonus||0))return toast('오늘 공격 횟수를 다 썼어요. 토벌재도전비서로 한 번 더 도전할 수 있어요.');
 const ai=BV.atk!=null&&acc.slots[BV.atk]&&!noArena(acc.slots[BV.atk].no)?BV.atk:acc.slots.findIndex(q=>q&&!noArena(q.no)),ap=acc.slots[ai];if(!ap)return toast(acc.slots.some(q=>q)?'스타즈렐름·게스트 등급은 토벌에 나갈 수 없어요. 다른 환수를 키워 주세요.':'공격할 환수가 없어요.');if(noArena(ap.no))return toast('스타즈렐름·게스트 등급은 토벌에 나갈 수 없어요.');if(ap.sick!=null)return toast('아픈 환수는 토벌에 나갈 수 없어요.');if(ap.train)return toast('수련 중인 환수는 토벌에 나갈 수 없어요.');if(ap.errand)return toast('심부름 중인 환수는 토벌에 나갈 수 없어요.');
 BV.busy=true;try{const ref=db.doc('boss/current'),s=await ref.get();if(!s.exists){toast('보스가 사라졌어요.');return;}const cur=s.data();if(cur.iid!==c.iid||cur.killed){BV.cur=cur;render();toast('이미 토벌된 보스예요.');return;}
  const A=petSnap(ap),res=simBoss(A,cur,Math.floor(rnd()*4294967296));
  ad.boss=(ad.boss||0)+1;await save();
  await ref.incr('hp',-res.dealt);const after=(await ref.get()).data();let killed=false;
  if(after.hp<=0&&!after.killed){await ref.update({hp:0,killed:true,killedAt:Date.now(),killer:acc.nick||acc.id});killed=true;}
  const hRef=db.doc('bosshits/'+cur.iid+'_'+acc.uid),hs=await hRef.get(),old=hs.exists?hs.data():null;const myTotal=(old?old.dmg:0)+res.dealt;
  await hRef.set({iid:cur.iid,uid:acc.uid,nick:acc.nick||acc.id,title:acc.title||null,dmg:myTotal,n:(old?old.n:0)+1,last:Date.now(),best:Math.max(old?old.best||0:0,res.dealt),pet:{no:A.no,st:A.st},gm:1,claimed:old?!!old.claimed:false});
  const D=bossPet(cur);render();
  battleAnim({kind:'boss',t:Date.now(),a:{nick:acc.nick||acc.id,pet:A},d:{nick:D.name,pet:D},hpA:res.hpA,hpD:cur.maxHp,hpD0:cur.hp,logS:JSON.stringify(res.log),dealt:res.dealt,myTotal,killed},'atk');
 }catch(e){toast('공격에 실패했어요: '+(e&&e.message||e));}finally{BV.busy=false;}}
// 보상 우편 만들기 (유저 직접 받기 · 운영자 일괄 발송 공용)
function bossMails(c,uid,hits){const top=(hits||[])[0],mvp=top&&top.uid===uid;const mk=(r,title)=>Object.assign({id:newMailId(),t:Date.now(),from:'월드보스',title,msg:pnm(bossPet(c))+' 토벌 보상이에요.',coins:0,eggs:0,items:{},gear:[]},r||{},{id:newMailId(),title});
 const ms=[];const has=r=>r&&(r.coins||r.eggs||r.yyEggs||Object.keys(r.items||{}).length||(r.gear||[]).length);if(has(c.reward))ms.push(mk(c.reward,'월드보스 토벌 보상'));if(mvp&&has(c.mvpReward))ms.push(mk(c.mvpReward,'월드보스 MVP 보상'));return{ms,mvp};}
// 운영자: 아직 안 받은 참여자에게 우편으로 보내기
async function bossSendUnclaimed(c){if(!c||!c.killed)return{ok:0,fail:0};const snap=await db.collection('bosshits').where('iid','==',c.iid).get();const hits=snap.docs.map(d=>d.data()).sort((x,y)=>y.dmg-x.dmg);let ok=0,fail=0;
 for(const h of hits){if(h.claimed)continue;const{ms}=bossMails(c,h.uid,hits);try{for(const m of ms)await db.doc('accounts/'+h.uid).pushMail(stampMail(Object.assign({},m,{msg:m.msg+' (받지 않은 보상을 우편으로 보내 드려요)'})));await db.doc('bosshits/'+c.iid+'_'+h.uid).update({claimed:true});ok++;}catch(e){fail++;}}
 return{ok,fail};}
async function bossClaim(){const c=BV.cur;if(!c||!c.killed)return;const ref=db.doc('bosshits/'+c.iid+'_'+acc.uid),s=await ref.get();if(!s.exists)return toast('이번 토벌에 참여하지 않았어요.');const h=s.data();if(h.claimed)return toast('이미 보상을 받았어요.');
 const{ms,mvp}=bossMails(c,acc.uid,BV.hits);
 await ref.update({claimed:true});acc.mail=(acc.mail||[]).concat(ms);SFX.play('fanfare');toast(ms.length?'보상을 우편함으로 보냈어요!'+(mvp?' (MVP 보상 포함)':''):'이번 보스에는 설정된 보상이 없어요.');await commit();loadBoss();}
function bossCard(c,hits,admin){if(!c)return '<div class="card" style="text-align:center;padding:36px 16px"><img class="px" src="i/q.png" alt="" style="width:56px;opacity:.5"><p class="muted">지금은 출현한 월드보스가 없어요.'+(admin?'':' 운영자가 보스를 소환하면 알려드릴게요.')+'</p></div>';
 const D=bossPet(c),pct=Math.max(0,c.hp/c.maxHp*100),tot=(hits||[]).reduce((s,h)=>s+h.dmg,0);
 return '<div class="card bossc'+(c.killed?' dead':'')+'"><div class="bossimg"><img class="px" src="'+D.img+'" alt="">'+(c.killed?'<span class="bossdead">討伐</span>':'')+'</div><div class="bossinfo"><small class="muted">12지신 · '+BOSSES[c.no-1].a+'</small><b class="serif" style="font-size:26px">'+esc(D.name)+'</b><div>'+elTag(D.el)+' <span class="muted">고유기: '+esc(D.skill.n)+' · 공격력 '+fmt(c.atk)+' · 방어력 '+fmt(bossStats(c).def)+'</span></div>'+
  '<div class="bosshp"><i style="width:'+pct+'%"></i><span>'+fmt(c.hp)+' / '+fmt(c.maxHp)+' ('+pct.toFixed(1)+'%)</span></div><small class="muted">'+(c.killed?'토벌 완료 · 마지막 일격 '+esc(c.killer||'')+' · '+new Date(c.killedAt).toLocaleString('ko-KR'):'출현 '+new Date(c.start).toLocaleString('ko-KR')+' · 참여 '+(hits||[]).length+'명 · 누적 데미지 '+fmt(tot))+'</small>'+
  '<div class="mchips" style="margin-top:6px"><span class="muted" style="font-size:12px;align-self:center">참여 보상</span>'+(mailParts(c.reward||{}).length?mailIcons(c.reward):'<span class="muted" style="font-size:12px">없음</span>')+'</div>'+
  (mailParts(c.mvpReward||{}).length?'<div class="mchips" style="margin-top:4px"><span class="muted" style="font-size:12px;align-self:center">MVP(누적 1위)</span>'+mailIcons(c.mvpReward)+'</div>':'')+'</div></div>';}
function bossRank(c,hits){hits=hits||[];const tot=hits.reduce((s,h)=>s+h.dmg,0)||1,mi=acc?hits.findIndex(h=>h.uid===acc.uid):-1,me=mi>=0?hits[mi]:null;
 const pod=podium(hits.slice(0,3).map(h=>({no:h.pet?h.pet.no:0,nick:h.nick,title:h.title,val:fmt(h.dmg),sub:(h.dmg/tot*100).toFixed(1)+'% · '+h.n+'회',me:!!(acc&&h.uid===acc.uid)})),'pb-boss','MVP');
 let mine='';if(c&&!c.killed||me){if(me){const up=mi>0?hits[mi-1].dmg-me.dmg+1:0;mine='<div class="bmine"><div><small>내 순위</small><b>'+(mi+1)+'위</b></div><div><small>내 누적 데미지</small><b>'+fmt(me.dmg)+'</b></div><div><small>비중</small><b>'+(me.dmg/tot*100).toFixed(1)+'%</b></div><div class="bgoal">'+(mi===0?'<b>👑 지금 MVP예요! 자리를 지켜 주세요.</b>':'<small>'+mi+'위까지</small><b>'+fmt(up)+'</b><small>데미지 더!</small>')+'</div></div>';}
  else mine='<div class="bmine none"><b>아직 공격 기록이 없어요.</b><small>한 번만 공격해도 참여 보상을 받고, 가장 많이 때린 사람은 MVP 보상을 받아요.</small></div>';}
 return '<div class="card twrankc bossrk">'+mine+pod+rankBoard('boss','누적 데미지 순위',['순위','유저','누적 데미지','공격','비중'],'64px minmax(0,2fr) 120px 64px 70px',(hits||[]).map(h=>({me:!!(acc&&h.uid===acc.uid),cells:['<img class="px rkpet" src="'+img(h.pet?h.pet.no:0)+'" alt=""> '+nickT(h.nick,h.title),'<b>'+fmt(h.dmg)+'</b>',h.n+'회',(h.dmg/tot*100).toFixed(1)+'%']})),'아직 공격한 유저가 없어요.')+'</div>';}
function bossRetry(){const ad=accDaily();if((ad.boss||0)<BOSS_DAILY+(ad.bossBonus||0))return toast('아직 공격 기회가 남아 있어요.');if(!take('sec_boss'))return;ad.bossBonus=(ad.bossBonus||0)+1;SFX.play('magic');toast('월드보스 공격 기회가 1번 늘었어요!');commit();}
function vBoss(){if(!BV.loaded)setTimeout(loadBoss,0);const c=BV.cur,ad=accDaily(),lim=BOSS_DAILY+(ad.bossBonus||0),used=(ad.boss||0)>=lim;
 let h='<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div class="pgtitle t-boss serif" style="margin:0">월드보스 토벌</div><span class="muted">하루 '+BOSS_DAILY+'번 공격 (토벌재도전비서로 추가) · 서버 모두가 함께 체력을 깎아요</span></div><div style="margin-top:12px">'+bossCard(c,BV.hits)+'</div>';
 if(c&&!c.killed){const ai=BV.atk!=null&&acc.slots[BV.atk]&&!noArena(acc.slots[BV.atk].no)?BV.atk:acc.slots.findIndex(q=>q&&!noArena(q.no));
  h+='<div class="card"><h2>출전할 환수</h2>'+(ai<0?(acc.slots.some(q=>q)?'<p class="muted">스타즈렐름·게스트 등급은 토벌에 나갈 수 없어요. 출전할 수 있는 환수가 없어요.</p>':'<p class="muted">키우는 환수가 없어요.</p>'):'<div class="slots" style="margin:0">'+acc.slots.map((q,i)=>{if(!q)return '';if(noArena(q.no))return '<button class="slot" disabled style="opacity:.45"><img class="px" src="'+img(q.no)+'" alt=""><span><b>'+esc(NAMES[q.no])+'</b><small>스타즈렐름·게스트 등급은 토벌 불가</small></span></button>';const el=ELOF[q.no],a=isAdv(el,BOSSES[c.no-1].el)?'<span class="advg">상성 유리</span>':isAdv(BOSSES[c.no-1].el,el)?'<span class="advb">상성 불리</span>':'';
   return '<button class="slot'+(ai===i?' on':'')+'" data-batk="'+i+'"><img class="px" src="'+img(q.no)+'" alt=""><span><b>'+esc(NAMES[q.no])+' '+a+'</b><small>'+elName(el)+' · 전투력 '+fmt(cp(q))+(q.sick!=null?' · 아픔':q.train?' · 수련 중':'')+'</small></span></button>';}).join('')+'</div>')+
   '<div style="display:flex;gap:10px;align-items:center;margin-top:12px;flex-wrap:wrap"><button class="btn teal" data-bossgo="1" style="min-height:48px;font-size:17px" '+(used||ai<0||BV.busy?'disabled':'')+'>'+(used?'오늘 공격 완료':'공격하기 ('+(lim-(ad.boss||0))+'/'+lim+')')+'</button>'+(used?'<button class="btn sm" data-bossretry="1" '+((acc.inv.sec_boss||0)?'':'disabled')+'><img class="px" src="i/sec_boss.gif" alt="" style="width:22px;height:22px;vertical-align:-6px"> 토벌재도전비서 사용 (보유 '+(acc.inv.sec_boss||0)+')</button>':'')+'<span class="muted">한 번에 최대 '+BOSS_ROUNDS+'번 공격해요. 체력이 0이 되면 그 자리에서 물러나요. 단계가 낮으면 보스에게 금방 쓰러져요.</span></div></div>';}
 if(c&&c.killed){const mine=(BV.hits||[]).find(x=>x.uid===acc.uid);h+='<div class="card" style="text-align:center">'+(mine?(mine.claimed?'<p class="muted">토벌 보상을 이미 받았어요.</p>':'<p>토벌에 참여했어요! 보상을 받으세요.</p><button class="btn" data-bossclaim="1" style="background:#f0c75e">토벌 보상 받기</button>'):'<p class="muted">이번 토벌에는 참여하지 않았어요.</p>')+'</div>';}
 h+=bossRank(c,BV.hits);return h;}
// 운영자: 월드보스 관리
function aBoss(){const c=BV.cur;if(!BV.loaded)setTimeout(loadBoss,0);const main=isMain();
 const sel=AS.bossNo||(c?c.no:1),i=sel-1,SG=bossSuggest();
 let h='<div class="card adm"><h2>현재 월드보스</h2>'+bossCard(c,BV.hits,true)+(c?'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn soft sm" data-x="bossReload">새로고침</button>'+(main?'<button class="btn soft sm" data-x="bossHeal">체력 가득 채우기</button><button class="btn red sm" data-x="bossEnd">보스 내리기</button>':'')+'</div>':'')+(c&&main?bossTuneHtml(c):'')+'</div>';
 h+=bossCalcHtml(c);
 h+='<div class="card adm"><h2>월드보스 지정 · 소환</h2><p class="muted">새로 소환하면 지금 보스와 누적 기록이 새 회차로 바뀌어요. (이전 회차 기록은 남아 있어요)</p><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">보스<select id="bNo">'+BOSSES.map((d,k)=>'<option value="'+(k+1)+'"'+(k===i?' selected':'')+'>'+(k+1)+'. '+d.n+' ('+d.a+' · '+ELK[d.el]+')</option>').join('')+'</select></label><label class="f">체력<input type="number" id="bHp" value="'+SG.hp+'" style="width:130px"></label><label class="f">공격력<input type="number" id="bAtk" value="'+SG.atk+'" style="width:90px"></label><label class="f">방어력<input type="number" id="bDef" value="'+SG.def+'" style="width:90px"></label><button class="btn soft sm" data-x="bossPreset">자동 보정값</button></div>'+
  '<div class="bosspreview"><img class="px" src="b/'+String(sel).padStart(2,'0')+'.gif" alt=""><span class="muted">자동 보정값: '+esc(SG.why)+' (목표 '+BOSS_DAYS+'일 토벌) · '+(SG.k+1)+'번째 보스 공격력·방어력 ×1.15<sup>'+SG.k+'</sup></span></div>'+
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


/* ================= 선계 심부름 (10분~12시간 · 하루 10번) ================= */
const IMG_V='4';
// [이름, 분, 환수코인 범위, 기운 개수 범위, 일반 장비 확률, 고급 장비 확률]
const ERR=[['아랫마을 장터',10,[1,2],[1,1],0,0],['대숲 오솔길',30,[2,4],[1,2],.01,0],['구름 고갯길',60,[4,6],[2,3],.02,0],['연화 나루터',120,[6,9],[3,4],.04,.005],['선계 상단 행렬',240,[9,13],[4,6],.06,.015],['천상 약초원',480,[14,20],[6,9],.08,.03],['별무리 하늘길',720,[18,26],[8,12],.10,.05]]
 .map((a,i)=>({n:a[0],min:a[1],c:a[2],k:a[3],g0:a[4],g1:a[5],img:'m/e'+a[1]+'.webp'}));
const ERRAND_DAILY=10;
/* 심부름충전비서(운영자 지급): 오늘 심부름 횟수 +1 */
function errRefill(){const ad=accDaily();if(!(ad.errand>0))return toast('아직 심부름 횟수가 가득해요.');if(!take('sec_errand'))return;ad.errand=Math.max(0,ad.errand-1);SFX.play('magic');toast('심부름 횟수가 1번 충전됐어요! (남은 '+(ERRAND_DAILY-ad.errand)+'번)');commit();}
const rr=([a,b])=>a+Math.floor(rnd()*(b-a+1));
function errCut(p){return gearSum(p).bell.errand/100;}
function finishErrand(p){const m=ERR[p.errand.m],coins=rr(m.c),kn=rr(m.k),ki={};for(let j=0;j<kn;j++){const k=GAUGES[Math.floor(rnd()*6)];ki[k]=(ki[k]||0)+1;}
 /* 보상은 유저가 [받기]를 눌러야 들어감 (pend) · 여러 마리가 동시에 끝나도 각자 결과가 남음 */
 const gear=[],r=rnd();if(r<m.g1)gear.push(gearNew(GT[Math.floor(rnd()*GT.length)],1));else if(r<m.g1+m.g0)gear.push(gearNew(GT[Math.floor(rnd()*GT.length)],0));
 p.errandResult={m:p.errand.m,coins,ki,gobj:gear,pend:1};const et=p.errand.end||now();p.errand=null;const d=daily(p,et);if(autoOn(p)&&d.sleep<2&&!p.sleep){p.sleep=et+8*H;d.sleep++;}}
function sendErrand(m){const p=P();if(!guard(p))return;if(p.sick!=null)return toast('아파서 심부름을 갈 수 없어요.');if(p.st<2)return toast('알은 심부름을 갈 수 없어요. 부화한 뒤에 보내 주세요.');
 const ad=accDaily();if((ad.errand||0)>=ERRAND_DAILY)return toast('오늘 심부름 횟수를 다 썼어요 (하루 '+ERRAND_DAILY+'번).');
 ad.errand=(ad.errand||0)+1;const ms=ERR[m].min*MIN*(1-errCut(p));p.errand={m,start:now(),end:now()+ms};SFX.play('whoosh');toast(NAMES[p.no]+'이(가) '+ERR[m].n+'(으)로 심부름을 떠났어요.');commit();}
// 결과는 보따리로: 10분~1시간 일반 · 2~4시간 상급 · 8~12시간 최상급 보따리. 보상 하나당 보따리 하나
const BAGS=[{n:'일반 보따리',img:'i/bag1.png?b3'},{n:'상급 보따리',img:'i/bag2.png?b3'},{n:'최상급 보따리',img:'i/bag3.png?b3'}];
const errTier=m=>m>=5?2:m>=3?1:0;
function errItems(r){const L=[{img:'i/ui/icon_coin.png',n:'환수코인',c:r.coins}];Object.entries(r.ki||{}).forEach(([k,n])=>L.push({img:ITEMS[KI[k]].img,n:ITEMS[KI[k]].n,c:n}));(r.gear||[]).forEach(u=>{const g=gearOf(u);if(g)L.push({img:gearImg(g),n:gearName(g),c:1,gear:g.g});});(r.gobj||[]).forEach(g=>L.push({img:gearImg(g),n:gearName(g),c:1,gear:g.g}));return L;}
function errClaim(p){const r=p.errandResult;if(!r)return;if(r.pend){acc.coins+=r.coins||0;Object.entries(r.ki||{}).forEach(([k,n])=>{acc.inv[KI[k]]=(acc.inv[KI[k]]||0)+n;});(r.gobj||[]).forEach(g=>acc.gear.push(g));}p.errandResult=null;}
/* 완료된 결과 목록 (유저가 직접 열어봄) */
function doneList(){const L=[];acc.slots.forEach((p,i)=>{if(!p)return;if(p.errandResult)L.push({k:'err',i});if(p.result)L.push({k:'tr',i});});return L;}
function doneBar(){const L=doneList();if(!L.length)return '';return '<div class="donebar">'+L.map(d=>{const p=acc.slots[d.i];return '<button class="donec" data-showres="'+d.k+':'+d.i+'"><img class="px" src="'+img(p.no)+'" alt=""><span><b>'+esc(NAMES[p.no])+'</b><small>'+(d.k==='err'?'심부름 완료 · 보상 받기':'수련 완료 · 결과 보기')+'</small></span></button>';}).join('')+'</div>';}
function errandOverlay(){const R=S.resShow;if(!R||R.k!=='err')return '';const i=R.i;if(!acc.slots[i]||!acc.slots[i].errandResult){S.resShow=null;return '';}const p=acc.slots[i],r=p.errandResult,m=ERR[r.m],t=errTier(r.m),L=errItems(r);
 return '<div class="overlay"><div class="modal errres" role="dialog" aria-label="심부름 결과" style="background-image:linear-gradient(180deg,rgba(14,26,30,.82),rgba(14,26,30,.95)),url('+m.img+');background-size:cover"><span style="font-size:12px;color:#f0c75e;letter-spacing:2px">'+esc(m.n)+' 심부름 완료</span><img class="px" src="'+img(p.no)+'" alt="" width="80" height="80" style="object-fit:contain"><b class="serif" style="font-size:20px;color:#fff8e6">'+esc(NAMES[p.no])+'이(가) '+BAGS[t].n+'를 '+L.length+'개 들고 왔어요!</b>'+
 '<div class="bagrow">'+L.map((x,k)=>{const tt=x.gear!=null?2:t;return '<button class="bagb t'+tt+'" data-bagopen="'+k+'" title="'+esc(BAGS[t].n)+'"><img class="px bimg" src="'+BAGS[t].img+'" alt=""><small>'+(x.gear!=null?'반짝이는 ':'')+BAGS[t].n+'</small><span class="bagc"><img class="px" src="'+x.img+'" alt=""><b>×'+x.c+'</b><i>'+esc(x.n)+'</i></span></button>';}).join('')+'</div>'+
 '<span class="muted" id="bagHint" style="color:#c9d8d5">보따리를 눌러 열어 보세요</span>'+
 '<div class="bagsum" id="bagTot" style="display:none">'+L.map(x=>'<span class="bsi"><img class="px" src="'+x.img+'" alt=""><span>'+esc(x.n)+'</span><b>×'+x.c+'</b></span>').join('')+'</div>'+
 '<div class="errfoot"><button class="btn soft" data-bagall="1">모두 열기</button><button class="btn" data-errack="'+i+'" style="background:#f0c75e">받기</button></div></div></div>';}
function bagOpen(btn){if(btn.classList.contains('open'))return;btn.classList.add('open');SFX.play(btn.classList.contains('t2')?'fanfare':btn.classList.contains('t1')?'coins':'buy');
 if(document.querySelectorAll('.bagb:not(.open)').length===0){const e=document.getElementById('bagTot');if(e)e.style.display='';const h=document.getElementById('bagHint');if(h)h.style.display='none';}}
function bagAll(){document.querySelectorAll('.bagb:not(.open)').forEach((b,k)=>setTimeout(()=>bagOpen(b),k*180));}
function vErrand(){const p=P();if(!p)return '<div class="card"><p class="muted">환수를 먼저 골라 주세요.</p></div>';const ad=accDaily(),left=ERRAND_DAILY-(ad.errand||0),cut=errCut(p);
 let h='<div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><div><b class="serif" style="font-size:20px">선계 심부름</b><div class="muted">심부름을 보내면 환수코인·기운(음양 포함)·가끔 장비를 가져와요. 심부름 중에는 수련·돌보기를 할 수 없어요.'+(cut?' · 방울 -'+Math.round(cut*100)+'%':'')+'</div></div><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><b style="color:#2b5a5e">오늘 남은 심부름 '+left+' / '+ERRAND_DAILY+'</b>'+((acc.inv.sec_errand||0)>0?'<button class="btn soft sm errfill" data-errfill="1" '+((ad.errand||0)>0?'':'disabled')+'><img class="px" src="i/sec_errand.gif" alt="">심부름충전비서 사용 ('+acc.inv.sec_errand+')</button>':'')+'</div></div>';
 if(p.errand)h+='<div class="card errnow"><b>'+esc(NAMES[p.no])+' · '+esc(ERR[p.errand.m].n)+' 심부름 중</b><div class="stat" style="margin:4px 0"><div class="tr"><i style="width:'+Math.min(100,(now()-p.errand.start)/(p.errand.end-p.errand.start)*100)+'%;background:linear-gradient(90deg,#c9822b,#f0c98a)"></i></div></div><span class="muted">남은 시간 '+fmtDur(p.errand.end-now())+'</span></div>';
 h+='<div class="errgrid">'+ERR.map((m,k)=>'<div class="errc"><div class="errbg" style="background-image:url('+m.img+')"><span class="errt">'+durTxt(m.min)+'</span></div><div class="errb"><b class="serif" style="font-size:17px">'+esc(m.n)+'</b><small class="muted">환수코인 '+m.c.join('~')+' · 기운 '+m.k.join('~')+'개'+(m.g0?' · 일반 장비 '+(m.g0*100)+'%':'')+(m.g1?' · 고급 장비 '+(m.g1*100)+'%':'')+'</small>'+
  '<button class="btn teal" data-errand="'+k+'" '+(p.errand||p.train||p.sleep||p.sick!=null||p.st<2||left<=0?'disabled':'')+'>'+(p.errand?'심부름 중':p.train?'수련 중':p.sleep?'자는 중':p.sick!=null?'아파서 못 가요':p.st<2?'알은 못 가요':left<=0?'오늘 횟수 끝':'심부름 보내기')+'</button></div></div>').join('')+'</div>';
 const others=acc.slots.map((q,i)=>q&&q.errand&&i!==sel?'<div style="display:flex;gap:8px;align-items:center;margin:4px 0"><img class="px" src="'+img(q.no)+'" alt="" width="36" height="36" style="object-fit:contain"><b>'+esc(NAMES[q.no])+'</b><span class="muted">'+esc(ERR[q.errand.m].n)+' · '+fmtDur(q.errand.end-now())+'</span></div>':'').join('');
 if(others)h+='<div class="card"><h2>다른 환수 심부름</h2>'+others+'</div>';
 return h;}
/* ================= 환수 야바위 (하루 1번) ================= */
/* 놀아주기 = 환수 야바위: 환수마다 하루 1번 호감도 +10, 환수코인 보상은 하루 1번 */
const YB_REWARD=5;
function ybStart(p){const ad=accDaily();if(!p)return;const d=daily(p);if(d.play)return;d.play=1;addAff(p,10);save();
 const L=document.getElementById('layer'),X=[18,50,82];let slot=[0,1,2],hid=Math.floor(rnd()*3),phase='show';
 L.innerHTML='<div class="overlay"><div class="ybox">'+pgHead('yb')+'<div class="ystage" id="yst"><img class="px ypet" id="ypet" src="'+img(p.no)+'" alt="" style="left:'+X[hid]+'%">'+[0,1,2].map(k=>'<div class="ycup" id="yc'+k+'" data-cup="'+k+'" style="left:'+X[k]+'%"></div>').join('')+'</div><div class="ymsg" id="ymsg">'+esc(NAMES[p.no])+'이(가) 그릇 아래로 숨어요!</div><div id="ybtn"></div></div></div>';
 const $=id=>document.getElementById(id),cup=k=>$('yc'+k);
 [0,1,2].forEach(k=>cup(k).classList.add('up'));
 setTimeout(()=>{[0,1,2].forEach(k=>cup(k).classList.remove('up'));SFX.play('thud');setTimeout(()=>{const pe=$('ypet');if(pe)pe.classList.add('hid');},350);},1100);
 const swaps=[];for(let n=0;n<14;n++){const a=Math.floor(rnd()*3);let b=Math.floor(rnd()*2);if(b>=a)b++;swaps.push([a,b]);}
 let n=0;const pet=$('ypet');
 function doSwap(){if(!$('yst'))return;if(n>=swaps.length){phase='pick';$('ymsg').textContent='어느 그릇에 숨었을까? 골라 보세요!';[0,1,2].forEach(k=>cup(k).classList.add('pickable'));return;}
  const [sa,sb]=swaps[n++],ca=slot[sa],cb=slot[sb],dur=Math.max(140,480-n*34);[ca,cb].forEach(c=>{cup(c).style.transition='left '+dur+'ms ease-in-out, transform '+dur+'ms ease-in-out';});
  slot[sa]=cb;slot[sb]=ca;cup(ca).style.left=X[sb]+'%';cup(cb).style.left=X[sa]+'%';cup(ca).style.transform='translate(-50%,-22%)';cup(cb).style.transform='translate(-50%,8%)';
  if(ca===hid||cb===hid){const nh=ca===hid?sb:sa;pet.style.transition='left '+dur+'ms ease-in-out';pet.style.left=X[nh]+'%';}
  SFX.play('tap');setTimeout(()=>{cup(ca).style.transform='';cup(cb).style.transform='';setTimeout(doSwap,60);},dur);}
 setTimeout(()=>{$('ymsg').textContent='섞는 중…';doSwap();},1800);
 $('yst').onclick=ev=>{const c=ev.target.closest('.ycup');if(!c||phase!=='pick')return;phase='done';const k=+c.dataset.cup,win=k===hid;[0,1,2].forEach(q=>{cup(q).classList.remove('pickable');});c.classList.add('up');pet.classList.remove('hid');if(!win)setTimeout(()=>cup(hid).classList.add('up'),500);
  if(win){const gc=!ad.game;if(gc){ad.game=1;acc.coins+=YB_REWARD;}SFX.play('fanfare');$('ymsg').innerHTML='<b style="color:#ffd36e">찾았다!</b> 호감도 +10'+(gc?' · 환수코인 +'+YB_REWARD:'');pet.classList.add('happy');}else{SFX.play('sad');$('ymsg').innerHTML='아쉬워요… 여기 숨어 있었어요! 그래도 즐거웠대요. 호감도 +10';}
  save();$('ybtn').innerHTML='<button class="btn" id="ybOk" style="background:#f0c75e;margin-top:8px">확인</button>';$('ybOk').onclick=()=>{closeLayer();commit();};};}

/* ===== 놀아주기 미니게임 (랜덤) ===== */
const PGAMES={yb:'환수 야바위',catch:'떡 받기',mem:'짝 맞추기',simon:'오행 따라하기'};
function pgHead(k){return '<div class="pghead"><img class="px" src="i/play/play_'+k+'.png?'+IMG_V+'" alt="" onerror="this.style.display=\'none\'"><b class="serif">'+PGAMES[k]+'</b></div>';}
function playStart(p){if(!p)return;const d=daily(p);if(d.play)return;const ks=Object.keys(PGAMES),k=ks[Math.floor(rnd()*ks.length)];
 if(k==='yb')return ybStart(p);d.play=1;addAff(p,10);save();({catch:pgCatch,mem:pgMem,simon:pgSimon})[k](p);}
function pgEnd(p,win,txt){const ad=accDaily(),$=id=>document.getElementById(id);let gc=false;if(win&&!ad.game){ad.game=1;acc.coins+=YB_REWARD;gc=true;}
 SFX.play(win?'fanfare':'sad');if($('ymsg'))$('ymsg').innerHTML=(win?'<b style="color:#ffd36e">'+txt+'</b> 호감도 +10'+(gc?' · 환수코인 +'+YB_REWARD:''):txt+' 그래도 즐거웠대요. 호감도 +10');
 const pe=$('ypet');if(pe&&win)pe.classList.add('happy');save();if($('ybtn')){$('ybtn').innerHTML='<button class="btn" id="ybOk" style="background:#f0c75e;margin-top:8px">확인</button>';$('ybOk').onclick=()=>{closeLayer();commit();};}}
/* 떡 받기: 20초 동안 떨어지는 먹이를 바구니로 받기 (12개 이상이면 성공, 돌은 -2) */
function pgCatch(p){const L=document.getElementById('layer'),GOAL=12,TIME=20000,goods=['food_1','food_2','food_3','food_4','food_5'].filter(k=>ITEMS[k]).map(k=>ITEMS[k].img);if(!goods.length)goods.push('i/act_feed.png');
 L.innerHTML='<div class="overlay"><div class="ybox">'+pgHead('catch')+'<div class="pgst cst" id="cst"><img class="px pgbg" src="i/play/catch_bg.png?'+IMG_V+'" alt="" onerror="this.src=\'i/yb_bg.png\'"><img class="px ypet cpet" id="ypet" src="'+img(p.no)+'" alt=""><img class="px cbask" id="cbask" src="i/play/catch_basket.png?'+IMG_V+'" alt="" onerror="this.src=\'i/bag1.png\'"><div class="chud"><span>받은 개수 <b id="csc">0</b> / '+GOAL+'</span><span>남은 시간 <b id="ctm">20</b>초</span></div></div><div class="ymsg" id="ymsg">'+esc(NAMES[p.no])+'이(가) 떡을 던져 줘요! 바구니를 좌우로 움직여 받으세요 (마우스·손가락·←→)</div><div id="ybtn"></div></div></div>';
 const st=document.getElementById('cst'),bk=document.getElementById('cbask');let bx=50,score=0,items=[],t0=performance.now()+1500,last=t0,spawnT=t0,done=false;
 const setX=x=>{bx=Math.max(8,Math.min(92,x));bk.style.left=bx+'%';};setX(50);
 st.onpointermove=e=>{const r=st.getBoundingClientRect();setX((e.clientX-r.left)/r.width*100);};st.onpointerdown=st.onpointermove;
 const key=e=>{if(e.key==='ArrowLeft')setX(bx-7);if(e.key==='ArrowRight')setX(bx+7);};addEventListener('keydown',key);
 function spawn(){const bad=rnd()<.22,el=document.createElement('img');el.className='px citem'+(bad?' bad':'');el.src=bad?'i/play/catch_bad.png?'+IMG_V:goods[Math.floor(rnd()*goods.length)];if(bad)el.onerror=()=>{el.onerror=null;el.src='i/q.png';};
  const it={x:8+rnd()*84,y:-8,v:22+rnd()*14+(performance.now()-t0)/1000*1.6,bad,el};el.style.left=it.x+'%';st.appendChild(el);items.push(it);}
 function tick(now){if(done||!document.getElementById('cst')){removeEventListener('keydown',key);return;}const dt=Math.min(.05,(now-last)/1000);last=now;
  if(now<t0){requestAnimationFrame(tick);return;}const left=Math.max(0,TIME-(now-t0));document.getElementById('ctm').textContent=Math.ceil(left/1000);
  if(now>=spawnT){spawn();spawnT=now+Math.max(330,700-(now-t0)/40);}
  items=items.filter(it=>{it.y+=it.v*dt;it.el.style.top=it.y+'%';if(it.y>=78&&it.y<=90&&Math.abs(it.x-bx)<9){it.el.remove();if(it.bad){score=Math.max(0,score-2);SFX.play('thud');bk.classList.add('ouch');setTimeout(()=>bk.classList.remove('ouch'),250);}else{score++;SFX.play('tap');}document.getElementById('csc').textContent=score;return false;}if(it.y>100){it.el.remove();return false;}return true;});
  if(left<=0){done=true;removeEventListener('keydown',key);items.forEach(it=>it.el.remove());pgEnd(p,score>=GOAL,score>=GOAL?score+'개나 받았어요!':score+'개… 조금 모자랐어요.');return;}
  requestAnimationFrame(tick);}
 requestAnimationFrame(tick);}
/* 짝 맞추기: 카드 8장(4쌍), 틀려도 5번까지 */
function pgMem(p){const L=document.getElementById('layer'),pool=['ki_fire','ki_water','ki_wood','ki_earth','ki_metal','ki_yy'].filter(k=>ITEMS[k]).sort(()=>rnd()-.5).slice(0,4),deck=pool.concat(pool).sort(()=>rnd()-.5),MAXM=5;
 L.innerHTML='<div class="overlay"><div class="ybox">'+pgHead('mem')+'<div class="pgst mst"><div class="mgrid" id="mgr">'+deck.map((k,i)=>'<button class="mcard" data-mi="'+i+'"><span class="mb"><img class="px" src="i/play/mem_back.png?'+IMG_V+'" alt="" onerror="this.style.display=\'none\'"></span><span class="mf"><img class="px" src="'+ITEMS[k].img+'" alt=""></span></button>').join('')+'</div></div><div class="ymsg" id="ymsg">같은 기운 카드 두 장을 찾아 주세요! 남은 실수 <b id="mmis">'+MAXM+'</b></div><div id="ybtn"><img class="px ypet mpet" id="ypet" src="'+img(p.no)+'" alt=""></div></div></div>';
 let open=[],matched=0,miss=0,lock=true,done=false;const cards=[...document.querySelectorAll('.mcard')];
 cards.forEach(c=>c.classList.add('fl'));setTimeout(()=>{cards.forEach(c=>c.classList.remove('fl'));lock=false;},1600);
 document.getElementById('mgr').onclick=e=>{const c=e.target.closest('.mcard');if(!c||lock||done||c.classList.contains('fl'))return;c.classList.add('fl');SFX.play('tap');open.push(c);if(open.length<2)return;
  const [a,b]=open;open=[];if(deck[+a.dataset.mi]===deck[+b.dataset.mi]){a.classList.add('ok');b.classList.add('ok');matched++;if(matched===pool.length){done=true;pgEnd(p,true,'전부 맞혔어요!');}}
  else{miss++;document.getElementById('mmis').textContent=Math.max(0,MAXM-miss);lock=true;setTimeout(()=>{a.classList.remove('fl');b.classList.remove('fl');lock=false;if(miss>=MAXM&&!done){done=true;cards.forEach(c=>c.classList.add('fl'));pgEnd(p,false,'실수를 다 썼어요…');}},650);}};}
/* 오행 따라하기: 환수가 보여 주는 순서를 그대로 누르기 (3→4→5개) */
function pgSimon(p){const L=document.getElementById('layer'),EL5=['fire','water','wood','earth','metal'].filter(e=>ITEMS[KI[e]]);
 L.innerHTML='<div class="overlay"><div class="ybox">'+pgHead('simon')+'<div class="pgst sst"><img class="px pgbg" src="i/play/simon_bg.png?'+IMG_V+'" alt="" onerror="this.src=\'i/yb_bg.png\'"><img class="px ypet spet" id="ypet" src="'+img(p.no)+'" alt=""><div class="srow" id="srow">'+EL5.map(e=>'<button class="sbtn" data-se="'+e+'" disabled><img class="px" src="'+ITEMS[KI[e]].img+'" alt=""><small>'+ELK[e]+'</small></button>').join('')+'</div></div><div class="ymsg" id="ymsg">'+esc(NAMES[p.no])+'이(가) 오행 순서를 보여 줘요. 잘 보고 따라 눌러 주세요!</div><div id="ybtn"></div></div></div>';
 const seq=[];let inp=0,round=0,done=false;const bt=e=>document.querySelector('.sbtn[data-se="'+e+'"]'),all=()=>[...document.querySelectorAll('.sbtn')];
 const flash=(e,ms)=>{const b=bt(e);if(!b)return;b.classList.add('lit');SFX.play('tap');setTimeout(()=>b.classList.remove('lit'),ms);};
 function next(){if(!document.getElementById('srow'))return;round++;const want=round+2;while(seq.length<want)seq.push(EL5[Math.floor(rnd()*EL5.length)]);inp=0;all().forEach(b=>b.disabled=true);document.getElementById('ymsg').textContent=round+'단계 · 잘 보세요! ('+want+'개)';
  const gap=Math.max(420,700-round*90);seq.forEach((e,i)=>setTimeout(()=>flash(e,gap-120),600+i*gap));setTimeout(()=>{if(done)return;all().forEach(b=>b.disabled=false);document.getElementById('ymsg').textContent='이제 따라 눌러 보세요! ('+want+'개)';},600+seq.length*gap);}
 document.getElementById('srow').onclick=e=>{const b=e.target.closest('.sbtn');if(!b||b.disabled||done)return;const v=b.dataset.se;flash(v,220);
  if(v!==seq[inp]){done=true;all().forEach(x=>x.disabled=true);setTimeout(()=>flash(seq[inp],600),300);pgEnd(p,false,'앗, 순서가 달랐어요… ('+round+'단계)');return;}
  inp++;if(inp>=seq.length){all().forEach(x=>x.disabled=true);if(round>=3){done=true;pgEnd(p,true,'3단계 모두 성공!');}else setTimeout(next,700);}};
 setTimeout(next,900);}
function resultOverlay(){const R=S.resShow;if(!R||R.k!=='tr')return '';const i=R.i;if(!acc.slots[i]||!acc.slots[i].result){S.resShow=null;return '';}const p=acc.slots[i];let res='';{const r=p.result;SFX.once(i+'|'+r.spot+'|'+r.exp+'|'+r.lvTo+'|'+r.out,r.out);if(r.lvTo>r.lvFrom)setTimeout(()=>SFX.play('lvup'),0);const EL_=r.encs||(r.enc?[r.enc]:[]);EL_.forEach((k,j)=>setTimeout(()=>SFX.play({luck:'coins',egg:'egg',gear:'equip',kifind:'magic',susluck:'magic',blesssec:'up'}[k]||'heal'),900+j*600));const encN={bless:'성수의 축복 (경험치 ×1.5)',luck:'뜻밖의 행운 (환수코인 +'+r.coins+')',snack:'선녀의 간식 (포만감·목마름 +30)',lost:'길 잃은 기운 (무작위 오행 게이지 +1)',kifind:'기운 무더기 ('+(r.kiK?ELK[r.kiK]:'')+'의 기운 +3)',dosa:'도사의 집중수련 (레벨 +1)',egg:'환수 알 발견! ('+(r.eggBag?'가방에 보관했어요':'빈 슬롯에 알이 들어왔어요')+')',gear:'떠돌이 장비 (일반 '+(TN[r.gearT]||'장비')+' 획득)',secret:'비기 발견 (즉시완료비서 +1)',susluck:'수상한 행운 ('+(ITEMS[r.susK]?ITEMS[r.susK].n:'수상한 기운')+' +1)',blesssec:'축복비서 발견 (강화축복비서 +1)'};
  res='<div class="overlay"><div class="modal" role="dialog" aria-label="수련 결과" style="'+(r.m!=null&&TMAP[r.m]?'background-image:linear-gradient(180deg,rgba(14,26,30,.82),rgba(14,26,30,.95)),url('+TMAP[r.m].img+');background-size:cover':'')+'"><span style="font-size:12px;color:#f0c75e;letter-spacing:2px">'+esc(r.spot)+' 수련 결과</span><span class="serif" style="font-size:34px;font-weight:700;color:'+(r.out==='fail'?'#c9d8d5':'#ffd36e')+'">'+{fail:'실패…',ok:'성공',great:'대성공!'}[r.out]+'</span><img class="px" src="'+img(p.no)+'" alt="" width="96" height="96" style="object-fit:contain">'+(EL_.length>1?'<span style="color:#ffd36e;font-weight:700">✨ 인카운트 '+EL_.length+'개 동시 발생!</span>':'')+EL_.map(k=>'<div class="chip" style="background:rgba(255,255,255,.08);border:1px solid rgba(240,199,94,.5);color:#fff8e6">인카운트 · '+encN[k]+'</div>').join('')+(r.noExp?'<span style="color:#ff8a7a;font-size:13px">전투력 차이가 너무 커서 경험치를 얻지 못했어요</span>':'')+'<b style="font-size:22px">+'+fmt(r.exp)+' EXP</b><span class="muted" style="color:#c9d8d5">Lv '+r.lvFrom+' → '+r.lvTo+(r.max?' (MAX)':'')+'</span><button class="btn" data-ack="'+i+'" style="background:#f0c75e">확인</button></div></div>';}return res;}

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
 /* 기본 배경음악: snd/bgm_main.mp3 (테마섬 배경음이 나올 때는 잠시 멈춤) */
 let BGA=null,bgHold=0;
 function bgmEl(){if(!BGA){BGA=new Audio('snd/bgm_main.mp3?'+(typeof IMG_V!=='undefined'?IMG_V:''));BGA.loop=true;BGA.volume=.3;BGA.preload='auto';}return BGA;}
 function startBgm(){bgT=1;if(bgHold||document.hidden)return;const a=bgmEl();if(a.paused)a.play().catch(()=>{});}
 function stopBgm(){bgT=null;if(BGA)BGA.pause();}
 function bgmHold(on){bgHold=on?1:0;if(on){if(BGA)BGA.pause();}else if(st.bgm&&MODE==='player')startBgm();}
 document.addEventListener('visibilitychange',()=>{if(!BGA)return;if(document.hidden)BGA.pause();else if(st.bgm&&bgT&&!bgHold)BGA.play().catch(()=>{});});
 function toggle(k){st[k]=!st[k];try{localStorage.setItem('hs_'+k,st[k]?'1':'0');}catch(e){}if(!init())return;const g=k==='sfx'?fx:bg;g.gain.setTargetAtTime(st[k]?1:0,ctx.currentTime,.05);if(k==='bgm'){if(st.bgm)startBgm();else stopBgm();}if(k==='sfx'&&st.sfx)S.tap();}
 function nopeMaybe(){if(performance.now()-last>200)play('nope');}
 function once(key,k){if(key===lastKey)return;lastKey=key;setTimeout(()=>play(k),0);}
 return {play,evoBlip,toggle,init,st,nopeMaybe,once,bgmHold};
})();
document.addEventListener('pointerdown',()=>{if(MODE==='player')SFX.init();},{capture:true});
let HS=null, unsubMe=null;
function normAcc(d){const a=gMigrate(JSON.parse(JSON.stringify(d)));a.notice=a.notice||[null,null,null];a.gear=a.gear||[];a.inv=a.inv||{};a.dex=a.dex||{};a.slots=a.slots||[null,null,null];a.mail=a.mail||[];delete a.bench;
 {const seen=new Set();a.gear=a.gear.filter(g=>g&&g.t&&TN[g.t]);a.gear.forEach(g=>{if(!g.u||seen.has(g.u))g.u=uid36('g');seen.add(g.u);if(g.g==null)g.g=0;if(g.p==null)g.p=0;if(g.t==='n'){if(!NG_OPT[g.o])g.o='def';if(g.r==null)g.r=Math.random();ngFill(g);}if(g.t==='b'){if(!BELL[g.k])g.k='prod';if(g.r==null)g.r=Math.random();}});}
 a.gsp=a.gsp||{};a.gsp.s1=a.gsp.s1||[];a.gsp.s2=a.gsp.s2||[];a.vil=a.vil||null;
 a.slots.concat(a.gsp.s1,a.gsp.s2,(a.vil&&a.vil.pets)||[]).forEach(p=>{if(!p)return;p.eq=Object.assign({w:null,a:null,s:null,n:null,b:null},p.eq||{});if(!p.g){p.g=newGauge();p.gT=newGauge();}p.gT=p.gT||newGauge();p.star=p.star||0;p.acc=p.acc||{roll:0,low:0};if(p.aff==null)p.aff=10;delete p.el;delete p.elT;delete p.lock;if(!FORMS[p.no]){p.no=0;p.st=1;}});
 a.offset=0;return a;}
/* 화면 갱신: 통째로 갈아끼우지 않고 바뀐 부분만 고친다 → 모바일 깜빡임·메뉴 가로 스크롤 초기화 방지 */
function patchHTML(root,html,full){if(full||!root.firstChild){const nav=document.querySelector('header nav.main'),nl=nav?nav.scrollLeft:0;root.innerHTML=html;const n2=document.querySelector('header nav.main');if(n2&&nl)n2.scrollLeft=nl;return;}
 const t=document.createElement('template');t.innerHTML=html;morphKids(root,t.content);}
const isKeep=n=>n.nodeType===1&&n.hasAttribute('data-keep');
function morphKids(a,b){const A=[...a.childNodes].filter(n=>!isKeep(n)),B=[...b.childNodes];for(let i=0;i<B.length;i++){const nb=B[i],na=A[i];if(!na){a.appendChild(nb.cloneNode(true));continue;}morphNode(na,nb);}for(let i=B.length;i<A.length;i++)A[i].remove();}
function morphNode(na,nb){if(na.nodeType!==nb.nodeType||na.nodeName!==nb.nodeName||(na.nodeType===1&&(na.id!==nb.id))){na.replaceWith(nb.cloneNode(true));return;}
 if(na.nodeType===3||na.nodeType===8){if(na.nodeValue!==nb.nodeValue)na.nodeValue=nb.nodeValue;return;}
 if(na.nodeType!==1)return;const tag=na.nodeName;
 if(tag==='CANVAS'&&na.dataset.keep)return;
 const AA=na.attributes,BA=nb.attributes;for(let k=AA.length-1;k>=0;k--){const n=AA[k].name;if(!nb.hasAttribute(n))na.removeAttribute(n);}
 for(let k=0;k<BA.length;k++){const {name,value}=BA[k];if(na.getAttribute(name)!==value)na.setAttribute(name,value);}
 if(tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'){if(document.activeElement!==na){if(na.type==='checkbox'||na.type==='radio')na.checked=nb.hasAttribute('checked');else if(tag!=='SELECT'&&na.value!==(nb.getAttribute('value')||nb.textContent||''))na.value=nb.getAttribute('value')||(tag==='TEXTAREA'?nb.textContent:'');}if(tag!=='SELECT'&&tag!=='TEXTAREA')return;}
 morphKids(na,nb);
 if(tag==='SELECT'&&document.activeElement!==na){const sel=nb.querySelector('option[selected]');if(sel)na.value=sel.value;}}
/* 운영자 마을 미리보기: 다시 그려도 보던 위치 유지, 처음엔 섬 가운데로 */
function admVvScroll(osc){const e=document.querySelector('.admvv');if(!e)return;const id=AS.tgt&&AS.tgt.uid;
 if(osc&&osc[2]===id){e.scrollLeft=osc[0];e.scrollTop=osc[1];return;}const vs=e.querySelector('.vsize'),w=vs?vs.offsetWidth:e.scrollWidth,h=vs?vs.offsetHeight:e.scrollHeight;e.scrollLeft=(w-e.clientWidth)/2;e.scrollTop=(h-e.clientHeight)/2;}
function render(){if(TEST)setTimeout(testBar,0);
 const app=document.getElementById('app');
 if(!acc){app.innerHTML=loginView(S.loginMsg||'');return;}
 if(MODE==='admin'){const ov=document.querySelector('.admvv'),osc=ov?[ov.scrollLeft,ov.scrollTop,AS.tgt&&AS.tgt.uid]:null;app.innerHTML=isAdmin()?adminHeader()+'<main>'+adminBody()+'</main>':'<main><div class="card">운영자 계정이 아니에요. <button class="btn sm" data-a2="logout">로그아웃</button></div></main>';if(isAdmin()){admIcons();admVvScroll(osc);}return;}
 const keep=document.activeElement&&document.activeElement.id;
 const body={village:vVillage,home:vHome,train:vTrainHub,gear:vGear,bag:vBag,shop:vShop,code:vCode,dex:vDex,pvp:vArena,boss:vBoss,tower:vTower,xmas:vXmas,visit:vVisit,guest:vGuest,mail:vMail,support:vSupport,dgn:vDgn,kr:vKr,lotto:vLotto}[view]||vVillage;
 let inner;try{inner=body();}catch(e){console.error(e);inner='<div class="card"><b>화면을 그리는 중 문제가 생겼어요.</b><p class="muted">'+esc(String(e&&e.message||e))+'</p><button class="btn sm" data-view="home">환수 화면으로</button></div>';}
 const sv0=document.getElementById('vview'),ks=sv0&&view==='village'?[sv0.scrollLeft,sv0.scrollTop]:null,wy=window.scrollY,same=S._lastView===view;if(!same&&view==='village')S._vEnter=1;S._lastView=view;
 patchHTML(app,header()+'<main class="v-'+view+'">'+inner+'</main>'+resultOverlay()+errandOverlay(),!same);
 if(same){if(ks){const s2=document.getElementById('vview');if(s2){s2.scrollLeft=ks[0];s2.scrollTop=ks[1];}}if(Math.abs(window.scrollY-wy)>1)window.scrollTo(0,wy);}if(view==='village')vFit();decoMount();
 if(keep){const el=document.getElementById(keep);if(el)el.focus();}
}
function loginView(msg){
 const boot=MODE==='admin'&&S.needBoot;
 return '<header class="sky" style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:16px"><div style="display:flex;flex-direction:column;gap:14px;width:min(460px,100%)"><form data-form="login" class="card" style="display:flex;flex-direction:column;gap:12px;border:2px solid var(--gold)"><div style="text-align:center"><h1 style="margin:0"><img src="title.png" alt="starz realm 환수키우기" style="width:100%;height:auto;display:block"></h1>'+(MODE==='admin'?'<p class="serif" style="margin:6px 0 0;font-size:18px;font-weight:700;color:#2b5a5e">운영자 사이트</p>':'')+'</div><label class="f">아이디<input type="text" name="id" autocomplete="username" required></label><label class="f">비밀번호<input type="password" name="pw" autocomplete="current-password" required></label><button class="btn teal" style="min-height:48px">들어가기</button>'+(msg?'<p class="warn" style="margin:0">'+esc(msg)+'</p>':'')+'<p class="muted" style="margin:0">계정은 운영자가 발급해요.</p></form>'+
 (boot?'<form data-form="boot" class="card adm" style="display:flex;flex-direction:column;gap:10px"><b class="serif" style="font-size:18px">첫 메인 운영자 만들기</b><p class="muted" style="margin:0">아직 운영자가 없어요. 처음 한 번만 나오는 화면이에요. 여기서 만든 계정이 메인 운영자가 돼요.</p><label class="f">아이디 (영문·숫자 3~20자)<input type="text" name="id" required></label><label class="f">비밀번호 (6자 이상)<input type="password" name="pw" minlength="6" required></label><label class="f">마크 닉네임<input type="text" name="nick"></label><button class="btn">메인 운영자 만들기</button></form>':'')+'</div></header>';}
function kickModal(){const L=document.getElementById('layer');L.innerHTML='<div class="overlay"><div class="modal" role="dialog" aria-label="다른 기기 접속"><b class="serif" style="font-size:22px;color:#ffd36e">다른 기기에서 접속했어요</b><p style="margin:0">같은 계정이 다른 기기(PC·모바일)에서 열렸어요. 기록이 서로 덮어써지지 않도록 이 화면은 저장을 멈췄어요.</p><p class="muted" style="color:#c9d8d5;margin:0">이 기기에서 계속하면 다른 기기의 화면이 멈추고, 지금 서버에 있는 최신 기록으로 이어서 해요.</p><button class="btn teal" id="kickGo">이 기기에서 계속하기</button></div></div>';document.getElementById('kickGo').onclick=async()=>{try{const d=await db.doc('accounts/'+acc.uid).get();if(d.exists){const uid=acc.uid;acc=normAcc(d.data());acc.uid=uid;vilInit();}}catch(e){}S.kicked=false;closeLayer();tickAll();await save();render();toast('이 기기에서 이어서 해요.');};}
async function loadAccount(uid){
 const d=await db.doc('accounts/'+uid).get();
 if(!d.exists){S.loginMsg='계정 정보가 없어요. 운영자에게 문의하세요.';acc=null;await HS.signOut();return render();}
 if(d.data().banned){S.loginMsg='정지된 계정이에요. 운영자에게 문의하세요.';acc=null;await HS.signOut();return render();}
 acc=normAcc(d.data());acc.uid=uid;S.loginMsg='';S.kicked=false;if(MODE==='player')vilInit();
 if(MODE==='player'){tickAll();try{dgSettle();}catch(e){}render();save();
  arenaKey=null;PV.list=null;PV.logs=null;PV.loaded=false;syncArena();
  {const st=attCheck();if(st){save();render();attModal(true);}passLoad();}
  if(unsubMe)unsubMe();unsubMe=db.doc('accounts/'+uid).onSnapshot(s=>{if(!s.exists||!acc||s.metadata&&s.metadata.hasPendingWrites)return;const r=s.data();if(MODE==='player'&&r.sess&&r.sess!==SESS){if(!S.kicked){S.kicked=true;acc=normAcc(r);acc.uid=uid;vilInit();render();kickModal();}return;}if((r.rev||0)>(acc.rev||0)){if(r.banned){toast('정지된 계정이에요.');return logout();}const before=(acc.mail||[]).length;acc=normAcc(r);acc.uid=uid;vilInit();tickAll();render();if(acc.mail.length>before){SFX.play('egg');toast('우편이 도착했어요! 우편함을 확인해 주세요.');}else toast('계정 정보가 새로 바뀌었어요.');}},()=>{});}
 else{render();if(isAdmin())AD.loadList();}
}
async function logout(){if(unsubMe){unsubMe();unsubMe=null;}acc=null;AS.tgt=null;AS.list=null;try{await HS.signOut();}catch(e){}render();}

/* ================= 구천탑 ================= */
const TW_CAP=3,TW_TOP=100;
const TW_ZONES=[null,
 {n:'구름 문턱',el:'neutral'},{n:'염화 회랑',el:'fire'},{n:'수궁 심연',el:'water'},{n:'고목 숲',el:'wood'},{n:'토우 무덤',el:'earth'},
 {n:'쇠비늘 광산',el:'metal'},{n:'그믐 골짜기',el:'yin'},{n:'금오 제단',el:'yang'},{n:'혼돈의 틈',el:'rand'},{n:'구천 정상',el:'rand'}];
// [키, 이름, 임시그림 환수번호, 스킬이름, fx]
const TW_MON={1:[['m01a','도깨비불',81,'홀림불','orbs'],['m01b','꼬마 도깨비',2,'방망이 장난','shock'],['m01c','구름 쥐',142,'구름 갉기','bite']],
 2:[['m02a','불여우',8,'여우불','ball'],['m02b','화서',142,'불털 돌진','burst'],['m02c','등잔 귀신',121,'등잔불 뿜기','pillar']],
 3:[['m03a','물귀신',1,'끌어당기기','vortex'],['m03b','강철이',26,'물살 휘감기','vine'],['m03c','조개 요괴',41,'진주 쏘기','ball']],
 4:[['m04a','덩굴 요괴',25,'덩굴 채찍','vine'],['m04b','목각승',135,'목탁 내려치기','shock'],['m04c','송진 정령',138,'끈적 송진','rain']],
 5:[['m05a','토우 병사',149,'토우 창찌르기','spike'],['m05b','두억시니',73,'짓누르기','rock'],['m05c','흙두꺼비',45,'진흙 뱉기','ball']],
 6:[['m06a','철갑 지네',31,'철갑 물기','bite'],['m06b','녹슨 갑옷귀',145,'녹슨 칼날','slash'],['m06c','쇠까마귀',16,'쇠깃 쏘기','rain']],
 7:[['m07a','어둑시니',103,'어둠 부풀리기','vortex'],['m07b','그슨대',106,'그림자 손','claw'],['m07c','달그림자',104,'그믐 빛살','beam']],
 8:[['m08a','금빛 허수아비',84,'볕 휘두르기','slash'],['m08b','해무리 정령',83,'햇무리 고리','shock'],['m08c','볕귀신',85,'뙤약볕','beam']],
 9:[['m09a','그림자 환수',0,'그림자 일격','burst']],
 10:[['m10a','천계 수호병',72,'천계 창술','spike'],['m10b','타락한 선녀',113,'찢긴 날개옷','wave']]};
const TW_BOSS={10:['b10','외다리 도깨비 대장',75,'도깨비 방망이','rock'],20:['b20','화마',49,'화마의 불길','pillar'],30:['b30','이무기',35,'역린의 물기둥','wave'],
 40:['b40','장산범',63,'홀리는 울음','shock'],50:['b50','토왕 장군',151,'토왕의 언월도','slash'],60:['b60','불가사리',147,'쇠 삼키기','bite'],
 70:['b70','구미호',8,'아홉 꼬리 여우불','orbs'],80:['b80','삼목신장',94,'제3의 눈','beam'],100:['b100','천마',119,'천마군림','vortex']};
const TW_B90=[['b90a','흑화 주작',24,'검은 불새','pillar','fire'],['b90b','흑화 청룡',40,'흑룡승천','beam','wood'],['b90c','흑화 백호',72,'흑풍 발톱','claw','metal'],['b90d','흑화 현무',56,'검은 해일','wave','water']];
const TW_SHADOW=[7,13,21,27,33,36,46,51,58,61,66,70,75,87,92,96,107,112,115,123,129,136,143,150,153];
const TW_RANDEL=['fire','water','wood','earth','metal','yang','yin'];
// 받은 그림 파일 표시 (그림이 들어오면 키를 추가)
const TW_ART={c_atk_m:1,b10:1,b100:1,b20:1,b30:1,b40:1,b50:1,b60:1,b70:1,b80:1,b90a:1,b90b:1,b90c:1,b90d:1,c_atk_s:1,c_bet:1,c_coin_m:1,c_coin_s:1,c_def_s:1,c_drain:1,c_elem:1,c_first:1,c_fox:1,c_heal_all:1,c_heal_l:1,c_heal_s:1,c_revive:1,c_toad:1,m01a:1,m01b:1,m01c:1,m02a:1,m02b:1,m02c:1,m03a:1,m03b:1,m03c:1,m04a:1,m04b:1,m04c:1,m05a:1,m05b:1,m05c:1,m06a:1,m06b:1,m06c:1,m07a:1,m07b:1,m07c:1,m08a:1,m08b:1,m08c:1,m10a:1,m10b:1,tw_bg01:1,tw_bg02:1,tw_bg03:1,tw_bg04:1,tw_bg05:1,tw_bg06:1,tw_bg07:1,tw_bg08:1,tw_bg09:1,tw_bg10:1,ui_boss_cut:1,ui_card_l:1,ui_card_n:1,ui_card_r:1,ui_fall:1,ui_floor:1,ui_hall:1,ui_hpbar:1,ui_medal1:1,ui_medal2:1,ui_medal3:1,ui_rank:1,ui_ticket:1,ui_tw_banner:1};
function twImg(k,fb){return TW_ART[k]?'t/'+k+'.png?'+IMG_V:fb;}
function twSeason(t){return dayKey(t||now()).slice(0,7);}
function twPrevSeason(){const [y,m]=twSeason().split('-').map(Number);return m===1?(y-1)+'-12':y+'-'+String(m-1).padStart(2,'0');}
function twState(){const s=twSeason();if(!acc.tower||acc.tower.season!==s)acc.tower={season:s,best:0,bestT:0,bestNo:null,run:null};return acc.tower;}
// 구천탑 몬스터: 1층 체력 114·공격 34·방어 21·확률 12 → 100층 9412·2206·1323·72 (구역 n = 3+n단계 기준) · 수문장 체력 ×1.6 공격 ×1.2
const TW_A={hp:[114,9412],atk:[34,2206],def:[21,1323]};
function twMonStat(f,boss){const t=(f-1)/99,r={};for(const k in TW_A){const [a,b]=TW_A[k];r[k]=Math.round(a*Math.pow(b/a,t));}const rr=Math.round(12+60*t);r.eva=rr;r.pen=rr;r.crit=rr;if(boss){r.hp=Math.round(r.hp*1.6);r.atk=Math.round(r.atk*1.2);}return r;}
function twRec(f){return powerOf(twMonStat(f,f%10===0));}
function twZone(f){return Math.min(10,Math.ceil(f/10));}
function twHash(n){let x=(n*2654435761)>>>0;x^=x>>>15;x=Math.imul(x,2246822519)>>>0;x^=x>>>13;return x>>>0;}
function twMon(f){const z=twZone(f),Z=TW_ZONES[z],boss=f%10===0,sea=twSeason();let d,el=Z.el;
 if(boss&&f===90){const b=TW_B90[twHash(f+Number(sea.replace('-','')))%4];d=b;el=b[5];}
 else if(boss)d=TW_BOSS[f];
 else{const L=TW_MON[z];d=L[(f-1)%L.length];}
 if(el==='rand')el=f===100?'yin':TW_RANDEL[(z===10?f:twHash(f*7+3))%7];
 let fb=d[2];if(z===9&&!boss)fb=TW_SHADOW[twHash(f*13+Number(sea.replace('-','')))%TW_SHADOW.length];
 const name=z===9&&!boss?'그림자 '+NAMES[fb]:d[1];
 return{boss:true,tw:1,big:boss,key:d[0],name,img:twImg(d[0],img(fb)),fb:!TW_ART[d[0]],el,cp:twRec(f),lv:f,bs:twMonStat(f,boss),tag:boss?(f===100?'최종 보스':f+'층 수문장'):f+'층',sub:'구천탑 · '+Z.n,skill:{n:d[3],fx:d[4],pal:el==='neutral'?'neutral':el}};}
function twStat(D){return snapStats(D);}
const TW_MAX={atk:.4,taken:-.25,drain:.15};
function twBuff(run){const b={atk:0,taken:0,drain:0,first:0,elem:0};(run.picks||[]).forEach(k=>{const e=TWC[k];if(e&&e.bf)Object.entries(e.bf).forEach(([x,v])=>{b[x]+=v;});});
 b.atk=Math.min(TW_MAX.atk,b.atk);b.taken=Math.max(TW_MAX.taken,b.taken);b.drain=Math.min(TW_MAX.drain,b.drain);b.first=b.first?1:0;b.elem=b.elem?1:0;return b;}
function towerSim(A,ha0,D,bf,seed,hd0){const R=seeded(seed),sa=snapStats(A),sd=twStat(D);let ha=Math.max(1,Math.min(sa.hp,ha0)),hd=hd0!=null?Math.max(1,Math.min(sd.hp,hd0)):sd.hp,hdS=hd,turn=0,first=true;const log=[];
 while(ha>0&&hd>0&&turn<200){const aT=turn%2===0;let m=1;
  if(aT){m*=1+bf.atk;if(first&&bf.first)m*=1.5;first=false;if(bf.elem&&isAdv(sa.el,sd.el))m*=1.15;}else m*=Math.max(.3,1+bf.taken);
  const r=hitCalc(aT?sa:sd,aT?sd:sa,R,m);
  if(aT){hd=Math.max(0,hd-r.dmg);if(bf.drain&&r.dmg)ha=Math.min(sa.hp,ha+Math.round(r.dmg*bf.drain));}else ha=Math.max(0,ha-r.dmg);
  log.push([aT?0:1,r.dmg,r.crit,r.miss,r.adv,ha,hd]);turn++;}
 return{log,win:hd<=0,hpA:sa.hp,hpA0:Math.round(ha0),hpD:sd.hp,hpD0:hdS,ha,hd};}
// 로그라이크 선택지
const TWC={
 heal_s:{n:'선계 약수',r:0,w:10,v:.2,d:'방금 싸운 환수 체력 20% 회복',fb:null},
 heal_all:{n:'주먹밥 보따리',r:0,w:8,v:.1,d:'살아 있는 환수 전원 체력 10% 회복',fb:'i/act_feed.png'},
 atk_s:{n:'날 선 발톱',r:0,w:10,d:'이번 등반 공격력 +5% (최대 +40%)',fb:'eq/0_w.gif',bf:{atk:.05}},
 def_s:{n:'단단한 비늘',r:0,w:10,d:'이번 등반 받는 피해 -4% (최대 -25%)',fb:'eq/0_a.gif',bf:{taken:-.04}},
 coin_s:{n:'환수코인 주머니',r:0,w:3,d:'환수코인 +1',fb:'i/bag1.png'},
 sus_s:{n:'수상한 기운 (소)',r:0,w:4,d:'수상한 기운(소) 1개',fb:null},
 heal_l:{n:'영약 한 모금',r:1,w:10,v:.4,d:'방금 싸운 환수 체력 40% 회복',fb:null},
 drain:{n:'흡혈 부적',r:1,w:6,d:'이번 등반 가한 피해의 3% 회복 (최대 15%)',fb:'i/sec_cure.gif',bf:{drain:.03}},
 first:{n:'선공의 깃털',r:1,w:5,d:'이번 등반 매 전투 첫 공격 피해 1.5배 (중복 안 됨)',fb:'i/act_play.png',bf:{first:1}},
 elem:{n:'오행 공명',r:1,w:5,d:'이번 등반 상성 유리 시 피해 +15% (중복 안 됨)',fb:'i/act_evolve.png',bf:{elem:1}},
 atk_m:{n:'맹수의 송곳니',r:1,w:6,d:'이번 등반 공격력 +10% (최대 +40%)',fb:'eq/1_w.gif',bf:{atk:.1}},
 coin_m:{n:'큰 환수코인 주머니',r:1,w:2,d:'환수코인 +3',fb:'i/bag2.png'},
 sus_m:{n:'수상한 기운 (중)',r:1,w:3,d:'수상한 기운(중) 1개',fb:null},
 revive:{n:'부활초',r:2,w:5,v:.3,d:'쓰러진 환수 1마리를 체력 30%로 부활 (없으면 전원 20% 회복)',fb:'i/act_return.png'},
 fox:{n:'구미호의 구슬',r:2,w:5,d:'이번 등반 공격력 +15%, 받는 피해 +10%',fb:'h/08.gif',bf:{atk:.15,taken:.1}},
 toad:{n:'황금 두꺼비',r:2,w:2,d:'환수코인 +6',fb:'i/bag3.png'},
 t60:{n:'시간단축비서 (1시간)',r:2,w:3,d:'시간단축비서(1시간) 1개',fb:null},
 bet:{n:'도깨비 내기',r:3,w:1,d:'50%: 환수코인 +4 / 50%: 방금 싸운 환수 체력 -25%',fb:'i/yb_cup.png'}};
const TWR=['일반','희귀','전설','특수'],TWRC=['n','r','l','s'];
function twcImg(k){const e=TWC[k],fb=e.fb||({sus_s:ITEMS.sus_s.img,sus_m:ITEMS.sus_m.img,heal_l:ITEMS.elixir.img,heal_s:ITEMS.dew.img,t60:ITEMS.sec_t60.img})[k];return twImg('c_'+k,fb);}
function twRoll(f,run,buffOnly){const out=[],bf=run?twBuff(run):{atk:0,taken:0,drain:0,first:0,elem:0},picks=run&&run.picks||[];
 const ok=k=>{const e=TWC[k];if(out.includes(k))return false;if(buffOnly===true&&(!e.bf||k==='fox'))return false;if(buffOnly==='noloot'&&['coin_s','coin_m','toad','sus_s','sus_m','t60','bet'].includes(k))return false;if(!e.bf)return true;if((k==='first'||k==='elem')&&picks.includes(k))return false;
  if(e.bf.atk>0&&!e.bf.taken&&bf.atk>=TW_MAX.atk)return false;if(e.bf.taken<0&&bf.taken<=TW_MAX.taken)return false;if(e.bf.drain&&bf.drain>=TW_MAX.drain)return false;if(k==='fox'&&bf.atk>=TW_MAX.atk)return false;return true;};
 const pick=r=>{const L=Object.keys(TWC).filter(k=>TWC[k].r===r&&ok(k));if(!L.length)return null;let t=L.reduce((a,k)=>a+TWC[k].w,0)*rnd();for(const k of L){t-=TWC[k].w;if(t<=0)return k;}return L[L.length-1];};
 for(let i=0;i<3;i++){if(!buffOnly&&ok('bet')&&rnd()<.02){out.push('bet');continue;}
  const x=rnd(),r=f%10===0?(x<.15?2:1):(x<.75?0:x<.97?1:2);const k=pick(r)||pick(0)||pick(1)||pick(2);if(k)out.push(k);}
 return out;}
function petKey(q,i){if(!q.born)q.born=Date.now()+i;return String(q.born);}
function twHp(run,q,i){const k=petKey(q,i),v=run.hp[k];return v==null?1:v;}
function twUsable(run){return acc.slots.map((q,i)=>q&&q.sick==null&&!run.down.includes(petKey(q,i))?i:-1).filter(i=>i>=0);}
function twPick(k,run0){const t=run0?null:twState(),run=run0||t.run;if(!run||!run.choice||!run.choice.includes(k))return;const e=TWC[k],last=run.last;let msg=e.n+' 획득!';
 const heal=(key,v)=>{if(key==null||run.down.includes(key))return;run.hp[key]=Math.min(1,(run.hp[key]==null?1:run.hp[key])+v);};
 const alive=()=>acc.slots.map((q,i)=>q?petKey(q,i):null).filter(x=>x&&!run.down.includes(x));
 if(k==='heal_s'||k==='heal_l')heal(last,e.v);if(k==='heal_all')alive().forEach(x=>heal(x,e.v));
 if(k==='coin_s')acc.coins+=1;if(k==='coin_m')acc.coins+=3;if(k==='toad')acc.coins+=6;
 if(k==='sus_s'||k==='sus_m')acc.inv[k]=(acc.inv[k]||0)+1;if(k==='t60')acc.inv.sec_t60=(acc.inv.sec_t60||0)+1;
 if(k==='revive'){const dn=acc.slots.map((q,i)=>q&&run.down.includes(petKey(q,i))?{k:petKey(q,i),c:cp(q)}:null).filter(Boolean).sort((a,b)=>b.c-a.c);
  if(dn.length){run.down=run.down.filter(x=>x!==dn[0].k);run.hp[dn[0].k]=e.v;msg='부활초! '+NAMES[acc.slots.find((q,i)=>q&&petKey(q,i)===dn[0].k).no]+'이(가) 다시 일어났어요.';}else alive().forEach(x=>heal(x,.2));}
 if(k==='bet'){if(rnd()<.5){acc.coins+=4;msg='도깨비 내기 승리! 환수코인 +4';SFX.play('coins');}else{if(last!=null&&!run.down.includes(last))run.hp[last]=Math.max(.01,(run.hp[last]==null?1:run.hp[last])-.25);msg='도깨비 내기 패배… 체력 -25%';SFX.play('sad');}}
 else SFX.play(e.r>=2?'fanfare':'magic');
 if(e.bf)run.picks.push(k);if(run.bless>0){run.bless--;run.choice=run.bless>0?twRoll(1,run,true):null;if(run.choice&&!run.choice.length)run.choice=null;}else run.choice=null;toast(msg);commit();}
function twReward(f){const r={c:0,it:{},g:null,title:null};
 if(f%10===0){const B={10:[15,{sec_t60:1}],20:[15,{},1],30:[20,{sec_t180:1}],40:[20,{sec_bless:1},2],50:[30,{sec_t300:1,sus_l:1}],60:[30,{},3],70:[40,{sec_t480:1,sec_protect:1}],80:[50,{},4],90:[60,{egg_n:1}],100:[100,{egg_yy:1}]}[f];
  r.c=B[0];r.it=Object.assign({},B[1]);if(B[2]!=null)r.g=B[2];if(f===100)r.title='천마를 벤 자';}
 else if(f%5===0){const el=TW_ZONES[twZone(f)].el,ki=EL.includes(el)?'ki_'+el:'ki_yy';const L=[{tal_time:1},{sus_s:2},{[ki]:5},{sec_aff:1},{sus_m:1},{sec_bless:1}];r.it=L[((f/5-1)/2)%L.length];}
 else r.c=f<=30?2:f<=60?3:f<=90?4:6;
 return r;}
function twRewardTxt(r){const a=[];if(r.c)a.push('환수코인 '+r.c);Object.entries(r.it).forEach(([k,n])=>a.push(ITEMS[k].n+(n>1?' ×'+n:'')));if(r.g!=null)a.push(GN[r.g]+' 장비');if(r.title)a.push('칭호 「'+r.title+'」');return a.join(', ');}
function twGive(r){acc.coins+=r.c;Object.entries(r.it).forEach(([k,n])=>{acc.inv[k]=(acc.inv[k]||0)+n;});if(r.g!=null)acc.gear.push({u:'g'+Date.now()+Math.floor(rnd()*1e6),t:['w','a','s'][Math.floor(rnd()*3)],g:r.g,p:0,aff:'fire'});if(r.title){acc.titles=acc.titles||[];if(!acc.titles.includes(r.title))acc.titles.push(r.title);}}
const TV={tab:'climb',rank:null,prev:null,loaded:false,busy:false};
function twTickets(){const d=dayKey(now());if(!acc.twTk){const ad=accDaily();acc.twTk={n:Math.max(0,TW_CAP-(ad.tw||0)+(ad.twx||0)),d};}const k=acc.twTk;if(k.d!==d){const days=Math.max(0,Math.round((Date.parse(d)-Date.parse(k.d))/864e5));if(k.n<TW_CAP)k.n=Math.min(TW_CAP,k.n+days);k.d=d;}
 return{used:0,max:k.n,left:k.n};}
function twStart(){const t=twState();if(t.run)return;if(t.best>=TW_TOP)return toast('이번 시즌 구천탑을 정복했어요!');const k=twTickets();if(k.left<=0)return toast('남은 도전 기회가 없어요. 매일 오전 6시에 1회씩 충전돼요 (최대 '+TW_CAP+'회).');
 if(!acc.slots.some(q=>q&&q.sick==null))return toast('출전할 수 있는 환수가 없어요.');
 acc.twTk.n--;t.run={hp:{},down:[],picks:[],choice:null,last:null,n:0,bless:twBlessN(t.best)};if(t.run.bless)t.run.choice=twRoll(1,t.run,true);SFX.play('mystic');toast('구천탑 등반 시작! '+(t.best+1)+'층으로 올라가요.'+(t.run.bless?' 출발 축복 '+t.run.bless+'개를 골라요.':''));commit();}
function twBlessN(best){return Math.min(3,Math.floor(best/20));}
function twRetreat(){const t=twState();if(!t.run)return;confirmBox('등반 끝내기','지금 등반을 끝낼까요? 다음 도전은 기회 1회를 써서 모든 환수가 체력이 가득 찬 상태로 '+(t.best+1)+'층부터 시작해요.',()=>{t.run=null;SFX.play('wake');commit();});}
function twTicketUse(){const k=twTickets();if(k.left>0)return toast('아직 도전 기회가 남아 있어요.');if(!take('sec_tower'))return;acc.twTk.n++;SFX.play('magic');toast('구천탑 도전 기회 +1');commit();}
async function twSync(){if(!db||!acc||MODE!=='player')return false;const t=twState();if(!t.best)return false;try{await db.doc('tower/'+acc.uid).set({uid:acc.uid,id:acc.id||'',nick:acc.nick||acc.id||'',season:t.season,best:t.best,t:t.bestT||Date.now(),no:t.bestNo==null?null:t.bestNo,gm:1,title:acc.title||null});TV.err=null;return true;}catch(e){TV.err=(e&&(e.code||e.message))||'error';console.warn('twSync',e);return false;}}
async function twFight(i){if(TV.busy)return;const t=twState(),run=t.run,q=acc.slots[i];if(!run)return toast('먼저 도전을 시작해 주세요.');if(run.choice)return toast('먼저 보상을 하나 골라 주세요.');if(!q)return;
 const key=petKey(q,i);if(run.down.includes(key))return toast('쓰러진 환수는 이번 등반에서 나갈 수 없어요.');if(q.sick!=null)return toast('아픈 환수는 나갈 수 없어요.');
 const f=t.best+1;if(f>TW_TOP)return;TV.busy=true;
 try{const A=petSnap(q),D=twMon(f),bf=twBuff(run),frac=twHp(run,q,i),ha0=Math.max(1,Math.round(bStat(A).hp*frac));
  const mh=run.mhp&&run.mhp.k===f?run.mhp.hp:null,res=towerSim(A,ha0,D,bf,Math.floor(rnd()*4294967296),mh);run.last=key;run.n++;
  let rw=null,ended=false;run.mhp=res.win?null:{k:f,hp:res.hd};
  if(res.win){run.hp[key]=res.ha/res.hpA;t.best=f;t.bestT=Date.now();t.bestNo=q.no;rw=twReward(f);twGive(rw);if(f<TW_TOP)run.choice=twRoll(f,run);else run.choice=null;}
  else{run.hp[key]=0;run.down.push(key);}
  if(!twUsable(run).length||t.best>=TW_TOP){if(!(res.win&&run.choice)){t.run=null;ended=true;}}
  await save();if(res.win)twSync();
  const bz='tw_bg'+String(twZone(f)).padStart(2,'0');battleAnim({kind:'tower',t:Date.now(),a:{nick:acc.nick||acc.id,pet:A},d:{nick:'',pet:D},hpA:res.hpA,hpA0:res.hpA0,hpD:res.hpD,hpD0:res.hpD0,logS:JSON.stringify(res.log),win:res.win,floor:f,lbl:'구천탑 '+f+'층',wtxt:f+'층 돌파!',rlbl:'첫 돌파 보상',cut:f===TW_TOP?'최종 보스':f+'층 수문장',bgUrl:TW_ART[bz]?'t/'+bz+'.png?'+IMG_V:'',reward:rw?twRewardTxt(rw):'',ended,endTxt:ended?(f>=TW_TOP&&res.win?'구천탑 정복!':'출전할 환수가 없어 등반이 끝났어요.'):'',left:twUsable(run).length},'atk');
 }catch(e){toast('전투에 실패했어요: '+(e&&e.message||e));}finally{TV.busy=false;}}
async function loadTower(){TV.loaded=true;try{const s=twSeason(),p=twPrevSeason();
  const getT=async()=>{const a=await db.collection('tower').where('season','==',s).get();return a.docs.map(d=>gFixDoc(d.data())).filter(r=>r.best>0).sort((x,y)=>y.best-x.best||x.t-y.t);};let L=await getT();{const t=twState(),me=L.find(r=>r.uid===acc.uid);if(t.best>0&&(!me||me.best<t.best)){if(await twSync())L=await getT();}}TV.rank=L;
  const b=await db.collection('tower').where('season','==',p).get();TV.prev=b.docs.map(d=>gFixDoc(d.data())).filter(r=>r.best>0).sort((x,y)=>y.best-x.best||x.t-y.t).slice(0,3);}
 catch(e){TV.rank=TV.rank||[];TV.prev=TV.prev||[];}
 if(view==='tower'&&!document.getElementById('layer').innerHTML)render();}
function twMonHp(run,k,D){if(!run||!run.mhp||run.mhp.k!==k)return '';const mx=twStat(D).hp,v=run.mhp.hp/mx;return '<div class="twmhp"><small>남은 체력 '+fmt(run.mhp.hp)+' / '+fmt(mx)+' · 다음 환수가 이어서 싸워요</small>'+twHpBar(v)+'</div>';}
function twHpBar(v){const w=Math.max(0,Math.min(100,v*100));return '<div class="twhp'+(TW_ART.ui_hpbar?' fr':'')+'"><i style="width:'+w+'%;background:'+(w>50?'#4caf50':w>20?'#f0b429':'#e5484d')+'"></i></div>';}
function vTower(){if(!TV.loaded)setTimeout(loadTower,0);const t=twState(),run=t.run,k=twTickets(),f=t.best+1,done=t.best>=TW_TOP;
 const banner=TW_ART.ui_tw_banner?'background-image:linear-gradient(90deg,rgba(20,14,30,.72),rgba(20,14,30,.05) 45%,rgba(20,14,30,.05) 55%,rgba(20,14,30,.72)),url(t/ui_tw_banner.png?'+IMG_V+')':'';
 let h='<div class="twtop" style="'+banner+'"><div><div class="serif twttl">구천탑</div><div class="twsub">'+t.season.replace('-','년 ')+'월 시즌 · 매달 1일 오전 6시 초기화</div></div><div class="twstat"><span>최고 층<b>'+t.best+'</b></span><span>남은 도전<b>'+(TW_ART.ui_ticket?'<img class="px twtk" src="t/ui_ticket.png?'+IMG_V+'" alt="">':'')+k.left+' / '+TW_CAP+'</b></span>'+((acc.inv.sec_tower||0)>0?'<button class="btn sm" data-twticket="1"><img class="px" src="'+ITEMS.sec_tower.img+'" alt="" style="width:22px;height:22px;vertical-align:-6px"> 탑재도전비서 ('+acc.inv.sec_tower+')</button>':'')+'</div></div>';
 h+='<div class="tmode"><button class="'+(TV.tab==='climb'?'on':'')+'" data-twtab="climb">등반</button><button class="'+(TV.tab==='rank'?'on':'')+'" data-twtab="rank">구천탑 순위</button></div>';
 if(TV.tab==='rank')return h+vTowerRank();
 if(done)return h+'<div class="card" style="text-align:center"><b class="serif" style="font-size:26px;color:#b0302a">구천탑 정복!</b><p class="muted">이번 시즌 100층을 모두 올랐어요. 다음 시즌에 다시 도전해요.</p></div>';
 const D=twMon(f),rw=twReward(f);
 const fbz='tw_bg'+String(twZone(f)).padStart(2,'0');h+='<div class="row"><section class="grow"><div class="card twfloor'+(TW_ART[fbz]?' hasbg':'')+'"'+(TW_ART[fbz]?' style="background-image:linear-gradient(180deg,rgba(8,12,20,.15),rgba(8,12,20,0) 30%,rgba(8,12,20,0) 55%,rgba(8,12,20,.82)),url(t/'+fbz+'.png?'+IMG_V+')"':'')+'><div class="twplate serif">'+f+'층'+(D.big?' · 수문장':'')+'</div><div class="twzone">'+esc(TW_ZONES[twZone(f)].n)+'</div><div class="twmon'+(D.big?' big':'')+'"><img class="px'+(D.fb?' twfb':'')+'" src="'+D.img+'" alt=""></div><div class="twmn"><b class="serif">'+esc(D.name)+'</b> '+elTag(D.el)+'</div>'+twMonHp(run,f,D)+'<div class="kv" style="font-size:14px;justify-content:center"><span>추천 전투력 <b>'+fmt(D.cp)+'</b></span><span>첫 돌파 보상 <b>'+esc(twRewardTxt(rw))+'</b></span></div></div>';
 if(!run){h+='<div class="card" style="text-align:center"><p class="muted" style="margin-top:0">도전 기회는 매일 오전 6시에 1회씩 충전되고 최대 '+TW_CAP+'회까지 쌓여요. 기회 1회를 쓰면 등반이 시작돼요.'+(twBlessN(t.best)?'<br><b style="color:#9e6a10">✨ 출발 축복: 시작할 때 버프 '+twBlessN(t.best)+'개를 골라서 출발해요 (최고 층 20층마다 1개, 최대 3개)</b>':'<br><small>최고 층 20층마다 시작할 때 버프를 1개씩 골라서 출발해요 (최대 3개).</small>')+' 층마다 환수 한 마리를 골라 싸우고, 체력은 등반이 끝날 때까지 이어져요.<br>쓰러진 환수는 그 등반에서 다시 못 나가요.</p><button class="btn teal" data-twstart="1" style="min-height:52px;font-size:17px;min-width:240px" '+(k.left<=0?'disabled':'')+'>'+(k.left<=0?'남은 도전 기회가 없어요':'도전 시작 · '+f+'층부터')+'</button></div>';}
 else if(run.choice){const bn=twBlessN(t.best);h+='<div class="card"><h2 style="text-align:center">'+(run.bless>0?'✨ 출발 축복 ('+(bn-run.bless+1)+'/'+bn+') · 버프를 하나 고르세요':t.best+'층 돌파! 보상을 하나 고르세요')+'</h2><div class="twch">'+run.choice.map(c=>{const e=TWC[c];return '<button class="twcard r'+TWRC[e.r]+'" data-twpick="'+c+'"><small>'+TWR[e.r]+'</small><img class="px" src="'+twcImg(c)+'" alt=""><b>'+esc(e.n)+'</b><span>'+esc(e.d)+'</span></button>';}).join('')+'</div></div>';}
 else{const bf=twBuff(run),chips=[];if(bf.atk)chips.push('공격력 '+(bf.atk>0?'+':'')+Math.round(bf.atk*100)+'%');if(bf.taken)chips.push('받는 피해 '+(bf.taken>0?'+':'')+Math.round(bf.taken*100)+'%');if(bf.drain)chips.push('흡혈 '+Math.round(bf.drain*100)+'%');if(bf.first)chips.push('첫 공격 2배');if(bf.elem)chips.push('상성 피해 +25%');
  h+='<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><h2 style="margin:0">출전할 환수</h2><button class="btn soft sm" data-twret="1">등반 끝내기</button></div>'+(chips.length?'<div class="twbuf">'+chips.map(c=>'<span class="chip">'+c+'</span>').join('')+'</div>':'')+'<div class="twpets">'+acc.slots.map((q,i)=>{if(!q)return '';const key=petKey(q,i),dn=run.down.includes(key),hp=dn?0:twHp(run,q,i),c=cp(q),ratio=c/D.cp;
   return '<div class="twpet'+(dn?' down':'')+'"><span class="twpi"><img class="px" src="'+img(q.no)+'" alt="">'+(dn&&TW_ART.ui_fall?'<img class="px twfall" src="t/ui_fall.png?'+IMG_V+'" alt="쓰러짐">':'')+'</span><div class="t"><b>'+NAMES[q.no]+'</b> '+elTag(ELOF[q.no])+'<small>전투력 '+fmt(c)+' · <span style="color:'+(ratio>=1?'#2e7d3a':'#b02a1f')+'">'+(ratio>=1?'여유 +':'부족 ')+Math.round((ratio-1)*100)+'%</span>'+(isAdv(ELOF[q.no],D.el)?' · <b style="color:#2e7d3a">상성 유리</b>':isAdv(D.el,ELOF[q.no])?' · <b style="color:#b02a1f">상성 불리</b>':'')+'</small>'+twHpBar(hp)+'<small>'+(dn?'쓰러짐':'체력 '+Math.round(hp*100)+'%')+'</small></div><button class="btn sm teal" data-twgo="'+i+'" '+(dn||q.sick!=null||TV.busy?'disabled':'')+'>'+(dn?'쓰러짐':q.sick!=null?'아픔':'출전')+'</button></div>';}).join('')+'</div></div>';}
 h+='</section><aside class="side"><div class="card"><h2>층 안내</h2><div class="twlist">'+[0,1,2,3,4].map(d=>{const g=f+d;if(g>TW_TOP)return '';const M=twMon(g);return '<div class="'+(d===0?'on':'')+'"><b>'+g+'층</b><span class="nm">'+esc(M.name)+'</span>'+elTag(M.el)+'<small>'+fmt(M.cp)+'</small></div>';}).join('')+'</div><p class="muted" style="margin-bottom:0">10층마다 수문장이 지켜요. 수문장을 깨면 희귀 이상 보상만 나와요.</p></div></aside></div>';
 return h;}
function vTowerRank(){const L=TV.rank;if(!L)return '<div class="card"><p class="muted">순위를 불러오는 중…</p></div>';
 const me=L.findIndex(r=>r.uid===acc.uid);let h='';
 if(TV.prev&&TV.prev.length){const POS=[[50,68.5],[33.75,76.5],[66.25,82]];h+='<div class="card twhall"><div class="hall">'+TV.prev.slice(0,3).map((r,i)=>'<div class="hp hp'+(i+1)+'" style="left:'+POS[i][0]+'%;top:'+POS[i][1]+'%">'+(i===0?'<img class="px hcrown" src="i/ui4/tw_hall_crown.png" alt="">':'')+(r.no!=null?'<img class="px hpet" src="'+img(r.no)+'" alt="">':'')+'<div class="hplate"><span class="hrk"><img class="px" src="i/ui2/rank_'+(i+1)+'.png?m3" alt=""><b>'+(i+1)+'</b></span><div>'+nickT(r.nick,r.title)+'<small>'+r.best+'층</small></div></div></div>').join('')+'<div class="htitle serif">지난 시즌 명예의 전당</div></div></div>';}
 h+='<div class="card twrankc"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><h2 style="margin:0">이번 시즌 순위</h2><button class="btn soft sm" data-twreload="1">새로고침</button></div><p class="muted">최고 층이 높은 순, 같으면 먼저 도달한 사람이 위예요.</p>'+
  podium(L.slice(0,3).map(r=>({no:r.no,nick:r.nick,val:r.best+'층',sub:r.no!=null?NAMES[r.no]:'',me:r.uid===acc.uid})),'pb-tower')+rankBoard('tower','구천탑 순위',['순위','닉네임','최고 층','돌파 환수','도달 시각'],'64px minmax(0,2.2fr) 80px minmax(0,1.6fr) 110px',L.slice(0,50).map(r=>({me:r.uid===acc.uid,cells:[nickT(r.nick,r.title),'<b>'+r.best+'층</b>',(r.no!=null?'<img class="px rkpet" src="'+img(r.no)+'" alt=""> '+NAMES[r.no]:''),new Date(r.t).toLocaleString('ko-KR',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})]})),'아직 기록이 없어요. 첫 번째 등반자가 되어 보세요!')+
  '<p style="margin:10px 0 0"><b>내 순위:</b> '+(me>=0?(me+1)+'위 · '+L[me].best+'층':'기록 없음')+'</p>'+(TV.err?'<p class="muted" style="color:#b02a1f">순위를 서버에 저장하지 못했어요 ('+esc(String(TV.err))+'). 운영자에게 알려 주세요.</p>':'')+'</div>';
 return h;}

/* ================= 크리스마스 이벤트: 동지 설화 던전 ================= */
const XM_ID='x2026',XM_TK_PRICE=10,XM_TK_DAILY=3,XM_EGG_READY=true;
const XM_TIERS=[
 {n:'첫눈',ic:'❄️',rec:300,coin:20,first:30,bg:'x_bg1',boss:['x_b1','눈덩이 대왕',75,'대왕 눈사태','rock','neutral']},
 {n:'함박눈',ic:'⛄',rec:1500,coin:30,first:60,bg:'x_bg1',boss:['x_b2','굴뚝 그림자 도깨비',106,'검댕 회오리','vortex','yin']},
 {n:'눈보라',ic:'🌨️',rec:4000,coin:40,first:100,bg:'x_bg2',boss:['x_b3','빙결 거인',151,'빙하 내려찍기','rock','water']},
 {n:'극야',ic:'🌌',rec:8000,coin:55,first:150,title:'극야를 걷는 자',bg:'x_bg3',boss:['x_b4','극야의 동지 야차',119,'동짓날 긴 밤','vortex','yin']},
 {n:'끝없는 겨울밤',ic:'♾️',rec:800,coin:4,endless:true,bg:'x_bg4'}];
// [키, 이름, 임시그림, 스킬, fx, 속성]
const XM_MON=[['x_m1','눈뭉치 요괴',1,'눈뭉치 던지기','ball','water'],['x_m2','고드름 박쥐',16,'고드름 낙하','rain','water'],['x_m3','얼음 장난감 병정',145,'얼음 총검','spike','metal'],
 ['x_m4','심술 눈사람',45,'코당근 박치기','shock','water'],['x_m5','굴뚝 검댕이',103,'검댕 뿜기','vortex','yin'],['x_m6','포장지 요괴',121,'리본 휘감기','vine','fire'],
 ['x_m7','서리 늑대',63,'서리 이빨','bite','metal'],['x_m8','눈보라 정령',106,'칼바람','wave','water']];
const XM_GATE=[.8,.9,1,1.1,1.3],XM_SHARE=[.15,.15,.15,.15,.4];
const XM_ART={deco_wreath9:1,deco_snow:1,deco_aurora:1,x_b1:1,x_b2:1,x_b3:1,x_b4:1,x_banner:1,x_bg1:1,x_bg2:1,x_bg3:1,x_bg4:1,x_m1:1,x_m2:1,x_m3:1,x_m4:1,x_m5:1,x_m6:1,x_m7:1,x_m8:1,x_tier1:1,x_tier2:1,x_tier3:1,x_tier4:1,x_tier5:1};
function xmImg(k,fb){return XM_ART[k]?'x/'+k+'.png?'+IMG_V:fb;}
function xmOn(){if(TEST)return true;const c=cfg.xm;if(!c||!c.s||!c.e)return false;const d=dayKey(now());return d>=c.s&&d<=c.e;}
function xmState(){if(!acc.xm||acc.xm.id!==XM_ID)acc.xm={id:XM_ID,free:'',run:null,clr:{},eb:0};return acc.xm;}
function xmFree(){return xmState().free!==dayKey(now());}
// 설화 던전 몬스터: 등급별 구천탑 층 기준 능력치 (첫눈 8층 · 함박눈 25층 · 눈보라 45층 · 극야 65층 · 끝없는 겨울밤 15층부터 관문마다 +1.5층)
const XM_FLOOR=[8,25,45,77,15];
// 끝없는 겨울밤 코인: 1~10관문 3개, 11~20관문 2개, 21관문~ 1개 · 한 번 입장 최대 40개 · 하루 최대 60개 (넘으면 순위 기록만)
const XM_END_RUN=40,XM_END_DAY=60;
function xmEndCoin(g){return g<10?3:g<20?2:1;}
function xmEndLeft(run){const ad=accDaily();return Math.max(0,Math.min(XM_END_RUN-(run?run.earned:0),XM_END_DAY-(ad.xme||0)));}
function xmFloor(ti,g){const T=XM_TIERS[ti];return T.endless?Math.min(100,Math.round(XM_FLOOR[ti]+g*1.5)):XM_FLOOR[ti];}
function xmMonStat(ti,g){const T=XM_TIERS[ti],s=twMonStat(xmFloor(ti,g),false),m=T.endless?(g>57?1+(g-57)*.05:1):XM_GATE[g];['hp','atk','def'].forEach(k=>{s[k]=Math.round(s[k]*m);});if(!T.endless&&g===4){s.hp=Math.round(s.hp*1.6);s.atk=Math.round(s.atk*1.2);}return s;}
function xmRec(ti,g){return powerOf(xmMonStat(ti,g));}
// 안내용 추천 전투력: 실제 보스(마지막 관문) 전투력에 여유 10%를 더해 50 단위로 올림 (끝없는 겨울밤은 첫 관문)
function xmRecShow(ti){const T=XM_TIERS[ti],v=T.endless?xmRec(ti,0):xmRec(ti,4)*1.1;return Math.ceil(v/50)*50;}
function xmMon(ti,g){const T=XM_TIERS[ti],boss=!T.endless&&g===4;let d;
 if(boss)d=T.boss;else{const i=T.endless?twHash(g*31+7)%XM_MON.length:twHash(ti*97+g*13+Number(dayKey(now()).replace(/-/g,'')))%XM_MON.length;d=XM_MON[i];}
 const rec=xmRec(ti,g),big=boss||(T.endless&&g>0&&g%10===9);
 return{boss:true,tw:1,big,key:d[0],name:d[1],img:xmImg(d[0],img(d[2])),fb:!XM_ART[d[0]],xfb:!XM_ART[d[0]],el:d[5],cp:rec,lv:xmFloor(ti,g),bs:xmMonStat(ti,g),tag:boss?'보스':(T.endless?(g+1)+'관문':(g+1)+'관문'),sub:'설화 던전 · '+T.n,skill:{n:d[3],fx:d[4],pal:d[5]}};}
function xmUsable(run){return twUsable(run);}
function xmEnter(ti){if(!xmOn())return toast('이벤트 기간이 아니에요.');const x=xmState();if(x.run)return;const T=XM_TIERS[ti];
 if(ti>0&&!T.endless&&!x.clr[ti-1])return toast('먼저 '+XM_TIERS[ti-1].n+' 등급을 깨야 열려요.');
 if(T.endless&&!x.clr[1])return toast('함박눈 등급을 깨면 열려요.');
 if(!acc.slots.some(q=>q&&q.sick==null))return toast('출전할 수 있는 환수가 없어요.');
 const free=xmFree();if(!free&&!(acc.inv.ev_ticket>0))return toast('입장권이 없어요. 오늘 무료 입장은 이미 썼어요.');
 if(free)x.free=dayKey(now());else acc.inv.ev_ticket--;
 x.run={tier:ti,g:0,hp:{},down:[],picks:[],choice:null,last:null,n:0,earned:0};SFX.play('mystic');toast(T.ic+' '+T.n+' 입장!'+(free?' (오늘 무료 입장)':' (입장권 1장 사용)'));commit();}
function xmRetreat(){const x=xmState();if(!x.run)return;confirmBox('던전 나가기','지금 나가면 이번 입장은 끝나요. 이미 받은 이벤트 코인은 그대로예요.',()=>{x.run=null;SFX.play('wake');commit();});}
function xmBuyTicket(){if(!xmOn())return toast('이벤트 기간이 아니에요.');const ad=accDaily();if((ad.evt||0)>=XM_TK_DAILY)return toast('입장권은 하루 '+XM_TK_DAILY+'장까지 살 수 있어요.');if(acc.coins<XM_TK_PRICE)return toast('환수코인이 부족해요.');
 acc.coins-=XM_TK_PRICE;ad.evt=(ad.evt||0)+1;acc.inv.ev_ticket=(acc.inv.ev_ticket||0)+1;SFX.play('buy');toast('설화 던전 입장권 1장 구매!');commit();}
async function xmFight(i){if(TV.busy)return;const x=xmState(),run=x.run,q=acc.slots[i];if(!run)return;if(run.choice)return toast('먼저 보상을 하나 골라 주세요.');if(!q)return;
 const key=petKey(q,i);if(run.down.includes(key))return toast('쓰러진 환수는 이번 입장에서 나갈 수 없어요.');if(q.sick!=null)return toast('아픈 환수는 나갈 수 없어요.');
 const T=XM_TIERS[run.tier],g=run.g;TV.busy=true;
 try{const A=petSnap(q),D=xmMon(run.tier,g),bf=twBuff(run),ha0=Math.max(1,Math.round(bStat(A).hp*twHp(run,q,i)));
  const mk=run.tier+'_'+g,mh=run.mhp&&run.mhp.k===mk?run.mhp.hp:null,res=towerSim(A,ha0,D,bf,Math.floor(rnd()*4294967296),mh);run.last=key;run.n++;run.mhp=res.win?null:{k:mk,hp:res.hd};
  let got=0,first=null,ended=false,cleared=false;
  if(res.win){run.hp[key]=res.ha/res.hpA;if(T.endless){got=Math.min(xmEndCoin(g),xmEndLeft(run));const ad=accDaily();ad.xme=(ad.xme||0)+got;}else got=Math.max(1,Math.round(T.coin*XM_SHARE[g]));acc.evc=(acc.evc||0)+got;run.earned+=got;run.g++;
   if(T.endless){if(run.g>x.eb){x.eb=run.g;x.ebT=Date.now();xmSync();}run.choice=twRoll(1,run,'noloot');}
   else if(run.g>=5){cleared=true;if(!x.clr[run.tier]){x.clr[run.tier]=1;first=T.first;acc.coins+=T.first;if(T.title){acc.titles=acc.titles||[];if(!acc.titles.includes(T.title))acc.titles.push(T.title);}}x.run=null;ended=true;}
   else run.choice=twRoll(g===3?10:1,run,'noloot');}
  else{run.hp[key]=0;run.down.push(key);if(!xmUsable(run).length){x.run=null;ended=true;}}
  await save();
  const bgk=T.bg;battleAnim({kind:'xmas',t:Date.now(),a:{nick:acc.nick||acc.id,pet:A},d:{nick:'',pet:D},hpA:res.hpA,hpA0:res.hpA0,hpD:res.hpD,hpD0:res.hpD0,logS:JSON.stringify(res.log),win:res.win,
   lbl:'설화 던전 · '+T.n+' '+(g+1)+'관문',wtxt:cleared?T.n+' 클리어!':(g+1)+'관문 돌파!',rlbl:'획득',reward:res.win?(T.endless&&!got?'환수코인 한도 도달 · 순위 기록만 올라가요':'이벤트 코인 +'+got)+(first?' · 첫 클리어 환수코인 +'+first+(T.title?' · 칭호 「'+T.title+'」':''):''):'',cut:T.endless?(g+1)+'관문 강적':T.n+' 보스',bgUrl:XM_ART[bgk]?'x/'+bgk+'.png?'+IMG_V:'',
   ended,endTxt:cleared?'이번 입장에서 이벤트 코인 '+run.earned+'개를 모았어요.':ended?'출전할 환수가 없어 이번 입장이 끝났어요. 모은 이벤트 코인 '+run.earned+'개':'',left:xmUsable(run).length},'atk');
 }catch(e){toast('전투에 실패했어요: '+(e&&e.message||e));}finally{TV.busy=false;}}
async function xmSync(){if(!db||!acc||MODE!=='player')return false;const x=xmState();if(!x.eb)return false;try{await db.doc('xmrank/'+acc.uid).set({gm:1,uid:acc.uid,id:acc.id||'',nick:acc.nick||acc.id||'',ev:XM_ID,best:x.eb,t:x.ebT||Date.now(),title:acc.title||null,no:(()=>{const r=repPet(),q=r?r.p:acc.slots.find(q=>q);return q?q.no:null;})()});XV.err=null;return true;}catch(e){XV.err=(e&&(e.code||e.message))||'error';console.warn('xmSync',e);return false;}}
const XV={tab:'dun',rank:null};
async function xmLoadRank(){const get=async()=>{const a=await db.collection('xmrank').where('ev','==',XM_ID).get();return a.docs.map(d=>gFixDoc(d.data())).filter(r=>r.best>0).sort((x,y)=>y.best-x.best||x.t-y.t);};
 try{let L=await get();const x=xmState(),me=L.find(r=>r.uid===acc.uid);if(x.eb>0&&(!me||me.best<x.eb||me.no==null)){if(await xmSync())L=await get();}
  await Promise.all(L.slice(0,3).filter(r=>r.no==null).map(async r=>{try{const d=await db.doc('arena/'+r.uid).get();if(d.exists&&d.data().pet)r.no=d.data().pet.no;}catch(e){}}));XV.rank=L;}catch(e){XV.rank=XV.rank||[];XV.err=(e&&(e.code||e.message))||'error';}if(view==='xmas'&&!document.getElementById('layer').innerHTML)render();}
// 이벤트 상점
const XM_SHOP=[
 {k:'egg',n:'성탄알',p:100,img:'h/221.gif',d:'크리스마스 한정 환수 알',ready:()=>XM_EGG_READY},
 {k:'seal',n:'크리스마스 씰',p:50,img:'i/ev_seal.png',d:'진행 중인 수련·심부름 남은 시간 50% 감소, 수련 경험치 1.5배 (하루 3개)',daily:3},
 {k:'bg_aurora',n:'오로라 선계 설경 배경',p:200,img:'x/ev_bg_icon.png',d:'환수 창 배경 · 한 번 사면 영구 보관',deco:'bg'},
 {k:'fr_wreath',n:'크리스마스 리스 테두리',p:200,img:'x/ev_fr_icon.png',d:'전구가 반짝이는 환수 창 테두리 · 영구 보관',deco:'frame'},
 {k:'fx_snow',n:'눈 효과',p:200,img:'x/ev_fx_icon.png',d:'환수 창에 눈이 내려요 · 영구 보관',deco:'fx'},
 {k:'sk_xm',n:'동지 설화 마을 스킨',p:300,img:'v/xm_icon.png',d:'마을 땅·길·소품이 눈 덮인 동지 설화 마을로 바뀌어요 · 영구 보관',skin:'xm'}];
function decoOwn(k){return !!(acc.decoOwn&&acc.decoOwn[k]);}
function xmBuy(k){if(!xmOn())return toast('이벤트 상점은 이벤트 기간에만 열려요.');const it=XM_SHOP.find(x=>x.k===k);if(!it)return;
 if(it.ready&&!it.ready())return toast('곧 열려요! 한정 환수 준비 중이에요.');
 if(it.deco&&decoOwn(k))return toast('이미 가지고 있어요.');if(it.skin&&acc.vil&&acc.vil.skins.includes(it.skin))return toast('이미 가지고 있어요.');
 const ad=accDaily();if(it.daily&&(ad['xs_'+k]||0)>=it.daily)return toast('오늘은 더 살 수 없어요 (하루 '+it.daily+'개).');
 if((acc.evc||0)<it.p)return toast('이벤트 코인이 부족해요.');
 confirmBox('이벤트 상점',it.n+'을(를) 이벤트 코인 '+it.p+'개로 살까요?',()=>{if((acc.evc||0)<it.p)return;acc.evc-=it.p;if(it.daily)ad['xs_'+k]=(ad['xs_'+k]||0)+1;
  if(k==='seal')acc.inv.xm_seal=(acc.inv.xm_seal||0)+1;
  if(k==='egg'){giveEgg(221);}if(it.skin){vilInit();if(!acc.vil.skins.includes(it.skin))acc.vil.skins.push(it.skin);acc.vil.skin=it.skin;}
  if(it.deco){acc.decoOwn=acc.decoOwn||{};acc.decoOwn[k]=1;acc.deco=acc.deco||{};acc.deco[it.deco]=k;}
  SFX.play(it.deco||it.skin?'fanfare':'buy');toast(it.n+' 구매!'+(it.deco?' 바로 적용했어요. 성장 화면의 꾸미기에서 바꿀 수 있어요.':it.skin?' 마을에 바로 적용했어요. 마을의 [스킨]에서 바꿀 수 있어요.':''));commit();});}
function xmTop(){const x=xmState(),free=xmFree(),ad=accDaily();
 const ban=XM_ART.x_banner?'background-image:linear-gradient(90deg,rgba(10,20,40,.72),rgba(10,20,40,.05) 45%,rgba(10,20,40,.05) 55%,rgba(10,20,40,.72)),url(x/x_banner.png?'+IMG_V+')':'';
 return '<div class="twtop xmtop" style="'+ban+'"><div><div class="serif twttl">동지 설화 던전</div><div class="twsub">'+(TEST?'테스트 모드 · 기간 무관':cfg.xm?cfg.xm.s.replace(/-/g,'.')+' ~ '+cfg.xm.e.replace(/-/g,'.'):'')+' · 크리스마스 한정</div></div><div class="twstat"><span>이벤트 코인<b><img class="px xmc" src="i/ev_coin.png" alt="">'+fmt(acc.evc||0)+'</b></span><span>무료 입장<b>'+(free?'1':'0')+'</b></span><span>입장권<b>'+(acc.inv.ev_ticket||0)+'</b></span><button class="btn sm" data-xmbuy="1"><img class="px" src="i/ev_ticket.png" alt="" style="width:22px;height:22px;vertical-align:-6px"> 입장권 '+XM_TK_PRICE+'환수코인 ('+(ad.evt||0)+'/'+XM_TK_DAILY+')</button></div></div>'+
 '<div class="tmode"><button class="'+(XV.tab==='dun'?'on':'')+'" data-xmtab="dun">던전</button><button class="'+(XV.tab==='shop'?'on':'')+'" data-xmtab="shop">이벤트 상점</button><button class="'+(XV.tab==='rank'?'on':'')+'" data-xmtab="rank">끝없는 겨울밤 순위</button></div>';}
function vXmas(){if(!xmOn())return '<div class="card"><h2>동지 설화 던전</h2><p class="muted">지금은 이벤트 기간이 아니에요.</p></div>';
 const x=xmState(),run=x.run;let h=xmTop();
 if(XV.tab==='shop')return h+vXmShop();
 if(XV.tab==='rank'){if(!XV.rank)setTimeout(xmLoadRank,0);return h+vXmRank();}
 if(!run){h+='<div class="xmtiers">'+XM_TIERS.map((T,ti)=>{const lock=T.endless?!x.clr[1]:(ti>0&&!x.clr[ti-1]);const clr=!!x.clr[ti];
   return '<div class="card xmtier'+(lock?' lock':'')+'"><div class="xmti">'+(XM_ART['x_tier'+(ti+1)]?'<img class="px" src="x/x_tier'+(ti+1)+'.png?'+IMG_V+'" alt="">':'<span>'+T.ic+'</span>')+'</div><b class="serif">'+T.n+'</b>'+(clr?'<span class="chip glow">클리어</span>':'')+
   '<small>추천 전투력 '+(T.endless?fmt(xmRecShow(ti))+'부터 계속 강해져요':fmt(xmRecShow(ti)))+'</small><small>'+(T.endless?'관문마다 이벤트 코인 3→2→1개 · 입장당 최대 '+XM_END_RUN+' · 하루 최대 '+XM_END_DAY+' (오늘 '+(accDaily().xme||0)+'/'+XM_END_DAY+') · 기간 순위':'5관문 클리어 시 이벤트 코인 '+T.coin+(clr?'':' · 첫 클리어 환수코인 +'+T.first)+(T.title&&!clr?' · 칭호':''))+'</small>'+
   (T.endless&&x.eb?'<small>내 최고 '+x.eb+'관문</small>':'')+'<button class="btn teal sm" data-xmin="'+ti+'" '+(lock?'disabled':'')+'>'+(lock?(T.endless?'함박눈 클리어 후':'이전 등급 클리어 후'):'입장')+'</button></div>';}).join('')+'</div><p class="muted" style="text-align:center">하루 1번 무료로 들어갈 수 있고, 더 하고 싶으면 입장권(환수코인 '+XM_TK_PRICE+', 하루 '+XM_TK_DAILY+'장)을 써요. 관문을 깰 때마다 이벤트 코인을 바로 받아요.</p>';return h;}
 const T=XM_TIERS[run.tier],D=xmMon(run.tier,run.g);
 h+='<div class="row"><section class="grow"><div class="card twfloor xmfloor'+(XM_ART[T.bg]?' hasbg':'')+'"'+(XM_ART[T.bg]?' style="background-image:linear-gradient(180deg,rgba(8,12,20,.15),rgba(8,12,20,0) 30%,rgba(8,12,20,0) 55%,rgba(8,12,20,.82)),url(x/'+T.bg+'.png?'+IMG_V+')"':'')+'><div class="twplate serif">'+T.ic+' '+T.n+' · '+(T.endless?(run.g+1)+'관문':(run.g+1)+' / 5관문')+'</div>'+(T.endless?'<p class="muted" style="margin:4px 0 0">이번 입장 환수코인 '+run.earned+' · 더 받을 수 있는 환수코인 '+xmEndLeft(run)+'개'+(xmEndLeft(run)?'':' (지금부터는 순위 기록만)')+'</p>':'')+'<div class="twzone">이번 입장에서 모은 이벤트 코인 '+run.earned+'</div><div class="twmon'+(D.big?' big':'')+'"><img class="px'+(D.xfb?' xmfb':'')+'" src="'+D.img+'" alt=""></div><div class="twmn"><b class="serif">'+esc(D.name)+'</b> '+elTag(D.el)+'</div>'+twMonHp(run,run.tier+'_'+run.g,D)+'<div class="kv" style="font-size:14px;justify-content:center"><span>추천 전투력 <b>'+fmt(D.cp)+'</b></span><span>보상 <b>이벤트 코인 +'+(T.endless?Math.min(xmEndCoin(run.g),xmEndLeft(run)):Math.max(1,Math.round(T.coin*XM_SHARE[run.g])))+'</b></span></div></div>';
 if(run.choice){h+='<div class="card"><h2 style="text-align:center">'+run.g+'관문 돌파! 보상을 하나 고르세요</h2><div class="twch">'+run.choice.map(c=>{const e=TWC[c];return '<button class="twcard r'+TWRC[e.r]+'" data-xmpick="'+c+'"><small>'+TWR[e.r]+'</small><img class="px" src="'+twcImg(c)+'" alt=""><b>'+esc(e.n)+'</b><span>'+esc(e.d)+'</span></button>';}).join('')+'</div></div>';}
 else{const bf=twBuff(run),chips=[];if(bf.atk)chips.push('공격력 '+(bf.atk>0?'+':'')+Math.round(bf.atk*100)+'%');if(bf.taken)chips.push('받는 피해 '+(bf.taken>0?'+':'')+Math.round(bf.taken*100)+'%');if(bf.drain)chips.push('흡혈 '+Math.round(bf.drain*100)+'%');if(bf.first)chips.push('첫 공격 1.5배');if(bf.elem)chips.push('상성 피해 +15%');
  h+='<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><h2 style="margin:0">출전할 환수</h2><button class="btn soft sm" data-xmret="1">던전 나가기</button></div>'+(chips.length?'<div class="twbuf">'+chips.map(c=>'<span class="chip">'+c+'</span>').join('')+'</div>':'')+'<div class="twpets">'+acc.slots.map((q,i)=>{if(!q)return '';const key=petKey(q,i),dn=run.down.includes(key),hp=dn?0:twHp(run,q,i),c=cp(q),ratio=c/D.cp;
   return '<div class="twpet'+(dn?' down':'')+'"><span class="twpi"><img class="px" src="'+img(q.no)+'" alt=""></span><div class="t"><b>'+NAMES[q.no]+'</b> '+elTag(ELOF[q.no])+'<small>전투력 '+fmt(c)+' · <span style="color:'+(ratio>=1?'#2e7d3a':'#b02a1f')+'">'+(ratio>=1?'여유 +':'부족 ')+Math.round((ratio-1)*100)+'%</span>'+(isAdv(ELOF[q.no],D.el)?' · <b style="color:#2e7d3a">상성 유리</b>':isAdv(D.el,ELOF[q.no])?' · <b style="color:#b02a1f">상성 불리</b>':'')+'</small>'+twHpBar(hp)+'<small>'+(dn?'쓰러짐':'체력 '+Math.round(hp*100)+'%')+'</small></div><button class="btn sm teal" data-xmgo="'+i+'" '+(dn||q.sick!=null||TV.busy?'disabled':'')+'>'+(dn?'쓰러짐':q.sick!=null?'아픔':'출전')+'</button></div>';}).join('')+'</div></div>';}
 h+='</section><aside class="side"><div class="card"><h2>관문 안내</h2><div class="twlist">'+(T.endless?[0,1,2,3,4].map(d=>run.g+d):[0,1,2,3,4]).map(g=>{const M=xmMon(run.tier,g);return '<div class="'+(g===run.g?'on':'')+'"><b>'+(g+1)+'</b><span class="nm">'+esc(M.name)+(M.big?' ★':'')+'</span>'+elTag(M.el)+'<small>'+fmt(M.cp)+'</small></div>';}).join('')+'</div><p class="muted" style="margin-bottom:0">체력은 관문 사이에 이어지고, 쓰러진 환수는 이번 입장에서 다시 못 나가요.</p></div></aside></div>';
 return h;}
function vXmShop(){const ad=accDaily();return '<div class="card xmshop"><h2>이벤트 상점</h2><p class="muted">이벤트 코인은 던전 관문을 깰 때마다 모여요. 배경·테두리·눈 효과는 한 번 사면 이벤트가 끝나도 계속 쓸 수 있어요.</p><div class="items">'+XM_SHOP.map(it=>{const own=(it.deco&&decoOwn(it.k))||(it.skin&&acc.vil&&(acc.vil.skins||[]).includes(it.skin)),nr=it.ready&&!it.ready(),lim=it.daily?(ad['xs_'+it.k]||0)+'/'+it.daily:'';
  return '<div class="item'+(own?' own':'')+'"><img class="px" src="'+it.img+'" alt="" onerror="this.src=\'i/ev_coin.png\'"><div class="t"><b>'+esc(it.n)+'</b><small>'+esc(it.d)+'</small><small><img class="px xmc" src="i/ev_coin.png" alt=""> '+it.p+(lim?' · 오늘 구매 '+lim:'')+'</small></div><button class="btn sm" data-xmshop="'+it.k+'" '+(own||nr?'disabled':'')+'>'+(own?'보유':nr?'곧 열려요':'구매')+'</button></div>';}).join('')+'</div></div>';}
function vXmRank(){const L=XV.rank;if(!L)return '<div class="card"><p class="muted">순위를 불러오는 중…</p></div>';const me=L.findIndex(r=>r.uid===acc.uid);
 return '<div class="card twrankc"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><h2 style="margin:0">끝없는 겨울밤 순위</h2><button class="btn soft sm" data-xmreload="1">새로고침</button></div><p class="muted">한 번 입장에서 가장 많이 넘긴 관문 수로 매겨요. 같으면 먼저 도달한 사람이 위예요.</p>'+
 podium(L.slice(0,3).map(r=>({no:r.no!=null?r.no:null,nick:r.nick,val:r.best+'관문',me:r.uid===acc.uid})),'pb-snow')+rankBoard('snow','끝없는 겨울밤 순위',['순위','닉네임','최고 관문'],'64px minmax(0,1fr) 110px',L.slice(0,50).map(r=>({me:r.uid===acc.uid,cells:[nickT(r.nick,r.title),'<b>'+r.best+'관문</b>']})))+
 '<p style="margin:10px 0 0"><b>내 순위:</b> '+(me>=0?(me+1)+'위 · '+L[me].best+'관문':(xmState().eb?'내 최고 '+xmState().eb+'관문 · 순위 저장 대기 중':'기록 없음'))+'</p>'+(XV.err?'<p class="muted" style="color:#b02a1f">순위를 서버에 저장하지 못했어요 ('+esc(String(XV.err))+'). 운영자에게 알려 주세요.</p>':'')+'</div>';}
// 꾸미기: 환수 창 배경·테두리·눈
const DECO_OPT={bg:[['','기본 선계'],['bg_aurora','오로라 선계 설경']],frame:[['','없음'],['fr_wreath','크리스마스 리스']],fx:[['','없음'],['fx_snow','눈 내리기']]};
function decoAny(){return acc.decoOwn&&Object.keys(acc.decoOwn).length>0;}
function decoModal(){const L=document.getElementById('layer'),d=acc.deco||{};const row=(t,lb)=>'<label class="f" style="width:100%">'+lb+'<select data-deco="'+t+'">'+DECO_OPT[t].filter(([k])=>!k||decoOwn(k)).map(([k,n])=>'<option value="'+k+'" '+((d[t]||'')===k?'selected':'')+'>'+n+'</option>').join('')+'</select></label>';
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="꾸미기"><h2 style="margin-top:0">환수 창 꾸미기</h2><div style="display:grid;gap:10px">'+row('bg','배경')+row('frame','테두리')+row('fx','효과')+'</div><p class="muted">이벤트 상점에서 산 꾸미기만 고를 수 있어요.</p><button class="btn teal" data-close="1" style="width:100%">닫기</button></div></div>';}
let DECO_EL=null,DECO_T=null,SNOW=null;
function decoMount(){const box=document.querySelector('.stagebox');const d=(acc&&acc.deco)||{};
 if(!box||view!=='home'){return;}
 box.classList.toggle('deco-aurora',d.bg==='bg_aurora');box.classList.toggle('has-wreath',d.frame==='fr_wreath');
 if(!d.frame&&!d.fx){if(DECO_EL)DECO_EL.remove();return;}
 if(!DECO_EL){DECO_EL=document.createElement('div');DECO_EL.className='decolayer';DECO_EL.setAttribute('data-keep','1');DECO_EL.innerHTML='<canvas class="snowc"></canvas><div class="snowimg"></div><div class="wreath"><img class="px wbow" src="x/deco_wreath_bow.png?'+IMG_V+'" alt=""></div>';}
 DECO_EL.querySelector('.wreath').style.display=d.frame==='fr_wreath'?'':'none';const wr=DECO_EL.querySelector('.wreath');wr.classList.toggle('anim',!!XM_ART.deco_wreath9);wr.classList.toggle('fb',!XM_ART.deco_wreath9&&!XM_ART.deco_wreath_a);wr.querySelector('.wbow').style.display=XM_ART.deco_wreath9?'':'none';
 const snowOn=d.fx==='fx_snow',useImg=!!XM_ART.deco_snow;DECO_EL.querySelector('.snowimg').style.display=snowOn&&useImg?'':'none';DECO_EL.querySelector('.snowc').style.display=snowOn&&!useImg?'':'none';DECO_EL.querySelector('.snowc').style.display=d.fx==='fx_snow'?'':'none';
 if(DECO_EL.parentNode!==box)box.appendChild(DECO_EL);
 if(!DECO_T)DECO_T=setInterval(()=>{if(DECO_EL)DECO_EL.classList.toggle('blink');},700);
 if(d.fx==='fx_snow'&&!SNOW&&!XM_ART.deco_snow)snowStart();}
function snowStart(){const flakes=[];let last=0;SNOW=true;
 const loop=ts=>{requestAnimationFrame(loop);if(!DECO_EL||!DECO_EL.isConnected||DECO_EL.querySelector('.snowc').style.display==='none')return;if(ts-last<33)return;last=ts;
  const c=DECO_EL.querySelector('.snowc'),w=c.clientWidth,h=c.clientHeight;if(!w||!h)return;const S=3;if(c.width!==Math.round(w/S)||c.height!==Math.round(h/S)){c.width=Math.round(w/S);c.height=Math.round(h/S);flakes.length=0;}
  const W=c.width,Hh=c.height,g=c.getContext('2d');while(flakes.length<Math.round(W*Hh/900))flakes.push({x:Math.random()*W,y:Math.random()*Hh,v:.25+Math.random()*.6,s:Math.random()<.18?2:1,p:Math.random()*6.28});
  g.clearRect(0,0,W,Hh);for(const f of flakes){f.y+=f.v;f.p+=.03;f.x+=Math.sin(f.p)*.25+.08;if(f.y>Hh+2){f.y=-2;f.x=Math.random()*W;}if(f.x>W+2)f.x=-2;
   g.fillStyle=f.s>1?'rgba(255,255,255,.95)':'rgba(255,255,255,.8)';const x=Math.round(f.x),y=Math.round(f.y);
   if(f.s>1){g.fillRect(x,y-1,1,3);g.fillRect(x-1,y,3,1);}else g.fillRect(x,y,1,1);}};
 requestAnimationFrame(loop);}
function decoBtn(){return decoAny()?'<button class="chip decobtn" data-decoopen="1">🎨 꾸미기</button>':'';}


if(/[?&](test|mock)/.test(location.search))window.__XM={xmMon,xmRec,towerSim,petStats,maxLv,powerOf,XM_TIERS};
/* ================= 운영자: 상점 · 제작소 · 인게임 아이템 · 컬렉션 · 이벤트 설정 ================= */
async function saveGlobal(msg){cfg.by=acc.id+' · '+new Date().toLocaleString('ko-KR');await db.doc('config/global').set(JSON.parse(JSON.stringify(cfg)));applyCfg();log(msg);toast('저장했어요. 유저 화면은 새로고침하면 바뀌어요.');render();}
const DEF_ITEMS=()=>JSON.parse(DEF_SNAP.items);
const KIK=['fire','water','wood','earth','metal','yy'];
/* ----- 상점 ----- */
function aShop(){const D=DEF_ITEMS(),cats=['먹이','생활','약','성장','강화','기운','알','보상','인게임','기타','운영자'];const its=Object.keys(ITEMS).filter(k=>cats.includes(ITEMS[k].cat)).sort((a,b)=>cats.indexOf(ITEMS[a].cat)-cats.indexOf(ITEMS[b].cat));
 return '<div class="card adm"><h2>상점 설정</h2><p class="muted">가격을 0으로 두면 상점에서 팔지 않아요. 하루·주간 제한은 0이면 제한 없음. 기본값은 회색 글씨예요.</p><div style="overflow-x:auto"><table class="t"><tr><th></th><th>아이템</th><th>분류</th><th>가격</th><th>하루 제한</th><th>주간 제한</th></tr>'+
 its.map(k=>{const it=ITEMS[k],d=D[k]||{};return '<tr><td><img class="px" src="'+it.img+'" alt="" width="32" height="32" style="object-fit:contain"></td><td><b>'+esc(it.n)+'</b></td><td>'+it.cat+'</td><td><input type="number" min="0" id="sp_'+k+'" value="'+(it.p||0)+'" style="width:80px"> <small class="muted">'+(d.p||0)+'</small></td><td><input type="number" min="0" id="sd_'+k+'" value="'+(it.daily||0)+'" style="width:60px"></td><td><input type="number" min="0" id="sw_'+k+'" value="'+(it.weekly||0)+'" style="width:60px"></td></tr>';}).join('')+'</table></div>'+
 '<h3 class="serif" style="margin:16px 0 6px">확장 · 알</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">4번째 슬롯<input type="number" id="sSl3" value="'+SLOT_PRICE[3]+'" style="width:80px"></label><label class="f">5번째 슬롯<input type="number" id="sSl4" value="'+SLOT_PRICE[4]+'" style="width:80px"></label>'+VIL_EXP.map((v,i)=>'<label class="f">마을 확장 '+(i+1)+'<input type="number" id="sVl'+i+'" value="'+v+'" style="width:80px"></label>').join('')+'<label class="f">환수 알 가격<input type="number" id="sEgg" value="'+SHOPX.egg+'" style="width:80px"></label><label class="f">알 주간 개수<input type="number" id="sEggW" value="'+SHOPX.eggWeek+'" style="width:70px"></label></div>'+
 '<h3 class="serif" style="margin:16px 0 6px">꾸미기</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end">'+TILES.map((t,i)=>t.free?'':'<label class="f">'+t.n+'<input type="number" id="sDt'+i+'" value="'+t.p+'" style="width:70px"></label>').join('')+PROPS.map((t,i)=>'<label class="f">'+t.n+'<input type="number" id="sDp'+i+'" value="'+t.p+'" style="width:70px"></label>').join('')+'</div>'+
 '<div style="margin-top:14px;display:flex;gap:8px"><button class="btn" data-x="shopSave">저장</button><button class="btn soft" data-x="shopReset">기본값으로</button></div></div>';}
/* ----- 제작소 레시피 ----- */
function rcpRows(){if(!AS.rcp)AS.rcp=Object.entries(RCP).map(([id,r])=>{const it=ITEMS[r.out]||{},isNew=!!(it.ig&&String(r.out).startsWith('igr_'));const ig=IG.find(x=>x.k===r.out);return Object.assign({id,ig:isNew,igN:isNew&&ig?ig.n:'',igImg:isNew&&ig?ig.img:'',igGive:isNew&&ig?ig.give:''},JSON.parse(JSON.stringify(r)));});return AS.rcp;}
function rcpRead(){const R=rcpRows(),v=id=>document.getElementById(id);R.forEach((r,i)=>{const p='rc'+i+'_';if(!v(p+'lv'))return;r.ig=v(p+'ig').checked;if(v(p+'out'))r.out=v(p+'out').value;if(v(p+'igN')){r.igN=v(p+'igN').value.trim();r.igImg=v(p+'igImg').value.trim();r.igGive=v(p+'igGive').value.trim();}
 r.n=Math.max(1,+v(p+'n').value||1);r.lv=Math.max(1,Math.min(5,+v(p+'lv').value||1));r.min=Math.max(1,+v(p+'min').value||1);r.c=Math.max(0,+v(p+'c').value||0);r.ki={};KIK.forEach(e=>{const n=+v(p+'k_'+e).value||0;if(n>0)r.ki[e]=n;});});}
function aRcp(){const R=rcpRows(),opts=['coins'].concat(Object.keys(ITEMS).filter(k=>ITEMS[k].cat!=='운영자'&&ITEMS[k].cat!=='근두운')).concat(...[0,1,2,3,4,5].map(g=>GT.map(t=>'gear:'+t+':'+g)));
 return '<div class="card adm"><h2>제작소 레시피</h2><p class="muted">제작소 단계가 되면 열려요 (5단계 제작소는 시간 -20%). <b>인게임 아이템</b>에 체크하면 새 인게임 아이템을 만들어요: 이름과 give 명령어를 적으면, 유저가 코드화한 뒤 게임에서 그 명령어 그대로 받아요.</p>'+
 R.map((r,i)=>{const p='rc'+i+'_';return '<div class="rcpe"><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f gmchk" style="color:inherit"><input type="checkbox" id="'+p+'ig" data-x="rcpToggle" '+(r.ig?'checked':'')+'>인게임 아이템</label>'+
  (r.ig?'<label class="f">이름<input type="text" id="'+p+'igN" value="'+esc(r.igN||'')+'" style="width:120px"></label><label class="f">그림 경로<input type="text" id="'+p+'igImg" value="'+esc(r.igImg||'')+'" placeholder="i/ig_b31.png" style="width:140px"></label><label class="f" style="flex:1;min-width:260px">give 명령어<input type="text" id="'+p+'igGive" value="'+esc(r.igGive||'')+'" placeholder="give @p book[item_name=...] 1"></label>'
  :'<label class="f">결과물<select id="'+p+'out">'+opts.map(k=>'<option value="'+k+'" '+(k===r.out?'selected':'')+'>'+esc(outInfo(k).n)+(outInfo(k).ig?' (인게임)':'')+'</option>').join('')+'</select></label>')+
  '<label class="f">개수<input type="number" id="'+p+'n" value="'+(r.n||1)+'" min="1" style="width:56px"></label><label class="f">제작소 단계<input type="number" id="'+p+'lv" value="'+(r.lv||1)+'" min="1" max="5" style="width:56px"></label><label class="f">시간(분)<input type="number" id="'+p+'min" value="'+r.min+'" style="width:70px"></label><label class="f">환수코인<input type="number" id="'+p+'c" value="'+(r.c||0)+'" style="width:64px"></label>'+
  KIK.map(e=>'<label class="f">'+ELK[e]+'<input type="number" id="'+p+'k_'+e+'" value="'+((r.ki||{})[e]||0)+'" min="0" style="width:56px"></label>').join('')+'<button class="btn red sm" data-x="rcpDel" data-i="'+i+'">삭제</button></div></div>';}).join('')+
 '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn soft" data-x="rcpAdd">레시피 추가</button><button class="btn" data-x="rcpSave">저장</button><button class="btn soft" data-x="rcpReset">기본값으로</button></div></div>';}
/* ----- 인게임 아이템 목록 · 코드 기록 ----- */
function igRows(){if(!AS.igr)AS.igr=IG.map(x=>Object.assign({},x));return AS.igr;}
function aLib(){if(!AS.list){setTimeout(()=>AD.loadList(),0);return '<div class="card"><p class="muted">불러오는 중…</p></div>';}
 const R=igRows(),all=[];AS.list.forEach(a=>(a.igc||[]).forEach(c=>all.push(Object.assign({aid:a.id},c))));all.sort((x,y)=>y.t-x.t);
 const chk=AS.igChk||'';let res='';if(chk){const m=igParse(chk);if(!m)res='<p class="warn">코드 형식이 아니에요. (플레이어-회차-번호-개수…-확인숫자)</p>';else{const who=AS.list.find(a=>a.playerNo===m.P0);res='<p class="'+(m.ok?'ok':'warn')+'">'+(m.ok?'올바른 코드예요':'확인 숫자가 맞지 않아요')+' · 플레이어 '+m.P0+(who?' ('+esc(who.id)+')':'')+' · 회차 '+m.N+' · '+m.pairs.map(([n,c])=>{const x=IG.find(y=>y.no===n);return (x?x.n:'#'+n)+' ×'+c;}).join(', ')+'</p>';}}
 return '<div class="card adm"><h2>인게임 아이템</h2><p class="muted">번호는 코드 안에 들어가요. 이미 발급된 코드가 있으면 번호를 바꾸지 마세요. 게임 안 데이터팩은 이 목록의 give 명령어로 만들어요.</p><div style="overflow-x:auto"><table class="t"><tr><th>번호</th><th>그림</th><th>이름</th><th>그림 경로</th><th>give 명령어</th><th></th></tr>'+
  R.map((x,i)=>'<tr><td><input type="number" id="ig'+i+'_no" value="'+x.no+'" style="width:56px"></td><td><img class="px" src="'+esc(x.img||'i/q.png')+'" width="32" height="32" alt=""></td><td><input type="text" id="ig'+i+'_n" value="'+esc(x.n)+'" style="width:110px"></td><td><input type="text" id="ig'+i+'_img" value="'+esc(x.img||'')+'" style="width:130px"></td><td><input type="text" id="ig'+i+'_give" value="'+esc(x.give||'')+'" style="width:520px"></td><td>'+(String(x.k).startsWith('igr_')?'<span class="muted">레시피</span>':'')+'</td></tr>').join('')+'</table></div><div style="margin-top:10px;display:flex;gap:8px"><button class="btn" data-x="igSave">저장</button><button class="btn soft" data-x="igReset">기본값으로</button></div>'+'<details style="margin-top:12px"><summary><b>데이터팩 파일 (아이템을 추가·수정했을 때)</b></summary><p class="muted">아래 파일들을 데이터팩의 <code>data/hwansu/function/ig/</code> 폴더에 같은 이름으로 넣고(덮어쓰기) 게임에서 /reload 하면 돼요.</p>'+igDpFiles().map(([f,c])=>'<div style="margin:8px 0"><b><code>'+f+'</code></b> <button class="btn sm soft" data-copy="'+esc(c)+'">복사</button><pre class="igpre">'+esc(c)+'</pre></div>').join('')+'</details></div>'+
 '<div class="card adm"><h2>코드 확인 · 발급 기록</h2><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">코드 확인<input type="text" id="igChkIn" value="'+esc(chk)+'" placeholder="3-1-3-2-5-1-1234" style="width:240px"></label><button class="btn sm" data-x="igCheck">확인</button><button class="btn soft sm" data-x="loadList">새로고침</button></div>'+res+
 (all.length?'<div style="overflow-x:auto"><table class="t" style="margin-top:10px"><tr><th>시각</th><th>아이디</th><th>코드</th><th>아이템</th><th></th></tr>'+all.slice(0,200).map(c=>'<tr><td>'+new Date(c.t).toLocaleString('ko-KR',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})+'</td><td>'+esc(c.aid)+'</td><td><code>'+esc(c.code)+'</code>'+(c.re?'<br><small class="muted">재발급 (이전 '+esc(c.re)+')</small>':'')+'</td><td>'+esc(c.txt||'')+'</td><td>'+(isMain()?'<button class="btn soft sm" data-xigre="'+esc(c.aid)+'|'+esc(c.code)+'">새 번호로 재발급</button>':'')+'</td></tr>').join('')+'</table></div>':'<p class="muted">아직 발급된 코드가 없어요.</p>')+
 '<details style="margin-top:12px"><summary class="muted">해방 단계별 보상표</summary><table class="t"><tr><th>단계</th><th>보상 (우편)</th></tr>'+[4,5,6,7,8,9,10,11,12].map(st=>'<tr><td>'+st+'</td><td>'+mailParts(libMail(st)).join(', ')+'</td></tr>').join('')+'</table></details></div>';}
function giveMacro(g){let s=String(g||'').trim().replace(/^\//,'');s=s.replace(/^give\s+\S+\s+/,'');s=s.replace(/\s+\d+\s*$/,'');return '$give @s '+s+' $(n)';}
function igDpFiles(){return [['ig/registry.mcfunction','# ── 인게임 아이템 목록 (웹 [인게임 코드] 탭과 번호가 같아야 해요) ──\ndata modify storage hwansu:ig known set value {}\n'+IG.map(x=>'data modify storage hwansu:ig known.i'+x.no+' set value 1b').join('\n')]].concat(IG.map(x=>['ig/i'+x.no+'.mcfunction','# '+x.no+'번 '+x.n+'\n'+giveMacro(x.give)]));}
/* ----- 컬렉션 ----- */
function colRows(){if(!AS.cols)AS.cols=(cfg.cols&&cfg.cols.length?cfg.cols:colDefaults().map(c=>Object.assign(c,{m:c.m.filter(canFree)})).filter(c=>c.m.length)).map(c=>({id:c.id,n:c.n,m:(c.m||[]).map(dexNo).join(', '),rw:JSON.parse(JSON.stringify(c.rw||{}))}));return AS.cols;}
function colRead(){const R=colRows(),v=id=>document.getElementById(id);R.forEach((c,i)=>{const p='co'+i+'_';if(!v(p+'n'))return;c.n=v(p+'n').value.trim();c.m=v(p+'m').value;const it=v(p+'it').value,q=Math.max(1,+v(p+'q').value||1);c.rw={coins:Math.max(0,+v(p+'c').value||0),eggs:Math.max(0,+v(p+'e').value||0),items:it?{[it]:q}:{},gear:[]};});}
function aCols(){const R=colRows(),opts=Object.keys(ITEMS).filter(k=>ITEMS[k].cat!=='근두운');
 return '<div class="card adm"><h2>컬렉션</h2><p class="muted">환수는 도감 번호를 쉼표로 적어요 (최대 12마리, 스타즈렐름은 s1-03처럼). 해방한 환수에 불이 들어오고(스타즈렐름은 획득만 해도), 다 켜지면 유저가 보상을 우편으로 받아요.</p>'+
 R.map((c,i)=>{const p='co'+i+'_',ik=Object.keys(c.rw.items||{})[0]||'',iq=ik?c.rw.items[ik]:1,nums=String(c.m).split(',').map(s=>parseDexNo(s)).filter(n=>n>=0);return '<div class="rcpe"><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">이름<input type="text" id="'+p+'n" value="'+esc(c.n)+'" style="width:170px"></label><label class="f" style="flex:1;min-width:260px">환수 번호 ('+nums.length+'/12)<input type="text" id="'+p+'m" value="'+esc(c.m)+'"></label><label class="f">환수코인<input type="number" id="'+p+'c" value="'+(c.rw.coins||0)+'" style="width:70px"></label><label class="f">환수 알<input type="number" id="'+p+'e" value="'+(c.rw.eggs||0)+'" style="width:56px"></label><label class="f">아이템<select id="'+p+'it"><option value="">없음</option>'+opts.map(k=>'<option value="'+k+'" '+(k===ik?'selected':'')+'>'+esc(ITEMS[k].n)+'</option>').join('')+'</select></label><label class="f">수량<input type="number" id="'+p+'q" value="'+iq+'" style="width:56px"></label><button class="btn red sm" data-x="colDel" data-i="'+i+'">삭제</button></div><div class="colpv">'+nums.slice(0,12).map(n=>'<img class="px" src="'+img(n)+'" title="'+esc(NAMES[n])+'" alt="">').join('')+'</div></div>';}).join('')+
 '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn soft" data-x="colAdd">컬렉션 추가</button><button class="btn soft" data-x="colPreview">미리보기 갱신</button><button class="btn" data-x="colSave">저장</button><button class="btn soft" data-x="colReset">기본값으로</button></div></div>';}
/* ----- 이벤트 ----- */
function aEvent(){const ev=cfg.ev||{},E=ev.exp||{},Pd=ev.prod||{},Ht=ev.hot||{},rw=Ht.rw||{},ik=Object.keys(rw.items||{})[0]||'',dt=v=>esc(v||'');
 const st=e=>evOn(e)?'<b style="color:#2e7d3a">진행 중</b>':e&&e.on?'<span class="muted">예약됨/종료</span>':'<span class="muted">꺼짐</span>';
 return '<div class="card adm" style="max-width:860px"><h2>이벤트 · 공지</h2><p class="muted">켜진 이벤트는 기간 동안 유저 화면 맨 위에 자동으로 공지돼요. 기간을 비우면 끌 때까지 계속돼요.</p>'+
 '<div class="evbox"><b>상시 경험치 배율</b> <select id="cfgExp">'+[1,1.5,2,3].map(v=>'<option '+((cfg.expMult||1)==v?'selected':'')+'>'+v+'</option>').join('')+'</select>'+(isMain()?'<label class="f" style="flex:1;min-width:260px">상단 공지 (비우면 숨김)<input type="text" id="cfgNotice" value="'+esc(cfg.notice||'')+'"></label>':'')+'</div>'+
 '<div class="evbox"><label class="gmchk" style="color:inherit"><input type="checkbox" id="evE_on" '+(E.on?'checked':'')+'><b>경험치 이벤트</b></label> '+st(E)+'<label class="f">배율<select id="evE_m">'+[1.5,2,3,5].map(v=>'<option '+((+E.m||2)==v?'selected':'')+'>'+v+'</option>').join('')+'</select></label><label class="f">시작<input type="datetime-local" id="evE_s" value="'+dt(E.s)+'"></label><label class="f">끝<input type="datetime-local" id="evE_e" value="'+dt(E.e)+'"></label></div>'+
 '<div class="evbox"><label class="gmchk" style="color:inherit"><input type="checkbox" id="evP_on" '+(Pd.on?'checked':'')+'><b>생산 시간 감소</b></label> '+st(Pd)+'<label class="f">감소 %<input type="number" id="evP_pct" value="'+(Pd.pct||30)+'" min="1" max="90" style="width:70px"></label><label class="f">시작<input type="datetime-local" id="evP_s" value="'+dt(Pd.s)+'"></label><label class="f">끝<input type="datetime-local" id="evP_e" value="'+dt(Pd.e)+'"></label><span class="muted" style="font-size:12px">마을 생산·제작소 제작 시간에 적용</span></div>'+
 '<div class="evbox"><label class="gmchk" style="color:inherit"><input type="checkbox" id="evH_on" '+(Ht.on?'checked':'')+'><b>핫타임</b></label> '+st(Ht)+'<label class="f">매일 시작<input type="time" id="evH_from" value="'+dt(Ht.from||'20:00')+'"></label><label class="f">매일 끝<input type="time" id="evH_to" value="'+dt(Ht.to||'22:00')+'"></label><label class="f">기간 시작<input type="datetime-local" id="evH_s" value="'+dt(Ht.s)+'"></label><label class="f">기간 끝<input type="datetime-local" id="evH_e" value="'+dt(Ht.e)+'"></label>'+
  '<label class="f">보상 환수코인<input type="number" id="evH_c" value="'+(rw.coins||0)+'" style="width:70px"></label><label class="f">보상 아이템<select id="evH_it"><option value="">없음</option>'+Object.keys(ITEMS).map(k=>'<option value="'+k+'" '+(k===ik?'selected':'')+'>'+esc(ITEMS[k].n)+'</option>').join('')+'</select></label><label class="f">수량<input type="number" id="evH_q" value="'+(ik?rw.items[ik]:1)+'" style="width:56px"></label><label class="f" style="flex:1;min-width:220px">우편 내용<input type="text" id="evH_msg" value="'+esc(Ht.msg||'')+'" placeholder="핫타임에 접속해 줘서 고마워요!"></label><span class="muted" style="font-size:12px">시간 안에 접속하면 하루 한 번 우편으로 보상</span></div>'+
 '<h3 class="serif" style="margin:14px 0 6px">미니게임 이벤트</h3><p class="muted" style="margin:0 0 6px">근두운 질주 이벤트는 보상에만 붙고 점수에는 영향을 주지 않아요. 미니게임이 닫혀 있으면 적용되지 않아요.</p>'+MG_EV.map(r=>{const e=ev[r[0]]||{};return '<div class="evbox"><label class="gmchk" style="color:inherit"><input type="checkbox" id="evG_'+r[0]+'_on" '+(e.on?'checked':'')+'><b>'+r[1]+'</b></label> '+st(e)+'<label class="f">'+r[2]+'<input type="number" step="0.1" min="0" id="evG_'+r[0]+'_v" value="'+(e.v!=null&&e.v!==''?e.v:r[3])+'" style="width:70px"></label><label class="f">시작<input type="datetime-local" id="evG_'+r[0]+'_s" value="'+dt(e.s)+'"></label><label class="f">끝<input type="datetime-local" id="evG_'+r[0]+'_e" value="'+dt(e.e)+'"></label></div>';}).join('')+
 '<div class="evbox"><b>🎄 크리스마스 설화 던전 기간</b><label class="f">시작일<input type="date" id="cfgXs" value="'+esc(cfg.xm&&cfg.xm.s||'')+'"></label><label class="f">종료일<input type="date" id="cfgXe" value="'+esc(cfg.xm&&cfg.xm.e||'')+'"></label></div>'+
 '<button class="btn" data-x="saveCfg">저장</button><p class="muted">'+(cfg.by?'마지막 변경: '+esc(cfg.by):'')+'</p></div>';}
const ADMCFG={
 async shopSave(){const D=DEF_ITEMS(),shop={};Object.keys(ITEMS).forEach(k=>{const e=document.getElementById('sp_'+k);if(!e)return;const p=Math.max(0,+e.value||0),d=Math.max(0,+document.getElementById('sd_'+k).value||0),w=Math.max(0,+document.getElementById('sw_'+k).value||0),df=D[k]||{};
   if(p!==(df.p||0)||d!==(df.daily||0)||w!==(df.weekly||0))shop[k]={p,d,w};});cfg.shop=shop;
  cfg.slotP={3:+document.getElementById('sSl3').value||0,4:+document.getElementById('sSl4').value||0};cfg.vilP=[0,1,2,3,4].map(i=>+document.getElementById('sVl'+i).value||0);cfg.eggP=+document.getElementById('sEgg').value||0;cfg.eggW=+document.getElementById('sEggW').value||0;
  const deco={};TILES.forEach((t,i)=>{const e=document.getElementById('sDt'+i);if(e)deco['tile:'+i]=+e.value||0;});PROPS.forEach((t,i)=>{deco['deco:'+i]=+document.getElementById('sDp'+i).value||0;});cfg.deco=deco;await saveGlobal('상점 설정 변경');},
 async shopReset(){confirmBox('상점 기본값','상점 가격·제한을 모두 기본값으로 되돌릴까요?',async()=>{delete cfg.shop;delete cfg.slotP;delete cfg.vilP;delete cfg.eggP;delete cfg.eggW;delete cfg.deco;await saveGlobal('상점 기본값 복원');});},
 rcpToggle(){rcpRead();render();},
 rcpAdd(){rcpRead();AS.rcp.push({id:'r'+Date.now().toString(36),out:'elixir',n:1,lv:1,min:60,c:0,ki:{},ig:false});render();},
 rcpDel(t){rcpRead();AS.rcp.splice(+t.dataset.i,1);render();},
 async rcpSave(){rcpRead();const R=AS.rcp,out={},ig=(cfg.ig&&cfg.ig.length?cfg.ig:IG_DEF).map(x=>Object.assign({},x));
  for(const r of R){if(r.ig){if(!r.igN||!r.igGive)return toast('인게임 레시피는 이름과 give 명령어를 꼭 적어 주세요.');const k=String(r.out).startsWith('igr_')?r.out:'igr_'+r.id;let x=ig.find(y=>y.k===k);if(!x){x={no:Math.max(0,...ig.map(y=>y.no))+1,k};ig.push(x);}x.n=r.igN;x.img=r.igImg||'i/q.png';x.give=r.igGive;r.out=k;}
   out[r.id]={out:r.out,n:r.n,lv:r.lv,min:r.min,c:r.c||0,ki:r.ki||{}};}
  cfg.rcp=out;cfg.rcpV=2;cfg.rcpCn=2;cfg.ig=ig;AS.rcp=null;AS.igr=null;await saveGlobal('제작소 레시피 변경 ('+R.length+'개)');},
 async rcpReset(){confirmBox('레시피 기본값','제작소 레시피를 기본값으로 되돌릴까요? (만든 인게임 아이템 목록은 남아요)',async()=>{delete cfg.rcp;AS.rcp=null;await saveGlobal('제작소 레시피 기본값 복원');});},
 async igSave(){const R=igRows();R.forEach((x,i)=>{x.no=+document.getElementById('ig'+i+'_no').value||x.no;x.n=document.getElementById('ig'+i+'_n').value.trim()||x.n;x.img=document.getElementById('ig'+i+'_img').value.trim();x.give=document.getElementById('ig'+i+'_give').value.trim();});
  const nos=R.map(x=>x.no);if(new Set(nos).size!==nos.length)return toast('번호가 겹쳐요.');cfg.ig=R.map(x=>Object.assign({},x));AS.igr=null;await saveGlobal('인게임 아이템 목록 변경');},
 async igReset(){confirmBox('인게임 아이템 기본값','기본 6종(동패조각~금강패)으로 되돌릴까요? 레시피로 만든 인게임 아이템은 목록에서 빠져요.',async()=>{delete cfg.ig;AS.igr=null;await saveGlobal('인게임 아이템 기본값 복원');});},
 colAdd(){colRead();AS.cols.push({id:'c'+Date.now().toString(36),n:'새 컬렉션',m:'',rw:{coins:30}});render();},
 colDel(t){colRead();AS.cols.splice(+t.dataset.i,1);render();},
 colPreview(){colRead();render();},
 async colSave(){colRead();const out=[];for(const c of AS.cols){const m=String(c.m).split(',').map(s=>s.trim()).filter(Boolean).map(parseDexNo);if(m.some(n=>n<0))return toast('「'+c.n+'」에 없는 도감 번호가 있어요.');const bad=m.filter(n=>!canFree(n));if(bad.length)return toast('「'+c.n+'」에 해방할 수 없는 환수가 있어요 (1~3단계·스타즈렐름): '+bad.map(dexNo).join(', '));if(!c.n||!m.length)return toast('컬렉션 이름과 환수를 적어 주세요.');if(m.length>12)return toast('「'+c.n+'」 환수가 12마리를 넘어요.');out.push({id:c.id,n:c.n,m,rw:c.rw});}
  cfg.cols=out;AS.cols=null;await saveGlobal('컬렉션 변경 ('+out.length+'개)');},
 async colReset(){confirmBox('컬렉션 기본값','컬렉션을 기본값으로 되돌릴까요?',async()=>{delete cfg.cols;AS.cols=null;await saveGlobal('컬렉션 기본값 복원');});},
 async saveCfg(){const v=id=>document.getElementById(id);cfg.expMult=+v('cfgExp').value;const n=v('cfgNotice');if(n)cfg.notice=n.value;{const xs=v('cfgXs'),xe=v('cfgXe');cfg.xm=xs.value&&xe.value?{s:xs.value,e:xe.value}:null;}
  const it=v('evH_it').value;cfg.ev={exp:{on:v('evE_on').checked,m:+v('evE_m').value,s:v('evE_s').value,e:v('evE_e').value},prod:{on:v('evP_on').checked,pct:Math.max(1,Math.min(90,+v('evP_pct').value||30)),s:v('evP_s').value,e:v('evP_e').value},
   hot:{on:v('evH_on').checked,from:v('evH_from').value,to:v('evH_to').value,s:v('evH_s').value,e:v('evH_e').value,msg:v('evH_msg').value,rw:{coins:Math.max(0,+v('evH_c').value||0),items:it?{[it]:Math.max(1,+v('evH_q').value||1)}:{},gear:[]}}};
  MG_EV.forEach(r=>{const g=x=>v('evG_'+r[0]+'_'+x);if(!g('on'))return;cfg.ev[r[0]]={on:g('on').checked,v:Math.max(0,+g('v').value||0),s:g('s').value,e:g('e').value};});
  await saveGlobal('이벤트/공지 변경');}
};

/* 운영자: '이미 받은 코드'가 뜬 코드를 같은 아이템·새 회차로 다시 만들기 */
async function igReissue(aid,code){const a=(AS.list||[]).find(x=>x.id===aid);if(!a)return toast('유저를 찾지 못했어요.');const m=igParse(code);if(!m||!m.ok)return toast('코드를 읽지 못했어요.');
 confirmBox('새 번호로 재발급',aid+'의 코드 '+code+'\n같은 아이템으로 새 회차 코드를 만들어 유저의 [발급한 코드] 목록에 바꿔 넣을까요?\n(예전 코드가 게임에서 이미 받아졌다면 아이템이 두 번 들어가니, 유저가 실제로 못 받은 경우에만 써 주세요)',async()=>{
  try{const ref=db.doc('accounts/'+a.uid),d=(await ref.get()).data()||{},L=d.igc||[],i=L.findIndex(c=>c.code===code);if(i<0)return toast('유저 기록에서 그 코드를 찾지 못했어요. 새로고침 후 다시 해 주세요.');
   const N=await igNextN(m.P0,d.igN||0,L),nc=[m.P0,N].concat(...m.pairs,[igChk(m.P0,N,m.pairs)]).join('-');
   L[i]=Object.assign({},L[i],{code:nc,re:code,t:Date.now(),p:m.pairs.map(([i2,n])=>({i:i2,n}))});
   await ref.update({igc:L,igN:Math.max(d.igN||0,N)});await ref.incr('rev',1);log('인게임 코드 재발급: '+aid+' '+code+' → '+nc);
   toast('새 코드: '+nc+' (유저의 발급한 코드 목록에도 바뀌어 들어갔어요)');await AD.loadList();}catch(e){toast('재발급 실패: '+(e&&e.message||e));}});}
/* ================= 운영자 사이트 ================= */
const AS={tab:'users',tgt:null,list:null,eggs:null,logs:null,newPw:'',codeGen:'',slot:0};
const ADM_GROUPS=[['user','유저','users',[['users','유저 관리'],['make','계정 만들기',1]]],['gift','보상·코드','gift',[['mail','우편'],['eggs','알 코드'],['lib','인게임 코드'],['tools','코드 테스트'],['att','출석 보상'],['pass','월정액'],['sup','후원 페이지']]],['cont','콘텐츠','cont',[['boss','월드보스'],['tower','구천탑'],['event','이벤트·공지'],['shop','상점 설정'],['rcp','제작소 레시피'],['cols','컬렉션'],['pvpcfg','대전 설정'],['dgcfg','도깨비 야행'],['krcfg','근두운 질주'],['ltcfg','복권']]],['log','기록·관리','log',[['backup','수동 저장 복구'],['gb','방명록 기록'],['logs','변경 기록'],['reset','전체 초기화',1]]]];
function admGroups(){return ADM_GROUPS.map(([g,n,ic,tabs])=>[g,n,ic,tabs.filter(t=>!t[2]||isMain())]);}
function admGroupOf(tab){const G=admGroups().find(x=>x[3].some(t=>t[0]===tab));return G?G[0]:'user';}
function adminHeader(){const G=admGroups(),cg=admGroupOf(AS.tab),cur=G.find(x=>x[0]===cg);
 return '<header class="sky"><div class="bar"><span class="logo">환수 운영자</span><nav class="main admgrp" aria-label="운영자 메뉴">'+G.map(([g,n,ic,tabs])=>'<button data-xtab="'+tabs[0][0]+'" class="'+(cg===g?'on':'')+'"><img class="px" src="i/adm/hd/ag_'+ic+'.png" alt="" onerror="this.style.display=\'none\'">'+n+'</button>').join('')+'</nav><a class="btn sm" href="index.html?test" target="_blank" rel="noopener" style="background:#f0c75e;color:#3a2414" title="실제 서버와 상관없는 가짜 계정으로 유저 화면을 시험해요">🧪 테스트 모드</a><span style="color:#fff8e6;font-size:13px">'+esc(acc.nick||acc.id)+' ('+(isMain()?'메인 운영자':'보조 운영자')+')</span><button class="btn ghost sm" data-a2="logout">로그아웃</button></div><nav class="admsub" aria-label="세부 메뉴">'+cur[3].map(([k,n])=>'<button data-xtab="'+k+'" class="'+(AS.tab===k?'on':'')+'">'+n+'</button>').join('')+'</nav></header>';}
function adminBody(){return {users:aUsers,make:aMake,eggs:aEggs,mail:aMail,boss:aBoss,tower:aTower,lib:aLib,event:aEvent,tools:aTools,logs:aLogs,reset:aReset,shop:aShop,rcp:aRcp,cols:aCols,gb:aGb,backup:aBackup,att:aAtt,pass:aPass,sup:aSup,pvpcfg:aPvpCfg,dgcfg:aDgCfg,krcfg:aKrCfg,ltcfg:aLtCfg}[AS.tab]();}
const roleN={main:'메인',sub:'보조',player:'플레이어'};
const VIEWN={village:'마을',home:'성장',train:'수련·심부름',gear:'장비',bag:'가방',shop:'상점',dex:'도감',pvp:'대전',boss:'토벌',tower:'구천탑',xmas:'설화 던전',guest:'전용 공간',code:'코드',mail:'우편',support:'후원',visit:'마을 구경'};
function viewIc(v){const n=NAV.find(x=>x[0]===v);return n?n[2]:({xmas:'nav_event',guest:'nav_portal',code:'nav_settings',mail:'nav_mail',visit:'nav_village'})[v]||'nav_village';}
function lampOf(t){if(!t)return 'off_lamp';const d=Date.now()-t;return d<180000?'on_lamp':d<900000?'away_lamp':'off_lamp';}
function agoTxt(t){const m=Math.floor((Date.now()-t)/60000);return m<1?'방금':m<60?m+'분 전':m<1440?Math.floor(m/60)+'시간 전':Math.floor(m/1440)+'일 전';}
function aUsers(){
 const L=AS.list||[];const tot=L.reduce((s,a)=>s+(a.coins||0),0),pets=L.reduce((s,a)=>s+(a.slots||[]).filter(Boolean).length,0);
 let h='<div class="row"><div class="card" style="flex:1 1 180px"><img class="px admst" src="i/adm/hd/st_users.png" alt="" onerror="this.remove()"><span class="muted">계정 수</span><div class="serif" style="font-size:28px;font-weight:700">'+L.length+'</div><small class="muted"><img class="px" src="i/adm/hd/st_online.png" alt="" style="width:20px;height:20px;vertical-align:-5px"> 지금 접속 중 <b style="color:#2e7d3a">'+L.filter(a=>a.seen&&Date.now()-a.seen<180000).length+'명</b></small></div><div class="card" style="flex:1 1 180px"><img class="px admst" src="i/adm/hd/st_coin.png" alt="" onerror="this.remove()"><span class="muted">서버 전체 환수코인</span><div class="serif" style="font-size:28px;font-weight:700">'+fmt(tot)+'</div></div><div class="card" style="flex:1 1 180px"><img class="px admst" src="i/adm/hd/st_pets.png" alt="" onerror="this.remove()"><span class="muted">키우는 환수</span><div class="serif" style="font-size:28px;font-weight:700">'+pets+'</div></div></div>';
 const ON=a=>a.seen&&Date.now()-a.seen<180000,onN=L.filter(ON).length,F=L.filter(a=>(!AS.find||(a.id+' '+(a.nick||'')).toLowerCase().includes(AS.find.toLowerCase()))&&(!AS.onlyOn||ON(a))).sort((x,y)=>(ON(y)?1:0)-(ON(x)?1:0)||(y.seen||0)-(x.seen||0));
 h+='<div class="admusers'+(AS.tgt?' split':'')+'"><div class="card admlist"><div class="admlh"><h2 style="margin:0">유저 목록 <small class="muted">'+F.length+'명</small> <button class="onbtn'+(AS.onlyOn?' on':'')+'" data-x="onlyOn"><img class="px" src="i/adm/hd/online_filter.png" alt="">접속 중 '+onN+'명</button></h2><div class="admfind"><input type="text" id="xFind" placeholder="아이디·닉네임 검색" value="'+esc(AS.find||'')+'"><button class="btn soft sm" data-x="find">검색</button><button class="btn soft sm" data-x="reload">새로고침</button></div></div><div class="admrows">'+
 F.map(a=>{const sl=(a.slots||[]).filter(Boolean),vp=((a.vil&&a.vil.pets)||[]).filter(Boolean),f=sl[0]||vp[0];return '<button class="admrow'+(AS.tgt&&AS.tgt.uid===a.uid?' on':'')+(a.banned?' ban':'')+'" data-xpick="'+esc(a.uid)+'" title="'+esc(sl.map(q=>NAMES[q.no]+' '+stN(q)).concat(vp.map(q=>'[마을] '+NAMES[q.no]+' '+stN(q))).join(', '))+'"><img class="px" src="'+(f?img(f.no):'i/q.png')+'" alt=""><span class="an"><b>'+esc(a.id)+'</b><small>'+esc(a.nick||'')+' · '+(roleN[a.role]||'')+'</small></span><span class="ac"><b>'+fmt(a.coins||0)+'</b><small>환수코인</small></span><span class="ap"><b>'+sl.length+'</b><small>성장</small></span><span class="ap"><b>'+vp.length+'</b><small>마을</small></span>'+(a.banned?'<span class="abn">정지</span>':'')+(ON(a)&&a.seenV?'<img class="px aview" src="i/ui/'+viewIc(a.seenV)+'.png" alt="" title="'+(VIEWN[a.seenV]||'')+'">':'')+'<img class="px aon" src="i/adm/hd/'+lampOf(a.seen)+'.png" alt="" title="'+(a.seen?(ON(a)?'접속 중 · '+(VIEWN[a.seenV]||a.seenV||''):'마지막 접속 '+agoTxt(a.seen)):'접속 기록 없음')+'"></button>';}).join('')+'</div></div>';
 if(AS.tgt)h+=aDetail();
 h+='</div>';
 return h;}
function aDetail(){return admSections(aDetail0());}
const ADM_SEC=[['base','재화'],['arena','대전'],['mail','우편'],['inv','아이템'],['deco','꾸미기'],['gear','장비'],['pet','환수'],['dex','도감'],['acct','계정']];
function admSections(h){h=h.replace(/^<div class="card adm">/,'').replace(/<\/div>\s*$/,'');const parts=h.split(/<!--SEC:(\w+)-->/),sec={base:parts[0]};for(let i=1;i<parts.length;i+=2)sec[parts[i]]=parts[i+1];
 const ce=sec.base.indexOf('data-x="close">닫기</button></div>')+'data-x="close">닫기</button></div>'.length,head=sec.base.slice(0,ce);sec.base=sec.base.slice(ce);
 const avail=ADM_SEC.filter(([k])=>sec[k]!=null);if(!avail.some(x=>x[0]===AS.dtab))AS.dtab=avail.some(x=>x[0]==='pet')?'pet':'base';
 return '<div class="card adm admdet">'+head+'<div class="tmode admdtabs">'+avail.map(([k,n])=>'<button class="'+(AS.dtab===k?'on':'')+'" data-xdtab="'+k+'"><img class="px" src="i/adm/hd/at_'+k+'.png" alt="" onerror="this.remove()">'+n+'</button>').join('')+'</div><div class="admsec">'+sec[AS.dtab]+'</div></div>';}
function aDetail0(){const t=AS.tgt,main=isMain();
 let h='<div class="card adm"><div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;align-items:baseline"><h2 style="margin:0">'+esc(t.id)+' <span class="muted">('+esc(t.nick)+' · '+(roleN[t.role]||'')+' · 플레이어 번호 '+(t.playerNo||'없음')+' · 코드 회차 '+(t.lastNonce||0)+')</span> '+(t.seen&&Date.now()-t.seen<180000?'<span class="onchip on"><img class="px" src="i/adm/hd/on_lamp.png" alt=""> 접속 중 · '+(VIEWN[t.seenV]||'')+'</span>':'<span class="onchip"><img class="px" src="i/adm/hd/'+lampOf(t.seen)+'.png" alt=""> '+(t.seen?'마지막 접속 '+agoTxt(t.seen):'접속 기록 없음')+'</span>')+'</h2><button class="btn soft sm" data-x="close">닫기</button></div>';
 h+='<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:12px"><b style="font-size:15px">환수코인 '+fmt(t.coins||0)+'</b><label class="f">수량<input type="number" id="xCoin" value="100" style="width:100px"></label><button class="btn sm" data-x="coinAdd">추가</button><button class="btn soft sm" data-x="coinSub">차감</button><button class="btn soft sm" data-x="coinSet">이 값으로 설정</button><label class="f" style="flex:1;min-width:160px">메모 (기록에 남아요)<input type="text" id="xMemo" placeholder="예: 버그 보상"></label></div>';
 h+='<!--SEC:arena--><h3 class="serif" style="margin:18px 0 6px">대전 · 무혼패</h3>'+(AS.tgtArena===undefined?'<p class="muted">불러오는 중…</p>':!AS.tgtArena?'<p class="muted">아직 대전에 참여하지 않았어요 (대표 환수 미지정).</p>':(()=>{const e=aEff(AS.tgtArena),pt=AS.tgtArena.pet;return '<div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap"><img class="px" src="i/ui2/muhon_pae.png" alt="" width="40" height="40"><b style="font-size:22px">'+e.m+'</b><span class="muted">이번 주 · 공격 '+e.w+'승 '+e.l+'패 · 방어 '+e.dw+'승 '+e.dl+'패'+(pt?' · 대표 '+esc(NAMES[pt.no])+' (전투력 '+fmt(pt.cp)+')':' · 대표 환수 없음')+'</span></div><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:8px"><label class="f">무혼패<input type="number" id="xMedal" value="10" min="0" style="width:90px"></label><button class="btn sm" data-x="medalAdd">추가</button><button class="btn soft sm" data-x="medalSub">차감</button><button class="btn soft sm" data-x="medalSet">이 값으로 설정</button><button class="btn soft sm" data-x="medalReset">100으로 초기화</button></div><p class="muted" style="margin:4px 0 0">이번 주 점수만 바뀌어요. 위의 메모 칸에 적은 내용이 변경 기록에 같이 남아요.</p>';})());
 h+='<!--SEC:mail--><h3 class="serif" style="margin:18px 0 6px">우편 보내기</h3>'+mailForm('mU')+'<div style="margin-top:8px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><button class="btn teal sm" data-x="sendOne">이 유저에게 보내기</button>'+(t.mail&&t.mail.length?'<span class="muted">안 받은 우편 '+t.mail.length+'개: '+t.mail.map(m=>esc(m.title||'우편')).join(', ')+'</span>':'')+'</div>';
 if(!main)return h+'<p class="muted" style="margin-top:10px">보조 운영자는 환수코인과 우편만 다룰 수 있어요.</p></div>';
 const itemOpts=Object.entries(ITEMS).map(([k,v])=>'<option value="'+k+'">'+v.n+'</option>').join('');
 h+='<!--SEC:inv--><h3 class="serif" style="margin:18px 0 6px">아이템창</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">아이템<select id="xItem">'+itemOpts+'</select></label><label class="f">수량<input type="number" id="xQty" value="10" min="1" style="width:80px"></label><button class="btn sm" data-x="itemGive">지급</button></div><div class="items" style="margin-top:10px">'+Object.entries(ITEMS).map(([k,v])=>'<label class="item" style="cursor:default"><img class="px" src="'+v.img+'" alt=""><span class="t"><b>'+v.n+'</b></span><input type="number" min="0" data-xinv="'+k+'" value="'+(t.inv[k]||0)+'" style="width:72px"></label>').join('')+'</div><div style="margin-top:8px"><button class="btn sm" data-x="invSave">아이템 수량 저장</button></div>';
 h+='<!--SEC:deco--><h3 class="serif" style="margin:18px 0 6px">마을 꾸미기 지급 (보관함)</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">꾸미기<select id="xDeco">'+TILES.map((d,n)=>d.free?'':'<option value="tile:'+n+'">길·바닥 · '+d.n+'</option>').join('')+PROPS.map((d,n)=>'<option value="deco:'+n+'">소품 · '+d.n+'</option>').join('')+THEME_KEYS.map(k=>THEMES[k].props.map((n,i)=>'<option value="tp:'+k+':'+(i+1)+'">'+THEMES[k].n+' 소품 · '+n+'</option>').join('')).join('')+'</select></label><label class="f">수량<input type="number" id="xDecoN" value="1" min="1" style="width:70px"></label><button class="btn sm" data-x="decoGive">지급</button><label class="f">마을 한도<input type="number" id="xVilCap" value="'+((t.vil&&t.vil.cap)||VIL_CAP0)+'" min="15" max="40" style="width:70px"></label><button class="btn soft sm" data-x="vilCapSet">한도 저장</button></div>';
 h+='<!--SEC:gear--><h3 class="serif" style="margin:18px 0 6px">장비</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">종류<select id="xEqT">'+EQ_OPTS().map(([k,n])=>'<option value="'+k+'">'+n+'</option>').join('')+'</select></label><label class="f">등급<select id="xEqG">'+GN.map((n,i)=>'<option value="'+i+'">'+n+'</option>').join('')+'</select></label><label class="f">강화<input type="number" id="xEqP" value="0" min="0" max="9" style="width:70px"></label><button class="btn sm" data-x="eqGive">장비 지급</button></div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;margin-top:10px">'+(t.gear.length?t.gear.map(g=>'<div class="gear g'+g.g+'"><img class="px" src="'+gearImg(g)+'" alt="" style="width:56px;height:56px"><b class="c'+g.g+'" style="font-size:12px">'+gearName(g)+' +'+g.p+'</b><button class="btn red sm" data-xgdel="'+esc(g.u)+'">회수</button></div>').join(''):'<p class="muted">장비가 없어요.</p>')+'</div>';
 const vm=AS.pmode==='vil',gm=AS.pmode==='gsp',vp=(t.vil&&t.vil.pets)||[],gn=Object.values(t.gsp||{}).reduce((n,L)=>n+(L||[]).length,0),p=aSelPet();
 h+='<!--SEC:pet--><h3 class="serif" style="margin:18px 0 6px">환수</h3><div class="tmode" style="margin-bottom:8px"><button class="'+(vm||gm?'':'on')+'" data-xpmode="slot">성장 중 ('+t.slots.filter(Boolean).length+')</button><button class="'+(vm?'on':'')+'" data-xpmode="vil">마을 ('+vp.length+')</button><button class="'+(gm?'on':'')+'" data-xpmode="gsp">전용 공간 ('+gn+')</button></div>'+(vm?aVilPets(t):gm?aGspPets(t):'<div class="slots">'+t.slots.map((_,i)=>'<button class="slot'+(AS.slot===i?' on':'')+'" data-xslot="'+i+'">'+(t.slots[i]?'<img class="px" src="'+img(t.slots[i].no)+'" alt=""><span><b>'+NAMES[t.slots[i].no]+'</b><small>'+stN(t.slots[i])+' Lv '+t.slots[i].lv+(t.slots[i].sick!=null?' · 아픔':'')+(t.slots[i].train?' · 수련 중':'')+'</small></span>':'<span style="padding:12px"><b>빈 슬롯 '+(i+1)+'</b>'+(t.notice&&t.notice[i]?'<small>'+esc(t.notice[i])+'</small>':'')+'</span>')+'</button>').join('')+'</div>')+'';
 if(p){const formOpts=NAMES.map((n,i)=>'<option value="'+i+'" '+(p.no===i?'selected':'')+'>'+dexNo(i)+' '+n+' ('+(isGuest(i)?'GUEST':stN(FORMS[i])+'')+')</option>').join('');
  h+='<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:12px"><label class="f">환수 종류<select id="xNo">'+formOpts+'</select></label><label class="f">레벨<input type="number" id="xLv" value="'+p.lv+'" min="1" max="99" style="width:70px"></label><label class="f">각성 ★<input type="number" id="xStar" value="'+(p.star||0)+'" min="0" max="5" style="width:60px"></label>'+GAUGES.map(e=>'<label class="f">'+ELK[e]+'<input type="number" id="xEl_'+e+'" value="'+(p.g[e]||0)+'" min="0" max="50" style="width:60px"></label>').join('')+'</div><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:8px">'+[['hu','포만감'],['th','목마름'],['cl','청결도'],['aff','호감도'],['en','행동력']].map(([k,n])=>'<label class="f">'+n+'<input type="number" id="xS_'+k+'" value="'+Math.round(p[k])+'" min="0" style="width:72px"></label>').join('')+'<button class="btn teal sm" data-x="petApply">적용</button></div><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn sm" data-xp="finish">수련·심부름 즉시 완료</button><button class="btn sm" data-xp="wake">깨우기</button><button class="btn sm" data-xp="cure">병 치료</button><button class="btn sm" data-xp="unlock">오행 게이지 초기화</button><button class="btn sm" data-xp="daily">오늘 횟수 초기화</button><button class="btn sm red" data-xp="del">환수 삭제</button></div>';}
 if(p&&gm){h+='<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;align-items:center"><b>위치:</b><span class="muted">'+esc((GSP[AS.gs]||{}).n||AS.gs)+' (전용 공간)</span><button class="btn sm" data-xgp="toslot">빈 성장 슬롯으로 옮기기</button><button class="btn red sm" data-xgp="del">전용 공간에서 삭제</button></div>';}
 if(p&&vm){const b=p.vb&&t.vil.b.find(x=>x.u===p.vb);h+='<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;align-items:center"><b>마을 위치:</b><span class="muted">'+(b?esc(BLD[b.k].n)+'에 배치 중':p.isl?esc(THEMES[p.isl]?THEMES[p.isl].n:p.isl)+' 구경 중':'마을 자유 배치')+'</span>'+(b||p.isl?'<button class="btn soft sm" data-xvp="free">배치 해제·마을로</button>':'')+'<button class="btn sm" data-xvp="toslot">빈 성장 슬롯으로 옮기기</button><button class="btn red sm" data-xvp="del">마을에서 삭제</button></div>';}
 if(vm)h+='<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:10px"><label class="f">마을에 복구할 환수<select id="xVRestore">'+NAMES.map((n,i)=>'<option value="'+i+'">'+dexNo(i)+' '+n+'</option>').join('')+'</select></label><label class="f">레벨<input type="number" id="xVRLv" value="1" min="1" style="width:70px"></label><button class="btn sm" data-xvp="restore">마을에 환수 복구</button><span class="muted">마을 한도와 상관없이 넣어요</span></div>';
 else if(!p)h+='<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><button class="btn teal sm" data-xp="egg">이 슬롯에 알 넣기</button><button class="btn sm" data-xp="yyegg">음양알 넣기</button>'+(t.notice&&t.notice[AS.slot]?'<span class="muted">'+esc(t.notice[AS.slot])+'</span>':'')+'</div><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:8px"><label class="f">복구할 환수<select id="xRestore">'+NAMES.map((n,i)=>'<option value="'+i+'">'+dexNo(i)+' '+n+'</option>').join('')+'</select></label><label class="f">레벨<input type="number" id="xRLv" value="1" min="1" style="width:70px"></label><button class="btn sm" data-x="restore">환수 복구</button><span class="muted">소멸·실수 해방 복구용</span></div>';
 const owned=Object.keys(t.dex).map(Number).sort((a,b)=>a-b);
 h+='<!--SEC:dex--><h3 class="serif" style="margin:18px 0 6px">도감 ('+owned.length+'/'+DEX_N+')</h3><p class="muted" style="margin:0 0 6px">'+(owned.length?owned.map(i=>dexNo(i)+' '+NAMES[i]+(t.dex[i].freed?'(解)':'')).join(', '):'비어 있어요')+'</p><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">도감 번호<input type="text" id="xDex" value="0" placeholder="12 또는 s1-03" style="width:110px" list="xDexL"><datalist id="xDexL">'+NAMES.map((n,i)=>'<option value="'+dexNo(i)+'">'+esc(n)+'</option>').join('')+'</datalist></label><button class="btn sm" data-x="dexAdd">채우기</button><button class="btn soft sm" data-x="dexDel">지우기</button><button class="btn soft sm" data-x="dexFree">解 표시 켜기/끄기</button></div>';
 h+='<!--SEC:acct--><h3 class="serif" style="margin:18px 0 6px">계정</h3><div style="display:flex;gap:8px;flex-wrap:wrap">'+(t.uid!==acc.uid?'<button class="btn soft sm'+(t.banned?' unban':'')+'" data-x="ban">'+(t.banned?'정지 해제':'계정 정지')+'</button><button class="btn red sm" data-x="delAcc">게임 데이터 삭제</button>':'')+'</div><h3 class="serif" style="margin:18px 0 6px">💾 수동 저장 기록 (최근 5개)</h3>'+(AS.bk&&AS.bk.uid===t.uid?(AS.bk.list.length?bkRows(AS.bk.list,t):'<p class="muted">이 유저는 아직 수동 저장을 한 적이 없어요.</p>'):'<button class="btn soft sm" data-x="bkLoad">수동 저장 기록 불러오기</button>')+'<p class="muted">비밀번호를 잊은 유저는 Firebase 콘솔 → Authentication에서 그 사용자를 삭제한 뒤, "계정 만들기"에서 같은 아이디로 다시 만들면 게임 데이터가 그대로 이어져요.</p></div>';
 return h;}
function mailItemRow(px,k,n){const opts='<option value="">없음</option>'+Object.entries(ITEMS).map(([kk,v])=>'<option value="'+kk+'"'+(k===kk?' selected':'')+'>'+v.n+'</option>').join('');
 return '<div class="mrow" style="display:flex;gap:6px;align-items:flex-end"><label class="f">아이템<select class="mi">'+opts+'</select></label><label class="f">수량<input type="number" class="mq" min="1" value="'+(n||1)+'" style="width:72px"></label><button class="btn ghost sm" data-x="mailDelRow" title="빼기">✕</button></div>';}
function mailGearRow(px,g){return '<div class="mrow" style="display:flex;gap:6px;align-items:flex-end"><label class="f">장비<select class="mgt"><option value="">없음</option>'+EQ_OPTS().map(([k,n])=>'<option value="'+k+'"'+(g&&(g.t+(g.o?':'+g.o:g.k?':'+g.k:''))===k?' selected':'')+'>'+n+'</option>').join('')+'</select></label><label class="f">등급<select class="mgg">'+GN.map((n,i)=>'<option value="'+i+'"'+(g&&g.g===i?' selected':'')+'>'+n+'</option>').join('')+'</select></label><label class="f">강화<input type="number" class="mgp" min="0" max="9" value="'+(g?g.p:0)+'" style="width:64px"></label><button class="btn ghost sm" data-x="mailDelRow" title="빼기">✕</button></div>';}
function mailPetRow(px,pt){return '<div class="mrow" style="display:flex;gap:6px;align-items:flex-end"><label class="f">환수<select class="mpn"><option value="">없음</option>'+NAMES.map((n,i)=>'<option value="'+i+'"'+(pt&&pt.no===i?' selected':'')+'>no.'+dexNo(i)+' '+esc(n)+' ('+(FORMS[i]?FORMS[i].st:'?')+'단계 · '+gradeOf(i)+')</option>').join('')+'</select></label><label class="f">레벨<input type="number" class="mpl" min="1" max="99" value="'+(pt?pt.lv:1)+'" style="width:64px"></label><button class="btn ghost sm" data-x="mailDelRow" title="빼기">✕</button></div>';}
function mailForm(px,m){m=m||{};const its=Object.entries(m.items||{}),gs=m.gear||[],ps=m.pets||[];
 return '<div class="mform"><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f" style="flex:1;min-width:180px">제목<input type="text" id="'+px+'T" maxlength="40" value="'+esc(m.title||'')+'" placeholder="예: 가입을 환영해요!"></label><label class="f">환수코인<input type="number" id="'+px+'C" min="0" value="'+(m.coins||0)+'" style="width:90px"></label><label class="f">이벤트 코인<input type="number" id="'+px+'V" min="0" value="'+(m.evc||0)+'" style="width:90px"></label><label class="f">환수 알<input type="number" id="'+px+'E" min="0" max="3" value="'+(m.eggs||0)+'" style="width:64px"></label><label class="f">음양알<input type="number" id="'+px+'Y" min="0" max="3" value="'+(m.yyEggs||0)+'" style="width:64px"></label></div>'+
 '<label class="f" style="margin-top:8px">내용<textarea id="'+px+'M" rows="2" maxlength="300" style="width:100%;resize:vertical">'+esc(m.msg||'')+'</textarea></label>'+
 '<div id="'+px+'IR" style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;margin-top:8px">'+(its.length?its:[['',1]]).map(([k,n])=>mailItemRow(px,k,n)).join('')+'</div><button class="btn sm" style="margin-top:6px" data-x="mailAddItem" data-px="'+px+'">+ 아이템 추가</button>'+
 '<div id="'+px+'GR" style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;margin-top:10px">'+(gs.length?gs:[null]).map(g=>mailGearRow(px,g)).join('')+'</div><button class="btn sm" style="margin-top:6px" data-x="mailAddGear" data-px="'+px+'">+ 장비 추가</button>'+
 '<div id="'+px+'PR" style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;margin-top:10px">'+(ps.length?ps:[null]).map(pt=>mailPetRow(px,pt)).join('')+'</div><button class="btn sm" style="margin-top:6px" data-x="mailAddPet" data-px="'+px+'">+ 환수 추가</button><small class="muted" style="display:block;margin-top:4px">환수는 받을 때 빈 성장 슬롯 → 마을 순서로 들어가요. 자리가 없으면 그 우편은 받기를 미뤄요.</small></div>';}
function readMail(px){const v=id=>document.getElementById(px+id);const items={},gear=[],pets=[];
 if(v('PR'))v('PR').querySelectorAll('.mrow').forEach(r=>{const nv=r.querySelector('.mpn').value;if(nv==='')return;const no=+nv;if(!NAMES[no]||!FORMS[no])return;pets.push({no,lv:Math.min(maxLvP({no,st:FORMS[no].st}),Math.max(1,Math.floor(+r.querySelector('.mpl').value||1)))});});
 v('IR').querySelectorAll('.mrow').forEach(r=>{const k=r.querySelector('.mi').value,n=Math.max(1,Math.floor(+r.querySelector('.mq').value||1));if(k)items[k]=(items[k]||0)+n;});
 v('GR').querySelectorAll('.mrow').forEach(r=>{const gv=r.querySelector('.mgt').value;if(!gv)return;const gt=gv.split(':')[0],go=gv.split(':')[1],gg=+r.querySelector('.mgg').value;gear.push(Object.assign({t:gt,g:gg,p:Math.min(MAXP[gg],Math.max(0,+r.querySelector('.mgp').value||0))},go?(gt==='b'?{k:go}:{o:go}):{}));});
 return {title:v('T').value.trim(),msg:v('M').value.trim(),coins:Math.max(0,Math.floor(+v('C').value||0)),evc:v('V')?Math.max(0,Math.floor(+v('V').value||0)):0,eggs:Math.min(3,Math.max(0,Math.floor(+v('E').value||0))),yyEggs:Math.min(3,Math.max(0,Math.floor(+v('Y').value||0))),items,gear,pets:pets.slice(0,10)};}
function stampMail(m){return Object.assign({},m,{id:newMailId(),t:Date.now(),from:m.from||'운영자'});}
function aMail(){const w=cfg.welcome||{};const main=isMain();
 return '<div class="card adm" style="max-width:820px"><h2>전체 우편 보내기</h2><p class="muted">모든 플레이어 우편함에 똑같이 들어가요. 정지된 계정은 빠져요.</p>'+mailForm('mA')+'<div style="display:flex;gap:10px;align-items:center;margin-top:10px;flex-wrap:wrap"><label style="display:flex;gap:6px;align-items:center"><input type="checkbox" id="mAadm"> 운영자 계정에도 보내기</label><button class="btn teal sm" data-x="sendAll">전체 발송</button></div></div>'+
 '<div class="card adm" style="max-width:820px;margin-top:14px"><h2>가입 보상</h2><p class="muted">"계정 만들기"로 <b>새로</b> 만든 계정의 우편함에 자동으로 들어가요. (비밀번호 재발급으로 다시 만든 계정은 받지 않아요)</p>'+(main?'':'<p class="muted">보조 운영자는 볼 수만 있어요.</p>')+'<label style="display:flex;gap:6px;align-items:center;margin-bottom:8px"><input type="checkbox" id="mWon" '+(w.on?'checked':'')+(main?'':' disabled')+'> 가입 보상 켜기</label>'+mailForm('mW',w)+(main?'<div style="margin-top:10px"><button class="btn sm" data-x="saveWelcome">가입 보상 저장</button></div>':'')+(w.on?'<p class="ok" style="margin-top:8px">지금 설정: '+esc(w.title||'(제목 없음)')+' — '+esc(mailParts(w).join(', ')||'보상 없음')+'</p>':'<p class="muted" style="margin-top:8px">지금은 꺼져 있어요.</p>')+'</div>';}
function aMake(){return '<div class="card adm" style="max-width:640px"><h2>계정 만들기</h2><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">아이디 (영문·숫자 3~20자)<input type="text" id="nId" style="width:160px"></label><label class="f">마크 닉네임<input type="text" id="nNick" style="width:160px"></label><label class="f">권한<select id="nRole"><option value="player">플레이어</option><option value="sub">보조 운영자</option><option value="main">메인 운영자</option></select></label><button class="btn teal sm" data-x="mkAcc">만들기</button></div>'+(AS.newPw?'<p class="ok" style="margin-top:10px;font-size:15px">'+esc(AS.newPw)+'</p>':'')+'<p class="muted">비밀번호는 자동으로 만들어져요. 이 화면을 벗어나면 다시 볼 수 없으니 바로 DM으로 전달하세요. 예전에 쓰던 아이디로 다시 만들면 남아 있던 게임 데이터가 새 계정으로 옮겨져요.</p></div>';}
function aEggs(){return '<div class="card adm"><h2>알 코드 발급</h2><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">대상 아이디 (비우면 누구나)<input type="text" id="egT" style="width:160px"></label><label class="f">알 종류<select id="egK"><option value="">일반 알</option><option value="yy">음양알</option></select></label><label class="f">개수<input type="number" id="egN" value="1" min="1" max="20" style="width:70px"></label><button class="btn sm" data-x="mkEgg">발급</button><button class="btn soft sm" data-x="loadEggs">목록 새로고침</button></div>'+(AS.eggs?'<div style="overflow-x:auto"><table class="t" style="margin-top:10px"><tr><th>코드</th><th>대상</th><th>상태</th><th>발급</th><th></th></tr>'+AS.eggs.map(e=>'<tr><td><b>'+esc(e.id)+'</b>'+(e.kind==='yy'?' <span class="eltag" style="background:#ece6ff;color:#6a4ad0;border-color:#6a4ad0">음양알</span>':'')+'</td><td>'+esc(e.target||'누구나')+'</td><td>'+(e.used?'사용됨 ('+esc(e.by)+')':'미사용')+'</td><td>'+esc(e.from||'')+' · '+new Date(e.t).toLocaleDateString('ko-KR')+'</td><td>'+(e.used?'':'<button class="btn red sm" data-xegdel="'+esc(e.id)+'">취소</button>')+'</td></tr>').join('')+'</table></div>':'')+'</div>';}
function aTools(){return '<div class="card adm" style="max-width:640px"><h2>환수 코드 만들기 (테스트용)</h2><p class="muted">게임 없이 환수코인 입력을 확인할 때 써요. 데이터팩과 같은 계산식이에요.</p><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">플레이어 번호<input type="number" id="cgId" value="1" style="width:100px"></label><label class="f">회차<input type="number" id="cgN" value="1" style="width:80px"></label><label class="f">환수코인<input type="number" id="cgC" value="10" style="width:80px"></label><button class="btn sm" data-x="genCode">만들기</button></div>'+(AS.codeGen?'<p class="ok" style="margin-top:8px;font-size:16px">'+esc(AS.codeGen)+'</p>':'')+'</div>';}
function aReset(){return '<div class="card adm" style="max-width:720px;border:2px solid #b02a1f"><h2 style="color:#b02a1f">전체 초기화 (대개편 새 시작)</h2><p>모든 계정의 게임 데이터를 지우고 새로 시작해요. <b>아이디·비밀번호·닉네임·권한·정지 여부·플레이어 번호·코드 회차</b>는 그대로 남아요.</p><ul class="muted"><li>환수·아이템·장비·도감·마을·우편 등 모든 게임 데이터 삭제</li><li>대전(arena·battles), 구천탑(tower), 설화 던전 순위(xmrank), 월드보스(boss·bosshits) 기록 삭제</li><li>모든 계정에 아래 우편 「새 시작 보상」을 보내요</li></ul><div class="card" style="background:var(--paper2)">'+mailForm('rS',AS.rsMail||{title:'새 시작 보상',msg:'선계가 새롭게 단장했어요! 대개편으로 모든 기록이 새로 시작돼요. 작은 선물을 보내드려요.',coins:300,eggs:3,items:{egg_g2:1,food_1:10,dew:10},gear:[]})+'</div><label class="f">확인을 위해 <b>초기화</b>라고 적어 주세요<input type="text" id="rsTxt" style="width:200px"></label><div style="margin-top:10px"><button class="btn red" data-x="resetAll">전체 초기화 실행</button></div>'+(AS.resetLog?'<pre class="muted" style="white-space:pre-wrap;margin-top:10px">'+esc(AS.resetLog)+'</pre>':'')+'</div>';}
function bkRows(L,t){return '<div class="bkrows">'+L.map(b=>'<div class="bkrow"><div><b>'+new Date(b.t).toLocaleString('ko-KR')+'</b><small>'+(b.nick?esc(b.nick)+' · ':'')+'환수코인 '+fmt(b.coins||0)+' · 환수 '+(b.pets||0)+'마리'+(b.lv?' · 최고 Lv'+b.lv:'')+' · 기록 번호 '+(b.rev||0)+'</small></div><button class="btn red sm" data-x="bkRestore" data-bk="'+esc(b.key)+'">이 기록으로 복구</button></div>').join('')+'</div>'+(t?'<small class="muted">지금 계정: 환수코인 '+fmt(t.coins||0)+' · 환수 '+((t.slots||[]).filter(Boolean).length+((t.vil&&t.vil.pets)||[]).length)+'마리 · 기록 번호 '+(t.rev||0)+'</small>':'');}
async function bkRestoreOne(b,ask){const go=async()=>{try{const cur=await db.doc('accounts/'+b.uid).get(),c=cur.exists?cur.data():{},d=JSON.parse(b.data);d.uid=b.uid;d.role=c.role||d.role;d.banned=!!c.banned;d.rev=Math.max(c.rev||0,d.rev||0)+1;d.sess=null;d.mail=(c.mail||[]);d.msave=c.msave||d.msave;await db.doc('accounts/'+b.uid).set(d);if(ask){await log((b.id||b.uid)+' 계정을 수동 저장 기록('+new Date(b.t).toLocaleString('ko-KR')+')으로 복구');toast('복구했어요. 유저 화면에 바로 반영돼요.');AS.bk=null;await AD.loadList();const f=(AS.list||[]).find(x=>x.uid===b.uid);if(f&&AS.tgt&&AS.tgt.uid===b.uid){AS.tgt=normT(f);AS.base=CL(AS.tgt);}render();}return true;}catch(e){toast('복구 실패: '+(e&&e.message||e));return false;}};
 if(!ask)return go();confirmBox('수동 저장 기록으로 복구','"'+(b.id||b.uid)+'" 계정을 '+new Date(b.t).toLocaleString('ko-KR')+' 수동 저장 기록으로 되돌려요.\n그 뒤에 한 진행은 사라져요. (우편함은 지금 상태 유지)\n계속할까요?',go);}
function aBackup(){const L=AS.bkAll;return '<div class="card adm"><h2>💾 수동 저장 복구</h2><p class="muted">유저가 [💾 저장]으로 보관한 기록이에요. 유저마다 가장 최근 기록 1개씩 보여요 (개별 기록 5개는 유저 관리 → 계정 탭).</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn soft sm" data-x="bkLoadAll">불러오기</button>'+(L&&L.length&&isMain()?'<button class="btn red sm" data-x="bkRestoreAll">전체 유저 마지막 기록으로 복구</button>':'')+'</div>'+
 (L?(L.length?'<p class="muted">저장한 유저 '+L.length+'명 · 보관 기록 '+(AS.bkCnt||0)+'개</p><div class="bkrows">'+L.map(b=>{const a=(AS.list||[]).find(x=>x.uid===b.uid);return '<div class="bkrow"><div><b>'+esc(b.id||b.uid)+'</b> <small>'+esc(b.nick||'')+'</small><small>'+new Date(b.t).toLocaleString('ko-KR')+' 저장 · 환수코인 '+fmt(b.coins||0)+' · 환수 '+(b.pets||0)+'마리 · 기록 번호 '+(b.rev||0)+(a?' → 지금: 환수코인 '+fmt(a.coins||0)+' · 기록 번호 '+(a.rev||0):'')+'</small></div><button class="btn red sm" data-x="bkRestore" data-bk="'+esc(b.key)+'">복구</button></div>';}).join('')+'</div>':'<p class="muted">아직 수동 저장한 유저가 없어요.</p>'):'')+'</div>';}
function aLogs(){return '<div class="card adm"><h2>변경 기록</h2><button class="btn soft sm" data-x="loadLogs">불러오기</button>'+(AS.logs?'<div style="overflow-x:auto"><table class="t" style="margin-top:10px"><tr><th>시각</th><th>운영자</th><th>내용</th></tr>'+AS.logs.map(l=>'<tr><td>'+new Date(l.t).toLocaleString('ko-KR')+'</td><td>'+esc(l.by)+'</td><td>'+esc(l.msg)+'</td></tr>').join('')+'</table></div>':'')+'</div>';}
function randPw(){const c='abcdefghjkmnpqrstuvwxyz23456789';let s='';for(let i=0;i<8;i++)s+=c[Math.floor(rnd()*c.length)];return s;}
function randCode(){const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let s='EGG-';for(let i=0;i<8;i++){s+=c[Math.floor(rnd()*c.length)];if(i===3)s+='-';}return s;}
function blankAcc(id,uid,role,nick){return{id,uid,role:role||'player',nick:nick||id,banned:false,playerNo:null,lastNonce:0,coins:0,inv:{},gear:[],slots:[null,null,null],notice:[null,null,null],dex:{},mail:[],daily:null,offset:0,autoSleep:false,rev:1,gmig:1,created:Date.now()};}
function EQ_OPTS(){return [['w','무기'],['a','방어구'],['s','보조무기'],['n','노리개 (옵션 랜덤)']].concat(NG_MAIN.map(o=>['n:'+o,'노리개 · '+NG_OPT[o].n]),Object.keys(BELL).map(k=>['b:'+k,'방울 · '+BELL[k].n]));}
function tPet(no){const p=newPet(no);const t=Date.now();p.ts=t;p.lastPat=t;p.born=t;return p;}
const J=x=>JSON.stringify(x===undefined?null:x),CL=x=>x==null?x:JSON.parse(JSON.stringify(x));
function mergeT(base,tgt,fresh,abs){const out=CL(fresh);base=base||{};
 const keys=new Set([...Object.keys(base),...Object.keys(tgt)]);
 for(const k of keys){if(k==='rev'||k==='uid')continue;const b=base[k],t=tgt[k];if(J(b)===J(t))continue;
  if(k==='coins'&&!abs.coins){out.coins=Math.max(0,(out.coins||0)+(t||0)-(b||0));continue;}
  if(k==='inv'){out.inv=out.inv||{};new Set([...Object.keys(b||{}),...Object.keys(t||{})]).forEach(x=>{const bb=(b||{})[x]||0,tt=(t||{})[x]||0;if(bb!==tt)out.inv[x]=Math.max(0,(out.inv[x]||0)+tt-bb);});continue;}
  if(k==='dex'){out.dex=out.dex||{};new Set([...Object.keys(b||{}),...Object.keys(t||{})]).forEach(x=>{if(J((b||{})[x])!==J((t||{})[x])){if((t||{})[x]===undefined)delete out.dex[x];else out.dex[x]=CL(t[x]);}});continue;}
  if(k==='slots'||k==='notice'){out[k]=out[k]||[null,null,null];const nL=Math.max(3,(b||[]).length,(t||[]).length,out[k].length);for(let i=0;i<nL;i++){const bs=(b||[])[i],ts=(t||[])[i],fs=out[k][i];if(J(bs)===J(ts))continue;
    if(k==='slots'&&bs&&ts&&fs&&fs.born===bs.born&&ts.born===bs.born){new Set([...Object.keys(bs),...Object.keys(ts)]).forEach(x=>{if(J(bs[x])!==J(ts[x])){if(ts[x]===undefined)delete fs[x];else fs[x]=CL(ts[x]);}});}
    else out[k][i]=CL(ts===undefined?null:ts);}continue;}
  if(k==='gear'){const bm=new Map((b||[]).map(g=>[g.u,g])),tm=new Map((t||[]).map(g=>[g.u,g]));let g=(out.gear||[]).filter(x=>!(bm.has(x.u)&&!tm.has(x.u)));
   tm.forEach((v,u)=>{if(!bm.has(u))g.push(CL(v));else if(J(bm.get(u))!==J(v)){const i=g.findIndex(x=>x.u===u);if(i>=0)g[i]=CL(v);}});out.gear=g;continue;}
  out[k]=CL(t);}
 out.rev=(fresh.rev||0)+1;return out;}
async function saveTgt(msg){const t=AS.tgt,s0=await db.doc('accounts/'+t.uid).get();const fresh=s0.exists?s0.data():t;
 const out=mergeT(AS.base,t,fresh,AS.abs||{});AS.abs=null;await db.doc('accounts/'+t.uid).set(out);if(msg)log(t.id+': '+msg);
 AS.tgt=normT(Object.assign({uid:t.uid},out));AS.base=CL(AS.tgt);const i=(AS.list||[]).findIndex(a=>a.uid===t.uid);if(i>=0)AS.list[i]=CL(AS.tgt);toast('저장했어요.');render();}
function aTower(){if(!AS.tw)setTimeout(()=>AD.twLoad(),0);const ss=AS.twSeason||twSeason(),L=AS.tw||[];
 return '<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><h2 style="margin:0">구천탑 순위</h2><div style="display:flex;gap:8px;align-items:flex-end"><label class="f">시즌<input type="month" id="xTwS" value="'+ss+'"></label><button class="btn soft sm" data-x="twLoad">불러오기</button></div></div><p class="muted">매달 1일 오전 6시에 새 시즌이 시작돼요. 시즌 보상은 순위를 보고 우편 탭에서 보내 주세요. 추천: 1위 음양알, 2~3위 환수 알 + 시간단축비서(8시간) 2개, 4~10위 시간단축비서(5시간).</p>'+
 (AS.tw==null?'<p class="muted">불러오는 중…</p>':L.length?'<div style="overflow-x:auto"><table class="t"><tr><th>순위</th><th>아이디</th><th>닉네임</th><th>최고 층</th><th>환수</th><th>도달 시각</th><th></th></tr>'+L.map((r,i)=>'<tr><td><b>'+(i+1)+'</b></td><td>'+esc(r.id||'')+'</td><td>'+esc(r.nick||'')+'</td><td><b>'+r.best+'층</b></td><td>'+(r.no!=null?NAMES[r.no]:'')+'</td><td>'+new Date(r.t).toLocaleString('ko-KR')+'</td><td><button class="btn soft sm" data-x="twDel" data-uid="'+esc(r.uid)+'">기록 삭제</button></td></tr>').join('')+'</table></div>':'<p class="muted">이 시즌 기록이 없어요.</p>')+'</div>';}
const AD={
 async gbLoad(){try{const q=await db.collection('gblog').get();AS.gb=q.docs.map(d=>Object.assign({id:d.id},d.data())).sort((a,b)=>b.t-a.t).slice(0,300);}catch(e){AS.gb=[];}render();},
 mailAddItem(t){document.getElementById(t.dataset.px+'IR').insertAdjacentHTML('beforeend',mailItemRow(t.dataset.px));},
 mailAddGear(t){document.getElementById(t.dataset.px+'GR').insertAdjacentHTML('beforeend',mailGearRow(t.dataset.px));},
 mailAddPet(t){document.getElementById(t.dataset.px+'PR').insertAdjacentHTML('beforeend',mailPetRow(t.dataset.px));},
 mailDelRow(t){const r=t.closest('.mrow'),box=r.parentNode;if(box.children.length>1)r.remove();else{r.querySelectorAll('select').forEach(s=>s.selectedIndex=0);r.querySelectorAll('input').forEach(i=>i.value=i.classList.contains('mgp')?0:1);}},
 libToggle(){AS.libAll=!AS.libAll;render();},
 igCheck(){AS.igChk=(document.getElementById('igChkIn').value||'').trim();render();},
 async libDone(){const uid=AS.twUid,lid=AS.libId;if(!uid||!lid)return;const ref=db.doc('accounts/'+uid),s0=await ref.get();if(!s0.exists)return toast('계정을 찾지 못했어요.');const a=s0.data(),libs=(a.libs||[]).map(l=>l.id===lid?Object.assign({},l,{done:true,by:acc.id,at:Date.now()}):l);
  await ref.update({libs,rev:(a.rev||0)+1});const l=libs.find(x=>x.id===lid);log('해방 인게임 보상 지급: '+a.id+' · '+(l?NAMES[l.no]+' '+stN(l)+' · '+l.game:''));toast('지급 완료로 표시했어요.');await AD.loadList();},
 async twLoad(){const el=document.getElementById('xTwS');AS.twSeason=el&&el.value?el.value:(AS.twSeason||twSeason());const q=await db.collection('tower').where('season','==',AS.twSeason).get();AS.tw=q.docs.map(d=>gFixDoc(d.data())).filter(r=>r.best>0).sort((x,y)=>y.best-x.best||x.t-y.t);render();},
 async twDel(){const uid=AS.twUid;if(!uid)return;const r=(AS.tw||[]).find(x=>x.uid===uid);
  confirmBox('구천탑 기록 삭제',(r?r.nick+'의 ':'')+'이번 시즌 구천탑 기록을 지울까요? 진행도도 1층으로 돌아가요.',async()=>{await db.doc('tower/'+uid).delete();const ref=db.doc('accounts/'+uid),s0=await ref.get();if(s0.exists){const a=s0.data();if(a.tower&&a.tower.season===(AS.twSeason||twSeason()))await ref.update({tower:null,rev:(a.rev||0)+1});}log('구천탑 기록 삭제 '+(r?r.id:uid));toast('기록을 지웠어요.');AS.tw=null;await AD.twLoad();});},
 async loadList(){const q=await db.collection('accounts').get();AS.list=q.docs.map(d=>Object.assign({uid:d.id},d.data())).sort((a,b)=>(a.id>b.id?1:-1));if(AS.tgt){const n=AS.list.find(a=>a.uid===AS.tgt.uid);AS.tgt=n?normT(n):null;AS.base=CL(AS.tgt);}render();},
 find(){AS.find=document.getElementById('xFind').value.trim();render();},
 onlyOn(){AS.onlyOn=!AS.onlyOn;render();},
 reload(){AD.loadList();},
 close(){AS.tgt=null;render();},
 async bossSpawn(){const no=+document.getElementById('bNo').value,hp=Math.max(1,Math.round(+document.getElementById('bHp').value||0)),atk=Math.max(1,Math.round(+document.getElementById('bAtk').value||0)),def=Math.max(0,Math.round(+document.getElementById('bDef').value||0)),k=bossSuggest().k,reward=readMail('bR'),mvpReward=readMail('bM');
  const oc=BV.cur;confirmBox('월드보스 소환',BOSSES[no-1].n+' (체력 '+fmt(hp)+', 공격력 '+fmt(atk)+', 방어력 '+fmt(def)+')을(를) 소환할까요? 지금 보스는 내려가요.'+(oc&&oc.killed?' 지난 보스 보상을 안 받은 참여자에게는 우편으로 자동 발송해요.':''),async()=>{if(oc&&oc.killed){const r=await bossSendUnclaimed(oc);if(r.ok)log('지난 월드보스 미수령 보상 우편 '+r.ok+'명');}if(oc)await bossSaveLast(oc,BV.hits);await db.doc('boss/current').set({iid:'w'+Date.now().toString(36),no,maxHp:hp,hp,atk,def,k,start:Date.now(),killed:false,reward,mvpReward,by:acc.id});log('월드보스 소환: '+BOSSES[no-1].n+' 체력 '+hp+' 공격력 '+atk+' / 보상 '+(mailParts(reward).join(', ')||'없음')+' / MVP '+(mailParts(mvpReward).join(', ')||'없음'));toast('소환했어요!');await loadBoss();});},
 async bossSaveReward(){const reward=readMail('bR'),mvpReward=readMail('bM');await db.doc('boss/current').update({reward,mvpReward});log('월드보스 보상 변경: '+(mailParts(reward).join(', ')||'없음')+' / MVP '+(mailParts(mvpReward).join(', ')||'없음'));toast('보상을 바꿨어요.');await loadBoss();},
 async bossHeal(){const c=BV.cur;if(!c)return;await db.doc('boss/current').update({hp:c.maxHp,killed:false});log('월드보스 체력 회복');toast('체력을 가득 채웠어요.');await loadBoss();},
 bossEnd(){const c=BV.cur,un=c&&c.killed?(BV.hits||[]).filter(h=>!h.claimed).length:0;
  confirmBox('보스 내리기','지금 월드보스를 내릴까요?'+(c&&c.killed?(un?' 아직 보상을 안 받은 '+un+'명에게는 보상을 우편으로 자동 발송해요.':' 참여자 모두 보상을 받았어요.'):' 아직 토벌되지 않은 보스라 보상은 없어요.'),async()=>{let r={ok:0,fail:0};if(c&&c.killed)r=await bossSendUnclaimed(c);await bossSaveLast(c,BV.hits);await db.doc('boss/current').delete();log('월드보스 내림'+(r.ok?' · 미수령 보상 우편 '+r.ok+'명':''));BV.cur=null;BV.hits=[];toast('보스를 내렸어요.'+(r.ok?' 미수령 보상 '+r.ok+'명 우편 발송':'')+(r.fail?' (실패 '+r.fail+'명)':''));render();});},
 bossReload(){return loadBoss();},
 bossCalc(){return bossCalcRun();},
 bossCalcFill(){const r=AS.bcalc&&AS.bcalc.res;if(!r)return;const s=(id,v)=>{const e=document.getElementById(id);if(e)e.value=v;};s('bcMax',r.rec);if(r.recCur!=null)s('bcHp',Math.min(r.rec,r.recCur));s('bcAtk',AS.bcalc.atk);s('bcDef',AS.bcalc.def);toast('지금 보스 칸에 넣었어요. [난이도 적용]을 눌러야 바뀌어요.');},
 bossCalcFillNew(){const r=AS.bcalc&&AS.bcalc.res;if(!r)return;const s=(id,v)=>{const e=document.getElementById(id);if(e)e.value=v;};s('bHp',r.rec);s('bAtk',AS.bcalc.atk);s('bDef',AS.bcalc.def);toast('소환 칸에 넣었어요.');},
 bossTune(){const c=BV.cur;if(!c)return;const g=id=>Math.round(+document.getElementById(id).value||0),maxHp=Math.max(1,g('bcMax')),hp=Math.max(0,Math.min(maxHp,g('bcHp'))),atk=Math.max(1,g('bcAtk')),def=Math.max(0,g('bcDef'));
  confirmBox('난이도 적용','체력 '+fmt(hp)+' / '+fmt(maxHp)+' · 공격력 '+fmt(atk)+' · 방어력 '+fmt(def)+'(으)로 바꿀까요?\n(이전: '+fmt(c.hp)+' / '+fmt(c.maxHp)+' · '+fmt(c.atk)+' · '+fmt(c.def!=null?c.def:Math.round(c.atk*.75))+')',async()=>{
   const u={maxHp,hp,atk,def};if(hp<=0&&!c.killed){u.killed=true;u.killedAt=Date.now();u.killer='운영자';}else if(hp>0&&c.killed){u.killed=false;}
   await db.doc('boss/current').update(u);log('월드보스 난이도 변경: 체력 '+fmt(hp)+'/'+fmt(maxHp)+' 공격 '+atk+' 방어 '+def);toast('난이도를 바꿨어요.');await loadBoss();});},
 bossPreset(){AS.bossNo=+document.getElementById('bNo').value;render();},

 async loadArenaT(){const t=AS.tgt;if(!t)return;try{const s=await db.doc('arena/'+t.uid).get();if(AS.tgt&&AS.tgt.uid===t.uid){AS.tgtArena=s.exists?s.data():null;render();}}catch(e){AS.tgtArena=null;render();}},
 async medalSave(nv,what){const a=AS.tgtArena;if(!a)return toast('대전에 참여하지 않은 유저예요.');const e=aEff(a),m=document.getElementById('xMemo').value;nv=Math.max(0,Math.round(nv));
  await db.doc('arena/'+AS.tgt.uid).update({week:sunKey(now()),medals:nv,w:e.w,l:e.l,dw:e.dw,dl:e.dl});log(AS.tgt.id+': 무혼패 '+what+' '+e.m+'→'+nv+(m?' ('+m+')':''));toast('무혼패를 '+nv+'(으)로 바꿨어요.');await AD.loadArenaT();},
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

 async coinAdd(){const n=Math.abs(+document.getElementById('xCoin').value||0),m=document.getElementById('xMemo').value;AS.tgt.coins=(AS.tgt.coins||0)+n;await saveTgt('환수코인 +'+n+(m?' ('+m+')':''));},
 async coinSub(){const n=Math.abs(+document.getElementById('xCoin').value||0),m=document.getElementById('xMemo').value;AS.tgt.coins=Math.max(0,(AS.tgt.coins||0)-n);await saveTgt('환수코인 -'+n+(m?' ('+m+')':''));},
 async coinSet(){const n=Math.max(0,+document.getElementById('xCoin').value||0),m=document.getElementById('xMemo').value,o=AS.tgt.coins||0;AS.tgt.coins=n;AS.abs={coins:true};await saveTgt('환수코인 '+o+' → '+n+(m?' ('+m+')':''));},
 async itemGive(){const k=document.getElementById('xItem').value,n=Math.max(1,+document.getElementById('xQty').value||1);AS.tgt.inv[k]=(AS.tgt.inv[k]||0)+n;await saveTgt(ITEMS[k].n+' ×'+n+' 지급');},
 async invSave(){const ch=[];document.querySelectorAll('[data-xinv]').forEach(el=>{const k=el.dataset.xinv,v=Math.max(0,+el.value||0);if((AS.tgt.inv[k]||0)!==v){ch.push(ITEMS[k].n+' '+(AS.tgt.inv[k]||0)+'→'+v);AS.tgt.inv[k]=v;}});if(!ch.length)return toast('바뀐 게 없어요.');await saveTgt('아이템 수정: '+ch.join(', '));},
 async eqGive(){const tv=document.getElementById('xEqT').value,g=+document.getElementById('xEqG').value,pl=Math.min(MAXP[g],Math.max(0,+document.getElementById('xEqP').value||0));const [t,o]=tv.split(':');const n=gearNew(t,g);if(t==='n'&&o){n.o=o;n.subs=[];ngFill(n);}if(t==='b'&&o)n.k=o;n.p=pl;AS.tgt.gear.push(n);await saveTgt('장비 지급 '+gearName(n)+' +'+pl);},
 async petApply(){const p=aSelPet();if(!p)return;const no=+document.getElementById('xNo').value;if(no!==p.no){p.no=no;p.st=FORMS[no].st;tDex(no);}p.lv=Math.max(1,Math.min(maxLvP(p),+document.getElementById('xLv').value||1));if(p.lv>=maxLvP(p))p.exp=0;p.star=Math.max(0,Math.min(STAR_MAX(p.no),+document.getElementById('xStar').value||0));GAUGES.forEach((e,i)=>{p.g[e]=Math.max(0,Math.min(gCapP(p),+document.getElementById('xEl_'+e).value||0));p.gT[e]=Date.now()+i;});['hu','th','cl'].forEach(k=>p[k]=Math.max(0,Math.min(100,+document.getElementById('xS_'+k).value||0)));p.aff=Math.min(100,+document.getElementById('xS_aff').value||0);p.en=Math.max(0,+document.getElementById('xS_en').value||0);await saveTgt('환수 편집: '+NAMES[p.no]+' Lv'+p.lv);},
 async restore(){const no=+document.getElementById('xRestore').value,lv=+document.getElementById('xRLv').value||1;const p=tPet();p.no=no;p.st=FORMS[no].st;p.lv=Math.max(1,Math.min(maxLvP(p),lv));AS.tgt.slots[AS.slot]=p;AS.tgt.notice[AS.slot]=null;tDex(no);await saveTgt('환수 복구: '+NAMES[no]);},
 async dexAdd(){const n=parseDexNo(document.getElementById('xDex').value);if(n<0)return toast('도감 번호를 확인해 주세요. (예: 12, s1-03)');tDex(n);await saveTgt('도감 채움 '+dexNo(n));},
 async dexDel(){const n=parseDexNo(document.getElementById('xDex').value);if(n<0)return toast('도감 번호를 확인해 주세요. (예: 12, s1-03)');delete AS.tgt.dex[n];await saveTgt('도감 지움 '+dexNo(n));},
 async dexFree(){const n=parseDexNo(document.getElementById('xDex').value);if(n<0)return toast('도감 번호를 확인해 주세요. (예: 12, s1-03)');tDex(n);AS.tgt.dex[n].freed=!AS.tgt.dex[n].freed;await saveTgt('도감 解 '+(AS.tgt.dex[n].freed?'켬':'끔')+' '+dexNo(n));},
 async resetAll(){if((document.getElementById('rsTxt').value||'').trim()!=='초기화')return toast('확인 글자를 정확히 적어 주세요.');const RM=readMail('rS');if(!RM.title)return toast('보상 우편 제목을 적어 주세요.');AS.rsMail=RM;
  confirmBox('전체 초기화','정말로 모든 유저 데이터를 지우고 새로 시작할까요? 되돌릴 수 없어요.',async()=>{const lg=[];const say=m=>{lg.push(m);AS.resetLog=lg.join('\n');render();};
   try{const q=await db.collection('accounts').get();let n=0;
    for(const d of q.docs){const o=d.data();if(!o)continue;const keep=blankAcc(o.id,o.uid||d.id,o.role,o.nick);keep.banned=!!o.banned;keep.playerNo=o.playerNo||null;keep.lastNonce=o.lastNonce||0;keep.igN=o.igN||0;keep.created=o.created||Date.now();keep.rev=(o.rev||0)+1;
     keep.mail=[Object.assign({},RM,{id:newMailId(),t:Date.now(),from:'선계 관리소'})];
     await db.doc('accounts/'+d.id).set(keep);n++;}
    say('계정 '+n+'개 초기화 완료');
    for(const c of ['arena','battles','tower','xmrank','bosshits','villages','likes','guestbook','gblog']){const r=await db.collection(c).get();for(const x of r.docs)await db.doc(c+'/'+x.id).delete();say(c+' '+r.docs.length+'개 삭제');}
    try{await db.doc('boss/current').delete();say('월드보스 삭제');}catch(e){}
    log('전체 초기화 실행 (계정 '+n+'개)');toast('전체 초기화를 마쳤어요!');await AD.loadList();
   }catch(e){say('실패: '+(e&&e.message||e));}});},
 async decoGive(){const t=AS.tgt,k=document.getElementById('xDeco').value,n=Math.max(1,+document.getElementById('xDecoN').value||1);if(!t.vil)return toast('아직 마을을 열지 않은 유저예요. 한 번 접속한 뒤 지급할 수 있어요.');t.vil.store=t.vil.store||{};t.vil.store[k]=(t.vil.store[k]||0)+n;await saveTgt('마을 꾸미기 지급 '+k+' ×'+n);},
 async vilCapSet(){const t=AS.tgt;if(!t.vil)return toast('아직 마을을 열지 않은 유저예요.');t.vil.cap=Math.max(15,Math.min(40,+document.getElementById('xVilCap').value||15));await saveTgt('마을 한도 '+t.vil.cap);},
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
 genCode(){const id=+document.getElementById('cgId').value,n=+document.getElementById('cgN').value,c=+document.getElementById('cgC').value;AS.codeGen=id+'-'+n+'-'+c+'-'+((id*37+n*53+c*71+1234)%9973);render();},
 async bkLoad(){const t=AS.tgt;if(!t)return;try{const L=[];for(const k of 'abcde'){const d=await db.doc('backups/'+t.uid+'_'+k).get();if(d.exists)L.push(Object.assign({key:t.uid+'_'+k},d.data()));}
  try{const d=await db.doc('backups/'+t.uid).get();if(d.exists)L.push(Object.assign({key:t.uid},d.data()));}catch(e){}
  L.sort((a,b)=>b.t-a.t);AS.bk={uid:t.uid,list:L};}catch(e){toast('불러오기 실패: '+(e&&e.message||e));}render();},
 bkRestore(el){const key=el.dataset.bk,src=(AS.bk&&AS.bk.list||[]).concat(AS.bkAll||[]).find(b=>b.key===key);if(!src)return;bkRestoreOne(src,true);},
 async bkLoadAll(){try{const q=await db.collection('backups').get();const all=q.docs.map(d=>Object.assign({key:d.id},d.data()));const by={};all.forEach(b=>{if(!by[b.uid]||by[b.uid].t<b.t)by[b.uid]=b;});AS.bkAll=Object.values(by).sort((a,b)=>b.t-a.t);AS.bkCnt=all.length;}catch(e){toast('불러오기 실패: '+(e&&e.message||e));}render();},
 bkRestoreAll(){const L=AS.bkAll||[];if(!L.length)return;const txt=prompt('정말 '+L.length+'명 모두를 각자 마지막 수동 저장 기록으로 되돌릴까요?\n그 뒤 진행은 모두 사라져요.\n계속하려면 "전체 복구"라고 입력하세요.');if(txt!=='전체 복구')return toast('취소했어요.');(async()=>{let ok=0;for(const b of L){if(await bkRestoreOne(b,false))ok++;}await log('전체 유저 '+ok+'명을 마지막 수동 저장 기록으로 복구');toast(ok+'명 복구했어요.');AD.loadList();})();},
 async loadLogs(){const q=await db.collection('adminlogs').orderBy('t','desc').limit(80).get();AS.logs=q.docs.map(d=>d.data());render();}
};
function normT(a){const t=JSON.parse(JSON.stringify(a));t.inv=t.inv||{};t.gear=t.gear||[];t.dex=t.dex||{};t.slots=t.slots||[null,null,null];t.gsp=t.gsp||{s1:[],s2:[]};t.notice=t.notice||[null,null,null];t.mail=t.mail||[];return t;}
function tDex(no){if(!AS.tgt.dex[no])AS.tgt.dex[no]={d:dayKey(Date.now()).slice(5).replace('-','.'),freed:false};}
Object.assign(AD,ADMCFG);
const MAIN_ONLY=new Set(['bossTune','shopSave','shopReset','rcpSave','rcpReset','igSave','igReset','colSave','colReset','resetAll','decoGive','vilCapSet','bossSpawn','bossSaveReward','bossHeal','bossEnd','saveWelcome','itemGive','invSave','eqGive','petApply','restore','dexAdd','dexDel','dexFree','ban','delAcc','mkAcc']);


function aSelPet(){const t=AS.tgt;if(!t)return null;if(AS.pmode==='gsp')return (((t.gsp||{})[AS.gs])||[])[AS.gk]||null;if(AS.pmode==='vil')return ((t.vil&&t.vil.pets)||[])[AS.vpet]||null;return t.slots[AS.slot]||null;}
/* 전용 공간(차원)에 머무는 환수 */
function aGspPets(t){const G=t.gsp||{},ks=Object.keys(G).filter(k=>(G[k]||[]).length);
 if(!ks.length)return '<p class="muted">전용 공간에 머무는 환수가 없어요.</p>';
 return ks.map(sr=>'<p class="muted" style="margin:6px 0 4px"><b>'+esc((GSP[sr]||{}).n||sr)+'</b> · '+G[sr].length+' / '+GSP_MAX+'</p><div class="slots">'+G[sr].map((q,k)=>'<button class="slot'+(AS.gs===sr&&AS.gk===k?' on':'')+'" data-xgsp="'+sr+':'+k+'"><img class="px" src="'+img(q.no)+'" alt=""><span><b>'+esc(NAMES[q.no])+'</b><small>'+stN(q)+' Lv '+q.lv+'</small></span></button>').join('')+'</div>').join('');}
function aVilPets(t){const vp=(t.vil&&t.vil.pets)||[];
 return '<div class="admvil">'+aVilPreview(t)+'</div><div class="slots" style="margin-top:8px">'+(vp.length?vp.map((q,i)=>{const b=q.vb&&t.vil.b.find(x=>x.u===q.vb);return '<button class="slot'+(AS.vpet===i?' on':'')+'" data-xvpet="'+i+'"><img class="px" src="'+img(q.no)+'" alt=""><span><b>'+esc(NAMES[q.no])+'</b><small>'+stN(q)+' Lv '+q.lv+' · '+(b?esc(BLD[b.k].n):q.isl?'테마섬':'자유')+'</small></span></button>';}).join(''):'<p class="muted">마을에 환수가 없어요.</p>')+'</div>';}
function aVilPreview(t){if(!t.vil||!t.vil.b)return '<p class="muted">아직 마을이 없어요.</p>';const mine=acc.vil,iv=VS.isl,ip=VS.place,z0=VS.z;let h='';
 try{acc.vil=JSON.parse(JSON.stringify(t.vil));acc.vil.store=acc.vil.store||{};acc.vil.o=acc.vil.o||[];acc.vil.pets=acc.vil.pets||[];VS.isl='main';VS.place=null;VS.visiting=true;GEO=null;const G=geo(),z=.6,os=acc.vil.o.filter(inIsl);
  h='<div class="vview admvv" style="background:'+skyBg()+'"><div class="vsize" style="width:'+VMW*z+'px;height:'+VMH*z+'px"><div class="vmap" style="transform:scale('+z+')">'+skyHtml()+'<img class="vbg" src="'+G.img+'" alt="">'+os.filter(isTile).map(o=>objHtml(o)).join('')+os.filter(o=>!isTile(o)).concat(acc.vil.b).map(o=>objHtml(o)).join('')+vilPets().map((p,i)=>(!p.isl||p.vb)?petHtml(p,i,AS.vpet===i&&AS.pmode==='vil'):'').join('')+'</div></div></div><p class="muted" style="margin:4px 0 0">섬 '+mainStage()+'단계 · 건물 '+acc.vil.b.length+'채 · 테마섬 '+((acc.vil.isls||[]).map(k=>THEMES[k]?THEMES[k].n:k).join(', ')||'없음')+'</p>';}
 finally{acc.vil=mine;VS.isl=iv;VS.place=ip;VS.visiting=false;VS.z=z0;GEO=null;}return h;}
function aGb(){if(!AS.gb)setTimeout(()=>AD.gbLoad(),0);const L=AS.gb||[];
 return '<div class="card adm"><h2>방명록 기록</h2><p class="muted">익명 글도 실제 작성자가 보여요 (운영자만 볼 수 있어요). 문제 있는 글은 지울 수 있어요.</p><button class="btn soft sm" data-x="gbLoad">새로고침</button><table class="t" style="margin-top:8px"><tr><th>시간</th><th>쓴 사람</th><th>받은 마을</th><th>내용</th><th></th></tr>'+(L.length?L.map(e=>'<tr><td style="white-space:nowrap">'+new Date(e.t).toLocaleString('ko-KR')+'</td><td>'+esc(e.fromId||'')+' ('+esc(e.fromNick||'')+')'+(e.anon?' <span class="chip">익명</span>':'')+'</td><td>'+esc(e.toNick||e.to||'')+'</td><td>'+esc(e.msg||'')+'</td><td><button class="btn red sm" data-xgbdel="'+esc(e.id)+'">지우기</button></td></tr>').join(''):'<tr><td colspan="5" class="muted">'+(AS.gb?'기록이 없어요.':'불러오는 중…')+'</td></tr>')+'</table></div>';}

/* 유저 관리 화면이면 1분마다 목록 새로 불러오기 (접속 중 표시 갱신) */
setInterval(()=>{if(MODE!=='admin'||!acc||AS.tab!=='users'||document.hidden)return;const a=document.activeElement;if(a&&(a.tagName==='INPUT'||a.tagName==='SELECT'||a.tagName==='TEXTAREA'))return;if(document.getElementById('layer')&&document.getElementById('layer').innerHTML)return;AD.loadList();},60000);

/* 운영자 버튼·세부 메뉴에 고화질 아이콘 붙이기 */
const ADM_ACT={"coinAdd": "add", "medalAdd": "add", "coinSub": "sub", "medalSub": "sub", "coinSet": "set", "medalSet": "set", "vilCapSet": "set", "petApply": "set", "saveCfg": "save", "shopSave": "save", "rcpSave": "save", "colSave": "save", "igSave": "save", "invSave": "save", "saveWelcome": "save", "shopReset": "reset", "rcpReset": "reset", "colReset": "reset", "igReset": "reset", "medalReset": "reset", "itemGive": "give", "eqGive": "give", "decoGive": "give", "mkEgg": "egg", "restore": "restore", "bkRestore": "restore", "bkLoad": "restore", "sendAll": "mail_all", "sendOne": "mail_one", "mailAddItem": "row_add", "mailAddGear": "row_add", "mailAddPet": "row_add", "rcpAdd": "row_add", "colAdd": "row_add", "mailDelRow": "row_del", "rcpDel": "row_del", "colDel": "row_del", "twDel": "row_del", "dexDel": "row_del", "find": "search", "reload": "reload", "loadList": "reload", "loadLogs": "reload", "loadEggs": "reload", "gbLoad": "reload", "twLoad": "reload", "bkLoadAll": "reload", "colPreview": "preview", "igCheck": "check", "genCode": "check", "delAcc": "delete", "resetAll": "danger", "bkRestoreAll": "danger", "mkAcc": "make", "dexAdd": "collection"},ADM_TABIC={"users": "ag_users", "make": "act_make", "mail": "act_mail_all", "eggs": "act_egg", "lib": "act_check", "tools": "act_test", "boss": "act_boss", "tower": "act_tower", "event": "act_event", "shop": "act_shop", "rcp": "act_recipe", "cols": "act_collection", "backup": "act_restore", "gb": "act_guestbook", "logs": "act_reload", "reset": "act_danger"};
function admIcons(){document.querySelectorAll('button[data-x]').forEach(b=>{if(b.querySelector('.aic'))return;let k=ADM_ACT[b.dataset.x];if(b.dataset.x==='ban')k=b.textContent.includes('해제')?'unban':'ban';if(!k)return;b.insertAdjacentHTML('afterbegin','<img class="aic" src="i/adm/hd/act_'+k+'.png" alt="">');});
 document.querySelectorAll('.admsub button[data-xtab]').forEach(b=>{if(b.querySelector('.aic'))return;const k=ADM_TABIC[b.dataset.xtab];if(k)b.insertAdjacentHTML('afterbegin','<img class="aic" src="i/adm/hd/'+k+'.png" alt="">');});
 const lo=document.querySelector('header [data-a2=logout]');if(lo&&!lo.querySelector('.aic'))lo.insertAdjacentHTML('afterbegin','<img class="aic" src="i/adm/hd/act_logout.png" alt="">');}
/* ===== 칭호 ===== */
const TG_N={normal:'일반',rare:'희귀',hero:'영웅',legend:'전설'};
const EFF_N={xp:'수련 경험치',prod:'마을 생산 시간 단축',cp:'전투력'};
const freedN=()=>Object.values(acc.dex||{}).filter(d=>d&&d.freed).length;
const dexStMax=()=>Object.keys(acc.dex||{}).reduce((m,i)=>Math.max(m,(FORMS[i]&&(FORMS[i].st2||FORMS[i].st))||0),0);
const TITLE_DEF=[
 {n:'초보 환수지기',g:'normal',cond:'환수를 처음으로 3단계까지 진화시키기',eff:{t:'xp',v:2},chk:()=>dexStMax()>=3},
 {n:'마을 촌장',g:'normal',cond:'마을 중심부 3단계 달성',eff:{t:'prod',v:2},chk:()=>acc.vil&&centerLv()>=3},
 {n:'정 많은 이웃',g:'normal',cond:'다른 마을에 하트 30번 보내기',eff:{t:'prod',v:2},chk:()=>(acc.heartsGiven||0)>=30},
 {n:'도감 수집가',g:'rare',cond:'도감 50종 기록하기',eff:{t:'xp',v:3},chk:()=>Object.keys(acc.dex||{}).length>=50},
 {n:'해방의 인도자',g:'rare',cond:'환수 10마리 해방하기',eff:{t:'cp',v:3},chk:()=>freedN()>=10},
 {n:'선계의 인기인',g:'rare',cond:'내 마을이 하트 30개 받기',eff:{t:'prod',v:3},chk:()=>(acc.heartsGot||0)>=30},
 {n:'컬렉션 마스터',g:'hero',cond:'컬렉션 보상 3개 받기',eff:{t:'prod',v:4},chk:()=>Object.keys(acc.colDone||{}).length>=3},
 {n:'무혼의 투사',g:'hero',cond:'환수 대전 공격 누적 30승',eff:{t:'cp',v:5},chk:()=>(acc.pvpWins||0)>=30},
 {n:'극야를 걷는 자',g:'hero',cond:'크리스마스 던전 「극야」 첫 클리어 (이벤트 한정)',eff:{t:'xp',v:5},chk:null},
 {n:'천마를 벤 자',g:'legend',cond:'구천탑 100층 클리어',eff:{t:'cp',v:8},chk:null},
 {n:'최초의 신수',g:'legend',cond:'환수를 12단계까지 키우기',eff:{t:'xp',v:8},chk:()=>dexStMax()>=12}];
const titleDef=n=>TITLE_DEF.find(t=>t.n===n);
function titleEff(t){const d=acc&&acc.title&&titleDef(acc.title);return d&&d.eff.t===t&&(acc.titles||[]).includes(d.n)?d.eff.v:0;}
function titleCheck(){if(!acc||MODE!=='player')return;acc.titles=acc.titles||[];let got=null;TITLE_DEF.forEach(t=>{if(t.chk&&!acc.titles.includes(t.n)){try{if(t.chk()){acc.titles.push(t.n);got=t;}}catch(e){}}});
 if(got){SFX.play('fanfare');toast('새 칭호 「'+got.n+'」을(를) 얻었어요! 마을의 [칭호]에서 장착해 보세요.');}return !!got;}
/* 1~3위 시상대 (구천탑·겨울밤·토벌 공통). L: [{no,nick,title,val,sub,me}] 최대 3개, bg: 배경 클래스 */
function podium(L,bg,mvp){if(!L.length)return '';const P=[[1,'pd2'],[0,'pd1'],[2,'pd3']];
 return '<div class="podwrap '+(bg||'')+'"><div class="podrow">'+P.map(([i,c])=>{const r=L[i];
  return '<div class="pdm '+c+(r?'':' empty')+(r&&r.me?' me':'')+'"><div class="pdbox">'+(r?'<div class="pdtop">'+'<span class="pdmvp r'+(i+1)+'">'+(i===0?(mvp||'1위'):(i+1)+'위')+'</span>'+(r.no!=null?'<img class="px pdpet" src="'+img(r.no)+'" alt="">':'')+'</div>'+
   '':'')+'</div>'+(r?'<div class="pdcap"><span class="pdrk"><img src="i/ui2/rank_'+(i+1)+'.png?m3" alt=""><b>'+(i+1)+'</b></span><span class="pdnick">'+esc(r.nick||'?')+'</span><b class="pdval">'+r.val+'</b>'+(r.sub?'<small>'+r.sub+'</small>':'')+'</div>':'<div class="pdcap empty"></div>')+'</div>';}).join('')+'</div></div>';}
function rankBoard(k,title,heads,cols,rows,empty){
 return '<div class="rkb">'+(title?'<div class="rkt rkt-'+k+' serif">'+title+'</div>':'')+'<div class="rkscroll"><div class="rkh" style="grid-template-columns:'+cols+'">'+heads.map(x=>'<span>'+x+'</span>').join('')+'</div>'+
  (rows.length?rows.map((r,i)=>'<div class="rkr r'+(i<3?i+1:'n')+(r.me?' me':'')+'" style="grid-template-columns:'+cols+'"><span class="rkm'+(i<3?' top':'')+'"><img class="px" src="i/ui2/rank_'+(i<3?i+1:'n')+'.png?m3" alt=""><b>'+(i+1)+'</b></span>'+r.cells.map(c=>'<span>'+c+'</span>').join('')+'</div>').join(''):'<p class="muted rkempty">'+(empty||'아직 기록이 없어요.')+'</p>')+'</div></div>';}
function nickT(nick,title){return '<span class="nickt">'+(title?tPlate(title,1):'')+'<b class="nk">'+esc(nick||'?')+'</b></span>';}
function tPlate(n,sm){const d=titleDef(n);if(!n)return '';return '<span class="tplate g-'+(d?d.g:'normal')+(sm?' sm':'')+'"><b>'+esc(n)+'</b></span>';}
function titleModal(){titleCheck();const L=document.getElementById('layer'),own=acc.titles||[],cur=acc.title&&own.includes(acc.title)?acc.title:null;
 const row=t=>{const o=own.includes(t.n),on=cur===t.n;return '<div class="trow'+(o?'':' lock')+(on?' on':'')+'">'+tPlate(t.n)+'<div class="ti"><small class="tg g-'+t.g+'">'+TG_N[t.g]+'</small><small>'+esc(t.cond)+'</small><small class="te">장착 효과: '+EFF_N[t.eff.t]+' +'+t.eff.v+'%</small></div>'+(o?(on?'<button class="btn soft sm" data-tequip="">해제</button>':'<button class="btn teal sm" data-tequip="'+esc(t.n)+'">장착</button>'):'<span class="tlock">미획득</span>')+'</div>';};
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal tmodal" role="dialog" aria-label="칭호"><div class="tmhd"><img src="i/ui2/icon_title.png" alt=""><b class="serif">칭호</b></div>'+
  '<div class="tcur">'+(cur?'<small>장착 중</small>'+tPlate(cur)+'<small class="te">'+EFF_N[titleDef(cur).eff.t]+' +'+titleDef(cur).eff.v+'%</small>':'<small>장착한 칭호가 없어요</small>')+'</div>'+
  '<p class="muted" style="margin:0">칭호는 하나만 장착할 수 있어요. 장착한 칭호는 대전 유저 목록과 순위에 표시돼요. 획득 '+own.filter(n=>titleDef(n)).length+' / '+TITLE_DEF.length+'</p>'+
  '<div class="tlist">'+TITLE_DEF.map(row).join('')+'</div><button class="btn ghost" data-close="1">닫기</button></div></div>';}
function titleEquip(n){if(n&&!(acc.titles||[]).includes(n))return;acc.title=n||null;SFX.play('equip');toast(n?'「'+n+'」 칭호를 장착했어요.':'칭호를 해제했어요.');commit();syncVillage(true);syncArena(true);titleModal();}

/* ===== 공개 마을 (구경용 스냅샷) ===== */
let vilKey=null,vilT=0;
function vilSnap(){const v=acc.vil;if(!v)return null;
 return{b:v.b.filter(b=>b.lv>0).map(b=>({u:b.u,k:b.k,lv:b.lv,x:b.x,y:b.y,pets:b.pets||[]})),o:v.o.map(o=>Object.assign({k:o.k,x:o.x,y:o.y,u:o.u},o.i?{i:o.i}:{})),pets:vilPets().map(p=>Object.assign({no:p.no,st:p.st,born:p.born,vx:p.vx||0,vy:p.vy||0},p.vb?{vb:p.vb}:{},p.isl?{isl:p.isl}:{})),cap:v.cap,skin:v.skin||'base',isls:v.isls||[]};}
async function syncVillage(force){if(MODE!=='player'||!acc||!db||!acc.vil)return;const sn=vilSnap(),key=JSON.stringify([sn,acc.title||null,acc.nick]);if(!force&&(key===vilKey||Date.now()-vilT<20000))return;vilKey=key;vilT=Date.now();
 const d={uid:acc.uid,id:acc.id,nick:acc.nick||acc.id,title:acc.title||null,vil:sn,gm:1,t:Date.now()},ref=db.doc('villages/'+acc.uid);try{try{await ref.update(d);}catch(e){await ref.set(Object.assign({hearts:0},d));}}catch(e){vilKey=null;}}
/* ===== 유저 목록·구경·하트·방명록 ===== */
const SO={users:null,loading:false,visit:null,gb:null,tab:'rec'};
async function loadUsers(){if(SO.loading)return;SO.loading=true;try{const q=await db.collection('villages').get();SO.users=q.docs.map(d=>gFixDoc(d.data())).filter(u=>u&&u.uid);const me=SO.users.find(u=>u.uid===acc.uid);if(me){const hg=me.hearts||0;if(hg!==acc.heartsGot){acc.heartsGot=hg;titleCheck();}}}catch(e){SO.users=SO.users||[];}
 SO.loading=false;if((view==='pvp'||view==='visit')&&!document.getElementById('layer').innerHTML)render();}
const heartsToday=()=>accDaily().likeTo||[];
function heartBtn(uid){const sent=heartsToday().includes(uid),left=5-heartsToday().length;if(uid===acc.uid)return '';
 return '<button class="hbtn'+(sent?' on':'')+'" data-heart="'+esc(uid)+'" '+(sent||left<=0?'disabled':'')+' title="'+(sent?'오늘 하트를 보냈어요':left<=0?'오늘 하트를 다 썼어요':'하트 보내기 (남은 '+left+'개)')+'"><img src="i/ui2/icon_heart_'+(sent?'on':'off')+'.png" alt="하트"></button>';}
async function sendHeart(uid){const ad=accDaily();ad.likeTo=ad.likeTo||[];if(uid===acc.uid||ad.likeTo.includes(uid))return;if(ad.likeTo.length>=5)return toast('하트는 하루에 5개까지 보낼 수 있어요.');
 const day=dayKey(now());try{await db.doc('likes/'+day+'_'+acc.uid+'_'+uid).set({from:acc.uid,to:uid,day,t:Date.now()});await db.doc('villages/'+uid).incr('hearts',1);}catch(e){return toast('하트를 보내지 못했어요. 잠시 뒤에 다시 해 주세요.');}
 ad.likeTo.push(uid);acc.heartsGiven=(acc.heartsGiven||0)+1;const c=1+Math.floor(rnd()*5);acc.coins+=c;const u=(SO.users||[]).find(x=>x.uid===uid);if(u)u.hearts=(u.hearts||0)+1;if(SO.visit&&SO.visit.uid===uid)SO.visit.hearts=(SO.visit.hearts||0)+1;
 titleCheck();SFX.play('coins');toast('💗 하트를 보냈어요! 환수코인 +'+c+' (오늘 남은 하트 '+(5-ad.likeTo.length)+'개)');commit();}
async function visitOpen(uid){if(uid===acc.uid){view='village';return render();}SO.visit={uid,loading:true};SO.visitIsl='main';view='visit';render();
 try{const d=await db.doc('villages/'+uid).get();SO.visit=d.exists?Object.assign({uid},gFixDoc(d.data())):{uid,none:true};}catch(e){SO.visit={uid,none:true};}render();setTimeout(vCenter,0);}
function vVisit(){const V=SO.visit;if(!V||V.loading)return '<div class="card">마을을 불러오는 중…</div>';
 if(V.none||!V.vil)return '<div class="card"><p>아직 마을을 공개하지 않은 유저예요.</p><button class="btn soft" data-view="pvp">대전장으로 돌아가기</button></div>';
 const mine=acc.vil,iv=VS.isl,ip=VS.place;let html='';try{acc.vil=JSON.parse(JSON.stringify(V.vil));acc.vil.g=2;acc.vil.store={};VS.isl=(V.vil.isls||[]).includes(SO.visitIsl)?SO.visitIsl:'main';VS.place=null;VS.visiting=true;GEO=null;
  const k=curIsl(),main=k==='main',G=geo(),z=VS.z||.8,os=acc.vil.o.filter(inIsl),objs=os.filter(isTile).map(o=>objHtml(o)).join('')+os.filter(o=>!isTile(o)).concat(main?acc.vil.b:[]).map(o=>objHtml(o)).join(''),pets=vilPets().map((p,i)=>(main?(!p.isl||p.vb):(p.isl===k&&!p.vb))?petHtml(p,i):'').join('');
  const tabs='<div class="isltabs">'+['main'].concat(V.vil.isls||[]).map(x=>'<button class="'+(x===k?'on':'')+'" data-visitisl="'+x+'">'+(x==='main'?'🏯 마을':THEMES[x].ic+' '+THEMES[x].n)+'</button>').join('')+'</div>';
  html='<div class="vwrap visit isl-'+k+'"><div class="vtool visitbar"><button class="btn ghost sm" data-view="pvp">← 대전장</button><img class="vav" src="i/ui2/icon_visit.png" alt=""><b class="serif">'+esc(V.nick||'')+'님의 마을</b>'+tPlate(V.title,1)+'<span class="hcount"><img src="i/ui2/icon_heart_on.png" alt="">'+(V.hearts||0)+'</span>'+tabs+'<span style="margin-left:auto"></span>'+heartBtn(V.uid)+'<button class="btn soft sm" data-gbopen="'+esc(V.uid)+'"><img src="i/ui2/icon_guestbook.png" alt="" class="vic"> 방명록</button><button class="btn soft sm" data-vzoom="-1">－</button><button class="btn soft sm" data-vzoom="1">＋</button></div>'+
   '<div class="vview" id="vview" style="background:'+skyBg()+'"><div class="vsize" style="width:'+VMW*z+'px;height:'+VMH*z+'px"><div class="vmap skin-'+(acc.vil.skin||'base')+'" id="vmap" style="transform:scale('+z+')">'+skyHtml()+islImgTag(G)+objs+pets+skyFront()+'</div></div></div><canvas id="vwx" class="vwx"'+wxAttr()+'></canvas></div>';}
 finally{acc.vil=mine;VS.isl=iv;VS.place=ip;VS.visiting=false;GEO=null;}
 setTimeout(()=>{const s=VS.isl;VS.isl=SO.visitIsl;wxVisit(V);VS.isl=s;},0);return html;}
function wxVisit(V){const mine=acc.vil;acc.vil=V.vil;try{wxStart();}finally{acc.vil=mine;}}
/* 방명록 */
async function gbOpen(uid){SO.gb={uid,list:null};gbRender();try{const q=await db.collection('guestbook').where('to','==',uid).limit(60).get();SO.gb.list=q.docs.map(d=>Object.assign({id:d.id},d.data())).sort((a,b)=>b.t-a.t);}catch(e){SO.gb.list=[];}gbRender();}
function gbRender(){const G=SO.gb;if(!G)return;const L=document.getElementById('layer'),mine=G.uid===acc.uid;
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal gbmodal" role="dialog" aria-label="방명록"><div class="tmhd"><img src="i/ui2/icon_guestbook.png" alt=""><b class="serif">'+(mine?'내 마을 방명록':'방명록')+'</b></div>'+
  (mine?'':'<div class="gbw"><textarea id="gbMsg" maxlength="120" rows="2" placeholder="마을 구경 소감을 남겨 주세요 (120자)"></textarea><div class="gbwb"><label class="gbanon"><input type="checkbox" id="gbAnon"><img src="i/ui2/icon_anon.png" alt=""> 익명으로 쓰기</label><button class="btn teal sm" data-gbsend="'+esc(G.uid)+'">남기기</button></div></div>')+
  '<div class="gblist">'+(G.list==null?'<p class="muted">불러오는 중…</p>':G.list.length?G.list.map(e=>'<div class="gbe"><div class="gbh">'+(e.anon?'<img src="i/ui2/icon_anon.png" alt=""><b>익명</b>':'<b>'+esc(e.nick||'')+'</b>')+'<small>'+new Date(e.t).toLocaleString('ko-KR',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})+'</small>'+(mine?'<button class="gbdel" data-gbdel="'+esc(e.id)+'" title="지우기">✕</button>':'')+'</div><p>'+esc(e.msg)+'</p></div>').join(''):'<p class="muted">아직 남긴 글이 없어요.</p>')+'</div><button class="btn ghost" data-close="1">닫기</button></div></div>';}
async function gbSend(uid){const t=document.getElementById('gbMsg'),msg=(t&&t.value||'').trim(),anon=!!(document.getElementById('gbAnon')||{}).checked;if(!msg)return toast('내용을 적어 주세요.');const ad=accDaily();if((ad.gbN||0)>=10)return toast('방명록은 하루 10번까지 쓸 수 있어요.');
 try{const tm=Date.now();const ref=await db.collection('guestbook').add(Object.assign({to:uid,msg,anon,t:tm},anon?{}:{nick:acc.nick||acc.id,from:acc.uid}));await db.doc('gblog/'+ref.id).set({to:uid,toNick:(SO.visit&&SO.visit.nick)||'',from:acc.uid,fromId:acc.id,fromNick:acc.nick||acc.id,msg,anon,t:tm});}catch(e){return toast('방명록을 남기지 못했어요.');}
 ad.gbN=(ad.gbN||0)+1;save();SFX.play('ok');toast('방명록을 남겼어요.');gbOpen(uid);}
async function gbDel(id){confirmBox('방명록','이 글을 지울까요?',async()=>{try{await db.doc('guestbook/'+id).delete();}catch(e){return toast('지우지 못했어요.');}gbOpen(acc.uid);});}
/* ===== 도감·컬렉션 툴팁 (등급별 틀) ===== */
const TIP_ACC={hwansu:'#e9b779',yeongmul:'#d6e4f0',yeongsu:'#8fe3c2',seongsu:'#d4b3ff',sinsu:'#ffcf6a',starz:'#ffb3e6',guest:'#bff3e0'};
function tipKey(no){if(GRADE_N[no]===-2)return 'guest';const k=GRADE_KEY[gradeOf(no)]||'hwansu';return TIP_KEY_FB[k]||k;}
function tipHtml(t){const unk=t[0]==='?',no=+(unk?t.slice(1):t);
 if(unk||!acc.dex[no])return{k:'hwansu',h:'<div class="gt-h"><b>???</b><small>no.'+dexNo(no)+'</small></div><div class="gt-b"><div class="gt-img q">?</div><div class="gt-i"><span>아직 만나지 못한 환수예요.</span><span class="muted">획득하면 실루엣이 보여요.</span></div></div>'};
 const d=acc.dex[no],k=tipKey(no),g=GRADE_N[no]===-2?'게스트':gradeOf(no),lit=dexLit(no),st=FORMS[no]&&FORMS[no].st;
 const stat=d.freed?'<b style="color:#ffd36e">해방함 解</b>':lit?'<b style="color:#9fe3b0">불 켜짐</b>':'획득 · 해방 전';
 return{k,h:'<div class="gt-h"><b style="color:'+TIP_ACC[k]+'">'+esc(NAMES[no])+'</b><small>no.'+dexNo(no)+'</small></div><div class="gt-b"><div class="gt-img"><img class="px'+(lit?'':' sil')+'" src="'+img(no)+'" alt=""></div><div class="gt-i">'+
  '<span>등급 <b style="color:'+TIP_ACC[k]+'">'+g+'</b></span><span>속성 <b>'+elName(ELOF[no])+'</b></span>'+(st?'<span>단계 <b>'+st+(FORMS[no].st2&&FORMS[no].st2!==st?'~'+FORMS[no].st2:'')+'단계</b></span>':'')+'<span>'+stat+'</span>'+(d.d?'<span class="muted">첫 만남 '+esc(d.d)+'</span>':'')+'</div></div>'};}
let TIPEL=null;
function tipShow(el,x,y){const t=el.dataset.tip;if(t==null)return;let b=document.getElementById('gtip');if(!b){b=document.createElement('div');b.id='gtip';b.setAttribute('role','tooltip');document.body.appendChild(b);}
 const r=tipHtml(t);b.className='gtip gt-'+r.k;b.innerHTML=r.h;b.style.display='block';TIPEL=el;tipMove(x,y);}
function tipMove(x,y){const b=document.getElementById('gtip');if(!b||b.style.display!=='block')return;const W=240,H=160,vw=innerWidth,vh=innerHeight;let L=x+14,T=y+16;if(L+W>vw-6)L=x-W-14;if(L<6)L=6;if(T+H>vh-6)T=y-H-12;if(T<6)T=6;b.style.left=Math.round(L)+'px';b.style.top=Math.round(T)+'px';}
function tipHide(){const b=document.getElementById('gtip');if(b)b.style.display='none';TIPEL=null;}
document.addEventListener('mouseover',e=>{if(e.pointerType==='touch')return;const el=e.target.closest&&e.target.closest('[data-tip]');if(el){if(el!==TIPEL)tipShow(el,e.clientX,e.clientY);}else if(TIPEL)tipHide();});
document.addEventListener('mousemove',e=>{if(TIPEL)tipMove(e.clientX,e.clientY);});
document.addEventListener('touchstart',e=>{const el=e.target.closest&&e.target.closest('[data-tip]');if(!el){if(TIPEL)tipHide();return;}const p=e.touches[0];if(TIPEL===el)return tipHide();tipShow(el,p.clientX,p.clientY);},{passive:true});
addEventListener('scroll',()=>{if(TIPEL)tipHide();},true);

document.addEventListener('touchstart',e=>{const w=e.target.closest&&e.target.closest('.bbw');document.querySelectorAll('.bbw.show').forEach(x=>{if(x!==w)x.classList.remove('show');});if(w)w.classList.toggle('show');},{passive:true});

/* 접속 표시: 화면이 켜져 있으면 2분마다 마지막 접속 시각만 갱신 (운영자 페이지에서 온라인 확인) */
setInterval(()=>{if(MODE!=='player'||!acc||!db||S.kicked||document.hidden||!acc.uid)return;const t=Date.now();if(acc.seen&&t-acc.seen<110000)return;acc.seen=t;acc.seenV=view;db.doc('accounts/'+acc.uid).update({seen:t,seenV:view}).catch(()=>{});},30000);

/* ===== 수동 저장 (하루 5번 · 자동 저장은 그대로) =====
   지금 기록을 backups/{uid}_a|b|c 세 칸에 돌아가며 보관 → 문제가 생기면 운영자가 골라서 복구 */
const MSAVE_MAX=5;
function msaveLeft(){const ms=acc.msave||{};return ms.day===dayKey(now())?Math.max(0,MSAVE_MAX-(ms.n||0)):MSAVE_MAX;}
function msaveModal(){const L=document.getElementById('layer'),ms=acc.msave||{},left=msaveLeft();
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="수동 저장"><b class="serif" style="font-size:22px;color:#ffd36e">💾 수동 저장</b><p style="margin:0">지금 기록을 서버에 <b>따로 한 번 더</b> 보관해 둬요. 계정이 예전 기록으로 돌아가는 문제가 생기면, 운영자가 이 기록으로 되돌려 줄 수 있어요.</p><p class="muted" style="color:#c9d8d5;margin:0">하루에 <b>5번</b>까지 할 수 있어요 (최근 5개를 보관). 그날 플레이를 마치고 <b>자기 전에</b> 꼭 한 번 눌러 주세요. 자동 저장은 그대로 계속돼요.</p>'+(ms.t?'<p class="muted" style="color:#ffe9b0;margin:0">마지막 수동 저장: '+new Date(ms.t).toLocaleString('ko-KR',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})+'</p>':'')+
 (left?'<button class="btn teal" id="msGo">지금 저장하기 (오늘 '+left+'번 남음)</button>':'<button class="btn" disabled>오늘은 5번 모두 저장했어요</button>')+'<button class="btn ghost" data-close="1">닫기</button></div></div>';
 const g=document.getElementById('msGo');if(g)g.onclick=async()=>{g.disabled=true;g.textContent='저장 중…';if(S.kicked){closeLayer();return toast('다른 기기에서 접속 중이라 저장할 수 없어요.');}
  S.needCheck=true;const ok=await save();if(!ok){closeLayer();return toast('서버 기록이 더 최신이라 먼저 불러왔어요. 확인한 뒤 다시 저장해 주세요.');}
  const t=Date.now(),dk=dayKey(now()),prev=acc.msave,slot='abcde'[((prev&&prev.k)||0)%5];acc.msave={day:dk,n:(prev&&prev.day===dk?prev.n||0:0)+1,t,k:((prev&&prev.k)||0)+1};const snap=JSON.parse(JSON.stringify(acc));
  try{await db.doc('backups/'+acc.uid+'_'+slot).set({uid:acc.uid,id:acc.id||'',nick:acc.nick||'',t,day:dk,slot,rev:snap.rev||0,coins:snap.coins||0,lv:Math.max(0,...(snap.slots||[]).filter(Boolean).map(q=>q.lv||0)),pets:(snap.slots||[]).filter(Boolean).length+((snap.vil&&snap.vil.pets)||[]).length,data:JSON.stringify(snap)});await save();SFX.play('fanfare');closeLayer();render();toast('수동 저장 완료! (오늘 '+msaveLeft()+'번 남음)');}
  catch(e){acc.msave=prev;closeLayer();toast('수동 저장 실패: '+(e&&e.message||e));}};}
/* ================= 보상 공통 · 출석 보상 설정 · 월정액 · 후원 ================= */
/* 보상 한 칸: {k:아이템키, n:수량, c:환수코인, egg:환수 알} */
function rwNorm(r){r=r||{};return{k:r.k||'',n:Math.max(1,+r.n||1),c:Math.max(0,+r.c||0),egg:r.egg?1:0};}
function rwParts(r){r=rwNorm(r);const a=[];if(r.egg)a.push('환수 알');if(r.k&&ITEMS[r.k])a.push(ITEMS[r.k].n+(r.n>1?' ×'+r.n:''));if(r.c)a.push('환수코인 '+fmt(r.c));return a;}
function rwInfo(r){r=rwNorm(r);const img=r.egg?'h/00.gif':r.k&&ITEMS[r.k]?ITEMS[r.k].img:r.c?'i/ui/icon_coin.png':'i/q.png';return{n:rwParts(r).join(' · ')||'없음',img};}
function rwGive(r){r=rwNorm(r);if(r.egg){if(giveEgg(0)<0)acc.attEggBag=true;}if(r.k&&ITEMS[r.k])acc.inv[r.k]=(acc.inv[r.k]||0)+r.n;if(r.c)acc.coins=(acc.coins||0)+r.c;}

/* 출석 보상 (운영자 설정 · 기본 7일) */
const ATT_DEF=ATT.map(r=>r.egg?{egg:1}:{k:r.k,n:1});
function attList(){const L=cfg&&cfg.att&&cfg.att.length?cfg.att:ATT_DEF;return L.map(rwNorm);}

/* 월정액: passes/{uid}={start:dayKey,len:30} (운영자만 씀), acc.passLast=마지막으로 받은 dayKey */
const PASS_LEN=30;
function passDays(){const L=(cfg&&cfg.pass&&cfg.pass.days)||[];return Array.from({length:PASS_LEN},(_,i)=>rwNorm(L[i]||{c:50}));}
const dayDiff=(a,b)=>Math.round((Date.parse(b)-Date.parse(a))/864e5);
function passDay(p,t){if(!p||!p.start)return 0;const d=dayDiff(p.start,t||dayKey(now()))+1;return d>=1&&d<=(p.len||PASS_LEN)?d:0;}
function passLeft(p){if(!p||!p.start)return 0;const d=dayDiff(p.start,dayKey(now()));return Math.max(0,(p.len||PASS_LEN)-d);}
/* 월정액 정보는 passes/{uid} (운영자만 쓸 수 있음) 에 있고, 받은 날만 계정(acc.passLast)에 기록 */
async function passLoad(){if(MODE!=='player'||!acc)return;try{const s=await db.doc('passes/'+acc.uid).get();S.pass=s.exists?s.data():null;}catch(e){}
 const pg=passCheck();if(pg){save();render();const L=document.getElementById('layer'),am=L.querySelector('.modal.att');if(am){const q=document.createElement('p');q.className='attpass';q.innerHTML='월정액 '+pg.d+'일차 보상: <b>'+esc(rwInfo(pg.r).n)+'</b> 받았어요! <small>(남은 '+passLeft(S.pass)+'일)</small>';const sm=am.querySelector(':scope > small:last-of-type');am.insertBefore(q,sm||null);}else if(!L.innerHTML)attModal(false,pg);else toast('월정액 '+pg.d+'일차 보상: '+rwInfo(pg.r).n);}else if(view==='support')render();}
setInterval(()=>{if(MODE==='player'&&acc&&!document.hidden)passLoad();},10*60*1000);
function passCheck(){if(MODE!=='player'||!acc||!S.pass)return null;const t=dayKey(now()),d=passDay(S.pass,t);if(!d||acc.passLast===t)return null;const r=passDays()[d-1];rwGive(r);acc.passLast=t;return{d,r};}

/* ----- 플레이어: 후원 탭 ----- */
const SUP_DEF={intro:'스타즈 렐름을 응원해 주셔서 감사해요! 후원금은 서버 운영에 쓰여요.',how:'구매는 디스코드에서 운영자에게 DM으로 문의해 주세요. 확인 후 운영자가 직접 지급해요.',items:[{n:'월정액',d:'30일 동안 매일 접속하면 그날의 보상을 받아요.',won:9900,rp:0,img:'i/sup/pass.png',pass:1}]};
/* 운영자 [추천 상품 불러오기] 용 기본 구성 (가격은 제안값 · 자유 수정) */
const SUP_PRESET=[
 {n:'월정액',d:'30일 동안 매일 접속하면 그날의 보상을 받아요.',won:9900,rp:0,img:'i/sup/pass.png',pass:1},
 {n:'첫 구매 패키지',d:'음양알 1 · 환수코인 300 · 성장 비서 세트 (1회 한정)',won:5000,rp:0,img:'i/sup/starter.png',pass:0},
 {n:'환수코인 300',d:'환수코인 300',won:3000,rp:0,img:'i/sup/coins_s.png',pass:0},
 {n:'환수코인 550',d:'환수코인 500 + 보너스 50',won:5000,rp:0,img:'i/sup/coins_m.png',pass:0},
 {n:'환수코인 1,200',d:'환수코인 1,000 + 보너스 200',won:10000,rp:0,img:'i/sup/coins_l.png',pass:0},
 {n:'음양알',d:'음양알 1개 (주 1개 한정)',won:3000,rp:0,img:'i/sup/egg_yy.png',pass:0},
 {n:'성장 비서 세트',d:'시간단축 30분×5 · 행동력 회복×3 · 생활수치고정×3',won:1000,rp:0,img:'i/sup/set_grow.png',pass:0},
 {n:'심부름 세트',d:'심부름충전비서×3',won:2000,rp:0,img:'i/sup/set_errand.png',pass:0},
 {n:'도전 비서 세트',d:'탑재도전×3 · 대전재도전×3 · 토벌재도전×3',won:1500,rp:0,img:'i/sup/set_challenge.png',pass:0},
 {n:'강화 세트',d:'강화축복×3 · 파괴방지×1',won:3000,rp:0,img:'i/sup/set_forge.png',pass:0}];
function supCfg(){const s=cfg&&cfg.sup;return s&&s.items?s:SUP_DEF;}
function vSupport(){const S_=supCfg(),me=S.pass,left=passLeft(me),dNow=passDay(me),days=passDays();
 let h='<div class="pgtitle t-sup serif">후원</div><div class="card supintro"><p class="pgdesc" style="margin:0">'+esc(S_.intro||'')+'</p></div>';
 h+='<div class="supgrid">'+(S_.items||[]).map(it=>'<div class="supc'+(it.pass?' pass':'')+'">'+(it.img?'<img class="supimg" src="'+esc(it.img)+'" alt="" onerror="this.outerHTML=\'<div class=&quot;supimg ph&quot;>'+(it.pass?'月':'✦')+'</div>\'">':'<div class="supimg ph">'+(it.pass?'月':'✦')+'</div>')+
  '<div class="supb"><b class="serif">'+esc(it.n||'')+'</b><p>'+esc(it.d||'')+'</p><div class="supp">'+(+it.won?'<span class="won">'+fmt(+it.won)+'원</span>':'')+(+it.rp?'<span class="rp">'+fmt(+it.rp)+' RP</span>':'')+'</div>'+
  (it.pass?'<small class="supst">'+(left?'이용 중 · '+dNow+'일차 · 남은 '+left+'일':'이용 중이 아니에요')+'</small>':'')+'</div></div>').join('')+'</div>';
 if((S_.items||[]).some(x=>x.pass))h+='<div class="card"><h2 class="serif" style="margin:0 0 8px">월정액 30일 보상</h2><div class="passgrid">'+days.map((r,i)=>{const w=rwInfo(r),got=me&&dNow&&(i+1<dNow||(i+1===dNow&&acc.passLast===dayKey(now())));return '<div class="passc'+(got?' on':'')+(dNow===i+1?' today':'')+'"><span>'+(i+1)+'일</span><img class="px" src="'+w.img+'" alt=""><small>'+esc(w.n)+'</small></div>';}).join('')+'</div><p class="muted" style="margin:8px 0 0">시작한 날부터 30일 동안, 접속한 날마다 그날 칸의 보상이 들어와요. 접속하지 않은 날의 보상은 사라져요.</p></div>';
 h+='<div class="card suphow"><h2 class="serif" style="margin:0 0 6px">구매 방법</h2><p style="margin:0;white-space:pre-line">'+esc(S_.how||'')+'</p></div>';
 return h;}

/* ----- 운영자 공통: 보상 한 줄 편집 ----- */
function rwRowHtml(p,r,label){r=rwNorm(r);const opts='<option value="">아이템 없음</option>'+Object.keys(ITEMS).filter(k=>ITEMS[k].cat!=='인게임').map(k=>'<option value="'+k+'"'+(k===r.k?' selected':'')+'>'+esc(ITEMS[k].n)+'</option>').join('');
 return '<div class="rwrow"><b>'+label+'</b><label class="f">아이템<select id="'+p+'k">'+opts+'</select></label><label class="f">수량<input type="number" id="'+p+'n" value="'+r.n+'" min="1" style="width:60px"></label><label class="f">환수코인<input type="number" id="'+p+'c" value="'+r.c+'" min="0" style="width:80px"></label><label class="f gmchk" style="color:inherit"><input type="checkbox" id="'+p+'e"'+(r.egg?' checked':'')+'>환수 알</label></div>';}
function rwRead(p){const v=id=>document.getElementById(p+id);if(!v('k'))return null;return rwNorm({k:v('k').value,n:+v('n').value,c:+v('c').value,egg:v('e').checked});}

/* ----- 운영자: 출석 보상 ----- */
function aAtt(){if(!AS.att)AS.att=attList();const L=AS.att,main=isMain();
 return '<div class="card adm"><h2>출석 보상</h2><p class="muted">매일 오전 6시에 출석이 열려요. 마지막 날까지 채우면 1일차부터 다시 시작하고, 하루라도 빠지면 1일차로 돌아가요. (기본 7일)</p>'+
  L.map((r,i)=>rwRowHtml('at'+i+'_',r,(i+1)+'일차')).join('')+
  (main?'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn soft sm" data-x="attAdd" '+(L.length>=14?'disabled':'')+'>하루 늘리기</button><button class="btn soft sm" data-x="attDel" '+(L.length<=1?'disabled':'')+'>마지막 날 빼기</button><button class="btn soft sm" data-x="attDef">기본값(7일)</button><button class="btn teal sm" data-x="attSave">저장</button></div>':'<p class="muted">보조 운영자는 볼 수만 있어요.</p>')+'</div>';}
function attRead(){AS.att=(AS.att||[]).map((r,i)=>rwRead('at'+i+'_')||r);}

/* ----- 운영자: 월정액 ----- */
function aPass(){if(!AS.pdays)AS.pdays=passDays();if(!AS.passes){AS.passes={};passAdmLoad();}const PS=AS.passes;const main=isMain(),today=dayKey(now()),q=(AS.pq||'').toLowerCase(),sel=AS.psel||(AS.psel={});
 const users=(AS.list||[]).filter(a=>a.role!=='main'&&a.role!=='sub').filter(a=>!q||(a.id+' '+(a.nick||'')).toLowerCase().includes(q)).sort((a,b)=>(passLeft((AS.passes||{})[b.uid])-passLeft((AS.passes||{})[a.uid]))||String(a.id).localeCompare(b.id));
 let h='<div class="card adm"><h2>월정액 대상 플레이어</h2><p class="muted">체크한 유저에게 시작일부터 30일 월정액을 걸어요. 그 유저가 접속한 날마다 그날 칸의 보상이 자동으로 들어가요.</p>'+
  '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-bottom:8px"><label class="f">검색<input type="text" id="pQ" value="'+esc(AS.pq||'')+'" placeholder="아이디·닉네임" style="width:150px"></label><button class="btn soft sm" data-x="passFind">검색</button><label class="f">시작일<input type="date" id="pStart" value="'+today+'"></label>'+
  (main?'<button class="btn teal sm" data-x="passOn">체크한 유저 월정액 시작 (30일)</button><button class="btn red sm" data-x="passOff">체크한 유저 해제</button>':'')+'</div>'+
  '<div class="passusers"><label class="pu head"><input type="checkbox" data-x="passAll"'+(users.length&&users.every(a=>sel[a.uid])?' checked':'')+'><span>전체 ('+users.length+'명)</span><span>상태</span></label>'+
  users.map(a=>{const ps=PS[a.uid],l=passLeft(ps),d=passDay(ps,today);return '<label class="pu'+(l?' on':'')+'"><input type="checkbox" data-xpsel="'+a.uid+'"'+(sel[a.uid]?' checked':'')+'><span><b>'+esc(a.nick||a.id)+'</b> <small class="muted">'+esc(a.id)+'</small></span><span>'+(l?'<b style="color:#2b6a4e">이용 중</b> '+d+'일차 · 남은 '+l+'일 <small class="muted">('+esc(ps.start)+' 시작'+(a.passLast===today?' · 오늘 받음':'')+')</small>':ps&&ps.start?'<span class="muted">끝남 ('+esc(ps.start)+')</span>':'<span class="muted">없음</span>')+'</span></label>';}).join('')+'</div></div>';
 h+='<div class="card adm"><h2>월정액 1~30일차 보상</h2><p class="muted">비워 두면 기본값(환수코인 50)이 들어가요.</p>'+AS.pdays.map((r,i)=>rwRowHtml('pd'+i+'_',r,(i+1)+'일차')).join('')+
  (main?'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><label class="f">한 번에 채우기 · 환수코인<input type="number" id="pFillC" value="50" style="width:80px"></label><button class="btn soft sm" data-x="passFill">30칸 모두 이 코인으로</button><button class="btn teal sm" data-x="passSave">보상 저장</button></div>':'')+'</div>';
 return h;}
function passRead(){AS.pdays=(AS.pdays||[]).map((r,i)=>rwRead('pd'+i+'_')||r);}
async function passSet(on){const ids=Object.keys(AS.psel||{}).filter(k=>AS.psel[k]);if(!ids.length)return toast('유저를 먼저 체크해 주세요.');const st=document.getElementById('pStart').value||dayKey(now());
 confirmBox(on?'월정액 시작':'월정액 해제',ids.length+'명에게 '+(on?st+'부터 30일 월정액을 걸까요?':'월정액을 해제할까요?'),async()=>{let ok=0;for(const uid of ids){try{const ref=db.doc('passes/'+uid);if(on)await ref.set({uid,start:st,len:PASS_LEN,by:acc.id,t:Date.now()});else await ref.delete();ok++;}catch(e){}}
  log('월정액 '+(on?'시작 '+st:'해제')+': '+ids.map(u=>{const a=(AS.list||[]).find(x=>x.uid===u);return a?a.id:u;}).join(', '));AS.psel={};toast(ok+'명 '+(on?'월정액을 걸었어요. 유저가 접속하면(또는 10분 안에) 적용돼요.':'해제했어요.'));await passAdmLoad();});}
async function passAdmLoad(){try{const q=await db.collection('passes').get();AS.passes={};q.docs.forEach(d=>{const x=d.data();if(x&&x.uid)AS.passes[x.uid]=x;});}catch(e){toast('월정액 목록을 못 불러왔어요: '+(e&&e.message||e));}render();}

/* ----- 운영자: 후원 페이지 ----- */
function aSup(){if(!AS.sup)AS.sup=JSON.parse(JSON.stringify(supCfg()));const S_=AS.sup,main=isMain();
 return '<div class="card adm"><h2>후원 페이지</h2><p class="muted">플레이어 [후원] 탭에 보이는 내용이에요. 가격은 현금(원)·렐름포인트(RP) 중 쓰는 것만 적으면 돼요 (0이면 안 보여요).</p>'+
  '<label class="f" style="display:block">소개 문구<textarea id="sIntro" rows="2" style="width:100%">'+esc(S_.intro||'')+'</textarea></label>'+
  '<label class="f" style="display:block;margin-top:6px">구매 방법<textarea id="sHow" rows="3" style="width:100%">'+esc(S_.how||'')+'</textarea></label>'+
  '<h3 class="serif" style="margin:14px 0 6px">상품</h3>'+(S_.items||[]).map((it,i)=>'<div class="rcpe"><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">상품 이름<input type="text" id="si'+i+'n" value="'+esc(it.n||'')+'" style="width:140px"></label><label class="f">현금 (원)<input type="number" id="si'+i+'w" value="'+(+it.won||0)+'" min="0" style="width:90px"></label><label class="f">렐름포인트 (RP)<input type="number" id="si'+i+'r" value="'+(+it.rp||0)+'" min="0" style="width:90px"></label><label class="f">그림 경로<input type="text" id="si'+i+'i" value="'+esc(it.img||'')+'" placeholder="i/sup/pass.png" style="width:140px"></label><label class="f gmchk" style="color:inherit"><input type="checkbox" id="si'+i+'p"'+(it.pass?' checked':'')+'>월정액 상품 (30일 보상표 표시)</label>'+(main?'<button class="btn red sm" data-xsupdel="'+i+'">삭제</button>':'')+'</div><label class="f" style="display:block;margin-top:6px">설명<input type="text" id="si'+i+'d" value="'+esc(it.d||'')+'" style="width:100%"></label></div>').join('')+
  (main?'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn soft sm" data-x="supAdd">상품 추가</button><button class="btn soft sm" data-x="supPreset">추천 상품 불러오기</button><button class="btn teal sm" data-x="supSave">저장</button></div>':'<p class="muted">보조 운영자는 볼 수만 있어요.</p>')+'</div>';}
function supRead(){const S_=AS.sup,v=id=>document.getElementById(id);if(!v('sIntro'))return;S_.intro=v('sIntro').value;S_.how=v('sHow').value;S_.items=(S_.items||[]).map((it,i)=>v('si'+i+'n')?{n:v('si'+i+'n').value.trim(),d:v('si'+i+'d').value.trim(),won:Math.max(0,+v('si'+i+'w').value||0),rp:Math.max(0,+v('si'+i+'r').value||0),img:v('si'+i+'i').value.trim(),pass:v('si'+i+'p').checked?1:0}:it);}

/* ----- 운영자 버튼 ----- */
['attSave','passSave','passOn','passOff','supSave'].forEach(k=>MAIN_ONLY.add(k));
Object.assign(AD,{
 attAdd(){attRead();if(AS.att.length<14)AS.att.push({c:10});render();},
 attDel(){attRead();if(AS.att.length>1)AS.att.pop();render();},
 attDef(){AS.att=ATT_DEF.map(rwNorm);render();},
 async attSave(){attRead();cfg.att=AS.att.map(rwNorm);AS.att=null;await saveGlobal('출석 보상 변경 ('+cfg.att.length+'일)');},
 passFind(){passRead();AS.pq=document.getElementById('pQ').value.trim();render();},
 passAll(t){passRead();const q=(AS.pq||'').toLowerCase(),on=t.checked;AS.psel=AS.psel||{};(AS.list||[]).filter(a=>a.role!=='main'&&a.role!=='sub').filter(a=>!q||(a.id+' '+(a.nick||'')).toLowerCase().includes(q)).forEach(a=>{if(on)AS.psel[a.uid]=1;else delete AS.psel[a.uid];});render();},
 passFill(){passRead();const c=Math.max(0,+document.getElementById('pFillC').value||0);AS.pdays=AS.pdays.map(()=>({c}));render();},
 async passSave(){passRead();cfg.pass=Object.assign({},cfg.pass||{},{days:AS.pdays.map(rwNorm)});AS.pdays=null;await saveGlobal('월정액 30일 보상 변경');},
 passOn(){passRead();return passSet(true);},
 passOff(){passRead();return passSet(false);},
 supPreset(){supRead();confirmBox('추천 상품 불러오기','상품 목록을 추천 구성 '+SUP_PRESET.length+'개(그림 포함)로 바꿀까요? 저장을 눌러야 유저 화면에 반영돼요. 필요 없는 상품은 [삭제]로 빼 주세요.',()=>{AS.sup.items=JSON.parse(JSON.stringify(SUP_PRESET));render();});},
 supAdd(){supRead();AS.sup.items=(AS.sup.items||[]).concat([{n:'새 상품',d:'',won:0,rp:0,img:'',pass:0}]);render();},
 async supSave(){supRead();cfg.sup=JSON.parse(JSON.stringify(AS.sup));AS.sup=null;await saveGlobal('후원 페이지 변경 ('+(cfg.sup.items||[]).length+'개 상품)');}
});

/* ----- 운영자: 대전 약자 보호 설정 ----- */
function aPvpCfg(){const C=pvpCfg(),main=isMain(),T=C.tiers;
 return '<div class="card adm"><h2>대전 설정 (약자 보호)</h2><p class="muted">강한 대표 환수가 약한 유저만 골라 때리지 못하게 해요. 바꾸면 유저가 새로고침했을 때 적용돼요.</p>'+
  '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">도전 가능 범위 (내 전투력의 %)<input type="number" id="pvR" value="'+C.range+'" min="0" max="100" style="width:80px"></label><label class="f">최소 상대 수<input type="number" id="pvN" value="'+C.minN+'" min="0" style="width:70px"></label><label class="f">하루 방어 메달 손실 횟수<input type="number" id="pvC" value="'+C.cap+'" min="0" style="width:70px"></label></div>'+
  '<p class="muted" style="margin:6px 0">· 범위 안 상대가 [최소 상대 수]보다 적으면, 범위 밖에서 가장 강한 상대부터 그 수만큼 도전할 수 있어요.<br>· 하루 방어 손실 횟수를 넘으면 그날은 져도 메달이 줄지 않아요 (보호막).</p>'+
  '<h3 class="serif" style="margin:12px 0 6px">전투력 차이별 메달</h3><table class="t"><tr><th>상대 전투력 (내 기준 %) 미만</th><th>이기면 얻는 메달</th><th>상대가 잃는 메달</th></tr>'+
  T.map((t,i)=>'<tr><td>'+(i===T.length-1?'그 이상 (나머지 전부)<input type="hidden" id="pvT'+i+'a" value="99999">':'<input type="number" id="pvT'+i+'a" value="'+t[0]+'" style="width:80px"> %')+'</td><td><input type="number" id="pvT'+i+'b" value="'+t[1]+'" style="width:70px"></td><td><input type="number" id="pvT'+i+'c" value="'+t[2]+'" style="width:70px"></td></tr>').join('')+'</table>'+
  '<p class="muted" style="margin:6px 0">공격에 지면 공격자는 -'+PVP_LOSE+', 방어에 성공하면 방어자는 +'+DEF_WIN+' (그대로).</p>'+
  (main?'<div style="display:flex;gap:8px;margin-top:8px"><button class="btn soft sm" data-x="pvpDef">기본값</button><button class="btn teal sm" data-x="pvpSave">저장</button></div>':'<p class="muted">보조 운영자는 볼 수만 있어요.</p>')+'</div>';}
MAIN_ONLY.add('pvpSave');
Object.assign(AD,{
 pvpDef(){cfg.pvp=null;render();toast('기본값을 불러왔어요. [저장]을 눌러야 적용돼요.');},
 async pvpSave(){const g=id=>+document.getElementById(id).value,T=pvpCfg().tiers.map((_,i)=>[g('pvT'+i+'a'),Math.max(0,g('pvT'+i+'b')),Math.max(0,g('pvT'+i+'c'))]).sort((a,b)=>a[0]-b[0]);
  cfg.pvp={range:Math.max(0,Math.min(100,g('pvR'))),minN:Math.max(0,g('pvN')),cap:Math.max(0,g('pvC')),tiers:T.map(([u,w,l])=>({u,w,l}))};/* Firestore는 배열 안 배열 저장 불가 → 객체로 */await saveGlobal('대전 약자 보호 설정 변경');}
});
/* ===== 도깨비 야행 (30분 서바이벌) · 게임 계산부 — 화면과 분리 (시뮬레이터에서도 그대로 씀) ===== */
const DG_DUR=1800;
const DG_RANKS=['입문','소성','대성','화경','현경','신선'];
const DG_EL={fire:'화염회오리',water:'일직선 파도',wood:'부채꼴 잎사귀',metal:'할퀴기',earth:'지진 장판',yin:'연쇄 보라불',yang:'빛 장판'};
const DG_ELN={fire:'화',water:'수',wood:'목',metal:'금',earth:'토',yin:'음',yang:'양'};
const DG_CW={bat:['도깨비방망이','몸 주위를 도는 방망이'],bujeok:['부적탄','가까운 적을 따라가는 부적'],bell:['방울 음파','둘레로 퍼지며 밀쳐 내는 파동'],orb:['여의주','멀리서 도는 구슬'],
 thunder:['낙뢰','화면 안 무작위 적에게 번개'],satgat:['삿갓 부메랑','던졌다 돌아오며 꿰뚫음'],geumjul:['금줄 결계','둘레 적을 느리게 하고 조금씩 깎음'],fire:['도깨비불','적을 쫓아가 터지는 불']};
const DG_PS={spd:['이동 속도','+8%'],mag:['영혼 흡수 범위','+25%'],heal:['체력 회복','초당 +0.4%'],cd:['쿨타임','-7%'],size:['탄 크기','+12%'],crit:['치명타','+6%'],hp:['최대 체력','+15%'],arm:['방어','받는 피해 -7%']};
const DG_WMAX=6,DG_PMAX=5,DG_CWMAX=4;
// 몬스터: 체력·속도·피해·크기·영혼
const DG_MT={m1:{h:1,s:62,d:1,r:15,x:1},m2:{h:.6,s:112,d:.8,r:13,x:1},m3:{h:4.5,s:42,d:1.6,r:24,x:5},m4:{h:1.3,s:52,d:1,r:15,x:5,rng:1},
 m5:{h:2,s:72,d:1,r:19,x:1,split:1},m6:{h:.8,s:98,d:1,r:15,x:1,boom:1},m7:{h:.5,s:142,d:.7,r:12,x:1,fly:1},m8:{h:3.2,s:88,d:2,r:19,x:5},
 e1:{h:70,s:70,d:2.5,r:40,x:25,boss:1,ch:'wood',n:'방망이 장군'},e2:{h:70,s:64,d:2.5,r:40,x:25,boss:1,ch:'wood',n:'도깨비 무당'},
 b1:{h:160,s:66,d:3,r:56,x:25,boss:2,ch:'gold',n:'불도깨비 왕'},b2:{h:170,s:66,d:3,r:56,x:25,boss:2,ch:'gold',n:'물굽이 대장'},
 b3:{h:190,s:58,d:3.2,r:60,x:25,boss:2,ch:'gold',n:'무쇠 불가사리'},b4:{h:200,s:70,d:3.2,r:56,x:25,boss:2,ch:'gold',n:'그림자 이매'},
 bx:{h:520,s:62,d:3.6,r:74,x:25,boss:3,ch:'myth',n:'도깨비 대왕'}};
const DG_BOSST=[[300,'e1'],[600,'b1'],[900,'b2'],[1200,'b3'],[1500,'b4'],[1620,'bx']];
function dgDef(){return{open:0,daily:1,cMin:1,cClear:10,cMax:40,k5:2,kRank:1,kMax:10,en:20,hp:100,dmg:100,spawn:100,eTime:[[1080,'e2'],[1260,'e2'],[1440,'e2']]};}
function dgGrow(t){const m=t/60;return m<=10?Math.pow(1.12,m):m<=20?3.106*Math.pow(1.16,m-10):13.7*Math.pow(1.2,m-20);}
function dgDGrow(t){return Math.pow(1.075,t/60);}
function dgNeed(lv){return Math.round(8+(lv-1)*8+Math.pow(lv,1.8));}
function dgRank(G){return Math.min(5,Math.floor((G.lv-1)/5));}

function dgNew(o){const cp=Math.max(50,o.cp||100),el=DG_EL[o.el]?o.el:'yang',C=Object.assign(dgDef(),o.cfg||{});
 const G={t:0,cp,el,C,lv:1,xp:0,need:dgNeed(1),kills:0,seq:1,dead:0,clear:0,quit:0,
  p:{x:0,y:0,hp:0,mhp:0,fx:1,fy:0,inv:0,slow:0},E:[],B:[],S:[],K:[],FX:[],W:{[el]:1},P:{},
  ev:[],pend:0,spAcc:0,bossI:0,eI:0,waveT:180,thT:0,coinB:0,kiB:0,gear:[],eggs:[],chests:[],bosses:0,rnd:o.rnd||Math.random};
 G.p.mhp=G.p.hp=dgMhp(G);return G;}
function dgMhp(G){return 110*Math.pow(G.cp/1000,.75)*(1+.15*(G.P.hp||0));}
const dgBD=G=>20*Math.pow(G.cp/1000,1.5);
const dgSz=G=>1+.12*(G.P.size||0);
const dgCd=G=>Math.max(.4,1-.07*(G.P.cd||0));
const dgSpd=G=>150*(1+.08*(G.P.spd||0));
const dgMag=G=>85*(1+.25*(G.P.mag||0));
function dgAdd(G,o){o.id=G.seq++;o.hit=o.hit||{};G.B.push(o);return o;}
function dgNear(G,x,y,max,skip){let b=null,bd=max*max;for(const e of G.E){if(skip&&skip[e.id])continue;const d=(e.x-x)**2+(e.y-y)**2;if(d<bd){bd=d;b=e;}}return b;}

/* --- 몬스터 --- */
function dgSpawn(G,k,x,y,small){const T=DG_MT[k],g=dgGrow(G.t)*(G.C.hp/100),hu=20;
 const hp=T.h*hu*g*(small?.5:1);
 const e={id:G.seq++,k,x,y,hp,mhp:hp,s:T.s*(small?1.15:1),d:T.d,r:T.r*(small?.7:1),x0:T.x,boss:T.boss||0,small:small?1:0,cd:2+G.rnd()*2,slow:0,kb:0,kx:0,ky:0,dash:0,ph:G.rnd()*6};
 G.E.push(e);if(e.boss){G.ev.push({k:'boss',e});}return e;}
function dgEdge(G){const a=G.rnd()*Math.PI*2,R=520+G.rnd()*120;return[G.p.x+Math.cos(a)*R,G.p.y+Math.sin(a)*R];}
function dgPick(G){const m=G.t/60,L=[['m1',m<20?6:2]];if(m>=2)L.push(['m2',3]);if(m>=5)L.push(['m3',1.5],['m4',1.2]);if(m>=10)L.push(['m5',1.4],['m7',1.6]);if(m>=15)L.push(['m6',1.2]);if(m>=20)L.push(['m8',2.5]);
 let s=L.reduce((a,b)=>a+b[1],0)*G.rnd();for(const [k,w] of L){if((s-=w)<=0)return k;}return 'm1';}
function dgSpawnTick(G,dt){const rate=(1.3+G.t/60*.6)*(G.C.spawn/100);G.spAcc+=rate*dt;
 while(G.spAcc>=1){G.spAcc--;if(G.E.length<280){const [x,y]=dgEdge(G);dgSpawn(G,dgPick(G),x,y);}}
 if(G.t>=G.waveT){G.waveT+=180;const n=24+Math.floor(G.t/60);for(let i=0;i<n;i++){const a=i/n*Math.PI*2;dgSpawn(G,G.t<600?'m1':'m2',G.p.x+Math.cos(a)*560,G.p.y+Math.sin(a)*560);}G.ev.push({k:'wave'});}
 while(G.bossI<DG_BOSST.length&&G.t>=DG_BOSST[G.bossI][0]){const [x,y]=dgEdge(G);dgSpawn(G,DG_BOSST[G.bossI][1],x,y);G.bossI++;}
 const ET=G.C.eTime||[];while(G.eI<ET.length&&G.t>=ET[G.eI][0]){const [x,y]=dgEdge(G);dgSpawn(G,ET[G.eI][1],x,y);G.eI++;}}

/* --- 피해 --- */
function dgHit(G,e,v,kb,src){if(e.hp<=0)return;let c=0;if(G.rnd()<.05+.06*(G.P.crit||0)){v*=2;c=1;}e.hp-=v;
 if(kb&&!e.boss){const dx=e.x-(src?src.x:G.p.x),dy=e.y-(src?src.y:G.p.y),d=Math.hypot(dx,dy)||1;e.kx=dx/d*kb;e.ky=dy/d*kb;e.kb=.12;}
 if(G.FX.length<120)G.FX.push({k:'hit',x:e.x+(G.rnd()-.5)*e.r,y:e.y-e.r*.3,t:0,life:.3,c,v:Math.round(v)});
 if(e.hp<=0)dgKill(G,e);}
function dgKill(G,e){G.kills++;const T=DG_MT[e.k];
 const xv=e.boss?25:e.x0;dgDrop(G,e.x,e.y,xv);
 if(!e.boss){const r=G.rnd();if(r<.008)G.K.push({k:'heal',x:e.x,y:e.y});else if(r<.011)G.K.push({k:'magnet',x:e.x,y:e.y});else if(r<.014)G.K.push({k:'bomb',x:e.x,y:e.y});else if(r<.02)G.K.push({k:'gold',x:e.x,y:e.y});}
 if(T.split&&!e.small){for(let i=0;i<2;i++)dgSpawn(G,e.k,e.x+(i?12:-12),e.y,1);}
 if(T.ch){G.K.push({k:'chest',ch:T.ch,x:e.x,y:e.y});G.bosses++;G.ev.push({k:'bossdown',e});}
 if(G.FX.length<150)G.FX.push({k:'die',x:e.x,y:e.y,t:0,life:.45,r:e.r});}
function dgDrop(G,x,y,v){const m=G.t/60;let k=v>=25?'soul3':v>=5?'soul2':'soul1';
 if(k==='soul1'&&m>=12&&G.rnd()<Math.min(.35,(m-12)*.025))k='soul2';G.K.push({k,x,y,v:k==='soul3'?25:k==='soul2'?5:1});
 if(G.K.length>600){let n=0;G.K=G.K.filter(q=>{if(q.k==='soul1'&&n<100){n++;return false;}return true;});}}
function dgHurt(G,v){if(G.p.inv>0)return;v*=Math.max(.3,1-.07*(G.P.arm||0));G.p.hp-=v;if(G.p.hp<=0){G.p.hp=0;G.dead=1;G.ev.push({k:'end'});}}

/* --- 무기 --- */
function dgWeapons(G,dt){const p=G.p,bd=dgBD(G),sz=dgSz(G),cd=dgCd(G);G.wt=G.wt||{};const W=G.W;
 const tick=(k,base)=>{G.wt[k]=(G.wt[k]||0)-dt;if(G.wt[k]<=0){G.wt[k]=base*cd;return true;}return false;};
 const fa=Math.atan2(p.fy,p.fx);
 for(const k in W){const lv=W[k];
  if(k==='fire'&&tick(k,2.2)){const n=1+Math.floor(lv/2);for(let i=0;i<n;i++){const a=G.rnd()*Math.PI*2,R=70+G.rnd()*90;dgAdd(G,{k:'fire',x:p.x+Math.cos(a)*R,y:p.y+Math.sin(a)*R,vx:0,vy:0,r:(lv<=3?50:44)*sz,dmg:bd*(1+.25*lv)*.55,life:lv<=3?3.1:2.8,tk:.4,pierce:1e9,stick:1});}}
  if(k==='water'&&tick(k,1.4)){const dirs=lv>=4?[fa,fa+Math.PI]:[fa];dirs.forEach(a=>dgAdd(G,{k:'water',x:p.x,y:p.y,vx:Math.cos(a)*380,vy:Math.sin(a)*380,a,r:(30+lv*4)*sz,dmg:bd*(1.3+.3*lv)*.9,life:1.4,pierce:1e9,tk:1e9,kb:60}));}
  if(k==='wood'&&tick(k,1.0)){const n=3+lv,sp=.9;for(let i=0;i<n;i++){const a=fa-sp/2+sp*i/(n-1);dgAdd(G,{k:'wood',x:p.x,y:p.y,vx:Math.cos(a)*420,vy:Math.sin(a)*420,a,r:12*sz,dmg:bd*(.75+.18*lv)*1.08,life:.9,pierce:1+(lv>=5?1:0),tk:1e9});}}
  if(k==='metal'&&tick(k,.8)){const R=(95+8*lv)*sz*1.25,arc=1.6;dgAdd(G,{k:'metal',x:p.x,y:p.y,vx:0,vy:0,a:fa,r:R,dmg:bd*(2.2+.45*lv)*1.1,life:.25,once:1,arc,follow:1,kb:80});}
  if(k==='earth'&&tick(k,2.8)){const R=(66+6*lv)*sz;dgAdd(G,{k:'earth',x:p.x+p.fx*120,y:p.y+p.fy*120,vx:0,vy:0,r:R,dmg:bd*(.5+.12*lv),life:3,tk:.5,pierce:1e9,stick:1,slow:.45});}
  if(k==='yin'&&tick(k,1.0)){dgAdd(G,{k:'yin',x:p.x,y:p.y,vx:Math.cos(fa)*460,vy:Math.sin(fa)*460,a:fa,r:14*sz,dmg:bd*(1.4+.3*lv)*1.1,life:1.2,pierce:1,tk:1e9,chain:2+lv});}
  if(k==='yang'){G.yangT=(G.yangT||0)-dt;if(G.yangT<=0){G.yangT=.5*cd;const R=(88+8*lv)*sz;for(const e of G.E){if((e.x-p.x)**2+(e.y-p.y)**2<(R+e.r)**2)dgHit(G,e,bd*(.45+.12*lv));}G.FX.push({k:'yangp',x:p.x,y:p.y,t:0,life:.5,r:R});}}
  if(k==='bat'){const n=lv,R=78*sz;G.batA=(G.batA||0)+dt*3.2;if(!G.B.some(b=>b.k==='bat'&&b.n===n)){G.B=G.B.filter(b=>b.k!=='bat');for(let i=0;i<n;i++)dgAdd(G,{k:'bat',i,n,x:p.x,y:p.y,r:18*sz,dmg:bd*(.7+.2*lv),life:1e9,pierce:1e9,tk:.5,orb:R,spd:3.2,kb:40});}}
  if(k==='orb'){const n=1+lv,R=135*sz;if(!G.B.some(b=>b.k==='orb'&&b.n===n)){G.B=G.B.filter(b=>b.k!=='orb');for(let i=0;i<n;i++)dgAdd(G,{k:'orb',i,n,x:p.x,y:p.y,r:14*sz,dmg:bd*(.5+.15*lv),life:1e9,pierce:1e9,tk:.6,orb:R,spd:-1.8});}}
  if(k==='bujeok'&&tick(k,1.0)){const n=Math.ceil(lv/2);for(let i=0;i<n;i++){const t=dgNear(G,p.x,p.y,600);const a=t?Math.atan2(t.y-p.y,t.x-p.x):G.rnd()*7;dgAdd(G,{k:'bujeok',x:p.x,y:p.y,vx:Math.cos(a)*300,vy:Math.sin(a)*300,a,r:12*sz,dmg:bd*(1+.25*lv),life:2.2,pierce:1,tk:1e9,home:1});}}
  if(k==='bell'&&tick(k,2.5)){dgAdd(G,{k:'bell',x:p.x,y:p.y,vx:0,vy:0,r:10,rmax:(150+12*lv)*sz,dmg:bd*(.8+.2*lv),life:.5,pierce:1e9,tk:1e9,ring:1,follow:1,kb:110});}
  if(k==='thunder'&&tick(k,2.0)){const vis=G.E.filter(e=>Math.abs(e.x-p.x)<420&&Math.abs(e.y-p.y)<420);for(let i=0;i<lv&&vis.length;i++){const e=vis.splice(Math.floor(G.rnd()*vis.length),1)[0];G.FX.push({k:'thunder',x:e.x,y:e.y,t:0,life:.4});for(const q of G.E)if((q.x-e.x)**2+(q.y-e.y)**2<(40*sz)**2)dgHit(G,q,bd*(1.6+.35*lv));}}
  if(k==='satgat'&&tick(k,1.6)){const t=dgNear(G,p.x,p.y,500),a=t?Math.atan2(t.y-p.y,t.x-p.x):fa;dgAdd(G,{k:'satgat',x:p.x,y:p.y,vx:Math.cos(a)*360,vy:Math.sin(a)*360,r:20*sz,dmg:bd*(1+.25*lv),life:1.6,pierce:1e9,tk:.35,boom:1,t0:0});}
  if(k==='geumjul'){G.gjT=(G.gjT||0)-dt;const R=(110+10*lv)*sz;for(const e of G.E)if((e.x-p.x)**2+(e.y-p.y)**2<(R+e.r)**2)e.slow=Math.max(e.slow,.2);if(G.gjT<=0){G.gjT=.7*cd;for(const e of G.E)if((e.x-p.x)**2+(e.y-p.y)**2<(R+e.r)**2)dgHit(G,e,bd*(.25+.08*lv));}G.gjR=R;}
 }
 if(W.dfire&&tick('dfire',1.8)){for(let i=0;i<Math.ceil(W.dfire/2);i++)dgAdd(G,{k:'dfire',x:p.x,y:p.y,vx:(G.rnd()-.5)*200,vy:(G.rnd()-.5)*200,r:14*sz,dmg:bd*(1.2+.3*W.dfire),life:3,pierce:1,tk:1e9,home:1,boomR:55*sz});}}

function dgBullets(G,dt){const p=G.p;
 for(const b of G.B){b.life-=dt;b.age=(b.age||0)+dt;
  if(b.orb){const A=(b.age*b.spd)+b.i/b.n*Math.PI*2;b.x=p.x+Math.cos(A)*b.orb;b.y=p.y+Math.sin(A)*b.orb;}
  else if(b.follow){b.x=p.x;b.y=p.y;if(b.ring)b.r=10+(b.rmax-10)*Math.min(1,b.age/.45);}
  else if(!b.stick){if(b.home){const t=dgNear(G,b.x,b.y,400);if(t){const a=Math.atan2(t.y-b.y,t.x-b.x),s=Math.hypot(b.vx,b.vy)||300;b.vx+=(Math.cos(a)*s-b.vx)*Math.min(1,dt*5);b.vy+=(Math.sin(a)*s-b.vy)*Math.min(1,dt*5);b.a=Math.atan2(b.vy,b.vx);}}
   if(b.boom){b.t0+=dt;if(b.t0>.7){const a=Math.atan2(p.y-b.y,p.x-b.x);b.vx=Math.cos(a)*420;b.vy=Math.sin(a)*420;if(Math.hypot(p.x-b.x,p.y-b.y)<24)b.life=0;}}
   b.x+=b.vx*dt;b.y+=b.vy*dt;}
  if(b.life<=0)continue;
  for(const e of G.E){if(e.hp<=0)continue;const R=b.r+e.r,dx=e.x-b.x,dy=e.y-b.y;if(dx*dx+dy*dy>R*R)continue;
   if(b.arc!=null){let da=Math.atan2(dy,dx)-b.a;da=Math.atan2(Math.sin(da),Math.cos(da));if(Math.abs(da)>b.arc/2)continue;}
   if(b.ring&&dx*dx+dy*dy<(b.r-30)**2)continue;
   const last=b.hit[e.id];if(last!=null&&(b.once||b.tk>=1e9||b.age-last<b.tk))continue;b.hit[e.id]=b.age;
   dgHit(G,e,b.dmg,b.kb,b);if(b.slow)e.slow=Math.max(e.slow,b.slow);
   if(b.chain){dgChain(G,e,b.chain,b.dmg*.95);b.chain=0;}
   if(b.boomR){G.FX.push({k:'boom',x:b.x,y:b.y,t:0,life:.35,r:b.boomR});for(const q of G.E)if(q!==e&&(q.x-b.x)**2+(q.y-b.y)**2<b.boomR**2)dgHit(G,q,b.dmg*.6);}
   if(--b.pierce<=0){b.life=0;break;}}}
 G.B=G.B.filter(b=>b.life>0);}
function dgChain(G,e0,n,v){let cur=e0;const seen={[e0.id]:1};for(let i=0;i<n;i++){const t=dgNear(G,cur.x,cur.y,170,seen);if(!t)break;seen[t.id]=1;G.FX.push({k:'chain',x:cur.x,y:cur.y,x2:t.x,y2:t.y,t:0,life:.25});dgHit(G,t,v);cur=t;}}

function dgEnemies(G,dt){const p=G.p;
 for(const e of G.E){if(e.hp<=0)continue;const T=DG_MT[e.k];const dx=p.x-e.x,dy=p.y-e.y,d=Math.hypot(dx,dy)||1;
  let sp=e.s*(1-e.slow);e.slow=Math.max(0,e.slow-dt*.8);
  if(e.kb>0){e.kb-=dt;e.x+=e.kx*dt*6;e.y+=e.ky*dt*6;continue;}
  if(e.boss){e.cd-=dt;if(e.dash>0){e.dash-=dt;if(e.dash<=.5){e.x+=e.dvx*dt;e.y+=e.dvy*dt;}continue;}
   if(e.cd<=0){e.cd=3.2+G.rnd()*1.5;if(G.rnd()<.5){e.dash=1.3;e.dvx=dx/d*520;e.dvy=dy/d*520;G.FX.push({k:'warn',x:e.x+dx/d*260,y:e.y+dy/d*260,t:0,life:.8,r:e.r*1.2});}
    else{const n=10+e.boss*4;for(let i=0;i<n;i++){const a=i/n*Math.PI*2;G.S.push({x:e.x,y:e.y,vx:Math.cos(a)*170,vy:Math.sin(a)*170,r:9,d:e.d*.6,life:4});}}}}
  if(T.rng&&d<240){e.cd-=dt;if(e.cd<=0){e.cd=2.6;G.S.push({x:e.x,y:e.y,vx:dx/d*200,vy:dy/d*200,r:8,d:e.d,life:3.5});}sp*=d<200?-.5:0;}
  if(T.fly){e.ph+=dt*4;e.x+=Math.cos(e.ph)*40*dt;e.y+=Math.sin(e.ph)*40*dt;}
  e.x+=dx/d*sp*dt;e.y+=dy/d*sp*dt;
  const dd=dgDGrow(G.t)*(G.C.dmg/100);
  if(d<e.r+16){if(T.boom){e.hp=0;G.kills++;G.FX.push({k:'boom',x:e.x,y:e.y,t:0,life:.4,r:60});dgHurt(G,6*dd*3);dgDrop(G,e.x,e.y,1);continue;}dgHurt(G,6*e.d*dd*dt*(e.boss?1.5:1));}}
 // 몰림 풀기 (가벼운 밀어내기)
 const E=G.E;for(let i=0;i<E.length;i+=2){const a=E[i],b=E[(i+7)%E.length];if(!b||a===b)continue;const dx=a.x-b.x,dy=a.y-b.y,R=a.r+b.r,dd=dx*dx+dy*dy;if(dd<R*R&&dd>0){const d=Math.sqrt(dd),f=(R-d)/2/d;a.x+=dx*f;a.y+=dy*f;b.x-=dx*f;b.y-=dy*f;}}
 G.E=E.filter(e=>e.hp>0&&(e.boss||Math.abs(e.x-p.x)<1400&&Math.abs(e.y-p.y)<1400));
 for(const s of G.S){s.life-=dt;s.x+=s.vx*dt;s.y+=s.vy*dt;if((s.x-p.x)**2+(s.y-p.y)**2<(s.r+14)**2){s.life=0;dgHurt(G,6*s.d*dgDGrow(G.t)*(G.C.dmg/100));}}
 G.S=G.S.filter(s=>s.life>0);}

function dgPickups(G,dt){const p=G.p,M=dgMag(G);
 for(const q of G.K){const dx=p.x-q.x,dy=p.y-q.y,d=Math.hypot(dx,dy);
  if(q.pull||d<M||(q.k==='chest'&&d<40)){if(q.k!=='chest'){q.pull=1;const s=Math.max(260,d*6);q.x+=dx/(d||1)*s*dt;q.y+=dy/(d||1)*s*dt;}}
  if(d<22||(q.k==='chest'&&d<44)){q.got=1;
   if(q.v){G.xp+=q.v*(G.C.evXp||1);G.souls=(G.souls||0)+1;}else if(q.k==='heal'){p.hp=Math.min(p.mhp,p.hp+p.mhp*.3);}else if(q.k==='magnet'){G.K.forEach(z=>{if(z.v)z.pull=1;});}
   else if(q.k==='bomb'){G.FX.push({k:'bomb',x:p.x,y:p.y,t:0,life:.6});G.E.forEach(e=>{if(Math.abs(e.x-p.x)<480&&Math.abs(e.y-p.y)<480)dgHit(G,e,e.boss?dgBD(G)*20:e.hp+1);});}
   else if(q.k==='gold'){G.coinB+=1;}else if(q.k==='chest'){G.chests.push(q.ch);G.ev.push({k:'chest',ch:q.ch});}}}
 G.K=G.K.filter(q=>!q.got);
 while(G.xp>=G.need){G.xp-=G.need;G.lv++;G.need=dgNeed(G.lv);G.pend++;}}

function dgStep(G,dt,ix,iy){if(G.dead||G.clear||G.quit)return;dt=Math.min(dt,.05);G.t+=dt;const p=G.p;
 const L=Math.hypot(ix,iy);if(L>.05){const s=dgSpd(G)*Math.min(1,L);p.x+=ix/L*s*dt;p.y+=iy/L*s*dt;p.fx=ix/L;p.fy=iy/L;}
 p.mhp=dgMhp(G);p.hp=Math.min(p.mhp,p.hp+p.mhp*.004*(G.P.heal||0)*dt);if(p.inv>0)p.inv-=dt;
 dgSpawnTick(G,dt);dgWeapons(G,dt);dgBullets(G,dt);dgEnemies(G,dt);dgPickups(G,dt);
 for(const f of G.FX)f.t+=dt;G.FX=G.FX.filter(f=>f.t<f.life);
 if(G.t>=DG_DUR&&!G.dead){G.clear=1;G.ev.push({k:'end'});}}

/* --- 레벨업 카드 --- */
function dgCards(G,n){const L=[],wk=Object.keys(G.W),cw=wk.filter(k=>DG_CW[k]||k==='dfire').length;
 wk.forEach(k=>{if(G.W[k]<DG_WMAX)L.push({t:'w',k,lv:G.W[k]+1});});
 if(cw<DG_CWMAX)Object.keys(DG_CW).forEach(k=>{const kk=k==='fire'?'dfire':k;if(!G.W[kk])L.push({t:'w',k:kk,lv:1,nw:1});});
 Object.keys(DG_PS).forEach(k=>{if((G.P[k]||0)<DG_PMAX)L.push({t:'p',k,lv:(G.P[k]||0)+1});});
 const out=[];while(out.length<n&&L.length)out.push(L.splice(Math.floor(G.rnd()*L.length),1)[0]);
 if(!out.length)out.push({t:'h'});return out;}
function dgApply(G,c){if(c.t==='w')G.W[c.k]=(G.W[c.k]||0)+1;else if(c.t==='p'){G.P[c.k]=(G.P[c.k]||0)+1;if(c.k==='hp'){const m=dgMhp(G);G.p.hp+=m-G.p.mhp;G.p.mhp=m;}}else{G.p.hp=G.p.mhp;G.coinB+=1;}}
function dgCardInfo(c){if(c.t==='h')return{n:'꿀떡 한 상',d:'체력을 모두 회복하고 코인 +1',ic:'pk_heal'};
 if(c.t==='p')return{n:DG_PS[c.k][0],d:DG_PS[c.k][1]+' (Lv '+c.lv+'/'+DG_PMAX+')',ic:'p_'+c.k};
 if(DG_EL[c.k])return{n:DG_ELN[c.k]+' · '+DG_EL[c.k],d:'기본 탄막 강화 (Lv '+c.lv+'/'+DG_WMAX+')',ic:'e_'+c.k,el:1};
 const k=c.k==='dfire'?'fire':c.k;return{n:DG_CW[k][0],d:(c.nw?'새 탄막 · ':'')+DG_CW[k][1]+' (Lv '+c.lv+'/'+DG_WMAX+')',ic:'w_'+k,nw:c.nw};}

/* --- 상자 · 보상 --- */
function dgChestRoll(G,ch){const r=G.rnd(),R=x=>Math.floor(x[0]+G.rnd()*(x[1]-x[0]+1)),out=[],eg=G.C.evEgg||1,lk=G.C.evBox||0,RG=x=>{const g=R(x);return lk&&g<3&&G.rnd()*100<lk?g+1:g;};
 if(ch==='wood'){if(r<.70){const c=R([3,5]);G.coinB+=c;out.push(['coins',c]);}else if(r<.95){G.kiB+=1;out.push(['ki',1]);}else{const g=RG([0,1]);G.gear.push(g);out.push(['gear',g]);}}
 else if(ch==='gold'){const pe=Math.min(.2,.03*eg);if(r<.45){const c=R([5,10]);G.coinB+=c;out.push(['coins',c]);}else if(r<.80){G.kiB+=2;out.push(['ki',2]);}else if(r<1-pe){const g=RG([1,2]);G.gear.push(g);out.push(['gear',g]);}else{G.eggs.push('egg_n');out.push(['egg','egg_n']);}}
 else{const g=RG([2,3]);G.gear.push(g);out.push(['gear',g]);if(G.rnd()<Math.min(.6,.2*eg)){G.eggs.push('egg_yy');out.push(['egg','egg_yy']);}if(G.rnd()<Math.min(.4,.1*eg)){G.eggs.push('egg_dk');out.push(['egg','egg_dk']);}}
 const up=[],n=ch==='wood'?1:ch==='gold'?2:3;for(let i=0;i<n;i++){const c=dgCards(G,1)[0];dgApply(G,c);up.push(c);}
 return{out,up};}
function dgReward(G){const t=Math.min(DG_DUR,G.t),m=Math.floor(t/60),rk=dgRank(G),R=x=>Math.floor(x[0]+G.rnd()*(x[1]-x[0]+1));
 const C=G.C||dgDef(),er=C.evRew||1,eg=C.evEgg||1,coins=Math.round(Math.min(C.cMax,C.cMin*m+(G.clear?C.cClear:0)+G.coinB)*er),ki=Math.round(Math.min(C.kMax,C.k5*Math.floor(m/5)+C.kRank*rk+G.kiB)*er),gear=G.gear.slice(),eggs=G.eggs.slice();
 if(m>=15){gear.push(G.clear?(G.rnd()<.85?2:3):m>=25?(G.rnd()<.6?1:2):(G.rnd()<.7?0:1));}
 if(m>=15&&G.rnd()<Math.min(.5,.15*eg))eggs.push('egg_n');if(m>=20&&G.rnd()<Math.min(.4,.10*eg))eggs.push('egg_yy');
 if(G.clear){if(!eggs.includes('egg_dk'))eggs.push('egg_dk');}else if(m>=25&&G.rnd()<Math.min(.4,.10*eg))eggs.push('egg_dk');
 return{t:Math.round(t),m,rk,lv:G.lv,kills:G.kills,clear:G.clear,coins,ki,gear:gear.map(g=>Math.min(3,g)),eggs};}

/* --- 자동 조종 (시뮬레이터용) --- */
function dgBot(G){const p=G.p;let ax=0,ay=0;
 for(const e of G.E){const dx=p.x-e.x,dy=p.y-e.y,d2=dx*dx+dy*dy;if(d2<300*300&&d2>1){const w=(e.boss?6:1)/d2;ax+=dx*w;ay+=dy*w;}}
 for(const s of G.S){const dx=p.x-s.x,dy=p.y-s.y,d2=dx*dx+dy*dy;if(d2<120*120&&d2>1){ax+=dx*3/d2;ay+=dy*3/d2;}}
 let L=Math.hypot(ax,ay);if(L>0){ax/=L;ay/=L;}
 let best=null,bd=320*320;for(const q of G.K){const d=(q.x-p.x)**2+(q.y-p.y)**2;if(d<bd){bd=d;best=q;}}
 if(best){const dx=best.x-p.x,dy=best.y-p.y,d=Math.sqrt(bd)||1;ax+=dx/d*1.1;ay+=dy/d*1.1;}
 const a=G.t*.25;ax+=Math.cos(a)*.35;ay+=Math.sin(a)*.35;L=Math.hypot(ax,ay)||1;return[ax/L,ay/L];}
function dgSim(cp,el,cfg,maxT){const G=dgNew({cp,el,cfg});const dt=1/15,lim=maxT||DG_DUR;
 while(!G.dead&&!G.clear&&G.t<lim){const [x,y]=dgBot(G);dgStep(G,dt,x,y);G.ev.length=0;
  while(G.pend>0){G.pend--;const cs=dgCards(G,3);cs.sort((a,b)=>(b.k===G.el?2:b.t==='w'?1:0)-(a.k===G.el?2:a.t==='w'?1:0));dgApply(G,cs[0]);}
  while(G.chests.length)dgChestRoll(G,G.chests.shift());}
 return{t:G.t,lv:G.lv,kills:G.kills,clear:G.clear};}
/* ===== 도깨비 야행 · 화면 (그림은 i/dg/ 에 올리면 바로 적용, 없으면 임시 도트) ===== */
const DGV={G:null,raf:0,pause:0,ov:'',keys:{},stick:null,last:0,hudT:0,warnT:0,warnN:'',pet:null,petImg:null,sim:null};
const DGI={};
function dgSpr(k,sz){const im=dgI(k);if(!im)return null;const b=Math.max(16,Math.ceil(sz/16)*16)*(Math.min(2,devicePixelRatio||1)),key=k+'@'+b;let c=DGI[key];if(!c){c=DGI[key]=document.createElement('canvas');c.width=c.height=b;const x=c.getContext('2d');x.imageSmoothingEnabled=true;x.imageSmoothingQuality='high';x.drawImage(im,0,0,b,b);}return c;}
function dgI(k){let o=DGI[k];if(!o){o=DGI[k]={im:new Image(),ok:0};o.im.onload=()=>{o.ok=1;};o.im.onerror=()=>{o.ok=-1;};o.im.src='i/dg/dg_'+k+'.png?'+IMG_V;}return o.ok===1?o.im:null;}
function dgCfg(){const c=Object.assign(dgDef(),(cfg&&cfg.dg)||{});['daily','en','hp','dmg','spawn','cMin','cClear','cMax','k5','kRank','kMax'].forEach(k=>{c[k]=Math.max(0,+c[k]||0);});c.hp=c.hp||100;c.dmg=c.dmg||100;c.spawn=c.spawn||100;return c;}
function dgLeft(){const d=accDaily();return Math.max(0,dgCfg().daily+mgEv('dgEnt')+(d.dgBonus||0)-(d.dg||0));}
function dgElOf(no){const e=String(ELOF[no]||'yang').split('|')[0];return DG_EL[e]?e:'yang';}
function dgImgTag(k,alt,cls,fb){if(DGI[k]&&DGI[k].ok===-1&&!fb)return '<img class="px '+(cls||'')+'" alt="" style="display:none">';return '<img class="px '+(cls||'')+'" src="i/dg/dg_'+k+'.png?'+IMG_V+'" alt="'+esc(alt||'')+'" onerror="this.onerror=null;'+(fb?'this.src=\''+fb+'\'':'this.style.display=\'none\'')+'">';}
const DG_ICF={coins:'i/ui/icon_coin.png',ki:'i/ui/icon_ki_fire.png'};

function vDgn(){if(!dgOpen())return krClosed('도깨비 야행');dgSettle();const R=dgRep(),p=R&&R.p,C=dgCfg(),left=dgLeft(),best=acc.dg&&acc.dg.best||0,tot=C.daily+mgEv('dgEnt')+(accDaily().dgBonus||0);
 const el=p?dgElOf(p.no):'yang',sec=acc.inv.sec_dg||0,canGo=p&&left&&p.en>=C.en;
 const row=(ic,t,d)=>'<li><span class="dgri">'+ic+'</span><span><b>'+t+'</b>'+d+'</span></li>';
 return '<section class="card dgcard"><div class="dghero"><div class="dgherot"><div class="dglogo"><h2 class="serif">도깨비 야행</h2></div><small>30분 서바이벌 사냥터</small><p>영혼을 모아 강해지고, 5분마다 나타나는 보스를 쓰러뜨려 보세요</p></div></div>'+
 '<div class="dgbody">'+
 (p?'<div class="dgrep"><img class="px" src="'+img(p.no)+'" alt=""><div class="dgrepi"><div class="dgrepn"><b class="serif">'+esc(NAMES[p.no])+'</b><span>'+p.st+'단계 · Lv '+p.lv+'</span></div>'+
   '<div class="dgchips"><span class="dgchip">전투력 <b>'+fmt(cp(p))+'</b></span><span class="dgchip">기본 탄막 <b>'+DG_ELN[el]+' · '+DG_EL[el]+'</b></span><span class="dgchip'+(p.en<C.en?' bad':'')+'">활동력 <b>'+Math.floor(p.en)+'</b> / '+C.en+' 필요</span></div></div></div>'
  :'<p class="dgwarn">대표 환수가 없어요. 성장 화면에서 환수를 키워 주세요.</p>')+
 '<div class="dgmeta"><div><small>오늘 남은 입장</small><b>'+left+' <i>/ '+tot+'</i></b></div><div><small>최고 기록</small><b>'+dgClock(best)+'</b></div><div><small>충전비서</small><b>'+sec+'</b></div></div>'+
 (!left&&sec>0?'<button class="btn soft dgfill" data-dgfill="1"><img class="px" src="'+ITEMS.sec_dg.img+'" alt="">야행충전비서 사용 · 입장 +1</button>':'')+
 '<button class="btn teal dgstart" data-dg="start"'+(canGo?'':' disabled')+'>'+(!p?'대표 환수가 필요해요':!left?'오늘 입장을 다 했어요':p.en<C.en?'활동력이 부족해요':'입장하기')+'</button>'+
 '<h3 class="dgh3 serif">보상</h3><ul class="dglist">'+
 row('<img class="px" src="i/ui/icon_coin.png" alt="">','환수코인','1분 버틸 때마다 '+C.cMin+'개 · 완주하면 +'+C.cClear+' · 상자·꾸러미 포함 최대 '+C.cMax)+
 row('<img class="px" src="i/ui/icon_ki_fire.png" alt="">','기운세트','6가지 기운 1개씩이 1세트 · 5분마다 '+C.k5+'세트 · 경지마다 '+C.kRank+'세트 · 최대 '+C.kMax)+
 row('<img class="px" src="eq/2_w.gif" alt="">','장비','5종 중 하나 무작위 · 15분 일반~고급 · 25분 고급~희귀 · 완주 희귀~영웅(영웅 15%)')+
 row('<img class="px" src="'+ITEMS.egg_dk.img+'" alt="">','알','15분 환수알 15% · 20분 음양알 10% · 25분 도깨비알 10% · 완주하면 도깨비알 확정')+
 row('<img class="px" src="i/dg/dg_chest_gold.png" alt="">','보스 상자','5분 정예(일반 상자) · 10·15·20·25분 중간보스(황금 상자) · 27분 도깨비 대왕(신비 상자)')+'</ul>'+
 '<h3 class="dgh3 serif">규칙</h3><ul class="dglist sm">'+
 row('🎮','조작','PC는 WASD·방향키, 모바일은 화면을 누른 채 끌기 · 공격은 자동, 환수 옆 화살표 방향으로 나가요')+
 row('🎟️','입장','하루 '+C.daily+'번 · 다 쓰면 야행충전비서로 1번씩 더 들어갈 수 있어요')+
 row('🏳️','끝나면','쓰러지거나 포기해도 그때까지 쌓인 보상을 받아요 · 1분마다 기록이 저장돼서 창이 꺼져도 다음 접속 때 받아요')+'</ul></div></section>';}
function dgRep(){try{autoRep();}catch(e){}return repPet();}
function dgClock(s){s=Math.max(0,Math.floor(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');}

/* --- 시작 --- */
function dgEvC(){return{evRew:mgM('dgRew'),evBox:mgEv('dgBox'),evEgg:mgM('dgEgg'),evXp:mgM('dgXp')};}
function dgStart(){const R=dgRep(),p=R&&R.p,C=Object.assign({},dgCfg(),dgEvC());
 if(!p)return toast('대표 환수가 없어요.');if(!dgLeft())return toast('오늘 입장 횟수를 다 썼어요.');if(p.en<C.en)return toast('활동력이 부족해요. ('+C.en+' 필요)');
 p.en-=C.en;const d=accDaily();d.dg=(d.dg||0)+1;acc.dg=acc.dg||{};acc.dg.runs=(acc.dg.runs||0)+1;save();
 const G=dgNew({cp:cp(p),el:dgElOf(p.no),cfg:C});acc.dg.run=dgSnap(G);save();DGV.G=G;DGV.ckT=60;DGV.pet=p;DGV.petImg=new Image();DGV.petImg.src=img(p.no);DGV.pause=0;DGV.ov='';DGV.keys={};DGV.stick=null;DGV.warnT=0;DGV.done=0;
 Object.keys(DG_MT).forEach(k=>dgI(k));['rank1','rank2','rank3','rank4','rank5','rank6','timer','ic_kill','ic_soul','ic_pause','boss_warn','arrow','ground','hpbar'].forEach(k=>dgI(k));
 const L=document.getElementById('layer');
 L.innerHTML='<div class="dgw" id="dgw"><canvas id="dgc"></canvas><div class="dghud" id="dghud">'+
  '<div class="dgtop"><div class="dgtime">'+dgImgTag('timer','','dgbg')+'<b id="dgT">30:00</b></div><div class="dgkill">'+dgImgTag('ic_kill','','dgic')+'<b id="dgK">0</b></div><div class="dgkill dgsoul">'+dgImgTag('ic_soul','','dgic')+'<b id="dgSo">0</b></div>'+
  '<div class="dgrank"><span id="dgRk"></span><b id="dgLv">Lv 1</b></div><button class="dgpbtn" data-dg="pause" aria-label="일시정지">'+dgImgTag('ic_pause','')+'<span class="fb">Ⅱ</span></button></div>'+
  '<div class="dgxp"><div><i id="dgX"></i></div></div><div class="dgboss" id="dgB" hidden><div class="dgbb"><i id="dgBh"></i><small id="dgBn"></small></div></div><div class="dgwarnb" id="dgW" hidden></div></div><div id="dgov"></div></div>';
 const w=document.getElementById('dgw');w.addEventListener('click',dgClick);
 const c=document.getElementById('dgc');c.addEventListener('pointerdown',dgPD);addEventListener('pointermove',dgPM);addEventListener('pointerup',dgPU);addEventListener('pointercancel',dgPU);
 addEventListener('keydown',dgKD);addEventListener('keyup',dgKU);document.addEventListener('visibilitychange',dgVis);addEventListener('blur',dgBlur);
 document.documentElement.classList.add('dgon');SFX.play('whoosh');DGV.last=performance.now();DGV.raf=requestAnimationFrame(dgLoop);}
function dgUnbind(){document.documentElement.classList.remove('dgon');removeEventListener('pointermove',dgPM);removeEventListener('pointerup',dgPU);removeEventListener('pointercancel',dgPU);removeEventListener('keydown',dgKD);removeEventListener('keyup',dgKU);document.removeEventListener('visibilitychange',dgVis);removeEventListener('blur',dgBlur);cancelAnimationFrame(DGV.raf);}
function dgVis(){if(document.hidden)dgPauseMenu();}
function dgBlur(){dgPauseMenu();}
const DG_KM={w:[0,-1],arrowup:[0,-1],s:[0,1],arrowdown:[0,1],a:[-1,0],arrowleft:[-1,0],d:[1,0],arrowright:[1,0]};
function dgKD(e){const k=e.key.toLowerCase();if(DG_KM[k]){DGV.keys[k]=1;e.preventDefault();}if(k==='escape'||k==='p'){if(DGV.ov==='pause')dgResume();else dgPauseMenu();}}
function dgKU(e){delete DGV.keys[e.key.toLowerCase()];}
function dgPD(e){if(DGV.pause)return;DGV.stick={id:e.pointerId,x:e.clientX,y:e.clientY,dx:0,dy:0};e.preventDefault();}
function dgPM(e){const s=DGV.stick;if(!s||s.id!==e.pointerId)return;let dx=e.clientX-s.x,dy=e.clientY-s.y;const L=Math.hypot(dx,dy),M=56;if(L>M){dx=dx/L*M;dy=dy/L*M;}s.dx=dx;s.dy=dy;}
function dgPU(e){if(DGV.stick&&DGV.stick.id===e.pointerId)DGV.stick=null;}
function dgInput(){let x=0,y=0;for(const k in DGV.keys){const v=DG_KM[k];if(v){x+=v[0];y+=v[1];}}const L=Math.hypot(x,y);if(L){x/=L;y/=L;}
 const s=DGV.stick;if(s){const L2=Math.hypot(s.dx,s.dy);if(L2>8){x=s.dx/56;y=s.dy/56;}}return[x,y];}

/* --- 루프 --- */
function dgLoop(now){const G=DGV.G;if(!G||!document.getElementById('dgc'))return dgUnbind();DGV.raf=requestAnimationFrame(dgLoop);
 let dt=(now-DGV.last)/1000;DGV.last=now;if(dt>.25)dt=.25;
 if(!DGV.pause&&!DGV.done){let left=dt;while(left>0){const s=Math.min(.033,left);left-=s;const [x,y]=dgInput();dgStep(G,s,x,y);if(G.ev.length||G.pend||G.dead||G.clear)break;}dgEvents();}
 if(DGV.warnT>0)DGV.warnT-=dt;
 if(!DGV.done&&G.t>=DGV.ckT){DGV.ckT=Math.floor(G.t/60+1)*60;acc.dg.run=dgSnap(G);save();}
 dgDraw(now/1000);DGV.hudT-=dt;if(DGV.hudT<=0){DGV.hudT=.1;dgHud();}}
function dgEvents(){const G=DGV.G;let end=0;for(const e of G.ev.splice(0)){
  if(e.k==='boss'){DGV.warnN=DG_MT[e.e.k].n||'보스';DGV.warnT=2.4;const w=document.getElementById('dgW');if(w){w.hidden=false;w.innerHTML='<b>'+esc(DGV.warnN)+' 출현!</b>';w.classList.remove('wave');}SFX.play('thud');}
  else if(e.k==='bossdown')SFX.play('ok');
  else if(e.k==='wave'){DGV.warnN='도깨비 떼가 몰려와요!';DGV.warnT=1.6;const w=document.getElementById('dgW');if(w){w.hidden=false;w.innerHTML='<b>'+DGV.warnN+'</b>';w.classList.add('wave');}}
  else if(e.k==='end')end=1;}
 if(end||G.dead||G.clear)return dgFinish();
 if(G.chests.length)return dgChestOpen(G.chests[0]);
 if(G.pend>0)dgLvUp();}
/* --- HUD --- */
function dgSet(id,v,prop){const e=document.getElementById(id);if(!e)return;prop=prop||'textContent';const k='_'+prop;if(e[k]===v)return;e[k]=v;if(prop==='width')e.style.width=v;else e.textContent=v;}
function dgHud(){const G=DGV.G,$=id=>document.getElementById(id);if(!$('dgT'))return;
 dgSet('dgT',dgClock(DG_DUR-G.t));dgSet('dgK',fmt(G.kills));dgSet('dgSo',fmt(G.souls||0));dgSet('dgLv','Lv '+G.lv);
 const rk=dgRank(G),rb=$('dgRk');if(rb.dataset.r!=String(rk)){rb.dataset.r=rk;rb.innerHTML=dgImgTag('rank'+(rk+1),'')+'<small>'+DG_RANKS[rk]+'</small>';}
 dgSet('dgX',Math.min(100,Math.round(G.xp/G.need*200)/2)+'%','width');
 const b=G.E.filter(e=>e.boss).sort((a,c)=>c.boss-a.boss)[0],B=$('dgB');
 if(b){if(B.hidden)B.hidden=false;dgSet('dgBn',DG_MT[b.k].n);{const e=document.getElementById('dgBh'),v=Math.max(0,Math.round(b.hp/b.mhp*200)/200);if(e&&e._p!==v){e._p=v;e.style.setProperty('--p',v);}}}else if(!B.hidden)B.hidden=true;
 if(DGV.warnT<=0&&!$('dgW').hidden)$('dgW').hidden=true;}
/* --- 그리기 --- */
const DG_COL={m1:'#5b8cff',m2:'#4fc06a',m3:'#e5484d',m4:'#9b6ad8',m5:'#f0c040',m6:'#ff8a3d',m7:'#7c8cff',m8:'#3a2a4a',e1:'#c8781e',e2:'#d84aa0',b1:'#e5482d',b2:'#2f7fd8',b3:'#8a96a8',b4:'#3f7a4a',bx:'#6a4ad0'};
const DG_BC={fire:'#ff7a2a',water:'#5ab4ff',wood:'#5ad06a',metal:'#dfe6f0',earth:'#c8964a',yin:'#a57cff',yang:'#ffd36e',bat:'#c8964a',orb:'#e8f0ff',bujeok:'#ffe27a',bell:'#ffd36e',satgat:'#d8b878',dfire:'#8a7cff'};
function dgSheet(k,t,x,y,w,h,rot,flip){const im=dgI(k);if(!im)return false;const n=8,fw=im.width/n,f=Math.floor(t*14)%n;const c=DGV.ctx;c.save();c.translate(x,y);if(rot)c.rotate(rot);if(flip)c.scale(-1,1);c.drawImage(im,f*fw,0,fw,im.height,-w/2,-h/2,w,h);c.restore();return true;}
function dgSheetOnce(k,prog,x,y,w,h,rot){const im=dgI(k);if(!im)return false;const n=8,fw=im.width/n,f=Math.min(n-1,Math.floor(prog*n));const c=DGV.ctx;c.save();c.translate(x,y);if(rot)c.rotate(rot);c.drawImage(im,f*fw,0,fw,im.height,-w/2,-h/2,w,h);c.restore();return true;}
function dgHash(a,b){let h=(a*374761393+b*668265263)|0;h=(h^(h>>13))*1274126177|0;return ((h^(h>>16))>>>0)/4294967296;}
function dgDraw(T){const cv=document.getElementById('dgc');if(!cv)return;const dpr=Math.min(2,devicePixelRatio||1),W=cv.clientWidth,H=cv.clientHeight;
 if(cv.width!==Math.round(W*dpr)||cv.height!==Math.round(H*dpr)){cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);}
 const c=cv.getContext('2d');DGV.ctx=c;c.setTransform(dpr,0,0,dpr,0,0);c.imageSmoothingEnabled=false;const G=DGV.G,p=G.p;
 const z=Math.max(.72,Math.min(1.15,Math.min(W,H)/680));G.vr=Math.hypot(W,H)/2/z;DGV.z=z;
 c.fillStyle='#1b2236';c.fillRect(0,0,W,H);
 c.save();c.translate(W/2,H/2);c.scale(z,z);c.translate(-p.x,-p.y);
 const vx0=p.x-W/2/z,vy0=p.y-H/2/z,vx1=p.x+W/2/z,vy1=p.y+H/2/z;
 const gi=dgI('ground');
 if(gi){const S=256,x0=Math.floor(vx0/S)*S,y0=Math.floor(vy0/S)*S;for(let x=x0;x<vx1;x+=S)for(let y=y0;y<vy1;y+=S)c.drawImage(gi,x,y,S+1,S+1);}
 else{const S=64,x0=Math.floor(vx0/S)*S,y0=Math.floor(vy0/S)*S;for(let x=x0;x<vx1;x+=S)for(let y=y0;y<vy1;y+=S){const h=dgHash(x/S,y/S);c.fillStyle=h<.5?'#1f2a3c':'#1c2638';c.fillRect(x,y,S,S);if(h>.82){c.fillStyle='#2f4a3a';c.fillRect(x+h*40,y+20,6,6);c.fillRect(x+h*40+8,y+24,4,4);}}}
 // 장식
 const DS=300,DK=['lantern','pine','rock','jangseung','grass','grave'];for(let gx=Math.floor(vx0/DS)-1;gx<=vx1/DS+1;gx++)for(let gy=Math.floor(vy0/DS)-1;gy<=vy1/DS+1;gy++){const h=dgHash(gx+999,gy-777);if(h>.45)continue;const k=DK[Math.floor(h/.45*6)%6],x=gx*DS+dgHash(gx,gy)*DS,y=gy*DS+dgHash(gy,gx)*DS,im=dgI('d_'+k);
  if(im)c.drawImage(im,x-40,y-60,80,80);else{c.fillStyle=k==='pine'?'#24402c':k==='lantern'?'#6a6a72':k==='grass'?'#2a4a30':'#3a3f4a';c.beginPath();c.ellipse(x,y,k==='pine'?22:14,k==='pine'?30:10,0,0,7);c.fill();if(k==='lantern'){c.fillStyle='#ffcf6a';c.fillRect(x-3,y-6,6,6);}}}
 // 바닥 장판
 for(const b of G.B){if(b.k==='earth'||b.k==='fire'){const pr=b.age||0;if(b.k==='earth'){c.globalAlpha=.88;const ok=dgSheet('fx_earth',T,b.x,b.y,b.r*2.4,b.r*2.4);c.globalAlpha=1;if(!ok){c.fillStyle='rgba(200,150,74,.28)';c.beginPath();c.arc(b.x,b.y,b.r,0,7);c.fill();c.strokeStyle='rgba(120,80,30,.8)';c.lineWidth=3;c.stroke();}}
   else if(!dgSheet('fx_fire',T+b.id,b.x,b.y,b.r*2.5,b.r*2.5)){c.fillStyle='rgba(255,110,40,.35)';c.beginPath();c.arc(b.x,b.y,b.r,0,7);c.fill();c.fillStyle='rgba(255,210,90,.7)';c.beginPath();c.arc(b.x+Math.cos(T*9)*b.r*.4,b.y+Math.sin(T*9)*b.r*.4,b.r*.35,0,7);c.fill();}}}
 if(G.W.yang){const R=(88+8*G.W.yang)*dgSz(G);if(!dgSheet('fx_yang',T,p.x,p.y,R*2.3,R*2.3)){c.fillStyle='rgba(255,211,110,.13)';c.beginPath();c.arc(p.x,p.y,R,0,7);c.fill();c.strokeStyle='rgba(255,220,130,.5)';c.lineWidth=2;c.stroke();}}
 if(G.W.geumjul&&G.gjR){if(!dgSheet('cw_geumjul',T,p.x,p.y,G.gjR*2.2,G.gjR*2.2)){c.setLineDash([10,8]);c.strokeStyle='rgba(230,210,150,.7)';c.lineWidth=4;c.beginPath();c.arc(p.x,p.y,G.gjR,0,7);c.stroke();c.setLineDash([]);}}
 for(const f of G.FX)if(f.k==='warn'){if(!dgSheetOnce('warn_circle',f.t/f.life,f.x,f.y,f.r*2.4,f.r*2.4)){c.fillStyle='rgba(229,72,77,'+(.15+.3*f.t/f.life)+')';c.beginPath();c.arc(f.x,f.y,f.r,0,7);c.fill();}}
 // 아이템
 for(const q of G.K){if(q.x<vx0-40||q.x>vx1+40||q.y<vy0-40||q.y>vy1+40)continue;const k=q.k==='chest'?'chest_'+q.ch:'pk_'+q.k,im=dgI(k),s=q.k==='chest'?64:q.k==='soul3'?26:q.k==='soul2'?20:q.v?15:28,bob=Math.sin(T*4+q.x)*2;
  if(im)c.drawImage(im,q.x-s/2,q.y-s/2+bob,s,s);else{c.fillStyle={soul1:'#5ab4ff',soul2:'#5ad06a',soul3:'#e0408a',heal:'#ffb0c0',magnet:'#ffd36e',bomb:'#e5484d',gold:'#ffd36e'}[q.k]||'#c8781e';
   if(q.k==='chest'){c.fillRect(q.x-22,q.y-16,44,32);c.fillStyle='#ffd36e';c.fillRect(q.x-22,q.y-4,44,5);}else{c.beginPath();c.moveTo(q.x,q.y-s/2+bob);c.lineTo(q.x+s/2.6,q.y+bob);c.lineTo(q.x,q.y+s/2+bob);c.lineTo(q.x-s/2.6,q.y+bob);c.fill();}}}
 // 몬스터
 for(const e of G.E){if(e.x<vx0-120||e.x>vx1+120||e.y<vy0-120||e.y>vy1+120)continue;const s=e.r*(e.boss?2.8:2.7),im=dgSpr(e.k,s*DGV.z),fl=p.x>e.x,bob=Math.abs(Math.sin(T*8+e.id))*3;
  c.fillStyle='rgba(0,0,0,.25)';c.beginPath();c.ellipse(e.x,e.y+e.r*.85,e.r*.8,e.r*.3,0,0,7);c.fill();
  if(e.dash>.5){c.globalAlpha=.6+.4*Math.sin(T*30);}
  if(im){c.save();c.translate(e.x,e.y-bob);if(fl)c.scale(-1,1);c.drawImage(im,-s/2,-s/2,s,s);c.restore();}
  else{c.fillStyle=DG_COL[e.k]||'#5b8cff';c.beginPath();c.arc(e.x,e.y-bob,e.r,0,7);c.fill();c.fillStyle='#f4e6c8';c.beginPath();c.moveTo(e.x-e.r*.3,e.y-bob-e.r*.8);c.lineTo(e.x-e.r*.1,e.y-bob-e.r*1.35);c.lineTo(e.x+e.r*.1,e.y-bob-e.r*.85);c.fill();
   c.fillStyle='#fff';const ex=fl?.3:-.3;c.fillRect(e.x+e.r*(ex-.2),e.y-bob-e.r*.2,e.r*.22,e.r*.28);c.fillRect(e.x+e.r*(ex+.1),e.y-bob-e.r*.2,e.r*.22,e.r*.28);if(e.boss){c.strokeStyle='#ffd36e';c.lineWidth=3;c.stroke();}}
  c.globalAlpha=1;
  if(e.boss){c.fillStyle='#000a';c.fillRect(e.x-e.r,e.y-e.r-14,e.r*2,6);c.fillStyle='#e5484d';c.fillRect(e.x-e.r,e.y-e.r-14,e.r*2*Math.max(0,e.hp/e.mhp),6);}}
 // 환수
 const pi=DGV.petImg,ps=78,fl=(p.fx>0)!==FACE_R.has(DGV.pet.no),bob=Math.sin(T*10)*2;
 c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(p.x,p.y+30,24,8,0,0,7);c.fill();
 if(pi&&pi.complete&&pi.naturalWidth){c.save();c.translate(p.x,p.y+bob);if(fl)c.scale(-1,1);if(p.inv>0)c.globalAlpha=.6;c.drawImage(pi,-ps/2,-ps/2-6,ps,ps);c.restore();}
 else{c.fillStyle='#fff2c8';c.beginPath();c.arc(p.x,p.y,22,0,7);c.fill();}
 // 방향 화살표
 const fa=Math.atan2(p.fy,p.fx),ax=p.x+Math.cos(fa)*52,ay=p.y+Math.sin(fa)*52,aim=dgI('arrow');
 if(aim){c.save();c.translate(ax,ay);c.rotate(fa);c.drawImage(aim,-16,-16,32,32);c.restore();}else{c.save();c.translate(ax,ay);c.rotate(fa);c.fillStyle='rgba(165,124,255,.9)';c.beginPath();c.moveTo(12,0);c.lineTo(-6,-9);c.lineTo(-2,0);c.lineTo(-6,9);c.fill();c.restore();}
 {const hb=dgI('hpbar'),hr=Math.max(0,p.hp/p.mhp);if(hb){c.fillStyle='#120c18';c.fillRect(p.x-26,p.y-56,52,8);c.fillStyle=hr>.3?'#5fd068':'#e5484d';c.fillRect(p.x-26,p.y-56,52*hr,8);c.drawImage(hb,p.x-32,p.y-58,64,12);}else{c.fillStyle='#000a';c.fillRect(p.x-26,p.y-56,52,7);c.fillStyle=hr>.3?'#4caf50':'#e5484d';c.fillRect(p.x-26,p.y-56,52*hr,7);}}
 // 탄막
 for(const b of G.B){const k=b.k,col=DG_BC[k]||'#fff',ang=b.a!=null?b.a:Math.atan2(b.vy||0,b.vx||1);if(k==='earth'||k==='fire')continue;
  if(k==='water'){if(!dgSheet('fx_water',T,b.x,b.y,b.r*2.6,b.r*2.6,ang)){c.save();c.translate(b.x,b.y);c.rotate(ang);c.fillStyle='rgba(90,180,255,.8)';c.beginPath();c.arc(0,0,b.r,-1.2,1.2);c.lineTo(-b.r*.3,0);c.fill();c.restore();}}
  else if(k==='wood'){if(!dgSheet('fx_wood',T+b.id,b.x,b.y,34,34,ang)){c.save();c.translate(b.x,b.y);c.rotate(ang);c.fillStyle=col;c.beginPath();c.ellipse(0,0,13,5,0,0,7);c.fill();c.restore();}}
  else if(k==='metal'){const pr=1-b.life/.25;if(!dgSheetOnce('fx_metal',pr,b.x+Math.cos(b.a)*b.r*.55,b.y+Math.sin(b.a)*b.r*.55,b.r*1.4,b.r*1.4,b.a)){c.strokeStyle='rgba(235,240,250,'+(1-pr)+')';c.lineWidth=5;for(let i=-1;i<=1;i++){c.beginPath();c.arc(b.x,b.y,b.r*(.75+i*.12),b.a-.8,b.a+.8);c.stroke();}}}
  else if(k==='yin'){if(!dgSheet('fx_yin',T,b.x,b.y,40,40,ang)){c.fillStyle=col;c.beginPath();c.arc(b.x,b.y,b.r,0,7);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(b.x,b.y,b.r*.4,0,7);c.fill();}}
  else if(k==='bell'){if(!dgSheet('cw_bell',b.age*1.6,b.x,b.y,b.r*2.2,b.r*2.2)){c.strokeStyle='rgba(255,211,110,'+Math.max(0,b.life*2)+')';c.lineWidth=6;c.beginPath();c.arc(b.x,b.y,b.r,0,7);c.stroke();}}
  else{const sk={bat:'cw_bat',orb:'cw_orb',bujeok:'cw_bujeok',satgat:'cw_satgat',dfire:'cw_fire'}[k],sz=b.r*2.6;if(!sk||!dgSheet(sk,T+b.id*.1,b.x,b.y,sz,sz,k==='bujeok'?ang:0)){c.fillStyle=col;c.beginPath();if(k==='bujeok'){c.save();c.translate(b.x,b.y);c.rotate(ang);c.fillRect(-10,-6,20,12);c.fillStyle='#c8281e';c.fillRect(-3,-3,6,6);c.restore();}else if(k==='satgat'){c.save();c.translate(b.x,b.y);c.rotate(T*14);c.beginPath();c.moveTo(-b.r,0);c.lineTo(0,-b.r*.4);c.lineTo(b.r,0);c.closePath();c.fill();c.restore();}else{c.arc(b.x,b.y,b.r,0,7);c.fill();}}}}
 for(const s of G.S){if(!dgSheet('eshot',T,s.x,s.y,s.r*3,s.r*3)){c.fillStyle='#e0408a';c.beginPath();c.arc(s.x,s.y,s.r,0,7);c.fill();c.fillStyle='#ffd0e0';c.beginPath();c.arc(s.x,s.y,s.r*.45,0,7);c.fill();}}
 // 효과
 for(const f of G.FX){const pr=f.t/f.life;
  if(f.k==='hit'){if(!dgSheetOnce('hit',pr,f.x,f.y,40,40)){c.fillStyle='rgba(255,240,180,'+(1-pr)+')';c.fillRect(f.x-4,f.y-4,8,8);}if(f.c){c.font='bold 16px sans-serif';c.fillStyle='#ffd36e';c.textAlign='center';c.fillText(fmt(f.v),f.x,f.y-14-pr*16);}}
  else if(f.k==='die'){if(!dgSheetOnce('die',pr,f.x,f.y,f.r*3,f.r*3)){c.fillStyle='rgba(165,124,255,'+(1-pr)*.6+')';c.beginPath();c.arc(f.x,f.y,f.r*(1+pr),0,7);c.fill();}}
  else if(f.k==='boom'){c.fillStyle='rgba(255,150,60,'+(1-pr)*.6+')';c.beginPath();c.arc(f.x,f.y,f.r*(.5+pr*.6),0,7);c.fill();}
  else if(f.k==='chain'){if(!dgSheet('fx_yinchain',T,(f.x+f.x2)/2,(f.y+f.y2)/2,Math.hypot(f.x2-f.x,f.y2-f.y),28,Math.atan2(f.y2-f.y,f.x2-f.x))){c.strokeStyle='rgba(190,150,255,'+(1-pr)+')';c.lineWidth=3;c.beginPath();c.moveTo(f.x,f.y);c.lineTo((f.x+f.x2)/2+(Math.random()-.5)*16,(f.y+f.y2)/2+(Math.random()-.5)*16);c.lineTo(f.x2,f.y2);c.stroke();}}
  else if(f.k==='thunder'){if(!dgSheetOnce('cw_thunder',pr,f.x,f.y-40,90,140)){c.strokeStyle='rgba(255,240,120,'+(1-pr)+')';c.lineWidth=4;c.beginPath();c.moveTo(f.x,f.y-160);c.lineTo(f.x+10,f.y-90);c.lineTo(f.x-8,f.y-50);c.lineTo(f.x,f.y);c.stroke();}}
  else if(f.k==='lvup'){if(!dgSheetOnce('lvup',pr,p.x,p.y-10,150,150)){c.strokeStyle='rgba(124,216,255,'+(1-pr)+')';c.lineWidth=4;c.beginPath();c.arc(p.x,p.y,30+pr*70,0,7);c.stroke();}}
  else if(f.k==='bomb'){c.fillStyle='rgba(255,255,255,'+(1-pr)*.5+')';c.fillRect(vx0,vy0,vx1-vx0,vy1-vy0);}}
 c.restore();
 // 스틱
 const s=DGV.stick;if(s){const r=cv.getBoundingClientRect(),bx=s.x-r.left,by=s.y-r.top,bi=dgI('stick_base'),ki=dgI('stick_knob');
  if(bi)c.drawImage(bi,bx-64,by-64,128,128);else{c.fillStyle='rgba(20,24,40,.45)';c.beginPath();c.arc(bx,by,60,0,7);c.fill();c.strokeStyle='rgba(255,211,110,.6)';c.lineWidth=2;c.stroke();}
  if(ki)c.drawImage(ki,bx+s.dx-30,by+s.dy-30,60,60);else{c.fillStyle='rgba(165,124,255,.85)';c.beginPath();c.arc(bx+s.dx,by+s.dy,26,0,7);c.fill();}}}

/* --- 겹창 (레벨업 · 상자 · 일시정지 · 결과) --- */
function dgOv(h,cls){const o=document.getElementById('dgov');if(o)o.innerHTML=h?'<div class="dgovb '+(cls||'')+'">'+h+'</div>':'';}
function dgIcon(ic,fb){return '<span class="dgici">'+dgImgTag(ic,'')+'<span class="fb">'+fb+'</span></span>';}
const DG_FB={fire:'🔥',water:'🌊',wood:'🍃',metal:'🐾',earth:'🪨',yin:'💜',yang:'☀️',bat:'🏏',bujeok:'📜',bell:'🔔',orb:'🔮',thunder:'⚡',satgat:'👒',geumjul:'🪢',dfire:'👻',spd:'👟',mag:'🧲',heal:'🍵',cd:'⏳',size:'⭕',crit:'💥',hp:'❤️',arm:'🛡️'};
function dgLvUp(){const G=DGV.G;G.FX.push({k:'lvup',x:G.p.x,y:G.p.y,t:0,life:.8});DGV.pause=1;DGV.ov='lv';DGV.cards=dgCards(G,3);SFX.play('up');
 dgOv('<h3 class="serif">레벨 '+G.lv+'! 강화를 하나 고르세요</h3><div class="dgcards">'+DGV.cards.map((c,i)=>{const f=dgCardInfo(c);return '<button class="dgcd'+(f.nw||f.el?' rare':'')+'" data-dg="card" data-i="'+i+'">'+dgIcon(f.ic,DG_FB[c.k]||'🍡')+'<span class="dgct"><b>'+esc(f.n)+'</b><small>'+esc(f.d)+'</small></span></button>';}).join('')+'</div>','lv');}
function dgChestOpen(ch){const G=DGV.G,i=G.chests.indexOf(ch);if(i>=0)G.chests.splice(i,1);DGV.pause=1;DGV.ov='chest';const r=dgChestRoll(G,ch);acc.dg.run=dgSnap(G);save();SFX.play('fanfare');
 const nm={wood:'일반 상자',gold:'황금 상자',myth:'신비 상자'}[ch];
 const rw=r.out.map(([k,v])=>k==='coins'?'<li><img class="px" src="i/ui/icon_coin.png" alt="">환수코인 +'+v+'</li>':k==='ki'?'<li><img class="px" src="i/ui/icon_ki_fire.png" alt="">기운세트 +'+v+'</li>':k==='gear'?'<li><img class="px" src="eq/'+v+'_w.gif" alt="">장비 ('+GN[v]+') 1개</li>':'<li><img class="px" src="'+(ITEMS[v]?ITEMS[v].img:'h/00.gif')+'" alt="">'+esc(ITEMS[v]?ITEMS[v].n:v)+'</li>').join('');
 dgOv('<div class="dgchest"><i class="dgsh dgchfx"></i><span class="dgch">'+dgImgTag('chest_'+ch,'')+'<span class="fb">🎁</span></span><h3 class="serif">'+nm+'를 열었어요!</h3><ul class="dgrw">'+rw+'</ul><p class="dglab">던전 강화 '+r.up.length+'개를 바로 받았어요</p><ul class="dgup">'+r.up.map(c=>'<li>'+esc(dgCardInfo(c).n)+'</li>').join('')+'</ul><button class="btn teal" data-dg="resume">계속하기</button></div>','chest');
 dgI('chest_'+ch+'_o');setTimeout(()=>{const im=document.querySelector('.dgch img'),o=dgI('chest_'+ch+'_o');if(im&&o)im.src=o.src;},650);}
function dgPauseMenu(){if(!DGV.G||DGV.done||DGV.ov)return;DGV.pause=1;DGV.ov='pause';DGV.stick=null;DGV.keys={};
 dgOv('<div class="dgpanel"><h3 class="serif">잠시 멈춤</h3><div class="dgpst"><span>버틴 시간<b>'+dgClock(DGV.G.t)+'</b></span><span>레벨<b>'+DGV.G.lv+'</b></span><span>경지<b>'+DG_RANKS[dgRank(DGV.G)]+'</b></span><span>처치<b>'+fmt(DGV.G.kills)+'</b></span></div><div class="dgbtns"><button class="btn teal" data-dg="resume">계속하기</button><button class="btn soft dgq" data-dg="quit">'+dgImgTag('ic_giveup','')+'포기하기</button></div></div>','pause');}
function dgResume(){if(DGV.done)return;DGV.ov='';DGV.pause=0;dgOv('');DGV.last=performance.now();if(DGV.G.pend>0)dgLvUp();else if(DGV.G.chests.length)dgChestOpen(DGV.G.chests[0]);}
function dgClick(e){const t=e.target.closest('[data-dg]');e.stopPropagation();if(!t)return;const a=t.dataset.dg,G=DGV.G;if(!G)return;SFX.play('tap');
 if(a==='pause')return dgPauseMenu();
 if(a==='resume')return dgResume();
 if(a==='quit'){DGV.ov='quitc';return dgOv('<div class="dgpanel"><h3 class="serif">정말 포기할까요?</h3><p>지금까지 버틴 <b>'+dgClock(G.t)+'</b>만큼의 보상을 받고 끝나요.<br>포기한 판은 다시 이어서 할 수 없어요.</p><div class="dgbtns"><button class="btn teal" data-dg="resume">계속하기</button><button class="btn soft" data-dg="quitok">포기하고 보상 받기</button></div></div>','pause');}
 if(a==='quitok'){G.quit=1;return dgFinish();}
 if(a==='card'){const c=DGV.cards&&DGV.cards[+t.dataset.i];if(!c)return;dgApply(G,c);G.pend--;DGV.cards=null;DGV.ov='';if(G.pend>0)return dgLvUp();DGV.pause=0;dgOv('');DGV.last=performance.now();if(G.chests.length)dgChestOpen(G.chests[0]);return;}
 if(a==='close'){dgUnbind();DGV.G=null;closeLayer();render();}}

/* --- 끝 · 보상 지급 --- */
function dgSnap(G){return{t:Math.floor(G.t),lv:G.lv,kills:G.kills,coinB:G.coinB,kiB:G.kiB,gear:G.gear.slice(),eggs:G.eggs.slice(),day:dayKey(now())};}
function dgSettle(){const s=acc.dg&&acc.dg.run;if(!s||DGV.G)return;acc.dg.run=null;const G={C:Object.assign({},dgCfg(),dgEvC()),t:s.t||0,lv:s.lv||1,kills:s.kills||0,clear:0,coinB:s.coinB||0,kiB:s.kiB||0,gear:s.gear||[],eggs:s.eggs||[],rnd:Math.random};
 const r=dgReward(G);dgGrant(r);setTimeout(()=>toast('지난 도깨비 야행('+dgClock(r.t)+')이 중간에 끊겨서 그때까지 보상을 받았어요. 코인 +'+r.coins+(r.ki?' · 기운세트 +'+r.ki:'')+(r.gear.length?' · 장비 '+r.gear.length:'')+(r.eggs.length?' · 알 '+r.eggs.length:'')),300);}
function dgGrant(r){if(acc.dg)acc.dg.run=null;acc.coins=(acc.coins||0)+r.coins;for(const k in KI)acc.inv[KI[k]]=(acc.inv[KI[k]]||0)+r.ki;
 r.gearObj=r.gear.map(g=>{const n=gearNew(GT[Math.floor(Math.random()*GT.length)],g);acc.gear.push(n);return n;});
 r.eggs.forEach(k=>{acc.inv[k]=(acc.inv[k]||0)+1;});
 acc.dg=acc.dg||{};acc.dg.best=Math.max(acc.dg.best||0,r.t);if(r.clear)acc.dg.clears=(acc.dg.clears||0)+1;save();}
function dgFinish(){const G=DGV.G;if(!G||DGV.done)return;DGV.done=1;DGV.pause=1;DGV.ov='end';const r=dgReward(G);dgGrant(r);SFX.play(G.clear?'fanfare':'sad');
 const ttl=G.clear?'완주했어요!':G.quit?'포기했어요':'쓰러졌어요…',gs=r.gearObj||[];
 const L=[];gs.forEach(g=>L.push('<li><img class="px" src="'+gearImg(g)+'" alt="">'+GN[g.g]+' '+TN[g.t]+'</li>'));
 r.eggs.forEach(k=>L.push('<li><img class="px" src="'+(ITEMS[k]?ITEMS[k].img:'h/00.gif')+'" alt="">'+esc(ITEMS[k]?ITEMS[k].n:k)+'</li>'));
 if(r.ki)L.unshift('<li><img class="px" src="i/ui/icon_ki_fire.png" alt="">기운세트 +'+r.ki+' <small class="muted">· 6가지 각 '+r.ki+'개</small></li>');L.unshift('<li><img class="px" src="i/ui/icon_coin.png" alt="">환수코인 +'+r.coins+'</li>');
 const sl=(src,t)=>'<span class="dgslot">'+(src?'<img class="px" src="'+src+'" alt="">'+t:'')+'</span>';
 const slots=sl('i/ui/icon_coin.png','+'+r.coins)+sl(r.ki?'i/ui/icon_ki_fire.png':'','+'+r.ki)+sl(gs.length?gearImg(gs[0]):'','×'+gs.length)+sl(r.eggs.length?(ITEMS[r.eggs[0]]?ITEMS[r.eggs[0]].img:'h/00.gif'):'','×'+r.eggs.length);
 dgOv('<div class="dgres">'+dgImgTag('result','','dgbg')+(G.clear?'<i class="dgsh dgclr"></i>':'')+'<div class="dgrt"><h3 class="serif">'+ttl+'</h3></div><div class="dgstat"><span>버틴 시간<b>'+dgClock(r.t)+'</b></span><span>경지<b>'+DG_RANKS[r.rk]+'</b></span><span>레벨<b>'+r.lv+'</b></span><span>처치<b>'+fmt(r.kills)+'</b></span></div><ul class="dgrw">'+L.join('')+'</ul><div class="dgslots">'+slots+'</div><button class="btn teal" data-dg="close">확인</button></div>','end');}

/* --- 운영자 설정 + 시뮬레이터 --- */
function aDgCfg(){const C=dgCfg(),main=isMain();
 return '<div class="card adm"><h2>도깨비 야행</h2>'+admOpenRow('dg',C.open)+'<p class="muted">설정은 유저가 다음에 입장할 때부터 적용돼요.</p>'+
 '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">하루 입장 횟수<input type="number" id="dgD" value="'+C.daily+'" min="0" style="width:70px"></label><label class="f">입장 활동력<input type="number" id="dgE" value="'+C.en+'" min="0" style="width:70px"></label>'+
 '<label class="f">적 체력 %<input type="number" id="dgH" value="'+C.hp+'" min="10" style="width:80px"></label><label class="f">적 공격 %<input type="number" id="dgA" value="'+C.dmg+'" min="10" style="width:80px"></label><label class="f">몰려오는 양 %<input type="number" id="dgS" value="'+C.spawn+'" min="10" style="width:80px"></label></div>'+
 '<h3 class="serif adh3">보상</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end">'+[['dgCm','1분당 코인','cMin'],['dgCc','완주 코인','cClear'],['dgCx','최대 코인','cMax'],['dgK5','5분당 기운세트','k5'],['dgKr','경지당 기운세트','kRank'],['dgKx','최대 기운세트','kMax']].map(a=>'<label class="f">'+a[1]+'<input type="number" id="'+a[0]+'" value="'+C[a[2]]+'" min="0" style="width:80px"></label>').join('')+'</div>'+
 (main?'<div style="display:flex;gap:8px;margin-top:8px"><button class="btn soft sm" data-x="dgDef">기본값</button><button class="btn teal sm" data-x="dgSave">저장</button></div>':'<p class="muted">보조 운영자는 볼 수만 있어요.</p>')+
 '<h3 class="serif" style="margin:14px 0 6px">예상 생존 시간 계산기</h3><p class="muted">자동 조종 환수가 위 수치로 직접 플레이해 본 결과예요 (전투력마다 3번씩, 가운데 값). 실제 유저는 카드를 잘 고르면 조금 더 오래 버텨요.</p>'+
 '<label class="f">전투력 (쉼표로 구분)<input id="dgCps" value="'+esc(DGV.simCps||'960,1500,2500,3500,4500')+'" style="width:260px"></label> <button class="btn teal sm" data-x="dgSim">계산하기</button><div id="dgSimOut" style="margin-top:8px">'+(DGV.simOut||'')+'</div></div>';}
MAIN_ONLY.add('dgSave');
Object.assign(AD,{
 dgDef(){cfg.dg={open:(cfg.dg&&cfg.dg.open)||0};render();toast('기본값을 불러왔어요. [저장]을 눌러야 적용돼요.');},
 async dgSave(){const g=id=>Math.max(0,+document.getElementById(id).value||0);cfg.dg={open:(cfg.dg&&cfg.dg.open)||0,cMin:g('dgCm'),cClear:g('dgCc'),cMax:g('dgCx'),k5:g('dgK5'),kRank:g('dgKr'),kMax:g('dgKx'),daily:g('dgD'),en:g('dgE'),hp:Math.max(10,g('dgH')),dmg:Math.max(10,g('dgA')),spawn:Math.max(10,g('dgS'))};await saveGlobal('도깨비 야행 설정 변경');},
 dgSim(){const v=document.getElementById('dgCps').value;DGV.simCps=v;const cps=v.split(/[,\s]+/).map(Number).filter(x=>x>0).slice(0,8);if(!cps.length)return;
  const C={daily:1,en:0,hp:Math.max(10,+document.getElementById('dgH').value||100),dmg:Math.max(10,+document.getElementById('dgA').value||100),spawn:Math.max(10,+document.getElementById('dgS').value||100)};
  const jobs=[];cps.forEach(cp=>{for(let i=0;i<3;i++)jobs.push({cp,el:['fire','water','metal'][i]});});const res={};let j=0,G=null;const out=document.getElementById('dgSimOut');
  const show=()=>{const h='<table class="t"><tr><th>전투력</th><th>예상 생존</th><th>도달 레벨</th></tr>'+cps.map(cp=>{const r=(res[cp]||[]).slice().sort((a,b)=>a.t-b.t),m=r[r.length>>1];return '<tr><td>'+fmt(cp)+'</td><td>'+(m?(m.clear?'<b>완주</b>':dgClock(m.t)):'계산 중…')+'</td><td>'+(m?m.lv:'')+'</td></tr>';}).join('')+'</table>';DGV.simOut=h;const o=document.getElementById('dgSimOut');if(o)o.innerHTML=h;};
  show();
  const run=()=>{if(!document.getElementById('dgSimOut'))return;const t0=performance.now();while(performance.now()-t0<30){if(!G){if(j>=jobs.length)return show();G=dgNew({cp:jobs[j].cp,el:jobs[j].el,cfg:C});}
    for(let n=0;n<200&&G&&!G.dead&&!G.clear;n++){const [x,y]=dgBot(G);dgStep(G,1/15,x,y);G.ev.length=0;while(G.pend>0){G.pend--;const cs=dgCards(G,3);cs.sort((a,b)=>(b.k===G.el?2:b.t==='w'?1:0)-(a.k===G.el?2:a.t==='w'?1:0));dgApply(G,cs[0]);}while(G.chests.length)dgChestRoll(G,G.chests.shift());}
    if(G.dead||G.clear){(res[jobs[j].cp]=res[jobs[j].cp]||[]).push({t:G.t,lv:G.lv,clear:G.clear});G=null;j++;show();}}
   setTimeout(run,0);};run();}});
function dgRefill(){if(dgLeft()>0)return toast('아직 오늘 입장 횟수가 남아 있어요.');if(!take('sec_dg'))return;const d=accDaily();d.dgBonus=(d.dgBonus||0)+1;save();SFX.play('magic');toast('도깨비 야행 입장이 1번 늘었어요!');render();}
document.addEventListener('click',e=>{const t=e.target.closest('[data-dg="start"],[data-dgfill]');if(!t||t.disabled)return;e.stopPropagation();if(t.dataset.dgfill)dgRefill();else dgStart();},true);
if(/[?&](test|mock)/.test(location.search))window.__DG={DGV,dgStart,dgFinish,dgLeft,dgCfg,dgReward,dgChestOpen,dgSpawn,acc:()=>acc,go:v=>{view=v;render();},cfg:()=>cfg};
if(/[?&](test|mock)/.test(location.search))Object.assign(window,{__step:dgStep,__cards:dgCards,__apply:dgApply,__chest:dgChestRoll});
/* ===== 근두운 질주 · 게임 계산부 (화면과 분리) — 가상 높이 540 기준 ===== */
const KR_VH=540,KR_PX=.26,KR_STAGE=40;
const KR_ZONES=['구름 위 마을 하늘','노을 산맥','천둥 구름대','은하수','선계 궁궐'];
const KR_ZOB=[['goblin','kite'],['talisman','whirl','goblin'],['thunder','bolt','whirl'],['meteor','wisp','talisman'],['goblin','kite','talisman','whirl','thunder','bolt','meteor','wisp','pillar']];
const KR_OB={goblin:{r:30},kite:{r:30},talisman:{r:22,vx:260},whirl:{r:40},thunder:{r:38},meteor:{r:28,vx:200,vy:200},wisp:{r:20},pillar:{w:70,h:300},bolt:{}};
function krDef(){return{wreset:1,carry:60,open:0,daily:3,perStage:1,dailyCap:30,tc:[50,35,20,10,3],tk:[10,5,3,0,0],ty:[1,0,0,0,0],tt:[60,40,25,10,5],tch:[2,1,1,0,0],tcl:[1,1,0,0,0],rushT:25,drain:100,obst:100,mOff:[],mForce:'',mForceWk:''};}
function krRushDur(st){return st>=10?6:st>=7?5:st>=4?4:3;}
function krMaxHp(cp){return Math.min(8,3+Math.floor(cp/1000));}
const krPct=x=>Math.round(x*100)+'%',krF=x=>(Math.round(x*100)/100)+'';

/* --- 부적 (영구 보관 · 같은 종류 같은 단계 2개 + 엽전으로 합성) --- */
// [이름, 등급(1 일반 · 2 희귀 · 3 전설), 좋은 효과(L), 나쁜 효과, 적용]
const KR_CH={
 glass:['유리 구름',3,L=>'모든 점수 ×'+krF(1.4+.06*L),'최대 체력 -2',(M,L)=>{M.score*=1.4+.06*L;M.hpAdd-=2;}],
 bat:['도깨비 방망이',2,L=>'부순 장애물마다 '+krPct(.15+.05*L)+' 확률로 엽전','장애물 +20%',(M,L)=>{M.smashTok+=.15+.05*L;M.obst*=1.2;}],
 thread:['월하노인의 실',2,L=>'하트 회복 +'+krF(1+.2*L)+'칸','복숭아 점수 -20%',(M,L)=>{M.heartAmt+=1+.2*L;M.peachPts*=.8;}],
 thunder:['천둥 부적',2,L=>'번개에 다치지 않음 · 번개가 칠 때마다 +'+(10+6*L)+'점','번개 예고선이 안 보임',(M,L)=>{M.boltSafe=1;M.boltHide=1;M.boltPts+=10+6*L;}],
 pouch:['복주머니',1,L=>'엽전 +'+krPct(.4+.1*L),'점수 -10%',(M,L)=>{M.tokMul*=1.4+.1*L;M.score*=.9;}],
 basket:['선도 바구니',1,L=>'복숭아 +'+krPct(.25+.05*L),'체력 감소 +15%',(M,L)=>{M.peachN*=1.25+.05*L;M.drain*=1.15;}],
 bell:['수호 방울',1,L=>'판마다 피격 '+(1+(L>=3)+(L>=5))+'번 막기','',(M,L)=>{M.shield+=1+(L>=3)+(L>=5);}],
 pinwheel:['바람개비',1,L=>'오르내림 +'+krPct(.3+.04*L)+' 빠르게','',(M,L)=>{M.lift*=1.3+.04*L;}],
 orb:['여의주 조각',2,L=>'여의주 간격 -'+krPct(.28+.03*L),'고속질주 간격 +20%',(M,L)=>{M.pearlT*=.72-.03*L;M.rushT*=1.2;}],
 herb:['불로초',1,L=>'체력 감소 -'+krPct(.22+.03*L),'점수 -15%',(M,L)=>{M.drain*=.78-.03*L;M.score*=.85;}],
 shell:['거북 등껍질',1,L=>'최대 체력 +'+(L>=4?2:1),'점수 -10%',(M,L)=>{M.hpAdd+=L>=4?2:1;M.score*=.9;}],
 haetae:['해태 부적',2,L=>'피격 뒤 무적 시간 ×'+krF(2+.2*L),'',(M,L)=>{M.invMul*=2+.2*L;}],
 feather:['질풍 깃털',3,L=>'점수 +'+krPct(.15+.03*L),'속도 +15% (더 어려워요)',(M,L)=>{M.score*=1.15+.03*L;M.speed*=1.15;}],
 toad:['금두꺼비',3,L=>'큰 복숭아 점수 ×'+krF(2+.2*L),'작은 복숭아 점수 -10%',(M,L)=>{M.bigPts*=2+.2*L;M.peachPts*=.9;}],
 mirror:['청동 거울',3,L=>'고속질주 중 점수 ×'+krF(2+.2*L),'고속질주 시간 -1초',(M,L)=>{M.rushPts*=2+.2*L;M.rushDur-=1;}],
 lantern:['청사초롱',2,L=>'부딪히는 범위 -'+krPct(.1+.02*L)+' · 번개 예고 +0.5초','점수 -5%',(M,L)=>{M.hitR*=.9-.02*L;M.boltWarn+=.5;M.score*=.95;}],
};
const KR_CHP=[0,30,50,80];               // 0강 상점 가격 (등급별)
const KR_MG={cost:[10,20,35,60,100],ok:[100,70,50,30,10],big:[0,0,10,20,30]}; // 합성: n강→n+1강
function krChKey(id,L){return 'kr_c_'+id+'_'+L;}
function krChParse(k){const m=/^kr_c_([a-z]+)_([0-5])$/.exec(k||'');return m&&KR_CH[m[1]]?[m[1],+m[2]]:null;}
function krMergeOdds(L,bless){const ok=Math.min(100,KR_MG.ok[L]+(bless||0)),rest=100-ok;let big=KR_MG.big[L]*(bless?.5:1);big=Math.min(rest,big);return{ok,fail:rest-big,big,cost:KR_MG.cost[L]};}

/* --- 갈래 트리 (매주 초기화) --- r:줄 c:칸(0~2) req:앞 칸(배열이면 그중 하나) --- */
const KR_BR=[['surv','생존','#2f8f6b'],['col','수집','#d9677f'],['rush','질주','#e07a2a'],['asc','승천','#c9a227']];
const KR_TREE={
 dur:{b:'surv',r:0,c:1,n:'내구',mx:3,cost:[3,6,9],d:L=>'체력이 닳는 속도 -'+8*L+'%',f:(M,L)=>{M.drain*=1-.08*L;}},
 hp:{b:'surv',r:1,c:0,req:'dur',n:'단단한 몸',mx:2,cost:[8,12],d:L=>'최대 체력 +'+L,f:(M,L)=>{M.hpAdd+=L;}},
 inv:{b:'surv',r:1,c:2,req:'dur',n:'잔상',mx:3,cost:[5,8,11],d:L=>'피격 뒤 무적 +'+krF(.3*L)+'초',f:(M,L)=>{M.invAdd+=.3*L;}},
 heal:{b:'surv',r:2,c:0,req:'hp',n:'꽃 하트',mx:2,cost:[8,12],d:L=>'하트 회복 +'+krF(.5*L)+'칸',f:(M,L)=>{M.heartAmt+=.5*L;}},
 shield:{b:'surv',r:2,c:2,req:'inv',n:'구름 방패',mx:2,cost:[10,15],d:L=>'출발할 때 보호막 '+L+'번',f:(M,L)=>{M.shield+=L;}},
 revive:{b:'surv',r:3,c:1,req:['heal','shield'],n:'기사회생',mx:1,cost:[25],d:()=>'한 번 쓰러져도 체력 절반으로 다시 날아요',f:M=>{M.revive+=1;}},
 mag:{b:'col',r:0,c:1,n:'자석',mx:3,cost:[3,6,9],d:L=>'끌어오는 범위 +'+25*L,f:(M,L)=>{M.mag+=25*L;}},
 peach:{b:'col',r:1,c:0,req:'mag',n:'풍년',mx:3,cost:[5,8,11],d:L=>'복숭아 +'+10*L+'%',f:(M,L)=>{M.peachN*=1+.1*L;}},
 big:{b:'col',r:1,c:2,req:'mag',n:'큰 복숭아',mx:2,cost:[8,12],d:L=>'큰 복숭아 +'+40*L+'%',f:(M,L)=>{M.bigRate*=1+.4*L;}},
 coin:{b:'col',r:2,c:0,req:'peach',n:'엽전 운',mx:2,cost:[8,12],d:L=>'엽전 +'+25*L+'%',f:(M,L)=>{M.tokMul*=1+.25*L;}},
 chain:{b:'col',r:2,c:2,req:'big',n:'연속 수확',mx:2,cost:[10,15],d:L=>'복숭아를 끊기지 않고 10개 먹을 때마다 +'+40*L+'점',f:(M,L)=>{M.chain+=40*L;}},
 golden:{b:'col',r:3,c:1,req:['coin','chain'],n:'황금 복숭아 줄',mx:1,cost:[25],d:()=>'25초마다 황금 복숭아(30점) 줄이 나와요',f:M=>{M.golden=1;}},
 boost:{b:'rush',r:0,c:1,n:'출발 가속',mx:3,cost:[3,6,9],d:L=>'출발하자마자 고속질주 '+L+'초',f:(M,L)=>{M.startRush+=L;}},
 rcd:{b:'rush',r:1,c:0,req:'boost',n:'바람 모으기',mx:3,cost:[5,8,11],d:L=>'고속질주 간격 -'+8*L+'%',f:(M,L)=>{M.rushT*=1-.08*L;}},
 rdur:{b:'rush',r:1,c:2,req:'boost',n:'긴 질주',mx:2,cost:[8,12],d:L=>'고속질주 시간 +'+krF(.5*L)+'초',f:(M,L)=>{M.rushDur+=.5*L;}},
 rmag:{b:'rush',r:2,c:0,req:'rcd',n:'질주 자석',mx:2,cost:[8,12],d:L=>'고속질주 중 끌어오는 범위 +'+60*L,f:(M,L)=>{M.rushMag+=60*L;}},
 rpts:{b:'rush',r:2,c:2,req:'rdur',n:'질주 점수',mx:2,cost:[10,15],d:L=>'고속질주 중 점수 +'+25*L+'%',f:(M,L)=>{M.rushPts*=1+.25*L;}},
 comet:{b:'rush',r:3,c:1,req:['rmag','rpts'],n:'혜성 꼬리',mx:1,cost:[25],d:()=>'고속질주가 끝날 때 화면의 장애물을 부수고 하나에 +30점',f:M=>{M.comet=1;}},
 asc:{b:'asc',r:0,c:1,n:'승천 시간',mx:3,cost:[3,6,9],d:L=>'승천 타임 +'+krF(.6*L)+'초',f:(M,L)=>{M.ascAdd+=.6*L;}},
 pearl:{b:'asc',r:1,c:0,req:'asc',n:'여의주 부름',mx:3,cost:[5,8,11],d:L=>'여의주 간격 -'+10*L+'%',f:(M,L)=>{M.pearlT*=1-.1*L;}},
 ascpts:{b:'asc',r:1,c:2,req:'asc',n:'승천 점수',mx:2,cost:[8,12],d:L=>'승천 중 복숭아 점수 +'+30*L+'%',f:(M,L)=>{M.ascPts*=1+.3*L;}},
 ascheal:{b:'asc',r:2,c:0,req:'pearl',n:'승천 회복',mx:2,cost:[8,12],d:L=>'승천할 때 체력 +'+krF(.5*L)+'칸',f:(M,L)=>{M.ascHeal+=.5*L;}},
 step:{b:'asc',r:2,c:2,req:'ascpts',n:'구름 계단',mx:2,cost:[10,15],d:L=>'승천이 끝난 뒤 무적 '+L+'초',f:(M,L)=>{M.ascInv+=L;}},
 dragon:{b:'asc',r:3,c:1,req:['ascheal','step'],n:'용의 승천',mx:1,cost:[25],d:()=>'승천 중 큰 복숭아가 훨씬 많이 나와요',f:M=>{M.dragon=1;}},
};
function krTreeOk(T,id){const n=KR_TREE[id];if(!n.req)return true;const R=Array.isArray(n.req)?n.req:[n.req];return R.some(q=>(T[q]||0)>=1);}
function krTreeSpent(T){let s=0;for(const id in T){const n=KR_TREE[id];if(!n)continue;for(let i=0;i<Math.min(T[id],n.mx);i++)s+=n.cost[i];}return s;}

/* --- 속성별 고속질주 --- */
const KR_ELFX={fire:'질주가 끝날 때 화면의 장애물을 모두 태워요',water:'고속질주 시간 +1초',wood:'질주가 끝날 때 하트가 생겨요',metal:'질주 중 부수기 점수 +50',earth:'질주가 끝나면 보호막 1번',yin:'질주를 시작할 때 화면의 복숭아 30%가 큰 복숭아로',yang:'질주 중에는 체력이 줄지 않아요'};

/* --- 주간 변이 --- */
const KR_MUT={
 thunder:['천둥의 주','번개가 2배 자주 떨어져요 · 번개가 칠 때마다 +30점',M=>{M.addW.bolt=2;M.boltPts+=30;}],
 harvest:['선도 풍년','복숭아 +50% · 대신 체력이 15% 더 빨리 닳아요',M=>{M.peachN*=1.5;M.drain*=1.15;}],
 bigpeach:['큰 복숭아의 주','큰 복숭아가 2배 자주 · 큰 복숭아 점수 +50%',M=>{M.bigRate*=2;M.bigPts*=1.5;}],
 goblin:['도깨비 행렬','도깨비가 많아져요 · 부수기 점수 2배',M=>{M.addW.goblin=3;M.smashMul*=2;}],
 tailwind:['순풍','속도 +15% · 점수 +15%',M=>{M.speed*=1.15;M.score*=1.15;}],
 dry:['메마른 하늘','하트가 절반만 나와요 · 대신 체력이 25% 천천히 닳아요',M=>{M.heartRate*=.5;M.drain*=.75;}],
 five:['오행 공명','고속질주가 30% 더 자주 · 속성 질주 효과가 강해져요',M=>{M.rushT*=.7;M.elB=1.5;}],
 pearl:['여의주 축제','여의주가 2배 자주 · 승천 타임 +1초',M=>{M.pearlT*=.5;M.ascAdd+=1;}],
 whirl:['회오리 계절','회오리가 많아지고 하늘이 흔들려요 · 회오리를 지나칠 때마다 +20점',M=>{M.addW.whirl=3;M.passPts.whirl=20;M.sway=1;}],
 yinyang:['음양 조화','20초마다 낮과 밤이 바뀌어요 · 낮엔 복숭아 점수 +30%, 밤엔 부수기 점수 +50%',M=>{M.dayNight=1;}],
 heavy:['무거운 구름','근두운이 더 빨리 떨어져요 · 점수 +25%',M=>{M.fall*=1.3;M.score*=1.25;}],
 meteor:['별똥별 비','별똥별이 많이 떨어져요 · 부순 별똥별은 30% 확률로 엽전',M=>{M.addW.meteor=3;M.meteorTok=.3;}],
};
const KR_MUTS=Object.keys(KR_MUT);
function krHash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function krMutOf(wk,C){C=C||krDef();if(C.mForce&&C.mForceWk===wk)return C.mForce==='none'?'':(KR_MUT[C.mForce]?C.mForce:'');
 const on=KR_MUTS.filter(k=>!(C.mOff||[]).includes(k));if(!on.length)return '';return on[krHash('kr'+wk)%on.length];}

/* --- 보정치 계산 --- */
function krMods(o){const M={score:1,speed:1,drain:1,obst:1,hpAdd:0,invMul:1,invAdd:0,shield:0,revive:0,heartAmt:1,heartRate:1,lift:1,fall:1,hitR:1,
  peachN:1,peachPts:1,bigRate:1,bigPts:1,tokMul:1,mag:0,rushMag:0,rushT:1,rushDur:0,rushPts:1,startRush:0,ascAdd:0,ascPts:1,ascHeal:0,ascInv:0,pearlT:1,
  smashMul:1,smashTok:0,meteorTok:0,boltSafe:0,boltHide:0,boltPts:0,boltWarn:0,chain:0,golden:0,comet:0,dragon:0,elB:1,addW:{},passPts:{},sway:0,dayNight:0};
 const T=o.tree||{};for(const id in T){const n=KR_TREE[id];if(n&&T[id]>0)n.f(M,Math.min(T[id],n.mx));}
 const seen={};(o.charms||[]).forEach(c=>{const d=c&&KR_CH[c[0]];if(!d||seen[c[0]])return;seen[c[0]]=1;d[4](M,Math.max(0,Math.min(5,c[1]|0)));});
 if(o.mut&&KR_MUT[o.mut])KR_MUT[o.mut][2](M);
 if(o.el==='water')M.rushDur+=1*M.elB;
 return M;}

function krNew(o){const C=Object.assign(krDef(),o.cfg||{}),M=krMods(o);
 const mh=Math.max(1,Math.min(10,krMaxHp(o.cp||0)+M.hpAdd));
 const G={t:0,dist:0,score:0,peach:0,big:0,tok:0,tokF:0,smash:0,stage:1,zone:0,vw:o.vw||960,cp:o.cp||0,st:o.st||1,el:o.el||'yang',C,M,mut:o.mut||'',
  p:{y:KR_VH-96,vy:0,hp:mh,mhp:mh,inv:0,sh:M.shield},O:[],K:[],FX:[],ev:[],seq:1,obT:1.6,pkT:.6,hrT:12/M.heartRate,plT:(55+Math.random()*15)*M.pearlT,gdT:25,
  rushC:0,rush:0,rushMax:1,asc:0,dead:0,quit:0,shake:0,hold:0,rev:M.revive,combo:0,comboT:0,rnd:o.rnd||Math.random};
 if(M.startRush>0)krRushGo(G,M.startRush);
 return G;}
const krPX=G=>G.vw*KR_PX;
function krSpeed(G){const base=320*Math.min(2.2,1+.05*(G.stage-1))*G.M.speed;return base*(G.rush>0?2:G.asc>0?1.5:1);}
function krMag(G){return (G.rush>0?260+G.M.rushMag:G.asc>0?200:30)+20+G.M.mag;}
function krNight(G){return G.M.dayNight&&Math.floor(G.t/20)%2===1;}
function krPts(G,v,kind){let m=G.M.score;if(G.rush>0)m*=G.M.rushPts;
 if(kind==='peach'||kind==='big'){if(G.asc>0)m*=G.M.ascPts;if(G.M.dayNight&&!krNight(G))m*=1.3;}
 if(kind==='smash'&&krNight(G))m*=1.5;G.score+=v*m;}
function krRushDurOf(G){return Math.max(1,krRushDur(G.st)+G.M.rushDur);}
function krRushGo(G,d){G.rush=d;G.rushMax=d;G.ev.push({k:'rush'});
 if(G.el==='yin'){const pr=Math.min(.9,.3*G.M.elB);for(const q of G.K)if(q.k==='peach'&&G.rnd()<pr)q.k='peach_big';}}
function krRushEnd(G){G.rush=0;G.ev.push({k:'rushend'});const M=G.M,px=krPX(G);
 if(G.el==='fire'||M.comet){for(const o of G.O){if(o.hit||o.k==='bolt'||o.x>G.vw+20||o.x<px-80)continue;o.hit=1;G.smash++;krPts(G,(G.el==='fire'?20*M.smashMul:0)+(M.comet?30:0),'smash');G.FX.push({k:'smash',x:o.x,y:o.y||KR_VH/2,t:0,life:.4});}
  G.O=G.O.filter(o=>!o.hit);}
 if(G.el==='wood')G.K.push({id:G.seq++,k:'heart',x:px+260,y:Math.max(80,Math.min(KR_VH-100,G.p.y))});
 if(G.el==='earth'){G.p.sh+=Math.round(1*G.M.elB);G.ev.push({k:'shield'});}}

/* --- 만들기 --- */
function krPeachLine(G,y,n,shape,big,gold){const x0=G.vw+40;for(let i=0;i<n;i++){let yy=y;if(shape==='arc')yy=y-Math.sin(i/(n-1)*Math.PI)*90;else if(shape==='wave')yy=y+Math.sin(i*.7)*60;
  G.K.push({id:G.seq++,k:gold?'peach_gold':big&&i===n-1?'peach_big':'peach',x:x0+i*46,y:Math.max(40,Math.min(KR_VH-50,yy))});}}
function krPickOb(G){const L=KR_ZOB[G.zone],W={};L.forEach(k=>W[k]=1);const A=G.M.addW;for(const k in A)W[k]=(W[k]||0)+A[k];
 let s=0;for(const k in W)s+=W[k];let r=G.rnd()*s;for(const k in W){r-=W[k];if(r<=0)return k;}return L[0];}
function krSpawnOb(G){const k=krPickOb(G),x=G.vw+80,T=KR_OB[k];
 if(k==='pillar'){const top=G.rnd()<.5;G.O.push({id:G.seq++,k,x,y:top?0:KR_VH-T.h,w:T.w,h:T.h,top});return;}
 if(k==='bolt'){G.O.push({id:G.seq++,k,x:x+120,warn:1.5+G.M.boltWarn,strike:0,life:2.2+G.M.boltWarn});return;}
 if(k==='wisp'){const y0=80+G.rnd()*(KR_VH-300);for(let i=0;i<3;i++)G.O.push({id:G.seq++,k,x:x+i*20,y:y0+i*64,y0:y0+i*64,r:T.r,ph:i});return;}
 if(k==='meteor'){G.O.push({id:G.seq++,k,x:x+80,y:-40,r:T.r,vx:T.vx,vy:T.vy+G.rnd()*80});return;}
 const y=k==='thunder'?60+G.rnd()*150:60+G.rnd()*(KR_VH-130);
 G.O.push({id:G.seq++,k,x,y,y0:y,r:T.r,vx:T.vx||0,ph:G.rnd()*6});}
function krSpawn(G,dt){const M=G.M;
 if(G.asc>0){G.pkT-=dt;if(G.pkT<=0){G.pkT=.22;krPeachLine(G,80+G.rnd()*(KR_VH-160),1,'line',G.rnd()<(M.dragon?.6:.25));}return;}
 const dens=Math.min(2.4,(1+.07*(G.stage-1))*(G.C.obst/100)*M.obst);
 G.obT-=dt;if(G.obT<=0){G.obT=Math.max(.45,(1.7-.06*(G.stage-1))/dens*(.75+G.rnd()*.5));krSpawnOb(G);}
 G.pkT-=dt;if(G.pkT<=0){G.pkT=1.1+G.rnd()*.6;const sh=['line','arc','wave'][Math.floor(G.rnd()*3)],n=Math.min(14,Math.round((6+Math.floor(G.rnd()*5))*M.peachN));krPeachLine(G,90+G.rnd()*(KR_VH-180),n,sh,G.rnd()<Math.min(.9,.25*M.bigRate));
  if(G.rnd()<.35)G.K.push({id:G.seq++,k:'coin',x:G.vw+80+G.rnd()*200,y:70+G.rnd()*(KR_VH-140)});}
 G.hrT-=dt;if(G.hrT<=0){G.hrT=(11+G.rnd()*4)/M.heartRate;G.K.push({id:G.seq++,k:'heart',x:G.vw+60,y:80+G.rnd()*(KR_VH-160)});}
 G.plT-=dt;if(G.plT<=0){G.plT=(55+G.rnd()*20)*M.pearlT;G.K.push({id:G.seq++,k:'pearl',x:G.vw+60,y:90+G.rnd()*(KR_VH-180)});}
 if(M.golden){G.gdT-=dt;if(G.gdT<=0){G.gdT=25;krPeachLine(G,90+G.rnd()*(KR_VH-180),8,'wave',0,1);G.ev.push({k:'golden'});}}}

/* --- 진행 --- */
function krInvT(G){return 1.2*G.M.invMul+G.M.invAdd;}
function krHurt(G){if(G.p.inv>0||G.rush>0||G.asc>0)return false;const p=G.p;
 if(p.sh>0){p.sh--;p.inv=Math.max(.8,krInvT(G)*.6);G.FX.push({k:'shield',x:krPX(G),y:p.y,t:0,life:.45});G.ev.push({k:'block'});return true;}
 p.hp=Math.max(0,p.hp-1);p.inv=krInvT(G);G.shake=.35;G.FX.push({k:'hit',x:krPX(G),y:p.y,t:0,life:.4});G.ev.push({k:'hurt'});if(p.hp<=0)krDie(G);return true;}
function krDie(G){const p=G.p;if(G.rev>0){G.rev--;p.hp=Math.max(1,p.mhp/2);p.inv=2.5;G.O.forEach(o=>{if(o.k!=='bolt')o.hit=1;});G.ev.push({k:'revive'});return;}p.hp=0;G.dead=1;G.ev.push({k:'end'});}
function krStep(G,dt,hold){if(G.dead||G.quit)return;dt=Math.min(dt,.05);G.t+=dt;const p=G.p,px=krPX(G),M=G.M;
 const st=1+Math.floor(G.t/KR_STAGE);if(st!==G.stage){G.stage=st;G.zone=(st-1)%5;G.ev.push({k:'stage',st});}
 if(M.dayNight){const ph=Math.floor(G.t/20)%2;if(ph!==G.dn){if(G.dn!==undefined)G.ev.push({k:ph?'night':'day'});G.dn=ph;}}
 // 조작
 G.hold=hold?1:0;if(hold)p.vy=Math.max(-430,p.vy-1600*M.lift*dt);else p.vy=Math.min(500*Math.sqrt(M.fall),p.vy+1350*M.fall*(1+(M.lift-1)*.5)*dt);
 p.y+=p.vy*dt;if(p.y<36){p.y=36;p.vy=Math.max(0,p.vy);}if(p.y>KR_VH-96){p.y=KR_VH-96;p.vy=Math.min(0,p.vy);}
 if(p.inv>0)p.inv-=dt;if(G.shake>0)G.shake-=dt;if(G.comboT>0){G.comboT-=dt;if(G.comboT<=0)G.combo=0;}
 // 체력 감소
 const drain=(1/22)*(1+.12*(G.stage-1))*(G.C.drain/100)*M.drain;
 if(G.asc<=0&&!(G.rush>0&&G.el==='yang'))p.hp-=drain*dt;if(p.hp<=0){krDie(G);if(G.dead)return;}
 // 고속질주·승천
 if(G.rush>0){G.rush-=dt;if(G.rush<=0)krRushEnd(G);}
 else if(G.asc<=0){G.rushC+=dt;if(G.rushC>=G.C.rushT*M.rushT){G.rushC=0;krRushGo(G,krRushDurOf(G));}}
 if(G.asc>0){G.asc-=dt;if(G.asc<=0){G.asc=0;G.ev.push({k:'ascend'});if(M.ascInv>0)p.inv=Math.max(p.inv,M.ascInv);}}
 const v=krSpeed(G);G.dist+=v*dt;krPts(G,v*dt/10,'dist');
 krSpawn(G,dt);
 // 장애물
 const hr=M.hitR;
 for(const o of G.O){o.x-=(v+(o.vx||0))*dt;
  if(o.k==='goblin'||o.k==='wisp'){o.ph+=dt*2.4;o.y=o.y0+Math.sin(o.ph)*(o.k==='wisp'?30:60);}
  if(o.k==='meteor')o.y+=o.vy*dt;
  if(o.k==='bolt'){o.life-=dt;if(o.warn>0){o.warn-=dt;if(o.warn<=0){o.strike=.45;G.ev.push({k:'bolt'});}}else if(o.strike>0){o.strike-=dt;if(o.strike<=0&&!o.zap&&M.boltPts){krPts(G,M.boltPts,'bolt');G.FX.push({k:'pts',x:o.x,y:80,t:0,life:.8,v:Math.round(M.boltPts)});}}}
  if(!o.hit&&!o.passed&&M.passPts[o.k]&&o.x+(o.w||o.r||0)<px-30){o.passed=1;krPts(G,M.passPts[o.k],'pass');G.FX.push({k:'pts',x:px,y:o.y||p.y,t:0,life:.8,v:M.passPts[o.k]});}
  if(o.hit)continue;
  let col=false;
  if(o.k==='pillar'){const cx=Math.max(o.x,Math.min(px,o.x+o.w)),cy=Math.max(o.y,Math.min(p.y,o.y+o.h));col=(cx-px)**2+(cy-p.y)**2<(24*hr)**2;}
  else if(o.k==='bolt')col=o.strike>0&&Math.abs(o.x-px)<34*hr&&!M.boltSafe;
  else col=(o.x-px)**2+(o.y-p.y)**2<((o.r+24)*hr)**2;
  if(col){if(G.rush>0||G.asc>0){if(o.k!=='bolt'){o.hit=1;G.smash++;krPts(G,(20+(G.rush>0&&G.el==='metal'?50*M.elB:0))*M.smashMul,'smash');G.FX.push({k:'smash',x:o.x,y:o.y||p.y,t:0,life:.4});
     const tc=M.smashTok+(o.k==='meteor'?M.meteorTok:0);if(tc>0&&G.rnd()<tc){G.tokF+=M.tokMul;G.tok=Math.floor(G.tokF);G.FX.push({k:'tok',x:o.x,y:(o.y||p.y)-30,t:0,life:.7});}}}
   else if(krHurt(G)){o.hit=1;if(o.k==='bolt')o.zap=1;}}}
 G.O=G.O.filter(o=>o.x>-160&&(o.k!=='bolt'||o.life>0)&&!(o.hit&&o.k!=='bolt'&&(G.rush>0||G.asc>0))&&(o.k!=='meteor'||o.y<KR_VH+80));
 // 획득물
 const MG=krMag(G);
 for(const q of G.K){q.x-=v*dt;const dx=px-q.x,dy=p.y-q.y,d=Math.hypot(dx,dy);
  if(d<MG&&q.k!=='pearl'&&q.k!=='heart'||q.pull){q.pull=1;const s=Math.max(500,v*1.6);q.x+=dx/(d||1)*s*dt;q.y+=dy/(d||1)*s*dt;}
  if(d<30){q.got=1;
   if(q.k==='peach'||q.k==='peach_gold'||q.k==='peach_big'){
    if(q.k==='peach_big'){G.big++;krPts(G,100*M.bigPts,'big');}else{G.peach++;krPts(G,(q.k==='peach_gold'?30:10)*M.peachPts,'peach');}
    G.combo++;G.comboT=1.3;if(M.chain&&G.combo%10===0){krPts(G,M.chain,'chain');G.FX.push({k:'pts',x:px,y:p.y-40,t:0,life:.8,v:Math.round(M.chain)});}}
   else if(q.k==='coin'){G.tokF+=M.tokMul;G.tok=Math.floor(G.tokF);}
   else if(q.k==='heart'){p.hp=Math.min(p.mhp,p.hp+M.heartAmt);G.ev.push({k:'heal'});}
   else if(q.k==='pearl'){G.asc=4+M.ascAdd;if(M.ascHeal)p.hp=Math.min(p.mhp,p.hp+M.ascHeal);G.O.forEach(o=>o.hit=1);G.ev.push({k:'ascstart'});}
   G.FX.push({k:q.k==='heart'?'heal':'get',x:px,y:p.y,t:0,life:.35});}}
 G.K=G.K.filter(q=>!q.got&&q.x>-60);
 for(const f of G.FX)f.t+=dt;G.FX=G.FX.filter(f=>f.t<f.life);}

/* --- 보상 --- */
function krReward(G,coinLeft,ev){ev=ev||{};const stage=G.stage,cm=ev.coin||1,want=Math.round(stage*G.C.perStage*cm),c=Math.max(0,Math.min(want,coinLeft));
 return{t:Math.round(G.t),stage,score:Math.floor(G.score),peach:G.peach+G.big,tok:Math.floor(G.tok*(ev.tok||1)),tokBase:G.tok,coins:c,full:coinLeft<want};}
function krScoreOk(score,t){return t>=1&&t<=3600&&score<=t*5000+2000;}
/* --- 자동 조종 (시뮬레이터) --- */
function krBot(G){const px=krPX(G),p=G.p;let ty=KR_VH/2,danger=null,dd=1e9;
 for(const o of G.O){if(o.hit)continue;const dx=o.x-px;if(dx<-40||dx>260)continue;const oy=o.k==='pillar'?o.y+o.h/2:o.k==='bolt'?null:o.y;if(oy==null)continue;if(dx<dd){dd=dx;danger={y:oy,o};}}
 let best=null,bd=1e9;for(const q of G.K){const dx=q.x-px;if(dx>0&&dx<220&&dx<bd){bd=dx;best=q;}}
 if(best)ty=best.y;
 if(danger){const o=danger.o;if(o.k==='pillar')ty=o.top?KR_VH-90:90;else if(Math.abs(danger.y-ty)<90)ty=danger.y<KR_VH/2?danger.y+140:danger.y-140;}
 return p.y>ty+8||(p.y>ty-20&&p.vy>120);}
function krSim(cp,st,cfg,o){o=o||{};const G=krNew(Object.assign({cp,st,cfg},o));const dt=1/30;while(!G.dead&&G.t<1200){krStep(G,dt,krBot(G));G.ev.length=0;}return{t:G.t,stage:G.stage,score:Math.floor(G.score),tok:G.tok,peach:G.peach+G.big};}
/* ===== 근두운 질주 · 화면 (그림: i/kr/) ===== */
const KRV={G:null,raf:0,pause:0,ov:'',hold:0,last:0,hudT:0,done:0,rank:{},rankT:{},banT:0,ban:'',tab:'tree'};
const KRI={};
function krI(k){let o=KRI[k];if(!o){o=KRI[k]={im:new Image(),ok:0};o.im.onload=()=>{o.ok=1;};o.im.onerror=()=>{o.ok=-1;};o.im.src='i/kr/kr_'+k+'.png?'+IMG_V;}return o.ok===1?o.im:null;}
function krSpr(k,w,h){const im=krI(k);if(!im)return null;const d=Math.min(2,devicePixelRatio||1),bw=Math.max(8,Math.ceil(w*d/8)*8),bh=Math.max(8,Math.ceil((h||w*im.height/im.width)*d/8)*8),key=k+'@'+bw+'x'+bh;let c=KRI[key];
 if(!c){c=KRI[key]=document.createElement('canvas');c.width=bw;c.height=bh;const x=c.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(im,0,0,bw,bh);}return c;}
function krCfg(){const c=Object.assign(krDef(),(cfg&&cfg.kr)||{});['daily','perStage','dailyCap','rushT','drain','obst','wreset','carry'].forEach(k=>{c[k]=Math.max(0,+c[k]||0);});c.rushT=c.rushT||25;c.drain=c.drain||100;c.obst=c.obst||100;
 if(!Array.isArray(c.mOff))c.mOff=[];c.mForce=c.mForce||'';c.mForceWk=c.mForceWk||'';return c;}
function krOpen(){return !!(krCfg().open||(typeof TEST!=='undefined'&&TEST));}
function dgOpen(){return !!(dgCfg().open||(typeof TEST!=='undefined'&&TEST));}
function krAcc(){acc.kr=acc.kr||{};const k=acc.kr;k.tok=k.tok||0;k.tree=k.tree&&typeof k.tree==='object'?k.tree:{};if(!Array.isArray(k.eq))k.eq=[null,null,null];while(k.eq.length<3)k.eq.push(null);
 if(acc.inv&&acc.inv.kr_tok){k.tok+=acc.inv.kr_tok;delete acc.inv.kr_tok;}
 if(k.up){let s=0;const old=[10,20,40,70,110];for(const q in k.up)for(let i=0;i<(k.up[q]||0);i++)s+=old[i]||0;k.tok+=s;delete k.up;}  // 예전 강화 → 엽전으로 돌려줌
 const wk=weekKey(now()),C=krCfg();if(k.upWk!==wk){if(k.upWk&&C.wreset){const sp=krTreeSpent(k.tree),back=Math.min(sp,C.carry);k.tree={};k.tok+=back;if(sp)KRV.resetMsg=[sp,back];}k.upWk=wk;}
 const seen={};k.eq=k.eq.map(q=>{const c=krChParse(q);if(!c||!(acc.inv[q]>0)||seen[c[0]])return null;seen[c[0]]=1;return q;});
 return k;}
function krEqList(){return krAcc().eq.map(krChParse).filter(Boolean);}
function krMut(){return krMutOf(weekKey(now()),krCfg());}
function krLeft(){const d=accDaily();return Math.max(0,krCfg().daily+mgEv('krEnt')+(d.krBonus||0)-(d.kr||0));}
function krCap(){return Math.round(krCfg().dailyCap*mgM('krCoin'));}
function krCoinLeft(){const d=accDaily();return Math.max(0,krCap()-(d.krCoin||0));}
function krCloud(){let s=0;const T=krAcc().tree;for(const id in T)s+=T[id]||0;return s>=24?'cloud3':s>=10?'cloud2':'cloud1';}
function krImg(k,cls,fb){return '<img class="px '+(cls||'')+'" src="i/kr/kr_'+k+'.png?'+IMG_V+'" alt="" onerror="this.onerror=null;'+(fb?'this.src=\''+fb+'\'':'this.style.display=\'none\'')+'">';}
function krChImg(id,L,cls){return '<img class="px '+(cls||'')+'" src="i/kr/kr_c_'+id+'_'+L+'.png?'+IMG_V+'" alt="" onerror="this.onerror=null;this.src=\'i/kr/kr_c_'+id+'_0.png\'">';}
const KR_GN=['','일반','희귀','전설'];
function krChName(id,L){return KR_CH[id][0]+' <i class="krlv">'+L+'강</i>';}
function krChTxt(id,L){const d=KR_CH[id];return '<span class="krpro">▲ '+d[2](L)+'</span>'+(d[3]?'<span class="krcon">▼ '+d[3]+'</span>':'');}
function krClosed(name){return '<section class="card krclosed"><h2 class="serif">'+name+'</h2><p>지금은 열려 있지 않아요. 운영자가 열면 이곳에 나타나요.</p></section>';}
function krMutBan(){const m=krMut();if(!m)return '<div class="krmut none"><div class="krmutb">'+krImg('m_tailwind','','')+'</div><div><b>이번 주 변이 없음</b><small>평범한 하늘이에요.</small></div></div>';
 return '<div class="krmut"><div class="krmutb">'+krImg('m_'+m)+'</div><div><small>이번 주 변이</small><b>'+KR_MUT[m][0]+'</b><span>'+KR_MUT[m][1]+'</span></div></div>';}

/* --- 입장 화면 --- */
function vKr(){if(!krOpen())return krClosed('근두운 질주');const R=dgRep(),p=R&&R.p,C=krCfg(),K=krAcc(),left=krLeft(),tot=C.daily+mgEv('krEnt')+(accDaily().krBonus||0),sec=acc.inv.sec_kr||0,wk=weekKey(now());
 const el=p?dgElOf(p.no):'yang',M=krMods({tree:K.tree,charms:krEqList(),mut:krMut(),el}),mh=p?Math.max(1,Math.min(10,krMaxHp(cp(p))+M.hpAdd)):3;
 if(KRV.resetMsg){const [sp,back]=KRV.resetMsg;KRV.resetMsg=0;setTimeout(()=>toast('새 주가 시작돼서 갈래 트리가 초기화됐어요. 트리에 쓴 엽전 '+sp+'개 중 '+back+'개를 돌려받았어요.'),200);}
 const tab=KRV.tab||'tree',tb=(k,n)=>'<button class="krtab'+(tab===k?' on':'')+'" data-kr="tab" data-t="'+k+'">'+n+'</button>';
 return '<section class="card krcard"><div class="krhero"><div class="krherot"><div class="krlogo"><h2 class="serif">근두운 질주</h2></div><p>누르고 있으면 떠오르고, 떼면 내려가요 · 천도복숭아를 모아 점수를 올려요</p></div></div><div class="krbody">'+
 (p?'<div class="krrep"><div class="krrepv"><img class="px krc" src="i/kr/kr_'+krCloud()+'.png?'+IMG_V+'" alt=""><img class="px krp" src="'+img(p.no)+'" alt=""></div><div class="dgrepi"><div class="dgrepn"><b class="serif">'+esc(NAMES[p.no])+'</b><span>'+p.st+'단계 · Lv '+p.lv+'</span></div>'+
  '<div class="dgchips"><span class="dgchip">체력 <b>'+mh+'칸</b> <small>(전투력 '+fmt(cp(p))+')</small></span><span class="dgchip">고속질주 <b>'+DG_ELN[el]+' · '+krF(Math.max(1,krRushDur(p.st)+M.rushDur))+'초</b></span></div><p class="krelfx"><b>'+DG_ELN[el]+' 속성</b> '+KR_ELFX[el]+'</p></div></div>':'<p class="dgwarn">대표 환수가 없어요.</p>')+
 krMutBan()+
 '<div class="krmeta"><div><small>오늘 남은 입장</small><b>'+left+' <i>/ '+tot+'</i></b></div><div><small>보유 엽전</small><b><img class="px" src="i/kr/kr_coin.png" alt="">'+fmt(K.tok)+'</b></div><div><small>이번 주 최고</small><b>'+fmt(K.wk===wk?K.wbest||0:0)+'</b></div></div>'+
 (!left&&sec>0?'<button class="btn soft krfill" data-krfill="1"><img class="px" src="'+ITEMS.sec_kr.img+'" alt="">근두운충전비서 사용 · 입장 +1 (보유 '+sec+')</button>':'')+
 '<div class="krview"><span>모바일 화면</span><button class="btn sm '+(K.view!=='port'?'teal':'soft')+'" data-kr="view" data-v="land">가로로 보기</button><button class="btn sm '+(K.view==='port'?'teal':'soft')+'" data-kr="view" data-v="port">세로로 보기</button></div>'+'<button class="btn teal krstart" data-kr="start"'+(p&&left?'':' disabled')+'>'+(!p?'대표 환수가 필요해요':!left?'오늘 입장을 다 했어요':'출발하기')+'</button>'+
 '<p class="krnote">판 보상: 도달 스테이지 × 환수코인 '+C.perStage+(mgEv('krCoin')?' × '+mgEv('krCoin'):'')+' · 오늘 받을 수 있는 코인 <b>'+krCoinLeft()+'</b> / '+krCap()+(mgEv('krTok')?' · <b class="krevt">엽전 '+mgEv('krTok')+'배 이벤트 중</b>':'')+'</p>'+
 '<div class="krtabs">'+tb('tree','갈래 트리')+tb('charm','부적')+tb('rank','주간 랭킹')+'</div>'+
 (tab==='tree'?krTreeView(K,C):tab==='charm'?krCharmView(K):krRankView(wk))+'</div></section>';}
function krRankView(wk){krRankLoad(wk);const RK=KRV.rank[wk],me=RK&&RK.list.findIndex(r=>r.uid===acc.uid);
 const rows=RK?(RK.list.length?RK.list.slice(0,10).map((r,i)=>krRow(r,i,r.uid===acc.uid)).join('')+(me>=10?krRow(RK.list[me],me,1):''):'<p class="krmuted">이번 주 기록이 아직 없어요. 첫 기록의 주인공이 되어 보세요!</p>'):'<p class="krmuted">순위를 불러오는 중…</p>';
 return '<h3 class="krh3 serif">주간 랭킹 <small>'+wk+' 주 · 월요일 0시 정산</small></h3><div class="krrank">'+rows+'</div>'+
 '<details class="krrules"><summary>주간 랭킹 보상</summary><ul>'+krTiers().map(t=>'<li><b>'+t[0]+'</b> '+krTierTxt(t)+'</li>').join('')+'</ul></details>';}
function krRow(r,i,me){return '<div class="krrow'+(me?' me':'')+'"><span class="krno">'+(i<3?'<img class="px" src="i/kr/kr_crown'+(i+1)+'.png" alt="'+(i+1)+'위">':'<b>'+(i+1)+'</b>')+'</span><span class="krnm">'+esc(r.nick||'?')+'</span><span class="krsc">'+fmt(r.score)+'<small>'+r.stage+'스테이지</small></span></div>';}
const KR_TN=[['1위',1,1],['2~3위',2,3],['4~10위',4,10],['11~30위',11,30],['참여',31,99999]];
function krTiers(){const C=krCfg(),g=(a,i)=>Math.max(0,+(C[a]||[])[i]||0);return KR_TN.map((t,i)=>[t[0],t[1],t[2],{c:g('tc',i),ki:g('tk',i),yy:g('ty',i),tok:g('tt',i),ch:g('tch',i),cl:Math.min(5,g('tcl',i))}]);}
function krTierTxt(t){const r=t[3];return ['환수코인 '+r.c,r.ki?'기운세트 '+r.ki:'',r.yy?'음양알 '+r.yy:'',r.tok?'엽전 '+r.tok:'',r.ch?'무작위 부적 '+r.cl+'강 ×'+r.ch:''].filter(Boolean).join(' + ');}
async function krRankLoad(wk,force){if(!force&&(KRV.rankT[wk]&&Date.now()-KRV.rankT[wk]<60000))return;KRV.rankT[wk]=Date.now();
 try{const r=await db.collection('krweek/'+wk+'/s').orderBy('score','desc').limit(100).get();let st=0;try{const m=await db.doc('krweek/'+wk).get();st=m.exists&&m.data().settled?1:0;}catch(x){}KRV.rank[wk]={list:r.docs.map(d=>d.data()),settled:st};}catch(e){KRV.rank[wk]={list:[],err:1};}
 if(MODE==='player'&&view==='kr'&&!KRV.G&&(KRV.tab==='rank'))render();}

/* --- 갈래 트리 --- */
function krNodeSt(T,id){const n=KR_TREE[id],lv=T[id]||0;return lv>=n.mx?'full':krTreeOk(T,id)?'open':'lock';}
function krTreeView(K,C){const T=K.tree,sp=krTreeSpent(T);
 const br=KR_BR.map(([b,bn,col])=>{const ids=Object.keys(KR_TREE).filter(id=>KR_TREE[id].b===b);let used=0;ids.forEach(id=>{const n=KR_TREE[id];for(let i=0;i<(T[id]||0);i++)used+=n.cost[i];});
  const cx=n=>50+100*n.c,cy=n=>50+100*n.r;let lines='';ids.forEach(id=>{const n=KR_TREE[id];if(!n.req)return;(Array.isArray(n.req)?n.req:[n.req]).forEach(q=>{const a=KR_TREE[q],on=(T[q]||0)>=1;lines+='<line x1="'+cx(a)+'" y1="'+cy(a)+'" x2="'+cx(n)+'" y2="'+cy(n)+'" class="'+(on?'on':'')+'"/>';});});
  const nodes=ids.map(id=>{const n=KR_TREE[id],lv=T[id]||0,s=krNodeSt(T,id);return '<button class="krnode '+s+(lv?' has':'')+'" data-kr="node" data-k="'+id+'" style="left:'+(n.c*2+1)/6*100+'%;top:'+(n.r*2+1)/8*100+'%" aria-label="'+n.n+'">'+krImg('n_'+id,'kricon')+'<i>'+lv+'/'+n.mx+'</i></button>';}).join('');
  return '<div class="krbr" style="--bc:'+col+'"><div class="krbrh">'+krImg('b_'+b)+'<b>'+bn+'</b><small>'+used+'</small></div><div class="krbrg"><svg viewBox="0 0 300 400" preserveAspectRatio="none" aria-hidden="true">'+lines+'</svg>'+nodes+'</div></div>';}).join('');
 return '<h3 class="krh3 serif">갈래 트리 <small>엽전으로 배워요 · 아래 칸은 위 칸을 배워야 열려요</small></h3>'+
  '<div class="krtree"><img class="px krcrest" src="i/kr/kr_tree_crest.png?'+IMG_V+'" alt="" onerror="this.remove()"><div class="krbrs">'+br+'</div></div>'+
  '<p class="krnote">이번 주 트리에 쓴 엽전 <b>'+sp+'</b>'+(C.wreset?' · 매주 월요일 0시에 트리가 초기화돼요. 남은 엽전은 그대로 두고, 트리에 쓴 엽전은 최대 <b>'+C.carry+'개</b>까지 돌려받아요.':'')+'</p>';}
function krNodePop(id){const n=KR_TREE[id],K=krAcc(),T=K.tree,lv=T[id]||0,s=krNodeSt(T,id),cost=n.cost[lv],br=KR_BR.find(b=>b[0]===n.b);
 const req=n.req?(Array.isArray(n.req)?n.req:[n.req]).map(q=>KR_TREE[q].n).join(' 또는 '):'';
 krPop('<div class="krpopn" style="--bc:'+br[2]+'"><div class="krpopi krnode '+s+'">'+krImg('n_'+id,'kricon')+'</div><div><small>'+br[1]+' 갈래</small><b class="serif">'+n.n+'</b><span>Lv '+lv+' / '+n.mx+'</span></div></div>'+
  '<ul class="krpopl">'+(lv?'<li><small>지금</small>'+n.d(lv)+'</li>':'')+(lv<n.mx?'<li class="nx"><small>'+(lv?'다음 단계':'배우면')+'</small>'+n.d(lv+1)+'</li>':'<li><small>다 배웠어요</small></li>')+'</ul>'+
  (s==='lock'?'<p class="krwarn">먼저 '+req+'을(를) 배워야 해요.</p>':'')+
  '<div class="dgbtns">'+(lv<n.mx?'<button class="btn teal" data-kr="learn" data-k="'+id+'"'+(s!=='open'||K.tok<cost?' disabled':'')+'><img class="px" src="i/kr/kr_coin.png" alt="">'+cost+' 배우기</button>':'')+'<button class="btn soft" data-close="1">닫기</button></div><p class="krnote">보유 엽전 '+fmt(K.tok)+'</p>');}
function krLearn(id){const n=KR_TREE[id],K=krAcc(),lv=K.tree[id]||0;if(!n||lv>=n.mx||!krTreeOk(K.tree,id))return;const cost=n.cost[lv];if(K.tok<cost)return toast('엽전이 부족해요.');
 K.tok-=cost;K.tree[id]=lv+1;save();SFX.play('up');toast(n.n+' Lv '+(lv+1)+'!');render();krNodePop(id);}

/* --- 부적 --- */
function krOwned(){const L=[];for(const k in acc.inv){const c=krChParse(k);if(c&&acc.inv[k]>0)L.push([c[0],c[1],acc.inv[k],k]);}const ord=Object.keys(KR_CH);return L.sort((a,b)=>b[1]-a[1]||ord.indexOf(a[0])-ord.indexOf(b[0]));}
function krCharmView(K){const eq=K.eq;
 const slots=eq.map((q,i)=>{const c=krChParse(q);return '<button class="krcs'+(c?' on':'')+'" data-kr="slot" data-i="'+i+'">'+(c?krChImg(c[0],c[1])+'<b>'+krChName(c[0],c[1])+'</b>':'<span>'+(i+1)+'번 칸<br><small>비어 있어요</small></span>')+'</button>';}).join('');
 const own=krOwned(),owned=own.length?own.map(([id,L,n,k])=>'<button class="krch g'+KR_CH[id][1]+(eq.includes(k)?' eq':'')+'" data-kr="ch" data-k="'+k+'">'+krChImg(id,L)+'<b>'+KR_CH[id][0]+'</b><i class="krlv">'+L+'강</i>'+(n>1?'<em>×'+n+'</em>':'')+(eq.includes(k)?'<u>장착</u>':'')+'</button>').join(''):'<p class="krmuted">아직 부적이 없어요. 아래 상점에서 0강 부적을 사 보세요.</p>';
 const shop=Object.keys(KR_CH).map(id=>{const d=KR_CH[id],pr=KR_CHP[d[1]];return '<div class="krshop g'+d[1]+'">'+krChImg(id,0)+'<div><b>'+d[0]+' <small>'+KR_GN[d[1]]+'</small></b>'+krChTxt(id,0)+'</div><button class="btn sm teal" data-kr="buy" data-k="'+id+'"'+(K.tok<pr?' disabled':'')+'><img class="px" src="i/kr/kr_coin.png" alt="">'+pr+'</button></div>';}).join('');
 return '<h3 class="krh3 serif">장착한 부적 <small>3칸까지 · 같은 종류는 하나만</small></h3><div class="krcslots">'+slots+'</div>'+
  '<h3 class="krh3 serif">내 부적 <small>눌러서 끼우기 · 합성 · 영구 보관</small></h3><div class="krchs">'+owned+'</div>'+
  '<details class="krrules"><summary>합성 규칙</summary><p>같은 종류 · 같은 단계 부적 2개 + 엽전으로 합성해요. 성공하면 한 단계 높은 부적 1개, 실패하면 엽전만 사라지고, 대실패하면 부적 1개가 깨져요.</p><ul>'+[0,1,2,3,4].map(L=>{const o=krMergeOdds(L,mgEv('krMerge'));return '<li><b>'+L+'강→'+(L+1)+'강</b> 엽전 '+o.cost+' · 성공 '+o.ok+'% · 실패 '+o.fail+'% · 대실패 '+o.big+'%</li>';}).join('')+'</ul>'+(mgEv('krMerge')?'<p class="krevt">합성 축복 이벤트 중: 성공률 +'+mgEv('krMerge')+'%p, 대실패 절반</p>':'')+'</details>'+
  '<h3 class="krh3 serif">부적 상점 <small>0강 부적 · 보유 엽전 '+fmt(K.tok)+'</small></h3><div class="krshops">'+shop+'</div>';}
function krChPop(k){const c=krChParse(k);if(!c)return;const [id,L]=c,K=krAcc(),n=acc.inv[k]||0,d=KR_CH[id],si=K.eq.indexOf(k),other=K.eq.findIndex(q=>q&&q!==k&&krChParse(q)[0]===id),free=K.eq.indexOf(null);
 let eqb='';if(si>=0)eqb='<button class="btn soft" data-kr="uneq" data-i="'+si+'">빼기</button>';else if(other>=0)eqb='<button class="btn teal" data-kr="eq" data-k="'+k+'" data-i="'+other+'">'+(other+1)+'번 칸과 바꾸기</button>';
 else if(free>=0)eqb='<button class="btn teal" data-kr="eq" data-k="'+k+'" data-i="'+free+'">끼우기</button>';else eqb=K.eq.map((q,i)=>'<button class="btn teal sm" data-kr="eq" data-k="'+k+'" data-i="'+i+'">'+(i+1)+'번 칸과 바꾸기</button>').join('');
 krPop('<div class="krpopn g'+d[1]+'"><div class="krpopi krcsi">'+krChImg(id,L)+'</div><div><small>'+KR_GN[d[1]]+' 부적 · 보유 '+n+'개</small><b class="serif">'+krChName(id,L)+'</b></div></div>'+
  '<div class="krpopl">'+krChTxt(id,L)+'</div>'+(L<5?'<p class="krnote">'+(L+1)+'강: '+d[2](L+1)+'</p>':'<p class="krnote">최고 단계예요!</p>')+
  '<div class="dgbtns">'+eqb+(L<5?'<button class="btn soft" data-kr="mergep" data-k="'+k+'"'+(n<2?' disabled':'')+'>합성'+(n<2?' (2개 필요)':'')+'</button>':'')+'<button class="btn soft" data-close="1">닫기</button></div>');}
function krEquip(k,i){const K=krAcc();if(!(acc.inv[k]>0))return;const c=krChParse(k);K.eq=K.eq.map(q=>q&&krChParse(q)&&krChParse(q)[0]===c[0]?null:q);K.eq[i]=k;save();SFX.play('ok');closeLayer();render();}
function krUnequip(i){const K=krAcc();K.eq[i]=null;save();SFX.play('tap');closeLayer();render();}
function krBuy(id){const d=KR_CH[id],K=krAcc();if(!d)return;const pr=KR_CHP[d[1]];if(K.tok<pr)return toast('엽전이 부족해요.');K.tok-=pr;const k=krChKey(id,0);acc.inv[k]=(acc.inv[k]||0)+1;save();SFX.play('coins');toast(d[0]+' 0강을 샀어요!');render();}
function krMergePop(k,res){const c=krChParse(k);if(!c)return;const [id,L]=c,K=krAcc(),n=acc.inv[k]||0,o=krMergeOdds(L,mgEv('krMerge')),d=KR_CH[id];
 const fx=res?'<div class="krmfx '+(res==='ok'?'ok':'no')+'"></div>':'';
 const rTxt=res==='ok'?'<p class="krmres ok">합성 성공! '+d[0]+' '+(L+1)+'강을 얻었어요.</p>':res==='fail'?'<p class="krmres">아쉬워요, 실패했어요. 부적은 그대로예요.</p>':res==='big'?'<p class="krmres bad">대실패! 부적 1개가 깨졌어요.</p>':'';
 krPop('<b class="serif krpopt">부적 합성</b><div class="krmerge"><div class="krms kma">'+(n>=1?krChImg(id,L):'')+'</div><div class="krms kmb">'+(n>=2?krChImg(id,L):'')+'</div><div class="krms kmc'+(res==='ok'?' kgot':'')+'">'+krChImg(id,Math.min(5,L+1))+'</div>'+fx+'</div>'+rTxt+
  '<p class="krmodds"><b>'+d[0]+' '+L+'강 ×2 → '+(L+1)+'강</b><span>성공 '+o.ok+'% · 실패 '+o.fail+'% · 대실패 '+o.big+'%</span>'+(o.big?'<small>대실패하면 부적 1개가 깨져요</small>':'')+'</p>'+
  '<div class="dgbtns"><button class="btn teal" data-kr="merge" data-k="'+k+'"'+(n<2||L>=5||K.tok<o.cost?' disabled':'')+'><img class="px" src="i/kr/kr_coin.png" alt="">'+o.cost+' 합성</button><button class="btn soft" data-close="1">닫기</button></div><p class="krnote">보유 '+n+'개 · 엽전 '+fmt(K.tok)+'</p>','krpopm');}
function krMergeDo(k){const c=krChParse(k);if(!c)return;const [id,L]=c,K=krAcc();if(L>=5||(acc.inv[k]||0)<2)return;const o=krMergeOdds(L,mgEv('krMerge'));if(K.tok<o.cost)return toast('엽전이 부족해요.');
 const go=()=>{K.tok-=o.cost;const r=Math.random()*100;let res;
  if(r<o.ok){res='ok';acc.inv[k]-=2;const nk=krChKey(id,L+1);acc.inv[nk]=(acc.inv[nk]||0)+1;K.eq=K.eq.map(q=>q===k&&!(acc.inv[k]>0)?nk:q);}
  else if(r<o.ok+o.fail)res='fail';else{res='big';acc.inv[k]-=1;}
  if(!(acc.inv[k]>0)){delete acc.inv[k];K.eq=K.eq.map(q=>q===k?null:q);}
  K.merges=(K.merges||0)+1;save();SFX.play(res==='ok'?'fanfare':res==='big'?'sad':'thud');render();krMergePop(res==='ok'&&!(acc.inv[k]>=2)?krChKey(id,L+1):k,res);};
 if(o.big>0)confirmBox('부적 합성','대실패('+o.big+'%)하면 '+KR_CH[id][0]+' '+L+'강 1개가 깨져요. 합성할까요?',go);else go();}
function krPop(h,cls){const L=document.getElementById('layer');L.innerHTML='<div class="overlay" data-close="1"><div class="krpop '+(cls||'')+'" role="dialog">'+h+'</div></div>';}

/* --- 시작 --- */
function krStart(){if(!krOpen())return;const R=dgRep(),p=R&&R.p,C=krCfg(),K=krAcc();if(!p)return toast('대표 환수가 없어요.');if(!krLeft())return toast('오늘 입장 횟수를 다 썼어요.');
 const d=accDaily();d.kr=(d.kr||0)+1;K.runs=(K.runs||0)+1;save();
 const mut=krMut(),G=krNew({cp:cp(p),st:p.st,el:dgElOf(p.no),cfg:C,tree:K.tree,charms:krEqList(),mut});KRV.G=G;KRV.pet=p;KRV.petImg=new Image();KRV.petImg.src=img(p.no);KRV.pause=0;KRV.ov='';KRV.hold=0;KRV.done=0;KRV.banT=0;KRV.tip=3;
 ['bg1','bg2','bg3','bg4','bg5','floor',krCloud(),'trail','peach','peach_big','heart','coin','pearl','rush_'+G.el+(p.st>=10?'2':''),'ascend','get','hit','heal','bolt','warn','o_goblin','o_kite','o_talisman','o_whirl','o_thunder','o_meteor','o_wisp','o_pillar','heart_full','heart_empty','tap'].forEach(k=>krI(k));
 const L=document.getElementById('layer');
 L.innerHTML='<div class="dgw krw" id="krw"><canvas id="krc"></canvas><div class="krhud"><div class="krtop"><div class="krscore"><b id="krS">0</b></div><div class="krstage"><b id="krSt">1</b><small id="krZn">'+KR_ZONES[0]+'</small></div>'+
  '<button class="dgpbtn" data-krb="pause" aria-label="일시정지">'+krImg('ic_pause')+'<span class="fb">Ⅱ</span></button></div><div class="krhp" id="krH"></div><div class="krsub" id="krSub"></div><div class="krrush"><div><i id="krR"></i></div></div><div class="krban" id="krB" hidden></div></div><div id="krov"></div></div>';
 const w=document.getElementById('krw');krOrient();w.addEventListener('click',krClick);
 const c=document.getElementById('krc');c.addEventListener('pointerdown',krPD);addEventListener('pointerup',krPU);addEventListener('pointercancel',krPU);
 addEventListener('keydown',krKD);addEventListener('keyup',krKU);document.addEventListener('visibilitychange',krVis);addEventListener('blur',krBlur);
 document.documentElement.classList.add('dgon');SFX.play('whoosh');KRV.last=performance.now();KRV.raf=requestAnimationFrame(krLoop);
 if(mut)setTimeout(()=>{if(KRV.G===G&&G.t<3)krBanner(KR_MUT[mut][0],KR_MUT[mut][1]);},300);}
function krUnbind(){document.documentElement.classList.remove('dgon');removeEventListener('pointerup',krPU);removeEventListener('pointercancel',krPU);removeEventListener('keydown',krKD);removeEventListener('keyup',krKU);document.removeEventListener('visibilitychange',krVis);removeEventListener('blur',krBlur);cancelAnimationFrame(KRV.raf);}
function krVis(){if(document.hidden)krPauseMenu();}
function krBlur(){krPauseMenu();}
function krPD(e){if(KRV.pause)return;KRV.hold=1;KRV.tip=0;e.preventDefault();}
function krPU(){KRV.hold=0;}
const KR_KEYS={' ':1,arrowup:1,w:1,spacebar:1};
function krKD(e){const k=e.key.toLowerCase();if(KR_KEYS[k]){KRV.hold=1;KRV.tip=0;e.preventDefault();}if(k==='escape'||k==='p'){if(KRV.ov==='pause')krResume();else krPauseMenu();}}
function krKU(e){if(KR_KEYS[e.key.toLowerCase()])KRV.hold=0;}

function krOrient(){const w=document.getElementById('krw');if(!w)return;const on=krAcc().view!=='port'&&innerHeight>innerWidth;if(w.classList.contains('krrot')!==on)w.classList.toggle('krrot',on);}
function krLoop(now){const G=KRV.G;if(!G||!document.getElementById('krc'))return krUnbind();krOrient();KRV.raf=requestAnimationFrame(krLoop);
 let dt=(now-KRV.last)/1000;KRV.last=now;if(dt>.25)dt=.25;
 if(!KRV.pause&&!KRV.done){let left=dt;while(left>0){const s=Math.min(.033,left);left-=s;krStep(G,s,KRV.hold);if(G.dead)break;}krEvents();}
 if(KRV.banT>0)KRV.banT-=dt;krDraw(now/1000);KRV.hudT-=dt;if(KRV.hudT<=0){KRV.hudT=.1;krHud();}}
function krBanner(t,s){const b=document.getElementById('krB');if(!b)return;b.hidden=false;b.innerHTML='<b>'+t+'</b>'+(s?'<small>'+s+'</small>':'');KRV.banT=2.4;}
function krEvents(){const G=KRV.G;for(const e of G.ev.splice(0)){
  if(e.k==='stage'){krBanner(e.st+' 스테이지',KR_ZONES[(e.st-1)%5]+((e.st-1)%5===0&&e.st>1?' · 더 빨라져요!':''));SFX.play('up');}
  else if(e.k==='rush'){SFX.play('magic');}else if(e.k==='ascstart'){krBanner('승천 타임!','천도복숭아가 쏟아져요');SFX.play('fanfare');}
  else if(e.k==='hurt'){SFX.play('thud');if(navigator.vibrate)try{navigator.vibrate(40);}catch(x){}}
  else if(e.k==='block'){SFX.play('tap');}else if(e.k==='shield'){SFX.play('ok');}
  else if(e.k==='revive'){krBanner('기사회생!','다시 날아올라요');SFX.play('fanfare');}
  else if(e.k==='golden'){SFX.play('coins');}
  else if(e.k==='day'){krBanner('낮','복숭아 점수 +30%');}else if(e.k==='night'){krBanner('밤','부수기 점수 +50%');}
  else if(e.k==='heal'){SFX.play('ok');}
  else if(e.k==='end'){return krFinish();}}}
function krHud(){const G=KRV.G,$=id=>document.getElementById(id);if(!$('krS'))return;
 dgSet('krS',fmt(Math.floor(G.score)));dgSet('krSt',G.stage+'');dgSet('krZn',KR_ZONES[G.zone]);
 const H=$('krH'),n=G.p.mhp,f=G.p.hp,key=n+':'+Math.ceil(f*4);if(H._k!==key){H._k=key;let h='';for(let i=0;i<n;i++){const v=Math.max(0,Math.min(1,f-i));h+='<span class="krht"><img class="px" src="i/kr/kr_heart_empty.png" alt=""><img class="px full" src="i/kr/kr_heart_full.png" alt="" style="clip-path:inset(0 '+Math.round((1-v)*100)+'% 0 0)"></span>';}H.innerHTML=h;}
 const sb=(G.p.sh>0?'<span>보호막 ×'+G.p.sh+'</span>':'')+(G.rev>0?'<span>기사회생 ×'+G.rev+'</span>':'');const SB=$('krSub');if(SB&&SB._h!==sb){SB._h=sb;SB.innerHTML=sb;}
 const R=$('krR'),v=G.rush>0?G.rush/G.rushMax:G.rushC/(G.C.rushT*G.M.rushT);if(R){R.style.width=Math.round(Math.min(1,v)*100)+'%';R.classList.toggle('on',G.rush>0);}
 if(KRV.banT<=0&&!$('krB').hidden)$('krB').hidden=true;}

/* --- 그리기 --- */
function krDraw(T){const cv=document.getElementById('krc');if(!cv)return;const dpr=Math.min(2,devicePixelRatio||1),W=cv.clientWidth,H=cv.clientHeight;
 if(cv.width!==Math.round(W*dpr)||cv.height!==Math.round(H*dpr)){cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);}
 const c=cv.getContext('2d'),G=KRV.G,p=G.p,M=G.M,z=Math.min(H/KR_VH,W/480),oy=Math.max(0,H-KR_VH*z);G.vw=W/z;c.setTransform(dpr,0,0,dpr,0,0);c.imageSmoothingEnabled=false;
 let sx=0,sy=0;if(G.shake>0){sx=(Math.random()-.5)*10;sy=(Math.random()-.5)*10;}if(M.sway)sy+=Math.sin(T*1.3)*7*z;
 // 배경 (구간별, 넘어갈 때 1.5초 섞기)
 const zt=G.t%KR_STAGE,prevZ=(G.zone+4)%5,fade=G.stage>1&&zt<1.5?zt/1.5:1;
 const drawBg=(zi,a)=>{const im=krI('bg'+(zi+1));c.globalAlpha=a;if(im){const bw=im.width*H/im.height,off=-((G.dist*.45)%bw);for(let x=off;x<W;x+=bw)c.drawImage(im,x,0,bw+1,H);}else{const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,['#8fd0ff','#ffb27a','#4a4466','#1b2350','#ffe7a8'][zi]);g.addColorStop(1,['#e8f6ff','#ffe1c8','#76708e','#3a3f7a','#fff6dc'][zi]);c.fillStyle=g;c.fillRect(0,0,W,H);}c.globalAlpha=1;};
 if(fade<1)drawBg(prevZ,1);drawBg(G.zone,fade);
 if(krNight(G)){const ph=(G.t%20);c.fillStyle='rgba(16,20,60,'+(.38*Math.min(1,ph/1.2,(20-ph)/1.2))+')';c.fillRect(0,0,W,H);}
 if(G.asc>0){c.fillStyle='rgba(255,230,150,'+(.18+.06*Math.sin(T*6))+')';c.fillRect(0,0,W,H);}
 if(G.rush>0&&G.st>=7){c.fillStyle=({fire:'rgba(255,90,40,.12)',water:'rgba(60,150,255,.12)',wood:'rgba(80,200,90,.12)',metal:'rgba(220,230,255,.14)',earth:'rgba(200,150,70,.14)',yin:'rgba(130,80,220,.16)',yang:'rgba(255,210,100,.16)'})[G.el];c.fillRect(0,0,W,H);}
 c.save();c.translate(sx,sy+oy);c.scale(z,z);const VW=G.vw;
 // 아래 구름 띠
 const fl=krI('floor');if(fl){const fh=110,fw=fl.width*fh/fl.height,off=-((G.dist)%fw);c.globalAlpha=.95;for(let x=off;x<VW;x+=fw)c.drawImage(fl,x,KR_VH-fh+18,fw+1,fh);c.globalAlpha=1;}
 // 속도감: 바람 줄기와 빠르게 스치는 구름 조각
 {const sp=krSpeed(G),n=G.rush>0||G.asc>0?22:10;c.strokeStyle='rgba(255,255,255,'+(G.rush>0?.7:.45)+')';c.lineWidth=2;
  for(let i=0;i<n;i++){const h=dgHash(i,7),y=30+h*(KR_VH-80),len=40+h*90*(sp/320),x=VW-((G.dist*(1.2+h*.8)+i*173)%(VW+200));c.beginPath();c.moveTo(x,y);c.lineTo(x+len,y);c.stroke();}
  for(let i=0;i<5;i++){const h=dgHash(i,31),y=KR_VH-60-h*120,x=VW-((G.dist*1.6+i*397)%(VW+260))+130,r=16+h*22;c.fillStyle='rgba(255,255,255,.55)';c.beginPath();c.ellipse(x,y,r*1.8,r*.7,0,0,7);c.ellipse(x+r,y-r*.35,r,r*.6,0,0,7);c.fill();}}
 // 번개
 for(const o of G.O){if(o.k!=='bolt')continue;if(o.warn>0){if(M.boltHide)continue;const wi=krI('warn');c.globalAlpha=.55+.45*Math.sin(T*20);if(wi){c.save();c.translate(o.x,KR_VH/2);c.rotate(Math.PI/2);c.drawImage(wi,-KR_VH/2,-10,KR_VH,20);c.restore();}else{c.setLineDash([10,8]);c.strokeStyle='#ffe066';c.lineWidth=3;c.beginPath();c.moveTo(o.x,0);c.lineTo(o.x,KR_VH);c.stroke();c.setLineDash([]);}c.globalAlpha=1;}
  else if(o.strike>0){const bi=krI('bolt'),pr=1-o.strike/.45;if(bi){const fw=bi.width/8,f=Math.min(7,Math.floor(pr*8));c.drawImage(bi,f*fw,0,fw,bi.height,o.x-60,0,120,KR_VH);}else{c.strokeStyle='#fff6a0';c.lineWidth=8;c.beginPath();c.moveTo(o.x,0);for(let y=0;y<KR_VH;y+=60)c.lineTo(o.x+(Math.random()-.5)*30,y);c.stroke();}}}
 // 획득물
 for(const q of G.K){const gd=q.k==='peach_gold',k=gd?'peach':q.k,s=k==='peach'?(gd?40:34):k==='peach_big'?54:k==='pearl'?56:k==='heart'?46:34,im=krSpr(k,s,s),bob=Math.sin(T*5+q.x*.05)*3;
  if(gd){c.fillStyle='rgba(255,215,80,'+(.45+.2*Math.sin(T*8+q.x))+')';c.beginPath();c.arc(q.x,q.y+bob,s*.62,0,7);c.fill();}
  if(im)c.drawImage(im,q.x-s/2,q.y-s/2+bob,s,s);else{c.fillStyle={peach:'#ffb3c6',peach_big:'#ff8fb0',heart:'#e5484d',coin:'#ffd36e',pearl:'#bfe3ff'}[k];c.beginPath();c.arc(q.x,q.y+bob,s/2.4,0,7);c.fill();}
  if(gd){c.strokeStyle='#ffd34d';c.lineWidth=3;c.beginPath();c.arc(q.x,q.y+bob,s*.55,0,7);c.stroke();}}
 // 장애물
 for(const o of G.O){if(o.k==='bolt'||o.hit)continue;
  if(o.k==='pillar'){const im=krSpr('o_pillar',o.w+30,o.h);if(im){c.save();c.translate(o.x+o.w/2,o.y+o.h/2);if(o.top)c.scale(1,-1);c.drawImage(im,-(o.w+30)/2,-o.h/2,o.w+30,o.h);c.restore();}else{c.fillStyle='#5a5470';c.fillRect(o.x,o.y,o.w,o.h);}continue;}
  const s=o.r*2.9,im=krSpr('o_'+o.k,s,s);c.save();c.translate(o.x,o.y);if(o.k==='whirl')c.rotate(Math.sin(T*8)*.15);if(o.k==='kite')c.rotate(Math.sin(T*3+o.id)*.12);
  if(im)c.drawImage(im,-s/2,-s/2,s,s);else{c.fillStyle={goblin:'#7a5cc8',kite:'#e8d8b0',talisman:'#ffd36e',whirl:'#b8e0ff',thunder:'#4a4466',meteor:'#ff7a3d',wisp:'#8a7cff'}[o.k]||'#888';c.beginPath();c.arc(0,0,o.r,0,7);c.fill();}c.restore();}
 // 환수 + 근두운
 const px=krPX(G),cl=krSpr(krCloud(),120,60),tr=krI('trail'),grd=p.y>=KR_VH-97,tilt=Math.max(-.25,Math.min(.25,p.vy/1600))+(grd?-.06+Math.sin(T*22)*.05:-.04),rb=grd?Math.abs(Math.sin(T*18))*-6:Math.sin(T*6)*3;
 if(grd&&!KRV.pause){KRV.puT=(KRV.puT||0)-1/60;if(KRV.puT<=0){KRV.puT=.08;(KRV.pu=KRV.pu||[]).push({x:px-50,y:p.y+56,t:0});}}
 for(const q of (KRV.pu||[])){q.t+=1/60;q.x-=krSpeed(G)/60;c.fillStyle='rgba(255,255,255,'+Math.max(0,.75-q.t*1.5)+')';c.beginPath();c.arc(q.x,q.y-q.t*20,8+q.t*26,0,7);c.fill();}KRV.pu=(KRV.pu||[]).filter(q=>q.t<.5);
 if(tr){const fw=tr.width/8,f=Math.floor(T*14)%8;c.globalAlpha=.85;c.drawImage(tr,f*fw,0,fw,tr.height,px-118,p.y+4,80,80);c.globalAlpha=1;}
 // 고속질주 잔상(4단계+)
 if(G.rush>0&&G.st>=4){for(let i=1;i<=3;i++){c.globalAlpha=.18/i;const pi=KRV.petImg;if(pi&&pi.complete&&pi.naturalWidth)c.drawImage(pi,px-36-i*26,p.y-58,72,72);}c.globalAlpha=1;}
 if(G.rush>0){const awk=G.st>=10,k='rush_'+G.el+(awk?'2':''),im=krI(k)||krI('rush_'+G.el),sz=(awk?280:G.st>=7?250:G.st>=4?220:200);if(im){const fw=im.width/8,f=Math.floor(T*14)%8;c.drawImage(im,f*fw,0,fw,im.height,px-sz*.62,p.y-sz/2,sz,sz);}else{c.fillStyle='rgba(255,220,120,.35)';c.beginPath();c.ellipse(px-20,p.y,120,60,0,0,7);c.fill();}}
 if(G.asc>0){const im=krI('ascend');if(im){const fw=im.width/8,f=Math.floor(T*14)%8;c.drawImage(im,f*fw,0,fw,im.height,px-200,p.y-130,300,260);}}
 c.save();c.translate(px,p.y+rb);c.rotate(tilt);if(p.inv>0&&Math.floor(T*16)%2)c.globalAlpha=.45;
 if(cl)c.drawImage(cl,-60,8,120,60);else{c.fillStyle='#fff';c.beginPath();c.ellipse(0,26,52,18,0,0,7);c.fill();}
 const pi=KRV.petImg;if(pi&&pi.complete&&pi.naturalWidth){const fl2=!FACE_R.has(KRV.pet.no);c.save();if(fl2)c.scale(-1,1);c.drawImage(pi,-38,-50,76,76);c.restore();}
 c.restore();c.globalAlpha=1;
 if(p.sh>0){c.strokeStyle='rgba(150,230,255,'+(.6+.25*Math.sin(T*5))+')';c.lineWidth=4;c.fillStyle='rgba(170,235,255,.16)';c.beginPath();c.arc(px,p.y-4,58,0,7);c.fill();c.stroke();}
 // 효과
 for(const f of G.FX){const pr=f.t/f.life;
  if(f.k==='pts'){c.globalAlpha=1-pr;c.font='bold 22px sans-serif';c.textAlign='center';c.lineWidth=4;c.strokeStyle='#5a2a10';c.fillStyle='#ffe066';const ty=f.y-pr*40;c.strokeText('+'+f.v,f.x,ty);c.fillText('+'+f.v,f.x,ty);c.globalAlpha=1;continue;}
  if(f.k==='tok'){const im=krSpr('coin',30,30);c.globalAlpha=1-pr;if(im)c.drawImage(im,f.x-15,f.y-15-pr*40,30,30);c.globalAlpha=1;continue;}
  if(f.k==='shield'){c.strokeStyle='rgba(150,230,255,'+(1-pr)+')';c.lineWidth=6;c.beginPath();c.arc(f.x,f.y,50+pr*40,0,7);c.stroke();continue;}
  const k=f.k==='smash'?'hit':f.k,im=krI(k);if(im){const fw=im.width/8,fr=Math.min(7,Math.floor(pr*8)),s=f.k==='smash'?110:80;c.drawImage(im,fr*fw,0,fw,im.height,f.x-s/2,f.y-s/2,s,s);}else{c.strokeStyle='rgba(255,255,255,'+(1-pr)+')';c.lineWidth=3;c.beginPath();c.arc(f.x,f.y,20+pr*30,0,7);c.stroke();}}
 if(G.rush>0&&G.st>=10&&G.rush<.3){c.fillStyle='rgba(255,255,255,'+(.5*(1-G.rush/.3))+')';c.fillRect(0,0,VW,KR_VH);}
 c.restore();
 // 시작 안내
 if(KRV.tip>0&&!KRV.pause){KRV.tip-=1/60;const ti=krI('tap'),s=Math.min(110,H*.2);c.globalAlpha=Math.min(1,KRV.tip);if(ti)c.drawImage(ti,W*.55-s/2,H*.5-s/2+Math.sin(T*6)*6,s,s);c.font='bold '+Math.max(14,Math.round(H*.035))+'px sans-serif';c.textAlign='center';c.fillStyle='#fff';c.strokeStyle='#1a2a3a';c.lineWidth=4;const tx='누르고 있으면 떠올라요';c.strokeText(tx,W*.55,H*.5+s*.75);c.fillText(tx,W*.55,H*.5+s*.75);c.globalAlpha=1;}}

/* --- 겹창 --- */
function krOv(h,cls){const o=document.getElementById('krov');if(o)o.innerHTML=h?'<div class="dgovb krovb '+(cls||'')+'">'+h+'</div>':'';}
function krPauseMenu(){if(!KRV.G||KRV.done||KRV.ov)return;KRV.pause=1;KRV.ov='pause';KRV.hold=0;const G=KRV.G;
 krOv('<div class="krpanel"><h3 class="serif">잠시 멈춤</h3><div class="dgpst"><span>점수<b>'+fmt(Math.floor(G.score))+'</b></span><span>스테이지<b>'+G.stage+'</b></span><span>복숭아<b>'+(G.peach+G.big)+'</b></span><span>엽전<b>'+G.tok+'</b></span></div><div class="dgbtns"><button class="btn teal" data-krb="resume">계속하기</button><button class="btn soft" data-krb="quit">그만하기</button></div></div>','pause');}
function krResume(){if(KRV.done)return;KRV.ov='';KRV.pause=0;krOv('');KRV.last=performance.now();}
function krClick(e){const t=e.target.closest('[data-krb]');e.stopPropagation();if(!t)return;const a=t.dataset.krb,G=KRV.G;if(!G)return;SFX.play('tap');
 if(a==='pause')return krPauseMenu();if(a==='resume')return krResume();
 if(a==='quit'){KRV.ov='quitc';return krOv('<div class="krpanel"><h3 class="serif">그만할까요?</h3><p>지금까지 점수 <b>'+fmt(Math.floor(G.score))+'</b>, '+G.stage+' 스테이지 보상을 받고 끝나요.</p><div class="dgbtns"><button class="btn teal" data-krb="resume">계속하기</button><button class="btn soft" data-krb="quitok">그만하고 보상 받기</button></div></div>','pause');}
 if(a==='quitok'){G.quit=1;return krFinish();}
 if(a==='close'){krUnbind();KRV.G=null;closeLayer();render();}}
function krFinish(){const G=KRV.G;if(!G||KRV.done)return;KRV.done=1;KRV.pause=1;KRV.ov='end';KRV.hold=0;
 const K=krAcc(),d=accDaily(),r=krReward(G,krCoinLeft(),{tok:mgM('krTok'),coin:mgM('krCoin')}),wk=weekKey(now());
 acc.coins=(acc.coins||0)+r.coins;d.krCoin=(d.krCoin||0)+r.coins;K.tok+=r.tok;K.best=Math.max(K.best||0,r.score);
 if(K.wk!==wk){K.wk=wk;K.wbest=0;}const rec=r.score>(K.wbest||0);if(rec)K.wbest=r.score;save();
 if(rec&&krScoreOk(r.score,r.t)){const p=KRV.pet;db.doc('krweek/'+wk+'/s/'+acc.uid).set({uid:acc.uid,nick:acc.nick||acc.id,score:r.score,stage:r.stage,t:r.t,no:p?p.no:0,mut:G.mut||'',at:Date.now()}).then(()=>{KRV.rankT[wk]=0;}).catch(()=>{});}
 SFX.play(rec?'fanfare':'ok');
 krOv('<div class="krres">'+krImg('result','krbg')+'<div class="krrt"><h3 class="serif">'+(rec?'이번 주 최고 기록!':G.quit?'수고했어요':'추락했어요')+'</h3></div>'+
  '<div class="krbig"><small>점수</small><b>'+fmt(r.score)+'</b></div>'+
  '<div class="dgstat krst"><span>스테이지<b>'+r.stage+'</b></span><span>비행 시간<b>'+dgClock(r.t)+'</b></span><span>천도복숭아<b>'+r.peach+'</b></span></div>'+
  '<ul class="krrw"><li><img class="px" src="i/ui/icon_coin.png" alt="">환수코인 <b>+'+r.coins+'</b>'+(r.full?' <small>(오늘 받을 수 있는 코인을 다 받았어요)</small>':'')+'</li><li><img class="px" src="i/kr/kr_coin.png" alt="">엽전 <b>+'+r.tok+'</b> <small>'+(r.tok>r.tokBase?'이벤트 '+mgM('krTok')+'배 · ':'')+'갈래 트리·부적에 써요</small></li></ul>'+
  '<button class="btn teal" data-krb="close">확인</button></div>','end');}

/* --- 비서 · 버튼 --- */
function krRefill(){if(krLeft()>0)return toast('아직 오늘 입장 횟수가 남아 있어요.');if(!take('sec_kr'))return;const d=accDaily();d.krBonus=(d.krBonus||0)+1;save();SFX.play('magic');toast('근두운 질주 입장이 1번 늘었어요!');render();}
document.addEventListener('click',e=>{const t=e.target.closest('[data-kr],[data-krfill]');if(!t||t.disabled||t.closest('#krw'))return;e.stopPropagation();
 if(t.dataset.krfill)return krRefill();const a=t.dataset.kr,k=t.dataset.k,i=+t.dataset.i;SFX.play('tap');
 if(a==='view'){krAcc().view=t.dataset.v;save();return render();}if(a==='tab'){KRV.tab=t.dataset.t;return render();}
 if(a==='start')return krStart();if(a==='node')return krNodePop(k);if(a==='learn')return krLearn(k);
 if(a==='ch')return krChPop(k);if(a==='slot'){const q=krAcc().eq[i];if(q)return krChPop(q);KRV.tab='charm';return toast('아래 "내 부적"에서 끼울 부적을 눌러 주세요.');}
 if(a==='eq')return krEquip(k,i);if(a==='uneq')return krUnequip(i);if(a==='buy')return krBuy(k);if(a==='mergep')return krMergePop(k);if(a==='merge')return krMergeDo(k);},true);

/* --- 운영자 --- */
function aKrCfg(){const C=krCfg(),main=isMain(),wk=AS.krwk||weekKey(now()),RK=KRV.rank[wk];if(!RK)krRankLoad(wk,1).then(()=>{if(MODE==='admin'&&AS.tab==='krcfg')render();});
 const n=(id,l,v,w)=>'<label class="f">'+l+'<input type="number" id="'+id+'" value="'+v+'" min="0" style="width:'+(w||72)+'px"></label>';
 const cw=weekKey(now()),last=weekKey(now()-7*86400000),fut=[0,1,2,3,4].map(i=>weekKey(now()+i*7*86400000)),fv=C.mForceWk===cw?C.mForce:'';
 const mrow=KR_MUTS.map(k=>'<label class="krmrow"><input type="checkbox" class="krMOn" value="'+k+'"'+(C.mOff.includes(k)?'':' checked')+'>'+krImg('m_'+k)+'<span><b>'+KR_MUT[k][0]+'</b><small>'+KR_MUT[k][1]+'</small></span></label>').join('');
 return '<div class="card adm"><h2>근두운 질주</h2>'+admOpenRow('kr',C.open)+
 '<h3 class="serif adh3">설정</h3><label class="f gmchk" style="color:inherit;margin:4px 0"><input type="checkbox" id="krWr"'+(C.wreset?' checked':'')+'>매주 월요일 0시에 갈래 트리 초기화 (남은 엽전은 그대로, 트리에 쓴 엽전은 아래 한도까지 돌려줌)</label><div class="admrow">'+n('krCa','돌려줄 엽전 한도',C.carry)+n('krD','하루 입장',C.daily)+n('krP','스테이지당 코인',C.perStage)+n('krM','하루 코인 상한',C.dailyCap)+n('krR','고속질주 간격(초)',C.rushT)+n('krDr','체력 감소 %',C.drain)+n('krO','장애물 양 %',C.obst)+'</div>'+
 '<h3 class="serif adh3">주간 변이</h3><p class="muted">체크한 변이 중에서 매주 하나가 정해져요 (같은 주에는 모두 같은 변이). 아래에서 이번 주만 직접 고를 수도 있어요.</p><div class="krmgrid">'+mrow+'</div>'+
 '<div class="admrow"><label class="f">이번 주('+cw+') 변이<select id="krMF"><option value="">자동 (무작위)</option><option value="none"'+(fv==='none'?' selected':'')+'>변이 없음</option>'+KR_MUTS.map(k=>'<option value="'+k+'"'+(fv===k?' selected':'')+'>'+KR_MUT[k][0]+'</option>').join('')+'</select></label></div>'+
 '<p class="muted">미리 보기: '+fut.map((w,i)=>{const m=krMutOf(w,C);return (i?w:'이번 주')+' <b>'+(m?KR_MUT[m][0]:'없음')+'</b>';}).join(' · ')+'</p>'+
 (main?'<div class="admrow"><button class="btn soft sm" data-x="krDef">기본값</button><button class="btn teal sm" data-x="krSave">저장</button></div>':'<p class="muted">보조 운영자는 볼 수만 있어요.</p>')+
 '<h3 class="serif adh3">주간 랭킹</h3><div class="admrow"><button class="btn '+(wk===cw?'teal':'soft')+' sm" data-x="krWk" data-w="'+cw+'">이번 주</button><button class="btn '+(wk===last?'teal':'soft')+' sm" data-x="krWk" data-w="'+last+'">지난주</button><span class="muted">'+wk+' 주</span>'+(RK&&RK.settled?'<b style="color:#2b6a4e">정산 완료</b>':'')+'</div>'+
 (RK?'<table class="t"><tr><th>순위</th><th>닉네임</th><th>점수</th><th>스테이지</th><th>시간</th><th></th></tr>'+RK.list.slice(0,50).map((r,i)=>'<tr'+(krScoreOk(r.score,r.t)?'':' style="background:#fde8e6"')+'><td>'+(i+1)+'</td><td>'+esc(r.nick)+'</td><td>'+fmt(r.score)+'</td><td>'+r.stage+'</td><td>'+dgClock(r.t)+'</td><td>'+(main?'<button class="btn red sm" data-x="krDel" data-u="'+r.uid+'">삭제</button>':'')+'</td></tr>').join('')+'</table>'+(RK.list.length?'':'<p class="muted">기록이 없어요.</p>'):'<p class="muted">불러오는 중…</p>')+
 '<p class="muted">빨간 줄은 플레이 시간에 비해 점수가 너무 높은 의심 기록이에요.</p>'+
 '<h3 class="serif adh3">주간 랭킹 보상</h3><div style="overflow-x:auto"><table class="t"><tr><th>순위</th><th>환수코인</th><th>기운세트</th><th>음양알</th><th>엽전</th><th>무작위 부적 수</th><th>부적 단계</th></tr>'+krTiers().map((t,i)=>{const r=t[3],c=(id,v,mx)=>'<td><input type="number" id="'+id+i+'" value="'+v+'" min="0"'+(mx!=null?' max="'+mx+'"':'')+' style="width:64px"></td>';return '<tr><td>'+t[0]+'</td>'+c('krTc',r.c)+c('krTk',r.ki)+c('krTy',r.yy,3)+c('krTt',r.tok)+c('krTh',r.ch,5)+c('krTl',r.cl,5)+'</tr>';}).join('')+'</table></div><p class="muted">보상 칸도 위 [저장]을 눌러야 적용돼요. 엽전·부적은 우편·출석·월정액 보상에서도 아이템(엽전, 부적 ○○ n강)으로 줄 수 있어요.</p>'+
 (main?'<button class="btn teal sm" data-x="krSettle"'+(wk===cw||!RK||RK.settled?' disabled':'')+'>'+wk+' 주 보상 우편 보내기</button> <span class="muted">지난주만 보낼 수 있고, 한 번만 보내져요.</span>':'')+'</div>';}
function admOpenRow(k,on){const nm=({kr:'근두운 질주',lt:'복권',dg:'도깨비 야행'})[k];return '<div class="admopen '+(on?'on':'')+'"><div><b>'+(on?'열려 있어요':'닫혀 있어요')+'</b><small>'+(on?'유저 메뉴에 '+nm+'이(가) 보여요.':'유저 메뉴에서 숨겨져 있어요. (테스트 모드에서는 항상 보여요)')+'</small></div>'+(isMain()?'<button class="btn '+(on?'red':'teal')+'" data-x="openTgl" data-k="'+k+'">'+(on?'닫기':'열기')+'</button>':'')+'</div>';}
MAIN_ONLY.add('krSave');MAIN_ONLY.add('krDel');MAIN_ONLY.add('krSettle');MAIN_ONLY.add('openTgl');
Object.assign(AD,{
 async openTgl(b){const k=b.dataset.k,C=k==='kr'?krCfg():k==='lt'?ltCfg():dgCfg(),on=!C.open;cfg[k]=Object.assign({},cfg[k]||{},{open:on?1:0});await saveGlobal(({kr:'근두운 질주',lt:'복권',dg:'도깨비 야행'})[k]+(on?' 열기':' 닫기'));render();},
 krDef(){const o=(cfg.kr&&cfg.kr.open)||0;cfg.kr={open:o};render();toast('기본값을 불러왔어요. [저장]을 눌러야 적용돼요.');},
 async krSave(){const g=id=>Math.max(0,+document.getElementById(id).value||0),T=[0,1,2,3,4],mf=document.getElementById('krMF').value;
  const off=KR_MUTS.filter(k=>!Array.from(document.querySelectorAll('.krMOn')).some(x=>x.value===k&&x.checked));
  cfg.kr=Object.assign({},cfg.kr||{},{wreset:document.getElementById('krWr').checked?1:0,carry:g('krCa'),tc:T.map(i=>g('krTc'+i)),tk:T.map(i=>g('krTk'+i)),ty:T.map(i=>Math.min(3,g('krTy'+i))),tt:T.map(i=>g('krTt'+i)),tch:T.map(i=>Math.min(5,g('krTh'+i))),tcl:T.map(i=>Math.min(5,g('krTl'+i))),
   daily:g('krD'),perStage:g('krP'),dailyCap:g('krM'),rushT:Math.max(5,g('krR')),drain:Math.max(10,g('krDr')),obst:Math.max(10,g('krO')),mOff:off,mForce:mf,mForceWk:mf?weekKey(now()):''});await saveGlobal('근두운 질주 설정 변경');},
 krWk(b){AS.krwk=b.dataset.w;krRankLoad(AS.krwk,1);render();},
 async krDel(b){const u=b.dataset.u,wk=AS.krwk||weekKey(now());if(!confirm('이 기록을 지울까요?'))return;await db.doc('krweek/'+wk+'/s/'+u).delete();log('근두운 랭킹 기록 삭제 '+wk+' '+u);await krRankLoad(wk,1);render();},
 async krSettle(){const wk=AS.krwk;if(!wk||wk===weekKey(now()))return;const meta=await db.doc('krweek/'+wk).get();if(meta.exists&&meta.data().settled)return toast('이미 정산한 주예요.');
  await krRankLoad(wk,1);const L=((KRV.rank[wk]||{}).list||[]).filter(r=>krScoreOk(r.score,r.t));const TT=krTiers(),ids=Object.keys(KR_CH);if(!confirm(wk+' 주 '+L.length+'명에게 보상 우편을 보낼까요?'))return;let ok=0;
  for(let i=0;i<L.length;i++){const r=L[i];const t=TT.find(x=>i+1>=x[1]&&i+1<=x[2]),R=t[3],items={};if(R.ki)Object.values(KI).forEach(k=>items[k]=R.ki);if(R.tok)items.kr_tok=R.tok;
   for(let j=0;j<R.ch;j++){const ck=krChKey(ids[Math.floor(Math.random()*ids.length)],R.cl);items[ck]=(items[ck]||0)+1;}
   const m=stampMail({title:'근두운 질주 주간 랭킹 보상 ('+(i+1)+'위)',msg:wk+' 주 '+(i+1)+'위 · '+fmt(r.score)+'점',coins:R.c,items,gear:[],pets:[],eggs:0,yyEggs:R.yy||0,from:'운영자'});
   try{await db.doc('accounts/'+r.uid).pushMail(m);ok++;}catch(x){}}
  await db.doc('krweek/'+wk).set({settled:1,at:Date.now(),n:ok});(KRV.rank[wk]||{}).settled=1;log('근두운 주간 정산 '+wk+' '+ok+'명');toast(ok+'명에게 보냈어요.');render();}});
if(/[?&](test|mock)/.test(location.search))window.__KR={KRV,accDaily,krStart,krFinish,krLeft,krCfg,krAcc,krRankLoad,krMods,krMergeDo,krBuy,krLearn,KR_TREE,KR_CH,KR_MUT,krMut,mgEv,go:v=>{view=v;render();},__step:krStep};
if(/[?&](test|mock)/.test(location.search))window.__DK={evoCheck,evoPick,dkTargets,newPet,FORMS,NAMES,GRADE_N,ELOF,DK_RULE,gCap,GAUGES,acc:()=>acc,img,skillOf,cp,hatch,DEX_N,gMigrate,isGuest,gno,go:v=>{view=v;render();}};
/* ===== 이십팔수 성도 (도감 → 이십팔수 성도) · 그림: i/sky/ ===== */
// [한자, 한글, 방위, 칠전사 번호, 설명, 별 좌표(u 방위각 0~1, v 안→밖 0~1), 선(번호 이어 그리기)]
const SKY_M=[
 ['角','각','e',314,'청룡의 뿔이 되는 별. 봄 하늘 동쪽에서 가장 먼저 떠올라요.',[[.45,.22],[.56,.78]],[[0,1]]],
 ['亢','항','e',320,'청룡의 목. 활처럼 휘어 하늘의 바람을 살펴요.',[[.25,.18],[.62,.34],[.72,.6],[.45,.86]],[[0,1,2,3]]],
 ['氐','저','e',332,'청룡의 가슴. 네 별이 단단한 바탕을 이뤄요.',[[.28,.24],[.76,.3],[.7,.76],[.24,.7]],[[0,1,2,3,0]]],
 ['房','방','e',317,'청룡의 배. 하늘 임금이 머무는 방이라 불려요.',[[.5,.1],[.44,.37],[.5,.63],[.6,.9]],[[0,1,2,3]]],
 ['心','심','e',329,'청룡의 심장. 가운데 붉은 큰 별이 뜨겁게 뛰어요.',[[.32,.28],[.5,.5],[.66,.74]],[[0,1,2]]],
 ['尾','미','e',326,'청룡의 꼬리. 아홉 별이 갈고리처럼 휘어져요.',[[.3,.08],[.38,.22],[.43,.37],[.4,.52],[.34,.66],[.4,.8],[.56,.9],[.72,.84],[.78,.7]],[[0,1,2,3,4,5,6,7,8]]],
 ['箕','기','e',323,'청룡의 꼬리 끝. 곡식을 까부르는 키 모양이에요.',[[.24,.3],[.72,.2],[.78,.7],[.3,.82]],[[0,1,2,3,0]]],
 ['斗','두','n',384,'남쪽의 국자. 여섯 별이 국자 모양으로 늘어서요.',[[.2,.28],[.46,.18],[.56,.44],[.3,.54],[.7,.66],[.84,.86]],[[0,1,2,3,0],[2,4,5]]],
 ['牛','우','n',381,'견우의 소. 은하수 곁에서 묵묵히 걸어요.',[[.28,.14],[.5,.26],[.72,.14],[.5,.5],[.36,.76],[.66,.8]],[[0,1,2],[1,3,4],[3,5]]],
 ['女','녀','n',369,'베 짜는 여인. 작은 네 별이 나란히 앉아 있어요.',[[.28,.24],[.66,.3],[.56,.6],[.34,.76]],[[0,1,2,3]]],
 ['虛','허','n',375,'텅 빈 하늘. 두 별만이 고요하게 빛나요.',[[.38,.3],[.62,.72]],[[0,1]]],
 ['危','위','n',366,'지붕 마루. 세 별이 비스듬히 기울어 있어요.',[[.28,.22],[.62,.5],[.4,.82]],[[0,1,2]]],
 ['室','실','n',372,'하늘의 집. 두 별이 기둥처럼 서 있어요.',[[.44,.18],[.56,.82]],[[0,1]]],
 ['壁','벽','n',378,'하늘의 담장. 집 동쪽을 든든히 지켜요.',[[.52,.18],[.44,.82]],[[0,1]]],
 ['奎','규','w',340,'열여섯 별이 둥글게 이어진 하늘의 고리예요.',[[.5,.06],[.7,.12],[.82,.28],[.86,.48],[.8,.68],[.66,.84],[.48,.92],[.3,.84],[.18,.66],[.14,.46],[.2,.26],[.34,.12]],[[0,1,2,3,4,5,6,7,8,9,10,11,0]]],
 ['婁','루','w',352,'제물을 기르는 곳. 세 별이 한 줄로 이어져요.',[[.3,.28],[.5,.5],[.7,.72]],[[0,1,2]]],
 ['胃','위','w',358,'하늘의 곳간. 세 별이 곡식을 모아 둬요.',[[.34,.28],[.72,.44],[.4,.76]],[[0,1,2,0]]],
 ['昴','묘','w',343,'좀생이별. 일곱 별이 옹기종기 모여 반짝여요.',[[.44,.32],[.56,.36],[.5,.48],[.64,.5],[.4,.56],[.56,.62],[.48,.72]],[[0,1,3,5,6,4,0],[2,5]]],
 ['畢','필','w',346,'사냥 그물. 여덟 별이 V자로 펼쳐져요.',[[.18,.18],[.34,.38],[.46,.54],[.62,.48],[.82,.28],[.5,.7],[.48,.88],[.66,.66]],[[0,1,2,5,6],[4,3,2],[3,7]]],
 ['觜','자','w',355,'호랑이의 수염. 작은 세 별이 오밀조밀해요.',[[.44,.38],[.6,.48],[.46,.6]],[[0,1,2,0]]],
 ['參','삼','w',349,'세 장수 별. 허리띠 세 별이 나란히 빛나요.',[[.24,.14],[.76,.17],[.4,.47],[.5,.5],[.6,.53],[.5,.62],[.5,.7],[.27,.86],[.73,.83]],[[0,2,3,4,1],[2,7],[4,8],[3,5,6]]],
 ['井','정','s',297,'하늘의 우물. 두 줄 별이 우물 난간을 이뤄요.',[[.28,.12],[.31,.38],[.28,.64],[.31,.88],[.7,.1],[.72,.36],[.69,.62],[.72,.86]],[[0,1,2,3],[4,5,6,7],[1,5],[2,6]]],
 ['鬼','귀','s',291,'신령의 수레. 네 별 가운데 희미한 기운이 서려요.',[[.34,.34],[.66,.34],[.66,.66],[.34,.66]],[[0,1,2,3,0]]],
 ['柳','류','s',300,'주작의 부리. 버들가지처럼 휘어 늘어져요.',[[.2,.18],[.35,.26],[.5,.28],[.62,.36],[.68,.5],[.66,.63],[.58,.76],[.5,.88]],[[0,1,2,3,4,5,6,7]]],
 ['星','성','s',288,'주작의 목. 일곱 별이 목덜미를 그려요.',[[.3,.12],[.4,.28],[.5,.44],[.58,.58],[.72,.64],[.44,.7],[.38,.88]],[[0,1,2,3,4],[3,5,6]]],
 ['張','장','s',306,'주작의 모이주머니. 여섯 별이 활짝 펼쳐져요.',[[.22,.3],[.5,.18],[.78,.3],[.72,.62],[.5,.74],[.28,.62]],[[0,1,2,3,4,5,0]]],
 ['翼','익','s',303,'주작의 날개. 스물두 별이 하늘 가득 날개를 펴요.',[[.5,.5],[.1,.28],[.26,.37],[.4,.45],[.9,.28],[.74,.37],[.6,.45],[.5,.68],[.42,.88],[.58,.88]],[[1,2,3,0,6,5,4],[0,7,8],[7,9]]],
 ['軫','진','s',294,'주작의 꼬리. 수레 뒤턱처럼 네 별이 받쳐요.',[[.3,.28],[.7,.22],[.74,.7],[.26,.74]],[[0,1,2,3,0]]]];
const SKY_Q={e:{a0:135,col:[90,230,200],han:'青龍',ko:'청룡',dir:'동방'},n:{a0:225,col:[150,140,255],han:'玄武',ko:'현무',dir:'북방'},w:{a0:315,col:[225,235,255],han:'白虎',ko:'백호',dir:'서방'},s:{a0:45,col:[255,130,120],han:'朱雀',ko:'주작',dir:'남방'}};
const SKYV={on:0,raf:0,W:0,H:0,L:null,cam:{z:1,rot:0,fx:0,fy:0,d:0,foc:null,sx:0,sy:0},anim:null,foc:null,pop:-1,T0:0};
const SKYI={};function skyI(k){let o=SKYI[k];if(!o){o=SKYI[k]={im:new Image(),ok:0};o.im.onload=()=>{o.ok=1;};o.im.onerror=()=>{o.ok=-1;};o.im.src='i/sky/sky_'+k+'.png?'+IMG_V;}return o.ok===1?o.im:null;}
function skyGot(i){return !!(acc.dex&&acc.dex[SKY_M[i][3]]);}
function skyCnt(q){let n=0;SKY_M.forEach((m,i)=>{if((!q||m[2]===q)&&skyGot(i))n++;});return n;}
function skyBanner(){const n=skyCnt();return '<div class="skyban" data-sky="open"><div><b class="serif">이십팔수 성도</b><span>칠전사를 모으면 하늘의 별자리가 하나씩 깨어나요</span></div><em>'+n+' / 28</em></div>';}
/* --- 열기 · 닫기 --- */
function skyOpen(){const L=document.getElementById('layer');SKYV.on=1;SKYV.foc=null;SKYV.pop=-1;SKYV.anim=null;Object.assign(SKYV.cam,{z:1,rot:0,fx:0,fy:0,d:0,foc:null});
 ['orn','star','star_dim','sil_e','sil_n','sil_w','sil_s','md_e_on','md_e_off','md_n_on','md_n_off','md_w_on','md_w_off','md_s_on','md_s_off'].forEach(skyI);
 L.innerHTML='<div class="skyw" id="skyw"><canvas id="skyc"></canvas><div class="skytop"><h2 class="serif">이십팔수 성도</h2><p>모은 칠전사 <b>'+skyCnt()+'</b> / 28</p></div>'+
  '<div class="skyhd" id="skyhd"></div><button class="skybtn skyx" data-skyb="close" aria-label="닫기">✕</button><button class="skybtn skyback" data-skyb="back" hidden>‹ 전체 보기</button><p class="skyhint" id="skyhint">신수나 별자리를 누르면 크게 볼 수 있어요</p><div id="skypop"></div></div>';
 const w=document.getElementById('skyw');w.addEventListener('click',skyClick);document.documentElement.classList.add('dgon');addEventListener('resize',skyLayout);addEventListener('keydown',skyKey);
 skyLayout();SKYV.T0=performance.now();SKYV.raf=requestAnimationFrame(skyLoop);}
function skyClose(){cancelAnimationFrame(SKYV.raf);SKYV.on=0;removeEventListener('resize',skyLayout);removeEventListener('keydown',skyKey);document.documentElement.classList.remove('dgon');closeLayer();}
function skyKey(e){if(e.key==='Escape'){if(SKYV.pop>=0)skyPop(-1);else if(SKYV.foc)skyZoom(null);else skyClose();}}
/* --- 배치 --- */
function skyLayout(){const c=document.getElementById('skyc');if(!c)return;const W=innerWidth,H=innerHeight,d=Math.min(2,devicePixelRatio||1);c.width=Math.round(W*d);c.height=Math.round(H*d);SKYV.W=W;SKYV.H=H;SKYV.dpr=d;
 const mob=W<760,top=mob?92:70,S=Math.min(W*.97,H-top-(mob?24:20)),C=[W/2,top+S/2],R=S*.43;const P=(a,r)=>[C[0]+Math.cos(a*Math.PI/180)*r,C[1]+Math.sin(a*Math.PI/180)*r];
 const L={S,C,R,P,mob,cons:[]};
 SKY_M.forEach((m,i)=>{const q=SKY_Q[m[2]],j=i%7,a0=q.a0+j*90/7,w=90/7;const pts=m[5].map(([u,v])=>P(a0+w*(.12+.76*u),R*(.47+.37*v)));L.cons.push({i,q,k:m[2],a0,w,pts,lines:m[6],ph:(i*2.399)%6.28});});
 const all=[];L.cons.forEach(o=>o.pts.forEach(p=>all.push(p)));L.cons.forEach(o=>{o.nd=o.pts.map(p=>{let m=1e9;for(const q of all){if(q===p)continue;const d=Math.hypot(q[0]-p[0],q[1]-p[1]);if(d<m)m=d;}return m;});});
 const tw=[];let s=99;const rr=()=>{s=(s*16807)%2147483647;return s/2147483647;};for(let i=0;i<160;i++)tw.push([rr()*W,rr()*H,rr(),rr()*6.28]);L.tw=tw;SKYV.L=L;
 if(SKYV.foc)skyCamAt(1,SKYV.foc);else skyCamAt(0,null);}
const skyEz=k=>k<=0?0:k>=1?1:k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
function skyCamAt(k,qk){const L=SKYV.L,cam=SKYV.cam,e=skyEz(k);if(!qk){Object.assign(cam,{z:1,rot:0,fx:0,fy:0,d:0,foc:null,sx:L.C[0],sy:L.C[1]});return;}
 const q=SKY_Q[qk],R=L.R,W=SKYV.W,H=SKYV.H,mid=q.a0+45,tgt=L.mob?180:90,rot=(tgt-mid)*Math.PI/180;
 const fx=Math.cos(mid*Math.PI/180)*R*.66,fy=Math.sin(mid*Math.PI/180)*R*.66;
 const Zt=L.mob?Math.min(W*.96/(R*.78),(H-170)/(R*1.55)):Math.min((W-60)/(R*1.6),(H-150)/(R*.82));
 Object.assign(cam,{z:1+(Zt-1)*e,rot:rot*e,fx:fx*e,fy:fy*e,d:e,foc:qk,sx:L.C[0]+(W/2-L.C[0])*e,sy:L.C[1]+((L.mob?H*.53:H*.57)-L.C[1])*e});}
function skyT(p){const L=SKYV.L,c=SKYV.cam,co=Math.cos(c.rot),si=Math.sin(c.rot),dx=p[0]-L.C[0]-c.fx,dy=p[1]-L.C[1]-c.fy;return[c.sx+c.z*(dx*co-dy*si),c.sy+c.z*(dx*si+dy*co)];}
function skyInv(p){const L=SKYV.L,c=SKYV.cam,co=Math.cos(-c.rot),si=Math.sin(-c.rot),dx=(p[0]-c.sx)/c.z,dy=(p[1]-c.sy)/c.z;return[L.C[0]+c.fx+dx*co-dy*si,L.C[1]+c.fy+dx*si+dy*co];}
function skyZoom(qk){const from=SKYV.foc;SKYV.foc=qk;SKYV.anim={t:0,dur:1.1,to:qk,from};SFX.play(qk?'whoosh':'tap');skyHud();}
function skyHud(){const hd=document.getElementById('skyhd'),bk=document.querySelector('.skyback'),hint=document.getElementById('skyhint');if(!hd)return;const qk=SKYV.foc;
 if(qk){const q=SKY_Q[qk],n=skyCnt(qk);hd.innerHTML='<b class="serif" style="--c:'+q.col.join(',')+'">'+q.han+'</b><span>'+q.dir+' '+q.ko+' · '+(n>=7?'깨어남':'별자리 '+n+' / 7')+'</span>';}
 hd.classList.toggle('on',!!qk);bk.hidden=!qk;hint.textContent=qk?'별자리를 누르면 칠전사를 볼 수 있어요':'신수나 별자리를 누르면 크게 볼 수 있어요';}
/* --- 누르기 --- */
function skyClick(e){const b=e.target.closest('[data-skyb]');e.stopPropagation();
 if(b){const a=b.dataset.skyb;SFX.play('tap');if(a==='close')return skyClose();if(a==='back')return skyZoom(null);if(a==='popx')return skyPop(-1);return;}
 if(SKYV.pop>=0){if(!e.target.closest('.skypc'))skyPop(-1);return;}
 if(e.target.id!=='skyc'||SKYV.anim)return;const L=SKYV.L,w=skyInv([e.clientX,e.clientY]),dx=w[0]-L.C[0],dy=w[1]-L.C[1],r=Math.hypot(dx,dy);let a=Math.atan2(dy,dx)*180/Math.PI;if(a<0)a+=360;
 // 가운데 신수 문장
 for(const k in SKY_Q){const q=SKY_Q[k],m=L.P(q.a0+45,L.R*.245);if(Math.hypot(w[0]-m[0],w[1]-m[1])<L.S*.075){if(!SKYV.foc)skyZoom(k);else if(SKYV.foc!==k)skyZoom(null);return;}}
 if(r<L.R*.4||r>L.R*1.02)return;let i=-1;SKY_M.forEach((m,ii)=>{const o=L.cons[ii];let d=a-o.a0;if(d<0)d+=360;if(d>=0&&d<o.w)i=ii;});if(i<0)return;const qk=SKY_M[i][2];
 if(!SKYV.foc)return skyZoom(qk);if(SKYV.foc!==qk)return skyZoom(null);skyPop(i);}
function skyPop(i){SKYV.pop=i;const el=document.getElementById('skypop');if(!el)return;if(i<0){el.innerHTML='';return;}
 const m=SKY_M[i],q=SKY_Q[m[2]],got=skyGot(i),no=m[3],nm=NAMES[no]||'',sp=nm.split('·'),j=i%7;SFX.play(got?'magic':'tap');
 el.innerHTML='<div class="skypb"><div class="skypc'+(got?'':' dark')+'" style="--c:'+q.col.join(',')+'"><div class="skyhan">'+m[0]+'</div><div class="skymn">'+m[1]+'수 · '+q.dir+' '+q.ko+'의 '+['첫','둘','셋','넷','다섯','여섯','일곱'][j]+'째 별자리</div>'+
  '<div class="skyimg"><img class="px" src="'+img(no)+'" alt=""></div><small>'+(got?esc(sp[0]):q.ko+'칠전사')+'</small><h3 class="serif">'+(got?esc(sp[1]||nm):'???')+'</h3><p>'+m[4]+'</p>'+
  '<span class="skytag">'+(got?'✦ 빛나는 중':'아직 어두운 별자리')+'</span><button class="skybtn skypx" data-skyb="popx" aria-label="닫기">✕</button></div></div>';}
/* --- 그리기 --- */
function skyRing(x,O,r,rot){x.save();x.translate(O[0],O[1]);x.rotate(rot);
 const g=x.createLinearGradient(-r,-r,r,r);g.addColorStop(0,'#fff0c0');g.addColorStop(.35,'#d6a64a');g.addColorStop(.6,'#8a5a1e');g.addColorStop(1,'#f2d48a');
 x.strokeStyle=g;x.lineWidth=Math.max(3,r*.016);x.beginPath();x.arc(0,0,r+x.lineWidth/2,0,7);x.stroke();x.lineWidth=1.2;x.beginPath();x.arc(0,0,r+Math.max(3,r*.016)+5,0,7);x.stroke();
 x.strokeStyle='rgba(240,210,140,.55)';for(let i=0;i<112;i++){const a=i/112*6.283,l=i%4?3:7,r0=r+Math.max(3,r*.016)+6;x.lineWidth=i%4?1:1.5;x.beginPath();x.moveTo(Math.cos(a)*r0,Math.sin(a)*r0);x.lineTo(Math.cos(a)*(r0+l),Math.sin(a)*(r0+l));x.stroke();}
 const orn=skyI('orn');for(let i=0;i<4;i++){const a=Math.PI/4+i*Math.PI/2,sz=Math.max(46,r*.2);x.save();x.rotate(a);x.translate(r+Math.max(3,r*.016)/2,0);x.rotate(Math.PI/2);
  if(orn)x.drawImage(orn,-sz/2,-sz*.74,sz,sz);else{x.fillStyle=g;x.beginPath();x.moveTo(0,-sz*.32);x.lineTo(sz*.2,0);x.lineTo(0,sz*.32);x.lineTo(-sz*.2,0);x.closePath();x.fill();x.strokeStyle='#5a3a10';x.lineWidth=1;x.stroke();x.fillStyle='#fff3c8';x.beginPath();x.arc(0,0,sz*.06,0,7);x.fill();}x.restore();}
 x.restore();}
const SKYS={};
function skyStar(col){const k='s'+col;if(SKYS[k])return SKYS[k];const im=skyI('star');if(!im)return null;const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d');
 x.drawImage(im,0,0,256,256);x.globalCompositeOperation='source-atop';x.fillStyle='rgba('+col+',.75)';x.fillRect(0,0,256,256);x.globalCompositeOperation='lighter';x.globalAlpha=.7;x.drawImage(im,0,0,256,256);return SKYS[k]=c;}
function skyLoop(now){if(!SKYV.on||!document.getElementById('skyc'))return;SKYV.raf=requestAnimationFrame(skyLoop);const t=(now-SKYV.T0)/1000;
 const dt=Math.min(.05,(now-(SKYV.last||now))/1000);SKYV.last=now;if(SKYV.anim){const A=SKYV.anim;A.t+=dt||1/60;let k=Math.min(1,A.t/A.dur);if(A.to)skyCamAt(k,A.to);else skyCamAt(1-k,A.from);if(k>=1){SKYV.anim=null;if(!A.to)skyCamAt(0,null);}}
 skyDraw(t);}
function skyDraw(t){const cv=document.getElementById('skyc'),x=cv.getContext('2d'),L=SKYV.L,cam=SKYV.cam,W=SKYV.W,H=SKYV.H,{S,C,R,P}=L,D=cam.d,foc=cam.foc,rad=a=>a*Math.PI/180,Z=cam.z,O=skyT(C),rot=cam.rot;
 x.setTransform(SKYV.dpr,0,0,SKYV.dpr,0,0);x.clearRect(0,0,W,H);
 for(const s of L.tw){const tw=.5+.5*Math.sin(t*(1+s[2]*2.4)+s[3]);x.fillStyle='rgba(255,255,255,'+(.08+.45*s[2]*tw)+')';const z=s[2]>.9?2:1;x.fillRect(s[0],s[1],z,z);}
 const dim=k=>foc&&k!==foc?1-.72*D:1,done=k=>skyCnt(k)>=7;
 // 방위 바탕
 for(const k in SKY_Q){const q=SKY_Q[k];x.save();x.globalAlpha=dim(k);x.beginPath();x.moveTo(O[0],O[1]);x.arc(O[0],O[1],R*Z,rad(q.a0)+rot,rad(q.a0+90)+rot);x.closePath();const g=x.createRadialGradient(O[0],O[1],R*.4*Z,O[0],O[1],R*Z);const pa=done(k)?.16+.04*Math.sin(t*1.2):.05;g.addColorStop(0,'rgba('+q.col+','+pa*.3+')');g.addColorStop(1,'rgba('+q.col+','+pa+')');x.fillStyle=g;x.fill();x.restore();}
 x.save();x.beginPath();x.arc(O[0],O[1],R*Z,0,7);x.fillStyle='rgba(4,8,20,.28)';x.fill();x.restore();
 // 신수 실루엣
 for(const k in SKY_Q){const q=SKY_Q[k],im=skyI('sil_'+k);if(!im)continue;const[cx,cy]=skyT(P(q.a0+45,R*.66)),sz=R*.82*Z*(foc===k?1+.15*D:1),ar=im.height/im.width;x.save();x.globalAlpha=(done(k)?.42+.2*(foc===k?D:0):.14)*dim(k)*(1+.06*Math.sin(t*.7));x.drawImage(im,cx-sz/2,cy-sz*ar/2,sz,sz*ar);x.restore();}
 // 고리·칸
 x.lineWidth=1;[[R*.87,.3],[R*.42,.35],[R*.39,.18]].forEach(([r,a])=>{x.strokeStyle='rgba(210,225,235,'+a+')';x.beginPath();x.arc(O[0],O[1],r*Z,0,7);x.stroke();});
 L.cons.forEach(o=>{const j=o.i%7,a=skyT(P(o.a0,R*.42)),b=skyT(P(o.a0,R));x.strokeStyle=j===0?'rgba(240,210,140,.55)':'rgba(210,225,235,.12)';x.lineWidth=j===0?1.5:1;x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke();});
 skyRing(x,O,R*Z,rot);
 // 별자리
 const ds=skyI('star_dim');
 L.cons.forEach(o=>{const q=o.q,got=skyGot(o.i),pts=o.pts.map(skyT),col=q.col.join(','),bz=foc===o.k?D:0;x.save();x.globalAlpha=dim(o.k);
  if(got){x.save();x.shadowColor='rgba('+col+',.9)';x.shadowBlur=5+6*bz;x.strokeStyle='rgba('+q.col.map(v=>Math.min(255,v+30)).join(',')+','+(.55+.15*bz)+')';x.lineWidth=1+1.3*bz;o.lines.forEach(l=>{x.beginPath();l.forEach((n,k)=>k?x.lineTo(pts[n][0],pts[n][1]):x.moveTo(pts[n][0],pts[n][1]));x.stroke();});x.restore();
   const sp=skyStar(col);pts.forEach((p,k)=>{const ph=o.ph+k*1.9,tw=.5+.5*Math.sin(t*(1.3+(k%3)*.4)+ph),s=Math.min(S*(.02+.04*bz)*(k===0?1.15:1),o.nd[k]*Z*1.15)*(.92+.12*tw);x.save();x.globalCompositeOperation='lighter';x.translate(p[0],p[1]);x.rotate(ph+t*(k%2?.16:-.12));x.globalAlpha=(.55+.25*tw)*dim(o.k);
    if(sp){x.drawImage(sp,-s/2,-s/2,s,s);x.rotate(Math.PI/4);x.globalAlpha=.22*tw*dim(o.k);x.drawImage(sp,-s*.3,-s*.3,s*.6,s*.6);}else{x.fillStyle='#fff';x.beginPath();x.arc(0,0,2+2*bz,0,7);x.fill();}x.restore();});}
  else{x.save();x.strokeStyle='rgba(140,155,175,.28)';x.setLineDash([3,4]);x.lineWidth=1;o.lines.forEach(l=>{x.beginPath();l.forEach((n,k)=>k?x.lineTo(pts[n][0],pts[n][1]):x.moveTo(pts[n][0],pts[n][1]));x.stroke();});x.restore();
   pts.forEach((p,k)=>{const tw=.5+.5*Math.sin(t*1.1+o.ph+k*2),s=Math.min(S*(.02+.025*bz),o.nd[k]*Z*1.1);x.save();x.globalAlpha=(.45+.3*tw)*dim(o.k);x.translate(p[0],p[1]);x.rotate(o.ph+k+t*.08);if(ds)x.drawImage(ds,-s/2,-s/2,s,s);else{x.fillStyle='rgba(150,165,185,.7)';x.beginPath();x.arc(0,0,1.8,0,7);x.fill();}x.restore();});}
  const m=SKY_M[o.i],[lx,ly]=skyT(P(o.a0+o.w/2,R*.935)),fs=S*(.03+.02*bz);x.textAlign='center';x.textBaseline='middle';x.font='700 '+Math.round(fs)+'px "Noto Serif KR","Noto Serif CJK KR",serif';
  if(got){x.shadowColor='rgba('+col+',1)';x.shadowBlur=10;x.fillStyle='#fff6dc';}else{x.shadowBlur=0;x.fillStyle='rgba(150,165,185,.45)';}
  x.fillText(m[0],lx,ly-fs*.22);x.shadowBlur=0;x.font=Math.round(fs*.55)+'px sans-serif';x.fillStyle=got?'rgba(225,240,240,.85)':'rgba(150,165,185,.4)';x.fillText(m[1]+(bz>.5?'수':''),lx,ly+fs*.68);x.restore();});
 // 가운데
 const cg=x.createRadialGradient(O[0],O[1],0,O[0],O[1],R*.39*Z);cg.addColorStop(0,'rgba(30,50,80,.45)');cg.addColorStop(1,'rgba(8,12,28,.35)');x.fillStyle=cg;x.beginPath();x.arc(O[0],O[1],R*.39*Z,0,7);x.fill();
 const all=skyCnt()>=28,ps=skyStar(all?'255,226,150':'160,170,190');if(ps){const s=S*(all?.14:.05)*(1+.08*Math.sin(t*1.4));x.save();x.globalCompositeOperation='lighter';x.globalAlpha=all?1:.5;x.translate(O[0],O[1]);x.rotate(t*.05);x.drawImage(ps,-s/2,-s/2,s,s);x.restore();}
 for(const k in SKY_Q){const q=SKY_Q[k],on=done(k),im=skyI('md_'+k+(on?'_on':'_off')),[mx,my]=skyT(P(q.a0+45,R*.245)),rr=S*.078*(1+.4*(foc===k?D:0));x.save();x.globalAlpha=dim(k);
  if(on){const g=x.createRadialGradient(mx,my,rr*.5,mx,my,rr*1.5);g.addColorStop(0,'rgba('+q.col+','+(.35+.12*Math.sin(t*1.5))+')');g.addColorStop(1,'rgba('+q.col+',0)');x.fillStyle=g;x.beginPath();x.arc(mx,my,rr*1.5,0,7);x.fill();}
  if(im)x.drawImage(im,mx-rr,my-rr,rr*2,rr*2);else{x.fillStyle='rgba(40,50,70,.8)';x.beginPath();x.arc(mx,my,rr*.8,0,7);x.fill();x.font='700 '+Math.round(rr*.8)+'px serif';x.fillStyle=on?'#ffe7a8':'#778';x.textAlign='center';x.textBaseline='middle';x.fillText(q.han[1],mx,my);}x.restore();}
 x.save();x.globalAlpha=1-D;[['東',180],['北',270],['西',0],['南',90]].forEach(([tx,a])=>{const[px,py]=skyT(P(a,R+S*.058));x.font='700 '+Math.round(S*.026)+'px "Noto Serif KR","Noto Serif CJK KR",serif';x.fillStyle='rgba(255,231,168,.8)';x.textAlign='center';x.textBaseline='middle';x.fillText(tx,px,py);});x.restore();}
document.addEventListener('click',e=>{const t=e.target.closest('[data-sky]');if(!t)return;e.stopPropagation();SFX.play('tap');if(t.dataset.sky==='open')skyOpen();},true);
if(/[?&](test|mock)/.test(location.search))window.__SKY={SKYV,skyOpen,skyClose,skyZoom,skyPop,skyCnt,SKY_M,skyDraw,skyCamAt,skyT,acc:()=>acc};
/* ===== 복권 (일일 복권 · 주간 복권) · 그림: i/lt/ ===== */
const LT_LINES=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
// 화살표: [줄 번호, 위치(가로 칸, 세로 칸 · -1은 판 바깥), 회전]
const LT_ARW=[[6,-1,-1,-45],[3,0,-1,0],[4,1,-1,0],[5,2,-1,0],[7,3,-1,45],[0,-1,0,-90],[1,-1,1,-90],[2,-1,2,-90]];
const LT_PAY0=[40,1,8,4,1,3,2,1,1,2,1,2,2,1,3,10,2,15,30]; // 합계 6~24
function ltDef(){return{open:0,dCost:3,dPlays:3,pay:LT_PAY0.slice(),wPrice:[10,5,5],wMax:3,prize:[500,100,20,5],bN:[20,40,70,100],bP:[10,20,30,50],early:10,earlyMin:60,claimDays:7,carry:0,carryMax:2000,jack:0,round:1};}
function ltCfg(){const c=Object.assign(ltDef(),(cfg&&cfg.lt)||{});const d=ltDef();['pay','wPrice','prize','bN','bP'].forEach(k=>{if(!Array.isArray(c[k])||c[k].length!==d[k].length)c[k]=d[k];c[k]=c[k].map(v=>Math.max(0,+v||0));});
 ['dCost','dPlays','wMax','early','earlyMin','claimDays','carry','carryMax','jack','round'].forEach(k=>{c[k]=Math.max(0,+c[k]||0);});c.round=Math.max(1,c.round);c.wMax=Math.min(3,c.wMax||3);return c;}
function ltOpen(){return !!(ltCfg().open||(typeof TEST!=='undefined'&&TEST));}
const LTV={tab:'d',sel:-1,rounds:{},buyers:{},pick:['','','',''],busy:0,fx:''};
function ltAcc(){acc.lt=acc.lt||{};const L=acc.lt;if(!Array.isArray(L.wh))L.wh=[];return L;}
function ltPay(s){const C=ltCfg();return C.pay[s-6]||0;}
function ltLeft(){const d=accDaily();return Math.max(0,ltCfg().dPlays-(d.lt||0));}
function ltSum(b,l){return LT_LINES[l].reduce((a,i)=>a+b[i],0);}
function ltI(k,cls){return '<img class="px '+(cls||'')+'" src="i/lt/lt_'+k+'.png?'+IMG_V+'" alt="" onerror="this.style.display=\'none\'">';}

/* --- 화면 --- */
function vLotto(){if(!ltOpen())return krClosed('복권');const tab=LTV.tab;
 return '<section class="card ltcard"><div class="lthero">'+'<img class="px ltbn" src="i/lt/lt_banner.jpg?'+IMG_V+'" alt="">'+'<div class="lthero-t"><h2 class="serif">선계 복권</h2><p>일일 복권으로 줄을 맞히고, 주간 복권으로 큰 꿈을 꿔 보세요</p></div>'+ltI('vendor','ltvd')+'</div>'+
 '<div class="krtabs lttabs">'+[['d','일일 복권'],['w','주간 복권']].map(([k,n])=>'<button class="krtab'+(tab===k?' on':'')+'" data-lt="tab" data-t="'+k+'">'+n+'</button>').join('')+'</div>'+
 (tab==='d'?ltDaily():ltWeekly())+'</section>';}
function ltDaily(){const C=ltCfg(),L=ltAcc(),cur=L.cur,left=ltLeft();let board='',ctrl='';
 if(cur){const n=cur.r.length,done=cur.ln!=null&&cur.ln>=0&&cur.end;
  const cells=cur.b.map((v,i)=>{const op=cur.r.includes(i)||done,inL=(done||LTV.sel>=0)&&LT_LINES[done?cur.ln:LTV.sel]&&LT_LINES[done?cur.ln:LTV.sel].includes(i);
   return '<button class="ltc'+(op?' op':'')+(inL?' in':'')+'" data-lt="cell" data-i="'+i+'" style="grid-column:'+(i%3+2)+';grid-row:'+(Math.floor(i/3)+2)+'"'+(op||n>=4||done?' disabled':'')+'>'+ltI(op?'cell_open':'cell','ltcb')+(op?'<b>'+v+'</b>':'')+(inL?ltI('cell_pick','ltcp'):'')+'</button>';}).join('');
  const arw=LT_ARW.map(([l,x,y,r])=>{const on=(done?cur.ln:LTV.sel)===l;return '<button class="lta'+(on?' on':'')+'" data-lt="line" data-l="'+l+'" style="grid-column:'+(x+2)+';grid-row:'+(y+2)+';--r:'+r+'deg"'+(n<4||done?' disabled':'')+' aria-label="줄 '+(l+1)+'">'+ltI(on?'arrow_on':'arrow')+'<span class="fb">▼</span></button>';}).join('');
  board='<div class="ltbw"><div class="ltboard">'+ltI('daily_board','ltbbg')+'<div class="ltgrid">'+arw+cells+'</div>'+(LTV.fx?'<div class="ltfx '+LTV.fx+'"></div>':'')+'</div></div>';
  if(done){const s=ltSum(cur.b,cur.ln);ctrl='<div class="ltres"><span>합계 <b>'+s+'</b></span><span>보상 <b>환수코인 '+ltPay(s)+'</b></span></div><button class="btn teal ltgo" data-lt="next">확인</button>';}
  else ctrl='<p class="ltmsg">'+(n<4?'칸을 <b>'+(4-n)+'번</b> 더 긁어 보세요.':'줄을 하나 고르세요. 화살표를 누르면 줄이 정해져요.')+'</p>'+(n>=4?'<button class="btn teal ltgo" data-lt="decide"'+(LTV.sel<0?' disabled':'')+'>결정</button>':'');}
 else board='<div class="ltbw"><div class="ltboard idle">'+ltI('daily_board','ltbbg')+'<div class="ltidle">'+ltI('vendor','ltvd2')+'<p>1~9가 숨은 9칸 중 1칸이 보여요.<br>3칸을 더 긁고, 가로·세로·대각선 한 줄을 골라요.</p></div></div></div>';
 const pay='<div class="ltpay"><h3 class="serif">보상표 <small>줄 합계 → 환수코인</small></h3><div class="ltpt">'+C.pay.map((v,i)=>{const s=i+6,hl=cur&&cur.end&&ltSum(cur.b,cur.ln)===s;return '<div class="'+(hl?'hl':'')+(v>=10?' big':'')+'"><span>'+s+'</span><b>'+v+'</b></div>';}).join('')+'</div></div>';
 return '<div class="ltd"><div class="ltl">'+board+'<div class="ltctl">'+(cur?ctrl:'<button class="btn teal ltgo" data-lt="buy"'+(left&&acc.coins>=C.dCost?'':' disabled')+'>복권 사기 · 환수코인 '+C.dCost+'</button>')+'<p class="ltnote">오늘 남은 횟수 <b>'+left+'</b> / '+C.dPlays+' · 매일 0시 초기화 · 보유 환수코인 '+fmt(acc.coins||0)+'</p></div></div>'+pay+'</div>';}
function ltBuy(){const C=ltCfg(),L=ltAcc();if(L.cur)return;if(!ltLeft())return toast('오늘 복권을 다 샀어요.');if((acc.coins||0)<C.dCost)return toast('환수코인이 부족해요.');
 acc.coins-=C.dCost;accDaily().lt=(accDaily().lt||0)+1;const b=[1,2,3,4,5,6,7,8,9];for(let i=8;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}
 L.cur={b,r:[Math.floor(Math.random()*9)],ln:-1,end:0};LTV.sel=-1;LTV.fx='';save();SFX.play('coins');render();}
function ltCell(i){const L=ltAcc(),c=L.cur;if(!c||c.end||c.r.includes(i)||c.r.length>=4)return;c.r.push(i);save();SFX.play('tap');LTV.fx='scr s'+i;render();setTimeout(()=>{LTV.fx='';},700);}
function ltDecide(){const L=ltAcc(),c=L.cur;if(!c||c.end||c.r.length<4||LTV.sel<0)return;c.ln=LTV.sel;c.end=1;const s=ltSum(c.b,c.ln),p=ltPay(s);acc.coins=(acc.coins||0)+p;L.dWon=(L.dWon||0)+p;save();
 LTV.fx=p>=10?'win':'';SFX.play(p>=10?'fanfare':p>=3?'coins':'ok');if(p>=10)toast('대박! 합계 '+s+' · 환수코인 '+p+'!');render();}
function ltNext(){const L=ltAcc();L.cur=null;LTV.sel=-1;LTV.fx='';save();render();}

/* --- 주간 복권 --- */
async function ltRound(r,force){if(!force&&LTV.rounds[r]&&Date.now()-(LTV.rounds[r]._t||0)<60000)return LTV.rounds[r];
 try{const d=await db.doc('ltweek/'+r).get();LTV.rounds[r]=d.exists?Object.assign(d.data(),{_t:Date.now()}):{none:1,_t:Date.now()};}catch(e){LTV.rounds[r]={err:1,_t:Date.now()};}return LTV.rounds[r];}
async function ltBuyers(r){try{const s=await db.collection('ltweek/'+r+'/t').get();LTV.buyers[r]=s.size;}catch(e){LTV.buyers[r]=null;}return LTV.buyers[r];}
function ltRank(t,num){if(!num)return 0;let m=0;for(let i=3;i>=0;i--){if(t[i]===num[i])m++;else break;}return m===4?1:m===3?2:m===2?3:m===1?4:0;}
function ltPrizeOf(R,rank){return rank&&R.pz?R.pz[rank-1]||0:0;}
function ltWeekly(){const C=ltCfg(),L=ltAcc(),r=C.round,mine=L.w&&L.w.r===r?L.w.t:[],n=mine.length,cost=n<C.wMax?C.wPrice[n]:0;
 if(LTV.buyers[r]===undefined){LTV.buyers[r]=null;ltBuyers(r).then(()=>{if(view==='lotto'&&LTV.tab==='w')render();});}
 const bn=LTV.buyers[r],bp=ltBonusPct(bn||0);
 const tk=mine.map(t=>'<div class="ltt">'+ltI('week_ticket','lttbg')+'<div class="lttn">'+t.split('').map(d=>'<span>'+ltI('digit')+'<b>'+d+'</b></span>').join('')+'</div></div>').join('');
 const pickRow=n<C.wMax?'<div class="ltpick"><div class="ltt">'+ltI('week_ticket','lttbg')+'<div class="lttn">'+[0,1,2,3].map(i=>'<span>'+ltI('digit')+'<input inputmode="numeric" maxlength="1" class="ltdg" data-i="'+i+'" value="'+(LTV.pick[i]||'')+'" aria-label="'+(i+1)+'번째 숫자"></span>').join('')+'</div></div>'+
  '<div class="ltpb"><button class="btn soft sm" data-lt="rand">무작위 번호</button><button class="btn teal" data-lt="wbuy">'+(n+1)+'번째 장 사기 · 환수코인 '+cost+'</button></div></div>':'<p class="ltmsg">이번 회차 복권을 다 샀어요 ('+C.wMax+'장).</p>';
 const hist=L.wh.filter(h=>h.r<r).slice(-6).reverse().map(h=>ltHistRow(h)).join('');
 return '<div class="ltw"><div class="ltwh"><div class="ltdrum" aria-hidden="true"></div><h3 class="serif">제 '+r+'회 주간 복권</h3><p>4자리 번호를 골라 최대 '+C.wMax+'장까지 살 수 있어요 (1장 '+C.wPrice[0]+' · 2장째 '+C.wPrice[1]+' · 3장째 '+C.wPrice[2]+' 환수코인).<br><b>추첨 · 발표 시간은 공지를 확인해 주세요.</b></p>'+
  '<div class="ltwstat"><span>이번 회차 구입자 <b>'+(bn==null?'…':bn+'명')+'</b></span><span>구입자 보너스 <b>+'+bp+'%</b></span>'+(C.jack?'<span>1등 이월 <b>+'+fmt(C.jack)+'</b></span>':'')+'</div></div>'+
  (tk?'<h3 class="krh3 serif">내 복권</h3><div class="ltts">'+tk+'</div>':'')+pickRow+
  '<details class="krrules ltrule" open><summary>당첨 기준과 보상</summary><div class="ltrk">'+[1,2,3,4].map(k=>'<div>'+ltI('rank_'+k,'ltrkimg')+'<b>'+k+'등</b><small>'+['4자리 모두','끝 3자리','끝 2자리','끝 1자리'][k-1]+' 일치</small><em>'+fmt(C.prize[k-1]+(k===1?C.jack:0))+'</em></div>').join('')+'</div>'+
  '<p>당첨번호와 <b>일의 자리부터</b> 차례로 비교해요. 구입자 보너스: '+C.bN.map((v,i)=>v+'명↑ +'+C.bP[i]+'%').join(' · ')+'. 추첨 뒤 '+C.earlyMin+'분 안에 받으면 +'+C.early+'% 더! 교환 기간은 추첨 후 '+C.claimDays+'일이에요.</p></details>'+
  (hist?'<h3 class="krh3 serif">지난 회차</h3><div class="lthist">'+hist+'</div>':'')+'</div>';}
function ltBonusPct(n){const C=ltCfg();let p=0;C.bN.forEach((v,i)=>{if(v&&n>=v)p=Math.max(p,C.bP[i]);});return p;}
function ltHistRow(h){const R=LTV.rounds[h.r];if(R===undefined){LTV.rounds[h.r]=null;ltRound(h.r).then(()=>{if(view==='lotto'&&LTV.tab==='w')render();});}
 if(!R||R.none)return '<div class="lth"><b>제 '+h.r+'회</b><span>'+h.t.join(' · ')+'</span><em>추첨 전</em></div>';if(R.err)return '<div class="lth"><b>제 '+h.r+'회</b><em>불러오지 못했어요</em></div>';
 const C=ltCfg(),exp=Date.now()>R.at+C.claimDays*86400000,early=Date.now()-R.at<C.earlyMin*60000,ranks=h.t.map(t=>ltRank(t,R.num)),sum=ranks.reduce((a,k)=>a+ltPrizeOf(R,k),0),tot=Math.round(sum*(early?1+C.early/100:1));
 return '<div class="lth"><b>제 '+h.r+'회</b><span>당첨번호 <i class="ltnum">'+R.num+'</i></span><span>'+h.t.map((t,i)=>t+(ranks[i]?' <u>'+ranks[i]+'등</u>':'')).join(' · ')+'</span>'+
  (h.got?'<em>받음 +'+h.got+'</em>':!sum?'<em>당첨 없음</em>':exp?'<em>기간 지남</em>':'<button class="btn teal sm" data-lt="claim" data-r="'+h.r+'">'+fmt(tot)+' 받기'+(early?' (조기 +'+C.early+'%)':'')+'</button>')+'</div>';}
async function ltWBuy(){const C=ltCfg(),L=ltAcc(),r=C.round;if(LTV.busy)return;if(!L.w||L.w.r!==r)L.w={r,t:[]};const n=L.w.t.length;if(n>=C.wMax)return;
 const num=LTV.pick.join('');if(!/^\d{4}$/.test(num))return toast('숫자 4자리를 모두 골라 주세요.');if(L.w.t.includes(num))return toast('이미 산 번호예요.');const cost=C.wPrice[n];if((acc.coins||0)<cost)return toast('환수코인이 부족해요.');
 LTV.busy=1;try{const R=await db.doc('ltweek/'+r).get();if(R.exists){LTV.busy=0;toast('이번 회차는 이미 추첨했어요. 새 회차를 기다려 주세요.');return;}
  const t=L.w.t.concat([num]);await db.doc('ltweek/'+r+'/t/'+acc.uid).set({uid:acc.uid,nick:acc.nick||acc.id,t,at:Date.now()});
  acc.coins-=cost;L.w.t=t;const h=L.wh.find(x=>x.r===r);if(h)h.t=t.slice();else L.wh.push({r,t:t.slice(),got:0});if(L.wh.length>12)L.wh=L.wh.slice(-12);LTV.pick=['','','',''];LTV.buyers[r]=undefined;save();SFX.play('coins');toast('제 '+r+'회 주간 복권 '+num+'번을 샀어요!');}
 catch(e){toast('구입하지 못했어요. 잠시 뒤 다시 해 주세요.');}LTV.busy=0;render();}
async function ltClaim(r){const L=ltAcc(),h=L.wh.find(x=>x.r===r);if(!h||h.got)return;const R=await ltRound(r,1),C=ltCfg();if(!R||R.none||R.err)return;if(Date.now()>R.at+C.claimDays*86400000)return toast('교환 기간이 지났어요.');
 const sum=h.t.reduce((a,t)=>a+ltPrizeOf(R,ltRank(t,R.num)),0);if(!sum)return;const early=Date.now()-R.at<C.earlyMin*60000,tot=Math.round(sum*(early?1+C.early/100:1));
 h.got=tot;acc.coins=(acc.coins||0)+tot;save();SFX.play('fanfare');LTV.fx='win';toast('주간 복권 당첨! 환수코인 +'+tot);render();setTimeout(()=>{LTV.fx='';},1200);}
document.addEventListener('input',e=>{const t=e.target;if(!t.classList||!t.classList.contains('ltdg'))return;t.value=t.value.replace(/\D/g,'').slice(-1);LTV.pick[+t.dataset.i]=t.value;if(t.value){const nx=document.querySelector('.ltdg[data-i="'+(+t.dataset.i+1)+'"]');if(nx)nx.focus();}});
document.addEventListener('click',e=>{const t=e.target.closest('[data-lt]');if(!t||t.disabled)return;e.stopPropagation();const a=t.dataset.lt;
 if(a==='tab'){LTV.tab=t.dataset.t;SFX.play('tap');return render();}if(a==='buy')return ltBuy();if(a==='cell')return ltCell(+t.dataset.i);
 if(a==='line'){LTV.sel=+t.dataset.l;SFX.play('tap');return render();}if(a==='decide')return ltDecide();if(a==='next')return ltNext();
 if(a==='rand'){LTV.pick=[0,1,2,3].map(()=>String(Math.floor(Math.random()*10)));SFX.play('tap');return render();}if(a==='wbuy')return ltWBuy();if(a==='claim')return ltClaim(+t.dataset.r);},true);

/* --- 운영자 --- */
function aLtCfg(){const C=ltCfg(),main=isMain(),r=C.round,n=(id,l,v,w)=>'<label class="f">'+l+'<input type="number" id="'+id+'" value="'+v+'" min="0" style="width:'+(w||70)+'px"></label>';
 if(AS.ltb!==r){AS.ltb=r;ltBuyers(r).then(()=>{if(MODE==='admin'&&AS.tab==='ltcfg')render();});}
 const past=[];for(let i=r-1;i>=Math.max(1,r-8);i--)past.push(i);past.forEach(i=>{if(LTV.rounds[i]===undefined){LTV.rounds[i]=null;ltRound(i).then(()=>{if(MODE==='admin'&&AS.tab==='ltcfg')render();});}});
 return '<div class="card adm"><h2>복권</h2>'+admOpenRow('lt',C.open)+
 '<h3 class="serif adh3">주간 복권 추첨 · 제 '+r+'회</h3><p class="muted">이번 회차 구입자 <b>'+(LTV.buyers[r]==null?'…':LTV.buyers[r]+'명')+'</b> · 구입자 보너스 +'+ltBonusPct(LTV.buyers[r]||0)+'% · 1등 이월 '+fmt(C.jack)+'</p>'+
 (main?'<div class="admrow"><label class="f">당첨번호 (비우면 무작위)<input id="ltNum" maxlength="4" inputmode="numeric" style="width:90px"></label><button class="btn red" data-x="ltDraw">제 '+r+'회 추첨하기</button></div><p class="muted">추첨하면 이번 회차 판매가 끝나고 제 '+(r+1)+'회 판매가 바로 시작돼요. 유저에게는 "발표 시간은 공지 확인"이라고 안내돼요.</p>':'')+
 '<table class="t"><tr><th>회차</th><th>당첨번호</th><th>추첨 시각</th><th>구입자</th><th>1등</th><th>2등</th><th>3등</th><th>4등</th></tr>'+past.map(i=>{const R=LTV.rounds[i];if(!R)return '<tr><td>'+i+'</td><td colspan="7">불러오는 중…</td></tr>';if(R.none||R.err)return '<tr><td>'+i+'</td><td colspan="7">기록 없음</td></tr>';
  return '<tr><td>'+i+'</td><td><b>'+R.num+'</b></td><td>'+new Date(R.at).toLocaleString('ko-KR')+'</td><td>'+(R.n||0)+'</td>'+[0,1,2,3].map(k=>'<td>'+((R.w||[])[k]||0)+'명 · '+fmt((R.pz||[])[k]||0)+'</td>').join('')+'</tr>';}).join('')+'</table>'+
 '<h3 class="serif adh3">일일 복권</h3><div class="admrow">'+n('ltDc','1회 비용',C.dCost)+n('ltDp','하루 횟수',C.dPlays)+'</div><div class="ltapay">'+C.pay.map((v,i)=>'<label class="f">합계 '+(i+6)+'<input type="number" id="ltP'+i+'" value="'+v+'" min="0" style="width:60px"></label>').join('')+'</div>'+
 '<h3 class="serif adh3">주간 복권</h3><div class="admrow">'+n('ltW0','1장 가격',C.wPrice[0])+n('ltW1','2장째',C.wPrice[1])+n('ltW2','3장째',C.wPrice[2])+n('ltWm','최대 장수(1~3)',C.wMax)+'</div>'+
 '<div class="admrow">'+[0,1,2,3].map(k=>n('ltZ'+k,(k+1)+'등 보상',C.prize[k],80)).join('')+'</div>'+
 '<div class="admrow">'+[0,1,2,3].map(k=>n('ltBn'+k,'보너스'+(k+1)+' 인원',C.bN[k])+n('ltBp'+k,'+%',C.bP[k],56)).join('')+'</div>'+
 '<div class="admrow">'+n('ltE','조기 교환 +%',C.early)+n('ltEm','조기 교환 시간(분)',C.earlyMin)+n('ltCd','교환 기간(일)',C.claimDays)+n('ltCa','1등 없을 때 이월',C.carry)+n('ltCm','이월 최대',C.carryMax,80)+n('ltJk','현재 이월액',C.jack,80)+'</div>'+
 '<p class="muted">이월: 1등이 없으면 다음 회차 1등 보상에 위 금액을 더해요 (0이면 이월 없음).</p>'+
 (main?'<div class="admrow"><button class="btn soft sm" data-x="ltDef">기본값</button><button class="btn teal sm" data-x="ltSave">저장</button></div>':'<p class="muted">보조 운영자는 볼 수만 있어요.</p>')+'</div>';}
MAIN_ONLY.add('ltSave');MAIN_ONLY.add('ltDraw');
Object.assign(AD,{
 ltDef(){const o=(cfg.lt&&cfg.lt.open)||0,r=ltCfg().round,j=ltCfg().jack;cfg.lt={open:o,round:r,jack:j};render();toast('기본값을 불러왔어요. [저장]을 눌러야 적용돼요.');},
 async ltSave(){const g=id=>Math.max(0,+document.getElementById(id).value||0),C=ltCfg();
  cfg.lt=Object.assign({},cfg.lt||{},{dCost:g('ltDc'),dPlays:g('ltDp'),pay:C.pay.map((_,i)=>g('ltP'+i)),wPrice:[0,1,2].map(i=>g('ltW'+i)),wMax:Math.max(1,Math.min(3,g('ltWm'))),prize:[0,1,2,3].map(k=>g('ltZ'+k)),
   bN:[0,1,2,3].map(k=>g('ltBn'+k)),bP:[0,1,2,3].map(k=>g('ltBp'+k)),early:g('ltE'),earlyMin:g('ltEm'),claimDays:Math.max(1,g('ltCd')),carry:g('ltCa'),carryMax:g('ltCm'),jack:g('ltJk'),round:C.round});await saveGlobal('복권 설정 변경');},
 async ltDraw(){const C=ltCfg(),r=C.round;let num=(document.getElementById('ltNum').value||'').trim();if(num&&!/^\d{4}$/.test(num))return toast('당첨번호는 숫자 4자리예요.');if(!num)num=String(Math.floor(Math.random()*10000)).padStart(4,'0');
  const ex=await db.doc('ltweek/'+r).get();if(ex.exists)return toast('이미 추첨한 회차예요.');if(!confirm('제 '+r+'회 당첨번호를 '+num+'(으)로 추첨할까요? 되돌릴 수 없어요.'))return;
  const s=await db.collection('ltweek/'+r+'/t').get(),w=[0,0,0,0];s.docs.forEach(d=>(d.data().t||[]).forEach(t=>{const k=ltRank(t,num);if(k)w[k-1]++;}));
  const bp=ltBonusPct(s.size),pz=C.prize.map((p,k)=>Math.round((p+(k===0?C.jack:0))*(1+bp/100)));
  await db.doc('ltweek/'+r).set({r,num,at:Date.now(),n:s.size,bp,pz,w});
  const jack=w[0]?0:Math.min(C.carryMax,C.jack+C.carry);cfg.lt=Object.assign({},cfg.lt||{},{round:r+1,jack});await saveGlobal('복권 제 '+r+'회 추첨 ('+num+')');
  log('복권 제 '+r+'회 추첨 '+num+' · 구입 '+s.size+'명 · 당첨 '+w.join('/'));LTV.rounds[r]=undefined;toast('제 '+r+'회 당첨번호 '+num);render();}});
if(/[?&](test|mock)/.test(location.search))window.__LT={LTV,ltBuy,ltCell,ltDecide,ltNext,ltAcc,ltCfg,ltRank,ltWBuy,ltClaim,go:v=>{view=v;render();}};
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
  giveEgg(e.kind==='yy'?146:0);SFX.play('egg');toast('알을 받았어요! 가방에 보관했어요. 가방에서 원하는 슬롯에 부화시켜 주세요.');await commit();}
 if(k==='coin'){const m=String(fd.get('code')).trim().match(/^(\d+)-(\d+)-(\d+)-(\d+)$/);if(!m)return toast('코드 형식이 아니에요. 예: 3-7-10-4821');const [id,n,c,chk]=m.slice(1).map(Number);if((id*37+n*53+c*71+1234)%9973!==chk)return toast('잘못된 코드예요.');if(acc.playerNo&&acc.playerNo!==id)return toast('본인 플레이어 번호의 코드가 아니에요.');if(n<=(acc.lastNonce||0))return toast('이미 사용한 코드예요.');acc.playerNo=id;acc.lastNonce=n;acc.coins+=c;SFX.play('coins');toast('환수코인 '+c+'개가 들어왔어요!');await commit();}
}finally{busy=false;}});
document.addEventListener('error',ev=>{const t=ev.target;if(t&&t.tagName==='IMG'&&!t.dataset.fb&&/\/(h|b)\//.test(t.src)){t.dataset.fb='1';t.src='i/q.png';}},true);
document.addEventListener('change',ev=>{if(ev.target&&ev.target.dataset&&ev.target.dataset.deco&&MODE==='player'&&acc){acc.deco=acc.deco||{};acc.deco[ev.target.dataset.deco]=ev.target.value;commit();setTimeout(decoMount,0);return;}if(ev.target&&ev.target.id==='bNo'&&MODE==='admin'){AS.bossNo=+ev.target.value;render();}});
document.addEventListener('click',async ev=>{const t=ev.target.closest('button,[data-close],input[type=checkbox],[data-vo],[data-vpet]');if(!t)return;const ds=t.dataset;if(t.tagName==='BUTTON'&&!ds.a2)SFX.play('tap');
 if(ds.close&&ev.target===t)return closeLayer();
 if(ds.view){view=ds.view;S.forgeSel=[];if(ds.visl){VS.isl=ds.visl;GEO=null;}if(ds.bagtab2)S.bag=ds.bagtab2;if(ds.shop)S.shop=ds.shop;if(view!=='village')setTimeout(islBgm,0);if(VS.place&&view!=='village')placeCancel();if(view==='pvp')PV.loaded=false;if(view==='boss')BV.loaded=false;if(view==='tower')TV.loaded=false;return render();}
 if(ds.batk!=null){BV.atk=+ds.batk;return render();}
 if(ds.bossgo)return bossAttack();
 if(ds.bossclaim)return bossClaim();
 if(ds.bossretry)return bossRetry();
 if(ds.tmode){S.tmode=ds.tmode;return render();}
 if(ds.errand!=null)return sendErrand(+ds.errand);
 if(ds.errfill)return errRefill();
 if(ds.bagopen!=null)return bagOpen(t);
 if(ds.bagall)return bagAll();
 if(ds.errack!=null){const q=acc.slots[+ds.errack];if(q){errClaim(q);S.resShow=null;SFX.play('coins');toast('심부름 보상을 받았어요!');return commit();}}
 if(ds.showres){const [k,i]=ds.showres.split(':');S.resShow={k,i:+i};SFX.play('click');return render();}
 if(ds.hatch)return hatch(ds.hatch);
 if(ds.atk!=null){PV.atk=ds.atk==='rep'?'rep':+ds.atk;return render();}
 if(ds.refight)return fight(ds.refight,true);if(ds.fight)return fight(ds.fight);
 if(ds.replay)return replay(ds.replay);
 if(ds.pvprefresh){PV.list=null;SO.users=null;render();loadUsers();return loadArena();}
 if(ds.sel!=null){sel=+ds.sel;selSpot=null;S.forgeSel=[];const q=acc.slots[sel];if(q&&(q.errandResult||q.result))S.resShow={k:q.errandResult?'err':'tr',i:sel};return render();}
 if(ds.spot!=null){selSpot=+ds.spot;return render();}
 if(ds.a){const a=ds.a;if(a==='feed'&&!ds.v)return feedMenu();if(a==='kimenu')return kiMenu();if(a==='susm')return susMenu();if(A[a])return A[a](ds.v);}
 if(ds.ack!=null){const q=acc.slots[+ds.ack];if(q){q.result=null;S.resShow=null;return commit();}}
 if(ds.a2==='att')return attModal(false);
 if(ds.a2==='msave')return msaveModal();
 if(ds.a2==='sfx'||ds.a2==='bgm'){SFX.toggle(ds.a2);return render();}
 if(ds.mclaim)return claimMail(ds.mclaim);
 if(ds.a2==='logout')return logout();
 if(ds.buy){const k=ds.buy,n=+ds.n,it=ITEMS[k],ad=accDaily();if(!it||!(it.p>0))return toast('상점에서 살 수 없는 아이템이에요.');if(it.daily&&(ad[k]||0)+n>it.daily)return toast('오늘은 더 살 수 없어요 (하루 '+it.daily+'개).');const wk=accWeekly();if(it.weekly&&(wk[k]||0)+n>it.weekly)return toast('이번 주에는 더 살 수 없어요 (주 '+it.weekly+'개).');if(acc.coins<it.p*n)return toast('환수코인이 부족해요.');acc.coins-=it.p*n;acc.inv[k]=(acc.inv[k]||0)+n;if(it.daily)ad[k]=(ad[k]||0)+n;if(it.weekly)wk[k]=(wk[k]||0)+n;SFX.play('buy');toast(it.n+' ×'+n+' 구매!');return commit();}
 if(ds.xmin!=null)return xmEnter(+ds.xmin);
 if(ds.xmgo!=null)return xmFight(+ds.xmgo);
 if(ds.xmpick)return twPick(ds.xmpick,xmState().run);
 if(ds.xmret)return xmRetreat();
 if(ds.xmbuy)return xmBuyTicket();
 if(ds.xmshop)return xmBuy(ds.xmshop);
 if(ds.xmtab){XV.tab=ds.xmtab;if(ds.xmtab==='rank')XV.rank=null;return render();}
 if(ds.xmreload){XV.rank=null;render();return xmLoadRank();}
 if(ds.decoopen)return decoModal();
 if(ds.twstart)return twStart();
 if(ds.twgo!=null)return twFight(+ds.twgo);
 if(ds.twpick)return twPick(ds.twpick);
 if(ds.twret)return twRetreat();
 if(ds.twticket)return twTicketUse();
 if(ds.twtab){TV.tab=ds.twtab;if(ds.twtab==='rank')loadTower();return render();}
 if(ds.twreload){TV.rank=null;render();return loadTower();}
 if(ds.gsr){S.gsr=ds.gsr;return render();}
 if(ds.gsp){const [sr,k]=ds.gsp.split(':');return gspModal(sr,+k);}
 if(ds.gmv){const [sr,k,i]=ds.gmv.split(':');return gspMove(sr,+k,+i);}
 if(ds.gsend!=null)return gspSend(+ds.gsend);
 if(ds.buyslot||ds.slotadd){if(acc.slots.length>=MAX_SLOTS)return toast('슬롯은 최대 '+MAX_SLOTS+'칸이에요.');
  if(ds.slotadd&&(acc.inv.sec_slot||0)>0){acc.inv.sec_slot--;addSlot();slotFx();sel=acc.slots.length-1;return commit();}
  const pr=slotPrice();if(acc.coins<pr)return toast('환수코인이 부족해요. ('+(acc.slots.length+1)+'번째 슬롯 '+pr+'환수코인)');
  return confirmBox('슬롯 추가',(acc.slots.length+1)+'번째 환수 슬롯을 '+pr+'환수코인에 열까요?',()=>{if(acc.coins<pr||acc.slots.length>=MAX_SLOTS)return;acc.coins-=pr;addSlot();SFX.play('buy');slotFx();commit();});}
 if(ds.buyegg){const wk=accWeekly();if(wk.egg>=SHOPX.eggWeek)return toast('이번 주에는 더 살 수 없어요 (주 '+SHOPX.eggWeek+'개).');if(acc.coins<SHOPX.egg)return toast('환수코인이 부족해요.');
  acc.coins-=SHOPX.egg;wk.egg++;giveEgg(0);SFX.play('egg');toast('환수 알을 샀어요! 가방에 보관했어요.');return commit();}
 if(ds.shop){S.shop=ds.shop;return render();}
 if(ds.shopcat){S.shopCat=ds.shopcat;return render();}
 if(ds.bagcat){S.bagCat=ds.bagcat;return render();}
 if(ds.bagtab){S.bag=ds.bagtab;view='bag';return render();}
 if(ds.gft){S.gft=ds.gft;return render();}
 if(ds.buyvil){vilInit();const vc=vilCap();if(vc>=VIL_CAPMAX)return toast('마을 한도가 최대예요.');const pr=VIL_EXP[Math.round((vc-VIL_CAP0)/5)];if(acc.coins<pr)return toast('환수코인이 부족해요 ('+pr+'환수코인).');
  return confirmBox('마을 확장','마을 환수 한도를 '+vc+' → '+(vc+5)+'마리로 늘릴까요? ('+pr+'환수코인)',()=>{if(acc.coins<pr)return;acc.coins-=pr;acc.vil.cap=vc+5;SFX.play('fanfare');toast('마을이 넓어졌어요! '+acc.vil.cap+'마리까지 머물 수 있어요.');commit();});}
 if(view==='visit'&&(ds.vo||ds.vpet!=null))return;
if(ds.repmodal)return repModal();
if(ds.setrep)return setRep(ds.setrep);
if(ds.dtab){SO.tab=ds.dtab;return render();}
if(ds.visit)return visitOpen(ds.visit);
if(ds.visitisl){SO.visitIsl=ds.visitisl;render();setTimeout(vCenter,0);return;}
if(ds.heart)return sendHeart(ds.heart);
if(ds.gbopen)return gbOpen(ds.gbopen);
if(ds.gbsend)return gbSend(ds.gbsend);
if(ds.gbdel)return gbDel(ds.gbdel);
if(ds.vtitle)return titleModal();
if(ds.tequip!=null)return titleEquip(ds.tequip);
if(ds.vgb)return gbOpen(acc.uid);
if(ds.useisl){const k=ds.useisl;if(!THEMES[k])return;vilInit();if((acc.vil.isls||[]).includes(k))return toast('이미 열린 섬이에요.');if(!take('isl_'+k))return;islOpen(k);SFX.play('fanfare');toast(THEMES[k].n+'이(가) 열렸어요!');return commit();}
if(ds.buyisl)return islBuy(ds.buyisl);
if(ds.buytp)return tpBuy(ds.buytp);
if(ds.usevil){vilInit();if(vilCap()>=VIL_CAPMAX)return toast('마을 한도가 최대예요.');if(!take('sec_vil'))return;acc.vil.cap=vilCap()+5;SFX.play('fanfare');toast('마을이 넓어졌어요! '+acc.vil.cap+'마리');return commit();}
 if(ds.buydeco){vilInit();const d=DECO_SHOP_N().find(x=>x.k===ds.buydeco);if(!d)return;if(acc.coins<d.p)return toast('환수코인이 부족해요.');acc.coins-=d.p;acc.vil.store[d.k]=(acc.vil.store[d.k]||0)+1;SFX.play('buy');toast(d.n+'을(를) 마을 보관함에 넣었어요.');return commit();}
 if(ds.kix){const [a,b]=ds.kix.split(':');if(!KI[a]||!KI[b]||a==='yy'||b==='yy'||a===b)return;if((acc.inv[KI[a]]||0)<3)return toast(ITEMS[KI[a]].n+'이(가) 3개 필요해요.');acc.inv[KI[a]]-=3;acc.inv[KI[b]]=(acc.inv[KI[b]]||0)+1;SFX.play('buy');toast(ITEMS[KI[a]].n+' 3개 → '+ITEMS[KI[b]].n+' 1개');return commit();}
 if(ds.igs){const [k,v]=ds.igs.split(':');S.igSel=S.igSel||{};const have=acc.inv[k]||0;S.igSel[k]=v==='all'?Math.min(99,have):Math.max(0,Math.min(have,99,(S.igSel[k]||0)+(+v)));return render();}
 if(ds.igmake)return igMake();
 if(ds.copy){try{await navigator.clipboard.writeText(ds.copy);toast('복사했어요!');}catch(e){toast('복사하지 못했어요. 길게 눌러 직접 복사해 주세요.');}return;}
 if(ds.dextab){S.dex=ds.dextab;return render();}
 if(ds.colclaim)return colClaim(ds.colclaim);
 if(ds.wishgo)return doWish();
 if(ds.wishnote)return doWish(true);
 if(['vzoom','vharvall','vharv','vact','visl','vbgm','vroam','vroamgo','vroamback','vo','vpet','vbuildmenu','vplace','vcancel','vdone','vstore','vskin','vskinset','vtake','vput','vdel','vnew','vbuildgo','vup','bcut','craft','vassign','vas','vunassign','vtoslot','vtogsp','rcptab'].some(k=>ds[k]!=null)){vilInit();return vClick(ds);}
 if(ds.gpick){const u=ds.gpick;if(S.synA){if(u===S.synA){S.synA=null;return render();}const a=gearOf(S.synA),b=gearOf(u);if(!synOk(a,b))return toast(b&&equippedBy(b.u)!=null?'장착 중인 장비는 합성할 수 없어요.':'같은 종류·같은 등급이고 최대 강화된 장비만 합성할 수 있어요.');S.forgeSel=[a.u,b.u];return synthModal();}return gearModal(u);}
 if(ds.synpick){const a=gearOf(ds.synpick);closeLayer();S.gm=null;if(!acc.gear.some(x=>synOk(a,x)))return toast('같이 합성할 수 있는 장비가 없어요. 같은 종류·같은 등급의 최대 강화 장비가 하나 더 필요해요.');S.synA=a.u;S.forgeSel=[];return render();}
 if(ds.syncancel){S.forgeSel=[];closeLayer();if(ds.syncancel==='all')S.synA=null;return render();}
 if(t.matches('[data-bless]')){S.bless=t.checked;if(S.gm)return gearModal(S.gm);return render();}
 if(t.matches('[data-protect]')){S.protect=t.checked;if(S.forgeSel.length===2)return synthModal();return render();}
 if(ds.aff){const g=gearOf(S.gm);if(!g)return;g.aff=ds.aff;commit();return gearModal(g.u);}
 if(ds.equip){const p=P(),g=gearOf(ds.equip);if(!p)return;const o=equippedBy(g.u);if(p.train||p.errand)return toast((p.train?'수련':'심부름')+' 중인 환수는 장비를 바꿀 수 없어요. 끝난 뒤 바꿔 주세요.');if(o!=null&&petAt(o)&&(petAt(o).train||petAt(o).errand))return toast('이 장비를 낀 환수가 '+(petAt(o).train?'수련':'심부름')+' 중이라 뺄 수 없어요.');if(o!=null)petAt(o).eq[g.t]=null;p.eq=Object.assign({w:null,a:null,s:null,n:null,b:null},p.eq);p.eq[g.t]=g.u;SFX.play('equip');toast('장착했어요.');closeLayer();S.gm=null;return commit();}
 if(ds.unequip){const g=gearOf(ds.unequip),o=equippedBy(g&&g.u);if(!g||o==null)return;const p=petAt(o);if(p.train||p.errand)return toast((p.train?'수련':'심부름')+' 중인 환수는 장비를 뺄 수 없어요. 끝난 뒤 바꿔 주세요.');p.eq[g.t]=null;SFX.play('clank');toast(NAMES[p.no]+'에게서 해제했어요.');closeLayer();S.gm=null;return commit();}
 if(ds.enh){const g=gearOf(ds.enh);if(g.p>=MAXP[g.g])return;if(acc.coins<ECOST[g.g])return toast('환수코인이 부족해요.');let r=RATE[g.p+1];if(S.bless){if(!take('sec_bless'))return;r+=.1;}acc.coins-=ECOST[g.g];
  const ok=rnd()<r,from=g.p;if(ok)g.p++;S.gm=null;S.forgeSel=[];save();const im=gearImg(g),nm=gearName(g);
  forgeAnim({kind:'enh',title:nm+' +'+from+' → +'+(from+1)+' 강화',imgs:[im],rate:Math.min(1,r),extra:S.bless?'강화축복비서 사용':'',out:ok?'success':'fail',head:ok?'+'+g.p+' 강화 성공!':'강화 실패…',sub:ok?nm+' +'+g.p:'단계는 +'+g.p+' 그대로예요.'});return;}
 if(ds.synth){const [a,b]=S.forgeSel.map(gearOf);const sy=SYN[a.g];if(acc.coins<SFEE[a.g])return toast('환수코인이 부족해요.');let prot=false;if(sy.x&&S.protect){if(!take('sec_protect'))return;prot=true;}acc.coins-=SFEE[a.g];const r=rnd();
  const imA=gearImg(a),imB=gearImg(b),nm=gearName(a),o={kind:'synth',title:nm+' 합성 → '+GN[a.g+1],imgs:[imA,imB],rate:sy.s,extra:(sy.d?'하락 '+Math.round(sy.d*100)+'%':'')+(sy.x?' 파괴 '+Math.round(sy.x*100)+'%'+(prot?' (방지)':''):'')};
  if(r<sy.s){acc.gear=acc.gear.filter(x=>x.u!==a.u&&x.u!==b.u);const ng=a.t==='n'?ngFill({u:'n'+Date.now().toString(36),t:'n',g:a.g+1,p:0,o:a.o,r:rnd(),subs:(a.subs||[]).map(x=>({o:x.o,r:rnd()}))}):a.t==='b'?{u:uid36('b'),t:'b',g:a.g+1,p:0,k:a.k,r:rnd()}:{u:uid36('g'),t:a.t,g:a.g+1,p:0};acc.gear.push(ng);Object.assign(o,{out:'success',resImg:gearImg(ng),head:'합성 성공!',sub:gearName(ng)+' 획득!'+(ng.t==='n'&&(ng.subs||[]).length>(a.subs||[]).length?' 추가 옵션이 열렸어요!':'')});}
  else if(r<sy.s+sy.d){b.g--;b.p=0;if(b.t==='n')ngFill(b);Object.assign(o,{out:'down',resImg:gearImg(b),head:'합성 실패… 등급 하락',sub:'장비 하나가 '+GN[b.g]+'(으)로 내려갔어요.'});}
  else if(r<sy.s+sy.d+sy.x){if(prot)Object.assign(o,{out:'protect',head:'파괴 방지!',sub:'파괴될 뻔했지만 파괴방지비서가 막았어요.'});else{acc.gear=acc.gear.filter(x=>x.u!==b.u);Object.assign(o,{out:'destroy',head:'합성 실패… 파괴',sub:'장비 하나가 부서졌어요.'});}}
  else Object.assign(o,{out:'fail',head:'합성 실패…',sub:'환수코인만 사라지고 장비는 그대로예요.'});
  S.forgeSel=[];S.synA=null;S.gm=null;save();forgeAnim(o);return;}
 // 운영자
 if(MODE!=='admin'||!isAdmin())return;
 if(ds.xdtab){AS.dtab=ds.xdtab;return render();}
 if(ds.xtab){AS.tab=ds.xtab;if(ds.xtab==='eggs'&&!AS.eggs)AD.loadEggs();if(ds.xtab==='logs'&&!AS.logs)AD.loadLogs();return render();}
 if(ds.xpick){const a=(AS.list||[]).find(x=>x.uid===ds.xpick);AS.tgt=a?normT(a):null;AS.base=CL(AS.tgt);AS.slot=0;AS.tgtArena=undefined;render();if(a)db.doc('accounts/'+a.uid).get().then(s0=>{if(!s0.exists||!AS.tgt||AS.tgt.uid!==a.uid)return;const f=Object.assign({uid:a.uid},s0.data());const i=(AS.list||[]).findIndex(x=>x.uid===a.uid);if(i>=0)AS.list[i]=f;AS.tgt=normT(f);AS.base=CL(AS.tgt);render();}).catch(()=>{});return AD.loadArenaT();}
 if(ds.x&&ds.uid)AS.twUid=ds.uid;if(ds.x&&ds.lid)AS.libId=ds.lid;
 if(ds.x&&AD[ds.x]){if(MAIN_ONLY.has(ds.x)&&!isMain())return toast('메인 운영자만 할 수 있어요.');try{return await AD[ds.x](t);}catch(e){toast('실패했어요: '+(e&&e.message||e));}}
 if(ds.xslot!=null){AS.slot=+ds.xslot;return render();}
 if(ds.xgdel&&isMain()){const u=ds.xgdel;AS.tgt.slots.forEach(p=>{if(p)GT.forEach(k=>{if(p.eq&&p.eq[k]===u)p.eq[k]=null;});});AS.tgt.gear=AS.tgt.gear.filter(g=>g.u!==u);return saveTgt('장비 회수');}
 if(ds.xpmode){AS.pmode=ds.xpmode;AS.vpet=null;AS.gs=null;AS.gk=null;return render();}
 if(ds.xigre){const [aid,code]=ds.xigre.split('|');return igReissue(aid,code);}
 if(ds.xpsel){AS.psel=AS.psel||{};if(t.checked)AS.psel[ds.xpsel]=1;else delete AS.psel[ds.xpsel];return;}
 if(ds.xsupdel!=null){supRead();AS.sup.items.splice(+ds.xsupdel,1);return render();}
 if(ds.xgsp){const [sr,k]=ds.xgsp.split(':');AS.gs=sr;AS.gk=+k;return render();}
 if(ds.xgp&&isMain()){const t=AS.tgt,L=((t.gsp||{})[AS.gs])||[],p=L[AS.gk];if(!p)return toast('전용 공간 환수를 먼저 골라 주세요.');
  if(ds.xgp==='toslot'){const fi=t.slots.findIndex(x=>!x);if(fi<0)return toast('빈 성장 슬롯이 없어요.');L.splice(AS.gk,1);restOut(p,true);t.slots[fi]=p;t.notice[fi]=null;AS.gk=null;return saveTgt('전용 공간 → 성장 슬롯: '+NAMES[p.no]);}
  if(ds.xgp==='del')return confirmBox('삭제',NAMES[p.no]+'을(를) 전용 공간에서 지울까요?',async()=>{L.splice(AS.gk,1);AS.gk=null;await saveTgt('전용 공간 환수 삭제: '+NAMES[p.no]);});}
 if(ds.xvpet!=null){AS.vpet=+ds.xvpet;return render();}
 if(ds.xgbdel&&isMain()){try{await db.doc('guestbook/'+ds.xgbdel).delete();}catch(e2){}try{await db.doc('gblog/'+ds.xgbdel).delete();}catch(e2){}log('방명록 글 삭제 '+ds.xgbdel);return AD.gbLoad();}
 if(ds.xvp&&isMain()){const t=AS.tgt,k=ds.xvp;t.vil=t.vil||{b:[],o:[],pets:[]};t.vil.pets=t.vil.pets||[];const p=t.vil.pets[AS.vpet];
  if(k==='restore'){const no=+document.getElementById('xVRestore').value,lv=+document.getElementById('xVRLv').value||1,q=tPet(no);q.no=no;q.st=FORMS[no].st;q.lv=Math.max(1,Math.min(maxLvP(q),lv));q.restAt=Date.now();q.vx=24;q.vy=24;t.vil.pets.push(q);tDex(no);return saveTgt('마을 환수 복구: '+NAMES[no]);}
  if(!p)return toast('마을 환수를 먼저 골라 주세요.');
  const unb=()=>{if(p.vb){const b=t.vil.b.find(x=>x.u===p.vb);if(b){b.pets=(b.pets||[]).filter(x=>x!==p.born);}}p.vb=null;delete p.isl;};
  if(k==='free'){unb();return saveTgt('마을 환수 배치 해제: '+NAMES[p.no]);}
  if(k==='toslot'){const fi=t.slots.findIndex(x=>!x);if(fi<0)return toast('빈 성장 슬롯이 없어요.');unb();t.vil.pets.splice(AS.vpet,1);delete p.vx;delete p.vy;t.slots[fi]=p;t.notice[fi]=null;AS.vpet=null;return saveTgt('마을 환수 → 성장 슬롯 '+(fi+1)+': '+NAMES[p.no]);}
  if(k==='del')return confirmBox('삭제',NAMES[p.no]+'을(를) 마을에서 지울까요?',async()=>{unb();t.vil.pets.splice(AS.vpet,1);AS.vpet=null;await saveTgt('마을 환수 삭제: '+NAMES[p.no]);});}
 if(ds.xp&&isMain()&&(AS.pmode==='vil'||AS.pmode==='gsp')){const t=AS.tgt,p=aSelPet(),k=ds.xp,tn=Date.now()+(t.offset||0),gm=AS.pmode==='gsp';if(!p)return;if(k==='del'||k==='egg'||k==='yyegg')return toast(gm?'전용 공간 환수는 아래 [전용 공간에서 삭제]를 써 주세요.':'마을 환수는 아래 [마을에서 삭제]를 써 주세요.');if(k==='finish'&&p.train)p.train.end=tn;if(k==='wake')p.sleep=null;if(k==='cure')curePet(p);if(k==='unlock'){p.g=newGauge();p.gT=newGauge();}if(k==='daily')p.daily={d:'',pat:0,play:0,sleep:0};return saveTgt((gm?'전용 공간':'마을')+' 환수 '+k+': '+NAMES[p.no]);}
 if(ds.xp&&isMain()){const t=AS.tgt,i=AS.slot,p=t.slots[i],k=ds.xp,tn=Date.now()+(t.offset||0);
  if(k==='egg'||k==='yyegg'){const n0=k==='yyegg'?146:0;t.slots[i]=tPet(n0);t.notice[i]=null;tDex(n0);}
  else if(p){if(k==='finish'&&p.train)p.train.end=tn;if(k==='finish'&&p.errand)p.errand.end=tn;if(k==='wake')p.sleep=null;if(k==='cure'){curePet(p);}if(k==='unlock'){p.g=newGauge();p.gT=newGauge();}if(k==='daily'){p.daily={d:'',pat:0,play:0,sleep:0};t.daily=null;}if(k==='del')t.slots[i]=null;}
  return saveTgt({egg:'알 넣기',yyegg:'음양알 넣기',finish:'수련·심부름 즉시 완료',wake:'깨우기',cure:'병 치료',unlock:'오행 게이지 초기화',daily:'오늘 횟수 초기화',del:'환수 삭제'}[k]+' (슬롯 '+(i+1)+')');}
 if(ds.xegdel){await db.doc('eggcodes/'+ds.xegdel).delete();log('알 코드 취소 '+ds.xegdel);return AD.loadEggs();}
});
setInterval(()=>{if(MODE!=='player'||!acc||S.kicked||document.getElementById('layer').innerHTML)return;if((acc.att&&acc.att.last!==dayKey(now()))||(S.pass&&acc.passLast!==dayKey(now())&&passDay(S.pass))){const st=attCheck(),pg=passCheck();if(st||pg){save();render();attModal(!!st,pg);return;}}const ch=tickAll();const a=document.activeElement;const typing=a&&(a.tagName==='INPUT'||a.tagName==='SELECT');if(!typing&&!VDRAG&&!VS.place&&(view==='home'||view==='train'||view==='village')&&!document.querySelector('.errres')){const sc=document.getElementById('vview'),keep=sc?[sc.scrollLeft,sc.scrollTop]:null;render();const s2=document.getElementById('vview');if(s2&&keep){s2.scrollLeft=keep[0];s2.scrollTop=keep[1];}}if(ch)save();},2000);

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
const TEST=MODE==='player'&&/[?&]test\b/.test(location.search);
function makeMock(){
 const K=TEST?'hs_test_v1':'hs_mock_v1';let st={docs:{},users:{}};try{st=JSON.parse(localStorage.getItem(K))||st;}catch(e){}
 const persist=()=>{try{localStorage.setItem(K,JSON.stringify(st));}catch(e){}};
 const sync=()=>{try{st=JSON.parse(localStorage.getItem(K))||st;}catch(e){}};
 let cur=null,listeners=[];const subs={};
 const snap=(path,d)=>({id:path.split('/').pop(),exists:d!==undefined,data:()=>d===undefined?undefined:clean(d),metadata:{hasPendingWrites:false,fromCache:false}});
 const fire=path=>(subs[path]||[]).forEach(f=>f(snap(path,st.docs[path])));
 const hasNest=(v,inA)=>Array.isArray(v)?(inA||v.some(x=>hasNest(x,true))):(v&&typeof v==='object'?Object.values(v).some(x=>hasNest(x,false)):false);
 function dref(path){return{path,id:path.split('/').pop(),get:async()=>{sync();return snap(path,st.docs[path]);},set:async d=>{if(hasNest(d,false))throw new Error('Nested arrays are not supported (mock: '+path+')');sync();st.docs[path]=clean(d);persist();setTimeout(()=>fire(path),0);},incr:async(k,n)=>{sync();const o=st.docs[path];if(!o)throw new Error('not-found');o[k]=(o[k]||0)+n;persist();setTimeout(()=>fire(path),0);},update:async d=>{sync();const o=st.docs[path];if(!o)throw new Error('not-found');Object.assign(o,clean(d));persist();setTimeout(()=>fire(path),0);},pushMail:async m=>{sync();const d=st.docs[path];if(!d)throw new Error('not-found');d.mail=(d.mail||[]).concat([clean(m)]);d.rev=(d.rev||0)+1;persist();setTimeout(()=>fire(path),0);},delete:async()=>{sync();delete st.docs[path];persist();},onSnapshot:(n)=>{(subs[path]=subs[path]||[]).push(n);return()=>{subs[path]=subs[path].filter(x=>x!==n);};}};}
 function q(col,f,ord,lim){return{where:(a,o,v)=>q(col,(f||[]).concat([[a,v]]),ord,lim),orderBy:(a,d)=>q(col,f,[a,d],lim),limit:n=>q(col,f,ord,n),get:async()=>{sync();let ks=Object.keys(st.docs).filter(k=>k.startsWith(col+'/')&&k.split('/').length===col.split('/').length+1);let ds=ks.map(k=>snap(k,st.docs[k]));if(f)ds=ds.filter(s=>f.every(([a,v])=>s.data()[a]===v));if(ord)ds.sort((a,b)=>(a.data()[ord[0]]-b.data()[ord[0]])*(ord[1]==='desc'?-1:1));if(lim)ds=ds.slice(0,lim);return{docs:ds,size:ds.length,empty:!ds.length};},doc:id=>dref(col+'/'+id),add:async d=>{const r=dref(col+'/'+Math.random().toString(36).slice(2));await r.set(d);return r;}};}
 const err=c=>{const e=new Error(c);e.code=c;return e;};
 return{db:{doc:dref,collection:c=>q(c)},
  signIn:async(id,pw)=>{sync();const u=st.users[emailOf(id)];if(!u||u.pw!==pw)throw err('auth/invalid-credential');cur=u.uid;return cur;},
  signOut:async()=>{cur=null;},
  register:async(id,pw)=>{sync();const e=emailOf(id);if(st.users[e])throw err('auth/email-already-in-use');const uid='u'+Math.random().toString(36).slice(2,10);st.users[e]={uid,pw};persist();cur=uid;return uid;},
  createUser:async(id,pw)=>{sync();const e=emailOf(id);if(st.users[e])throw err('auth/email-already-in-use');const uid='u'+Math.random().toString(36).slice(2,10);st.users[e]={uid,pw};persist();return uid;},
  onAuth:cb=>{setTimeout(()=>cb(cur),0);}};
}
/* ================= 테스트 모드 (index.html?test) ================= */
async function testSeed(){
 try{await HS.signIn('tester','test1234');}catch(e){
  const uid=await HS.register('tester','test1234');const a=blankAcc('tester',uid,'player','테스터');a.coins=99999;
  Object.keys(ITEMS).forEach(k=>a.inv[k]=20);Object.values(KI).forEach(k=>a.inv[k]=600);
  const mk=(no,lv)=>{const q=newPet(no);q.st=FORMS[no].st;q.lv=Math.min(maxLvP(q),lv);q.born=Date.now()+no;q.aff=80;return q;};
  a.slots=[mk(40,60),mk(72,60),mk(24,50),mk(160,60),mk(20,20)];a.notice=[null,null,null,null,null];
  a.slots.forEach(q=>{a.dex[q.no]=1;});
  GT.forEach(t=>[0,1,2,3,4].forEach(g=>a.gear.push(gearNew(t,g))));
  await db.doc('accounts/'+uid).set(a);
  const bots=[['bot1','연습상대 해치',[4,30]],['bot2','연습상대 백호',[72,60]],['bot3','연습상대 봉황',[23,45]],['bot4','연습상대 현무',[56,55]]];
  for(const [u,n,[no,lv]] of bots){await db.doc('arena/'+u).set({uid:u,id:u,nick:n,week:sunKey(now()),medals:100,w:0,l:0,dw:0,dl:0,pet:petSnap(mk(no,lv)),t:Date.now()});}
  const s0=twSeason();
  for(const [u,n,b,no] of [['tb1','청룡왕',35,40],['tb2','백호짱',28,72],['tb3','주작님',21,24]]){await db.doc('tower/'+u).set({uid:u,id:u,nick:n,season:s0,best:b,t:Date.now()-b*6e5,no,title:null});await db.doc('tower/'+u+'_p').set({uid:u+'_p',id:u,nick:n,season:twPrevSeason(),best:b+40,t:1,no,title:null});}
  await testBoss();
 }}
async function testBoss(){await db.doc('boss/current').set({iid:'t'+Date.now().toString(36),no:1,maxHp:200000,hp:200000,atk:800,start:Date.now(),killed:false,reward:{coins:30},mvpReward:{coins:50},by:'test'});}
function testBar(){if(!TEST||!acc||document.getElementById('testbar'))return;
 const B=[['coins','코인 +1000'],['evc','이벤트 코인 +500'],['items','아이템 전부 +5'],['limits','하루·주간 제한 초기화'],['finish','수련·심부름·건설 바로 끝 (생산 +6시간)'],['fill','생활 수치 채우기'],['tower','탑 기회 3회 충전'],['towerreset','탑 진행 초기화'],['boss','월드보스 새로 소환'],['wipe','테스트 데이터 처음부터']];
 document.body.insertAdjacentHTML('beforeend','<div id="testbar" class="testbar"><button class="tbh" data-tt="toggle">🧪 테스트 모드 <small>실제 서버와 무관</small></button><div class="tbb">'+B.map(([k,n])=>'<button data-tt="'+k+'">'+n+'</button>').join('')+'</div></div>');
 document.getElementById('testbar').addEventListener('click',async e=>{const b=e.target.closest('[data-tt]');if(!b)return;const k=b.dataset.tt;
  if(k==='toggle')return document.getElementById('testbar').classList.toggle('open');
  if(k==='wipe'){if(!confirm('테스트 데이터를 모두 지우고 처음 상태로 돌릴까요?'))return;localStorage.removeItem('hs_test_v1');return location.reload();}
  if(k==='coins')acc.coins+=1000;
  if(k==='evc')acc.evc=(acc.evc||0)+500;
  if(k==='items')Object.keys(ITEMS).forEach(x=>acc.inv[x]=(acc.inv[x]||0)+5);
  if(k==='limits'){acc.daily=null;acc.weekly=null;acc.slots.forEach(q=>{if(q)q.daily={d:'',pat:0,play:0,sleep:0};});}
  if(k==='finish'){acc.slots.forEach(q=>{if(!q)return;if(q.train)q.train.end=now();if(q.errand)q.errand.end=now();});if(acc.vil)acc.vil.b.forEach(b=>{if(b.bt)b.bt.e=now();if(b.job)b.job.e=now();b.pt=(b.pt||now())-6*H;});tickAll();}
  if(k==='fill')acc.slots.forEach(q=>{if(!q)return;q.hu=q.th=q.cl=100;q.aff=100;q.en=Math.max(q.en||0,100);q.sick=null;q.sleep=null;});
  if(k==='tower')acc.twTk={n:TW_CAP,d:dayKey(now())};
  if(k==='towerreset'){acc.tower=null;try{await db.doc('tower/'+acc.uid).delete();}catch(err){}TV.rank=null;TV.loaded=false;}
  if(k==='boss'){await testBoss();BV.loaded=false;toast('월드보스를 새로 소환했어요.');}
  SFX.play('ok');if(k!=='boss')toast(b.textContent+' 완료');commit();});}
(async function boot(){
 const app=document.getElementById('app');
 try{HS=(TEST||/[?&]mock/.test(location.search))?makeMock():await makeFirebase();if(TEST){db=HS.db;await testSeed();}}catch(e){app.innerHTML='<main><div class="card">서버에 연결하지 못했어요. 잠시 뒤 새로고침해 주세요.<br><small class="muted">'+esc(e&&e.message||e)+'</small></div></main>';return;}
 db=HS.db;if(TEST)window.__T={bossSendUnclaimed,bossSaveLast,bossSuggest,BV,get db(){return db;},GRADE_N,repPet,bModal,RCP,vErrand,evoAnimA,evoAnimB,wanderTick,petStats,powerOf,simBoss,maxLv,ELOF,BOSSES,get acc(){return acc;},set acc(v){acc=v;},vilInit,render,commit,tickAll,bOf,vilTick,evoCheck,statsOf,cp,TMAP,ITEMS,FORMS,NAMES,newPet,gCap,set view(v){view=v;},get VS(){return VS;},get PV(){return PV;},get SO(){return SO;},pgSimon,pgCatch,pgMem,bossRank,podium,get XV(){return XV;},get TV(){return TV;}};if(/[?&]mock/.test(location.search))window.__dbg={evoCheck,newPet,cp,needP,isAdv,maxLv,statsOf,petStats,evoTargets};
 if(MODE==='admin'){try{const b=await db.doc('config/bootstrap').get();S.needBoot=!b.exists;}catch(e){S.needBoot=false;}}
 let first=true;
 HS.onAuth(async uid=>{
  try{const c=await db.doc('config/global').get();if(c.exists)cfg=Object.assign({expMult:1},c.data());}catch(e){}
  applyCfg();
  if(uid&&first&&!acc){first=false;try{await loadAccount(uid);}catch(e){S.loginMsg='불러오지 못했어요: '+(e&&e.message||e);acc=null;render();}return;}
  first=false;if(!uid&&!acc)render();
 });
})();

window.addEventListener('error',e=>{try{toast('오류: '+(e.message||'알 수 없음'));}catch(_){}});window.addEventListener('unhandledrejection',e=>{try{const m=e.reason&&e.reason.message||String(e.reason);if(!/permission|network|offline/i.test(m))toast('오류: '+m);}catch(_){}});

