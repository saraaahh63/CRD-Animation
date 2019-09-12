var openingcontroller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
  triggerElement: "#block1",
  duration: 1000
}).setTween("#street", 1, {
  top: "0%"
})
.addTo(openingcontroller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: "#block1",
  duration: 1000
}).setTween("#bar", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: "#block1",
  duration: 1000
}).setTween("#drugstore", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene4 = new ScrollMagic.Scene({
  triggerElement: "#block2",
  duration: 1000
}).setTween("#butchersign", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene5 = new ScrollMagic.Scene({
  triggerElement: "#block3",
  duration: 1000
}).setTween("#r1", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene6 = new ScrollMagic.Scene({
  triggerElement: "#block2",
  duration: 1000
}).setTween("#r2", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene7 = new ScrollMagic.Scene({
  triggerElement: "#block3",
  duration: 1000
}).setTween("#r4", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene8 = new ScrollMagic.Scene({
  triggerElement: "#block2",
  duration: 1000
}).setTween("#r3", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene9 = new ScrollMagic.Scene({
  triggerElement: "#block3",
  duration: 1000
}).setTween("#r5", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene1end = new ScrollMagic.Scene({
  triggerElement: "#block5",
  duration: 1000
}).setTween("#street", 1, {
  opacity: "0"
})
.addTo(openingcontroller);

var scene2end = new ScrollMagic.Scene({
  triggerElement: "#block5",
  duration: 1000
}).setTween("#bar", 1, {
  opacity: "0"
})
.addTo(openingcontroller);

var scene3end = new ScrollMagic.Scene({
  triggerElement: "#block5",
  duration: 1000
}).setTween("#drugstore", 1, {
  opacity: "0"
})
.addTo(openingcontroller);

var scene4end = new ScrollMagic.Scene({
  triggerElement: "#block5",
  duration: 1000
}).setTween("#butchersign", 1, {
  opacity: "0"
})
.addTo(openingcontroller);

var scene5end = new ScrollMagic.Scene({
  triggerElement: "#block5",
  duration: 1000
}).setTween("#r1", 1, {
  opacity: "0"
})
.addTo(openingcontroller);

var scene6end = new ScrollMagic.Scene({
  triggerElement: "#block5",
  duration: 1000
}).setTween("#r2", 1, {
  opacity: "0"
})
.addTo(openingcontroller);

var scene7end = new ScrollMagic.Scene({
  triggerElement: "#block5",
  duration: 1000
}).setTween("#r4", 1, {
  opacity: "0"
})
.addTo(openingcontroller);

var scene8end = new ScrollMagic.Scene({
  triggerElement: "#block5",
  duration: 1000
}).setTween("#r3", 1, {
  opacity: "0"
})
.addTo(openingcontroller);

var scene9end = new ScrollMagic.Scene({
  triggerElement: "#block5",
  duration: 1000
}).setTween("#r5", 1, {
  opacity: "0"
})
.addTo(openingcontroller);

var riotcontroller = new ScrollMagic.Controller();

var scene10 = new ScrollMagic.Scene({
  triggerElement: "#block4",
  duration: 1000
}).setTween("#bckgrnd", 1, {
  top: "0%"
})
.addTo(riotcontroller);

var scene11 = new ScrollMagic.Scene({
  triggerElement: "#block4",
  duration: 1000
}).setTween("#crowdback", 1, {
  top: "0%"
})
.addTo(riotcontroller);

var scene12 = new ScrollMagic.Scene({
  triggerElement: "#block4",
  duration: 1000
}).setTween("#crowdmid", 1, {
  top: "0%"
})
.addTo(riotcontroller);

var scene13 = new ScrollMagic.Scene({
  triggerElement: "#block4",
  duration: 1000
}).setTween("#crowdfront", 1, {
  top: "0%"
})
.addTo(riotcontroller);

var scene14 = new ScrollMagic.Scene({
  triggerElement: "#block6",
  duration: 1000
}).setTween("#smoke1", 1, {
  opacity: "1"
})
.addTo(riotcontroller);

var scene15 = new ScrollMagic.Scene({
  triggerElement: "#block6",
  duration: 1000
}).setTween("#f1", 1, {
  opacity: "1"
})
.addTo(riotcontroller);

var scene16 = new ScrollMagic.Scene({
  triggerElement: "#block5",
  duration: 1000
}).setTween("#s1", 1, {
  opacity: "1"
})
.addTo(riotcontroller);

var scene17 = new ScrollMagic.Scene({
  triggerElement: "#block5",
  duration: 1000
}).setTween("#f2", 1, {
  opacity: "1"
})
.addTo(riotcontroller);

var scene18 = new ScrollMagic.Scene({
  triggerElement: "#block6",
  duration: 1000
}).setTween("#s2", 1, {
  opacity: "1"
})
.addTo(riotcontroller);

var scene19 = new ScrollMagic.Scene({
  triggerElement: "#block5",
  duration: 1000
}).setTween("#s3", 1, {
  opacity: "1"
})
.addTo(riotcontroller);

var scene10end = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#bckgrnd", 1, {
  opacity: "0"
})
.addTo(riotcontroller);

var scene11end = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#crowdback", 1, {
  opacity: "0"
})
.addTo(riotcontroller);

var scene12end = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#crowdmid", 1, {
  opacity: "0"
})
.addTo(riotcontroller);

var scene13end = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#crowdfront", 1, {
  opacity: "0"
})
.addTo(riotcontroller);

var scene14end = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#smoke1", 1, {
  opacity: "0"
})
.addTo(riotcontroller);

var scene15end = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#f1", 1, {
  opacity: "0"
})
.addTo(riotcontroller);

var scene16end = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#s1", 1, {
  opacity: "0"
})
.addTo(riotcontroller);

var scene17end = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#f2", 1, {
  opacity: "0"
})
.addTo(riotcontroller);

var scene18end = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#s2", 1, {
  opacity: "0"
})
.addTo(riotcontroller);

var scene19end = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#s3", 1, {
  opacity: "0"
})
.addTo(riotcontroller);

var wallcontroller = new ScrollMagic.Controller();

var scene20 = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#wallbg", 1, {
  opacity: "1"
})
.addTo(wallcontroller);

var scene21 = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#bricks", 1, {
  top: "0%"
})
.addTo(wallcontroller);

var scene22 = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#wallpeople", 1, {
  top: "0%"
})
.addTo(wallcontroller);

var scene23 = new ScrollMagic.Scene({
  triggerElement: "#block7",
  duration: 1000
}).setTween("#chinesepeople", 1, {
  opacity: "1"
})
.addTo(wallcontroller);

var scene24 = new ScrollMagic.Scene({
  triggerElement: "#block8",
  duration: 1000
}).setTween("#ladder", 1, {
  opacity: "1"
})
.addTo(wallcontroller);

var scene25op = new ScrollMagic.Scene({
  triggerElement: "#block9",
  duration: 1000
}).setTween("#climbing", 1, {
  opacity: "1"
})
.addTo(wallcontroller);

var scene25 = new ScrollMagic.Scene({
  triggerElement: "#block9",
  duration: 1000
}).setTween("#climbing", 1, { top: "0%" })
.addTo(wallcontroller);

var scene20end = new ScrollMagic.Scene({
  triggerElement: "#block11",
  duration: 1000
}).setTween("#wallbg", 1, {
  opacity: "0"
})
.addTo(wallcontroller);

var scene21end = new ScrollMagic.Scene({
  triggerElement: "#block10",
  duration: 1000
}).setTween("#bricks", 1, {
  opacity: "0"
})
.addTo(wallcontroller);

var scene22end = new ScrollMagic.Scene({
  triggerElement: "#block11",
  duration: 1000
}).setTween("#wallpeople", 1, {
  opacity: "0"
})
.addTo(wallcontroller);

var scene23end = new ScrollMagic.Scene({
  triggerElement: "#block10",
  duration: 1000
}).setTween("#chinesepeople", 1, {
  opacity: "0"
})
.addTo(wallcontroller);

var scene24end = new ScrollMagic.Scene({
  triggerElement: "#block10",
  duration: 1000
}).setTween("#ladder", 1, {
  opacity: "0"
})
.addTo(wallcontroller);

var scene25end = new ScrollMagic.Scene({
  triggerElement: "#block10",
  duration: 1000
}).setTween("#climbing", 1, {
  opacity: "0"
})
.addTo(wallcontroller);

var courtcontroller = new ScrollMagic.Controller();

var scene26 = new ScrollMagic.Scene({
  triggerElement: "#block10",
  duration: 1000
}).setTween("#dad", 1, { top: "13%" })
.addTo(courtcontroller);

var scene27 = new ScrollMagic.Scene({
  triggerElement: "#block10",
  duration: 1000
}).setTween("#court", 1, { top: "0%" })
.addTo(courtcontroller);

var scene28 = new ScrollMagic.Scene({
  triggerElement: "#block10",
  duration: 1000
}).setTween("#gates", 1, { top: "0%" })
.addTo(courtcontroller);

var scene29 = new ScrollMagic.Scene({
  triggerElement: "#block10",
  duration: 1000
}).setTween("#lawyer", 1, { left: "5%" })
.addTo(courtcontroller);

var scene28end = new ScrollMagic.Scene({
  triggerElement: "#block12",
  duration: 1000
}).setTween("#gates", 1, {
  opacity: "0"
})
.addTo(courtcontroller);

var scene26end = new ScrollMagic.Scene({
  triggerElement: "#block12",
  duration: 1000
}).setTween("#dad", 1, { opacity: "0" })
.addTo(courtcontroller);

var unhidestreet = new ScrollMagic.Scene({
  triggerElement: "#block11",
  duration: 1000
}).setTween("#streettransform", 1, {
  opacity: "1"
})
.addTo(courtcontroller);

var openingcontroller = new ScrollMagic.Controller();

var scene30 = new ScrollMagic.Scene({
  triggerElement: "#block12",
  duration: 1000
}).setTween("#streettransform", 1, {
  top: "0%"
})
.addTo(openingcontroller);

var scene31 = new ScrollMagic.Scene({
  triggerElement: "#block13",
  duration: 1000
}).setTween("#bartran", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene32 = new ScrollMagic.Scene({
  triggerElement: "#block13",
  duration: 1000
}).setTween("#drugstoretran", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene33 = new ScrollMagic.Scene({
  triggerElement: "#block13",
  duration: 1000
}).setTween("#butchersigntran", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene34 = new ScrollMagic.Scene({
  triggerElement: "#block14",
  duration: 1000
}).setTween("#r1tran", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene35 = new ScrollMagic.Scene({
  triggerElement: "#block14",
  duration: 1000
}).setTween("#r2tran", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene36 = new ScrollMagic.Scene({
  triggerElement: "#block14",
  duration: 1000
}).setTween("#r4tran", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene37 = new ScrollMagic.Scene({
  triggerElement: "#block13",
  duration: 1000
}).setTween("#r3tran", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var scene38 = new ScrollMagic.Scene({
  triggerElement: "#block13",
  duration: 1000
}).setTween("#r5tran", 1, {
  opacity: "1"
})
.addTo(openingcontroller);

var restcontroller = new ScrollMagic.Controller();

var scene39 = new ScrollMagic.Scene({
  triggerElement: "#block15",
  duration: 1000
}).setTween("#restbg", 1, {
  top: "0%"
})
.addTo(restcontroller);

var scene39cont = new ScrollMagic.Scene({
  triggerElement: "#block16",
  duration: 1000
}).setTween("#dad", 1, {
  opacity: "1"
})
.addTo(restcontroller);

var scene41 = new ScrollMagic.Scene({
  triggerElement: "#block17",
  duration: 1000
}).setTween("#cashier", 1, {
  top: "13%"
})
.addTo(restcontroller);

var scene42 = new ScrollMagic.Scene({
  triggerElement: "#block17",
  duration: 1000
}).setTween("#cook", 1, {
  top: "13%"
})
.addTo(restcontroller);

var scene43 = new ScrollMagic.Scene({
  triggerElement: "#block17",
  duration: 1000
}).setTween("#waiter", 1, {
  top: "13%"
})
.addTo(restcontroller);

var scene44 = new ScrollMagic.Scene({
  triggerElement: "#block18",
  duration: 1000
}).setTween("#restchairs", 1, {
  opacity: "1"
})
.addTo(restcontroller);

var scene45 = new ScrollMagic.Scene({
  triggerElement: "#block18",
  duration: 1000
}).setTween("#resttables", 1, {
  opacity: "1"
})
.addTo(restcontroller);

var scene40end = new ScrollMagic.Scene({
  triggerElement: "#block20",
  duration: 1000
}).setTween("#dad", 1, {
  opacity: "0"
})
.addTo(restcontroller);

var interrogationcontroller = new ScrollMagic.Controller();

var scene47 = new ScrollMagic.Scene({
  triggerElement: "#block20",
  duration: 1000
}).setTween("#introom", 1, { top: "0%" })
.addTo(interrogationcontroller);

var scene46 = new ScrollMagic.Scene({
  triggerElement: "#block21",
  duration: 1000
}).setTween("#dadwalkfront", 1, { opacity: "1" })
.addTo(interrogationcontroller);

var scene48 = new ScrollMagic.Scene({
  triggerElement: "#block22",
  duration: 1000
}).setTween("#butcher", 1, { right: "10%" })
.addTo(interrogationcontroller);

var scene46end = new ScrollMagic.Scene({
  triggerElement: "#block23",
  duration: 1000
}).setTween("#dadwalkfront", 1, { opacity: "0" })
.addTo(interrogationcontroller);

var finalcontroller = new ScrollMagic.Controller();

var scene49 = new ScrollMagic.Scene({
  triggerElement: "#block23",
  duration: 1000
}).setTween("#boat", 1, { top: "0%" })
.addTo(finalcontroller)

var scene59 = new ScrollMagic.Scene({
  triggerElement: "#block23",
  duration: 1000
}).setTween("#boatdad", 1, { opacity: "1" })
.addTo(finalcontroller)

var scene60 = new ScrollMagic.Scene({
  triggerElement: "#block25",
  duration: 1000
}).setTween("#home", 1, { top: "0%" })
.addTo(finalcontroller)

var scene61 = new ScrollMagic.Scene({
  triggerElement: "#block25",
  duration: 1000
}).setTween("#mom", 1, { opacity: "1" })
.addTo(finalcontroller)

var scene62 = new ScrollMagic.Scene({
  triggerElement: "#block25",
  duration: 1000
}).setTween("#son", 1, { opacity: "1" })
.addTo(finalcontroller)

var scene61end = new ScrollMagic.Scene({
  triggerElement: "#block26",
  duration: 1000
}).setTween("#mom", 1, { opacity: "0" })
.addTo(finalcontroller)

var scene60end = new ScrollMagic.Scene({
  triggerElement: "#block26",
  duration: 1000
}).setTween("#boat2", 1, { top: "0%" })
.addTo(finalcontroller)

var scene73 = new ScrollMagic.Scene({
  triggerElement: "#block27",
  duration: 1000
}).setTween("#restbg2", 1, {
  top: "0%"
})
.addTo(finalcontroller);

var scene76 = new ScrollMagic.Scene({
  triggerElement: "#block27",
  duration: 1000
}).setTween("#cashier2", 1, {
  top: "13%"
})
.addTo(finalcontroller);

var scene77 = new ScrollMagic.Scene({
  triggerElement: "#block27",
  duration: 1000
}).setTween("#cook2", 1, {
  top: "13%"
})
.addTo(finalcontroller);

var scene78 = new ScrollMagic.Scene({
  triggerElement: "#block27",
  duration: 1000
}).setTween("#waiter2", 1, {
  top: "13%"
})
.addTo(finalcontroller);

var scene74 = new ScrollMagic.Scene({
  triggerElement: "#block27",
  duration: 1000
}).setTween("#restchairs2", 1, {
  opacity: "1"
})
.addTo(finalcontroller);

var scene75 = new ScrollMagic.Scene({
  triggerElement: "#block27",
  duration: 1000
}).setTween("#resttables2", 1, {
  opacity: "1"
})
.addTo(finalcontroller);

var scene79 = new ScrollMagic.Scene({
  triggerElement: "#block28",
  duration: 1000
}).setTween("#boatdad", 1, { top: "10%" })
.addTo(finalcontroller);

var scene80 = new ScrollMagic.Scene({
  triggerElement: "#block28",
  duration: 1000
}).setTween("#son", 1, { top: "15%" })
.addTo(finalcontroller);
