$(document).ready(function(){
  $('.carousel').carousel({
      interval: 4000 / 2  // 1000 x 1 = 1 second
  });
       });
       var toggleStatus = 1;
function toggleMenu() {
if (toggleStatus == 1) {
  document.getElementById("menu").style.left = "-300px";
  toggleStatus = 0;
} else if (toggleStatus == 0) {
  document.getElementById("menu").style.left = "0px";
  toggleStatus = 1;
}
}
$(document).ready(function() {
  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function(){
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos>5) {
      $(scrollTop).css("opacity", "1");
      $("h2").slideDown(1000);

    }






    if (topPos>400) {
      $(".ae").fadeIn(2000);
      $(".ab").fadeIn(2000);
      $(".abs").fadeIn(2000);
      $(".abe").fadeIn(2000);

    }

    if (topPos>900) {
      $(".uip").fadeIn(2000);
      $(".ui").fadeIn(2000);
      $(".uips").fadeIn(2000);
      $(".u").fadeIn(2000);
      $(".uy").fadeIn(2000);
      $(".ud").fadeIn(2000);
      $("nav").hide(2000);
      $("#toggleMenu").hide(2000);






      }

      if (topPos>1700) {
$(".barWrapper").fadeIn(1000);
        $(function () {
          $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
        });

        // $( window ).scroll(function() {
         // if($( window ).scrollTop() > 10){  // scroll down abit and get the action
          $(".progress-bar").each(function(){
            each_bar_width = $(this).attr('aria-valuenow');
            $(this).width(each_bar_width + '%');
          });





        }

        if (topPos>2300) {
        $(".panel-group").fadeIn(4000);





          }
          if (topPos>2700) {
          $(".q").slideDown(3000);





            }


            if (topPos>4000) {
            $(".avb").fadeIn(2000);
            $(".avbs").fadeIn(2000);
            $(".avbd").fadeIn(2000);
            $(".avbe").fadeIn(2000);
            $(".avbf").fadeIn(2000);
            $(".avbg").fadeIn(2000);





          }  if (topPos>5000) {
                $(".osds").fadeIn(3000);
                $(".osdf").fadeIn(3000);
                $(".osd").fadeIn(3000);




                  }

                  if (topPos>7000) {
                       $("ahmeds").fadeIn(3000);
                       $(".babas").fadeIn(3000);

                       $(".mamas").fadeIn(3000);
                       $(".omnias").fadeIn(3000);
                       $(".sis").fadeIn(3000);
                       $(".unc").fadeIn(3000);

                       $(".bro").fadeIn(3000);


                         }










    else {

      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    return false;

  }); // click() sc

  }); // ready() END

  $(document).ready(function(){
  	$(".avb").mouseenter(function(){

  	$("#q1,#q2").show();






  });
  $(".avb").mouseleave(function(){

  $("#q1,#q2").hide();






  });




  $(".avbs").mouseenter(function(){

  $("#q3,#q4").show();






});
$(".avbs").mouseleave(function(){

$("#q3,#q4").hide();






});















$(".avbd").mouseenter(function(){

$("#q5,#q6").show();






});
$(".avbd").mouseleave(function(){

$("#q5,#q6").hide();






});





















$(".avbe").mouseenter(function(){

$("#q7,#q8").show();






});
$(".avbe").mouseleave(function(){

$("#q7,#q8").hide();






});












$(".avbf").mouseenter(function(){

$("#q9,#q10").show();






});
$(".avbf").mouseleave(function(){

$("#q9,#q10").hide();






});






















$(".avbg").mouseenter(function(){

$("#q11,#q12").show();






});
$(".avbg").mouseleave(function(){

$("#q11,#q12").hide();






});



  });
//  }
  /*************************************
    LEFT MENU SMOOTH SCROLL ANIMATION
   *************************************/
  // declare variable
