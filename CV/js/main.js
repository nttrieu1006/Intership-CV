$(document).ready(function () { });
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
        window.alert("Name and Email are required !");
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
                alert("Create successfully !");
            },
            error: function (err) {
                alert(err);
            }
        });
    }
}
// Slide
var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    loop: true,
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});


//Map
function seeMaps() {
    var html = '<div class="address"><p><i class="fas fa-map-marker"></i><span> 205 Nguyen Xi Street, 26, Binh Thanh Distrist, HCM</span></p><p><i class="fas fa-phone"> </i><span> 0986183445</span></p><p><i class="fas fa-envelope"> </i><span> nttrieu1006@gmail.com</span></p></div>';
    if ($('.cotact-info').hasClass('map')) {
        $('.cotact-info').html('<div id="map"></div>')
        $('.cotact-info').removeClass('map');
        $('#div-contact').css('background-color', 'antiquewhite');
        $('.address').attr('display', 'none');
        initMap();
    }
    else {
        $('.cotact-info').attr('class', 'cotact-info map');
        $('#map').remove();
        $('#div-contact').css('background-color', ' rgba(209, 169, 134, 0.637)');
        $('.cotact-info').html(html)

    }
}
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
