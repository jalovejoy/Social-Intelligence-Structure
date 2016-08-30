sidebarWidth= 25;
containerWidth = 75;
containerHeight = 94;
navHeight = 6;

centerCircleRadius = 4.5;
centerCircleWidth = (centerCircleRadius * 2) + 2;
centerCircleHeight = (centerCircleRadius * 5) + 4;
d3.select(".cmi")
	.append("svg")
	.attr("width", centerCircleWidth + "vw")
	.attr("height", centerCircleHeight + "vh")
	.append("circle")
	.attr("cx", (centerCircleWidth / 2) + "vw")
	.attr("cy", (centerCircleHeight / 2) + "vh")
	.attr("r", centerCircleRadius + "vw")
	.style("fill", "purple");

itemRadius = 2.8;
itemWidth = (itemRadius * 2) + 2;
itemHeight = (itemRadius * 5) + 4;
d3.selectAll(".item")
	.append("svg")
	.attr("width", itemWidth + "vw")
	.attr("height", itemHeight + "vh")
	.append("circle")
	.attr("cx", (itemWidth / 2) + "vw")
	.attr("cy", (itemHeight / 2) + "vh")
	.attr("r", itemRadius + "vw")
	.style("fill", "green")

miniItemRadius = 1;
miniItemWidth = (miniItemRadius * 2) + 2;
miniItemHeight = (miniItemRadius * 5) + 4;
d3.selectAll(".miniItem")
	.append("svg")
	.attr("width", miniItemWidth + "vw")
	.attr("height", miniItemHeight + "vh")
	.append("circle")
	.attr("cx", (miniItemWidth / 2) + "vw")
	.attr("cy", (miniItemHeight / 2) + "vh")
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
    	item.style.left = (centerPointX - itemWidth / 2 + x) + "vw";
    	item.style.top = (centerPointY - itemHeight / 2 + y) + "vh"; 
    	miniCenterPointX = centerPointX + x;
    	miniCenterPointY = centerPointY + y;
    	for (var miniI = 0; miniI < miniItems.length; miniI++) {
    		miniItem = miniItems[miniI];
    		miniX = 8 * Math.cos(miniAngle);
    		miniY = 15 * Math.sin(miniAngle);
    		miniItem.style.left = (miniCenterPointX - miniItemWidth / 2 + miniX) + "vw";
    		miniItem.style.top = (miniCenterPointY - miniItemHeight / 2 + miniY) + "vh";
    		miniAngle += miniAngleIncrease;
    	}
    	angle += angleIncrease;
	}
	else if ($(item).hasClass("item")){
		item.style.left = (centerPointX - itemWidth / 2 + x) + "vw";
    	item.style.top = (centerPointY - itemHeight / 2 + y) + "vh"; 
		angle += angleIncrease;
	}
};


$(".cmi, .item, .miniItem").hover(function() {
    $(this).children("ul").toggleClass("textOpen");
});

$(".marketing, .miniItem").hover(function() {
	$(".miniItem").children("span").toggle("display", $("miniItem").css("display") === "block");
});

$(".cmi, .item, .miniItem").mousemove(function (e) {
    var x = e.pageX,
        y = e.pageY;        
    $(this).children(".tooltipRightDown").css({top: (y + 10) + "px"});
    $(this).children(".tooltipRightDown").css({left: (x + 10) + "px"});
    $(this).children(".tooltipLeftUp").css({top: (y - 95) + "px"});
    $(this).children(".tooltipLeftUp").css({left: (x - 215) + "px"});
    $(this).children(".tooltipLeftDown").css({top: (y + 10) + "px"});
    $(this).children(".tooltipLeftDown").css({left: (x - 210) + "px"});
});

$(".seo, .overlayEsc").click(function() {
	$(".overlay").toggle("display"), $(".overlay").css("display") === "block);"
});