/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'big',
            type:'group',
            rect:['0','0','1536','1257','auto','auto'],
            c:[
            {
               id:'box_b_4',
               type:'image',
               tag:'img',
               rect:['768px','629px','768px','628px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"big/box4.png",'0px','0px']
            },
            {
               id:'box_b_1',
               type:'image',
               rect:['0px','0px','767px','628px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"big/box1.png",'0px','0px']
            },
            {
               id:'box_b_2',
               type:'image',
               tag:'img',
               rect:['768px','0px','768px','628px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"big/box2.png",'0px','0px']
            },
            {
               id:'box_b_3',
               type:'image',
               tag:'img',
               rect:['0px','629px','767px','628px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"big/box3.png",'0px','0px']
            },
            {
               id:'Booknow-Big',
               display:'none',
               type:'image',
               rect:['72px','522px','266px','66px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"Booknow-Big.png",'0px','0px']
            }]
         },
         {
            id:'share',
            display:'none',
            type:'image',
            rect:['768px','0px','768px','632px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"share.png",'0px','0px']
         },
         {
            id:'medium',
            display:'none',
            type:'group',
            rect:['0','2','1536','1255','auto','auto'],
            c:[
            {
               id:'box_m_1',
               type:'image',
               tag:'img',
               rect:['0px','0px','768px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"medium/box1.png",'0px','0px']
            },
            {
               id:'box_m_2',
               type:'image',
               tag:'img',
               rect:['0px','314px','768px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"medium/box2.png",'0px','0px']
            },
            {
               id:'box_m_3',
               type:'image',
               tag:'img',
               rect:['0px','628px','768px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"medium/box3.png",'0px','0px']
            },
            {
               id:'box_m_4',
               type:'image',
               tag:'img',
               rect:['0px','942px','768px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"medium/box4.png",'0px','0px']
            },
            {
               id:'box_m_5',
               type:'image',
               tag:'img',
               rect:['767px','0px','767px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"medium/box5.png",'0px','0px']
            },
            {
               id:'box_m_6',
               type:'image',
               tag:'img',
               rect:['767px','314px','767px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"medium/box6.png",'0px','0px']
            },
            {
               id:'box_m_7',
               type:'image',
               tag:'img',
               rect:['767px','628px','767px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"medium/box7.png",'0px','0px']
            },
            {
               id:'box_m_8',
               type:'image',
               tag:'img',
               rect:['767px','942px','767px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"medium/box8.png",'0px','0px']
            }]
         },
         {
            id:'Booknow-Big2',
            display:'none',
            type:'image',
            rect:['76px','215px','266px','66px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Booknow-Big.png",'0px','0px']
         },
         {
            id:'small',
            display:'none',
            type:'group',
            rect:['576px','214px','384','313','auto','auto'],
            c:[
            {
               id:'box_s_1',
               type:'image',
               tag:'img',
               rect:['-576px','-214px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box1.png",'0px','0px']
            },
            {
               id:'box_s_2',
               type:'image',
               tag:'img',
               rect:['-192px','-214px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box2.png",'0px','0px']
            },
            {
               id:'box_s_3',
               type:'image',
               tag:'img',
               rect:['192px','-214px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box3.png",'0px','0px']
            },
            {
               id:'box_s_4',
               type:'image',
               tag:'img',
               rect:['576px','-214px','384px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box4.png",'0px','0px']
            },
            {
               id:'box_s_5',
               type:'image',
               tag:'img',
               rect:['-576px','100px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box5.png",'0px','0px']
            },
            {
               id:'box_s_6',
               type:'image',
               tag:'img',
               rect:['-192px','100px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box6.png",'0px','0px']
            },
            {
               id:'box_s_7',
               type:'image',
               tag:'img',
               rect:['191px','100px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box7.png",'0px','0px']
            },
            {
               id:'box_s_8',
               type:'image',
               tag:'img',
               rect:['576px','100px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box8.png",'0px','0px']
            },
            {
               id:'box_s_9',
               type:'image',
               tag:'img',
               rect:['-576px','414px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box9.png",'0px','0px']
            },
            {
               id:'box_s_10',
               type:'image',
               tag:'img',
               rect:['-192px','414px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box10.png",'0px','0px']
            },
            {
               id:'box_s_11',
               type:'image',
               tag:'img',
               rect:['192px','414px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box11.png",'0px','0px']
            },
            {
               id:'box_s_12',
               type:'image',
               tag:'img',
               rect:['576px','414px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box12.png",'0px','0px']
            },
            {
               id:'box_s_13',
               type:'image',
               tag:'img',
               rect:['-576px','728px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box13.png",'0px','0px']
            },
            {
               id:'box_s_14',
               type:'image',
               tag:'img',
               rect:['-192px','728px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box14.png",'0px','0px']
            },
            {
               id:'box_s_15',
               type:'image',
               tag:'img',
               rect:['192px','728px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box15.png",'0px','0px']
            },
            {
               id:'box_s_16',
               type:'image',
               tag:'img',
               rect:['576px','728px','383px','313px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"small/box16.png",'0px','0px']
            }]
         },
         {
            id:'Booknow-Small',
            display:'none',
            type:'image',
            rect:['34px','207px','186px','66px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Booknow-Small.png",'0px','0px']
         },
         {
            id:'footer',
            type:'image',
            rect:['2px','1145px','1536px','112px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"footer.png",'0px','0px']
         },
         {
            id:'cursor',
            type:'image',
            rect:['883px','1173px','60px','60px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"big/cursor.png",'0px','0px']
         },
         {
            id:'small_ico',
            type:'group',
            rect:['610','1186','319','33','auto','auto'],
            c:[
            {
               id:'_4x_s',
               type:'image',
               rect:['286px','0px','33px','32px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"icone%20slider/4x.png",'0px','0px']
            },
            {
               id:'_8x_s',
               type:'image',
               rect:['142px','0px','33px','33px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"icone%20slider/8x.png",'0px','0px']
            },
            {
               id:'_16x_s',
               type:'image',
               rect:['0px','0px','33px','33px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"icone%20slider/16x.png",'0px','0px']
            }]
         },
         {
            id:'medium_ico',
            display:'none',
            type:'group',
            rect:['610','1186','319','33','auto','auto'],
            c:[
            {
               id:'_4x_m',
               type:'image',
               rect:['286px','0px','33px','32px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"icone%20slider/4x.png",'0px','0px']
            },
            {
               id:'_8x_m',
               type:'image',
               rect:['142px','0px','33px','33px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"icone%20slider/8x.png",'0px','0px']
            },
            {
               id:'_16x_m',
               type:'image',
               rect:['0px','0px','33px','33px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"icone%20slider/16x.png",'0px','0px']
            }]
         },
         {
            id:'big_ico',
            display:'none',
            type:'group',
            rect:['610','1186','319','33','auto','auto'],
            c:[
            {
               id:'_4x_b',
               type:'image',
               rect:['288px','-2px','33px','32px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"icone%20slider/4x.png",'0px','0px']
            },
            {
               id:'_8x_b',
               type:'image',
               rect:['144px','-2px','33px','33px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"icone%20slider/8x.png",'0px','0px']
            },
            {
               id:'_16x_b',
               type:'image',
               rect:['2px','-2px','33px','33px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"icone%20slider/16x.png",'0px','0px']
            }]
         },
         {
            id:'_4X',
            type:'image',
            rect:['882px','1073px','75px','95px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"4X.png",'0px','0px']
         },
         {
            id:'_8X',
            type:'image',
            rect:['732px','1073px','75px','95px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"8X.png",'0px','0px']
         },
         {
            id:'_16X',
            type:'image',
            rect:['589px','1073px','75px','95px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"16X.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_box_m_5}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '769px']
         ],
         "${__16x_m}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_box_b_1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${__16X}": [
            ["style", "top", '1073px'],
            ["style", "opacity", '0'],
            ["style", "left", '589px']
         ],
         "${_box_s_9}": [
            ["style", "top", '414px'],
            ["style", "opacity", '0'],
            ["style", "left", '-576px']
         ],
         "${__8X}": [
            ["style", "top", '1073px'],
            ["style", "opacity", '0'],
            ["style", "left", '732px']
         ],
         "${_Booknow-Big2}": [
            ["style", "top", '215px'],
            ["style", "left", '76px'],
            ["style", "display", 'none']
         ],
         "${_box_m_8}": [
            ["style", "top", '942px'],
            ["style", "opacity", '1'],
            ["style", "left", '769px']
         ],
         "${_box_s_7}": [
            ["style", "top", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '192px']
         ],
         "${_box_s_2}": [
            ["style", "top", '-214px'],
            ["style", "opacity", '0'],
            ["style", "left", '-192px']
         ],
         "${_medium_ico}": [
            ["style", "display", 'none']
         ],
         "${__8x_b}": [
            ["style", "left", '144px'],
            ["style", "top", '-2px']
         ],
         "${__4x_m}": [
            ["style", "left", '286px'],
            ["style", "top", '0px']
         ],
         "${__16x_s}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_box_s_8}": [
            ["style", "top", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '576px']
         ],
         "${_footer}": [
            ["style", "left", '2px'],
            ["style", "top", '1145px']
         ],
         "${_Booknow-Small}": [
            ["style", "top", '207px'],
            ["style", "left", '34px'],
            ["style", "display", 'none']
         ],
         "${_box_s_13}": [
            ["style", "top", '728px'],
            ["style", "opacity", '0'],
            ["style", "left", '-576px']
         ],
         "${_cursor}": [
            ["style", "left", '883px'],
            ["style", "top", '1173px']
         ],
         "${_box_m_3}": [
            ["style", "top", '628px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${__16x_b}": [
            ["style", "top", '-2px'],
            ["style", "left", '2px']
         ],
         "${_big}": [
            ["style", "top", '-2px'],
            ["style", "display", 'block'],
            ["style", "overflow", 'visible']
         ],
         "${_box_s_5}": [
            ["style", "top", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '-576px']
         ],
         "${_medium}": [
            ["style", "display", 'none']
         ],
         "${_box_s_16}": [
            ["style", "top", '728px'],
            ["style", "opacity", '0'],
            ["style", "left", '576px']
         ],
         "${_box_s_4}": [
            ["style", "top", '-214px'],
            ["style", "opacity", '0'],
            ["style", "left", '576px']
         ],
         "${_Booknow-Big}": [
            ["style", "display", 'none'],
            ["style", "left", '76px'],
            ["style", "top", '520px']
         ],
         "${_box_m_4}": [
            ["style", "top", '942px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_box_s_15}": [
            ["style", "top", '728px'],
            ["style", "opacity", '0'],
            ["style", "left", '192px']
         ],
         "${_small_ico}": [
            ["style", "display", 'block']
         ],
         "${_share}": [
            ["style", "top", '-2px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '768px'],
            ["style", "height", '628px']
         ],
         "${_box_m_6}": [
            ["style", "top", '314px'],
            ["style", "opacity", '1'],
            ["style", "left", '769px']
         ],
         "${_box_s_6}": [
            ["style", "top", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '-192px']
         ],
         "${_box_b_2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '768px']
         ],
         "${_box_m_1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_box_s_11}": [
            ["style", "top", '414px'],
            ["style", "opacity", '0'],
            ["style", "left", '192px']
         ],
         "${__8x_s}": [
            ["style", "left", '142px'],
            ["style", "top", '0px']
         ],
         "${_big_ico}": [
            ["style", "display", 'none'],
            ["style", "left", '608px'],
            ["style", "top", '1188px']
         ],
         "${_box_m_2}": [
            ["style", "top", '314px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${__8x_m}": [
            ["style", "left", '142px'],
            ["style", "top", '0px']
         ],
         "${_box_s_3}": [
            ["style", "top", '-214px'],
            ["style", "opacity", '0'],
            ["style", "left", '192px']
         ],
         "${_small}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_box_s_12}": [
            ["style", "top", '414px'],
            ["style", "opacity", '0'],
            ["style", "left", '576px']
         ],
         "${_box_m_7}": [
            ["style", "top", '628px'],
            ["style", "opacity", '1'],
            ["style", "left", '769px']
         ],
         "${_box_s_1}": [
            ["style", "top", '-214px'],
            ["style", "opacity", '0'],
            ["style", "left", '-576px']
         ],
         "${_box_b_4}": [
            ["style", "top", '629px'],
            ["style", "opacity", '0'],
            ["style", "left", '768px']
         ],
         "${__4x_s}": [
            ["style", "left", '286px'],
            ["style", "top", '0px']
         ],
         "${_box_s_14}": [
            ["style", "top", '728px'],
            ["style", "opacity", '0'],
            ["style", "left", '-192px']
         ],
         "${_box_b_3}": [
            ["style", "top", '629px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1536px'],
            ["style", "height", '1257px'],
            ["style", "overflow", 'hidden']
         ],
         "${_box_s_10}": [
            ["style", "top", '414px'],
            ["style", "opacity", '0'],
            ["style", "left", '-192px']
         ],
         "${__4x_b}": [
            ["style", "left", '288px'],
            ["style", "top", '-2px']
         ],
         "${__4X}": [
            ["style", "top", '1073px'],
            ["style", "opacity", '1'],
            ["style", "left", '882px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 22500,
         autoPlay: true,
         timeline: [
            { id: "eid1079", tween: [ "style", "${_big_ico}", "left", '608px', { fromValue: '608px'}], position: 13000, duration: 0, easing: "easeInOutExpo" },
            { id: "eid277", tween: [ "style", "${_box_b_2}", "opacity", '1', { fromValue: '0'}], position: 459, duration: 300 },
            { id: "eid317", tween: [ "style", "${_box_b_2}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid531", tween: [ "style", "${_box_b_2}", "opacity", '0', { fromValue: '1'}], position: 1459, duration: 300 },
            { id: "eid970", tween: [ "style", "${_box_b_2}", "opacity", '1', { fromValue: '0'}], position: 2459, duration: 300 },
            { id: "eid971", tween: [ "style", "${_box_b_2}", "opacity", '1', { fromValue: '1'}], position: 3000, duration: 0 },
            { id: "eid972", tween: [ "style", "${_box_b_2}", "opacity", '0', { fromValue: '1'}], position: 3459, duration: 300 },
            { id: "eid980", tween: [ "style", "${_box_b_2}", "opacity", '1', { fromValue: '0'}], position: 4459, duration: 300 },
            { id: "eid981", tween: [ "style", "${_box_b_2}", "opacity", '1', { fromValue: '1'}], position: 5000, duration: 0 },
            { id: "eid982", tween: [ "style", "${_box_b_2}", "opacity", '0', { fromValue: '1'}], position: 5459, duration: 300 },
            { id: "eid1146", tween: [ "style", "${_box_b_2}", "opacity", '1', { fromValue: '0'}], position: 20459, duration: 300 },
            { id: "eid1166", tween: [ "style", "${_box_b_2}", "opacity", '1', { fromValue: '1'}], position: 21000, duration: 0 },
            { id: "eid1103", tween: [ "style", "${_medium}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1078", tween: [ "style", "${_medium}", "display", 'none', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid762", tween: [ "style", "${_medium}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid1077", tween: [ "style", "${_medium}", "display", 'block', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid1102", tween: [ "style", "${_medium}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
            { id: "eid474", tween: [ "style", "${_cursor}", "left", '740px', { fromValue: '883px'}], position: 3000, duration: 1000, easing: "easeInOutExpo" },
            { id: "eid507", tween: [ "style", "${_cursor}", "left", '598px', { fromValue: '883px'}], position: 5000, duration: 1000, easing: "easeInOutExpo" },
            { id: "eid1099", tween: [ "style", "${_cursor}", "left", '740px', { fromValue: '740px'}], position: 7000, duration: 0, easing: "easeInOutExpo" },
            { id: "eid1108", tween: [ "style", "${_cursor}", "left", '883px', { fromValue: '740px'}], position: 8000, duration: 1000, easing: "easeInOutExpo" },
            { id: "eid1140", tween: [ "style", "${_cursor}", "left", '740px', { fromValue: '740px'}], position: 10000, duration: 0, easing: "easeInOutExpo" },
            { id: "eid1106", tween: [ "style", "${_cursor}", "left", '598px', { fromValue: '740px'}], position: 12000, duration: 1000, easing: "easeInOutExpo" },
            { id: "eid1127", tween: [ "style", "${_cursor}", "left", '883px', { fromValue: '598px'}], position: 15000, duration: 1000, easing: "easeInOutExpo" },
            { id: "eid1125", tween: [ "style", "${_cursor}", "left", '740px', { fromValue: '598px'}], position: 17000, duration: 1000, easing: "easeInOutExpo" },
            { id: "eid1143", tween: [ "style", "${_cursor}", "left", '598px', { fromValue: '598px'}], position: 18995, duration: 0, easing: "easeInOutExpo" },
            { id: "eid1175", tween: [ "style", "${_cursor}", "left", '883px', { fromValue: '598px'}], position: 20000, duration: 0, easing: "easeInOutExpo" },
            { id: "eid1110", tween: [ "style", "${_box_s_1}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 300 },
            { id: "eid1114", tween: [ "style", "${_box_s_1}", "opacity", '0', { fromValue: '1'}], position: 15000, duration: 300 },
            { id: "eid1118", tween: [ "style", "${_box_s_1}", "opacity", '1', { fromValue: '0'}], position: 15995, duration: 300 },
            { id: "eid1119", tween: [ "style", "${_box_s_1}", "opacity", '0', { fromValue: '1'}], position: 16995, duration: 300 },
            { id: "eid1122", tween: [ "style", "${_box_s_1}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 300 },
            { id: "eid1123", tween: [ "style", "${_box_s_1}", "opacity", '0', { fromValue: '1'}], position: 19000, duration: 300 },
            { id: "eid272", tween: [ "style", "${_box_b_4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 300 },
            { id: "eid529", tween: [ "style", "${_box_b_4}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 300 },
            { id: "eid976", tween: [ "style", "${_box_b_4}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 300 },
            { id: "eid977", tween: [ "style", "${_box_b_4}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 300 },
            { id: "eid986", tween: [ "style", "${_box_b_4}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 300 },
            { id: "eid987", tween: [ "style", "${_box_b_4}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 300 },
            { id: "eid1152", tween: [ "style", "${_box_b_4}", "opacity", '1', { fromValue: '0'}], position: 20000, duration: 300 },
            { id: "eid1082", tween: [ "style", "${_box_m_7}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 300 },
            { id: "eid1003", tween: [ "style", "${_box_m_7}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 300 },
            { id: "eid1004", tween: [ "style", "${_box_m_7}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 300 },
            { id: "eid1029", tween: [ "style", "${_box_m_7}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 300 },
            { id: "eid1030", tween: [ "style", "${_box_m_7}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 300 },
            { id: "eid1055", tween: [ "style", "${_box_m_7}", "opacity", '1', { fromValue: '0'}], position: 11005, duration: 300 },
            { id: "eid1056", tween: [ "style", "${_box_m_7}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 300 },
            { id: "eid274", tween: [ "style", "${_box_b_3}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 300 },
            { id: "eid532", tween: [ "style", "${_box_b_3}", "opacity", '0', { fromValue: '1'}], position: 1700, duration: 300 },
            { id: "eid968", tween: [ "style", "${_box_b_3}", "opacity", '1', { fromValue: '0'}], position: 2700, duration: 300 },
            { id: "eid969", tween: [ "style", "${_box_b_3}", "opacity", '0', { fromValue: '1'}], position: 3700, duration: 300 },
            { id: "eid978", tween: [ "style", "${_box_b_3}", "opacity", '1', { fromValue: '0'}], position: 4700, duration: 300 },
            { id: "eid979", tween: [ "style", "${_box_b_3}", "opacity", '0', { fromValue: '1'}], position: 5700, duration: 300 },
            { id: "eid1144", tween: [ "style", "${_box_b_3}", "opacity", '1', { fromValue: '0'}], position: 20700, duration: 300 },
            { id: "eid228", tween: [ "style", "${_box_s_15}", "opacity", '1', { fromValue: '0'}], position: 14375, duration: 300 },
            { id: "eid850", tween: [ "style", "${_box_s_15}", "opacity", '0', { fromValue: '1'}], position: 15375, duration: 300 },
            { id: "eid867", tween: [ "style", "${_box_s_15}", "opacity", '1', { fromValue: '0'}], position: 16370, duration: 300 },
            { id: "eid853", tween: [ "style", "${_box_s_15}", "opacity", '0', { fromValue: '1'}], position: 17380, duration: 300 },
            { id: "eid911", tween: [ "style", "${_box_s_15}", "opacity", '1', { fromValue: '0'}], position: 18375, duration: 300 },
            { id: "eid912", tween: [ "style", "${_box_s_15}", "opacity", '0', { fromValue: '1'}], position: 19385, duration: 300 },
            { id: "eid226", tween: [ "style", "${_box_s_13}", "opacity", '1', { fromValue: '0'}], position: 14750, duration: 250 },
            { id: "eid848", tween: [ "style", "${_box_s_13}", "opacity", '0', { fromValue: '1'}], position: 15750, duration: 250 },
            { id: "eid869", tween: [ "style", "${_box_s_13}", "opacity", '1', { fromValue: '0'}], position: 16745, duration: 250 },
            { id: "eid855", tween: [ "style", "${_box_s_13}", "opacity", '0', { fromValue: '1'}], position: 17755, duration: 250 },
            { id: "eid915", tween: [ "style", "${_box_s_13}", "opacity", '1', { fromValue: '0'}], position: 18750, duration: 250 },
            { id: "eid916", tween: [ "style", "${_box_s_13}", "opacity", '0', { fromValue: '1'}], position: 19760, duration: 250 },
            { id: "eid1222", tween: [ "style", "${__8X}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 1000 },
            { id: "eid1221", tween: [ "style", "${__8X}", "opacity", '0', { fromValue: '1'}], position: 4224, duration: 0 },
            { id: "eid1213", tween: [ "style", "${__8X}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 1000 },
            { id: "eid1226", tween: [ "style", "${__8X}", "opacity", '0', { fromValue: '0'}], position: 8096, duration: 0 },
            { id: "eid1228", tween: [ "style", "${__8X}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 1000 },
            { id: "eid1227", tween: [ "style", "${__8X}", "opacity", '0', { fromValue: '1'}], position: 11200, duration: 0 },
            { id: "eid1224", tween: [ "style", "${__8X}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 1000 },
            { id: "eid1223", tween: [ "style", "${__8X}", "opacity", '0', { fromValue: '1'}], position: 18224, duration: 0 },
            { id: "eid1132", tween: [ "style", "${_medium_ico}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid1131", tween: [ "style", "${_medium_ico}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
            { id: "eid1205", tween: [ "style", "${__16X}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 1000 },
            { id: "eid1206", tween: [ "style", "${__16X}", "opacity", '0', { fromValue: '1'}], position: 6224, duration: 0 },
            { id: "eid1207", tween: [ "style", "${__16X}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 1000 },
            { id: "eid1208", tween: [ "style", "${__16X}", "opacity", '0', { fromValue: '1'}], position: 13224, duration: 0 },
            { id: "eid1212", tween: [ "style", "${__16X}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 1000 },
            { id: "eid1209", tween: [ "style", "${__16X}", "opacity", '1', { fromValue: '0'}], position: 18995, duration: 1000 },
            { id: "eid1210", tween: [ "style", "${__16X}", "opacity", '0', { fromValue: '1'}], position: 20219, duration: 0 },
            { id: "eid1089", tween: [ "style", "${_box_m_1}", "opacity", '0', { fromValue: '1'}], position: 6700, duration: 300 },
            { id: "eid1022", tween: [ "style", "${_box_m_1}", "opacity", '1', { fromValue: '0'}], position: 7700, duration: 5 },
            { id: "eid1023", tween: [ "style", "${_box_m_1}", "opacity", '1', { fromValue: '0'}], position: 7705, duration: 300 },
            { id: "eid1024", tween: [ "style", "${_box_m_1}", "opacity", '0', { fromValue: '1'}], position: 8700, duration: 300 },
            { id: "eid1048", tween: [ "style", "${_box_m_1}", "opacity", '1', { fromValue: '0'}], position: 9700, duration: 5 },
            { id: "eid1049", tween: [ "style", "${_box_m_1}", "opacity", '1', { fromValue: '0'}], position: 9705, duration: 300 },
            { id: "eid1050", tween: [ "style", "${_box_m_1}", "opacity", '0', { fromValue: '1'}], position: 10700, duration: 300 },
            { id: "eid1074", tween: [ "style", "${_box_m_1}", "opacity", '1', { fromValue: '0'}], position: 11700, duration: 5 },
            { id: "eid1075", tween: [ "style", "${_box_m_1}", "opacity", '1', { fromValue: '0'}], position: 11705, duration: 300 },
            { id: "eid1076", tween: [ "style", "${_box_m_1}", "opacity", '0', { fromValue: '1'}], position: 12700, duration: 300 },
            { id: "eid273", tween: [ "style", "${_box_b_1}", "opacity", '1', { fromValue: '0'}], position: 224, duration: 300 },
            { id: "eid318", tween: [ "style", "${_box_b_1}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid530", tween: [ "style", "${_box_b_1}", "opacity", '0', { fromValue: '1'}], position: 1224, duration: 300 },
            { id: "eid973", tween: [ "style", "${_box_b_1}", "opacity", '1', { fromValue: '0'}], position: 2224, duration: 300 },
            { id: "eid974", tween: [ "style", "${_box_b_1}", "opacity", '1', { fromValue: '1'}], position: 3000, duration: 0 },
            { id: "eid975", tween: [ "style", "${_box_b_1}", "opacity", '0', { fromValue: '1'}], position: 3224, duration: 300 },
            { id: "eid983", tween: [ "style", "${_box_b_1}", "opacity", '1', { fromValue: '0'}], position: 4224, duration: 300 },
            { id: "eid984", tween: [ "style", "${_box_b_1}", "opacity", '1', { fromValue: '1'}], position: 5000, duration: 0 },
            { id: "eid985", tween: [ "style", "${_box_b_1}", "opacity", '0', { fromValue: '1'}], position: 5224, duration: 300 },
            { id: "eid1149", tween: [ "style", "${_box_b_1}", "opacity", '1', { fromValue: '0'}], position: 20224, duration: 300 },
            { id: "eid1150", tween: [ "style", "${_box_b_1}", "opacity", '1', { fromValue: '1'}], position: 21000, duration: 0 },
            { id: "eid205", tween: [ "style", "${_box_s_3}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 300 },
            { id: "eid838", tween: [ "style", "${_box_s_3}", "opacity", '0', { fromValue: '1'}], position: 15000, duration: 300 },
            { id: "eid879", tween: [ "style", "${_box_s_3}", "opacity", '1', { fromValue: '0'}], position: 15995, duration: 300 },
            { id: "eid880", tween: [ "style", "${_box_s_3}", "opacity", '0', { fromValue: '1'}], position: 16995, duration: 300 },
            { id: "eid865", tween: [ "style", "${_box_s_3}", "opacity", '0', { fromValue: '1'}], position: 17295, duration: 10 },
            { id: "eid935", tween: [ "style", "${_box_s_3}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 300 },
            { id: "eid936", tween: [ "style", "${_box_s_3}", "opacity", '0', { fromValue: '1'}], position: 19000, duration: 300 },
            { id: "eid937", tween: [ "style", "${_box_s_3}", "opacity", '0', { fromValue: '1'}], position: 19300, duration: 10 },
            { id: "eid1377", tween: [ "style", "${_Booknow-Big}", "display", 'block', { fromValue: 'none'}], position: 759, duration: 0 },
            { id: "eid1378", tween: [ "style", "${_Booknow-Big}", "display", 'none', { fromValue: 'block'}], position: 1009, duration: 0 },
            { id: "eid1379", tween: [ "style", "${_Booknow-Big}", "display", 'block', { fromValue: 'none'}], position: 22250, duration: 0 },
            { id: "eid1380", tween: [ "style", "${_Booknow-Big}", "display", 'none', { fromValue: 'block'}], position: 22500, duration: 0 },
            { id: "eid1091", tween: [ "style", "${_small_ico}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
            { id: "eid724", tween: [ "style", "${_small_ico}", "display", 'none', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid1177", tween: [ "style", "${_small_ico}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0, easing: "easeInOutExpo" },
            { id: "eid1111", tween: [ "style", "${_box_s_2}", "opacity", '1', { fromValue: '0'}], position: 14125, duration: 296 },
            { id: "eid1115", tween: [ "style", "${_box_s_2}", "opacity", '0', { fromValue: '1'}], position: 15125, duration: 296 },
            { id: "eid1116", tween: [ "style", "${_box_s_2}", "opacity", '1', { fromValue: '0'}], position: 16120, duration: 296 },
            { id: "eid1117", tween: [ "style", "${_box_s_2}", "opacity", '0', { fromValue: '1'}], position: 17120, duration: 296 },
            { id: "eid1120", tween: [ "style", "${_box_s_2}", "opacity", '1', { fromValue: '0'}], position: 18125, duration: 296 },
            { id: "eid1121", tween: [ "style", "${_box_s_2}", "opacity", '0', { fromValue: '1'}], position: 19125, duration: 296 },
            { id: "eid1174", tween: [ "style", "${_share}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid1083", tween: [ "style", "${_box_m_6}", "opacity", '0', { fromValue: '1'}], position: 6200, duration: 300 },
            { id: "eid1005", tween: [ "style", "${_box_m_6}", "opacity", '1', { fromValue: '0'}], position: 7200, duration: 5 },
            { id: "eid1006", tween: [ "style", "${_box_m_6}", "opacity", '1', { fromValue: '0'}], position: 7205, duration: 300 },
            { id: "eid1007", tween: [ "style", "${_box_m_6}", "opacity", '0', { fromValue: '1'}], position: 8200, duration: 300 },
            { id: "eid1031", tween: [ "style", "${_box_m_6}", "opacity", '1', { fromValue: '0'}], position: 9200, duration: 5 },
            { id: "eid1032", tween: [ "style", "${_box_m_6}", "opacity", '1', { fromValue: '0'}], position: 9205, duration: 300 },
            { id: "eid1033", tween: [ "style", "${_box_m_6}", "opacity", '0', { fromValue: '1'}], position: 10200, duration: 300 },
            { id: "eid1057", tween: [ "style", "${_box_m_6}", "opacity", '1', { fromValue: '0'}], position: 11200, duration: 5 },
            { id: "eid1058", tween: [ "style", "${_box_m_6}", "opacity", '1', { fromValue: '0'}], position: 11205, duration: 300 },
            { id: "eid1059", tween: [ "style", "${_box_m_6}", "opacity", '0', { fromValue: '1'}], position: 12200, duration: 300 },
            { id: "eid1130", tween: [ "style", "${_big_ico}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid1178", tween: [ "style", "${_big_ico}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0, easing: "easeInOutExpo" },
            { id: "eid206", tween: [ "style", "${_box_s_4}", "opacity", '1', { fromValue: '0'}], position: 14870, duration: 125 },
            { id: "eid839", tween: [ "style", "${_box_s_4}", "opacity", '0', { fromValue: '1'}], position: 15870, duration: 125 },
            { id: "eid878", tween: [ "style", "${_box_s_4}", "opacity", '1', { fromValue: '0'}], position: 16865, duration: 125 },
            { id: "eid864", tween: [ "style", "${_box_s_4}", "opacity", '0', { fromValue: '1'}], position: 17875, duration: 125 },
            { id: "eid933", tween: [ "style", "${_box_s_4}", "opacity", '1', { fromValue: '0'}], position: 18870, duration: 125 },
            { id: "eid934", tween: [ "style", "${_box_s_4}", "opacity", '0', { fromValue: '1'}], position: 19880, duration: 125 },
            { id: "eid1195", tween: [ "style", "${__4X}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000 },
            { id: "eid1196", tween: [ "style", "${__4X}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 },
            { id: "eid1201", tween: [ "style", "${__4X}", "opacity", '0', { fromValue: '1'}], position: 2224, duration: 0 },
            { id: "eid1199", tween: [ "style", "${__4X}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 1000 },
            { id: "eid1203", tween: [ "style", "${__4X}", "opacity", '0', { fromValue: '1'}], position: 9200, duration: 0 },
            { id: "eid1200", tween: [ "style", "${__4X}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 995 },
            { id: "eid1204", tween: [ "style", "${__4X}", "opacity", '0', { fromValue: '1'}], position: 16245, duration: 0 },
            { id: "eid216", tween: [ "style", "${_box_s_7}", "opacity", '1', { fromValue: '0'}], position: 14500, duration: 294 },
            { id: "eid842", tween: [ "style", "${_box_s_7}", "opacity", '0', { fromValue: '1'}], position: 15500, duration: 294 },
            { id: "eid875", tween: [ "style", "${_box_s_7}", "opacity", '1', { fromValue: '0'}], position: 16495, duration: 294 },
            { id: "eid861", tween: [ "style", "${_box_s_7}", "opacity", '0', { fromValue: '1'}], position: 17505, duration: 294 },
            { id: "eid927", tween: [ "style", "${_box_s_7}", "opacity", '1', { fromValue: '0'}], position: 18500, duration: 294 },
            { id: "eid928", tween: [ "style", "${_box_s_7}", "opacity", '0', { fromValue: '1'}], position: 19510, duration: 294 },
            { id: "eid229", tween: [ "style", "${_box_s_16}", "opacity", '1', { fromValue: '0'}], position: 14625, duration: 300 },
            { id: "eid851", tween: [ "style", "${_box_s_16}", "opacity", '0', { fromValue: '1'}], position: 15625, duration: 300 },
            { id: "eid866", tween: [ "style", "${_box_s_16}", "opacity", '1', { fromValue: '0'}], position: 16620, duration: 300 },
            { id: "eid852", tween: [ "style", "${_box_s_16}", "opacity", '0', { fromValue: '1'}], position: 17630, duration: 300 },
            { id: "eid909", tween: [ "style", "${_box_s_16}", "opacity", '1', { fromValue: '0'}], position: 18625, duration: 300 },
            { id: "eid910", tween: [ "style", "${_box_s_16}", "opacity", '0', { fromValue: '1'}], position: 19635, duration: 300 },
            { id: "eid227", tween: [ "style", "${_box_s_14}", "opacity", '1', { fromValue: '0'}], position: 14875, duration: 125 },
            { id: "eid849", tween: [ "style", "${_box_s_14}", "opacity", '0', { fromValue: '1'}], position: 15875, duration: 125 },
            { id: "eid868", tween: [ "style", "${_box_s_14}", "opacity", '1', { fromValue: '0'}], position: 16870, duration: 125 },
            { id: "eid854", tween: [ "style", "${_box_s_14}", "opacity", '0', { fromValue: '1'}], position: 17880, duration: 125 },
            { id: "eid913", tween: [ "style", "${_box_s_14}", "opacity", '1', { fromValue: '0'}], position: 18875, duration: 125 },
            { id: "eid914", tween: [ "style", "${_box_s_14}", "opacity", '0', { fromValue: '1'}], position: 19885, duration: 125 },
            { id: "eid217", tween: [ "style", "${_box_s_8}", "opacity", '1', { fromValue: '0'}], position: 14250, duration: 300 },
            { id: "eid843", tween: [ "style", "${_box_s_8}", "opacity", '0', { fromValue: '1'}], position: 15250, duration: 300 },
            { id: "eid874", tween: [ "style", "${_box_s_8}", "opacity", '1', { fromValue: '0'}], position: 16245, duration: 300 },
            { id: "eid860", tween: [ "style", "${_box_s_8}", "opacity", '0', { fromValue: '1'}], position: 17255, duration: 300 },
            { id: "eid925", tween: [ "style", "${_box_s_8}", "opacity", '1', { fromValue: '0'}], position: 18250, duration: 300 },
            { id: "eid926", tween: [ "style", "${_box_s_8}", "opacity", '0', { fromValue: '1'}], position: 19260, duration: 300 },
            { id: "eid1086", tween: [ "style", "${_box_m_4}", "opacity", '0', { fromValue: '1'}], position: 6396, duration: 300 },
            { id: "eid1013", tween: [ "style", "${_box_m_4}", "opacity", '1', { fromValue: '0'}], position: 7396, duration: 5 },
            { id: "eid1014", tween: [ "style", "${_box_m_4}", "opacity", '1', { fromValue: '0'}], position: 7401, duration: 300 },
            { id: "eid1015", tween: [ "style", "${_box_m_4}", "opacity", '0', { fromValue: '1'}], position: 8396, duration: 300 },
            { id: "eid1039", tween: [ "style", "${_box_m_4}", "opacity", '1', { fromValue: '0'}], position: 9396, duration: 5 },
            { id: "eid1040", tween: [ "style", "${_box_m_4}", "opacity", '1', { fromValue: '0'}], position: 9401, duration: 300 },
            { id: "eid1041", tween: [ "style", "${_box_m_4}", "opacity", '0', { fromValue: '1'}], position: 10396, duration: 300 },
            { id: "eid1065", tween: [ "style", "${_box_m_4}", "opacity", '1', { fromValue: '0'}], position: 11396, duration: 5 },
            { id: "eid1066", tween: [ "style", "${_box_m_4}", "opacity", '1', { fromValue: '0'}], position: 11401, duration: 300 },
            { id: "eid1067", tween: [ "style", "${_box_m_4}", "opacity", '0', { fromValue: '1'}], position: 12396, duration: 300 },
            { id: "eid221", tween: [ "style", "${_box_s_12}", "opacity", '1', { fromValue: '0'}], position: 14375, duration: 300 },
            { id: "eid847", tween: [ "style", "${_box_s_12}", "opacity", '0', { fromValue: '1'}], position: 15375, duration: 300 },
            { id: "eid870", tween: [ "style", "${_box_s_12}", "opacity", '1', { fromValue: '0'}], position: 16370, duration: 300 },
            { id: "eid856", tween: [ "style", "${_box_s_12}", "opacity", '0', { fromValue: '1'}], position: 17380, duration: 300 },
            { id: "eid917", tween: [ "style", "${_box_s_12}", "opacity", '1', { fromValue: '0'}], position: 18375, duration: 300 },
            { id: "eid918", tween: [ "style", "${_box_s_12}", "opacity", '0', { fromValue: '1'}], position: 19385, duration: 300 },
            { id: "eid1105", tween: [ "style", "${_small}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid801", tween: [ "style", "${_small}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid764", tween: [ "style", "${_small}", "display", 'none', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1104", tween: [ "style", "${_small}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid1165", tween: [ "style", "${_small}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
            { id: "eid1084", tween: [ "style", "${_box_m_5}", "opacity", '0.98', { fromValue: '1'}], position: 6300, duration: 16 },
            { id: "eid1085", tween: [ "style", "${_box_m_5}", "opacity", '0', { fromValue: '0.98'}], position: 6316, duration: 284 },
            { id: "eid1008", tween: [ "style", "${_box_m_5}", "opacity", '0.98', { fromValue: '0'}], position: 7300, duration: 5 },
            { id: "eid1009", tween: [ "style", "${_box_m_5}", "opacity", '0.98', { fromValue: '0'}], position: 7305, duration: 284 },
            { id: "eid1010", tween: [ "style", "${_box_m_5}", "opacity", '1', { fromValue: '0.98'}], position: 7589, duration: 16 },
            { id: "eid1011", tween: [ "style", "${_box_m_5}", "opacity", '0.98', { fromValue: '1'}], position: 8300, duration: 16 },
            { id: "eid1012", tween: [ "style", "${_box_m_5}", "opacity", '0', { fromValue: '0.98'}], position: 8316, duration: 284 },
            { id: "eid1034", tween: [ "style", "${_box_m_5}", "opacity", '0.98', { fromValue: '0'}], position: 9300, duration: 5 },
            { id: "eid1035", tween: [ "style", "${_box_m_5}", "opacity", '0.98', { fromValue: '0'}], position: 9305, duration: 284 },
            { id: "eid1036", tween: [ "style", "${_box_m_5}", "opacity", '1', { fromValue: '0.98'}], position: 9589, duration: 16 },
            { id: "eid1037", tween: [ "style", "${_box_m_5}", "opacity", '0.98', { fromValue: '1'}], position: 10300, duration: 16 },
            { id: "eid1038", tween: [ "style", "${_box_m_5}", "opacity", '0', { fromValue: '0.98'}], position: 10316, duration: 284 },
            { id: "eid1060", tween: [ "style", "${_box_m_5}", "opacity", '0.98', { fromValue: '0'}], position: 11300, duration: 5 },
            { id: "eid1061", tween: [ "style", "${_box_m_5}", "opacity", '0.98', { fromValue: '0'}], position: 11305, duration: 284 },
            { id: "eid1062", tween: [ "style", "${_box_m_5}", "opacity", '1', { fromValue: '0.98'}], position: 11589, duration: 16 },
            { id: "eid1063", tween: [ "style", "${_box_m_5}", "opacity", '0.98', { fromValue: '1'}], position: 12300, duration: 16 },
            { id: "eid1064", tween: [ "style", "${_box_m_5}", "opacity", '0', { fromValue: '0.98'}], position: 12316, duration: 284 },
            { id: "eid1185", tween: [ "style", "${_Booknow-Small}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0 },
            { id: "eid1186", tween: [ "style", "${_Booknow-Small}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid207", tween: [ "style", "${_box_s_5}", "opacity", '1', { fromValue: '0'}], position: 14506, duration: 294 },
            { id: "eid840", tween: [ "style", "${_box_s_5}", "opacity", '0', { fromValue: '1'}], position: 15506, duration: 294 },
            { id: "eid877", tween: [ "style", "${_box_s_5}", "opacity", '1', { fromValue: '0'}], position: 16501, duration: 294 },
            { id: "eid863", tween: [ "style", "${_box_s_5}", "opacity", '0', { fromValue: '1'}], position: 17511, duration: 294 },
            { id: "eid931", tween: [ "style", "${_box_s_5}", "opacity", '1', { fromValue: '0'}], position: 18506, duration: 294 },
            { id: "eid932", tween: [ "style", "${_box_s_5}", "opacity", '0', { fromValue: '1'}], position: 19516, duration: 294 },
            { id: "eid1172", tween: [ "style", "${_share}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 500 },
            { id: "eid1173", tween: [ "style", "${_share}", "opacity", '0', { fromValue: '1'}], position: 21500, duration: 500 },
            { id: "eid215", tween: [ "style", "${_box_s_6}", "opacity", '1', { fromValue: '0'}], position: 14750, duration: 250 },
            { id: "eid841", tween: [ "style", "${_box_s_6}", "opacity", '0', { fromValue: '1'}], position: 15750, duration: 250 },
            { id: "eid876", tween: [ "style", "${_box_s_6}", "opacity", '1', { fromValue: '0'}], position: 16745, duration: 250 },
            { id: "eid862", tween: [ "style", "${_box_s_6}", "opacity", '0', { fromValue: '1'}], position: 17755, duration: 250 },
            { id: "eid929", tween: [ "style", "${_box_s_6}", "opacity", '1', { fromValue: '0'}], position: 18750, duration: 250 },
            { id: "eid930", tween: [ "style", "${_box_s_6}", "opacity", '0', { fromValue: '1'}], position: 19760, duration: 250 },
            { id: "eid220", tween: [ "style", "${_box_s_11}", "opacity", '1', { fromValue: '0'}], position: 14250, duration: 300 },
            { id: "eid846", tween: [ "style", "${_box_s_11}", "opacity", '0', { fromValue: '1'}], position: 15250, duration: 300 },
            { id: "eid871", tween: [ "style", "${_box_s_11}", "opacity", '1', { fromValue: '0'}], position: 16245, duration: 300 },
            { id: "eid857", tween: [ "style", "${_box_s_11}", "opacity", '0', { fromValue: '1'}], position: 17255, duration: 300 },
            { id: "eid919", tween: [ "style", "${_box_s_11}", "opacity", '1', { fromValue: '0'}], position: 18250, duration: 300 },
            { id: "eid920", tween: [ "style", "${_box_s_11}", "opacity", '0', { fromValue: '1'}], position: 19260, duration: 300 },
            { id: "eid219", tween: [ "style", "${_box_s_10}", "opacity", '1', { fromValue: '0'}], position: 14125, duration: 296 },
            { id: "eid845", tween: [ "style", "${_box_s_10}", "opacity", '0', { fromValue: '1'}], position: 15125, duration: 296 },
            { id: "eid872", tween: [ "style", "${_box_s_10}", "opacity", '1', { fromValue: '0'}], position: 16120, duration: 296 },
            { id: "eid858", tween: [ "style", "${_box_s_10}", "opacity", '0', { fromValue: '1'}], position: 17130, duration: 296 },
            { id: "eid921", tween: [ "style", "${_box_s_10}", "opacity", '1', { fromValue: '0'}], position: 18125, duration: 296 },
            { id: "eid922", tween: [ "style", "${_box_s_10}", "opacity", '0', { fromValue: '1'}], position: 19135, duration: 296 },
            { id: "eid218", tween: [ "style", "${_box_s_9}", "opacity", '1', { fromValue: '0'}], position: 14625, duration: 300 },
            { id: "eid844", tween: [ "style", "${_box_s_9}", "opacity", '0', { fromValue: '1'}], position: 15625, duration: 300 },
            { id: "eid873", tween: [ "style", "${_box_s_9}", "opacity", '1', { fromValue: '0'}], position: 16620, duration: 300 },
            { id: "eid859", tween: [ "style", "${_box_s_9}", "opacity", '0', { fromValue: '1'}], position: 17630, duration: 300 },
            { id: "eid923", tween: [ "style", "${_box_s_9}", "opacity", '1', { fromValue: '0'}], position: 18625, duration: 300 },
            { id: "eid924", tween: [ "style", "${_box_s_9}", "opacity", '0', { fromValue: '1'}], position: 19635, duration: 300 },
            { id: "eid1080", tween: [ "style", "${_big_ico}", "top", '1188px', { fromValue: '1188px'}], position: 13000, duration: 0, easing: "easeInOutExpo" },
            { id: "eid1087", tween: [ "style", "${_box_m_3}", "opacity", '0', { fromValue: '1'}], position: 6600, duration: 300 },
            { id: "eid1016", tween: [ "style", "${_box_m_3}", "opacity", '1', { fromValue: '0'}], position: 7600, duration: 5 },
            { id: "eid1017", tween: [ "style", "${_box_m_3}", "opacity", '1', { fromValue: '0'}], position: 7605, duration: 300 },
            { id: "eid1018", tween: [ "style", "${_box_m_3}", "opacity", '0', { fromValue: '1'}], position: 8600, duration: 300 },
            { id: "eid1042", tween: [ "style", "${_box_m_3}", "opacity", '1', { fromValue: '0'}], position: 9600, duration: 5 },
            { id: "eid1043", tween: [ "style", "${_box_m_3}", "opacity", '1', { fromValue: '0'}], position: 9605, duration: 300 },
            { id: "eid1044", tween: [ "style", "${_box_m_3}", "opacity", '0', { fromValue: '1'}], position: 10600, duration: 300 },
            { id: "eid1068", tween: [ "style", "${_box_m_3}", "opacity", '1', { fromValue: '0'}], position: 11600, duration: 5 },
            { id: "eid1069", tween: [ "style", "${_box_m_3}", "opacity", '1', { fromValue: '0'}], position: 11605, duration: 300 },
            { id: "eid1070", tween: [ "style", "${_box_m_3}", "opacity", '0', { fromValue: '1'}], position: 12600, duration: 300 },
            { id: "eid1183", tween: [ "style", "${_Booknow-Big2}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
            { id: "eid1184", tween: [ "style", "${_Booknow-Big2}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid1273", tween: [ "style", "${_big}", "top", '-2px', { fromValue: '-2px'}], position: 0, duration: 0 },
            { id: "eid998", tween: [ "style", "${_big}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
            { id: "eid761", tween: [ "style", "${_big}", "display", 'none', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid1164", tween: [ "style", "${_big}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
            { id: "eid1088", tween: [ "style", "${_box_m_2}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 300 },
            { id: "eid1019", tween: [ "style", "${_box_m_2}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 5 },
            { id: "eid1020", tween: [ "style", "${_box_m_2}", "opacity", '1', { fromValue: '0'}], position: 7505, duration: 300 },
            { id: "eid1021", tween: [ "style", "${_box_m_2}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 300 },
            { id: "eid1045", tween: [ "style", "${_box_m_2}", "opacity", '1', { fromValue: '0'}], position: 9500, duration: 5 },
            { id: "eid1046", tween: [ "style", "${_box_m_2}", "opacity", '1', { fromValue: '0'}], position: 9505, duration: 300 },
            { id: "eid1047", tween: [ "style", "${_box_m_2}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 300 },
            { id: "eid1071", tween: [ "style", "${_box_m_2}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 5 },
            { id: "eid1072", tween: [ "style", "${_box_m_2}", "opacity", '1', { fromValue: '0'}], position: 11505, duration: 300 },
            { id: "eid1073", tween: [ "style", "${_box_m_2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 300 },
            { id: "eid1081", tween: [ "style", "${_box_m_8}", "opacity", '0', { fromValue: '1'}], position: 6096, duration: 300 },
            { id: "eid999", tween: [ "style", "${_box_m_8}", "opacity", '0', { fromValue: '1'}], position: 7096, duration: 5 },
            { id: "eid1000", tween: [ "style", "${_box_m_8}", "opacity", '1', { fromValue: '0'}], position: 7101, duration: 300 },
            { id: "eid1001", tween: [ "style", "${_box_m_8}", "opacity", '0', { fromValue: '1'}], position: 8096, duration: 300 },
            { id: "eid1025", tween: [ "style", "${_box_m_8}", "opacity", '0', { fromValue: '1'}], position: 9096, duration: 5 },
            { id: "eid1026", tween: [ "style", "${_box_m_8}", "opacity", '1', { fromValue: '0'}], position: 9101, duration: 300 },
            { id: "eid1027", tween: [ "style", "${_box_m_8}", "opacity", '0', { fromValue: '1'}], position: 10096, duration: 300 },
            { id: "eid1051", tween: [ "style", "${_box_m_8}", "opacity", '0', { fromValue: '1'}], position: 11096, duration: 5 },
            { id: "eid1052", tween: [ "style", "${_box_m_8}", "opacity", '1', { fromValue: '0'}], position: 11101, duration: 300 },
            { id: "eid1053", tween: [ "style", "${_box_m_8}", "opacity", '0', { fromValue: '1'}], position: 12096, duration: 300 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "marriott-los-angeles");
