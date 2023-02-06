const $menu =  document.querySelector('.menu p');
const $items = document.querySelector('.items');
const $dialog = document.querySelector('#dialog');
const $certif = document.querySelector('#modalCer');
const $titulo = document.querySelector('#titulo');

function toogle(){
	switch($menu.innerHTML){
	case 'Menu':
		$menu.innerHTML = 'X';
		$menu.style.textAlign= 'center';
		$menu.style.color = '#fff';
		$items.classList.remove('hidden');
		break;
	case 'X':
		$items.classList.add('hidden');
		$menu.innerHTML = 'Menu';
		break;

	}
}

let options = document.querySelectorAll('.option');
function hiddenOption(e){
	console.log(this)
	$items.classList.add('hidden');
	$menu.innerHTML = 'Menu';
}

function cerrar(){
	$dialog.close();
}

function modal(event){
		switch(event.id){
		case 'html':
			$titulo.innerHTML = '';
			$certif.style.display ='block';
			$certif.src = './imagenes/certificado_html.png';
			$dialog.showModal();
			break;
		case 'css':
			$titulo.innerHTML = '';
			$certif.style.display ='block';
			$certif.src = './imagenes/certificado_css.png';
			$dialog.showModal();
			break;
		case 'js':
			$titulo.innerHTML = '';
			$certif.style.display ='block';
			$certif.src = './imagenes/certificado_js.png';
			$dialog.showModal();
			break;
		case 'jquery':
			$titulo.innerHTML = '';
			$certif.style.display ='block';
			$certif.src = './imagenes/certificado_jquery.png';
			$dialog.showModal();
			break;
		default:
			console.log(event.id)
			$titulo.innerHTML = 'Sin certificado por el momento.';
			$certif.style.display = 'none';
			$dialog.showModal();
			break; 

	}
	
	
}


$menu.onclick = toogle;
options.onclick = hiddenOption;
