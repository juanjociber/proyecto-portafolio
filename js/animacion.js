"use strict"

/** ANIMACIÓN DATOS */
$('.datos').mouseover(function(){
    $('#name').css({'color':'#3B80F4','text-shadow':'2px 2px 35px black','transition':'all ease-in-out 3s'});
    $('#lastName').css({'color':'#EB4236','text-shadow':'2px 2px 35px black','transition':'all ease-in-out 3s'});
    $('#position').css({'color':'#32A854','text-shadow':'2px 2px 35px black','transition':'all ease-in-out 3s'});
})
$('.datos').mouseout(function(){
    $('#name').css({'color':'black','text-shadow':'none'});
    $('#lastName').css({'color':'black','text-shadow':'none'});
    $('#position').css({'color':'black','text-shadow':'2px 2px 35px black'});
})

/** ANIMACIÓN CARD */
$(".card-aside").mouseover(function(){
    $(this).css("background","rgba(149, 175, 192,1.0)");
    $("#idFoto").css({"transition":"all 1.5s","border-radius":"20%"});
    $('#estilo-yo').css({'color':'#6D5708','font-family':'Helvetica','font-weight':'bold','text-shadow':'black 2px 2px 15px','transition':'all 4s'});
    $('#especialidad').css({"color":"#FFF37A","filter":"opacity(0.8)","transition":"all 4s"});
})
$(".card-aside").mouseout(function(){
    $(this).css("background","#FFF");
    $("#idFoto").css("border-radius","0.5em 0px 0.5em 0px");
    $('#estilo-yo').css({"color":"black","font-family":"Roboto","text-shadow":"none"});
    $('#especialidad').css({"color":"black","filter":"opacity(0.8)"});
})

/** ANIMACIÓN DE CARD-CONTACTO*/
$('.nav-container').mouseover(function(){
    $('#estilo-contacto').css({'color':'#6D5708','font-family':'Helvetica','font-weight':'bold','text-shadow':'black 2px 2px 15px','transition':'all 4s'});
})
$('.nav-container').mouseout(function(){
    $('#estilo-contacto').css({'color':'black','font-family':'Roboto','text-shadow':'none'});
})

/** ANIMACIÓN DE CARD-HABILIDADES*/
$('.habilidad-container').mouseover(function(){
    $(this).css('transition','all ease-in-out 1s');
    $(this).css('text-transform','uppercase');
    $('#estilo-habilidades').css({'color':'#6D5708','font-family':'Helvetica','font-weight':'bold','text-shadow':'black 2px 2px 15px','transition':'all 4s'});
})
$('.habilidad-container').mouseout(function(){
    $(this).css('transition','all ease-in-out 1s');
    $(this).css('text-transform','none');
    $('#estilo-habilidades').css({'color':'black','font-family':'Roboto','text-shadow':'none'});
})

/** ANIMACIÓN DE CARD-CONTACTO*/
$('.idioma-container').mouseover(function(){
    $('#estilo-idioma').css({'color':'#6D5708','font-family':'Helvetica','font-weight':'bold','text-shadow':'black 2px 2px 15px','transition':'all 4s'});
})
$('.idioma-container').mouseout(function(){
    $('#estilo-idioma').css({'color':'black','font-family':'Roboto','text-shadow':'none'});
})

/** ANIMACIÓN DE CARD-ARTICLE*/
$('.article-container').mouseover(function(){
    $('#estilo-expLaboral').css({'color':'#6D5708','font-family':'Helvetica','font-weight':'bold','text-shadow':'black 2px 2px 15px','transition':'all 4s'});
    $('#estilo-formacion').css({'color':'#6D5708','font-family':'Helvetica','font-weight':'bold','text-shadow':'black 2px 2px 15px','transition':'all 4s'});
    $('#estilo-certificacion').css({'color':'#6D5708','font-family':'Helvetica','font-weight':'bold','text-shadow':'black 2px 2px 15px','transition':'all 4s'});
    $('#estilo-conferencia').css({'color':'#6D5708','font-family':'Helvetica','font-weight':'bold','text-shadow':'black 2px 2px 15px','transition':'all 4s'});
    $('#estilo-exitosPersonales').css({'color':'#6D5708','font-family':'Helvetica','font-weight':'bold','text-shadow':'black 2px 2px 15px','transition':'all 4s'});
})
$('.article-container').mouseout(function(){
    $('#estilo-expLaboral').css({'color':'black','font-family':'Roboto','text-shadow':'none'});
    $('#estilo-formacion').css({'color':'black','font-family':'Roboto','text-shadow':'none'});
    $('#estilo-certificacion').css({'color':'black','font-family':'Roboto','text-shadow':'none'});
    $('#estilo-conferencia').css({'color':'black','font-family':'Roboto','text-shadow':'none'});
    $('#estilo-exitosPersonales').css({'color':'black','font-family':'Roboto','text-shadow':'none'});
})