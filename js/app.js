"use stric"
/**======================================================= 
 * EVENTO MENÚ 
 * ======================================================= */
const $btnMenu = document.querySelector('#btnMenu'),
 	  $nav = document.querySelector('.navegacion'),
	  $sup = document.querySelector('.top-line'),
	  $center = document.querySelector('.middle-line'),
	  $inf = document.querySelector('.bottom-line'),
	  $btnButton = document.querySelector('.button');  

let contador = 1;
document.addEventListener('DOMContentLoaded', function () {
	$btnMenu.onclick = function () {
		if (contador == 1) {
			$nav.style='left:0%; transition: all .6s'
			$sup.style='margin: 0 auto; transform: translateY(2px) rotate(-45deg)'
			$center.style='margin: 0; width:0; opacity: 0'
			$inf.style= 'margin: 0 auto; transform: translateY(-2px) rotate(45deg)'
			$btnButton.style ='background:#F05454; font-weight:bold'
			contador = 0;
		} else {
			contador = 1;
			CerrarMenResponsive()
		};
	};
})
window.addEventListener('click',function(e){
	// console.log(e.target.className)
	const $navegacion = e.target.className
	if($navegacion === 'navegacion'){
		contador = 1;
		CerrarMenResponsive()
	} 
});
function CerrarMenResponsive(){
	$sup.style = 'margin: 5px auto; transform: translateY(0px) rotate(0deg)';
	$center.style ='margin: 0 auto; width:40%; opacity: 1';
	$inf.style='margin: 5px auto; transform: translateY(0px) rotate(0deg)';
	$btnButton.style ='background:#147efb; font-weight:300';
	$nav.style.left='-100%';
};
/**================================================
 -> CONTROL DE SUB_MENÚ RESPONSIVE
 * ================================================
 */
const $btnSubmenu = document.querySelector('.btn-submenu'),
	  $submen = document.querySelector('.submen'),
	  $icoSubmenu = document.querySelector('#ico-submenu');
esDispositivoMovil = ()=> window.innerWidth <= 991;

$btnSubmenu.addEventListener('click',()=>{
	if(esDispositivoMovil()){
		$submen.classList.toggle('activo')
		$icoSubmenu.classList.toggle('activo')
	}
});

/**==============================================
 * -> LOGOTIPO
 ================================================*/
const $logoContenedor = document.querySelector('.logo'),
      $imgLogotipo = document.querySelector('.logo__imagen'),
      $cambioLogo = matchMedia('(min-width:992px)')
    	
const changeSize = mql =>{
	mql.matches
	? $imgLogotipo.setAttribute('src','img/logo1.jpg')
	: $imgLogotipo.setAttribute('src','img/logo6.jpg')
}
$cambioLogo.addListener(changeSize)
changeSize($cambioLogo);

/**==============================================
 * ->EVENTO BANNER
 ================================================*/
document.addEventListener('DOMContentLoaded', function() {
    let parent = document.querySelector('.vista-dividida'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.manipular'),
        corte = 0,
        delta = 0;
    // Si el padre tiene la clase .skewed, establezca var skewHack.
    if (parent.className.indexOf('corte-inclinado') != -1) {
        corte = 1000;
    }
    parent.addEventListener('mousemove', function(event) {
        // Obtenga valor de 'delta' entre la posición del mouse y el punto central.
        delta = (event.clientX - window.innerWidth / 2) * 0.5;
        //Mueve la manija.
        handle.style.left = event.clientX + delta + 'px';
        // Ajustar el ancho del panel superior.
        topPanel.style.width = event.clientX + corte + delta + 'px';
    });
});

/**==============================================
 * LOGO-TECNOLOGÍAS
 ================================================*/
const logo = document.querySelectorAll('.box-logo');
for(let i = 0; i < logo.length; i++){
	console.log(logo[i].firstElementChild)
	$img = logo[i].firstElementChild
	$img.dataset.imagenId = i;
	$img.classList.add('img-tecnologia')
	$img.onclick = mostrarImagen;
	

}

function mostrarImagen(e){
	const id = parseInt(e.target.dataset.imagenId)
	console.log(id)
}

// const $imgTecno = document.querySelector('.img-tecnologia')
// const $circulo = document.querySelectorAll('.circulo')

/**==============================================
 * AGREGAR MODAL EN EL DOM
 ================================================*/
//añadir un objeto de atributos a un elemento
// const addAttributes = (element,attrObj)=>{
// 	for(let attr in attrObj){
// 		if(attrObj.hasOwnProperty(attr))
// 		element.setAttribute(attr,attrObj[attr])
// 	}
// };
// //crear elementos con atributos e hijos
// const createCustomElement = (element,attributes,children) =>{
// 	let customElement = document.createElement(element);
// 	if(children !== undefined) children.forEach(el => {
// 		if(el.nodeType){
// 			if(el.nodeType === 1 || el.nodeType === 11)
// 			customElement.appendChild(el)
// 		}else{
// 			customElement.innerHTML += el;
// 		}
// 	});
// 	addAttributes(customElement,attributes);
// 	return customElement;
// };

// //imprimir modal
// const printModal = content =>{
// 	//crear contenedor interno
// 	const modalContentEl = createCustomElement('div',{
// 		id: 'ed-modal-content',
// 		class: 'ed-modal-content'
// 	},[content]);
// 	//crear contenedor principal
// 	const modalContainerEl = createCustomElement('div',{
// 		id: 'ed-modal-container',
// 		class : 'ed-modal-container'
// 	},[modalContentEl]);

// 	//imprimir el modal
// 	document.body.appendChild(modalContainerEl)

// 	//remover el modal
// 	const removeModal = () =>document.body.removeChild(modalContainerEl);

// 	modalContainerEl.addEventListener('click',e => {
// 		if(e.target === modalContainerEl)
// 			removeModal();
// 	})
// }
// // printModal(``) -> Muestra modal cuando carga la página

// document.querySelector('#show-modal').addEventListener('click',()=>{
// 	printModal(`<article class="article-container">
// 	<ul class="lista3">
// 		<li class="exitos">Acción Cívica (Resolución N°003 del 29JUN2002).</li>
// 		<li class="exitos">Esfuerzo Profesional (Resolución N°068 del 21JUN2012).</li>
// 		<li class="exitos">Esfuerzo Profesional (Resolución N°029 del 29JUL2015).</li>
// 		<li class="exitos">Condecoración en el grado de "CABALLERO” Acta N°27-2018-COM/PNP.</li>
// 	</ul>
// </article>`)
// })


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



// const boton = document.querySelector('#boton')
// boton.addEventListener('click',()=>{
// 	Notification.requestPermission()
// 		.then(resultado => console.log(`El resultado es: ${resultado}`))
// })
// if(Notification.permission == 'granted'){
// 	new Notification('Esta es una notificación',{
// 		icon: 'img/logo1.jpg',
// 		body: 'Mi portafolio', 
// 	})
// }