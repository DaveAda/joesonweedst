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
    /*MOBILE*/
    var $aboutmobile = $('#about-mobile');
    var $aboutdropdownmobile = $('.about-dropdown-mobile');
    var $burger1 = $('#burger-1');
    var $burger2 = $('#burger-2');
    var $burger3 = $('#burger-3');   
    var $bodymobile = $('.body-mobile');
    var $headermobile = $('.header-mobile');
    var $headermobilecontainer = $('.header-mobile-container');
    var $headermobilelogo = $('.header-mobile-logo');
    var $joesmenumobile = $('#joes-menu-mobile');
    var $joesmenudropdownmobile = $('.joes-menu-dropdown-mobile');
    var $mobileaboutarrow = $('.mobile-about-arrow');
    var $mobilehamburger = $('.mobile-hamburger');
    var $mobilehamburgercontainer = $('.mobile-hamburger-container');
    var $mobileheaderway = $('.mobile-header-way');
    var $mobilemenuarrow = $('.mobile-menu-arrow');
    /*HOMEPAGE*/
    var $faqminus1 = $('#faq-minus-1'); var $faqminus2 = $('#faq-minus-2'); var $faqminus3 = $('#faq-minus-3'); var $faqminus4 = $('#faq-minus-4'); var $faqminus5 = $('#faq-minus-5');
    var $faqplus1 = $('#faq-plus-1'); var $faqplus2 = $('#faq-plus-2'); var $faqplus3 = $('#faq-plus-3'); var $faqplus4 = $('#faq-plus-4'); var $faqplus5 = $('#faq-plus-5');
    var $answersboxmap = ('.answers-box-map');
    var $answer1 = $('#answer-1'); var $answer2 = $('#answer-2'); var $answer3 = $('#answer-3'); var $answer4 = $('#answer-4'); var $answer5 = $('#answer-5');
    var $question1 = $('#question-1'); var $question2 = $('#question-2'); var $question3 = $('#question-3'); var $question4 = $('#question-4'); var $question5 = $('#question-5');
    /*UP NEXT TOP*/
    var $kindcalaway11719next = $('.king-calaway-11-7-19-next');
    /*EVENTS*/
    var $bullridingfridaybutton = $('#bull-riding-friday-button');
    var $bullridingfridayspecials = $('.bull-riding-friday-specials');
    var $karaokethursdaybutton = $('#karaoke-thursday-button');
    var $karaokethursdayspecials = $('.karaoke-thursday-specials');
    var $tipsytuesdaybutton = $('#tipsy-tuesday-button');
    var $tipsytuesdayspecials = $('.tipsy-tuesday-specials');
    var $eventswrapper = $('.events-wrapper');
    /*SPECIAL EVENTS*/
   
    /*CONCERTS*/
    var $concertlistinginfodropdown = $('.concert-listing-info-dropdown');

    var $rileygreen1320infobutton = $('#riley-green-1-3-20-info-button');
    var $rileygreen1320dropdown = $('#riley-green-1-3-20-dropdown');
    var $johnnyalletto1420infobutton = $('#johnny-alletto-1-4-20-info-button');
    var $johnnyalletto1420dropdown = $('#johnny-alletto-1-4-20-dropdown');
    var $chief1420infobutton = $('#chief-1-4-20-info-button');
    var $chief1420dropdown = $('#chief-1-4-20-dropdown');
    var $countryforacause1520infobutton = $('#country-for-a-cause-1-5-20-info-button');
    var $countryforacause1520dropdown = $('#country-for-a-cause-1-5-20-dropdown');
    var $gonewest1920infobutton = $('#gone-west-1-9-20-info-button');
    var $gonewest1920dropdown = $('#gone-west-1-9-20-dropdown');
    var $rendition11020infobutton = $('#rendition-1-10-20-info-button');
    var $rendition11020dropdown = $('#rendition-1-10-20-dropdown');
    var $trb11120infobutton = $('#trb-1-11-20-info-button');
    var $trb11120dropdown = $('#trb-1-11-20-dropdown');
    var $keithrelief11220infobutton = $('#keith-relief-1-12-20-info-button');
    var $keithrelief11220dropdown = $('#keith-relief-1-12-20-dropdown');
    var $pie11720infobutton = $('#pie-1-17-20-info-button');
    var $pie11720dropdown = $('#pie-1-17-20-dropdown');
    var $thbn11820infobutton = $('#thbn-1-18-20-info-button');
    var $thbn11820dropdown = $('#thbn-1-18-20-dropdown');
    var $rfr12520infobutton = $('#rfr-1-25-20-info-button');
    var $rfr12520dropdown = $('#rfr-1-25-20-dropdown');
    var $hardy13120infobutton = $('#hardy-1-31-20-info-button');
    var $hardy13120dropdown = $('#hardy-1-31-20-dropdown');
    var $jasonboland2620infobutton = $('#jason-boland-2-6-20-info-button');
    var $jasonboland2620dropdown = $('#jason-boland-2-6-20-dropdown');
    var $mattstell2720infobutton = $('#matt-stell-2-7-20-info-button');
    var $mattstell2720dropdown = $('#matt-stell-2-7-20-dropdown');
    var $tbbn2820infobutton = $('#tbbn-2-8-20-info-button');
    var $tbbn2820dropdown = $('#tbbn-2-8-20-dropdown');
    var $thecadillacthree22120infobutton = $('#the-cadillac-three-2-21-20-info-button');
    var $thecadillacthree22120dropdown = $('#the-cadillac-three-2-21-20-dropdown');
    var $canaansmith22220infobutton = $('#canaan-smith-2-22-20-info-button');
    var $canaansmith22220dropdown = $('#canaan-smith-2-22-20-dropdown');
    var $ryanhurd22720infobutton = $('#ryan-hurd-2-27-20-info-button');
    var $ryanhurd22720dropdown = $('#ryan-hurd-2-27-20-dropdown');
    var $ryanhurd22820infobutton = $('#ryan-hurd-2-28-20-info-button');
    var $ryanhurd22820dropdown = $('#ryan-hurd-2-28-20-dropdown');
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
    var $featuredsportsevents = $('.featured-sports-events');
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
    var $friendsjanuary8reservation = $('#friends-january-8-reservation');
    var $friendsjanuary8 = $('#friends-january-8');
    var $theofficejanuary15 = $('#the-office-january-15');
    var $theofficejanuary15reservation = $('#the-office-january-15-reservation');
    var $seinfeldjanuary22reservation = $('#seinfeld-january-22-reservation');
    var $seinfeldjanuary22 = $('#seinfeld-january-22');
    var $harrypotterjanuary29reservation = $('#harry-potter-january-29-reservation');
    var $harrypotterjanuary29 = $('#harry-potter-january-29');
    var $disneypixarfebruary5reservation = $('#disney-pixar-february-5-reservation');
    var $disneypixarfebruary5 = $('#disney-pixar-february-5');
    var $romcomfebruary12reservation = $('#rom-com-february-12-reservation');
    var $romcomfebruary12 = $('#rom-com-february-12');
    var $popculturefebruary19reservation = $('#pop-culture-february-19-reservation');
    var $popculturefebruary19 = $('#pop-culture-february-19');
    var $marvelcomicsfebruary26reservation = $('#marvel-comics-february-26-reservation');
    var $marvelcomicsfebruary26 = $('#marvel-comics-february-26');
    
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
/*HEADER MOBILE DROPDOWN*/
    $aboutmobile.click(function(){
        $aboutdropdownmobile.slideToggle();
        $mobilemenuarrow.removeClass('head-arrow-flip');
        $mobileaboutarrow.toggleClass('head-arrow-flip');
        $joesmenudropdownmobile.slideUp();
    });
    $joesmenumobile.click(function(){
        $joesmenudropdownmobile.slideToggle();
        $mobilemenuarrow.toggleClass('head-arrow-flip');
        $mobileaboutarrow.removeClass('head-arrow-flip');
        $aboutdropdownmobile.slideUp();
    });
    $mobilehamburgercontainer.click(function(){
        $bodymobile.fadeToggle();
        $burger1.toggleClass('burger1b');
        $burger2.toggleClass('burger2b');
        $burger3.toggleClass('burger3b');
        $headermobile.toggleClass('header-mobile-faded');
        $headermobilecontainer.toggleClass('header-mobile-container-faded');
        $headermobilelogo.toggleClass('mobile-header-logo-fade');
        $mobilehamburger.toggleClass('mobile-hamburger-fixed');
    });

/*FAQ TOGGLE*/
    $question1.click(function(){
        $faqminus1.toggle();
        $faqplus1.toggle();
            $faqminus2.hide();
            $faqplus2.show();
            $faqminus3.hide();
            $faqplus3.show();
            $faqminus4.hide();
            $faqplus4.show();
            $faqminus5.hide();
            $faqplus5.show();
        $answer1.toggle(); 
        $answer2.hide();
        $answer3.hide();
        $answer4.hide();
        $answer5.hide();
        
    })
    $question2.click(function(){
        $faqminus2.toggle();
        $faqplus2.toggle();
            $faqminus1.hide();
            $faqplus1.show();
            $faqminus3.hide();
            $faqplus3.show();
            $faqminus4.hide();
            $faqplus4.show();
            $faqminus5.hide();
            $faqplus5.show();
        $answer1.hide(); 
        $answer2.toggle();
        $answer3.hide();
        $answer4.hide();
        $answer5.hide(); 
    })
    $question3.click(function(){
        $faqminus3.toggle();
        $faqplus3.toggle();
            $faqminus1.hide();
            $faqplus1.show();
            $faqminus2.hide();
            $faqplus2.show();
            $faqminus4.hide();
            $faqplus4.show();
            $faqminus5.hide();
            $faqplus5.show();
        $answer1.hide(); 
        $answer2.hide();
        $answer3.toggle();
        $answer4.hide();
        $answer5.hide(); 
    })
    $question4.click(function(){
        $faqminus4.toggle();
        $faqplus4.toggle();
            $faqminus1.hide();
            $faqplus1.show();
            $faqminus2.hide();
            $faqplus2.show();
            $faqminus3.hide();
            $faqplus3.show();
            $faqminus5.hide();
            $faqplus5.show();
        $answer1.hide(); 
        $answer2.hide();
        $answer3.hide();
        $answer4.toggle();
        $answer5.hide(); 
    })
    $question5.click(function(){
        $faqminus5.toggle();
        $faqplus5.toggle();
            $faqminus1.hide();
            $faqplus1.show();
            $faqminus2.hide();
            $faqplus2.show();
            $faqminus3.hide();
            $faqplus3.show();
            $faqminus4.hide();
            $faqplus4.show();
        $answer1.hide(); 
        $answer2.hide();
        $answer3.hide();
        $answer4.hide();
        $answer5.toggle(); 
    })
/*EVENTS DROPDOWNS*/
    
/*CONCERTS DROPDOWNS*/
    $rileygreen1320infobutton.click(function(){
        $rileygreen1320dropdown.slideDown();
    });
    $johnnyalletto1420infobutton.click(function(){
        $johnnyalletto1420dropdown.slideDown();
    });
    $chief1420infobutton.click(function(){
        $chief1420dropdown.slideDown();
    });
    $countryforacause1520infobutton.click(function(){
        $countryforacause1520dropdown.slideDown();
    });
    $gonewest1920infobutton.click(function(){
        $gonewest1920dropdown.slideDown();
    });
    $rendition11020infobutton.click(function(){
        $rendition11020dropdown.slideDown();
    });
    $trb11120infobutton.click(function(){
        $trb11120dropdown.slideDown();
    });
    $keithrelief11220infobutton.click(function(){
        $keithrelief11220dropdown.slideDown();
    });
    $pie11720infobutton.click(function(){
        $pie11720dropdown.slideDown();
    });
    $thbn11820infobutton.click(function(){
        $thbn11820dropdown.slideDown();
    });
    $rfr12520infobutton.click(function(){
        $rfr12520dropdown.slideDown();
    });
    $hardy13120infobutton.click(function(){
        $hardy13120dropdown.slideDown();
    });
    $jasonboland2620infobutton.click(function(){
        $jasonboland2620dropdown.slideDown();
    });
    $mattstell2720infobutton.click(function(){
        $mattstell2720dropdown.slideDown();
    });
    $tbbn2820infobutton.click(function(){
        $tbbn2820dropdown.slideDown();
    });
    $thecadillacthree22120infobutton.click(function(){
        $thecadillacthree22120dropdown.slideDown();
    });
    $canaansmith22220infobutton.click(function(){
        $canaansmith22220dropdown.slideDown();
    });
    $ryanhurd22720infobutton.click(function(){
        $ryanhurd22720dropdown.slideDown();
    });
    $ryanhurd22820infobutton.click(function(){
        $ryanhurd22820dropdown.slideDown();
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
        $featuredsportsevents.hide();
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
        $featuredsportsevents.hide();
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
        $featuredsportsevents.hide();
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
        $featuredsportsevents.hide();
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
        $featuredsportsevents.hide();
    });
    $hoosiers.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.show();
        $hoosiersbasketballbutton.css('color', '#B5A267');
        $hoosiersfootballschedule.hide();
        $hoosiersfootballbutton.css('color', '#fff');
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
        $featuredsportsevents.hide();
    });
    $hoosiersbasketballbutton.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.show();
        $hoosiersbasketballbutton.css('color', '#B5A267');
        $hoosiersfootballschedule.hide();
        $hoosiersfootballbutton.css('color', '#fff');
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
        $featuredsportsevents.hide();
    });
    $hoosiersfootballbutton.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersbasketballbutton.css('color', '#fff');
        $hoosiersfootballschedule.show();
        $hoosiersfootballbutton.css('color', '#B5A267');
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
        $featuredsportsevents.hide();
    });
    $illini.click(function(){
        $bearsschedule.hide();
        $blackhawksschedule.hide();
        $bullsschedule.hide();
        $cubsschedule.hide();
        $frogsschedule.hide();
        $hoosiersbasketballschedule.hide();
        $hoosiersfootballschedule.hide();
        $illinibasketballschedule.show();
        $illinibasketballbutton.css('color', '#B5A267');
        $illinifootballschedule.hide();
        $illinifootballbutton.css('color', '#fff');
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
        $featuredsportsevents.hide();
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
        $illinibasketballbutton.css('color', '#B5A267');
        $illinifootballschedule.hide();
        $illinifootballbutton.css('color', '#fff');
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
        $featuredsportsevents.hide();
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
        $illinibasketballbutton.css('color', '#fff');
        $illinifootballschedule.show();
        $illinifootballbutton.css('color', '#B5A267');
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
        $featuredsportsevents.hide();
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
        $featuredsportsevents.hide();
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
        $tarheelsbasketballschedule.show();
        $tarheelsbasketballbutton.css('color', '#B5A267');
        $tarheelsfootballschedule.hide();
        $tarheelsfootballbutton.css('color', '#fff');
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '1');
        $featuredsportsevents.hide();
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
        $tarheelsbasketballbutton.css('color', '#B5A267');
        $tarheelsfootballschedule.hide();
        $tarheelsfootballbutton.css('color', '#fff');
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '1');
        $featuredsportsevents.hide();
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
        $tarheelsbasketballbutton.css('color', '#fff');
        $tarheelsfootballschedule.show();
        $tarheelsfootballbutton.css('color', '#B5A267');
        $bears.css('opacity', '.2');
        $blackhawks.css('opacity', '.2');
        $bulls.css('opacity', '.2');
        $cubs.css('opacity', '.2');
        $hoosiers.css('opacity', '.2');
        $frogs.css('opacity', '.2');
        $illini.css('opacity', '.2');
        $razorbacks.css('opacity', '.2');
        $tarheels.css('opacity', '1');
        $featuredsportsevents.hide();
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
/*BULLS TABLE RESERVATIONS*/
    /*OCTOBER 2019*/
    $bulls1023button = $('#bulls-10-23-button'); $bulls1023popup = $('#bulls-10-23-pop-up');$bulls1023button.click(function(){$bulls1023popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1025button =$('#bulls-10-25-button'); $bulls1025popup = $('#bulls-10-25-pop-up');$bulls1025button.click(function(){$bulls1025popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1026button = $('#bulls-10-26-button'); $bulls1026popup = $('#bulls-10-26-pop-up');$bulls1026button.click(function(){$bulls1026popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1028button =$('#bulls-10-28-button'); $bulls1028popup = $('#bulls-10-28-pop-up');$bulls1028button.click(function(){$bulls1028popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1030button = $('#bulls-10-30-button'); $bulls1030popup = $('#bulls-10-30-pop-up');$bulls1030button.click(function(){$bulls1030popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*NOVEMBER 2019*/
    $bulls111button = $('#bulls-11-1-button'); $bulls111popup = $('#bulls-11-1-pop-up');$bulls111button.click(function(){$bulls111popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bullseleven3button = $('#bulls-11-3-button'); $bullseleven3popup = $('#bulls-11-3-pop-up');$bullseleven3button.click(function(){$bullseleven3popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bullseleven5button = $('#bulls-11-5-button'); $bullseleven5popup = $('#bulls-11-5-pop-up');$bullseleven5button.click(function(){$bullseleven5popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bullseleven6button = $('#bulls-11-6-button'); $bullseleven6popup = $('#bulls-11-6-pop-up');$bullseleven6button.click(function(){$bullseleven6popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bullseleven9button = $('#bulls-11-9-button'); $bullseleven9popup = $('#bulls-11-9-pop-up');$bullseleven9button.click(function(){$bullseleven9popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1112button = $('#bulls-11-12-button'); $bulls1112popup = $('#bulls-11-12-pop-up');$bulls1112button.click(function(){$bulls1112popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1114button = $('#bulls-11-14-button'); $bulls1114popup = $('#bulls-11-14-pop-up');$bulls1114button.click(function(){$bulls1114popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1116button = $('#bulls-11-16-button'); $bulls1116popup = $('#bulls-11-16-pop-up');$bulls1116button.click(function(){$bulls1116popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1118button = $('#bulls-11-18-button'); $bulls1118popup = $('#bulls-11-18-pop-up');$bulls1118button.click(function(){$bulls1118popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1120button = $('#bulls-11-20-button'); $bulls1120popup = $('#bulls-11-20-pop-up');$bulls1120button.click(function(){$bulls1120popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1122button = $('#bulls-11-22-button'); $bulls1122popup = $('#bulls-11-22-pop-up');$bulls1122button.click(function(){$bulls1122popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1123button = $('#bulls-11-23-button'); $bulls1123popup = $('#bulls-11-23-pop-up');$bulls1123button.click(function(){$bulls1123popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1125button = $('#bulls-11-25-button'); $bulls1125popup = $('#bulls-11-25-pop-up');$bulls1125button.click(function(){$bulls1125popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1127button = $('#bulls-11-27-button'); $bulls1127popup = $('#bulls-11-27-pop-up');$bulls1127button.click(function(){$bulls1127popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1129button = $('#bulls-11-29-button'); $bulls1129popup = $('#bulls-11-29-pop-up');$bulls1129button.click(function(){$bulls1129popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*DECEMBER 2019*/
    $bullstwelve2button = $('#bulls-12-2-button'); $bullstwelve2popup = $('#bulls-12-2-pop-up');$bullstwelve2button.click(function(){$bullstwelve2popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bullstwelve4button = $('#bulls-12-4-button'); $bullstwelve4popup = $('#bulls-12-4-pop-up');$bullstwelve4button.click(function(){$bullstwelve4popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bullstwelve6button = $('#bulls-12-6-button'); $bullstwelve6popup = $('#bulls-12-6-pop-up');$bullstwelve6button.click(function(){$bullstwelve6popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bullstwelve8button = $('#bulls-12-8-button'); $bullstwelve8popup = $('#bulls-12-8-pop-up');$bullstwelve8button.click(function(){$bullstwelve8popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bullstwelve9button = $('#bulls-12-9-button'); $bullstwelve9popup = $('#bulls-12-9-pop-up');$bullstwelve9button.click(function(){$bullstwelve9popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1211button = $('#bulls-12-11-button'); $bulls1211popup = $('#bulls-12-11-pop-up');$bulls1211button.click(function(){$bulls1211popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1213button = $('#bulls-12-13-button'); $bulls1213popup = $('#bulls-12-13-pop-up');$bulls1213button.click(function(){$bulls1213popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1214button = $('#bulls-12-14-button'); $bulls1214popup = $('#bulls-12-14-pop-up');$bulls1214button.click(function(){$bulls1214popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1216button = $('#bulls-12-16-button'); $bulls1216popup = $('#bulls-12-16-pop-up');$bulls1216button.click(function(){$bulls1216popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1218button = $('#bulls-12-18-button'); $bulls1218popup = $('#bulls-12-18-pop-up');$bulls1218button.click(function(){$bulls1218popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1221button = $('#bulls-12-21-button'); $bulls1221popup = $('#bulls-12-21-pop-up');$bulls1221button.click(function(){$bulls1221popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1223button = $('#bulls-12-23-button'); $bulls1223popup = $('#bulls-12-23-pop-up');$bulls1223button.click(function(){$bulls1223popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1228button = $('#bulls-12-28-button'); $bulls1228popup = $('#bulls-12-28-pop-up');$bulls1228button.click(function(){$bulls1228popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls1230button = $('#bulls-12-30-button'); $bulls1230popup = $('#bulls-12-30-pop-up');$bulls1230button.click(function(){$bulls1230popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*JANUARY 2019*/
    $bulls12button = $('#bulls-1-2-button'); $bulls12popup = $('#bulls-1-2-pop-up');$bulls12button.click(function(){$bulls12popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls14button = $('#bulls-1-4-button'); $bulls14popup = $('#bulls-1-4-pop-up');$bulls14button.click(function(){$bulls14popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls16button = $('#bulls-1-6-button'); $bulls16popup = $('#bulls-1-6-pop-up');$bulls16button.click(function(){$bulls16popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls18button = $('#bulls-1-8-button'); $bulls18popup = $('#bulls-1-8-pop-up');$bulls18button.click(function(){$bulls18popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls110button = $('#bulls-1-10-button'); $bulls110popup = $('#bulls-1-10-pop-up');$bulls110button.click(function(){$bulls110popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls111button = $('#bulls-1-11-button'); $bulls111popup = $('#bulls-1-11-pop-up');$bulls111button.click(function(){$bulls111popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls113button = $('#bulls-1-13-button'); $bulls113popup = $('#bulls-1-13-pop-up');$bulls113button.click(function(){$bulls113popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls115button = $('#bulls-1-15-button'); $bulls115popup = $('#bulls-1-15-pop-up');$bulls115button.click(function(){$bulls115popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls117button = $('#bulls-1-17-button'); $bulls117popup = $('#bulls-1-17-pop-up');$bulls117button.click(function(){$bulls117popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls118button = $('#bulls-1-18-button'); $bulls118popup = $('#bulls-1-18-pop-up');$bulls118button.click(function(){$bulls118popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls120button = $('#bulls-1-20-button'); $bulls120popup = $('#bulls-1-20-pop-up');$bulls120button.click(function(){$bulls120popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls122button = $('#bulls-1-22-button'); $bulls122popup = $('#bulls-1-22-pop-up');$bulls122button.click(function(){$bulls122popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls124button = $('#bulls-1-24-button'); $bulls124popup = $('#bulls-1-24-pop-up');$bulls124button.click(function(){$bulls124popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls125button = $('#bulls-1-25-button'); $bulls125popup = $('#bulls-1-25-pop-up');$bulls125button.click(function(){$bulls125popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls127button = $('#bulls-1-27-button'); $bulls127popup = $('#bulls-1-27-pop-up');$bulls127button.click(function(){$bulls127popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls129button = $('#bulls-1-29-button'); $bulls129popup = $('#bulls-1-29-pop-up');$bulls129button.click(function(){$bulls129popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls131button = $('#bulls-1-31-button'); $bulls131popup = $('#bulls-1-31-pop-up');$bulls131button.click(function(){$bulls131popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*FEBRUARY 2019*/
    $bulls22button = $('#bulls-2-2-button'); $bulls22popup = $('#bulls-2-2-pop-up');$bulls22button.click(function(){$bulls22popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls26button = $('#bulls-2-6-button'); $bulls26popup = $('#bulls-2-6-pop-up');$bulls26button.click(function(){$bulls26popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls29button = $('#bulls-2-9-button'); $bulls29popup = $('#bulls-2-9-pop-up');$bulls29button.click(function(){$bulls29popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls211button = $('#bulls-2-11-button'); $bulls211popup = $('#bulls-2-11-pop-up');$bulls211button.click(function(){$bulls211popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls220button = $('#bulls-2-20-button'); $bulls220popup = $('#bulls-2-20-pop-up');$bulls220button.click(function(){$bulls220popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls222button = $('#bulls-2-22-button'); $bulls222popup = $('#bulls-2-22-pop-up');$bulls222button.click(function(){$bulls222popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls223button = $('#bulls-2-23-button'); $bulls223popup = $('#bulls-2-23-pop-up');$bulls223button.click(function(){$bulls223popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls225button = $('#bulls-2-25-button'); $bulls225popup = $('#bulls-2-25-pop-up');$bulls225button.click(function(){$bulls225popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls229button = $('#bulls-2-29-button'); $bulls229popup = $('#bulls-2-29-pop-up');$bulls229button.click(function(){$bulls229popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*MARCH 2019*/
    $bulls32button = $('#bulls-3-2-button'); $bulls32popup = $('#bulls-3-2-pop-up');$bulls32button.click(function(){$bulls32popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls34button = $('#bulls-3-4-button'); $bulls34popup = $('#bulls-3-4-pop-up');$bulls34button.click(function(){$bulls34popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls36button = $('#bulls-3-6-button'); $bulls36popup = $('#bulls-3-6-pop-up');$bulls36button.click(function(){$bulls36popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls38button = $('#bulls-3-8-button'); $bulls38popup = $('#bulls-3-8-pop-up');$bulls38button.click(function(){$bulls38popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls310button = $('#bulls-3-10-button'); $bulls310popup = $('#bulls-3-10-pop-up');$bulls310button.click(function(){$bulls310popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls312button = $('#bulls-3-12-button'); $bulls312popup = $('#bulls-3-12-pop-up');$bulls312button.click(function(){$bulls312popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls314button = $('#bulls-3-14-button'); $bulls314popup = $('#bulls-3-14-pop-up');$bulls314button.click(function(){$bulls314popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls315button = $('#bulls-3-15-button'); $bulls315popup = $('#bulls-3-15-pop-up');$bulls315button.click(function(){$bulls315popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls318button = $('#bulls-3-18-button'); $bulls318popup = $('#bulls-3-18-pop-up');$bulls318button.click(function(){$bulls318popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls320button = $('#bulls-3-20-button'); $bulls320popup = $('#bulls-3-20-pop-up');$bulls320button.click(function(){$bulls320popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls321button = $('#bulls-3-21-button'); $bulls321popup = $('#bulls-3-21-pop-up');$bulls321button.click(function(){$bulls321popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls323button = $('#bulls-3-23-button'); $bulls323popup = $('#bulls-3-23-pop-up');$bulls323button.click(function(){$bulls323popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls326button = $('#bulls-3-26-button'); $bulls326popup = $('#bulls-3-26-pop-up');$bulls326button.click(function(){$bulls326popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls328button = $('#bulls-3-28-button'); $bulls328popup = $('#bulls-3-28-pop-up');$bulls328button.click(function(){$bulls328popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls330button = $('#bulls-3-30-button'); $bulls330popup = $('#bulls-3-30-pop-up');$bulls330button.click(function(){$bulls330popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    /*APRIL 2019*/
    $bulls43button = $('#bulls-4-3-button'); $bulls43popup = $('#bulls-4-3-pop-up');$bulls43button.click(function(){$bulls43popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls45button = $('#bulls-4-5-button'); $bulls45popup = $('#bulls-4-5-pop-up');$bulls45button.click(function(){$bulls45popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls47button = $('#bulls-4-7-button'); $bulls47popup = $('#bulls-4-7-pop-up');$bulls47button.click(function(){$bulls47popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls48button = $('#bulls-4-8-button'); $bulls48popup = $('#bulls-4-8-pop-up');$bulls48button.click(function(){$bulls48popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls411button = $('#bulls-4-11-button'); $bulls411popup = $('#bulls-4-11-pop-up');$bulls411button.click(function(){$bulls411popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls413button = $('#bulls-4-13-button'); $bulls413popup = $('#bulls-4-13-pop-up');$bulls413button.click(function(){$bulls413popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls415button = $('#bulls-4-15-button'); $bulls415popup = $('#bulls-4-15-pop-up');$bulls415button.click(function(){$bulls415popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
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
/*HOOSIERS BASKETBALL SCHEDULE TIMER*/
    hoosiersBasketballGame127(showDate("2019-12-8"));function hoosiersBasketballGame127(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-12-7-timer').hide()}}
    hoosiersBasketballGame1210(showDate("2019-12-11"));function hoosiersBasketballGame1210(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-12-10-timer').hide()}}
    hoosiersBasketballGame1213(showDate("2019-12-14"));function hoosiersBasketballGame1213(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-12-13-timer').hide()}}
    hoosiersBasketballGame1221(showDate("2019-12-22"));function hoosiersBasketballGame1221(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-12-21-timer').hide()}}
    hoosiersBasketballGame1229(showDate("2019-12-30"));function hoosiersBasketballGame1229(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-12-29-timer').hide()}}
    hoosiersBasketballGame14(showDate("2020-1-5"));function hoosiersBasketballGame14(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-1-4-timer').hide()}}
    hoosiersBasketballGame18(showDate("2020-1-9"));function hoosiersBasketballGame18(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-1-8-timer').hide()}}
    hoosiersBasketballGame111(showDate("2020-1-12"));function hoosiersBasketballGame111(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-1-11-timer').hide()}}
    hoosiersBasketballGame115(showDate("2020-1-16"));function hoosiersBasketballGame115(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-1-15-timer').hide()}}
    hoosiersBasketballGame118(showDate("2020-1-19"));function hoosiersBasketballGame118(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-1-18-timer').hide()}}
    hoosiersBasketballGame123(showDate("2020-1-23"));function hoosiersBasketballGame123(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-1-23-timer').hide()}}
    hoosiersBasketballGame126(showDate("2020-1-26"));function hoosiersBasketballGame126(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-1-26-timer').hide()}}
    hoosiersBasketballGame129(showDate("2020-1-30"));function hoosiersBasketballGame129(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-1-29-timer').hide()}}
    hoosiersBasketballGame21(showDate("2020-2-2"));function hoosiersBasketballGame21(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-2-1-timer').hide()}}
    hoosiersBasketballGame28(showDate("2020-2-9"));function hoosiersBasketballGame28(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-2-8-timer').hide()}}
    hoosiersBasketballGame213(showDate("2020-2-14"));function hoosiersBasketballGame213(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-2-13-timer').hide()}}
    hoosiersBasketballGame216(showDate("2020-2-17"));function hoosiersBasketballGame216(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-2-16-timer').hide()}}
    hoosiersBasketballGame219(showDate("2020-2-20"));function hoosiersBasketballGame219(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-2-19-timer').hide()}}
    hoosiersBasketballGame223(showDate("2020-2-24"));function hoosiersBasketballGame223(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-2-23-timer').hide()}}
    hoosiersBasketballGame227(showDate("2020-2-28"));function hoosiersBasketballGame227(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-2-27-timer').hide()}}
    hoosiersBasketballGame31(showDate("2020-3-2"));function hoosiersBasketballGame31(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-3-1-timer').hide()}}
    hoosiersBasketballGame34(showDate("2020-3-5"));function hoosiersBasketballGame34(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-3-4-timer').hide()}}
    hoosiersBasketballGame37(showDate("2020-3-8"));function hoosiersBasketballGame37(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-3-7-timer').hide()}}
/*HOOSIERS BASKETBALL TABLE RESERVATIONS*/
    $hoosiersbasketball127button = $('#hoosiers-basketball-12-7-button'); $hoosiersbasketball127popup = $('#hoosiers-basketball-12-7-pop-up');$hoosiersbasketball127button.click(function(){$hoosiersbasketball127popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball1210button = $('#hoosiers-basketball-12-10-button'); $hoosiersbasketball1210popup = $('#hoosiers-basketball-12-10-pop-up');$hoosiersbasketball1210button.click(function(){$hoosiersbasketball1210popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball1213button = $('#hoosiers-basketball-12-13-button'); $hoosiersbasketball1213popup = $('#hoosiers-basketball-12-13-pop-up');$hoosiersbasketball1213button.click(function(){$hoosiersbasketball1213popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball1221button = $('#hoosiers-basketball-12-21-button'); $hoosiersbasketball1221popup = $('#hoosiers-basketball-12-21-pop-up');$hoosiersbasketball1221button.click(function(){$hoosiersbasketball1221popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball1229button = $('#hoosiers-basketball-12-29-button'); $hoosiersbasketball1229popup = $('#hoosiers-basketball-12-29-pop-up');$hoosiersbasketball1229button.click(function(){$hoosiersbasketball1229popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball14button = $('#hoosiers-basketball-1-4-button'); $hoosiersbasketball14popup = $('#hoosiers-basketball-1-4-pop-up');$hoosiersbasketball14button.click(function(){$hoosiersbasketball14popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball18button = $('#hoosiers-basketball-1-8-button'); $hoosiersbasketball18popup = $('#hoosiers-basketball-1-8-pop-up');$hoosiersbasketball18button.click(function(){$hoosiersbasketball18popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball111button = $('#hoosiers-basketball-1-11-button'); $hoosiersbasketball111popup = $('#hoosiers-basketball-1-11-pop-up');$hoosiersbasketball111button.click(function(){$hoosiersbasketball111popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball115button = $('#hoosiers-basketball-1-15-button'); $hoosiersbasketball115popup = $('#hoosiers-basketball-1-15-pop-up');$hoosiersbasketball115button.click(function(){$hoosiersbasketball115popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball118button = $('#hoosiers-basketball-1-18-button'); $hoosiersbasketball118popup = $('#hoosiers-basketball-1-18-pop-up');$hoosiersbasketball118button.click(function(){$hoosiersbasketball118popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball123button = $('#hoosiers-basketball-1-23-button'); $hoosiersbasketball123popup = $('#hoosiers-basketball-1-23-pop-up');$hoosiersbasketball123button.click(function(){$hoosiersbasketball123popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball126button = $('#hoosiers-basketball-1-26-button'); $hoosiersbasketball126popup = $('#hoosiers-basketball-1-26-pop-up');$hoosiersbasketball126button.click(function(){$hoosiersbasketball126popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball129button = $('#hoosiers-basketball-1-29-button'); $hoosiersbasketball129popup = $('#hoosiers-basketball-1-29-pop-up');$hoosiersbasketball129button.click(function(){$hoosiersbasketball129popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball21button = $('#hoosiers-basketball-2-1-button'); $hoosiersbasketball21popup = $('#hoosiers-basketball-2-1-pop-up');$hoosiersbasketball21button.click(function(){$hoosiersbasketball21popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball28button = $('#hoosiers-basketball-2-8-button'); $hoosiersbasketball28popup = $('#hoosiers-basketball-2-8-pop-up');$hoosiersbasketball28button.click(function(){$hoosiersbasketball28popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball213button = $('#hoosiers-basketball-2-13-button'); $hoosiersbasketball213popup = $('#hoosiers-basketball-2-13-pop-up');$hoosiersbasketball213button.click(function(){$hoosiersbasketball213popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball216button = $('#hoosiers-basketball-2-16-button'); $hoosiersbasketball216popup = $('#hoosiers-basketball-2-16-pop-up');$hoosiersbasketball216button.click(function(){$hoosiersbasketball216popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball219button = $('#hoosiers-basketball-2-19-button'); $hoosiersbasketball219popup = $('#hoosiers-basketball-2-19-pop-up');$hoosiersbasketball219button.click(function(){$hoosiersbasketball219popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball223button = $('#hoosiers-basketball-2-23-button'); $hoosiersbasketball223popup = $('#hoosiers-basketball-2-23-pop-up');$hoosiersbasketball223button.click(function(){$hoosiersbasketball223popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball227button = $('#hoosiers-basketball-2-27-button'); $hoosiersbasketball227popup = $('#hoosiers-basketball-2-27-pop-up');$hoosiersbasketball227button.click(function(){$hoosiersbasketball227popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball31button = $('#hoosiers-basketball-3-1-button'); $hoosiersbasketball31popup = $('#hoosiers-basketball-3-1-pop-up');$hoosiersbasketball31button.click(function(){$hoosiersbasketball31popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball34button = $('#hoosiers-basketball-3-4-button'); $hoosiersbasketball34popup = $('#hoosiers-basketball-3-4-pop-up');$hoosiersbasketball34button.click(function(){$hoosiersbasketball34popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball37button = $('#hoosiers-basketball-3-7-button'); $hoosiersbasketball37popup = $('#hoosiers-basketball-3-7-pop-up');$hoosiersbasketball37button.click(function(){$hoosiersbasketball37popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
/*HOOSIERS FOOTBALL SCHEDULE TIMER*/
    hoosiersFootballballGame127(showDate("2020-1-3"));function hoosiersFootballballGame127(daysAway){if(daysAway >= 1){$('#hoosiers-football-12-30-timer').hide()}}   
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
    $hoosiersfootballweek100button = $('#hoosiers-football-week-100-button'); $hoosiersfootballweek100popup = $('#hoosiers-football-week-100-pop-up');$hoosiersfootballweek100button.click(function(){$hoosiersfootballweek100popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});  
    $hoosiersfootballweek101button = $('#hoosiers-football-week-101-button'); $hoosiersfootballweek101popup = $('#hoosiers-football-week-101-pop-up');$hoosiersfootballweek101button.click(function(){$hoosiersfootballweek101popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});  

/*ILLINI BASKETBALL SCHEDULE TIMER*/
    illiniBasketballGame127(showDate("2019-12-8"));function illiniBasketballGame127(daysAway){if(daysAway >= 1){$('#illini-basketball-12-7-timer').hide()}}
    illiniBasketballGame1211(showDate("2019-12-12"));function illiniBasketballGame1211(daysAway){if(daysAway >= 1){$('#illini-basketball-12-11-timer').hide()}}
    illiniBasketballGame1214(showDate("2019-12-15"));function illiniBasketballGame1214(daysAway){if(daysAway >= 1){$('#illini-basketball-12-14-timer').hide()}}
    illiniBasketballGame1221(showDate("2019-12-22"));function illiniBasketballGame1221(daysAway){if(daysAway >= 1){$('#illini-basketball-12-21-timer').hide()}}
    illiniBasketballGame1229(showDate("2019-12-30"));function illiniBasketballGame1229(daysAway){if(daysAway >= 1){$('#illini-basketball-12-29-timer').hide()}}
    illiniBasketballGame12(showDate("2020-1-3"));function illiniBasketballGame12(daysAway){if(daysAway >= 1){$('#illini-basketball-1-2-timer').hide()}}
    illiniBasketballGame15(showDate("2020-1-6"));function illiniBasketballGame15(daysAway){if(daysAway >= 1){$('#illini-basketball-1-5-timer').hide()}}
    illiniBasketballGame18(showDate("2020-1-9"));function illiniBasketballGame18(daysAway){if(daysAway >= 1){$('#illini-basketball-1-8-timer').hide()}}
    illiniBasketballGame111(showDate("2020-1-12"));function illiniBasketballGame111(daysAway){if(daysAway >= 1){$('#illini-basketball-1-11-timer').hide()}}
    illiniBasketballGame118(showDate("2020-1-19"));function illiniBasketballGame118(daysAway){if(daysAway >= 1){$('#illini-basketball-1-18-timer').hide()}}
    illiniBasketballGame121(showDate("2020-1-22"));function illiniBasketballGame121(daysAway){if(daysAway >= 1){$('#illini-basketball-1-21-timer').hide()}}
    illiniBasketballGame125(showDate("2020-1-26"));function illiniBasketballGame125(daysAway){if(daysAway >= 1){$('#illini-basketball-1-25-timer').hide()}}
    illiniBasketballGame130(showDate("2020-1-31"));function illiniBasketballGame130(daysAway){if(daysAway >= 1){$('#illini-basketball-1-30-timer').hide()}}
    illiniBasketballGame22(showDate("2020-2-3"));function illiniBasketballGame22(daysAway){if(daysAway >= 1){$('#illini-basketball-2-2-timer').hide()}}
    illiniBasketballGame27(showDate("2020-2-8"));function illiniBasketballGame27(daysAway){if(daysAway >= 1){$('#illini-basketball-2-7-timer').hide()}}
    illiniBasketballGame211(showDate("2020-2-12"));function illiniBasketballGame211(daysAway){if(daysAway >= 1){$('#illini-basketball-2-11-timer').hide()}}
    illiniBasketballGame215(showDate("2020-2-16"));function illiniBasketballGame215(daysAway){if(daysAway >= 1){$('#illini-basketball-2-15-timer').hide()}}
    illiniBasketballGame218(showDate("2020-2-19"));function illiniBasketballGame218(daysAway){if(daysAway >= 1){$('#illini-basketball-2-18-timer').hide()}}
    illiniBasketballGame224(showDate("2020-2-24"));function illiniBasketballGame224(daysAway){if(daysAway >= 1){$('#illini-basketball-2-24-timer').hide()}}
    illiniBasketballGame227(showDate("2020-2-28"));function illiniBasketballGame227(daysAway){if(daysAway >= 1){$('#illini-basketball-2-27-timer').hide()}}
    illiniBasketballGame31(showDate("2020-3-2"));function illiniBasketballGame31(daysAway){if(daysAway >= 1){$('#illini-basketball-3-1-timer').hide()}}
    illiniBasketballGame35(showDate("2020-3-6"));function illiniBasketballGame35(daysAway){if(daysAway >= 1){$('#illini-basketball-3-5-timer').hide()}}
    illiniBasketballGame38(showDate("2020-3-9"));function illiniBasketballGame38(daysAway){if(daysAway >= 1){$('#illini-basketball-3-8-timer').hide()}}
/*ILLINI BASKETBALL TABLE RESERVATIONS*/
    $illinibasketball127button = $('#illini-basketball-12-7-button'); $illinibasketball127popup = $('#illini-basketball-12-7-pop-up');$illinibasketball127button.click(function(){$illinibasketball127popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball1211button = $('#illini-basketball-12-11-button'); $illinibasketball1211popup = $('#illini-basketball-12-11-pop-up');$illinibasketball1211button.click(function(){$illinibasketball1211popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball1214button = $('#illini-basketball-12-14-button'); $illinibasketball1214popup = $('#illini-basketball-12-14-pop-up');$illinibasketball1214button.click(function(){$illinibasketball1214popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball1221button = $('#illini-basketball-12-21-button'); $illinibasketball1221popup = $('#illini-basketball-12-21-pop-up');$illinibasketball1221button.click(function(){$illinibasketball1221popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball1229button = $('#illini-basketball-12-29-button'); $illinibasketball1229popup = $('#illini-basketball-12-29-pop-up');$illinibasketball1229button.click(function(){$illinibasketball1229popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball12button = $('#illini-basketball-1-2-button'); $illinibasketball12popup = $('#illini-basketball-1-2-pop-up');$illinibasketball12button.click(function(){$illinibasketball12popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball15button = $('#illini-basketball-1-5-button'); $illinibasketball15popup = $('#illini-basketball-1-5-pop-up');$illinibasketball15button.click(function(){$illinibasketball15popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball18button = $('#illini-basketball-1-8-button'); $illinibasketball18popup = $('#illini-basketball-1-8-pop-up');$illinibasketball18button.click(function(){$illinibasketball18popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball111button = $('#illini-basketball-1-11-button'); $illinibasketball111popup = $('#illini-basketball-1-11-pop-up');$illinibasketball111button.click(function(){$illinibasketball111popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball118button = $('#illini-basketball-1-18-button'); $illinibasketball118popup = $('#illini-basketball-1-18-pop-up');$illinibasketball118button.click(function(){$illinibasketball118popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball121button = $('#illini-basketball-1-21-button'); $illinibasketball121popup = $('#illini-basketball-1-21-pop-up');$illinibasketball121button.click(function(){$illinibasketball121popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball125button = $('#illini-basketball-1-25-button'); $illinibasketball125popup = $('#illini-basketball-1-25-pop-up');$illinibasketball125button.click(function(){$illinibasketball125popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball130button = $('#illini-basketball-1-30-button'); $illinibasketball130popup = $('#illini-basketball-1-30-pop-up');$illinibasketball130button.click(function(){$illinibasketball130popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball22button = $('#illini-basketball-2-2-button'); $illinibasketball22popup = $('#illini-basketball-2-2-pop-up');$illinibasketball22button.click(function(){$illinibasketball22popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball27button = $('#illini-basketball-2-7-button'); $illinibasketball27popup = $('#illini-basketball-2-7-pop-up');$illinibasketball27button.click(function(){$illinibasketball27popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball211button = $('#illini-basketball-2-11-button'); $illinibasketball211popup = $('#illini-basketball-2-11-pop-up');$illinibasketball211button.click(function(){$illinibasketball211popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball215button = $('#illini-basketball-2-15-button'); $illinibasketball215popup = $('#illini-basketball-2-15-pop-up');$illinibasketball215button.click(function(){$illinibasketball215popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball218button = $('#illini-basketball-2-18-button'); $illinibasketball218popup = $('#illini-basketball-2-18-pop-up');$illinibasketball218button.click(function(){$illinibasketball218popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball224button = $('#illini-basketball-2-24-button'); $illinibasketball224popup = $('#illini-basketball-2-24-pop-up');$illinibasketball224button.click(function(){$illinibasketball224popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball227button = $('#illini-basketball-2-27-button'); $illinibasketball227popup = $('#illini-basketball-2-27-pop-up');$illinibasketball227button.click(function(){$illinibasketball227popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball31button = $('#illini-basketball-3-1-button'); $illinibasketball31popup = $('#illini-basketball-3-1-pop-up');$illinibasketball31button.click(function(){$illinibasketball31popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball35button = $('#illini-basketball-3-5-button'); $illinibasketball35popup = $('#illini-basketball-3-5-pop-up');$illinibasketball35button.click(function(){$illinibasketball35popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball38button = $('#illini-basketball-3-8-button'); $illinibasketball38popup = $('#illini-basketball-3-8-pop-up');$illinibasketball38button.click(function(){$illinibasketball38popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
/*ILLINI FOOTBALL SCHEDULE TIMER*/
    illiniFootballballGame127(showDate("2019-12-31"));function illiniFootballballGame127(daysAway){if(daysAway >= 1){$('#illini-football-12-30-timer').hide()}}   
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
    $illinifootballweek100button = $('#illini-football-week-100-button'); $illinifootballweek100popup = $('#illini-football-week-100-pop-up');$illinifootballweek100button.click(function(){$illinifootballweek100popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});  
    $illinifootballweek101button = $('#illini-football-week-101-button'); $illinifootballweek101popup = $('#illini-football-week-101-pop-up');$illinifootballweek101button.click(function(){$illinifootballweek101popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});  
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
/*ILLINI FOOTBALL SCHEDULE TIMER*/
    tarheelsFootballballGame127(showDate("2019-12-28"));function tarheelsFootballballGame127(daysAway){if(daysAway >= 1){$('#tarheels-football-12-27-timer').hide()}}
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
    $tarheelsfootballweek100button = $('#tarheels-football-week-100-button'); $tarheelsfootballweek100popup = $('#tarheels-football-week-100-pop-up');$tarheelsfootballweek100button.click(function(){$tarheelsfootballweek100popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});  
    $tarheelsfootballweek101button = $('#tarheels-football-week-101-button'); $tarheelsfootballweek101popup = $('#tarheels-football-week-101-pop-up');$tarheelsfootballweek101button.click(function(){$tarheelsfootballweek101popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});  
/*TARHEELS BASKETBALL SCHEDULE TIMER*/
    tarheelsBasketballGame1272(showDate("2019-12-8"));function tarheelsBasketballGame1272(daysAway){if(daysAway >= 1){$('#tarheels-basketball-12-7-timer').hide()}}
    tarheelsBasketballGame1215(showDate("2019-12-16"));function tarheelsBasketballGame1215(daysAway){if(daysAway >= 1){$('#tarheels-basketball-12-15-timer').hide()}}
    tarheelsBasketballGame1218(showDate("2019-12-19"));function tarheelsBasketballGame1218(daysAway){if(daysAway >= 1){$('#tarheels-basketball-12-18-timer').hide()}}
    tarheelsBasketballGame1221(showDate("2019-12-22"));function tarheelsBasketballGame1221(daysAway){if(daysAway >= 1){$('#tarheels-basketball-12-21-timer').hide()}}
    tarheelsBasketballGame1230(showDate("2019-12-31"));function tarheelsBasketballGame1230(daysAway){if(daysAway >= 1){$('#tarheels-basketball-12-30-timer').hide()}}
    tarheelsBasketballGame14(showDate("2020-1-5"));function tarheelsBasketballGame14(daysAway){if(daysAway >= 1){$('#tarheels-basketball-1-4-timer').hide()}}
    tarheelsBasketballGame18(showDate("2020-1-9"));function tarheelsBasketballGame18(daysAway){if(daysAway >= 1){$('#tarheels-basketball-1-8-timer').hide()}}
    tarheelsBasketballGame111(showDate("2020-1-12"));function tarheelsBasketballGame111(daysAway){if(daysAway >= 1){$('#tarheels-basketball-1-11-timer').hide()}}
    tarheelsBasketballGame118(showDate("2020-1-19"));function tarheelsBasketballGame118(daysAway){if(daysAway >= 1){$('#tarheels-basketball-1-18-timer').hide()}}
    tarheelsBasketballGame122(showDate("2020-1-23"));function tarheelsBasketballGame122(daysAway){if(daysAway >= 1){$('#tarheels-basketball-1-22-timer').hide()}}
    tarheelsBasketballGame125(showDate("2020-1-26"));function tarheelsBasketballGame125(daysAway){if(daysAway >= 1){$('#tarheels-basketball-1-25-timer').hide()}}
    tarheelsBasketballGame127(showDate("2020-1-28"));function tarheelsBasketballGame127(daysAway){if(daysAway >= 1){$('#tarheels-basketball-1-27-timer').hide()}}
    tarheelsBasketballGame21(showDate("2020-2-2"));function tarheelsBasketballGame21(daysAway){if(daysAway >= 1){$('#tarheels-basketball-2-1-timer').hide()}}
    tarheelsBasketballGame23(showDate("2020-2-4"));function tarheelsBasketballGame23(daysAway){if(daysAway >= 1){$('#tarheels-basketball-2-3-timer').hide()}}
    tarheelsBasketballGame28(showDate("2020-2-9"));function tarheelsBasketballGame28(daysAway){if(daysAway >= 1){$('#tarheels-basketball-2-8-timer').hide()}}
    tarheelsBasketballGame211(showDate("2020-2-12"));function tarheelsBasketballGame211(daysAway){if(daysAway >= 1){$('#tarheels-basketball-2-11-timer').hide()}}
    tarheelsBasketballGame215(showDate("2020-2-16"));function tarheelsBasketballGame215(daysAway){if(daysAway >= 1){$('#tarheels-basketball-2-15-timer').hide()}}
    tarheelsBasketballGame217(showDate("2020-2-18"));function tarheelsBasketballGame217(daysAway){if(daysAway >= 1){$('#tarheels-basketball-2-17-timer').hide()}}
    tarheelsBasketballGame222(showDate("2020-2-23"));function tarheelsBasketballGame222(daysAway){if(daysAway >= 1){$('#tarheels-basketball-2-22-timer').hide()}}
    tarheelsBasketballGame225(showDate("2020-2-26"));function tarheelsBasketballGame225(daysAway){if(daysAway >= 1){$('#tarheels-basketball-2-25-timer').hide()}}
    tarheelsBasketballGame229(showDate("2019-2-30"));function tarheelsBasketballGame229(daysAway){if(daysAway >= 1){$('#tarheels-basketball-2-29-timer').hide()}}

/*HOOSIERS BASKETBALL TABLE RESERVATIONS*/
    $tarheelsbasketball128button = $('#tarheels-basketball-12-8-button'); $tarheelsbasketball128popup = $('#tarheels-basketball-12-8-pop-up');$tarheelsbasketball128button.click(function(){$tarheelsbasketball128popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball1215button = $('#tarheels-basketball-12-15-button'); $tarheelsbasketball1215popup = $('#tarheels-basketball-12-15-pop-up');$tarheelsbasketball1215button.click(function(){$tarheelsbasketball1215popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball1218button = $('#tarheels-basketball-12-18-button'); $tarheelsbasketball1218popup = $('#tarheels-basketball-12-18-pop-up');$tarheelsbasketball1218button.click(function(){$tarheelsbasketball1218popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball1221button = $('#tarheels-basketball-12-21-button'); $tarheelsbasketball1221popup = $('#tarheels-basketball-12-21-pop-up');$tarheelsbasketball1221button.click(function(){$tarheelsbasketball1221popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball1230button = $('#tarheels-basketball-12-30-button'); $tarheelsbasketball1230popup = $('#tarheels-basketball-12-30-pop-up');$tarheelsbasketball1230button.click(function(){$tarheelsbasketball1230popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball14button = $('#tarheels-basketball-1-4-button'); $tarheelsbasketball14popup = $('#tarheels-basketball-1-4-pop-up');$tarheelsbasketball14button.click(function(){$tarheelsbasketball14popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball18button = $('#tarheels-basketball-1-8-button'); $tarheelsbasketball18popup = $('#tarheels-basketball-1-8-pop-up');$tarheelsbasketball18button.click(function(){$tarheelsbasketball18popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball111button = $('#tarheels-basketball-1-11-button'); $tarheelsbasketball111popup = $('#tarheels-basketball-1-11-pop-up');$tarheelsbasketball111button.click(function(){$tarheelsbasketball111popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball118button = $('#tarheels-basketball-1-18-button'); $tarheelsbasketball118popup = $('#tarheels-basketball-1-18-pop-up');$tarheelsbasketball118button.click(function(){$tarheelsbasketball118popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball122button = $('#tarheels-basketball-1-22-button'); $tarheelsbasketball122popup = $('#tarheels-basketball-1-22-pop-up');$tarheelsbasketball122button.click(function(){$tarheelsbasketball122popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball125button = $('#tarheels-basketball-1-25-button'); $tarheelsbasketball125popup = $('#tarheels-basketball-1-25-pop-up');$tarheelsbasketball125button.click(function(){$tarheelsbasketball125popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball127button = $('#tarheels-basketball-1-27-button'); $tarheelsbasketball127popup = $('#tarheels-basketball-1-27-pop-up');$tarheelsbasketball127button.click(function(){$tarheelsbasketball127popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball21button = $('#tarheels-basketball-2-1-button'); $tarheelsbasketball21popup = $('#tarheels-basketball-2-1-pop-up');$tarheelsbasketball21button.click(function(){$tarheelsbasketball21popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball23button = $('#tarheels-basketball-2-3-button'); $tarheelsbasketball23popup = $('#tarheels-basketball-2-3-pop-up');$tarheelsbasketball23button.click(function(){$tarheelsbasketball23popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball28button = $('#tarheels-basketball-2-8-button'); $tarheelsbasketball28popup = $('#tarheels-basketball-2-8-pop-up');$tarheelsbasketball28button.click(function(){$tarheelsbasketball28popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball211button = $('#tarheels-basketball-2-11-button'); $tarheelsbasketball211popup = $('#tarheels-basketball-2-11-pop-up');$tarheelsbasketball211button.click(function(){$tarheelsbasketball211popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball215button = $('#tarheels-basketball-2-15-button'); $tarheelsbasketball215popup = $('#tarheels-basketball-2-15-pop-up');$tarheelsbasketball215button.click(function(){$tarheelsbasketball215popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball217button = $('#tarheels-basketball-2-17-button'); $tarheelsbasketball217popup = $('#tarheels-basketball-2-17-pop-up');$tarheelsbasketball217button.click(function(){$tarheelsbasketball217popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball222button = $('#tarheels-basketball-2-22-button'); $tarheelsbasketball222popup = $('#tarheels-basketball-2-22-pop-up');$tarheelsbasketball222button.click(function(){$tarheelsbasketball222popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball225button = $('#tarheels-basketball-2-25-button'); $tarheelsbasketball225popup = $('#tarheels-basketball-2-25-pop-up');$tarheelsbasketball225button.click(function(){$tarheelsbasketball225popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball229button = $('#tarheels-basketball-2-29-button'); $tarheelsbasketball229popup = $('#tarheels-basketball-2-29-pop-up');$tarheelsbasketball229button.click(function(){$tarheelsbasketball229popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball33button = $('#tarheels-basketball-3-3-button'); $tarheelsbasketball33popup = $('#tarheels-basketball-3-3-pop-up');$tarheelsbasketball33button.click(function(){$tarheelsbasketball33popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball37button = $('#tarheels-basketball-3-7-button'); $tarheelsbasketball37popup = $('#tarheels-basketball-3-7-pop-up');$tarheelsbasketball37button.click(function(){$tarheelsbasketball37popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
   
/*TRIVIA*/
    $friendsjanuary8reservation.click(function(){
        $friendsjanuary8.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
    $theofficejanuary15reservation.click(function(){
        $theofficejanuary15.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
    $seinfeldjanuary22reservation.click(function(){
        $seinfeldjanuary22.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
    $harrypotterjanuary29reservation.click(function(){
        $harrypotterjanuary29.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
    $disneypixarfebruary5reservation.click(function(){
        $disneypixarfebruary5.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
    $romcomfebruary12reservation.click(function(){
        $romcomfebruary12.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
    $popculturefebruary19reservation.click(function(){
        $popculturefebruary19.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
    $marvelcomicsfebruary26reservation.click(function(){
        $marvelcomicsfebruary26.fadeIn();
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
      pauseOnFocus: false
    });
    $('#the-clubhouse-photos').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1800,
      infinite: true,
      pauseOnFocus: false
    });
    $('#vip-loft-lounge-photos').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      pauseOnFocus: false
    });
    $('#the-red-room-photos').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1500,
      infinite: true,
      pauseOnFocus: false
    });
    $('#the-alley-suite-photos').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2200,
      infinite: true,
      pauseOnFocus: false
    });
    $('#the-rooftop-photos').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1800,
      infinite: true,
      pauseOnFocus: false
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
/*EVENTS*/
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
/*MAIN UPCOMING CAROUSEL*/
    $('.event-wrapper').slick({
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      lazyLoad: 'ondemand',
      nextArrow: $('#main-upcoming-arrows-right'),
      prevArrow: $('#main-upcoming-arrows-left'),
      pauseOnFocus: false
      });

/***MOMENT***/

/**********FEATURED UPCOMING CAROUSEL/**********/
    /*MAIN CONCERT CAROUSEL TIMER*/
    nextonedownfeatured(showDate("2020-2-1"));
        function nextonedownfeatured(daysAway){
            if(daysAway >= 1){
                 $('.event-wrapper').slick('removeSlide', true);
            }
        }       
/**********UP NEXT TOP/**********/
        chief1420next(showDate("2029-1-5"));
            function chief1420next(daysAway){
                if(daysAway >= 1){
                    $('.chief-1-4-20-next').hide();
                    $('.hardy-1-31-20-next').show();
                }
            }
        hardy13119next(showDate("2020-2-1"));
            function hardy13119next(daysAway){
                if(daysAway >= 1){
                    $('.hardy-1-31-20-next').hide();
                    $('.jason-boland-2-6-20-next').show();
                }
            }
        jasonBoland2620next(showDate("2020-2-7"));
            function jasonBoland2620next(daysAway){
                if(daysAway >= 1){
                    $('.jason-boland-2-6-20-next').hide();
                }
            } 
/**********UP NEXT BOTTOM/**********/
        goneWesr1920rooftop(showDate("2020-1-10"));
            function goneWesr1920rooftop(daysAway){
                if(daysAway >= 1){
                    $('.gone-west-1-9-20-rooftop').hide();
                    $('.jason-boland-2-6-20-rooftop next-rooftop').show();
                }
            }
        jasonBoland2620rooftop(showDate("2020-2-7"));
            function jasonBoland2620rooftop(daysAway){
                if(daysAway >= 1){
                    $('.jason-boland-2-6-20-rooftop next-rooftop').hide();
                    $('.matt-stell-2-7-20-rooftop next-rooftop').show();
                }
            }
        mattStell2720rooftop(showDate("2020-2-8"));
            function mattStell2720rooftop(daysAway){
                if(daysAway >= 1){
                    $('.matt-stell-2-7-20-rooftop').hide();
                }
            }
/**********FEATURED UPCOMING EVENTS/**********/
/*MAIN EVENTS CAROUSEL*/
    $('.main-events-carousel-container').slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        lazyLoad: 'ondemand',
        pauseOnHover: false,
        prevArrow: $('#main-events-arrows-left'),
        nextArrow: $('#main-events-arrows-right'),
        pauseOnFocus: true,
        pauseOnHover: true
    });
    /*NEXT ONE DOWN*/
    abcdef(showDate("2020-1-13"));
        function abcdef(daysAway){
            if(daysAway >= 1){
                 $('.main-events-carousel-container').slick('removeSlide', true);
            }
        }

/**********SPECIAL EVENTS/**********/
    countryForACause1520Event(showDate("2020-1-6"));
        function countryForACause1520Event(daysAway){
            if(daysAway >= 1){
                $('.country-for-a-cause-1-5-20').hide()
            }
        }
    keithRelief20Event(showDate("2020-1-13"));
        function keithRelief20Event(daysAway){
            if(daysAway >= 1){
                $('.keith-relief-1-12-20-event').hide()
            }
        }
/**********TRIVIA/**********/
    harry112019(showDate("2019-11-21"));
        function harry112019(daysAway){
            if(daysAway >= 1){
                $('.harry-11-20-19').hide()
            }else{
                $('.harry-11-20-19').show()
            }
        }
    friends12419(showDate("2019-12-5"));
        function friends12419(daysAway){
            if(daysAway >= 1){
                $('.friends-12-4-19').hide()
            }else{
                $('.friends-12-4-19').show()
            }
        }
    theoffice121119(showDate("2019-12-12"));
        function theoffice121119(daysAway){
            if(daysAway >= 1){
                $('.office-12-11-19').hide()
            }else{
                $('.office-12-11-19').show()
            }
        }
    christmasmovies121819(showDate("2019-12-19"));
        function christmasmovies121819(daysAway){
            if(daysAway >= 1){
                $('.christmas-movies-12-18-19').hide()
            }else{
                $('.christmas-movies-12-18-19').show()
            }
        }
    friends1820(showDate("2020-1-9"));
        function friends1820(daysAway){
            if(daysAway >= 1){
                $('.friends-1-8-20').hide()
            }else{
                $('.friends-1-8-20').show()
            }
        }
    theOffice11520(showDate("2020-1-20"));
        function theOffice11520(daysAway){
            if(daysAway >= 1){
                $('.the-office-1-15-20').hide()
            }else{
                $('.the-office-1-15-20').show()
            }
        }
    seinfeld12220(showDate("2020-1-23"));
        function seinfeld12220(daysAway){
            if(daysAway >= 1){
                $('.seinfeld-1-22-20').hide()
            }else{
                $('.seinfeld-1-22-20').show()
            }
        }
    harryPotter12920(showDate("2020-1-30"));
        function harryPotter12920(daysAway){
            if(daysAway >= 1){
                $('.harry-potter-1-29-20').hide()
            }else{
                $('.harry-potter-1-29-20').show()
            }
        }
    disneyPixar2520(showDate("2020-2-6"));
        function disneyPixar2520(daysAway){
            if(daysAway >= 1){
                $('.disney-pixar-2-5-20').hide()
            }else{
                $('.disney-pixar-2-5-20').show()
            }
        }
    romCom21220(showDate("2020-2-13"));
        function romCom21220(daysAway){
            if(daysAway >= 1){
                $('.rom-com-2-12-20').hide()
            }else{
                $('.rom-com-2-12-20').show()
            }
        }
    popCulture21920(showDate("2020-2-20"));
        function popCulture21920(daysAway){
            if(daysAway >= 1){
                $('.pop-culture-2-19-20').hide()
            }else{
                $('.pop-culture-2-19-20').show()
            }
        }
    marvelComics22620(showDate("2020-2-27"));
        function marvelComics22620(daysAway){
            if(daysAway >= 1){
                $('.marvel-comics-2-26-20').hide()
            }else{
                $('.marvel-comics-2-26-20').show()
            }
        }    
/**********CONCERTS/**********/ 
    rileygreen1320hide(showDate("2020-01-04"));
        function rileygreen1320hide(daysAway){
            if(daysAway >= 1){
                $('.riley-green-1-3-20').hide()
            }
            
        }
    johnnyAlletto1420hide(showDate("2020-1-4"));
        function johnnyAlletto1420hide(daysAway){
            if(daysAway >= 1){
                $('.johnny-alletto-1-4-20').hide()
            } 
        }
    chief1420hide(showDate("2020-1-5"));
        function chief1420hide(daysAway){
            if(daysAway >= 1){
                $('.chief-1-4-20').hide()
            } 
        }
    countryForACause1520ConcertHide(showDate("2020-1-6"));
        function countryForACause1520ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.country-for-a-cause-1-5-20').hide()
            }
        }
    goneWest1920ConcertHide(showDate("2020-1-10"));
        function goneWest1920ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.gone-west-1-9-20').hide()
            }
        }
    rendition11020hide(showDate("2020-1-11"));
        function rendition11020hide(daysAway){
            if(daysAway >= 1){
                $('.rendition-1-10-20').hide()
            }
            
        }
    trb11120hide(showDate("2020-1-12"));
        function trb11120hide(daysAway){
            if(daysAway >= 1){
                $('.trb-1-11-20').hide()
            }
            
        }
    keithrelief11220ConcertShow(showDate("2019-12-13 09:59:00"));
        function keithrelief11220ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.keith-relief-1-12-20').show()
            }
            else{
                $('.keith-relief-1-12-20').hide()
            }
        }
    keithrelief11220ConcertHide(showDate("2020-2-1"));
        function keithrelief11220ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.keith-relief-1-12-20').hide()
            }
        }
    pie11720hide(showDate("2020-1-18"));
        function pie11720hide(daysAway){
            if(daysAway >= 1){
                $('.pie-1-17-20').hide()
            }
            
        }
    thbn11820hide(showDate("2020-1-19"));
        function thbn11820hide(daysAway){
            if(daysAway >= 1){
                $('.pie-1-18-20').hide()
            }
            
        }
    rfr12520hide(showDate("2020-1-26"));
        function rfr12520hide(daysAway){
            if(daysAway >= 1){
                $('.rfr-1-25-20').hide()
            }
            
        }
    hardy13120ConcertShow(showDate("2019-12-13 09:59:00"));
        function hardy13120ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.hardy-1-31-20').show()
            }
            else{
                $('.hardy-1-31-20').hide()
            }
        }
    hardy13120ConcertHide(showDate("2020-2-1"));
        function hardy13120ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.hardy-1-31-20').hide()
            }
        }
    jasonboland2620hide(showDate("2020-2-7"));
        function jasonboland2620hide(daysAway){
            if(daysAway >= 1){
                $('.jason-boland-2-6-20').hide()
            }
            
        }
    mattStell2720ConcertShow(showDate("2019-11-18 09:59:00"));
        function mattStell2720ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.matt-stell-2-7-20').show()
            }
            else{
                $('.matt-stell-2-7-20').hide()
            }
        }
    mattStell2720ConcertHide(showDate("2020-2-8"));
        function mattStell2720ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.matt-stell-2-7-20').hide()
            }
        }
    tbbn2820hide(showDate("2020-2-9"));
        function tbbn2820hide(daysAway){
            if(daysAway >= 1){
                $('.tbbn-2-8-20').hide()
            }
            
        }
    theCadillacThree20ConcertHide(showDate("2020-2-22"));
        function theCadillacThree20ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.the-cadillac-three-2-21-20').hide()
            }
        }
    canaanSmith22220ConcertShow(showDate("2019-12-20 09:59:00"));
        function canaanSmith22220ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.canaan-smith-2-22-20').show()
            }
            else{
                $('.canaan-smith-2-22-20').hide()
            }
        }
    canaanSmith22220ConcertHide(showDate("2020-2-23"));
        function canaanSmith22220ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.canaan-smith-2-22-20').hide()
            }
        }  
    ryanhurd22720hide(showDate("2020-2-28"));
        function ryanhurd22720hide(daysAway){
            if(daysAway >= 1){
                $('.ryan-hurd-2-27-20').hide()
            }
            
        }     
    ryanhurd22820hide(showDate("2020-2-29"));
        function ryanhurd22820hide(daysAway){
            if(daysAway >= 1){
                $('.ryan-hurd-2-28-20').hide()
            }
            
        }

    function showDate(val) {
        // for now freezing the "now" so that precise testcases can be written.
        // var currDate = moment.now();
        var currDate = moment();
        var dateToTest = moment(val);
        // if dateToTest will always be in past, use currDate as the base to diff, else be prepared to handle the negative outcomes. 
        var result = currDate.diff(dateToTest, 'minutes')
        console.log(result);

        return result;
    }


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
          mobileFirst: true,
          pauseOnFocus: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
        {
            breakpoint: 1220,
            settings: {
            slidesToShow: 4
            }
        },
        {
            breakpoint: 900,
            settings: {
            slidesToShow: 2
              }
        }
          ]
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
      pauseOnHover: false,
      pauseOnFocus: false
      });
/*ABOUT CAROUSEL*/
    $('.about-copy-slideshow').slick({
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
        pauseOnFocus: false
    });
    
});