//  $(".show, .hide").click(function() {
//      $(".hide").slideToggle(2000);
//      $(".show").toggle(1500);
//  });
//  $(".show1, .hide1").click(function() {
//      $(".hide1").slideToggle(2000);
//      $(".show1").toggle(1500);
//  });
//  $(".show2, .hide2").click(function() {
//      $(".hide2").slideToggle(2000);
//      $(".show2").toggle(1500);
//  });


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



});