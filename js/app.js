"use stric"
/**======================================================= 
 * EVENTO MENÚ 
 * ======================================================= */
export const menu = ()=>{
	const $btnMenu = document.querySelector('#btnMenu'),
 		  $nav = document.querySelector('.navegacion'),
		  $sup = document.querySelector('.top-line'),
		  $center = document.querySelector('.middle-line'),
		  $inf = document.querySelector('.bottom-line'),
		  $btnButton = document.querySelector('.button')  

	let contador = 1;

	$btnMenu.onclick = function () {
		console.log('abrio-boton1')
		if (contador == 1) {
			$nav.style='left:0%; transition: all 0.5s';
			$sup.style='margin: 0 auto; transform: translateY(2px) rotate(-45deg); background: #626262; transition: all 0.6s';
			$center.style='margin: 0; width:0; opacity: 0';
			$inf.style= 'margin: 0 auto; transform: translateY(-2px) rotate(45deg); background: #626262; transition: all 0.6s';
			$btnButton.style ='z-index:5';
			contador = 0;
		} else {
			contador = 1;
			CerrarMenResponsive()
			console.log('cerro-boton1')
		};
	};

	// window.addEventListener('click',function(e){
	// 	const $navegacion = e.target.className
	// 	if($navegacion === 'navegacion'){
	// 		contador = 1;
	// 		CerrarMenResponsive()
	// 	} 
	// });

	function CerrarMenResponsive(){
		$sup.style = 'margin: 5px auto; transform: translateY(0px) rotate(0deg)';
		$center.style ='margin: 0 auto; width:40%; opacity: 1';
		$inf.style='margin: 5px auto; transform: translateY(0px) rotate(0deg)';
		// $btnButton.style ='background:#147efb; font-weight:300';
		$nav.style.left='-100%';
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
	const btnButton = document.querySelector('.button');
	const navigation = document.querySelector('.navegacion');

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
					btnButton.style.zIndex="5";
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
	}
	function openMenu(){
		navigation.style.left='0%';
		$superior.style='margin: 0 auto; transform: translateY(2px) rotate(-45deg); background: #626262; transition: all 0.6s';
		$center.style='margin: 0; width:0; opacity: 0';
		$inferior.style= 'margin: 0 auto; transform: translateY(-2px) rotate(45deg); background: #626262; transition: all 0.6s';
		btnButton.style.background="unset"
	}
	
};

/**==============================================
 * -> EVENTO SPLIT BANNER
 ================================================*/
export const splitBanner = () =>{
	Split(['#img-one', '#img-two'],{
		// gutterSize:5,
		minSize:[10,10]
	});
};

/**==============================================
 * -> EVENTO LOGOTIPO
 ================================================*/
export const logotipo = () =>{
	const $imgLogotipo = document.querySelector('.logo__imagen'),
    	  $cambioLogo = matchMedia('(min-width:992px)')
    	
	const changeSize = mql =>{
		mql.matches
		? $imgLogotipo.setAttribute('src','img/logo1.jpg')
		: $imgLogotipo.setAttribute('src','img/logo6.jpg')
	}
	$cambioLogo.addListener(changeSize)
	changeSize($cambioLogo);
};

/*============================================
-> EVENTO BOTÓN 'CONÓCEME'
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
export const fijarBoton = () =>{
	const btn = document.querySelector('.btn-split');
		//Registrar el Intersection Observer
		const observer = new IntersectionObserver(function(entries){
		if(entries[0].isIntersecting){
			// btn.classList.remove('oculto');
			btn.style.opacity='0';
			btn.style.zIndex='-1';
		}else{
			// btn.classList.add('oculto');
			btn.style.opacity='1';
			btn.style.zIndex ='0';
		}
		});
		//Elemento a observar
		observer.observe(document.querySelector('main'));
};


export const headerFixed = () =>{
	function navegacionFija(){
	const headerFijo = document.querySelector('#header');
	// Registrar el Intersection Observer
	const observer = new IntersectionObserver( function(entries) {
		if(entries[0].isIntersecting) {
			// console.log(headerFijo)
			headerFijo.classList.remove('fijo')
		}else {
			// console.log(headerFijo)
			headerFijo.classList.add('fijo')
		}
	});
	// Elemento a observar
	observer.observe(document.querySelector('#mostrar'));
	};
	navegacionFija();
}

/**==============================================
-> LOGO-TECNOLOGÍAS
================================================*/
export const logo = ()=>{
	const $logo = document.querySelectorAll('.box-imagen');
	$logo.forEach(element => {
		console.log(element)
		setInterval(() => {
		element.style="visibility: visible;transition:all 2s; width:100%"
	}, 2000);	
	});
}

export const cambioColor = ()=>{
	$(".bg-hover").hover(function(){
		$(this).css("background","var(--bg-azul)");
		$(this).children("h2").css("color","white");
		$(this).children("div").children("p").css("color","white");
	},function(){
		$(this).css("background","white");
		$(this).children("h2").css("color","var(--colorLetra)");
		$(this).children("div").children("p").css("color","var(--colorLetra)");
	})
};


/**==============================================
 * EVENTO MÁQUINA DE ESCRIBIR
 ================================================*/
// const ACTION_ADD = 'ACTION_ADD';
// const ACTION_REPLACE = 'ACTION_REPLACE';

// class AsyncWritter {
//     textContentArr;
//     numTicks = 3;
//     isInfiniteLoop = true;

//     constructor(selector, messages){
//     let element = document.querySelector(selector);
//     this.textContentArr = messages;
//     Rx.Observable.concat(...this.textContentArr.map( (x) => this.write(x).finally( ()=> element.textContent = '')))
// 	.repeat( this.isInfiniteLoop ? null : 1)
// 	.subscribe((val) => { 
// 			switch(val.action){
//         	case ACTION_ADD : element.textContent += val.value; break;
//         	case ACTION_REPLACE : element.textContent = element.textContent.slice(0, element.textContent.length - 1); break;
//         }
//     });
//     }
//     write(text){
//       return Rx.Observable
//         .concat(...Array.from(text).map( (val) =>{
//               	let {action = ACTION_ADD, value = val} = val;
//               	let obs = (action === ACTION_ADD ? this.add(value) : this.replace() )
//               	return Rx.Observable
//                 .concat( obs, this.add('|'), this.replace() )
//             }), 
//           	this.tick().repeat(this.numTicks),
//           	this.replaceWithTick().repeat(text.length)
//         )
//     }
//     randomDelay(bottom, top) {
//       return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
//     }
//     tick(start = 1200, end = 1200){
//       return Rx.Observable.concat(
//         this.add('|'),
//         this.replace(start, end)
//       )
//     }
//     add(value, start = 10, end = 100){
//       return Rx.Observable
//         .of({ action : ACTION_ADD, value })
//         .delay( this.randomDelay(start, end) );
//     }
//     replace(start = 10, end = 100){
//       return Rx.Observable
//         .of({ action : ACTION_REPLACE })
//         .delay( this.randomDelay(start, end) );
//     }
//     replaceWithTick(){
//       return Rx.Observable.concat(
//         this.replace(), this.tick(10, 100)
//       )
//     }
// }
// let messages = ['Innovadores','Vanguardistas','Creativos','Observadores'
//      //   ...Array.from('Hola que'),
//     //   {action : 'ACTION_REPLACE', value : 1},
//     //   'é',
//     //   ...Array.from(' tal?')
//     // ]
//   			];
// new AsyncWritter('small', messages);



/*===================================
-> CREANDO TESTIMONIOS:@Christraining
=====================================*/

export const contenedorTestimonio = () =>{

const testimonios=[
    {   imgTestimonio:'img/persona1.jpg' ,
        comentario: `<i class='bx bxs-quote-alt-left comillas'></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae. <i class='bx bxs-quote-alt-right comillas'></i>`,
        nombre: 'Vania H.F.',
        distrito: 'Los Olivos'},
    {   imgTestimonio:'img/persona2.jpg' ,
        comentario: `<i class='bx bxs-quote-alt-left comillas'></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae. <i class='bx bxs-quote-alt-right comillas'></i>`,
        nombre: 'André H.F.',
        distrito: 'Los Olivos'}
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
    $imgSlider.classList.add('sliderTestimonio__img')
    $imgSlider.setAttribute('src',e[1].imgTestimonio)
    $imgSlider.setAttribute('Alt','imagenTestimonio')
    $sliderContenido.classList.add('sliderTestimonio__contenido')
      
    $sliderContenido.appendChild($psliderComentario)
    $sliderContenido.appendChild($psliderNombre)
    $sliderContenido.appendChild($smallDistrito)
    $sliderSection.appendChild($imgSlider)
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
