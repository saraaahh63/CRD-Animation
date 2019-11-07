var restcontroller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#blockhidden",
  duration: 1000
}).setTween("#bg", 1, {
  top: "0%"
})
.addTo(restcontroller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: "#blockhidden",
  duration: 1000
}).setTween("#dad", 1, {
  opacity: "1"
})
.addTo(restcontroller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: "#block2",
  duration: 1000
}).setTween("#cashier", 1, {
  top: "13%"
})
.addTo(restcontroller);

var scene4 = new ScrollMagic.Scene({
  triggerElement: "#block2",
  duration: 1000
}).setTween("#cook", 1, {
  top: "13%"
})
.addTo(restcontroller);

var scene5 = new ScrollMagic.Scene({
  triggerElement: "#block2",
  duration: 1000
}).setTween("#waiter", 1, {
  top: "13%"
})
.addTo(restcontroller);

var scene6 = new ScrollMagic.Scene({
  triggerElement: "#block1",
  duration: 1000
}).setTween("#chair", 1, {
  opacity: "1"
})
.addTo(restcontroller);

var scene7 = new ScrollMagic.Scene({
  triggerElement: "#block1",
  duration: 1000
}).setTween("#table", 1, {
  opacity: "1"
})
.addTo(restcontroller);