var map;

function initialize() {

    // ------------------------------ //
    // ---- INITIAL MAP POSITION ---- //
    // ------------------------------ //

    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(49.2569684,-123.1239135)
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    // ----------------------------------- //
    // ---- INITIAL MARKERS POSITIONS ---- //
    // ----------------------------------- //

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

    // ------------------------------ //
    // ---- SHOW/HIDE OPEN PARKS ---- //
    // ------------------------------ //

    $('#off-canvas').on('click', '#green', function(e){

        e.preventDefault();
        $green = $('#green').attr('rel');

        if($green == 'off'){
            for (var i = 0; i < open.length; i++) {
                open[i].setVisible(true);
            };

            $('#green').attr('rel', 'on');
            $('#green').addClass('selected');
        } else {
            for (var i = 0; i < open.length; i++) {
                open[i].setVisible(false);
            };

            $('#green').attr('rel', 'off');
            $('#green').removeClass('selected');
        }

    });

    // -------------------------------- //
    // ---- SHOW/HIDE USABLE PARKS ---- //
    // -------------------------------- //

    $('#off-canvas').on('click', '#amber', function(e){

        e.preventDefault();
        $amber = $('#amber').attr('rel');

        if($amber == 'off'){
            for (var i = 0; i < usable.length; i++) {
                usable[i].setVisible(true);
            };

            $('#amber').attr('rel', 'on');
            $('#amber').addClass('selected');
        } else {
            for (var i = 0; i < usable.length; i++) {
                usable[i].setVisible(false);
            };

            $('#amber').attr('rel', 'off');
            $('#amber').removeClass('selected');
        }

    });

    // -------------------------------- //
    // ---- SHOW/HIDE CLOSED PARKS ---- //
    // -------------------------------- //

    $('#off-canvas').on('click', '#red', function(e){

        e.preventDefault();
        $red = $('#red').attr('rel');

        if($red == 'off'){
            for (var i = 0; i < closed.length; i++) {
                closed[i].setVisible(true);
            };

            $('#red').attr('rel', 'on');
            $('#red').addClass('selected');
        } else {
            for (var i = 0; i < closed.length; i++) {
                closed[i].setVisible(false);
            };

            $('#red').attr('rel', 'off');
            $('#red').removeClass('selected');
        }

    });

    // ---------------------------------- //
    // ---- GET, SHOW/HIDE FOUNTAINS ---- //
    // ---------------------------------- //

    var fountainIcon = "images/fountain.png";
    var fountain = [];

    $('#off-canvas').on('click', '#water', function(e){

        e.preventDefault();
        $water = $('#water a').attr('rel');

        if($water == 'off'){

            if(fountain.length <= 0){

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
                
            } else {
                for (var i = 0; i < fountain.length; i++) {
                    fountain[i].setVisible(true);
                };
            }
            $('#water a').attr('rel', 'on');
            $('#water a').addClass('selected');
        } else {
            for (var i = 0; i < fountain.length; i++) {
                fountain[i].setVisible(false);
            };

            $('#water a').attr('rel', 'off');
            $('#water a').removeClass('selected');
        }

    });
    
    // ------------------------------ //
    // ---- MENU + WRAPPER SLIDE ---- //
    // ------------------------------ //

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