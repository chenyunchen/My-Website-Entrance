$(function(){
    $("#title").addClass("animated slideInDown");

    setTimeout(function(){
        $("#facebook").addClass("animated bounceIn");
        $("#facebook").removeClass("btn-warning");
        $("#facebook").addClass("btn-info");
        $("#facebook").html("<i class='fa fa-facebook-square fa-1g fa-spin'></i> Facebook");
    },700)

    setTimeout(function(){
        $("#writeahead").addClass("animated shake");
        $("#writeahead").removeClass("btn-default");
        $("#writeahead").addClass("btn-default");
        $("#writeahead").html("<i class='fa fa-cogs fa-1g fa-spin'></i> WriteaHead");
    },900)

    setTimeout(function(){
        $("#mail").addClass("animated swing");
        $("#mail").removeClass("btn-warning");
        $("#mail").addClass("btn-info");
        $("#mail").html("<i class='fa fa-envelope fa-lg fa-spin'></i> Mail");
    },1000)

    setTimeout(function(){
        $("#github").addClass("animated tada");
        $("#github").removeClass("btn-danger");
        $("#github").addClass("btn-success");
        $("#github").html("<i class='fa fa-github fa-1g fa-spin'></i> GitHub");
    },1300)

    setTimeout(function(){
        $("#speakerdeck").addClass("animated wobble");
        $("#speakerdeck").removeClass("btn-danger");
        $("#speakerdeck").addClass("btn-success");
        $("#speakerdeck").html("<i class='fa fa-desktop fa-1g fa-spin'></i> SpeakerDeck");
    },1400)

    setTimeout(function(){
        $("#googleplus").addClass("animated fadeIn");
        $("#googleplus").removeClass("btn-warning");
        $("#googleplus").addClass("btn-info");
        $("#googleplus").html("<i class='fa fa-google-plus-square fa-1g fa-spin'></i> g+");
    },1600)

    setTimeout(function(){
        $("#linkin").addClass("animated lightSpeedIn");
        $("#linkin").removeClass("btn-warning");
        $("#linkin").addClass("btn-primary");
        $("#linkin").html("<i class='fa fa-linkedin fa-1g fa-spin'></i> LinkIn");
    },1700)

    setTimeout(function(){
        $("#nisra").addClass("animated rotateIn");
        $("#nisra").removeClass("btn-warning");
        $("#nisra").addClass("btn-primary");
        $("#nisra").html("<i class='fa fa-shield fa-1g fa-spin'></i> NISRA");
    },1850)

    setTimeout(function(){
        $("#blog").addClass("animated rubberBand");
        $("#blog").removeClass("btn-danger");
        $("#blog").addClass("btn-success");
        $("#blog").html("<i class='fa fa-pencil fa-1g fa-spin'></i> Blog");

        $("#wargame").addClass("animated rubberBand");
        $("#wargame").removeClass("btn-default");
        $("#wargame").addClass("btn-default");
        $("#wargame").html("<i class='fa fa-cogs fa-1g fa-spin'></i> WarGame");
    },2000)

    setTimeout(function(){
        $("#analysis").html("Analysis: Error Not Found!!")
    },2500);

})
