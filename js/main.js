$(document).ready(function(){
/*VARIABLES*/
    var $bears = $('#bears');
    var $blackhawks = $('#blackhawks');
    var $bulls = $('#bulls');
    var $cubs = $('#cubs');
    var $hoosiers = $('#hoosiers');
    var $frogs = $('#frogs');
    var $illini = $('#illini');
    var $razorbacks = $('#razorbacks');
    var $tarheels = $('#tarheels');
    var $bearsschedule = $('#bears-schedule');
    var $illinifootballschedule = $('#illini-football-schedule');
    var $headeraboutarrow = $('.header-about-arrow');
    var $headerabouttitle = $('.header-about-title');
    var $headeraboutdropdown = $('.header-about-dropdown');
    var $headermenuarrow = $('.header-menu-arrow');
    var $headermenutitle = $('.header-menu-title');
    var $headermenudropdown = $('.header-menu-dropdown');
    var $thechapterroompopup = $('#the-chapter-room-pop-up');
    var $thechapterroomreserve = $('#the-chapter-room-reserve');
    var $privatepartiesrooms = $('.private-parties-rooms');
    var $headeraboutarrow = $('.header-about-arrow');
    var $headerabouttitle = $('.header-about-title');
    var $headeraboutdropdown = $('.header-about-dropdown');
    var $headershrinkpoint = $('#header-shrink-point');
    var $headerlogo = $('.header-logo');
    var $headermenuarrow = $('.header-menu-arrow');
    var $headermenutitle = $('.header-menu-title');
    var $headermenudropdown = $('.header-menu-dropdown');
/*HEADER LOGO SHRINK*/

    $headershrinkpoint.waypoint(function(){
        $headerlogo.toggleClass('header-logo-shrink');
  });
    
/*HEADER DROPDOWNS*/

    $headerabouttitle.click(function(){
        $headeraboutdropdown.slideToggle();
        $headeraboutarrow.toggleClass('head-arrow-flip');
    });
    $headermenutitle.click(function(){
        $headermenudropdown.slideToggle();
        $headermenuarrow.toggleClass('head-arrow-flip');
    });
/*SPORTS LOGOS*/

/*SPORTS SCHEDULES*/
    $bears.click(function(){
        $bearsschedule.show();
        $illinifootballschedule.hide();
        $bears.css('opacity', '1');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '.2');
    });
    $illini.click(function(){
        $bearsschedule.hide();
        $illinifootballschedule.show();
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '1');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '.2');
    });

/*SPORTS TABLE RESERVATIONS*/
    $bearstableweekone = $('#bears-table-week-one');
    $bearsweekonebutton = $('#bears-week-one-button');
    $sportsschedule = $('.sports-schedule');

    $tablereservation = $('.table-reservation');
    $tablereservationx = $('.table-reservation-x');

    $bearsweekonebutton.click(function(){
        $bearstableweekone.fadeIn();
        $sportsschedule.addClass('schedule-background-fade');
    });
    $tablereservationx.click(function(){
        $privatepartiesrooms.removeClass('schedule-background-fade');
        $sportsschedule.removeClass('schedule-background-fade');
        $triviamonths.removeClass('schedule-background-fade');
        $tablereservation.fadeOut();

    });
/*TRIVIA*/
    $friendsjuly10 = $('#friends-july-10');
    $friendsjuly10reservation = $('#friends-july-10-reservation');
    $triviamonths = $('.trivia-months');

    $friendsjuly10reservation.click(function(){
        $friendsjuly10.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
/*PRIVATE PARTIES*/
    $('#the-chapter-room-photos').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2300,
      infinite: true,
    });
    $('#the-clubhouse-photos').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1800,
      infinite: true,
    });
    $('#vip-loft-lounge-photos').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
    });
    $('#the-red-room-photos').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1500,
      infinite: true,
    });
    $('#the-alley-suite-photos').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2200,
      infinite: true,
    });
    $('#the-rooftop-photos').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1800,
      infinite: true,
    });

    $thechapterroomreserve.click(function(){
        $thechapterroompopup.fadeIn();
        $privatepartiesrooms.addClass('schedule-background-fade');
    });
});