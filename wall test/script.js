var wallcontroller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement: "#blockhidden",
    duration: 1000
  }).setTween("#wallbg", 1, {
    opacity: "1"
  })
  .addTo(wallcontroller)
;
  
var scene2 = new ScrollMagic.Scene({
    triggerElement: "#blockhidden",
    duration: 1000
  }).setTween("#bricks", 1, {
    top: "-15%"
  })
  .addTo(wallcontroller)
;
  
var scene3 = new ScrollMagic.Scene({
    triggerElement: "#blockhidden",
    duration: 1000
  }).setTween("#wallpeople", 1, {
    top: "-8%"
  })
  .addTo(wallcontroller)
;
  
var scene4 = new ScrollMagic.Scene({
    triggerElement: "#blockhidden",
    duration: 1000
  }).setTween("#chinesepeople", 1, {
    opacity: "1"
  })
  .addTo(wallcontroller)
;
  
var scene5 = new ScrollMagic.Scene({
    triggerElement: "#block2",
    duration: 1000
  }).setTween("#ladder", 1, {
    opacity: "1"
  })
  .addTo(wallcontroller)
;
  
var scene6 = new ScrollMagic.Scene({
    triggerElement: "#block2",
    duration: 1000
  }).setTween("#climbing", 1, {
    opacity: "1"
  })
  .addTo(wallcontroller)
;
  
var scene7 = new ScrollMagic.Scene({
    triggerElement: "#block2",
    duration: 1000
  }).setTween("#climbing", 1, { top: "0%" })
  .addTo(wallcontroller)
;