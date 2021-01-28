$(document).ready(function() {
    $("#picture").wrap("<a href=index.html></a>");
    $("#twitter").wrap("<a href=https://twitter.com/?lang=zh></a>");
    $("#instegram").wrap("<a href=https://www.instagram.com/></a>");
    $("#facebook").wrap("<a href=https://www.facebook.com/?stype=lo&jlou=Afd5U30NT_jLo288baLFuiXPkBnkXvFp2esutAppTHESp34hbX9-z69A4nk4Cy2FMPZzd7U5hiWB4jfZaSgd-8mDnrMpxUDeLpmoXTdMd50KaA&smuh=38062&lh=Ac9N3MVQdhUqqnT_></a>");
    $("#emaillink").click(function(event){
        event.preventDefault()
        $("nav div").css("display", "none")
        $("#emailform").css("display", "block")
    });

    
    $("#long-term").click(function(event){
        event.preventDefault();
        scrollfunction("#long")
    });

    $("#short-term").click(function(event){
        event.preventDefault();
        scrollfunction("#short")
    });

    $("#contact").click(function(event){
        event.preventDefault();
        scrollfunction("#cooperation")
    });

    $("#copybutton").click(function(event){
        event.preventDefault();
        scrollfunction("#copyright")
    })


    $("#long .x").click(function(event){
        event.preventDefault()
        if ($(window).width() < 800){
            $("#long").animate({height:"0%"}, 1300);
            setTimeout(function(){
                $("#long").css('width', "0%");
            }, 1300);

           
        }else{
            $("#long").animate({width:"0%"}, 1300);
            setTimeout(function(){
                $("#long").css('height', "0%");
            }, 1300);

        }
    });

    $("#short .x").click(function(event){
        event.preventDefault()
        if ($(window).width() < 800){
            $("#short").animate({height:"0%"}, 1300);
            setTimeout(function(){
                $("#short").css('width', "0%");
            }, 1300);

           
        }else{
            $("#short").animate({width:"0%"}, 1300);
            setTimeout(function(){
                $("#short").css('height', "0%");
            }, 1300);

        }
    });

    $("#cooperation .x").click(function(event){
        event.preventDefault()
        if ($(window).width() < 800){
            $("#cooperation").animate({height:"0%"}, 1300);
            setTimeout(function(){
                $("#cooperation").css('width', "0%");
            }, 1300);

           
        }else{
            $("#cooperation").animate({width:"0%"}, 1300);
            setTimeout(function(){
                $("#cooperation").css('height', "0%");
            }, 1300);

        }
    });



    $("#copyright .x").click(function(event){
        event.preventDefault()
        if ($(window).width() < 800){
            $("#copyright").animate({height:"0%"}, 1300);
            setTimeout(function(){
                $("#copyright").css('width', "0%");
            }, 1300);
            
        }else{
            $("#copyright").animate({width:"0%"}, 1300);
            setTimeout(function(){
                $("#copyright").css('height', "0%");
            }, 1300);
        }
    });

    $(".link li").mouseover(function(){
        $(".link li a").css("color", "whitesmoke")
    });
    
    $(".link li").mouseout(function(){
        $(".link li a").css("color", "#040404")
    });

});


function scrollfunction(target){
    if ($(window).width() < 800){
        $(target).css('width', "100%");
        $(target).animate({height:"100%"}, 1300);

    }else{
        $(target).animate({width:"100%"}, 1300);
        $(target).css('height', "100%");
    }
}
