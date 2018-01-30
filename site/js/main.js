
//Fullpage plugin
$(document).ready(function(){

    var fullPageFunc = function() {
    var $footer = $('.j-footer');
    var $dot = $('.j-dot');

    if ($(window).width() > 1024) {
            $('.j-sliders-wrapper').fullpage({
                    menu: '#menu',
                    lockAnchors: false,
                    responsiveWidth: 1024,
                    onLeave: function(index, nextIndex){

                        if (nextIndex == 2 || nextIndex == 3 || nextIndex == 4){
                            $footer.fadeIn(500);
                            $dot.removeClass('active');
                            $dot.eq(nextIndex - 1).addClass('active');
                        } else if (nextIndex == 1) {
                            $footer.fadeOut(500);
                            $dot.removeClass('active');
                            $dot.eq(0).addClass('active');
                        }
                    }
                });
    } else {

        $('.j-sliders-wrapper').fullpage({
                menu: '#menu',
                lockAnchors: false,
                autoScrolling:false,
                fitToSection: false
        });
    } 
}

    var desktopDevice = device.desktop(); //initializing of device.js plugin

    //this function is called when fullpage plugin is not initialized (anchor links of header-menu)
    var anchorLinkFunc = function() {

        $(".j-anchor-link").on("click", function (e) {
            var id  = $(this).attr('data-anchor'),
                top = $(id).offset().top;

            e.preventDefault();
            $('.j-hamburger-link').removeClass('is-active');
            $('.j-header-menu').removeClass('menu-open');
            $('.j-hamburger-menu').removeClass('hamburger-position');
            $('body,html').animate({scrollTop: top - 100 + 'px'}, 100);
        });

    }

    //changing opacity of title paragraphs in a left block of the section Home when video is playing
    var bgFunc = function() {
        var $detailedBlock = $('.j-detailed-block');

        $detailedBlock.on('click', function() {
            var $this = $(this);
            var $title = $('.j-title');
            var $thisTitle = $this.find($title);

            $title.removeClass('detailed-info__title_modify');
            $thisTitle.addClass('detailed-info__title_modify');
        })
    }

    //clicking on short title video, a big video block appears
    var videoFuncDesctop = function() {
        var $shortVideo = $('.j-video-short');
        var videoShort = document.querySelector('.j-video');
        var $sectionTitle = $('.j-home-title');
        var $videoModal = $('.j-video-modal')

        $shortVideo.on('click', function() {
            $sectionTitle.addClass('opacity0');
            $videoModal.addClass('video-modal_open');
            videoShort.play();
        });

        $('.j-hide-video-link').on('click', function() {
            $sectionTitle.removeClass('opacity0');
            $videoModal.removeClass('video-modal_open');
            videoShort.load();
            videoShort.pause();
        })
    }

    var videoFuncMob = function() {
        var videoShort = document.querySelector('.j-video-short');
        videoShort.play();
    }

    if (desktopDevice || screen.width > 1024) {
        fullPageFunc();
        videoFuncMob();
        videoFuncDesctop();
    } else {
        $('body').addClass('mobile-version');
        anchorLinkFunc();
        bgFunc();
        $('.j-video-short').remove();
        $('.j-video-modal').closest('.mobile-version').addClass('displayBlock');
        $('.j-hide-video-link').remove();
    }


});


//bpopup (popup for video in section Home)
$(document).ready(function(){

    $('.j-video-popup-link').on('click', function() {
        $('.video-modal').bPopup();
    })
    
});


//section Services - changing background and button's opacity on hover state
$(document).ready(function(){

    $(".j-detailed-block").mouseenter(function () {
        var $this = $(this);
        var $title = $('.j-title');
        var $thisTitle = $this.find($title);
        var $parentBlock = $('.j-block-item');
        var $thisParent = $this.parent('.j-block-item');
        var thisParentIndex = $thisParent.index();
        var $sectionBlock = $('.j-section-services');

        $parentBlock.find('.j-form-button').removeClass('button-visible');
        $thisParent.find('.j-form-button').addClass('button-visible');

        $title.removeClass('detailed-info__title_modify');
        $thisTitle.addClass('detailed-info__title_modify');


        if (thisParentIndex == 0) {
            $sectionBlock.removeClass('bg2 bg3').addClass('bg1');
        } else if (thisParentIndex == 1) {
            $sectionBlock.removeClass('bg1 bg3').addClass('bg2');
        } else if (thisParentIndex == 2) {
            $sectionBlock.removeClass('bg1 bg2').addClass('bg3');
        }
    });
    
});



//hamburger menu (< 770px)
$(document).ready(function(){
    var $burgerLink = $('.j-hamburger-link');
    var $headerMenu = $('.j-header-menu');
    var $hamburger = $('.j-hamburger-menu');
    var $innerMenu = $('.j-menu-list');
    var $sectionContacts = $('.section-contact');

    $burgerLink.on('click', function() {
        var $this = $(this);

            if($this.hasClass('is-active')) {
                $this.removeClass('is-active');
                $headerMenu.removeClass('menu-open');
                $('.inner-div').remove();
                $sectionContacts.removeClass('z-ind-1');
            }else {
                $this.addClass('is-active');
                $headerMenu.addClass('menu-open');
                $innerMenu.append('<div class="inner-div">Injured? We can help</div>');
                $sectionContacts.addClass('z-ind-1');
            };
        });
})


//google map

var map;
var googleSite = "https://www.google.com/maps/place/428+Forbes+Ave+%231800,+Pittsburgh,+PA+15219/@40.4388207,-80.0003738,17z/data=!3m1!4b1!4m5!3m4!1s0x8834f150ac3fead5:0x6bf5ca86c891b1d1!8m2!3d40.4388207!4d-79.9981851";

window.initMap = function () {

    if ($(window).width() > 480) { //difference in zoom
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.440898, lng: -79.998413},
            zoom: 16,
            scrollwheel:false,
            mapTypeControl: false,
            draggable: false,
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
        });    
    } else {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.440898, lng: -79.998413},
            zoom: 15,
            scrollwheel:false,
            mapTypeControl: false,
            draggable: false,
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
        });
    }

    var image = 'images/visit-us.png';  
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.439245, -79.998228),
        map: map,
        icon: image
    });

    marker.addListener('click', function() {
        window.open(googleSite);
    });
}


//for mobile version - going to google page when clicking on the whole map block 
$(document).ready(function(){
    if ($(window).width() <= 480) {
        $('.map').on('click', function() {
            window.open(googleSite);
        })
    }
})


//calculating left dots block position for screens with big width
$(document).ready(function(){
    var left = $('.section-home').find('.content-block').offset().left;
    var $dots = $('.j-dots');
    var $address = $('.j-address');
    var $homeForm = $('.section-home').find('.contact-form');
    var homeFormWidth = $homeForm.width();
    var homeFormLeft = $homeForm.offset().left;
    var $form = $('.j-contact-form');
    var windowWidth = $(window).width();

    if (windowWidth > 1920) {
        $dots.css('left', left + 'px');
        $address.css('left', left + 'px');
        $form.css('margin-right', windowWidth - homeFormLeft - homeFormWidth + 'px'); 
    }

})



//form popups ("tell us your case")
$(document).ready(function(){
    var $popupWrapper  = $('.j-popup-wrapper');
    var $mainWrapper = $('.j-main-wrapper');

    $('.j-form-button').on('click', function() {
        var $popup        = $(this).siblings('.j-popup'),
            popupWrapperWidth  = $popupWrapper.width(),
            popupWrapperHeight = $popupWrapper.height();
            var bodyScrollTop = $(window).scrollTop();

        $popup.clone().appendTo($popupWrapper);
        $mainWrapper.addClass('blur');
        $popupWrapper.fadeIn(300).find('.j-popup').delay(300).fadeIn(300);
    });

    $popupWrapper.on('click', function(e) { //closing modal window when click outside the popup
        var $this = $(this);
        var $popup = $this.find('.j-popup');

        if (!$(e.target).closest($popup).length) {
            $this.empty().hide();
            $mainWrapper.removeClass('blur');
        }
    })

})

