
// var centerCircle = document.getElementsByClassName("centerCircle");


/*IMPROVE SCALING!!!*/

/*Math.PI ATTEMPT*/
// var increase = Math.PI * 2 / items.length;
// var x = 0, y = 0, angle = 0, item;

// for (var i = 0; i < items.length; i++) {
//     item = items[i];
//     x = 250 * Math.cos(angle);
//     y = 250 * Math.sin(angle);
//     x = (x / screen.availWidth) * 100;
//     y = (y / screen.availHeight) * 100;
//     item.style.left = x + 60 + "%";
//     item.style.top = y + 50 + "%";
//     item.style.position = "absolute";
//     angle += increase;
// }

/*ROTATE ATTEMPT*/

/*var rotateIncrease = (360 / items.length)

for (var - = 0; i < items.length; i++) {
    item = items[i];
    item.style.left = 50%;
    item.style.top = 50%;
    item.rotate(rotateIncrease);
    rotateIncrease += rotateIncrease;
}*/


/*WHY CAN'T I GRAB BOTH OF THESE??*/
/*HOW DO I MODIFY SVG FILL COLOR??*/
// $(items).hover(function() {
// 	$(this).css("background-color","yellow");
// 	}, function() {
// 	$(this).css("background-color","grey");
// 	$(this).find("p").css.toggleClass("textOpen");
// });



// JS PLUMB FOR LINES??
/*var items = document.getElementsByClassName("item");
var increase = (360 / (items.length))
var angle = 0

$(".item").each(function(){
    $(this).rotate(angle += increase);
});

$(".item .label").each(function(){
    $(this).rotate(angle -= increase);
});

var miniItems = document.getElementsByClassName("miniItem");
var miniIncrease = (360 / (miniItems.length))
var miniAngle = 0

$(".miniItem").each(function(){
    $(this).rotate(miniAngle += miniIncrease);
});
*/

sidebarWidth= 25;
containerWidth = 75;
containerHeight = 94;
navHeight = 6;

centerCircleRadius = 5;
centerCircleWidth = (centerCircleRadius*2) +2;
centerCircleHeight = (centerCircleRadius*5) + 4;
d3.select(".cmi")
	.append("svg")
	.attr("width", centerCircleWidth + "vw")
	.attr("height", centerCircleHeight + "vh")
	.append("circle")
	.attr("cx", (centerCircleWidth/2) + "vw")
	.attr("cy", (centerCircleHeight/2) + "vh")
	.attr("r", centerCircleRadius + "vw")
	.style("fill", "purple");

itemRadius = 2;
itemWidth = (itemRadius*2) +2;
itemHeight = (itemRadius*5) + 4;
d3.selectAll(".item")
	.append("svg")
	.attr("width", itemWidth + "vw")
	.attr("height", itemHeight + "vh")
	.append("circle")
	.attr("cx", (itemWidth/2) + "vw")
	.attr("cy", (itemHeight/2) + "vh")
	.attr("r", itemRadius + "vw")
	.style("fill", "green")

miniItemRadius = .8;
miniItemWidth = (miniItemRadius*2) +2;
miniItemHeight = (miniItemRadius*5) + 4;
d3.selectAll(".miniItem")
	.append("svg")
	.attr("width", miniItemWidth + "vw")
	.attr("height", miniItemHeight + "vh")
	.append("circle")
	.attr("cx", (miniItemWidth/2) + "vw")
	.attr("cy", (miniItemHeight/2) + "vh")
	.attr("r", miniItemRadius + "vw")
	.style("fill", "blue")

centerPointX = (containerWidth / 2) + sidebarWidth;
centerPointY = (containerHeight / 2) + navHeight;
$(".cmi").css({left: (centerPointX - centerCircleWidth/2) + "vw", top: (centerPointY - centerCircleHeight/2) + "vh"});

var items = document.getElementsByClassName("item");
var angleIncrease =  Math.PI * 2 / items.length;
var x = 0, y = 0, angle = 0;

var miniItems = document.getElementsByClassName("miniItem");
var miniAngleIncrease = Math.PI * 2 / miniItems.length;
var miniX = 0, miniY = 0, miniAngle = 0;

for (var i = 0; i < items.length; i++) {
	item = items[i];
	x = 25 * Math.cos(angle);
	y = 35 * Math.sin(angle);
    if ($(item).hasClass("marketing")) {
    	item.style.left = (centerPointX - itemWidth/2 + x) + "vw";
    	item.style.top = (centerPointY - itemHeight/2 + y) + "vh"; 
    	miniCenterPointX = centerPointX + x;
    	miniCenterPointY = centerPointY + y;
    	for (var miniI = 0; miniI < miniItems.length; miniI++) {
    		miniItem = miniItems[miniI];
    		miniX = 8 * Math.cos(miniAngle);
    		miniY = 15 * Math.sin(miniAngle);
    		miniItem.style.left = (miniCenterPointX - miniItemWidth/2 + miniX) + "vw";
    		miniItem.style.top = (miniCenterPointY - miniItemHeight/2 + miniY) + "vh"; 
    		miniAngle += miniAngleIncrease;
    	}
    	angle += angleIncrease;
	}
	else if ($(item).hasClass("item")){
		item.style.left = (centerPointX - itemWidth/2 + x) + "vw";
    	item.style.top = (centerPointY - itemHeight/2 + y) + "vh"; 
		angle += angleIncrease;
	}
};


$(".cmi, .item, .miniItem").hover(function(){
    $(this).children("ul").toggleClass("textOpen");
    $(this).toggleClass("working")
});