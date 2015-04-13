var map;

function initialize() {

    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(49.2569684,-123.1239135)
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    var greenIcon = "images/green.png";
    var redIcon = "images/red.png";
    var amberIcon = "images/amber.png";
    var open = [];
    var usable = [];
    var closed = [];

    //Carry out an Ajax request.
    $.ajax({
        url: 'json/custom-parks.json',
        dataType: 'json',
        success:function(data){
            //Loop through each location.
            $.each(data, function(){
                //Plot the location as a marker
                var pos = new google.maps.LatLng(this.lat, this.lon); 

                if(this.status == "Closed"){
                    var marker = new google.maps.Marker({
                        position: pos,
                        map: map,
                        icon: redIcon,
                        title: this.name
                    });
                    closed.push(marker);
                } else if(this.status == "User discretion"){
                    var marker = new google.maps.Marker({
                        position: pos,
                        map: map,
                        icon: amberIcon,
                        title: this.name
                    });
                    usable.push(marker);
                } else {
                    var marker = new google.maps.Marker({
                        position: pos,
                        map: map,
                        icon: greenIcon,
                        title: this.name
                    });
                    open.push(marker);
                }
            });
            
        }
    });

    var fountainIcon = "images/fountain.png";

    var fountain = [];

    $('#off-canvas').on('click', '#water', function(e){

        e.preventDefault();

        $water = $('#water a').attr('rel');

        if($water == 'off'){

            $.ajax({
                url: 'json/custom-fountains.json',
                dataType: 'json',
                success:function(data){
                    //Loop through each location.
                    $.each(data, function(){
                        //Plot the location as a marker
                        var pos = new google.maps.LatLng(this.lat, this.lon);
                        var marker = new google.maps.Marker({
                            position: pos,
                            map: map,
                            icon: fountainIcon,
                            title: this.type
                        });
                        fountain.push(marker);
                    });
                }
            });
            $('#water a').attr('rel', 'on');

        } else {
            for (var i = 0; i <= fountain.length; i++) {
                fountain[i].setMap(null);
            };

            $('#water a').attr('rel', 'off');
        }

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

}

google.maps.event.addDomListener(window, 'load', initialize);