$(document).ready(function () { 
    // ScrollSpy
    $('body').scrollspy({ target: '#navbar-example' });
    $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh');
  });
  scroll();
});


var ctx = document.getElementById('scm').getContext('2d');
var myPieChart = new Chart(ctx, {

    type: 'pie',
    data: {
        datasets: [{
            data: [40, 30, 10, 20],
            backgroundColor: ['rgba(255,0,0, 0.6)', 'rgba(255,255,0, 0.4)', 'rgba(0,0,0, 0.3)', 'rgba(0,0,255, 0.4)']
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'HTML,CSS,JS',
            'C#',
            'Php',
            'Angularjs'
        ]
    },
    options: {}
});

//CharJS
var ctx2 = document.getElementById('knm').getContext('2d');
var myPieChart = new Chart(ctx2, {

    type: 'pie',
    data: {
        datasets: [{
            data: [40, 30, 30],
            backgroundColor: ['rgba(255,0,0, 0.6)', 'rgba(255,255,0, 0.4)', 'rgba(0,0,0, 0.4)']
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Teamwork',
            'English',
            'Learn'
        ]
    },
    options: {}
});

//Form contact
function createContact() {
    var name = $('.contact input[name="name"]').val();
    var email = $('.contact input[name="email"]').val();
    var message = $('.contact textarea').val();
    if (name == "" || email == "") {
        toastr.options.closeButton = true;
        toastr.warning('Name and Email are required!');        
    } else {
        $.ajax({
            url: "http://janeto.us.to:7752/api/contact",
            method: "POST",
            headers: {
                ContentType: "application/json"
            },
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function (data) {                
                toastr.options.closeButton = true;
                toastr.success('Thank you your submit!');
            },
            error: function (err) {
                toastr.options.closeButton = true;
                toastr.error(''+err);
            }
        });
    }
}
//Swiper
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

function initMap() {
    var contentString = "205 Nguyễn Xí, P.26, Bình Thạnh, TPHCM";
    var uluru = { lat: 10.816747, lng: 106.707629 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    infowindow.open(map, marker);
}

/* start typed element */
//http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
var subElementArray = $.map($('.sub-element'), function (el) { return $(el).text(); });
$(".element").typed({
    strings: subElementArray,
    typeSpeed: 30,
    contentType: 'html',
    showCursor: false,
    loop: true,
    loopCount: true,
});

// thời gian di trượt 0.75s ( 1000 = 1s )
function scroll(){
    $("a#menu-home").bind('click', function () {
        $("html, body").animate({ scrollTop: $('#home').offset().top }, 1000);
     });
     $("a#menu-info").bind('click', function () {
        $("html, body").animate({ scrollTop: $('#info').offset().top }, 1000);
     });   
     $("a#menu-skill").bind('click', function () {
        $("html, body").animate({ scrollTop: $('#skills').offset().top }, 1000);
     });  
     $("a#menu-project").bind('click', function () {
        $("html, body").animate({ scrollTop: $('#project').offset().top }, 1000);
     });  
     $("a#menu-contact").bind('click', function () {
        $("html, body").animate({ scrollTop: $('#contact').offset().top }, 1000);
     });  
}
