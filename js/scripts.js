
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
var items = document.getElementsByClassName("item");
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

$(".centerCircle .cmi").hover(function(){
    $("p").toggleClass("textOpen");
});