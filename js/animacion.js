$("#idFoto").mouseover(function(){
    $("#idFoto").css({"transition":"all 1.5s","border-radius":"50%"});
});
$("#idFoto").mouseout(function(){
    $("#idFoto").css("border-radius","1.2em 0px 1.2em 0px");
});

$(".card-aside").mouseover(function(){
    $(this).css({"background":"rgba(149, 175, 192,1.0)", "transition":"all 2s"});
})
$(".card-aside").mouseout(function(){
    $(this).css({"background":"white","transition":"all 3s"});
})

$(".card-aside").mouseover(function(){
    $(this).children("p").css("color","white");
    $(this).children("h1").css("color","yellow");
})
$(".card-aside").mouseout(function(){
    $(this).children("p").css("color","black");
    $(this).children("h1").css("color","black");
})