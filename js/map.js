var map;

function initialize() {

    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(49.2569684,-123.1239135)
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    //Carry out an Ajax request.
    $.ajax({
        url: 'json/custom-parks.json',
        dataType: 'json',
        success:function(data){
            //Loop through each location.
            $.each(data, function(){
                //Plot the location as a marker
                var pos = new google.maps.LatLng(this.lat, this.lon); 
                new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: this.name
                });
            });
        }
    });

}

google.maps.event.addDomListener(window, 'load', initialize);

$( document ).ready(function() {
    
    $('#off-canvas').on('click', '#water', function(e){

        e.preventDefault();

        $.ajax({
            url: 'json/custom-fountains.json',
            dataType: 'json',
            success:function(data){
                //Loop through each location.
                $.each(data, function(){
                    //Plot the location as a marker
                    var pos = new google.maps.LatLng(this.lat, this.lon);
                    new google.maps.Marker({
                        position: pos,
                        map: map,
                        title: this.type
                    });
                });
            }
        });

    });

    $menuWidth = $('#menu').outerWidth();

    $('header').on('click', '#menu', function(e){
        
        $menu = $('#menu').attr('rel');

        if($menu == 'off'){
            $( "#off-canvas" ).animate({
                left: "0"
            }, 250);
            $( "#wrapper" ).animate({
                left: $menuWidth +"px",
                right: -$menuWidth +"px"
            }, 250);
            $('#menu').attr('rel', 'on');
            $('#menu i').removeClass('fa-bars').addClass('fa-times');
        } else {
            $( "#off-canvas" ).animate({
                left: -$menuWidth +"px"
            }, 250);
            $( "#wrapper" ).animate({
                left: "0px",
                right: "0px"
            }, 250);
            $('#menu').attr('rel', 'off');
            $('#menu i').removeClass('fa-times').addClass('fa-bars');
        }

    });

    

});