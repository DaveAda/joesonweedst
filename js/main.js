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
    /*WEEKLY EVENTS*/
    var $karaokethursdaybutton = $('#karaoke-thursday-button');
    var $karaokethursdayspecials = $('.karaoke-thursday-specials');
    var $tipsytuesdaybutton = $('#tipsy-tuesday-button');
    var $tipsytuesdayspecials = $('.tipsy-tuesday-specials');
    var $eventswrapper = $('.events-wrapper');
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
    var $disneypixarfebruary5reservation = $('#disney-pixar-february-5-reservation');
    var $disneypixarfebruary5 = $('#disney-pixar-february-5');
    var $romcomfebruary12reservation = $('#rom-com-february-12-reservation');
    var $romcomfebruary12 = $('#rom-com-february-12');
    var $popculturefebruary19reservation = $('#pop-culture-february-19-reservation');
    var $popculturefebruary19 = $('#pop-culture-february-19');
    var $marvelcomicsfebruary26reservation = $('#marvel-comics-february-26-reservation');
    var $marvelcomicsfebruary26 = $('#marvel-comics-february-26');
    
    var $triviamonths = $('.trivia-months');

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

/*CONCERTS & EVENTS*/
var $concertlistinginfodropdown = $('.concert-listing-info-dropdown'); 

/*3-6-20 CASEY DONAHUE*/
    var $caseydonahue3620infobutton = $('#casey-donahue-3-6-20-info-button');
    var $caseydonahue3620dropdown = $('#casey-donahue-3-6-20-dropdown');
    $caseydonahue3620infobutton.click(function(){
        $caseydonahue3620dropdown.slideDown();
    });
    caseyDonahue362020ConcertHide(showDate("2020-03-07"));
        function caseyDonahue362020ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.casey-donahue-3-6-20').hide()
            }
        }
/*3-4-20 FRIENDS --- TRIVIA ---*/
    var $friendsmarch4reservation = $('#friends-march-4-reservation');
    var $friendsmarch4 = $('#friends-march-4');
    friends030420(showDate("2020-03-05"));
        function friends030420(daysAway){
            if(daysAway >= 1){
                $('.friends-3-4-20').hide()
            }
        }
    $friendsmarch4reservation.click(function(){
        $friendsmarch4.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
/*3-07-20 TWC*/
    var $twc030720infobutton = $('#twc-3-7-20-info-button');
    var $twc030720dropdown = $('#twc-3-7-20-dropdown');
    $twc030720infobutton.click(function(){
        $twc030720dropdown.slideDown();
    });
    twc030720ConcertHide(showDate("2020-03-08"));
        function twc030720ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.twc-3-7-20').hide()
            }
        }
/*3-11-20 THE OFFICE --- TRIVIA ---*/
    var $theofficemarch11reservation = $('#the-office-march-11-reservation');
    var $theofficemarch11 = $('#the-office-march-11');
    theoffice031120(showDate("2020-03-12"));
        function theoffice031120(daysAway){
            if(daysAway >= 1){
                $('.the-office-3-11-20').hide()
            }
        }
    $theofficemarch11reservation.click(function(){
        $theofficemarch11.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
/*3-14-20 SIXTEEN CANDLES*/
    var $sixteencandles31420infobutton = $('#sixteen-candles-3-14-20-info-button');
    var $sixteencandles31420dropdown = $('#sixteen-candles-3-14-20-dropdown');
    $sixteencandles31420infobutton.click(function(){
        $sixteencandles31420dropdown.slideDown();
    });
    sixteenCandles031420ConcertHide(showDate("2020-03-15"));
        function sixteenCandles031420ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.sixteen-candles-3-14-20').hide()
            }
        }
/*3-14-20 ST. PATRICKS DAY*/
    var $stpatricksday31420infobutton = $('#st-patricks-3-14-20-info-button');
    var $stpatricksday31420dropdown = $('#st-patricks-3-14-20-dropdown');
    $stpatricksday31420infobutton.click(function(){
        $stpatricksday31420dropdown.slideDown();
    });
    stpatricksday031420ConcertHide(showDate("2020-03-15"));
        function stpatricksday031420ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.st-patricks-3-14-20').hide()
    }}
/*3-18-20 PARKS AND REC --- TRIVIA ---*/
    var $parksandrecmarch18reservation = $('#parks-and-rec-march-18-reservation');
    var $parksandrecmarch18 = $('#parks-and-rec-march-18');
    parksandrec031820(showDate("2020-03-19"));
        function parksandrec031820(daysAway){
            if(daysAway >= 1){
                $('.parks-and-rec-3-18-20').hide()
            }
        }
    $parksandrecmarch18reservation.click(function(){
        $parksandrecmarch18.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
/*3-21-20 THEN AGAIN*/
    var $thenagain032120infobutton = $('#then-again-3-21-20-info-button');
    var $thenagain032120dropdown = $('#then-again-3-21-20-dropdown');
    $thenagain032120infobutton.click(function(){
        $thenagain032120dropdown.slideDown();
    });
    thenAgain032120ConcertHide(showDate("2020-03-22"));
        function thenAgain032120ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.then-again-3-21-20').hide()
            }
        }
/*3-25-20 PARKS AND REC --- TRIVIA ---*/
    var $gilmoregirlsmarch25reservation = $('#gilmore-girls-march-25-reservation');
    var $gilmoregirlsmarch25 = $('#gilmore-girls-march-25');
    gilmoregirls032520(showDate("2020-03-26"));
        function gilmoregirls032520(daysAway){
            if(daysAway >= 1){
                $('.gilmore-girls-3-25-20').hide()
            }
        }
    $gilmoregirlsmarch25reservation.click(function(){
        $gilmoregirlsmarch25.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
/*3-28-20 HUDSON MOORE*/
    var $hudsonMoore32820infobutton = $('#hudson-moore-3-28-20-info-button');
    var $hudsonMoore32820dropdown = $('#hudson-moore-3-28-20-dropdown');
    $hudsonMoore32820infobutton.click(function(){
        $hudsonMoore32820dropdown.slideDown();
    });
    hudsonMoore32820ConcertShow(showDate("2020-02-12 09:59:00"));
        function hudsonMoore32820ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.hudson-moore-3-28-20').show()
            }
            else{
                $('.hudson-moore-3-28-20').hide()
            }
        }
    hudsonMoore032820ConcertHide(showDate("2020-03-29"));
        function hudsonMoore032820ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.hudson-moore-3-28-20').hide()
            }
        }
/*4-3-20 MANA*/
    var $mana4320infobutton = $('#mana-4-3-20-info-button');
    var $mana4320dropdown = $('#mana-4-3-20-dropdown');
    $mana4320infobutton.click(function(){
        $mana4320dropdown.slideDown();
    });
    mana4320ConcertShow(showDate("2020-02-10 09:59:00"));
        function mana4320ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.mana-4-3-20').show()
            }
            else{
                $('.mana-4-3-20').hide()
            }
        }
    mana4320ConcertHide(showDate("2020-04-04"));
        function mana4320ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.mana-4-3-20').hide()
            }
        }
/*4-4-20 THE ULTIMATE THROWBACK PARTY W/ NINA SKY*/
    var $ninasky4420infobutton = $('#nina-sky-4-4-20-info-button');
    var $ninasky4420dropdown = $('#nina-sky-4-4-20-dropdown');
    $ninasky4420infobutton.click(function(){
        $ninasky4420dropdown.slideDown();
    });
    ninasky4420ConcertHide(showDate("2020-04-04"));
        function ninasky4420ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.nina-sky-4-4-20').hide()
            }
        }
/*4-8-20 FRIENDS --- TRIVIA ---*/
    var $friendsapril8reservation = $('#friends-april-8-reservation');
    var $friendsapril8 = $('#friends-april-8');
    friends040820(showDate("2020-04-09"));
        function friends040820(daysAway){
            if(daysAway >= 1){
                $('.friends-4-8-20').hide()
            }
        }
    $friendsapril8reservation.click(function(){
        $friendsapril8.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
/*4-11-20 WALKER HAYES: TRIPLE PLAY TOUR*/
    var $walkerHayes041120infobutton = $('#walker-hayes-4-11-20-info-button');
    var $walkerHayes041120dropdown = $('#walker-hayes-4-11-20-dropdown');
    $walkerHayes041120infobutton.click(function(){
        $walkerHayes041120dropdown.slideDown();
    });
    walkerHayes041120ConcertShow(showDate("2020-03-11 08:59:00"));
        function walkerHayes041120ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.walker-hayes-4-11-20').show()
            }
            else{
                $('.walker-hayes-4-11-20').hide()
            }
        }
    walkerHayes041120ConcertHide(showDate("2020-04-17"));
        function walkerHayes041120ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.walker-hayes-4-11-20').hide()
            }
        }
/*4-15-20 THE OFFICE --- TRIVIA ---*/
    var $theofficeapril15reservation = $('#the-office-april-15-reservation');
    var $theofficeapril15 = $('#the-office-april-15');
    theoffice041520(showDate("2020-04-16"));
        function theoffice041520(daysAway){
            if(daysAway >= 1){
                $('.the-office-4-15-20').hide()
            }
        }
    $theofficeapril15reservation.click(function(){
        $theofficeapril15.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
/*4-16-20 HOT COUNTRY KNIGHTS*/
    var $hotcountryknights041620infobutton = $('#hot-country-knights-4-16-20-info-button');
    var $hotcountryknights041620dropdown = $('#hot-country-knights-4-16-20-dropdown');
    $hotcountryknights041620infobutton.click(function(){
        $hotcountryknights041620dropdown.slideDown();
    });
    hotcountryknights041620ConcertShow(showDate("2020-01-31 06:59:00"));
        function hotcountryknights041620ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.hot-country-knights-4-16-20').show()
            }
            else{
                $('.hot-country-knights-4-16-20').hide()
            }
        }
    hotcountryknights041620ConcertHide(showDate("2020-04-17"));
        function hotcountryknights041620ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.hot-country-knights-4-16-20').hide()
            }
        }
/*4-22-20 HARRY POTTER --- TRIVIA ---*/
    var $harrypotterapril22reservation = $('#harry-potter-april-22-reservation');
    var $harrypotterapril22 = $('#harry-potter-april-22');
    harryPotter042220(showDate("2020-04-23"));
        function harryPotter042220(daysAway){
            if(daysAway >= 1){
                $('.harry-potter-4-22-20').hide()
            }
        }
    $harrypotterapril22reservation.click(function(){
        $harrypotterapril22.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
/*4-24-20 NEW WAVE FEST 2020*/
    var $newwave042420infobutton = $('#new-wave-4-24-20-info-button');
    var $newwave042420dropdown = $('#new-wave-4-24-20-dropdown');
    $newwave042420infobutton.click(function(){
        $newwave042420dropdown.slideDown();
    });
    newwave042420ConcertShow(showDate("2020-02-11 09:59:00"));
        function newwave042420ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.new-wave-4-24-20').show()
            }
            else{
                $('.new-wave-4-24-20').hide()
            }
        }
    newwave042420ConcertHide(showDate("2020-04-25"));
        function newwave042420ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.new-wave-4-24-20').hide()
            }
        }
/*4-25-20 PHIL VASSAR*/
    var $philvassar042520infobutton = $('#phil-vassar-4-25-20-info-button');
    var $philvassar042520dropdown = $('#phil-vassar-4-25-20-dropdown');
    $philvassar042520infobutton.click(function(){
        $philvassar042520dropdown.slideDown();
    });
    philvassar042520ConcertShow(showDate("2020-01-27 09:59:00"));
        function philvassar042520ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.phil-vassar-4-25-20').show()
            }
            else{
                $('.phil-vassar-4-25-20').hide()
            }
        }
    philVassar042520ConcertHide(showDate("2020-04-26"));
        function philVassar042520ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.phil-vassar-4-25-20').hide()
            }
        }
/*4-26-20 ZELO PRO WRESTLING PRESENTS WRESTLING ON WEED*/
    var $zelopro042620infobutton = $('#zelo-pro-4-26-20-info-button');
    var $zelopro042620dropdown = $('#zelo-pro-4-26-20-dropdown');
    $zelopro042620infobutton.click(function(){
        $zelopro042620dropdown.slideDown();
    });
    zelopro042620ConcertShow(showDate("2020-02-18 09:59:00"));
        function zelopro042620ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.zelo-pro-4-26-20').show()
            }
            else{
                $('.zelo-pro-4-26-20').hide()
            }
        }
    zelopro042620ConcertHide(showDate("2020-04-27"));
        function zelopro042620ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.zelo-pro-4-26-20').hide()
            }
        }
/*4-29-20 HOW I MET YOUR MOTHER --- TRIVIA ---*/
    var $howimetyourmotherapril29reservation = $('#how-i-met-your-mother-april-29-reservation');
    var $howimetyourmotherapril29 = $('#how-i-met-your-mother-april-29');
    howIMetYourMother042920(showDate("2020-04-30"));
        function howIMetYourMother042920(daysAway){
            if(daysAway >= 1){
                $('.how-i-met-your-mother-4-29-20').hide()
            }
        }
    $howimetyourmotherapril29reservation.click(function(){
        $howimetyourmotherapril29.fadeIn();
        $triviamonths.addClass('schedule-background-fade');
    });
/*5-1-20 FOOL HOUSE*/
    var $foolhouse5120infobutton = $('#fool-house-5-1-20-info-button');
    var $foolhouse5120dropdown = $('#fool-house-5-1-20-dropdown');
    $foolhouse5120infobutton.click(function(){
        $foolhouse5120dropdown.slideDown();
    });
    foolHouse5120ConcertShow(showDate("2020-03-04 09:59:00"));
        function foolHouse5120ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.fool-house-5-1-20').show()
            }
            else{
                $('.fool-house-5-1-20').hide()
            }
        }
    foolhouse512020ConcertHide(showDate("2020-05-02"));
        function foolhouse512020ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.fool-house-5-1-20').hide()
            }
        }
/*5-7-20 FLATLAND CAVALRY : THE STEEL WOODS*/
    var $flatland5820infobutton = $('#flatland-5-8-20-info-button');
    var $flatland5820dropdown = $('#flatland-5-8-20-dropdown');
    $flatland5820infobutton.click(function(){
        $flatland5820dropdown.slideDown();
    });
    philvassar042520ConcertShow(showDate("2020-02-17 09:59:00"));
        function philvassar042520ConcertShow(daysAway){
            if(daysAway >= 1){
                $('.flatland-5-8-20').show()
            }
            else{
                $('.flatland-5-8-20').hide()
            }
        }
    flatland582020ConcertHide(showDate("2020-05-09"));
        function flatland582020ConcertHide(daysAway){
            if(daysAway >= 1){
                $('.flatland-5-8-20').hide()
            }
        }


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
/*FEATURED SPORTS TIMER & RESERVATION*/
    /*BUCKET 1*/
    /*$sportsbucket1Abutton = $('#sports-bucket-1A');
    $sportsbucket1Apopup = $('#sports-bucket-1A-pop-up');
    $sportsbucket1Abutton.click(function(){
        $sportsbucket1Apopup.fadeIn();
        $sportsschedule.addClass('schedule-background-fade');
    });
    sportsBucket1A(showDate("2020-01-19"));
    function sportsBucket1A(daysAway){
        if(daysAway >= 1){
            $('#sports-bucket-1A').hide()
        }
    }*/
    /*BUCKET 2*/
    /*$sportsbucket2Abutton = $('#sports-bucket-2A');
    $sportsbucket2Apopup = $('#sports-bucket-2A-pop-up');
    $sportsbucket2Abutton.click(function(){
        $sportsbucket2Apopup.fadeIn();
        $sportsschedule.addClass('schedule-background-fade');
    });
    sportsBucket2A(showDate("2020-01-26"));
    function sportsBucket2A(daysAway){
        if(daysAway >= 1){
            $('#sports-bucket-2A').hide()
        }
    } */
    /*BUCKET 3*/
    /*$sportsbucket3Abutton = $('#sports-bucket-3A');
    $sportsbucket3Apopup = $('#sports-bucket-3A-pop-up');
    $sportsbucket3Abutton.click(function(){
        $sportsbucket3Apopup.fadeIn();
        $sportsschedule.addClass('schedule-background-fade');
    });
    sportsBucket3A(showDate("2020-02-03"));
    function sportsBucket3A(daysAway){
        if(daysAway >= 1){
            $('#sports-bucket-3A').hide()
        }
    }*/
/*MARCH MADNESS*/
    $marchmadnessformpop = $('#march-madness-form-pop');
    $marchmadnesspopup = $('#march-madness-pop-up');

    $marchmadnessformpop.hover(function(){
        $marchmadnessformpop.toggleClass('march-madness-form-pop-hover');
    });
    $marchmadnessformpop.click(function(){
        $sportsschedule.addClass('schedule-background-fade');
        $marchmadnesspopup.fadeIn();
    })

/*BEARS TABLE RESERVATIONS*/
    /*$bearspreseasonweek1button = $('#bears-preseason-week-1-button'); $bearspreseasonweek1popup = $('#bears-preseason-week-1-pop-up');$bearspreseasonweek1button.click(function(){$bearspreseasonweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});*/
    /*$bearsweek1button = $('#bears-week-1-button'); $bearsweek1popup = $('#bears-week-1-pop-up');$bearsweek1button.click(function(){$bearsweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});*/

/*BLACKHAWKS SCHEDULE TIMER*/
    blackhawksGame33(showDate("2020-03-04"));function blackhawksGame33(daysAway){if(daysAway >= 1){$('#blackhawks-3-3-timer').hide()}}
    blackhawksGame35(showDate("2020-03-06"));function blackhawksGame35(daysAway){if(daysAway >= 1){$('#blackhawks-3-5-timer').hide()}}
    blackhawksGame36(showDate("2020-03-07"));function blackhawksGame36(daysAway){if(daysAway >= 1){$('#blackhawks-3-6-timer').hide()}}
    blackhawksGame38(showDate("2020-03-09"));function blackhawksGame38(daysAway){if(daysAway >= 1){$('#blackhawks-3-8-timer').hide()}}
    blackhawksGame311(showDate("2020-03-12"));function blackhawksGame311(daysAway){if(daysAway >= 1){$('#blackhawks-3-11-timer').hide()}}
    blackhawksGame313(showDate("2020-03-14"));function blackhawksGame313(daysAway){if(daysAway >= 1){$('#blackhawks-3-13-timer').hide()}}
    blackhawksGame314(showDate("2020-03-15"));function blackhawksGame314(daysAway){if(daysAway >= 1){$('#blackhawks-3-14-timer').hide()}}
    blackhawksGame317(showDate("2020-03-18"));function blackhawksGame317(daysAway){if(daysAway >= 1){$('#blackhawks-3-17-timer').hide()}}
    blackhawksGame319(showDate("2020-03-20"));function blackhawksGame319(daysAway){if(daysAway >= 1){$('#blackhawks-3-19-timer').hide()}}
    blackhawksGame321(showDate("2020-03-22"));function blackhawksGame321(daysAway){if(daysAway >= 1){$('#blackhawks-3-21-timer').hide()}}
    blackhawksGame322(showDate("2020-03-23"));function blackhawksGame322(daysAway){if(daysAway >= 1){$('#blackhawks-3-22-timer').hide()}}
    blackhawksGame325(showDate("2020-03-26"));function blackhawksGame325(daysAway){if(daysAway >= 1){$('#blackhawks-3-25-timer').hide()}}
    blackhawksGame327(showDate("2020-03-28"));function blackhawksGame327(daysAway){if(daysAway >= 1){$('#blackhawks-3-27-timer').hide()}}
    blackhawksGame329(showDate("2020-03-30"));function blackhawksGame329(daysAway){if(daysAway >= 1){$('#blackhawks-3-29-timer').hide()}}
    blackhawksGame331(showDate("2020-04-01"));function blackhawksGame331(daysAway){if(daysAway >= 1){$('#blackhawks-3-31-timer').hide()}}
    blackhawksGame42(showDate("2020-04-03"));function blackhawksGame42(daysAway){if(daysAway >= 1){$('#blackhawks-4-2-timer').hide()}}
    blackhawksGame44(showDate("2020-04-05"));function blackhawksGame44(daysAway){if(daysAway >= 1){$('#blackhawks-4-4-timer').hide()}}
    blackhawksNextSeason(showDate("2020-04-06"));
    function blackhawksNextSeason(daysAway){
        if(daysAway >= 1){
            $('#blackhawks-next-season').show();
        }
    }
/*BLACKHAWKS TABLE RESERVATIONS*/
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

/*BULLS SCHEDULE TIMER*/
    bullsGame34(showDate("2020-03-05"));function bullsGame34(daysAway){if(daysAway >= 1){$('#bulls-3-4-timer').hide()}}
    bullsGame36(showDate("2020-03-07"));function bullsGame36(daysAway){if(daysAway >= 1){$('#bulls-3-6-timer').hide()}}
    bullsGame38(showDate("2020-03-09"));function bullsGame38(daysAway){if(daysAway >= 1){$('#bulls-3-8-timer').hide()}}
    bullsGame310(showDate("2020-03-11"));function bullsGame310(daysAway){if(daysAway >= 1){$('#bulls-3-10-timer').hide()}}
    bullsGame312(showDate("2020-03-13"));function bullsGame312(daysAway){if(daysAway >= 1){$('#bulls-3-12-timer').hide()}}
    bullsGame314(showDate("2020-03-15"));function bullsGame314(daysAway){if(daysAway >= 1){$('#bulls-3-14-timer').hide()}}
    bullsGame315(showDate("2020-03-16"));function bullsGame315(daysAway){if(daysAway >= 1){$('#bulls-3-15-timer').hide()}}
    bullsGame318(showDate("2020-03-19"));function bullsGame318(daysAway){if(daysAway >= 1){$('#bulls-3-18-timer').hide()}}
    bullsGame320(showDate("2020-03-21"));function bullsGame320(daysAway){if(daysAway >= 1){$('#bulls-3-20-timer').hide()}}
    bullsGame321(showDate("2020-03-22"));function bullsGame321(daysAway){if(daysAway >= 1){$('#bulls-3-21-timer').hide()}}
    bullsGame323(showDate("2020-03-24"));function bullsGame323(daysAway){if(daysAway >= 1){$('#bulls-3-23-timer').hide()}}
    bullsGame326(showDate("2020-03-27"));function bullsGame326(daysAway){if(daysAway >= 1){$('#bulls-3-26-timer').hide()}}
    bullsGame328(showDate("2020-03-29"));function bullsGame328(daysAway){if(daysAway >= 1){$('#bulls-3-28-timer').hide()}}
    bullsGame330(showDate("2020-03-31"));function bullsGame330(daysAway){if(daysAway >= 1){$('#bulls-3-30-timer').hide()}}
    bullsGame43(showDate("2020-04-04"));function bullsGame43(daysAway){if(daysAway >= 1){$('#bulls-4-3-timer').hide()}}
    bullsGame45(showDate("2020-04-06"));function bullsGame45(daysAway){if(daysAway >= 1){$('#bulls-4-5-timer').hide()}}
    bullsGame46(showDate("2020-04-07"));function bullsGame46(daysAway){if(daysAway >= 1){$('#bulls-4-6-timer').hide()}}
    bullsGame48(showDate("2020-04-09"));function bullsGame48(daysAway){if(daysAway >= 1){$('#bulls-4-8-timer').hide()}}
    bullsGame411(showDate("2020-04-12"));function bullsGame411(daysAway){if(daysAway >= 1){$('#bulls-4-11-timer').hide()}}
    bullsGame413(showDate("2020-04-14"));function bullsGame413(daysAway){if(daysAway >= 1){$('#bulls-4-13-timer').hide()}}
    bullsGame415(showDate("2020-04-16"));function bullsGame415(daysAway){if(daysAway >= 1){$('#bulls-4-15-timer').hide()}}
    bullsNextSeason(showDate("2020-04-16"));
    function bullsNextSeason(daysAway){
        if(daysAway >= 1){
            $('#bulls-next-season').show();
        }
    }
/*BULLS TABLE RESERVATIONS*/
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
    $bulls46button = $('#bulls-4-6-button'); $bulls46popup = $('#bulls-4-6-pop-up');$bulls46button.click(function(){$bulls46popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls48button = $('#bulls-4-8-button'); $bulls48popup = $('#bulls-4-8-pop-up');$bulls48button.click(function(){$bulls48popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls411button = $('#bulls-4-11-button'); $bulls411popup = $('#bulls-4-11-pop-up');$bulls411button.click(function(){$bulls411popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls413button = $('#bulls-4-13-button'); $bulls413popup = $('#bulls-4-13-pop-up');$bulls413button.click(function(){$bulls413popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $bulls415button = $('#bulls-4-15-button'); $bulls415popup = $('#bulls-4-15-pop-up');$bulls415button.click(function(){$bulls415popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});

/*FROGS TABLE RESERVATIONS*/
    /*$frogsweek1button = $('#frogs-week-1-button'); $frogsweek1popup = $('#frogs-week-1-pop-up');$frogsweek1button.click(function(){$frogsweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});*/

/*HOOSIERS BASKETBALL SCHEDULE TIMER*/
    hoosiersBasketballGame34(showDate("2020-03-05"));function hoosiersBasketballGame34(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-3-4-timer').hide()}}
    hoosiersBasketballGame37(showDate("2020-03-08"));function hoosiersBasketballGame37(daysAway){if(daysAway >= 1){$('#hoosiers-basketball-3-7-timer').hide()}}
    hoosiersBasketballNextSeason(showDate("2020-03-08"));
    function hoosiersBasketballNextSeason(daysAway){
        if(daysAway >= 1){
            $('#hoosiers-basketball-next-season').show();
        }
    }
/*HOOSIERS BASKETBALL TABLE RESERVATIONS*/
    $hoosiersbasketball34button = $('#hoosiers-basketball-3-4-button'); $hoosiersbasketball34popup = $('#hoosiers-basketball-3-4-pop-up');$hoosiersbasketball34button.click(function(){$hoosiersbasketball34popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $hoosiersbasketball37button = $('#hoosiers-basketball-3-7-button'); $hoosiersbasketball37popup = $('#hoosiers-basketball-3-7-pop-up');$hoosiersbasketball37button.click(function(){$hoosiersbasketball37popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
/*HOOSIERS FOOTBALL SCHEDULE TIMER*/
/*HOOSIERS FOOTBALL TABLE RESERVATIONS*/
    /*$hoosiersfootballweek1button = $('#hoosiers-football-week-1-button'); $hoosiersfootballweek1popup = $('#hoosiers-football-week-1-pop-up');$hoosiersfootballweek1button.click(function(){$hoosiersfootballweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});*/

/*ILLINI BASKETBALL SCHEDULE TIMER*/
    illiniBasketballGame35(showDate("2020-03-06"));function illiniBasketballGame35(daysAway){if(daysAway >= 1){$('#illini-basketball-3-5-timer').hide()}}
    illiniBasketballGame38(showDate("2020-03-09"));function illiniBasketballGame38(daysAway){if(daysAway >= 1){$('#illini-basketball-3-8-timer').hide()}}
    illiniBasketballNextSeason(showDate("2020-03-09"));
    function illiniBasketballNextSeason(daysAway){
        if(daysAway >= 1){
            $('#illini-basketball-next-season').show();
        }
    }
/*ILLINI BASKETBALL TABLE RESERVATIONS*/
    $illinibasketball35button = $('#illini-basketball-3-5-button'); $illinibasketball35popup = $('#illini-basketball-3-5-pop-up');$illinibasketball35button.click(function(){$illinibasketball35popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $illinibasketball38button = $('#illini-basketball-3-8-button'); $illinibasketball38popup = $('#illini-basketball-3-8-pop-up');$illinibasketball38button.click(function(){$illinibasketball38popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
/*ILLINI FOOTBALL SCHEDULE TIMER*/  
/*ILLINI FOOTBALL TABLE RESERVATIONS*/
    /*$illinifootballweek1button = $('#illini-football-week-1-button'); $illinifootballweek1popup = $('#illini-football-week-1-pop-up');$illinifootballweek1button.click(function(){$illinifootballweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});*/ 

/*RAZORBACKS TABLE RESERVATIONS*/
    /*$razorbacksweek1button = $('#razorbacks-week-1-button'); $razorbacksweek1popup = $('#razorbacks-week-1-pop-up');$razorbacksweek1button.click(function(){$razorbacksweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});*/

/*TARHEELS FOOTBALL TABLE RESERVATIONS*/
    /*$tarheelsfootballweek1button = $('#tarheels-football-week-1-button'); $tarheelsfootballweek1popup = $('#tarheels-football-week-1-pop-up');$tarheelsfootballweek1button.click(function(){$tarheelsfootballweek1popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});*/
/*TARHEELS BASKETBALL SCHEDULE TIMER*/
    tarheelsBasketballGame33(showDate("2020-03-04"));function tarheelsBasketballGame33(daysAway){if(daysAway >= 1){$('#tarheels-basketball-3-3-timer').hide()}}
    tarheelsBasketballGame37(showDate("2020-03-08"));function tarheelsBasketballGame37(daysAway){if(daysAway >= 1){$('#tarheels-basketball-3-7-timer').hide()}}
    tarheelsBasketballNextSeason(showDate("2020-03-08"));
    function tarheelsBasketballNextSeason(daysAway){
        if(daysAway >= 1){
            $('#tarheels-basketball-next-season').show();
        }
    }
/*TARHEELS BASKETBALL TABLE RESERVATIONS*/
    $tarheelsbasketball33button = $('#tarheels-basketball-3-3-button'); $tarheelsbasketball33popup = $('#tarheels-basketball-3-3-pop-up');$tarheelsbasketball33button.click(function(){$tarheelsbasketball33popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
    $tarheelsbasketball37button = $('#tarheels-basketball-3-7-button'); $tarheelsbasketball37popup = $('#tarheels-basketball-3-7-pop-up');$tarheelsbasketball37button.click(function(){$tarheelsbasketball37popup.fadeIn();$sportsschedule.addClass('schedule-background-fade');});
   
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

/**********FEATURED UPCOMING CAROUSEL/**********/
/*MAIN CONCERT CAROUSEL TIMER*/
    nextonedownfeatured1(showDate("2020-03-29"));
        function nextonedownfeatured1(daysAway){
            if(daysAway >= 1){
                $('.event-wrapper').slick('slickRemove',0);
            }
        } 
    nextonedownfeatured2(showDate("2020-04-12"));
        function nextonedownfeatured2(daysAway){
            if(daysAway >= 1){
                $('.event-wrapper').slick('slickRemove',0);
            }

        }      
/**********UP NEXT TOP/**********/
        thecadillacthree022120next(showDate("2020-02-22"));
            function thecadillacthree022120next(daysAway){
                if(daysAway >= 1){
                    $('.the-cadillac-three-2-21-20-next').hide();
                    $('.twc-3-7-20-next').show();
                }
            }
        twc030720next(showDate("2020-03-08"));
            function twc030720next(daysAway){
                if(daysAway >= 1){
                    $('.twc-3-7-20-next').hide();
                    $('.sixteen-candles-3-14-20-next').show();
                }
            }
        candles031420next(showDate("2020-03-15"));
            function candles031420next(daysAway){
                if(daysAway >= 1){
                    $('.sixteen-candles-3-14-20-next').hide();
                    $('.then-again-3-21-20-next').show();
                }
            }
        thenAGain032120next(showDate("2020-03-22"));
            function thenAGain032120next(daysAway){
                if(daysAway >= 1){
                    $('.then-again-3-21-20-next').hide();
                }
            }
/**********UP NEXT BOTTOM/**********/
        twc70620rooftop(showDate("2020-02-22"));
            function twc70620rooftop(daysAway){
                if(daysAway >= 1){
                    $('.twc-3-7-20-rooftop').hide();
                    $('.sixteen-candles-3-14-20-rooftop').show();
                }
            }
        candles031420rooftop(showDate("2020-03-07"));
            function candles031420rooftop(daysAway){
                if(daysAway >= 1){
                    $('.sixteen-candles-3-14-20-rooftop').hide();
                    $('.then-again-3-21-20-rooftop').show();

                }
            }
        thenAgain032120rooftop(showDate("2020-03-21"));
            function thenAgain032120rooftop(daysAway){
                if(daysAway >= 1){
                    $('.then-again-3-21-20-rooftop').hide();

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
        autoplaySpeed: 5500,
        lazyLoad: 'ondemand',
        pauseOnHover: false,
        prevArrow: $('#main-events-arrows-left'),
        nextArrow: $('#main-events-arrows-right'),
        pauseOnFocus: true,
        pauseOnHover: true
    });
/*NEXT ONE DOWN*/
    firstEvent(showDate("2020-03-15"));
        function firstEvent(daysAway){
            if(daysAway >= 1){
                 $('.main-events-carousel-container').slick('removeSlide', true);
            }
        }

/**********SPECIAL EVENTS/**********/

/**********TRIVIA/**********/
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
/*TRIVIA RESERVATIONS*/
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
/**********EVENTS/**********/ 
    stpatricks031420EventHide(showDate("2020-03-15"));
        function stpatricks031420EventHide(daysAway){
            if(daysAway >= 1){
                $('.st-patricks-3-14-20-event').hide()
            } 
        }
/*EVENTS - SPECIALS*/
    $tipsytuesdaybutton.click(function(){
        $tipsytuesdayspecials.fadeIn();
        $eventswrapper.addClass('schedule-background-fade');
    });
    $karaokethursdaybutton.click(function(){
        $karaokethursdayspecials.fadeIn();
        $eventswrapper.addClass('schedule-background-fade');
    });

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