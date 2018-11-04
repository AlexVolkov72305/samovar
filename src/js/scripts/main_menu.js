//Таб в блоке Наши работы

var tab;
var tabContent;

window.onload=function () {
  tabContent=document.getElementsByClassName('tabContent');
  tab=document.getElementsByClassName('tab');
  hideTabsContent(1);
}
function hideTabsContent(a) {
  for (var i = a; i<tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('whiteborder');
  }
}

document.getElementById('tabs').onclick=function (event) {
  var target=event.target;
  if (target.className=='tab'){
    for (var i=0; i<tab.length; i++){
      if (target == tab[i]){
        showTabsContent(i);
        break;
      }
    }
  }
}
function showTabsContent(b) {
  if (tabContent[b].classList.contains('hide')){
    hideTabsContent(0);
    tab[b].classList.add('whiteborder');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');

  }
}

(function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);

	$(".btn").on("click",function() {
        $(".main").css("right","-20px");
        $(".main").css("position","absolute");
        $(".main").css("transition","all 0.4s");
        $(".close").css("display","block");
        $("#on_line").css("color","#544b34");
        $("#on_line span").css("color","#544b34");
        $(".btn").css("display","none");
        $(".slick-next").css("display","none");
        $(".slick-prev").css("display","none");
    });

    $(".close").on("click",function() {
        $(".main").css("right","-100%");
        $(".main").css("position","fixed");
        $(this).addClass('active');
        $(".main").css("transition","all 0.4s");
        $(".close").css("display","none");
        $(".btn").css("display","block");
        $("#on_line").css("color","#ffffff");
        $("#on_line span").css("color","#ffffff");
        $(".slick-next").css("display","block");
        $(".slick-prev").css("display","block");
    });

//Слайдер секции Header

$(document).ready(function(){
    $('.header_slider').slick({
    	slideshowSpeed: 1000,
        animation: "slide",
        controlNav: false
    });
});

//Слайдер секции Benefits

$(document).ready(function(){
    $('.benefits_slider').slick({
    	slideshowSpeed: 1000,
        animation: "slide",
        prevArrow: '<button class="arr-prev" type="button"></button>',
        nextArrow: '<button class="arr-next" type="button"></button>',
        controlNav: false
    });
});

$(document).ready(function(){
    $('.about_slider').slick({
    	slideshowSpeed: 1000,
        animation: "slide",
        prevArrow: '<button class="arr-prev" type="button"></button>',
        nextArrow: '<button class="arr-next" type="button"></button>',
        controlNav: false
    });
});

$(document).ready(function(){
    $('.photo_slider').slick({
	    infinite: true,
	    slidesToShow: 3,
	    prevArrow: '<button class="arr-prev" type="button"></button>',
        nextArrow: '<button class="arr-next" type="button"></button>',
	    slidesToScroll: 1,
	    responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        prevArrow: '<button class="arr-prev" type="button"></button>',
        	nextArrow: '<button class="arr-next" type="button"></button>'
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        prevArrow: '<button class="arr-prev" type="button"></button>',
        	nextArrow: '<button class="arr-next" type="button"></button>'
	      }
	    }
	  ]
	});
});

$(document).ready(function(){
    $('.masters_slider').slick({
	    infinite: true,
	    slidesToShow: 3,
	    prevArrow: '<button class="arr-prev2" type="button"></button>',
        nextArrow: '<button class="arr-next2" type="button"></button>',
	    slidesToScroll: 1,
	    responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        prevArrow: '<button class="arr-prev" type="button"></button>',
	        	nextArrow: '<button class="arr-next" type="button"></button>'
		      }
		    }
		  ]
	});
});

$(document).ready(function(){
    $('.prise_slider').slick({
	    infinite: true,
	    slidesToShow: 3,
	    prevArrow: '<button class="arr-prev2" type="button"></button>',
        nextArrow: '<button class="arr-next2" type="button"></button>',
	    slidesToScroll: 1,
	    responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        prevArrow: '<button class="arr-prev2" type="button"></button>',
        		nextArrow: '<button class="arr-next2" type="button"></button>'
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        prevArrow: '<button class="arr-prev" type="button"></button>',
	        	nextArrow: '<button class="arr-next" type="button"></button>'
		      }
		    }
		  ]
	});
	$('tab_boutique').on('shown.bs.tab', function (e) {
		$('.prise_slider').slick('reinit');
	})
});


$(window).scroll(function(){
    if ($(window).scrollTop() > 500) {
        $('.header_nav').addClass('scroll');
        $(".header_nav").css("opacity","0.8");
        $(".header_nav").css("transition ","3s");
    }
    else {
        $('.header_nav').removeClass('scroll');
        $(".header_nav").css("opacity","0.5");
        $(".header_nav").css("transition ","3s");
    }
});

