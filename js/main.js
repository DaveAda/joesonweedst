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
/*CUBS TABLE RESERVATIONS*/
    /*JULY 2019*/
    $cubs79button = $('#cubs-7-9-button'); $cubs79popup = $('#cubs-7-9-pop-up');$cubs79button.click(function(){$cubs79popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs712button = $('#cubs-7-12-button'); $cubs712popup = $('#cubs-7-12-pop-up');$cubs712button.click(function(){$cubs712popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs713button = $('#cubs-7-13-button'); $cubs713popup = $('#cubs-7-13-pop-up');$cubs713button.click(function(){$cubs713popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs714button = $('#cubs-7-14-button'); $cubs714popup = $('#cubs-7-14-pop-up');$cubs714button.click(function(){$cubs714popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs715button = $('#cubs-7-15-button'); $cubs715popup = $('#cubs-7-15-pop-up');$cubs715button.click(function(){$cubs715popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs716button = $('#cubs-7-16-button'); $cubs716popup = $('#cubs-7-16-pop-up');$cubs716button.click(function(){$cubs716popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs717button = $('#cubs-7-17-button'); $cubs717popup = $('#cubs-7-17-pop-up');$cubs717button.click(function(){$cubs717popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs719button = $('#cubs-7-19-button'); $cubs719popup = $('#cubs-7-19-pop-up');$cubs719button.click(function(){$cubs719popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs720button = $('#cubs-7-20-button'); $cubs720popup = $('#cubs-7-20-pop-up');$cubs720button.click(function(){$cubs720popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs721button = $('#cubs-7-21-button'); $cubs721popup = $('#cubs-7-21-pop-up');$cubs721button.click(function(){$cubs721popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs722button = $('#cubs-7-22-button'); $cubs722popup = $('#cubs-7-22-pop-up');$cubs722button.click(function(){$cubs722popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs723button = $('#cubs-7-23-button'); $cubs723popup = $('#cubs-7-23-pop-up');$cubs723button.click(function(){$cubs723popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs724button = $('#cubs-7-24-button'); $cubs724popup = $('#cubs-7-24-pop-up');$cubs724button.click(function(){$cubs724popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs726button = $('#cubs-7-26-button'); $cubs726popup = $('#cubs-7-26-pop-up');$cubs726button.click(function(){$cubs726popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs727button = $('#cubs-7-27-button'); $cubs727popup = $('#cubs-7-27-pop-up');$cubs727button.click(function(){$cubs727popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs728button = $('#cubs-7-28-button'); $cubs728popup = $('#cubs-7-28-pop-up');$cubs728button.click(function(){$cubs728popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs730button = $('#cubs-7-30-button'); $cubs730popup = $('#cubs-7-30-pop-up');$cubs730button.click(function(){$cubs730popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs731button = $('#cubs-7-31-button'); $cubs731popup = $('#cubs-7-31-pop-up');$cubs731button.click(function(){$cubs731popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*AUGUST 2019*/
    $cubs81button = $('#cubs-8-1-button'); $cubs81popup = $('#cubs-8-1-pop-up');
    $cubs82button = $('#cubs-8-2-button'); $cubs82popup = $('#cubs-8-2-pop-up');
    $cubs83button = $('#cubs-8-3-button'); $cubs83popup = $('#cubs-8-3-pop-up');
    $cubs84button = $('#cubs-8-4-button'); $cubs84popup = $('#cubs-8-4-pop-up');
    $cubs85button = $('#cubs-8-5-button'); $cubs85popup = $('#cubs-8-5-pop-up');
    $cubs86button = $('#cubs-8-6-button'); $cubs86popup = $('#cubs-8-6-pop-up');
    $cubs87button = $('#cubs-8-7-button'); $cubs87popup = $('#cubs-8-7-pop-up');
    $cubs88button = $('#cubs-8-8-button'); $cubs88popup = $('#cubs-8-8-pop-up');
    $cubs89button = $('#cubs-8-9-button'); $cubs89popup = $('#cubs-8-9-pop-up');
    $cubs810button = $('#cubs-8-10-button'); $cubs810popup = $('#cubs-8-10-pop-up');
    $cubs811button = $('#cubs-8-11-button'); $cubs811popup = $('#cubs-8-11-pop-up');
    $cubs813button = $('#cubs-8-13-button'); $cubs813popup = $('#cubs-8-13-pop-up');
    $cubs814button = $('#cubs-8-14-button'); $cubs814popup = $('#cubs-8-14-pop-up');
    $cubs815button = $('#cubs-8-15-button'); $cubs815popup = $('#cubs-8-15-pop-up');
    $cubs816button = $('#cubs-8-16-button'); $cubs816popup = $('#cubs-8-16-pop-up');
    $cubs817button = $('#cubs-8-17-button'); $cubs817popup = $('#cubs-8-17-pop-up');
    $cubs818button = $('#cubs-8-18-button'); $cubs818popup = $('#cubs-8-18-pop-up');
    $cubs820button = $('#cubs-8-20-button'); $cubs820popup = $('#cubs-8-20-pop-up');
    $cubs821button = $('#cubs-8-21-button'); $cubs821popup = $('#cubs-8-21-pop-up');
    $cubs822button = $('#cubs-8-22-button'); $cubs822popup = $('#cubs-8-22-pop-up');
    $cubs823button = $('#cubs-8-23-button'); $cubs823popup = $('#cubs-8-23-pop-up');
    $cubs824button = $('#cubs-8-24-button'); $cubs824popup = $('#cubs-8-24-pop-up');
    $cubs825button = $('#cubs-8-25-button'); $cubs825popup = $('#cubs-8-25-pop-up');
    $cubs827button = $('#cubs-8-27-button'); $cubs827popup = $('#cubs-8-27-pop-up');
    $cubs828button = $('#cubs-8-28-button'); $cubs828popup = $('#cubs-8-28-pop-up');
    $cubs829button = $('#cubs-8-29-button'); $cubs829popup = $('#cubs-8-29-pop-up');
    $cubs830button = $('#cubs-8-30-button'); $cubs830popup = $('#cubs-8-30-pop-up');
    $cubs831button = $('#cubs-8-31-button'); $cubs831popup = $('#cubs-8-31-pop-up');
    /*SEPTEMBER 2019*/
    $cubs91button = $('#cubs-9-1-button'); $cubs91popup = $('#cubs-9-1-pop-up');
    $cubs92button = $('#cubs-9-2-button'); $cubs92popup = $('#cubs-9-2-pop-up');
    $cubs93button = $('#cubs-9-3-button'); $cubs93popup = $('#cubs-9-3-pop-up');
    $cubs95button = $('#cubs-9-5-button'); $cubs95popup = $('#cubs-9-5-pop-up');
    $cubs96button = $('#cubs-9-6-button'); $cubs96popup = $('#cubs-9-6-pop-up');
    $cubs97button = $('#cubs-9-7-button'); $cubs97popup = $('#cubs-9-7-pop-up');
    $cubs98button = $('#cubs-9-8-button'); $cubs98popup = $('#cubs-9-8-pop-up');
    $cubs99button = $('#cubs-9-9-button'); $cubs99popup = $('#cubs-9-9-pop-up');
    $cubs910button = $('#cubs-9-10-button'); $cubs910popup = $('#cubs-9-10-pop-up');
    $cubs911button = $('#cubs-9-11-button'); $cubs911popup = $('#cubs-9-11-pop-up');
    $cubs912button = $('#cubs-9-12-button'); $cubs912popup = $('#cubs-9-12-pop-up');
    $cubs913button = $('#cubs-9-13-button'); $cubs913popup = $('#cubs-9-13-pop-up');
    $cubs914button = $('#cubs-9-14-button'); $cubs914popup = $('#cubs-9-14-pop-up');
    $cubs915button = $('#cubs-9-15-button'); $cubs915popup = $('#cubs-9-15-pop-up');
    $cubs916button = $('#cubs-9-16-button'); $cubs916popup = $('#cubs-9-16-pop-up');
    $cubs917button = $('#cubs-9-17-button'); $cubs917popup = $('#cubs-9-17-pop-up');
    $cubs918button = $('#cubs-9-18-button'); $cubs918popup = $('#cubs-9-18-pop-up');
    $cubs919button = $('#cubs-9-19-button'); $cubs919popup = $('#cubs-9-19-pop-up');
    $cubs920button = $('#cubs-9-20-button'); $cubs920popup = $('#cubs-9-20-pop-up');
    $cubs921button = $('#cubs-9-21-button'); $cubs921popup = $('#cubs-9-21-pop-up');
    $cubs922button = $('#cubs-9-22-button'); $cubs922popup = $('#cubs-9-22-pop-up');
    $cubs924button = $('#cubs-9-24-button'); $cubs924popup = $('#cubs-9-24-pop-up');
    $cubs925button = $('#cubs-9-25-button'); $cubs925popup = $('#cubs-9-25-pop-up');
    $cubs926button = $('#cubs-9-26-button'); $cubs926popup = $('#cubs-9-26-pop-up');
    $cubs927button = $('#cubs-9-27-button'); $cubs927popup = $('#cubs-9-27-pop-up');
    $cubs928button = $('#cubs-9-28-button'); $cubs928popup = $('#cubs-9-28-pop-up');
    $cubs929button = $('#cubs-9-29-button'); $cubs929popup = $('#cubs-9-29-pop-up');
    

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