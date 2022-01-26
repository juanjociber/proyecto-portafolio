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
		if (contador == 1) {
			$nav.style='left:0%; transition: all .6s'
			$sup.style='margin: 0 auto; transform: translateY(2px) rotate(-45deg)'
			$center.style='margin: 0; width:0; opacity: 0'
			$inf.style= 'margin: 0 auto; transform: translateY(-2px) rotate(45deg)'
			$btnButton.style ='z-index:100'
			contador = 0;
		} else {
			contador = 1;
			CerrarMenResponsive()
		};
	};

	window.addEventListener('click',function(e){
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
			console.error("desactivado");

			let conteo = 1;
			btnMenu.onclick = function(){
				if(conteo == 1){
					openMenu();
					btnButton.style.zIndex="3"
					console.info('activado');
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
		$superior.style='margin: 0 auto; transform: translateY(2px) rotate(-45deg)';
		$center.style='margin: 0; width:0; opacity: 0';
		$inferior.style= 'margin: 0 auto; transform: translateY(-2px) rotate(45deg)';
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


