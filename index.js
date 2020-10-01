$(document).ready(function() {
           
               $.getJSON('result.json', function(data) {
                  $('#word').html('<p> Name: ' + data.name + '</p>');
                  $('#stage').append('<p>Age : ' + data.age+ '</p>');
                  $('#stage').append('<p> Sex: ' + data.sex+ '</p>');
               });
            
               
         });