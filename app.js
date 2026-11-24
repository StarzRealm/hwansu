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
const GBASE=282,GSER=[['s1',21],['s2',12]],GUEST_ST=9,GUEST_MAX=99,G_DUAL_W=.1,G_EGG_LV=10,G_BABY_LV=30;
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
function parseDexNo(v){v=String(v||'').trim().toLowerCase();if(/^s\d+-\d+$/.test(v)){const [a,b]=v.split('-');const k=GID.indexOf(a+'-'+String(+b).padStart(2,'0'));return k<0?-1:GBASE+k;}if(!/^\d+$/.test(v))return -1;const n=+v;return n<GBASE?n:-1;}
const dexNo=no=>isGuest(no)?gidOf(no):String(no).padStart(2,'0');
const CHILD={};Object.keys(FORMS).forEach(k=>CHILD[k]=[]);Object.keys(FORMS).forEach(k=>{const p=FORMS[k].parent;if(p!=null)CHILD[p].push(+k);});
Object.entries(POOL).forEach(([p,ks])=>ks.forEach(k=>{if(!CHILD[p].includes(k))CHILD[p].push(k);}));
const isFinalNo=no=>isGuest(no)?isGFinal(no):!CHILD[no].length;
const EGG_NO={egg_n:0,egg_yy:146,egg_x:221};
/* ===== 등급 ===== */
const GRADES=['환수','영물','영수','성수','신수'];
const GRADE_KEY={'환수':'hwansu','영물':'yeongmul','영수':'yeongsu','성수':'seongsu','신수':'sinsu','스타즈렐름':'starz','게스트':'guest'};
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
const ST_HOURS=[.5,1.5,4,8,13,20,40,60,90,140,200,320];
const ST_TOT=ST_HOURS.map((h,i)=>h*XPH[i]);
const LV_W=(st)=>{let s=0;for(let l=1;l<maxLv(st);l++)s+=1+.06*(l-1);return s;};
const LVW=ST_MAX.map((_,i)=>LV_W(i+1));
const need=(lv,st)=>Math.max(1,Math.round(ST_TOT[st-1]*(1+.06*(lv-1))/LVW[st-1]));
/* ===== 전투 스탯 ===== */
const BASE={hp:40,atk:10,def:6},GROW={hp:8,atk:2.5,def:1.5},EVO_K=.7;
const ST_START=[];{let s=Object.assign({},BASE);for(let i=0;i<12;i++){ST_START[i]=s;const n={};for(const k in BASE)n[k]=(s[k]+(ST_MAX[i]-1)*GROW[k]*ST_G[i])*EVO_K;s=n;}}
const GRADE_PCT=[0,.01,.02,.035,.05],GRADE_RATE=[0,3,6,9,12];
const EL_STAT={yang:['crit','atk'],yin:['pen','eva'],wood:['hp','eva'],fire:['atk','crit'],earth:['def','hp'],metal:['pen','crit'],water:['eva','hp']};
const STAT_N={hp:'체력',atk:'공격력',def:'방어력',eva:'회피',pen:'직격',crit:'치명'};
const STAR_MAX=no=>{if(isGuest(no)||!isFinalNo(no))return 0;const s=FORMS[no].st;return s>=12?5:s>=9?3:s>=6?1:0;};
const STAR_COST=[30,50,80,120,180];
const HEART_T=[20,40,60,80,100], HEART_BON=[0,2,4,6,8,10];
/* ===== 오행 게이지 ===== */
const gCap=st=>st>=11?50:Math.max(0,5*(st-1));
const gEls=no=>String(ELOF[no]||'neutral').split('|').map(e=>e==='yang'||e==='yin'?'yy':e).filter(e=>e!=='neutral');
const KI={fire:'ki_fire',water:'ki_water',wood:'ki_wood',earth:'ki_earth',metal:'ki_metal',yy:'ki_yy'};
/* ===== 상점 · 아이템 ===== */
const REFUND={4:10,5:15,6:25,7:40,8:60,9:85,10:110,11:150,12:200};
const LIB_RW={4:[10,1,0,null,0],5:[20,1,0,'sus_s',10],6:[30,2,0,'sus_l',10],7:[50,2,0,'tal_time',4],8:[100,3,0,'sec_t60',4],9:[120,0,1,'sec_t180',4],10:[150,0,1,'sec_t300',4],11:[250,0,2,'sec_t480',4],12:[400,0,3,'sec_t480',8]};
const LIB_IG={4:{ig_dp:1},5:{ig_dp:2},6:{ig_dp:4},7:{ig_ep:1},8:{ig_ep:2},9:{ig_ep:4},10:{ig_gp:1},11:{ig_gp:3},12:{ig_kp:1}};
function libMail(st){const r=LIB_RW[st];const m={title:st+'단계 해방 보상',from:'선계 관리소',coins:r[0]};if(r[1])m.eggs=r[1];if(r[2])m.yyEggs=r[2];m.items=Object.assign({},LIB_IG[st]||{});if(r[3])m.items[r[3]]=(m.items[r[3]]||0)+r[4];return m;}
const FOOD=[null,{hu:15,p:1,n:'주먹밥'},{hu:25,p:2,n:'꿀떡'},{hu:40,p:4,n:'영초죽'},{hu:60,p:7,n:'선과 정식'},{hu:100,p:12,n:'어선만찬'}];
const ITEMS={
 ki_fire:{n:'불의 기운',p:0,img:'i/ui/icon_ki_fire.png',cat:'기운',d:'불 게이지 +1 (마을 생산)'},
 ki_water:{n:'물의 기운',p:0,img:'i/ui/icon_ki_water.png',cat:'기운',d:'물 게이지 +1 (마을 생산)'},
 ki_wood:{n:'나무의 기운',p:0,img:'i/ui/icon_ki_wood.png',cat:'기운',d:'나무 게이지 +1 (마을 생산)'},
 ki_earth:{n:'땅의 기운',p:0,img:'i/ui/icon_ki_earth.png',cat:'기운',d:'땅 게이지 +1 (마을 생산)'},
 ki_metal:{n:'쇠의 기운',p:0,img:'i/ui/icon_ki_metal.png',cat:'기운',d:'쇠 게이지 +1 (마을 생산)'},
 ki_yy:{n:'음양의 기운',p:0,img:'i/ui/icon_ki_yinyang.png',cat:'기운',d:'음양 게이지 +1 (마을 생산)'},
 food_1:{n:'주먹밥',p:1,img:'i/food_1.png',cat:'먹이',d:'포만감 +15'},
 food_2:{n:'꿀떡',p:2,img:'i/food_2.png',cat:'먹이',d:'포만감 +25'},
 food_3:{n:'영초죽',p:4,img:'i/food_3.png',cat:'먹이',d:'포만감 +40'},
 food_4:{n:'선과 정식',p:7,img:'i/food_4.png',cat:'먹이',d:'포만감 +60'},
 food_5:{n:'어선만찬',p:12,img:'i/food_5.png',cat:'먹이',d:'포만감 +100'},
 dew:{n:'설화의 이슬',p:1,img:'i/dew.png',cat:'생활',d:'목마름 +40'},
 soap:{n:'비누',p:1,img:'i/soap.png',cat:'생활',d:'청결도 +50'},
 elixir:{n:'영약환단',p:30,img:'i/elixir.png',cat:'약',d:'50% 확률로 병 치료 (제작소에서도 만들 수 있어요)'},
 sus_s:{n:'수상한 기운 (소)',p:3,img:'i/sus_s.png',cat:'성장',d:'경험치 +100, 무작위 오행 +1 · 부작용: 포만감 -10',daily:5},
 sus_m:{n:'수상한 기운 (중)',p:0,img:'i/sus_m.png',cat:'성장',d:'레벨 경험치 50%, 무작위 오행 +2 · 부작용: 포만감·청결·목마름 -20 (마을 생산)'},
 sus_l:{n:'수상한 기운 (대)',p:0,img:'i/sus_l.png',cat:'성장',d:'즉시 레벨 +1 · 무작위 오행 +3 (마을 생산)'},
 wish_note:{n:'소원 쪽지',p:0,img:'i/ui/icon_wish.png',cat:'보상',d:'가방에서 [열기]를 누르면 소원을 비는 탑과 같은 무작위 보상이 나와요 (코인·기운·알·금패)'},
 sec_active:{n:'환수행동력 회복 비서',p:10,img:'i/sec_active.gif',cat:'성장',d:'행동력 +50',daily:1},
 reset_ki:{n:'오행초기화기운',p:50,img:'i/reset_ki.gif',cat:'기타',d:'오행 게이지를 모두 0으로'},
 tal_time:{n:'시간단축비서 (30분)',p:5,img:'i/sec_t30.gif',cat:'성장',d:'수련·심부름·건설의 남은 시간 30분 단축 (생산에는 쓸 수 없어요)'},
 sec_t60:{n:'시간단축비서 (1시간)',p:0,img:'i/sec_t60.gif',cat:'보상',d:'수련·심부름·건설의 남은 시간 1시간 단축 (보상 전용)'},
 sec_t180:{n:'시간단축비서 (3시간)',p:0,img:'i/sec_t180.gif',cat:'보상',d:'수련·심부름·건설의 남은 시간 3시간 단축 (보상 전용)'},
 sec_t300:{n:'시간단축비서 (5시간)',p:0,img:'i/sec_t300.gif',cat:'보상',d:'수련·심부름·건설의 남은 시간 5시간 단축 (보상 전용)'},
 sec_t480:{n:'시간단축비서 (8시간)',p:0,img:'i/sec_t480.gif',cat:'보상',d:'수련·심부름·건설의 남은 시간 8시간 단축 (보상 전용)'},
 sec_slot:{n:'성장슬롯추가비서',p:0,img:'i/sec_slot.gif',cat:'보상',d:'성장 슬롯을 1칸 늘려요 (최대 5칸)'},
 sec_vil:{n:'마을확장비서',p:0,img:'i/ui/nav_village.png',cat:'보상',d:'마을에 머무는 환수 한도 +5 (최대 40)'},
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
 sec_bless:{n:'강화축복비서',p:25,img:'i/sec_bless.gif',cat:'강화',d:'강화 성공 확률 +10%'},
 sec_protect:{n:'파괴방지비서',p:200,img:'i/sec_protect.gif',cat:'강화',d:'합성 파괴를 막아요'},
 sec_cure:{n:'질병치료비서',p:0,img:'i/sec_cure.gif',cat:'운영자',d:'확률 없이 즉시 치료',admin:1},
 sec_cancel:{n:'진화취소비서',p:0,img:'i/sec_cancel.gif',cat:'운영자',d:'직전 진화를 되돌려요',admin:1}
};
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
const img=no=>isGuest(no)?'h/'+gidOf(no)+'.gif?'+IMG_V:'h/'+String(no).padStart(2,'0')+'.gif';
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
function save(){if(MODE==='player'&&S.kicked)return saveChain;if(MODE==='player'&&acc)acc.sess=SESS;acc.rev=(acc.rev||0)+1;const snap=JSON.parse(JSON.stringify(acc));saveChain=saveChain.then(()=>db.doc('accounts/'+snap.uid).set(snap)).catch(e=>{toast('저장 실패: '+(e&&e.message||e));});return saveChain;}
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
function restEn(p){const d=Math.max(0,now()-(p.restAt||now()))/H;return Math.min(maxEn(p),p.en+5*(1+gearSum(p).regen/100)*d);}
function restOut(p,regen){const d=Math.max(0,now()-(p.restAt||now()));if(regen)p.en=restEn(p);['ts','sleep','fix','fixS','sick','lastPat'].forEach(k=>{if(typeof p[k]==='number'&&p[k])p[k]+=d;});delete p.restAt;}
function moveBlock(p){if(!p)return '';if(p.train)return '수련 중인 환수는 옮길 수 없어요.';if(p.errand)return '심부름 중인 환수는 옮길 수 없어요.';if(p.result||p.errandResult)return '먼저 결과를 확인해 주세요.';if(p.sick!=null)return '아픈 환수는 옮길 수 없어요. 먼저 치료해 주세요.';if(acc.arenaRep!=null&&p.born===acc.arenaRep)return '대전 대표 환수는 옮길 수 없어요. 대표를 바꾼 뒤 옮겨 주세요.';return '';}
const GSP_MAX=30,GSP={s1:{n:'우주비행사 정거장',bg:'i/gsp_s1.jpg',c:'#2a4a9a'},s2:{n:'말랑 친구들의 방',bg:'i/gsp_s2.jpg',c:'#d0608a'}};
function curePet(p){p.sick=null;['hu','th','cl'].forEach(k=>{p[k]=Math.max(p[k]||0,30);});p.aff=Math.max(p.aff,10);}
function slotPrice(){return SLOT_PRICE[acc.slots.length]||0;}
function addSlot(){if(acc.slots.length>=MAX_SLOTS)return false;acc.slots.push(null);acc.notice=acc.notice||[];while(acc.notice.length<acc.slots.length)acc.notice.push(null);return true;}
function slotFx(){SFX.play('mystic');SFX.play('fanfare');toast('성장 슬롯이 '+acc.slots.length+'칸으로 늘었어요!');}
function giveEgg(no){no=no||0;const key=no===146?'egg_yy':no===221?'egg_x':'egg_n';acc.inv[key]=(acc.inv[key]||0)+1;return -1;}
function eggNo(key){return key==='egg_yy'?146:key==='egg_x'?221:key==='egg_g1'?gno('s1-00'):key==='egg_g2'?gno('s2-00'):0;}
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
function petStats(no,st,lv,star){const guest=isGuest(no),gr=guest?0:(GRADE_N[no]||0),b=baseAt(st,lv),mx=baseAt(st,maxLv(st)),r={};
 for(const k in BASE)r[k]=b[k]+mx[k]*GRADE_PCT[gr];
 ['eva','pen','crit'].forEach(k=>{r[k]=3*st+GRADE_RATE[gr];});
 const els=String(ELOF[no]||'neutral').split('|').filter(e=>EL_STAT[e]),w=els.length>1?.6:1;
 els.forEach(e=>{const [m,s]=EL_STAT[e];if(BASE[m]!=null)r[m]+=mx[m]*.15*w;else r[m]+=st*8*w;if(BASE[s]!=null)r[s]+=mx[s]*.08*w;else r[s]+=st*4*w;});
 if(star){for(const k in BASE)r[k]*=1+.04*star;const add=star>=5?10:star>=3?5:0;['eva','pen','crit'].forEach(k=>{r[k]+=add;});}
 return r;}
function statsOf(p){const r=petStats(p.no,p.st,p.lv,p.star||0),G=gearSum(p),hb=1+HEART_BON[hearts(p)]/100;
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
function addG(p,k,n){const cap=gCap(p.st),cur=p.g[k]||0,nv=Math.min(cap,cur+n);if(nv>cur){p.g[k]=nv;p.gT[k]=now();}return nv-cur;}
function addExp(p,amt){const mx=maxLvP(p);if(p.lv>=mx)return;p.exp+=amt;while(p.lv<mx&&p.exp>=needP(p)){p.exp-=needP(p);p.lv++;}if(p.lv>=mx){p.lv=mx;p.exp=0;}}
function lvUp(p,n){const mx=maxLvP(p);p.lv=Math.min(mx,p.lv+n);if(p.lv>=mx)p.exp=0;}
const stN=p=>p&&isGuest(p.no)?(isGFinal(p.no)?'STARZ':(p.st===1?'STARZ 알':'STARZ 유체')):p.st+'단계';
const maxLvP=p=>isGFinal(p.no)?GUEST_MAX:isGuest(p.no)?(p.st===1?G_EGG_LV:G_BABY_LV):maxLv(p.st);
const needP=p=>isGFinal(p.no)?need(p.lv,9):isGuest(p.no)?Math.round(need(p.lv,p.st===1?2:4)*.5):need(p.lv,p.st);
function randG(){return GAUGES[Math.floor(rnd()*6)];}
function makeSick(p,t){if(p.sick==null){p.sick=t;SFX.play('sick');if(p.train)p.train=null;}}
/* ===== 선계수련 (12곳 · 10분~12시간) ===== */
const TMAP=['운무 계곡','청류 연못','송운 숲','홍염 고개','황토 평원','백금 협곡','현수 심연','오행 제단','천계 문턱','선계 정상','은하 운해','태초의 천궁'].map((n,i)=>({n,img:'m/t'+String(i+1).padStart(2,'0')+'.webp',xph:XPH[i]}));
const TDUR=[10,30,60,120,240,480,720],TEFF=[1.15,1.10,1,.95,.9,.85,.8],TCOST=[3,6,10,16,26,44,60];
const durTxt=m=>m<60?Math.round(m)+'분':m%60?Math.floor(m/60)+'시간 '+Math.round(m%60)+'분':(m/60>=48&&m%1440===0?(m/1440)+'일':(m/60)+'시간');
const durMs=ms=>{const m=Math.round(ms/MIN);if(m>=1440){const d=Math.floor(m/1440),h=Math.round((m%1440)/60);return d+'일'+(h?' '+h+'시간':'');}return durTxt(m);};
TMAP.forEach((m,i)=>{const st=i+1,s=petStats(25,st,Math.ceil(maxLv(st)*.6),0);m.rec=powerOf(s);});
const ENC_W={egg:2,gear:4,kifind:8,dosa:8,susluck:10,blesssec:10,bless:14,luck:14,snack:14,lost:16};
const LUCK=[[2,4],[3,5],[3,6],[4,8],[5,10],[6,13],[7,16],[9,20],[11,25],[13,30],[16,36],[18,40]];
function trainCut(p){return gearSum(p).bell.train/100;}
function finishTraining(p,t){
 const tr=p.train,mp=TMAP[tr.m],hrs=TDUR[tr.d]/60,dur=Math.max(0,(tr.end-tr.start)-fixOverlap(p,tr.start,tr.end))/H,G=gearSum(p),m=.5*(1-G.decay/100);
 const ded=(k,rate)=>{p[k]=Math.max(0,p[k]-rate*dur*m);};ded('hu',huRate(p));ded('th',10);ded('cl',100/24);
 const ratio=cp(p)/mp.rec;let fail=8,great=12;if(ratio<1){fail=Math.min(85,8+(1-ratio)*70);great=4;}else if(ratio>=1.5){fail=4;great=20;}
 const r=rnd()*100,out=r<fail?'fail':r<fail+great?'great':'ok';const noExp=out==='fail'&&ratio<.5;
 let exp=(noExp?0:mp.xph*hrs*TEFF[tr.d]*{fail:.3,ok:1,great:1.5}[out])*(1+(G.exp+HEART_BON[hearts(p)])/100)*expM();
 const lvFrom=p.lv;let coins=0,gearT=null,susK=null,kiK=null;
 const er=rnd()*100,en=er<1?3:er<6?2:er<16?1:0;
 const pool=Object.keys(ENC_W).filter(k=>(k!=='dosa'||p.st>=5));let encs=[];
 for(let j=0;j<en&&pool.length;j++){const tot=pool.reduce((s2,k)=>s2+ENC_W[k],0);let x=rnd()*tot,pick=pool.length-1;for(let z=0;z<pool.length;z++){x-=ENC_W[pool[z]];if(x<0){pick=z;break;}}encs.push(pool.splice(pick,1)[0]);}
 const has=k=>encs.includes(k);
 if(has('bless'))exp*=1.5;if(tr.seal)exp*=1.5;
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
  if(p.sleep&&p.sleep>t&&p.sleep<t+step)step=p.sleep-t;
  if(p.fix&&p.fix>t&&p.fix<t+step)step=p.fix-t;
  if(p.sick!=null&&p.sick+24*H>t&&p.sick+24*H<t+step)step=p.sick+24*H-t;
  const h=step/H,G=gearSum(p),training=p.train&&t<p.train.end;
  p.en=Math.min(maxEn(p),p.en+5*(1+G.regen/100)*h);
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
function evoTargets(p){const kids=CHILD[p.no]||[];if(!kids.length)return{done:true};
 if(isGuest(p.no))return{list:kids,guest:true};
 const br=kids.filter(k=>FORMS[k].cond);
 if(br.length){const ok=br.filter(k=>condOk(p,FORMS[k].cond));
  if(ok.length){const mk=Math.max(...ok.map(k=>Object.keys(FORMS[k].cond).length));let c=ok.filter(k=>Object.keys(FORMS[k].cond).length===mk);const t0=Math.min(...c.map(k=>condT(p,FORMS[k].cond)));c=c.filter(k=>condT(p,FORMS[k].cond)===t0);return{list:c};}
  if(POOL[p.no])return{list:POOL[p.no],pool:true};return{stuck:true};}
 const k=kids[0],need_=gEls(k),cap=gCap(p.st);if(need_.every(e=>(p.g[e]||0)>=cap))return{list:[k]};return{stuck:true,needG:need_};}
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
 return{ok:true,list:T.list,guest:T.guest};
}
function evoPick(e){if(e.guest)return gRoll(e.list);return e.list[Math.floor(rnd()*e.list.length)];}
function condText(no){return '';}
function dexAdd(no){if(!acc.dex[no])acc.dex[no]={d:dayKey(now()).slice(5).replace('-','.'),freed:false};}
function badgeOf(p){const e=evoCheck(p);return e.stuck?'wait':e.done?'final':'';}
// 각성: 최종 형태 + 최대 레벨 · 6단계 최종 ★1 · 9단계 ★3 · 12단계 ★5 · 재료는 주 속성 기운(이중 속성은 반씩)
function awakeCost(p){const n=STAR_COST[p.star||0],els=gEls(p.no);if(!els.length)return {};const each=Math.ceil(n/els.length),r={};els.forEach(e=>{r[KI[e]]=each;});return r;}
function awakeOk(p){const mx=STAR_MAX(p.no);if(!mx)return '각성할 수 없는 환수예요 (6·9·12단계 최종 형태만)';if((p.star||0)>=mx)return '최대 각성이에요 (★'+mx+')';if(p.lv<maxLvP(p))return '최대 레벨에서 각성할 수 있어요';return '';}
/* ===== 스타즈렐름 전용 공간 ===== */
function gspSend(i){const sp=acc.slots[i];if(!sp||!isGuest(sp.no))return;const w=moveBlock(sp);if(w)return toast(w);
 const sr=gSer(sp.no);if(gspOf(sr).length>=GSP_MAX)return toast(GSP[sr].n+'은(는) 최대 '+GSP_MAX+'마리까지 머물 수 있어요.');restIn(sp);gspOf(sr).push(sp);acc.slots[i]=null;acc.notice[i]=null;SFX.play('mystic');toast(NAMES[sp.no]+'이(가) '+GSP[sr].n+'(으)로 돌아갔어요.');closeLayer();commit();}
function gspMove(sr,k,i){const L=gspOf(sr),bp=L[k],sp=acc.slots[i];if(!bp)return;
 if(sp){if(!isGuest(sp.no)||gSer(sp.no)!==sr)return toast('같은 시리즈의 스타즈렐름 환수하고만 자리를 바꿀 수 있어요.');const w=moveBlock(sp);if(w)return toast(w);if(acc.arenaRep!=null&&sp.born===acc.arenaRep)return toast('대전 대표 환수는 옮길 수 없어요.');}
 restOut(bp);if(sp){restIn(sp);L[k]=sp;}else L.splice(k,1);acc.slots[i]=bp;acc.notice[i]=null;sel=i;
 SFX.play('equip');toast(sp?NAMES[bp.no]+'와(과) '+NAMES[sp.no]+'의 자리를 바꿨어요.':NAMES[bp.no]+'이(가) 슬롯 '+(i+1)+'에서 성장해요.');closeLayer();commit();}
function gspModal(sr,k){const bp=gspOf(sr)[k],L=document.getElementById('layer');if(!bp)return;
 const rows=acc.slots.map((sp,i)=>{let w='';if(sp){if(!isGuest(sp.no)||gSer(sp.no)!==sr)w='일반 환수가 있어요';else w=moveBlock(sp)||(acc.arenaRep!=null&&sp.born===acc.arenaRep?'대전 대표':'');}
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
  p.hu=Math.min(100,p.hu+v);if(full)addAff(p,-3);SFX.play('munch');toast(full?'배가 불렀는데 또 먹었어요… 호감도 -3':ITEMS[k].n+'을(를) 먹었어요! 포만감 +'+v);closeLayer();commit();},
 ki(v){const p=P();if(!guard(p))return;const [k,n0]=String(v).split(':'),n=+n0||1,id=KI[k];if(!id)return;const cap=gCap(p.st);
  if(!cap)return toast('알은 아직 기운을 받을 수 없어요. 유체가 되면 쓸 수 있어요.');
  const room=cap-(p.g[k]||0);if(room<=0)return toast(ELK[k]+' 게이지가 이미 가득해요 ('+cap+').');
  const use=Math.min(n,room,acc.inv[id]||0);if(use<=0)return toast(ITEMS[id].n+'이(가) 없어요. 마을에서 생산해 주세요.');
  acc.inv[id]-=use;addG(p,k,use);SFX.play('magic');toast(ITEMS[id].n+' ×'+use+' · '+ELK[k]+' '+p.g[k]+'/'+cap);kiMenu();commit();},
 dew(){const p=P();if(!guard(p))return;if(p.th>=100)return toast('목마르지 않아요.');if(!take('dew'))return;SFX.play('drip');p.th=Math.min(100,p.th+40);commit();},
 soap(){const p=P();if(!guard(p))return;if(p.cl>=100)return toast('이미 깨끗해요.');if(!take('soap'))return;SFX.play('bubble');p.cl=Math.min(100,p.cl+50);commit();},
 pat(){const p=P();if(!guard(p))return;const d=daily(p);if(d.pat>=2)return toast('오늘 쓰다듬기를 다 했어요 (하루 2번).');d.pat++;addAff(p,2);SFX.play('pat');toast('기분 좋아해요! 호감도 +2');commit();},
 play(){const p=P();if(!guard(p))return;const d=daily(p);if(d.play)return toast('오늘은 이미 함께 놀았어요 (하루 1번).');if(p.sick!=null)return toast('아플 때는 놀 수 없어요.');ybStart(p);},
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
  confirmBox('각성 ★'+((p.star||0)+1),NAMES[p.no]+'을(를) 각성할까요?\n재료: '+Object.entries(c).map(([k,n])=>ITEMS[k].n+' ×'+n).join(', ')+'\n각성할 때마다 체력·공격력·방어력 +4%'+((p.star||0)+1===3?', 회피·직격·치명 +5':(p.star||0)+1===5?', 회피·직격·치명 +5 추가':''),()=>{
   Object.entries(c).forEach(([k,n])=>{acc.inv[k]-=n;});p.star=(p.star||0)+1;SFX.play('fanfare');toast(NAMES[p.no]+' 각성 ★'+p.star+'!');commit();});},
 admItem(k){const p=P();if(!p)return;if(!take(k))return;
  if(TCUT[k]){const job=p.train||p.errand,nm=p.train?'수련':'심부름';if(!job){acc.inv[k]++;return toast('진행 중인 수련이나 심부름이 없어요. 건설 단축은 마을의 건물에서 써 주세요.');}const cut=TCUT[k]*MIN,left=job.end-now();SFX.play('magic');if(left<=cut){job.end=now();tickAll();toast(nm+'이 바로 끝났어요!');}else{job.end-=cut;toast('남은 '+nm+' 시간이 '+fmtDur(cut)+' 줄었어요.');}}
  if(k==='xm_seal'){const job=p.train||p.errand;if(!job){acc.inv[k]++;return toast('진행 중인 수련이나 심부름이 없어요.');}if(job.seal){acc.inv[k]++;return toast('이미 크리스마스 씰을 붙였어요.');}job.seal=1;const left=Math.max(0,job.end-now());job.end=now()+left/2;SFX.play('magic');toast((p.train?'수련':'심부름')+' 남은 시간이 절반으로 줄었어요!'+(p.train?' 경험치도 1.5배!':''));}
  if(k==='sec_fix'){if(p.fix&&p.fix>now()){acc.inv[k]++;return toast('이미 생활 수치가 고정되어 있어요. (남은 '+fmtDur(p.fix-now())+')');}p.fixS=now();p.fix=now()+8*H;SFX.play('magic');toast('8시간 동안 생활 수치가 줄지 않아요.');}
  if(k==='sec_aff'){if(p.aff>=100){acc.inv[k]++;return toast('호감도가 이미 가득해요.');}addAff(p,10);SFX.play('magic');toast('호감도가 10 올랐어요.');}
  if(k==='sec_cure'){curePet(p);SFX.play('heal');toast('나았어요!');}
  if(k==='sec_cancel'){if(!p.prev){acc.inv[k]++;return toast('되돌릴 진화가 없어요.');}Object.assign(p,p.prev);p.prev=null;SFX.play('mystic');toast('진화를 되돌렸어요.');}
  commit();},
 tcancel(i){const p=acc.slots[i==null?sel:+i];if(!p||!p.train)return;
  confirmBox('수련 취소',NAMES[p.no]+'의 '+TMAP[p.train.m].n+' 수련을 멈출까요? 경험치는 받지 못하고, 쓴 행동력과 그동안 줄어든 생활 수치는 돌아오지 않아요.',()=>{advance(p,now());if(!p.train)return render();
   const dur=Math.max(0,(now()-p.train.start)-fixOverlap(p,p.train.start,now()))/H,m=.5*(1-gearSum(p).decay/100);const ded=(k,rate)=>{p[k]=Math.max(0,p[k]-rate*dur*m);};ded('hu',huRate(p));ded('th',10);ded('cl',100/24);
   const nm=TMAP[p.train.m].n;p.train=null;SFX.play('thud');toast(nm+' 수련을 취소했어요.');commit();});},
 train(v){const p=P();if(!guard(p))return;const [m,d]=String(v).split(':').map(Number);if(p.sick!=null)return toast('아파서 수련할 수 없어요.');const mp=TMAP[m];if(!mp||TDUR[d]==null)return;
  if(p.lv>=maxLvP(p))return toast('최대 레벨이라 경험치를 더 받을 수 없어요. 먼저 진화하세요.');if(p.en<TCOST[d])return toast('행동력이 부족해요 ('+TCOST[d]+' 필요).');
  const ms=TDUR[d]*MIN*(1-trainCut(p));p.en-=TCOST[d];p.train={m,d,start:now(),end:now()+ms};SFX.play('whoosh');toast(NAMES[p.no]+'이(가) '+mp.n+'(으)로 '+durTxt(TDUR[d])+' 수련을 떠났어요.');commit();},
 evolve(){const p=P();const e=evoCheck(p);if(!e.ok)return toast(e.reason);evoAnim(p,evoPick(e));},
 liberate(){const p=P();if(!p)return;if(isGuest(p.no))return toast('스타즈렐름 등급 환수는 해방할 수 없어요.');if(p.st<4)return toast('4단계부터 해방할 수 있어요.');if(p.sick!=null)return toast('아플 때는 해방할 수 없어요.');if(acc.dex[p.no]&&acc.dex[p.no].freed)return toast('이미 해방한 환수예요. 선계 귀환만 가능해요.');
  const lm=libMail(p.st);
  confirmBox('해방하기',NAMES[p.no]+'('+stN(p)+')을(를) 해방할까요? 되돌릴 수 없어요. 도감에 解 도장이 찍혀요.\n\n【해방 보상 · 우편으로 도착】\n'+mailParts(lm).join(', ')+'\n\n인게임 아이템(패)은 가방의 [코드화]에서 코드로 바꿔 게임에서 받아요.',()=>{const no=p.no,st=p.st;dexAdd(no);acc.dex[no].freed=true;unequipAll(p);
   acc.mail=acc.mail||[];acc.mail.push(stampMail(Object.assign(lm,{msg:NAMES[no]+'('+st+'단계)을(를) 해방한 보상이에요. 선계에서 새로운 인연을 기다려요.'})));
   acc.libs=acc.libs||[];acc.libs.push({id:'l'+Date.now().toString(36),no,st,t:Date.now(),done:true});
   acc.notice[sel]=NAMES[no]+'을(를) 해방했어요. 보상이 우편함에 도착했어요!';acc.slots[sel]=null;commit();SFX.play('mystic');toast('해방했어요! 우편함을 확인하세요.');});},
 home(){const p=P();if(!p)return;if(isGuest(p.no)&&!isGFinal(p.no))return toast('스타즈렐름 알·유체는 선계 귀환할 수 없어요. 완전체가 되면 보낼 수 있어요.');if(!isGuest(p.no)&&!isFinalNo(p.no))return toast('최종 형태만 선계로 돌려보낼 수 있어요.');const c=isGuest(p.no)?REFUND[GUEST_ST]:REFUND[Math.max(4,p.st)];
  confirmBox('선계 귀환',NAMES[p.no]+'을(를) 선계로 돌려보내고 환수 코인 '+c+'개를 받을까요?',()=>{SFX.play('mystic');SFX.play('coins');unequipAll(p);acc.coins+=c;acc.notice[sel]=NAMES[p.no]+'이(가) 선계로 돌아갔어요. (코인 +'+c+')';acc.slots[sel]=null;commit();});},
 toVil(){const p=P();if(!p)return;const w=moveBlock(p);if(w)return toast(w);if(vilPets().length>=vilCap())return toast('마을이 가득 찼어요 ('+vilCap()+'마리). 상점에서 마을을 넓힐 수 있어요.');
  restIn(p);p.vb=null;const c=vilFreeCell(petSz(p));p.vx=c[0];p.vy=c[1];acc.vil.pets.push(p);acc.slots[sel]=null;acc.notice[sel]=null;SFX.play('equip');toast(NAMES[p.no]+'이(가) 마을로 갔어요. 마을에서는 생활 수치가 줄지 않고 행동력은 차요.');commit();},
 autoSleep(){const p=P();if(!p)return;p.autoSleep=!autoOn(p);toast(NAMES[p.no]+': 수련 후 자동 수면 '+(p.autoSleep?'켜짐':'꺼짐'));commit();},
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
 function boom(){if(cancelled)return;const el=gEls(target)[0]||'metal';const c=ELC[el];say.innerHTML='';a.src=newS;SFX.play('boom');
  const b=document.createElement('div');b.className='burst';b.style.background='radial-gradient(circle,#fff 0%,#fff6d6 15%,'+c+' 40%,rgba(0,0,0,0) 70%)';box.insertBefore(b,a);
  setTimeout(()=>{if(cancelled)return;
   p.prev=JSON.parse(JSON.stringify(Object.assign({},p,{prev:null})));
   const oldName=NAMES[p.no];p.no=target;p.st=FORMS[target].st;p.lv=1;p.exp=0;p.en=maxEn(p);p.g=newGauge();p.gT=newGauge();p.star=0;dexAdd(target);
   a.classList.remove('sil');b.remove();box.classList.add('stage');box.style.background='';
   SFX.play('fanfare');say.style.cssText='';say.innerHTML='축하합니다!<br>'+esc(oldName)+'은(는) <b>'+esc(NAMES[target])+'</b>(으)로 진화했다!<br><small style="color:#2b5a5e">행동력이 가득 찼어요! 오행 게이지는 0부터 다시 채워요.</small><div style="margin-top:10px;text-align:right"><button class="btn" id="evoOk">확인</button></div>';
   document.getElementById('evoOk').onclick=closeLayer;commit();},1100);}
}
function closeLayer(){document.getElementById('layer').innerHTML='';}
function confirmBox(title,msg,yes){const L=document.getElementById('layer');L.innerHTML='<div class="overlay"><div class="modal" role="dialog" aria-label="'+esc(title)+'"><b class="serif" style="font-size:22px;color:#ffd36e">'+esc(title)+'</b><p style="margin:0;white-space:pre-line">'+esc(msg)+'</p><div style="display:flex;gap:8px;margin-top:6px"><button class="btn" id="cfY">확인</button><button class="btn ghost" id="cfN">취소</button></div></div></div>';document.getElementById('cfY').onclick=()=>{closeLayer();yes();};document.getElementById('cfN').onclick=closeLayer;}
function feedMenu(){const L=document.getElementById('layer'),p=P();
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="먹이 주기"><b class="serif" style="font-size:20px">무엇을 먹일까요?</b><small style="color:#c9d8d5">포만감 '+Math.round(p?p.hu:0)+' / 100 · 가득 찬 상태에서 먹이면 호감도 -3</small><div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;width:100%">'+[1,2,3,4,5].map(k=>{const id='food_'+k;return '<button class="act" data-a="food" data-v="'+id+'" '+((acc.inv[id]||0)?'':'disabled')+'><img class="px" src="'+ITEMS[id].img+'" alt=""><b>'+ITEMS[id].n+'</b><small>+'+FOOD[k].hu+' · 보유 '+(acc.inv[id]||0)+'</small></button>';}).join('')+'</div><p class="muted" style="color:#c9d8d5;margin:0">먹이는 상점이나 마을의 [환수 음식]에서 얻어요.</p><button class="btn ghost" data-close="1">닫기</button></div></div>';}
function kiMenu(){const L=document.getElementById('layer'),p=P();if(!p)return;const cap=gCap(p.st);
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="기운 먹이기"><b class="serif" style="font-size:20px">기운 먹이기</b><small style="color:#c9d8d5">'+stN(p)+' 게이지 최대 '+cap+' · 기운 1개 = 게이지 +1</small><div class="kigrid">'+GAUGES.map(k=>{const id=KI[k],have=acc.inv[id]||0,v=p.g[k]||0,full=v>=cap;
  return '<div class="kirow"><img class="px" src="'+ITEMS[id].img+'" alt=""><div class="kib"><b style="color:'+ELC[k]+'">'+ELK[k]+'</b> <small>'+v+' / '+cap+' · 보유 '+have+'</small><div class="trk"><i style="width:'+(cap?v/cap*100:0)+'%;background:linear-gradient(90deg,'+ELG[k]+')"></i></div></div>'+[1,5,10].map(n=>'<button class="btn sm '+(full||!have?'soft':'')+'" data-a="ki" data-v="'+k+':'+n+'" '+(full||!have||!cap?'disabled':'')+'>×'+n+'</button>').join('')+'</div>';}).join('')+'</div><button class="btn ghost" data-close="1">닫기</button></div></div>';}
function susMenu(){const L=document.getElementById('layer');L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="수상한 기운"><b class="serif" style="font-size:20px">수상한 기운</b><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%">'+['sus_s','sus_m','sus_l'].map((k,i)=>'<button class="act" data-a="sus" data-v="'+k+'" '+((acc.inv[k]||0)?'':'disabled')+'><img class="px" src="'+ITEMS[k].img+'" alt=""><b>'+['소','중','대'][i]+'</b><small>보유 '+(acc.inv[k]||0)+'</small></button>').join('')+'</div><p class="muted" style="color:#c9d8d5">빨리 크는 대신 오행 게이지가 무작위로 오르고 부작용이 있어요.<br>소: 포만감 -10 · 중: 포만감·청결·목마름 -20 · 대: 무작위 오행 +3</p><button class="btn ghost" data-close="1">닫기</button></div></div>';}
/* ================= 화면 ================= */

/* ================= 우편함 ================= */
function mailParts(m){const a=[];if(m.coins)a.push('코인 '+fmt(m.coins));if(m.evc)a.push('이벤트 코인 '+fmt(m.evc));if(m.eggs)a.push('환수 알 ×'+m.eggs);if(m.yyEggs)a.push('음양알 ×'+m.yyEggs);Object.entries(m.items||{}).forEach(([k,n])=>{if(ITEMS[k]&&n>0)a.push(ITEMS[k].n+' ×'+n);});(m.gear||[]).forEach(g=>a.push(GN[g.g]+' '+(g.t==='n'?(g.o&&NG_OPT[g.o]?NG_OPT[g.o].n+'의 ':'')+'노리개':TN[g.t])+' +'+g.p));return a;}
function mailIcons(m){let h='';if(m.coins)h+='<span class="mchip"><img class="px" src="i/coin_spin.gif" alt="">'+fmt(m.coins)+'</span>';if(m.eggs)h+='<span class="mchip"><img class="px" src="h/00.gif" alt="">환수 알 ×'+m.eggs+'</span>';if(m.yyEggs)h+='<span class="mchip"><img class="px" src="h/146.gif" alt="">음양알 ×'+m.yyEggs+'</span>';Object.entries(m.items||{}).forEach(([k,n])=>{if(ITEMS[k]&&n>0)h+='<span class="mchip"><img class="px" src="'+ITEMS[k].img+'" alt="">'+esc(ITEMS[k].n)+' ×'+n+'</span>';});(m.gear||[]).forEach(g=>{h+='<span class="mchip"><img class="px" src="'+(g.t==='n'?(g.o&&NG_OPT[g.o]?gearImg(g):'eq/n.gif'):gearImg(g))+'" alt=""><b class="c'+g.g+'">'+GN[g.g]+' '+(g.t==='n'?(g.o&&NG_OPT[g.o]?NG_OPT[g.o].n+'의 ':'')+'노리개':TN[g.t])+' +'+g.p+'</b></span>';});return h;}
function newMailId(){return 'm'+Date.now().toString(36)+Math.floor(rnd()*1e6).toString(36);}

/* ================= 출석부 ================= */
const ATT=[{k:'sus_s'},{k:'sec_bless'},{k:'sec_active'},{k:'tal_time'},{k:'sus_m'},{k:'sus_l'},{egg:1}];
function attReward(r){return r.egg?{n:'환수 알',img:'h/00.gif'}:{n:ITEMS[r.k].n,img:ITEMS[r.k].img};}
function attCheck(){if(MODE!=='player'||!acc)return 0;const t=dayKey(now()),y=dayKey(now()-24*H),a=acc.att||{last:null,streak:0};if(a.last===t)return 0;
 const st=a.last===y&&a.streak<7?a.streak+1:1;acc.att={last:t,streak:st};const r=ATT[st-1];
 if(r.egg){acc.attEggBag=giveEgg(0)<0;}
 else acc.inv[r.k]=(acc.inv[r.k]||0)+1;
 return st;}
function attModal(fresh){const a=acc.att||{streak:0},st=a.last===dayKey(now())?a.streak:0;const L=document.getElementById('layer');
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal att" role="dialog" aria-label="출석부"><b class="serif" style="font-size:24px;color:#ffd36e">출석부</b><p style="margin:0;color:#e8fff8">'+(st?'연속 <b style="color:#ffd36e">'+st+'일째</b> 출석 중!':'오늘 아직 출석하지 않았어요.')+'</p>'+
 '<div class="attgrid">'+ATT.map((r,i)=>{const w=attReward(r),on=i<st,now_=fresh&&i===st-1;return '<div class="attc'+(on?' on':'')+(i===6?' big':'')+'"><span class="attd">'+(i+1)+'일차</span><img class="px" src="'+w.img+'" alt=""><small>'+esc(w.n)+'</small>'+(on?'<span class="seal7'+(now_?' drop':'')+'">完</span>':'')+'</div>';}).join('')+'</div>'+
 (fresh?'<p style="margin:0;color:#ffd36e;font-weight:700">오늘의 보상: '+esc(attReward(ATT[st-1]).n)+' 획득!'+(ATT[st-1].egg?' (가방에 보관했어요)':'')+'</p>':'')+
 '<small style="color:#c9d8d5">매일 오전 6시에 새 출석이 열려요. 하루라도 빠지면 1일차부터 다시 시작해요.</small><button class="btn" data-close="1" style="background:#f0c75e">확인</button></div></div>';
 if(fresh)setTimeout(()=>SFX.play(st===7?'fanfare':'egg'),350);}
/* ================= 도감 컬렉션 (해방하면 불이 들어와요) ================= */
function colPath(a,b){const r=[];let x=b;while(x!=null){r.unshift(x);if(x===a)break;x=FORMS[x].parent;}return r[0]===a?r:[a,b];}
function vMail(){const ms=(acc.mail||[]).slice().sort((a,b)=>b.t-a.t);
 return '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><h1 class="serif" style="margin:0;font-size:26px">우편함</h1>'+(ms.length>1?'<button class="btn teal" data-mclaim="*">모두 받기 ('+ms.length+')</button>':'')+'</div>'+
 (ms.length?'<div class="mlist">'+ms.map(m=>'<div class="card mail"><div class="mhead"><b class="serif" style="font-size:18px">'+esc(m.title||'우편')+'</b><small class="muted">'+esc(m.from||'운영자')+' · '+new Date(m.t).toLocaleDateString('ko-KR')+'</small></div>'+(m.msg?'<p style="margin:6px 0;white-space:pre-wrap;white-space:pre-line">'+esc(m.msg)+'</p>':'')+'<div class="mchips">'+mailIcons(m)+'</div><div style="text-align:right;margin-top:8px"><button class="btn" data-mclaim="'+esc(m.id)+'">'+(mailParts(m).length?'받기':'확인')+'</button></div></div>').join('')+'</div>'
 :'<div class="card" style="text-align:center;padding:40px 16px"><img class="px" src="i/q.png" alt="" style="width:48px;opacity:.5"><p class="muted">받은 우편이 없어요.</p></div>');}
function claimMail(id){const list=acc.mail||[];const want=id==='*'?list.slice().sort((a,b)=>a.t-b.t):list.filter(m=>m.id===id);if(!want.length)return;const got=[],done=new Set();let free=acc.slots.filter(q=>!q).length,blocked=0;
 want.forEach(m=>{const e=(m.eggs||0)+(m.yyEggs||0);
  if(m.coins)acc.coins+=m.coins;if(m.evc)acc.evc=(acc.evc||0)+m.evc;Object.entries(m.items||{}).forEach(([k,n])=>{if(ITEMS[k]&&n>0)acc.inv[k]=(acc.inv[k]||0)+n;});(m.gear||[]).forEach(g=>{const n=gearNew(g.t,g.g);if(g.t==='n'&&g.o&&NG_OPT[g.o]){n.o=g.o;n.subs=[];ngFill(n);}if(g.t==='b'&&BELL[g.k])n.k=g.k;n.p=g.p||0;acc.gear.push(n);});
  for(let j=0;j<e;j++){if(giveEgg(j<(m.eggs||0)?0:146)<0)blocked++;}
  got.push(...mailParts(m));done.add(m.id);});
 acc.mail=list.filter(m=>!done.has(m.id));
 
 if(got.length){SFX.play(got.some(t=>t.startsWith('환수 알')||t.startsWith('음양알'))?'egg':'coins');toast('받았어요! '+got.slice(0,4).join(', ')+(got.length>4?' 외 '+(got.length-4)+'개':'')+(blocked?' (알 '+blocked+'개는 가방에 보관했어요)':''));}else SFX.play('ok');
 commit();}

/* ================= 화면: 상단 · 성장 슬롯 · 탐험 ================= */
const NAV=[['village','마을','nav_village'],['home','성장','nav_grow'],['train','수련·심부름','nav_tower'],['gear','장비','nav_gear'],['bag','가방','nav_bag'],['shop','상점','nav_shop'],['dex','도감','nav_dex'],['pvp','대전','nav_pvp'],['boss','토벌','nav_boss'],['tower','구천탑','nav_tower']];
function header(){
 const tabs=NAV.concat(xmOn()?[['xmas','설화 던전','nav_event']]:[],hasGuest()?[['guest','전용 공간','nav_settings']]:[],[['code','코드','nav_settings'],['mail','우편','nav_mail']]);
 return '<header class="sky"><div class="bar"><span class="logo">환수키우기</span><nav class="main" aria-label="주 메뉴">'+tabs.map(([k,n,ic])=>'<button data-view="'+k+'" class="'+(view===k?'on':'')+'"><img class="navic" src="i/ui/'+ic+'.png" alt="">'+n+(k==='mail'&&acc.mail&&acc.mail.length?'<span class="mbadge">'+acc.mail.length+'</span>':'')+'</button>').join('')+'</nav><div class="coinbox"><img class="px" src="i/coin_spin.gif" alt="" width="44" height="44"><b>'+fmt(acc.coins)+'</b><span class="muted" style="margin-left:4px">코인</span></div><button class="btn ghost sm" data-a2="att" title="출석부">출석'+(acc.att&&acc.att.last===dayKey(now())?' '+acc.att.streak+'일':'')+'</button><button class="btn ghost sm" data-a2="sfx" title="효과음" aria-label="효과음 '+(SFX.st.sfx?'끄기':'켜기')+'">'+(SFX.st.sfx?'🔊':'🔇')+'</button><button class="btn ghost sm" data-a2="bgm" title="배경음" aria-label="배경음 '+(SFX.st.bgm?'끄기':'켜기')+'" style="'+(SFX.st.bgm?'':'opacity:.4')+'">♪</button><span style="color:#fff8e6;font-size:13px">'+esc(acc.nick||acc.id)+'</span><button class="btn ghost sm" data-a2="logout">로그아웃</button></div>'+
 ((evBanner().length||cfg.notice)?'<div class="banner">'+(evBanner().length?'<span class="tag">이벤트</span><span>'+evBanner().map(esc).join(' · ')+'</span>':'')+(cfg.notice?'<span>[공지] '+esc(cfg.notice)+'</span>':'')+'</div>':'')+
 (acc.offset?'<div class="banner" style="background:#7a4512">테스트 시간 +'+(acc.offset/H).toFixed(1)+'시간 앞당겨진 상태예요</div>':'')+'</header>';}
function slotsBar(){return '<div class="slots" role="tablist" aria-label="성장 슬롯">'+acc.slots.map((_,i)=>{const p=acc.slots[i];if(!p)return '<button role="tab" class="slot'+(sel===i?' on':'')+'" data-sel="'+i+'"><img class="px" src="i/q.png" alt="" style="padding:10px"><span><b>빈 슬롯</b><small>알을 부화하거나 마을에서 데려와요</small></span></button>';
 const st=p.errand?'심부름 · '+fmtDur(p.errand.end-now()):p.train?'수련 · '+fmtDur(p.train.end-now()):p.sick!=null?'아파요!':p.sleep?'자는 중':stN(p)+' · Lv '+p.lv;
 return '<button role="tab" class="slot'+(sel===i?' on':'')+'" data-sel="'+i+'"><img class="px" src="'+img(p.no)+'" alt=""><span><b>'+NAMES[p.no]+'</b><small>'+st+'</small></span></button>';}).join('')+(acc.slots.length<MAX_SLOTS?'<button class="slot lockslot" data-slotadd="1"><img class="px" src="i/sec_slot.gif" alt=""><span><b>슬롯 추가</b><small>'+((acc.inv.sec_slot||0)>0?'성장슬롯추가비서 ('+acc.inv.sec_slot+')':slotPrice()+'코인')+'</small></span></button>':'')+'</div>';}
function enTip(p,html){const r=5*(1+gearSum(p).regen/100),mx=maxEn(p);let tip;
 if(p.en>=mx)tip='행동력이 가득 찼어요 · 시간당 +'+r.toFixed(2).replace(/\.?0+$/,'');
 else{const full=Math.ceil((mx-p.en)/r*60);tip='시간당 +'+r.toFixed(2).replace(/\.?0+$/,'')+' · 가득 차기까지 '+(full>=60?Math.floor(full/60)+'시간 ':'')+(full%60)+'분';}
 return '<div class="entip" tabindex="0">'+html+'<span class="tipbox">'+esc(tip)+'</span></div>';}
function bar(lb,v,max,grad,warn){const w=Math.max(0,Math.min(100,v/max*100));return '<div class="stat"><span class="lb">'+lb+'</span><div class="tr"><i style="width:'+w+'%;background:linear-gradient(90deg,'+grad+')"></i></div><span class="v" style="'+(warn?'color:#b02a1f':'')+'">'+fmt(v)+(max!==100?'/'+fmt(max):'')+'</span></div>';}
function gaugeBars(p){const cap=gCap(p.st),need_=gEls(p.no);
 return GAUGES.map(k=>{const v=p.g[k]||0,full=cap>0&&v>=cap;return '<div class="el"><div class="orb'+(full?' glow':'')+'"><img class="px elmed" src="'+ITEMS[KI[k]].img+'" alt=""></div><div style="flex:1;display:flex;flex-direction:column;gap:3px"><div style="display:flex;justify-content:space-between;font-size:13px"><b style="color:'+ELC[k]+'">'+ELK[k]+(need_.includes(k)?' <small class="muted">주 속성</small>':'')+'</b><b>'+v+' <span class="muted">/ '+cap+'</span></b></div><div class="trk'+(full?' glow':'')+'" style="border:1px solid '+ELC[k]+'"><i style="width:'+(cap?v/cap*100:0)+'%;background:linear-gradient(90deg,'+ELG[k]+')"></i></div></div></div>';}).join('');}
function statBlock(p){const s=statsOf(p),pc=x=>(x*100).toFixed(1).replace(/\.0$/,'')+'%';
 return '<div class="sgrid"><span>체력</span><b>'+fmt(s.hp)+'</b><span>공격력</span><b>'+fmt(s.atk)+'</b><span>방어력</span><b>'+fmt(s.def)+'</b><span>치명</span><b>'+s.crit+' <small>('+pc(critP(s.crit))+')</small></b><span>회피</span><b>'+s.eva+' <small>(최대 '+pc(evaP(s.eva,0))+')</small></b><span>직격</span><b>'+s.pen+' <small>(방어 무시 '+pc(penP(s.pen))+')</small></b></div>';}
function stageBg(p){if(p.train)return TMAP[p.train.m].img;if(p.errand)return ERR[p.errand.m].img;return 'm/home.webp';}
function vHome(){
 const p=P();
 if(!p){const n=acc.notice[sel],eggs=['egg_n','egg_yy','egg_x','egg_g1','egg_g2'].filter(k=>acc.inv[k]>0),vp=vilPets();
  return slotsBar()+'<div class="row"><div class="card" style="flex:1 1 420px">'+(n?'<p class="warn">'+esc(n)+'</p>':'')+'<h2>빈 성장 슬롯</h2>'+(eggs.length?'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">'+eggs.map(k=>'<button class="btn" data-hatch="'+k+'"><img class="px" src="'+ITEMS[k].img+'" alt="" style="width:28px;height:28px;vertical-align:-8px"> '+ITEMS[k].n+' 부화 ('+acc.inv[k]+')</button>').join('')+'</div>':'<p class="muted">가방에 알이 없어요.</p>')+
  '<h3 style="margin:12px 0 6px">마을에서 데려오기</h3>'+(vp.length?'<div class="vpick">'+vp.map((q,i)=>'<button class="bmp" data-vtoslot="'+i+'"><img class="px" src="'+img(q.no)+'" alt=""><small>'+esc(NAMES[q.no])+'<br>'+stN(q)+' Lv '+q.lv+'</small></button>').join('')+'</div>':'<p class="muted">마을에 환수가 없어요.</p>')+'</div>'+
  '<div class="card" style="flex:1 1 320px"><h2>알 코드 입력</h2><p class="muted">운영자에게 받은 알 코드를 입력하면 가방에 알이 들어와요.</p><form data-form="egg" style="display:flex;gap:8px;flex-wrap:wrap"><label class="f" style="flex:1">알 코드<input type="text" name="code" placeholder="EGG-XXXX-XXXX" required></label><button class="btn teal" style="align-self:flex-end">알 받기</button></form></div></div>';}
 const e=evoCheck(p),bd=badgeOf(p),d=daily(p),mx=maxLvP(p),hr=hearts(p),aw=awakeOk(p),smx=STAR_MAX(p.no);
 const stCls=p.sick!=null?' sick':p.sleep?' sleep':'';
 const status=p.errand?'<span class="chip" style="background:rgba(160,100,30,.92);color:#fff8e6">심부름 · '+esc(ERR[p.errand.m].n)+' · '+fmtDur(p.errand.end-now())+'</span>':p.train?'<span class="chip" style="background:rgba(43,90,94,.9);color:#e8fff8">수련 · '+esc(TMAP[p.train.m].n)+' · '+fmtDur(p.train.end-now())+'</span> <button class="btn soft sm" data-a="tcancel" data-v="'+sel+'" style="min-height:0;padding:3px 10px">수련 취소</button>':p.sick!=null?'<span class="chip" style="background:#8f2219;color:#fff">아파요! 소멸까지 '+fmtDur(p.sick+24*H-now())+'</span>':p.sleep?'<span class="chip" style="background:#2c3466;color:#e6e9ff">자는 중 · '+fmtDur(p.sleep-now())+'</span>':'<span class="chip" style="background:rgba(43,90,94,.9);color:#e8fff8">쉬는 중</span>';
 const warns=[];if(p.hu<=10)warns.push('배가 너무 고파요! 호감도가 시간마다 줄어요.');if(p.th<=10)warns.push('목이 너무 말라요! 호감도가 시간마다 줄어요.');if(p.cl<=10)warns.push('너무 더러워요! 호감도가 시간마다 줄어요.');if(p.aff<=5&&p.sick==null)warns.push('호감도가 0이 되면 병에 걸려요.');
 const lvTxt=p.lv>=mx?'Lv '+p.lv+' MAX':'Lv '+p.lv,expW=p.lv>=mx?100:p.exp/needP(p)*100;
 const acts=[['feed','','i/act_feed.png','먹이 주기','포만감 '+Math.round(p.hu)],['kimenu','','i/ui/icon_ki_yinyang.png','기운 먹이기','게이지 '+gCap(p.st)],['dew','','i/act_dew.png','설화의 이슬','보유 '+(acc.inv.dew||0)],['soap','','i/act_wash.png','씻기기','비누 '+(acc.inv.soap||0)],['pat','','i/act_pat.png','쓰다듬기','오늘 '+d.pat+'/2'],['play','','i/act_play.png','놀아주기',d.play?'오늘 완료':'야바위 · 호감도 +10'],['sleep','','i/act_sleep.png',p.sleep?'깨우기':'재우기','남은 '+(2-d.sleep)+'회'],['elixir','','i/act_elixir.png','영약환단','보유 '+(acc.inv.elixir||0)],['susm','',ITEMS.sus_s.img,'수상한 기운','소·중·대'],['energy','',ITEMS.sec_active.img,'행동력 비서','보유 '+(acc.inv.sec_active||0)],['resetKi','',ITEMS.reset_ki.img,'오행초기화','보유 '+(acc.inv.reset_ki||0)]];
 const adm=['xm_seal','sec_fix','tal_time','sec_t60','sec_t180','sec_t300','sec_t480','sec_aff','sec_cure','sec_cancel'].filter(k=>acc.inv[k]>0).map(k=>['admItem',k,ITEMS[k].img,ITEMS[k].n,'보유 '+acc.inv[k]]);
 const star=smx?'<span class="stars">'+[...Array(smx)].map((_,i)=>'<i class="'+(i<(p.star||0)?'on':'')+'">★</i>').join('')+'</span>':'';
 return slotsBar()+'<div class="row"><section class="grow" aria-label="환수 탐험"><div class="stagebox explore'+stCls+'" style="'+(p.train||p.errand||!(acc.deco&&acc.deco.bg)?'background-image:url('+stageBg(p)+')':'')+'"><div style="position:absolute;left:18px;top:16px;display:flex;flex-direction:column;gap:8px;z-index:3"><div class="plate" style="display:flex;align-items:baseline;gap:8px;flex-wrap:wrap"><span class="serif" style="font-size:24px;font-weight:700">'+NAMES[p.no]+'</span>'+star+'<span class="muted">no.'+dexNo(p.no)+' · '+stN(p)+'</span>'+elTag(ELOF[p.no])+'</div><div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">'+(gradeTag(p.no)+(bd==='final'?finalIcon:bd==='wait'?waitIcon:'')+'<span class="chip" style="background:rgba(255,250,240,.92);color:#3a2a08">특성 '+TRAITN[TRAIT[p.no]]+'</span>')+status+decoBtn()+'</div></div><div class="plate cpp" style="position:absolute;right:18px;top:16px;min-width:170px;z-index:3"><div style="display:flex;justify-content:space-between;align-items:baseline"><span class="muted">전투력</span><b style="font-size:18px;color:#8a2a12">'+fmt(cp(p))+'</b></div><div class="muted" style="display:flex;justify-content:space-between"><span>호감도 보너스</span><span>+'+HEART_BON[hr]+'%</span></div></div><img class="pet px" src="'+img(p.no)+'" alt="'+NAMES[p.no]+'"><div class="expbar"><b>'+lvTxt+'</b><div class="ebt"><i style="width:'+expW+'%"></i></div><span style="font-size:13px">'+(p.lv>=mx?'경험치 MAX':fmt(p.exp)+' / '+fmt(needP(p)))+'</span></div></div>'+
 '<div class="card"><div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;align-items:center"><h2 style="margin:0">돌보기</h2><label style="display:flex;gap:8px;align-items:center;font-size:13px;cursor:pointer"><input type="checkbox" data-a="autoSleep" '+(autoOn(p)?'checked':'')+' style="width:18px;height:18px;accent-color:#2b5a5e">수련 후 자동 수면 <span class="muted">(오늘 남은 수면 '+(2-d.sleep)+'회)</span></label></div>'+warns.map(w=>'<p class="warn" style="margin:8px 0 0">'+w+'</p>').join('')+
 '<div class="acts" style="margin-top:12px">'+acts.concat(adm).map(a=>'<button class="act" data-a="'+a[0]+'" data-v="'+a[1]+'"><img class="px" src="'+a[2]+'" alt=""><b>'+a[3]+'</b><small>'+a[4]+'</small></button>').join('')+'</div>'+
 '<div class="bigrow"><button class="bigb evo" data-a="evolve" '+(e.ok?'':'disabled')+'><img class="px" src="i/act_evolve.png" alt=""><span>'+(e.ok?'진화하기 → ???':e.done?'최종 형태':'진화하기 · '+esc(e.reason))+'</span></button>'+
  (smx?'<button class="bigb evo" data-a="awaken" '+(aw?'disabled':'')+'><img class="px" src="i/ui/ui_final_badge.png" alt=""><span>'+(aw?'각성 · '+esc(aw):'각성 ★'+((p.star||0)+1)+' · '+Object.entries(awakeCost(p)).map(([k,n])=>ITEMS[k].n.replace('의 기운','')+' '+n).join('+'))+'</span></button>':'')+
  (isGuest(p.no)?'<button class="bigb ret" data-gsend="'+sel+'"><img class="px" src="i/tag_starz.png" alt=""><span>전용 공간으로</span></button>':'')+'<button class="bigb ret" data-a="toVil"><img class="px" src="i/ui/nav_village.png" alt=""><span>마을로 보내기</span></button>'+
  '<button class="bigb free" data-a="liberate" '+(p.st<4||isGuest(p.no)?'disabled':'')+'><img class="px" src="i/act_free.png" alt=""><span>'+(isGuest(p.no)?'해방 불가 (스타즈렐름)':'해방하기')+'</span></button>'+
  '<button class="bigb ret" data-a="home" '+((isGuest(p.no)?!isGFinal(p.no):!isFinalNo(p.no))?'disabled':'')+'><img class="px" src="i/act_return.png" alt=""><span>선계 귀환'+((isGuest(p.no)?isGFinal(p.no):isFinalNo(p.no))?' · '+(isGuest(p.no)?REFUND[GUEST_ST]:REFUND[Math.max(4,p.st)])+'코인':' (최종 형태만)')+'</span></button></div>'+(e.stuck?'<p class="warn" style="margin:10px 0 0">지금 오행으로는 진화할 수 없어요. (조건 미충족)</p>':'')+'</div></section>'+
 '<aside class="side ornate" aria-label="환수 상태"><div class="card"><h2>상태</h2>'+enTip(p,bar('행동력',p.en,maxEn(p),'#3d7d84,#7cc4c2'))+bar('포만감',p.hu,100,'#c9822b,#f0c98a',p.hu<=10)+bar('목마름',p.th,100,'#3b8beb,#a9d6ff',p.th<=10)+bar('청결도',p.cl,100,p.cl<=10?'#c0392b,#f08a7e':'#6fae3a,#bfe59a',p.cl<=10)+(p.fix&&p.fix>now()?'<div class="fixon"><img class="px" src="'+ITEMS.sec_fix.img+'" alt="">생활 수치 고정 중 · 남은 '+fmtDur(p.fix-now())+'</div>':'')+
 '<div class="stat"><span class="lb">호감도</span><span role="img" aria-label="하트 5개 중 '+hr+'개" style="display:flex;gap:3px">'+[0,1,2,3,4].map(i=>'<img class="px uiheart'+(i<hr?' on':'')+'" src="i/ui_heart_'+(i<hr?'full':'empty')+'.png" alt="">').join('')+'</span><span class="muted" style="margin-left:auto">'+Math.round(p.aff)+'/100</span></div></div>'+
 '<div class="card"><h2 style="margin:0 0 6px">오행 게이지</h2>'+gaugeBars(p)+'<p class="muted" style="margin:6px 0 0">기운 1개 = +1 · '+stN(p)+' 최대 '+gCap(p.st)+' · 진화하면 0부터 다시 채워요.</p></div>'+
 '<div class="card"><h2 style="margin:0 0 6px">전투 능력치</h2>'+statBlock(p)+'</div>'+
 '<div class="card"><div style="display:flex;justify-content:space-between"><h2 style="margin:0 0 8px">장비</h2><button class="btn soft sm" data-view="gear">장비 관리</button></div><div class="eqrow">'+GT.map(t=>{const g=p.eq[t]?gearOf(p.eq[t]):null;return g?'<button class="gear g'+g.g+'" data-gpick="'+g.u+'"><img class="px" src="'+gearImg(g)+'" alt=""><b class="c'+g.g+'" style="font-size:11px">'+GN[g.g]+' +'+g.p+'</b><small class="muted">'+TN[t]+'</small></button>':'<button class="gear" data-view="gear"><div class="geq0 muted">비어 있음</div><small class="muted">'+TN[t]+'</small></button>';}).join('')+'</div></div></aside></div>';
}
/* ================= 수련 · 심부름 ================= */
function vTrainHub(){const m=S.tmode==='errand'?'errand':'train';return '<div class="tmode">'+[['train','선계수련'],['errand','선계 심부름']].map(([k,n])=>'<button class="'+(m===k?'on':'')+'" data-tmode="'+k+'">'+n+'</button>').join('')+'</div>'+slotsBar()+(m==='errand'?vErrand():vTrain());}
function vTrain(){const p=P();
 if(!p)return '<div class="card">빈 슬롯이에요. 환수를 고른 뒤 수련을 보내세요.</div>';
 const rec=Math.min(11,Math.max(0,p.st-1)),s=selSpot==null?rec:selSpot,mp=TMAP[s],c=cp(p),ratio=c/mp.rec,cut=trainCut(p),G=gearSum(p);
 const running=acc.slots.map((q,i)=>q&&q.train?'<div class="trun"><img class="px" src="'+img(q.no)+'" alt=""><div style="flex:1"><div style="display:flex;justify-content:space-between;font-size:14px"><b>'+NAMES[q.no]+' · '+esc(TMAP[q.train.m].n)+'</b><b style="color:#2b5a5e">'+fmtDur(q.train.end-now())+'</b></div><div class="stat" style="margin:4px 0"><div class="tr"><i style="width:'+((now()-q.train.start)/(q.train.end-q.train.start)*100)+'%;background:linear-gradient(90deg,#3d7d84,#7cc4c2)"></i></div></div></div><button class="btn soft sm" data-a="tcancel" data-v="'+i+'">취소</button></div>':'').join('');
 return '<div class="row"><section class="grow"><div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px"><h1 class="serif" style="margin:0;font-size:26px">선계수련</h1>'+(expM()>1?'<b style="color:#2b5a5e;font-size:13px">이벤트: 경험치 '+expM()+'배</b>':'')+'</div><div class="mapgrid">'+TMAP.map((q,i)=>{const r=c/q.rec,tag=i===rec?['추천','background:#f0c75e;color:#3a2a08']:r>=1?['여유','background:#e3f1e4;color:#2e7d3a']:['전투력 부족','background:#fbe4df;color:#8f2219'];
  return '<button class="mapc'+(i===s?' on':'')+'" data-spot="'+i+'" style="background-image:linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(10,20,24,.85)),url('+q.img+')"><span class="mtag" style="'+tag[1]+'">'+tag[0]+'</span><b class="serif">'+(i+1)+'. '+q.n+'</b><small>권장 전투력 '+fmt(q.rec)+' · 시간당 '+fmt(q.xph)+' EXP</small></button>';}).join('')+'</div></section>'+
 '<aside class="side"><div class="card"><h2>'+(s+1)+'. '+mp.n+'</h2><div class="thumb2" style="background-image:url('+mp.img+')"></div><div class="kv" style="font-size:14px;margin:8px 0"><span>보낼 환수 <b>'+NAMES[p.no]+'</b></span><span>전투력 <b style="color:'+(ratio>=1?'#2e7d3a':'#b02a1f')+'">'+fmt(c)+' / '+fmt(mp.rec)+'</b></span><span>행동력 <b>'+Math.floor(p.en)+'</b></span>'+(cut?'<span>방울 <b>-'+Math.round(cut*100)+'%</b></span>':'')+'</div>'+(ratio<.5?'<p class="warn" style="margin:0 0 6px">전투력이 권장의 절반도 안 돼요! 실패하면 경험치를 하나도 못 받아요.</p>':'')+
  '<div class="durgrid">'+TDUR.map((m,d)=>{const exp=Math.round(mp.xph*m/60*TEFF[d]*(1+(G.exp+HEART_BON[hearts(p)])/100)*expM()),dis=p.train||p.errand||p.sick!=null||p.sleep||p.en<TCOST[d]||p.lv>=maxLvP(p);return '<button class="durb" data-a="train" data-v="'+s+':'+d+'" '+(dis?'disabled':'')+'><b>'+durTxt(m)+'</b><small>~'+fmt(exp)+' EXP · 효율 '+Math.round(TEFF[d]*100)+'%</small><small>행동력 -'+TCOST[d]+'</small></button>';}).join('')+'</div>'+
  '<p class="muted">짧을수록 효율이 좋아요. 끝나면 생활 수치가 한 번에 줄어요.'+(p.lv>=maxLvP(p)?'<br><b>최대 레벨이에요. 진화하면 다시 수련할 수 있어요.</b>':'')+(autoOn(p)?' 끝나면 자동으로 잠들어요.':'')+'</p></div><div class="card"><h2>진행 중</h2>'+(running||'<p class="muted">진행 중인 수련이 없어요.</p>')+'</div></aside></div>';}
/* ================= 상점 ================= */
const SHOP_CATS=[['먹이','먹이'],['생활','생활'],['약','약'],['성장','성장 · 비서'],['강화','강화'],['기운','기운'],['알','알'],['보상','특별'],['인게임','인게임'],['기타','기타']];
const DECO_SHOP_N=()=>TILES.map((t,n)=>t.free?null:{k:'tile:'+n,n:t.n,p:t.p,img:tileSrc(n)}).filter(Boolean).concat(PROPS.map((t,n)=>({k:'deco:'+n,n:t.n,p:t.p,img:decoSrc(n)})));
function vShop(){const ad=accDaily(),tab=S.shop||'item';
 let h='<h1 class="serif" style="margin:0;font-size:26px">상점</h1><div class="tmode">'+[['item','아이템'],['expand','확장'],['deco','꾸미기'],['ex','기운 교환소']].map(([k,n])=>'<button class="'+(tab===k?'on':'')+'" data-shop="'+k+'">'+n+'</button>').join('')+'</div>';
 if(tab==='item'){h+=SHOP_CATS.map(([c,cn])=>{const its=Object.entries(ITEMS).filter(([k,v])=>v.cat===c&&v.p>0);if(!its.length)return '';return '<div class="card"><h2>'+cn+'</h2><div class="items">'+its.map(([k,v])=>{const lim=v.daily?(ad[k]||0)+'/'+v.daily:'',wl=v.weekly?(accWeekly()[k]||0)+'/'+v.weekly:'';return '<div class="item"><img class="px" src="'+v.img+'" alt=""><div class="t"><b>'+v.n+'</b><small>'+v.d+'</small><small>'+v.p+'코인 · 보유 '+(acc.inv[k]||0)+(lim?' · 오늘 '+lim:'')+(wl?' · 이번 주 '+wl:'')+'</small></div><div style="display:flex;flex-direction:column;gap:4px"><button class="btn sm" data-buy="'+k+'" data-n="1">1개</button>'+(v.daily||v.weekly?'':'<button class="btn soft sm" data-buy="'+k+'" data-n="10">10개</button>')+'</div></div>';}).join('')+'</div></div>';}).join('');
  const wk=accWeekly(),left=SHOPX.eggWeek-wk.egg;if(SHOPX.egg>0&&SHOPX.eggWeek>0)h+='<div class="card"><h2>환수 알</h2><div class="items"><div class="item"><img class="px" src="h/00.gif" alt=""><div class="t"><b>환수 알</b><small>가방에 들어가요. 매주 월요일 오전 6시에 초기화</small><small>'+SHOPX.egg+'코인 · 이번 주 '+wk.egg+'/'+SHOPX.eggWeek+'</small></div><button class="btn sm" data-buyegg="1" '+(left<=0?'disabled':'')+'>'+(left<=0?'이번 주 완료':'구매')+'</button></div></div></div>';}
 if(tab==='expand'){const n=acc.slots.length,full=n>=MAX_SLOTS,pr=slotPrice(),vc=vilCap(),vk=Math.round((vc-VIL_CAP0)/5),vfull=vc>=VIL_CAPMAX;
  h+='<div class="card"><h2>확장</h2><div class="items"><div class="item"><img class="px" src="i/sec_slot.gif" alt=""><div class="t"><b>성장 슬롯 추가</b><small>수련·심부름을 보낼 수 있는 성장 슬롯이 1칸 늘어요.</small><small>'+(full?'최대 '+MAX_SLOTS+'칸':(n+1)+'번째 슬롯 · '+pr+'코인')+' · 현재 '+n+'/'+MAX_SLOTS+'</small></div><button class="btn sm" data-buyslot="1" '+(full?'disabled':'')+'>'+(full?'최대':'구매')+'</button></div>'+
  '<div class="item"><img class="px" src="i/ui/nav_village.png" alt=""><div class="t"><b>마을 확장</b><small>마을에 머무는 환수 한도 +5</small><small>'+(vfull?'최대 '+VIL_CAPMAX+'마리':VIL_EXP[vk]+'코인')+' · 현재 '+vc+'/'+VIL_CAPMAX+'</small></div><button class="btn sm" data-buyvil="1" '+(vfull?'disabled':'')+'>'+(vfull?'최대':'구매')+'</button></div></div></div>';}
 if(tab==='deco'){vilInit();h+='<div class="card"><h2>마을 꾸미기</h2><p class="muted">산 꾸미기는 마을 보관함에 들어가요. 마을의 [배치 모드 → 보관함]에서 꺼내 놓으세요. 기본 돌길은 무료·무제한이에요.</p><div class="items">'+DECO_SHOP_N().map(d=>'<div class="item"><img src="'+d.img+'" alt="" style="width:64px;height:64px;object-fit:contain"><div class="t"><b>'+d.n+'</b><small>'+(d.k.startsWith('tile')?'길·바닥 (1칸)':'소품 (2×2칸)')+'</small><small>'+d.p+'코인 · 보관 '+((acc.vil.store||{})[d.k]||0)+'</small></div><button class="btn sm" data-buydeco="'+d.k+'">구매</button></div>').join('')+'</div></div>';}
 if(tab==='ex'){h+='<div class="card"><h2>기운 교환소</h2><p class="muted">같은 기운 3개를 다른 기운 1개로 바꿔요. 음양의 기운은 교환할 수 없어요 (음양의 기운 건물에서만 생산).</p><div class="exg">'+EL.map(a=>'<div class="exr"><img class="px" src="'+ITEMS[KI[a]].img+'" alt=""><b>'+ITEMS[KI[a]].n+' ×3</b><small>보유 '+(acc.inv[KI[a]]||0)+'</small><span>→</span>'+EL.filter(b=>b!==a).map(b=>'<button class="btn sm soft" data-kix="'+a+':'+b+'" '+((acc.inv[KI[a]]||0)>=3?'':'disabled')+'><img class="px" src="'+ITEMS[KI[b]].img+'" alt="" style="width:22px;height:22px;vertical-align:-6px">'+ELK[b]+'</button>').join('')+'</div>').join('')+'</div></div>';}
 return h;}
/* ================= 가방 · 코드화 ================= */
const BAG_CATS=['알','기운','먹이','생활','약','성장','강화','보상','인게임','기타','운영자'];
function vBag(){const tab=S.bag||'all',has=Object.entries(acc.inv).filter(([k,n])=>n>0&&ITEMS[k]);
 let h='<h1 class="serif" style="margin:0;font-size:26px">가방</h1><div class="tmode"><button class="'+(tab==='all'?'on':'')+'" data-bagtab="all">전체</button><button class="'+(tab==='ig'?'on':'')+'" data-bagtab="ig">코드화 (인게임 아이템)</button></div>';
 if(tab==='ig')return h+vCodify();
 const by=BAG_CATS.map(c=>[c,has.filter(([k])=>ITEMS[k].cat===c)]).filter(([c,l])=>l.length);
 h+=by.length?by.map(([c,l])=>'<div class="card"><h2>'+c+'</h2><div class="items">'+l.map(([k,n])=>'<div class="item"><img class="px" src="'+ITEMS[k].img+'" alt=""><div class="t"><b>'+ITEMS[k].n+' ×'+n+'</b><small>'+ITEMS[k].d+'</small></div>'+(ITEMS[k].cat==='알'?'<button class="btn teal sm" data-hatch="'+k+'" '+(acc.slots.some(q=>!q)?'':'disabled')+'>부화</button>':k==='wish_note'?'<button class="btn teal sm" data-wishnote="1">열기</button>':k==='sec_vil'?'<button class="btn teal sm" data-usevil="1">사용</button>':ITEMS[k].cat==='인게임'?'<button class="btn soft sm" data-bagtab="ig">코드화</button>':'')+'</div>').join('')+'</div></div>').join(''):'<div class="card"><p class="muted">가방이 비어 있어요.</p></div>';
 return h+'<p class="muted">먹이·기운·비서 같은 아이템은 성장 화면의 돌보기 버튼에서 사용해요.</p>';}
/* ================= 장비 ================= */
function gearCard(g,extra){const cand=S.synA&&S.synA!==g.u&&synOk(gearOf(S.synA),g),src=S.synA===g.u;return '<button class="gear g'+g.g+(src?' sel':'')+(cand?' cand':'')+(S.synA&&!cand&&!src?' dim':'')+'" data-gpick="'+g.u+'"><img class="px" src="'+gearImg(g)+'" alt=""><b class="c'+g.g+'" style="font-size:13px">'+gearName(g)+' +'+g.p+'</b><small class="ngl">'+esc(gearShort(g))+'</small><small class="muted">'+(extra||'')+'</small></button>';}
function gearShort(g){if(g.t==='n')return ngLines(g).map(([o,v])=>NG_OPT[o].n+' '+v).join(' · ');if(g.t==='b')return BELL[g.k].n+' 시간 -'+bellVal(g)+'%';return Object.keys(GS[g.t]).map(k=>SL[k]+' '+gval(g,k)+(PCT[k]?'%':'')).join(' · ');}
function synOk(a,b){return !!(a&&b&&a.u!==b.u&&a.t===b.t&&a.g===b.g&&a.p===MAXP[a.g]&&b.p===MAXP[b.g]&&a.g<5&&equippedBy(a.u)==null&&equippedBy(b.u)==null&&(a.t!=='b'||a.k===b.k));}
function gearStatTxt(g){if(g.t==='n')return ngLines(g).map(([o,v,m])=>(m?'【주】':'【추가】')+NG_OPT[o].n+' '+v).join(' · ');if(g.t==='b')return BELL[g.k].d+' -'+bellVal(g)+'% (강화할수록 +5%씩)';return Object.keys(GS[g.t]).map(k=>SL[k]+' '+gval(g,k)+(PCT[k]?'%':'')).join(' · ')+' (강화 1단계마다 +'+Math.round(ENH_K[g.t]*100)+'%)';}
function gearModal(u){const g=gearOf(u);if(!g)return;S.gm=u;const p=P(),mp=MAXP[g.g],eqd=equippedBy(g.u),rate=g.p<mp?Math.min(1,RATE[g.p+1]+(S.bless?.1:0)):0,L=document.getElementById('layer');
 const canSyn=g.p>=mp&&g.g<5,cands=acc.gear.filter(x=>synOk(g,x)).length;
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal gmodal" role="dialog" aria-label="장비"><div class="gmh"><img class="px" src="'+gearImg(g)+'" alt=""><div><b class="serif c'+g.g+'" style="font-size:22px">'+gearName(g)+' +'+g.p+' <small style="color:#c9d8d5">/ '+mp+'</small></b><div class="gms">'+esc(gearStatTxt(g))+'</div>'+(eqd!=null&&petAt(eqd)?'<div class="gms" style="color:#ffd36e">'+NAMES[petAt(eqd).no]+' 장착 중</div>':'')+'</div></div>'+
 '<div class="gmbtns">'+(eqd!=null?'<button class="btn soft" data-unequip="'+g.u+'">해제'+(petAt(eqd)?' ('+NAMES[petAt(eqd).no]+')':'')+'</button>':p?'<button class="btn teal" data-equip="'+g.u+'">'+NAMES[p.no]+'에게 장착</button>':'')+
 (g.p<mp?'<button class="btn" data-enh="'+g.u+'">강화 ('+ECOST[g.g]+'코인 · '+Math.round(rate*100)+'%)</button>':'')+
 (canSyn?'<button class="btn" data-synpick="'+g.u+'" '+(eqd!=null?'disabled':'')+'>합성할 장비 고르기 ('+cands+'개 가능)</button>':'')+'</div>'+
 (g.p<mp?'<label class="gmchk"><input type="checkbox" data-bless '+(S.bless?'checked':'')+'>강화축복비서 사용 (+10%, 보유 '+(acc.inv.sec_bless||0)+')</label>':'<p class="gms" style="margin:6px 0 0">'+(g.g<5?'최대 강화! 같은 종류·같은 등급의 최대 강화 장비와 합성할 수 있어요.':'신화 등급은 더 합성할 수 없어요.')+'</p>')+
 '<button class="btn ghost" data-close="1" style="width:100%;margin-top:8px">닫기</button></div></div>';}
function synthModal(){const [a,b]=S.forgeSel.map(gearOf);if(!a||!b)return;const sy=SYN[a.g]||{},L=document.getElementById('layer');S.gm=null;
 L.innerHTML='<div class="overlay"><div class="modal gmodal" role="dialog" aria-label="합성"><b class="serif" style="font-size:22px;color:#ffd36e">합성</b><div class="gmh" style="justify-content:center;gap:10px"><img class="px" src="'+gearImg(a)+'" alt=""><b style="font-size:24px">+</b><img class="px" src="'+gearImg(b)+'" alt=""><b style="font-size:24px">→</b><img class="px" src="'+gearImg(Object.assign({},a,{g:a.g+1}))+'" alt=""></div><p style="margin:0">'+gearName(a)+' + '+gearName(b)+' → <b class="c'+(a.g+1)+'">'+GN[a.g+1]+'</b> · 성공 '+Math.round(sy.s*100)+'%'+(sy.d?' · 하락 '+Math.round(sy.d*100)+'%':'')+(sy.x?' · 파괴 '+Math.round(sy.x*100)+'%':'')+'</p>'+
 (sy.x?'<label class="gmchk"><input type="checkbox" data-protect '+(S.protect?'checked':'')+'>파괴방지비서 사용 (보유 '+(acc.inv.sec_protect||0)+')</label>':'')+
 '<div class="gmbtns"><button class="btn teal" data-synth="1">합성 ('+SFEE[a.g]+'코인)</button><button class="btn ghost" data-syncancel="1">다른 장비 고르기</button></div></div></div>';}
function equippedBy(u){let r=null;acc.slots.forEach((p,i)=>{if(p&&p.eq&&Object.values(p.eq).includes(u))r=i;});vilPets().forEach((p,i)=>{if(p&&p.eq&&Object.values(p.eq).includes(u))r=500+i;});['s1','s2'].forEach((sr,z)=>gspOf(sr).forEach((p,i)=>{if(p&&p.eq&&Object.values(p.eq).includes(u))r=(z+1)*1000+i;}));return r;}
function vGear(){const sa=S.synA&&gearOf(S.synA);if(S.synA&&!sa)S.synA=null;const ft=S.gft||'all';
 const banner=sa?'<div class="card synbar"><b>합성할 장비를 고르세요</b><span>'+gearName(sa)+' +'+sa.p+' 와(과) 합성할 같은 종류·같은 등급의 최대 강화 장비를 눌러 주세요.</span><button class="btn soft sm" data-syncancel="all">합성 취소</button></div>':'';
 const list=acc.gear.filter(g=>ft==='all'||g.t===ft).slice().sort((x,y)=>y.g-x.g||y.p-x.p);
 return slotsBar()+banner+'<div class="row"><section class="grow"><div class="card"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px"><h2 style="margin:0">보유 장비 ('+acc.gear.length+')</h2><div class="tmode" style="margin:0">'+[['all','전체']].concat(GT.map(t=>[t,TN[t]])).map(([k,n])=>'<button class="'+(ft===k?'on':'')+'" data-gft="'+k+'">'+n+'</button>').join('')+'</div></div><div class="gearlist">'+(list.length?list.map(g=>{const e=equippedBy(g.u),on=e!=null&&petAt(e);return '<div class="gwrap">'+gearCard(g,on?NAMES[petAt(e).no]+(e>=1000?' (전용 공간)':e>=500?' (마을)':'')+' 장착 중':'')+(on&&!S.synA?'<button class="btn soft sm gun" data-unequip="'+g.u+'">해제</button>':'')+'</div>';}).join(''):'<p class="muted">장비가 없어요. 심부름·수련 인카운트·월드보스에서 얻을 수 있어요.</p>')+'</div></div></section><aside class="side"><div class="card"><h2>장비 안내</h2><p class="muted" style="margin:0">· <b>무기</b>: 공격력·직격 · <b>방어구</b>: 방어력·체력·생활 수치 감소 완화<br>· <b>보조무기</b>: 치명·회피·행동력 회복·경험치<br>· <b>노리개</b>: 방어/치명/회피/직격 중 주 옵션 + 희귀부터 추가 옵션<br>· <b>방울</b>: 생산·심부름·수련 중 하나의 시간 감소<br>· 강화 1단계마다 무기·방어구 +10%, 나머지 +5%<br>· 지금 선택한 환수: <b>'+(P()?NAMES[P().no]:'없음')+'</b></p></div></aside></div>';}
function vCode(){return '<h1 class="serif" style="margin:0;font-size:26px">코드</h1><div class="row"><div class="card" style="flex:1 1 360px"><h2>환수 코드 (게임 → 웹)</h2><p class="muted">게임에서 <b>/trigger hwansu</b>로 받은 [환수 코드]를 입력하세요. 금화 3개 = 코인 1개예요.</p><form data-form="coin" style="display:flex;gap:8px;flex-wrap:wrap"><label class="f" style="flex:1">환수 코드<input type="text" name="code" placeholder="3-7-10-4821" required></label><button class="btn teal" style="align-self:flex-end">입력</button></form><p class="muted">연결된 플레이어 번호: '+(acc.playerNo||'아직 없음 (첫 코드로 연결돼요)')+'</p></div><div class="card" style="flex:1 1 360px"><h2>알 코드</h2><form data-form="egg" style="display:flex;gap:8px;flex-wrap:wrap"><label class="f" style="flex:1">알 코드<input type="text" name="code" placeholder="EGG-XXXX-XXXX" required></label><button class="btn teal" style="align-self:flex-end">알 받기</button></form><p class="muted">가방에 알이 들어와요.</p></div><div class="card" style="flex:1 1 360px"><h2>인게임 코드 (웹 → 게임)</h2><p class="muted">동패·은패 같은 인게임 아이템은 가방의 [코드화]에서 코드로 바꿔요.</p><button class="btn teal" data-view="bag" data-bagtab2="ig">코드화 열기</button></div></div>';}
function gradeTag(no,cls){const g=gradeOf(no);return '<img class="gtag'+(cls?' '+cls:'')+'" src="i/tag_'+GRADE_KEY[g]+'.png?'+IMG_V+'" alt="'+g+'" title="'+g+' 등급">';}
function elName(el){return String(el).split('|').map(x=>ELK[x]).join('·');}
function elTag(el){if(el&&String(el).indexOf('|')>=0)return String(el).split('|').map(elTag).join('');if(!ELK[el])return '';return '<span class="eltag" style="background:'+ELBG[el]+';color:'+ELC[el]+';border-color:'+ELC[el]+'">'+(el==='neutral'?'':'<img src="i/'+el+'.svg" alt="">')+ELK[el]+'</span>';}
/* ================= 선계 마을 (아이소메트릭 24×24) ================= */
// 48×48칸 · 한 칸 32×16 (아이소메트릭)
const VG=48,VX0=1024,VY0=362,VMW=2048,VMH=1536,CW=32,CH=16;
// 건물: 이름 · 그림 · 배치 특성 · 생산 · 업그레이드 기운 · 해금 중심부 단계
const BLD={
 center:{n:'중심부',img:'center',tr:'do',size:5,d:'마을의 중심. 단계를 올리면 새 건물이 열리고, 다른 건물은 중심부 단계까지만 올릴 수 있어요. 배치한 환수는 대전 대표 환수가 되고, 같은 특성 건물들의 생산 시간을 줄여 줘요.'},
 fire:{n:'불의 기운',img:'fire',tr:'do',make:'ki_fire',ki:['fire','wood','metal'],un:1},
 water:{n:'물의 기운',img:'water',tr:'jeong',make:'ki_water',ki:['water','metal','wood'],un:1},
 wood:{n:'대지의 기운',img:'wood',tr:'do',make:'ki_wood',ki:['wood','water','earth'],un:1},
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
const PRD={ki:{iv:[30,25,20,15,10],cap:[8,12,16,24,36]},life:{iv:[40,35,30,25,20],cap:[6,8,12,16,24]},sus:{iv:[180,150,120,90,60],cap:[3,4,6,8,10]},wish:{iv:[720,600,480,360,240],cap:[1,2,2,3,3]}};
const MARKET_DAY=[30,45,65,90,120];
const B_SLOTS=[1,1,2,2,3];
const bSlots=b=>b.k==='center'?1:b.k==='wish'?0:(B_SLOTS[Math.max(0,b.lv-1)]||1);
const PET_GB=[0,5,10,15,20],PET_EXTRA=[0,3,6,9,12];
// 제작소 레시피 (제작소 단계로 해금 · 5단계는 제작 시간 -20%)
// 중심부 배치 환수(대표 환수): 같은 배치 특성 건물의 생산 시간 감소 · 등급별 환수 1% · 영물 3% · 영수 5% · 성수 7% · 신수 10% (스타즈렐름 5%)
const CENTER_CUT=[1,3,5,7,10];
function centerPet(){const c=acc.vil&&acc.vil.b.find(b=>b.u==='center'),id=c&&c.pets&&c.pets[0];return id==null?null:vilPets().find(q=>q.born===id)||null;}
function centerCut(k){const p=centerPet();if(!p||!BLD[k]||TRAIT[p.no]!==BLD[k].tr||k==='center')return 0;return isGuest(p.no)?5:CENTER_CUT[GRADE_N[p.no]||0];}
// 꾸미기: 길·바닥 타일(1칸)과 소품(2×2)
const TILES=[{n:'풀밭',p:2,s:2},{n:'꽃밭',p:3,s:2},{n:'돌길',p:0,free:1,s:2},{n:'등불 돌길',p:5,s:2},{n:'네거리',p:3,s:2},{n:'연못',p:5,s:4},{n:'구름 바닥',p:5,s:3},{n:'벚꽃 바닥',p:5,s:2}];
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
function fpOf(o){if(o.k&&BLD[o.k]){const s=bSize(o.k,Math.max(o.lv||1,o.bt?o.bt.to:0));return{x:o.x,y:o.y,w:s.w,h:s.h};}if(String(o.k).startsWith('deco:'))return{x:o.x,y:o.y,w:4,h:4};const t=tileSz(o);return{x:o.x,y:o.y,w:t,h:t};}
const isTile=o=>String(o.k).startsWith('tile:');
const overlap=(a,b)=>a.x<b.x+b.w&&b.x<a.x+a.w&&a.y<b.y+b.h&&b.y<a.y+a.h;
function bCost(k,to,nth){if(k==='center'){const r={c:C_COIN[to],ki:{}};EL.forEach(e=>{r.ki[e]=C_KI[to];});if(to>=3)r.ki.yy=C_KI[to];return r;}
 if(to===1){if(k==='craft'&&nth===4)return{c:3000,ki:{metal:50,fire:50}};if(k==='craft'&&nth===5)return{c:6000,ki:{metal:100,fire:100}};return{c:B_COIN[1],ki:{}};}
 const r={c:B_COIN[to],ki:{}};BLD[k].ki.forEach(e=>{r.ki[e]=B_KI[to];});return r;}
function bTime(k,to){return k==='center'?C_TIME[to]:B_TIME[to];}
function costTxt(c){return [c.c?'코인 '+fmt(c.c):''].concat(Object.entries(c.ki).map(([e,n])=>ITEMS[KI[e]].n.replace('의 기운','')+' '+n)).filter(Boolean).join(' · ');}
function costLack(c){const l=[];if(acc.coins<c.c)l.push('코인');Object.entries(c.ki).forEach(([e,n])=>{if((acc.inv[KI[e]]||0)<n)l.push(ITEMS[KI[e]].n);});return l;}
function payCost(c){acc.coins-=c.c;Object.entries(c.ki).forEach(([e,n])=>{acc.inv[KI[e]]-=n;});}
const building=()=>acc.vil.b.find(b=>b.bt);
function craftCount(){return acc.vil.b.filter(b=>b.k==='craft').length;}
function canBuild(k){const c=centerLv();if(k==='craft')return craftCount()<CRAFT_MAX_BY_C[c];return c>=BLD[k].un&&!acc.vil.b.some(b=>b.k===k);}
/* ----- 생산 ----- */
function bPetsOf(b){return (b.pets||[]).map(id=>vilPets().find(p=>p.born===id)).filter(Boolean);}
function bBonus(b){let s=0,ex=0,bell=0;bPetsOf(b).forEach(p=>{const gr=isGuest(p.no)?0:GRADE_N[p.no]||0,st=isGFinal(p.no)?9:p.st;s+=PET_GB[gr]+st*(TRAIT[p.no]===BLD[b.k].tr?5:2);ex=Math.max(ex,PET_EXTRA[gr]);bell=Math.max(bell,gearSum(p).bell.prod);});return{sp:Math.min(100,s),ex,bell};}
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
function bHarvest(b,quiet){const got=b.st||{},ks=Object.keys(got).filter(k=>got[k]>0);if(b.k==='craft'&&b.job&&b.job.done){const it=b.job.o||b.job.r,n=b.job.n||1;outGive(it,n);b.job=null;if(!quiet){SFX.play('coins');toast(outInfo(it).n+' ×'+n+' 완성품을 받았어요!');}return 1;}
 if(!ks.length)return 0;const parts=[];ks.forEach(k=>{if(k==='coins')acc.coins+=got[k];else acc.inv[k]=(acc.inv[k]||0)+got[k];parts.push((k==='coins'?'코인':ITEMS[k].n)+' +'+got[k]);});
 const R=bProd(b);if(R&&stCount(b)>=R.cap)b.pt=now();b.st={};if(!quiet){SFX.play('coins');toast(parts.join(', '));}return parts.length;}
function harvestAll(){vilTick();let n=0;acc.vil.b.forEach(b=>{n+=bHarvest(b,true);});if(!n)return toast('수확할 게 없어요.');SFX.play('coins');toast('마을 전체를 수확했어요!');commit();}
function bShortcut(b,k){const c=TCUT[k];if(!b.bt)return toast('진행 중인 건설이 없어요.');if(!take(k))return;const left=b.bt.e-now();if(left<=c*MIN){b.bt.e=now();vilTick();}else b.bt.e-=c*MIN;SFX.play('magic');toast('건설 시간이 '+durTxt(c)+' 줄었어요.');commit();bModal(b.u);}
function bUpgrade(u){const b=bOf(u);if(!b||b.bt)return;if(building())return toast('지금 다른 건물을 짓고 있어요. 건설은 한 번에 하나씩이에요.');if(b.lv>=5)return toast('최고 단계예요.');
 if(b.k!=='center'&&b.lv+1>centerLv())return toast('중심부 단계까지만 올릴 수 있어요. 먼저 중심부를 '+(b.lv+1)+'단계로 올려 주세요.');
 {const t={u:b.u,k:b.k,lv:b.lv+1,x:b.x,y:b.y};if(!vValid(t))return toast((b.lv+1)+'단계가 되면 건물이 넓어져요. 오른쪽·아래쪽 공간이 부족하니 배치 모드에서 건물을 옮기거나 주변을 비워 주세요.');}
 const c=bCost(b.k,b.lv+1),l=costLack(c);if(l.length)return toast(l.join(', ')+'이(가) 부족해요.');
 confirmBox(BLD[b.k].n+' '+(b.lv+1)+'단계','필요: '+costTxt(c)+'\n시간: '+durMs(bBuildMs(b.k,b.lv+1))+'\n건설 중에는 생산이 멈춰요.',()=>{if(costLack(c).length)return;bHarvest(b,true);payCost(c);b.bt={to:b.lv+1,s:now(),e:now()+bBuildMs(b.k,b.lv+1)};SFX.play('build');toast('건설을 시작했어요!');commit();});}
function bBuildMs(k,to){return bTime(k,to);}
/* ----- 화면 좌표 ----- */
const cellXY=(cx,cy)=>[VX0+(cx-cy)*CW/2,VY0+(cx+cy)*CH/2];
function cellAt(mx,my){const u=(mx-VX0)/(CW/2),v=(my-VY0)/(CH/2);return[Math.floor((u+v)/2),Math.floor((v-u)/2)];}
function skinOf(){return SKINS[(acc.vil&&acc.vil.skin)||'base']||SKINS.base;}
function tileSrc(n){const s=skinOf();return 'v/'+(s.tile||'tile')+'_'+n+'.webp';}
function decoSrc(n){const s=skinOf();return 'v/'+(s.deco||'deco')+'_'+n+'.webp';}
function bSrc(b){const lv=Math.max(1,b.lv||1);return 'v/b_'+BLD[b.k].img+'_'+lv+'.webp';}
const B_BOX={"center_1":[320,48,272,301,120],"center_2":[320,30,289,301,79],"center_3":[384,29,355,361,60],"center_4":[448,45,403,421,45],"center_5":[512,23,489,481,51],"craft_1":[160,34,125,149,56],"craft_2":[160,32,127,149,43],"craft_3":[160,30,129,145,34],"craft_4":[160,24,136,146,20],"craft_5":[160,12,147,147,9],"drink_1":[256,38,217,241,89],"drink_2":[256,24,231,241,46],"drink_3":[320,26,294,301,32],"drink_4":[384,26,357,361,38],"drink_5":[448,31,416,421,45],"earth_1":[256,38,217,241,135],"earth_2":[256,24,231,241,71],"earth_3":[320,24,296,301,41],"earth_4":[384,25,359,361,38],"earth_5":[448,31,416,421,45],"exp_1":[256,38,217,241,52],"exp_2":[256,24,231,241,40],"exp_3":[320,29,290,301,32],"exp_4":[384,30,354,361,39],"exp_5":[448,34,413,421,45],"fire_1":[256,38,217,241,102],"fire_2":[256,26,229,241,26],"fire_3":[320,28,291,301,32],"fire_4":[384,48,336,361,38],"fire_5":[448,32,416,421,45],"food_1":[256,38,217,241,82],"food_2":[256,24,231,241,39],"food_3":[320,24,296,301,36],"food_4":[384,23,361,361,53],"food_5":[448,32,416,421,45],"market_1":[256,38,217,241,79],"market_2":[256,24,231,241,56],"market_3":[320,24,296,301,46],"market_4":[384,23,361,361,50],"market_5":[448,28,420,421,45],"metal_1":[256,38,217,241,114],"metal_2":[256,24,231,241,50],"metal_3":[320,24,295,301,32],"metal_4":[384,23,360,361,38],"metal_5":[448,33,414,421,45],"soap_1":[256,38,217,241,71],"soap_2":[256,24,231,241,31],"soap_3":[320,24,296,301,40],"soap_4":[384,27,356,361,38],"soap_5":[448,20,428,421,54],"water_1":[256,38,217,241,108],"water_2":[256,24,231,241,47],"water_3":[320,24,296,301,45],"water_4":[384,23,361,361,39],"water_5":[448,38,410,421,45],"wish_1":[256,38,217,241,91],"wish_2":[256,33,222,241,26],"wish_3":[320,49,270,301,32],"wish_4":[384,50,334,361,38],"wish_5":[448,43,405,421,45],"wood_1":[256,38,217,241,94],"wood_2":[256,24,230,241,46],"wood_3":[320,27,292,301,32],"wood_4":[384,23,360,361,38],"wood_5":[448,29,418,421,45],"yinyang_1":[256,38,217,241,78],"yinyang_2":[256,24,231,241,56],"yinyang_3":[320,24,296,301,73],"yinyang_4":[384,23,361,360,61],"yinyang_5":[448,45,402,420,45]};
const D_BOX={"deco_0":[192,14,178,184,10],"deco_1":[192,9,183,184,14],"deco_2":[192,9,183,184,17],"deco_3":[192,9,183,184,65],"deco_4":[192,9,183,184,34],"deco_5":[192,9,183,184,49],"deco_6":[192,22,169,184,10],"deco_7":[192,9,183,184,52],"deco_8":[192,20,172,184,10],"xdeco_0":[160,26,133,153,7],"xdeco_1":[160,20,140,153,7],"xdeco_2":[160,29,131,153,7],"xdeco_3":[160,7,153,152,7],"xdeco_4":[160,20,139,153,7],"xdeco_5":[160,7,153,147,13],"xdeco_6":[160,7,153,149,11],"xdeco_7":[160,24,136,153,7]};
const B_GROW=[1.05,1.1,1.16,1.22,1.3];
function objHtml(o,sel,bad){const f=fpOf(o);
 if(isTile(o)){const n=+o.k.slice(5),t=tileSz(o),[x,y]=cellXY(o.x,o.y);return '<img class="vt'+(sel?' sel':'')+(bad?' bad':'')+'" data-vo="'+o.u+'" src="'+tileSrc(n)+'" alt="" style="left:'+(x-t*CW/2)+'px;top:'+(y-1)+'px;width:'+(t*CW)+'px;z-index:'+(1+o.x+o.y)+'">';}
 const isB=!!BLD[o.k],d=isB?bSize(o.k,o.lv).d:4,[bx,by]=cellXY(f.x+f.w,f.y+d),cx=VX0+((f.x+f.w/2)-(f.y+d/2))*CW/2;
 let src,W,L,T,TOP;if(isB){const lv=Math.max(1,o.lv||1),bx_=B_BOX[BLD[o.k].img+'_'+lv]||[256,38,217,241],sc=f.w*CW*1.08/(bx_[2]-bx_[1]);W=bx_[0]*sc;L=cx-(bx_[1]+bx_[2])/2*sc;T=by-bx_[3]*sc+3;TOP=bx_[4]*sc;src=bSrc(o);}
 else{const n=+o.k.slice(5),key=(skinOf().deco||'deco')+'_'+n,bx_=D_BOX[key]||[192,20,172,180],sc=4*CW*1.05/(bx_[2]-bx_[1]);W=bx_[0]*sc;L=cx-(bx_[1]+bx_[2])/2*sc;T=by-bx_[3]*sc+2;TOP=bx_[4]*sc;src=decoSrc(n);}
 const z=100+(f.x+f.w+f.y+d)*5;
 let h='<div class="vo'+(isB?' vb':' vd')+(sel?' sel':'')+(bad?' bad':'')+(isB&&o.lv<1?' ghost':'')+'" data-vo="'+o.u+'" style="left:'+Math.round(L)+'px;top:'+Math.round(T)+'px;width:'+Math.round(W)+'px;height:'+Math.round(W)+'px;z-index:'+z+'"><img class="px" src="'+src+'" alt="'+(isB?esc(BLD[o.k].n):'')+'" draggable="false">';
 if(isB&&!VS.place){
  if(o.bt)h+='<div class="vbuild" style="top:'+Math.round(TOP-40)+'px"><img src="i/ui/ui_build.png" alt=""><b>'+fmtDur(o.bt.e-now())+'</b></div>';
  else if(o.k==='wish'&&wishReady())h+='<button class="vbub full" data-wishgo="1" style="top:'+Math.round(TOP-62)+'px"><img class="px" src="i/ui/icon_wish.png" alt=""><b>소원</b></button>';
  else{const n=stCount(o),R=bProd(o),done=o.k==='craft'&&o.job;if(n>0||done){const k=done?(o.job.o||o.job.r):Object.keys(o.st).sort((a,b2)=>o.st[b2]-o.st[a])[0],ic=k==='coins'?'i/coin_spin.gif':outInfo(k).img,full=done?o.job.done:R&&n>=R.cap;
   if(!done||o.job.done)h+='<button class="vbub'+(full?' full':'')+'" data-vharv="'+o.u+'" style="top:'+Math.round(TOP-62)+'px"><img class="px" src="'+ic+'" alt=""><b>'+(done?'완성':n)+'</b></button>';
   else h+='<div class="vbuild" style="top:'+Math.round(TOP-40)+'px"><img src="i/ui/ui_clock.png" alt=""><b>'+fmtDur(o.job.e-now())+'</b></div>';}}
  h+='<span class="vbn">'+esc(BLD[o.k].n)+(o.lv>0?' <i>'+o.lv+'</i>':'')+'</span>';}
 return h+'</div>';}
function petPos(p){const z=petSz(p);if(p.vb){const b=bOf(p.vb);if(b){const s=bSize(b.k,b.lv),i=(b.pets||[]).indexOf(p.born),n=Math.max(1,(b.pets||[]).length),fx=b.x+(s.w/(n+1))*(i+1)-z/2;return[fx,b.y+s.d+B_FRONT/2-z/2,z];}}return[p.vx||0,p.vy||0,z];}
function petHtml(p,i,sel,bad){const [vx,vy,z]=petPos(p),cx=VX0+((vx+z/2)-(vy+z/2))*CW/2,by=VY0+(vx+vy+z)*CH/2,W=Math.round(p.vb?Math.min(z*CW*.8,(()=>{const b=bOf(p.vb),n=Math.max(1,((b&&b.pets)||[]).length);return b?bSize(b.k,b.lv).w*CW/n*1.15:z*CW;})()):z*CW*.95);
 return '<div class="vpet'+(sel?' sel':'')+(bad?' bad':'')+(p.vb?' work':'')+'" data-vpet="'+i+'" style="left:'+Math.round(cx-W/2)+'px;top:'+Math.round(by-W-4)+'px;width:'+W+'px;z-index:'+(100+Math.ceil(vx+vy+2*z)*5+3)+';animation-delay:-'+((i*0.41)%2).toFixed(2)+'s"><img class="px" src="'+img(p.no)+'" alt="" draggable="false" style="width:'+W+'px;height:'+W+'px"><span>'+esc(NAMES[p.no])+'</span></div>';}
function vilFreeCell(z){z=z||4;const occ=vOcc(null),pets=vilPets().filter(p=>!p.vb).map(p=>({x:p.vx,y:p.vy,w:petSz(p),h:petSz(p)}));for(let r=0;r<VG;r+=2)for(let y=Math.max(0,24-r);y<=Math.min(VG-z,24+r);y++)for(let x=Math.max(0,24-r);x<=Math.min(VG-z,24+r);x++){const f={x,y,w:z,h:z};if(!occ.some(o=>overlap(o,f))&&!pets.some(o=>overlap(o,f)))return[x,y];}return[0,0];}
function vOcc(skip){const L=[];acc.vil.b.forEach(b=>{if(b.u!==skip)L.push(fpOf(b));});acc.vil.o.forEach(o=>{if(!isTile(o)&&o.u!==skip)L.push(fpOf(o));});return L;}
function vValid(o){const f=fpOf(o);if(f.x<0||f.y<0||f.x+f.w>VG||f.y+f.h>VG)return false;
 if(isTile(o))return !acc.vil.o.some(q=>q.u!==o.u&&isTile(q)&&overlap(fpOf(q),f));
 if(vOcc(o.u).some(q=>overlap(q,f)))return false;
 if(vilPets().some(p=>!p.vb&&overlap({x:p.vx,y:p.vy,w:petSz(p),h:petSz(p)},f)))return false;return true;}
function vPetValid(p){const z=petSz(p),f={x:p.vx,y:p.vy,w:z,h:z};if(p.vx<0||p.vy<0||p.vx+z>VG||p.vy+z>VG)return false;return !vOcc(null).some(q=>overlap(q,f))&&!vilPets().some(q=>q!==p&&!q.vb&&overlap({x:q.vx,y:q.vy,w:petSz(q),h:petSz(q)},f));}
/* ----- 마을 화면 ----- */
function vVillage(){const v=vilInit();vilTick();const sk=skinOf(),z=VS.z||1;const pl=VS.place;
 const objs=v.o.filter(isTile).map(o=>objHtml(o,pl&&pl.sel===o.u,pl&&pl.sel===o.u&&!vValid(o))).join('')+v.o.filter(o=>!isTile(o)).concat(v.b).map(o=>objHtml(o,pl&&pl.sel===o.u,pl&&pl.sel===o.u&&!vValid(o))).join('')+(pl&&pl.ghost?objHtml(pl.ghost,true,!vValid(pl.ghost)):'');
 const pets=vilPets().map((p,i)=>petHtml(p,i,pl&&pl.sel==='p'+i,pl&&pl.sel==='p'+i&&!p.vb&&!vPetValid(p))).join('');
 const bld=building(),harv=v.b.some(b=>stCount(b)>0||(b.job&&b.job.done));
 const bar=pl?'<div class="vtool place"><b>배치 모드</b><span class="muted">'+(pl.ghost?BLD[pl.ghost.k].n+'을(를) 놓을 곳으로 끌어 주세요':'건물·길·소품·환수를 끌어서 옮겨요')+'</span>'+
   (pl.ghost?'<button class="btn teal sm" data-vbuildgo="1">여기에 건설</button>':'<button class="btn soft sm" data-vstore="1">보관함</button>'+(pl.sel&&!String(pl.sel).startsWith('p')&&!bOf(pl.sel)?'<button class="btn soft sm" data-vput="1">보관함에 넣기</button><button class="btn soft sm" data-vdel="1">삭제</button>':''))+
   '<button class="btn sm" data-vdone="1">완료</button><button class="btn ghost sm" data-vcancel="1">취소</button></div>'
  :'<div class="vtool"><span class="vstat">환수 '+vilPets().length+'/'+vilCap()+(bld?' · 건설 중: '+esc(BLD[bld.k].n)+' '+fmtDur(bld.bt.e-now()):'')+'</span><button class="btn sm" data-vharvall="1" '+(harv?'':'disabled')+'><img src="i/ui/ui_collect.png" alt="" class="vic"> 한 번에 수확</button><button class="btn teal sm" data-vbuildmenu="1"><img src="i/ui/ui_build.png" alt="" class="vic"> 건설</button><button class="btn soft sm" data-vplace="1">배치 모드</button><button class="btn soft sm" data-vskin="1">스킨</button><button class="btn soft sm" data-vzoom="-1" aria-label="축소">－</button><button class="btn soft sm" data-vzoom="1" aria-label="확대">＋</button></div>';
 return '<div class="vwrap'+(pl?' placing':'')+'">'+bar+'<div class="vview" id="vview"><div class="vsize" style="width:'+VMW*z+'px;height:'+VMH*z+'px"><div class="vmap skin-'+(v.skin||'base')+'" id="vmap" style="transform:scale('+z+')"><img class="vbg" src="'+sk.bg+'" alt="" draggable="false">'+(pl?'<div class="vgrid"></div>':'')+objs+pets+(v.skin==='xm'?'<div class="vsnow"></div>':'')+'</div></div></div></div>';}
function vFit(){const el=document.getElementById('vview');if(!el)return;if(VS.z==null){VS.z=el.clientWidth<700?.6:1;render();setTimeout(()=>{const e=document.getElementById('vview');if(e){e.scrollLeft=(VMW*VS.z-e.clientWidth)/2;e.scrollTop=(VMH*VS.z-e.clientHeight)/2*.6;}},0);}}
/* ----- 건물 창 ----- */
function bModal(u){const b=bOf(u);if(!b)return;const D=BLD[b.k],L=document.getElementById('layer'),R=bProd(b),B=bBonus(b),slots=bSlots(b),ps=bPetsOf(b);vilTick();
 let h='<div class="overlay" data-close="1"><div class="modal bmod" role="dialog" aria-label="'+esc(D.n)+'"><div class="bmh"><img class="px" src="'+bSrc(b)+'" alt=""><div><b class="serif" style="font-size:22px;color:#ffd36e">'+esc(D.n)+'</b> <span class="chip">'+(b.lv>0?b.lv+'단계':'건설 중')+'</span><div class="muted" style="color:#c9d8d5">배치 특성: <b>'+TRAITN[D.tr]+'</b>'+(D.d?' · '+esc(D.d):'')+'</div></div></div>';
 if(b.bt)h+='<div class="bmrow"><img src="i/ui/ui_build.png" alt="" width="28"> <b>'+(b.bt.to===1?'건설':b.bt.to+'단계로 올리는')+' 중 · 남은 '+fmtDur(b.bt.e-now())+'</b></div><div class="bmrow">'+Object.keys(TCUT).filter(k=>acc.inv[k]>0).map(k=>'<button class="btn sm" data-bcut="'+b.u+':'+k+'"><img class="px" src="'+ITEMS[k].img+'" alt="" style="width:22px;height:22px;vertical-align:-6px"> '+durTxt(TCUT[k])+' 단축 ('+acc.inv[k]+')</button>').join('')+'</div>';
 if(R&&!b.bt){const per=R.ms/MIN;h+='<div class="bmrow"><span>생산 <b>'+(D.make==='coins'?'코인':D.make==='food'?'먹이 (1~'+b.lv+'단계 음식)':D.make==='sus'?'수상한 기운':ITEMS[D.make].n)+'</b> · '+(per>=60?(per/60).toFixed(1)+'시간':per.toFixed(1)+'분')+'마다 1개 · 보관 '+stCount(b)+'/'+R.cap+'</span>'+(stCount(b)?'<button class="btn sm" data-vharv="'+b.u+'">수확</button>':'')+'</div>'+(B.sp||B.bell||R.cc?'<div class="muted" style="color:#c9d8d5">보너스: 배치 환수 생산 속도 +'+B.sp+'%'+(B.bell?' · 방울 -'+B.bell+'%':'')+(B.ex?' · 추가 생산 '+B.ex+'%':'')+(R.cc?' · 대표 환수 -'+R.cc+'%':'')+'</div>':'');}
 if(b.k==='wish'&&b.lv>0&&!b.bt)h+='<div class="bmsec"><b>소원 빌기</b><span class="muted" style="color:#c9d8d5">하루 한 번 · 코인·기운·알·금패 중 무작위</span><button class="btn teal" data-wishgo="1" '+(wishReady()?'':'disabled')+'>'+(wishReady()?'소원 빌기':'오늘은 이미 빌었어요')+'</button></div>';
 if(b.k==='craft'&&b.lv>0&&!b.bt){h+='<div class="bmsec"><b>제작</b>';if(b.job){const o2=b.job.o||b.job.r;h+='<div class="bmrow"><img class="px" src="'+outInfo(o2).img+'" width="40" alt=""> <b>'+esc(outInfo(o2).n)+' ×'+(b.job.n||1)+'</b> '+(b.job.done?'<button class="btn sm" data-vharv="'+b.u+'">받기</button>':'· 남은 '+fmtDur(b.job.e-now()))+'</div>';}
  else{const tab=S.rcpTab||'item',E=Object.entries(RCP).filter(([k,r])=>outInfo(r.out).ok&&(String(r.out).startsWith('gear:')?'gear':'item')===tab).sort((x,y)=>(x[1].lv||1)-(y[1].lv||1));h+='<div class="tmode" style="margin:4px 0"><button class="'+(tab==='item'?'on':'')+'" data-rcptab="item:'+b.u+'">아이템</button><button class="'+(tab==='gear'?'on':'')+'" data-rcptab="gear:'+b.u+'">장비</button></div>';let lastLv=0;h+=E.map(([k,r])=>{let hd='';if((r.lv||1)!==lastLv){lastLv=r.lv||1;hd='<div class="rcphd">제작소 '+lastLv+'단계'+(tab==='gear'?' · '+GN[lastLv-1]+' 장비':'')+(b.lv<lastLv?' <small>(잠김)</small>':'')+'</div>';}const c={c:r.c||0,ki:r.ki||{}},l=costLack(c),lock=b.lv<(r.lv||1),min=r.min*(b.lv>=5?.8:1)*(1-prodCut());return hd+'<div class="rcp'+(lock?' lock':'')+'"><img class="px" src="'+outInfo(r.out).img+'" alt=""><div><b>'+esc(outInfo(r.out).n)+(r.n>1?' ×'+r.n:'')+(outInfo(r.out).ig?' <small style="color:#ffd36e">인게임</small>':'')+'</b><small>'+(costTxt(c)||'재료 없음')+' · '+durTxt(min)+(lock?' · 제작소 '+r.lv+'단계 필요':'')+'</small></div><button class="btn sm" data-craft="'+b.u+':'+k+'" '+(lock||l.length?'disabled':'')+'>제작</button></div>';}).map((x,i)=>x).join('');}
  h+='</div>';}
 if((b.lv>0||b.k==='center')&&bSlots(b)>0){h+='<div class="bmsec"><b>'+(b.k==='center'?'대표 환수':'배치 환수 '+ps.length+'/'+slots)+'</b> <small class="muted" style="color:#c9d8d5">'+(b.k==='center'?'대전에서 방어하고, 같은 특성 건물의 생산 시간을 줄여요 (등급별 1~10%)'+(centerPet()?' · 지금 '+TRAITN[TRAIT[centerPet().no]]+' 건물 -'+(isGuest(centerPet().no)?5:CENTER_CUT[GRADE_N[centerPet().no]||0])+'%':''):'등급·단계가 높을수록, 특성이 맞을수록('+TRAITN[D.tr]+') 효과가 커요')+'</small><div class="bmpets">'+ps.map(p=>'<button class="bmp" data-vunassign="'+p.born+'"><img class="px" src="'+img(p.no)+'" alt=""><small>'+esc(NAMES[p.no])+'<br>'+TRAITN[TRAIT[p.no]]+(TRAIT[p.no]===D.tr?' ✓':'')+'</small><span>빼기</span></button>').join('')+(ps.length<slots?'<button class="bmp add" data-vassign="'+b.u+'">＋<small>환수 배치</small></button>':'')+'</div></div>';}
 if(!b.bt){if(b.lv<5){const c=bCost(b.k,b.lv+1),lk=b.k!=='center'&&b.lv+1>centerLv();h+='<div class="bmsec"><b>'+(b.lv+1)+'단계로 올리기</b><div class="muted" style="color:#c9d8d5">'+costTxt(c)+' · '+durMs(bBuildMs(b.k,b.lv+1))+(lk?'<br>중심부를 먼저 '+(b.lv+1)+'단계로 올려야 해요':'')+'</div><button class="btn teal" data-vup="'+b.u+'" '+(lk||building()?'disabled':'')+'>'+(building()?'다른 건물 건설 중':'업그레이드')+'</button></div>';}else h+='<p class="muted" style="color:#ffd36e">최고 단계예요!</p>';}
 L.innerHTML=h+'<button class="btn ghost" data-close="1" style="width:100%">닫기</button></div></div>';}
function assignModal(u){const b=bOf(u),L=document.getElementById('layer'),D=BLD[b.k];const free=vilPets().map((p,i)=>[p,i]).filter(([p])=>!p.vb&&!(b.u==='center'&&noArena(p.no)));
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="환수 배치"><b class="serif" style="font-size:20px">'+esc(D.n)+'에 배치할 환수</b><p class="muted" style="color:#c9d8d5;margin:0">마을에 있는 환수만 배치할 수 있어요. 성장 슬롯의 환수는 먼저 마을로 보내 주세요.</p><div class="bmlist">'+(free.length?free.map(([p,i])=>{const gr=isGuest(p.no)?0:GRADE_N[p.no]||0,st=isGFinal(p.no)?9:p.st,bo=Math.min(100,PET_GB[gr]+st*(TRAIT[p.no]===D.tr?5:2));return '<button class="btn teal bmrow" data-vas="'+u+':'+i+'"><img class="px" src="'+img(p.no)+'" alt=""><span>'+esc(NAMES[p.no])+' · '+stN(p)+' · '+gradeOf(p.no)+' · '+TRAITN[TRAIT[p.no]]+(TRAIT[p.no]===D.tr?' ✓':'')+'<small>생산 속도 +'+bo+'%</small></span></button>';}).join(''):'<p class="muted">배치할 수 있는 환수가 없어요.</p>')+'</div><button class="btn ghost" data-close="1">닫기</button></div></div>';}
function vPetModal(i){const p=vilPets()[i],L=document.getElementById('layer');if(!p)return;const free=acc.slots.findIndex(q=>!q),b=p.vb&&bOf(p.vb);
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="마을 환수"><div style="display:flex;gap:12px;align-items:center"><img class="px" src="'+img(p.no)+'" alt="" style="width:80px;height:80px;object-fit:contain"><div><b class="serif" style="font-size:22px;color:#ffd36e">'+esc(NAMES[p.no])+'</b> '+gradeTag(p.no)+'<div class="muted" style="color:#c9d8d5">no.'+dexNo(p.no)+' · '+stN(p)+' · Lv '+p.lv+' · '+elName(ELOF[p.no])+' · 특성 '+TRAITN[TRAIT[p.no]]+'</div>'+'<div style="color:#9fe0d8">행동력 '+Math.floor(restEn(p))+' / '+maxEn(p)+'</div>'+(b?'<div style="color:#ffd36e">'+esc(BLD[b.k].n)+'에서 일하는 중</div>':'')+'</div></div><p class="muted" style="color:#c9d8d5;margin:0">마을에서는 생활 수치가 줄지 않고, 행동력은 평소처럼 차요. 수련·심부름은 성장 슬롯으로 데려가야 해요.</p><div class="bmlist">'+
  '<button class="btn teal" data-vtoslot="'+i+'" '+(free<0?'disabled':'')+'>'+(free<0?'빈 성장 슬롯이 없어요':'성장 슬롯 '+(free+1)+'(으)로 데려가기')+'</button>'+(b?'<button class="btn soft" data-vunassign="'+p.born+'">배치 해제</button>':'')+(isGuest(p.no)?'<button class="btn soft" data-vtogsp="'+i+'">전용 공간으로 보내기</button>':'')+'</div><button class="btn ghost" data-close="1">닫기</button></div></div>';}
function buildMenu(){const L=document.getElementById('layer'),c=centerLv(),bd=building();
 const rows=BLD_ORDER.map(k=>{const D=BLD[k],has=acc.vil.b.filter(b=>b.k===k).length,ok=canBuild(k),nth=k==='craft'?has+1:1,cost=bCost(k,1,nth),lock=c<D.un;
  if(!ok&&!lock&&k!=='craft')return '';if(k==='craft'&&!ok&&!lock&&has>=5)return '';
  return '<div class="rcp'+(lock||!ok?' lock':'')+'"><img class="px" src="v/b_'+D.img+'_1.webp" alt=""><div><b>'+esc(D.n)+(k==='craft'?' ('+has+'/'+CRAFT_MAX_BY_C[Math.max(c,2)]+')':'')+'</b><small>'+(lock?'중심부 '+D.un+'단계에서 열려요':!ok?'중심부 단계를 올리면 더 지을 수 있어요':costTxt(cost)+' · '+durMs(bTime(k,1)))+' · 특성 '+TRAITN[D.tr]+'</small></div><button class="btn sm" data-vnew="'+k+'" '+(lock||!ok||bd?'disabled':'')+'>짓기</button></div>';}).join('');
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal bmod" role="dialog" aria-label="건설"><b class="serif" style="font-size:22px;color:#ffd36e">건설</b><p class="muted" style="color:#c9d8d5;margin:0">같은 건물은 한 채씩 지을 수 있어요 (제작소는 최대 5채). 건설은 한 번에 하나씩 진행돼요.'+(bd?'<br><b style="color:#ffd36e">지금 '+esc(BLD[bd.k].n)+' 건설 중 · '+fmtDur(bd.bt.e-now())+'</b>':'')+'</p>'+(rows||'<p class="muted">지금 지을 수 있는 건물이 없어요.</p>')+'<button class="btn ghost" data-close="1" style="width:100%">닫기</button></div></div>';}
function storeModal(){const L=document.getElementById('layer'),st=acc.vil.store||{};
 const tiles=TILES.map((t,n)=>{const k='tile:'+n,c=t.free?'∞':(st[k]||0);return '<button class="vsi" data-vtake="'+k+'" '+(t.free||st[k]>0?'':'disabled')+'><img src="'+tileSrc(n)+'" alt=""><small>'+t.n+'<br>'+c+'</small></button>';}).join('');
 const props=PROPS.map((t,n)=>{const k='deco:'+n;return '<button class="vsi" data-vtake="'+k+'" '+(st[k]>0?'':'disabled')+'><img src="'+decoSrc(n)+'" alt=""><small>'+t.n+'<br>'+(st[k]||0)+'</small></button>';}).join('');
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal bmod" role="dialog" aria-label="마을 보관함"><b class="serif" style="font-size:22px;color:#ffd36e">마을 보관함</b><p class="muted" style="color:#c9d8d5;margin:0">눌러서 마을에 꺼내 놓아요. 기본 돌길은 무제한·무료예요. 더 많은 꾸미기는 상점의 [꾸미기]에서 살 수 있어요.</p><b>길·바닥</b><div class="vsgrid">'+tiles+'</div><b>소품</b><div class="vsgrid">'+props+'</div><button class="btn ghost" data-close="1" style="width:100%">닫기</button></div></div>';}
function skinModal(){const L=document.getElementById('layer'),v=acc.vil;
 L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="마을 스킨"><b class="serif" style="font-size:22px;color:#ffd36e">마을 스킨</b><div class="bmlist">'+Object.entries(SKINS).map(([k,s])=>{const own=v.skins.includes(k);return '<button class="btn '+(v.skin===k?'teal':'soft')+' bmrow" data-vskinset="'+k+'" '+(own?'':'disabled')+'><img src="'+(s.icon||'i/ui/nav_village.png')+'" alt=""><span>'+esc(s.n)+(v.skin===k?' ✓ 사용 중':own?'':'<small>이벤트 상점에서 구매</small>')+'</span></button>';}).join('')+'</div><p class="muted" style="color:#c9d8d5;margin:0">스킨을 바꾸면 땅·길·소품 그림이 바뀌어요.</p><button class="btn ghost" data-close="1">닫기</button></div></div>';}
/* ----- 배치 모드 (끌어서 놓기) ----- */
function placeStart(ghost){VS.place={snap:JSON.stringify({b:acc.vil.b,o:acc.vil.o,pets:acc.vil.pets.map(p=>[p.vx,p.vy])}),sel:null,ghost:ghost||null};if(ghost){const c=vFreeFor(ghost);ghost.x=c[0];ghost.y=c[1];VS.place.sel=ghost.u;}render();}
function vFreeFor(o){const gap=BLD[o.k]?2:0,f0=fpOf(o);for(let r=0;r<VG;r++)for(let y=Math.max(0,24-r);y<=Math.min(VG-1,24+r);y++)for(let x=Math.max(0,24-r);x<=Math.min(VG-1,24+r);x++){o.x=x;o.y=y;if(vValid(o)&&(!gap||!vOcc(o.u).some(q=>overlap(q,{x:x-gap,y:y-gap,w:f0.w+gap*2,h:f0.h+gap*2}))))return[x,y];}for(let y=0;y<VG;y++)for(let x=0;x<VG;x++){o.x=x;o.y=y;if(vValid(o))return[x,y];}return[0,0];}
function placeCancel(){const pl=VS.place;if(!pl)return;const s=JSON.parse(pl.snap);acc.vil.b=s.b;acc.vil.o=s.o;acc.vil.pets.forEach((p,i)=>{if(s.pets[i]){p.vx=s.pets[i][0];p.vy=s.pets[i][1];}});if(pl.taken)Object.entries(pl.taken).forEach(([k,n])=>{acc.vil.store[k]=(acc.vil.store[k]||0)+n;});VS.place=null;render();}
function placeDone(){const pl=VS.place;if(!pl)return;if(pl.ghost)return toast('먼저 [여기에 건설]을 누르거나 취소해 주세요.');
 const bad=acc.vil.b.concat(acc.vil.o).find(o=>!vValid(o)),bp=vilPets().find(p=>!p.vb&&!vPetValid(p));if(bad||bp){pl.sel=bad?bad.u:'p'+vilPets().indexOf(bp);render();return toast('겹치거나 마을 밖에 있는 것이 있어요. 빨간 표시를 옮겨 주세요.');}
 VS.place=null;SFX.play('ok');toast('배치를 저장했어요.');commit();}
let VDRAG=null;
function vPointerDown(ev){const pl=VS.place;if(!pl)return;const t=ev.target.closest('[data-vo],[data-vpet]');if(!t)return;ev.preventDefault();
 const id=t.dataset.vo||('p'+t.dataset.vpet);if(id.startsWith('p')){const p=vilPets()[+id.slice(1)];if(p&&p.vb){pl.sel=null;return toast('일하는 환수는 건물 창에서 배치를 해제한 뒤 옮길 수 있어요.');}}
 pl.sel=id;VDRAG={id,sx:ev.clientX,sy:ev.clientY,moved:false};try{t.setPointerCapture(ev.pointerId);}catch(e){}render();}
function vPointerMove(ev){if(!VDRAG||!VS.place)return;const m=document.getElementById('vmap');if(!m)return;const r=m.getBoundingClientRect(),z=VS.z||1,mx=(ev.clientX-r.left)/z,my=(ev.clientY-r.top)/z;
 const id=VDRAG.id;let o=null,isP=id.startsWith('p');if(isP)o=vilPets()[+id.slice(1)];else o=(VS.place.ghost&&VS.place.ghost.u===id)?VS.place.ghost:(bOf(id)||acc.vil.o.find(q=>q.u===id));if(!o)return;
 const f=isP?{w:petSz(o),h:petSz(o)}:fpOf(o),d=isP?f.h:(BLD[o.k]?bSize(o.k,o.lv).d:f.h),[cx,cy]=cellAt(mx,my+d*CH/4);let nx=cx-Math.floor(f.w/2),ny=cy-Math.floor(d/2);
 if(isP){if(o.vx===nx&&o.vy===ny)return;o.vx=nx;o.vy=ny;}else{if(o.x===nx&&o.y===ny)return;o.x=nx;o.y=ny;}VDRAG.moved=true;
 const sc=document.getElementById('vview'),keep=sc?[sc.scrollLeft,sc.scrollTop]:null;render();const s2=document.getElementById('vview');if(s2&&keep){s2.scrollLeft=keep[0];s2.scrollTop=keep[1];}}
function vPointerUp(){VDRAG=null;}
document.addEventListener('pointerdown',ev=>{if(VS.place&&ev.target.closest&&ev.target.closest('#vmap'))vPointerDown(ev);});
document.addEventListener('pointermove',ev=>{if(VDRAG)vPointerMove(ev);});
document.addEventListener('pointerup',vPointerUp);
function vClick(ds){const v=acc.vil;
 if(ds.vzoom){VS.z=Math.max(.3,Math.min(1.4,(VS.z||1)*(+ds.vzoom>0?1.2:1/1.2)));return render();}
 if(ds.vharvall)return harvestAll();
 if(ds.vharv){const b=bOf(ds.vharv);vilTick();if(b&&bHarvest(b))commit();if(document.querySelector('.bmod'))bModal(ds.vharv);return;}
 if(ds.vo&&!VS.place){const b=bOf(ds.vo);if(b)return bModal(b.u);return;}
 if(ds.vpet!=null&&!VS.place)return vPetModal(+ds.vpet);
 if(ds.vbuildmenu)return buildMenu();
 if(ds.vplace)return placeStart();
 if(ds.vcancel)return placeCancel();
 if(ds.vdone)return placeDone();
 if(ds.vstore)return storeModal();
 if(ds.vskin)return skinModal();
 if(ds.vskinset){if(!v.skins.includes(ds.vskinset))return;v.skin=ds.vskinset;closeLayer();SFX.play('mystic');return commit();}
 if(ds.vtake){const k=ds.vtake,free=k==='tile:2';if(!free){if(!(v.store[k]>0))return;v.store[k]--;VS.place.taken=VS.place.taken||{};VS.place.taken[k]=(VS.place.taken[k]||0)+1;}const o={u:uid36('o'),k,x:24,y:24};vFreeFor(o);v.o.push(o);VS.place.sel=o.u;closeLayer();return render();}
 if(ds.vput||ds.vdel){const id=VS.place&&VS.place.sel,o=v.o.find(q=>q.u===id);if(!o)return;
  if(ds.vput){v.o=v.o.filter(q=>q.u!==id);if(o.k!=='tile:2')v.store[o.k]=(v.store[o.k]||0)+1;VS.place.sel=null;if(VS.place.taken&&VS.place.taken[o.k]){VS.place.taken[o.k]--;}return render();}
  return confirmBox('삭제',(isTile(o)?TILES[+o.k.slice(5)].n:PROPS[+o.k.slice(5)].n)+'을(를) 없앨까요? 되돌릴 수 없어요.'+(o.k==='tile:2'?'':' (보관함에 넣으면 나중에 다시 쓸 수 있어요)'),()=>{v.o=v.o.filter(q=>q.u!==id);VS.place.sel=null;if(VS.place.taken&&VS.place.taken[o.k])VS.place.taken[o.k]--;render();});}
 if(ds.vnew){const k=ds.vnew;if(!canBuild(k))return;if(building())return toast('지금 다른 건물을 짓고 있어요.');closeLayer();return placeStart({u:uid36('b'),k,lv:0,x:24,y:24,pets:[]});}
 if(ds.vbuildgo){const pl=VS.place,g=pl&&pl.ghost;if(!g)return;if(!vValid(g))return toast('여기에는 지을 수 없어요. 빈 곳으로 옮겨 주세요.');const nth=g.k==='craft'?craftCount()+1:1,c=bCost(g.k,1,nth),l=costLack(c);if(l.length)return toast(l.join(', ')+'이(가) 부족해요.');
  payCost(c);g.bt={to:1,s:now(),e:now()+bBuildMs(g.k,1)};acc.vil.b.push(g);pl.ghost=null;pl.sel=null;VS.place=null;SFX.play('build');toast(BLD[g.k].n+' 건설을 시작했어요!');return commit();}
 if(ds.vup)return bUpgrade(ds.vup);
 if(ds.bcut){const [u,k]=ds.bcut.split(':');return bShortcut(bOf(u),k);}
 if(ds.rcptab){const [tb,u]=ds.rcptab.split(':');S.rcpTab=tb;return bModal(u);}
 if(ds.craft){const [u,k]=ds.craft.split(':'),b=bOf(u),r=RCP[k];if(!b||!r||b.job||!outInfo(r.out).ok)return;if(b.lv<(r.lv||1))return toast('제작소 '+r.lv+'단계가 필요해요.');const c={c:r.c||0,ki:r.ki||{}};if(costLack(c).length)return toast('재료가 부족해요.');payCost(c);const ms=r.min*MIN*(b.lv>=5?.8:1)*(1-prodCut());b.job={r:k,o:r.out,n:r.n||1,s:now(),e:now()+ms};SFX.play('build');toast(outInfo(r.out).n+' 제작을 시작했어요!');commit();return bModal(u);}
 if(ds.vassign)return assignModal(ds.vassign);
 if(ds.vas){const [u,i]=ds.vas.split(':'),b=bOf(u),p=vilPets()[+i];if(!b||!p)return;if(b.u==='center'&&noArena(p.no))return toast('스타즈렐름·게스트 등급은 대전 대표가 될 수 없어서 중심부에 배치할 수 없어요.');const slots=bSlots(b);b.pets=b.pets||[];if(b.pets.length>=slots)return toast('배치 칸이 가득 찼어요.');vilTick();bHarvest(b,true);b.pets.push(p.born);p.vb=b.u;if(b.u==='center'){acc.arenaRep=p.born;syncArena(true);}SFX.play('equip');toast(NAMES[p.no]+'을(를) '+BLD[b.k].n+'에 배치했어요.'+(b.u==='center'?' 대전 대표 환수가 됐어요!':''));commit();return bModal(u);}
 if(ds.vunassign){const id=+ds.vunassign,p=vilPets().find(q=>q.born===id);if(!p)return;const b=bOf(p.vb);vilTick();if(b){bHarvest(b,true);b.pets=(b.pets||[]).filter(x=>x!==id);if(b.u==='center'){acc.arenaRep=null;syncArena(true);}}p.vb=null;const c=vilFreeCell(petSz(p));p.vx=c[0];p.vy=c[1];SFX.play('clank');toast(NAMES[p.no]+'의 배치를 해제했어요.');commit();return b?bModal(b.u):closeLayer();}
 if(ds.vtoslot!=null){const i=+ds.vtoslot,p=vilPets()[i],k=acc.slots.findIndex(q=>!q);if(!p)return;if(p.vb==='center')return toast('대표 환수예요. 중심부에서 배치를 해제한 뒤 데려가 주세요.');if(k<0)return toast('빈 성장 슬롯이 없어요.');if(p.vb){const b=bOf(p.vb);vilTick();if(b){bHarvest(b,true);b.pets=b.pets.filter(x=>x!==p.born);}p.vb=null;}
  acc.vil.pets.splice(i,1);restOut(p,true);delete p.vx;delete p.vy;acc.slots[k]=p;acc.notice[k]=null;sel=k;closeLayer();SFX.play('equip');toast(NAMES[p.no]+'이(가) 성장 슬롯 '+(k+1)+'(으)로 왔어요.');view='home';return commit();}
 if(ds.vtogsp!=null){const i=+ds.vtogsp,p=vilPets()[i];if(!p||!isGuest(p.no))return;if(p.vb==='center')return toast('대표 환수예요. 중심부에서 배치를 해제한 뒤 보내 주세요.');const sr=gSer(p.no);if(gspOf(sr).length>=GSP_MAX)return toast('전용 공간이 가득 찼어요.');if(p.vb){const b=bOf(p.vb);if(b)b.pets=b.pets.filter(x=>x!==p.born);p.vb=null;}acc.vil.pets.splice(i,1);gspOf(sr).push(p);closeLayer();SFX.play('mystic');toast(NAMES[p.no]+'이(가) '+GSP[sr].n+'(으)로 갔어요.');return commit();}
}
/* ================= 운영자 설정 (상점 · 제작 · 인게임 아이템 · 컬렉션 · 이벤트) ================= */
// 인게임 아이템 (코드로 바꿔 마인크래프트에서 받는 아이템) · 번호(no)는 코드에 들어가니 바꾸지 마세요
const IG_DEF=[{no:1,k:'ig_dpp',n:'동패조각',c:'gold',m:'b25',img:'i/ig_b25.png'},{no:2,k:'ig_epp',n:'은패조각',c:'light_purple',m:'b26',img:'i/ig_b26.png'},{no:3,k:'ig_dp',n:'동패',c:'gold',m:'b27',img:'i/ig_b27.png'},{no:4,k:'ig_ep',n:'은패',c:'light_purple',m:'b28',img:'i/ig_b28.png'},{no:5,k:'ig_gp',n:'금패',c:'yellow',m:'b29',img:'i/ig_b29.png'},{no:6,k:'ig_kp',n:'금강패',c:'aqua',m:'b30',img:'i/ig_b30.png'}]
 .map(x=>Object.assign(x,{give:'give @p book[item_name={"color":"'+x.c+'","text":"'+x.n+'"},custom_model_data={strings:["'+x.m+'"]}] 1'}));
const RCP_DEF={r1:{out:'elixir',n:1,lv:1,min:60,ki:{water:5,wood:5}},r2:{out:'ig_dpp',n:1,lv:1,min:180,ki:{fire:6,metal:6}},r3:{out:'ig_epp',n:1,lv:2,min:360,ki:{water:10,metal:10}},r4:{out:'ig_dp',n:1,lv:3,min:360,ki:{wood:20,metal:20}},r5:{out:'ig_ep',n:1,lv:4,min:720,ki:{wood:35,yy:25}}};
// 장비 제작: 제작소 1단계 일반 · 2단계 고급 · 3단계 희귀 · 4단계 영웅 · 5단계 전설 (5종류)
// 재료 컨셉: 무기 불+쇠 · 방어구 땅+쇠 · 보조무기 나무+물 · 노리개 음양+물 · 방울 쇠+나무
const GEAR_RCP_KI={w:['fire','metal'],a:['earth','metal'],s:['wood','water'],n:['yy','water'],b:['metal','wood']};
const GEAR_RCP_N=[[8,6],[20,15],[50,40],[120,90],[300,220]],GEAR_RCP_C=[0,20,60,150,400],GEAR_RCP_MIN=[60,180,480,960,2160];
GT.forEach(t=>[0,1,2,3,4].forEach(g=>{const [a,b]=GEAR_RCP_KI[t],ki={};ki[a]=GEAR_RCP_N[g][0];ki[b]=GEAR_RCP_N[g][1];RCP_DEF['g_'+t+g]={out:'gear:'+t+':'+g,n:1,lv:g+1,min:GEAR_RCP_MIN[g],c:GEAR_RCP_C[g],ki};}));
function outInfo(k){k=String(k||'');if(k.startsWith('gear:')){const [,t,g]=k.split(':');const gg=+g;if(!TN[t]||!(gg>=0&&gg<=5))return{ok:false,n:k,img:'i/q.png'};const f={t,g:gg,o:t==='n'?'def':undefined,k:t==='b'?'prod':undefined};return{ok:true,gear:1,n:GN[gg]+' '+TN[t]+(t==='n'?' (옵션 무작위)':t==='b'?' (종류 무작위)':''),img:t==='n'?'eq/n.gif':t==='b'?'eq/b_prod_'+gg+'.gif':gearImg(f)};}const it=ITEMS[k];return it?{ok:true,n:it.n,img:it.img,ig:it.ig}:{ok:false,n:k,img:'i/q.png'};}
function outGive(k,n){k=String(k);if(k.startsWith('gear:')){const [,t,g]=k.split(':');for(let i=0;i<n;i++)acc.gear.push(gearNew(t,+g));return;}acc.inv[k]=(acc.inv[k]||0)+n;}
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
 }
const IG_KEYS_NOW=()=>IG.map(x=>x.k);
/* ----- 이벤트 ----- */
function evOn(e){if(!e||!e.on)return false;const t=now();return (!e.s||t>=Date.parse(e.s))&&(!e.e||t<Date.parse(e.e));}
function expM(){const e=cfg.ev&&cfg.ev.exp;return (cfg.expMult||1)*(evOn(e)?(+e.m||1):1);}
function prodCut(){const e=cfg.ev&&cfg.ev.prod;return evOn(e)?Math.min(.9,Math.max(0,(+e.pct||0)/100)):0;}
function hotNow(){const e=cfg.ev&&cfg.ev.hot;if(!evOn(e)||!e.from||!e.to)return false;const d=new Date(now()),m=d.getHours()*60+d.getMinutes(),f=e.from.split(':'),t=e.to.split(':'),a=+f[0]*60+ +f[1],b=+t[0]*60+ +t[1];return a<=b?m>=a&&m<b:m>=a||m<b;}
function hotCheck(){if(MODE!=='player'||!acc||!hotNow())return false;const e=cfg.ev.hot,d=new Date(now()),key=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();if(acc.hot===key)return false;acc.hot=key;
 const rw=Object.assign({},e.rw||{});acc.mail=acc.mail||[];acc.mail.push(stampMail(Object.assign({title:'핫타임 보상',from:'선계 관리소',msg:(e.msg||'핫타임에 접속해 줘서 고마워요!')},rw)));SFX.play('fanfare');toast('핫타임 보상이 우편함에 도착했어요!');return true;}
function evBanner(){const L=[];if((cfg.expMult||1)>1)L.push('경험치 '+cfg.expMult+'배');const ev=cfg.ev||{};const till=e=>e.e?' (~'+new Date(Date.parse(e.e)).toLocaleString('ko-KR',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})+')':'';
 if(evOn(ev.exp)&&(+ev.exp.m||1)>1)L.push('경험치 이벤트 '+ev.exp.m+'배'+till(ev.exp));if(evOn(ev.prod)&&prodCut()>0)L.push('마을 생산·제작 시간 -'+Math.round(prodCut()*100)+'%'+till(ev.prod));
 if(evOn(ev.hot))L.push('핫타임 매일 '+ev.hot.from+'~'+ev.hot.to+' 접속 시 보상'+(hotNow()?' · 지금 진행 중!':''));return L;}
/* ----- 소원을 비는 탑 (하루 1번) ----- */
function wishReady(){const b=acc.vil&&acc.vil.b.find(x=>x.k==='wish');return !!(b&&b.lv>0&&!b.bt&&acc.wishDay!==dayKey(now()));}
function doWish(note){if(note){if(!take('wish_note'))return;}else{if(!wishReady())return toast('오늘은 이미 소원을 빌었어요. 내일 다시 빌 수 있어요.');acc.wishDay=dayKey(now());}const r=rnd()*100;let got;
 if(r<50){const c=5+Math.floor(rnd()*6);acc.coins+=c;got='코인 '+c;}
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
 return {full,h:'<div class="col'+(full?' full':'')+'"><div class="colh"><b class="serif">'+esc(c.n)+'</b><span class="colp">'+(full?'<b class="colok">完成</b>':'해방 '+fr+'/'+m.length)+'</span></div><div class="colm">'+
  m.map(i=>{if(!NAMES[i])return '';const d=acc.dex[i],no=dexNo(i),lit=colLit(i);if(!d)return '<div class="cm no" title="no.'+no+'"><span>'+no+'</span><b>?</b></div>';
   return '<div class="cm'+(lit?' lit':' dim')+'" title="'+esc(NAMES[i])+(lit?' (해방)':' (해방 전)')+'"><img class="px'+(lit?'':' sil')+'" src="'+img(i)+'" alt=""><span>'+no+'</span></div>';}).join('')+'</div>'+
  (rw.length?'<div class="colrw"><span class="muted">완성 보상: '+esc(rw.join(', '))+'</span>'+(got?'<b class="colok" style="font-size:13px">받음</b>':'<button class="btn sm" data-colclaim="'+c.id+'" '+(full?'':'disabled')+'>보상 받기</button>')+'</div>':'')+'</div>'};}
function colClaim(id){const c=colsNow().find(x=>x.id===id);if(!c)return;acc.colDone=acc.colDone||{};if(acc.colDone[id])return toast('이미 받은 보상이에요.');if(!(c.m||[]).every(colLit))return toast('아직 컬렉션을 완성하지 않았어요.');
 acc.colDone[id]=1;acc.mail=acc.mail||[];acc.mail.push(stampMail(Object.assign({title:'컬렉션 「'+c.n+'」 완성 보상',from:'선계 도감관',msg:'컬렉션을 완성했어요! 축하해요.'},c.rw||{})));SFX.play('fanfare');toast('완성 보상이 우편함에 도착했어요!');commit();}
function vDex(){const tab=S.dex||'all',own=Object.keys(acc.dex).length,freed=Object.values(acc.dex).filter(d=>d.freed).length;
 let h='<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap"><h1 class="serif" style="margin:0;font-size:26px">환수 도감</h1><div style="display:flex;align-items:center;gap:10px;flex:1 1 280px;max-width:420px"><div class="stat" style="flex:1;margin:0"><div class="tr"><i style="width:'+own/NAMES.length*100+'%;background:linear-gradient(90deg,#c9a24a,#f0d78a)"></i></div></div><b>'+own+' / '+NAMES.length+'</b><span class="muted">해방 '+freed+'</span></div></div><div class="tmode">'+[['all','전체 도감'],['col','컬렉션']].map(([k,n])=>'<button class="'+(tab===k?'on':'')+'" data-dextab="'+k+'">'+n+'</button>').join('')+'</div>';
 if(tab==='col'){const cs=colsNow().map(colCard),done=cs.filter(c=>c.full).length;return h+'<div class="colhead"><span class="muted">완성 '+done+' / '+cs.length+' · 해방한 환수에만 불이 들어와요 (해방할 수 없는 1~3단계·스타즈렐름은 컬렉션에 넣지 않아요)</span></div><div class="colgrid">'+cs.map(c=>c.h).join('')+'</div>';}
 return h+'<p class="muted" style="margin:4px 0 8px">획득하면 실루엣이 보이고, 해방하면 불이 들어와요. 해방할 수 없는 1~3단계와 스타즈렐름 환수는 획득만 해도 불이 들어와요.</p><div class="dex dexnum">'+NAMES.map((n,i)=>{const d=acc.dex[i],no=dexNo(i);
  if(!d)return '<div class="dc no"><span class="dno">'+no+'</span><b class="q">?</b><span class="n">???</span></div>';
  const lit=dexLit(i);return '<div class="dc'+(lit?' lit':' got')+'" title="'+esc(n)+'"><span class="dno">'+no+'</span><img class="px'+(lit?'':' sil')+'" src="'+img(i)+'" alt=""><span class="n">'+esc(n)+'</span>'+(lit?gradeTag(i,'sm'):'')+(d.freed?'<span class="seal" aria-label="해방함">解</span>':'')+'</div>';}).join('')+'</div>';}
/* ----- 코드화 (인게임 아이템 → 코드) ----- */
// 코드: 플레이어-회차-(번호-개수)×최대6-확인숫자 · 확인숫자=(P×41+N×43+Σ(번호×97+개수×61)×순서+2468) mod 9973
function igChk(P0,N,pairs){let s=P0*41+N*43+2468;pairs.forEach(([a,b],j)=>{s+=(a*97+b*61)*(j+1);});return s%9973;}
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
 confirmBox('코드 만들기',txt+'\n\n코드로 바꾸면 가방에서 빠져요. 코드를 잃어버리지 않게 꼭 복사해 두세요.',()=>{if(sel_.some(([k,n])=>(acc.inv[k]||0)<n))return toast('아이템이 부족해요.');sel_.forEach(([k,n])=>{acc.inv[k]-=n;});acc.igN=(acc.igN||0)+1;const N=acc.igN,pairs=sel_.map(([k,n])=>[ITEMS[k].ig,n]);
  const code=[acc.playerNo,N].concat(...pairs,[igChk(acc.playerNo,N,pairs)]).join('-');
  acc.igc=[{code,txt,t:Date.now(),p:pairs}].concat(acc.igc||[]).slice(0,100);S.igSel={};SFX.play('fanfare');commit();
  const L=document.getElementById('layer');L.innerHTML='<div class="overlay" data-close="1"><div class="modal" role="dialog" aria-label="인게임 코드"><b class="serif" style="font-size:22px;color:#ffd36e">인게임 코드</b><code class="igbig">'+esc(code)+'</code><p class="muted" style="color:#c9d8d5;margin:0">'+esc(txt)+'<br>게임에서 책과 깃펜 첫 장에 이 코드를 적고 손에 든 채로 /trigger hwansu_get 을 입력하면 받아요. 가방 → 코드화에서 다시 볼 수 있어요.</p><button class="btn" data-copy="'+esc(code)+'">복사</button><button class="btn ghost" data-close="1">닫기</button></div></div>';});}
applyCfg();
/* ================= 환수 대전 (비동기) ================= */
const SKILL={yang:'양기 폭발',yin:'음기 파동',neutral:'음양 구르기',fire:'화염구',water:'물대포',wood:'덩굴채찍',earth:'바위 떨구기',metal:'쇠발톱'};
const PVP_WIN=10, PVP_LOSE=5, DEF_WIN=3, DEF_LOSE=5, PVP_DAILY=3;
const PV={list:null,logs:null,busy:false,atk:null,loaded:false};
let arenaKey=null;
function sunKey(t){const d=new Date(dayKey(t)+'T00:00:00Z');d.setUTCDate(d.getUTCDate()-d.getUTCDay());return d.toISOString().slice(0,10);}
function aEff(a){return a&&a.week===sunKey(now())?{m:a.medals,w:a.w||0,l:a.l||0,dw:a.dw||0,dl:a.dl||0}:{m:100,w:0,l:0,dw:0,dl:0};}
function repPet(){const c=acc.vil&&acc.vil.b&&acc.vil.b.find(b=>b.u==='center'),id=c&&c.pets&&c.pets[0];if(id==null)return null;const p=vilPets().find(q=>q.born===id);return p?{i:-1,p}:null;}
// 스타즈렐름·게스트 등급은 대전에 나갈 수 없어요 (방어·공격 모두)
const noArena=no=>isGuest(no)||GRADE_N[no]===-2;
function atkIdx(){if(PV.atk!=null&&acc.slots[PV.atk]&&!noArena(acc.slots[PV.atk].no))return PV.atk;return acc.slots.findIndex(q=>q&&q.sick==null&&!noArena(q.no));}
function petSnap(p){const s=statsOf(p);return{no:p.no,st:p.st,lv:p.lv,star:p.star||0,cp:powerOf(s),el:ELOF[p.no]||'fire',bs:{hp:s.hp,atk:s.atk,def:s.def,eva:s.eva,pen:s.pen,crit:s.crit}};}
async function syncArena(force){if(MODE!=='player'||!acc||!db)return;if(acc.arenaRep==null&&!force)return;const r0=repPet(),r=r0&&!noArena(r0.p.no)?r0:null,pet=r?petSnap(r.p):null;
 const key=pet?[pet.no,pet.st,pet.lv,pet.cp,JSON.stringify(pet.bs||{})].join('|'):'none';if(!force&&key===arenaKey)return;arenaKey=key;
 const ref=db.doc('arena/'+acc.uid);try{const s=await ref.get();if(!s.exists){if(!pet)return;await ref.set({uid:acc.uid,id:acc.id,nick:acc.nick||acc.id,week:sunKey(now()),medals:100,w:0,l:0,dw:0,dl:0,pet,t:Date.now()});}else await ref.update({pet,nick:acc.nick||acc.id,t:Date.now()});}catch(e){arenaKey=null;}}
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
 const me=repPet();if(!me)return toast('먼저 마을 중심부에 대표 환수를 배치해 주세요.');
 const ai=atkIdx(),ap=acc.slots[ai];if(!ap)return toast('성장 슬롯에서 출전할 환수를 골라 주세요.');if(noArena(ap.no))return toast('스타즈렐름·게스트 등급은 대전에 나갈 수 없어요.');if(ap.sick!=null)return toast('아픈 환수는 대전에 나갈 수 없어요.');
 PV.busy=true;try{
  const dRef=db.doc('arena/'+uid),ds=await dRef.get();if(!ds.exists||!ds.data().pet){toast('상대 정보를 찾지 못했어요.');return;}const dd=ds.data();
  const myRef=db.doc('arena/'+acc.uid);let ms=await myRef.get();if(!ms.exists){await syncArena(true);ms=await myRef.get();}const mine=ms.exists?ms.data():null;
  const A=petSnap(ap),D=dd.pet,res=simBattle(A,D,Math.floor(rnd()*4294967296));
  const wk=sunKey(now()),ea=aEff(mine),ed=aEff(dd),na=Math.max(0,ea.m+(res.win?PVP_WIN:-PVP_LOSE)),nd=Math.max(0,ed.m+(res.win?-DEF_LOSE:DEF_WIN));
  if(re){acc.inv.sec_pvp--;ad.pvpRe=(ad.pvpRe||0)+1;if(!(ad.pvpTo||[]).includes(uid))ad.pvpTo=(ad.pvpTo||[]).concat([uid]);}else{ad.pvp=(ad.pvp||0)+1;ad.pvpTo=(ad.pvpTo||[]).concat([uid]);}await save();
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
 if(r){const s=petSnap(r.p);h+='<div style="display:flex;gap:14px;align-items:center"><img class="px" src="'+img(s.no)+'" width="96" height="96" style="object-fit:contain" alt=""><div><b class="serif" style="font-size:21px">'+NAMES[s.no]+'</b> '+elTag(s.el)+'<div class="muted" style="margin-top:4px">'+stN(s)+' · Lv '+s.lv+' · 전투력 <b>'+fmt(s.cp)+'</b></div></div></div>';}
 else h+='<p class="muted">마을 <b>중심부</b>에 환수를 배치하면 그 환수가 대표 환수가 돼요. 다른 유저는 내 대표 환수에게 도전해요.</p>';
 h+='<div style="margin-top:10px"><button class="btn soft sm" data-view="village">마을 중심부에서 대표 바꾸기</button></div></div>';
 h+='<div class="card" style="flex:1 1 260px;text-align:center"><h2>이번 주 마패</h2><div style="display:flex;align-items:center;justify-content:center;gap:12px"><img class="px" src="i/mapae.png" width="72" height="72" alt=""><b class="serif" style="font-size:44px">'+e.m+'</b></div><div class="muted">공격 '+e.w+'승 '+e.l+'패 · 방어 '+e.dw+'승 '+e.dl+'패</div><p style="margin:8px 0 0"><b style="color:'+(used?'#8a7a5a':'#2b5a5e')+'">'+(used?'오늘 공격 완료':'오늘 공격 가능 ('+(PVP_DAILY-(ad.pvp||0))+'/'+PVP_DAILY+')')+'</b></p></div></div>';
 if(r&&atkIdx()<0)h+='<div class="card"><p class="muted">성장 슬롯에 대전에 나갈 수 있는 환수가 없어요. (스타즈렐름·게스트 등급은 대전에 나갈 수 없어요)</p></div>';
 if(r&&atkIdx()>=0){const ai=atkIdx(),atkEl=ELOF[acc.slots[ai].no];
  h+='<div class="card"><h2>공격하기</h2><div class="muted" style="margin-bottom:6px">출전할 환수를 고르세요</div><div class="slots" style="margin:0">'+acc.slots.map((q,i)=>q?'<button class="slot'+(ai===i?' on':'')+'" data-atk="'+i+'" '+(noArena(q.no)?'disabled title="스타즈렐름·게스트 등급은 대전에 나갈 수 없어요"':'')+'><img class="px" src="'+img(q.no)+'" alt=""><span><b>'+esc(NAMES[q.no])+'</b><small>'+elName(ELOF[q.no])+' · 전투력 '+fmt(cp(q))+(q.sick!=null?' · 아픔':'')+'</small></span></button>':'').join('')+'</div>';
  const opp=(PV.list||[]).filter(a=>a.uid!==acc.uid).map(a=>Object.assign({},a,{em:aEff(a).m})).sort((x,y)=>Math.abs(x.em-e.m)-Math.abs(y.em-e.m)||y.em-x.em).slice(0,10);
  h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-top:16px"><b>상대 고르기 <small class="muted">· 마패가 비슷한 순</small></b><button class="btn soft sm" data-pvprefresh="1">새로고침</button></div>';
  h+=PV.list==null?'<p class="muted">불러오는 중…</p>':opp.length?'<div class="opps">'+opp.map(a=>{const adv=isAdv(atkEl,a.pet.el)?'<span class="advg">상성 유리</span>':isAdv(a.pet.el,atkEl)?'<span class="advb">상성 불리</span>':'';
   return '<div class="opp"><img class="px" src="'+img(a.pet.no)+'" alt=""><div class="t"><b>'+esc(a.nick)+'</b><small>'+esc(NAMES[a.pet.no])+' '+elTag(a.pet.el)+' '+adv+'</small><small>전투력 '+fmt(a.pet.cp)+' · <img class="px" src="i/mapae.png" alt="" style="width:16px;height:16px;vertical-align:-3px"> '+a.em+'</small></div>'+((ad.pvpTo||[]).includes(a.uid)?((acc.inv.sec_pvp||0)>0?'<button class="btn sm" data-refight="'+esc(a.uid)+'" '+(PV.busy?'disabled':'')+' title="대전재도전비서 1개 사용"><img class="px" src="'+ITEMS.sec_pvp.img+'" alt="" style="width:20px;height:20px;vertical-align:-5px"> 재도전 ('+acc.inv.sec_pvp+')</button>':'<button class="btn soft sm" disabled>오늘 도전함</button>'):used&&(acc.inv.sec_pvp||0)>0?'<button class="btn sm" data-refight="'+esc(a.uid)+'" '+(PV.busy?'disabled':'')+' title="대전재도전비서 1개 사용"><img class="px" src="'+ITEMS.sec_pvp.img+'" alt="" style="width:20px;height:20px;vertical-align:-5px"> 추가 도전 ('+acc.inv.sec_pvp+')</button>':'<button class="btn sm" data-fight="'+esc(a.uid)+'" '+(used||PV.busy?'disabled':'')+'>도전</button>')+'</div>';}).join('')+'</div>':'<p class="muted">아직 도전할 상대가 없어요.</p>';
  h+='<p class="muted" style="margin-bottom:0">상성: 나무 → 땅 → 물 → 불 → 쇠 → 나무 (화살표 쪽을 이겨요) · 양과 음은 서로를 이겨요. 상성이 유리하면 피해 ×1.2. 치명은 피해 ×1.6, 회피는 상대 직격만큼 줄고, 직격은 방어를 일부 무시해요.</p></div>';}
 const rank=(PV.list||[]).map(a=>Object.assign({},a,{em:aEff(a).m})).sort((x,y)=>y.em-x.em).slice(0,10);
 h+='<div class="row"><div class="card" style="flex:1 1 320px"><h2>이번 주 순위</h2>'+(rank.length?'<table class="t">'+rank.map((a,i)=>'<tr'+(a.uid===acc.uid?' style="background:#fff3c4"':'')+'><td style="width:34px"><b>'+(i+1)+'</b></td><td><img class="px" src="'+img(a.pet.no)+'" alt="" width="32" height="32" style="object-fit:contain;vertical-align:middle"> '+esc(a.nick)+'</td><td style="text-align:right;white-space:nowrap"><img class="px" src="i/mapae.png" alt="" style="width:20px;height:20px;vertical-align:-4px"> <b>'+a.em+'</b></td></tr>').join('')+'</table>':'<p class="muted">아직 없어요.</p>')+'</div>';
 h+='<div class="card" style="flex:1 1 320px"><h2>이번 주 대전 기록</h2>'+(PV.logs&&PV.logs.length?PV.logs.map(b=>{const mw=b.role==='atk'?b.win:!b.win,op=b.role==='atk'?b.d:b.a,dm=b.role==='atk'?b.da:b.dd;
   return '<div class="blog"><b style="color:'+(mw?'#2e7d3a':'#b02a1f')+'">'+(b.role==='atk'?'공격 ':'방어 ')+(mw?'승리':'패배')+'</b><span style="flex:1">vs '+esc(op.nick)+' <small class="muted">('+esc(NAMES[op.pet.no])+')</small></span><span class="muted">'+(dm>0?'+':'')+dm+'</span><button class="btn soft sm" data-replay="'+esc(b.id)+'">다시 보기</button></div>';}).join(''):'<p class="muted">이번 주 기록이 없어요.</p>')+'</div></div>';
 return h;}

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
    res.innerHTML='<span class="serif" style="font-size:40px;font-weight:700;color:'+(meWin?'#ffd36e':'#c9d8d5')+'">'+(meWin?'승리!':'패배…')+'</span><div style="display:flex;align-items:center;gap:10px;justify-content:center"><img class="px" src="i/mapae.png" alt="" width="56" height="56"><b style="font-size:28px;color:'+(delta>=0?'#ffd36e':'#ff8a7a')+'">'+(delta>=0?'+':'')+delta+'</b><span style="color:#e8fff8">→ 마패 '+total+'</span></div><small style="color:#c9d8d5">'+(role==='atk'?'공격':'방어')+' 기록 · '+new Date(b.t).toLocaleString('ko-KR')+'</small><button class="btn" id="abOk" style="background:#f0c75e;margin-top:8px">확인</button>';}
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
function bossSuggest(){const c=BV.cur,k=c?(c.k||0)+1:0,hits=BV.hits||[];let hp,why;
 if(c&&hits.length){const tot=hits.reduce((s,h)=>s+h.dmg,0),end=c.killed?c.killedAt:Date.now(),days=Math.max(1,(end-c.start)/(24*H));hp=Math.round(tot/days*BOSS_DAYS*1.2/1000)*1000;why='직전 보스 하루 평균 피해 '+fmt(tot/days)+' × '+BOSS_DAYS+'일 × 1.2';}
 else{const n=Math.max(1,(AS.list||[]).filter(a=>a.role==='player'&&!a.banned).length);hp=n*3300*BOSS_DAYS;why='참여 예상 '+n+'명 × 3,300 × '+BOSS_DAYS+'일';}
 return{k,hp:Math.max(10000,hp),atk:Math.round(400*Math.pow(1.15,k)),def:Math.round(300*Math.pow(1.15,k)),why};}
const BV={cur:null,hits:null,loaded:false,busy:false,atk:null};
function bossPet(c){const d=BOSSES[c.no-1];return{boss:true,no:c.no,name:d.n,img:'b/'+dexNo(c.no)+'.gif',el:d.el,skill:d.sk,lv:0,cp:0};}
function bossStats(c){return{atk:c.atk,def:c.def!=null?c.def:Math.round(c.atk*.75),eva:c.eva||30,pen:c.pen||30,crit:c.crit||30,el:BOSSES[c.no-1].el};}
function simBoss(A,c,seed){const R=seeded(seed),sa=snapStats(A),bs=bossStats(c);let ha=sa.hp,hd=c.hp,dealt=0;const log=[];
 for(let r=0;r<BOSS_ROUNDS&&ha>0&&hd>0;r++){const a=hitCalc(sa,bs,R),real=Math.min(a.dmg,hd);hd-=real;dealt+=real;log.push([0,a.dmg,a.crit,a.miss,a.adv,ha,hd]);if(hd<=0)break;
  const b=hitCalc(bs,sa,R);ha=Math.max(0,ha-b.dmg);log.push([1,b.dmg,b.crit,b.miss,b.adv,ha,hd]);}
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
 return '<div class="card bossc'+(c.killed?' dead':'')+'"><div class="bossimg"><img class="px" src="'+D.img+'" alt="">'+(c.killed?'<span class="bossdead">討伐</span>':'')+'</div><div class="bossinfo"><small class="muted">12지신 · '+BOSSES[c.no-1].a+'</small><b class="serif" style="font-size:26px">'+esc(D.name)+'</b><div>'+elTag(D.el)+' <span class="muted">고유기: '+esc(D.skill.n)+' · 공격력 '+fmt(c.atk)+' · 방어력 '+fmt(bossStats(c).def)+'</span></div>'+
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
 const sel=AS.bossNo||(c?c.no:1),i=sel-1,SG=bossSuggest();
 let h='<div class="card adm"><h2>현재 월드보스</h2>'+bossCard(c,BV.hits,true)+(c?'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn soft sm" data-x="bossReload">새로고침</button>'+(main?'<button class="btn soft sm" data-x="bossHeal">체력 가득 채우기</button><button class="btn red sm" data-x="bossEnd">보스 내리기</button>':'')+'</div>':'')+'</div>';
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


/* ================= 선계 심부름 (10분~12시간 · 하루 5번) ================= */
const IMG_V='3';
// [이름, 분, 코인 범위, 기운 개수 범위, 일반 장비 확률, 고급 장비 확률]
const ERR=[['아랫마을 장터',10,[1,2],[1,1],0,0],['대숲 오솔길',30,[2,4],[1,2],.01,0],['구름 고갯길',60,[4,6],[2,3],.02,0],['연화 나루터',120,[6,9],[3,4],.04,.005],['선계 상단 행렬',240,[9,13],[4,6],.06,.015],['천상 약초원',480,[14,20],[6,9],.08,.03],['별무리 하늘길',720,[18,26],[8,12],.10,.05]]
 .map((a,i)=>({n:a[0],min:a[1],c:a[2],k:a[3],g0:a[4],g1:a[5],img:'m/e'+a[1]+'.webp'}));
const ERRAND_DAILY=5;
const rr=([a,b])=>a+Math.floor(rnd()*(b-a+1));
function errCut(p){return gearSum(p).bell.errand/100;}
function finishErrand(p){const m=ERR[p.errand.m],coins=rr(m.c),kn=rr(m.k),ki={};for(let j=0;j<kn;j++){const k=GAUGES[Math.floor(rnd()*6)];ki[k]=(ki[k]||0)+1;}
 acc.coins+=coins;Object.entries(ki).forEach(([k,n])=>{acc.inv[KI[k]]=(acc.inv[KI[k]]||0)+n;});
 const gear=[],r=rnd();if(r<m.g1)gear.push(gearNew(GT[Math.floor(rnd()*GT.length)],1));else if(r<m.g1+m.g0)gear.push(gearNew(GT[Math.floor(rnd()*GT.length)],0));gear.forEach(g=>acc.gear.push(g));
 p.errandResult={m:p.errand.m,coins,ki,gear:gear.map(g=>g.u)};p.errand=null;}
function sendErrand(m){const p=P();if(!guard(p))return;if(p.sick!=null)return toast('아파서 심부름을 갈 수 없어요.');if(p.st<2)return toast('알은 심부름을 갈 수 없어요. 부화한 뒤에 보내 주세요.');
 const ad=accDaily();if((ad.errand||0)>=ERRAND_DAILY)return toast('오늘 심부름 횟수를 다 썼어요 (하루 '+ERRAND_DAILY+'번).');
 ad.errand=(ad.errand||0)+1;const ms=ERR[m].min*MIN*(1-errCut(p));p.errand={m,start:now(),end:now()+ms};SFX.play('whoosh');toast(NAMES[p.no]+'이(가) '+ERR[m].n+'(으)로 심부름을 떠났어요.');commit();}
// 결과는 보따리로: 10분~1시간 일반 · 2~4시간 상급 · 8~12시간 최상급 보따리. 보상 하나당 보따리 하나
const BAGS=[{n:'일반 보따리',img:'i/bag1.png'},{n:'상급 보따리',img:'i/bag2.png'},{n:'최상급 보따리',img:'i/bag3.png'}];
const errTier=m=>m>=5?2:m>=3?1:0;
function errItems(r){const L=[{img:'i/coin_spin.gif',n:'코인',c:r.coins}];Object.entries(r.ki||{}).forEach(([k,n])=>L.push({img:ITEMS[KI[k]].img,n:ITEMS[KI[k]].n,c:n}));(r.gear||[]).forEach(u=>{const g=gearOf(u);if(g)L.push({img:gearImg(g),n:gearName(g),c:1,gear:g.g});});return L;}
function errandOverlay(){const i=acc.slots.findIndex(q=>q&&q.errandResult);if(i<0)return '';const p=acc.slots[i],r=p.errandResult,m=ERR[r.m],t=errTier(r.m),L=errItems(r);
 return '<div class="overlay"><div class="modal errres" role="dialog" aria-label="심부름 결과" style="background-image:linear-gradient(180deg,rgba(14,26,30,.82),rgba(14,26,30,.95)),url('+m.img+');background-size:cover"><span style="font-size:12px;color:#f0c75e;letter-spacing:2px">'+esc(m.n)+' 심부름 완료</span><img class="px" src="'+img(p.no)+'" alt="" width="80" height="80" style="object-fit:contain"><b class="serif" style="font-size:20px;color:#fff8e6">'+esc(NAMES[p.no])+'이(가) '+BAGS[t].n+'를 '+L.length+'개 들고 왔어요!</b>'+
 '<div class="bagrow">'+L.map((x,k)=>{const tt=x.gear!=null?2:t;return '<button class="bagb t'+tt+'" data-bagopen="'+k+'" title="'+esc(BAGS[t].n)+'"><img class="px bimg" src="'+BAGS[t].img+'" alt=""><small>'+(x.gear!=null?'반짝이는 ':'')+BAGS[t].n+'</small><span class="bagc"><img class="px" src="'+x.img+'" alt=""><b>×'+x.c+'</b><i>'+esc(x.n)+'</i></span></button>';}).join('')+'</div>'+
 '<span class="muted" id="bagHint" style="color:#c9d8d5">보따리를 눌러 열어 보세요</span>'+
 '<div class="bagsum" id="bagTot" style="display:none">'+L.map(x=>'<span class="bsi"><img class="px" src="'+x.img+'" alt=""><span>'+esc(x.n)+'</span><b>×'+x.c+'</b></span>').join('')+'</div>'+
 '<div style="display:flex;gap:8px"><button class="btn soft" data-bagall="1">모두 열기</button><button class="btn" data-errack="'+i+'" style="background:#f0c75e">받기</button></div></div></div>';}
function bagOpen(btn){if(btn.classList.contains('open'))return;btn.classList.add('open');SFX.play(btn.classList.contains('t2')?'fanfare':btn.classList.contains('t1')?'coins':'buy');
 if(document.querySelectorAll('.bagb:not(.open)').length===0){const e=document.getElementById('bagTot');if(e)e.style.display='';const h=document.getElementById('bagHint');if(h)h.style.display='none';}}
function bagAll(){document.querySelectorAll('.bagb:not(.open)').forEach((b,k)=>setTimeout(()=>bagOpen(b),k*180));}
function vErrand(){const p=P();if(!p)return '<div class="card"><p class="muted">환수를 먼저 골라 주세요.</p></div>';const ad=accDaily(),left=ERRAND_DAILY-(ad.errand||0),cut=errCut(p);
 let h='<div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><div><b class="serif" style="font-size:20px">선계 심부름</b><div class="muted">심부름을 보내면 코인·기운(음양 포함)·가끔 장비를 가져와요. 심부름 중에는 수련·돌보기를 할 수 없어요.'+(cut?' · 방울 -'+Math.round(cut*100)+'%':'')+'</div></div><b style="color:#2b5a5e">오늘 남은 심부름 '+left+' / '+ERRAND_DAILY+'</b></div>';
 if(p.errand)h+='<div class="card errnow"><b>'+esc(NAMES[p.no])+' · '+esc(ERR[p.errand.m].n)+' 심부름 중</b><div class="stat" style="margin:4px 0"><div class="tr"><i style="width:'+Math.min(100,(now()-p.errand.start)/(p.errand.end-p.errand.start)*100)+'%;background:linear-gradient(90deg,#c9822b,#f0c98a)"></i></div></div><span class="muted">남은 시간 '+fmtDur(p.errand.end-now())+'</span></div>';
 h+='<div class="errgrid">'+ERR.map((m,k)=>'<div class="errc"><div class="errbg" style="background-image:url('+m.img+')"><span class="errt">'+durTxt(m.min)+'</span></div><div class="errb"><b class="serif" style="font-size:17px">'+esc(m.n)+'</b><small class="muted">코인 '+m.c.join('~')+' · 기운 '+m.k.join('~')+'개'+(m.g0?' · 일반 장비 '+(m.g0*100)+'%':'')+(m.g1?' · 고급 장비 '+(m.g1*100)+'%':'')+'</small>'+
  '<button class="btn teal" data-errand="'+k+'" '+(p.errand||p.train||p.sleep||p.sick!=null||p.st<2||left<=0?'disabled':'')+'>'+(p.errand?'심부름 중':p.train?'수련 중':p.sleep?'자는 중':p.sick!=null?'아파서 못 가요':p.st<2?'알은 못 가요':left<=0?'오늘 횟수 끝':'심부름 보내기')+'</button></div></div>').join('')+'</div>';
 const others=acc.slots.map((q,i)=>q&&q.errand&&i!==sel?'<div style="display:flex;gap:8px;align-items:center;margin:4px 0"><img class="px" src="'+img(q.no)+'" alt="" width="36" height="36" style="object-fit:contain"><b>'+esc(NAMES[q.no])+'</b><span class="muted">'+esc(ERR[q.errand.m].n)+' · '+fmtDur(q.errand.end-now())+'</span></div>':'').join('');
 if(others)h+='<div class="card"><h2>다른 환수 심부름</h2>'+others+'</div>';
 return h;}
/* ================= 환수 야바위 (하루 1번) ================= */
/* 놀아주기 = 환수 야바위: 환수마다 하루 1번 호감도 +10, 코인 보상은 하루 1번 */
const YB_REWARD=5;
function ybStart(p){const ad=accDaily();if(!p)return;const d=daily(p);if(d.play)return;d.play=1;addAff(p,10);save();
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
  if(win){const gc=!ad.game;if(gc){ad.game=1;acc.coins+=YB_REWARD;}SFX.play('fanfare');$('ymsg').innerHTML='<b style="color:#ffd36e">찾았다!</b> 호감도 +10'+(gc?' · 코인 +'+YB_REWARD:'');pet.classList.add('happy');}else{SFX.play('sad');$('ymsg').innerHTML='아쉬워요… 여기 숨어 있었어요! 그래도 즐거웠대요. 호감도 +10';}
  save();$('ybtn').innerHTML='<button class="btn" id="ybOk" style="background:#f0c75e;margin-top:8px">확인</button>';$('ybOk').onclick=()=>{closeLayer();commit();};};}

function resultOverlay(){const i=acc.slots.findIndex(q=>q&&q.result);if(i<0)return '';const p=acc.slots[i];let res='';{const r=p.result;SFX.once(i+'|'+r.spot+'|'+r.exp+'|'+r.lvTo+'|'+r.out,r.out);if(r.lvTo>r.lvFrom)setTimeout(()=>SFX.play('lvup'),0);const EL_=r.encs||(r.enc?[r.enc]:[]);EL_.forEach((k,j)=>setTimeout(()=>SFX.play({luck:'coins',egg:'egg',gear:'equip',kifind:'magic',susluck:'magic',blesssec:'up'}[k]||'heal'),900+j*600));const encN={bless:'성수의 축복 (경험치 ×1.5)',luck:'뜻밖의 행운 (코인 +'+r.coins+')',snack:'선녀의 간식 (포만감·목마름 +30)',lost:'길 잃은 기운 (무작위 오행 게이지 +1)',kifind:'기운 무더기 ('+(r.kiK?ELK[r.kiK]:'')+'의 기운 +3)',dosa:'도사의 집중수련 (레벨 +1)',egg:'환수 알 발견! ('+(r.eggBag?'가방에 보관했어요':'빈 슬롯에 알이 들어왔어요')+')',gear:'떠돌이 장비 (일반 '+(TN[r.gearT]||'장비')+' 획득)',secret:'비기 발견 (즉시완료비서 +1)',susluck:'수상한 행운 ('+(ITEMS[r.susK]?ITEMS[r.susK].n:'수상한 기운')+' +1)',blesssec:'축복비서 발견 (강화축복비서 +1)'};
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
function normAcc(d){const a=JSON.parse(JSON.stringify(d));a.notice=a.notice||[null,null,null];a.gear=a.gear||[];a.inv=a.inv||{};a.dex=a.dex||{};a.slots=a.slots||[null,null,null];a.mail=a.mail||[];delete a.bench;
 {const seen=new Set();a.gear=a.gear.filter(g=>g&&g.t&&TN[g.t]);a.gear.forEach(g=>{if(!g.u||seen.has(g.u))g.u=uid36('g');seen.add(g.u);if(g.g==null)g.g=0;if(g.p==null)g.p=0;if(g.t==='n'){if(!NG_OPT[g.o])g.o='def';if(g.r==null)g.r=Math.random();ngFill(g);}if(g.t==='b'){if(!BELL[g.k])g.k='prod';if(g.r==null)g.r=Math.random();}});}
 a.gsp=a.gsp||{};a.gsp.s1=a.gsp.s1||[];a.gsp.s2=a.gsp.s2||[];a.vil=a.vil||null;
 a.slots.concat(a.gsp.s1,a.gsp.s2,(a.vil&&a.vil.pets)||[]).forEach(p=>{if(!p)return;p.eq=Object.assign({w:null,a:null,s:null,n:null,b:null},p.eq||{});if(!p.g){p.g=newGauge();p.gT=newGauge();}p.gT=p.gT||newGauge();p.star=p.star||0;p.acc=p.acc||{roll:0,low:0};if(p.aff==null)p.aff=10;delete p.el;delete p.elT;delete p.lock;if(!FORMS[p.no]){p.no=0;p.st=1;}});
 a.offset=0;return a;}
function render(){if(TEST)setTimeout(testBar,0);setTimeout(decoMount,0);
 const app=document.getElementById('app');
 if(!acc){app.innerHTML=loginView(S.loginMsg||'');return;}
 if(MODE==='admin'){app.innerHTML=isAdmin()?adminHeader()+'<main>'+adminBody()+'</main>':'<main><div class="card">운영자 계정이 아니에요. <button class="btn sm" data-a2="logout">로그아웃</button></div></main>';return;}
 const keep=document.activeElement&&document.activeElement.id;
 const body={village:vVillage,home:vHome,train:vTrainHub,gear:vGear,bag:vBag,shop:vShop,code:vCode,dex:vDex,pvp:vArena,boss:vBoss,tower:vTower,xmas:vXmas,guest:vGuest,mail:vMail}[view]||vVillage;
 let inner;try{inner=body();}catch(e){console.error(e);inner='<div class="card"><b>화면을 그리는 중 문제가 생겼어요.</b><p class="muted">'+esc(String(e&&e.message||e))+'</p><button class="btn sm" data-view="home">환수 화면으로</button></div>';}
 app.innerHTML=header()+'<main class="v-'+view+'">'+inner+'</main>'+resultOverlay()+errandOverlay();if(view==='village')setTimeout(vFit,0);
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
 if(MODE==='player'){tickAll();render();save();
  arenaKey=null;PV.list=null;PV.logs=null;PV.loaded=false;syncArena();
  {const st=attCheck();if(st){save();render();attModal(true);}}
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
 coin_s:{n:'코인 주머니',r:0,w:3,d:'환수 코인 +1',fb:'i/bag1.png'},
 sus_s:{n:'수상한 기운 (소)',r:0,w:4,d:'수상한 기운(소) 1개',fb:null},
 heal_l:{n:'영약 한 모금',r:1,w:10,v:.4,d:'방금 싸운 환수 체력 40% 회복',fb:null},
 drain:{n:'흡혈 부적',r:1,w:6,d:'이번 등반 가한 피해의 3% 회복 (최대 15%)',fb:'i/sec_cure.gif',bf:{drain:.03}},
 first:{n:'선공의 깃털',r:1,w:5,d:'이번 등반 매 전투 첫 공격 피해 1.5배 (중복 안 됨)',fb:'i/act_play.png',bf:{first:1}},
 elem:{n:'오행 공명',r:1,w:5,d:'이번 등반 상성 유리 시 피해 +15% (중복 안 됨)',fb:'i/act_evolve.png',bf:{elem:1}},
 atk_m:{n:'맹수의 송곳니',r:1,w:6,d:'이번 등반 공격력 +10% (최대 +40%)',fb:'eq/1_w.gif',bf:{atk:.1}},
 coin_m:{n:'큰 코인 주머니',r:1,w:2,d:'환수 코인 +3',fb:'i/bag2.png'},
 sus_m:{n:'수상한 기운 (중)',r:1,w:3,d:'수상한 기운(중) 1개',fb:null},
 revive:{n:'부활초',r:2,w:5,v:.3,d:'쓰러진 환수 1마리를 체력 30%로 부활 (없으면 전원 20% 회복)',fb:'i/act_return.png'},
 fox:{n:'구미호의 구슬',r:2,w:5,d:'이번 등반 공격력 +15%, 받는 피해 +10%',fb:'h/08.gif',bf:{atk:.15,taken:.1}},
 toad:{n:'황금 두꺼비',r:2,w:2,d:'환수 코인 +6',fb:'i/bag3.png'},
 t60:{n:'시간단축비서 (1시간)',r:2,w:3,d:'시간단축비서(1시간) 1개',fb:null},
 bet:{n:'도깨비 내기',r:3,w:1,d:'50%: 코인 +4 / 50%: 방금 싸운 환수 체력 -25%',fb:'i/yb_cup.png'}};
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
 if(k==='bet'){if(rnd()<.5){acc.coins+=4;msg='도깨비 내기 승리! 코인 +4';SFX.play('coins');}else{if(last!=null&&!run.down.includes(last))run.hp[last]=Math.max(.01,(run.hp[last]==null?1:run.hp[last])-.25);msg='도깨비 내기 패배… 체력 -25%';SFX.play('sad');}}
 else SFX.play(e.r>=2?'fanfare':'magic');
 if(e.bf)run.picks.push(k);if(run.bless>0){run.bless--;run.choice=run.bless>0?twRoll(1,run,true):null;if(run.choice&&!run.choice.length)run.choice=null;}else run.choice=null;toast(msg);commit();}
function twReward(f){const r={c:0,it:{},g:null,title:null};
 if(f%10===0){const B={10:[15,{sec_t60:1}],20:[15,{},1],30:[20,{sec_t180:1}],40:[20,{sec_bless:1},2],50:[30,{sec_t300:1,sus_l:1}],60:[30,{},3],70:[40,{sec_t480:1,sec_protect:1}],80:[50,{},4],90:[60,{egg_n:1}],100:[100,{egg_yy:1}]}[f];
  r.c=B[0];r.it=Object.assign({},B[1]);if(B[2]!=null)r.g=B[2];if(f===100)r.title='천마를 벤 자';}
 else if(f%5===0){const el=TW_ZONES[twZone(f)].el,ki=EL.includes(el)?'ki_'+el:'ki_yy';const L=[{tal_time:1},{sus_s:2},{[ki]:5},{sec_aff:1},{sus_m:1},{sec_bless:1}];r.it=L[((f/5-1)/2)%L.length];}
 else r.c=f<=30?2:f<=60?3:f<=90?4:6;
 return r;}
function twRewardTxt(r){const a=[];if(r.c)a.push('코인 '+r.c);Object.entries(r.it).forEach(([k,n])=>a.push(ITEMS[k].n+(n>1?' ×'+n:'')));if(r.g!=null)a.push(GN[r.g]+' 장비');if(r.title)a.push('칭호 「'+r.title+'」');return a.join(', ');}
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
async function twSync(){if(!db||!acc||MODE!=='player')return false;const t=twState();if(!t.best)return false;try{await db.doc('tower/'+acc.uid).set({uid:acc.uid,id:acc.id||'',nick:acc.nick||acc.id||'',season:t.season,best:t.best,t:t.bestT||Date.now(),no:t.bestNo==null?null:t.bestNo,title:(acc.titles||[]).slice(-1)[0]||null});TV.err=null;return true;}catch(e){TV.err=(e&&(e.code||e.message))||'error';console.warn('twSync',e);return false;}}
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
  const getT=async()=>{const a=await db.collection('tower').where('season','==',s).get();return a.docs.map(d=>d.data()).filter(r=>r.best>0).sort((x,y)=>y.best-x.best||x.t-y.t);};let L=await getT();{const t=twState(),me=L.find(r=>r.uid===acc.uid);if(t.best>0&&(!me||me.best<t.best)){if(await twSync())L=await getT();}}TV.rank=L;
  const b=await db.collection('tower').where('season','==',p).get();TV.prev=b.docs.map(d=>d.data()).filter(r=>r.best>0).sort((x,y)=>y.best-x.best||x.t-y.t).slice(0,3);}
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
 h+='<div class="row"><section class="grow"><div class="card twfloor"><div class="twplate serif">'+f+'층'+(D.big?' · 수문장':'')+'</div><div class="twzone">'+esc(TW_ZONES[twZone(f)].n)+'</div><div class="twmon'+(D.big?' big':'')+'"><img class="px'+(D.fb?' twfb':'')+'" src="'+D.img+'" alt=""></div><div class="twmn"><b class="serif">'+esc(D.name)+'</b> '+elTag(D.el)+'</div>'+twMonHp(run,f,D)+'<div class="kv" style="font-size:14px;justify-content:center"><span>추천 전투력 <b>'+fmt(D.cp)+'</b></span><span>첫 돌파 보상 <b>'+esc(twRewardTxt(rw))+'</b></span></div></div>';
 if(!run){h+='<div class="card" style="text-align:center"><p class="muted" style="margin-top:0">도전 기회는 매일 오전 6시에 1회씩 충전되고 최대 '+TW_CAP+'회까지 쌓여요. 기회 1회를 쓰면 등반이 시작돼요.'+(twBlessN(t.best)?'<br><b style="color:#9e6a10">✨ 출발 축복: 시작할 때 버프 '+twBlessN(t.best)+'개를 골라서 출발해요 (최고 층 20층마다 1개, 최대 3개)</b>':'<br><small>최고 층 20층마다 시작할 때 버프를 1개씩 골라서 출발해요 (최대 3개).</small>')+' 층마다 환수 한 마리를 골라 싸우고, 체력은 등반이 끝날 때까지 이어져요.<br>쓰러진 환수는 그 등반에서 다시 못 나가요.</p><button class="btn teal" data-twstart="1" style="min-height:52px;font-size:17px;min-width:240px" '+(k.left<=0?'disabled':'')+'>'+(k.left<=0?'남은 도전 기회가 없어요':'도전 시작 · '+f+'층부터')+'</button></div>';}
 else if(run.choice){const bn=twBlessN(t.best);h+='<div class="card"><h2 style="text-align:center">'+(run.bless>0?'✨ 출발 축복 ('+(bn-run.bless+1)+'/'+bn+') · 버프를 하나 고르세요':t.best+'층 돌파! 보상을 하나 고르세요')+'</h2><div class="twch">'+run.choice.map(c=>{const e=TWC[c];return '<button class="twcard r'+TWRC[e.r]+'" data-twpick="'+c+'"><small>'+TWR[e.r]+'</small><img class="px" src="'+twcImg(c)+'" alt=""><b>'+esc(e.n)+'</b><span>'+esc(e.d)+'</span></button>';}).join('')+'</div></div>';}
 else{const bf=twBuff(run),chips=[];if(bf.atk)chips.push('공격력 '+(bf.atk>0?'+':'')+Math.round(bf.atk*100)+'%');if(bf.taken)chips.push('받는 피해 '+(bf.taken>0?'+':'')+Math.round(bf.taken*100)+'%');if(bf.drain)chips.push('흡혈 '+Math.round(bf.drain*100)+'%');if(bf.first)chips.push('첫 공격 2배');if(bf.elem)chips.push('상성 피해 +25%');
  h+='<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><h2 style="margin:0">출전할 환수</h2><button class="btn soft sm" data-twret="1">등반 끝내기</button></div>'+(chips.length?'<div class="twbuf">'+chips.map(c=>'<span class="chip">'+c+'</span>').join('')+'</div>':'')+'<div class="twpets">'+acc.slots.map((q,i)=>{if(!q)return '';const key=petKey(q,i),dn=run.down.includes(key),hp=dn?0:twHp(run,q,i),c=cp(q),ratio=c/D.cp;
   return '<div class="twpet'+(dn?' down':'')+'"><span class="twpi"><img class="px" src="'+img(q.no)+'" alt="">'+(dn&&TW_ART.ui_fall?'<img class="px twfall" src="t/ui_fall.png?'+IMG_V+'" alt="쓰러짐">':'')+'</span><div class="t"><b>'+NAMES[q.no]+'</b> '+elTag(ELOF[q.no])+'<small>전투력 '+fmt(c)+' · <span style="color:'+(ratio>=1?'#2e7d3a':'#b02a1f')+'">'+(ratio>=1?'여유 +':'부족 ')+Math.round((ratio-1)*100)+'%</span>'+(isAdv(ELOF[q.no],D.el)?' · <b style="color:#2e7d3a">상성 유리</b>':isAdv(D.el,ELOF[q.no])?' · <b style="color:#b02a1f">상성 불리</b>':'')+'</small>'+twHpBar(hp)+'<small>'+(dn?'쓰러짐':'체력 '+Math.round(hp*100)+'%')+'</small></div><button class="btn sm teal" data-twgo="'+i+'" '+(dn||q.sick!=null||TV.busy?'disabled':'')+'>'+(dn?'쓰러짐':q.sick!=null?'아픔':'출전')+'</button></div>';}).join('')+'</div></div>';}
 h+='</section><aside class="side"><div class="card"><h2>층 안내</h2><div class="twlist">'+[0,1,2,3,4].map(d=>{const g=f+d;if(g>TW_TOP)return '';const M=twMon(g);return '<div class="'+(d===0?'on':'')+'"><b>'+g+'층</b><span class="nm">'+esc(M.name)+'</span>'+elTag(M.el)+'<small>'+fmt(M.cp)+'</small></div>';}).join('')+'</div><p class="muted" style="margin-bottom:0">10층마다 수문장이 지켜요. 수문장을 깨면 희귀 이상 보상만 나와요.</p></div></aside></div>';
 return h;}
function vTowerRank(){const L=TV.rank;if(!L)return '<div class="card"><p class="muted">순위를 불러오는 중…</p></div>';
 const me=L.findIndex(r=>r.uid===acc.uid);let h='';
 if(TV.prev&&TV.prev.length)h+='<div class="card twhall"><h2>지난 시즌 명예의 전당</h2>'+(TW_ART.ui_hall?'<div class="twplaque">'+TV.prev.map((r,i)=>r.no!=null?'<img class="px" style="left:'+[24.4,50,75.6][i]+'%" src="'+img(r.no)+'" alt="">':'').join('')+'</div>':'')+'<div class="twhallrow">'+TV.prev.map((r,i)=>'<div>'+(TW_ART['ui_medal'+(i+1)]?'<img class="px medal" src="t/ui_medal'+(i+1)+'.png?'+IMG_V+'" alt="">':'')+'<span class="rk">'+(i+1)+'위</span>'+(r.no!=null?'<img class="px" src="'+img(r.no)+'" alt="">':'')+'<b>'+esc(r.nick)+'</b><small>'+r.best+'층</small></div>').join('')+'</div></div>';
 h+='<div class="card twrankc"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><h2 style="margin:0">이번 시즌 순위</h2><button class="btn soft sm" data-twreload="1">새로고침</button></div><p class="muted">최고 층이 높은 순, 같으면 먼저 도달한 사람이 위예요.</p>'+
  (L.length?'<div style="overflow-x:auto"><table class="t"><tr><th>순위</th><th>닉네임</th><th>최고 층</th><th>돌파 환수</th><th>도달 시각</th></tr>'+L.slice(0,50).map((r,i)=>'<tr'+(r.uid===acc.uid?' class="me"':'')+'><td>'+(i<3&&TW_ART['ui_medal'+(i+1)]?'<img class="px" src="t/ui_medal'+(i+1)+'.png?'+IMG_V+'" alt="'+(i+1)+'위" style="width:30px;height:30px;vertical-align:middle">':'<b>'+(i+1)+'</b>')+'</td><td>'+esc(r.nick)+(r.title?' <span class="chip glow" style="font-size:11px">'+esc(r.title)+'</span>':'')+'</td><td><b>'+r.best+'층</b></td><td>'+(r.no!=null?'<img class="px" src="'+img(r.no)+'" alt="" style="width:32px;height:32px;vertical-align:middle"> '+NAMES[r.no]:'')+'</td><td>'+new Date(r.t).toLocaleString('ko-KR',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})+'</td></tr>').join('')+'</table></div>':'<p class="muted">아직 기록이 없어요. 첫 번째 등반자가 되어 보세요!</p>')+
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
const XM_FLOOR=[8,25,45,65,15];
function xmFloor(ti,g){const T=XM_TIERS[ti];return T.endless?Math.min(100,Math.round(XM_FLOOR[ti]+g*1.5)):XM_FLOOR[ti];}
function xmMonStat(ti,g){const T=XM_TIERS[ti],s=twMonStat(xmFloor(ti,g),false),m=T.endless?1:XM_GATE[g];['hp','atk','def'].forEach(k=>{s[k]=Math.round(s[k]*m);});if(!T.endless&&g===4){s.hp=Math.round(s.hp*1.6);s.atk=Math.round(s.atk*1.2);}return s;}
function xmRec(ti,g){return powerOf(xmMonStat(ti,g));}
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
function xmBuyTicket(){if(!xmOn())return toast('이벤트 기간이 아니에요.');const ad=accDaily();if((ad.evt||0)>=XM_TK_DAILY)return toast('입장권은 하루 '+XM_TK_DAILY+'장까지 살 수 있어요.');if(acc.coins<XM_TK_PRICE)return toast('코인이 부족해요.');
 acc.coins-=XM_TK_PRICE;ad.evt=(ad.evt||0)+1;acc.inv.ev_ticket=(acc.inv.ev_ticket||0)+1;SFX.play('buy');toast('설화 던전 입장권 1장 구매!');commit();}
async function xmFight(i){if(TV.busy)return;const x=xmState(),run=x.run,q=acc.slots[i];if(!run)return;if(run.choice)return toast('먼저 보상을 하나 골라 주세요.');if(!q)return;
 const key=petKey(q,i);if(run.down.includes(key))return toast('쓰러진 환수는 이번 입장에서 나갈 수 없어요.');if(q.sick!=null)return toast('아픈 환수는 나갈 수 없어요.');
 const T=XM_TIERS[run.tier],g=run.g;TV.busy=true;
 try{const A=petSnap(q),D=xmMon(run.tier,g),bf=twBuff(run),ha0=Math.max(1,Math.round(bStat(A).hp*twHp(run,q,i)));
  const mk=run.tier+'_'+g,mh=run.mhp&&run.mhp.k===mk?run.mhp.hp:null,res=towerSim(A,ha0,D,bf,Math.floor(rnd()*4294967296),mh);run.last=key;run.n++;run.mhp=res.win?null:{k:mk,hp:res.hd};
  let got=0,first=null,ended=false,cleared=false;
  if(res.win){run.hp[key]=res.ha/res.hpA;got=T.endless?T.coin:Math.max(1,Math.round(T.coin*XM_SHARE[g]));acc.evc=(acc.evc||0)+got;run.earned+=got;run.g++;
   if(T.endless){if(run.g>x.eb){x.eb=run.g;x.ebT=Date.now();xmSync();}run.choice=twRoll(1,run,'noloot');}
   else if(run.g>=5){cleared=true;if(!x.clr[run.tier]){x.clr[run.tier]=1;first=T.first;acc.coins+=T.first;if(T.title){acc.titles=acc.titles||[];if(!acc.titles.includes(T.title))acc.titles.push(T.title);}}x.run=null;ended=true;}
   else run.choice=twRoll(g===3?10:1,run,'noloot');}
  else{run.hp[key]=0;run.down.push(key);if(!xmUsable(run).length){x.run=null;ended=true;}}
  await save();
  const bgk=T.bg;battleAnim({kind:'xmas',t:Date.now(),a:{nick:acc.nick||acc.id,pet:A},d:{nick:'',pet:D},hpA:res.hpA,hpA0:res.hpA0,hpD:res.hpD,hpD0:res.hpD0,logS:JSON.stringify(res.log),win:res.win,
   lbl:'설화 던전 · '+T.n+' '+(g+1)+'관문',wtxt:cleared?T.n+' 클리어!':(g+1)+'관문 돌파!',rlbl:'획득',reward:res.win?'이벤트 코인 +'+got+(first?' · 첫 클리어 코인 +'+first+(T.title?' · 칭호 「'+T.title+'」':''):''):'',cut:T.endless?(g+1)+'관문 강적':T.n+' 보스',bgUrl:XM_ART[bgk]?'x/'+bgk+'.png?'+IMG_V:'',
   ended,endTxt:cleared?'이번 입장에서 이벤트 코인 '+run.earned+'개를 모았어요.':ended?'출전할 환수가 없어 이번 입장이 끝났어요. 모은 이벤트 코인 '+run.earned+'개':'',left:xmUsable(run).length},'atk');
 }catch(e){toast('전투에 실패했어요: '+(e&&e.message||e));}finally{TV.busy=false;}}
async function xmSync(){if(!db||!acc||MODE!=='player')return false;const x=xmState();if(!x.eb)return false;try{await db.doc('xmrank/'+acc.uid).set({uid:acc.uid,id:acc.id||'',nick:acc.nick||acc.id||'',ev:XM_ID,best:x.eb,t:x.ebT||Date.now(),title:(acc.titles||[]).slice(-1)[0]||null});XV.err=null;return true;}catch(e){XV.err=(e&&(e.code||e.message))||'error';console.warn('xmSync',e);return false;}}
const XV={tab:'dun',rank:null};
async function xmLoadRank(){const get=async()=>{const a=await db.collection('xmrank').where('ev','==',XM_ID).get();return a.docs.map(d=>d.data()).filter(r=>r.best>0).sort((x,y)=>y.best-x.best||x.t-y.t);};
 try{let L=await get();const x=xmState(),me=L.find(r=>r.uid===acc.uid);if(x.eb>0&&(!me||me.best<x.eb)){if(await xmSync())L=await get();}XV.rank=L;}catch(e){XV.rank=XV.rank||[];XV.err=(e&&(e.code||e.message))||'error';}if(view==='xmas'&&!document.getElementById('layer').innerHTML)render();}
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
 return '<div class="twtop xmtop" style="'+ban+'"><div><div class="serif twttl">동지 설화 던전</div><div class="twsub">'+(TEST?'테스트 모드 · 기간 무관':cfg.xm?cfg.xm.s.replace(/-/g,'.')+' ~ '+cfg.xm.e.replace(/-/g,'.'):'')+' · 크리스마스 한정</div></div><div class="twstat"><span>이벤트 코인<b><img class="px xmc" src="i/ev_coin.png" alt="">'+fmt(acc.evc||0)+'</b></span><span>무료 입장<b>'+(free?'1':'0')+'</b></span><span>입장권<b>'+(acc.inv.ev_ticket||0)+'</b></span><button class="btn sm" data-xmbuy="1"><img class="px" src="i/ev_ticket.png" alt="" style="width:22px;height:22px;vertical-align:-6px"> 입장권 '+XM_TK_PRICE+'코인 ('+(ad.evt||0)+'/'+XM_TK_DAILY+')</button></div></div>'+
 '<div class="tmode"><button class="'+(XV.tab==='dun'?'on':'')+'" data-xmtab="dun">던전</button><button class="'+(XV.tab==='shop'?'on':'')+'" data-xmtab="shop">이벤트 상점</button><button class="'+(XV.tab==='rank'?'on':'')+'" data-xmtab="rank">끝없는 겨울밤 순위</button></div>';}
function vXmas(){if(!xmOn())return '<div class="card"><h2>동지 설화 던전</h2><p class="muted">지금은 이벤트 기간이 아니에요.</p></div>';
 const x=xmState(),run=x.run;let h=xmTop();
 if(XV.tab==='shop')return h+vXmShop();
 if(XV.tab==='rank'){if(!XV.rank)setTimeout(xmLoadRank,0);return h+vXmRank();}
 if(!run){h+='<div class="xmtiers">'+XM_TIERS.map((T,ti)=>{const lock=T.endless?!x.clr[1]:(ti>0&&!x.clr[ti-1]);const clr=!!x.clr[ti];
   return '<div class="card xmtier'+(lock?' lock':'')+'"><div class="xmti">'+(XM_ART['x_tier'+(ti+1)]?'<img class="px" src="x/x_tier'+(ti+1)+'.png?'+IMG_V+'" alt="">':'<span>'+T.ic+'</span>')+'</div><b class="serif">'+T.n+'</b>'+(clr?'<span class="chip glow">클리어</span>':'')+
   '<small>추천 전투력 '+(T.endless?fmt(T.rec)+'부터 계속 강해져요':fmt(T.rec))+'</small><small>'+(T.endless?'관문마다 이벤트 코인 +'+T.coin+' · 기간 순위':'5관문 클리어 시 이벤트 코인 '+T.coin+(clr?'':' · 첫 클리어 코인 +'+T.first)+(T.title&&!clr?' · 칭호':''))+'</small>'+
   (T.endless&&x.eb?'<small>내 최고 '+x.eb+'관문</small>':'')+'<button class="btn teal sm" data-xmin="'+ti+'" '+(lock?'disabled':'')+'>'+(lock?(T.endless?'함박눈 클리어 후':'이전 등급 클리어 후'):'입장')+'</button></div>';}).join('')+'</div><p class="muted" style="text-align:center">하루 1번 무료로 들어갈 수 있고, 더 하고 싶으면 입장권(코인 '+XM_TK_PRICE+', 하루 '+XM_TK_DAILY+'장)을 써요. 관문을 깰 때마다 이벤트 코인을 바로 받아요.</p>';return h;}
 const T=XM_TIERS[run.tier],D=xmMon(run.tier,run.g);
 h+='<div class="row"><section class="grow"><div class="card twfloor xmfloor"><div class="twplate serif">'+T.ic+' '+T.n+' · '+(T.endless?(run.g+1)+'관문':(run.g+1)+' / 5관문')+'</div><div class="twzone">이번 입장에서 모은 이벤트 코인 '+run.earned+'</div><div class="twmon'+(D.big?' big':'')+'"><img class="px'+(D.xfb?' xmfb':'')+'" src="'+D.img+'" alt=""></div><div class="twmn"><b class="serif">'+esc(D.name)+'</b> '+elTag(D.el)+'</div>'+twMonHp(run,run.tier+'_'+run.g,D)+'<div class="kv" style="font-size:14px;justify-content:center"><span>추천 전투력 <b>'+fmt(D.cp)+'</b></span><span>보상 <b>이벤트 코인 +'+(T.endless?T.coin:Math.max(1,Math.round(T.coin*XM_SHARE[run.g])))+'</b></span></div></div>';
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
 (L.length?'<div style="overflow-x:auto"><table class="t"><tr><th>순위</th><th>닉네임</th><th>최고 관문</th></tr>'+L.slice(0,50).map((r,i)=>'<tr'+(r.uid===acc.uid?' class="me"':'')+'><td>'+(i<3&&TW_ART['ui_medal'+(i+1)]?'<img class="px" src="t/ui_medal'+(i+1)+'.png?'+IMG_V+'" alt="'+(i+1)+'위" style="width:30px;height:30px;vertical-align:middle">':'<b>'+(i+1)+'</b>')+'</td><td>'+esc(r.nick)+(r.title?' <span class="chip glow" style="font-size:11px">'+esc(r.title)+'</span>':'')+'</td><td><b>'+r.best+'관문</b></td></tr>').join('')+'</table></div>':'<p class="muted">아직 기록이 없어요.</p>')+
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
 if(!DECO_EL){DECO_EL=document.createElement('div');DECO_EL.className='decolayer';DECO_EL.innerHTML='<canvas class="snowc"></canvas><div class="snowimg"></div><div class="wreath"><img class="px wbow" src="x/deco_wreath_bow.png?'+IMG_V+'" alt=""></div>';}
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
function aRcp(){const R=rcpRows(),opts=Object.keys(ITEMS).filter(k=>ITEMS[k].cat!=='운영자').concat(...[0,1,2,3,4,5].map(g=>GT.map(t=>'gear:'+t+':'+g)));
 return '<div class="card adm"><h2>제작소 레시피</h2><p class="muted">제작소 단계가 되면 열려요 (5단계 제작소는 시간 -20%). <b>인게임 아이템</b>에 체크하면 새 인게임 아이템을 만들어요: 이름과 give 명령어를 적으면, 유저가 코드화한 뒤 게임에서 그 명령어 그대로 받아요.</p>'+
 R.map((r,i)=>{const p='rc'+i+'_';return '<div class="rcpe"><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f gmchk" style="color:inherit"><input type="checkbox" id="'+p+'ig" data-x="rcpToggle" '+(r.ig?'checked':'')+'>인게임 아이템</label>'+
  (r.ig?'<label class="f">이름<input type="text" id="'+p+'igN" value="'+esc(r.igN||'')+'" style="width:120px"></label><label class="f">그림 경로<input type="text" id="'+p+'igImg" value="'+esc(r.igImg||'')+'" placeholder="i/ig_b31.png" style="width:140px"></label><label class="f" style="flex:1;min-width:260px">give 명령어<input type="text" id="'+p+'igGive" value="'+esc(r.igGive||'')+'" placeholder="give @p book[item_name=...] 1"></label>'
  :'<label class="f">결과물<select id="'+p+'out">'+opts.map(k=>'<option value="'+k+'" '+(k===r.out?'selected':'')+'>'+esc(outInfo(k).n)+(outInfo(k).ig?' (인게임)':'')+'</option>').join('')+'</select></label>')+
  '<label class="f">개수<input type="number" id="'+p+'n" value="'+(r.n||1)+'" min="1" style="width:56px"></label><label class="f">제작소 단계<input type="number" id="'+p+'lv" value="'+(r.lv||1)+'" min="1" max="5" style="width:56px"></label><label class="f">시간(분)<input type="number" id="'+p+'min" value="'+r.min+'" style="width:70px"></label><label class="f">코인<input type="number" id="'+p+'c" value="'+(r.c||0)+'" style="width:64px"></label>'+
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
 (all.length?'<div style="overflow-x:auto"><table class="t" style="margin-top:10px"><tr><th>시각</th><th>아이디</th><th>코드</th><th>아이템</th></tr>'+all.slice(0,200).map(c=>'<tr><td>'+new Date(c.t).toLocaleString('ko-KR',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})+'</td><td>'+esc(c.aid)+'</td><td><code>'+esc(c.code)+'</code></td><td>'+esc(c.txt||'')+'</td></tr>').join('')+'</table></div>':'<p class="muted">아직 발급된 코드가 없어요.</p>')+
 '<details style="margin-top:12px"><summary class="muted">해방 단계별 보상표</summary><table class="t"><tr><th>단계</th><th>보상 (우편)</th></tr>'+[4,5,6,7,8,9,10,11,12].map(st=>'<tr><td>'+st+'</td><td>'+mailParts(libMail(st)).join(', ')+'</td></tr>').join('')+'</table></details></div>';}
function giveMacro(g){let s=String(g||'').trim().replace(/^\//,'');s=s.replace(/^give\s+\S+\s+/,'');s=s.replace(/\s+\d+\s*$/,'');return '$give @s '+s+' $(n)';}
function igDpFiles(){return [['ig/registry.mcfunction','# ── 인게임 아이템 목록 (웹 [인게임 코드] 탭과 번호가 같아야 해요) ──\ndata modify storage hwansu:ig known set value {}\n'+IG.map(x=>'data modify storage hwansu:ig known.i'+x.no+' set value 1b').join('\n')]].concat(IG.map(x=>['ig/i'+x.no+'.mcfunction','# '+x.no+'번 '+x.n+'\n'+giveMacro(x.give)]));}
/* ----- 컬렉션 ----- */
function colRows(){if(!AS.cols)AS.cols=(cfg.cols&&cfg.cols.length?cfg.cols:colDefaults().map(c=>Object.assign(c,{m:c.m.filter(canFree)})).filter(c=>c.m.length)).map(c=>({id:c.id,n:c.n,m:(c.m||[]).map(dexNo).join(', '),rw:JSON.parse(JSON.stringify(c.rw||{}))}));return AS.cols;}
function colRead(){const R=colRows(),v=id=>document.getElementById(id);R.forEach((c,i)=>{const p='co'+i+'_';if(!v(p+'n'))return;c.n=v(p+'n').value.trim();c.m=v(p+'m').value;const it=v(p+'it').value,q=Math.max(1,+v(p+'q').value||1);c.rw={coins:Math.max(0,+v(p+'c').value||0),eggs:Math.max(0,+v(p+'e').value||0),items:it?{[it]:q}:{},gear:[]};});}
function aCols(){const R=colRows(),opts=Object.keys(ITEMS);
 return '<div class="card adm"><h2>컬렉션</h2><p class="muted">환수는 도감 번호를 쉼표로 적어요 (최대 12마리, 스타즈렐름은 s1-03처럼). 해방한 환수에 불이 들어오고(스타즈렐름은 획득만 해도), 다 켜지면 유저가 보상을 우편으로 받아요.</p>'+
 R.map((c,i)=>{const p='co'+i+'_',ik=Object.keys(c.rw.items||{})[0]||'',iq=ik?c.rw.items[ik]:1,nums=String(c.m).split(',').map(s=>parseDexNo(s)).filter(n=>n>=0);return '<div class="rcpe"><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">이름<input type="text" id="'+p+'n" value="'+esc(c.n)+'" style="width:170px"></label><label class="f" style="flex:1;min-width:260px">환수 번호 ('+nums.length+'/12)<input type="text" id="'+p+'m" value="'+esc(c.m)+'"></label><label class="f">코인<input type="number" id="'+p+'c" value="'+(c.rw.coins||0)+'" style="width:70px"></label><label class="f">환수 알<input type="number" id="'+p+'e" value="'+(c.rw.eggs||0)+'" style="width:56px"></label><label class="f">아이템<select id="'+p+'it"><option value="">없음</option>'+opts.map(k=>'<option value="'+k+'" '+(k===ik?'selected':'')+'>'+esc(ITEMS[k].n)+'</option>').join('')+'</select></label><label class="f">수량<input type="number" id="'+p+'q" value="'+iq+'" style="width:56px"></label><button class="btn red sm" data-x="colDel" data-i="'+i+'">삭제</button></div><div class="colpv">'+nums.slice(0,12).map(n=>'<img class="px" src="'+img(n)+'" title="'+esc(NAMES[n])+'" alt="">').join('')+'</div></div>';}).join('')+
 '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn soft" data-x="colAdd">컬렉션 추가</button><button class="btn soft" data-x="colPreview">미리보기 갱신</button><button class="btn" data-x="colSave">저장</button><button class="btn soft" data-x="colReset">기본값으로</button></div></div>';}
/* ----- 이벤트 ----- */
function aEvent(){const ev=cfg.ev||{},E=ev.exp||{},Pd=ev.prod||{},Ht=ev.hot||{},rw=Ht.rw||{},ik=Object.keys(rw.items||{})[0]||'',dt=v=>esc(v||'');
 const st=e=>evOn(e)?'<b style="color:#2e7d3a">진행 중</b>':e&&e.on?'<span class="muted">예약됨/종료</span>':'<span class="muted">꺼짐</span>';
 return '<div class="card adm" style="max-width:860px"><h2>이벤트 · 공지</h2><p class="muted">켜진 이벤트는 기간 동안 유저 화면 맨 위에 자동으로 공지돼요. 기간을 비우면 끌 때까지 계속돼요.</p>'+
 '<div class="evbox"><b>상시 경험치 배율</b> <select id="cfgExp">'+[1,1.5,2,3].map(v=>'<option '+((cfg.expMult||1)==v?'selected':'')+'>'+v+'</option>').join('')+'</select>'+(isMain()?'<label class="f" style="flex:1;min-width:260px">상단 공지 (비우면 숨김)<input type="text" id="cfgNotice" value="'+esc(cfg.notice||'')+'"></label>':'')+'</div>'+
 '<div class="evbox"><label class="gmchk" style="color:inherit"><input type="checkbox" id="evE_on" '+(E.on?'checked':'')+'><b>경험치 이벤트</b></label> '+st(E)+'<label class="f">배율<select id="evE_m">'+[1.5,2,3,5].map(v=>'<option '+((+E.m||2)==v?'selected':'')+'>'+v+'</option>').join('')+'</select></label><label class="f">시작<input type="datetime-local" id="evE_s" value="'+dt(E.s)+'"></label><label class="f">끝<input type="datetime-local" id="evE_e" value="'+dt(E.e)+'"></label></div>'+
 '<div class="evbox"><label class="gmchk" style="color:inherit"><input type="checkbox" id="evP_on" '+(Pd.on?'checked':'')+'><b>생산 시간 감소</b></label> '+st(Pd)+'<label class="f">감소 %<input type="number" id="evP_pct" value="'+(Pd.pct||30)+'" min="1" max="90" style="width:70px"></label><label class="f">시작<input type="datetime-local" id="evP_s" value="'+dt(Pd.s)+'"></label><label class="f">끝<input type="datetime-local" id="evP_e" value="'+dt(Pd.e)+'"></label><span class="muted" style="font-size:12px">마을 생산·제작소 제작 시간에 적용</span></div>'+
 '<div class="evbox"><label class="gmchk" style="color:inherit"><input type="checkbox" id="evH_on" '+(Ht.on?'checked':'')+'><b>핫타임</b></label> '+st(Ht)+'<label class="f">매일 시작<input type="time" id="evH_from" value="'+dt(Ht.from||'20:00')+'"></label><label class="f">매일 끝<input type="time" id="evH_to" value="'+dt(Ht.to||'22:00')+'"></label><label class="f">기간 시작<input type="datetime-local" id="evH_s" value="'+dt(Ht.s)+'"></label><label class="f">기간 끝<input type="datetime-local" id="evH_e" value="'+dt(Ht.e)+'"></label>'+
  '<label class="f">보상 코인<input type="number" id="evH_c" value="'+(rw.coins||0)+'" style="width:70px"></label><label class="f">보상 아이템<select id="evH_it"><option value="">없음</option>'+Object.keys(ITEMS).map(k=>'<option value="'+k+'" '+(k===ik?'selected':'')+'>'+esc(ITEMS[k].n)+'</option>').join('')+'</select></label><label class="f">수량<input type="number" id="evH_q" value="'+(ik?rw.items[ik]:1)+'" style="width:56px"></label><label class="f" style="flex:1;min-width:220px">우편 내용<input type="text" id="evH_msg" value="'+esc(Ht.msg||'')+'" placeholder="핫타임에 접속해 줘서 고마워요!"></label><span class="muted" style="font-size:12px">시간 안에 접속하면 하루 한 번 우편으로 보상</span></div>'+
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
  cfg.rcp=out;cfg.rcpV=2;cfg.ig=ig;AS.rcp=null;AS.igr=null;await saveGlobal('제작소 레시피 변경 ('+R.length+'개)');},
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
  await saveGlobal('이벤트/공지 변경');}
};
/* ================= 운영자 사이트 ================= */
const AS={tab:'users',tgt:null,list:null,eggs:null,logs:null,newPw:'',codeGen:'',slot:0};
function adminHeader(){const tabs=[['users','유저 관리'],['eggs','알 코드'],['mail','우편'],['boss','월드보스'],['tower','구천탑'],['lib','인게임 코드'],['event','이벤트·공지'],['shop','상점 설정'],['rcp','제작소 레시피'],['cols','컬렉션'],['tools','코드 테스트'],['logs','변경 기록']];if(isMain()){tabs.splice(1,0,['make','계정 만들기']);tabs.push(['reset','전체 초기화']);}
 return '<header class="sky"><div class="bar"><span class="logo">환수 운영자</span><nav class="main" aria-label="운영자 메뉴">'+tabs.map(([k,n])=>'<button data-xtab="'+k+'" class="'+(AS.tab===k?'on':'')+'">'+n+'</button>').join('')+'</nav><a class="btn sm" href="index.html?test" target="_blank" rel="noopener" style="background:#f0c75e;color:#3a2414" title="실제 서버와 상관없는 가짜 계정으로 유저 화면을 시험해요">🧪 테스트 모드</a><span style="color:#fff8e6;font-size:13px">'+esc(acc.nick||acc.id)+' ('+(isMain()?'메인 운영자':'보조 운영자')+')</span><button class="btn ghost sm" data-a2="logout">로그아웃</button></div></header>';}
function adminBody(){return {users:aUsers,make:aMake,eggs:aEggs,mail:aMail,boss:aBoss,tower:aTower,lib:aLib,event:aEvent,tools:aTools,logs:aLogs,reset:aReset,shop:aShop,rcp:aRcp,cols:aCols}[AS.tab]();}
const roleN={main:'메인',sub:'보조',player:'플레이어'};
function aUsers(){
 const L=AS.list||[];const tot=L.reduce((s,a)=>s+(a.coins||0),0),pets=L.reduce((s,a)=>s+(a.slots||[]).filter(Boolean).length,0);
 let h='<div class="row"><div class="card" style="flex:1 1 180px"><span class="muted">계정 수</span><div class="serif" style="font-size:28px;font-weight:700">'+L.length+'</div></div><div class="card" style="flex:1 1 180px"><span class="muted">서버 전체 코인</span><div class="serif" style="font-size:28px;font-weight:700">'+fmt(tot)+'</div></div><div class="card" style="flex:1 1 180px"><span class="muted">키우는 환수</span><div class="serif" style="font-size:28px;font-weight:700">'+pets+'</div></div></div>';
 h+='<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><h2 style="margin:0">유저 목록</h2><div style="display:flex;gap:8px"><input type="text" id="xFind" placeholder="아이디·닉네임 검색" value="'+esc(AS.find||'')+'"><button class="btn soft sm" data-x="find">검색</button><button class="btn soft sm" data-x="reload">새로고침</button></div></div><div style="overflow-x:auto"><table class="t" style="margin-top:10px"><tr><th>아이디</th><th>닉네임</th><th>권한</th><th>코인</th><th>환수</th><th>상태</th><th></th></tr>'+
 L.filter(a=>!AS.find||(a.id+' '+a.nick).toLowerCase().includes(AS.find.toLowerCase())).map(a=>'<tr><td><b>'+esc(a.id)+'</b></td><td>'+esc(a.nick)+'</td><td>'+(roleN[a.role]||'')+'</td><td>'+fmt(a.coins||0)+'</td><td>'+(a.slots||[]).filter(Boolean).map(q=>NAMES[q.no]+' '+stN(q)+'').concat(((a.vil&&a.vil.pets)||[]).filter(Boolean).map(q=>'[마을] '+NAMES[q.no]+' '+stN(q)),((a.gsp&&a.gsp.s1)||[]).concat((a.gsp&&a.gsp.s2)||[]).filter(Boolean).map(q=>'[공간] '+NAMES[q.no]+' '+stN(q))).join(', ')+'</td><td>'+(a.banned?'<b style="color:#b02a1f">정지</b>':'정상')+'</td><td><button class="btn sm '+(AS.tgt&&AS.tgt.uid===a.uid?'teal':'')+'" data-xpick="'+esc(a.uid)+'">관리</button></td></tr>').join('')+'</table></div></div>';
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
 h+='<h3 class="serif" style="margin:18px 0 6px">마을 꾸미기 지급 (보관함)</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">꾸미기<select id="xDeco">'+TILES.map((d,n)=>d.free?'':'<option value="tile:'+n+'">길·바닥 · '+d.n+'</option>').join('')+PROPS.map((d,n)=>'<option value="deco:'+n+'">소품 · '+d.n+'</option>').join('')+'</select></label><label class="f">수량<input type="number" id="xDecoN" value="1" min="1" style="width:70px"></label><button class="btn sm" data-x="decoGive">지급</button><label class="f">마을 한도<input type="number" id="xVilCap" value="'+((t.vil&&t.vil.cap)||VIL_CAP0)+'" min="15" max="40" style="width:70px"></label><button class="btn soft sm" data-x="vilCapSet">한도 저장</button></div>';
 h+='<h3 class="serif" style="margin:18px 0 6px">장비</h3><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">종류<select id="xEqT">'+EQ_OPTS().map(([k,n])=>'<option value="'+k+'">'+n+'</option>').join('')+'</select></label><label class="f">등급<select id="xEqG">'+GN.map((n,i)=>'<option value="'+i+'">'+n+'</option>').join('')+'</select></label><label class="f">강화<input type="number" id="xEqP" value="0" min="0" max="9" style="width:70px"></label><button class="btn sm" data-x="eqGive">장비 지급</button></div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;margin-top:10px">'+(t.gear.length?t.gear.map(g=>'<div class="gear g'+g.g+'"><img class="px" src="'+gearImg(g)+'" alt="" style="width:56px;height:56px"><b class="c'+g.g+'" style="font-size:12px">'+gearName(g)+' +'+g.p+'</b><button class="btn red sm" data-xgdel="'+esc(g.u)+'">회수</button></div>').join(''):'<p class="muted">장비가 없어요.</p>')+'</div>';
 const p=t.slots[AS.slot];
 h+='<h3 class="serif" style="margin:18px 0 6px">환수</h3><div class="slots">'+t.slots.map((_,i)=>'<button class="slot'+(AS.slot===i?' on':'')+'" data-xslot="'+i+'">'+(t.slots[i]?'<img class="px" src="'+img(t.slots[i].no)+'" alt=""><span><b>'+NAMES[t.slots[i].no]+'</b><small>'+stN(t.slots[i])+' Lv '+t.slots[i].lv+(t.slots[i].sick!=null?' · 아픔':'')+(t.slots[i].train?' · 수련 중':'')+'</small></span>':'<span style="padding:12px"><b>빈 슬롯 '+(i+1)+'</b>'+(t.notice&&t.notice[i]?'<small>'+esc(t.notice[i])+'</small>':'')+'</span>')+'</button>').join('')+'</div>';
 if(p){const formOpts=NAMES.map((n,i)=>'<option value="'+i+'" '+(p.no===i?'selected':'')+'>'+dexNo(i)+' '+n+' ('+(isGuest(i)?'GUEST':stN(FORMS[i])+'')+')</option>').join('');
  h+='<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:12px"><label class="f">환수 종류<select id="xNo">'+formOpts+'</select></label><label class="f">레벨<input type="number" id="xLv" value="'+p.lv+'" min="1" max="99" style="width:70px"></label><label class="f">각성 ★<input type="number" id="xStar" value="'+(p.star||0)+'" min="0" max="5" style="width:60px"></label>'+GAUGES.map(e=>'<label class="f">'+ELK[e]+'<input type="number" id="xEl_'+e+'" value="'+(p.g[e]||0)+'" min="0" max="50" style="width:60px"></label>').join('')+'</div><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:8px">'+[['hu','포만감'],['th','목마름'],['cl','청결도'],['aff','호감도'],['en','행동력']].map(([k,n])=>'<label class="f">'+n+'<input type="number" id="xS_'+k+'" value="'+Math.round(p[k])+'" min="0" style="width:72px"></label>').join('')+'<button class="btn teal sm" data-x="petApply">적용</button></div><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn sm" data-xp="finish">수련·심부름 즉시 완료</button><button class="btn sm" data-xp="wake">깨우기</button><button class="btn sm" data-xp="cure">병 치료</button><button class="btn sm" data-xp="unlock">오행 게이지 초기화</button><button class="btn sm" data-xp="daily">오늘 횟수 초기화</button><button class="btn sm red" data-xp="del">환수 삭제</button></div>';}
 else h+='<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><button class="btn teal sm" data-xp="egg">이 슬롯에 알 넣기</button><button class="btn sm" data-xp="yyegg">음양알 넣기</button>'+(t.notice&&t.notice[AS.slot]?'<span class="muted">'+esc(t.notice[AS.slot])+'</span>':'')+'</div><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;margin-top:8px"><label class="f">복구할 환수<select id="xRestore">'+NAMES.map((n,i)=>'<option value="'+i+'">'+dexNo(i)+' '+n+'</option>').join('')+'</select></label><label class="f">레벨<input type="number" id="xRLv" value="1" min="1" style="width:70px"></label><button class="btn sm" data-x="restore">환수 복구</button><span class="muted">소멸·실수 해방 복구용</span></div>';
 const owned=Object.keys(t.dex).map(Number).sort((a,b)=>a-b);
 h+='<h3 class="serif" style="margin:18px 0 6px">도감 ('+owned.length+'/'+NAMES.length+')</h3><p class="muted" style="margin:0 0 6px">'+(owned.length?owned.map(i=>dexNo(i)+' '+NAMES[i]+(t.dex[i].freed?'(解)':'')).join(', '):'비어 있어요')+'</p><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">도감 번호<input type="text" id="xDex" value="0" placeholder="12 또는 s1-03" style="width:110px" list="xDexL"><datalist id="xDexL">'+NAMES.map((n,i)=>'<option value="'+dexNo(i)+'">'+esc(n)+'</option>').join('')+'</datalist></label><button class="btn sm" data-x="dexAdd">채우기</button><button class="btn soft sm" data-x="dexDel">지우기</button><button class="btn soft sm" data-x="dexFree">解 표시 켜기/끄기</button></div>';
 h+='<h3 class="serif" style="margin:18px 0 6px">계정</h3><div style="display:flex;gap:8px;flex-wrap:wrap">'+(t.uid!==acc.uid?'<button class="btn soft sm" data-x="ban">'+(t.banned?'정지 해제':'계정 정지')+'</button><button class="btn red sm" data-x="delAcc">게임 데이터 삭제</button>':'')+'</div><p class="muted">비밀번호를 잊은 유저는 Firebase 콘솔 → Authentication에서 그 사용자를 삭제한 뒤, "계정 만들기"에서 같은 아이디로 다시 만들면 게임 데이터가 그대로 이어져요.</p></div>';
 return h;}
function mailItemRow(px,k,n){const opts='<option value="">없음</option>'+Object.entries(ITEMS).map(([kk,v])=>'<option value="'+kk+'"'+(k===kk?' selected':'')+'>'+v.n+'</option>').join('');
 return '<div class="mrow" style="display:flex;gap:6px;align-items:flex-end"><label class="f">아이템<select class="mi">'+opts+'</select></label><label class="f">수량<input type="number" class="mq" min="1" value="'+(n||1)+'" style="width:72px"></label><button class="btn ghost sm" data-x="mailDelRow" title="빼기">✕</button></div>';}
function mailGearRow(px,g){return '<div class="mrow" style="display:flex;gap:6px;align-items:flex-end"><label class="f">장비<select class="mgt"><option value="">없음</option>'+EQ_OPTS().map(([k,n])=>'<option value="'+k+'"'+(g&&(g.t+(g.o?':'+g.o:g.k?':'+g.k:''))===k?' selected':'')+'>'+n+'</option>').join('')+'</select></label><label class="f">등급<select class="mgg">'+GN.map((n,i)=>'<option value="'+i+'"'+(g&&g.g===i?' selected':'')+'>'+n+'</option>').join('')+'</select></label><label class="f">강화<input type="number" class="mgp" min="0" max="9" value="'+(g?g.p:0)+'" style="width:64px"></label><button class="btn ghost sm" data-x="mailDelRow" title="빼기">✕</button></div>';}
function mailForm(px,m){m=m||{};const its=Object.entries(m.items||{}),gs=m.gear||[];
 return '<div class="mform"><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f" style="flex:1;min-width:180px">제목<input type="text" id="'+px+'T" maxlength="40" value="'+esc(m.title||'')+'" placeholder="예: 가입을 환영해요!"></label><label class="f">코인<input type="number" id="'+px+'C" min="0" value="'+(m.coins||0)+'" style="width:90px"></label><label class="f">이벤트 코인<input type="number" id="'+px+'V" min="0" value="'+(m.evc||0)+'" style="width:90px"></label><label class="f">환수 알<input type="number" id="'+px+'E" min="0" max="3" value="'+(m.eggs||0)+'" style="width:64px"></label><label class="f">음양알<input type="number" id="'+px+'Y" min="0" max="3" value="'+(m.yyEggs||0)+'" style="width:64px"></label></div>'+
 '<label class="f" style="margin-top:8px">내용<textarea id="'+px+'M" rows="2" maxlength="300" style="width:100%;resize:vertical">'+esc(m.msg||'')+'</textarea></label>'+
 '<div id="'+px+'IR" style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;margin-top:8px">'+(its.length?its:[['',1]]).map(([k,n])=>mailItemRow(px,k,n)).join('')+'</div><button class="btn sm" style="margin-top:6px" data-x="mailAddItem" data-px="'+px+'">+ 아이템 추가</button>'+
 '<div id="'+px+'GR" style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;margin-top:10px">'+(gs.length?gs:[null]).map(g=>mailGearRow(px,g)).join('')+'</div><button class="btn sm" style="margin-top:6px" data-x="mailAddGear" data-px="'+px+'">+ 장비 추가</button></div>';}
function readMail(px){const v=id=>document.getElementById(px+id);const items={},gear=[];
 v('IR').querySelectorAll('.mrow').forEach(r=>{const k=r.querySelector('.mi').value,n=Math.max(1,Math.floor(+r.querySelector('.mq').value||1));if(k)items[k]=(items[k]||0)+n;});
 v('GR').querySelectorAll('.mrow').forEach(r=>{const gv=r.querySelector('.mgt').value;if(!gv)return;const gt=gv.split(':')[0],go=gv.split(':')[1],gg=+r.querySelector('.mgg').value;gear.push(Object.assign({t:gt,g:gg,p:Math.min(MAXP[gg],Math.max(0,+r.querySelector('.mgp').value||0))},go?(gt==='b'?{k:go}:{o:go}):{}));});
 return {title:v('T').value.trim(),msg:v('M').value.trim(),coins:Math.max(0,Math.floor(+v('C').value||0)),evc:v('V')?Math.max(0,Math.floor(+v('V').value||0)):0,eggs:Math.min(3,Math.max(0,Math.floor(+v('E').value||0))),yyEggs:Math.min(3,Math.max(0,Math.floor(+v('Y').value||0))),items,gear};}
function stampMail(m){return Object.assign({},m,{id:newMailId(),t:Date.now(),from:m.from||'운영자'});}
function aMail(){const w=cfg.welcome||{};const main=isMain();
 return '<div class="card adm" style="max-width:820px"><h2>전체 우편 보내기</h2><p class="muted">모든 플레이어 우편함에 똑같이 들어가요. 정지된 계정은 빠져요.</p>'+mailForm('mA')+'<div style="display:flex;gap:10px;align-items:center;margin-top:10px;flex-wrap:wrap"><label style="display:flex;gap:6px;align-items:center"><input type="checkbox" id="mAadm"> 운영자 계정에도 보내기</label><button class="btn teal sm" data-x="sendAll">전체 발송</button></div></div>'+
 '<div class="card adm" style="max-width:820px;margin-top:14px"><h2>가입 보상</h2><p class="muted">"계정 만들기"로 <b>새로</b> 만든 계정의 우편함에 자동으로 들어가요. (비밀번호 재발급으로 다시 만든 계정은 받지 않아요)</p>'+(main?'':'<p class="muted">보조 운영자는 볼 수만 있어요.</p>')+'<label style="display:flex;gap:6px;align-items:center;margin-bottom:8px"><input type="checkbox" id="mWon" '+(w.on?'checked':'')+(main?'':' disabled')+'> 가입 보상 켜기</label>'+mailForm('mW',w)+(main?'<div style="margin-top:10px"><button class="btn sm" data-x="saveWelcome">가입 보상 저장</button></div>':'')+(w.on?'<p class="ok" style="margin-top:8px">지금 설정: '+esc(w.title||'(제목 없음)')+' — '+esc(mailParts(w).join(', ')||'보상 없음')+'</p>':'<p class="muted" style="margin-top:8px">지금은 꺼져 있어요.</p>')+'</div>';}
function aMake(){return '<div class="card adm" style="max-width:640px"><h2>계정 만들기</h2><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">아이디 (영문·숫자 3~20자)<input type="text" id="nId" style="width:160px"></label><label class="f">마크 닉네임<input type="text" id="nNick" style="width:160px"></label><label class="f">권한<select id="nRole"><option value="player">플레이어</option><option value="sub">보조 운영자</option><option value="main">메인 운영자</option></select></label><button class="btn teal sm" data-x="mkAcc">만들기</button></div>'+(AS.newPw?'<p class="ok" style="margin-top:10px;font-size:15px">'+esc(AS.newPw)+'</p>':'')+'<p class="muted">비밀번호는 자동으로 만들어져요. 이 화면을 벗어나면 다시 볼 수 없으니 바로 DM으로 전달하세요. 예전에 쓰던 아이디로 다시 만들면 남아 있던 게임 데이터가 새 계정으로 옮겨져요.</p></div>';}
function aEggs(){return '<div class="card adm"><h2>알 코드 발급</h2><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">대상 아이디 (비우면 누구나)<input type="text" id="egT" style="width:160px"></label><label class="f">알 종류<select id="egK"><option value="">일반 알</option><option value="yy">음양알</option></select></label><label class="f">개수<input type="number" id="egN" value="1" min="1" max="20" style="width:70px"></label><button class="btn sm" data-x="mkEgg">발급</button><button class="btn soft sm" data-x="loadEggs">목록 새로고침</button></div>'+(AS.eggs?'<div style="overflow-x:auto"><table class="t" style="margin-top:10px"><tr><th>코드</th><th>대상</th><th>상태</th><th>발급</th><th></th></tr>'+AS.eggs.map(e=>'<tr><td><b>'+esc(e.id)+'</b>'+(e.kind==='yy'?' <span class="eltag" style="background:#ece6ff;color:#6a4ad0;border-color:#6a4ad0">음양알</span>':'')+'</td><td>'+esc(e.target||'누구나')+'</td><td>'+(e.used?'사용됨 ('+esc(e.by)+')':'미사용')+'</td><td>'+esc(e.from||'')+' · '+new Date(e.t).toLocaleDateString('ko-KR')+'</td><td>'+(e.used?'':'<button class="btn red sm" data-xegdel="'+esc(e.id)+'">취소</button>')+'</td></tr>').join('')+'</table></div>':'')+'</div>';}
function aTools(){return '<div class="card adm" style="max-width:640px"><h2>환수 코드 만들기 (테스트용)</h2><p class="muted">게임 없이 코인 입력을 확인할 때 써요. 데이터팩과 같은 계산식이에요.</p><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end"><label class="f">플레이어 번호<input type="number" id="cgId" value="1" style="width:100px"></label><label class="f">회차<input type="number" id="cgN" value="1" style="width:80px"></label><label class="f">코인<input type="number" id="cgC" value="10" style="width:80px"></label><button class="btn sm" data-x="genCode">만들기</button></div>'+(AS.codeGen?'<p class="ok" style="margin-top:8px;font-size:16px">'+esc(AS.codeGen)+'</p>':'')+'</div>';}
function aReset(){return '<div class="card adm" style="max-width:720px;border:2px solid #b02a1f"><h2 style="color:#b02a1f">전체 초기화 (대개편 새 시작)</h2><p>모든 계정의 게임 데이터를 지우고 새로 시작해요. <b>아이디·비밀번호·닉네임·권한·정지 여부·플레이어 번호·코드 회차</b>는 그대로 남아요.</p><ul class="muted"><li>환수·아이템·장비·도감·마을·우편 등 모든 게임 데이터 삭제</li><li>대전(arena·battles), 구천탑(tower), 설화 던전 순위(xmrank), 월드보스(boss·bosshits) 기록 삭제</li><li>모든 계정에 아래 우편 「새 시작 보상」을 보내요</li></ul><div class="card" style="background:var(--paper2)">'+mailForm('rS',AS.rsMail||{title:'새 시작 보상',msg:'선계가 새롭게 단장했어요! 대개편으로 모든 기록이 새로 시작돼요. 작은 선물을 보내드려요.',coins:300,eggs:3,items:{egg_g2:1,food_1:10,dew:10},gear:[]})+'</div><label class="f">확인을 위해 <b>초기화</b>라고 적어 주세요<input type="text" id="rsTxt" style="width:200px"></label><div style="margin-top:10px"><button class="btn red" data-x="resetAll">전체 초기화 실행</button></div>'+(AS.resetLog?'<pre class="muted" style="white-space:pre-wrap;margin-top:10px">'+esc(AS.resetLog)+'</pre>':'')+'</div>';}
function aLogs(){return '<div class="card adm"><h2>변경 기록</h2><button class="btn soft sm" data-x="loadLogs">불러오기</button>'+(AS.logs?'<div style="overflow-x:auto"><table class="t" style="margin-top:10px"><tr><th>시각</th><th>운영자</th><th>내용</th></tr>'+AS.logs.map(l=>'<tr><td>'+new Date(l.t).toLocaleString('ko-KR')+'</td><td>'+esc(l.by)+'</td><td>'+esc(l.msg)+'</td></tr>').join('')+'</table></div>':'')+'</div>';}
function randPw(){const c='abcdefghjkmnpqrstuvwxyz23456789';let s='';for(let i=0;i<8;i++)s+=c[Math.floor(rnd()*c.length)];return s;}
function randCode(){const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let s='EGG-';for(let i=0;i<8;i++){s+=c[Math.floor(rnd()*c.length)];if(i===3)s+='-';}return s;}
function blankAcc(id,uid,role,nick){return{id,uid,role:role||'player',nick:nick||id,banned:false,playerNo:null,lastNonce:0,coins:0,inv:{},gear:[],slots:[null,null,null],notice:[null,null,null],dex:{},mail:[],daily:null,offset:0,autoSleep:false,rev:1,created:Date.now()};}
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
 mailAddItem(t){document.getElementById(t.dataset.px+'IR').insertAdjacentHTML('beforeend',mailItemRow(t.dataset.px));},
 mailAddGear(t){document.getElementById(t.dataset.px+'GR').insertAdjacentHTML('beforeend',mailGearRow(t.dataset.px));},
 mailDelRow(t){const r=t.closest('.mrow'),box=r.parentNode;if(box.children.length>1)r.remove();else{r.querySelectorAll('select').forEach(s=>s.selectedIndex=0);r.querySelectorAll('input').forEach(i=>i.value=i.classList.contains('mgp')?0:1);}},
 libToggle(){AS.libAll=!AS.libAll;render();},
 igCheck(){AS.igChk=(document.getElementById('igChkIn').value||'').trim();render();},
 async libDone(){const uid=AS.twUid,lid=AS.libId;if(!uid||!lid)return;const ref=db.doc('accounts/'+uid),s0=await ref.get();if(!s0.exists)return toast('계정을 찾지 못했어요.');const a=s0.data(),libs=(a.libs||[]).map(l=>l.id===lid?Object.assign({},l,{done:true,by:acc.id,at:Date.now()}):l);
  await ref.update({libs,rev:(a.rev||0)+1});const l=libs.find(x=>x.id===lid);log('해방 인게임 보상 지급: '+a.id+' · '+(l?NAMES[l.no]+' '+stN(l)+' · '+l.game:''));toast('지급 완료로 표시했어요.');await AD.loadList();},
 async twLoad(){const el=document.getElementById('xTwS');AS.twSeason=el&&el.value?el.value:(AS.twSeason||twSeason());const q=await db.collection('tower').where('season','==',AS.twSeason).get();AS.tw=q.docs.map(d=>d.data()).filter(r=>r.best>0).sort((x,y)=>y.best-x.best||x.t-y.t);render();},
 async twDel(){const uid=AS.twUid;if(!uid)return;const r=(AS.tw||[]).find(x=>x.uid===uid);
  confirmBox('구천탑 기록 삭제',(r?r.nick+'의 ':'')+'이번 시즌 구천탑 기록을 지울까요? 진행도도 1층으로 돌아가요.',async()=>{await db.doc('tower/'+uid).delete();const ref=db.doc('accounts/'+uid),s0=await ref.get();if(s0.exists){const a=s0.data();if(a.tower&&a.tower.season===(AS.twSeason||twSeason()))await ref.update({tower:null,rev:(a.rev||0)+1});}log('구천탑 기록 삭제 '+(r?r.id:uid));toast('기록을 지웠어요.');AS.tw=null;await AD.twLoad();});},
 async loadList(){const q=await db.collection('accounts').get();AS.list=q.docs.map(d=>Object.assign({uid:d.id},d.data())).sort((a,b)=>(a.id>b.id?1:-1));if(AS.tgt){const n=AS.list.find(a=>a.uid===AS.tgt.uid);AS.tgt=n?normT(n):null;AS.base=CL(AS.tgt);}render();},
 find(){AS.find=document.getElementById('xFind').value.trim();render();},
 reload(){AD.loadList();},
 close(){AS.tgt=null;render();},
 async bossSpawn(){const no=+document.getElementById('bNo').value,hp=Math.max(1,Math.round(+document.getElementById('bHp').value||0)),atk=Math.max(1,Math.round(+document.getElementById('bAtk').value||0)),def=Math.max(0,Math.round(+document.getElementById('bDef').value||0)),k=bossSuggest().k,reward=readMail('bR'),mvpReward=readMail('bM');
  confirmBox('월드보스 소환',BOSSES[no-1].n+' (체력 '+fmt(hp)+', 공격력 '+fmt(atk)+', 방어력 '+fmt(def)+')을(를) 소환할까요? 지금 보스는 내려가요.',async()=>{await db.doc('boss/current').set({iid:'w'+Date.now().toString(36),no,maxHp:hp,hp,atk,def,k,start:Date.now(),killed:false,reward,mvpReward,by:acc.id});log('월드보스 소환: '+BOSSES[no-1].n+' 체력 '+hp+' 공격력 '+atk+' / 보상 '+(mailParts(reward).join(', ')||'없음')+' / MVP '+(mailParts(mvpReward).join(', ')||'없음'));toast('소환했어요!');await loadBoss();});},
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
 async eqGive(){const tv=document.getElementById('xEqT').value,g=+document.getElementById('xEqG').value,pl=Math.min(MAXP[g],Math.max(0,+document.getElementById('xEqP').value||0));const [t,o]=tv.split(':');const n=gearNew(t,g);if(t==='n'&&o){n.o=o;n.subs=[];ngFill(n);}if(t==='b'&&o)n.k=o;n.p=pl;AS.tgt.gear.push(n);await saveTgt('장비 지급 '+gearName(n)+' +'+pl);},
 async petApply(){const p=AS.tgt.slots[AS.slot];if(!p)return;const no=+document.getElementById('xNo').value;if(no!==p.no){p.no=no;p.st=FORMS[no].st;tDex(no);}p.lv=Math.max(1,Math.min(maxLvP(p),+document.getElementById('xLv').value||1));if(p.lv>=maxLvP(p))p.exp=0;p.star=Math.max(0,Math.min(STAR_MAX(p.no),+document.getElementById('xStar').value||0));GAUGES.forEach((e,i)=>{p.g[e]=Math.max(0,Math.min(gCap(p.st),+document.getElementById('xEl_'+e).value||0));p.gT[e]=Date.now()+i;});['hu','th','cl'].forEach(k=>p[k]=Math.max(0,Math.min(100,+document.getElementById('xS_'+k).value||0)));p.aff=Math.min(100,+document.getElementById('xS_aff').value||0);p.en=Math.max(0,+document.getElementById('xS_en').value||0);await saveTgt('환수 편집: '+NAMES[p.no]+' Lv'+p.lv);},
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
    for(const c of ['arena','battles','tower','xmrank','bosshits']){const r=await db.collection(c).get();for(const x of r.docs)await db.doc(c+'/'+x.id).delete();say(c+' '+r.docs.length+'개 삭제');}
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
 async loadLogs(){const q=await db.collection('adminlogs').orderBy('t','desc').limit(80).get();AS.logs=q.docs.map(d=>d.data());render();}
};
function normT(a){const t=JSON.parse(JSON.stringify(a));t.inv=t.inv||{};t.gear=t.gear||[];t.dex=t.dex||{};t.slots=t.slots||[null,null,null];t.gsp=t.gsp||{s1:[],s2:[]};t.notice=t.notice||[null,null,null];t.mail=t.mail||[];return t;}
function tDex(no){if(!AS.tgt.dex[no])AS.tgt.dex[no]={d:dayKey(Date.now()).slice(5).replace('-','.'),freed:false};}
Object.assign(AD,ADMCFG);
const MAIN_ONLY=new Set(['shopSave','shopReset','rcpSave','rcpReset','igSave','igReset','colSave','colReset','resetAll','decoGive','vilCapSet','bossSpawn','bossSaveReward','bossHeal','bossEnd','saveWelcome','itemGive','invSave','eqGive','petApply','restore','dexAdd','dexDel','dexFree','ban','delAcc','mkAcc']);

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
 if(k==='coin'){const m=String(fd.get('code')).trim().match(/^(\d+)-(\d+)-(\d+)-(\d+)$/);if(!m)return toast('코드 형식이 아니에요. 예: 3-7-10-4821');const [id,n,c,chk]=m.slice(1).map(Number);if((id*37+n*53+c*71+1234)%9973!==chk)return toast('잘못된 코드예요.');if(acc.playerNo&&acc.playerNo!==id)return toast('본인 플레이어 번호의 코드가 아니에요.');if(n<=(acc.lastNonce||0))return toast('이미 사용한 코드예요.');acc.playerNo=id;acc.lastNonce=n;acc.coins+=c;SFX.play('coins');toast('환수 코인 '+c+'개가 들어왔어요!');await commit();}
}finally{busy=false;}});
document.addEventListener('error',ev=>{const t=ev.target;if(t&&t.tagName==='IMG'&&!t.dataset.fb&&/\/(h|b)\//.test(t.src)){t.dataset.fb='1';t.src='i/q.png';}},true);
document.addEventListener('change',ev=>{if(ev.target&&ev.target.dataset&&ev.target.dataset.deco&&MODE==='player'&&acc){acc.deco=acc.deco||{};acc.deco[ev.target.dataset.deco]=ev.target.value;commit();setTimeout(decoMount,0);return;}if(ev.target&&ev.target.id==='bNo'&&MODE==='admin'){AS.bossNo=+ev.target.value;render();}});
document.addEventListener('click',async ev=>{const t=ev.target.closest('button,[data-close],input[type=checkbox],[data-vo],[data-vpet]');if(!t)return;const ds=t.dataset;if(t.tagName==='BUTTON'&&!ds.a2)SFX.play('tap');
 if(ds.close&&ev.target===t)return closeLayer();
 if(ds.view){view=ds.view;S.forgeSel=[];if(ds.bagtab2)S.bag=ds.bagtab2;if(VS.place&&view!=='village')placeCancel();if(view==='pvp')PV.loaded=false;if(view==='boss')BV.loaded=false;if(view==='tower')TV.loaded=false;return render();}
 if(ds.batk!=null){BV.atk=+ds.batk;return render();}
 if(ds.bossgo)return bossAttack();
 if(ds.bossclaim)return bossClaim();
 if(ds.bossretry)return bossRetry();
 if(ds.tmode){S.tmode=ds.tmode;return render();}
 if(ds.errand!=null)return sendErrand(+ds.errand);
 if(ds.bagopen!=null)return bagOpen(t);
 if(ds.bagall)return bagAll();
 if(ds.errack!=null){const q=acc.slots[+ds.errack];if(q){q.errandResult=null;SFX.play('coins');toast('심부름 보상을 받았어요!');return commit();}}
 if(ds.hatch)return hatch(ds.hatch);
 if(ds.atk!=null){PV.atk=+ds.atk;return render();}
 if(ds.refight)return fight(ds.refight,true);if(ds.fight)return fight(ds.fight);
 if(ds.replay)return replay(ds.replay);
 if(ds.pvprefresh){PV.list=null;render();return loadArena();}
 if(ds.sel!=null){sel=+ds.sel;selSpot=null;S.forgeSel=[];return render();}
 if(ds.spot!=null){selSpot=+ds.spot;return render();}
 if(ds.a){const a=ds.a;if(a==='feed'&&!ds.v)return feedMenu();if(a==='kimenu')return kiMenu();if(a==='susm')return susMenu();if(A[a])return A[a](ds.v);}
 if(ds.ack!=null){const q=acc.slots[+ds.ack];if(q){q.result=null;return commit();}}
 if(ds.a2==='att')return attModal(false);
 if(ds.a2==='sfx'||ds.a2==='bgm'){SFX.toggle(ds.a2);return render();}
 if(ds.mclaim)return claimMail(ds.mclaim);
 if(ds.a2==='logout')return logout();
 if(ds.buy){const k=ds.buy,n=+ds.n,it=ITEMS[k],ad=accDaily();if(!it||!(it.p>0))return toast('상점에서 살 수 없는 아이템이에요.');if(it.daily&&(ad[k]||0)+n>it.daily)return toast('오늘은 더 살 수 없어요 (하루 '+it.daily+'개).');const wk=accWeekly();if(it.weekly&&(wk[k]||0)+n>it.weekly)return toast('이번 주에는 더 살 수 없어요 (주 '+it.weekly+'개).');if(acc.coins<it.p*n)return toast('코인이 부족해요.');acc.coins-=it.p*n;acc.inv[k]=(acc.inv[k]||0)+n;if(it.daily)ad[k]=(ad[k]||0)+n;if(it.weekly)wk[k]=(wk[k]||0)+n;SFX.play('buy');toast(it.n+' ×'+n+' 구매!');return commit();}
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
  const pr=slotPrice();if(acc.coins<pr)return toast('코인이 부족해요. ('+(acc.slots.length+1)+'번째 슬롯 '+pr+'코인)');
  return confirmBox('슬롯 추가',(acc.slots.length+1)+'번째 환수 슬롯을 '+pr+'코인에 열까요?',()=>{if(acc.coins<pr||acc.slots.length>=MAX_SLOTS)return;acc.coins-=pr;addSlot();SFX.play('buy');slotFx();commit();});}
 if(ds.buyegg){const wk=accWeekly();if(wk.egg>=SHOPX.eggWeek)return toast('이번 주에는 더 살 수 없어요 (주 '+SHOPX.eggWeek+'개).');if(acc.coins<SHOPX.egg)return toast('코인이 부족해요.');
  acc.coins-=SHOPX.egg;wk.egg++;giveEgg(0);SFX.play('egg');toast('환수 알을 샀어요! 가방에 보관했어요.');return commit();}
 if(ds.shop){S.shop=ds.shop;return render();}
 if(ds.bagtab){S.bag=ds.bagtab;view='bag';return render();}
 if(ds.gft){S.gft=ds.gft;return render();}
 if(ds.buyvil){vilInit();const vc=vilCap();if(vc>=VIL_CAPMAX)return toast('마을 한도가 최대예요.');const pr=VIL_EXP[Math.round((vc-VIL_CAP0)/5)];if(acc.coins<pr)return toast('코인이 부족해요 ('+pr+'코인).');
  return confirmBox('마을 확장','마을 환수 한도를 '+vc+' → '+(vc+5)+'마리로 늘릴까요? ('+pr+'코인)',()=>{if(acc.coins<pr)return;acc.coins-=pr;acc.vil.cap=vc+5;SFX.play('fanfare');toast('마을이 넓어졌어요! '+acc.vil.cap+'마리까지 머물 수 있어요.');commit();});}
 if(ds.usevil){vilInit();if(vilCap()>=VIL_CAPMAX)return toast('마을 한도가 최대예요.');if(!take('sec_vil'))return;acc.vil.cap=vilCap()+5;SFX.play('fanfare');toast('마을이 넓어졌어요! '+acc.vil.cap+'마리');return commit();}
 if(ds.buydeco){vilInit();const d=DECO_SHOP_N().find(x=>x.k===ds.buydeco);if(!d)return;if(acc.coins<d.p)return toast('코인이 부족해요.');acc.coins-=d.p;acc.vil.store[d.k]=(acc.vil.store[d.k]||0)+1;SFX.play('buy');toast(d.n+'을(를) 마을 보관함에 넣었어요.');return commit();}
 if(ds.kix){const [a,b]=ds.kix.split(':');if(!KI[a]||!KI[b]||a==='yy'||b==='yy'||a===b)return;if((acc.inv[KI[a]]||0)<3)return toast(ITEMS[KI[a]].n+'이(가) 3개 필요해요.');acc.inv[KI[a]]-=3;acc.inv[KI[b]]=(acc.inv[KI[b]]||0)+1;SFX.play('buy');toast(ITEMS[KI[a]].n+' 3개 → '+ITEMS[KI[b]].n+' 1개');return commit();}
 if(ds.igs){const [k,v]=ds.igs.split(':');S.igSel=S.igSel||{};const have=acc.inv[k]||0;S.igSel[k]=v==='all'?Math.min(99,have):Math.max(0,Math.min(have,99,(S.igSel[k]||0)+(+v)));return render();}
 if(ds.igmake)return igMake();
 if(ds.copy){try{await navigator.clipboard.writeText(ds.copy);toast('복사했어요!');}catch(e){toast('복사하지 못했어요. 길게 눌러 직접 복사해 주세요.');}return;}
 if(ds.dextab){S.dex=ds.dextab;return render();}
 if(ds.colclaim)return colClaim(ds.colclaim);
 if(ds.wishgo)return doWish();
 if(ds.wishnote)return doWish(true);
 if(['vzoom','vharvall','vharv','vo','vpet','vbuildmenu','vplace','vcancel','vdone','vstore','vskin','vskinset','vtake','vput','vdel','vnew','vbuildgo','vup','bcut','craft','vassign','vas','vunassign','vtoslot','vtogsp','rcptab'].some(k=>ds[k]!=null)){vilInit();return vClick(ds);}
 if(ds.gpick){const u=ds.gpick;if(S.synA){if(u===S.synA){S.synA=null;return render();}const a=gearOf(S.synA),b=gearOf(u);if(!synOk(a,b))return toast(b&&equippedBy(b.u)!=null?'장착 중인 장비는 합성할 수 없어요.':'같은 종류·같은 등급이고 최대 강화된 장비만 합성할 수 있어요.');S.forgeSel=[a.u,b.u];return synthModal();}return gearModal(u);}
 if(ds.synpick){const a=gearOf(ds.synpick);closeLayer();S.gm=null;if(!acc.gear.some(x=>synOk(a,x)))return toast('같이 합성할 수 있는 장비가 없어요. 같은 종류·같은 등급의 최대 강화 장비가 하나 더 필요해요.');S.synA=a.u;S.forgeSel=[];return render();}
 if(ds.syncancel){S.forgeSel=[];closeLayer();if(ds.syncancel==='all')S.synA=null;return render();}
 if(t.matches('[data-bless]')){S.bless=t.checked;if(S.gm)return gearModal(S.gm);return render();}
 if(t.matches('[data-protect]')){S.protect=t.checked;if(S.forgeSel.length===2)return synthModal();return render();}
 if(ds.aff){const g=gearOf(S.gm);if(!g)return;g.aff=ds.aff;commit();return gearModal(g.u);}
 if(ds.equip){const p=P(),g=gearOf(ds.equip);if(!p)return;const o=equippedBy(g.u);if(o!=null)petAt(o).eq[g.t]=null;p.eq=Object.assign({w:null,a:null,s:null,n:null,b:null},p.eq);p.eq[g.t]=g.u;SFX.play('equip');toast('장착했어요.');closeLayer();S.gm=null;return commit();}
 if(ds.unequip){const g=gearOf(ds.unequip),o=equippedBy(g&&g.u);if(!g||o==null)return;const p=petAt(o);p.eq[g.t]=null;SFX.play('clank');toast(NAMES[p.no]+'에게서 해제했어요.');closeLayer();S.gm=null;return commit();}
 if(ds.enh){const g=gearOf(ds.enh);if(g.p>=MAXP[g.g])return;if(acc.coins<ECOST[g.g])return toast('코인이 부족해요.');let r=RATE[g.p+1];if(S.bless){if(!take('sec_bless'))return;r+=.1;}acc.coins-=ECOST[g.g];
  const ok=rnd()<r,from=g.p;if(ok)g.p++;S.gm=null;S.forgeSel=[];save();const im=gearImg(g),nm=gearName(g);
  forgeAnim({kind:'enh',title:nm+' +'+from+' → +'+(from+1)+' 강화',imgs:[im],rate:Math.min(1,r),extra:S.bless?'강화축복비서 사용':'',out:ok?'success':'fail',head:ok?'+'+g.p+' 강화 성공!':'강화 실패…',sub:ok?nm+' +'+g.p:'단계는 +'+g.p+' 그대로예요.'});return;}
 if(ds.synth){const [a,b]=S.forgeSel.map(gearOf);const sy=SYN[a.g];if(acc.coins<SFEE[a.g])return toast('코인이 부족해요.');let prot=false;if(sy.x&&S.protect){if(!take('sec_protect'))return;prot=true;}acc.coins-=SFEE[a.g];const r=rnd();
  const imA=gearImg(a),imB=gearImg(b),nm=gearName(a),o={kind:'synth',title:nm+' 합성 → '+GN[a.g+1],imgs:[imA,imB],rate:sy.s,extra:(sy.d?'하락 '+Math.round(sy.d*100)+'%':'')+(sy.x?' 파괴 '+Math.round(sy.x*100)+'%'+(prot?' (방지)':''):'')};
  if(r<sy.s){acc.gear=acc.gear.filter(x=>x.u!==a.u&&x.u!==b.u);const ng=a.t==='n'?ngFill({u:'n'+Date.now().toString(36),t:'n',g:a.g+1,p:0,o:a.o,r:rnd(),subs:(a.subs||[]).map(x=>({o:x.o,r:rnd()}))}):a.t==='b'?{u:uid36('b'),t:'b',g:a.g+1,p:0,k:a.k,r:rnd()}:{u:uid36('g'),t:a.t,g:a.g+1,p:0};acc.gear.push(ng);Object.assign(o,{out:'success',resImg:gearImg(ng),head:'합성 성공!',sub:gearName(ng)+' 획득!'+(ng.t==='n'&&(ng.subs||[]).length>(a.subs||[]).length?' 추가 옵션이 열렸어요!':'')});}
  else if(r<sy.s+sy.d){b.g--;b.p=0;if(b.t==='n')ngFill(b);Object.assign(o,{out:'down',resImg:gearImg(b),head:'합성 실패… 등급 하락',sub:'장비 하나가 '+GN[b.g]+'(으)로 내려갔어요.'});}
  else if(r<sy.s+sy.d+sy.x){if(prot)Object.assign(o,{out:'protect',head:'파괴 방지!',sub:'파괴될 뻔했지만 파괴방지비서가 막았어요.'});else{acc.gear=acc.gear.filter(x=>x.u!==b.u);Object.assign(o,{out:'destroy',head:'합성 실패… 파괴',sub:'장비 하나가 부서졌어요.'});}}
  else Object.assign(o,{out:'fail',head:'합성 실패…',sub:'코인만 사라지고 장비는 그대로예요.'});
  S.forgeSel=[];S.synA=null;S.gm=null;save();forgeAnim(o);return;}
 // 운영자
 if(MODE!=='admin'||!isAdmin())return;
 if(ds.xtab){AS.tab=ds.xtab;if(ds.xtab==='eggs'&&!AS.eggs)AD.loadEggs();if(ds.xtab==='logs'&&!AS.logs)AD.loadLogs();return render();}
 if(ds.xpick){const a=(AS.list||[]).find(x=>x.uid===ds.xpick);AS.tgt=a?normT(a):null;AS.base=CL(AS.tgt);AS.slot=0;AS.tgtArena=undefined;render();return AD.loadArenaT();}
 if(ds.x&&ds.uid)AS.twUid=ds.uid;if(ds.x&&ds.lid)AS.libId=ds.lid;
 if(ds.x&&AD[ds.x]){if(MAIN_ONLY.has(ds.x)&&!isMain())return toast('메인 운영자만 할 수 있어요.');try{return await AD[ds.x](t);}catch(e){toast('실패했어요: '+(e&&e.message||e));}}
 if(ds.xslot!=null){AS.slot=+ds.xslot;return render();}
 if(ds.xgdel&&isMain()){const u=ds.xgdel;AS.tgt.slots.forEach(p=>{if(p)GT.forEach(k=>{if(p.eq&&p.eq[k]===u)p.eq[k]=null;});});AS.tgt.gear=AS.tgt.gear.filter(g=>g.u!==u);return saveTgt('장비 회수');}
 if(ds.xp&&isMain()){const t=AS.tgt,i=AS.slot,p=t.slots[i],k=ds.xp,tn=Date.now()+(t.offset||0);
  if(k==='egg'||k==='yyegg'){const n0=k==='yyegg'?146:0;t.slots[i]=tPet(n0);t.notice[i]=null;tDex(n0);}
  else if(p){if(k==='finish'&&p.train)p.train.end=tn;if(k==='finish'&&p.errand)p.errand.end=tn;if(k==='wake')p.sleep=null;if(k==='cure'){curePet(p);}if(k==='unlock'){p.g=newGauge();p.gT=newGauge();}if(k==='daily'){p.daily={d:'',pat:0,play:0,sleep:0};t.daily=null;}if(k==='del')t.slots[i]=null;}
  return saveTgt({egg:'알 넣기',yyegg:'음양알 넣기',finish:'수련·심부름 즉시 완료',wake:'깨우기',cure:'병 치료',unlock:'오행 게이지 초기화',daily:'오늘 횟수 초기화',del:'환수 삭제'}[k]+' (슬롯 '+(i+1)+')');}
 if(ds.xegdel){await db.doc('eggcodes/'+ds.xegdel).delete();log('알 코드 취소 '+ds.xegdel);return AD.loadEggs();}
});
setInterval(()=>{if(MODE!=='player'||!acc||S.kicked||document.getElementById('layer').innerHTML)return;if(acc.att&&acc.att.last!==dayKey(now())){const st=attCheck();if(st){save();render();attModal(true);return;}}const ch=tickAll();const a=document.activeElement;const typing=a&&(a.tagName==='INPUT'||a.tagName==='SELECT');if(!typing&&!VDRAG&&!VS.place&&(view==='home'||view==='train'||view==='village')&&!document.querySelector('.errres')){const sc=document.getElementById('vview'),keep=sc?[sc.scrollLeft,sc.scrollTop]:null;render();const s2=document.getElementById('vview');if(s2&&keep){s2.scrollLeft=keep[0];s2.scrollTop=keep[1];}}if(ch)save();},2000);

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
 db=HS.db;if(TEST)window.__T={get acc(){return acc;},set acc(v){acc=v;},vilInit,render,commit,tickAll,bOf,vilTick,evoCheck,statsOf,cp,TMAP,ITEMS,FORMS,NAMES,newPet,gCap,set view(v){view=v;},get VS(){return VS;}};if(/[?&]mock/.test(location.search))window.__dbg={evoCheck,newPet,cp,needP,isAdv,maxLv,statsOf,petStats,evoTargets};
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

