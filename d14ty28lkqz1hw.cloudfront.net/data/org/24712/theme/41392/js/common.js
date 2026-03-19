var has_fancybox = 1;
var has_responsive_tabs = 1;
var has_back_top_top_button = 1;
var has_sticky_menu = 1;

$(document).ready(function(){
    $(document).PS("Utils", "init_cart_display", {
        "user_greeting_logged_in_mobile":'<span class="welcome"><span class="bold">Welcome</span><%firstname%></span>',
        "user_greeting_logged_out":'<a href="<%login_url%>">login</a> | <a href="<%register_url%>">register</a>',
        "user_greeting_logged_out_mobile":'<a href="<%login_url%>">login</a> | <a href="<%register_url%>">register</a>'
    }).PS("Utils","init_user_greeting");
            
    $('.top-bar-section .menu li.has-dropdown > a:not(.external-link)').click(function(){ 
        window.open($(this).attr("href"), '_parent');
    });
    
    var pathname = window.location.pathname.split("/");
    var arg = window.location.search.split("?");
    
    $(".home").removeClass("active");
    if(pathname[1] == "" || pathname[1] == 'index.cfm') {
        $(".home").addClass("active");
        if(arg[1] != "" || arg[1] != undefined || arg[1] != null )
            $(".body-content").addClass("system-page").removeClass("home-page");
    }
    else $("."+pathname[2]).addClass("active");
            
    $(".logged-in .full-width #slider .ps-instructions").html("<p>FOR BEST RESULTS, CROP YOUR IMAGES TO: 1600px <span class='border'>X</span> 375px</p>");
    $(".logged-in .within-grid #slider .ps-instructions").html("<p>FOR BEST RESULTS, CROP YOUR IMAGES TO: 1128px <span class='border'>X</span> 375px</p>");
    
    
      $(".search-click").click(function(){
            $(".search-container").toggle();
     })
    
    /* Choosen */
    $(".filter select").chosen({ disable_search: true, width:200 });
            
    /* BX Slider - Start */
    var slider = $("ul.bxslider > li").length;
    if(slider > 1) {
        $('.bxslider').bxSlider( {
            controls:false,
            pager:true,
            auto:true,
            mode:'fade',
            pagerSelector: '#slider-pager',
            pagerLocation: 'bottom'
        });
    }
    else if(slider <= 0 ) {
        $('.logged-out #slider').hide();
        $('.logged-out:not(.system-page) main, .logged-out:not(.system-page) header').addClass('noSlider');
    }
    /* BX Slider - End */
    
    /* BX Slider - Media Gallery Type 2 */
    var mg2Slider = $("ul#media-gallery-2 > li").length;
    var mg2Auto = ( ( $('#media-gallery-2').attr('auto') > 0) ? true : false);
    var mg2Pager = ( ( $('#media-gallery-2').attr('pager') > 0) ? true : false);
    var mg2Controls = ( ( $('#media-gallery-2').attr('control') > 0) ? true : false);
    var mg2AdaptiveHeight = ( ( $('#media-gallery-2').attr('adaptiveHeight') > 0) ? true : false);
        
    if(mg2Slider > 1) {
        $('#media-gallery-2').bxSlider({
            captions: false,
            auto: mg2Auto,
            pager: mg2Pager,
            pagerCustom: '#media-gallery-2-thumbnails',
            autoControls: false,
            mode: 'fade',      
            controls: mg2Controls,
            infiniteLoop: true,
            adaptiveHeight : mg2AdaptiveHeight
        });
        $('#media-gallery-2-thumbnails').bxSlider({
            width:1000,
            left:0,
            minSlides: 3,
            maxSlides: 6,
            infiniteLoop: false,
            slideWidth: 110,
            slideMargin: 15,
            pager:false,
            auto:false,
            pause:14000,
            controls:true,
    	});
    }
    /* BX Slider - End */
    
    if(has_fancybox){
    /* FancyBox */
    var fancyBoxExists = $("main .fancybox").length;
    if(fancyBoxExists >= 1) {
        $('.fancybox').attr('rel', 'media-gallery').fancybox({
            prevEffect : 'fade',
            nextEffect : 'fade',
            openEffect    : 'fade',
            closeEffect    : 'fade',
            arrows : true,
            helpers : {
                media : {},
                buttons : {}
            }
        });
    }
    /* EndFancy Box */
    }
    
    /* Responsive Tabs */
    var responsiveTabsDefault = $("main .responsiveTab").length;
    if(responsiveTabsDefault >= 1) {
        $('.responsiveTab.default').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
    		fit: true, // 100% fit in a container
            closed: false,
      	});
        $('.responsiveTab.vertical').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
    		fit: true, // 100% fit in a container
            closed: false,
      	});
        $('.responsiveTab.accordion').easyResponsiveTabs({
            type: 'accordion', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
        	fit: true, // 100% fit in a container
            closed: false,
      	});
        $('.responsiveTab.accordionclosed').easyResponsiveTabs({
            type: 'accordion', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
        	fit: true, // 100% fit in a container
            closed: true,
      	});
    }
    /* EndFancy Box */
    
    if(has_back_top_top_button) {
    /* Scroll to top */    
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
    /* Scroll to top - End */
    }
    
    if(has_sticky_menu) {
    
      
            /* Sticky Menu */
            // Sticky Plugin v1.0.4 for jQuery
            // =============
            // Author: Anthony Garand
            // Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
            // Improvements by Leonardo C. Daronco (daronco)
            // Created: 02/14/2011
            // Date: 07/20/2015
            // Website: http://stickyjs.com/
            // Description: Makes an element on the page stick on the screen as you scroll
            //              It will only set the 'top' and 'position' of your element, you
            //              might need to adjust the width in some cases.
        
        (function (factory) {
            if (typeof define === 'function' && define.amd) {
                // AMD. Register as an anonymous module.
                define(['jquery'], factory);
            } else if (typeof module === 'object' && module.exports) {
                // Node/CommonJS
                module.exports = factory(require('jquery'));
            } else {
                // Browser globals
                factory(jQuery);
            }
        }(function ($) {
            var slice = Array.prototype.slice; // save ref to original slice()
            var splice = Array.prototype.splice; // save ref to original slice()
        
          var defaults = {
              topSpacing: 0,
              bottomSpacing: 0,
              className: 'is-sticky',
              wrapperClassName: 'sticky-wrapper',
              center: false,
              getWidthFrom: '',
              widthFromWrapper: true, // works only when .getWidthFrom is empty
              responsiveWidth: false,
              zIndex: 'auto'
            },
            $window = $(window),
            $document = $(document),
            sticked = [],
            windowHeight = $window.height(),
            scroller = function() {
              var scrollTop = $window.scrollTop(),
                documentHeight = $document.height(),
                dwh = documentHeight - windowHeight,
                extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
        
              for (var i = 0, l = sticked.length; i < l; i++) {
                var s = sticked[i],
                  elementTop = s.stickyWrapper.offset().top,
                  etse = elementTop - s.topSpacing - extra;
        
                //update height in case of dynamic content
                s.stickyWrapper.css('height', s.stickyElement.outerHeight());
        
                if (scrollTop <= etse) {
                  if (s.currentTop !== null) {
                    s.stickyElement
                      .css({
                        'width': '',
                        'position': '',
                        'top': '',
                        'z-index': ''
                      });
                    s.stickyElement.parent().removeClass(s.className);
                    s.stickyElement.trigger('sticky-end', [s]);
                    s.currentTop = null;
                  }
                }
                else {
                  var newTop = documentHeight - s.stickyElement.outerHeight()
                    - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                  if (newTop < 0) {
                    newTop = newTop + s.topSpacing;
                  } else {
                    newTop = s.topSpacing;
                  }
                  if (s.currentTop !== newTop) {
                    var newWidth;
                    if (s.getWidthFrom) {
                        newWidth = $(s.getWidthFrom).width() || null;
                    } else if (s.widthFromWrapper) {
                        newWidth = s.stickyWrapper.width();
                    }
                    if (newWidth == null) {
                        newWidth = s.stickyElement.width();
                    }
                    s.stickyElement
                      .css('width', newWidth)
                      .css('position', 'fixed')
                      .css('top', newTop)
                      .css('z-index', s.zIndex);
        
                    s.stickyElement.parent().addClass(s.className);
        
                    if (s.currentTop === null) {
                      s.stickyElement.trigger('sticky-start', [s]);
                    } else {
                      // sticky is started but it have to be repositioned
                      s.stickyElement.trigger('sticky-update', [s]);
                    }
        
                    if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
                      // just reached bottom || just started to stick but bottom is already reached
                      s.stickyElement.trigger('sticky-bottom-reached', [s]);
                    } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
                      // sticky is started && sticked at topSpacing && overflowing from top just finished
                      s.stickyElement.trigger('sticky-bottom-unreached', [s]);
                    }
        
                    s.currentTop = newTop;
                  }
        
                  // Check if sticky has reached end of container and stop sticking
                  var stickyWrapperContainer = s.stickyWrapper.parent();
                  var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);
        
                  if( unstick ) {
                    s.stickyElement
                      .css('position', 'absolute')
                      .css('top', '')
                      .css('bottom', 0)
                      .css('z-index', '');
                  } else {
                    s.stickyElement
                      .css('position', 'fixed')
                      .css('top', newTop)
                      .css('bottom', '')
                      .css('z-index', s.zIndex);
                  }
                }
              }
            },
            resizer = function() {
              windowHeight = $window.height();
        
              for (var i = 0, l = sticked.length; i < l; i++) {
                var s = sticked[i];
                var newWidth = null;
                if (s.getWidthFrom) {
                    if (s.responsiveWidth) {
                        newWidth = $(s.getWidthFrom).width();
                    }
                } else if(s.widthFromWrapper) {
                    newWidth = s.stickyWrapper.width();
                }
                if (newWidth != null) {
                    s.stickyElement.css('width', newWidth);
                }
              }
            },
            methods = {
              init: function(options) {
                var o = $.extend({}, defaults, options);
                return this.each(function() {
                  var stickyElement = $(this);
        
                  var stickyId = stickyElement.attr('id');
                  var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
                  var wrapper = $('<div></div>')
                    .attr('id', wrapperId)
                    .addClass(o.wrapperClassName);
        
                  stickyElement.wrapAll(wrapper);
        
                  var stickyWrapper = stickyElement.parent();
        
                  if (o.center) {
                    stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
                  }
        
                  if (stickyElement.css("float") === "right") {
                    stickyElement.css({"float":"none"}).parent().css({"float":"right"});
                  }
        
                  o.stickyElement = stickyElement;
                  o.stickyWrapper = stickyWrapper;
                  o.currentTop    = null;
        
                  sticked.push(o);
        
                  methods.setWrapperHeight(this);
                  methods.setupChangeListeners(this);
                });
              },
        
              setWrapperHeight: function(stickyElement) {
                var element = $(stickyElement);
                var stickyWrapper = element.parent();
                if (stickyWrapper) {
                  stickyWrapper.css('height', element.outerHeight());
                }
              },
        
              setupChangeListeners: function(stickyElement) {
                if (window.MutationObserver) {
                  var mutationObserver = new window.MutationObserver(function(mutations) {
                    if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
                      methods.setWrapperHeight(stickyElement);
                    }
                  });
                  mutationObserver.observe(stickyElement, {subtree: true, childList: true});
                } else {
                  stickyElement.addEventListener('DOMNodeInserted', function() {
                    methods.setWrapperHeight(stickyElement);
                  }, false);
                  stickyElement.addEventListener('DOMNodeRemoved', function() {
                    methods.setWrapperHeight(stickyElement);
                  }, false);
                }
              },
              update: scroller,
              unstick: function(options) {
                return this.each(function() {
                  var that = this;
                  var unstickyElement = $(that);
        
                  var removeIdx = -1;
                  var i = sticked.length;
                  while (i-- > 0) {
                    if (sticked[i].stickyElement.get(0) === that) {
                        splice.call(sticked,i,1);
                        removeIdx = i;
                    }
                  }
                  if(removeIdx !== -1) {
                    unstickyElement.unwrap();
                    unstickyElement
                      .css({
                        'width': '',
                        'position': '',
                        'top': '',
                        'float': '',
                        'z-index': ''
                      })
                    ;
                  }
                });
              }
            };

          // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
          if (window.addEventListener) {
            window.addEventListener('scroll', scroller, false);
            window.addEventListener('resize', resizer, false);
          } else if (window.attachEvent) {
            window.attachEvent('onscroll', scroller);
            window.attachEvent('onresize', resizer);
          }

          $.fn.sticky = function(method) {
            if (methods[method]) {
              return methods[method].apply(this, slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method ) {
              return methods.init.apply( this, arguments );
            } else {
              $.error('Method ' + method + ' does not exist on jQuery.sticky');
            }
          };

          $.fn.unstick = function(method) {
            if (methods[method]) {
              return methods[method].apply(this, slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method ) {
              return methods.unstick.apply( this, arguments );
            } else {
              $.error('Method ' + method + ' does not exist on jQuery.sticky');
            }
          };
      $(function() {
        setTimeout(scroller, 0);
      });
    }));




    /* Sticky Menu - End */
    
      $("#sticker").sticky({topSpacing:0});
    
}  
 $('.section18').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        width: 360,
        height:320,
        responsive: [
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 1
          }
        },
        {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
      ]
    });
    /* Homepage */
    var homepagefeaturedproduct = $(".feautured-collection ul li").length;
    if(homepagefeaturedproduct < 1) $('.logged-out .homepage .feautured-collection').hide();
    
    var homepagegallery = $(".media_gallery ul li").length;
    if(homepagegallery < 1) $('.logged-out .homepage .media_gallery').hide();
    /* Homepage - ends */
    
    var instagraminfo = $(".instagram-info div").length;
    if(instagraminfo < 1) $('.logged-out .instagram-info').hide();
    
    /* about page */
    var twoimagesection = $(".two-images-section .figure").length;
    if(twoimagesection < 1) $(".two-images-section").hide();
    /* about page end */
    
    /*Collection page*/
    var midpagesection = $(".mid-page-section .columns").length;
    if(midpagesection < 1) $(".mid-page-section").hide();
    /* Collection page end */
    
    /* Portfolio */
    var portfolioListTop = $(".portfolio-page-type .portfolios-top ul.portfolio-list > li").length;
    if(portfolioListTop < 1) $('.logged-out .portfolio-page-type .portfolios-top').hide();
    
    var portfolioListBottom = $(".portfolio-page-type .portfolios-bottom ul.portfolio-list > li").length;
    if(portfolioListBottom < 1) $('.logged-out .portfolio-page-type .portfolios-bottom').hide();
    
    var portfolioReview = $(".portfolio-page-type-wrapper #reviews").length;
    if(portfolioReview < 1) $('.logged-out.portfolio-page main').addClass('noReview');
    /* Portfolio - Ends */
    
    /* Services */
    var servicesList = $(".services-page-type-wrapper .services-holder ul.services-list > li").length;
    if(servicesList < 1) $('.logged-out .services-page-type-wrapper .services-holder').hide();
    /* Services - Ends */
    
    /* About */
    var teamList = $("#ourteam-page-type .team.all ul.team-list > li").length;
    if(teamList < 1) $('.logged-out #ourteam-page-type .team.all').hide();
    
    var teamList = $("#ourteam-page-type .featured.team ul.team-list > li").length;
    if(teamList < 1) $('.logged-out #ourteam-page-type .featured.team ul.team-list').remove();
        
    var teamFirst = $("#ourteam-page-type .featured.team .first-half").html();
    teamFirst = $.trim(teamFirst);
    var teamSecond = $("#ourteam-page-type .featured.team .second-half").html();
    teamSecond = $.trim(teamSecond);
    if(teamFirst == "" && teamSecond == "" ) $("#ourteam-page-type .featured.team").hide();
    if(teamFirst != "" && teamSecond == "" ) 
    {
        $(".logged-out #ourteam-page-type .featured.team .second-half").hide();
        $(".logged-out #ourteam-page-type .featured.team .first-half").attr("class", "columns large-12 small-12 first-half");
    }
    if(teamFirst == "" && teamSecond != "" ) 
    {
        $(".logged-out #ourteam-page-type .featured.team .first-half").hide();
        $(".logged-out #ourteam-page-type .featured.team .second-half").attr("class", "columns large-12 small-12 second-half");
    }
    /* About - Ends */
   
});


