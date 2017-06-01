 $(document).ready(function(){
	 
	 var windowSize = $(window).width();
	  if (windowSize > 1180) {
	
		 $(".main-menu li.dropdownitem").hover(function(){
		
		 $(this).find('.submenu').stop(true, true).delay(100).fadeIn();
        }, function() {
          $(this).find('.submenu').stop(true, true).delay(100).fadeOut();
	 });
	 $(".submenu").hover(function(){
		  $(this).find(".submenu").show();
	 });
	  }

	 $(".main-menu li .arrow-down").click(function(){
		 if(!$(this).next(".submenu").hasClass("-show")){
			 $(this).next(".submenu").addClass("-show"); 
			 $(this).addClass("arrow-up");
		 }
		 else {
			 $(this).next(".submenu").css("display", "").removeClass("-show");
			 $(this).removeClass("arrow-up");
		 }
	 });

 });
 
  $(document).ready(function() {
    setTimeout(function(){
     $('.loading').css('display','none'); 
    },2000); 
	 $(".menu-btn").click(function(){
		 $(".main-menu").slideToggle(300);
	 });
	 $('#lightgallery').lightGallery({
   		selector: '.item',
		counter: false,
		fullScreen: false
		});
	$('.video-player-param').lightGallery({
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            controls: 0
        },
        vimeoPlayerParams: {
            byline: 0,
            portrait: 0,
            color: 'A90707'
        }
    });
 
   
   // get instagram feed
  var instaurl = 'https://api.instagram.com/v1/users/260774511/media/recent/?access_token=260774511.4212a58.483bbbf81f5b4ba6bbbc4b909dafe7e7&callback=?';
   $.ajax({
      url: instaurl,
      dataType: "jsonp",
      success: function (response) { 
        setTimeout(function(){
        $.each(response.data, function(i, item) { 
            $('.t-feeds').find('.photolist'+i).html('<a href="'+item.link+'" target="_blank"><img src="'+item.images.standard_resolution.url+'" class="img-respond"/><span class="insta-icon"><img src="/images/gates/location/instagram.png" alt=""/></span><div class="insta-overlay"><div class="overlay-con"><img src="/images/gates/location/instagram.png"><span>Follow Us <br> on Instagram</span></div></div></a>');
        });
      },1000);
      }
    });

    setTimeout(function(){
      $('#offers-carousel ').carousel({
        interval: 5000,
        cycle: true,

        nav:true
      });
      $('#offerscroll').carousel({
        interval: false,
        cycle: true,

        nav:true
      });

       $('#offers-carousel ').on('slide.bs.carousel', function(ev){
          var direction = ev.direction == 'right' ? 'prev' : 'next';
    	 	  $('#offerscroll').carousel(direction);

    	 });

    },2000);

});

jQuery(function ($) {


    setTimeout(function(){
      $('#rdd-carousel ').carousel({
        interval: 5000,
        cycle: true,

        nav:true
      });
      $('#rddscroll').carousel({
        interval: false,
        cycle: true,

        nav:true
      });

       $('#rdd-carousel ').on('slide.bs.carousel', function(ev){
          var direction = ev.direction == 'right' ? 'prev' : 'next';
    	 	  $('#rddscroll').carousel(direction);

    	 });

    },2000);

});



jQuery(function ($) {


    setTimeout(function(){
      $('#od-carousel ').carousel({
        interval: 5000,
        cycle: true,

        nav:true
      });
      $('#odscroll').carousel({
        interval: false,
        cycle: true,

        nav:true
      });

       $('#od-carousel ').on('slide.bs.carousel', function(ev){
          var direction = ev.direction == 'right' ? 'prev' : 'next';
    	 	  $('#odscroll').carousel(direction);

    	 });

    },2000);

});
 
 $('#gatesVideo').on('hide.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
});


 
 $(document).ready(function(){
  $('.home-slider').slick({
  autoplay: false,
    dots: false,
	
   centerMode: true,
  centerPadding: '16%',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '4px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '4px',
        slidesToShow: 1
      }
    }
  ]
});
	
});

$(window).load(function(){
  if( $(window).width() > 768 ) {

     jQuery('ul.nav li.dropdown a').attr('data-toggle','disable');
   //Add Hover effect to menus
        jQuery('ul.nav li.dropdown').hover(function() {
          jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
        }, function() {
          jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
        });
  }
  else{
     //jQuery('ul.nav li.dropdown a.dropdown-toggle').removeAttr('data-toggle');
  }
});
 
 $('#rd-carousel').carousel({
    	interval: false
	});


	  
	 
	  
	  $(document).ready(function(){
    $('.home-slider').slick({
     
       autoplay: true,
       dots: false,
  	
    });

    
	
});
	  
$(window).on('load resize', function () {
  var mheight = $(window).height();
  var mwidth = $(window).width();
  
  if(mwidth > 300){
    $(".home-banner .carousel-inner .item").height(mheight-50);
  }
  if(mwidth > 768){
    $(".home-banner .carousel-inner .item").height(mheight-75);
  }
  if(mwidth > 1240){
    $(".home-banner .carousel-inner .item").height(mheight-121);
  }
  
});   

$(window).on('load scroll resize', function () {
 
 	var mheight = $(window).height();
	var mscroll = $(window).scrollTop();
	var mwidth = $(window).width();
	
	if(mwidth > 1240){
	if(mscroll > 100){
		$(".header-wrapper").addClass("fixed-header-wrapper");
		$("body").addClass("body-padd-sticky");
	}
	
	else{
		$(".header-wrapper").removeClass("fixed-header-wrapper");
		$("body").removeClass("body-padd-sticky");
	}
	}
	
	
	if(mwidth < 1240){
		$(".header-wrapper").addClass("fixed-header-device");
		$("body").addClass("body-padd-sticky");
		$(".header-wrapper").removeClass("fixed-header-wrapper");
		
	}
	else{
		$(".header-wrapper").removeClass("fixed-header-device");
	}
 
 });
 
 $(document).ready(function() {
	 $(".home-banner-wrap .item").hover(function(){
		 $(this).find(".transparent-bg").toggle();
	 });
	 
	 
	  $(".filter").on("click", function () {
    var $this = $(this);
    // if we click the active tab, do nothing
    if (!$this.hasClass("active")) {
      $(".filter").removeClass("active");
      $this.addClass("active"); // set the active tab
      var $filter = $this.data("rel"); // get the data-rel value from selected tab and set as filter
      $filter == 'all' ? // if we select "view all", return to initial settings and show all
        $(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn() 
        : // otherwise
        $(".fancybox").fadeOut(0).filter(function () { 
          return $(this).data("filter") == $filter; // set data-filter value as the data-rel value of selected tab
        }).attr("data-fancybox-group", $filter).fadeIn(1000); // set data-fancybox-group and show filtered elements
    } // if
  }); // on
	 
	 
 });
 

 
$('#homeCarousel,#specialsCarousel').carousel({
  interval: 7000,
  cycle: true
}); 

  // title equal heights
  
$(window).on('load resize', function () {
var maxHeight = 0;


	var mwidth = $(window).width();
if(mwidth > 768){
// Home specials title equal heights

$(".home-specials-item h3").each(function(){
   if ($(this).height() > maxHeight) { 
     maxHeight = $(this).height(); 
 }
});

$(".home-specials-item h3").height(maxHeight);

// Home specials description equal heights
$(".home-specials-item h3").each(function(){
   if ($(this).height() > maxHeight) { 
     maxHeight = $(this).height(); 
 }
});

$(".home-specials-item p").height(maxHeight);

// Rooms title equal heights

$(".rooms-item h2").each(function(){
   if ($(this).height() > maxHeight) { 
     maxHeight = $(this).height(); 
 }
});

$(".rooms-item h2").height(maxHeight);

// Rooms title equal heights

$(".rooms-item p").each(function(){
   if ($(this).height() > maxHeight) { 
     maxHeight = $(this).height(); 
 }
});

$(".rooms-item p").height(maxHeight);


$(".offer-text h3").each(function(){
   if ($(this).height() > maxHeight) { 
     maxHeight = $(this).height(); 
 }
});

if(mwidth > 767){
$(".offer-text h3").height(maxHeight);
}

}




});



/*move caption area out of carousel for rooms*/

jQuery(function ($) {
  $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:false,
    items:1,
    lazyLoad: true,
    nav:true,
  
});
    $('#rooms-carousel').carousel();
    var captionroom = $('#rooms-carousel').find('div.item:nth-child(1) .carousel-caption h3');
    $('#roomscroll h3').html(captionroom.html());
    captionroom.css('display', 'none');
	
	var captionroomp = $('#rooms-carousel').find('div.item:nth-child(1) .carousel-caption p');
    $('#roomscroll p').html(captionroomp.html());
    captionroomp.css('display', 'none');
	
	var captionroomlinks = $('#rooms-carousel').find('div.item:nth-child(1) .carousel-caption .links');
    $('#roomscroll .links').html(captionroomlinks.html());
    captionroomlinks.css('display', 'none');

    $("#rooms-carousel").on('slide.bs.carousel', function (evt) {
        var captionroom = $(this).find('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption h3');
        $('#roomscroll h3').html(captionroom.html());
        captionroom.css('display', 'none');
		
		var captionroomp = $(this).find('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption p');
        $('#roomscroll p').html(captionroomp.html());
        captionroomp.css('display', 'none');
		
		var captionroomlinks = $(this).find('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption .links');
        $('#roomscroll .links').html(captionroomlinks.html());
       captionroomlinks.css('display', 'none');
    });
});


/*move caption area out of carousel for specials*/

jQuery(function ($) {
    $('#specials-carousel').carousel();
    var caption = $('#specials-carousel').find('div.item:nth-child(1) .carousel-caption h3');
    $('.special-caption-area h3').html(caption.html());
    caption.css('display', 'none');
	
	var captionp = $('#specials-carousel').find('div.item:nth-child(1) .carousel-caption p');
    $('.special-caption-area p').html(captionp.html());
    captionp.css('display', 'none');
	
	var captionlinks = $('#specials-carousel').find('div.item:nth-child(1) .carousel-caption .links');
    $('.special-caption-area .links').html(captionlinks.html());
    captionlinks.css('display', 'none');

    $("#specials-carousel").on('slide.bs.carousel', function (evt) {
        var caption =  $('#specials-carousel').find('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption h3');
        $('.special-caption-area h3').html(caption.html());
        caption.css('display', 'none');
		
		var captionp =  $('#specials-carousel').find('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption p');
        $('.special-caption-area p').html(captionp.html());
        captionp.css('display', 'none');
		
		var captionlinks =  $('#specials-carousel').find('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption .links');
        $('.special-caption-area .links').html(captionlinks.html());
        captionlinks.css('display', 'none');
    });
});

//jptform
$("#input_15").datepicker({
            dateFormat: "yy-mm-dd",
      altField  : '#input_15',
      altFormat : 'yy-mm-dd',
            minDate: 0,
            onSelect: function (date) {
                var date2 = $('#input_15').datepicker('getDate');
                date2.setDate(date2.getDate() + 1);
                $('#input_16').datepicker('setDate', date2);
                //sets minDate to dt1 date + 1
                $('#input_16').datepicker('option', 'minDate', date2);
            }
        });
        $('#input_16').datepicker({
            dateFormat: "yy-mm-dd",
      altField  : '#input_16',
      altFormat : 'yy-mm-dd',
            onClose: function () {
                var dt1 = $('#v').datepicker('getDate');
                console.log(dt1);
                var dt2 = $('#input_16').datepicker('getDate');
                if (dt2 <= dt1) {
                    var minDate = $('#input_16').datepicker('option', 'minDate');
                    $('#input_16').datepicker('setDate', minDate);
                }
            }
        });


 


