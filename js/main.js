$(document).ready(function(){
/*VARIABLES*/
    /*HEADER*/
    var $headeraboutarrow = $('.header-about-arrow');
    var $headeraboutdropdown = $('.header-about-dropdown');
    var $headerabouttitle = $('.header-about-title');
    var $headerlogo = $('.header-logo');
    var $headermenuarrow = $('.header-menu-arrow');
    var $headermenutitle = $('.header-menu-title');
    var $headermenudropdown = $('.header-menu-dropdown');
    var $headershrinkpoint = $('.acm-award');
    /*EVENTS*/
    var $bullridingfridaybutton = $('#bull-riding-friday-button');
    var $bullridingfridayspecials = $('.bull-riding-friday-specials');
    var $karaokethursdaybutton = $('#karaoke-thursday-button');
    var $karaokethursdayspecials = $('.karaoke-thursday-specials');
    var $tipsytuesdaybutton = $('#tipsy-tuesday-button');
    var $tipsytuesdayspecials = $('.tipsy-tuesday-specials');
    var $eventswrapper = $('.events-wrapper');
    /*CONCERTS*/
    var $bizmarkie8219infobutton = $('#biz-markie-8-2-19-info-button');
    var $bizmarkie8219dropdown = $('#biz-markie-8-2-19-dropdown');
    var $concertlistinginfodropdown = $('.concert-listing-info-dropdown');
    var $sunstereo8919infobutton = $('#sun-stereo-8-9-19-info-button');
    var $sunstereo8919dropdown = $('#sun-stereo-8-9-19-dropdown');
    var $fatpockets81619infobutton = $('#fat-pockets-8-16-19-info-button');
    var $fatpockets81619dropdown = $('#fat-pockets-8-16-19-dropdown');
    var $lime81619infobutton = $('#lime-8-16-19-info-button');
    var $lime81619dropdown = $('#lime-8-16-19-dropdown');
    var $jimmysarr81719infobutton = $('#jimmy-sarr-8-17-19-info-button');
    var $jimmysarr81719dropdown = $('#jimmy-sarr-8-17-19-dropdown');
    var $sasy82319infobutton = $('#sasy-8-23-19-info-button');
    var $sasy82319dropdown = $('#sasy-8-23-19-dropdown');
    var $gondwana83019infobutton = $('#gondwana-8-30-19-info-button');
    var $gondwana83019dropdown = $('#gondwana-8-30-19-dropdown');
    var $shinyribs9619infobutton = $('#shinyribs-9-6-19-info-button');
    var $shinyribs9619dropdown = $('#shinyribs-9-6-19-dropdown');
    var $lateralus9719infobutton = $('#lateralus-9-7-19-info-button');
    var $lateralus9719dropdown = $('#lateralus-9-7-19-dropdown');
    var $koewetzel92819infobutton = $('#koe-wetzel-9-28-19-info-button');
    var $koewetzel92819dropdown = $('#koe-wetzel-9-28-19-dropdown');
    var $flatlandcavalry101919infobutton = $('#flatland-cavalry-10-19-19-info-button');
    var $flatlandcavalry101919dropdown = $('#flatland-cavalry-10-19-19-dropdown');
    var $muscadinebloodline102419infobutton = $('#muscadine-bloodline-10-24-19-info-button');
    var $muscadinebloodline102419dropdown = $('#muscadine-bloodline-10-24-19-dropdown');
    var $masonramsey11119infobutton = $('#mason-ramsey-11-1-19-info-button');
    var $masonramsey11119dropdown = $('#mason-ramsey-11-1-19-dropdown');
    var $joshabbottband11919infobutton = $('#josh-abbott-band-11-9-19-info-button');
    var $joshabbottband11919dropdown = $('#josh-abbott-band-11-9-19-dropdown');
    var $randyrogersband12719infobutton = $('#randy-rogers-band-12-7-19-info-button');
    var $randyrogersband12719dropdown = $('#randy-rogers-band-12-7-19-dropdown');
    var $morganevans121319infobutton = $('#morgan-evans-12-13-19-info-button');
    var $morganevans121319dropdown = $('#morgan-evans-12-13-19-dropdown');
    /*SPORTS*/
    var $bears = $('#bears');
    var $bearsschedule = $('#bears-schedule');
    var $blackhawks = $('#blackhawks');
    var $blackhawksschedule = $('#blackhawks-schedule');
    var $bulls = $('#bulls');
    var $bullsschedule = $('#bulls-schedule');
    var $cubs = $('#cubs');
    var $cubsschedule = $('#cubs-schedule');
    var $hoosiers = $('#hoosiers');
    var $hoosiersbasketballbutton = $('.hoosiers-basketball-button');
    var $hoosiersbasketballschedule = $('#hoosiers-basketball-schedule');
    var $hoosiersfootballbutton = $('.hoosiers-football-button');
    var $hoosiersfootballschedule = $('#hoosiers-football-schedule');
    var $frogs = $('#frogs');
    var $frogsschedule = $('#frogs-schedule');
    var $illini = $('#illini');
    var $illinibasketballbutton = $('.illini-basketball-button');
    var $illinibasketballschedule = $('#illini-basketball-schedule');
    var $illinifootballbutton = $('.illini-football-button');
    var $illinifootballschedule = $('#illini-football-schedule');
    var $razorbacks = $('#razorbacks');
    var $razorbacksschedule = $('#razorbacks-schedule');
    var $sportsschedule = $('.sports-schedule');
    var $tablereservation = $('.table-reservation');
    var $tablereservationx = $('.table-reservation-x');
    var $tarheels = $('#tarheels');
    var $tarheelsbasketballbutton = $('.tarheels-basketball-button');
    var $tarheelsbasketballschedule = $('#tarheels-basketball-schedule');
    var $tarheelsfootballbutton = $('.tarheels-football-button');
    var $tarheelsfootballschedule = $('#tarheels-football-schedule');
    /*PRIVATE PARTIES*/
    var $packagedetails = $('.package-details');
    var $packagepopupdetails = $('.package-pop-up-details');
    var $party1 = $('#party-1');
    var $party2 = $('#party-2');
    var $party3 = $('#party-3');
    var $party4 = $('#party-4');
    var $party5 = $('#party-5');
    var $party6 = $('#party-6');
    var $party7 = $('#party-7');
    var $partypackages = $('.party-packages');

    var $partypackagesbasicpackage = $('#party-packages-basic-package');
    var $partypackagesstandardpackage = $('#party-packages-standard-package');
    var $partypackagespremiumpackage = $('#party-packages-premium-package');
    var $partypackagesthetopshelfpackage = $('#party-packages-the-top-shelf-package');
    var $partypackagesrooftoppackage = $('#party-packages-rooftop-package');
    var $partypackagesthebachelorettepackage = $('#party-packages-the-bachelorette-package');
    var $partypackagesbridalblackoutpackage = $('#party-packages-bridal-blackout-package');

    var $partypackagepopup = $('.party-package-pop-up');
    var $partypackagespopup = $('.party-packages-pop-up');
  
    var $partypackagesx = $('.party-packages-x');
    var $individualpackagesx = $('.individual-packages-x');

    var $privatepartieswrapper = $('.private-parties-wrapper');
    var $thealleysuitepopup = $('#the-alley-suite-pop-up');
    var $thealleysuitereserve = $('#the-alley-suite-reserve');
    var $thechapterroompopup = $('#the-chapter-room-pop-up');
    var $thechapterroomreserve = $('#the-chapter-room-reserve');
    var $theclubhousepopup = $('#the-clubhouse-pop-up');
    var $theclubhousereserve = $('#the-clubhouse-reserve');
    var $theredroompopup = $('#the-red-room-pop-up');
    var $theredroomreserve = $('#the-red-room-reserve');
    var $therooftoppopup = $('#the-rooftop-pop-up');
    var $therooftopreserve = $('#the-rooftop-reserve');
    var $viploftloungepopup = $('#vip-loft-lounge-pop-up');
    var $viploftloungereserve = $('#vip-loft-lounge-reserve');
    var $privatepartiesrooms = $('.private-parties-rooms');
    /*TRIVIA*/
    var $theofficejuly31 = $('#the-office-july-31');
    var $theofficejuly31reservation = $('#the-office-july-31-reservation');
    var $wrestlingaugust7 = $('#wrestling-august-7');
    var $wrestlingaugust7reservation = $('#wrestling-august-7-reservation');
    var $newgirlaugust14 = $('#new-girl-august-14');
    var $newgirlaugust14reservation = $('#new-girl-august-14-reservation');
    var $itsalwayssunnyaugust21 = $('#its-always-sunny-august-21');
    var $itsalwayssunnyaugust21reservation = $('#its-always-sunny-august-21-reservation');
    var $theofficeaugust28 = $('#the-office-august-28');
    var $theofficeaugust28reservation = $('#the-office-august-28-reservation');
    var $triviamonths = $('.trivia-months');
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
/*CONCERTS DROPDOWNS*/
    $bizmarkie8219infobutton.click(function(){
        $bizmarkie8219dropdown.slideDown();
    });
    $sunstereo8919infobutton.click(function(){
        $sunstereo8919dropdown.slideDown();
    });
    $fatpockets81619infobutton.click(function(){
        $fatpockets81619dropdown.slideDown();
    });
    $lime81619infobutton.click(function(){
        $lime81619dropdown.slideDown();
    });
    $jimmysarr81719infobutton.click(function(){
        $jimmysarr81719dropdown.slideDown();
    });
    $sasy82319infobutton.click(function(){
        $sasy82319dropdown.slideDown();
    });
    $gondwana83019infobutton.click(function(){
        $gondwana83019dropdown.slideDown();
    });
    $shinyribs9619infobutton.click(function(){
        $shinyribs9619dropdown.slideDown();
    });
    $lateralus9719infobutton.click(function(){
        $lateralus9719dropdown.slideDown();
    });
    $koewetzel92819infobutton.click(function(){
        $koewetzel92819dropdown.slideDown();
    });
    $flatlandcavalry101919infobutton.click(function(){
        $flatlandcavalry101919dropdown.slideDown();
    });
    $muscadinebloodline102419infobutton.click(function(){
        $muscadinebloodline102419dropdown.slideDown();
    });
    $masonramsey11119infobutton.click(function(){
        $masonramsey11119dropdown.slideDown();
    });
    $joshabbottband11919infobutton.click(function(){
        $joshabbottband11919dropdown.slideDown();
    });
    $randyrogersband12719infobutton.click(function(){
        $randyrogersband12719dropdown.slideDown();
    });
    $morganevans121319infobutton.click(function(){
        $morganevans121319dropdown.slideDown();
    });
/*SPORTS SCHEDULES*/
    $bears.click(function(){
        $bearsschedule.show();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.hide();
        $illinifootballschedule.hide();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.hide();
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
    $blackhawks.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.show();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.hide();
        $illinifootballschedule.hide();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.hide();
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '1');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '.2');
    });
    $bulls.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.show();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.hide();
        $illinifootballschedule.hide();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.hide();
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '1');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '.2');
    });
    $cubs.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.show();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.hide();
        $illinifootballschedule.hide();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.hide();
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '1');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '.2');
    });
    $frogs.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.show();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.hide();
        $illinifootballschedule.hide();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.hide();
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '1');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '.2');
    });
    $hoosiers.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersfootballschedule.show();
        $illinibasketballschedule.hide();
        $illinifootballschedule.hide();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.hide();
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '1');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '.2');
    });
    $hoosiersbasketballbutton.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.show();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.hide();
        $illinifootballschedule.hide();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.hide();
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '1');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '.2');
    });
    $hoosiersfootballbutton.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.show();
        $illinibasketballschedule.hide();
        $illinifootballschedule.hide();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.hide();
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '1');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '.2');
    });
    $illini.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.hide();
        $illinifootballschedule.show();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.hide();
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
    $illinibasketballbutton.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.show();
        $illinifootballschedule.hide();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.hide();
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
    $illinifootballbutton.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.hide();
        $illinifootballschedule.show();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.hide();
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
    $razorbacks.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.hide();
        $illinifootballschedule.hide();
        $razorbacksschedule.show();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.hide();
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '1');
        $tarheels.css('opacity', '.2');
    });
    $tarheels.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.hide();
        $illinifootballschedule.hide();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.show();
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '1');
    });
    $tarheelsbasketballbutton.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.hide();
        $illinifootballschedule.hide();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.show();
        $tarheelsfootballschedule.hide();
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '1');
    });
    $tarheelsfootballbutton.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.hide();
        $illinifootballschedule.hide();
        $razorbacksschedule.hide();
        $tarheelsbasketballschedule.hide();
        $tarheelsfootballschedule.show();
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '1');
    });
/*TABLE RESERVATIONS X*/
    $tablereservationx.click(function(){
        $concertlistinginfodropdown.slideUp();
        $privatepartiesrooms.removeClass('schedule-background-fade');
        $privatepartieswrapper.removeClass('schedule-background-fade');
        $sportsschedule.removeClass('schedule-background-fade');
        $triviamonths.removeClass('schedule-background-fade');
        $eventswrapper.removeClass('schedule-background-fade');
        $tablereservation.fadeOut();
    });
    $partypackagesx.click(function(){
        $privatepartiesrooms.removeClass('schedule-background-fade');
        $partypackagespopup.fadeOut();
        $partypackagesbasicpackage.fadeOut();
        $partypackagesstandardpackage.fadeOut();
        $partypackagespremiumpackage.fadeOut();
        $partypackagesthetopshelfpackage.fadeOut();
        $partypackagesrooftoppackage.fadeOut();
        $partypackagesthebachelorettepackage.fadeOut();
        $partypackagesbridalblackoutpackage.fadeOut();
    });    
    $individualpackagesx.click(function(){
        $partypackagesbasicpackage.fadeOut();
        $partypackagesstandardpackage.fadeOut();
        $partypackagespremiumpackage.fadeOut();
        $partypackagesthetopshelfpackage.fadeOut();
        $partypackagesrooftoppackage.fadeOut();
        $partypackagesthebachelorettepackage.fadeOut();
        $partypackagesbridalblackoutpackage.fadeOut();
    });
/*BEARS TABLE RESERVATIONS*/
    $bearspreseasonweek1button = $('#bears-preseason-week-1-button'); $bearspreseasonweek1popup = $('#bears-preseason-week-1-pop-up');$bearspreseasonweek1button.click(function(){$bearspreseasonweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearspreseasonweek2button = $('#bears-preseason-week-2-button'); $bearspreseasonweek2popup = $('#bears-preseason-week-2-pop-up');$bearspreseasonweek2button.click(function(){$bearspreseasonweek2popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearspreseasonweek3button = $('#bears-preseason-week-3-button'); $bearspreseasonweek3popup = $('#bears-preseason-week-3-pop-up');$bearspreseasonweek3button.click(function(){$bearspreseasonweek3popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearspreseasonweek4button = $('#bears-preseason-week-4-button'); $bearspreseasonweek4popup = $('#bears-preseason-week-4-pop-up');$bearspreseasonweek4button.click(function(){$bearspreseasonweek4popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek1button = $('#bears-week-1-button'); $bearsweek1popup = $('#bears-week-1-pop-up');$bearsweek1button.click(function(){$bearsweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek2button = $('#bears-week-2-button'); $bearsweek2popup = $('#bears-week-2-pop-up');$bearsweek2button.click(function(){$bearsweek2popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek3button = $('#bears-week-3-button'); $bearsweek3popup = $('#bears-week-3-pop-up');$bearsweek3button.click(function(){$bearsweek3popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek4button = $('#bears-week-4-button'); $bearsweek4popup = $('#bears-week-4-pop-up');$bearsweek4button.click(function(){$bearsweek4popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek5button = $('#bears-week-5-button'); $bearsweek5popup = $('#bears-week-5-pop-up');$bearsweek5button.click(function(){$bearsweek5popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek6button = $('#bears-week-6-button'); $bearsweek6popup = $('#bears-week-6-pop-up');$bearsweek6button.click(function(){$bearsweek6popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek7button = $('#bears-week-7-button'); $bearsweek7popup = $('#bears-week-7-pop-up');$bearsweek7button.click(function(){$bearsweek7popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek8button = $('#bears-week-8-button'); $bearsweek8popup = $('#bears-week-8-pop-up');$bearsweek8button.click(function(){$bearsweek8popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek9button = $('#bears-week-9-button'); $bearsweek9popup = $('#bears-week-9-pop-up');$bearsweek9button.click(function(){$bearsweek9popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek10button = $('#bears-week-10-button'); $bearsweek10popup = $('#bears-week-10-pop-up');$bearsweek10button.click(function(){$bearsweek10popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek11button = $('#bears-week-11-button'); $bearsweek11popup = $('#bears-week-11-pop-up');$bearsweek11button.click(function(){$bearsweek11popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek12button = $('#bears-week-12-button'); $bearsweek12popup = $('#bears-week-12-pop-up');$bearsweek12button.click(function(){$bearsweek12popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek13button = $('#bears-week-13-button'); $bearsweek13popup = $('#bears-week-13-pop-up');$bearsweek13button.click(function(){$bearsweek13popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek14button = $('#bears-week-14-button'); $bearsweek14popup = $('#bears-week-14-pop-up');$bearsweek14button.click(function(){$bearsweek14popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek15button = $('#bears-week-15-button'); $bearsweek15popup = $('#bears-week-15-pop-up');$bearsweek15button.click(function(){$bearsweek15popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek16button = $('#bears-week-16-button'); $bearsweek16popup = $('#bears-week-16-pop-up');$bearsweek16button.click(function(){$bearsweek16popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bearsweek17button = $('#bears-week-17-button'); $bearsweek17popup = $('#bears-week-17-pop-up');$bearsweek17button.click(function(){$bearsweek17popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
/*BLACKHAWKS TABLE RESERVATIONS*/
    /*OCTOBER 2019*/
    $blackhawks104button = $('#blackhawks-10-4-button'); $blackhawks104popup = $('#blackhawks-10-4-pop-up');$blackhawks104button.click(function(){$blackhawks104popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1010button = $('#blackhawks-10-10-button'); $blackhawks1010popup = $('#blackhawks-10-10-pop-up');$blackhawks1010button.click(function(){$blackhawks1010popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1012button = $('#blackhawks-10-12-button'); $blackhawks1012popup = $('#blackhawks-10-12-pop-up');$blackhawks1012button.click(function(){$blackhawks1012popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1014button = $('#blackhawks-10-14-button'); $blackhawks1014popup = $('#blackhawks-10-14-pop-up');$blackhawks1014button.click(function(){$blackhawks1014popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1018button = $('#blackhawks-10-18-button'); $blackhawks1018popup = $('#blackhawks-10-18-pop-up');$blackhawks1018button.click(function(){$blackhawks1018popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1020button = $('#blackhawks-10-20-button'); $blackhawks1020popup = $('#blackhawks-10-20-pop-up');$blackhawks1020button.click(function(){$blackhawks1020popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1022button = $('#blackhawks-10-22-button'); $blackhawks1022popup = $('#blackhawks-10-22-pop-up');$blackhawks1022button.click(function(){$blackhawks1022popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1024button = $('#blackhawks-10-24-button'); $blackhawks1024popup = $('#blackhawks-10-24-pop-up');$blackhawks1024button.click(function(){$blackhawks1024popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1026button = $('#blackhawks-10-26-button'); $blackhawks1026popup = $('#blackhawks-10-26-pop-up');$blackhawks1026button.click(function(){$blackhawks1026popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1027button = $('#blackhawks-10-27-button'); $blackhawks1027popup = $('#blackhawks-10-27-pop-up');$blackhawks1027button.click(function(){$blackhawks1027popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1029button = $('#blackhawks-10-29-button'); $blackhawks1029popup = $('#blackhawks-10-29-pop-up');$blackhawks1029button.click(function(){$blackhawks1029popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*NOVEMBER 2019*/
    $blackhawks112button = $('#blackhawks-11-2-button'); $blackhawks112popup = $('#blackhawks-11-2-pop-up');$blackhawks112button.click(function(){$blackhawks112popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks113button = $('#blackhawks-11-3-button'); $blackhawks113popup = $('#blackhawks-11-3-pop-up');$blackhawks113button.click(function(){$blackhawks113popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks115abutton = $('#blackhawks-11-5-button'); $blackhawks115apopup = $('#blackhawks-11-5-pop-up');$blackhawks115abutton.click(function(){$blackhawks115apopup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks117button = $('#blackhawks-11-7-button'); $blackhawks117popup = $('#blackhawks-11-7-pop-up');$blackhawks117button.click(function(){$blackhawks117popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks119abutton = $('#blackhawks-11-9-button'); $blackhawks119apopup = $('#blackhawks-11-9-pop-up');$blackhawks119abutton.click(function(){$blackhawks119apopup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1110button = $('#blackhawks-11-10-button'); $blackhawks1110popup = $('#blackhawks-11-10-pop-up');$blackhawks1110button.click(function(){$blackhawks1110popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1113button = $('#blackhawks-11-13-button'); $blackhawks1113popup = $('#blackhawks-11-13-pop-up');$blackhawks1113button.click(function(){$blackhawks1113popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1116button = $('#blackhawks-11-16-button'); $blackhawks1116popup = $('#blackhawks-11-16-pop-up');$blackhawks1116button.click(function(){$blackhawks1116popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1117button = $('#blackhawks-11-17-button'); $blackhawks1117popup = $('#blackhawks-11-17-pop-up');$blackhawks1117button.click(function(){$blackhawks1117popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1119button = $('#blackhawks-11-19-button'); $blackhawks1119popup = $('#blackhawks-11-19-pop-up');$blackhawks1119button.click(function(){$blackhawks1119popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1121button = $('#blackhawks-11-21-button'); $blackhawks1121popup = $('#blackhawks-11-21-pop-up');$blackhawks1121button.click(function(){$blackhawks1121popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1123button = $('#blackhawks-11-23-button'); $blackhawks1123popup = $('#blackhawks-11-23-pop-up');$blackhawks1123button.click(function(){$blackhawks1123popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1126button = $('#blackhawks-11-26-button'); $blackhawks1126popup = $('#blackhawks-11-26-pop-up');$blackhawks1126button.click(function(){$blackhawks1126popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1129button = $('#blackhawks-11-29-button'); $blackhawks1129popup = $('#blackhawks-11-29-pop-up');$blackhawks1129button.click(function(){$blackhawks1129popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1130button = $('#blackhawks-11-30-button'); $blackhawks1130popup = $('#blackhawks-11-30-pop-up');$blackhawks1130button.click(function(){$blackhawks1130popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*DECEMBER 2019*/
    $blackhawks122button = $('#blackhawks-12-2-button'); $blackhawks122popup = $('#blackhawks-12-2-pop-up');$blackhawks122button.click(function(){$blackhawks122popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks125button = $('#blackhawks-12-5-button'); $blackhawks125popup = $('#blackhawks-12-5-pop-up');$blackhawks125button.click(function(){$blackhawks125popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks126button = $('#blackhawks-12-6-button'); $blackhawks126popup = $('#blackhawks-12-6-pop-up');$blackhawks126button.click(function(){$blackhawks126popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks128button = $('#blackhawks-12-8-button'); $blackhawks128popup = $('#blackhawks-12-8-pop-up');$blackhawks128button.click(function(){$blackhawks128popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1210button = $('#blackhawks-12-10-button'); $blackhawks1210popup = $('#blackhawks-12-10-pop-up');$blackhawks1210button.click(function(){$blackhawks1210popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1212button = $('#blackhawks-12-12-button'); $blackhawks1212popup = $('#blackhawks-12-12-pop-up');$blackhawks1212button.click(function(){$blackhawks1212popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1214button = $('#blackhawks-12-14-button'); $blackhawks1214popup = $('#blackhawks-12-14-pop-up');$blackhawks1214button.click(function(){$blackhawks1214popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1215button = $('#blackhawks-12-15-button'); $blackhawks1215popup = $('#blackhawks-12-15-pop-up');$blackhawks1215button.click(function(){$blackhawks1215popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1218button = $('#blackhawks-12-18-button'); $blackhawks1218popup = $('#blackhawks-12-18-pop-up');$blackhawks1218button.click(function(){$blackhawks1218popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1219button = $('#blackhawks-12-19-button'); $blackhawks1219popup = $('#blackhawks-12-19-pop-up');$blackhawks1219button.click(function(){$blackhawks1219popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1221button = $('#blackhawks-12-21-button'); $blackhawks1221popup = $('#blackhawks-12-21-pop-up');$blackhawks1221button.click(function(){$blackhawks1221popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1223button = $('#blackhawks-12-23-button'); $blackhawks1223popup = $('#blackhawks-12-23-pop-up');$blackhawks1223button.click(function(){$blackhawks1223popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1227button = $('#blackhawks-12-27-button'); $blackhawks1227popup = $('#blackhawks-12-27-pop-up');$blackhawks1227button.click(function(){$blackhawks1227popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1229button = $('#blackhawks-12-29-button'); $blackhawks1229popup = $('#blackhawks-12-29-pop-up');$blackhawks1229button.click(function(){$blackhawks1229popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks1231button = $('#blackhawks-12-31-button'); $blackhawks1231popup = $('#blackhawks-12-31-pop-up');$blackhawks1231button.click(function(){$blackhawks1231popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*JANUARY 2020*/
    $blackhawks12button = $('#blackhawks-1-2-button'); $blackhawks12popup = $('#blackhawks-1-2-pop-up');$blackhawks12button.click(function(){$blackhawks12popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks15button = $('#blackhawks-1-5-button'); $blackhawks15popup = $('#blackhawks-1-5-pop-up');$blackhawks15button.click(function(){$blackhawks15popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks17button = $('#blackhawks-1-7-button'); $blackhawks17popup = $('#blackhawks-1-7-pop-up');$blackhawks17button.click(function(){$blackhawks17popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks19button = $('#blackhawks-1-9-button'); $blackhawks19popup = $('#blackhawks-1-9-pop-up');$blackhawks19button.click(function(){$blackhawks19popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks111button = $('#blackhawks-1-11-button'); $blackhawks111popup = $('#blackhawks-1-11-pop-up');$blackhawks111button.click(function(){$blackhawks111popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks114button = $('#blackhawks-1-14-button'); $blackhawks114popup = $('#blackhawks-1-14-pop-up');$blackhawks114button.click(function(){$blackhawks114popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks115bbutton = $('#blackhawks-1-15-button'); $blackhawks115bpopup = $('#blackhawks-1-15-pop-up');$blackhawks115bbutton.click(function(){$blackhawks115bpopup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks118button = $('#blackhawks-1-18-button'); $blackhawks118popup = $('#blackhawks-1-18-pop-up');$blackhawks118button.click(function(){$blackhawks118popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks119bbutton = $('#blackhawks-1-19-button'); $blackhawks119bpopup = $('#blackhawks-1-19-pop-up');$blackhawks119bbutton.click(function(){$blackhawks119bpopup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks121button = $('#blackhawks-1-21-button'); $blackhawks121popup = $('#blackhawks-1-21-pop-up');$blackhawks121button.click(function(){$blackhawks121popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*FEBRUARY 2020*/
    $blackhawks21button = $('#blackhawks-2-1-button'); $blackhawks21popup = $('#blackhawks-2-1-pop-up');$blackhawks21button.click(function(){$blackhawks21popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks24button = $('#blackhawks-2-4-button'); $blackhawks24popup = $('#blackhawks-2-4-pop-up');$blackhawks24button.click(function(){$blackhawks24popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks25button = $('#blackhawks-2-5-button'); $blackhawks25popup = $('#blackhawks-2-5-pop-up');$blackhawks25button.click(function(){$blackhawks25popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks29button = $('#blackhawks-2-9-button'); $blackhawks29popup = $('#blackhawks-2-9-pop-up');$blackhawks29button.click(function(){$blackhawks29popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks211button = $('#blackhawks-2-11-button'); $blackhawks211popup = $('#blackhawks-2-11-pop-up');$blackhawks211button.click(function(){$blackhawks211popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks212button = $('#blackhawks-2-12-button'); $blackhawks212popup = $('#blackhawks-2-12-pop-up');$blackhawks212button.click(function(){$blackhawks212popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks215button = $('#blackhawks-2-15-button'); $blackhawks215popup = $('#blackhawks-2-15-pop-up');$blackhawks215button.click(function(){$blackhawks215popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks216button = $('#blackhawks-2-16-button'); $blackhawks216popup = $('#blackhawks-2-16-pop-up');$blackhawks216button.click(function(){$blackhawks216popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks219button = $('#blackhawks-2-19-button'); $blackhawks219popup = $('#blackhawks-2-19-pop-up');$blackhawks219button.click(function(){$blackhawks219popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks221button = $('#blackhawks-2-21-button'); $blackhawks221popup = $('#blackhawks-2-21-pop-up');$blackhawks221button.click(function(){$blackhawks221popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks223button = $('#blackhawks-2-23-button'); $blackhawks223popup = $('#blackhawks-2-23-pop-up');$blackhawks223button.click(function(){$blackhawks223popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks225button = $('#blackhawks-2-25-button'); $blackhawks225popup = $('#blackhawks-2-25-pop-up');$blackhawks225button.click(function(){$blackhawks225popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks227button = $('#blackhawks-2-27-button'); $blackhawks227popup = $('#blackhawks-2-27-pop-up');$blackhawks227button.click(function(){$blackhawks227popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks229button = $('#blackhawks-2-29-button'); $blackhawks229popup = $('#blackhawks-2-29-pop-up');$blackhawks229button.click(function(){$blackhawks229popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*MARCH 2020*/
    $blackhawks33button = $('#blackhawks-3-3-button'); $blackhawks33popup = $('#blackhawks-3-3-pop-up');$blackhawks33button.click(function(){$blackhawks33popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks35button = $('#blackhawks-3-5-button'); $blackhawks35popup = $('#blackhawks-3-5-pop-up');$blackhawks35button.click(function(){$blackhawks35popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks36button = $('#blackhawks-3-6-button'); $blackhawks36popup = $('#blackhawks-3-6-pop-up');$blackhawks36button.click(function(){$blackhawks36popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks38button = $('#blackhawks-3-8-button'); $blackhawks38popup = $('#blackhawks-3-8-pop-up');$blackhawks38button.click(function(){$blackhawks38popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks311button = $('#blackhawks-3-11-button'); $blackhawks311popup = $('#blackhawks-3-11-pop-up');$blackhawks311button.click(function(){$blackhawks311popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks313button = $('#blackhawks-3-13-button'); $blackhawks313popup = $('#blackhawks-3-13-pop-up');$blackhawks313button.click(function(){$blackhawks313popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks314button = $('#blackhawks-3-14-button'); $blackhawks314popup = $('#blackhawks-3-14-pop-up');$blackhawks314button.click(function(){$blackhawks314popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks317button = $('#blackhawks-3-17-button'); $blackhawks317popup = $('#blackhawks-3-17-pop-up');$blackhawks317button.click(function(){$blackhawks317popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks319button = $('#blackhawks-3-19-button'); $blackhawks319popup = $('#blackhawks-3-19-pop-up');$blackhawks319button.click(function(){$blackhawks319popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks321button = $('#blackhawks-3-21-button'); $blackhawks321popup = $('#blackhawks-3-21-pop-up');$blackhawks321button.click(function(){$blackhawks321popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks322button = $('#blackhawks-3-22-button'); $blackhawks322popup = $('#blackhawks-3-22-pop-up');$blackhawks322button.click(function(){$blackhawks322popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks325button = $('#blackhawks-3-25-button'); $blackhawks325popup = $('#blackhawks-3-25-pop-up');$blackhawks325button.click(function(){$blackhawks325popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks327button = $('#blackhawks-3-27-button'); $blackhawks327popup = $('#blackhawks-3-27-pop-up');$blackhawks327button.click(function(){$blackhawks327popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks329button = $('#blackhawks-3-29-button'); $blackhawks329popup = $('#blackhawks-3-29-pop-up');$blackhawks329button.click(function(){$blackhawks329popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks331button = $('#blackhawks-3-31-button'); $blackhawks331popup = $('#blackhawks-3-31-pop-up');$blackhawks331button.click(function(){$blackhawks331popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*APRIL 2020*/
    $blackhawks42button = $('#blackhawks-4-2-button'); $blackhawks42popup = $('#blackhawks-4-2-pop-up');$blackhawks42button.click(function(){$blackhawks42popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $blackhawks44button = $('#blackhawks-4-4-button'); $blackhawks44popup = $('#blackhawks-4-4-pop-up');$blackhawks44button.click(function(){$blackhawks44popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
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
    $cubs81button = $('#cubs-8-1-button'); $cubs81popup = $('#cubs-8-1-pop-up');$cubs81button.click(function(){$cubs81popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs82button = $('#cubs-8-2-button'); $cubs82popup = $('#cubs-8-2-pop-up');$cubs82button.click(function(){$cubs82popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs83button = $('#cubs-8-3-button'); $cubs83popup = $('#cubs-8-3-pop-up');$cubs83button.click(function(){$cubs83popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs84button = $('#cubs-8-4-button'); $cubs84popup = $('#cubs-8-4-pop-up');$cubs84button.click(function(){$cubs84popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs85button = $('#cubs-8-5-button'); $cubs85popup = $('#cubs-8-5-pop-up');$cubs85button.click(function(){$cubs85popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs86button = $('#cubs-8-6-button'); $cubs86popup = $('#cubs-8-6-pop-up');$cubs86button.click(function(){$cubs86popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs87button = $('#cubs-8-7-button'); $cubs87popup = $('#cubs-8-7-pop-up');$cubs87button.click(function(){$cubs87popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs88button = $('#cubs-8-8-button'); $cubs88popup = $('#cubs-8-8-pop-up');$cubs88button.click(function(){$cubs88popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs89button = $('#cubs-8-9-button'); $cubs89popup = $('#cubs-8-9-pop-up');$cubs89button.click(function(){$cubs89popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs810button = $('#cubs-8-10-button'); $cubs810popup = $('#cubs-8-10-pop-up');$cubs810button.click(function(){$cubs810popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs811button = $('#cubs-8-11-button'); $cubs811popup = $('#cubs-8-11-pop-up');$cubs811button.click(function(){$cubs811popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs813button = $('#cubs-8-13-button'); $cubs813popup = $('#cubs-8-13-pop-up');$cubs813button.click(function(){$cubs813popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs814button = $('#cubs-8-14-button'); $cubs814popup = $('#cubs-8-14-pop-up');$cubs814button.click(function(){$cubs814popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs815button = $('#cubs-8-15-button'); $cubs815popup = $('#cubs-8-15-pop-up');$cubs815button.click(function(){$cubs815popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs816button = $('#cubs-8-16-button'); $cubs816popup = $('#cubs-8-16-pop-up');$cubs816button.click(function(){$cubs816popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs817button = $('#cubs-8-17-button'); $cubs817popup = $('#cubs-8-17-pop-up');$cubs817button.click(function(){$cubs817popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs818button = $('#cubs-8-18-button'); $cubs818popup = $('#cubs-8-18-pop-up');$cubs818button.click(function(){$cubs818popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs820button = $('#cubs-8-20-button'); $cubs820popup = $('#cubs-8-20-pop-up');$cubs820button.click(function(){$cubs820popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs821button = $('#cubs-8-21-button'); $cubs821popup = $('#cubs-8-21-pop-up');$cubs821button.click(function(){$cubs821popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs822button = $('#cubs-8-22-button'); $cubs822popup = $('#cubs-8-22-pop-up');$cubs822button.click(function(){$cubs822popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs823button = $('#cubs-8-23-button'); $cubs823popup = $('#cubs-8-23-pop-up');$cubs823button.click(function(){$cubs823popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs824button = $('#cubs-8-24-button'); $cubs824popup = $('#cubs-8-24-pop-up');$cubs824button.click(function(){$cubs824popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs825button = $('#cubs-8-25-button'); $cubs825popup = $('#cubs-8-25-pop-up');$cubs825button.click(function(){$cubs825popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs827button = $('#cubs-8-27-button'); $cubs827popup = $('#cubs-8-27-pop-up');$cubs827button.click(function(){$cubs827popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs828button = $('#cubs-8-28-button'); $cubs828popup = $('#cubs-8-28-pop-up');$cubs828button.click(function(){$cubs828popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs829button = $('#cubs-8-29-button'); $cubs829popup = $('#cubs-8-29-pop-up');$cubs829button.click(function(){$cubs829popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs830button = $('#cubs-8-30-button'); $cubs830popup = $('#cubs-8-30-pop-up');$cubs830button.click(function(){$cubs830popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs831button = $('#cubs-8-31-button'); $cubs831popup = $('#cubs-8-31-pop-up');$cubs831button.click(function(){$cubs831popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*SEPTEMBER 2019*/
    $cubs91button = $('#cubs-9-1-button'); $cubs91popup = $('#cubs-9-1-pop-up');$cubs91button.click(function(){$cubs91popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs92button = $('#cubs-9-2-button'); $cubs92popup = $('#cubs-9-2-pop-up');$cubs92button.click(function(){$cubs92popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs93button = $('#cubs-9-3-button'); $cubs93popup = $('#cubs-9-3-pop-up');$cubs93button.click(function(){$cubs93popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs95button = $('#cubs-9-5-button'); $cubs95popup = $('#cubs-9-5-pop-up');$cubs95button.click(function(){$cubs95popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs96button = $('#cubs-9-6-button'); $cubs96popup = $('#cubs-9-6-pop-up');$cubs96button.click(function(){$cubs96popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs97button = $('#cubs-9-7-button'); $cubs97popup = $('#cubs-9-7-pop-up');$cubs97button.click(function(){$cubs97popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs98button = $('#cubs-9-8-button'); $cubs98popup = $('#cubs-9-8-pop-up');$cubs98button.click(function(){$cubs98popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs99button = $('#cubs-9-9-button'); $cubs99popup = $('#cubs-9-9-pop-up');$cubs99button.click(function(){$cubs99popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs910button = $('#cubs-9-10-button'); $cubs910popup = $('#cubs-9-10-pop-up');$cubs910button.click(function(){$cubs910popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs911button = $('#cubs-9-11-button'); $cubs911popup = $('#cubs-9-11-pop-up');$cubs911button.click(function(){$cubs911popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs912button = $('#cubs-9-12-button'); $cubs912popup = $('#cubs-9-12-pop-up');$cubs912button.click(function(){$cubs912popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs913button = $('#cubs-9-13-button'); $cubs913popup = $('#cubs-9-13-pop-up');$cubs913button.click(function(){$cubs913popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs914button = $('#cubs-9-14-button'); $cubs914popup = $('#cubs-9-14-pop-up');$cubs914button.click(function(){$cubs914popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs915button = $('#cubs-9-15-button'); $cubs915popup = $('#cubs-9-15-pop-up');$cubs915button.click(function(){$cubs915popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs916button = $('#cubs-9-16-button'); $cubs916popup = $('#cubs-9-16-pop-up');$cubs916button.click(function(){$cubs916popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs917button = $('#cubs-9-17-button'); $cubs917popup = $('#cubs-9-17-pop-up');$cubs917button.click(function(){$cubs917popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs918button = $('#cubs-9-18-button'); $cubs918popup = $('#cubs-9-18-pop-up');$cubs918button.click(function(){$cubs918popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs919button = $('#cubs-9-19-button'); $cubs919popup = $('#cubs-9-19-pop-up');$cubs919button.click(function(){$cubs919popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs920button = $('#cubs-9-20-button'); $cubs920popup = $('#cubs-9-20-pop-up');$cubs920button.click(function(){$cubs920popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs921button = $('#cubs-9-21-button'); $cubs921popup = $('#cubs-9-21-pop-up');$cubs921button.click(function(){$cubs921popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs922button = $('#cubs-9-22-button'); $cubs922popup = $('#cubs-9-22-pop-up');$cubs922button.click(function(){$cubs922popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs924button = $('#cubs-9-24-button'); $cubs924popup = $('#cubs-9-24-pop-up');$cubs924button.click(function(){$cubs924popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs925button = $('#cubs-9-25-button'); $cubs925popup = $('#cubs-9-25-pop-up');$cubs925button.click(function(){$cubs925popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs926button = $('#cubs-9-26-button'); $cubs926popup = $('#cubs-9-26-pop-up');$cubs926button.click(function(){$cubs926popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs927button = $('#cubs-9-27-button'); $cubs927popup = $('#cubs-9-27-pop-up');$cubs927button.click(function(){$cubs927popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs928button = $('#cubs-9-28-button'); $cubs928popup = $('#cubs-9-28-pop-up');$cubs928button.click(function(){$cubs928popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $cubs929button = $('#cubs-9-29-button'); $cubs929popup = $('#cubs-9-29-pop-up');$cubs929button.click(function(){$cubs929popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
/*ILLINI FOOTBALL TABLE RESERVATIONS*/
    $illinifootballweek1button = $('#illini-football-week-1-button'); $illinifootballweek1popup = $('#illini-football-week-1-pop-up');$illinifootballweek1button.click(function(){$illinifootballweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinifootballweek2button = $('#illini-football-week-2-button'); $illinifootballweek2popup = $('#illini-football-week-2-pop-up');$illinifootballweek2button.click(function(){$illinifootballweek2popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinifootballweek3button = $('#illini-football-week-3-button'); $illinifootballweek3popup = $('#illini-football-week-3-pop-up');$illinifootballweek3button.click(function(){$illinifootballweek3popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinifootballweek4button = $('#illini-football-week-4-button'); $illinifootballweek4popup = $('#illini-football-week-4-pop-up');$illinifootballweek4button.click(function(){$illinifootballweek4popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinifootballweek5button = $('#illini-football-week-5-button'); $illinifootballweek5popup = $('#illini-football-week-5-pop-up');$illinifootballweek5button.click(function(){$illinifootballweek5popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinifootballweek6button = $('#illini-football-week-6-button'); $illinifootballweek6popup = $('#illini-football-week-6-pop-up');$illinifootballweek6button.click(function(){$illinifootballweek6popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinifootballweek7button = $('#illini-football-week-7-button'); $illinifootballweek7popup = $('#illini-football-week-7-pop-up');$illinifootballweek7button.click(function(){$illinifootballweek7popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinifootballweek8button = $('#illini-football-week-8-button'); $illinifootballweek8popup = $('#illini-football-week-8-pop-up');$illinifootballweek8button.click(function(){$illinifootballweek8popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinifootballweek9button = $('#illini-football-week-9-button'); $illinifootballweek9popup = $('#illini-football-week-9-pop-up');$illinifootballweek9button.click(function(){$illinifootballweek9popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinifootballweek10button = $('#illini-football-week-10-button'); $illinifootballweek10popup = $('#illini-football-week-10-pop-up');$illinifootballweek10button.click(function(){$illinifootballweek10popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinifootballweek11button = $('#illini-football-week-11-button'); $illinifootballweek11popup = $('#illini-football-week-11-pop-up');$illinifootballweek11button.click(function(){$illinifootballweek11popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinifootballweek12button = $('#illini-football-week-12-button'); $illinifootballweek12popup = $('#illini-football-week-12-pop-up');$illinifootballweek12button.click(function(){$illinifootballweek12popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
/*FROGS TABLE RESERVATIONS*/
    $frogsweek1button = $('#frogs-week-1-button'); $frogsweek1popup = $('#frogs-week-1-pop-up');$frogsweek1button.click(function(){$frogsweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $frogsweek2button = $('#frogs-week-2-button'); $frogsweek2popup = $('#frogs-week-2-pop-up');$frogsweek2button.click(function(){$frogsweek2popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $frogsweek3button = $('#frogs-week-3-button'); $frogsweek3popup = $('#frogs-week-3-pop-up');$frogsweek3button.click(function(){$frogsweek3popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $frogsweek4button = $('#frogs-week-4-button'); $frogsweek4popup = $('#frogs-week-4-pop-up');$frogsweek4button.click(function(){$frogsweek4popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $frogsweek5button = $('#frogs-week-5-button'); $frogsweek5popup = $('#frogs-week-5-pop-up');$frogsweek5button.click(function(){$frogsweek5popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $frogsweek6button = $('#frogs-week-6-button'); $frogsweek6popup = $('#frogs-week-6-pop-up');$frogsweek6button.click(function(){$frogsweek6popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $frogsweek7button = $('#frogs-week-7-button'); $frogsweek7popup = $('#frogs-week-7-pop-up');$frogsweek7button.click(function(){$frogsweek7popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $frogsweek8button = $('#frogs-week-8-button'); $frogsweek8popup = $('#frogs-week-8-pop-up');$frogsweek8button.click(function(){$frogsweek8popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $frogsweek9button = $('#frogs-week-9-button'); $frogsweek9popup = $('#frogs-week-9-pop-up');$frogsweek9button.click(function(){$frogsweek9popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $frogsweek10button = $('#frogs-week-10-button'); $frogsweek10popup = $('#frogs-week-10-pop-up');$frogsweek10button.click(function(){$frogsweek10popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $frogsweek11button = $('#frogs-week-11-button'); $frogsweek11popup = $('#frogs-week-11-pop-up');$frogsweek11button.click(function(){$frogsweek11popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $frogsweek12button = $('#frogs-week-12-button'); $frogsweek12popup = $('#frogs-week-12-pop-up');$frogsweek12button.click(function(){$frogsweek12popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
/*HOOSIERS FOOTBALL TABLE RESERVATIONS*/
    $hoosiersfootballweek1button = $('#hoosiers-football-week-1-button'); $hoosiersfootballweek1popup = $('#hoosiers-football-week-1-pop-up');$hoosiersfootballweek1button.click(function(){$hoosiersfootballweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersfootballweek2button = $('#hoosiers-football-week-2-button'); $hoosiersfootballweek2popup = $('#hoosiers-football-week-2-pop-up');$hoosiersfootballweek2button.click(function(){$hoosiersfootballweek2popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersfootballweek3button = $('#hoosiers-football-week-3-button'); $hoosiersfootballweek3popup = $('#hoosiers-football-week-3-pop-up');$hoosiersfootballweek3button.click(function(){$hoosiersfootballweek3popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersfootballweek4button = $('#hoosiers-football-week-4-button'); $hoosiersfootballweek4popup = $('#hoosiers-football-week-4-pop-up');$hoosiersfootballweek4button.click(function(){$hoosiersfootballweek4popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersfootballweek5button = $('#hoosiers-football-week-5-button'); $hoosiersfootballweek5popup = $('#hoosiers-football-week-5-pop-up');$hoosiersfootballweek5button.click(function(){$hoosiersfootballweek5popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersfootballweek6button = $('#hoosiers-football-week-6-button'); $hoosiersfootballweek6popup = $('#hoosiers-football-week-6-pop-up');$hoosiersfootballweek6button.click(function(){$hoosiersfootballweek6popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersfootballweek7button = $('#hoosiers-football-week-7-button'); $hoosiersfootballweek7popup = $('#hoosiers-football-week-7-pop-up');$hoosiersfootballweek7button.click(function(){$hoosiersfootballweek7popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersfootballweek8button = $('#hoosiers-football-week-8-button'); $hoosiersfootballweek8popup = $('#hoosiers-football-week-8-pop-up');$hoosiersfootballweek8button.click(function(){$hoosiersfootballweek8popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersfootballweek9button = $('#hoosiers-football-week-9-button'); $hoosiersfootballweek9popup = $('#hoosiers-football-week-9-pop-up');$hoosiersfootballweek9button.click(function(){$hoosiersfootballweek9popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersfootballweek10button = $('#hoosiers-football-week-10-button'); $hoosiersfootballweek10popup = $('#hoosiers-football-week-10-pop-up');$hoosiersfootballweek10button.click(function(){$hoosiersfootballweek10popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersfootballweek11button = $('#hoosiers-football-week-11-button'); $hoosiersfootballweek11popup = $('#hoosiers-football-week-11-pop-up');$hoosiersfootballweek11button.click(function(){$hoosiersfootballweek11popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersfootballweek12button = $('#hoosiers-football-week-12-button'); $hoosiersfootballweek12popup = $('#hoosiers-football-week-12-pop-up');$hoosiersfootballweek12button.click(function(){$hoosiersfootballweek12popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
/*RAZORBACKS TABLE RESERVATIONS*/
    $razorbacksweek1button = $('#razorbacks-week-1-button'); $razorbacksweek1popup = $('#razorbacks-week-1-pop-up');$razorbacksweek1button.click(function(){$razorbacksweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $razorbacksweek2button = $('#razorbacks-week-2-button'); $razorbacksweek2popup = $('#razorbacks-week-2-pop-up');$razorbacksweek2button.click(function(){$razorbacksweek2popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $razorbacksweek3button = $('#razorbacks-week-3-button'); $razorbacksweek3popup = $('#razorbacks-week-3-pop-up');$razorbacksweek3button.click(function(){$razorbacksweek3popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $razorbacksweek4button = $('#razorbacks-week-4-button'); $razorbacksweek4popup = $('#razorbacks-week-4-pop-up');$razorbacksweek4button.click(function(){$razorbacksweek4popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $razorbacksweek5button = $('#razorbacks-week-5-button'); $razorbacksweek5popup = $('#razorbacks-week-5-pop-up');$razorbacksweek5button.click(function(){$razorbacksweek5popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $razorbacksweek6button = $('#razorbacks-week-6-button'); $razorbacksweek6popup = $('#razorbacks-week-6-pop-up');$razorbacksweek6button.click(function(){$razorbacksweek6popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $razorbacksweek7button = $('#razorbacks-week-7-button'); $razorbacksweek7popup = $('#razorbacks-week-7-pop-up');$razorbacksweek7button.click(function(){$razorbacksweek7popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $razorbacksweek8button = $('#razorbacks-week-8-button'); $razorbacksweek8popup = $('#razorbacks-week-8-pop-up');$razorbacksweek8button.click(function(){$razorbacksweek8popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $razorbacksweek9button = $('#razorbacks-week-9-button'); $razorbacksweek9popup = $('#razorbacks-week-9-pop-up');$razorbacksweek9button.click(function(){$razorbacksweek9popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $razorbacksweek10button = $('#razorbacks-week-10-button'); $razorbacksweek10popup = $('#razorbacks-week-10-pop-up');$razorbacksweek10button.click(function(){$razorbacksweek10popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $razorbacksweek11button = $('#razorbacks-week-11-button'); $razorbacksweek11popup = $('#razorbacks-week-11-pop-up');$razorbacksweek11button.click(function(){$razorbacksweek11popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $razorbacksweek12button = $('#razorbacks-week-12-button'); $razorbacksweek12popup = $('#razorbacks-week-12-pop-up');$razorbacksweek12button.click(function(){$razorbacksweek12popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $razorbacksweek13button = $('#razorbacks-week-13-button'); $razorbacksweek13popup = $('#razorbacks-week-13-pop-up');$razorbacksweek13button.click(function(){$razorbacksweek13popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
/*TARHEELS FOOTBALL TABLE RESERVATIONS*/
    $tarheelsfootballweek1button = $('#tarheels-football-week-1-button'); $tarheelsfootballweek1popup = $('#tarheels-football-week-1-pop-up');$tarheelsfootballweek1button.click(function(){$tarheelsfootballweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsfootballweek2button = $('#tarheels-football-week-2-button'); $tarheelsfootballweek2popup = $('#tarheels-football-week-2-pop-up');$tarheelsfootballweek2button.click(function(){$tarheelsfootballweek2popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsfootballweek3button = $('#tarheels-football-week-3-button'); $tarheelsfootballweek3popup = $('#tarheels-football-week-3-pop-up');$tarheelsfootballweek3button.click(function(){$tarheelsfootballweek3popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsfootballweek4button = $('#tarheels-football-week-4-button'); $tarheelsfootballweek4popup = $('#tarheels-football-week-4-pop-up');$tarheelsfootballweek4button.click(function(){$tarheelsfootballweek4popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsfootballweek5button = $('#tarheels-football-week-5-button'); $tarheelsfootballweek5popup = $('#tarheels-football-week-5-pop-up');$tarheelsfootballweek5button.click(function(){$tarheelsfootballweek5popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsfootballweek6button = $('#tarheels-football-week-6-button'); $tarheelsfootballweek6popup = $('#tarheels-football-week-6-pop-up');$tarheelsfootballweek6button.click(function(){$tarheelsfootballweek6popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsfootballweek7button = $('#tarheels-football-week-7-button'); $tarheelsfootballweek7popup = $('#tarheels-football-week-7-pop-up');$tarheelsfootballweek7button.click(function(){$tarheelsfootballweek7popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsfootballweek8button = $('#tarheels-football-week-8-button'); $tarheelsfootballweek8popup = $('#tarheels-football-week-8-pop-up');$tarheelsfootballweek8button.click(function(){$tarheelsfootballweek8popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsfootballweek9button = $('#tarheels-football-week-9-button'); $tarheelsfootballweek9popup = $('#tarheels-football-week-9-pop-up');$tarheelsfootballweek9button.click(function(){$tarheelsfootballweek9popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsfootballweek10button = $('#tarheels-football-week-10-button'); $tarheelsfootballweek10popup = $('#tarheels-football-week-10-pop-up');$tarheelsfootballweek10button.click(function(){$tarheelsfootballweek10popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsfootballweek11button = $('#tarheels-football-week-11-button'); $tarheelsfootballweek11popup = $('#tarheels-football-week-11-pop-up');$tarheelsfootballweek11button.click(function(){$tarheelsfootballweek11popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsfootballweek12button = $('#tarheels-football-week-12-button'); $tarheelsfootballweek12popup = $('#tarheels-football-week-12-pop-up');$tarheelsfootballweek12button.click(function(){$tarheelsfootballweek12popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});

/*TRIVIA*/
    $theofficejuly31reservation.click(function(){
        $theofficejuly31.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
    $wrestlingaugust7reservation.click(function(){
        $wrestlingaugust7.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
    $newgirlaugust14reservation.click(function(){
        $newgirlaugust14.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
    $itsalwayssunnyaugust21reservation.click(function(){
        $itsalwayssunnyaugust21.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
    $theofficeaugust28reservation.click(function(){
        $theofficeaugust28.fadeIn();
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
    $thealleysuitereserve.click(function(){
        $thealleysuitepopup.fadeIn();
        $privatepartiesrooms.addClass('schedule-background-fade');
    });
    $thechapterroomreserve.click(function(){
        $thechapterroompopup.fadeIn();
        $privatepartiesrooms.addClass('schedule-background-fade');
    });
    $theclubhousereserve.click(function(){
        $theclubhousepopup.fadeIn();
        $privatepartiesrooms.addClass('schedule-background-fade');
    });
    $theredroomreserve.click(function(){
        $theredroompopup.fadeIn();
        $privatepartiesrooms.addClass('schedule-background-fade');
    });
    $therooftopreserve.click(function(){
        $therooftoppopup.fadeIn();
        $privatepartiesrooms.addClass('schedule-background-fade');
    });
    $viploftloungereserve.click(function(){
        $viploftloungepopup.fadeIn();
        $privatepartiesrooms.addClass('schedule-background-fade');
    });
    /*PARTY PACKAGE POP-UPS*/
    $partypackages.click(function(){
        $partypackagespopup.fadeIn();
        $privatepartiesrooms.addClass('schedule-background-fade');
    });
    $party1.click(function(){
        $partypackagesbasicpackage.fadeIn();
    });
    $party2.click(function(){
        $partypackagesstandardpackage.fadeIn();
    });
    $party3.click(function(){
        $partypackagespremiumpackage.fadeIn();
    });
    $party4.click(function(){
        $partypackagesthetopshelfpackage.fadeIn();
    });
    $party5.click(function(){
        $partypackagesrooftoppackage.fadeIn();
    });
    $party6.click(function(){
        $partypackagesthebachelorettepackage.fadeIn();
    });
    $party7.click(function(){
        $partypackagesbridalblackoutpackage.fadeIn();
    });
/*CALENDAR*/
    $tipsytuesdaybutton.click(function(){
        $tipsytuesdayspecials.fadeIn();
        $eventswrapper.addClass('schedule-background-fade');
    });
    $karaokethursdaybutton.click(function(){
        $karaokethursdayspecials.fadeIn();
        $eventswrapper.addClass('schedule-background-fade');
    });
    $bullridingfridaybutton.click(function(){
        $bullridingfridayspecials.fadeIn();
        $eventswrapper.addClass('schedule-background-fade');
    });

/***MOMENT***/
/*CONCERTS*/
    bizMarkie81619(showDate("2019-08-2"));
    sunStereo8919(showDate("2019-08-9"));
    fatPockets81619(showDate("2019-08-16"));
    lime81619(showDate("2019-08-16"));
    jimmySarr81719(showDate("2019-08-17"));
    gondwana83019(showDate("2019-08-30"));
    shinyRibs9619(showDate("2019-09-06"));
    lateralus9719(showDate("2019-09-07"));
    koeWetzel92819(showDate("2019-09-28"));
    flatlandCavalry101919(showDate("2019-10-19"));
    muscadineBloodline102419(showDate("2019-10-24"));
    masonRamsey11119(showDate("2019-11-1"));
    joshAbbottBand11919(showDate("2019-11-9"));
    randyRogersBand12719(showDate("2019-12-7"));
    morganEvans121319(showDate("2019-12-13"));
    
    function bizMarkie81619(daysAway){
        if(daysAway >= 1){
            $('.biz-markie-8-2-19').hide()
        }else{
            $('.biz-markie-8-2-19').show()
        }
    }
    function sunStereo8919(daysAway){
        if(daysAway >= 1){
            $('.sun-stereo-8-9-19').hide()
        }else{
            $('.sun-stereo-8-9-19').show()
        }
    }
    function fatPockets81619(daysAway){
        if(daysAway >= 1){
            $('.fat-pockets-8-16-19').hide()
        }else{
            $('.fat-pockets-8-16-19').show()
        }
    }
    function lime81619(daysAway){
        if(daysAway >= 1){
            $('.lime-8-16-19').hide()
        }else{
            $('.lime-8-16-19').show()
        }
    }
    function jimmySarr81719(daysAway){
        if(daysAway >= 1){
            $('.jimmy-sarr-8-17-19').hide()
        }else{
            $('.jimmy-sarr-8-17-19').show()
        }
    }
    function gondwana83019(daysAway){
        if(daysAway >= 1){
            $('.gondwana-8-30-19').hide()
        }else{
            $('.gondwana-8-30-19').show()
        }
    }
    function shinyRibs9619(daysAway){
        if(daysAway >= 1){
            $('.shinyribs-9-6-19').hide()
        }else{
            $('.shinyribs-9-6-19').show()
        }
    }
    function lateralus9719(daysAway){
        if(daysAway >= 1){
            $('.lateralus-9-7-19').hide()
        }else{
            $('.lateralus-9-7-19').show()
        }
    }
    function koeWetzel92819(daysAway){
        if(daysAway >= 1){
            $('.koe-wetzel-9-28-19').hide()
        }else{
            $('.koe-wetzel-9-28-19').show()
        }
    }
    function flatlandCavalry101919(daysAway){
        if(daysAway >= 1){
            $('.flatland-cavalry-10-19-19').hide()
        }else{
            $('.flatland-cavalry-10-19-19').show()
        }
    }
    function muscadineBloodline102419(daysAway){
        if(daysAway >= 1){
            $('.muscadine-bloodline-10-24-19').hide()
        }else{
            $('.muscadine-bloodline-10-24-19').show()
        }
    }
    function masonRamsey11119(daysAway){
        if(daysAway >= 1){
            $('.mason-ramsey-11-1-19').hide()
        }else{
            $('.mason-ramsey-11-1-19').show()
        }
    }
    function joshAbbottBand11919(daysAway){
        if(daysAway >= 1){
            $('.josh-abbott-band-11-9-19').hide()
        }else{
            $('.josh-abbott-band-11-9-19').show()
        }
    }
    function randyRogersBand12719(daysAway){
        if(daysAway >= 1){
            $('.randy-rogers-band-12-7-19').hide()
        }else{
            $('.randy-rogers-band-12-7-19').show()
        }
    }
    function morganEvans121319(daysAway){
        if(daysAway >= 1){
            $('.morgan-evans-12-13-19').hide()
        }else{
            $('.morgan-evans-12-13-19').show()
        }
    }


    function showDate(val) {
        // for now freezing the "now" so that precise testcases can be written.
        // var currDate = moment.now();
        var currDate = moment();
        var dateToTest = moment(val);
        // if dateToTest will always be in past, use currDate as the base to diff, else be prepared to handle the negative outcomes. 
        var result = currDate.diff(dateToTest, 'days')
        console.log(result);

        return result;
    }

/*MAIN UPCOMING CAROUSEL*/
    $('.event-wrapper').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      lazyLoad: 'ondemand',
      prevArrow: $('#main-upcoming-arrows-left'),
      nextArrow: $('#main-upcoming-arrows-right')
      });
/*MAIN INSTAGRAM FEED*/
    var feed = new Instafeed({
        get: 'user',
        limit: 50,
        sortBy:'most-recent',
        userId: 337719583,
        resolution: 'standard_resolution',
        accessToken: '337719583.1677ed0.4994e26055cc4cf595c0cb6853f12337',
        template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="insta-likes"><div>{{likes}} <i class="fa fa-heart"></i></div><i class="fab fa-instagram insta-ig"></i><div class="insta-caption">{{caption}}</div></div></a></li>',
      
       /* <div class="ig-caption">{{caption}}</div>*/
      after: function() {
     
        $('#instafeed').slick({
          arrows: true,
          autoplay: true,
          autoplaySpeed: 2000,
          prevArrow: $('#arrow-left'),
          nextArrow: $('#arrow-right'),
          slidesToShow: 4,
          slidesToScroll: 1
        });
      },
      success: function() {
      }
    });
    feed.run();
/*CONCERT CAROUSEL*/
    $('.concerts-banner').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      lazyLoad: 'ondemand',
      pauseOnHover: false
      });
/*MAIN EVENTS CAROUSEL*/
    $('.main-events-carousel-container').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2500,
      lazyLoad: 'ondemand',
      pauseOnHover: false,
      prevArrow: $('#main-events-arrows-left'),
      nextArrow: $('#main-events-arrows-right')
      });
});