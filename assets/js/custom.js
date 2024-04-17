// toggle drawer
$(document).ready(function() {
    $(".toggleBar").click(function(e) {
        e.stopPropagation();
        $(".mask").toggleClass("opened");
        $(".floatingMenu").toggleClass("active");
    });
    $(".mask").on('click', function (e) {
        e.stopPropagation();
        $(this).removeClass("opened");
        $('.floatingMenu').removeClass("active");
    });
});


// Header Sticky Behaviour
window.addEventListener('scroll', function () {
    var header = document.getElementById('showSticky');
    var mobile_header = document.getElementById('mobileSticky');

    if (window.scrollY >= 100) {
        header.classList.add('sticky');
        mobile_header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
        mobile_header.classList.remove('sticky');
    }
});


// Bottom Sheet From Screen 1024px
document.getElementById('openBottomSheet').addEventListener('click', function() {
    document.getElementById('bottomSheet').style.bottom = '0'; 
});
document.getElementById('closeBottomSheet').addEventListener('click', function() {
    document.getElementById('bottomSheet').style.bottom = '-101%'; 
});


// language switcher
// function addCustomAttribute() {
//     const attributeSelect = document.getElementById('attributeSelect');
//     const selectedAttribute = attributeSelect.value;
//     document.body.setAttribute('lang-attr', selectedAttribute);
// }


// Trending Product slider Script
$('.trendingProd').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:2
        },
        480:{
            items:2
        },
        768:{
            items:4
        },
        1025:{
            items:6
        }
    }
});


// Bundles prod Slider Script
$('.bundlesProd').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:2
        },
        480:{
            items:2
        },
        768:{
            items:4
        },
        1025:{
            items:6
        }
    }
});

// Trending Product slider Script
$('.relatedProds').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:2
        },
        480:{
            items:2
        },
        768:{
            items:4
        },
        1025:{
            items:6
        }
    }
});

// Single Product Image Slider
$('.singleProdImage').owlCarousel({
    rtl:true,
    animateOut: 'fadeOut',
    mouseDrag: false,
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        480:{
            items:1
        },
        768:{
            items:1
        },
        1025:{
            items:1
        }
    }
});

//PRODUCT QUANTITY SELECT INPUT
$(document).ready(function(){
    $('.count').prop('disabled', false);
    $(document).on('click','.plus',function(){
        // console.log('abcdefg'); return false;
       $(this).siblings('.count').val(parseInt($(this).siblings('.count').val()) + 1 );
   });
    $(document).on('click','.minus',function(){
        $(this).siblings('.count').val(parseInt($(this).siblings('.count').val()) - 1 );
        if ($(this).siblings('.count').val() == 0) {
            $(this).siblings('.count').val(1);
        }
    });
});


// Brands Page Isotope
var $grid = $('.brands_page_holder').isotope({
    // options
    itemSelector: '.brands_page_item',
    layoutMode: 'fitRows'
});

// change is-checked class on buttons
var $buttonGroup = $('.brands_filter');
$buttonGroup.on( 'click', 'button', function( event ) {
    $buttonGroup.find('.active').removeClass('active');
    var $button = $( event.currentTarget );
    $button.addClass('active');
    var filterValue = $button.attr('data-filter');
    $grid.isotope({ filter: filterValue });
});