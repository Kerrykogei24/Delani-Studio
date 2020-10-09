$(document).ready(function() {
    $(".show").click(function() {
        $(".show").hide(2000);
        $(".hide").show(2000);
    });
    $(".hide").click(function() {
        $(".hide").hide(2000);
        $(".show").show(2000);

    });
    $(".show1").click(function() {
        $(".show1").hide(2000);
        $(".hide1").show(2000);
    });
    $(".hide1").click(function() {
        $(".hide1").hide(2000);
        $(".show1").show(2000);
    });
    $(".show2").click(function() {
        $(".show2").hide(2000);
        $(".hide2").show(2000);
    });
    $(".hide2").click(function() {
        $(".hide2").hide(2000);
        $(".show2").show(2000);
    });
});


//portfolio hover effect

// $(document).ready(function() {

//     $(".pic").mouseover(function() {

//         $("#pic").show();
//     });
// })

$(document).ready(function() {
    $(".pic").hover(function() {
        $("#pic").toggle(400, "linear");
    });
    $(".pic1").hover(function() {
        $("#pic1").toggle(500);
    });

    $(".pic2").hover(function() {
        $("#pic2").toggle(500);
    });

    $(".pic3").hover(function() {
        $("#pic3").toggle(400);
    });

    $(".pic4").hover(function() {
        $("#pic4").toggle(400, "linear");
    });

    $(".pic5").hover(function() {
        $("#pic5").toggle(400);
    });

    $(".pic6").hover(function() {
        $("#pic6").toggle(400);
    });
    $(".pic7").hover(function() {
        $("#pic7").toggle(400);
    });
});