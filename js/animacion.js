$("#idFoto").mouseover(function(){
    $("#idFoto").css({"transition":"all 1.5s","border-radius":"50%"});
});
$("#idFoto").mouseout(function(){
    $("#idFoto").css("border-radius","1.2em 0px 1.2em 0px");
});
$(".card-aside").mouseover(function(){
    $(this).css("background","black");
})