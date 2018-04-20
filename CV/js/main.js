$(document).ready(function () { });
var ctx = document.getElementById('scm').getContext('2d');
var myPieChart = new Chart(ctx, {

    type: 'pie',
    data: {
        datasets: [{
            data: [40, 30, 10, 20],
            backgroundColor: ['rgba(255,0,0, 0.7)', 'rgba(255,255,0, 0.7)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,255, 0.7)']
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

var ctx2 = document.getElementById('knm').getContext('2d');
var myPieChart = new Chart(ctx2, {

    type: 'pie',
    data: {
        datasets: [{
            data: [40, 30, 30],
            backgroundColor: ['rgba(255,0,0, 0.7)', 'rgba(255,255,0, 0.7)', 'rgba(0,0,0, 0.7)']
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

function seeMaps() {
    var html = '<div class="address"><p><i class="fas fa-map-marker">  205 Nguyen Xi Street, 26, Binh Thanh Distrist, HCM City</i></p><p><i class="fas fa-phone">  0986183445</i></p><p><i class="fas fa-envelope">  nttrieu1006@gmail.com</i></p></div>';
    if( $('.cotact-info').hasClass('map')) {        
        $('.cotact-info').html('<div id="map"></div>')
        $('.cotact-info').attr('class','cotact-info');
        $('contact-info button').val("Don't show");
        initMap();
    }
    else {
        $('.cotact-info').attr('class','cotact-info map');        
        $('#map').remove();
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
        content : contentString
    });
    infowindow.open(map, marker);
}