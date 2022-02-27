"use stric"
/**======================================================= 
 * EVENTO MENÚ 
 * ======================================================= */
export const menu = ()=>{
	const $btnMenu = document.querySelector('#btnMenu')
	const $nav = document.querySelector('.navegacion')
	const $sup = document.querySelector('.top-line')
	const $center = document.querySelector('.middle-line')
	const $inf = document.querySelector('.bottom-line')
	const btnContenedor = document.querySelector('.contenedor-btnmenu')
	const textoSpan = document.querySelector('.btnMenu small')  

	let contador = 1;
	$btnMenu.onclick = function () {
		console.log('abrio-boton1')
		if (contador == 1) {
			abrirMenResponsive();
			contador = 0;
		} else{ 
			contador = 1;
			cerrarMenResponsive()
			console.log('cerro-boton1')
		};
	};
	function abrirMenResponsive(){
		$nav.style='left:0%; transition: all 0.5s';
		$sup.style='margin: 0 auto; transform: translateY(2px) rotate(-45deg); background: #626262; transition: all 0.6s';
		$center.style='margin: 0; width:0; opacity: 0';
		$inf.style= 'margin: 0 auto; transform: translateY(-2px) rotate(45deg); background: #626262; transition: all 0.6s';
		btnContenedor.style='z-index: 4';
		textoSpan.style='transform:translateY(0px)';
	}
	function cerrarMenResponsive(){
		$sup.style = 'margin: 5px auto; transform: translateY(0px) rotate(0deg)';
		$center.style ='margin: 0 auto; width:40%; opacity: 1';
		$inf.style='margin: 5px auto; transform: translateY(0px) rotate(0deg)';
		btnContenedor.style='z-index: auto';
		$nav.style.left='-100%';
		textoSpan.style='transform:translateY(-100px)';
	};
};

/**================================================
 -> EVENTO DE MENÚ RESPONSIVE
 * ================================================*/
export const menuResponsive = ()=>{
	const enlace = document.querySelectorAll('.men li a');
	const menuLinks = document.querySelectorAll(".men li a[href^=\"#\"]");
	const $superior = document.querySelector('.top-line');
	const $center = document.querySelector('.middle-line');
	const $inferior = document.querySelector('.bottom-line');
	const btnMenu = document.querySelector('.btnMenu');
	const btnButton = document.querySelector('.contenedor-btnmenu');
	const navigation = document.querySelector('.navegacion');
	const txtSpan = document.querySelector('.btnMenu small')

	enlace.forEach(element => {
		element.addEventListener('click',function(e){
			e.preventDefault();
			const scrollMenu = document.querySelector(e.target.attributes.href.value);
			scrollMenu.scrollIntoView({
				behavior: 'smooth'
			})
		})
	});
	menuLinks.forEach(element => {
		element.addEventListener("click",function(){
			closeMenu();
			console.error("cerro-enlace");

			let conteo = 1;
			btnMenu.onclick = function(){
				if(conteo == 1){
					openMenu();
					conteo=0;
					console.info('abrio-boton2');
				}else{
					conteo = 1
					closeMenu()
					console.log('cerro-boton2')
				}
			}
		})
	});
	function closeMenu(){
		$superior.style = 'margin: 5px auto; transform: translateY(0px) rotate(0deg)';
		$center.style ='margin: 0 auto; width:40%; opacity: 1';
		$inferior.style='margin: 5px auto; transform: translateY(0px) rotate(0deg)';
		navigation.style.left='-100%';
		btnButton.style='z-index: auto';
		txtSpan.style='transform:translateY(-100px)';
	}
	function openMenu(){
		navigation.style.left='0%';
		$superior.style='margin: 0 auto; transform: translateY(2px) rotate(-45deg); background: #626262;transition: all 0.6s';
		$center.style='margin: 0; width:0; opacity: 0';
		$inferior.style= 'margin: 0 auto; transform: translateY(-2px) rotate(45deg); background: #626262; transition: all 0.6s';
		btnButton.style='z-index: 4';
		txtSpan.style='transform:translateY(0px)';
		// txtSpan.style='opacity: 1; right: 50px; color: #585858';
	}
};

/**==============================================
 * -> EVENTO BOTÓN DARK
 ================================================*/
export const btnDark = () =>{
	const toogle = document.querySelector('.toggle');
	const logoEmresa = document.querySelector('.logo__imagen') 
	let cuenta = 1;
	toogle.onclick = () => {
		if(cuenta == 1){
			document.body.classList.add('dark')
			logoEmresa.setAttribute('src','https://res.cloudinary.com/juanjoh/image/upload/v1644942772/vanhueb/logo-vanhueb/logo2_v17f15.png');
			console.log('agrego logo')
			cuenta = 0;
		}else{
			cuenta=1;
			document.body.classList.remove('dark')
			logoEmresa.setAttribute('src','https://res.cloudinary.com/juanjoh/image/upload/v1644942772/vanhueb/logo-vanhueb/logo1_jas7wr.png');
			console.log('cambio logo')
		}
	}
}

/**==============================================
 * -> EVENTO SPLIT BANNER
 ================================================*/
export const splitBanner = () =>{
	Split(['#img-one', '#img-two'],{
		gutterSize:5,
		minSize:[10,10]
	});
};

/**==============================================
 * -> EVENTO LOGOTIPO
 ================================================*/
// export const logotipo = () =>{
// 	const $imgLogotipo = document.querySelector('.logo__imagen'),
//     	  $cambioLogo = matchMedia('(min-width:992px)')
    	
// 	const changeSize = mql =>{
// 		mql.matches
// 		? $imgLogotipo.setAttribute('src','img/logo1.jpg')
// 		: $imgLogotipo.setAttribute('src','img/logo6.jpg')
// 	}
// 	$cambioLogo.addListener(changeSize)
// 	changeSize($cambioLogo);
// };

/*============================================
-> EVENTO SCROLL BOTÓN 'CONÓCEME'
==============================================*/
export const scrollNavegacion = ()=>{
	const enlace = document.querySelector('.btn-split');
	enlace.addEventListener('click',function(e){
		e.preventDefault();
		const seccion = document.querySelector(e.target.attributes.href.value);
		seccion.scrollIntoView({
			behavior:'smooth'
		});
	})
}
/*============================================
-> EVENTO DESAPARECER BOTÓN 'CONÓCEME'
==============================================*/
export const fijarBoton = () =>{
	const btn = document.querySelector('.btn-split');
		//Registrar el Intersection Observer
		const observer = new IntersectionObserver(function(entries){
			if(entries[0].isIntersecting){
				btn.style='opacity: 0; z-index:-1';
			}else{
				btn.style='opacity: 1; z-index:0';
			}
		});
		//Elemento a observar
		observer.observe(document.querySelector('main'));
};

/*============================================
-> EVENTO HEADER FIJO
==============================================*/
export const headerFixed = () =>{
	function navegacionFija(){
	const headerFijo = document.querySelector('#header');
	// Registrar el Intersection Observer
	const observer = new IntersectionObserver( function(entries) {
		if(entries[0].isIntersecting) {
			headerFijo.classList.remove('fijo')
		}else {
			headerFijo.classList.add('fijo')
		}
	});
	// Elemento a observar
	observer.observe(document.querySelector('#mostrar'));
	};
	navegacionFija();
}

/**==============================================
-> BOTÓN ACORDEÓN (TECNOLOGÍAS)
================================================*/
export const btnAcordeon = () =>{
	/*================ ACORDEON2 ======================*/ 
	let btnItems = document.querySelectorAll(".item .btn-item");
		for(let i = 0 ; i < btnItems.length; i++ ){
		// console.log(i);
		btnItems[i].addEventListener("click",function(e){
			let btn = e.target;
				if(btn.className == "btn-item active"){
				removeClass()
				}
				else{
				removeClass();
				btn.classList.add("active");
				}
		})
	}
	//Funciones para que solo se muestre una selección y las demás se oculten 
	function removeClass(){
		for(let i = 0 ; i < btnItems.length; i++){
			btnItems[i].classList.remove("active");
		}
	}
};

/*==========================================================
-> EVENTO PARPADEO
============================================================*/ 
export const eventoParpadeo = () =>{
	toAnima();
	function toAnima() {
		const anima = document.querySelectorAll('.cirdown');
			anima.forEach( anima => {
			anima.style.setProperty('--anima', 'paused');
				setTimeout(() => {
				anima.style.setProperty('--anima', null);
				}, 100);
		})
	}
};
/**==============================================
 * EVENTO MÁQUINA DE ESCRIBIR
 ================================================*/
export const eventoMaquina = () =>{
	function viewAqui(){
		const $click = document.querySelector('#click')
		let printCadena
		const observando= new IntersectionObserver(function(e){
			if(e[0].isIntersecting){
			 //    console.log('Ingreso de evento');
				let escritura = str =>{
					 let arrayStr = str.split('');
					 let i = 0;
					 printCadena = setInterval(function () {
						 if(arrayStr[i] === ''){
							 $click.innerHTML += arrayStr[i];
							 $click.innerHTML += arrayStr[i + 1];
							 i +=2;                        
						 }
						 else{
							 $click.innerHTML += arrayStr[i];
							 i++
						 }
						 if(i=== arrayStr.length){
							 clearInterval(printCadena);
						 }
					 },100);
				}
				escritura(`"Innvovador"  "Vanguardista"  "Creativo"  "Observador"`);
	 		}
			else{			 //    console.log('Salida de evento')
				clearInterval(printCadena)
				$click.innerHTML= ""
			}
		});
		observando.observe(document.querySelector('#eventoMaquina'))
	 };
	 viewAqui();
}

/*===================================
-> CREANDO TESTIMONIOS: VANHUEB
=====================================*/

export const contenedorTestimonio = () =>{

const testimonios=[
    {   imgTestimonio:'https://res.cloudinary.com/juanjoh/image/upload/v1644943473/vanhueb/imagenes/persona1_xqd5h7.jpg' ,
		logoEmpresa:'https://res.cloudinary.com/juanjoh/image/upload/v1645825437/vanhueb/imagenes/logoLAV_tfcdw3.png',
        comentario: `<i class='bx bxs-quote-alt-left comillas'></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae. <i class='bx bxs-quote-alt-right comillas'></i>`,
        nombre: 'Liz F. Reyes',
        distrito: 'S.M.P'},
	{   imgTestimonio:'https://res.cloudinary.com/juanjoh/image/upload/v1645829168/vanhueb/imagenes/foto4_ulbwex.png' ,
		logoEmpresa:'https://res.cloudinary.com/juanjoh/image/upload/v1645828787/vanhueb/imagenes/logoChris_sisvby.jpg',
		comentario: `<i class='bx bxs-quote-alt-left comillas'></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae. <i class='bx bxs-quote-alt-right comillas'></i>`,
        nombre: 'Christian Rodriguez',
        distrito: 'S.J.L'},
    {   imgTestimonio:'https://res.cloudinary.com/juanjoh/image/upload/v1644943474/vanhueb/imagenes/persona2_tb6xql.jpg' ,
		logoEmpresa:'https://res.cloudinary.com/juanjoh/image/upload/v1645825481/vanhueb/imagenes/logo5-transparente_dcclzc.png',
		comentario: `<i class='bx bxs-quote-alt-left comillas'></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae. <i class='bx bxs-quote-alt-right comillas'></i>`,
        nombre: 'Lusmery H. Manuelo',
        distrito: 'S.M.P'}
    ]

let testimonioArray = Object.entries(testimonios);

const $containerTestimonio = document.querySelector('.container-sliderTestimonio')
const $sliderDiv = document.createElement('DIV')
const $sliderTestBtnRigth = document.createElement('DIV')
const $sliderTestBtnLeft = document.createElement('DIV')

$sliderTestBtnRigth.classList.add('sliderTestimonio__btn')
$sliderTestBtnRigth.classList.add('sliderTestimonio__btn--rigth')
$sliderTestBtnRigth.id='btnTestimonio-right'
$sliderTestBtnRigth.innerHTML=
`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right"
    width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#bbbbbbe1" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="9 6 15 12 9 18" />
</svg>`
$sliderTestBtnLeft.classList.add('sliderTestimonio__btn')
$sliderTestBtnLeft.classList.add('sliderTestimonio__btn--left')
$sliderTestBtnLeft.id='btnTestimonio-left'
$sliderTestBtnLeft.innerHTML=
` <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44"
    height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#bbbbbbe1" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="15 6 9 12 15 18" />
</svg>`
$sliderDiv.classList.add('sliderTestimonio')
$sliderDiv.id='sliderTestimonio'

$containerTestimonio.appendChild($sliderDiv)
$containerTestimonio.appendChild($sliderTestBtnRigth)
$containerTestimonio.appendChild($sliderTestBtnLeft)

testimonioArray.forEach(function(e){
    // console.log(e[1])
    const $sliderSection = document.createElement('DIV')
    const $imgSlider = document.createElement('IMG')
	const $logoEmp = document.createElement('IMG')
    const $sliderContenido = document.createElement('DIV')
    const $psliderComentario = document.createElement('P')
    const $psliderNombre = document.createElement('P')
    const $smallDistrito = document.createElement('SMALL')

    $smallDistrito.textContent=e[1].distrito
    $smallDistrito.classList.add('distrito')
    $psliderNombre.textContent=e[1].nombre
    $psliderNombre.classList.add('nombre')
    $psliderComentario.classList.add('comentario')
    $psliderComentario.innerHTML =e[1].comentario
    $sliderSection.classList.add('sliderTestimonio__section')

	$logoEmp.classList.add('sliderTestimonio__logoEmp')
	$logoEmp.setAttribute('src',e[1].logoEmpresa)
	$logoEmp.setAttribute('Alt','logoEmp')
    $imgSlider.classList.add('sliderTestimonio__img')
    $imgSlider.setAttribute('src',e[1].imgTestimonio)
    $imgSlider.setAttribute('Alt','imagenTestimonio')

	$sliderContenido.classList.add('sliderTestimonio__contenido')
    $sliderContenido.appendChild($psliderComentario)
    $sliderContenido.appendChild($psliderNombre)
    $sliderContenido.appendChild($smallDistrito)
	$sliderSection.appendChild($imgSlider)
    $sliderSection.appendChild($logoEmp)
	$sliderSection.appendChild($sliderContenido)
    $sliderDiv.appendChild($sliderSection)
});

/**======================================
 * -> EVENTO SLIDER TESTIMONIO
 ========================================*/
const $sliderTestimonio = document.querySelector('#sliderTestimonio');
let $sliderSection = document.querySelectorAll('.sliderTestimonio__section');
let $sliderSectionLast = $sliderSection[$sliderSection.length -1];

const $btnLeft = document.querySelector('#btnTestimonio-left');
const $btnRigth = document.querySelector('#btnTestimonio-right');

$sliderTestimonio.insertAdjacentElement('afterbegin',$sliderSectionLast);

function Next(){
    let $sliderSectionFirst = document.querySelectorAll('.sliderTestimonio__section')[0];
    $sliderTestimonio.style.marginLeft = '-200%';
    $sliderTestimonio.style.transition = 'all 0.5s';
    setTimeout(() => {  
        $sliderTestimonio.style.transition = 'none';
        $sliderTestimonio.insertAdjacentElement('beforeend',$sliderSectionFirst);
        $sliderTestimonio.style.marginLeft = '-100%';
    }, 500);
}

$btnRigth.addEventListener('click',function(){
    Next();
})

function Prev(){
    let $sliderSection = document.querySelectorAll('.sliderTestimonio__section');
    let $sliderSectionLast = $sliderSection[$sliderSection.length -1];

    $sliderTestimonio.style.marginLeft = '0';
    $sliderTestimonio.style.transition = 'all 0.5s';
    setTimeout(() => {  
        $sliderTestimonio.style.transition = 'none';
        $sliderTestimonio.insertAdjacentElement('afterbegin',$sliderSectionLast);
        $sliderTestimonio.style.marginLeft = '-100%';
    }, 500);
}

$btnLeft.addEventListener('click',function(){
    Prev();
})

}
/**=======================================================
    *                BOTON DESPLAZA ARRIBA
=========================================================*/
export const btnDesplazamientoArriba = () =>{
	$(document).ready(function(){
		$('.ir-arriba').click(function(){
			$('body,html').animate({
				scrollTop: '0px'
			},300);
		})
		$(window).scroll(function(){
			if($(this).scrollTop() > 0 ){
				$('.ir-arriba').slideDown(300);
			}
			else{
				$('.ir-arriba').slideUp(500);
			}
		})
	});
}
/**=======================================================
    EVENTO DE INICIO PARA ESTILOS ELEMENTOS CON SCROLL
=========================================================*/
export const aosInitation = () =>{
	AOS.init({
		duration:800,
		once:true
	});
}

