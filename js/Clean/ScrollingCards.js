// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {
//         console.log("FMLLL");
//
//         // Make sure this.hash has a value before overriding default behavior
//         if (this.hash !== "") {
//             // Prevent default anchor click behavior
//             event.preventDefault();
//
//             // Store hash
//             var hash = this.hash;
//
//             // Using jQuery's animate() method to add smooth page scroll
//             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function(){
//
//                 // Add hash (#) to URL when done scrolling (default click behavior)
//                 window.location.hash = hash;
//             });
//         } // End if
//     });
// });


// var button = document.getElementById('Right_Arrow');
// button.onclick = function () {
//     console.log("CUNTTT")
//     var container = document.getElementById('Scrolling_Cards_Container');
//     sideScroll(container,'right',25,100,10);
// };
//
// var back = document.getElementById('Left_Arrow');
// back.onclick = function () {
//     console.log("AWWW Yeah SHIT CUNT")
//     var container = document.getElementById('Scrolling_Cards_Container');
//     sideScroll(container,'left',25,100,10);
// };



$(document).ready(function() {
    console.log("Yeah nahnahnahhh");
    $("#Left_Arrow a").click(function() {
        var container = document.getElementById('Scrolling_Cards_Container');
        sideScroll(container,'left',25,100,10);
    });
    $("#Right_Arrow a").click(function() {
        var container = document.getElementById('Scrolling_Cards_Container');
        sideScroll(container,'right',25,100,10);
    });
});


function leftArrowClick() {
    var container = document.getElementById('Scrolling_Cards_Container');
    sideScroll(container,'left',0.1,450,3);
}

function rightArrowClick() {
    var container = document.getElementById('Scrolling_Cards_Container');
    sideScroll(container,'right',0.1,450,3);
}

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}


function cuntFunction(){
    console.log("AWWW Yeah SHIT CUNT")
}
