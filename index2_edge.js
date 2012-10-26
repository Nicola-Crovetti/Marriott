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
            id:'homebox',
            type:'group',
            rect:['0','0','1536','1257','auto','auto'],
            c:[
            {
               id:'box_b_4',
               type:'image',
               rect:['768px','629px','768px','628px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"homebox2/box4.png",'0px','0px']
            },
            {
               id:'box_b_1',
               type:'image',
               rect:['0px','0px','767px','628px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"homebox2/box1.png",'0px','0px']
            },
            {
               id:'box_b_2',
               type:'image',
               rect:['768px','0px','768px','628px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"homebox2/box2.png",'0px','0px']
            },
            {
               id:'box_b_3',
               type:'image',
               rect:['0px','629px','767px','628px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"homebox2/box3.png",'0px','0px']
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_box_b_4}": [
            ["style", "top", '629px'],
            ["style", "opacity", '0'],
            ["style", "left", '768px']
         ],
         "${_box_b_1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_box_b_3}": [
            ["style", "top", '629px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1257px'],
            ["style", "width", '1536px']
         ],
         "${_box_b_2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '768px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid31", tween: [ "style", "${_box_b_3}", "opacity", '1', { fromValue: '0'}], position: 375, duration: 125 },
            { id: "eid50", tween: [ "style", "${_box_b_3}", "opacity", '0', { fromValue: '1'}], position: 875, duration: 125 },
            { id: "eid11", tween: [ "style", "${_box_b_1}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 120 },
            { id: "eid23", tween: [ "style", "${_box_b_1}", "opacity", '0', { fromValue: '1'}], position: 625, duration: 125 },
            { id: "eid12", tween: [ "style", "${_box_b_2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 125 },
            { id: "eid47", tween: [ "style", "${_box_b_2}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 125 },
            { id: "eid9", tween: [ "style", "${_box_b_4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
            { id: "eid20", tween: [ "style", "${_box_b_4}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 125 }         ]
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
})(jQuery, AdobeEdge, "marriott-index");
