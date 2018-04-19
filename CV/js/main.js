$(document).ready(function(){

});

var ctx = document.getElementById('scm').getContext('2d');
var myPieChart = new Chart(ctx,{
    
    type: 'pie',
    data: {
        datasets: [{
            data: [40, 30, 10 ,20],   
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

var ctx = document.getElementById('knm').getContext('2d');
var myPieChart = new Chart(ctx,{
    
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 20, 30],
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    },
    options: {}
});

function createContact(){
    var name = $('.contact input[name=name]').val();
    var email = $('.contact input[name=email]').val();
    var message =  $('.contact textarea').val();
    if(name ==""||email==""){
        alert("Name and Email are required");
    }
    else{
        $.ajax({
            url: "http://janeto.us.to:7752/api/contact",
            method: "post",
            headers:{ContentType: "application/json"},
            data:{
                name:name,
                email:email,
                message: message
            },
            success: function(data){
                alert("OK");
            },
            error: function(error){
                alert("eroor");
            }
        });
    }
    
}