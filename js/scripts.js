 $(document).ready(function () {

 	var windowSize = $(window).width();
 	if (windowSize > 1180) {

 		$(".main-menu li.dropdownitem").hover(function () {

 			$(this).find('.submenu').stop(true, true).delay(100).fadeIn();
 		}, function () {
 			$(this).find('.submenu').stop(true, true).delay(100).fadeOut();
 		});
 		$(".submenu").hover(function () {
 			$(this).find(".submenu").show();
 		});
 	}

 	$(".main-menu li .arrow-down").click(function () {
 		if (!$(this).next(".submenu").hasClass("-show")) {
 			$(this).next(".submenu").addClass("-show");
 			$(this).addClass("arrow-up");
 		} else {
 			$(this).next(".submenu").css("display", "").removeClass("-show");
 			$(this).removeClass("arrow-up");
 		}
 	});

 });

 $(document).ready(function () {
 	setTimeout(function () {
 		$('.loading').css('display', 'none');
 	}, 3000);
 	$(".menu-btn").click(function () {
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
 			setTimeout(function () {
 				$.each(response.data, function (i, item) {
 					$('.t-feeds').find('.photolist' + i).html('<a href="' + item.link + '" target="_blank"><img src="' + item.images.standard_resolution.url + '" class="img-respond"/><span class="insta-icon"><img src="/images/gates/location/instagram.png" alt=""/></span><div class="insta-overlay"><div class="overlay-con"><img src="/images/gates/location/instagram.png"><span>Follow Us <br> on Instagram</span></div></div></a>');
 				});
 			}, 1000);
 		}
 	});

 	setTimeout(function () {
 		$('#offers-carousel ').carousel({
 			interval: 5000,
 			cycle: true,

 			nav: true
 		});
 		$('#offerscroll').carousel({
 			interval: false,
 			cycle: true,

 			nav: true
 		});

 		$('#offers-carousel ').on('slide.bs.carousel', function (ev) {
 			var direction = ev.direction == 'right' ? 'prev' : 'next';
 			$('#offerscroll').carousel(direction);

 		});

 	}, 2000);

 });

 jQuery(function ($) {


 	setTimeout(function () {
 		$('#rdd-carousel ').carousel({
 			interval: 5000,
 			cycle: true,

 			nav: true
 		});
 		$('#rddscroll').carousel({
 			interval: false,
 			cycle: true,

 			nav: true
 		});

 		$('#rdd-carousel ').on('slide.bs.carousel', function (ev) {
 			var direction = ev.direction == 'right' ? 'prev' : 'next';
 			$('#rddscroll').carousel(direction);

 		});

 	}, 2000);

 });


 jQuery(document).ready(function ($) {
 	// browser window scroll (in pixels) after which the "back to top" link is shown
 	var offset = 300,
 		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
 		offset_opacity = 1200,
 		//duration of the top scrolling animation (in ms)
 		scroll_top_duration = 700,
 		//grab the "back to top" link
 		$back_to_top = $('.cd-top');

 	//hide or show the "back to top" link
 	$(window).scroll(function () {
 		($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
 		if ($(this).scrollTop() > offset_opacity) {
 			$back_to_top.addClass('cd-fade-out');
 		}
 	});

 	//smooth scroll to top
 	$back_to_top.on('click', function (event) {
 		event.preventDefault();
 		$('body,html').animate({
 			scrollTop: 0,
 		}, scroll_top_duration);
 	});

 });



 jQuery(function ($) {


 	setTimeout(function () {
 		$('#od-carousel ').carousel({
 			interval: 5000,
 			cycle: true,

 			nav: true
 		});
 		$('#odscroll').carousel({
 			interval: false,
 			cycle: true,

 			nav: true
 		});

 		$('#od-carousel ').on('slide.bs.carousel', function (ev) {
 			var direction = ev.direction == 'right' ? 'prev' : 'next';
 			$('#odscroll').carousel(direction);

 		});

 	}, 2000);

 });

 $('#gatesVideo').on('hide.bs.modal', function (e) {
 	var $if = $(e.delegateTarget).find('iframe');
 	var src = $if.attr("src");
 	$if.attr("src", '/empty.html');
 	$if.attr("src", src);
 });



 $(document).ready(function () {
 	$('.home-slider').slick({
 		autoplay: true,
 		autoplaySpeed: 5000,
 		dots: false,

 		centerMode: true,
 		centerPadding: '16%',
 		slidesToShow: 1,
 		responsive: [{
 			breakpoint: 768,
 			settings: {
 				arrows: false,
 				centerMode: true,
 				centerPadding: '4px',
 				slidesToShow: 1
 			}
 		}, {
 			breakpoint: 480,
 			settings: {
 				arrows: false,
 				centerMode: true,
 				centerPadding: '4px',
 				slidesToShow: 1
 			}
 		}]
 	});

 });

 $(window).load(function () {
 	if ($(window).width() > 768) {

 		jQuery('ul.nav li.dropdown a').attr('data-toggle', 'disable');
 		//Add Hover effect to menus
 		jQuery('ul.nav li.dropdown').hover(function () {
 			jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
 		}, function () {
 			jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
 		});
 	} else {
 		//jQuery('ul.nav li.dropdown a.dropdown-toggle').removeAttr('data-toggle');
 	}
 });

 $('#rd-carousel').carousel({
 	interval: false
 });


function InfoBox(opts) {
    google.maps.OverlayView.call(this);
    this.latlng_ = opts.latlng;
    this.map_ = opts.map;
    this.content = opts.content;
    this.offsetVertical_ = -135;
    this.offsetHorizontal_ = 5;
    this.height_ = 100;
    this.width_ = 186;
    var me = this;
    this.boundsChangedListener_ =
        google.maps.event.addListener(this.map_, "bounds_changed", function () {
            return me.panMap.apply(me);
        });
    // Once the properties of this OverlayView are initialized, set its map so
    // that we can display it. This will trigger calls to panes_changed and
    // draw.
    this.setMap(this.map_);
}
/* InfoBox extends GOverlay class from the Google Maps API
 */
InfoBox.prototype = new google.maps.OverlayView();
/* Creates the DIV representing this InfoBox
 */
InfoBox.prototype.remove = function () {
    if (this.div_) {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    }
};
/* Redraw the Bar based on the current projection and zoom level
 */
InfoBox.prototype.draw = function () {
    // Creates the element if it doesn't exist already.
    this.createElement();
    if (!this.div_) return;
    // Calculate the DIV coordinates of two opposite corners of our bounds to
    // get the size and position of our Bar
    var pixPosition = this.getProjection().fromLatLngToDivPixel(this.latlng_);
    if (!pixPosition) return;
    // Now position our DIV based on the DIV coordinates of our bounds
    this.div_.style.width = this.width_ + "px";
    this.div_.style.left = (pixPosition.x + this.offsetHorizontal_) + "px";
    this.div_.style.height = this.height_ + "px";
    this.div_.style.top = (pixPosition.y + this.offsetVertical_) + "px";
    this.div_.style.display = 'block';
};
/* Creates the DIV representing this InfoBox in the floatPane. If the panes
 * object, retrieved by calling getPanes, is null, remove the element from the
 * DOM. If the div exists, but its parent is not the floatPane, move the div
 * to the new pane.
 * Called from within draw. Alternatively, this can be called specifically on
 * a panes_changed event.
 */
InfoBox.prototype.createElement = function () {
    var panes = this.getPanes();
    var div = this.div_;
    if (!div) {
        // This does not handle changing panes. You can set the map to be null and
        // then reset the map to move the div.
        div = this.div_ = document.createElement("div");
            div.className = "infobox"
        var contentDiv = document.createElement("div");
            contentDiv.className = "content"
            contentDiv.innerHTML = this.content;
        var closeBox = document.createElement("div");
            closeBox.className = "close";
            closeBox.innerHTML = "x";
        div.appendChild(closeBox);

        function removeInfoBox(ib) {
            return function () {
                ib.setMap(null);
            };
        }
        google.maps.event.addDomListener(closeBox, 'click', removeInfoBox(this));
        div.appendChild(contentDiv);
        div.style.display = 'none';
        panes.floatPane.appendChild(div);
        this.panMap();
    } else if (div.parentNode != panes.floatPane) {
        // The panes have changed. Move the div.
        div.parentNode.removeChild(div);
        panes.floatPane.appendChild(div);
    } else {
        // The panes have not changed, so no need to create or move the div.
    }
}
/* Pan the map to fit the InfoBox.
 */
InfoBox.prototype.panMap = function () {
    // if we go beyond map, pan map
    var map = this.map_;
    var bounds = map.getBounds();
    if (!bounds) return;
    // The position of the infowindow
    var position = this.latlng_;
    // The dimension of the infowindow
    var iwWidth = this.width_ ;
    var iwHeight = this.height_ ; 
    // The offset position of the infowindow
    var iwOffsetX = this.offsetHorizontal_;
    var iwOffsetY = this.offsetVertical_;
    // Padding on the infowindow
    var padX = 40;
    var padY = 40;
    // The degrees per pixel
    var mapDiv = map.getDiv();
    var mapWidth = mapDiv.offsetWidth;
    var mapHeight = mapDiv.offsetHeight;
    var boundsSpan = bounds.toSpan();
    var longSpan = boundsSpan.lng();
    var latSpan = boundsSpan.lat();
    var degPixelX = longSpan / mapWidth;
    var degPixelY = latSpan / mapHeight;
    // The bounds of the map
    var mapWestLng = bounds.getSouthWest().lng();
    var mapEastLng = bounds.getNorthEast().lng();
    var mapNorthLat = bounds.getNorthEast().lat();
    var mapSouthLat = bounds.getSouthWest().lat();
    // The bounds of the infowindow
    var iwWestLng = position.lng() + (iwOffsetX - padX) * degPixelX;
    var iwEastLng = position.lng() + (iwOffsetX + iwWidth + padX) * degPixelX;
    var iwNorthLat = position.lat() - (iwOffsetY - padY) * degPixelY;
    var iwSouthLat = position.lat() - (iwOffsetY + iwHeight + padY) * degPixelY;
    // calculate center shift
    var shiftLng =
        (iwWestLng < mapWestLng ? mapWestLng - iwWestLng : 0) +
        (iwEastLng > mapEastLng ? mapEastLng - iwEastLng : 0);
    var shiftLat =
        (iwNorthLat > mapNorthLat ? mapNorthLat - iwNorthLat : 0) +
        (iwSouthLat < mapSouthLat ? mapSouthLat - iwSouthLat : 0);
    // The center of the map
    var center = map.getCenter();
    // The new map center
    var centerX = center.lng() - shiftLng;
    var centerY = center.lat() - shiftLat;
    // center the map to the new shifted center
    map.setCenter(new google.maps.LatLng(centerY, centerX));
    // Remove the listener after panning is complete.
    google.maps.event.removeListener(this.boundsChangedListener_);
    this.boundsChangedListener_ = null;
};

function initialize1() {
    var markers = []; // makers array
  
    var myOptions = { // map settings
        zoom: 12,
        center: new google.maps.LatLng(41.412024, 2.219475),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        sensor: 'true', 
        scaleControl: false,
        scrollwheel: false
    }
    var map = new google.maps.Map(document.getElementById("canvas-map"), myOptions);
  
    var data = [ // map data
     {
       'id':1,
       'content':'<strong>Gates Diagonal Barcelona</strong><br>Avenida Diagonal, 205<br>08018 Barcelona<br>Spain',
       'position': {
         'lat': 41.403656,
         'lng': 2.190294
        },
        'markericon': '/images/icons/marker1.png'
     },  
      {
        'id':2,
        'content':'<strong>La Rambla</strong><br>08002 Barcelona<br>Spain',
        'position': {
          'lat':41.380727,
          'lng':2.173551
         },
         'markericon': '/images/icons/marker.png'
      },
      {
        'id':3,
        'content':'<strong>Sagrada Familia</strong><br>Carrer de Mallorca, 401<br>08013 Barcelona<br>Spain ',
        'position': {
          'lat':41.403630,
          'lng':2.174356
         },
         'markericon': '/images/icons/marker.png'
      },
      {
        'id':5,
        'content':'<strong>Passeig De Gracia</strong><br>08007 Barcelona<br>Spain ',
        'position': {
          'lat':41.393170,
          'lng':2.163960
         },
         'markericon': '/images/icons/marker.png'
      },
      {
        'id':6,
        'content':'<strong>Parc Guell</strong><br>08024 Barcelona<br>Spain',
        'position': {
          'lat': 41.414495,
          'lng': 2.152695
         },
         'markericon': '/images/icons/marker.png'
      },
      {
        'id':7,
        'content':'<strong>Port Olympic</strong><br>08005 Barcelona<br>Spain',
        'position': {
          'lat': 41.386471,
          'lng': 2.202847
         },
         'markericon': '/images/icons/marker.png'
      },
      {
        'id':8,
        'content':"<strong>Camp Nou</strong><br>Carrer d'Aristides Maillol<br>08028 Barcelona<br>Spain",
        'position': {
          'lat': 41.380896,
          'lng': 2.122820
         },
         'markericon': '/images/icons/marker.png'
      },
      {
        'id':9,
        'content':'<strong>Fira Montjuic</strong><br>Avinguda de la Reina Maria Cristina<br>08004 Barcelona<br>Spain ',
        'position': {
          'lat': 41.374169,
          'lng': 2.151255
         },
         'markericon': '/images/icons/marker.png'
      },
      {
        'id':10,
        'content':'<strong>TAKE FLIGHT</strong> <br>506 Blue Star Memorial Highway, Kittery, ME 03904',
        'position': {
          'lat': 43.115663,
          'lng': -70.728742
         },
         'markericon': '/images/icons/marker.png'
      },
      {
        'id':11,
        'content':'<strong>CCIB</strong><br>Placa de Willy Brandt, 11-14<br>08019 Barcelona<br>Spain ',
        'position': {
          'lat': 41.409407,
          'lng': 2.219077
         },
         'markericon': '/images/icons/marker.png'
      } 
    ];
   
    for (var i = 0; i < data.length; i++) {
      var current = data[i];
  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(current.position.lat, current.position.lng),
        map: map,
        icon:  current.markericon,
        content: current.content
      });
  
      markers.push(marker);
  
      google.maps.event.addListener(markers[i], "click", function (e) {
        var infoBox = new InfoBox({
            latlng: this.getPosition(),
            map: map,
            content: this.content
        });
      });
    }
}

jQuery(document).ready(function(){ 
    google.maps.event.addDomListener(window, 'load', initialize1);

});


 $(document).ready(function () {
 	$('.home-slider').slick({

 		autoplay: true,
 		dots: false,

 	});



 });

 $(window).on('load resize', function () {
 	var mheight = $(window).height();
 	var mwidth = $(window).width();

 	if (mwidth > 300) {
 		$(".home-banner .carousel-inner .item").height(mheight - 50);
 	}
 	if (mwidth > 768) {
 		$(".home-banner .carousel-inner .item").height(mheight - 75);
 	}
 	if (mwidth > 1240) {
 		$(".home-banner .carousel-inner .item").height(mheight - 121);
 	}

 });

 $(window).on('load scroll resize', function () {

 	var mheight = $(window).height();
 	var mscroll = $(window).scrollTop();
 	var mwidth = $(window).width();

 	if (mwidth > 1240) {
 		if (mscroll > 100) {
 			$(".header-wrapper").addClass("fixed-header-wrapper");
 			$("body").addClass("body-padd-sticky");
 		} else {
 			$(".header-wrapper").removeClass("fixed-header-wrapper");
 			$("body").removeClass("body-padd-sticky");
 		}
 	}


 	if (mwidth < 1240) {
 		$(".header-wrapper").addClass("fixed-header-device");
 		$("body").addClass("body-padd-sticky");
 		$(".header-wrapper").removeClass("fixed-header-wrapper");

 	} else {
 		$(".header-wrapper").removeClass("fixed-header-device");
 	}

 });

 $(document).ready(function () {
 	$(".home-banner-wrap .item").hover(function () {
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
 				$(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn() : // otherwise
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
 	if (mwidth > 768) {
 		// Home specials title equal heights

 		$(".home-specials-item h3").each(function () {
 			if ($(this).height() > maxHeight) {
 				maxHeight = $(this).height();
 			}
 		});

 		$(".home-specials-item h3").height(maxHeight);

 		// Home specials description equal heights
 		$(".home-specials-item h3").each(function () {
 			if ($(this).height() > maxHeight) {
 				maxHeight = $(this).height();
 			}
 		});

 		$(".home-specials-item p").height(maxHeight);

 		// Rooms title equal heights

 		$(".rooms-item h2").each(function () {
 			if ($(this).height() > maxHeight) {
 				maxHeight = $(this).height();
 			}
 		});

 		$(".rooms-item h2").height(maxHeight);

 		// Rooms title equal heights

 		$(".rooms-item p").each(function () {
 			if ($(this).height() > maxHeight) {
 				maxHeight = $(this).height();
 			}
 		});

 		$(".rooms-item p").height(maxHeight);


 		$(".offer-text h3").each(function () {
 			if ($(this).height() > maxHeight) {
 				maxHeight = $(this).height();
 			}
 		});

 		if (mwidth > 767) {
 			$(".offer-text h3").height(maxHeight);
 		}

 	}




 });



 /*move caption area out of carousel for rooms*/

 jQuery(function ($) {
 	$('.owl-carousel').owlCarousel({
 		stagePadding: 50,
 		loop: true,
 		margin: 10,
 		nav: false,
 		items: 1,
 		lazyLoad: true,
 		nav: true,

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
 		var caption = $('#specials-carousel').find('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption h3');
 		$('.special-caption-area h3').html(caption.html());
 		caption.css('display', 'none');

 		var captionp = $('#specials-carousel').find('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption p');
 		$('.special-caption-area p').html(captionp.html());
 		captionp.css('display', 'none');

 		var captionlinks = $('#specials-carousel').find('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption .links');
 		$('.special-caption-area .links').html(captionlinks.html());
 		captionlinks.css('display', 'none');
 	});
 });

 //jptform
 $("#input_15").datepicker({
 	dateFormat: "yy-mm-dd",
 	altField: '#input_15',
 	altFormat: 'yy-mm-dd',
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
 	altField: '#input_16',
 	altFormat: 'yy-mm-dd',
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